// to lanch input : nodemon app

const express = require("express");
const app = express();
const port = 8001;

app.get("/", (req, res) => {
  res.send("FG!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
