/**
 * Created with JetBrains RubyMine.
 * User: nickpeachey
 * Date: 06/11/2013
 * Time: 13:46
 * To change this template use File | Settings | File Templates.
 */
(function() {

    var app = angular.module('sprintBoard',[]);

    app.service('SprintBoardDataService',["$rootScope", "$http", function($rootScope, $http) {

        var DATA_SERVICE_URL = "SOME_REST_SERVICE_LOCATION_HERE";

        var _getSprintBoardData = function(sprintId) {
            gotHit();
        };

        var gotHit = function() {

        };


        this.getSprintBoardData = _getSprintBoardData;

    }]);


})