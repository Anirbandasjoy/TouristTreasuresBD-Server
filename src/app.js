const express = require("express");
const app = express();
const createError = require("http-errors");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const packageRouter = require("./routes/packageRoutes");
const cors = require("cors");
const wishListRouter = require("./routes/wishListRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");
const storyRouter = require("./routes/StoryRoutes");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://assignment12-848ad.web.app"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRouter);
app.use("/api/v1", packageRouter);
app.use("/api/v1", wishListRouter);
app.use("/api/v1", bookingRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", storyRouter);
app.get("/", (req, res) => {
  res.send("Assignment-12 Server is Running ....");
});

app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

app.use((err, req, res, next) => {
  return res.json({
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
