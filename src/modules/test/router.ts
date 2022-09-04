import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
// import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.get(<string>"/tests", checkToken.user, controller.GET);

router.post(<string>"/tests", checkToken.admin, controller.POST);

router.put(<string>"/tests/:testId", checkToken.admin, controller.PUT);

router.delete(<string>"/tests/:testId", checkToken.admin, controller.DELETE);

export default router;