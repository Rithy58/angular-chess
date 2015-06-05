(function () {
  'use strict';
  angular.module('angularChess')

  .controller('homeController', [
    '$scope',
    '$firebaseArray',
    '$firebaseAuth',
    function($scope, $firebaseArray, $firebaseAuth) {

      $scope.name = 'Guest';

      $scope.userName = '';

      var ref = new Firebase("https://angular-chess.firebaseio.com/users/");

      $scope.users = $firebaseArray(ref);

      var auth = $firebaseAuth(ref);

      $scope.addUser = function() {
        $scope.users.$add({
          name: $scope.userName,
          timestamp: Firebase.ServerValue.TIMESTAMP
        });
        $scope.name = $scope.userName;
      }
    }]);
}());
