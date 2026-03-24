
const express = require("express")
const app = express()

// app.use("/", (req, res)=>{
//     res.send("Hello from the Server ")
// })

// http://localhost:3000/hello ----->  Hello from the Server
// http://localhost:3000/hello/2 ----->  Hello from the Server

app.use("/hello/2", (req, res)=>{
    res.send("Hello - 2")
})

// http://localhost:3000/hello/2  --->  Hello - 2
// http://localhost:3000/hello ---> Hello - 1


app.use("/hello", (req, res)=>{
    res.send("Hello - 1")
})


app.get("/user/:userId/:password", (req, res)=>{
    console.log(req.params)
    res.send("Hello - 2")
})

// http://localhost:3000/user/10/Hemanth@#1996
// o/p: Hello - 2


app.listen(3000, ()=>{
    console.log("Server running of the port 3000")
})


// http://localhost:3000/hello/2 --->


console.log("Hemanth kumar kv")