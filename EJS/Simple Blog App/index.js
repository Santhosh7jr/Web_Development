import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let allBlogs = []; // Store blogs in memory

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// Blog Submission
app.post("/blogs", (req, res) => {
  const { heading, date, image, paragraph } = req.body;

  if (!heading || !paragraph) {
    return res.redirect("/");
  }

  fetch(image, { method: "HEAD" })
    .then(response => {
      const contentType = response.headers.get("content-type");
      let validImage = "";

      if (response.ok && contentType && contentType.startsWith("image/")) {
        validImage = image;
      }

      const newBlog = {
        heading,
        date,
        image: validImage,
        paragraph
      };

      allBlogs.unshift(newBlog); // newest first

      res.render("blogs", { blogs: allBlogs });
    })
    .catch(() => {
      const newBlog = {
        heading,
        date,
        image: "",
        paragraph
      };

      allBlogs.unshift(newBlog);

      res.render("blogs", { blogs: allBlogs });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
