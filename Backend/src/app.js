const express = require("express");
const authRouter = require("./routes/auth.routes");
const cors = require("cors")

const app = express()

// using middlewares
app.use(express.json())


app.use(cors({
    credentials : true, 
    origin : "http://localhost:5173"
}))

app.use("/api/auth" , authRouter)



module.exports = app;