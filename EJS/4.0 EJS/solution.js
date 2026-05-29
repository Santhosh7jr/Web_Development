import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __location = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {

  let today = new Date();

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let dayType = today.getDay();

  if (dayType == 0 || dayType == 6) {
    res.render(__location + "/views/solution.ejs", {dayType : days[dayType], advice : "It's time to enjoy", date : today.getDate()});
  } else {
    res.render(__location + "/views/solution.ejs", {dayType : days[dayType], advice : "It's time to Work Hard", date : today.getDate()});
  }

});


app.listen(port, () => {
  console.log("App has started listening!");
});