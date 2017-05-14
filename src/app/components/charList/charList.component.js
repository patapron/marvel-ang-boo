(function() {
  'use strict';

  angular
  .module('marvelAngBoo')
  .component('charList',  {
    templateUrl: 'app/components/charList/charList.html',
    controller: 'CharListController',
    controllerAs: 'CLC'
  });
})();
