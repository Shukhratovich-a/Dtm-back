import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { NotFoundError, InternalServerError, RequestError } from "../../lib/error.js";

import Direction from "../../types/direction";
import Response from "../../types/response";

import model from "./model.js";

export default {
  GET: async (req: Req, res: Res, next: Next) => {
    try {
      let directions: Direction[] | null = await model.GET();
      if (!directions) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: directions,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  GETBYSCIENCES: async (req: Req, res: Res, next: Next) => {
    try {
      let directions: Direction[] | null = await model.GETBYSCIENCES(req.body);
      if (!directions) return next(new NotFoundError(404, "no data"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: directions,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req: Req & any, res: Res, next: Next) => {
    try {
      let direction: Direction | null = await model.POST(req.body);
      if (!direction) return next(new RequestError(400, "bad request"));

      res.status(201).json({
        status: 201,
        message: "direction added",
        data: direction,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req: Req, res: Res, next: Next) => {
    try {
      let direction: Direction | null = await model.PUT(req.body, req.params);
      if (!direction) return next(new RequestError(400, "bad request"));

      res.status(202).json({
        status: 202,
        message: "direction edited",
        data: direction,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req: Req, res: Res, next: Next) => {
    try {
      let direction: Direction | null = await model.DELETE(req.params);
      if (!direction) return next(new RequestError(400, "bad request"));

      res.status(202).json({
        status: 202,
        message: "direction deleted",
        data: direction,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
