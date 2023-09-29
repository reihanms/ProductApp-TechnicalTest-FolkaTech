const express = require('express');
const UserController = require('../controller/users.js')
const router = express.Router();

// CREATE - POST
router.post('/register', UserController.createNewUser)
router.post('/login', UserController.userSignin)

// READ - GET
router.get('/', UserController.getAllUsers)


module.exports = router