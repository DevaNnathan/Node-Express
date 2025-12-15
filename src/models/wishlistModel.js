const mongoose = require("mongoose")

const wishlistSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId
    },

    productId: {
        type: mongoose.Types.ObjectId
    },

    date: {
        type: Date,
        default: Date.now()
    },

    status: {
        type: String,
        default: "pending"
    }

})

const wishlistModel = mongoose.model("wishlist", wishlistSchema)
module.exports = wishlistModel 