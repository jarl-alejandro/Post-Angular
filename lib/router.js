'use strict'

var express = require('express')
var router = express.Router()
var post = require('../app/controllers/post')
var home = require('../app/controllers/home')

var Router = function(app){

    router.route('/post')
        .get(post.posts)
        .post(post.addPost)

    router.route('/post/:id')
        .get(post.post)
        .delete(post.deletePost)
        .put(post.updatePost)

    app.use('/api', router)


    app.get('/', home.index)
}

module.exports = Router
