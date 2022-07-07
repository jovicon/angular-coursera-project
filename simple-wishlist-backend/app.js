const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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

const cities = [
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Rome",
  "Berlin",
  "Madrid",
  "Barcelona",
];

app.get("/destinations", (req, res, next) => {
  res.json(
    cities.filter((city) => {
      console.log(city);
      return city.toLowerCase().includes(req.query.search.toLowerCase());
    })
  );
});

const myDestinations = [];
app.get("/my", (req, res, next) => res.json(myDestinations));

app.post("/my", (req, res, next) => {
  console.log(req.body);
  myDestinations.push(req.body);
  res.json(myDestinations);
});
