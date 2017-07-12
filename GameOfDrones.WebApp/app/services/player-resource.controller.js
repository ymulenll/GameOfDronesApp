(function () {
    'use strict';

    angular
        .module('app')
        .factory('playerResource', playerResource);

    playerResource.$inject = ['$resource', 'Players', 'Global'];

    function playerResource($resource, Players, Global) {
        var resource = $resource(Global.webApi + '/Player/:id', null, {
            'getByName': {
                url: Global.webApi + '/Player/GetByName/:name',
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
                resource.getByName({ name: Players.Player1.name },
                    function (response) {
                        angular.extend(Players.Player1, response);
                    },
                    function () {
                        resource.createPlayer({ name: Players.Player1.name },
                            function (response) {
                                angular.extend(Players.Player1, response);
                            },
                            function () { }
                        );
                    });

                resource.getByName({ name: Players.Player2.name },
                    function (response) {
                        angular.extend(Players.Player2, response);
                    },
                    function () {
                        resource.createPlayer({ name: Players.Player2.name },
                            function (response) {
                                angular.extend(Players.Player2, response);
                            },
                            function () {}
                        );

                    });
            }
        };

        return service;
    }
})();
