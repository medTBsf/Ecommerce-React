const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  title: String,
  desc: String,
  price: Number,
  category: String
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
