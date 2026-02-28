import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import {dirname} from "path";
import { fileURLToPath } from "url";

const loc = fileURLToPath(dirname(import.meta.url));

const port = 3000;
const app = express();

app.use(express.static(loc + "/public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.render(loc + "/views/index.ejs");
});

app.post("/submit", async (req, res) => {

    const jokeType = req.body.choice;

    const joke = await axios(`https://v2.jokeapi.dev/joke/${jokeType}`);

    res.render(loc + "/views/result.ejs", {setup : joke.data.setup, delivery : joke.data.delivery});
    
});

app.listen(port, () => {
    console.log("App launched succesfully");
});