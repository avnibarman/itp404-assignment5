define('ember2/tests/test-helper', ['exports', 'ember2/tests/helpers/resolver', 'ember-qunit'], function (exports, _ember2TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_ember2TestsHelpersResolver['default']);
});