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