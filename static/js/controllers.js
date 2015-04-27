'use strict'

angular.module("Post")
.controller("PostsController", function($scope, PostResource){
	$scope.posts = PostResource.query()
})

.controller("PostController", function($scope, PostResource, $routeParams, $location){

	$scope.post = PostResource.get({ id:$routeParams.id })
	$scope.title = "Acualiza el post"

	$scope.savePost = function(){
		console.log("update")
		PostResource.update({ id:$routeParams.id },
			{
				'title': $scope.post.title,
				'body': $scope.post.body
			}, function(data){
				$location.path('/')
		})
	}
})

.controller("AddPostController", function($scope, PostResource, $location){

	$scope.post = {}
	$scope.title = "Agrega un nuevo post"

	$scope.savePost = function(){
		PostResource.save({
			'title': $scope.post.title,
			'body': $scope.post.body,
		}, function(data){
			$location.path('/')
		})
	}	
})