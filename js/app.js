'use strict';

angular.module('raw', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'raw.filters',
  'raw.services',
  'raw.directives',
  'raw.controllers',
  'mgcrea.ngStrap',
  'ui',
  'colorpicker.module',
  'ngFileUpload'
])

.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {

  // Disable HTML5 mode to keep hashbang URLs (like #/patents)
  $locationProvider.html5Mode(false);

  // Route definitions
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'RawCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
