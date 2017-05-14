(function() {
  'use strict';

  angular
  .module('marvelAngBoo')
  .controller('ComListController', ComListController);

  /** @ngInject */
  function ComListController($log, ComListService, $stateParams, $state) {
    var vm = this;

    vm.comList = undefined;
    vm.charName = undefined;
    vm.showCom = ShowCom;

    LoadAll();

    function LoadAll(){
      if($stateParams.charId != null){
        vm.charName = $stateParams.charName;
        GetComList($stateParams.charId);
      }else{
        $state.go('home');
      }

    }

    function GetComList(param){
      ComListService.getComList(param)
      .then(function(data) {
        vm.comList = ComListService.getFormatedComList(data);
      },
      function (error) {
        $log.debug(error);
      }
    );
  }

  function ShowCom(com){
    com.more = !com.more;
  }


}
})();
