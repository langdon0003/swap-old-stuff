const mongoose = require('mongoose')

commentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

likeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    numComments: {
      type: Number,
      required: true,
      default: 0,
    },
    comments: [commentSchema],
    numLikes: {
      type: Number,
      required: true,
      default: 0,
    },
    likes: [likeSchema],
    numRequests: {
      type: Number,
      required: true,
      default: 0,
    },
    requestFrom: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    ],
    tradeTo: {
      status: {
        type: String,
        required: true,
        default: 'open',
        // pending || finished
      },
      item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
        default: {},
      },
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product
