import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/api/auth/singup", (req, res) => {
  res.send("Singup Route ");
});

app.get("/api/auth/login", (req, res) => {
  res.send("Login  Route ");
});

app.get("/api/auth/logout", (req, res) => {
  res.send("Logout Routet ");
});

app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`);
});
