const Redis = require("ioredis").default


const redis = new Redis({
    host : process.env.REDIS_HOST,
    port : process.env.REDIS_PORT,
    password : process.env.REDIS_PASSWORD
})

redis.on("connect",()=>{
    console.log("connected with redis success")
})


redis.on("error", (error)=>{
    console.log("cannot connect with redis 101", error)
})

module.exports = redis