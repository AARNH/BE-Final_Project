const express = require("express");
const router = express.Router();
const WishlistController = require("../controllers/wishlist.controller");
const authoriz = require("../helpers/auth.helper");

router.post("/", authoriz, WishlistController.add);
module.exports = router;
