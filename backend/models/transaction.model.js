const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    sellerItem: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      location: { type: String, required: true },
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },
    buyerItem: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      location: { type: String, required: true },
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },
    sellerAddress: {
      lastName: { type: String, default: null },
      firstName: { type: String, default: null },
      phoneNumber: { type: String, default: null },
      addressNo: { type: String, default: null },
      street: { type: String, default: null },
      city: { type: String, default: null },
      province: { type: String, default: null },
      memo: { type: String, default: null },
    },
    buyerAddress: {
      lastName: { type: String, default: null },
      firstName: { type: String, default: null },
      phoneNumber: { type: String, default: null },
      addressNo: { type: String, default: null },
      street: { type: String, default: null },
      city: { type: String, default: null },
      province: { type: String, default: null },
      memo: { type: String, default: null },
    },
    tradeResult: {
      status: { type: String }, // process, partial delivered, finished
      update_time: { type: String },
    },
    isDelivered: {
      seller: {
        type: Boolean,
        required: true,
        default: false,
      },
      buyer: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    deliveredAt: {
      seller: {
        type: Date,
      },
      buyer: {
        type: Date,
      },
    },
    feedbackToSeller: {
      rating: {
        type: Number,
        default: null,
      },
      comment: {
        type: String,
        default: null,
      },
    },
    feedbackToBuyer: {
      rating: {
        type: Number,
        default: null,
      },
      comment: {
        type: String,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
