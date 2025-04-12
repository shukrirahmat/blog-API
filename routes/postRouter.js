const {Router} = require("express");
const router = Router();
const postController = require("../controller/postController");
const commentsRouter = require("./commentsRouter");
const {verifyToken} = require("../controller/authentication")

router.get("/", postController.getAllPosts);
router,get("/userPosts", verifyToken, postController.getUserPosts);
router.get("/:postId", postController.getPost);
router.post("/", verifyToken, postController.postPost);
router.delete("/:postId", verifyToken, postController.deletePost);
router.put("/:postId", verifyToken, postController.updatePost);

router.use("/:postId/comments", commentsRouter);


module.exports = router;