define('ember2/routes/artists', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			document.title = "Artists";
		},

		model: function model(params) {
			console.log(params);
			var url = 'http://itp-api.herokuapp.com/api/artists';
			return $.getJSON(url);
		},
		afterModel: function afterModel(model) {
			console.log(model);
		}

	});
});