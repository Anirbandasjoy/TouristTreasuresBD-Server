const { createBooking } = require("../controller/bookingController");

const bookingRoutes = require("express").Router();

bookingRoutes.get("/create-booking", createBooking);

module.exports = bookingRoutes;
