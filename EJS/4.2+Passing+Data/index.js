import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __location = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__location + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  res.render(__location + "/views/index.ejs", {len : (req.body.fName + req.body.lName).length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
