const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res) => {
  if (false) {
    const posts = await db.getAllPostsPublic();
    return res.json(posts);
  } else {
    const posts = await db.getAllPostsVerified(req.currentUsername);
    return res.json({username: req.currentUsername});
  }
});

const getPost = asyncHandler(async (req, res) => {
  const post = await db.getPost(parseInt(req.params.postId));
  if (post.published) return res.json(post);
  else {
    if (!req.verified) {
      return res.sendStatus(401);
    }
    if (req.currentUsername === post.authorUsername) {
      return res.json(post);
    }
    return res.sendStatus(401);
  }
});

const postPost = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }

  const published = !!req.body.published;
  const post = await db.createNewPost(
    req.body.title,
    req.body.content,
    req.currentUsername,
    published
  );
  res.json(post);
});

const deletePost = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }

  const deletedPost = await db.deletePost(parseInt(req.params.postId));
  res.json(deletedPost);
});

const updatePost = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }
  
  const published = !!req.body.published;
  const updatedPost = await db.updatePost(
    parseInt(req.params.postId),
    req.body.title,
    req.body.content,
    published
  );
  res.json(updatedPost);
});

module.exports = {
  getAllPosts,
  getPost,
  postPost,
  deletePost,
  updatePost,
};
