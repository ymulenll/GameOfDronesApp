(function () {
    'use strict';

    angular
        .module('app')
        .controller('payer_resource', payer_resource);

    payer_resource.$inject = ['$resource'];

    function payer_resource($resource) {
        return $resource('api/Players/:id');
    }
})();
