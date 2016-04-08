var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
	$scope.helloWorld = function() {
		console.log("i hope this works");
		alert("hello world!");
	};
});
