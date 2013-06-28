'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wlmApp'));

  var MainCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {

    // wlmApp shoud request a list of events when it starts.
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('events.json').respond([
        {time: 1372397658, type: 'levelDroppedLow'},
        {time: 1372397659, type: 'fillingStarted'},
        {time: 1372397700, type: 'levelRoseAdequate'},
        {time: 1372397800, type: 'levelRoseHigh'},
        {time: 1372397801, type: 'fillingStopped'}
    ]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $httpBackend: $httpBackend
    });
  }));

  it('should have a list of 5 events in the scope', function () {
    expect(scope.events.length).toBe(0);
    $httpBackend.flush();
    expect(scope.events.length).toBe(5);
  });
});
