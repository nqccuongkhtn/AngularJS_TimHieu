var weatherApp =angular.module('weatherApp',['ngRoute','ngResource']);
weatherApp.config(function($routeProvider)
{
	$routeProvider.when('/',{
		templateUrl:'pages/home.html',
		controller:'homeControler'
	}).when('/forecast',{
		templateUrl:'pages/forecast.html',
		controller:'forecastController'
	});
});
weatherApp.controller('homeControler',['$scope',function($scope)
{	

}]);
weatherApp.controller('forecastController',['$scope',function($scope)
{	
	
}]);