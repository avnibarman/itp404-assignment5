import Ember from 'ember';

export default Ember.Component.extend({
  isPopular: Ember.computed('song.playCount', function(){
  return this.get('song.playCount') > 20;
  }),
  
  highPrice: Ember.computed('song.price', function(){
  if(this.get('song.price') > 1){
    return true;
  }
  else {
    return false;
  }
  })
  
});
