const express = require("express");
const app = express();

app.use("/", (req,res) => {
    res.send("Well, Hello There!")
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});