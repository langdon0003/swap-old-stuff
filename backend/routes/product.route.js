const { getProducts } = require('../controllers/product.controller')

const express = require('express')

const router = express.Router()

router.get('/', getProducts)

module.exports = router
