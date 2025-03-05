const {Router} = require("express");
const router = Router();
const userController = require("../controller/userController");

router.post("/sign-up", userController.signUp);
router.post("/log-in", userController.logIn);


module.exports = router;