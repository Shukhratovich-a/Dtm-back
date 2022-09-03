import JWT, { JwtPayload } from "jsonwebtoken";
import { SECRET } from "../config.js";

export default {
  sign: (payload: JwtPayload) => JWT.sign(payload, SECRET),
  verify: (token: string) => JWT.verify(token, SECRET),
};
