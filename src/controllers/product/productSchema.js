const schema = require('schm');

const product = schema({
    name: {
        required: true,
        type: String
    },
    mrp: {
        required: true,
        type: Number
    },
    rate: {
        required: true,
        type: Number
    },
    description: {
        required: false,
        type: String
    },
    sub_category_id: {
        required: true,
        type: Number
    }
});

module.exports = {
    product
}