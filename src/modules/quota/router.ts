import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.get(<string>"/quotas", checkToken.user, controller.GET);

router.post(<string>"/quotas", checkToken.admin, validation, controller.POST);

router.put(<string>"/quotas/:quotaId", checkToken.admin, validation, controller.PUT);

router.delete(<string>"/quotas/:quotaId", checkToken.admin, controller.DELETE);

export default router;
