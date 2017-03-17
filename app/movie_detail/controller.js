(function(angular){
	'use strict';

	angular.module('moviecat.movie_detail', ['ngRoute','moviecat.services.http'])
		.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/detail/:id',{
				controller:'detailController',
				templateUrl:'/movie_detail/view.html'
			})
		}])
		.controller('detailController', ['$scope', '$route','$routeParams','HttpServices',
			function($scope,$route,$routeParams,HttpServices){
				$scope.aaa ="<p><a>阿尔法奥圣诞节啊</a><p>"
				var src = 'http://api.douban.com/v2/movie/subject/'+$routeParams.id;
				HttpServices.jsonp(src,{},function(data){
					$scope.detail = data;
					$scope.$apply();
				});

		}])
})(angular);
