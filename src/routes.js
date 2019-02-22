import SessionController from "./app/controllers/SessionController";
import AuthMiddleware from "./app/middleware/auth";
import express from "express";
const routes = express.Router();

// Public Routes
routes.post("/sessions", SessionController.store);

routes.use(AuthMiddleware);

// Routes with authentication
routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

export default routes;
