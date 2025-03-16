const {Router} = require("express");
const router = Router();
const userController = require("../controller/userController");
const {verifyToken} = require("../controller/authentication")

router.get("/", verifyToken, userController.getUser);
router.post("/sign-up", userController.signUp);
router.post("/log-in", userController.logIn);


module.exports = router;