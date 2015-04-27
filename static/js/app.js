'use strict'

var post = angular.module("Post", ["ngRoute", "ngResource"])

post.config(function($routeProvider){
	$routeProvider
		.when("/", {
			controller: "PostsController",
			templateUrl: "templates/posts.html"
		})
		.when("/post/add", {
			controller: "AddPostController",
			templateUrl: "templates/post_form.html"
		})
		.when("/post/:id", {
			controller: "PostController",
			templateUrl: "templates/post.html"
		})
		.when('/post/edit/:id', {
			controller: "PostController",
			templateUrl: "templates/post_form.html"
		})
})