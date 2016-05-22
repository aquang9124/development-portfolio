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
( function(angular) {
	angular
		.module('portfolioApp')
		.controller('navCtrl', navCtrl);

	function navCtrl($scope, $location) {
		var vm = this;

		vm.currentUrl = currentUrl;
		vm.showLinks = showLinks;
		vm.mobileScreen = false;
		vm.openMenu = false;

		// Function implementations
		function currentUrl(urlLocation) {
			return urlLocation === $location.url();
		}

		function showLinks() {
			if (vm.mobileScreen === true && vm.openMenu === true) {
				vm.mobileScreen = false;
				vm.openMenu = false;
			} else {
				vm.openMenu = true;
				vm.mobileScreen = true;
			}
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