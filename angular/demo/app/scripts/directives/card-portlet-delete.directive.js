'use strict';

angular.module('app').directive('cardPortletDelete', cardPortletDelete);
function cardPortletDelete() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var parent = angular.element(element).closest('.card');
                parent.addClass('animated zoomOut');
                parent.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
                    parent.remove();
                });
            });
        }
    };
}
