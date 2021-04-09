const userAuth = require('./user/auth');
const parentCategory = require('./categories/parent_category');
const category = require('./categories/category');
const subCategory = require('./categories/sub_category');
const product = require('./product/index');

module.exports = [
    userAuth,
    parentCategory,
    category,
    subCategory,
    product
];