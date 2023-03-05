require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
//db connection
require("./db/connection");

//model
const Model = require('./models/workoutmodel');

//port
const port = process.env.port || 4000

//Require routes
const workoutRoutes = require("./routes/workoutroutes")
const userRoutes = require("./routes/userroutes")

//middleware
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/workout", workoutRoutes)
app.use("/api/user", userRoutes)

app.listen(port, () => {
    console.log(`your port running on:${port}`)
})