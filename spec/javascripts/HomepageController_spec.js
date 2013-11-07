/**
 * Created with JetBrains RubyMine.
 * User: nickpeachey
 * Date: 06/11/2013
 * Time: 13:34
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains RubyMine.
 * User: nickpeachey
 * Date: 06/11/2013
 * Time: 13:11
 * To change this template use File | Settings | File Templates.
 */
describe('HomeController Specs', function() {
    beforeEach(module('sprintBoard'));


    describe('HomeController welcome message function', function() {

        var scope;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("HomeController", {
                $scope: scope
            });
        }));

        it("should return correct message", function() {
            var message = 'Hello World';
            scope.setLocalMessage(message);
            expect(scope.localMessage).toEqual(message);
        });

    });

//
//    describe('HomeController Creation', function() {
//        it('should create controller with no errors', inject(function($controller) {
//            var scope = {},
//                ctrl = $controller('HomeController', {$scope : scope});
//
//            expect($controller).not.toBe(null);
//        }));
//    });
//
//    describe('HomeController scope model name is not null', function() {
//        it('should create controller with no errors', inject(function($controller) {
//            var scope = {},
//                ctrl = $controller('HomeController', {$scope : scope});
//
//            expect(scope.name).not.toBe(null);
//        }));
//    });
//
//    describe('HomeController gotHit method was called when getData got called', function() {
//        it('should create controller with no errors', inject(function($controller) {
//            var scope = {},
//                ctrl = $controller('HomeController', {$scope : scope});
//
//            scope.updateSprintData(1);
//
//            expect(scope.result).toBe('hit');
//        }));
//    });
});