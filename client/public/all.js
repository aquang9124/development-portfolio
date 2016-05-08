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

		function currentUrl(urlLocation) {
			return urlLocation === $location.url();
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