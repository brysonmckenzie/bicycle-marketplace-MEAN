var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    
    first_name: {
        type: String,
        required: true,
        minLength: 2
    },
    last_name: {
        type: String,
        required: true,
        minLength: 2
    },
    email: {
        type: String,
        required: true,
        minLength: 2
    },

    password: {
        type: String,
        required: true,
        minLength: 4
    },
    
}, {timestamps: true });


mongoose.model('User', UserSchema);

