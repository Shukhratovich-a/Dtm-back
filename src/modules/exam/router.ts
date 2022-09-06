import { Router } from "express";

import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

import controller from "./controller.js";

const router: Router = Router();

router.get(<string>"/exams", checkToken.user, controller.GET);
router.get(<string>"/exams/:userId", checkToken.user, controller.GET);

router.post(<string>"/exams", checkToken.user, validation, controller.POST);

router.delete(<string>"/exams/:examId", checkToken.admin, controller.DELETE);

export default router;
