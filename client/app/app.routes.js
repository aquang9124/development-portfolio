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
			.when('/tech', {
				templateUrl: 'partials/tech.html',
				controller: 'techCtrl',
				controllerAs: 'vm'
			})
			.when('/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'contactCtrl',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/'
			});

		$compileProvider.debugInfoEnabled(false);
	}

} )(angular);