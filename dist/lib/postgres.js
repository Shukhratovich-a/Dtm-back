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
const pool = new pg.Pool(pgConfig);
const fetch = (SQL, ...params) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const { rows: [row], } = yield client.query(SQL, params.length ? params : null);
        const result = {};
        for (let key in row) {
            result[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = row[key];
            if (typeof row[key] == "object" && Object.keys(row[key]).length > 0) {
                const subObj = {};
                for (let subKey in row[key]) {
                    subObj[subKey.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] =
                        row[key][subKey];
                }
                row[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = subObj;
            }
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
const fetchAll = (SQL, ...params) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const { rows } = yield client.query(SQL, params.length ? params : null);
        const result = [];
        for (let object of rows) {
            const obj = {};
            for (let key in object) {
                obj[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = object[key];
                if (!object[key] ||
                    (!Array.isArray(object[key]) &&
                        typeof object[key] == "object" &&
                        Object.keys(object[key]).length > 0)) {
                    const subObj = {};
                    for (let subKey in object[key]) {
                        subObj[subKey.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] =
                            object[key][subKey];
                    }
                    obj[key.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))] = subObj;
                }
                else if (Array.isArray(object[key]) && object[key].length > 0) {
                    const subArr = [];
                    for (let subItem of object[key]) {
                        const subObj = {};
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
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield client.release();
    }
});
export { fetch, fetchAll };
