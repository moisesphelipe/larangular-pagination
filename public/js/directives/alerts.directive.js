(function(){
	var app = angular.module('app');
	app.directive('laAlert',function($rootScope){
		return{
			restrict: 'E',
			templateUrl: 'templates/directives/alerts.html',
			transclude: true,
			scope:{
				customClass: '@',
			},
			link: function(scope,element,attrs){
				$(element).find("i").click(function(){
					$rootScope.$apply(function(){
						$rootScope.closed = true;
					})
				});
			}
		}
	})
})();
