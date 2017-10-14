var app = angular.module('app', []);

app.controller('controller', function($scope) {
	$scope.updateValue = function() {
		$scope.text = $scope.input;
		$scope.input = "";
	};
});