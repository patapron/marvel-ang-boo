(function() {
  'use strict';

  angular
  .module('marvelAngBoo')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('character', {
      url: "/Character/:charName",
      templateUrl: "app/templates/comList/comList.html",
      params: {
        charName: null,
        charId: null
      },
      controller: 'ComListController',
      controllerAs: 'CMC'
    })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
