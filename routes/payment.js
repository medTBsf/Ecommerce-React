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
    cardSerial: req.body.cardSerial,
    cvc: req.body.cvc,
    phone: req.body.phone,
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
    cardSerial: Joi.number()
      .min(1000000000000000)
      .max(9999999999999999)
      .required(),
    cvc: Joi.number().required(),
    email: Joi.string()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      .required(),
    phone: Joi.number()
      .min(20000000)
      .max(99999999)
      .required(),

    paymentTotal: Joi.number()
  };
  return Joi.validate(payment, schema);
}

module.exports = router;
