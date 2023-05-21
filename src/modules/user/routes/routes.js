const express = require("express");
const router = express.Router();

const { signUp, signIn, GetAll } = require("../controller/userController");

router.post("/", signUp);
router.get("/", GetAll);

module.exports = router;
