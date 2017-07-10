(function () {
    'use strict';

    angular
        .module('app')
        .controller('highScore', highScore);

    highScore.$inject = ['playerResource'];

    function highScore(playerResource) {        
        var vm = this;
        
        activate();

        function activate() {
            vm.players = playerResource.GetAllPlayers();
        }
    }
})();
