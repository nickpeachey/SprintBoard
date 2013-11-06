/**
 * Created with JetBrains RubyMine.
 * User: nickpeachey
 * Date: 06/11/2013
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */
describe('simple math', function() {
    it('should add', function() {
       var a = 5;
       var b = 5;
       var result = a + b;
       expect(result).toEqual(10);
    });
});