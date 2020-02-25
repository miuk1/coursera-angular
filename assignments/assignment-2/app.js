(function () {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  /** @ngInject */
  function ToBuyController($scope, ShoppingListCheckOffService) {
    var vm = $scope;
    vm.msg = '';
    init();
    function init() {
      vm.toBuy = [
        { name: 'Samosa', quantity: 10 },
        { name: 'Pakoda', quantity: 20 },
        { name: 'laddo', quantity: 30 }
      ];
    };

    vm.addToBoughtList = function (name, quantity, msg) {
      vm.msg = ShoppingListCheckOffService.addToBoughtList(name, quantity);
    };

    vm.isEverythingBought = function (toBuy) {
      return ShoppingListCheckOffService.isEverythingBought(vm.toBuy);
    };
  };

  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    var vm = $scope;
    vm.alreadyBought = ShoppingListCheckOffService.getItems();

    vm.checkItem = function (alreadyBought) {
      if (alreadyBought && alreadyBought.length > 0) {
        return false;
      } else {
        return true;
      }
    };

    vm.removeFromBoughtList = function (name, quantity){
      return vm.alreadyBought = ShoppingListCheckOffService.removeFromBoughtList(name, quantity);
    }
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var items = [];

    service.getItems = function () {
      return items;
    }

    service.addToBoughtList = function (name, quantity, msg) {
      if (name && quantity) {
        var itemToAdd = {
          name: name,
          quantity: quantity
        }
        if (checkItem(itemToAdd, items) === false) {
          items.push(itemToAdd)
          msg = ''
        } else {
          return msg = name + ' is already bought!';
        }
      }
    };

    service.removeFromBoughtList = function(name, quantity){
      if(name && quantity){
        var itemToRemove = {
          name: name,
          quantity: quantity
        }
        if(checkItem(itemToRemove, items) === true){
          return items = items.filter(function(item){
            return item.name !== itemToRemove.name;
          })
        }
      }
    }

    service.isEverythingBought = function (toBuy) {
      if (items && items.length === toBuy.length) {
        return true;
      } else {
        return false;
      }
    };

    var checkItem = function (itemToAdd, items) {
      return items.some(function (obj) {
        return (obj.name === itemToAdd.name) && (obj.quantity === itemToAdd.quantity)
      });
    }
  };

}());