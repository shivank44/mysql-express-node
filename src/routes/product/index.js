const express = require('express');

const router = express.Router();

const auth = require('../../middleware/check-auth');

const ProductController = require('../../controllers/product/ProductController');

// Add New Product API
router.post('/product', auth, ProductController.add);

// Get All Product API
router.get('/product',ProductController.getAll);

// Get One Product API
router.get('/product/:id',ProductController.getOne);

// Update Product API
router.put('/product/:id', auth, ProductController.updated);

// Delete Product API
router.delete('/product/:id', auth, ProductController.deleted);


module.exports = router;