const mongoose = require("mongoose")



const postSchema = new mongoose.Schema({

    caption : {
        type:String,
        
    }, 
    postImg:{
        type:String, 
        required:true
    }, 
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    }

    
},{
    toJSON : {virtuals: true}, 
    timestamps : true
})

postSchema.virtual("likesCount" , {
    ref : "like",
    localField : "_id",
    foreignField : "post",
    count : true
})


const postModel = mongoose.model("post",postSchema )

module.exports = postModel;  