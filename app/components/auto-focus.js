(function(angular){
	'use strict';
	angular.module('moviecat.auto_focus', [])
		.directive('autoFocus', ['$location', function($location){
			var path = $location.path();
			return {
				restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
				link: function($scope, iElm, iAttrs, controller) {
					var alink = iElm.children().attr('href'),
						type = alink.replace(/#(\/.+?)\/\d+/,'$1');
					if(path.startsWith(type)){
						iElm.addClass('active');
					}
					iElm.on('click',function(){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					});
				}
			};
		}]);
})(angular);

