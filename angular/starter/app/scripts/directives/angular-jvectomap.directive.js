'use strict';
angular.module('app').directive('vector', vector);
function vector() {
  return {
    restrict: 'EA',
    link: function(scope, element, attrs) {
      var chart = null;
      var data = scope[attrs.ngModel];
      scope.$watch('data', function() {
        if (!chart) {
          chart = angular.element(element).vectorMap(data);
        } else {
          chart.vectorMap('get', 'mapObject').series.regions[0].setValues(scope.datamap);
        }
      });
    }
  };
}
