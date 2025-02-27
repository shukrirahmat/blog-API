const {Router} = require("express");
const router = Router();
const postController = require("../controller/postController");
const commentsRouter = require("./commentsRouter");

router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPost);
router.post("/", postController.postPost);
router.delete("/:postId", postController.deletePost);
router.put("/:postId", postController.updatePost);
router.use("/:postId/comments", commentsRouter);


module.exports = router;