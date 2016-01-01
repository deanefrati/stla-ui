/**
 * Created by defrati on 12/30/15.
 */

var app = angular.module('app');

app.controller('ActiveTasksController', function($scope, TaskService) {
    $scope.searchInput;
    $scope.tasks = TaskService.getAllActive();
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

    $scope.new = {};

    $scope.addTask = function() {
        TaskService.addTask($scope.new);
        $scope.new = {};
        $scope.tasks = TaskService.getAllActive();
    };

    $scope.flush = function(){
        var count=0;
        for (var i=0; i<$scope.tasks.length; i++){
            task = $scope.tasks[i];
            if (task.dirty){
                task.dirty=false;
                count++
            }
        }
        if (count>0){
            $scope.tasks = TaskService.getAllActive();
        }
    }
});