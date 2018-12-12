
(function() {
    'use strict';
	angular.module("app").controller("AppCtrl", ['$scope', '$http', '$window', '$timeout',AppCtrl]);
	function AppCtrl($scope, $http, $window, $timeout) {
		
		var ctrl = this; 
		
		$scope.app = {
		    layout: {
			  sidePanelOpen: false,
			  isMenuOpened: true,
			  isMenuCollapsed: false,
			  themeConfigOpen: false,
			  rtlActived: false
		    }
		};

		ctrl.headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
		ctrl.changeHeader = changeHeader;

		function changeHeader(headerTheme) {
			ctrl.headerSelected = headerTheme;
		}

		ctrl.sidenavThemes = ['sidenav-default', 'side-nav-dark'];
		ctrl.changeSidenav = changeSidenav;

		function changeSidenav(sidenavTheme) {
			ctrl.sidenavSelected = sidenavTheme;
		}
	}
})();
