import pkg from "pg";
const { Pool } = pkg;
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

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 5432,
});

const TABLE_NAMES = {
  PRODUCTS: "products",
  PARTS: "parts",
  PART_ALTERNATIVE_SETS: "part_alternative_sets",
  ORDERS: "orders",
  ORDER_PARTS: "order_parts",
};

async function setupDatabase() {
  const client = await pool.connect();
  try {
    console.log("Создаём таблицы...");

    await client.query("BEGIN"); // Начало транзакции

    // Создание таблиц
    await client.query(`
      CREATE TABLE IF NOT EXISTS ${TABLE_NAMES.PRODUCTS} (
        id SERIAL PRIMARY KEY,
        src VARCHAR(255),
        path VARCHAR(255),
        width INT,
        name VARCHAR(255),
        drawing INT NULL,
        head INT NOT NULL
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS ${TABLE_NAMES.PARTS} (
        id SERIAL PRIMARY KEY,
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
        selected_set VARCHAR(255) NULL,
        FOREIGN KEY (product_id) REFERENCES ${TABLE_NAMES.PRODUCTS}(id) ON DELETE CASCADE
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS ${TABLE_NAMES.PART_ALTERNATIVE_SETS} (
        id SERIAL PRIMARY KEY,
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

    await client.query(`
      CREATE TABLE IF NOT EXISTS ${TABLE_NAMES.ORDERS} (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS ${TABLE_NAMES.ORDER_PARTS} (
        id SERIAL PRIMARY KEY,
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
        selected_set VARCHAR(255) NULL, -- Добавляем поле selected_set
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
        FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE
      )
    `);

    // Остальные таблицы...

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

    // Вставка данных в products, parts, part_alternative_sets
    for (const product of products) {
      await client.query(
        `
        INSERT INTO ${TABLE_NAMES.PRODUCTS} (id, src, path, width, name, drawing, head) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO UPDATE 
        SET 
          src = EXCLUDED.src, 
          path = EXCLUDED.path, 
          width = EXCLUDED.width, 
          name = EXCLUDED.name, 
          drawing = EXCLUDED.drawing,
          head = EXCLUDED.head
        `,
        [
          product.id,
          product.src,
          product.path,
          product.width,
          product.name,
          product.drawing || null,
          product.head,
        ]
      );

      for (const part of product.parts) {
        const { rows: partResult } = await client.query(
          `
          INSERT INTO ${TABLE_NAMES.PARTS} 
            (product_id, position, name, description, designation, quantity, drawing, 
            positioning_top, positioning_left, positioning_top2, positioning_left2, 
            positioning_top3, positioning_left3, positioning_top4, positioning_left4, 
            positioning_top5, positioning_left5) 
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
          RETURNING id
          `,
          [
            product.id,
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
          ]
        );

        const partId = partResult[0].id;

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

          await client.query(
            `
            INSERT INTO ${TABLE_NAMES.PART_ALTERNATIVE_SETS} 
              (part_id, set_name, position, name, description, designation, quantity, drawing) 
            VALUES ${alternativeSetValues
              .map(
                (_, i) =>
                  `($${i * 8 + 1}, $${i * 8 + 2}, $${i * 8 + 3}, $${
                    i * 8 + 4
                  }, $${i * 8 + 5}, $${i * 8 + 6}, $${i * 8 + 7}, $${
                    i * 8 + 8
                  })`
              )
              .join(", ")}
            `,
            alternativeSetValues.flat()
          );
        }
      }
    }

    await client.query("COMMIT"); // Подтверждение транзакции
    console.log("Данные успешно загружены!");
  } catch (error) {
    await client.query("ROLLBACK"); // Откат транзакции в случае ошибки
    console.error("Ошибка при загрузке данных:", error);
  } finally {
    client.release();
  }
}

setupDatabase();
