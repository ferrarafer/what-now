'use strict';

angular.module('whatNowApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [];
    $scope.newTask = {};

    $scope.addTask = function(task) {
      $scope.tasks.push(task);
    };

    $scope.addTaskFromForm = function() {
      $scope.addTask($scope.newTask);
      $scope.newTask = {};
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