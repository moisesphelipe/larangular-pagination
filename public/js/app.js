(function(){
  'use strict';
  var app = angular.module('app',[
    'ngMaterial',
		'ngMessages',
		'ngAnimate',
		'ngMdIcons',
		'ui.router'
  ]);


/* ===========================================

    				    ROUTER

============================================== */
  app.config(function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('articles',{
      url: '/',
      controller: 'ArticlesController',
      templateUrl: 'templates/articles.html'
    })

  });

/* ===========================================

  				    APP THEME

============================================== */
  	app.config(function($mdThemingProvider){
  		$mdThemingProvider.theme('default')
  		.primaryPalette('blue')
  		.accentPalette('deep-purple')

  	});

})();
