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
    GET: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quotas = yield model.GET(req.query);
            if (!quotas)
                return next(new NotFoundError(404, "no data"));
            res.status(200).json({
                status: 200,
                message: "ok",
                data: quotas,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    POST: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quota = yield model.POST(req.body);
            if (!quota)
                return next(new NotFoundError(400, "bad request"));
            res.status(201).json({
                status: 201,
                message: "quota added",
                data: quota,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    PUT: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quota = yield model.PUT(req.body, req.params);
            if (!quota)
                return next(new NotFoundError(400, "bad request"));
            res.status(202).json({
                status: 202,
                message: "quota edited",
                data: quota,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    DELETE: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let quota = yield model.DELETE(req.params);
            if (!quota)
                return next(new NotFoundError(400, "bad request"));
            res.status(202).json({
                status: 202,
                message: "quota deleted",
                data: quota,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
};
