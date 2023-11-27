const {
  createBooking,
  getBookingByTourist,
  deleteBooking,
} = require("../controller/bookingController");

const bookingRoutes = require("express").Router();

bookingRoutes.post("/create-booking", createBooking);
bookingRoutes.get("/get-bookingDataByTourist", getBookingByTourist);
bookingRoutes.delete("/delete-booking/:id", deleteBooking);

module.exports = bookingRoutes;
