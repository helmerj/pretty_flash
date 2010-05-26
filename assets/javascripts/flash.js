$(document).ready(function() {
  setTimeout(hideFlashes, 4000);
});

var hideFlashes = function() {
  $('p.notice, p.warning, p.error').fadeOut(2000);
}