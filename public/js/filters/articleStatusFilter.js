(function(){
	'use strict';
	var app = angular.module('app');
	app.filter('articleStatusFilter',function(){
		return function(status) {
			switch(status){
				case '0':
					return status = 'Unpublished';
					break;
				case '1':
					return status = 'Published';
					break;
				case '2':
					return status = 'Draft';
					break;
			}
		}
	})
})();
