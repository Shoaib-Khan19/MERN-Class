const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogTitle : {
        type : String,
        required : true,
    },
    blogContent : {
        type : String,
        required : true,
    },
    blogCategory : {
        type : String,
        required : true,
    },
    blogImage : {
        type : String,
    },
});

module.exports = mongoose.model("Blog", blogSchema)