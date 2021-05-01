const express = require('express');

const router = express.Router();

const auth = require('../../middleware/check-auth');

const ParentCategoryController = require('../../controllers/categories/ParentCategoryController');

// Add New Parent Category API
router.post('/parent_category', auth, ParentCategoryController.add);

// Get All Parent Category API
router.get('/parent_category',ParentCategoryController.getAll);

// Get One Parent Category API
router.get('/parent_category/:id',ParentCategoryController.getOne);

// Update Parent Category API
router.put('/parent_category/:id', auth, ParentCategoryController.updated);

// Delete Parent Category API
router.delete('/parent_category/:id', auth, ParentCategoryController.deleted);


module.exports = router;