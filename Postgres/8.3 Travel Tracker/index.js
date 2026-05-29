import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "world",
  password : "yhwh",
  port : 5432
});

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {

  try {

    const result = await db.query(`
      SELECT * FROM visited_countries;
    `);

    const country_codes = result.rows
      .map(row => row.country_code)
      .join(",");

    console.log(country_codes.split(","));

    res.render("index", {
      total: result.rowCount,
      countries: country_codes,
      error: null
    });

  } catch (error) {

    res.render("index", {
      total: 0,
      countries: "",
      error: error.message
    });

  }

});

app.post("/add", async (req, res) => {
  
  const country = req.body.country;

  const result = await db.query('select * from countries where lower(country_name) = lower($1) or lower(country_code) = lower($1)', [country]);

  try{
    if (result.rowCount === 0) throw new Error("Invalid country name or country code.");
  } catch (error) {
    return res.render('index', {
      total: 0,
      countries: "",
      error: error.message
    });
  }
  
  const searchForCountryCode = await db.query('select * from visited_countries where lower(country_code) = lower($1)', [result.rows[0].country_code]);

  try{
    if (searchForCountryCode.rowCount !== 0) throw new Error("Country has Already Added!");
  } catch (error) {
    return res.render('index', {
      total: 0,
      countries: "",
      error: error.message
    });
  }
  
  await db.query('insert into visited_countries (country_code) values ($1)', [result.rows[0].country_code])

  res.redirect("/");

});

app.listen(port, async () => {

  await db.connect();

  console.log(`Server running on http://localhost:${port}`);
});
