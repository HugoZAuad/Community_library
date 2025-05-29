import { Router } from "express";
import userController from "../controller/user.controllers.js";
import {
  validate,
  validateUserId,
} from "../middleware/validation.middlewares.js";
import { userSchema } from "../schema/user.schema.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", validate(userSchema), userController.createUserController);
router.post("//login", userController.loginUserController);

router.use(authMiddleware);
router.get("/", userController.findAllUsersController);
router.get("/:id", validateUserId, userController.findUserByIdController);
router.patch("/:id", userController.updateUserController);
router.delete("/:id", validateUserId, userController.deletedUserController);

export default router;
