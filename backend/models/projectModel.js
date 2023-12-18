const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    // _id:String,
    projectTitle :{
     type:  String,
     required: [true, "Project Title is required"] //default,min max characters bhi hote hen  
    },
    projectDescription :{
        type:String,
        required: [true, "Project Description is required"]
    }, 
    projectPrice: Number,
        
    projectImages: [String],
});     

module.exports = mongoose.model('Projects',projectSchema);