import { Request as Req, Response as Res, NextFunction as Next } from "express";

import jwt from "../../lib/jwt.js";
import { AuthorizationError, InternalServerError } from "../../lib/error.js";

import Response from "../../types/response";
import Admin from "../../types/admin";

import model from "./model.js";

export default {
  LOGIN: async (req: Req, res: Res, next: Next) => {
    try {
      let admin: Admin | null = await model.LOGIN(req.body);

      if (!admin?.adminId) return next(new AuthorizationError(401, "wrong adminname or password"));

      res.status(200).json({
        status: 200,
        message: "ok",
        token: jwt.sign({ adminId: admin.adminId }),
        data: admin,
      } as Response);
    } catch (error: any) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
