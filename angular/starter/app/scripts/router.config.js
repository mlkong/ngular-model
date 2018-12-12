angular
    .module('app')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeSuccess', function() {
	        window.scrollTo(0, 0);
	    }
	    );
    });


function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/espire/main");
      
    $stateProvider
        .state('index', {
            abstract: true,
            url: "/espire",
            templateUrl: "views/common/layout.html",
            resolve: {
			  deps: ['$ocLazyLoad', function($ocLazyLoad) {
			  	return $ocLazyLoad.load([{
			        serie: true,
				    files: [
						//Side-nav directive
						'scripts/directives/side-nav.directive.js',

						//color constant 
						'scripts/services/color-config.js'
					]
				}]);
			  }]
			}
        })
		// Dashboard
		.state('index.main', {
            url: "/main",
			templateUrl: 'views/dashboard.html'
        })	
}
