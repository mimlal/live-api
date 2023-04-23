const connectDB=require("./db/connect")
require("dotenv").config()
const Product=require("./models/product")

const ProductJson=require("./products.json")

const start=async()=>{
    try{
      await connectDB(process.env.MONGODB_URL);
    
      await Product.create(ProductJson)
      console.log("successfull")
    }catch(error){
        console.log(error)
    }
}

start()