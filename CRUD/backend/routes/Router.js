const UserController =require("../controllers/UserController.js");
const express = require("express");
const router = express.Router();

router.get("/viewuser", UserController.getUser);
router.post("/register", UserController.createUser);

module.exports=router;
