const { createStory } = require("../controller/storyController");

const storyRouter = require("express").Router();

storyRouter.post("/create-story", createStory);

module.exports = storyRouter;
