import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __location = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(__location + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(req.body.password.equals("YHWH")) {
        res.sendFile(__location + "/public/secret.html");
    } else {
        res.sendFile(__location + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log("app started listening");
});