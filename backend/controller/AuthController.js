const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

// create token
const createToken = (id) => {
  return jwt.sign({ id }, "create token", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

// get request signUp
const getSignUp = (request, response) => {
  return response.status(200).json({
    message: "Hello get signUp",
  });
};

// post request signUp
const postSignUp = async (request, response) => {
  const { username, email, address, password } = request.body;

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const postData = await UserModel.create({
      username,
      email,
      address,
      password: hashedPassword,
    });

    if (postData) {
      const token = createToken(postData._id);
      const cookie = response.cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24,
      });
      return response.status(201).json({
        message: "User created",
        data: request.body,
        cookie: token,
      });
    } else {
      return response.status(400).json({
        message: "User not created",
      });
    }
  } catch (error) {
    if (error) {
      return response.status(400).json({
        message: "Error",
        error: error.message,
      });
    }
  }
};

// get request signIn
const getSignIn = (request, response) => {
  return response.status(200).json({
    message: "Hello get signIn",
  });
};

// post request signIn
const postSignIn = (request, response) => {
  return response.status(200).json({
    message: "Hello post signIn",
  });
};

module.exports = { getSignUp, postSignUp, getSignIn, postSignIn };
