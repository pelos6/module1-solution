(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

// .controller('LunchCheckController', function ($scope) {
  $scope.lunchMenu = "";
  $scope.mensaje = "";
  $scope.Check = function () {
    var separator = ",";
    var stringToSplit = $scope.lunchMenu;
    var arrayOfStrings = stringToSplit.split(separator) ;
    if (stringToSplit  ) {
      if (arrayOfStrings.length < 4 ) {
        $scope.mensaje = "Enjoy!" ;
      } else {
        $scope.mensaje = "Too much!";
      }
    } else {
      $scope.mensaje = "Please enter data first!" ;
    }
  };
};


})();
