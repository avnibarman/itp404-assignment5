define('ember2/tests/helpers/resolver', ['exports', 'ember2/resolver', 'ember2/config/environment'], function (exports, _ember2Resolver, _ember2ConfigEnvironment) {

  var resolver = _ember2Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _ember2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ember2ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});