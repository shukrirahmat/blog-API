const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getAllCommentsFromPost = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }

  const postId = parseInt(req.params.postId);
  const comments = await db.getAllCommentFromPost(postId);
  res.json(comments);
});

const getSingleComment = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }

  const commentId = parseInt(req.params.commentId);
  const comment = await db.getSingleComment(commentId);
  res.json(comment);
});

const addNewComment = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }

  const postId = parseInt(req.params.postId);
  const comment = await db.addNewComment(
    postId,
    req.body.content,
    req.currentUsername
  );
  res.json(comment);
});

const deleteComment = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }

  const commentId = parseInt(req.params.commentId);
  const comment = await db.deleteComment(commentId);
  res.json(comment);
});

const updateComment = asyncHandler(async (req, res) => {
  if (!req.verified) {
    return res.sendStatus(401);
  }

  const commentId = parseInt(req.params.commentId);
  const comment = await db.updateComment(commentId, req.body.content);
  res.json(comment);
});

module.exports = {
  getAllCommentsFromPost,
  addNewComment,
  getSingleComment,
  deleteComment,
  updateComment,
};
