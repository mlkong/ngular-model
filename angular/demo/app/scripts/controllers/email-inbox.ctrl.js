
(function() {
    'use strict';
    angular.module("app").controller("EmailContentCtrl", ['$scope','emails','$stateParams','$sce',EmailContentCtrl]);
    function EmailContentCtrl($scope, emails, $stateParams, $sce) {
      
        $stateParams.emailId && emails.find($stateParams.emailId).then(function(emailItem) {
            $scope.emailItem = emailItem;
            $scope.emailHTML = $sce.trustAsHtml(emailItem.body);
        });

    }
})();
