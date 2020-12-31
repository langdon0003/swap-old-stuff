const asyncHandler = require('express-async-handler')
const Product = require('../models/product.model')
const Transaction = require('../models/transaction.model')

/**
 * @Desc   Create new transaction
 * @Route  POST /api/transactions/
 * @Access Private
 */
exports.createTX = asyncHandler(async (req, res) => {
  const { buyerItemId, sellerItemId } = req.body

  const buyerItem = await Product.findById(buyerItemId)
    .select(['title', 'description', 'image', 'location', '_id'])
    .populate({
      path: 'user',
      select: ['shipping', '_id'],
    })

  const sellerItem = await Product.findById(sellerItemId)
    .select(['title', 'description', 'image', 'location', '_id'])
    .populate({
      path: 'user',
      select: ['shipping', '_id'],
    })

  const newTransaction = new Transaction()

  newTransaction.buyerId = buyerItem.user._id
  newTransaction.buyerItem = {
    title: buyerItem.title,
    description: buyerItem.description,
    image: buyerItem.image,
    location: buyerItem.location,
    _id: buyerItem._id,
  }
  newTransaction.buyerAddress = buyerItem.user.shipping

  newTransaction.sellerId = sellerItem.user._id
  newTransaction.sellerItem = {
    title: sellerItem.title,
    description: sellerItem.description,
    image: sellerItem.image,
    location: sellerItem.location,
    _id: sellerItem._id,
  }
  newTransaction.buyerAddress = sellerItem.user.shipping

  await newTransaction.save()

  res.status(201).json(newTransaction)
})
