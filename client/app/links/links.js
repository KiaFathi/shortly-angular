angular.module('shortly.links', [])
//test
.controller('LinksController', function ($scope, Links) {
  // Your code here
  //Creating data object in scope
  $scope.data = {};
  // $scope.data.links = [{}, {}, {}];
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data){
        $scope.data.links = data;
      }).catch(function(error){
        console.log(error);
      });
  }
  $scope.getLinks();
});
