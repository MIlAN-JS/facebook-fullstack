const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required: [true , "please provide userName"],
        unique : [true , 'username must be unique']
    }, 
    email : {
        type : String,
        required: [true , "please provide email"],
        unique : [true , 'email must be unique']
    }, 
    password : {
        type : String,
        required: [true , "please provide email"],
        
    }, 
    fullName:{

        type: String,
        required: [true, "please provide fullName"]

    }, 
    imgLink : {
        type : String , 
        default : ""
    }

    
})


const userModel = mongoose.model("user", userSchema)


module.exports = userModel
