import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.get(<string>"/regions", checkToken.user, controller.GET);

router.post(<string>"/regions", checkToken.admin, validation, controller.POST);

router.put(<string>"/regions/:regionId", checkToken.admin, validation, controller.PUT);

router.delete(<string>"/regions/:regionId", checkToken.admin, controller.DELETE);

export default router;
