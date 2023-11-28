const { createStory, getStory } = require("../controller/storyController");

const storyRouter = require("express").Router();

storyRouter.post("/create-story", createStory);
storyRouter.get("/get-story", getStory);

module.exports = storyRouter;
