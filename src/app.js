const express = require("express");
const app = express();
const createError = require("http-errors");
const userRouter = require("./routes/userRoutes");
const packageRouter = require("./routes/packageRoutes");
const cors = require("cors");
const wishListRouter = require("./routes/wishListRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/v1", packageRouter);
app.use("/api/v1", wishListRouter);
app.use("/api/v1", bookingRoutes);
app.use("/api/v1", authRoutes);
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
