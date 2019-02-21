import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "teste" ? ".env.test" : "env"
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
    // this.express.use(express.json());
  }
}

export default new ServerController().express;
