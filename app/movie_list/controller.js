(function(angular) {
  'use strict';


  angular.module('moviecat.movie_list', ['ngRoute','moviecat.services.http'])
  	.config(['$routeProvider',function($routeProvider) {
  		$routeProvider.when('/:category/:page',{
  			controller:'movieListController',
  			templateUrl:'/movie_list/view.html'
  		});
  	}])
  	.controller('movieListController', ['$scope', '$route','$routeParams','HttpServices',
  		function($scope,$route,$routeParams,HttpServices){
  			var path = $routeParams.category,
  				url = 'http://api.douban.com/v2/movie/'+path,
  				page = parseInt($routeParams.page),
  				count=4,
  				start=(page-1)*count;
        $scope.dd = false;
  			$scope.currentPage = page;
  			$scope.loading = true;
  			HttpServices.jsonp(url,{
  				count:count,
  				start:start,
  				q:$routeParams.q
  			},function(data){
  				$scope.subjects = data.subjects;
  				$scope.title = data.title;
  				$scope.total = data.total;
  				$scope.totalPages = Math.ceil($scope.total/count);
  				$scope.loading = false;
          $scope.dd = true;
  				$scope.$apply();
  			});

  			$scope.go = function(page){
  				if(page>=1 && page<= $scope.totalPages){
  					$route.updateParams({ page: page });
  				}
  			}

  	}])
})(angular)
