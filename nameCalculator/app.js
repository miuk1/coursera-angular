(function () {
    'use strict';

    angular
        .module('NameCalculator', [])
        .controller('myNameCalculatorController', function ($scope) {
            $scope.name = "";
            $scope.nameValue = 0;

            $scope.displayNumeric = function () {
                var totalNameValue = $scope.calculateNumeric($scope.name);
                $scope.nameValue = totalNameValue;
            }
            $scope.calculateNumeric = function (string) {
                var totalNameValue = 0;
                for (var i = 0; i < string.length; i++) {
                    totalNameValue += string.charCodeAt(i);
                }
                ;
                return totalNameValue;
            }
        });

}());