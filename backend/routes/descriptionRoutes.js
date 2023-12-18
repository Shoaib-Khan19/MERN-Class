const express = require('express');

//importing Description controller from descriptionController
const {getDescription,createDescription,updateDescription} = require('../controller/descriptionController');


const router = express.Router();

/*Description Routes*/ 
//sending data to server using createDescription controller

router.post('/createDescription',createDescription);

//Receiving data from server 

router.get("/getDescription",getDescription);


router.put("/updateDescription/:id",updateDescription);


module.exports = router