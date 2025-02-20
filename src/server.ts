import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import pool from "./config/db.js";
import morgan from "morgan";
import { ResultSetHeader } from "mysql2";
import { Order } from "./temp/types.js";
import { convertToCamelCase } from "./utils/caseConverter.js";

const app = express();
const PORT = 5000;

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
      const [rows] = await pool.query(
        "SELECT * FROM parts WHERE product_id = ?",
        [id]
      );

      res.json(convertToCamelCase(rows)); // ✅ Преобразуем данные перед отправкой
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
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  });
}
