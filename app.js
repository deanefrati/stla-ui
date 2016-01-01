/**
 * Created by defrati on 12/30/15.
 */

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
        when('/active', {
            templateUrl: 'html/active_tasks.html',
            controller: 'ActiveTasksController'
        }).
        when('/historic', {
            templateUrl: 'html/historic_tasks.html',
            controller: 'HistoricTasksController'
        }).
        otherwise({
            redirectTo: '/active'
        });

}]);
