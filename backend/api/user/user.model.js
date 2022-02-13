const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  email_verified: {
    type: Boolean,
    required: true
  },
  nickname: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  user_id: {
    type: Number
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;