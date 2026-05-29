import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const loc = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(loc + "/public"));

app.get("/", (req, res) => {
  res.render(loc + "/views/index.ejs");
});

app.get("/about", (req, res) => {
  res.render(loc + "/views/about.ejs");
});

app.get("/contact", (req, res) => {
  res.render(loc + "/views/contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
