angular.module('foodApp').component('recipeDetail', {
	templateUrl: 'js/recipes/recipe-detail.template.html',
	controller: function RecipeDetailController($http, $routeParams) {
		
	    $http.get('data/' + $routeParams.recipeId +  '.json')
	      .then( response => {
	      	this.recipe = response.data;
	      	this.setImage(this.recipe.images[0]);
	    });

		this.setImage = imageUrl => this.mainImageUrl = imageUrl;
	}
})