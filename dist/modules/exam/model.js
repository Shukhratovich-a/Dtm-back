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
    GET: ({ userId = 0, examId = 0 }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let exams = yield fetchAll(query.GET, userId, examId);
            if (!exams || exams.length == 0)
                return null;
            return exams;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    POST: ({ directionId, firstScienceCount, secondScienceCount, type }, userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let exam = yield fetch(query.POST, userId, directionId > 0 ? directionId : null, firstScienceCount, secondScienceCount, type);
            if (!exam)
                return null;
            const size = Object.keys(exam).length;
            if (size == 0)
                return null;
            return exam;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    DELETE: ({ examId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let exam = yield fetch(query.DELETE, examId);
            if (!exam)
                return null;
            const size = Object.keys(exam).length;
            if (size == 0)
                return null;
            return exam;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
};
