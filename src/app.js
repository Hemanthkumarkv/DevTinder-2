
const express = require("express")
const app = express()
const  connectDB =  require("./config/database")
const User = require("./models/user")

// ----------------Hard Coded----------------


// app.post("/signup", async (req, res)=>{
//     const user = new User({
//         firstName :"Hemanth",
//     lastName:"Kumar",
//     emailId:"hemanthkumarkv153@gmail.com",
//     password:"Hemanth@#1996",
//     age:29,
//     gender:"Mele",

//     })

//     try{
//          await user.save()

//       res.send("User added Successfully")
//     }catch(err){
//         res.status(400).send("Erros to save the database:" + err.massage)
//     }


// })


// ----------------Dynamic----------------

app.post("/signup", async (req, res)=>{
    const user = new User(req.body)

    try{
         await user.save()

      res.send("User added Successfully")
    }catch(err){
        res.status(400).send("Erros to save the database:" + err.massage)
    }


})



connectDB().then(()=>{
    console.log("Data base connection Successfully")
    


})
.catch((err)=>{
    console.log("Data base not connected ")
})

app.listen(3000, ()=>{
    console.log("Server running of the port 3000")
})







