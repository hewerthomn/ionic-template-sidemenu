(function(angular, undefined) {
	'use strict';

	/**
	 * Route Config
	 */
	angular
		.module('app')
		.config(routeConfig);

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routeConfig($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('app', {
				url: '/app',
				abstract: true,
				controller: 'MenuController',
				templateUrl: 'app/components/menu/menu.html'
			})
			.state('app.home', {
				url: '/home',
				views: {
					'menuContent': {
						controller: 'HomeController',
						templateUrl: 'app/components/home/home.html'
					}
				}
			})
			.state('app.search', {
				url: '/search',
				views: {
					'menuContent': {
						controller: 'SearchController',
						templateUrl: 'app/components/search/search.html'
					}
				}
			})
			.state('app.settings', {
				url: '/settings',
				views: {
					'menuContent': {
						controller: 'SettingsController',
						templateUrl: 'app/components/settings/settings.html'
					}
				}
			});

		$urlRouterProvider.otherwise('/app/home');
	}

})(window.angular);
