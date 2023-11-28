const {
  createStory,
  getStory,
  getSingleStory,
} = require("../controller/storyController");

const storyRouter = require("express").Router();

storyRouter.post("/create-story", createStory);
storyRouter.get("/get-story", getStory);
storyRouter.get("/get-signleDetails/:id", getSingleStory);
module.exports = storyRouter;
