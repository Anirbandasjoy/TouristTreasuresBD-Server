require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const createPayment = async (req, res, next) => {
  try {
    const { price } = req.body;
    console.log(price, "paymetn intent");
    const amount = parseInt(price * 100);

    console.log(amount, "amount inside the intent");

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createPayment,
};
