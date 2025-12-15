const productModel = require("../models/productModel")
const mongoose = require ("mongoose")

const createProductdata = async(body)=> {
   const productData = await productModel.create(body)
   return productData
 }

const getAllProducts = async()=>{
    const products = await productModel.find({})
    return products
  }

const getProductInFile = async(productId)=>{

    const checkProduct = await productModel.findById (new mongoose.Types.ObjectId(productId))
    return checkProduct
}   

const deleteNewProduct = async(productId)=>{
    
    const checkNewProduct = await productModel.findById (new mongoose.Types.ObjectId(productId))

    if(!productId){
      console.log("Product Not found");
    }
    
    const deleteTheProduct = await productModel.findByIdAndDelete (new mongoose.Types.ObjectId(productId),{new:true})
    return deleteTheProduct
}    

const updateProduct = async(productId, updatebody)=>{
     const checktheproduct = await productModel.findById (new mongoose.Types.ObjectId(productId))
     
     

    if(!productId){
      console.log("Product Not found");
    }

    const updateOneProduct = await productModel.findByIdAndUpdate (new mongoose.Types.ObjectId(productId),updatebody,{new:true})
    return updateOneProduct 
}

 module.exports = {
    createProductdata,
    getAllProducts,
    getProductInFile,
    deleteNewProduct,
    updateProduct
}