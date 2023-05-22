const express = require("express");
const { UserRegisration, UserFetcher, UserGrantor } = require("./controller");
const router = express.Router();

router.post("/", UserRegisration);
router.post("/login", UserGrantor);
router.get("/:id", UserFetcher);
// router.get("/", GetAllUsers);

module.exports = router;
