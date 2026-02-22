const mongoose = require("mongoose")




const connectToDB = async()=>{
    try {

       const response =  mongoose.connect(process.env.MONGO_URI);
       console.log("successfully connected to the database")
        
    } catch (error) {
        throw error
        console.log("cannot connect with database", error)
        
    }
}

module.exports = connectToDB