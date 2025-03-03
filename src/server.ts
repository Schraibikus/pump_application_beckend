import express, { Request, Response } from "express";
import cors from "cors";
import format from "pg-format";
import morgan from "morgan";
import pool from "./config/db.js"; // Импортируем пул из db.ts
import { Order } from "./temp/types.js";
import { convertToCamelCase } from "./utils/caseConverter.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Подключение к PostgreSQL и запуск сервера
pool
  .connect()
  .then((client) => {
    console.log("✅ Подключение к PostgreSQL успешно!");
    client.release();
    startServer();
  })
  .catch((err) => {
    console.error("❌ Ошибка подключения:", err);
    process.exit(1);
  });

function startServer() {
  // 🔹 Получение всех продуктов
  app.get("/api/products", async (_, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM products");
      res.json(rows);
    } catch (error: any) {
      console.error("Ошибка запроса:", error.message);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });

  // 🔹 Получение деталей продукта по его ID
  app.get("/api/products/:id/parts", async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await pool.query(
        `
        SELECT 
          p.id AS part_id,
          p.product_id,
          p.position,
          p.name,
          p.description,
          p.designation,
          p.quantity,
          p.drawing,
          p.positioning_top,
          p.positioning_left,
          p.positioning_top2,
          p.positioning_left2,
          p.positioning_top3,
          p.positioning_left3,
          p.positioning_top4,
          p.positioning_left4,
          p.positioning_top5,
          p.positioning_left5,
          pas.set_name,
          pas.position AS alt_position,
          pas.name AS alt_name,
          pas.description AS alt_description,
          pas.designation AS alt_designation,
          pas.quantity AS alt_quantity,
          pas.drawing AS alt_drawing
        FROM parts p
        LEFT JOIN part_alternative_sets pas ON p.id = pas.part_id
        WHERE p.product_id = $1
        `,
        [id]
      );

      // Группируем данные по частям и добавляем альтернативные наборы свойств
      const groupedParts = rows.reduce((acc: { [key: number]: any }, row) => {
        if (!acc[row.part_id]) {
          acc[row.part_id] = {
            id: row.part_id,
            productId: row.product_id,
            position: row.position,
            name: row.name,
            description: row.description,
            designation: row.designation,
            quantity: row.quantity,
            drawing: row.drawing,
            positioningTop: row.positioning_top,
            positioningLeft: row.positioning_left,
            positioningTop2: row.positioning_top2,
            positioningLeft2: row.positioning_left2,
            positioningTop3: row.positioning_top3,
            positioningLeft3: row.positioning_left3,
            positioningTop4: row.positioning_top4,
            positioningLeft4: row.positioning_left4,
            positioningTop5: row.positioning_top5,
            positioningLeft5: row.positioning_left5,
            selectedSet: row.selected_set,
            alternativeSets: {},
          };
        }

        if (row.set_name) {
          acc[row.part_id].alternativeSets[row.set_name] = {
            position: row.alt_position,
            name: row.alt_name,
            description: row.alt_description,
            designation: row.alt_designation,
            quantity: row.alt_quantity,
            drawing: row.alt_drawing,
          };
        }

        return acc;
      }, {});

      const result = Object.values(groupedParts);
      const camelCaseResult = convertToCamelCase(result);

      res.json(camelCaseResult);
    } catch (error: any) {
      console.error("Ошибка запроса:", error.message);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });

  // 🔹 Создание заказа
  app.post("/api/orders", async (req: Request, res: Response) => {
    const { parts } = req.body as Order;
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      // Создаем заказ
      const { rows } = await client.query<{ id: number }>(
        `INSERT INTO orders (created_at) VALUES (NOW()) RETURNING id`
      );
      const orderId = rows[0].id;

      // Формируем данные для вставки
      const rowsData = parts.map((part) => [
        orderId,
        part.id,
        part.parentProductId,
        part.productName,
        part.productDrawing || null,
        part.position,
        part.name,
        part.description || null,
        part.designation || null,
        part.quantity,
        part.drawing || null,
        part.positioningTop ?? null,
        part.positioningLeft ?? null,
        part.positioningTop2 ?? null,
        part.positioningLeft2 ?? null,
        part.positioningTop3 ?? null,
        part.positioningLeft3 ?? null,
        part.positioningTop4 ?? null,
        part.positioningLeft4 ?? null,
        part.positioningTop5 ?? null,
        part.positioningLeft5 ?? null,
        part.selectedSet || null,
      ]);

      // Форматируем запрос с помощью pg-format
      const query = format(
        `INSERT INTO order_parts (
        order_id, part_id, parent_product_id, product_name, product_drawing,
        position, name, description, designation, quantity, drawing,
        positioning_top, positioning_left,
        positioning_top2, positioning_left2,
        positioning_top3, positioning_left3,
        positioning_top4, positioning_left4,
        positioning_top5, positioning_left5,
        selected_set
      ) VALUES %L`,
        rowsData
      );

      await client.query(query);
      await client.query("COMMIT");

      res.status(201).json({
        orderId,
        createdAt: new Date().toISOString(),
        message: "Заказ успешно создан",
      });
    } catch (error) {
      await client.query("ROLLBACK");
      console.error("Ошибка создания заказа:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    } finally {
      client.release();
    }
  });

  // 🔹 Удаление заказа
  app.delete(
    "/api/orders/:id",
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;

      if (!Number.isInteger(Number(id))) {
        res.status(400).json({ message: "Invalid order ID" });
        return; // Явно завершаем выполнение функции
      }

      const client = await pool.connect();

      try {
        await client.query("BEGIN");

        // Удаляем связанные части заказа
        await client.query("DELETE FROM order_parts WHERE order_id = $1", [id]);

        // Удаляем сам заказ
        const { rowCount } = await client.query(
          "DELETE FROM orders WHERE id = $1",
          [id]
        );

        if (rowCount === 0) {
          await client.query("ROLLBACK");
          res.status(404).json({ message: "Order not found" });
          return; // Явно завершаем выполнение функции
        }

        await client.query("COMMIT");
        res.sendStatus(204); // Успешное удаление, нет содержимого для возврата
      } catch (error: any) {
        await client.query("ROLLBACK");
        console.error("Ошибка удаления заказа:", error.message);
        res.status(500).json({ error: "Ошибка сервера" });
      } finally {
        client.release(); // Всегда освобождаем соединение
      }
    }
  );

  // 🔹 Получение всех заказов
  app.get("/api/orders", async (_: Request, res: Response) => {
    try {
      const { rows: orders } = await pool.query("SELECT * FROM orders");

      for (const order of orders) {
        const { rows: parts } = await pool.query(
          "SELECT * FROM order_parts WHERE order_id = $1",
          [order.id]
        );
        order.parts = parts || [];
      }

      const camelCaseOrders = convertToCamelCase(orders);
      res.json(camelCaseOrders);
    } catch (error) {
      console.error("Ошибка при получении заказов:", error);
      res.status(500).json({ message: "Ошибка при получении заказов" });
    }
  });

  app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на ${PORT}`);
  });
}
