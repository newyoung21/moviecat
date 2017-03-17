
'use strict';
(function(angular){

	angular.module('moviecat', [
		'ngRoute',
		'moviecat.movie_detail',
		'moviecat.movie_list',
		'moviecat.auto_focus',
		])
		.config(['$routeProvider',function($routeProvider) {
			$routeProvider.otherwise({
				redirectTo:'/in_theaters/1'
			})
		}])
		.controller('searchController', ['$scope','$route' ,function($scope,$route){
			$scope.Stext = "";
			$scope.search = function(){
				$route.updateParams({
					category : 'search',
					page : 1,
					q : $scope.Stext,
				})
			};
		}])
})(angular);
