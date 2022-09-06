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
            let tests = yield model.GET();
            if (!tests)
                return next(new NotFoundError(404, "no data"));
            res.status(200).json({
                status: 200,
                message: "ok",
                data: tests,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    POST: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let tests = yield model.POST(req.body);
            if (!tests)
                return next(new NotFoundError(404, "no data"));
            res.status(201).json({
                status: 201,
                message: "test added",
                data: tests,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    PUT: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let tests = yield model.PUT(req.body, req.params);
            if (!tests)
                return next(new NotFoundError(404, "no data"));
            res.status(202).json({
                status: 202,
                message: "test edited",
                data: tests,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    DELETE: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let tests = yield model.DELETE(req.params);
            if (!tests)
                return next(new NotFoundError(404, "no data"));
            res.status(202).json({
                status: 202,
                message: "test deleted",
                data: tests,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
};
