import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import morgan from "morgan";

const app = express();
const PORT = 5000;

// Настроим middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Логирование запросов

console.log("🔄 Подключение к MySQL...");

pool.getConnection()
  .then((conn) => {
    console.log("✅ Подключение к MySQL успешно!");
    conn.release();
    startServer(); // Запускаем сервер только после успешного подключения
  })
  .catch((err) => {
    console.error("❌ Ошибка подключения к MySQL:", err);
    process.exit(1); // Останавливаем процесс, если БД недоступна
  });

// Функция для запуска сервера
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
      const [rows] = await pool.query("SELECT * FROM parts WHERE product_id = ?", [id]);
      res.json(rows);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Ошибка запроса:", error.message);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });

  // 🔹 Получение названий схем и их пути
  app.get("/api/schemes", async (_, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM schemes");
      res.json(rows);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Ошибка запроса:", error.message);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  });

  app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  });
}
