const express = require("express");
const cors = require("cors");
const app = express();
const postRouter = require("./routes/postRouter");

//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));


//ROUTES
app.use("/posts", postRouter)


//CONNECTING
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});