(function() {
  'use strict';

  angular
    .module('marvelAngBoo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
