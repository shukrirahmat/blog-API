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


//CONNECTING
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});