(function(angular, undefined) {
	'use strict';

	/**
	 * Menu Controller
	 */
 	angular
		.module('app')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$scope', '$ionicModal'];

	function MenuController ($scope, $ionicModal) {

		function _init() {

			$scope.loginData = null;

			$ionicModal.fromTemplateUrl('app/partials/modal-login.html', {
		    scope: $scope
		  }).then(function(modal) {
		    $scope.modalLogin = modal;
		  });
		}

		$scope.login = function() {
			$scope.modalLogin.show();
		};

		$scope.closeLogin = function() {
			$scope.modalLogin.hide();
		};

		$scope.doLogin = function() {
			console.log('login data', $scope.loginData);
			$scope.modalLogin.hide();
		};

		_init();
	}

})(window.angular);
