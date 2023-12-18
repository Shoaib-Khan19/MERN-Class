const Blog = require('../models/blogModel');

const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// creating Blog

exports.createBlog = catchAsyncErrors(async (req, res) => {

    console.log(req.body);
    const data = await Blog.create(req.body);
    res.status(201).json({ success: true, data: data });

});


//Fetching all Blogs
exports.getAllBlog = catchAsyncErrors(async (req, res) => {
    const results = await Blog.find();// database work
    //    res.send(results);
    res.status(200).json({ success: true, results });// express work
});

// Receiving Blogs by Category from Blog server 

exports.getBlogCategory = catchAsyncErrors(async (req, res) => {
    // console.log(req.params.id);
    console.log(req.params);
    // By Category
    const { Category } = req.params;
    const getBlogCategory = await Blog.find({ blogCategory: Category });

    res.status(200).json({ success: true, getBlogCategory });

});

// Receiving single Blog by Id or other like projectTitle from Blog server 

exports.singleBlog = catchAsyncErrors(async (req, res) => {
    // console.log(req.params.id);
    console.log(req.params);

    //By id
    const { blogid } = req.params;
    const singleBlog = await Blog.findById(blogid);
    res.status(200).json({ success: true, singleBlog });

});

//Updating Blog by Id
exports.updateBlog = catchAsyncErrors(async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const blog = Blog.findById(id)
    if (!blog) {
        res.status(404).json({ success: false, message: "Blog not found" });
    }
    await Blog.findByIdAndUpdate(id, req.body)
    res.status(200).json({ success: true });
});



// Delete Blog by id

exports.deleteBlog = catchAsyncErrors(async (req, res) => {
    const { blogid } = req.params;
    // console.log(req.params.id);
    const deletedBlog = await Blog.deleteOne({ _id: blogid })
    res.status(204).json({ success: true });

});
