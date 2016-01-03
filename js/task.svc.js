/**
 * Created by defrati on 12/31/15.
 */

var app = angular.module('app');

app.factory('TaskService', function(){

    var factory = {};

    factory.priority = [{
        id: 1,
        title: 'High'
    },{
        id: 2,
        title: 'Medium'
    },{
        id: 3,
        title: 'Low'
    }];

    factory.tasks = [{
        id: 1,
        title: 'Pick up groceries',
        priority: factory.priority[0],
        flagged: false,
        done: false,
        dirty: false
    }, {
        id: 2,
        title: 'Drop off clothes at dry cleaners',
        priority: factory.priority[2],
        flagged: false,
        done: false,
        dirty: false
    }, {
        id: 3,
        title: 'Set alarm for 6am',
        priority: factory.priority[1],
        flagged: false,
        done: false,
        dirty: false
    }, {
        id: 4,
        title: 'Take son to practice',
        priority: factory.priority[0],
        flagged: true,
        done: false,
        dirty: false
    }];

    factory.getPriorities = function(){
        return factory.priority
    };

    factory.getAllActive = function(){
        var active = [];
        for (var i=0; i<factory.tasks.length; i++){
            var task = factory.tasks[i];
            if (!task.done || (task.done && task.dirty)){
                active.push(task);
            }
        }
        return active;
    };

    factory.getAllHistoric = function(){
        var historic = [];
        for (var i=0; i<factory.tasks.length; i++){
            var task = factory.tasks[i];
            if (task.done && !task.dirty){
                historic.push(task)
            }
        }
        return historic;
    };

    factory.getTask = function(id){
        for (var i=0; i<factory.tasks.length; i++){
            var task = factory.tasks[i];
            if (task.id==id) {
                return task;
            }
        }
    };

    factory.addTask = function(task){
        factory.tasks.push(task);
    };

    return factory;
});

