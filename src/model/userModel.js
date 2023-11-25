const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  education: {
    type: String,
    required: false,
  },
  contactInfo: {
    facebook: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
    instagram: {
      type: String,
      required: false,
    },
  },
  specializations: {
    type: [String],
    required: false,
  },
});

const User = model("User", userSchema);

module.exports = User;
