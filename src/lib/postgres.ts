import pg from "pg";
import { pgConfig } from "../config.js";
import { keysToCamel } from "./caseConvertor.js";

const pool = new pg.Pool(pgConfig);

const fetch = async (SQL: string, ...params: any) => {
  const client = await pool.connect();
  try {
    const {
      rows: [row],
    } = await client.query(SQL, params.length ? params : null);

    const result: any = keysToCamel(row);

    return result;
  } catch (error) {
    console.log(error);
  } finally {
    await client.release();
  }
};

const fetchAll = async (SQL: string, ...params: any) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params.length ? params : null);

    const result: any[] = [];
    for (let object of rows) {
      const obj = keysToCamel(object);

      result.push(obj);
    }

    return result;
  } catch (error) {
    console.log(error);
  } finally {
    await client.release();
  }
};

export { fetch, fetchAll };
