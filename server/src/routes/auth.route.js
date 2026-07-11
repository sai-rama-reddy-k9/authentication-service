const express = require("express");
const router = express.Router();

const {
  handleRegister,
  handleLogin,
  handleLogout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} = require("../controllers/auth.controller");

const {verifyToken} = require("../middlewares/auth.middleware")

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", handleRegister);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

module.exports = router;
