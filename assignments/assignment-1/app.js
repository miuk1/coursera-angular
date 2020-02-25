(function () {
    'use strict';

    angular
        .module('lunchChecker', [

        ])
        .controller('lunchCheckerController', function ($scope, $http) {
            var vm = $scope;
            vm.lunch = '';
            vm.lunches = [];
            vm.msg;
            vm.fruits;

            vm.checkLunch = function () {
                if (vm.lunch == '') {
                    vm.msg = "Please enter data first";
                } else {
                    vm.lunches = vm.lunch.split(',').filter(word => word.length > 1);
                    if (vm.lunches.length <= 3 && vm.lunches.length > 0) {
                        vm.msg = "Enjoy!";
                    } else if (vm.lunches.length > 3) {
                        vm.msg = "Too much!";
                    } else {
                        vm.msg = "Please enter data first";
                    }
                }
            }
        });

})();