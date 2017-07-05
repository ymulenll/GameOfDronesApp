(function () {
    'use strict';

    angular
        .module('app')
        .controller('home', home);

    home.$inject = ['$location', 'Players'];

    function home($location, Players) {
        
        var vm = this;

        activate();

        function activate() {
            Players.Reset();

            vm.player1 = 'a';
            vm.player2 = 'b';
        }

        vm.startGame = function () {
            Players.Player1.name = vm.player1;
            Players.Player2.name = vm.player2;


        };
    }
})();
