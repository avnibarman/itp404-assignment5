import Ember from 'ember';

export default Ember.Route.extend({
 beforeModel: function() {
		document.title="Artist";
	},
    model: function(params){
    
    var url = 'http://itp-api.herokuapp.com/api/artists/' + params.id + '/songs';
    return $.getJSON(url);
  },
  
  afterModel: function(model){
    console.log(model);
  }
});