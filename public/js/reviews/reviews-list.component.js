angular.module('foodApp').component('reviewsList', {
	templateUrl: 'js/reviews/reviews-list.template.html',
	controller: function ReviewsListController($http){
		$http.get('data/reviews.json').then( response => this.reviews = response.data);
	}
})






















