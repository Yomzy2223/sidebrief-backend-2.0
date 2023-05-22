const express = require("express");
const {
  Register,
  Login,
  GetUser,
  GetAllUsers,
  UpdateUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/", Register);
router.get("/", Login);
router.get("/:id", GetUser);
router.get("/", GetAllUsers);
router.put("/:id", UpdateUser);

module.exports = router;
