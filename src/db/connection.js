const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ProgrammersApi", {
}).then(()=>{
    console.log("Connected to the database successfully!");
}).catch((e)=>{
    console.log("Can not connect to the database!");
})