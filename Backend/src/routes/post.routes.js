const express = require("express")

const postRouter = express.Router()
const checkUser = require("../middlewares/auth.middlewares")
const { createPostController, getFeedController,deletePostController,  } = require("../controllers/post.controllers")
const commentController = require("../controllers/comment.controllers")
  

 postRouter.post("/create",checkUser,createPostController   )
 postRouter.delete("/delete-post:postId", checkUser , deletePostController)
 postRouter.get("/get-feed",checkUser , getFeedController)
 postRouter.post("/comment/:postId", checkUser, commentController)

 module.exports = postRouter