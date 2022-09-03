import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.get(<string>"/directions", controller.GET);

router.post(<string>"/directions", checkToken.admin, validation, controller.POST);
router.post(<string>"/directions/sciences", checkToken.user, controller.GETBYSCIENCES);

router.put(<string>"/directions/:directionId", checkToken.admin, validation, controller.PUT);

router.delete(<string>"/directions/:directionId", checkToken.admin, controller.DELETE);

export default router;
