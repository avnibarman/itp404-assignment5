define('ember2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember2/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ember2ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_ember2ConfigEnvironment['default'].APP.name, _ember2ConfigEnvironment['default'].APP.version)
  };
});