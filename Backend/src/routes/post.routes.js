const express = require("express")

const postRouter = express.Router()
const checkUser = require("../middlewares/auth.middlewares")
const { createPostController, getFeedController } = require("../controllers/post.controllers")


 postRouter.post("/create",checkUser,createPostController   )
 postRouter.get("/get-feed",checkUser , getFeedController)
 

 module.exports = postRouter