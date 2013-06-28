'use strict';

angular.module('wlmApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.events = [];
    $scope.canFill = $scope.canCancel = false;

    $scope.startFill = function () {
      // PUT /fill
    };

    $scope.cancelFill = function () {
      // PUT /cancel
    };

    $http.get('events.json').success(function (events) {
      $scope.events = events;
    });
  }]);
