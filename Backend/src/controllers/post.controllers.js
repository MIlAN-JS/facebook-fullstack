
const commentModel = require('../models/comment.model');
const likeModel = require('../models/like.model');
const postModel = require('../models/post.model');
const imageKit = require("imagekit")


const uploadImage = async(image)=>{

    const ImgKitInstance = new imageKit({
        privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
        publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
        urlEndpoint :process.env.IMAGEKIT_URL_ENDPOINT
    })

    const response = await ImgKitInstance.upload({
         file : image.buffer,
         fileName : image.originalname,
         folder : "Ipost-imgs"
    })

  return response.url



}

const createPostController = async(req , res)=>{
    
    try {

        const {caption } = req.body
        const image = req.file
        const user = req.userId

       console.log(caption)

//uploading post on imgkit
         const imgUrl = await uploadImage(image)
       


        // creating post

        const post = await postModel.create({caption:caption , postImg : imgUrl, user:user })



        return res.status(201).json({
            message : "Post created",
            post : post
        })
    } catch (error) {
        console.log("error", error)
        
    }

     

}

const getFeedController = async(req , res)=>{

    try {

        const user = req.userId
        
        const posts = await postModel
        .find({})
        .populate("user")
        .populate("likesCount")
        .lean()

        const updatedPost = await Promise.all (posts.map(async(post)=>{
            const isLiked = await likeModel.findOne({post : post._id , user : user })
            const isComment = await commentModel.find({post : post._id , user : user})
            if(isLiked){
                post.liked = true
                post.comments = isComment
            }else{
                post.liked = false
                post.comments = isComment
            }

            return post;

        }))

        

        
        

        res.status(200).json({
            message : "posts found ", 
            posts : updatedPost
        })


        
        
    } catch (error) {
        res.status(400).json({
            message : "cannot get post", 
             error
        })

        console.log("cannot get post", error)
        
    }

}

const deletePostController = async(req , res)=>{

    try {

        const postId = req.params.postId
        
          const post = postMode.find(postId)
          console.log(post)

        // const res = postModel.findByIdAndDelete(postId)


        
    } catch (error) {

        res.status(400).json({
            message : "cannot delete user"

        })

        console.log("cannot delete post", error)
        
    }

}

module.exports = {
    createPostController,
    getFeedController,
    deletePostController
}