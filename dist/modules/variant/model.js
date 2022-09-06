var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetch } from "../../lib/postgres.js";
import query from "./query.js";
export default {
    POST: ({ testId, variants, }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = [];
            for (let variant of variants) {
                const item = yield fetch(query.POST, variant.testVariantBody, variant.testVariantIstrue, testId);
                if (item) {
                    const size = Object.keys(item).length;
                    if (size == 0)
                        return null;
                    if (size > 0) {
                        result.push(item);
                    }
                }
            }
            if (result.length == 0)
                return null;
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    PUT: ({ testVariantBody, testVariantIstrue }, { testVariantId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let variant = yield fetch(query.PUT, testVariantBody, testVariantIstrue, testVariantId);
            console.log(testVariantBody, testVariantIstrue, testVariantId);
            if (!variant)
                return null;
            const size = Object.keys(variant).length;
            if (size == 0)
                return null;
            return variant;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    DELETE: ({ testVariantId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let variant = yield fetch(query.DELETE, testVariantId);
            console.log(variant);
            if (!variant)
                return null;
            const size = Object.keys(variant).length;
            if (size == 0)
                return null;
            return variant;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
};
