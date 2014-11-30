var app = angular.module("helloFamous", ["famous.angular"]);


app.controller("homeController", function($scope, $famous){
	
	$scope.go = function() {
		console.log("hello");
		$famous.find('#shake-hello')[0].replay();	
	};
	
});