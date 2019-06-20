var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter','$timeout','$http',function($scope,$filter,$timeout,$http) {// 1 service cua angularjs co $ o truoc
   $scope.name="main";
}]);
myApp.controller('secondController', ['$scope','$filter','$timeout','$http',function($scope,$filter,$timeout,$http) {// 1 service cua angularjs co $ o truoc
   $scope.name="second";
}]);