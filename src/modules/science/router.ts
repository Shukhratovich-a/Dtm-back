import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.get(<string>"/sciences", controller.GET);
router.get(<string>"/sciences/first", controller.GETFIRST);
router.get(<string>"/sciences/second/:scienceId", controller.GETSECOND);

router.post(<string>"/sciences", checkToken.admin, validation, controller.POST);

router.put(<string>"/sciences/:scienceId", checkToken.admin, validation, controller.PUT);

router.delete(<string>"/sciences/:scienceId", checkToken.admin, controller.DELETE);

export default router;
