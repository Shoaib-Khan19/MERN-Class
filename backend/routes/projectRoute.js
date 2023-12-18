const express = require('express');

//importing Project all data controller from descriptionController
const {createProject,getAllProjects,singleProject,deleteProject,updateProject} = require('../controller/projectController');


const router = express.Router();

//sending data to server using createDescription controller

router.post('/createProject', createProject);

//Receiving all data from Project server 

router.get("/getAllProjects", getAllProjects);

// //Receiving single data from Project server 
// router.get("/api/v1/singleProject", singleProject);

//Receiving single data by Id from Project server 
router.get("/singleProject/:id", singleProject);

//Delete single data by Id from Project server 
router.delete("/deleteProject/:id", deleteProject);

// update project by Id passing updating values in the body
router.put("/updateProject/:id", updateProject);

module.exports = router