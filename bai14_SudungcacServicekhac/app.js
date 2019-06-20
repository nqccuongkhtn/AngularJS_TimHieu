var myApp = angular.module('myApp',['ngMessages','ngResource']);//["khai bao them thu vien ngoai"]

myApp.controller('mainController', function($scope,$log,$filter) {// 1 service cua angularjs co $ o truoc
	//service $log
    $log.log("hello");
    $log.info("info");
    $log.warn("thong bao warnning");
    $log.debug("thông tin chi tiết");
    $log.error("thong bao error");

    $scope.name="hoa";
    $scope.uppercase=$filter('uppercase')($scope.name);
    $log.info($scope.uppercase);

});
var searchPerson = function(fname,lname,email,city,job)
{
	return"Nhi";
}
//console.log(angular.injector().annotate(searchPerson)); bài 13