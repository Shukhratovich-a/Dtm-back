var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NotFoundError, InternalServerError } from "../../lib/error.js";
import model from "./model.js";
export default {
    POST: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let variants = yield model.POST(req.body);
            if (!variants)
                return next(new NotFoundError(404, "bad request"));
            res.status(201).json({
                status: 201,
                message: "variants added",
                data: variants,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    PUT: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let variant = yield model.PUT(req.body, req.params);
            if (!variant)
                return next(new NotFoundError(404, "bad request"));
            res.status(202).json({
                status: 202,
                message: "variant edited",
                data: variant,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    DELETE: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let variant = yield model.DELETE(req.params);
            if (!variant)
                return next(new NotFoundError(404, "bad request"));
            res.status(202).json({
                status: 202,
                message: "variant edited",
                data: variant,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
};
