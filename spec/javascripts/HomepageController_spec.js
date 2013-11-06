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

    describe('HomeController Creation', function() {
        it('should create controller with no errors', inject(function($controller) {
            var scope = {},
                ctrl = $controller('HomeController', {$scope : scope});

            expect($controller).not.toBe(null);
        }));
    });

    describe('HomeController scope model name is not null', function() {
        it('should create controller with no errors', inject(function($controller) {
            var scope = {},
                ctrl = $controller('HomeController', {$scope : scope});

            expect(scope.name).not.toBe(null);
        }));
    });
});