const express = require("express");
const app = express();
const cors = require("cors");
const description = require('./routes/description.route');
const itinerary = require("./routes/itinerary.route");
const mongoose = require("mongoose");
require("dotenv").config();
require('colors')

const port = process.env.PORT || 8080;



// public route test
app.get("/", (req, res) => {
  res.send({ message: "Itinerary Builder API" });
});

// not found route
app.get("*", (req, res) => {
  res.send({ message: `This URL: ${req.url} is not found` });
});

// database connected
mongoose
  .connect(`${process.env.DATABASE_URI}/builder`)
  .then(() => {
    console.log(`Database Connected Successfully`.black.bgGreen);
  })
  .catch((err) => console.log(err.message).red.bold);

// server running
app.listen(port, () => {
  console.log(`Server is running port ${port}`.red.bold);
});


module.exports = app;