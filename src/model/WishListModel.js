const { Schema, model } = require("mongoose");

const wishListSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tourType: {
    type: String,
    required: true,
  },
  tripTitle: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Wishlist = model("Wishlist", wishListSchema);

module.exports = Wishlist;
