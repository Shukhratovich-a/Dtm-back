var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pg from "pg";
import { pgConfig } from "../config.js";
import { keysToCamel } from "./caseConvertor.js";
const pool = new pg.Pool(pgConfig);
const fetch = (SQL, ...params) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const { rows: [row], } = yield client.query(SQL, params.length ? params : null);
        const result = keysToCamel(row);
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield client.release();
    }
});
const fetchAll = (SQL, ...params) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const { rows } = yield client.query(SQL, params.length ? params : null);
        const result = [];
        for (let object of rows) {
            const obj = keysToCamel(object);
            result.push(obj);
        }
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield client.release();
    }
});
export { fetch, fetchAll };
