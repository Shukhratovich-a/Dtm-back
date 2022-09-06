import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.post(<string>"/variants", checkToken.admin, validation, controller.POST);

router.put(<string>"/variants/:testVariantId", checkToken.admin, validation, controller.PUT);
router.put(<string>"/variants", checkToken.admin, validation, controller.PUTALL);

router.delete(<string>"/variants/:testVariantId", checkToken.admin, controller.DELETE);

export default router;
