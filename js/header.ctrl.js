/**
 * Created by defrati on 12/31/15.
 */

var app = angular.module('app');

app.controller('HeaderController', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    }
});