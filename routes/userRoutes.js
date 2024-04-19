 
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// defining the routes for cart 

//GET for all user items
router.get('/', userController.getAllUsers);

//GET for user by id
router.get('/:id', userController.getUserById);

//POST for creating User
router.post('/', userController.createUser);

//PUT for updating user
router.put('/:id', userController.updateUser);

//DELETE for deleting user
router.delete('/:id', userController.deleteUser);

module.exports = router;