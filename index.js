const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const usersRoutes = require("./src/modules/user/routes");
const bankRoutes = require("./src/modules/bank/routes");
const staffRoutes = require("./src/modules/staff/routes");
const serviceRoutes = require("./src/modules/service/routes");
const collaboratorRoutes = require("./src/modules/collaborator/routes");
const connectDb = require("./src/config/database");
const logger = require("./src/config/logger");

const app = express();
dotenv.config({ path: path.resolve(__dirname, "./.env") });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("testing");
  logger.info({ message: "Testing the server" });
});

//connect to database
// connectDb();

//all routes
//user
app.use("/users", usersRoutes);
//bank
app.use("/banks", bankRoutes);
// staff
app.use("/staffs", staffRoutes);
//service
app.use("/services", serviceRoutes);
//collaborator
app.use("/collaborators", collaboratorRoutes);

const port = process.env.PORT || "8000";
app.listen(port, () => {
  console.log(`Port ${port} Active`);
});
module.exports = app;
