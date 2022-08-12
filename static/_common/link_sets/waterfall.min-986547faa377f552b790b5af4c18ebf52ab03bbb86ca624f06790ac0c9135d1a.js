// Waterfall.js, https://github.com/raphamorim/waterfall,version 1.0.3
function waterfall(t) {
  "string" == typeof t && (t = document.querySelector(t)),
  (t.style.position = "relative");
  var e = [],
    n = [].map.call(t.children, function (t) {
      return (t.style.position = "absolute"), t;
    });
  function r(t) {
    return window.getComputedStyle(t);
  }
  function o(t, e) {
    return parseFloat(r(e)["margin" + t]) || 0;
  }
  function l(t) {
    return t + "px";
  }
  function i(t) {
    return parseFloat(t.style.left);
  }
  function u(t) {
    return parseFloat(r(t).width);
  }
  function a(t) {
    return (
      (function (t) {
        return parseFloat(t.style.top);
      })(t) +
      (function (t) {
        return parseFloat(r(t).height);
      })(t) +
      o("Bottom", t)
    );
  }
  function s(t) {
    return i(t) + u(t) + o("Right", t);
  }
  function f(t) {
    t = t.sort(function (t, e) {
      return a(e) - a(t) || i(e) - i(t);
    });
  }
  n.length &&
    ((n[0].style.top = "0px"),
    (n[0].style.left = l(o("Left", n[0]))),
    e.push(n[0]));
  for (var p = 1; p < n.length; p++) {
    var c = n[p - 1],
      y = n[p];
    if (!(s(c) + u(y) <= u(t))) break;
    (y.style.top = c.style.top),
    (y.style.left = l(s(c) + o("Left", y))),
    e.push(y);
  }
  for (; p < n.length; p++) {
    f(e);
    y = n[p];
    var d = e.pop();
    (y.style.top = l(a(d) + o("Top", y))), (y.style.left = l(i(d))), e.push(y);
  }
  f(e);
  var h = e[0];
  t.style.height = l(a(h) + o("Bottom", h));
  var v = u(t);
  function g(e) {
    u(t) != v &&
      (e.target.removeEventListener(e.type, arguments.callee), waterfall(t));
  }
  window.addEventListener
    ? window.addEventListener("resize", g)
    : (document.body.onresize = g);
}
;
