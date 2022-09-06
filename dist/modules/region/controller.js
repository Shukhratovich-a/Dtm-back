var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NotFoundError, InternalServerError, RequestError } from "../../lib/error.js";
import model from "./model.js";
export default {
    GET: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let regions = yield model.GET();
            if (!regions)
                return next(new NotFoundError(404, "no data"));
            res.status(200).json({
                status: 200,
                message: "ok",
                data: regions,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    POST: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let region = yield model.POST(req.body);
            if (!region)
                return next(new RequestError(400, "bad request"));
            res.status(201).json({
                status: 201,
                message: "region added",
                data: region,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    PUT: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let region = yield model.PUT(req.body, req.params);
            if (!region)
                return next(new RequestError(400, "bad request"));
            res.status(202).json({
                status: 202,
                message: "region edited",
                data: region,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
    DELETE: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let region = yield model.DELETE(req.params);
            if (!region)
                return next(new RequestError(400, "bad request"));
            res.status(202).json({
                status: 202,
                message: "region deleted",
                data: region,
            });
        }
        catch (error) {
            return next(new InternalServerError(500, error.message));
        }
    }),
};
