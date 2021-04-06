const express = require('express');

const router = express.Router();

const SubCategoryController = require('../../controllers/categories/SubCategoryController');

// Add New Sub Category API
router.post('/sub_category',SubCategoryController.add);

// Get All Sub Category API
router.get('/sub_category',SubCategoryController.getAll);

// Get One Sub Category API
router.get('/sub_category/:id',SubCategoryController.getOne);

// Update Sub Category API
router.put('/sub_category/:id',SubCategoryController.updated);

// Delete Sub Category API
router.delete('/sub_category/:id',SubCategoryController.deleted);


module.exports = router;