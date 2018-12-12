
(function() {
	'use strict';
	angular.module("app").controller("EmailCtrl", ['$scope',EmailCtrl]);
	function EmailCtrl($scope) {
		
		var ctrl = this;

        $scope.emailLayout = {
            emailViewMobile: false,
            emailNavMobile: false
        };
	}
})();
