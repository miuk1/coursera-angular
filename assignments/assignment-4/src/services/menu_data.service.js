; (function () {
  'use strict';

  angular
    .module('RestaurantApp')
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var self = this;

    self.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/categories.json')
      }).then(function (res) {
        return res.data
      });
    };

    self.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json'),
        params: {
          category: categoryShortName
        }
      }).then(function (res) {
        return res.data;
      });
    };
  }
}

)();