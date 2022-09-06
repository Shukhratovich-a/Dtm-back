var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "../../lib/jwt.js";
import { AuthorizationError, InternalServerError } from "../../lib/error.js";
import model from "./model.js";
export default {
    LOGIN: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let admin = yield model.LOGIN(req.body);
            if (!(admin === null || admin === void 0 ? void 0 : admin.adminId))
                return next(new AuthorizationError(401, "wrong adminname or password"));
            res.status(200).json({
                status: 200,
                message: "ok",
                token: jwt.sign({ adminId: admin.adminId }),
                data: admin,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
};
