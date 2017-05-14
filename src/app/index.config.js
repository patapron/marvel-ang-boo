(function() {
  'use strict';

  angular
    .module('marvelAngBoo')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
