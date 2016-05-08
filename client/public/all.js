( function(angular) {
	angular
		.module('portfolioApp', ['ngRoute', 'ngAnimate']);
} )(angular);
( function(angular) {
	angular
		.module('portfolioApp')
		.config(routes);

	function routes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/'
			});
	}

} )(angular);
( function(angular) {
	angular
		.module('portfolioApp')
		.controller('homeCtrl', homeCtrl);

	function homeCtrl($scope, $location) {
		var vm = this;
		
	}

} )(angular);