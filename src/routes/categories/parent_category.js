const express = require('express');

const router = express.Router();

const ParentCategoryController = require('../../controllers/categories/ParentCategoryController');

// Add New Parent Category API
router.post('/parent_category',ParentCategoryController.add);

// Get All Parent Category API
router.get('/parent_category',ParentCategoryController.getAll);

// Get One Parent Category API
router.get('/parent_category/:id',ParentCategoryController.getOne);

// Update Parent Category API
router.put('/parent_category/:id',ParentCategoryController.updated);

// Delete Parent Category API
router.delete('/parent_category/:id',ParentCategoryController.deleted);


module.exports = router;