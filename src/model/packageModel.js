const { Schema, model } = require("mongoose");

const packageSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  images: {
    type: {
      image1: {
        type: String,
        required: true,
      },
      image2: {
        type: String,
        required: true,
      },
      image3: {
        type: String,
        required: true,
      },
      image4: {
        type: String,
        required: true,
      },
    },
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

const Package = model("Package", packageSchema);

module.exports = Package;
