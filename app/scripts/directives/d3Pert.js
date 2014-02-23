angular.module('whatNowApp.directives', ['d3'])
  .directive('d3Pert', ['$window', 'd3Service', 'dependencyResolutionService',
  function ($window, d3Service, dependencyResolutionService) {
    'use strict';

    var svg;

    function drawLayer(layer, layerNumber) {
      var groups = svg.selectAll('g')
        .data(layer, function (d) { return d.id; })
        .enter()
        .append('g')
        .attr('transform', function(d, i) {
          var x = layerNumber * 50 + 25;
          var y = 50 * (i + 1);
          return 'translate(' + x + ', ' + y + ')';
        });

      /*var circles = */
      groups.append('circle')
        .attr({
          cx: 0,
          cy: 0,
          r: 5
        });

      /*var labels = */
      groups.append('text')
        .text(function(d) { return d.name; })
        .attr({
          fill: 'black',
          'alignment-baseline': 'middle',
          'text-anchor': 'middle',
          y: -20
        });
    }

    function link ($scope, element) {
      svg = d3Service.select(element[0]).append('svg');

      svg.attr('height', 500)
         .attr('width', '100%');

      $scope.$watchCollection('taskList', redraw);
    }

    function redraw(taskList) {
      var layeredTasks = dependencyResolutionService.arrangeInLayers(taskList);

      svg.selectAll('*').remove();

      for (var i = 0; i < layeredTasks.length; i++) {
        drawLayer(layeredTasks[i], i + 1);
      }
    }

    return {
      restrict: 'EA',
      scope: {
        taskList: '='
      },
      link: link
    };
  }]);