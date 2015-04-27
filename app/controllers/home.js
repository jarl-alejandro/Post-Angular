'use strict'

var path = require('path')

exports.index = function(req, res){
	var template = path.join(__dirname, '..', '..', 'static', 'templates', 'home.html')
	res.sendFile(template)
}