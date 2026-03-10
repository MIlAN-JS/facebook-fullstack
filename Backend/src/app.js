const express = require("express");
const authRouter = require("./routes/auth.routes");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const postRouter = require("./routes/post.routes");
const app = express()

const multer = require("multer");
const likeRouter = require("./routes/like.routes");
const checkUser = require("./middlewares/auth.middlewares");
const upload = multer({storage : multer.memoryStorage()})

// using middlewares
app.use(express.json())
app.use(cookieParser())  


app.use(cors({
    credentials : true, 
    origin : "http://localhost:5173"
}))

app.use("/api/auth" , authRouter)
app.use("/api/posts",upload.single("postImage") , postRouter )
app.use("/api/posts",checkUser ,  likeRouter)


module.exports = app;