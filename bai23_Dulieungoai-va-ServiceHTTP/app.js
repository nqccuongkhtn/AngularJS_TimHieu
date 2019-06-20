var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter','$timeout','$http',function($scope,$filter,$timeout,$http) {// 1 service cua angularjs co $ o truoc
   
   		$scope.len5=5;
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
		// $scope.rules=[
		// 	{ruleName:'Tài khoản có 5 ký tự'},
		// 	{ruleName:'Tài Khoản chưa được sử dụng'},
		// 	{ruleName:'Tài khoản có ý nghĩa'}
		// ];
		$scope.alertClick=function()
		{
			alert("yeah!");
		}
		$http.get('https://vunb.herokuapp.com/api/demo').success(function(result)
		{
			$scope.rules=result;
			console.log(result);
		}).error(function(data,status)
		{
				console.log(data);
				console.log(status);

		});
}]);
