require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example',
  'scripts/playlist-search',
  'scripts/playlist-filter'
], function(models, languageExample, coverExample, buttonExample, playlistExample, playlistSearch, playlistFilter) {
  'use strict';

  languageExample.doHelloWorld();
  // coverExample.doCoverForAlbum();
  // buttonExample.doShareButtonForArtist();
  // buttonExample.doPlayButtonForAlbum();
  // playlistExample.doPlaylistForAlbum();
  playlistSearch.doPlaylistSearch();
  playlistFilter.doPlaylistFilter();

});
