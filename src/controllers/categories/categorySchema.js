const schema = require('schm');

const parentCategory = schema({
    name: {
        required: true,
        type: String
    }
});

const category = schema({
    name: {
        required: true,
        type: String
    },
    parent_category_id: {
        required: true,
        type: Number
    }
});

const sub_category = schema({
    name: {
        required: true,
        type: String
    },
    category_id: {
        required: true,
        type: Number
    }
});

module.exports = {
    parentCategory,
    category,
    sub_category
}