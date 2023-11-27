const {
  createBooking,
  getBookingByTourist,
  deleteBooking,
  getBookingStatus,
  getBookingByGuide,
  updateStatus,
} = require("../controller/bookingController");

const bookingRoutes = require("express").Router();

bookingRoutes.post("/create-booking", createBooking);
bookingRoutes.get("/get-bookingDataByTourist", getBookingByTourist);
bookingRoutes.get("/get-bookingDataByGuide", getBookingByGuide);
bookingRoutes.delete("/delete-booking/:id", deleteBooking);
bookingRoutes.get("/get-booking-status/:email", getBookingStatus);
bookingRoutes.patch("/update-status/:id", updateStatus);

module.exports = bookingRoutes;
