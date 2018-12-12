
(function() {
	'use strict';
	angular.module("app").controller("EmailListCtrl", ['$scope','emails','$stateParams', '$state', '$timeout', '$window','$sce',EmailListCtrl]);
	function EmailListCtrl($scope, emails, $stateParams, $state, $timeout, $window, $sce) {
		
		var ctrl = this;

		emails.all().then(function(list) {
            ctrl.emails = list;
        });

        $scope.EmailListCtrl = function(arr) {
            return arr.join();
        }
        $scope.formatBody = function(body) {
            return body.replace(/<(?:.|\n)*?>/gm, '');
        }
        $scope.view = function(id) {
            $state.go('email-inbox', { 'emailId': id}, {reload: 'email-inbox'})
        };
	}
})();
