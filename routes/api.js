const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("api 8001");
});
router.post("/", (req, res) => {
  res.status(200).json({
    number_et_Processus: {
      number: {
        number_1: req.body.number1,
        number_2: req.body.number2,
      },
      Processus: {
        somme: req.body?.number1 + req.body?.number2,
        moins: req.body?.number1 - req.body?.number2,
        defision: req.body?.number1 / req.body?.number2,
        multiplication: req.body?.number1 * req.body?.number2,
      },
    },
  });
});

module.exports = router;
