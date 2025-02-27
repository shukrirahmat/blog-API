const {Router} = require("express");
const router = Router({mergeParams: true});
const commentsController = require("../controller/commentsController");

router.get("/", commentsController.getAllCommentsFromPost);
router.get("/:commentId", commentsController.getSingleComment);
router.post("/", commentsController.addNewComment);
router.delete("/:commentId", commentsController.deleteComment);
router.put("/:commentId", commentsController.updateComment);

module.exports = router;