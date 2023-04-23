const express = require("express")
const app = express()
const port = process.env.PORT || 5000
require ("dotenv").config()
const connectDB=require("./db/connect")
const router_produts=require("./route/product")

// middleware 
app.use("/api/products",router_produts)
const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        app.listen(port,()=>{
            console.log(`${port} runing`)
        })

    }catch(error){
        console.log(error)
    }
    
}
start()
