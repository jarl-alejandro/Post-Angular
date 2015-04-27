'use strict'

var port = process.env.PORT || 3000
var http = require('http')
var mongoose = require('mongoose')
var App = require('./lib')

var post = new App({})
var server = http.createServer(post.app)

mongoose.connect('mongodb://localhost/post', onListenDB)

function onListenDB(err){
    if(err)
        console.log('Hay un error al conectarse a DB')
    else
        console.log('Se ha conectado a DB con exito :)')
}

server.listen(port, function () {
    console.log('Server runninin http://localhost:' + port)
})
