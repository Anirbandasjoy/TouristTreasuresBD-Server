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
      return res.status(404).send({
        message: "No bookings found for the specified tourist email",
        code: 404,
      });
    }
    return res.status(200).send(bookings);
  } catch (error) {
    next(error);
  }
};

const deleteBooking = async (req, res, next) => {
  try {
    const id = req.params.id;
    const booking = await Booking.findOneAndDelete({ _id: id });
    if (!booking) {
      return res.status(404).send({ message: "booking not found", code: 404 });
    }
    res.status(200).send({ message: "Deleted successfully", code: 200 });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
  getBookingByTourist,
  deleteBooking,
};
