(function () {
    'use strict';

    angular
        .module('app')
        .controller('highScore', highScore);

    highScore.$inject = ['$location'];

    function highScore($location) {        
        var vm = this;       

        activate();

        function activate() { }
    }
})();
