import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { pumpLubricationSystemLinks } from "./constants.js";
dotenv.config();
// Подключение к MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
async function setupDatabase() {
    const connection = await pool.getConnection();
    try {
        console.log("Создаём таблицы...");
        // Создание таблицы products
        await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY,
        src VARCHAR(255),
        path VARCHAR(255),
        width INT,
        name VARCHAR(255),
        drawing INT
      )
    `);
        // Создание таблицы parts
        await connection.query(`
      CREATE TABLE IF NOT EXISTS parts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        product_id INT,
        position INT,
        name VARCHAR(255),
        designation VARCHAR(255) NULL,
        description TEXT NULL,
        quantity INT NULL,
        drawing INT NULL,
        positioning_top INT NULL,
        positioning_left INT NULL,
        positioning_top2 INT NULL,
        positioning_left2 INT NULL,
        positioning_top3 INT NULL,
        positioning_left3 INT NULL,
        positioning_top4 INT NULL,
        positioning_left4 INT NULL,
        positioning_top5 INT NULL,
        positioning_left5 INT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
      )
    `);
        console.log("Добавляем данные...");
        // Вставка в products
        await connection.query(
          `INSERT INTO products (id, src, path, width, name, drawing) VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE src=VALUES(src), path=VALUES(path), width=VALUES(width), name=VALUES(name), drawing=VALUES(drawing)`,
          [
            pumpLubricationSystemLinks.id,
            pumpLubricationSystemLinks.src,
            pumpLubricationSystemLinks.path,
            pumpLubricationSystemLinks.width,
            pumpLubricationSystemLinks.name,
            pumpLubricationSystemLinks.drawing || null,
          ]
        );
        // Вставка деталей (parts)
        for (const part of pumpLubricationSystemLinks.parts) {
          await connection.query(
            `INSERT INTO parts
        (product_id, position, name, designation, description, quantity, drawing, positioning_top, positioning_left, positioning_top2, positioning_left2, positioning_top3, positioning_left3, positioning_top4, positioning_left4, positioning_top5, positioning_left5)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE name=VALUES(name), designation=VALUES(designation), description=VALUES(description),
                                quantity=VALUES(quantity), drawing=VALUES(drawing), positioning_top=VALUES(positioning_top),
                                positioning_left=VALUES(positioning_left), positioning_top2=VALUES(positioning_top2),
                                positioning_left2=VALUES(positioning_left2), positioning_top3=VALUES(positioning_top3),
                                positioning_left3=VALUES(positioning_left3), positioning_top4=VALUES(positioning_top4),
                                positioning_left4=VALUES(positioning_left4), positioning_top5=VALUES(positioning_top5),
                                positioning_left5=VALUES(positioning_left5)`,
            [
              pumpLubricationSystemLinks.id,
              part.position,
              part.name,
              part.designation || null,
              part.description || null,
              part.quantity || null,
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
            ]
          );
        }
        console.log("Данные успешно загружены!");
    }
    catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
    finally {
        connection.release();
    }
}
setupDatabase();
