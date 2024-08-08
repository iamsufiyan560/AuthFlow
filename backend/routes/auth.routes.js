import express from "express";
import {
  forgotPassword,
  login,
  logout,
  signup,
  verifyEmail,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifytoken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.get("/check-auth", verifytoken, checkAuth);

export default router;
