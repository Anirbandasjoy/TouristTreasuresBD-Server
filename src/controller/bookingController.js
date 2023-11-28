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
    if (email !== req.user.email) {
      return res.status(401).send({ message: "unauthorized access" });
    }
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
const getBookingByGuide = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (email !== req.user.email) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    const bookings = await Booking.find({ guideEmail: email });
    if (!bookings || bookings.length === 0) {
      return res.status(404).send({
        message: "No bookings found for the specified Guide email",
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

const getBookingStatus = async (req, res, next) => {
  try {
    const email = req.params.email;
    const booking = await Booking.findOne({ touristEmail: email });
    if (!booking) {
      return res
        .status(404)
        .send({ message: "Booking Not Found With this email", code: 404 });
    }
    const status = booking?.status;
    res.status(200).send(status);
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const status = req.query.status;
  try {
    const updatedStatus = await Booking.findOneAndUpdate(
      { _id: id },
      { status: status },
      { upsert: true, new: true }
    );
    if (!updatedStatus) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json({ message: "updated Successfully", code: 200 });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
  getBookingByTourist,
  deleteBooking,
  getBookingStatus,
  getBookingByGuide,
  updateStatus,
};
