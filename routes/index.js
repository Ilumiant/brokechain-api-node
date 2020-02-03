
const express = require('express');
const router  = express.Router()
const localbitcoinsController = require('../controllers/localbitcoins');

router.get('/show-buy-bitcoins-online-cop', localbitcoinsController.showBuyBitcoinsOnline)
router.get('/show-buy-bitcoins-online-cop/:page', localbitcoinsController.showBuyBitcoinsOnline)
router.get('/show-sell-bitcoins-online-ves', localbitcoinsController.showSellBitcoinsOnline)
router.get('/show-sell-bitcoins-online-ves/:page', localbitcoinsController.showSellBitcoinsOnline)

module.exports = router