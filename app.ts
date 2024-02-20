import { Request, Response } from "express";

import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import usersRoutes from "./src/modules/user/routes";
import bankRoutes from "./src/modules/bank/routes";
import countryRoutes from "./src/modules/country/routes";
import staffRoutes from "./src/modules/staff/routes";
import diligenceRoutes from "./src/modules/diligence/routes";
import serviceRoutes from "./src/modules/serviceCategory/routes";
import collaboratorRoutes from "./src/modules/collaborator/routes";
import productRoutes from "./src/modules/product/routes";
import productRequestRoutes from "./src/modules/productRequest/routes";
import paymentRoutes from "./src/modules/payment/routes";
// const connectDb = require("./src/config/database");
import logger from "./src/config/logger";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import options from "./src/config/swagger";
import session from "express-session";
import ErrorHandler from "./src/middleware/errorHandler";
import { ScheduledJob } from "./src/modules/productRequest/service";

const app = express();
dotenv.config({ path: path.resolve(__dirname, "./.env") });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  res.send("testing");

  logger.info({ message: "Testing the server" });
});

//connect to database
// connectDb();
interface SessionProps {
  secret: any;
  resave: boolean;
  saveUninitialized: boolean;
  cookie: {
    secure: boolean;
  };
}

//run product crone job
// ScheduledJob();

const sessionOption: SessionProps = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true },
};

app.use(session(sessionOption));

app.use(
  cors({
    origin: "*",
  })
);

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
//test
app.use("/diligence", diligenceRoutes);
//productService
app.use("/product", productRoutes);
//productRequest
app.use("/productRequest", productRequestRoutes);

//payment
app.use("/payment", paymentRoutes);

const specs = swaggerJSDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use(ErrorHandler);
export default app;
