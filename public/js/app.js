'use strict';

var app = angular.module('app',["ngRoute"]);

 
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "/home.html",
            controller: "homeController"
        }).when("/add", {
            templateUrl: "/add.html",
            controller: "addController"
        })  
        .otherwise({
            redirectTo: "/"
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
