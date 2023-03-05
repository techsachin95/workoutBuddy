const mongoose=require('mongoose');
const bcrypt =require("bcrypt");
const userschema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamp:true});

//hashing techniqe
//static signup function
userschema.statics.signup=async(email,password)=>{
const exists=await Model.findOne({email});
if(exists){
throw Error("email already exists");
}
const salt=await bcrypt.genSalt(10);
const hash=await bcrypt.hash(password,salt)
const user=await Model.create({email,password:hash})
return user;
}


//static login function
userschema.statics.signin=async(email,password)=>{
const user=await Model.findOne({email});
if(!user){
    throw Error("Incorrect mail");
}
const match=await bcrypt.compare(password,user.password)
if(!match){
    throw Error("Incorrect password");

}
return user;
}
const Model=new mongoose.model("user",userschema);
module.exports=Model;