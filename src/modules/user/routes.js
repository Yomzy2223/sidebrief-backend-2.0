const express = require("express");
const {
  UserRegisration,
  UserFetcher,
  UserGrantor,
  UsersFetcher,
} = require("./controller");
const router = express.Router();

router.post("/", UserRegisration);
router.post("/login", UserGrantor);
router.get("/:id", UserFetcher);
router.get("/", UsersFetcher);

module.exports = router;
