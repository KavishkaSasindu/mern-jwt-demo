const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Minimum password length is 6"],
  },
});

const User = mongoose.model("auth", UserSchema);

module.exports = User;
