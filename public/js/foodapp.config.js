angular.module('foodApp').config(
	function($routeProvider, $locationProvider){
		$routeProvider.
		when('/', {
			template: 'test',
			controller: 'HomeCtrl'
		}).
		when('/recipes', {
			template: '<recipe-list></recipe-list>',
			controller: 'RecipeCtrl'
		}).
		when('/recipes/:recipeId', {
			template: '<recipe-detail></recipe-detail>'
		}).
		when('/reviews', {
			template: '<reviews-list></reviews-list>',
			controller: 'ReviewCtrl'
		}).
		otherwise({
			redirectTo: '/404'
		});
		$locationProvider.html5Mode(true)
})