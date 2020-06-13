(function () {
  'use strict';

  angular
    .module('RestaurantApp')
    .component('items', {
      templateUrl: 'templates/items.component.template.html',
      bindings: {
        items: '<'
      }
    });
})();