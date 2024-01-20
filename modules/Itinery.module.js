const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    country: {
      type: String,
      require: true,
      message: "Country {VALUES}",
    },
    title: {
      type: String,
      require: true,
      message: "Title {VALUES}",
    },
    description: {
      type: String,
      require: true,
      message: "Description {VALUES}",
    },
  },
  {
    timestamps: true,
  }
);

const Itinerary = mongoose.model("Itinerary", schema);

module.exports = Itinerary;
