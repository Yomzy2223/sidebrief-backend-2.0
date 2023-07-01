const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const usersRoutes = require("./src/modules/user/routes");
const bankRoutes = require("./src/modules/bank/routes");
const countryRoutes = require("./src/modules/country/routes");
const staffRoutes = require("./src/modules/staff/routes");
const serviceRoutes = require("./src/modules/productService/routes");
const collaboratorRoutes = require("./src/modules/collaborator/routes");
const connectDb = require("./src/config/database");
const logger = require("./src/config/logger");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require("./src/config/swagger");
const passport = require("passport");
const { OAuth2Strategy: GoogleStrategy } = require("passport-google-oauth20");
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
// staff
app.use("/staffs", staffRoutes);
//collaborator
app.use("/collaborators", collaboratorRoutes);
//service
app.use("/services", serviceRoutes);
//bank
app.use("/banks", bankRoutes);
//country
app.use("/countries", countryRoutes);

const specs = swaggerJSDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

module.exports = app;
