const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    comment : {
        type : String, 
        required: [true, "comment must needed"]
    },
      post :{
            type: mongoose.Schema.Types.ObjectId,
            ref : "post",
        },
        user :{
            type: mongoose.Schema.Types.ObjectId,
            ref : "user",
        },
} , {
    // toJSON : {virtuals : true}, 
    timestamps : true
})







const commentModel = mongoose.model("comment", commentSchema)

module.exports = commentModel