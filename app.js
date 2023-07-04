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

const { PrismaClient } = require("@prisma/client");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const prisma = new PrismaClient();
// OAuth configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALL_BACK_URL,
      passReqToCallback: true, //
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await prisma.user.findUnique({
          where: { email: userPayload.email.toLowerCase() },
        });
        if (user !== null) {
          done(null, user);
          return {
            error: "User with this email already exists",
            statusCode: 400,
          };
        } else {
          console.log(profile);
        }
      } catch (error) {
        console.log(error);
      }
    }
    //     console.log("trying to access google")
    //   let userProfile = profile;
    //   return done(null, userProfile);
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

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
