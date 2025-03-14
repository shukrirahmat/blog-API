const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = asyncHandler(async (req, res) => {
  if (!req.body.password || !req.body.username) {
    return res.json({ error: "All fields are required" });
  }

  const existingUser = await db.findUser(req.body.username);
  if (existingUser) {
    return res.json({error: `Username "${req.body.username}" already exists`});
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = await db.createUser(req.body.username, hashedPassword);
  return res.json(newUser);
});

const logIn = asyncHandler(async (req, res) => {
  const user = await db.findUser(req.body.username);
  if (!user) return res.json({usernameErr: "Username does not exists"});
  
  const pwmatch = await bcrypt.compare(req.body.password, user.password);
  if (!pwmatch) return res.json({passwordErr: "Incorrect password"});

  jwt.sign({username: req.body.username}, process.env.TOKEN_SECRET, { expiresIn: '1h' }, (err, token) => {
    if (err) return res.status(500).json({message: "Login error"});
    res.json({token});
  })
})

module.exports = {
  signUp,
  logIn
};
