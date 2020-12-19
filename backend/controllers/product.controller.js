const asyncHandler = require('express-async-handler')
const Product = require('../models/product.model')

// @ Desc   : Fetch all products
// @ Route  : GET /api/products
// @ Access : Public
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})
