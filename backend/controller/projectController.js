const Projects = require("../models/projectModel");
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.createProject = catchAsyncErrors(async (req, res) => {
    // console.log(req.body);
    const createdProject = await Projects.create(req.body);
    res.status(201).json({ success: true, createdProject });

});

//Receiving all data from Project server 

exports.getAllProjects = catchAsyncErrors(async (req, res) => {
    const getProjects = await Projects.find();
    res.status(200).json({ success: true, getProjects });
});



//Receiving single data by Id or other like projectTitle from Project server 

exports.singleProject = catchAsyncErrors(async (req, res) => {
    // console.log(req.params.id);
    console.log(req.params);
    // without id
    // const singleProject = await Projects.find({"projectTitle": "Object Detection"});

    //By id
    const { projectid2 } = req.params;
    const singleProject = await Projects.findById(projectid2);
    res.status(200).json({ success: true, singleProject });

});

// Updating the Project

exports.updateProject = catchAsyncErrors(async (req, res) => {
    // const {projectTitle,projectDescription,projectPrice} =req.body;
    const { projectid } = req.params;

    const updatedProject = Projects.findById({ projectid })

    if (!updatedProject) {
        console.log("Project not Found");
        res.status(404).json({ success: false, message: "Project not Found" });
    }

    await Projects.findByIdAndUpdate(projectid, req.body);
    res.status(201).json({ success: true });

});

// console.log(req.params.id);
// const updatedProject = await Projects.updateOne({_id:projectid})
// updatedProject.projectTitle = projectTitle;
// updatedProject.projectDescription = projectDescription;
// updatedProject.projectPrice = projectPrice;

// Projects.save();

// Delete Project by id

exports.deleteProject = catchAsyncErrors(async (req, res) => {
    const { projectid } = req.params;
    // console.log(req.params.id);
    const deletedProject = await Projects.deleteOne({ _id: projectid })
    res.status(204).json({ success: true, deletedProject });

});