import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { NotFoundError, InternalServerError, RequestError } from "../../lib/error.js";

import Quota from "../../types/quota";
import Response from "../../types/response";

import model from "./model.js";

export default {
  GET: async (req: Req, res: Res, next: Next) => {
    try {
      let quotas: Quota[] | null = await model.GET(req.query);
      if (!quotas) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: quotas,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req: Req, res: Res, next: Next) => {
    try {
      let quota: Quota | null = await model.POST(req.body);
      if (!quota) return next(new NotFoundError(400, "bad request"));

      res.status(200).json({
        status: 200,
        message: "quota added",
        data: quota,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req: Req, res: Res, next: Next) => {
    try {
      let quota: Quota | null = await model.PUT(req.body, req.params);
      if (!quota) return next(new NotFoundError(400, "bad request"));

      res.status(200).json({
        status: 200,
        message: "quota edited",
        data: quota,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req: Req, res: Res, next: Next) => {
    try {
      let quota: Quota | null = await model.DELETE(req.params);
      if (!quota) return next(new NotFoundError(400, "bad request"));

      res.status(200).json({
        status: 200,
        message: "quota deleted",
        data: quota,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
