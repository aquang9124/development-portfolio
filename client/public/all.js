( function(angular) {
	angular
		.module('portfolioApp', ['ngRoute', 'ngAnimate']);
} )(angular);
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
( function(angular) {
	angular
		.module('portfolioApp')
		.controller('navCtrl', navCtrl);

	function navCtrl($scope, $location) {
		var vm = this;

		vm.currentUrl = currentUrl;
		vm.showLinks = showLinks;
		vm.mobileScreen = false;

		// Function implementations
		function currentUrl(urlLocation) {
			return urlLocation === $location.url();
		}

		function showLinks() {
			vm.mobileScreen = true;
		}
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
( function(angular) {
	angular
		.module('portfolioApp')
		.controller('galleryCtrl', galleryCtrl);

	// Implementation of controller as standalone function	
	function galleryCtrl($scope) {
		var vm = this;
	}

} )(angular);