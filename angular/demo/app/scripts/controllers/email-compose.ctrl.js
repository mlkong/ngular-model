
(function() {
	'use strict';
	angular.module("app").controller("EmailComposeCtrl", ['$scope',EmailComposeCtrl]);
	function EmailComposeCtrl($scope) {
		
		var ctrl = this;	

        ctrl.sendConfig = {
          create: true,
          valueField: 'id',
          labelField: 'title',
          delimiter: '|',
          placeholder: 'To:'
        };
	}
})();
