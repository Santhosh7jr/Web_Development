import express from "express";
import {fileURLToPath} from "url"; 

const path = fileURLToPath(import.meta.url);

const app = express();
const port = 3000;

app.use((req, res, next) => {

  req.body = {name : "guru", age : 21};

  next();

});

app.get("/", (req, res) => {
  res.sendFile(path.substring(0, path.lastIndexOf("\\")) + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log("Server has started!");
});