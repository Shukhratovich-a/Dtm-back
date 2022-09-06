import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";
import controller from "./controller.js";
const router = Router();
router.post("/variants", checkToken.admin, validation, controller.POST);
router.put("/variants/:testVariantId", checkToken.admin, validation, controller.PUT);
router.delete("/variants/:testVariantId", checkToken.admin, controller.DELETE);
export default router;