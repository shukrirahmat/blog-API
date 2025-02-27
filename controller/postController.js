const db = require("../db/queries");

const getAllPosts = async (req, res) => {
    const posts = await db.getAllPosts();
    res.json(posts);
}

const getPost = async (req, res) => {
    const post = await db.getPost(req.params.id);
    res.json(post);
}

const postPost = async (req, res) => {
    const published = !!req.body.published
    const post = await db.createNewPost(req.body.title, req.body.content, published)
    res.json(post);
}

const deletePost = async (req, res) => {
    const deletedPost = await db.deletePost(req.params.id);
    res.json(deletedPost);
}

const updatePost = async (req, res) => {
    const published = !!req.body.published
    const updatedPost = await db.updatePost(req.params.id, req.body.title, req.body.content, published);
    res.json(updatedPost)
}

module.exports = {
    getAllPosts,
    getPost,
    postPost,
    deletePost,
    updatePost
}