import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
// import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.post(<string>"/variants", checkToken.admin, controller.POST);

router.put(<string>"/variants/:testVariantId", checkToken.admin, controller.PUT);

router.delete(<string>"/variants/:testVariantId", checkToken.admin, controller.DELETE);

export default router;
