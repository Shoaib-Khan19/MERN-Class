const Review = require('../models/reviewSchema');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');


// Creating REview Model
exports.createReview = catchAsyncErrors(async (req, res) => {

    console.log(req.body);
    const createdReview = await Review.create(req.body);
    res.status(201).json({ success: true, createdReview });
});

//Receiving all data from Review server 

exports.getAllReviews = catchAsyncErrors(async (req, res) => {
    const getReviews = await Review.find();
    res.status(200).json({ success: true, getReviews });

});

//Receiving single data by Id or other like Client Review from Project server 

exports.singleReview = catchAsyncErrors(async (req, res) => {
    // console.log(req.params.id);
    console.log(req.params);
    // without id
    // const singleProject = await Projects.find({"projectTitle": "Object Detection"});

    //By id
    const { reviewid } = req.params;
    const singleReview = await Review.findById(reviewid);
    res.status(200).json({ success: true, singleReview });

});

// Updating the Review

exports.updateReview = catchAsyncErrors(async (req, res) => {
    // const {projectTitle,projectDescription,projectPrice} =req.body;
    const id = req.params.id

    const updatedReview = Review.findById(id)

    if (!updatedReview) {
        console.log("Project not Found");
        res.status(404).json({ success: false, message: "Review not Found" });
    }

    await Review.findByIdAndUpdate(id, req.body);

    res.status(201).json({ success: true });


});


// Delete Review by id

exports.deleteReview = catchAsyncErrors(async (req, res) => {
    const id = req.params.id
    // console.log(req.params.id);
    const deletedReview = await Review.findByIdAndDelete(id)
    res.status(204).json({ success: true, deletedReview });

});