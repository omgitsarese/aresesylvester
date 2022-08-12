window.detectPosition = window.detectPosition || function() {
  var rows = document.querySelectorAll("._4ORMAT_content_page_row");
  var initialYTranslate = 100;

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var elementTop = row.offsetTop + initialYTranslate;
    var elementBottom = elementTop + row.clientHeight;
    var viewportTop = window.scrollY ? window.scrollY : document.body.scrollTop;
    var viewportBottom = viewportTop + window.innerHeight;

    if (elementBottom > viewportTop &&
      (elementTop < viewportBottom || viewportBottom == document.body.scrollHeight)) {
      if (!row.classList.contains("in-viewport")) {
        row.classList.add("in-viewport")
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', window.detectPosition, false);
_4ORMAT.$(window.detectPosition);

document.body.addEventListener('scroll', window.detectPosition, false);
window.addEventListener('scroll', window.detectPosition, false);
