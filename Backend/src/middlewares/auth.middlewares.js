const jwt = require("jsonwebtoken")
const redis = require("../config/cache")


const checkUser = async(req , res , next)=>{

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message : "unauthorized user ", 
            success : false
        })    }


        //checking if token is blacklisted 

        const blacklistedToken = await redis.get(token)

        if(blacklistedToken){
            return res.status(401).json({
                message : "Invalid credentials (blacklisted token)"
            })
        }

    
        //verify the token 

try {
      const decoded = jwt.verify(token , process.env.JWT_SECRET)
console.log(decoded)
req.userId = decoded.id
    
} catch (error) {
    return res.status(400).json({
        message : "Invalid Token", 
        success : false
    })

    

}
      
    
    next()
    

}

module.exports = checkUser