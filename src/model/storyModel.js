const { Schema, model } = require("mongoose");

const storySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sportName: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
});

const Story = model("Story", storySchema);

module.exports = Story;
