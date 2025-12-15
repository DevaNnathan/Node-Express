
const express = require ("express")
const router = express.Router()
const productController = require ("../controller/productController")

router.post("/create/stock", productController.createProduct) //assignment
router.get("/getall", productController.getAllProductsData)
router.get("/products/:id", productController.getProductByID)

router.delete("/delete/productdata/:id", productController.deleteProduct);
router.put("/update/productdetails/:id", productController.updateProductById);

module.exports = router