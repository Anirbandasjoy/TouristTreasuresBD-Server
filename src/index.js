const app = require("./app");
const dbConnection = require("./config/db");
const { PORT } = require("./secret/secret");

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Server is running at http://localhost:${PORT}`);
});
