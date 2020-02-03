const axios = require('axios');

function showBuyBitcoinsOnline(req,res,next){
    const page = req.params.page || 1

    axios.get(`https://localbitcoins.com/buy-bitcoins-online/cop/.json?page=${page}`)
    .then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(Object.assign({}, error))
        res.status(500).json({message: error})
    })

}

function showSellBitcoinsOnline(req,res,next){
    const page = req.params.page || 1

    axios.get(`https://localbitcoins.com/sell-bitcoins-online/ves/.json?page=${page}`)
    .then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(Object.assign({}, error))
        res.status(500).json({message: error})
    })

}

module.exports = {
    showBuyBitcoinsOnline,
    showSellBitcoinsOnline
}