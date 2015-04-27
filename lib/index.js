'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var cors = require('cors')
var Router = require('./router')

var App = function(config){
    config = config || {}

    this.app = express()
    this.app.use(cors())

    this.app.use(express.static(path.join(__dirname, '..', 'static')))

    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended:false  }))

    new Router(this.app)
}

module.exports = App
