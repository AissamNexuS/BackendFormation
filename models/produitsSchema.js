const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const produitsSchema = new Schema({
  number1: Number,
  number2: Number,
  somme: Number,
});
// Create a model based on that schema
const Produits = mongoose.model("Produits", produitsSchema);

// export the model
module.exports = Produits;
