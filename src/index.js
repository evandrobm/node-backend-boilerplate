import app from "./server";
import authController from "./controllers/authController";

const port = process.env.PORT || 3000;

authController(app);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

export default app;
