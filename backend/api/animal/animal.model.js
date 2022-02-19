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
  scientificName: {
    type: String,
  },
  scientificClassification: [
    {}
  ],
  img: [
    {
      src: String,
      alt: String
    }
  ],
  animalInfo: [
    String
  ],
  active: {
    type: Boolean,
    default: false
  },
  comments: [
    {
      user_email: String,
      username: String,
      profile_pic: String,
      comment: String,
      allow: {
        type: Boolean,
        default: false
      }
    }, {id: false}
  ]
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;