const express = require('express');

const router = express.Router();

const auth = require('../../middleware/check-auth');

const OrderController = require('../../controllers/Order/OrderController');

// Add New Order API
router.post('/order', auth, OrderController.add);

// Get All Order API
router.get('/order', auth, OrderController.getAll);

// Get One Order API
router.get('/order/:id', auth, OrderController.getOne);

// Update Order API
router.put('/order/:id', auth, OrderController.updated);

// Delete Order API
router.delete('/order/:id', auth, OrderController.deleted);


module.exports = router;