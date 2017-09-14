var mongoose = require('mongoose');

var BicycleSchema = new mongoose.Schema({
    
    imageURL: {
        type: String,
        required: false,
        minLength: 2
    },

    title: {
        type: String,
        required: true,
        unique: false,
        minLength: 10
    },

    price: {
        type: Number,
        required: true,
        unique: false,
        minLength: 10
    },

    description: {
        type: String,
        required: true,
        unique: false,
        minLength: 10
    },

    location : {
        type: String,
        required: true,
        unique: false,
        minLength: 10
    },
    
}, {timestamps: true });


mongoose.model('Bicycle', BicycleSchema);

