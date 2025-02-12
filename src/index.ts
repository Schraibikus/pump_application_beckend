import pool from "./config/db.js";

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Успешное подключение к базе данных!");
    connection.release();
  } catch (error) {
    console.error("Ошибка подключения к базе данных:", error);
  }
}

testConnection();
