const express=require("express");
const router=express.Router();
//require routes
const {loginUser,signUpUser} = require("../controllers/usercontroller")
//login routes
router.post("/signin",loginUser);

//signup routes
router.post("/signup",signUpUser);
module.exports = router;