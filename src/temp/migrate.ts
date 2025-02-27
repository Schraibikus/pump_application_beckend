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
  planetaryCylindricalGearboxLinks,
} from "./constants.js";

dotenv.config();

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

    // Создание таблиц (остаётся без изменений)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        src VARCHAR(255),
        path VARCHAR(255),
        width INT,
        name VARCHAR(255),
        drawing INT NULL,
        head INT NOT NULL
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS parts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        product_id INT NOT NULL,
        position INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT NULL,
        designation VARCHAR(255) NULL,
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

    await connection.query(`
      CREATE TABLE IF NOT EXISTS part_alternative_sets (
        id INT PRIMARY KEY AUTO_INCREMENT,
        part_id INT NOT NULL,
        set_name VARCHAR(255) NOT NULL,
        position INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT NULL,
        designation VARCHAR(255) NULL,
        quantity INT NOT NULL,
        drawing INT NULL,
        FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE
      )
    `);

    // ... остальные таблицы ...

    console.log("Добавляем данные...");

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
      planetaryCylindricalGearboxLinks,
    ];

    // Вставка изделий (products)
    const productValues = products
      .map(
        (product) =>
          `(${product.id}, '${product.src}', '${product.path}', ${
            product.width
          }, '${product.name}', ${product.drawing ?? "NULL"}, ${product.head})`
      )
      .join(",");

    if (productValues.length > 0) {
      const productQuery = `
        INSERT INTO products (id, src, path, width, name, drawing, head) 
        VALUES ${productValues}
        ON DUPLICATE KEY UPDATE 
          src = VALUES(src), 
          path = VALUES(path), 
          width = VALUES(width), 
          name = VALUES(name), 
          drawing = VALUES(drawing),
          head = VALUES(head)
      `;
      await connection.query(productQuery);
    }

    // Вставка частей (parts) и альтернативных наборов (part_alternative_sets)
    for (const product of products) {
      for (const part of product.parts) {
        // Вставляем часть и получаем её ID
        const [partResult] = await connection.query<mysql.ResultSetHeader>(
          `
          INSERT INTO parts 
            (product_id, position, name, description, designation, quantity, drawing, 
            positioning_top, positioning_left, positioning_top2, positioning_left2, 
            positioning_top3, positioning_left3, positioning_top4, positioning_left4, 
            positioning_top5, positioning_left5) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          [
            product.id,
            part.position,
            part.name,
            part.description || null,
            part.designation || null,
            part.quantity,
            part.drawing || null,
            part.positioningTop || null,
            part.positioningLeft || null,
            part.positioningTop2 || null,
            part.positioningLeft2 || null,
            part.positioningTop3 || null,
            part.positioningLeft3 || null,
            part.positioningTop4 || null,
            part.positioningLeft4 || null,
            part.positioningTop5 || null,
            part.positioningLeft5 || null,
          ]
        );

        const partId = partResult.insertId;

        // Вставляем альтернативные наборы для этой части
        if (part.alternativeSets) {
          const alternativeSetValues = Object.entries(part.alternativeSets).map(
            ([setName, setData]) => [
              partId,
              setName,
              setData.position,
              setData.name,
              setData.description || null,
              setData.designation || null,
              setData.quantity,
              setData.drawing || null,
            ]
          );

          await connection.query(
            `
            INSERT INTO part_alternative_sets 
              (part_id, set_name, position, name, description, designation, quantity, drawing) 
            VALUES ?
            `,
            [alternativeSetValues]
          );

          await connection.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT PRIMARY KEY AUTO_INCREMENT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

          await connection.query(`
      CREATE TABLE IF NOT EXISTS order_parts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        order_id INT NOT NULL,
        part_id INT NOT NULL,
        parent_product_id INT NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        product_drawing VARCHAR(255) NULL,
        position INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT NULL,
        designation VARCHAR(255) NULL,
        quantity INT NOT NULL DEFAULT 1,
        drawing INT NULL,
        positioningTop INT NULL,
        positioningLeft INT NULL,
        positioningTop2 INT NULL,
        positioningLeft2 INT NULL,
        positioningTop3 INT NULL,
        positioningLeft3 INT NULL,
        positioningTop4 INT NULL,
        positioningLeft4 INT NULL,
        positioningTop5 INT NULL,
        positioningLeft5 INT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
        FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE
      )
    `);
        }
      }
    }

    console.log("Данные успешно загружены!");
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  } finally {
    connection.release();
  }
}

setupDatabase();
