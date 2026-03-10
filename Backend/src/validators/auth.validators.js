const {body, validationResult} = require("express-validator")



const validation = (req , res ,next)=>{
    
     const errors = validationResult(req)

     if(errors.isEmpty()){
        return next()
     }

     return res.status(400).json({
        errors : errors.array()
     })

     next


}



const registerValidator = [
    body("userName").isString().withMessage("userName must be string"),
    body("email").isEmail().withMessage("must be in email format"), 
    validation
]

const loginValidator  =[

    body("userName").isString().withMessage("username must be string")
    
]

module.exports = registerValidator