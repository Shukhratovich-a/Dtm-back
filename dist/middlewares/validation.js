import { ValidationError } from "../lib/error.js";
import schemas from "../lib/validations.js";
export default (req, res, next) => {
    try {
        // admin
        if (req.url == "/admins/login" && req.method == "POST") {
            let { error } = schemas.adminLoginScheme.validate(req.body);
            if (error)
                throw error;
        }
        // user
        if (req.url == "/login" && req.method == "POST") {
            let { error } = schemas.loginScheme.validate(req.body);
            if (error)
                throw error;
        }
        if (req.url == "/register" && req.method == "POST") {
            let { error } = schemas.reigsterScheme.validate(req.body);
            if (error)
                throw error;
        }
        // region
        if (req.url == "/regions" && req.method == "POST") {
            let { error } = schemas.regionPostScheme.validate(req.body);
            if (error)
                throw error;
        }
        if (req.url == "/regions/" + req.params.regionId && req.method == "PUT") {
            let { error } = schemas.regionPutScheme.validate(req.body);
            if (error)
                throw error;
        }
        // science
        if (req.url == "/sciences" && req.method == "POST") {
            let { error } = schemas.sciencePostScheme.validate(req.body);
            if (error)
                throw error;
        }
        if (req.url == "/sciences/" + req.params.scienceId && req.method == "PUT") {
            let { error } = schemas.sciencePutScheme.validate(req.body);
            if (error)
                throw error;
        }
        // direction
        if (req.url == "/directions" && req.method == "POST") {
            let { error } = schemas.directionPostScheme.validate(req.body);
            if (error)
                throw error;
        }
        if (req.url == "/directions/" + req.params.directionId && req.method == "PUT") {
            let { error } = schemas.directionPutScheme.validate(req.body);
            if (error)
                throw error;
        }
        return next();
    }
    catch (error) {
        return next(new ValidationError(400, error.message));
    }
};
