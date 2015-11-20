(function() {

    var TiempoSkills = {};

    TiempoSkills = angular.module('TiempoSkills', ['ngRoute','ui.bootstrap']);

    TiempoSkills.config(function($routeProvider) {

        $routeProvider.when('/list', {
            controller: 'PersonListController',
            templateUrl: '/Scripts/views/list.html'
        });

        $routeProvider.when('/profile', {
            controller: 'PersonDetailController',
            templateUrl: '/Scripts/views/profile.html'
        });

        $routeProvider.when('/profile/:id', {
            controller: 'PersonDetailController',
            templateUrl: '/Scripts/views/profile.html'
        })

        $routeProvider.when('/home',{
            controller: 'HomeController',
            templateUrl: '/Scripts/views/home.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    if(!window.TiempoSkills){
        window.TiempoSkills = TiempoSkills;
    }

}());