'use strict';

app.controller('addController', function($scope, $http){
	 
	$scope.addPopulation = function(data){ 
		$scope.successFlag = false;
		if($scope.populationForm.$valid){
			$http.post('/api/population', $scope.data).then(function success(res){
				$scope.successFlag = true;
				$scope.successMsg = res.data.message;
			}, function error(err){
				alert(err)
			})
		}else{
			alert('Fields are required');
		}

	}
});