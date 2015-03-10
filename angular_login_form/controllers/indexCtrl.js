var indexCtrl = testForm.controller('indexCtrl', ['$scope', '$location', function($scope, $location){
  console.log('inside indexCtrl');
  
  $scope.userSignIn = function() {
    console.log('userSignIn Firing')
    $location.url('/userSignIn');
  }

  $scope.userSignUp = function() {
    console.log('userSignUp Firing')
    $location.url('/userSignUp');
  }
  
  indexCtrl.routeTo = function (path) {
    $location.path(path);
  };


}

])