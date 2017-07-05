(function () {
    'use strict';

    angular
        .module('app')
        .controller('game', game);

    game.$inject = ['$location'];

    function game($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'game';

        activate();

        function activate() { }
    }
})();
