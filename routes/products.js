const express = require("express");
const Product = require("../modals/ProductsModal");

const router = express.Router();

router.get("/", (req, res) => {
  Product.find().then(item => res.json(item));
});

module.exports = router;
