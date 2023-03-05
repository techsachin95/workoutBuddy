const Model = require("../models/workoutmodel");

//get all data
const getworkouts = async (req, res) => {
    const user_id=req.user._id
    try {
        const workoutdata = await Model.find({user_id}).sort({ createdAt: -1 });
        res.status(200).json(workoutdata);
    }
    catch (err) {
        res.status(400).json({error:err.message});
    }
}


//geting single data
const getworkout = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutdata = await Model.findById({ _id: id })
        res.status(200).json(workoutdata);
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}

//creating a data
const createworkout = async (req, res) => {
    const {title,reps,load}=req.body;
    const user_id=req.user._id
    try {
        const newworkout = new Model({title,reps,load,user_id});
        const workout = await newworkout.save();
        res.status(201).json(workout);
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}


//update record
const updateworkout = async (req, res) => {
    try {
        const id = req.params.id;
        const updateddata = await Model.findByIdAndUpdate({ _id: id }, req.body, { new: true, })
        res.status(200).json(updateddata);
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}

//delete data
const deleteworkout = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedata = await Model.findByIdAndDelete({ _id: id })
        res.status(200).json(deletedata);
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}

module.exports = { getworkouts, getworkout, createworkout, updateworkout, deleteworkout }