require("dotenv").config()

// requiring basic 
 const app = require("./src/app")
 const connectToDB = require("./src/config/database")










//connecting to db
connectToDB()


 // starting  server
 const PORT = process.env.PORT || 3000

 app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
 })