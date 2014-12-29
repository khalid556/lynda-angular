var module = angular.module('myApp', ["ngRoute"]);

module.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'MyCtrl'
    })
    .when('/presentation', {
      templateUrl: 'partials/presentation.html',
      controller: 'PresentationCtrl'
    })
    .otherwise({
      templateUrl: 'partials/index.html',
      controller: 'MyCtrl'
    })
  ;
})


module.controller('MyCtrl', function () {
  var scop = this;
  scop.myName = "Khalid";
});

module.controller('PresentationCtrl', function ($scope, $http) {
  var urlData = "js/data.json";
  $http.get(urlData)
    .success(function (data) {
      $scope.data = data;
      console.log(data);
    })
    .error(function () {

    });

});