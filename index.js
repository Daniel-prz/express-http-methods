"use strict";

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello and Welcome`);
});
app.get("/about", (req, res) => {
  res.send({ message: "Welcome to About" });
});
app.post("/contact", (req, res) => {
  res.json(req.body);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send({ id: userId });
});
app.get("/search", (req, res) => {
  res.send({ sort: req.query.sort, term: req.query.term });
});
app.use((req, res) => {
  res.send({ message: "Error 404" });
});

const PORT = 3001 || 3002;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
