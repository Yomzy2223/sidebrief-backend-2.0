const express = require("express");
const dotenv = require("dotenv");
const logger = require("./src/utils/logger");
const path = require("path");
const usersRoutes = require("./src/modules/user/routes/routes");
const bankRoutes = require("./src/modules/bank/routes/routes");
const connectDb = require("./src/config/database");

const app = express();
dotenv.config({ path: path.resolve(__dirname, "./.env.development") });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("testing");
  logger.info({ message: "correct logger", level: "info" });
});

//connect to database
connectDb();

//all routes
app.use("/users", usersRoutes);
app.use("/banks", bankRoutes);

const port = process.env.PORT || "8000";
app.listen(port, () => {
  console.log(`Port ${port} Active`);
});
