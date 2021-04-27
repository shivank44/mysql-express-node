const schema = require('schm');

const orderProduct = schema({
    order_id: {
        required: true,
        type: Number
    },
    product_id: {
        required: true,
        type: Number
    },
    mrp: {
        required: true,
        type: Number
    },
    rate: {
        required: true,
        type: Number
    },
    quantity: {
        required: true,
        type: Number
    },
    order_product_status: {
        required: false,
        type: Number
    }
});

const order = schema({
    order_no: {
        required: true,
        type: String
    },
    user_id: {
        required: true,
        type: Number
    },
    total: {
        required: true,
        type: Number
    },
    payment_type: {
        required: true,
        type: Number
    },
    order_status: {
        required: false,
        type: Number
    },
    payment_status: {
        required: true,
        type: Number
    },
    orderProducts : [orderProduct]
});


module.exports = {
    order,
    orderProduct
}