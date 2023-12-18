const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    // _id:String,
    reviewnameClient: {
        type: String,
        required: [true, "Client Name is required"] //default,min max characters bhi hote hen  
    },
    reviewClient: {
        type: String,
        required: [true, "CLient Review is required"] //default,min max characters bhi hote hen  
    },
    reviewRating: {
        type: Number,
        required: true,
        min: [1, "Valye cant be less than 1"],
        max: [5, "Value cant be greater than 5"],
    },

});

module.exports = mongoose.model('Review', reviewSchema);