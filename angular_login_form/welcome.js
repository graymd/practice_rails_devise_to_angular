var testForm = angular.module('testForm', ['ngRoute']).config(['$httpProvider', function($httpProvider){
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
}])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/userSignIn', {
      templateUrl: '/templates/signIn.html',
      controller: 'indexCtrl'
    })
    .when('/userSignUp', {
      templateUrl: '/templates/signUp.html',
      controller: 'indexCtrl'
    })
    .otherwise({
      templateUrl: '/templates/index.html',
      controller: 'indexCtrl'
    })
}]);