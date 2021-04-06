const express = require('express');

const router = express.Router();

const CategoryController = require('../../controllers/categories/CategoryController');

// Add New Category API
router.post('/category',CategoryController.add);

// Get All Category API
router.get('/category',CategoryController.getAll);

// Get One Category API
router.get('/category/:id',CategoryController.getOne);

// Update Category API
router.put('/category/:id',CategoryController.updated);

// Delete Category API
router.delete('/category/:id',CategoryController.deleted);


module.exports = router;