(function () {
    'use strict';

    angular
        .module('app')
        .controller('home', home);

    home.$inject = ['$location', 'Players', 'playerResource'];

    function home($location, Players, playerResource) {
        
        var vm = this;

        activate();

        function activate() {
            Players.Reset();

            vm.player1 = 'Yoe';
            vm.player2 = 'Yordanka';
        }

        vm.startGame = function () {
            Players.Player1.name = vm.player1;
            Players.Player2.name = vm.player2;

            var player = playerResource.GetPlayerByName();
            
            $location.path('/game');
        };
    }
})();
