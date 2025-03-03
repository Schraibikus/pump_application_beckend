import pkg from "pg";
const { Pool } = pkg;
import * as dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "pump_app_db",
  port: Number(process.env.DB_PORT) || 5432,
});

export default pool;
