angular.module('firebase.config', [])
  .constant('FBURL', 'https://angular-chess.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['facebook'])

  .constant('loginRedirectPath', '/login');
