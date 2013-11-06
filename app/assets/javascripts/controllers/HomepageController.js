/**
 * Created with JetBrains RubyMine.
 * User: nickpeachey
 * Date: 06/11/2013
 * Time: 13:32
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module('sprintBoard',[]);

app.controller('HomeController', ['$scope', function($scope) {
    $scope.name = 'Hola!';
}]);