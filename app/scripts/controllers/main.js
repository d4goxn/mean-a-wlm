'use strict';

angular.module('meanAWlmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.events = [];
    $scope.canFill = $scope.canCancel = false;

    $scope.startFill = function () {
      // PUT /fill
    };

    $scope.cancelFill = function () {
      // PUT /cancel
    };
  });
