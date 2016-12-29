/* Application for Cast*/
var app = angular.module('app', ['ngRoute']);

app.controller('ctrl1', function($scope){
	$scope.new = "Joseph Gordon-Levitt";
	$scope.first;

	$scope.updateValue = function(){
		$scope.new = $scope.first;
	}
});

app.controller('ctrl2', function($scope){
	$scope.new = "Zooey Deschanel";
	$scope.first;

	$scope.updateValue = function(){
		$scope.new = $scope.first;
	}
});