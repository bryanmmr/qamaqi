const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: false
  }
});

const Animal = mongoose.model("Animal", AnimalsSchema);

module.exports = Animal;