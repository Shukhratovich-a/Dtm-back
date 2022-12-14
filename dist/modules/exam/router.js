import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";
import controller from "./controller.js";
const router = Router();
router.get("/exams", checkToken.user, controller.GET);
router.get("/exams/:examId", checkToken.user, controller.GET);
router.get("/exams/user/:userId", checkToken.user, controller.GET);
router.post("/exams", checkToken.user, validation, controller.POST);
router.delete("/exams/:examId", checkToken.admin, controller.DELETE);
export default router;
