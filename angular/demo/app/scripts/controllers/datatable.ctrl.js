
(function() {
	'use strict';
	angular.module('app', ['datatables', 'datatables.select']).controller('DataTableCtrl', DataTableCtrl);

	function DataTableCtrl(DTOptionsBuilder, DTColumnDefBuilder) {
	    var ctrl = this;


	    
	    ctrl.dtOptions = DTOptionsBuilder.newOptions()
	        .withPaginationType('full_numbers')
	        .withDisplayLength(10);
	    ctrl.dtColumnDefs = [
	        DTColumnDefBuilder.newColumnDef(0).notSortable(),
	        DTColumnDefBuilder.newColumnDef(1),
	        DTColumnDefBuilder.newColumnDef(2),
	        DTColumnDefBuilder.newColumnDef(3),
	        DTColumnDefBuilder.newColumnDef(4),
	        DTColumnDefBuilder.newColumnDef(5),
	        DTColumnDefBuilder.newColumnDef(6).notSortable()
	    ];
	}
})();

