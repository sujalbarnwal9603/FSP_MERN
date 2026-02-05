const UserController =require("../controllers/UserController.js");
const express = require("express");
const router = express.Router();

router.get("/viewuser", UserController.getUser);
router.post("/register", UserController.createUser);
router.get("/viewuser/:id", UserController.getUserById);
router.put("/updateuser/:id", UserController.updateUser);
router.delete("/deleteuser/:id", UserController.deleteUser);

module.exports=router;
