const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    country: {
      type: String,
      require: true,
      message: "Title {VALUES}",
    },
    title: {
      type: String,
      require: true,
      message: "Title {VALUES}",
    },
    description:{
        type: String,
        require: true,
        message: "Description {VALUES}"
    }
  },
  {
    timestamps: true,
  }
);

const Description = mongoose.model("Description", schema);

module.exports = Description;
