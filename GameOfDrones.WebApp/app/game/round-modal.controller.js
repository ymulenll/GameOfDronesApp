(function () {
    'use strict';

    angular
        .module('app')
        .controller('round_modal', round_modal);

    //round_modal.$inject = ['$uibModalInstance'];

    function round_modal($uibModalInstance, model) {
        /* jshint validthis:true */
        var vm = this;
        
        vm.model = model;

        vm.ok = function () {
            $uibModalInstance.close({ $value: '' });
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
