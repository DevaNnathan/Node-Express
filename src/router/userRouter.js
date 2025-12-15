
const express = require ("express")
const router = express.Router()
const userController = require ("../controller/userController") 
const productController = require ("../controller/productController")

router.post("/create/user", userController.createUser)
router.get("/userdata", userController.createUser)
router.get("/user/:id", userController.getUserByID)
router.delete("/delete/user/:id", userController.deleteUserByID);
router.delete("/delete/userdata/:id", userController.deleteUser);
router.put("/update/updateuser/:id", userController.updateUser);
router.post("/login", userController.userLogin);
router.post("/genotp",userController.forgototp);
router.post("/login", userController.login);
router.post

module.exports = router 