const mongoose = require("mongoose");
const userModel = require("../models/userModel")
const wishlistModel = require("../models/wishlistModel") 




const pageWishlist = async (body)=>{
    const wishlistdata = await wishlistModel.create(body)
    return wishlistdata
}

const aggwishlist = async (id)=>{
    const userId = new mongoose.Types.ObjectId(id) 
    const retvalue = await userModel.aggregate([
        {
          $match:{
            _id: userId  // Finding the user whose _id in matches the given userId(we enter in in the postman).
          }
        },


        // Get all wishlist items where userId equals the user’s _id, and store them in wishlistData.

        {
            $lookup:{
                from: "wishlists"  ,
                localField: "_id",
                foreignField: "userId",
                as: "wishlistData"
            }
        },

        // Get all products whose _id matches the productId inside wishlistData, and store them in wishlistdata.

        {
            $lookup: {
                from: "products",
                localField: "wishlistData.productId",
                foreignField: "_id",
                as: "Finalwishlist",
                pipeline:[{
                    $project:{
                         name:1,
                         expiry:1,
                         flavor:1,
                         bestbefore:1

                    }
            }]
            }
        },

        { 
            $project:{
             name:1,
             email:1,
             _id:1,
             Finalwishlist:1
         }
        }
    ]) 

    return retvalue
}


module.exports = {
    pageWishlist,
    aggwishlist
} 