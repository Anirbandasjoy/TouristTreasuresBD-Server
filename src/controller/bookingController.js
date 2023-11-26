const Booking = require("../model/mongooseModel");

const createBooking = async (req, res, next) => {
  try {
    const bookingData = req.body;
    const result = await Booking.create(bookingData);
    if (!result) {
      res.status(203).send({ message: "Not Created Booking", code: 203 });
    }
    if (result) {
      return res.status(201).send(result);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
};
