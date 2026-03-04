
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
        
        const posts = await postModel.find({}).populate("user")

        res.status(200).json({
            message : "posts found ", 
            posts : posts
        })


        
        
    } catch (error) {
        res.status(400).json({
            message : "cannot get post", 
             error
        })
        
    }

}

module.exports = {
    createPostController,
    getFeedController
}