const express = require("express");
const router = express.Router();

const authMiddleware = require("../controller/AuthController");

router.get("/signUp", authMiddleware.getSignUp);
router.post("/signUp", authMiddleware.postSignUp);
router.get("/signIn", authMiddleware.getSignIn);
router.post("/signIn", authMiddleware.postSignIn);

module.exports = router;
