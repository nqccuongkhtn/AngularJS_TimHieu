var myApp = angular.module('myApp', ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second', {
        templateUrl : 'pages/second.html',
        controller: 'secondController'
    }).when('/second/:num',
    {
    	templateUrl : 'pages/second.html',
        controller: 'secondController'
    });
});
myApp.controller('mainController', ['$scope','$filter','$timeout','$http',function($scope,$filter,$timeout,$http) {// 1 service cua angularjs co $ o truoc
   $scope.name='main';
}]);
myApp.controller('secondController', ['$scope','$filter','$timeout','$http','$routeParams',function($scope,$filter,$timeout,$http,$routeParams) {// 1 service cua angularjs co $ o truoc
   $scope.name='second';
   $scope.num=$routeParams.num || 1;
}]);