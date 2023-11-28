const Story = require("../model/storyModel");

const createStory = async (req, res, next) => {
  try {
    const story = req.body;
    const result = await Story.create(story);
    if (!result) {
      res.status(203).send({ message: "Story Not Created" });
    }
    res.status(200).send({ message: "Story Add Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStory,
};
