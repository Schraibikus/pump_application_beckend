import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import pool from "./config/db.js";
import morgan from "morgan";
import { ResultSetHeader } from "mysql2";
import mysql from "mysql2/promise";
import { Order } from "./temp/types.js";
import { convertToCamelCase } from "./utils/caseConverter.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Подключение к MySQL и запуск сервера
pool
  .getConnection()
  .then((conn) => {
    console.log("✅ Подключение к MySQL успешно!");
    conn.release();
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
      const [rows] = await pool.query("SELECT * FROM products");
      res.json(rows);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Ошибка запроса:", error.message);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });

  // 🔹 Получение деталей продукта по его ID
  app.get("/api/products/:id/parts", async (req, res) => {
    const { id } = req.params;
    try {
      // Запрос для получения основных свойств частей и их альтернативных наборов
      const [rows] = await pool.query<mysql.RowDataPacket[]>(
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
        WHERE p.product_id = ?
        `,
        [id]
      );

      // Группируем данные по частям и добавляем альтернативные наборы свойств
      const groupedParts = (rows as mysql.RowDataPacket[]).reduce(
        (acc: { [key: number]: any }, row) => {
          if (!acc[row.part_id]) {
            // Создаем объект части, если он еще не существует
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
              alternativeSets: {}, // Инициализируем объект для альтернативных наборов
            };
          }

          // Если есть альтернативный набор, добавляем его в часть
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
        },
        {}
      );

      // Преобразуем объект в массив
      const result = Object.values(groupedParts);

      // Преобразуем ключи в camelCase (если нужно)
      const camelCaseResult = convertToCamelCase(result);

      res.json(camelCaseResult); // Отправляем результат клиенту
    } catch (error: any) {
      console.error("Ошибка запроса:", error.message);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });

  // 🔹 Создание заказа
  app.post("/api/orders", async (req: Request, res: Response) => {
    const { parts } = req.body as Order;

    try {
      await pool.query("START TRANSACTION");

      // Создаем заказ
      const [orderResult] = await pool.query<ResultSetHeader>(
        "INSERT INTO orders (created_at) VALUES (NOW())"
      );
      const orderId = orderResult.insertId;

      // Оптимизированная вставка деталей
      const partValues = parts.map((part) => [
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
      ]);

      await pool.query(
        `INSERT INTO order_parts (
        order_id, part_id, parent_product_id, product_name, product_drawing,
        position, name, description, designation, quantity, drawing,
        positioningTop, positioningLeft,
        positioningTop2, positioningLeft2,
        positioningTop3, positioningLeft3,
        positioningTop4, positioningLeft4,
        positioningTop5, positioningLeft5
      ) VALUES ?`,
        [partValues]
      );

      await pool.query("COMMIT");

      res.status(201).json({
        orderId,
        createdAt: new Date().toISOString(),
        message: "Заказ успешно создан",
      });
    } catch (error) {
      await pool.query("ROLLBACK");
      console.error("Ошибка создания заказа:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });

  // 🔹 Удаление заказа
  app.delete("/api/orders/:id", async (req: any, res: any) => {
    const { id } = req.params;

    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ message: "Invalid order ID" });
    }

    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      // Удаляем связанные части заказа
      await connection.query("DELETE FROM order_parts WHERE order_id = ?", [
        id,
      ]);

      // Удаляем сам заказ
      const [result] = await connection.query<ResultSetHeader>(
        "DELETE FROM orders WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        await connection.rollback();
        return res.status(404).json({ message: "Order not found" });
      }

      await connection.commit();
      res.sendStatus(204); // Успешное удаление, нет содержимого для возврата
    } catch (error: any) {
      await connection.rollback();
      console.error("Ошибка удаления заказа:", error.message);
      res.status(500).json({ error: "Ошибка сервера" });
    } finally {
      connection.release(); // Всегда освобождаем соединение
    }
  });

  // 🔹 Получение всех заказов
  app.get("/api/orders", async (_: Request, res: Response) => {
    try {
      const [orders]: any = await pool.query("SELECT * FROM orders");

      for (const order of orders) {
        const [parts]: any = await pool.query(
          "SELECT * FROM order_parts WHERE order_id = ?",
          [order.id]
        );
        order.parts = parts;
      }
      // console.log("Ответ сервера:", orders);
      res.json(convertToCamelCase(orders)); // ✅ Конвертируем перед отправкой
    } catch (error) {
      console.error("Ошибка при получении заказов:", error);
      res.status(500).json({ message: "Ошибка при получении заказов" });
    }
  });

  app.listen(PORT, () => {
    // console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
    console.log(`🚀 Сервер запущен на ${PORT}`);
  });
}
