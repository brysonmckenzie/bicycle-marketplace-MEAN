var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId
var BicycleSchema = new mongoose.Schema({
    
    image: {
        type: String,
        required: false,
    },

    title: {
        type: String,
        required: false,
    },

    price: {
        type: Number,
        required: false,
    },

    description: {
        type: String,
        required: false,
    },

    location: {
        type: String,
        required: false,
    },
    
    owner: {
        type: ObjectId,
        required: false,
    },
    
}, {timestamps: true });


mongoose.model('Bicycle', BicycleSchema);

