(function (){
    'use strict';

    angular
        .module('RestaurantApp')
        .component('categories', {
            templateUrl: 'templates/categories.component.template.html',
            bindings: {
                items: '<'
            }
        });
})();