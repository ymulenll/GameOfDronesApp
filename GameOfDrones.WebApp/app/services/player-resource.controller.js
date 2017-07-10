(function () {
    'use strict';

    angular
        .module('app')
        .factory('playerResource', playerResource);

    playerResource.$inject = ['$resource'];

    function playerResource($resource) {
        var resource = $resource('http://localhost:49208/api/Player/:id');

        var service = {
            GetAllPlayers: function () {
                return resource.query();
            }
        };

        return service;
    }
})();
