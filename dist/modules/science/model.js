var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchAll, fetch } from "../../lib/postgres.js";
import query from "./query.js";
export default {
    GET: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let sciences = yield fetchAll(query.GET);
            if (!sciences || sciences.length == 0)
                return null;
            return sciences;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    GETFIRST: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let sciences = yield fetchAll(query.GETFIRST);
            if (!sciences || sciences.length == 0)
                return null;
            return sciences;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    GETSECOND: ({ scienceId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let sciences = yield fetchAll(query.GETSECOND, scienceId);
            if (!sciences || sciences.length == 0)
                return null;
            return sciences;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    POST: ({ scienceName }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let science = yield fetch(query.POST, scienceName);
            if (!science)
                return null;
            return science;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    PUT: ({ scienceName }, { scienceId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let science = yield fetch(query.PUT, scienceName, scienceId);
            if (!science)
                return null;
            return science;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    DELETE: ({ scienceId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let science = yield fetch(query.DELETE, scienceId);
            if (!science)
                return null;
            const size = Object.keys(science).length;
            if (!science || size == 0)
                return null;
            return science;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
};
