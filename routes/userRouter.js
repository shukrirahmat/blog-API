const {Router} = require("express");
const router = Router();
const userController = require("../controller/userController");

router.post("/sign-up", userController.signUp);


module.exports = router;