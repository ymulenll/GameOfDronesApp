(function () {
    'use strict';

    angular
        .module('app')
        .controller('movesList', movesList);

    movesList.$inject = ['$location', 'Moves'];

    function movesList($location, Moves) {
        var vm = this;        

        activate();

        function activate() {
            vm.moves = Moves;
        }

        vm.addMove = function () {
            Moves.push({
                move: vm.newMoveName,
                kills: vm.newMoveKills
            });
            vm.newMoveName = '';
            vm.newMoveKills = '';
        };

        vm.removeMove = function (move) {
            var index = Moves.indexOf(move);
            Moves.splice(index, 1);
        };
    }
})();
