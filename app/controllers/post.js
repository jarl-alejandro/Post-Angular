'use strict'

var Post = require('../models/post')

exports.posts = function(req, res){
    Post.find({})
    .exec(function(err, data){
        if(err)
            return err.message
        else
            res.json(data)
    })
}

exports.addPost = function(req, res){
    var post = new Post({
        title: req.body.title,
        body: req.body.body
    })

    post.save(function(err, data){
        if(err)
            console.log('Hay un error al crearse el post')
        else
            console.log('Se ha guardado con exito el post')

        res.send(data)
    })
}

exports.post = function(req, res){
    var id = req.params.id

    Post.findById(id)
    .exec(function(err, data){
        if(err)
            return err.message
        else
            res.jsonp(data)
    })
}

exports.deletePost = function(req, res){

    Post.findById(req.params.id)
    .exec(function(err, data){
        if(err)
            return err.message
        else{
            data.remove(function(err){
                if(err) return err.message
            })
        }
    })
}

exports.updatePost = function(req, res){

    Post.findById(req.params.id)
    .exec(function(err, data){
        if(!err){
            data.title = req.body.title
            data.body = req.body.body

            data.save(function(err){
                if(!err){
                    res.status(200).json(data)
                }
                else
                    return err.message
            })
        }
        else
            return err.message
    })
}







