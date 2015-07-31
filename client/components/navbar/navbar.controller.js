(function() {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .controller('NavbarCtrl', NavbarCtrl);

  /* @ngInject */
  function NavbarCtrl($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }

})();  