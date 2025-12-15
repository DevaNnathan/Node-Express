const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({ 

      name:{ 
        type: String,
        required: true
      },
      expiry:{
        type: Number,
        required: true
      },
      manufactured:{
        type: String,
        required: true
      },
      contact:{
        type: Number,
        required: true
      },
      flavor:{
        type: String,
        required: true
      },
      country:{
        type: String,
         required: true
      },
      bestbefore:{
        type: Number,
         required: true
      },
      sponsored:{
        type: String,
         required: true
      }
})

const productModel = mongoose.model("products", productSchema)

module.exports =  productModel


