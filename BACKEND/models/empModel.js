const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//like object declaration
const employeeSchema = new Schema({

    //like attribute declaration
    name : {
        type : String,
        required : true //backend Validation for variable "name"
    },

    possition : {
        type : String,
        required : true
    },

    gender : {
        type : String,
        required : true
    }

})

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;