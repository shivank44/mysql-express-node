const schema = require('schm');

const userLogin = schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

const userRegister = schema({
    first_name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 255 
    },
    last_name: { 
        type: String,
        required: true,
        minLength: 1, 
        maxLength: 255 
    },
    email: { 
        type: String, 
        required: true,
        minLength: 1, 
        maxLength: 255 
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    role: {
        type: String,
        required: true
    }
});

module.exports = {
    userLogin,
    userRegister
}