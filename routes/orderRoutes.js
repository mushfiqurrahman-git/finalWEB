 
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// defining the routes for cart 

//GET for all order items
router.get('/', orderController.getAllOrders);

//GET for order by id
router.get('/:id', orderController.getOrderById);

//POST for creating Order
router.post('/', orderController.createOrder);

//PUT for updating order
router.put('/:id', orderController.updateOrder);

//DELETE for deleting order
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
