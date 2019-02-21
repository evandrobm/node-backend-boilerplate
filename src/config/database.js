import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "teste" ? ".env.test" : "env"
});

const config = {
  host: process.env.DB_HOST || "127.0.0.1",
  username: process.env.DB_USER || "docker",
  password: process.env.DB_PASS || "docker",
  database: process.env.DB_NAME || "DB_NAME",
  dialect: process.env.DB_DIALECT || "mysql",
  storage: "./__tests__/database.sqlite",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};

export default config;
