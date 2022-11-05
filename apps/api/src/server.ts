import express from "express";
import morgan from "morgan";
import cors from "cors";

import helloRouter from "./routes/hello";
import { parseExpressApp } from "express-route-parser";
import { errorHandler } from "./errorHandler";

export const createServer = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.use("/hello", helloRouter);

  const allRoutes = parseExpressApp(app);
  app.get("/route-list", (req, res, next) => res.status(200).json(allRoutes));

  app.use(errorHandler);

  return app;
};
