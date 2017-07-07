(function () {
    'use strict';

    angular
        .module('app')
        .controller('game', game);

    game.$inject = ['$location', 'Players', 'Moves', '$uibModal'];

    function game($location, Players, Moves, $uibModal) {
        var vm = this;
        activate();
        function activate() {
            Players.Reset();
            vm.model = {};
            vm.currentPlayer = Players.Player1;
            vm.roundNumber = 1;
            vm.moves = Moves;
            vm.rounds = [];
            vm.showOptions = false;

            vm.scoreToWin = 2;
        }
        
        vm.play = function () {
            if (vm.currentPlayer.number === Players.Player1.number) {
                firstRound();
            }
            else {
                definitionRound();
            }

            
            vm.selectedMove = '';
        };

        function firstRound() {
            vm.currentPlayer = Players.Player2;
            vm.firstMove = vm.selectedMove;
        }

        function definitionRound() {
            vm.currentPlayer = Players.Player1;
            var move1 = vm.firstMove.move;
            var move2 = vm.selectedMove.move;

            var roundWinner = defineWinner(move1, move2);

            if (Players.Player1.score === vm.scoreToWin) {
                Players.Player1.gamesWon++;
                vm.model.winner = Players.Player1;
            }
            else if (Players.Player2.score === vm.scoreToWin) {
                Players.Player2.gamesWon++;
                vm.model.winner = Players.Player2;
            }
            if (vm.model.winner) {
                vm.showOptions = true;
                openFinalModal();
            }
            else {
                // show modal.
                vm.model.roundNumber = vm.roundNumber;
                vm.model.roundWinner = roundWinner;
                openModal();
                        
                vm.rounds.push({
                    number: vm.roundNumber,
                    roundWinnerName: roundWinner ? roundWinner.name : 'Tie'
                });  

                vm.roundNumber++;
            }            
        }

        function defineWinner(move1, move2) {
            var winner = null;
            angular.forEach(vm.moves, function (value) {
                if (value.move === move1 && value.kills === move2) {
                    Players.Player1.score++;
                    winner = Players.Player1;
                }
                else if (value.move === move2 && value.kills === move1) {
                    Players.Player2.score++;
                    winner = Players.Player2;
                }
            });

            return winner;
        }

        function openFinalModal() {
            $uibModal.open({
                templateUrl: 'app/game/final-modal.html',
                controller: 'round_modal',
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    model: function () {
                        return vm.model;
                    }
                }
            });
        }

        function openModal() {            
            $uibModal.open({
                templateUrl: 'app/game/round-modal.html',
                controller: 'round_modal',
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    model: function () {
                        return vm.model;
                    }
                }
            });
        }

        //Options at the end of the game
        vm.goHome = function () {
            $location.path('/');
        };

        vm.customizeMoves = function () {
            $location.path('/customizeMoves');
        };

        vm.playAgain = function () {
            activate();
        };

        vm.highScore = function () {
            $location.path('/highScore');
        };
    }
})();
