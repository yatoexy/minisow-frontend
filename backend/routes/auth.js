import express from "express";
import {
  registerUser,
  loginUser,
  forgotStep1,
  forgotStep2
} from "../controllers/authController.js";

const router = express.Router();

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

// FORGOT PASSWORD — STEP 1 (check email)
router.post("/forgot-step1", forgotStep1);

// FORGOT PASSWORD — STEP 2 (check postal + send email)
router.post("/forgot-step2", forgotStep2);

export default router;
