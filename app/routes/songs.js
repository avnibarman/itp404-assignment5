import Ember from 'ember';

export default Ember.Route.extend({
  
  model: function() {
    return $.ajax({
      url: 'http://itp-api.herokuapp.com/songs'
    }).then(function(model){
      return model.songs;
    });
  }
});
