/**
 * Created by defrati on 12/30/15.
 */

var app = angular.module('app');

app.controller('SingleTasksController', function($scope, $route, $routeParams, TaskService) {
    $scope.task = TaskService.getTask($routeParams.id);
});
