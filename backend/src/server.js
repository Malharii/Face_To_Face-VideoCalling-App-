import express from "express";
import dotenv from "dotenv";
import apiroutes from "./routes/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use("/api/auth", apiroutes);

app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`);
});
