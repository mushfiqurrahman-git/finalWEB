 
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// defining the routes for cart

//GET for all cart items
router.get('/', cartController.getAllCarts);

//GET for cart by id
router.get('/:id', cartController.getCartById);

//POST for creating Cart
router.post('/', cartController.createCart);

//PUT for updating cart
router.put('/:id', cartController.updateCart);

//DELETE for deleting cart
router.delete('/:id', cartController.deleteCart);

module.exports = router;