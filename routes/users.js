const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");

router.post("/", UserController.auth);

module.exports = router;