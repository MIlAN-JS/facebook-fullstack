const express = require("express")

const postRouter = express.Router()
const checkUser = require("../middlewares/auth.middlewares")
const { createPostController } = require("../controllers/post.controllers")


 postRouter.post("/create",checkUser,createPostController   )
 postRouter.get("/get",checkUser , createPostController)
 

 module.exports = postRouter