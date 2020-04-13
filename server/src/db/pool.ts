import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "vuedo",
  password: "d495895d",
  port: 5432,
});

export default pool;
