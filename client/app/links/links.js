angular.module('shortly.links', [])
//test
.controller('LinksController', function ($scope, Links) {
  // Your code here
  //Creating data object in scope
  $scope.data = {};
  // $scope.data.links = [{}, {}, {}];
  $scope.getLinks = Links.getLinks;
  $scope.getLinks();
});
