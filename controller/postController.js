const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await db.getAllPosts();
    res.json(posts);
})

const getPost = asyncHandler(async (req, res) => {
    const post = await db.getPost(parseInt(req.params.postId));
    res.json(post);
})

const postPost = asyncHandler(async (req, res) => {
    const published = !!req.body.published
    const post = await db.createNewPost(req.body.title, req.body.content, req.currentUsername, published)
    res.json(post);
})

const deletePost = asyncHandler(async (req, res) => {
    const deletedPost = await db.deletePost(parseInt(req.params.postId));
    res.json(deletedPost);
})

const updatePost = asyncHandler(async (req, res) => {
    const published = !!req.body.published
    const updatedPost = await db.updatePost(parseInt(req.params.postId), req.body.title, req.body.content, published);
    res.json(updatedPost)
})

module.exports = {
    getAllPosts,
    getPost,
    postPost,
    deletePost,
    updatePost
}