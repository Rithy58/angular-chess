'use strict';

/**
 * @ngdoc function
 * @name angularChessApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularChessApp
 */
angular.module('angularChessApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
