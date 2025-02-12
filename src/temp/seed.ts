import pool from "../config/db.js";
import { schemes } from "./constants.js"; // Импортируем твои данные

async function seed() {
  const connection = await pool.getConnection();
  try {
    console.log("🌱 Начало вставки данных...");

    for (const scheme of schemes) {
      await connection.query(
        `INSERT INTO schemes (path, data) VALUES (?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)`,
        [scheme.path, JSON.stringify(scheme.data)]
      );
    }

    console.log("✅ Данные успешно добавлены!");
  } catch (error) {
    console.error("❌ Ошибка вставки данных:", error);
  } finally {
    connection.release();
  }
}

seed();
