angular.module('whatNowApp.directives', ['d3'])
  .directive('d3Pert', ['d3Service', function (d3Service) {
    'use strict';

    return {
      restrict: 'EA',
      scope: {
        taskList: '='
      },
      link: function ($scope, element) {
        var svg = d3Service.select(element[0]).append('svg');

        svg.attr('height', 100)
           .attr('width', '100%');

        $scope.$watchCollection('taskList', function() {
          svg.selectAll('*').remove();

          var groups = svg.selectAll('g')
            .data($scope.taskList)
            .enter()
            .append('g')
            .attr('transform', function(d, i) {
              var x = i * 50 + 25;
              var y = 50;
              return 'translate(' + x + ', ' + y + ')';
            });

          var circles = groups.append('circle')
            .attr({
              cx: 0,
              cy: 0,
              r: function(d) { return d.name.length; },
            });

          var labels = groups.append('text')
            .text(function(d) { return d.name; })
            .attr({
              fill: 'black',
              'alignment-baseline': 'middle',
              'text-anchor': 'middle',
              y: -20
            });
        });
      }
    };
  }]);