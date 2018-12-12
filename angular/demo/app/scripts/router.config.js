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
			templateUrl: 'views/dashboard.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
							
					    	//jvectormap
					   		'../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css',
					    	'../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
					    	'scripts/services/map/jquery-jvectormap-us-aea.js',
					    	'scripts/directives/angular-jvectomap.directive.js',

							//nvd3
							'../bower_components/d3/d3.min.js',
							'../bower_components/nvd3/build/nv.d3.min.js',
							'../bower_components/nvd3/build/nv.d3.min.css',
							'../bower_components/angular-nvd3/dist/angular-nvd3.min.js',

							//sparkline chart
							'../bower_components/jquery.sparkline/index.js',
							'scripts/directives/angular-sparkline.directive.js',

							//chartjs
							'../bower_components/chart.js/dist/Chart.min.js',
							'../bower_components/angular-chart/dist/angular-chart.min.js',			

							//Dashboard Contoller
							'scripts/controllers/dashboard.ctrl.js'
						]
					}]);
				}]
			}
        })
		
		//UI Elements
		.state('index.ui', {
            abstract: true,
            url: "/ui",
			template: '<div ui-view></div>'
        })
		.state('index.ui.buttons', {
            url: "/buttons",
			templateUrl: 'views/ui/buttons.html'
        })
		.state('index.ui.modals', {
            url: "/modals",
			templateUrl: 'views/ui/modals.html',
			resolve: {
			  deps: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('scripts/controllers/modals.ctrl.js');
			  }]
			}
        })
        .state('index.ui.tabs-accordion', {
            url: "/tabs",
			templateUrl: 'views/ui/tabs_accordion.html'
        })
		.state('index.ui.typography', {
            url: "/typography",
			templateUrl: 'views/ui/typography.html'
        })
        .state('index.ui.icons', {
            url: "/icons",
			templateUrl: 'views/ui/icons.html'
        })
		.state('index.ui.cards', {
            url: "/cards",
			templateUrl: 'views/ui/cards.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
							//Card Portlet Directive
							'scripts/directives/card-portlet-refresh.directive.js',
							'scripts/directives/card-portlet-delete.directive.js',

							//nvd3
							'../bower_components/d3/d3.min.js',
							'../bower_components/nvd3/build/nv.d3.min.js',
							'../bower_components/nvd3/build/nv.d3.min.css',
							'../bower_components/angular-nvd3/dist/angular-nvd3.min.js'
						]
					}]);
				}]
			}
        })
 		.state('index.ui.progress-slider', {
            url: "/progress-slider",
			templateUrl: 'views/ui/progress-slider.html',
			resolve: {
				$title: function() { return 'Home'; },
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//nouislider
					    	'../bower_components/nouislider/distribute/nouislider.min.css',
					    	'../bower_components/nouislider/distribute/nouislider.js',
					    	'../bower_components/nouislider-angular/nouislider.js',


							//Controller
							'scripts/controllers/progress-slider.ctrl.js'
						]
					}]);
				}]
			}
        })
        .state('index.ui.notification', {
            url: "/notification",
			templateUrl: 'views/ui/notification.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//noty
					    	'../bower_components/noty/js/noty/packaged/jquery.noty.packaged.min.js',

					    	//sweet alert
					    	'../bower_components/sweetalert/lib/sweet-alert.js',
					    	'../bower_components/sweetalert/lib/sweet-alert.css',
					    	'../bower_components/ngSweetAlert/SweetAlert.js',

					    	//selectize
					    	'../bower_components/selectize/dist/css/selectize.default.css',
					    	'../bower_components/selectize/dist/js/standalone/selectize.min.js',
					    	'../bower_components/angular-selectize/dist/angular-selectize.js',

							//Controller
							'scripts/controllers/notification.ctrl.js'
						]
					}]);
				}]
			}
        })

        //Table
        .state('index.table', {
            abstract: true,
            url: "/table",
			template: '<div ui-view></div>'
        })
        .state('index.table.basic-table', {
            url: "/basic-table",
			templateUrl: 'views/tables/basic-table.html'
        })
        .state('index.table.data-table', {
            url: "/data-table",
			templateUrl: 'views/tables/data-table.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//datatable
					    	'../bower_components/datatables/media/css/jquery.dataTables.css',
					    	'../bower_components/datatables/media/js/jquery.dataTables.js',
					    	'../bower_components/angular-datatables/dist/angular-datatables.js',
					    	'../bower_components/angular-datatables/dist/plugins/select/angular-datatables.select.js',
					    	

							//Controller
							'scripts/controllers/datatable.ctrl.js'
						]
					}]);
				}]
			}
        })


        //Form
        .state('index.forms', {
            abstract: true,
            url: "/forms",
			template: '<div ui-view></div>'
        })
        .state('index.forms.form-elements', {
            url: "/form-elements",
			templateUrl: 'views/forms/form-elements.html',
			resolve: {
				$title: function() { return 'Home'; },
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//selectize
					    	'../bower_components/selectize/dist/css/selectize.default.css',
					    	'../bower_components/selectize/dist/js/standalone/selectize.min.js',
					    	'../bower_components/angular-selectize/dist/angular-selectize.js',
					    	
					    	//datepicker
					    	'../bower_components/moment/min/moment.min.js',
					    	'../bower_components/bootstrap-daterangepicker/daterangepicker.css',
		                    '../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
					    	'../bower_components/bootstrap-daterangepicker/daterangepicker.js', 
				            '../bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js', 
				            '../bower_components/bootstrap-timepicker/js/bootstrap-timepicker.js', 

				            //summernote wysiwyg
				            '../bower_components/summernote/dist/summernote.css',
				            '../bower_components/summernote/dist/summernote.min.js',
				            '../bower_components/angular-summernote/dist/angular-summernote.min.js',

							//Controller
							'scripts/controllers/form-elements.ctrl.js'
						]
					}]);
				}]
			}
        })
		.state('index.forms.form-layouts', {
            url: "/form-layouts",
			templateUrl: 'views/forms/form-layouts.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
				    return $ocLazyLoad.load('../bower_components/jquery-validation/dist/jquery.validate.min.js');
			    }]
			}
        })
        .state('index.forms.form-wizard', {
            url: "/form-wizard",
			templateUrl: 'views/forms/form-wizard.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//jQuery Vallidate
					    	'../bower_components/jquery-validation/dist/jquery.validate.min.js',

					    	//Bootstrap Wizaard
					    	'../bower_components/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js',			    	

							//Controller
							'scripts/controllers/form-wizard.ctrl.js'
						]
					}]);
				}]
			}
        })


        //Apps
        .state('index.apps', {
            abstract: true,
            url: "/apps",
			template: '<div ui-view></div>'
        })
        .state('index.apps.calendar', {
            url: "/calendar",
			templateUrl: 'views/apps/calendar.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//fullcalendar
					    	'../bower_components/moment/min/moment.min.js',
					    	'../bower_components/angular-ui-calendar/src/calendar.js',
					    	'../bower_components/fullcalendar/dist/fullcalendar.min.css',
					    	'../bower_components/fullcalendar/dist/fullcalendar.min.js',
					    	'../bower_components/fullcalendar/dist/gcal.js',	

					    	//datepicker
					    	'../bower_components/bootstrap-daterangepicker/daterangepicker.css',
		                    '../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
					    	'../bower_components/bootstrap-daterangepicker/daterangepicker.js', 
				            '../bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js', 
				            '../bower_components/bootstrap-timepicker/js/bootstrap-timepicker.js',     	

							//Controller
							'scripts/controllers/calendar.ctrl.js'
						]
					}]);
				}]
			}
        })
        .state('index.apps.email', {
            url: "/email",
            views: {

	            '': { 
	            	templateUrl: 'views/apps/email.html' 
	            },

	            'emailList@index.apps.email': { 
	                templateUrl: 'views/apps/email-list.html'
	            },
	            'emailContent@index.apps.email': { 
	                templateUrl: 'views/apps/email-inbox.html'
	            }
	        },
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//summernote wysiwyg
				            '../bower_components/summernote/dist/summernote.css',
				            '../bower_components/summernote/dist/summernote.min.js',
				            '../bower_components/angular-summernote/dist/angular-summernote.min.js',

				            //Selectize
				            '../bower_components/selectize/dist/css/selectize.default.css',
					    	'../bower_components/selectize/dist/js/standalone/selectize.min.js',
					    	'../bower_components/angular-selectize/dist/angular-selectize.js',

				            //Service
				            'scripts/services/email.service.js',

							//Controller
							'scripts/controllers/email.ctrl.js',
							'scripts/controllers/email-list.ctrl.js',
							'scripts/controllers/email-inbox.ctrl.js',
							'scripts/controllers/email-compose.ctrl.js'
						]
					}]);
				}]
			}
        })
        .state('email-inbox', {
       		url: "/inbox/:emailId",
	        parent: 'index.apps.email',                  
	        views: {
	            'emailContent@index.apps.email': {
	                 templateUrl: 'views/apps/email-inbox.html'
	             }
	        }
	    })
       .state('email-compose', {
       		url: "/compose",
	        parent: 'index.apps.email',                  
	        views: {
	            'emailContent@index.apps.email': {
	                 templateUrl: 'views/apps/email-compose.html'
	             }
	        }
	    })
       .state('index.apps.social', {
            url: "/social",
			templateUrl: 'views/apps/social.html'
        })


       //Charts
        .state('index.charts', {
            abstract: true,
            url: "/charts",
			template: '<div ui-view></div>'
        })
        .state('index.charts.nvd3', {
            url: "/nvd3",
			templateUrl: 'views/charts/nvd3.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					   		//nvd3
							'../bower_components/d3/d3.min.js',
							'../bower_components/nvd3/build/nv.d3.min.js',
							'../bower_components/nvd3/build/nv.d3.min.css',
							'../bower_components/angular-nvd3/dist/angular-nvd3.min.js',

							//Controller
							'scripts/controllers/nvd3.ctrl.js'
						]
					}]);
				}]
			}
        })
        .state('index.charts.chartjs', {
            url: "/chartjs",
			templateUrl: 'views/charts/chartjs.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					   		//chartjs
							'../bower_components/chart.js/dist/Chart.min.js',
							'../bower_components/angular-chart/dist/angular-chart.min.js',

							//Controller
							'scripts/controllers/chartjs.ctrl.js'
						]
					}]);
				}]
			}
        })
        .state('index.charts.rickshaw', {
            url: "/rickshaw",
			templateUrl: 'views/charts/rickshaw.html',
			resolve: {
				$title: function() { return 'Home'; },
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					    	//momentjs
					    	'../bower_components/moment/min/moment.min.js',

					   		//rickshaw chart
							'../bower_components/d3/d3.min.js',
							'../bower_components/rickshaw/rickshaw.min.js',
							'../bower_components/rickshaw/rickshaw.min.css',
							'../bower_components/angular-rickshaw/rickshaw.js',

							//Controller
							'scripts/controllers/rickshaw.ctrl.js'
						]
					}]);
				}]
			}
        })
        .state('index.charts.sparkline', {
            url: "/sparkline",
			templateUrl: 'views/charts/sparkline.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [

					   		//sparkline chart
							'../bower_components/jquery.sparkline/index.js',
							'scripts/directives/angular-sparkline.directive.js',

							//Controller
							'scripts/controllers/sparkline.ctrl.js'
						]
					}]);
				}]
			}
        })

    	//Maps
        .state('index.maps', {
            abstract: true,
            url: "/charts",
			template: '<div ui-view></div>'
        })
        .state('index.maps.google', {
            url: "/google-map",
			templateUrl: 'views/maps/google-map.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					   		//angular ui map
							'../bower_components/angular-ui-map/ui-map.min.js',
							'../bower_components/angular-ui-event/dist/event.min.js',

							//Controller
							'scripts/controllers/google-map.ctrl.js'
						]
					}]);
				}]
			}
        }) 
        .state('index.maps.vector', {
            url: "/vector-map",
			templateUrl: 'views/maps/vector-map.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					   		//jvectormap
					   		'../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css',
					    	'../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
					    	'../bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
					    	'scripts/directives/angular-jvectomap.directive.js',

							//Controller
							'scripts/controllers/vector-map.ctrl.js'
						]
					}]);
				}]
			}
        })   

        //Extra
        .state('index.extra', {
            abstract: true,
            url: "/extra",
			template: '<div ui-view></div>',
        })
        .state('index.extra.invoice', {
            url: "/invoice",
			templateUrl: 'views/extras/invoice.html'
        })  
        .state('index.extra.account', {
            url: "/account",
			templateUrl: 'views/extras/account.html'
        })  
        .state('index.extra.faq', {
            url: "/faq",
			templateUrl: 'views/extras/faq.html',
			resolve: {
			    deps: ['$ocLazyLoad', function($ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					   		//ng-sticky
					   		'../bower_components/ngsticky/dist/sticky.min.js',

							//angular scroll
							'../bower_components/angular-scroll/angular-scroll.min.js'
						]
					}]);
				}]
			}
        })  

        .state('index.extra.gallery', {
            url: "/gallery",
			templateUrl: 'views/extras/gallery.html',
			resolve: {
			    ngAnimate : ['$$animateJs','$ocLazyLoad', function ($$animateJs, $ocLazyLoad) {
			    	return $ocLazyLoad.load([{
				        serie: true,
						insertBefore: '#lazyload-holder',
					    files: [
					   		//masonry
					   		'../bower_components/masonry/dist/masonry.pkgd.min.js',
					   		'../bower_components/imagesloaded/imagesloaded.js',
					    	'../bower_components/angular-masonry/angular-masonry.js',

					    	//photoswipe
					    	'../bower_components/photoswipe/dist/photoswipe.css',
					    	'../bower_components/photoswipe/dist/default-skin/default-skin.css',
					    	'../bower_components/photoswipe/dist/photoswipe.js',
					    	'../bower_components/photoswipe/dist/photoswipe-ui-default.min.js',
					    	'../bower_components/angular-photoswipe/angular-photoswipe.min.js',

							//Controller
							'scripts/controllers/gallery.ctrl.js'
						]
					}]);
				}]
			}
        })  


        //Authentication
        .state('others', {
            abstract: true,
            url: "/espire-access",
            templateUrl: "views/common/others-view.html"
        })
        .state('others.signin', {
            url: "/sign-in",
			templateUrl: 'views/extras/signin.html'
        })  
        .state('others.signin2', {
            url: "/sign-in2",
			templateUrl: 'views/extras/signin2.html'
        }) 
        .state('others.signup', {
            url: "/sign-up",
			templateUrl: 'views/extras/signup.html'
        })   
        .state('others.404', {
            url: "/404",
			templateUrl: 'views/extras/404.html'
        })  
        .state('others.500', {
            url: "/500",
			templateUrl: 'views/extras/500.html'
        })   
}
