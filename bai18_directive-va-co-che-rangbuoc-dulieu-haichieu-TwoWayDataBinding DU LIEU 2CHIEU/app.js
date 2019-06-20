var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter',function($scope,$filter) {// 1 service cua angularjs co $ o truoc
   
		$scope.lowercase=function()
		{
			return $filter('lowercase')($scope.username);
		}

}]);
