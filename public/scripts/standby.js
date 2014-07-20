// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    console.log("done");
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
        console.log(i);
        return $el.on('click', function(e) {
          e.preventDefault();
          id = $(this).data('id');
          return $("#" + id).css('display', 'block');
        });
      });
    });
  });

}).call(this);
