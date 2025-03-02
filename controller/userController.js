const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const signUp = asyncHandler(async (req, res) => {
  if (!req.body.password || !req.body.username) {
    return res.status(210).json({ error: "All fields are required" });
  }

  const existingUser = await db.findUser(req.body.username);
  if (existingUser) {
    return res.status(390).json({error: `Username "${req.body.username}" already exists`});
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = await db.createUser(req.body.username, hashedPassword, !!req.body.isAuthor);
  return res.json(newUser);
});

module.exports = {
  signUp,
};
