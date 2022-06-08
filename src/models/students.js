const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
});

// We will create new collection using schema 
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;





// {
//     "name": "Abhishek",
//     "email": "abhi@gmail.com",
//     "phone": 9039439403,
//     "adress": "Karka"
// }