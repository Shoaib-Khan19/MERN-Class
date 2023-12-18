const mongoose = require("mongoose");

// new keyword
const descriptionSchema = new mongoose.Schema({
    descriptionField : String
});     

module.exports = mongoose.model('Description',descriptionSchema);