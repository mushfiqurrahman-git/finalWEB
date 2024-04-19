 
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// defining the routes for cart 

//GET for all product items
router.get('/', productController.getAllProducts);

//GET for product by id
router.get('/:id', productController.getProductById);

//POST for creating Product
router.post('/', productController.createProduct);

//PUT for updating product
router.put('/:id', productController.updateProduct);

//DELETE for deleting product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
