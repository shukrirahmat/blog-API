const {Router} = require("express");
const router = Router();
const postController = require("../controller/postController")

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.postPost);
router.delete("/:id", postController.deletePost);
router.put("/:id", postController.updatePost);


module.exports = router;