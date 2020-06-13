(function () {
  'use strict';

  angular
    .module('RestaurantApp')
    .controller('ItemsController', ItemsController);

  function ItemsController(items) {
    var vm = this;
    vm.items = items;
  };
})();