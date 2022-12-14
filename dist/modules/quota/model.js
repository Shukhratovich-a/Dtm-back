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
    GET: ({ quotaYear = 0 }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quotas = yield fetchAll(query.GET, quotaYear);
            if (!quotas || quotas.length == 0)
                return null;
            return quotas;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    POST: ({ quotaContract, quotaGrand, quotaContractBal, quotaGrandBal, quotaYear, directionId, }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quota = yield fetch(query.POST, quotaContract, quotaGrand, quotaContractBal, quotaGrandBal, quotaYear, directionId);
            if (!quota)
                return null;
            const size = Object.keys(quota).length;
            if (size == 0)
                return null;
            return quota;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    PUT: ({ quotaContract, quotaGrand, quotaContractBal, quotaGrandBal, quotaYear, directionId }, { quotaId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quota = yield fetch(query.PUT, quotaContract, quotaGrand, quotaContractBal, quotaGrandBal, quotaYear, directionId, quotaId);
            if (!quota)
                return null;
            const size = Object.keys(quota).length;
            if (size == 0)
                return null;
            return quota;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
    DELETE: ({ quotaId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quota = yield fetch(query.DELETE, quotaId);
            if (!quota)
                return null;
            const size = Object.keys(quota).length;
            if (size == 0)
                return null;
            return quota;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }),
};
