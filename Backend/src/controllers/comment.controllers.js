const commentModel = require("../models/comment.model")
const postModel = require("../models/post.model")

const commentController = async(req , res)=>{

    try{
        const {comment} = req.body
        const postId = req.params.postId
        const userId = req.userId

        // check if post exists 
    
        const post = await postModel.findById(postId)

       
        if(!post){
            return res.status(400).json({
                message : "post doesnt exist"
            })
        }

        const response = await commentModel.create({comment :comment , post : postId , user : userId })

        res.status(201).json({
            message : "comment created succes",
            success : true, 
            response
        })



    }catch(error){

        console.log("cannot comment ", error)

    }
}

module.exports = commentController