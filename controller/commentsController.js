const db = require("../db/queries");

const getAllCommentsFromPost = async (req, res) => {
    const postId = parseInt(req.params.postId);
    const comments = await db.getAllCommentFromPost(postId);
    res.json(comments);
}

const getSingleComment = async (req, res) => {
    const commentId = parseInt(req.params.commentId);
    const comment = await db.getSingleComment(commentId);
    res.json(comment);
}

const addNewComment = async (req, res) => {
    const postId = parseInt(req.params.postId);

    // THIS NEED TO ADJUST
    const userId = parseInt(req.body.userId)
    //------------------

    const comment = await db.addNewComment(postId, userId, req.body.content);
    res.json(comment);
}

const deleteComment = async (req, res) => {
    const commentId = parseInt(req.params.commentId);
    const comment = await db.deleteComment(commentId);
    res.json(comment);
}

const updateComment = async (req, res) => {
    const commentId = parseInt(req.params.commentId);
    const comment = await db.updateComment(commentId, req.body.content);
    res.json(comment)
}


module.exports = {
    getAllCommentsFromPost,
    addNewComment,
    getSingleComment,
    deleteComment,
    updateComment
}