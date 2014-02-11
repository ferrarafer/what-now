'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('whatNowApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of tasks to the scope', function () {
    expect(scope.tasks).toBeDefined();
  });

  describe('newTask object', function() {
    it('should be defined', function() {
      expect(scope.newTask).toBeDefined();
    });

    it('should start with an id of 0', function() {
      expect(scope.newTask.id).toBe(0);
    });
  });

  describe('addTask method', function() {
    it('should be defined', function() {
      expect(scope.addTask).toBeDefined();
    });

    it('should add a task to the task list when passed into it', function() {
      var task = 'some task';
      scope.addTask(task);

      expect(scope.tasks.length).toBe(1);
      expect(scope.tasks[0]).toBe(task);
    });
  });

  describe('addTaskFromForm method', function() {
    it('should be defined', function() {
      expect(scope.addTaskFromForm).toBeDefined();
    });

    it('should add the new task defined in the newTask object', function() {
      var testTask = { name: 'Testing' };
      scope.newTask = testTask;

      scope.addTaskFromForm();

      expect(scope.tasks.length).toBe(1);
      expect(scope.tasks[0]).toBe(testTask);
    });

    it('should unlink the newTask object from the recently added task', function() {
      var testTask = { name: 'Testing' };
      scope.newTask = testTask;

      scope.addTaskFromForm();

      expect(scope.newTask).not.toBe(testTask);
    });

    it('should increase the internal id of the new task each time a task is added', function() {
      scope.newTask = { id: 1, name: 'My task' };
      scope.addTaskFromForm();

      expect(scope.newTask.id).toBe(2);
    });
  });

  describe('removeTask method', function() {
    it('should be defined', function() {
      expect(scope.removeTask).toBeDefined();
    });

    it('should remove the passed task from the task list', function() {
      var testTask = { name: 'Testing' };

      scope.addTask(testTask);

      scope.removeTask(testTask);

      expect(scope.tasks.length).toBe(0);
    });
  });
});
