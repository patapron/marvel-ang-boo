(function() {
  'use strict';

  angular
  .module('marvelAngBoo')
  .constant('APPCONST', {
    'API_CHAR_LIST_LIMIT': 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=',
    'API_CHAR_LIST_OFFSET': '&offset=',
    'API_CHAR_LIST_FINISH': '&ts=123&apikey=f7ff3adf4a9956e0ac579a824c3d5a86&hash=8d76de3cf05c9c124d4afc048f297129',
    'LIMIT': '100',
    'OFFSET': ['0','100','200','300','400','500','600','700','800','900'],
    'API_MARVEL': 'https://gateway.marvel.com:443/v1/public/characters',
    'PARAMS_HOST': 'comics?format=comic&ts=123&apikey=f7ff3adf4a9956e0ac579a824c3d5a86&hash=8d76de3cf05c9c124d4afc048f297129',
    'API_COM_LIST_HOST': 'https://gateway.marvel.com:443/v1/public/characters/1009148/comics?format=comic&ts=123&apikey=f7ff3adf4a9956e0ac579a824c3d5a86&hash=8d76de3cf05c9c124d4afc048f297129'
  }
);
})();
