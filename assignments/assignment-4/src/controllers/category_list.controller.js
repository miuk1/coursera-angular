(function () {
  'use strict';

  angular
    .module('RestaurantApp')
    .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['items'];
  function CategoryListController(items) {
    var vm = this;
    vm.items = items;
  };
})();