

const mongoose = require("mongoose")

const connectDB = async ()=>{

    // mongoose.connect("mongodb+srv://Hemanth:<db_password>@cluster0.11jdnju.mongodb.net/")

    // mongoose.connect("mongodb+srv://Heman  th:password@cluster.mongodb.net/DevTender")
    //   await  mongoose.connect("mongodb+srv://Hemanth:Hemanth#@1996@cluster.mongodb.net/DevTinder")
      await  mongoose.connect("mongodb://127.0.0.1:27017/DevTinder")


  
}

module.exports = connectDB





// // mongodb+srv://Hemanth:<db_password>@cluster0.11jdnju.mongodb.net/

