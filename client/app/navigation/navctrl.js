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