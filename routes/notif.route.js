const express = require("express");
const router = express.Router();
const NotifController = require("../controllers/notifikasi.controller");
const authorize = require("../helpers/auth.helper");

router.get("/", authorize, NotifController.getNotif)
router.put("/:id", authorize, NotifController.updateNotifbyId)

module.exports = router;