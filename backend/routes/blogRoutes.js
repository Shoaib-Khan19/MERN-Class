const express = require('express');

//importing Project all data controller from descriptionController
const {createBlog,getAllBlog,singleBlog,getBlogCategory,deleteBlog,updateBlog} = require('../controller/blogController');


const router = express.Router();

//sending data to server using createDescription controller

router.post('/createBlog', createBlog);

//Receiving all data from Project server 

router.get("/getAllBlog", getAllBlog);

//Receiving single Blog by Id from Blog server 
router.get("/singleBlog/:id", singleBlog);

//Receiving single Blog by Category from Blog server 
router.get("/getBlogCategory/:Category", getBlogCategory);

//Delete single data by Id from Project server 
router.delete("/deleteBlog/:id", deleteBlog);

// update project by Id passing updating values in the body
router.put("/updateBlog/:id", updateBlog);


// //Receiving single data from Project server 
// router.get("/api/v1/singleProject", singleProject);



module.exports = router