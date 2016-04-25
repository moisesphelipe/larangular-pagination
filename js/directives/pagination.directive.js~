(function(){
	'use strict';
	var app = angular.module('app');
	app.directive('laPagination',['$timeout',function($timeout){
		return{
				restrict : 'E',
				transclude: true,
				templateUrl : 'templates/directives/pagination.html',
				link:function(scope,element,attrs){
					//USE ATTRS TO GET OBJECT, YOU CAN USE IT IN A SCOPE TOO.
					var pageAttr = JSON.parse(attrs.pageAttr);
					scope.pages = [];
					var currentPage = scope.pageAttr.currentPage;
					var lastPage = scope.pageAttr.lastPage;
					//LIMIT OF THE PAGE TO BE SHOWN IN THE LIST
					//IF YOU ARE USING ANGULAR MATERIAL YOU CAN ALSO CHANGE A $SETLIMIT IN ACCORDING TO USER'S SCREEN
					// var setLimit = ($mdMedia('sm') ? VALUE : ANOTHER CONDITION OR VALUE)
					var setLimit = 9;
					// CHECK IF THE $LIMIT IS GREATER THAN NUMBER OF PAGES
					var limit = ( setLimit <= lastPage ? setLimit : lastPage );
					//SET AN AVERAGE OF $SETLIMIT
					var setAverage = Math.round(( 1 + setLimit) / 2);
					//CHECK IF THE $CURRENTPAGE IS THE MIDDLE OF THE TERM TO SHOW THE SAME NUMBER OF TERMS TO EACH SIDE
					var average = (currentPage <= setAverage ? true : false);
					// NUMBER OF PAGE TO BE SHOWN IN EACH SIDE WHEN THE CURRENT PAGE IS EQUALS OR GREATER THAN THE $AVERAGE
					var eachSide = setAverage - 1;
					var max = (currentPage + eachSide <= lastPage ? currentPage + eachSide : lastPage)
					var start;
					//MAKE THE PAGINATION
					scope.setPages = function(){
						if( average || lastPage <= limit){
							for(start = 1; start <= limit; start++){
								scope.pages.push(start);
							}
							//SHOW A LINK FOR THE LAST PAGE
							scope.showLast = (setLimit < lastPage ? true : false);

							// CHECK TO ALWAYS SHOW $SETLIMIT'S NUMBER OF PAGE
						}else if(lastPage - currentPage < eachSide){
							var setStart = lastPage - (setLimit - 1);
							for(start = setStart; start <= max; start++){
								scope.pages.push(start);
							}
							//SHOW A LINK FOR THE FIRST PAGE
							scope.showFirst = true;

						}
						else{
							for(start = currentPage - eachSide; start <= max ; start++){
								scope.pages.push(start);
							}
							//SHOW A LINK FOR THE FIRST PAGE
							scope.showFirst = true;
							//SHOW A LINK FOR THE LAST PAGE
							scope.showLast = (lastPage - currentPage > eachSide ? true : false);
						}

					};

					//USE TIMEOUT TO RENDER THE PAGINATION AFTER $HTTP REQUEST
					$timeout(function(){
						scope.setPages();
						scope.previous = currentPage - 1;
						scope.next = currentPage +1;
					})

				}

			}

	}])

})();
