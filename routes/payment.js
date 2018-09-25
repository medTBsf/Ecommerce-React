const express = require("express");
const Payment = require("../modals/ClientModal");
const Joi = require("joi");

const router = express.Router();

router.post("/", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }

  let newPayment = {
    name: req.body.name,
    email: req.body.email,
    adress: req.body.adress,
    cardHolder: req.body.cardHolder,
    cvc: req.body.cvc,
    expMonth: req.body.expMonth,
    expYear: req.body.expYear,
    paymentTotal: req.body.paymentTotal
  };

  const payment = new Payment(newPayment);
  payment.save().then(p => res.json(p));

  res.send(newPayment);
});

function validate(payment) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(15)
      .regex(/\D/)
      .required(),
    adress: Joi.string(),
    cardHolder: Joi.string(),
    cvc: Joi.number(),
    email: Joi.string()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      .required(),
    expMonth: Joi.number()
      .min(1)
      .max(12),
    expYear: Joi.number()
      .min(2019)
      .max(2029),
    paymentTotal: Joi.number()
  };
  return Joi.validate(payment, schema);
}

module.exports = router;
