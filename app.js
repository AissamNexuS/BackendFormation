// to lanch input : npm run watch

//express lanch
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { validateNumber } = require("./routes/validation");
const app = express();
app.use(express.json());

const calcules = [];

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/api/calculators/:id", (req, res) => {
  const clc = calcules.find((c) => c.id === parseInt(req.params.id));
  if (!clc) res.status(404).send("Couldn't find calculator ");
  res.send(clc);
});

// app.use((req, res, next) => {
//   res.status(400);
//   res.send({
//     error: "Syntaxerror or page invalid",
//   });
// });

app.post("/api/calculators", (req, res) => {
  const { error, value } = validateNumber(req.body);

  if (error) {
    console.log(error);
    return res.send(error.details[0].message);
  }

  const calculator = {
    id: calcules.length + 1,
    number_1: req.body?.number_1,
    number_2: req.body?.number_2,
    Processus: {
      somme: req.body?.number_1 + req.body?.number_2,
      moins: req.body?.number_1 - req.body?.number_2,
      defision: req.body?.number_1 / req.body?.number_2,
      multiplication: req.body?.number_1 * req.body?.number_2,
    },
  };

  res.status(400).json("sentax error or invalid page");

  calcules.push(calculator);
  res.send(calculator);
});

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port})`));
