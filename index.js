import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { title } from "process";

const app = express();
const dirname = path.resolve();

app.use(bodyParser.json());
app.use("/css", express.static(path.join(dirname, "css")));
app.use("/js", express.static(path.join(dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "views", "index.html"));
});

app.get("/ex1", (req, res) => {
  res.sendFile(path.join(dirname, "views", "ex1.html"));
});

app.post("/ex1", (req, res) => {
  const {name, email} = req.body;

  res.send(`${name}, Thank you. We will keep you posted on delivery statut at ${email}.`);
})

app.get("/ex2", (req, res) => {
  res.sendFile(path.join(dirname, "views", "ex2.html"));
});

app.post("/ex2", (req, res) => {
  const {name, countries} = req.body;

  res.send(`Your name is ${name} and you visited ${countries} countries. Keep traveling!`);
})

const articles = [{id: 0, title: 'TITLE', content: 'CONTENT'}];

app.get("/ex3", (req, res) => {
  res.sendFile(path.join(dirname, "views", "ex3.html"));
});

app.post("/ex3", (req, res) => {
  const {title, content} = req.body;
  const ids = articles.map(e => e.id);
  const id = Math.max(...ids) + 1;

  const article = {id, title, content};
  articles.push(article);

  res.send(`New article added successfully with title "${article.title}" and ID ${article.id}!`);
})

app.listen(process.env.PORT || 8080, () => {
  console.log("Running");
});

