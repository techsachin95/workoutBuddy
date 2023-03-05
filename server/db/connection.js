const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/Project")
    .then(() => {
        console.log('DB Connected')
    })
    .catch((err) => {
        console.log(err);
    })
