const express = require('express');

const router = express.Router();

const auth = require('../../middleware/check-auth');

const CategoryController = require('../../controllers/categories/CategoryController');

// Add New Category API
router.post('/category', auth, CategoryController.add);

// Get All Category API
router.get('/category',CategoryController.getAll);

// Get One Category API
router.get('/category/:id',CategoryController.getOne);

// Update Category API
router.put('/category/:id', auth, CategoryController.updated);

// Delete Category API
router.delete('/category/:id', auth, CategoryController.deleted);


module.exports = router;