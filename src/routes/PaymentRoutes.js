const { createPayment } = require("../controller/paymentController");

const paymentRoutes = require("express").Router();

paymentRoutes.post("/create-payment-intent", createPayment);

module.exports = paymentRoutes;
