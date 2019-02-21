import express from "express";
import bodyParser from "body-parser";
import authController from "./controllers/authController";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("OK");
});

authController(app);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

export default app;
