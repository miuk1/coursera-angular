; (function () {
  'use strict';

  angular
    .module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('API_URL', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onEmpty: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'menu',
      bindToController: true
    };

    return ddo;
  };

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.shortName = '';

    menu.matchedMenuItems = function (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (items) {
        if (items && items.length > 0) {
          menu.message = '';
          menu.found = items;
        } else {
          menu.message = 'No Food Available!';
          menu.found = [];
        }
      });
    };

    menu.removeMenuItem = function (itemIndex) {
      menu.found.splice(itemIndex, 1);
    };
  };

  MenuSearchService.$inject = ['$http', 'API_URL'];
  function MenuSearchService($http, API_URL) {
    var self = this;

    self.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (API_URL + "/menu_items.json")
      }).then(function (res) {
        var foodItems = [];
        var menuItems = res.data['menu_items'];

        menuItems.filter(function (item) {
          if (searchTerm.length > 0 && item.description.toLowerCase().indexOf(searchTerm) > 0) {
            foodItems.push(item);
          }
        });
        return foodItems;
      });
    }
  }


})();