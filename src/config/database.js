

const mongoose = require("mongoose")

const connectDB = async ()=>{
      await  mongoose.connect("mongodb://127.0.0.1:27017/DevTinder") 
}

module.exports = connectDB





// // mongodb+srv://Hemanth:<db_password>@cluster0.11jdnju.mongodb.net/

