; (function () {
  'use strict';

  angular
    .module('RestaurantApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'templates/home.template.html'
        })
        .state('categoryList', {
          url: '/category-list',
          templateUrl: 'templates/category_list.template.html',
          controller: 'CategoryListController as catListCtrl',
          resolve: {
            items: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })
        .state('items', {
          url: '/items/{category}',
          templateUrl: 'templates/items.template.html',
          controller: 'ItemsController as itemsCtrl',
          resolve: {
            items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.category);
            }]
          } 
        });
    }]);
})();