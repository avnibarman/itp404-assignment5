define('ember2/router', ['exports', 'ember', 'ember2/config/environment'], function (exports, _ember, _ember2ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ember2ConfigEnvironment['default'].locationType,
    rootURL: _ember2ConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('artists', function () {
      this.route('artist', { path: ':id' });
    });

    this.route('songs');
  });

  exports['default'] = Router;
});