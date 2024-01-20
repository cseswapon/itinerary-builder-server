const express = require("express");
const route = express.Router();
const Description = require("../modules/Description.module");

route
  .route("/")
  .get(async (req, res) => {
    try {
      const result = await Description.find().select(
        "-createdAt -updatedAt -__v"
      );
      res.send( {result} );
    } catch (err) {
      res.send({ message: err.message });
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body;
      const result = await Description.create(body);
      res.send({result} );
    } catch (err) {
      res.send({ message: err.message });
    }
  });

module.exports = route;
