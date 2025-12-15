const wishlistServices = require("../services/wishlistServices")


const wishlistpage = async (req, res)=>{
    const data = await wishlistServices.pageWishlist(req.body)
    res.send(data)
}

const wishlistagg = async (req, res)=>{
    const data = await wishlistServices.aggwishlist(req.params.id)
    res.send(data) 
}

module.exports = {
    wishlistpage,
    wishlistagg
} 