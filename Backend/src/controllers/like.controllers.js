
const likeModel = require("../models/like.model")
const postModel = require("../models/post.model")

const likeController = async(req , res , next)=>{


    try {
        const userId = req.userId
        const {postId } = req.body

        
        // check if post exists 
    
        const post = await postModel.findById(postId)

       
        if(!post){
            return res.status(400).json({
                message : "post doesnt exist"
            })
        }


        const postLiked = await likeModel.findOne({post : postId , user :userId})
        console.log( "isLiked " , postLiked)

        if(postLiked){
            console.log("post liked")
            const response = await likeModel.findOneAndDelete({post : postId ,user : userId});
            console.log(response)
             return res.status(200).json({
                message : "post unliked", 
                success: true

            })
            
        }



        const likedRes = await likeModel.create({post : postId  , user: userId});
        res.status(200).json({
            message : "post liked success", 
            success : true
        })
        
        
    } catch (error) {

        console.log(error, "cannot like post")
        
    }


}

module.exports = {likeController}