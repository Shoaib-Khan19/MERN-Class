const express = require('express');

//importing Review all data controller from descriptionController
const {createReview,getAllReviews,singleReview,deleteReview,updateReview} = require('../controller/clientReviewController');


const router = express.Router();




//sending and Creating Review to server using createDescription controller

router.post('/createReview', createReview);

//Receiving all data from Review Model 

router.get("/getAllReviews", getAllReviews);

// //Receiving single data from Project server 
// router.get("/api/v1/singleProject", singleProject);

//Receiving single data by Id from Review Model 
router.get("/singleReview/:id", singleReview);

//Delete single data by Id from Review Model
router.delete("/deleteReview/:id", deleteReview);

// update Review Model by Id passing updating values in the body
router.put("/updateReview/:id", updateReview);


module.exports = router