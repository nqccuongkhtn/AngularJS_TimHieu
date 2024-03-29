var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
    
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'

    });    
});
weatherApp.service('cityService',function()
{
	this.city="Ha Noi";
});
weatherApp.controller('homeController', ['$scope','cityService', function($scope,cityService){
	$scope.city=cityService.city;
	$scope.$watch('namect',function()
	{
		cityService.city=$scope.namect;
	});
}]);

weatherApp.controller('forecastController', ['$scope','cityService', function($scope,cityService){
    
    //$scope.namect='bbbb';
    $scope.city=cityService.city;
}]);
