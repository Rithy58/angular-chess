(function () {
  'use strict';

  angular
  .module('angularChess', [
    'firebase',
    'ngRoute'
  ])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'app/views/homeView.html',
      controller: 'homeController'
    })
    .when('/login', {
      templateUrl: 'app/views/loginView.html',
      controller: 'loginController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
}());
/*
var app =

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
]);*/
