(function () {
    'use strict';
    angular
        .module('folhaDePonto')
        .controller('homeController', controller);
    controller.$inject = ['$location'];
    function controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller';
        activate();
        function activate() { }
    }
})();
//# sourceMappingURL=homeController.js.map