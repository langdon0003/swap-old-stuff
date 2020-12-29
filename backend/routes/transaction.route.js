const { createTransaction } = require('../controllers/transaction.controller')
const { authRequired } = require('../middleware/auth.middleware')

const express = require('express')

const router = express.Router()

// GET ALL
// router.get('/', getTransactions)

// CREATE NEW
router.post('/', authRequired, createTransaction)

module.exports = router
