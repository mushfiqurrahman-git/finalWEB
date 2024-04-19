const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

// Login route
router.post('/login', AuthController.login);

// Register route
router.post('/register', AuthController.register);

module.exports = router;
