const express = require("express");
const app = express();
const cors = require("cors");
const description = require('./routes/description.route');
const itinerary = require("./routes/itinerary.route");

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/description",description)
app.use("/api/v1/itinerary", itinerary);

// public route test
app.get("/", (req, res) => {
  res.send({ message: "Itinerary Builder API" });
});

// not found route
app.get("*", (req, res) => {
  res.send({ message: `This URL: ${req.url} is not found` });
});

module.exports = app;
