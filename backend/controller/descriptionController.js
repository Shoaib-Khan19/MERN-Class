//importing module from descriptionModel

const Description = require('../models/descriptionModel');

const catchAsyncErrors = require('../middleware/catchAsyncErrors');




exports.createDescription = catchAsyncErrors(async (req, res) => {

    console.log(req.body);
    const data = await Description.create(req.body);
    res.status(201).json({ success: true, data: data });

});


exports.getDescription = catchAsyncErrors(async (req, res) => {
    const results = await Description.find();// database work
    //    res.send(results);
    res.status(200).json({ success: true, results });// express work
});

exports.updateDescription = catchAsyncErrors(async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const description = Description.findById(id)
    if(!description){
        res.status(404).json({ success: false, message: "Project not found" });
    }
    await Description.findByIdAndUpdate(id,req.body)
    res.status(200).json({ success: true });
});

// exports.updateDescription=catchAsyncErrors(async (req, res)=>{
//     const id= req.params.id;
//     console.log(id);
//     const description = await Description.findById(id)
//     if(!description){
//         res.status(404).json({success:false, message:"Description not found"})
//     }
//     await Description.findByIdAndUpdate(id,req.body)
//     res.send(200).json({success:true})
// });
// export const setDescription(req,res)=>{

// }

// export const deleteDescription(req,res)=>{

// }

