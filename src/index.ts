import pool from "./config/db.js"; // Импортируем пул из db.ts

async function testConnection() {
  const client = await pool.connect(); // Используем connect() вместо getConnection()
  try {
    console.log("✅ Успешное подключение к базе данных!");

    // Выполняем тестовый запрос
    const { rows } = await client.query("SELECT NOW() as current_time");
    console.log("Текущее время в базе данных:", rows[0].current_time);
  } catch (error) {
    console.error("❌ Ошибка подключения к базе данных:", error);
  } finally {
    client.release(); // Освобождаем соединение
  }
}

testConnection();
