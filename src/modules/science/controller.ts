import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { NotFoundError, InternalServerError, RequestError } from "../../lib/error.js";

import Science from "../../types/science";
import Response from "../../types/response";

import model from "./model.js";

export default {
  GET: async (req: Req, res: Res, next: Next) => {
    try {
      let sciences: Science[] | null = await model.GET();
      if (!sciences) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: sciences,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  GETFIRST: async (req: Req, res: Res, next: Next) => {
    try {
      let sciences: Science[] | null = await model.GETFIRST();
      if (!sciences) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: sciences,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  GETSECOND: async (req: Req, res: Res, next: Next) => {
    try {
      let sciences: Science[] | null = await model.GETSECOND(req.params);
      if (!sciences) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: sciences,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req: Req, res: Res, next: Next) => {
    try {
      let science: Science | null = await model.POST(req.body);
      if (!science) return next(new RequestError(400, "bad request"));

      res.status(201).json({
        status: 201,
        message: "science added",
        data: science,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req: Req, res: Res, next: Next) => {
    try {
      let science: Science | null = await model.PUT(req.body, req.params);
      if (!science) return next(new RequestError(400, "bad request"));

      res.status(201).json({
        status: 201,
        message: "science edited",
        data: science,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req: Req, res: Res, next: Next) => {
    try {
      let science: Science | null = await model.DELETE(req.params);
      if (!science) return next(new RequestError(400, "bad request"));

      res.status(201).json({
        status: 201,
        message: "science deleted",
        data: science,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
