(function () {
    'use strict';
    angular
        .module('folhaDePonto')
        .controller('accountController', controller);
    controller.$inject = ['$location'];
    function controller($location) {
        var self = this;
        self.title = 'controller';
        self.isLogged = isLogged;
        activate();
        function activate() { }
        function isLogged() { return false; }
    }
})();
//# sourceMappingURL=accountController.js.map