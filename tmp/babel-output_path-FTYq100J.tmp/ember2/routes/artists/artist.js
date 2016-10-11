define('ember2/routes/artists/artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      document.title = "Artist";
    },
    model: function model(params) {

      var url = 'http://itp-api.herokuapp.com/api/artists/' + params.id + '/songs';
      return $.getJSON(url);
    },

    afterModel: function afterModel(model) {
      console.log(model);
    }
  });
});