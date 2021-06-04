const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    birthDate: {
        type: Date,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    sex: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    authenticationToken: {
        type: String,
        required: true
    }
});

const UserSchema = mongoose.model('users', User);

module.exports = UserSchema;