(function(){
  'use strict';
  var app = angular.module('app');
  app.controller('ArticlesController',['$scope','ArticlesService',function($scope,ArticlesService){
    $scope.fakers= {};
    $scope.fakers.tags = [
      {name: 'Javascript'},
      {name: 'AngulrJs'},
      {name: 'PHP'},
      {name: 'Laravel'},
    ];
    $scope.fakers.authors = [
      {name: "Moises"},
      {name: "John Doe"},
      {name: "Jerry"},
      {name: "Someone"},
    ];

    $scope.getArticles = function(page){
      $scope.loading = true;
      page = page || 1;
      ArticlesService.getArticles(page).then(function(response){
        $scope.articles = response.data.data;
        $scope.pageAttr = {
          currentPage : response.data.current_page,
          lastPage : response.data.last_page,
          perPage : response.data.per_page,
          total : response.data.total,
        };
        $scope.loading = false;
      })
    }
    $scope.getArticles();

  }])
})();
