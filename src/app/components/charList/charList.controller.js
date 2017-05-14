(function() {
  'use strict';

  angular
  .module('marvelAngBoo')
  .controller('CharListController', CharListController);

  /** @ngInject */
  function CharListController($log, CharListService, $state) {
    var vm = this;

    vm.charList = undefined;
    vm.getCharlist = GetCharList;
    vm.getComList = GetComList;

    LoadAll();

    function LoadAll(){
      GetCharList();
    }

    function GetCharList(){
      CharListService.getCharList()
      .then(function(data) {
        vm.charList = CharListService.getFormatedCharList(data);
      },
      function (error) {
        $log.debug(error);
      }
    );
  }

  function GetComList(){
    var state = 'character';
    var charInfo = {charName:vm.selected, charId:GetCharId(vm.selected) };
    $state.go(state, charInfo);
  }

  function GetCharId(charName){
    return vm.charList.filter(function (char) {
      return char.name == charName;
    })[0].id;
  }

}
})();
