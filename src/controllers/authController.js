import express from "express";
import User from "../app/models/User";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: "Usuário já cadastrado." });

    const user = await User.create(req.body);
    user.password = undefined;

    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: "Falha ao registrar novo usuário." });
  }
});

export default app => app.use("/auth", router);
