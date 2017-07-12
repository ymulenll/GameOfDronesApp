(function () {
    'use strict';

    angular
        .module('app')
        .factory('playerResource', playerResource);

    playerResource.$inject = ['$resource', 'Players'];

    function playerResource($resource, Players) {
        var resource = $resource('http://localhost:49208/api/Player/:id', null, {
            'getByName': {
                url: 'http://localhost:49208/api/Player/GetByName/:name',
                method: 'GET',
                isArray: false
            },
            'createPlayer': {
                method: 'POST'
            },
            'updatePlayer': {
                method: 'PUT'
            }
        });

        var service = {
            GetAllPlayers: function () {
                return resource.query();
            },

            SavePlayer(player) {
                resource.updatePlayer({id: player.id}, player, function () { }, function () { });
            },

            GetPlayerByName() {
                resource.getByName({ name: Players.Player1.name }, function () { }, function () { }).$promise.then(
                    function (response) {
                        angular.extend(Players.Player1, response);
                    },
                    function () {
                        resource.createPlayer(Players.Player1, function () { }, function () { }).$promise.then(
                            function (response) {
                                angular.extend(Players.Player2, response);
                            }
                        );
                    });

                resource.getByName({ name: Players.Player2.name }, function () { }, function () { }).$promise.then(
                    function (response) {
                        angular.extend(Players.Player2, response);
                    },
                    function () {
                        resource.createPlayer(Players.Player2, function () { }, function () { }).$promise.then(
                            function (response) {
                                angular.extend(Players.Player2, response);
                            }
                        );

                    });
            }
        };

        return service;
    }
})();
