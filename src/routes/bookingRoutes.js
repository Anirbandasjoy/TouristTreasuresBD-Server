const {
  createBooking,
  getBookingByTourist,
  deleteBooking,
  getBookingStatus,
  getBookingByGuide,
  updateStatus,
  updatePaymentStatus,
} = require("../controller/bookingController");
const { verifyToken } = require("../middlewares/auth");

const bookingRoutes = require("express").Router();

bookingRoutes.post("/create-booking", createBooking);
bookingRoutes.get(
  "/get-bookingDataByTourist",
  verifyToken,
  getBookingByTourist
);
bookingRoutes.get("/get-bookingDataByGuide", verifyToken, getBookingByGuide);
bookingRoutes.delete("/delete-booking/:id", deleteBooking);
bookingRoutes.get("/get-booking-status/:email", getBookingStatus);
bookingRoutes.patch("/update-status/:id", updateStatus);
bookingRoutes.patch("/update-paymentStatus/:id", updatePaymentStatus);

module.exports = bookingRoutes;
