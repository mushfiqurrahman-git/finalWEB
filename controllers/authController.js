// Importing the User model
const User = require('../models/user'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const AuthController = {
  // Login function
  login: async (req, res) => {
    try {
      // Check if user exists
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Check if password is correct
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Create a JWT token
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

      // Set the token as a cookie or in the response header
      res.cookie('auth-token', token);

      res.json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Register function
  register: async (req, res) => {
    try {
      // if email already exists
      const emailExists = await User.findOne({ email: req.body.email });
      if (emailExists) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
        username: req.body.username
      });

      // Save the user to the database
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = AuthController;
