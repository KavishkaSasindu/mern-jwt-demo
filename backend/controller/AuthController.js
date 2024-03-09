const UserModel = require("../models/UserModel");

// get request signUp
const getSignUp = (request, response) => {
  return response.status(200).json({
    message: "Hello get signUp",
  });
};

// post request signUp
const postSignUp = async (request, response) => {
  const { username, email, address, password } = request.body;

  console.log(request.body);

  try {
    const postData = await UserModel.create({
      username,
      email,
      address,
      password,
    });

    if (!postData) {
      return response.status(201).json({
        message: "User created",
        data: request.body,
      });
    }
  } catch (error) {
    if (error) {
      return response.status(400).json({
        message: "Error",
        error: error,
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
