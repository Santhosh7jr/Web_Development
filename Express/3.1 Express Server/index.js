import express from "express";
let app = express();
const port = 3000;

app.listen(port, () => {
  console.log("hey!, I'm running");
});