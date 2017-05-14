(function() {
  'use strict';

  angular
  .module('marvelAngBoo')
  .factory('CharListService', CharListService);

  function CharListService($log, $http, $q, APPCONST) {

    var charListFormated = [];
    var service = {
      listLimit : APPCONST.API_CHAR_LIST_LIMIT,
      listOffset : APPCONST.API_CHAR_LIST_OFFSET,
      listFinish : APPCONST.API_CHAR_LIST_FINISH,
      limit : APPCONST.LIMIT,
      offset : APPCONST.OFFSET,
      charList : [],
      getCharList : GetCharList,
      getFormatedCharList : GetFormatedCharList
    };

    return service;

    function GetCharList() {

      angular.forEach(service.offset, function(value){
        var callValue = service.listLimit + service.limit + service.listOffset + value + service.listFinish;
        service.charList.push(CallApi(callValue));
      });
      return $q.all(service.charList);
    }

    function CallApi(callValue){
      var deferred = $q.defer();
      $http.get(callValue)
      .success(deferred.resolve)
      .error(function (error) {
        if (error !== null)
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function GetFormatedCharList(allCharList){
      angular.forEach(allCharList, function(charList){
        FormatCharList(charList.data.results);
      });
      return charListFormated;
    }

    function FormatCharList(charList){
      angular.forEach(charList, function(char){
        var charFormated = {
          id: char.id,
          name: char.name,
          modified: char.modified,
          thumbnail: char.thumbnail.path + '/portrait_xlarge.' + char.thumbnail.extension
        };
        charListFormated.push(charFormated);
      });
    }


  }
})();
