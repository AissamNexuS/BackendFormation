const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const produitsSchema = new Schema({
  title: String,
  summary: String,
  prix: String,
  total: Number,
  body: String,
});
// Create a model based on that schema
const Produits = mongoose.model("Produits", produitsSchema);

// export the model
module.exports = Produits;
