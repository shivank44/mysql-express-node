const express = require('express');

const router = express.Router();

const auth = require('../../middleware/check-auth');

const SubCategoryController = require('../../controllers/categories/SubCategoryController');

// Add New Sub Category API
router.post('/sub_category', auth, SubCategoryController.add);

// Get All Sub Category API
router.get('/sub_category',SubCategoryController.getAll);

// Get One Sub Category API
router.get('/sub_category/:id',SubCategoryController.getOne);

// Update Sub Category API
router.put('/sub_category/:id', auth, SubCategoryController.updated);

// Delete Sub Category API
router.delete('/sub_category/:id', auth, SubCategoryController.deleted);


module.exports = router;