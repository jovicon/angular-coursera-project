const express = require("express");
const app = express();

app.use(express.json());
app.listen(3000, () => console.log("Server started on port 3000"));

app.get("/url", (req, res, next) => {
  return res.json([
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Rome",
    "Berlin",
    "Madrid",
    "Barcelona",
  ]);
});

const myDestinations = [];
app.get("/my", (req, res, next) => res.json(myDestinations));

app.post("/my", (req, res, next) => {
  console.log(req.body);
  myDestinations.push(req.body);
  res.json(myDestinations);
});
