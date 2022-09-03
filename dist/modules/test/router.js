import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
// import validation from "../../middlewares/validation.js";
import controller from "./controller.js";
const router = Router();
router.get("/tests", checkToken.user, controller.GET);
export default router;
