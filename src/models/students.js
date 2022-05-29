const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: [true, "Email id already present"],
    //     validate(value) {
    //         if (validator.isEmail()) {
    //             throw new Error("Invalid Email");
    //         }
    //     },
    // },
    phone:{
        type:Number,
        min:10,
        required:true
    },
    adress:{
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