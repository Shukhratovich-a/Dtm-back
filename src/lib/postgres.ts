import pg from "pg";
import { pgConfig } from "../config.js";

const pool = new pg.Pool(pgConfig);

const fetch = async (SQL: string, ...params: any) => {
  const client = await pool.connect();
  try {
    const {
      rows: [row],
    } = await client.query(SQL, params.length ? params : null);

    const result = {} as any;
    for (let key in row) {
      result[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = row[key];

      if (typeof row[key] == "object" && Object.keys(row[key]).length > 0) {
        const subObj = {} as any;

        for (let subKey in row[key]) {
          subObj[subKey.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] =
            row[key][subKey];
        }

        row[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = subObj;
      }
    }

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
      const obj = {} as any;

      for (let key in object) {
        obj[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = object[key];

        if (
          !object[key] ||
          (!Array.isArray(object[key]) &&
            typeof object[key] == "object" &&
            Object.keys(object[key]).length > 0)
        ) {
          const subObj = {} as any;

          for (let subKey in object[key]) {
            subObj[subKey.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] =
              object[key][subKey];
          }

          obj[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = subObj;
        } else if (Array.isArray(object[key]) && object[key].length > 0) {
          const subArr = [];
          for (let subItem of object[key]) {
            const subObj = {} as any;

            for (let subKey in subItem) {
              subObj[subKey.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] =
                subItem[subKey];
            }

            subArr.push(subObj);
          }
          obj[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = subArr;
        }
      }

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
