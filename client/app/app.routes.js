( function(angular) {
	angular
		.module('portfolioApp')
		.config(routes);

	function routes($routeProvider, $compileProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.when('/gallery', {
				templateUrl: 'partials/gallery.html',
				controller: 'galleryCtrl',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/'
			});

		$compileProvider.debugInfoEnabled(false);
	}

} )(angular);