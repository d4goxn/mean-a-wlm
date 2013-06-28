'use strict';

angular.module('wlmApp')
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
