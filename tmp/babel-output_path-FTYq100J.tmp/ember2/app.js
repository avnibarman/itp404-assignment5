define('ember2/app', ['exports', 'ember', 'ember2/resolver', 'ember-load-initializers', 'ember2/config/environment'], function (exports, _ember, _ember2Resolver, _emberLoadInitializers, _ember2ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ember2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ember2ConfigEnvironment['default'].podModulePrefix,
    Resolver: _ember2Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ember2ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});