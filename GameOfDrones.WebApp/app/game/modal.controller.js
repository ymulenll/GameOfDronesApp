(function () {
    'use strict';

    angular
        .module('app')
        .controller('modalCtr', modalCtr);

    function modalCtr($uibModalInstance, model) {
        var vm = this;
        
        vm.model = model;

        vm.ok = function () {
            $uibModalInstance.close({ $value: '' });
        };
    }
})();
