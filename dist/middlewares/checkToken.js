import { ForbiddenError } from "../lib/error.js";
import jwt from "../lib/jwt.js";
const user = (req, res, next) => {
    try {
        if (req.url == "/register" || req.url == "/login")
            return next();
        let { token } = req.headers;
        if (!token) {
            return next(new ForbiddenError(403, "token required"));
        }
        let { userId } = jwt.verify(token);
        req.userId = userId;
        if (!userId)
            return next(new ForbiddenError(403, "bad token"));
        return next();
    }
    catch (error) {
        return next(new ForbiddenError(403, error.message));
    }
};
const admin = (req, res, next) => {
    try {
        if (req.url == "/register" || req.url == "/login")
            return next();
        let { token } = req.headers;
        if (!token) {
            return next(new ForbiddenError(403, "token required"));
        }
        let { adminId } = jwt.verify(token);
        req.adminId = adminId;
        if (!adminId)
            return next(new ForbiddenError(403, "bad token"));
        return next();
    }
    catch (error) {
        return next(new ForbiddenError(403, error.message));
    }
};
export default {
    user,
    admin,
};
