var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
    
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
    
});

weatherApp.service('cityService', function() {
    
    this.city = "Ha Noi";
    
});

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    $scope.days = $routeParams.days || 2;
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        
        cityService.city = $scope.city;
        
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService','$resource', function($scope, cityService,$resource) {
    
    $scope.city = cityService.city;
    $scope.weatherApi=$resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    $scope.weatherResult=$scope.weatherApi.get({q:$scope.city,cnt:$scope.days,lang:'vi',units:'metric',APPID:'279b4be6d54c8bf6ea9b12275a567156'});
}]);
