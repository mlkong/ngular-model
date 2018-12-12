
(function() {
	'use strict';
	angular.module("app").controller("FormElementCtrl", ['$scope','$http', '$timeout', '$interval',FormElementCtrl]);
	function FormElementCtrl($scope, $http, $timeout, $interval) {
		
		var ctrl = this;

		ctrl.singleSelect = [
		    {id: 1, title: 'Adam'},
		    {id: 2, title: 'Amalie'},
		    {id: 3, title: 'Estefanía'},
		    {id: 4, title: 'Adrian'},
		    {id: 5, title: 'Wladimir'},
		    {id: 6, title: 'Samantha'},
		    {id: 7, title: 'Nicole'},
		    {id: 8, title: 'Michael'}
		];	

		ctrl.singleSelectConfig = {
		    maxItems: 1,
		    create: false,
			valueField: 'id',
			labelField: 'title',
		};

		ctrl.tagSelectConfig = {
		    create: true,
			valueField: 'id',
			labelField: 'title'
		};

		ctrl.simpleSelectModel = 1;
		ctrl.tagSelectModel = 8;
		ctrl.tagSelectModel2 = [1,5];

		ctrl.optGroupConfig = {
		    maxItems: 1,
		    optgroupField: 'class',
		  	labelField: 'name',
		  	searchField: ['name'],
		  	render: {
		  		optgroup_header: function(data, escape) {
		  			return '<div class="optgroup-header">' + escape(data.label) + ' <span class="scientific">' + escape(data.label_scientific) + '</span></div>';
		  		}
		  	},
		  	optgroups: [
		  		{value: 'mammal', label: 'Mammal', label_scientific: 'Mammalia'},
		  		{value: 'bird', label: 'Bird', label_scientific: 'Aves'},
		  		{value: 'reptile', label: 'Reptile', label_scientific: 'Reptilia'}
		  	]
		};
		  
		ctrl.optGroupOption = [
			{class: 'mammal', value: "dog", name: "Dog" },
			{class: 'mammal', value: "cat", name: "Cat" },
			{class: 'mammal', value: "horse", name: "Horse" },
			{class: 'mammal', value: "kangaroo", name: "Kangaroo" },
			{class: 'bird', value: 'duck', name: 'Duck'},
			{class: 'bird', value: 'chicken', name: 'Chicken'},
			{class: 'bird', value: 'ostrich', name: 'Ostrich'},
			{class: 'bird', value: 'seagull', name: 'Seagull'},
			{class: 'reptile', value: 'snake', name: 'Snake'},
			{class: 'reptile', value: 'lizard', name: 'Lizard'},
			{class: 'reptile', value: 'alligator', name: 'Alligator'},
			{class: 'reptile', value: 'turtle', name: 'Turtle'}
		];
		  
	}
})();
