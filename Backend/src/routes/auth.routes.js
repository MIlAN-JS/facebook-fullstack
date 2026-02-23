const express = require("express")
const { registerUserController } = require("../controllers/auth.controllers")

const authRouter = express.Router()




authRouter.post("/register", registerUserController)

 
module.exports = authRouter