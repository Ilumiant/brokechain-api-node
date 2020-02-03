const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

app.use(cors())
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

app.use(router)

module.exports = app