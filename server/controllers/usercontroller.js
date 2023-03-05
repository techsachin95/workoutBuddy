const Model = require("../models/usermodel");
const createtoken=require('../utils/token');
//login user
const loginUser = async (req, res) => {
    const {email, password } = req.body;
    try {
        const user = await Model.signin(email,password);
        // create token
        const token=createtoken(user._id);
        res.status(200).json({ email,password,token})
    }
    catch (err) {
          res.status(400).json({Error:err.message})
    }
}
//signUp user
const signUpUser = async (req, res) => {
    const {email, password } = req.body;
    try {
        const user = await Model.signup(email,password);
        // create token
        const token=createtoken(user._id);
        res.status(200).json({ email,password,token})   
    }
    catch (err) {
          res.status(400).json({Error:err.message})
    }
}
module.exports = { loginUser, signUpUser }