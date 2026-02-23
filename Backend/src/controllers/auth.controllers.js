const userModel = require("../models/user.model")
const bcrypt  = require('bcrypt')
const jwt = require("jsonwebtoken")

const registerUserController = async(req , res)=>{

    try {

        // fetching data
        console.log(req.body    )
         const {userName , email , password , imgLink} = req.body
         
         
         // checking if user already exists with same userName or email 

         const isUserExist =await userModel.findOne({
            $or :[
                {email}, 
                {userName}
            ]
                
            
         })

         if(isUserExist){
            if(isUserExist.email === email ){
            return res.json({
                message : "user already exists with same email ",
                success : false
            })
         }
         else if(isUserExist.userName === userName){
           return res.status(400).json({
                message : "user already exists with same username",
                success : false
            })
         }
         }



         // Hashing password 
         const hashedPassword = await bcrypt.hash(password , 10)

         // storing userData in database

         const newUser = await userModel.create({
            email : email,
            userName : userName, 
            password : hashedPassword,
            imgLink : imgLink
         }) 


         // creating and sending token to cookie

         const token = jwt.sign({
            id : newUser._id
         } , process.env.JWT_SECRET , {
            expiresIn : "1d"
         })

         res.cookie("token", token)

         

         //sending response

         res.status(201).json({
            message : "user creation success",
            success : true, 
            user : {
                userName : userName, 
                email : email , 
                
            }
         })

        
    } catch (error) {
        throw error
        console.log("cannot register user", error)
        res.status(400).json({
            message : "cannot register user",
            success : false
        })
        
    }

    


}


module.exports = {
    registerUserController
}