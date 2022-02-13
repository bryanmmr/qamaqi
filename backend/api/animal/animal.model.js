const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  conservationStatus: {
    type: String,
  },
  scientificClassification: [
    {
      title: String,
      classification: String,
    }
  ],
  img: [
    {
      src: String,
      alt: String
    }
  ],
  animalInfo: [
    String
  ]
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;