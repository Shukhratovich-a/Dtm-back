var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchAll } from "../../lib/postgres.js";
import query from "./query.js";
export default {
    GET: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let tests = yield fetchAll(query.GET);
            if (!tests || tests.length == 0)
                return null;
            tests = tests.map((test) => {
                test.testVariants = test.testVariants.map((variant) => {
                    delete variant.createAt;
                    delete variant.testId;
                    return variant;
                });
                return test;
            });
            return tests;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
};
