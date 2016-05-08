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