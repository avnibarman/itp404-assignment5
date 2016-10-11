define('ember2/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember2/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _ember2ConfigEnvironment) {

  var name = _ember2ConfigEnvironment['default'].APP.name;
  var version = _ember2ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});