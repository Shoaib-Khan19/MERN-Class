const Projects = require("../models/projectModel");
const {tryCatchWrapper} = require('../tryWarp');

exports.createProject = async (req, res) => {
    async function codeCreateProject(){
         // console.log(req.body);
         const createdProject = await Projects.create(req.body);
         res.status(201).json({success: true,createdProject});

    }

    
tryCatchWrapper(codeCreateProject);
}
