const userModel = require("../models/user.model")
const bcrypt  = require('bcrypt')
const jwt = require("jsonwebtoken")


const registerUserController = async(req , res)=>{

    try {

        // fetching data
        console.log(req.body    )
         const {userName , email , password , imgLink , fullName} = req.body
         
         
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
         const hashedPassword = await bcrypt.hash(password.trim() , 10)

         // storing userData in database

         const newUser = await userModel.create({
            email : email,
            userName : userName, 
            password : hashedPassword,
            imgLink : imgLink,
            fullName : fullName
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
                fullName : fullName 
                
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

const loginUserController = async(req , res)=>{
    try {

        // fetching userDAta

        const {email , password} = req.body

        // checking if user exists with email 

        const user = await userModel.findOne({email});


        console.log("user from db" , user)
        console.log("pass" , user.password)
        // return error if usernot exist
        if (!user){
            return res.status(400).json({
                message : "user not found",
                success : false
            })
        }

        // check password if user exists


        const isPassCorrect = await bcrypt.compare(password.trim() , user.password)

        console.log("pass check " , isPassCorrect)

        if(!isPassCorrect){
            return res.status(400).json({
                message : "invalid password"
            })
        }


        const token = jwt.sign({
            id : user._id, 
            
        } , process.env.JWT_SECRET , {expiresIn :"1d"})

        res.cookie("token", token)
 // sending response
        res.status(200).json({
            message : "login success", 
            user : {
                userName : user.userName, 
                email : user.email , 
                fullName : user.fullName 
                
            }
        })


        


        
    } catch (error) {

        console.log("error found while login ", error)
        return res.status(400).json({
            message : "cannot login"
        })
        
    }
}


module.exports = {
    registerUserController, 
    loginUserController
}