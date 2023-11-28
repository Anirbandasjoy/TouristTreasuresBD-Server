require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const dbConnection = require("./src/config/db");
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);
// app.listen(PORT, async () => {
//   await dbConnection();
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
const main = async () => {
  try {
    await dbConnection();
    server.listen(PORT, async () => {
      console.log("Server is listening on port 4000");
    });
  } catch (e) {
    console.log("Database Error");
    console.log(e);
  }
};

main();
