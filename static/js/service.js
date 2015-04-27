angular.module("Post")
.factory("PostResource", function($resource){
	return $resource('/api/post/:id', { id:"@id" }, 
		{update:{method:"PUT"}})
})