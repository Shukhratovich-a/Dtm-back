import { Router } from "express";

import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.post(<string>"/login", validation, controller.LOGIN);
router.post(<string>"/register", validation, controller.REGISTER);

export default router;
