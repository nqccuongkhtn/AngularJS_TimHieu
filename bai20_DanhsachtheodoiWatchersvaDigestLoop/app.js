var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter','$timeout',function($scope,$filter,$timeout) {// 1 service cua angularjs co $ o truoc
   
   		$scope.$watch('username',function(newValue,oldValue)
   		{
   			console.log('change');
   			console.log('newValue: '+newValue);
   			console.log('oldValue: '+oldValue);

   		});
		$scope.lowercase=function()
		{
			return $filter('lowercase')($scope.username);
		}
		// setTimeout(function()// vì gọi bằng phương thức không đồng bộ của angular nên angular k thuc hien nen phai bao cho angular biet
		// {
		// 	// $scope.username="cuong";
		// 	// console.log('$scope change!!!')
		// 	$scope.$apply(function()
		// 	{
		// 		$scope.username="cuong";
		// 		console.log('$scope change!!!')
		// 	});
		// },3000);
		$timeout(function()
		{
			$scope.username="cuong";
			console.log('$scope change!!!')
		},3000);

}]);
