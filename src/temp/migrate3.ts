import mysql from "mysql2/promise";
import dotenv from "dotenv";
import {
  threePlungerPumpLinks,
  connectingRodLinks,
  tractionUnitLinks,
  waterworksLinks,
  collectorLinks,
  valveLinks,
  valveTwoLinks,
  plungerSealLinks,
  sealPackageLinks,
  housingSealLinks,
  installingTheSensorIndicatorLinks,
  installingTheSensorIndicatorTwoLinks,
  plungerLubricationSystemLinks,
  pumpLubricationSystemLinks,
} from "./constants.js";

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

    // 🔹 Таблица продуктов
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

    // 🔹 Таблица деталей (частей)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS parts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        product_id INT NOT NULL,
        position INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        designation VARCHAR(255) NULL,
        description TEXT NULL,
        quantity INT NOT NULL DEFAULT 1,
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

    // 🔹 Таблица заказов
    await connection.query(`
      CREATE TABLE IF NOT EXISTS orders (
        order_id INT PRIMARY KEY AUTO_INCREMENT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 🔹 Таблица связи заказов и деталей
    await connection.query(`
      CREATE TABLE IF NOT EXISTS order_parts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        order_id INT NOT NULL,
        part_id INT NOT NULL,
        quantity INT NOT NULL DEFAULT 1,
        product_id INT NOT NULL, 
        FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
        FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
      )
    `);

    console.log("Добавляем данные...");

    // 🔹 Массив всех продуктов
    const products = [
      threePlungerPumpLinks,
      connectingRodLinks,
      tractionUnitLinks,
      waterworksLinks,
      collectorLinks,
      valveLinks,
      valveTwoLinks,
      plungerSealLinks,
      sealPackageLinks,
      housingSealLinks,
      installingTheSensorIndicatorLinks,
      installingTheSensorIndicatorTwoLinks,
      plungerLubricationSystemLinks,
      pumpLubricationSystemLinks,
    ];

    // 🔹 Вставка всех products
    const productValues = products
      .map(
        (product) =>
          `(${product.id}, '${product.src}', '${product.path}', ${
            product.width
          }, '${product.name}', ${product.drawing ?? "NULL"})`
      )
      .join(",");

    if (productValues.length > 0) {
      const productQuery = `
        INSERT INTO products (id, src, path, width, name, drawing) 
        VALUES ${productValues}
        ON DUPLICATE KEY UPDATE 
          src = VALUES(src), 
          path = VALUES(path), 
          width = VALUES(width), 
          name = VALUES(name), 
          drawing = VALUES(drawing)
      `;

      await connection.query(productQuery);
    }

    // 🔹 Вставка всех parts
    const parts = products.flatMap((product) =>
      product.parts.map((part) => ({
        product_id: product.id,
        ...part,
      }))
    );

    if (parts.length > 0) {
      const partValues = parts
        .map(
          (part) =>
            `(${part.product_id}, ${part.position}, '${part.name}', ${
              part.designation ? `'${part.designation}'` : "NULL"
            }, ${part.quantity ?? "NULL"}, ${part.drawing ?? "NULL"}, 
            ${part.positioning_top ?? "NULL"}, ${
              part.positioning_left ?? "NULL"
            },
            ${part.positioning_top2 ?? "NULL"}, ${
              part.positioning_left2 ?? "NULL"
            },
            ${part.positioning_top3 ?? "NULL"}, ${
              part.positioning_left3 ?? "NULL"
            },
            ${part.positioning_top4 ?? "NULL"}, ${
              part.positioning_left4 ?? "NULL"
            },
            ${part.positioning_top5 ?? "NULL"}, ${
              part.positioning_left5 ?? "NULL"
            })`
        )
        .join(",");

      const partQuery = `
        INSERT INTO parts 
          (product_id, position, name, designation, quantity, drawing, 
          positioning_top, positioning_left, positioning_top2, positioning_left2, 
          positioning_top3, positioning_left3, positioning_top4, positioning_left4, 
          positioning_top5, positioning_left5) 
        VALUES ${partValues}
        ON DUPLICATE KEY UPDATE 
          name = VALUES(name), 
          designation = VALUES(designation), 
          quantity = VALUES(quantity), 
          drawing = VALUES(drawing), 
          positioning_top = VALUES(positioning_top), 
          positioning_left = VALUES(positioning_left), 
          positioning_top2 = VALUES(positioning_top2), 
          positioning_left2 = VALUES(positioning_left2), 
          positioning_top3 = VALUES(positioning_top3), 
          positioning_left3 = VALUES(positioning_left3), 
          positioning_top4 = VALUES(positioning_top4), 
          positioning_left4 = VALUES(positioning_left4), 
          positioning_top5 = VALUES(positioning_top5), 
          positioning_left5 = VALUES(positioning_left5)
      `;

      await connection.query(partQuery);
    }

    console.log("Данные успешно загружены!");
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  } finally {
    connection.release();
  }
}

setupDatabase();
