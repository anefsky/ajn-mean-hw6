angular.module('foodApp').component('recipeDetail', {
	templateUrl: 'js/recipes/recipe-detail.template.html',
	controller: function RecipeDetailController($http, $routeParams) {
		
		$http.get('data/' + $routeParams.recipeId +  '.json')
		.then( response => {
			this.recipe = response.data;
			this.setImage(this.recipe.images[0]);
			this.handleImageHighlighter();
		});

		this.setImage = imageUrl => this.mainImageUrl = imageUrl;

		this.handleImageHighlighter = function() {
			setTimeout(() => {  // needs time to render
				const imagesList = document.querySelectorAll('.recipe-thumbs li img');
				imagesList.forEach(image => image.addEventListener('mouseenter', highlightLink));
				const highlight = document.createElement('span');
				highlight.classList.add('highlight');
				document.body.append(highlight);
			}, 1000);  
		}

	}
})