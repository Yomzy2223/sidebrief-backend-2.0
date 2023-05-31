const express = require("express");
const {
  UserRegisration,
  UserFetcher,
  UserGrantor,
  UsersFetcher,
  UserVerification,
} = require("./controller");
const router = express.Router();

router.post("/", UserRegisration);
router.post("/login", UserGrantor);
router.get("/:id", UserFetcher);
router.get("/", UsersFetcher);
router.post("/verification/:token", UserVerification);

module.exports = router;
