import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __location = fileURLToPath(import.meta.url);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
  res.sendFile(__location.substring(0, __location.lastIndexOf("\\")) + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name is: </h1> <h1>${req.body.street}${req.body.pet}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
