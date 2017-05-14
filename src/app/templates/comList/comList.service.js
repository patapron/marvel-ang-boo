(function() {
  'use strict';

  angular
  .module('marvelAngBoo')
  .factory('ComListService', ComListService);

  function ComListService($log, $http, $q, APPCONST) {
    var comList =[];

    var service = {
      apiHost : undefined,
      getComList : GetComList,
      getFormatedComList : GetFormatedComList
    };

    return service;

    function GetComList(charId) {
      service.apiHost = APPCONST.API_MARVEL +'/'+ charId +'/'+APPCONST.PARAMS_HOST;
      var deferred = $q.defer();
      $http.get(service.apiHost)
      .success(deferred.resolve)
      .error(function (error) {
        if (error !== null)
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function GetFormatedComList(comicsData){
      angular.forEach(comicsData.data.results, function(comic){
        FormatComList(comic);
      });
      return comList;
    }

    function FormatComList(comic){
        var comFormated = {
          id: comic.id,
          title: comic.title,
          description: comic.description,
          onsaleDate : moment(GetOnSaleDay(comic.dates)).format('MM-DD-YYYY'),
          thumbnail: comic.thumbnail.path + '/portrait_xlarge.' + comic.thumbnail.extension,
          more: false
        };
        comList.push(comFormated);
    }

    function GetOnSaleDay(dates){
      return dates.filter(function (date) {
        return date.type == 'onsaleDate';
      })[0].date;
    }

  }
})();
