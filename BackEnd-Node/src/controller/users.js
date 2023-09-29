const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const apiResponses = require("../helpers/apiResponse");
const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    const successResponse = apiResponses.createSuccessResponse(
      data,
      "Get All Users Success"
    );
    res.json(successResponse);
  } catch (error) {
    const errorResponse = apiResponses.createErrorResponse(
      "Server Error",
      error,
      500
    );
    res.status(errorResponse.status).json(errorResponse);
  }
};

const createNewUser = async (req, res) => {
  const { first_name, last_name, email, number, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 13);
  const newData = {
    first_name,
    last_name,
    email,
    number,
    password: hashedPassword,
  };
  try {
    await UsersModel.createNewUser(newData);
    const successResponse = apiResponses.createSuccessResponse(
      newData,
      "CREATE new user success"
    );
    res.json(successResponse);
  } catch (error) {
    const errorResponse = apiResponses.createErrorResponse(
      "Server Error",
      error,
      500
    );
    res.status(errorResponse.status).json(errorResponse);
  }
};

const userSignin = async (req, res) => {
  const {email, password} = req.body;
  try {
     // Validate user input
     if (email == "" || password == "") {
      const errorResponse = apiResponses.createErrorResponse(
        "All input is required",
        {},
        400
      );
      res.status(errorResponse.status).json(errorResponse);
    }
    const [user] = await UsersModel.findOne({email});
    if (user && (await bcrypt.compare(password, user[0].password))) {

      // Create token
      const payload = {
        user_id : user[0].id,
        email,
        first_name: user[0].first_name
      }
      const expiresIn = 60 * 60 * 24
      const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn : expiresIn});

      // save user token
      user[0].token = token;

      const successResponse = apiResponses.createSuccessResponse(
        user[0],
        "Login Succesfully"
      );
      res.json(successResponse);
    }
    else {
      // if user does not exist
    const errorResponse = apiResponses.createErrorResponse(
      "Invalid Credentials",
      {},
      400
    );
    res.status(errorResponse.status).json(errorResponse);
    }

  } catch (error) {
    const errorResponse = apiResponses.createErrorResponse(
      "Server Error",
      error,
      500
    );
    res.status(errorResponse.status).json(errorResponse);
  }
  
}

module.exports = {
  getAllUsers,
  createNewUser,
  userSignin
};
