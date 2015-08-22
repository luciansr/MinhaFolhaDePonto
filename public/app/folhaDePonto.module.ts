(function () {
    'use strict';

    angular
        .module('folhaDePonto', ['ngRoute']);

    angular
        .module('folhaDePonto')
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/', {
                        templateUrl: 'public/app/components/home/home.html',
                        controller: 'homeController as homeCtrl'
                    }).
                    otherwise({
                        redirectTo: '/'
                    });
            }]);

})();
