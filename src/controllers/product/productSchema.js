const schema = require('schm');

const product = schema({
    name: {
        required: true,
        type: String
    },
    mrp: {
        required: true,
        type: String
    },
    rate: {
        required: true,
        type: String
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