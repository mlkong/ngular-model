
(function() {
	'use strict';
	angular.module("app").controller("ModalsCtrl", ['$scope','$uibModal','$log',ModalsCtrl]);
	function ModalsCtrl($scope, $uibModal, $log) {
		var ctrl = this;
		
		ctrl.modalDefault = function () {
			var modalInstance = $uibModal.open({
			  templateUrl: 'views/ui/modal-template/modal-template-1.html',
			  windowClass: "fade",
			  controller: ModalInstanceCtrl
			});
		};
		
		ctrl.modalRight = function () {
			var modalInstance = $uibModal.open({
			  templateUrl: 'views/ui/modal-template/modal-template-2.html',
			  windowClass: "slide-in-right modal-right",
			  controller: ModalInstanceCtrl
			});
		};
		
		ctrl.modalLeft = function () {
			var modalInstance = $uibModal.open({
			  templateUrl: 'views/ui/modal-template/modal-template-2.html',
			  windowClass: "slide-in-left modal-left",
			  controller: ModalInstanceCtrl
			});
		};
		
		ctrl.modalDefaultSm = function () {
			var modalInstance = $uibModal.open({
			  templateUrl: 'views/ui/modal-template/modal-template-3.html',
			  windowClass: "fade",
			  size: 'sm',
			  controller: ModalInstanceCtrl
			});
		};
		
		ctrl.modalDefaultLg = function () {
			var modalInstance = $uibModal.open({
			  templateUrl: 'views/ui/modal-template/modal-template-4.html',
			  windowClass: "fade",
			  size: 'lg',
			  controller: ModalInstanceCtrl
			});
		};
		
		ctrl.modalDefaultFs = function () {
			var modalInstance = $uibModal.open({
			  templateUrl: 'views/ui/modal-template/modal-template-5.html',
			  windowClass: "modal-fs",
			  backdrop: false,
			  controller: ModalInstanceCtrl
			});
		};
	}
	
	function ModalInstanceCtrl ($scope, $uibModalInstance) {
		
		$scope.ok = function () {
			$uibModalInstance.close();
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};
	
})();
