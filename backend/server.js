import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello malhar ");
});

app.listen(8000, () => {
  console.log("server is runing on 7000");
});
