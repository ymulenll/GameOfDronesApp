(function () {
    'use strict';

    angular
        .module('app')
        .factory('Players', player);

    player.$inject = [];

    function player() {
        var service = {
            Player1: {
                number: 1,
                name: '',
                score: 0,
                gamesWon: 0
            },
            Player2: {
                number: 2,
                name: '',
                score: 0,
                gamesWon: 0
            },
            Reset: function () {
                this.Player1.score = 0;
                this.Player2.score = 0;
            }
        };

        return service;
    }
})();