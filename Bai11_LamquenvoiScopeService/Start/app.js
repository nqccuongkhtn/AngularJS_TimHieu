var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {// 1 service cua angularjs co $ o truoc
    
    $scope.name='hoa';
    console.log($scope);
});