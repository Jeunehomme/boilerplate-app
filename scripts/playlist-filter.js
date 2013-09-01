require([
  '$api/library#Library',
  '$views/list#List'
], function(Library, List) {
  'use strict';

  var doPlaylistFilter = function() {
    var query   = document.getElementById("query");
    var filter  = document.getElementById("filter");
    var reset   = document.getElementById("reset");

    var items = document.getElementsByTagName("li");

      for (var i = 0; i < items.length; i++) {
        var playlistName = items[i].innerText;

        if (playlistName === 'undefined') {
          items[i].style.display = "none";
        }
      }

    filter.addEventListener("click", function(event) {
      var items = document.getElementsByTagName("li");

      for (var i = 0; i < items.length; i++) {
        var playlistName = items[i].innerText;

        if (playlistName.match(query.value) === null) {
          items[i].style.display = "none";
        } else {
          items[i].style.display = "list-item";
        }
      }
    });

    reset.addEventListener("click", function(event) {
      var items = document.getElementsByTagName("li");

      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "list-item";
      }
    });
  };

  exports.doPlaylistFilter = doPlaylistFilter;
});
