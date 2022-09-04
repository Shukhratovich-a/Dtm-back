import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { NotFoundError, InternalServerError, RequestError } from "../../lib/error.js";

import Variant from "../../types/variant";
import Response from "../../types/response";

import model from "./model.js";

export default {
  POST: async (req: Req, res: Res, next: Next) => {
    try {
      let variants: Variant[] | null = await model.POST(req.body);
      if (!variants) return next(new NotFoundError(404, "bad request"));

      res.status(201).json({
        status: 201,
        message: "variants added",
        data: variants,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req: Req, res: Res, next: Next) => {
    try {
      let variant: Variant | null = await model.PUT(req.body, req.params);
      if (!variant) return next(new NotFoundError(404, "bad request"));

      res.status(202).json({
        status: 202,
        message: "variant edited",
        data: variant,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req: Req, res: Res, next: Next) => {
    try {
      let variant: Variant | null = await model.DELETE(req.params);
      if (!variant) return next(new NotFoundError(404, "bad request"));

      res.status(202).json({
        status: 202,
        message: "variant edited",
        data: variant,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
