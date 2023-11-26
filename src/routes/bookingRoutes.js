const {
  createBooking,
  getBookingByTourist,
} = require("../controller/bookingController");

const bookingRoutes = require("express").Router();

bookingRoutes.post("/create-booking", createBooking);
bookingRoutes.get("/get-bookingDataByTourist", getBookingByTourist);

module.exports = bookingRoutes;
