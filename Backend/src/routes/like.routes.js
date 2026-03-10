const express = require("express");
const { likeController } = require("../controllers/like.controllers");


const likeRouter = express.Router()



likeRouter.post("/like" , likeController);


module.exports = likeRouter
