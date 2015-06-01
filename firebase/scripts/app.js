var app = angular.module('angularChess', ["firebase"]);

/*app.controller('Controller', ["$scope", "$firebaseObject"], function ($scope) {
$scope.name = 'Guest';
var ref = new Firebase("https://angular-chess.firebaseio.com/users/");
var usersObj = $firebaseObject(ref);
usersObj.$bindTo($scope, "userName");
});*/

app.controller("Controller", ["$scope", "$firebaseArray", "$firebaseAuth",
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
  };

  $scope.facebookLogin = function() {
    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      $scope.userName = authData.facebook.displayName;
      $scope.addUser();
      $scope.userName = "";
    }).catch(function (error) {
      console.error("Authentication failed:", error);
    });
  };
}
]);
