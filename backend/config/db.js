import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "minisow",
  password: "tonystark07",
  port: 5432
});

export default pool;
