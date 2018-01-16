var myApp = angular.module("myApp", ['ui.router', 'myHome']);
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
         .state('Home', {
             url: '/Home',
             templateUrl: 'HomePage.html',
             controller: 'HomePageCtrl'
         })
        .state('Home.Filter', {
            url: '/Filter',
            templateUrl: 'Filter.html',
            controller: 'HomePageCtrl'
        });
    $urlRouterProvider.otherwise('/Home');
}]);
