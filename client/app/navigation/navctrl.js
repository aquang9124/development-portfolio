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