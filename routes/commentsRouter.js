const {Router} = require("express");
const router = Router({mergeParams: true});
const commentsController = require("../controller/commentsController");
const {verifyToken} = require("../controller/authentication")

router.get("/", verifyToken, commentsController.getAllCommentsFromPost);
router.get("/:commentId", verifyToken, commentsController.getSingleComment);
router.post("/", verifyToken, commentsController.addNewComment);
router.delete("/:commentId", verifyToken, commentsController.deleteComment);
router.put("/:commentId", verifyToken, commentsController.updateComment);

module.exports = router;