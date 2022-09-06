import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";
import controller from "./controller.js";
const router = Router();
router.get("/quotas", checkToken.user, controller.GET);
router.post("/quotas", checkToken.admin, validation, controller.POST);
router.put("/quotas/:quotaId", checkToken.admin, validation, controller.PUT);
router.delete("/quotas/:quotaId", checkToken.admin, controller.DELETE);
export default router;