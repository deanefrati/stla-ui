/**
 * Created by defrati on 12/30/15.
 */

var app = angular.module('app');

app.controller('HistoricTasksController', function($scope, TaskService) {
    $scope.searchInput = "";
    $scope.tasks = TaskService.getAllHistoric();
    $scope.priority = TaskService.getPriorities();

    $scope.sort = [{
        id: 1,
        title: 'Priority Ascending',
        key: 'priority.id',
        reverse: false
    }, {
        id: 2,
        title: 'Priority Descending',
        key: 'priority.id',
        reverse: true
    }, {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    }, {
        id: 4,
        title: 'Title Descending',
        key: 'title',
        reverse: true
    }];

    $scope.order = $scope.sort[0];
});
