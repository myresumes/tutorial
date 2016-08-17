(function() {
  'use strict';

  angular
    .module('tutorial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
