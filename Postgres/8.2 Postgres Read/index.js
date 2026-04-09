import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "yhwh",
  port: 5432,
});

db.connect();

let quiz = [];

const app = express();
const port = 3000;

// set view engine
app.set("view engine", "ejs");

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (
    currentQuestion &&
    currentQuestion.name &&
    currentQuestion.name.toLowerCase() === answer.toLowerCase()
  ) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  if (!quiz || quiz.length === 0) {
    return;
  }
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

// Load quiz data then start server
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
    db.end();
    process.exit(1);
  }
  quiz = res.rows;
  db.end();

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
