( function(angular) {
	angular
		.module('portfolioApp', ['ui.router', 'ngAnimate']);
} )(angular);
( function(angular) {
	angular
		.module('portfolioApp')
		.config(routes);

	function routes($stateProvider, $urlRouterProvider, $compileProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'partials/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: 'partials/gallery.html',
				controller: 'galleryCtrl',
				controllerAs: 'vm'
			})
			.state('tech', {
				url: '/tech',
				templateUrl: 'partials/tech.html',
				controller: 'techCtrl',
				controllerAs: 'vm'
			});

		$compileProvider.debugInfoEnabled(false);
	}

} )(angular);
( function(angular) {
	angular
		.module('portfolioApp')
		.controller('navCtrl', navCtrl);

	function navCtrl($rootScope, $scope, $location) {
		var vm = this;

		vm.currentUrl = currentUrl;
		vm.showLinks = showLinks;
		vm.mobileScreen = false;
		vm.openMenu = false;

		// Autoscroll to top on stateChange
		$rootScope.$on('$stateChangeSuccess', function() {
		   document.body.scrollTop = document.documentElement.scrollTop = 0;
		});

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
		.controller('footerCtrl', footerCtrl);

	function footerCtrl($scope) {
		var vm = this;
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
( function(angular) {
	angular
		.module('portfolioApp')
		.controller('techCtrl', techCtrl);

	function techCtrl($scope) {
		var vm = this;

		vm.setRepo = setRepo;
		vm.currentRepo = '';

		function setRepo(box) {
			if (box === vm.currentRepo) {
				vm.currentRepo = '';
			}
			else if (box == 'html5') {
				vm.currentRepo = box;
				return true;
			}
			else if (box == 'css3') {
				vm.currentRepo = box;
				return true;
			}
			else if (box == 'php') {
				vm.currentRepo = box;
				return true;
			}
		}
	}
} )(angular);