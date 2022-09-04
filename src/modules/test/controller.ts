import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { NotFoundError, InternalServerError, RequestError } from "../../lib/error.js";

import Test from "../../types/test";
import Response from "../../types/response";

import model from "./model.js";

export default {
  GET: async (req: Req, res: Res, next: Next) => {
    try {
      let tests: Test[] | null = await model.GET();
      if (!tests) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: tests,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req: Req, res: Res, next: Next) => {
    try {
      let tests: Test | null = await model.POST(req.body);
      if (!tests) return next(new NotFoundError(404, "no data"));

      res.status(201).json({
        status: 201,
        message: "test added",
        data: tests,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req: Req, res: Res, next: Next) => {
    try {
      let tests: Test | null = await model.PUT(req.body, req.params);
      if (!tests) return next(new NotFoundError(404, "no data"));

      res.status(202).json({
        status: 202,
        message: "test edited",
        data: tests,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req: Req, res: Res, next: Next) => {
    try {
      let tests: Test | null = await model.DELETE(req.params);
      if (!tests) return next(new NotFoundError(404, "no data"));

      res.status(202).json({
        status: 202,
        message: "test deleted",
        data: tests,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
