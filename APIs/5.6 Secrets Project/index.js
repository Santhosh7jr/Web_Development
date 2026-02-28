import express from "express";
import axios from "axios";
import {dirname} from "path";
import { fileURLToPath } from "url";

const port = 3000;
const loc = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(loc + "/public"));

app.get("/", async (req, res) => {
    const result = await axios("https://secrets-api.appbrewery.com/random");
    const data = result.data;
    res.render(loc + "/views/index.ejs", {secret : data.secret, user : data.username});
});
app.listen(port, () => {
    console.log("App is running on port 3000");
});
