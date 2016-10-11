QUnit.module('JSHint | routes/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 7, col 3, Missing semicolon.\n\n1 error');
});
