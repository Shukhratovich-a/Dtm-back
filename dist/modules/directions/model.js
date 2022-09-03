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
            let directions = yield fetchAll(query.GET);
            if (!directions || directions.length == 0)
                return null;
            return directions;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    GETBYSCIENCES: ({ firstScienceId, secondScienceId, }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let directions = yield fetchAll(query.GETBYSCIENCES, firstScienceId, secondScienceId);
            if (!directions || directions.length == 0)
                return null;
            return directions;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    POST: ({ directionName, firstScienceId, secondScienceId, }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let direction = yield fetch(query.POST, directionName, firstScienceId, secondScienceId);
            if (!direction)
                return null;
            return direction;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    PUT: ({ directionName, firstScienceId, secondScienceId }, { directionId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let direction = yield fetch(query.PUT, directionName, firstScienceId, secondScienceId, directionId);
            if (!direction)
                return null;
            const size = Object.keys(direction).length;
            if (size == 0)
                return null;
            return direction;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    DELETE: ({ directionId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let direction = yield fetch(query.DELETE, directionId);
            if (!direction)
                return null;
            const size = Object.keys(direction).length;
            if (size == 0)
                return null;
            return direction;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
};
