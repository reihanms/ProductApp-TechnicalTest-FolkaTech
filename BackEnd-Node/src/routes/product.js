const express = require('express');
const ProductController = require('../controller/products');
const router = express.Router();

// READ - GET
router.get('/list-product', ProductController.getAllProducts)
router.get('/:product_id', ProductController.getProductById)

module.exports = router