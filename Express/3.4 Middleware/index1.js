import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __location = dirname(fileURLToPath(import.meta.url));

const obj = {
    name : "guru",
    age : 21,
    college : "MCE"
};


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(__location + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);

    setTimeout(() => {
        res.send(req.body.street);
    }, 1000);

});

app.listen(port, () => {
    console.log("Server has started Successfully");
});