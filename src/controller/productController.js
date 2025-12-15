const productServices = require ("../services/productServices")

const createProduct = async(req,res)=>{
   const data = await productServices.createProductdata(req.body);
   res.send(data)
 }

 const getAllProductsData = async (req, res)=>{
     const data = await productServices.getAllProducts()
     res.send (data)
  }

  const getProductByID = async (req, res) =>{
           const data = await productServices.getProductInFile(req.params);
           res.send(data)
  }

  const deleteProduct = async (req, res) => {
     const data = await productServices.deleteNewProduct(req.params.id);
     res.send(data)
   }

   const updateProductById = async (req,res) => {
      const data = await productServices.updateProduct(req.params.id, req.body);
      res.send(data)
   }


 module.exports = {
    createProduct,
    getAllProductsData,
    getProductByID,
    deleteProduct,
    updateProductById
 }