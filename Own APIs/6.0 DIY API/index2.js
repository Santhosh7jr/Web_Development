import express from "express";
import axios from "axios";

const app = express();

app.get("/", async(req, res) => {
    res.json((await axios("http://localhost:5000/item")).data);
});

app.listen(3005, () => {});