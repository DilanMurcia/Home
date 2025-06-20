import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken,
} from '../../../../backend/interfaces/controllers/auth.controller.mjs';
import { validateSchema } from "../middlewares/validator.middleware.mjs";
import { loginSchema, registerSchema } from "../../../../backend/shared/schemas/auth.schema.mjs";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
router.post("/logout", verifyToken, logout);

export default router;