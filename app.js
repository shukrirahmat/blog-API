const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
require("dotenv").config();

//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));


//ROUTES
app.use("/user", userRouter);
app.use("/posts", postRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({message: err.message})
});


//CONNECTING
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});