const {
  createStory,
  getStory,
  getSingleStory,
  deleteStory,
} = require("../controller/storyController");

const storyRouter = require("express").Router();

storyRouter.post("/create-story", createStory);
storyRouter.get("/get-story", getStory);
storyRouter.get("/get-signleDetails/:id", getSingleStory);
storyRouter.delete("/deleteStory/:id", deleteStory);
module.exports = storyRouter;
