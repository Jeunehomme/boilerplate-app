require([
  '$api/library#Library',
  '$views/list#List'
], function(Library, List) {
  'use strict';

  var doPlaylistSearch = function() {
    var library = Library.forCurrentUser();
    //var list = List.forCollection(library.playlists);
    var container = document.getElementById('playlistContainer');
    
    library.playlists.snapshot().done(function (snapshot){
      var list = document.createElement("ul");

      for (var i = 0; i < snapshot._meta.length; i++) {
        // create an <li>
        var item = document.createElement('li');
        // set the innerText of the <li> to the _meta[i].name
        item.innerText = snapshot._meta[i].name;
        // append <li> to container
        list.appendChild(item);
        // console.log(snapshot._meta[i].name);
      }

      container.appendChild(list);
    });
    // list.done(function() {
    //   console.log("promises!");
    // })
    // list.init();
  };

  exports.doPlaylistSearch = doPlaylistSearch;
});
