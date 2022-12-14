import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";
import controller from "./controller.js";
const router = Router();
router.get("/tests", checkToken.user, controller.GET);
router.get("/tests/science/:scienceId", checkToken.user, controller.GET);
router.post("/tests", checkToken.admin, validation, controller.POST);
router.put("/tests/:testId", checkToken.admin, validation, controller.PUT);
router.delete("/tests/:testId", checkToken.admin, controller.DELETE);
export default router;
