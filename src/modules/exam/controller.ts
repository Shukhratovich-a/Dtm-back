import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { NotFoundError, InternalServerError, RequestError } from "../../lib/error.js";

import Exam from "../../types/exam";
import Response from "../../types/response";

import model from "./model.js";

export default {
  GET: async (req: Req, res: Res, next: Next) => {
    try {
      let exams: Exam[] | null = await model.GET(req.params);
      if (!exams) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: exams,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req: Req, res: Res, next: Next) => {
    try {
      let exam: Exam | null = await model.POST(req.body);
      if (!exam) return next(new NotFoundError(400, "bad request"));

      res.status(201).json({
        status: 201,
        message: "exam added",
        data: exam,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req: Req, res: Res, next: Next) => {
    try {
      let exam: Exam | null = await model.DELETE(req.params);
      if (!exam) return next(new NotFoundError(400, "bad request"));

      res.status(202).json({
        status: 202,
        message: "exam deleted",
        data: exam,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
