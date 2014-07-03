angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading;
  $scope.addLink = function(data){
    $scope.loading = true;
    Links.addLink(data)
      .then(function(){
        $scope.loading = false;
      }).catch(function(error){
        console.log(error);
      });
  }
});
