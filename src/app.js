const express = require("express");
const app = express();
const createError = require("http-errors");
const userRouter = require("./routes/userRoutes");
const packageRouter = require("./routes/packageRoutes");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/v1", packageRouter);
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