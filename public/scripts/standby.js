// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var hideLink;
    hideLink = function() {
      $('#overlay').removeClass('dark');
      $('iframe').removeClass('fucklightboxes');
      return document.body.style.overflow = 'auto';
    };
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        return hideLink();
      }
    });
    return $('.cache').each(function(i, el) {
      var $el;
      $el = $(el);
      return $.get('/cache', {
        url: el.href
      }, function(html) {
        var id, iframe;
        console.log("fetched " + el.href);
        id = $el.data('id');
        iframe = document.getElementById(id);
        iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
        iframe.document.open();
        iframe.document.write(html);
        iframe.document.close();
        iframe.onload = function() {
          return $el.addClass('loaded');
        };
        return $el.on('click', function(e) {
          e.preventDefault();
          id = $(this).data('id');
          $("#" + id).addClass('fucklightboxes');
          $('#overlay').addClass('dark');
          document.body.style.overflow = 'hidden';
          return $('#overlay').on('click', function(e) {
            e.preventDefault();
            hideLink();
            return $('#overlay').off('click');
          });
        });
      });
    });
  });

}).call(this);
