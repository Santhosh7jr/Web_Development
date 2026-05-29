import express from "express";
import morgan from "morgan";
import {fileURLToPath} from "url";

const path = fileURLToPath(import.meta.url);

const app = express();
const port = 3000;

app.use(morgan("short"));

app.get("/", (req, res) => {
  res.sendFile(path.substring(0, path.lastIndexOf("\\")) + "/public/index.html");
});

app.listen(port, () => {
  console.log("Application has started!");
});