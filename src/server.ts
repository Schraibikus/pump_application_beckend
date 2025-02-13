import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import pool from "./config/db.js";
import morgan from "morgan";
import { ResultSetHeader } from "mysql2";
import { Order } from "./temp/types.js";

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
      res.json(rows);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        part.positioning_top ?? null,
        part.positioning_left ?? null,
        part.positioning_top2 ?? null,
        part.positioning_left2 ?? null,
        part.positioning_top3 ?? null,
        part.positioning_left3 ?? null,
        part.positioning_top4 ?? null,
        part.positioning_left4 ?? null,
        part.positioning_top5 ?? null,
        part.positioning_left5 ?? null,
      ]);

      await pool.query(
        `INSERT INTO order_parts (
        order_id, part_id, parent_product_id, product_name, product_drawing,
        position, name, description, designation, quantity, drawing,
        positioning_top, positioning_left,
        positioning_top2, positioning_left2,
        positioning_top3, positioning_left3,
        positioning_top4, positioning_left4,
        positioning_top5, positioning_left5
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

      res.json(orders);
    } catch (error) {
      console.error("Ошибка при получении заказов:", error);
      res.status(500).json({ message: "Ошибка при получении заказов" });
    }
  });

  app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  });
}
