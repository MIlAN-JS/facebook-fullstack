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

    
}, {timestamps : true})


const postModel = mongoose.model("post",postSchema )


// postSchema.index({caption : 1} );


module.exports = postModel  