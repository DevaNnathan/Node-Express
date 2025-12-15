const wishlistController = require("../controller/wishlistController")

const express = require ("express")
const router = express.Router()

router.post("/create/wishlist", wishlistController.wishlistpage)
router.get("/aggreggate/userdata/:id", wishlistController.wishlistagg)


module.exports = router 