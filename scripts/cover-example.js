require([
  '$api/models',
  '$views/image#Image'
], function(models, Image) {
  'use strict';

  var doCoverForAlbum = function() {
    var album = models.Album.fromURI('spotify:album:4ylsp4yx1wXwapcneUmpkw');
    var image = Image.forAlbum(album, {width: 200, height: 200, player: true});
    document.getElementById('albumCoverContainer').appendChild(image.node);
  };

  exports.doCoverForAlbum = doCoverForAlbum;
});
