const express = require('express');

const router = express.Router();

const OrderController = require('../../controllers/Order/OrderController');

// Add New Order API
router.post('/order',OrderController.add);

// Get All Order API
router.get('/order',OrderController.getAll);

// Get One Order API
router.get('/order/:id',OrderController.getOne);

// Update Order API
router.put('/order/:id',OrderController.updated);

// Delete Order API
router.delete('/order/:id',OrderController.deleted);


module.exports = router;