// req = input data
// res = output actions

import express from "express";
let app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my website!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>Welcome to the About page</h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Welcome to the contact page!</h2>");
});

app.listen(port, () => {
  console.log("server has started!");
});