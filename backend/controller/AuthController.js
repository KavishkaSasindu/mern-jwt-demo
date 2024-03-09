const UserModel = require("../models/UserModel");

const bcrypt = require("bcrypt");

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
      return response.status(201).json({
        message: "User created",
        data: request.body,
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
