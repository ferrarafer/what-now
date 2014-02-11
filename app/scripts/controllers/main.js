'use strict';

angular.module('whatNowApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [];
    $scope.newTask = { id: 0 };

    $scope.addTask = function(task) {
      $scope.tasks.push(task);
    };

    $scope.addTaskFromForm = function() {
      $scope.addTask($scope.newTask);
      $scope.newTask = { id: $scope.newTask.id + 1 };
    };

    $scope.removeTask = function(task) {
      var index = $scope.tasks.length;
      while (index--) {
        if ($scope.tasks[index] === task) {
          $scope.tasks.splice(index, 1);
          break;
        }
      }
    };
  });