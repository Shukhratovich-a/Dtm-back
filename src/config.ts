import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5500;
const HOST: string = process.env.HOST || "localhost:" + PORT;
const SECRET: string | any = process.env.JWT_SECRET;

const pgConfig = {
  host: <string>process.env.PGHOST,
  port: <number>Number(process.env.PGPORT) || 5432,
  database: <string>process.env.PGDATABASE,
  user: <string>process.env.PGUSER,
  password: <string>process.env.PGPASSWORD,
};

export { HOST, PORT, SECRET, pgConfig };
