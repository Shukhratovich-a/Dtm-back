import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5500;
const HOST = process.env.HOST || "localhost:" + PORT;
const SECRET = process.env.JWT_SECRET;
const pgConfig = {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT) || 5432,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
};
export { HOST, PORT, SECRET, pgConfig };
