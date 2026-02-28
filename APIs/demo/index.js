import express from "express";
import axios from "axios";

const app = express();

app.get("/", async (req, res) => {

    const result = await axios("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=76.16&current_weather=true");

    res.send(result.data.current_weather);

})

app.listen(3000, () => {
    console.log("App is Running Properly!");
});