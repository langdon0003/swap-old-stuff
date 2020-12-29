const asyncHandler = require('express-async-handler')
const Product = require('../models/product.model')

/**
 * @Desc   Create new transaction
 * @Route  POST /api/transactions/
 * @Access Private
 */
exports.createTransaction = asyncHandler(async (req, res) => {
  req.body.user = req.user._id

  req.body.userName = req.user.name

  const newTransaction = new Transaction(req.body)

  await newTransaction.save()

  res.status(201).json(newTransaction)
})
