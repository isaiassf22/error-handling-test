import pg from "pg";

const { Pool } = pg;
const dbConnection= new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "caneta",
  database: "travels"
});

export default dbConnection;