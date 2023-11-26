const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  touristName: {
    type: String,
    required: true,
  },
  touristEmail: {
    type: String,
    required: true,
  },
  touristImage: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  guideEmail: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
