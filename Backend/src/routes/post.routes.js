const express = require("express")

const postRouter = express.Router()
const checkUser = require("../middlewares/auth.middlewares")
const { createPostController, getFeedController,deletePostController } = require("../controllers/post.controllers")


 postRouter.post("/create",checkUser,createPostController   )
 postRouter.delete("/delete-post:postId", checkUser , deletePostController)
 postRouter.get("/get-feed",checkUser , getFeedController)
 

 module.exports = postRouter