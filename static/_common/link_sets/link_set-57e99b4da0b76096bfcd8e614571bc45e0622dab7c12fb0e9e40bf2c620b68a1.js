(function() {
  (function() {
    var $, debounce, linkSet;
    $ = this.jQuery;
    debounce = function(func, wait) {
      var timeout;
      timeout = void 0;
      return function() {
        var args, context;
        context = this;
        args = arguments;
        clearTimeout(timeout);
        return timeout = setTimeout((function() {
          timeout = null;
          func.apply(context, args);
        }), wait);
      };
    };
    linkSet = this.linkSet = {
      layoutMasonrySets: function() {
        var $sets;
        $sets = $(".format-link-set-items.masonry");
        if (!$sets.length) {
          return;
        }
        return $sets.each(function() {
          var $set, uuid;
          $set = $(this);
          uuid = Math.random().toString(36).slice(2);
          $set.attr('data-masonry-id', uuid);
          return imagesLoaded(document.querySelector("[data-masonry-id='" + uuid + "']"), (function(_this) {
            return function(inst) {
              return waterfall($set[0]);
            };
          })(this));
        });
      }
    };
    return $(function() {
      linkSet.layoutMasonrySets();
      return window.addEventListener('resize', debounce(function() {
        if ($('.format-link-set-items.masonry').length) {
          return waterfall('.format-link-set-items.masonry');
        }
      }, 500));
    });
  }).call(_4ORMAT);

}).call(this);
