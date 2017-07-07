(function () {
    'use strict';

    angular.module('app').run(['$location', function ($location) {
        $location.path('/');
    }]);

    angular.module('app').config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'home as vm'
        }).when('/game', {
            templateUrl: 'app/game/game.html',
            controller: 'game as vm'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
})();