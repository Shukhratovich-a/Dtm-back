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
            let regions = yield fetchAll(query.GET);
            if (!regions || regions.length == 0)
                return null;
            return regions;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    POST: ({ regionName }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let region = yield fetch(query.POST, regionName);
            if (!region)
                return null;
            const size = Object.keys(region).length;
            if (size == 0)
                return null;
            return region;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    PUT: ({ regionName }, { regionId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let region = yield fetch(query.PUT, regionName, regionId);
            if (!region)
                return null;
            const size = Object.keys(region).length;
            if (size == 0)
                return null;
            return region;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    DELETE: ({ regionId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let region = yield fetch(query.DELETE, regionId);
            if (!region)
                return null;
            const size = Object.keys(region).length;
            if (size == 0)
                return null;
            return region;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
};
