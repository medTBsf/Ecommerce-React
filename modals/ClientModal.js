const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: String,
  adress: String,
  cardHolder: String,
  cvc: Number,
  email: String,
  expMonth: Number,
  expYear: Number,
  paymentTotal: Number
});

const Payment = mongoose.model("paymentClient", paymentSchema);

module.exports = Payment;
