// to lanch input : npm run watch

//express lanch
const express = require("express");
const app = express();
const port = 8001;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
/////
const Produits = require("./models/produitsSchema");

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
//addnumber
app.get("/home", (req, res) => {
  res.render("index", { theTitle: "Home" });
});

app.get("/addnumber", (req, res) => {
  res.render("newNumber", { theTitle: "Add new number" });
});

app.post("/home", (req, res) => {
  const listProduits = new Produits({
    ...req.body,
    somme: parseInt(req.body?.number1) + parseInt(req.body?.number2),
  });

  console.log(req.body);

  listProduits
    .save()
    .then((result) => {
      res.redirect("/home");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/home", (req, res) => {});

app.use((req, res) => {
  res.status(400).send("invalid page");
});
