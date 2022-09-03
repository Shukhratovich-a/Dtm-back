import { Request as Req, Response as Res, NextFunction as Next } from "express";

import jwt from "../../lib/jwt.js";
import { AuthorizationError, InternalServerError } from "../../lib/error.js";

import Response from "../../types/response";
import User from "../../types/user";

import model from "./model.js";

export default {
  LOGIN: async (req: Req, res: Res, next: Next) => {
    try {
      let user: User | null = await model.LOGIN(req.body);

      if (!user?.userId) return next(new AuthorizationError(401, "wrong username or password"));

      res.status(200).json({
        status: 200,
        message: "ok",
        token: jwt.sign({ userId: user.userId }),
        data: user,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },

  REGISTER: async (req: Req, res: Res, next: Next) => {
    try {
      let user: User | null = await model.REGISTER(req.body);

      if (!user) return next(new AuthorizationError(401, "wrong username or password"));

      res.status(201).json({
        status: 201,
        message: "ok",
        token: jwt.sign({ userId: user.userId }),
        data: user,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
