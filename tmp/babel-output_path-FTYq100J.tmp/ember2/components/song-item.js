define('ember2/components/song-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isPopular: _ember['default'].computed('song.playCount', function () {
      return this.get('song.playCount') > 20;
    }),

    highPrice: _ember['default'].computed('song.price', function () {
      if (this.get('song.price') > 1) {
        return true;
      } else {
        return false;
      }
    })

  });
});