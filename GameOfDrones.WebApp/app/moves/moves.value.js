
(function () {
    'use strict';

    angular
        .module('app')
        .value('Moves', [{
            move: 'Paper',
            kills: 'Rock'
        },
        {
            move: 'Rock',
            kills: 'Scissors'
        },
        {
            move: 'Scissors',
            kills: 'Paper'
        }]);
})();
