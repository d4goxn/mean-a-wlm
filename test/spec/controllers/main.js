'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('meanAWlmApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have an empty list of events in the scope', function () {
    expect(scope.events.length).toBe(0);
  });
});
