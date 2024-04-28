const { Router } = require("express");
const router = Router();

// ⚡ IMPORT THE CONTROLLER [AUTH] ⚡
const authController = require("../controller/authController");

// ⚡ ACCESS USER [AUTH] ⚡
router.post("/signin", authController.SignIn);

// ⚡ REGISTER NEW USER [AUTH] ⚡
router.post("/signup", authController.SignUp);

// ⚡ VIEW PROFILE USER [AUTH] ⚡
router.get("/me", authController.SignIn);

module.exports = router;
