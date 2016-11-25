(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

// .controller('LunchCheckController', function ($scope) {
  $scope.lunchMenu = "";
  $scope.mensaje = "";
  $scope.customStyle = {};
  $scope.Check = function () {
    var separator = ",";
    var stringToSplit = $scope.lunchMenu;
    var arrayOfStrings = stringToSplit.split(separator) ;
    if (stringToSplit  ) {
      if (arrayOfStrings.length < 4 ) {
        $scope.mensaje = "Enjoy!" ;
        $scope.customStyle.style = {"color":"green"};
      } else {
        $scope.mensaje = "Too much!";
        $scope.customStyle.style = {"color":"green"};
        // $scope.customStyle.colorClass = "green";
      }
    } else {
      $scope.mensaje = "Please enter data first!" ;
      $scope.customStyle.style = {"color":"blue"};
    }
  };
};


})();
