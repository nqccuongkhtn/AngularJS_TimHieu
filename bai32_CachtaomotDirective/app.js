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
myApp.service('nameService',function()
{   
    this.name='cuong';
    this.nameLength=this.name.length;

});
myApp.directive('upLoad',function()
{
  return{
    restrict:'AECM',
    template:'<form> <div class="form-group"> <label for="exampleFormControlFile1">Example file input</label> <input type="file" class="form-control-file" id="exampleFormControlFile1"> </div></form>',
    //có thể dùng templateUrl thay cho template
    replace:true
  }
});
myApp.controller('mainController', ['$scope','$filter','$timeout','$http','nameService',function($scope,$filter,$timeout,$http,nameService) {// 1 service cua angularjs co $ o truoc
   $scope.name=nameService.name;
   $scope.$watch('name',function()
   {
        nameService.name=$scope.name;
        nameService.nameLength=$scope.name.length;
   });
   console.log(nameService.name,nameService.nameLength);
}]);
myApp.controller('secondController', ['$scope','$filter','$timeout','$http','$routeParams','nameService',function($scope,$filter,$timeout,$http,$routeParams,nameService) {// 1 service cua angularjs co $ o truoc
   $scope.name=nameService.name;
   $scope.num=$routeParams.num || 1;
    $scope.$watch('name',function()
   {
        nameService.name=$scope.name;
         nameService.nameLength=$scope.name.length;
   });
    console.log(nameService.name,nameService.nameLength);
}]);