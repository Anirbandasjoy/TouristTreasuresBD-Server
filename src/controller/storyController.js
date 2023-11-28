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

const getStory = async (req, res, next) => {
  try {
    const story = await Story.find();
    if (!story || story.length === 0) {
      return res.status(404).send({ message: "Story Not Found" });
    }
    res.status(200).send(story);
  } catch (error) {
    console.log(error);
  }
};

const getSingleStory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const story = await Story.findOne({ _id: id });
    if (!story) {
      return res.status(404).send({ message: "Story Not Found With This Id" });
    }
    res.status(200).send(story);
  } catch (error) {
    next(error);
  }
};

const deleteStory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const story = await Story.deleteOne({ _id: id });
    if (!story) {
      return res.status(404).send({ message: "Story Not Found With This Id" });
    }
    res.status(200).send({ message: "Delete Story Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStory,
  getStory,
  getSingleStory,
  deleteStory,
};
