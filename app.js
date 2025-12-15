
 const express = require ("express")
 const database = require("./src/config/db")
 const oneRouter = require("./src/router/userRouter")
 const productRouter = require("./src/router/productRouter")
 const wishlistRouter = require("./src/router/wishlistRouter")
 const app = express()

 app.use(express.json())

 app.use("/user", oneRouter)
 app.use("/products", productRouter) // assignment
 app.use("/wishlist", wishlistRouter) 

 
 database.on("open",()=>{
  app.listen(8080,()=>{
    console.log("Server is running");
})

})
 database.on('error',(error)=>{
  console.log("Server sync error",error);
 })