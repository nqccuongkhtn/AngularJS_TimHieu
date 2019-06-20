var myApp=angular.module("myApp",[]);
myApp.controller("mainController",["$scope","$timeout",function(o,l){o.name="Cường";l(function(){o.name="BOY"},3000)}]);