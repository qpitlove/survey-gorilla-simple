(function () {

  'use strict';

  angular
    .module('surveyGorillaApp')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl($scope, $http, MainSvc) {
    init(); 
    

    function init() {
      $scope.awesomeThings = [];

      MainSvc.getThings().success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
      });
    }
    
  }

})();