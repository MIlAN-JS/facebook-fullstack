const mongoose = require("mongoose")


const likeSchema   = new mongoose.Schema({
    post :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "post",
    },
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
})

likeSchema.index({user : 1 , post : 1}, {unique : true})


const likeModel = mongoose.model("like", likeSchema)


module.exports = likeModel