const mongoose = require("mongoose")


const connectDB=(url)=>{
    console.log("connection successful")
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

module.exports=connectDB