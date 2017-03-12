var app = angular.module('foodApp', ['ngRoute', 'ngAnimate']);

app.controller('HomeCtrl', ['$scope',
    function MainCtrl($scope) {
    	$scope.pageClass = 'page-home';
    }]);

app.controller('RecipeCtrl', ['$scope',
    function MainCtrl($scope) {
    	$scope.pageClass = 'page-recipe';
    }]);

app.controller('ReviewCtrl', ['$scope',
    function MainCtrl($scope) {
    	$scope.pageClass = 'page-review';
    }]);
