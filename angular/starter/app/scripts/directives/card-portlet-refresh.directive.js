'use strict';
angular.module('app').directive('cardPortletRefresh', cardPortletRefresh);

function cardPortletRefresh($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.bind('click', function() {
              var parent = angular.element(element).closest('.card');
              parent.addClass('card-refresh');
              $timeout(function() {
              parent.removeClass('card-refresh');
            }, 2000);
          });
        }
    };
}