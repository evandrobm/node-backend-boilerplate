import express from "express";
import dotenv from "dotenv";

import routes from "./routes";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : "env"
});

class ServerController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use("/", routes);
  }
}

export default new ServerController().express;
