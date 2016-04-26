(function(){
  'use strict';
  var app = angular.module('app');
  app.factory('ArticlesService',['$http',function($http){

    return {
      getArticles: getArticles
    }

    function getArticles(page){
      return $http({
        url: '/api/articles',
        method: "GET",
        params: {page:  page}
      });
    }
  }])
})();
