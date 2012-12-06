//loadScript('http://code.jquery.com/jquery-1.8.3.min.js');
function loadScript(src) {
  var s = document.createElement("script");
  s.async = true;
  s.src = src;

  var s0 = document.getElementsByTagName('script')[0];
  s0.parentNode.insertBefore(s, s0);
}
