const express = require("express")
const { registerUserController, loginUserController, getUserController, logoutUserController } = require("../controllers/auth.controllers")
const checkUser = require("../middlewares/auth.middlewares")

const registerValidator = require("../validators/auth.validators")
const authRouter = express.Router()




authRouter.post("/register",registerValidator,  registerUserController)
authRouter.post("/login", loginUserController)
authRouter.get("/get-user", checkUser ,  getUserController)
authRouter.post("/logout", logoutUserController)


 
module.exports = authRouter