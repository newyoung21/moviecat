(function(angular){
	'use strict'
	angular.module('moviecat.services.http', [])
		.service('HttpServices', ['$window', '$document', function($window,$document){
			//定义跨域函数
			this.jsonp = function(url,data,callback){
				// http://api.douban.com/v2/movie/top250?count=5
				var queryString = '?';
				for(var key in data){
					queryString+=key+'='+data[key]+'&';
				}
				var src = url+queryString+'callback=myJsonp';
				$window['myJsonp']=callback;
				var scriptElement = $document[0].createElement('script');
				scriptElement.src = src;
				$document[0].body.appendChild(scriptElement);
			}
		}]);
})(angular)
