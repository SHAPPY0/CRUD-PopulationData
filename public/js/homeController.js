'use strict';

app.controller('homeController', function($scope, $http){
	 
	$scope.getPopulation = function(){ 
			$http.get('/api/getAllCityName').then(function success(res){
				$scope.cityList = res.data.data;
			}, function error(err){
				alert(err)
			})
		}  
	$scope.getPopulation();


$scope.popData = false;
	$scope.getPopulation = function(id){
			$http.get('/api/population/'+id).then(function success(res){
				$scope.populationData = res.data.data;
				if(Object.keys($scope.populationData).length) $scope.popData = true;
			}, function error(err){
				alert(err)
			})

	};

$scope.githubData = function(){ 
			$http.get('/api/github').then(function success(res){
				$scope.gitData = res.data.data;
			}, function error(err){
				alert(err)
			})
		}  
	$scope.githubData();

$scope.dummyJson = function(){ 
			$http.get('/api/dummyJson').then(function success(res){
				$scope.jsonData = res.data.data;
			}, function error(err){
				alert(err)
			})
		}  
	$scope.dummyJson();
});