const express = require("express");
const {
  Login,
  GetUser,
  GetAllUsers,
  UpdateUser,
  Regisration,
} = require("./controller");
const router = express.Router();

router.post("/", Regisration);
router.get("/", Login);
router.get("/:id", GetUser);
router.get("/", GetAllUsers);
router.put("/:id", UpdateUser);

module.exports = router;
