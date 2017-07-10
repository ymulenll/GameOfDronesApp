(function () {
    'use strict';

    angular.module('app').run(['$location', function ($location) {
        $location.path('/moves-list');
    }]);

    angular.module('app').config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = false;
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'home as vm'
        }).when('/game', {
            templateUrl: 'app/game/game.html',
            controller: 'game as vm'
        }).when('/high-score', {
            templateUrl: 'app/high-score/high-score.html',
            controller: 'highScore as vm'
        }).when('/moves-list', {
            templateUrl: 'app/moves/moves-list.html',
            controller: 'movesList as vm'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
})();