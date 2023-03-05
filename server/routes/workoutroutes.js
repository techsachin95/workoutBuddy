const express = require("express")
const authUser=require("../Middleware/userMiddleware");
const router = express.Router();
const Model = require("../models/workoutmodel");

//Require controllers 
const { getworkouts, getworkout, createworkout, updateworkout, deleteworkout } = require("../controllers/workoutcontroller")
router.use(authUser);
//get entire data
router.get("/", getworkouts)
//geting single data
router.get("/:id", getworkout)
//create data
router.post("/", createworkout)
//update data
router.patch("/:id", updateworkout)
//delete data
router.delete("/:id", deleteworkout)
module.exports = router;