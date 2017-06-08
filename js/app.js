var app = angular.module('RAVE', ['ngRoute'])

app.factory('HttpInterceptorMessage', ['$q', '$location', '$rootScope', function ($q, $location, $rootScope) {
	return {
		
		// optional method
		'request': function (config) {
			
			// do something on success
			return config
		},
		'response': function (response) {
			
			// do something on success
			return response
		},

		'responseError': function (response) {
			
			return $q.reject(response)
		}
	}
}])

// Templates mapper
app.config(['$locationProvider', '$routeProvider', '$httpProvider',
	function ($locationProvider, $routeProvider, $httpProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'home.template.html',
			reloadOnSearch: false
		})
		.when('/getPage/:title', {
			templateUrl: 'page.template.html'
		})
		
		$httpProvider.interceptors.push('HttpInterceptorMessage')
}])