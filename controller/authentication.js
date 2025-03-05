const jwt = require("jsonwebtoken");
require("dotenv").config();
const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
            if (err) {
                res.sendStatus(403);
            }
            req.currentUsername = data.username;
            next();
        })

    } else {
        res.sendStatus(403);
    }
})

module.exports = {
    verifyToken
}