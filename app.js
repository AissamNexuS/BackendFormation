// to lanch input : nodemon app

//express lanch
const express = require("express");
const app = express();
const port = 8001;

app.set("view engine", "ejs");
app.use(express.static("public"));
/////

// auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// mongo db server

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://issam:Issam2001.com@cluster0.6kslmba.mongodb.net/all-Data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

////////////////////////////////

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/html", (req, res) => {
  res.send("<h1>wellcome </h1>");
});
//newProduits
app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/newProduits", (req, res) => {
  res.render("newProduits");
});

app.use((req, res) => {
  res.status(400).send("invalid page");
});
