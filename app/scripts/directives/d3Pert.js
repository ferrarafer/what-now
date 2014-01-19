angular.module('whatNowApp.directives', ['d3'])
  .directive('d3Pert', ['d3Service', function (d3Service) {
    'use strict';

    return {
      restrict: 'EA',
      scope: { },
      link: function (scope, element, attrs) {
        var svg = d3Service.select(element[0]).append('svg');

        svg.attr('height', 100)
           .attr('width', 300);

        var dataset = [ 5, 10, 15, 20, 25 ];

        var circles = svg.selectAll('circle')
          .data(dataset)
          .enter()
          .append('circle');

        circles.attr('cx', function (d, i) { return i * 50 + 25; })
          .attr('cy', 50)
          .attr('r', function (d) { return d });
      }
    };
  }]);