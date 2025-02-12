import pool from "../config/db.js";

async function migrate2() {
  const connection = await pool.getConnection();
  try {
    console.log("🚀 Запуск миграции...");

    // Создание таблицы schemes
    await connection.query(`
      CREATE TABLE IF NOT EXISTS schemes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        path VARCHAR(255) NOT NULL,
        data JSON NOT NULL
      );
    `);

    console.log("✅ Таблица schemes создана (если не существовала)");
  } catch (error) {
    console.error("❌ Ошибка миграции:", error);
  } finally {
    connection.release();
  }
}

migrate2();
