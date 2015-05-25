function login($scope) {
  $scope.name = "guest"
  var login = new Firebase("https://angular-chess.firebaseio.com");
  login.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      $scope.name = authData.facebook.displayName;
    }
  });
}
