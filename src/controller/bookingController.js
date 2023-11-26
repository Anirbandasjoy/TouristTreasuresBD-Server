const Booking = require("../model/bookingModel");

const createBooking = async (req, res, next) => {
  try {
    const bookingData = req.body;
    const result = await Booking.create(bookingData);
    if (result) {
      return res
        .status(201)
        .json({ message: "Booking created successfully", booking: result });
    } else {
      return res
        .status(500)
        .json({ message: "Unable to create booking", code: 500 });
    }
  } catch (error) {
    next(error);
  }
};

const getBookingByTourist = async (req, res, next) => {
  try {
    const email = req.query.email;
    const bookings = await Booking.find({ touristEmail: email });
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({
        message: "No bookings found for the specified tourist email",
        code: 404,
      });
    }
    return res
      .status(200)
      .json({ message: "Bookings found successfully", bookings });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
  getBookingByTourist,
};
