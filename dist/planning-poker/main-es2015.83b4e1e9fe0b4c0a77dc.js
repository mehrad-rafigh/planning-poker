(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(e, t, n) {
      e.exports = n("zUnb");
    },
    yLV6: function(e, t, n) {
      var r;
      !(function(s, i, o, a) {
        "use strict";
        var l,
          c = ["", "webkit", "Moz", "MS", "ms", "o"],
          u = i.createElement("div"),
          h = "function",
          d = Math.round,
          p = Math.abs,
          f = Date.now;
        function m(e, t, n) {
          return setTimeout(S(e, n), t);
        }
        function g(e, t, n) {
          return !!Array.isArray(e) && (y(e, n[t], n), !0);
        }
        function y(e, t, n) {
          var r;
          if (e)
            if (e.forEach) e.forEach(t, n);
            else if (e.length !== a)
              for (r = 0; r < e.length; ) t.call(n, e[r], r, e), r++;
            else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        }
        function _(e, t, n) {
          var r = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
          return function() {
            var t = new Error("get-stack-trace"),
              n =
                t && t.stack
                  ? t.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              i = s.console && (s.console.warn || s.console.log);
            return i && i.call(s.console, r, n), e.apply(this, arguments);
          };
        }
        l =
          "function" != typeof Object.assign
            ? function(e) {
                if (e === a || null === e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  if (r !== a && null !== r)
                    for (var s in r) r.hasOwnProperty(s) && (t[s] = r[s]);
                }
                return t;
              }
            : Object.assign;
        var v = _(
            function(e, t, n) {
              for (var r = Object.keys(t), s = 0; s < r.length; )
                (!n || (n && e[r[s]] === a)) && (e[r[s]] = t[r[s]]), s++;
              return e;
            },
            "extend",
            "Use `assign`."
          ),
          w = _(
            function(e, t) {
              return v(e, t, !0);
            },
            "merge",
            "Use `assign`."
          );
        function b(e, t, n) {
          var r,
            s = t.prototype;
          ((r = e.prototype = Object.create(s)).constructor = e),
            (r._super = s),
            n && l(r, n);
        }
        function S(e, t) {
          return function() {
            return e.apply(t, arguments);
          };
        }
        function E(e, t) {
          return typeof e == h ? e.apply((t && t[0]) || a, t) : e;
        }
        function C(e, t) {
          return e === a ? t : e;
        }
        function x(e, t, n) {
          y(A(t), function(t) {
            e.addEventListener(t, n, !1);
          });
        }
        function T(e, t, n) {
          y(A(t), function(t) {
            e.removeEventListener(t, n, !1);
          });
        }
        function k(e, t) {
          for (; e; ) {
            if (e == t) return !0;
            e = e.parentNode;
          }
          return !1;
        }
        function I(e, t) {
          return e.indexOf(t) > -1;
        }
        function A(e) {
          return e.trim().split(/\s+/g);
        }
        function N(e, t, n) {
          if (e.indexOf && !n) return e.indexOf(t);
          for (var r = 0; r < e.length; ) {
            if ((n && e[r][n] == t) || (!n && e[r] === t)) return r;
            r++;
          }
          return -1;
        }
        function R(e) {
          return Array.prototype.slice.call(e, 0);
        }
        function P(e, t, n) {
          for (var r = [], s = [], i = 0; i < e.length; ) {
            var o = t ? e[i][t] : e[i];
            N(s, o) < 0 && r.push(e[i]), (s[i] = o), i++;
          }
          return (
            n &&
              (r = t
                ? r.sort(function(e, n) {
                    return e[t] > n[t];
                  })
                : r.sort()),
            r
          );
        }
        function D(e, t) {
          for (
            var n, r, s = t[0].toUpperCase() + t.slice(1), i = 0;
            i < c.length;

          ) {
            if ((r = (n = c[i]) ? n + s : t) in e) return r;
            i++;
          }
          return a;
        }
        var O = 1;
        function M(e) {
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow || s;
        }
        var F = "ontouchstart" in s,
          L = D(s, "PointerEvent") !== a,
          j =
            F &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          U = 25,
          V = 1,
          $ = 4,
          H = 8,
          z = 1,
          B = 2,
          q = 4,
          Q = 8,
          W = 16,
          K = B | q,
          Z = Q | W,
          G = K | Z,
          Y = ["x", "y"],
          X = ["clientX", "clientY"];
        function J(e, t) {
          var n = this;
          (this.manager = e),
            (this.callback = t),
            (this.element = e.element),
            (this.target = e.options.inputTarget),
            (this.domHandler = function(t) {
              E(e.options.enable, [e]) && n.handler(t);
            }),
            this.init();
        }
        function ee(e, t, n) {
          var r = n.pointers.length,
            s = n.changedPointers.length,
            i = t & V && r - s == 0,
            o = t & ($ | H) && r - s == 0;
          (n.isFirst = !!i),
            (n.isFinal = !!o),
            i && (e.session = {}),
            (n.eventType = t),
            (function(e, t) {
              var n = e.session,
                r = t.pointers,
                s = r.length;
              n.firstInput || (n.firstInput = te(t)),
                s > 1 && !n.firstMultiple
                  ? (n.firstMultiple = te(t))
                  : 1 === s && (n.firstMultiple = !1);
              var i = n.firstInput,
                o = n.firstMultiple,
                l = o ? o.center : i.center,
                c = (t.center = ne(r));
              (t.timeStamp = f()),
                (t.deltaTime = t.timeStamp - i.timeStamp),
                (t.angle = oe(l, c)),
                (t.distance = ie(l, c)),
                (function(e, t) {
                  var n = t.center,
                    r = e.offsetDelta || {},
                    s = e.prevDelta || {},
                    i = e.prevInput || {};
                  (t.eventType !== V && i.eventType !== $) ||
                    ((s = e.prevDelta = { x: i.deltaX || 0, y: i.deltaY || 0 }),
                    (r = e.offsetDelta = { x: n.x, y: n.y })),
                    (t.deltaX = s.x + (n.x - r.x)),
                    (t.deltaY = s.y + (n.y - r.y));
                })(n, t),
                (t.offsetDirection = se(t.deltaX, t.deltaY));
              var u,
                h,
                d = re(t.deltaTime, t.deltaX, t.deltaY);
              (t.overallVelocityX = d.x),
                (t.overallVelocityY = d.y),
                (t.overallVelocity = p(d.x) > p(d.y) ? d.x : d.y),
                (t.scale = o
                  ? ((u = o.pointers),
                    ie((h = r)[0], h[1], X) / ie(u[0], u[1], X))
                  : 1),
                (t.rotation = o
                  ? (function(e, t) {
                      return oe(r[1], r[0], X) + oe(e[1], e[0], X);
                    })(o.pointers)
                  : 0),
                (t.maxPointers = n.prevInput
                  ? t.pointers.length > n.prevInput.maxPointers
                    ? t.pointers.length
                    : n.prevInput.maxPointers
                  : t.pointers.length),
                (function(e, t) {
                  var n,
                    r,
                    s,
                    i,
                    o = e.lastInterval || t,
                    l = t.timeStamp - o.timeStamp;
                  if (t.eventType != H && (l > U || o.velocity === a)) {
                    var c = t.deltaX - o.deltaX,
                      u = t.deltaY - o.deltaY,
                      h = re(l, c, u);
                    (r = h.x),
                      (s = h.y),
                      (n = p(h.x) > p(h.y) ? h.x : h.y),
                      (i = se(c, u)),
                      (e.lastInterval = t);
                  } else
                    (n = o.velocity),
                      (r = o.velocityX),
                      (s = o.velocityY),
                      (i = o.direction);
                  (t.velocity = n),
                    (t.velocityX = r),
                    (t.velocityY = s),
                    (t.direction = i);
                })(n, t);
              var m = e.element;
              k(t.srcEvent.target, m) && (m = t.srcEvent.target),
                (t.target = m);
            })(e, n),
            e.emit("hammer.input", n),
            e.recognize(n),
            (e.session.prevInput = n);
        }
        function te(e) {
          for (var t = [], n = 0; n < e.pointers.length; )
            (t[n] = {
              clientX: d(e.pointers[n].clientX),
              clientY: d(e.pointers[n].clientY)
            }),
              n++;
          return {
            timeStamp: f(),
            pointers: t,
            center: ne(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
          };
        }
        function ne(e) {
          var t = e.length;
          if (1 === t) return { x: d(e[0].clientX), y: d(e[0].clientY) };
          for (var n = 0, r = 0, s = 0; s < t; )
            (n += e[s].clientX), (r += e[s].clientY), s++;
          return { x: d(n / t), y: d(r / t) };
        }
        function re(e, t, n) {
          return { x: t / e || 0, y: n / e || 0 };
        }
        function se(e, t) {
          return e === t ? z : p(e) >= p(t) ? (e < 0 ? B : q) : t < 0 ? Q : W;
        }
        function ie(e, t, n) {
          n || (n = Y);
          var r = t[n[0]] - e[n[0]],
            s = t[n[1]] - e[n[1]];
          return Math.sqrt(r * r + s * s);
        }
        function oe(e, t, n) {
          return (
            n || (n = Y),
            (180 * Math.atan2(t[n[1]] - e[n[1]], t[n[0]] - e[n[0]])) / Math.PI
          );
        }
        J.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && x(this.element, this.evEl, this.domHandler),
              this.evTarget && x(this.target, this.evTarget, this.domHandler),
              this.evWin && x(M(this.element), this.evWin, this.domHandler);
          },
          destroy: function() {
            this.evEl && T(this.element, this.evEl, this.domHandler),
              this.evTarget && T(this.target, this.evTarget, this.domHandler),
              this.evWin && T(M(this.element), this.evWin, this.domHandler);
          }
        };
        var ae = { mousedown: V, mousemove: 2, mouseup: $ },
          le = "mousedown",
          ce = "mousemove mouseup";
        function ue() {
          (this.evEl = le),
            (this.evWin = ce),
            (this.pressed = !1),
            J.apply(this, arguments);
        }
        b(ue, J, {
          handler: function(e) {
            var t = ae[e.type];
            t & V && 0 === e.button && (this.pressed = !0),
              2 & t && 1 !== e.which && (t = $),
              this.pressed &&
                (t & $ && (this.pressed = !1),
                this.callback(this.manager, t, {
                  pointers: [e],
                  changedPointers: [e],
                  pointerType: "mouse",
                  srcEvent: e
                }));
          }
        });
        var he = {
            pointerdown: V,
            pointermove: 2,
            pointerup: $,
            pointercancel: H,
            pointerout: H
          },
          de = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          pe = "pointerdown",
          fe = "pointermove pointerup pointercancel";
        function me() {
          (this.evEl = pe),
            (this.evWin = fe),
            J.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        s.MSPointerEvent &&
          !s.PointerEvent &&
          ((pe = "MSPointerDown"),
          (fe = "MSPointerMove MSPointerUp MSPointerCancel")),
          b(me, J, {
            handler: function(e) {
              var t = this.store,
                n = !1,
                r = e.type.toLowerCase().replace("ms", ""),
                s = he[r],
                i = de[e.pointerType] || e.pointerType,
                o = "touch" == i,
                a = N(t, e.pointerId, "pointerId");
              s & V && (0 === e.button || o)
                ? a < 0 && (t.push(e), (a = t.length - 1))
                : s & ($ | H) && (n = !0),
                a < 0 ||
                  ((t[a] = e),
                  this.callback(this.manager, s, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: i,
                    srcEvent: e
                  }),
                  n && t.splice(a, 1));
            }
          });
        var ge = { touchstart: V, touchmove: 2, touchend: $, touchcancel: H },
          ye = "touchstart",
          _e = "touchstart touchmove touchend touchcancel";
        function ve() {
          (this.evTarget = ye),
            (this.evWin = _e),
            (this.started = !1),
            J.apply(this, arguments);
        }
        b(ve, J, {
          handler: function(e) {
            var t = ge[e.type];
            if ((t === V && (this.started = !0), this.started)) {
              var n = function(e, t) {
                var n = R(e.touches),
                  r = R(e.changedTouches);
                return (
                  t & ($ | H) && (n = P(n.concat(r), "identifier", !0)), [n, r]
                );
              }.call(this, e, t);
              t & ($ | H) &&
                n[0].length - n[1].length == 0 &&
                (this.started = !1),
                this.callback(this.manager, t, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: "touch",
                  srcEvent: e
                });
            }
          }
        });
        var we = { touchstart: V, touchmove: 2, touchend: $, touchcancel: H },
          be = "touchstart touchmove touchend touchcancel";
        function Se() {
          (this.evTarget = be), (this.targetIds = {}), J.apply(this, arguments);
        }
        b(Se, J, {
          handler: function(e) {
            var t = we[e.type],
              n = function(e, t) {
                var n = R(e.touches),
                  r = this.targetIds;
                if (t & (2 | V) && 1 === n.length)
                  return (r[n[0].identifier] = !0), [n, n];
                var s,
                  i,
                  o = R(e.changedTouches),
                  a = [],
                  l = this.target;
                if (
                  ((i = n.filter(function(e) {
                    return k(e.target, l);
                  })),
                  t === V)
                )
                  for (s = 0; s < i.length; ) (r[i[s].identifier] = !0), s++;
                for (s = 0; s < o.length; )
                  r[o[s].identifier] && a.push(o[s]),
                    t & ($ | H) && delete r[o[s].identifier],
                    s++;
                return a.length
                  ? [P(i.concat(a), "identifier", !0), a]
                  : void 0;
              }.call(this, e, t);
            n &&
              this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e
              });
          }
        });
        var Ee = 2500;
        function Ce() {
          J.apply(this, arguments);
          var e = S(this.handler, this);
          (this.touch = new Se(this.manager, e)),
            (this.mouse = new ue(this.manager, e)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function xe(e) {
          var t = e.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var n = { x: t.clientX, y: t.clientY };
            this.lastTouches.push(n);
            var r = this.lastTouches;
            setTimeout(function() {
              var e = r.indexOf(n);
              e > -1 && r.splice(e, 1);
            }, Ee);
          }
        }
        b(Ce, J, {
          handler: function(e, t, n) {
            var r = "mouse" == n.pointerType;
            if (
              !(
                r &&
                n.sourceCapabilities &&
                n.sourceCapabilities.firesTouchEvents
              )
            ) {
              if ("touch" == n.pointerType)
                (function(e, t) {
                  e & V
                    ? ((this.primaryTouch = t.changedPointers[0].identifier),
                      xe.call(this, t))
                    : e & ($ | H) && xe.call(this, t);
                }.call(this, t, n));
              else if (
                r &&
                function(e) {
                  for (
                    var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0;
                    r < this.lastTouches.length;
                    r++
                  ) {
                    var s = this.lastTouches[r],
                      i = Math.abs(t - s.x),
                      o = Math.abs(n - s.y);
                    if (i <= 25 && o <= 25) return !0;
                  }
                  return !1;
                }.call(this, n)
              )
                return;
              this.callback(e, t, n);
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
          }
        });
        var Te = D(u.style, "touchAction"),
          ke = Te !== a,
          Ie = (function() {
            if (!ke) return !1;
            var e = {},
              t = s.CSS && s.CSS.supports;
            return (
              [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none"
              ].forEach(function(n) {
                e[n] = !t || s.CSS.supports("touch-action", n);
              }),
              e
            );
          })();
        function Ae(e, t) {
          (this.manager = e), this.set(t);
        }
        Ae.prototype = {
          set: function(e) {
            "compute" == e && (e = this.compute()),
              ke &&
                this.manager.element.style &&
                Ie[e] &&
                (this.manager.element.style[Te] = e),
              (this.actions = e.toLowerCase().trim());
          },
          update: function() {
            this.set(this.manager.options.touchAction);
          },
          compute: function() {
            var e = [];
            return (
              y(this.manager.recognizers, function(t) {
                E(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
              }),
              (function(e) {
                if (I(e, "none")) return "none";
                var t = I(e, "pan-x"),
                  n = I(e, "pan-y");
                return t && n
                  ? "none"
                  : t || n
                  ? t
                    ? "pan-x"
                    : "pan-y"
                  : I(e, "manipulation")
                  ? "manipulation"
                  : "auto";
              })(e.join(" "))
            );
          },
          preventDefaults: function(e) {
            var t = e.srcEvent,
              n = e.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault();
            else {
              var r = this.actions,
                s = I(r, "none") && !Ie.none,
                i = I(r, "pan-y") && !Ie["pan-y"],
                o = I(r, "pan-x") && !Ie["pan-x"];
              if (
                s &&
                1 === e.pointers.length &&
                e.distance < 2 &&
                e.deltaTime < 250
              )
                return;
              if (!o || !i)
                return s || (i && n & K) || (o && n & Z)
                  ? this.preventSrc(t)
                  : void 0;
            }
          },
          preventSrc: function(e) {
            (this.manager.session.prevented = !0), e.preventDefault();
          }
        };
        var Ne = 1,
          Re = 2,
          Pe = 4,
          De = 8,
          Oe = De,
          Me = 16;
        function Fe(e) {
          (this.options = l({}, this.defaults, e || {})),
            (this.id = O++),
            (this.manager = null),
            (this.options.enable = C(this.options.enable, !0)),
            (this.state = Ne),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function Le(e) {
          return e & Me
            ? "cancel"
            : e & De
            ? "end"
            : e & Pe
            ? "move"
            : e & Re
            ? "start"
            : "";
        }
        function je(e) {
          return e == W
            ? "down"
            : e == Q
            ? "up"
            : e == B
            ? "left"
            : e == q
            ? "right"
            : "";
        }
        function Ue(e, t) {
          var n = t.manager;
          return n ? n.get(e) : e;
        }
        function Ve() {
          Fe.apply(this, arguments);
        }
        function $e() {
          Ve.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function He() {
          Ve.apply(this, arguments);
        }
        function ze() {
          Fe.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Be() {
          Ve.apply(this, arguments);
        }
        function qe() {
          Ve.apply(this, arguments);
        }
        function Qe() {
          Fe.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function We(e, t) {
          return (
            ((t = t || {}).recognizers = C(t.recognizers, We.defaults.preset)),
            new Ke(e, t)
          );
        }
        function Ke(e, t) {
          var n;
          (this.options = l({}, We.defaults, t || {})),
            (this.options.inputTarget = this.options.inputTarget || e),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = e),
            (this.input = new ((n = this).options.inputClass ||
              (L ? me : j ? Se : F ? Ce : ue))(n, ee)),
            (this.touchAction = new Ae(this, this.options.touchAction)),
            Ze(this, !0),
            y(
              this.options.recognizers,
              function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
              },
              this
            );
        }
        function Ze(e, t) {
          var n,
            r = e.element;
          r.style &&
            (y(e.options.cssProps, function(s, i) {
              (n = D(r.style, i)),
                t
                  ? ((e.oldCssProps[n] = r.style[n]), (r.style[n] = s))
                  : (r.style[n] = e.oldCssProps[n] || "");
            }),
            t || (e.oldCssProps = {}));
        }
        (Fe.prototype = {
          defaults: {},
          set: function(e) {
            return (
              l(this.options, e),
              this.manager && this.manager.touchAction.update(),
              this
            );
          },
          recognizeWith: function(e) {
            if (g(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return (
              t[(e = Ue(e, this)).id] || ((t[e.id] = e), e.recognizeWith(this)),
              this
            );
          },
          dropRecognizeWith: function(e) {
            return g(e, "dropRecognizeWith", this)
              ? this
              : ((e = Ue(e, this)), delete this.simultaneous[e.id], this);
          },
          requireFailure: function(e) {
            if (g(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return (
              -1 === N(t, (e = Ue(e, this))) &&
                (t.push(e), e.requireFailure(this)),
              this
            );
          },
          dropRequireFailure: function(e) {
            if (g(e, "dropRequireFailure", this)) return this;
            e = Ue(e, this);
            var t = N(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this;
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0;
          },
          canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id];
          },
          emit: function(e) {
            var t = this,
              n = this.state;
            function r(n) {
              t.manager.emit(n, e);
            }
            n < De && r(t.options.event + Le(n)),
              r(t.options.event),
              e.additionalEvent && r(e.additionalEvent),
              n >= De && r(t.options.event + Le(n));
          },
          tryEmit: function(e) {
            if (this.canEmit()) return this.emit(e);
            this.state = 32;
          },
          canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
              if (!(this.requireFail[e].state & (32 | Ne))) return !1;
              e++;
            }
            return !0;
          },
          recognize: function(e) {
            var t = l({}, e);
            if (!E(this.options.enable, [this, t]))
              return this.reset(), void (this.state = 32);
            this.state & (Oe | Me | 32) && (this.state = Ne),
              (this.state = this.process(t)),
              this.state & (Re | Pe | De | Me) && this.tryEmit(t);
          },
          process: function(e) {},
          getTouchAction: function() {},
          reset: function() {}
        }),
          b(Ve, Fe, {
            defaults: { pointers: 1 },
            attrTest: function(e) {
              var t = this.options.pointers;
              return 0 === t || e.pointers.length === t;
            },
            process: function(e) {
              var t = this.state,
                n = e.eventType,
                r = t & (Re | Pe),
                s = this.attrTest(e);
              return r && (n & H || !s)
                ? t | Me
                : r || s
                ? n & $
                  ? t | De
                  : t & Re
                  ? t | Pe
                  : Re
                : 32;
            }
          }),
          b($e, Ve, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: G
            },
            getTouchAction: function() {
              var e = this.options.direction,
                t = [];
              return e & K && t.push("pan-y"), e & Z && t.push("pan-x"), t;
            },
            directionTest: function(e) {
              var t = this.options,
                n = !0,
                r = e.distance,
                s = e.direction,
                i = e.deltaX,
                o = e.deltaY;
              return (
                s & t.direction ||
                  (t.direction & K
                    ? ((s = 0 === i ? z : i < 0 ? B : q),
                      (n = i != this.pX),
                      (r = Math.abs(e.deltaX)))
                    : ((s = 0 === o ? z : o < 0 ? Q : W),
                      (n = o != this.pY),
                      (r = Math.abs(e.deltaY)))),
                (e.direction = s),
                n && r > t.threshold && s & t.direction
              );
            },
            attrTest: function(e) {
              return (
                Ve.prototype.attrTest.call(this, e) &&
                (this.state & Re ||
                  (!(this.state & Re) && this.directionTest(e)))
              );
            },
            emit: function(e) {
              (this.pX = e.deltaX), (this.pY = e.deltaY);
              var t = je(e.direction);
              t && (e.additionalEvent = this.options.event + t),
                this._super.emit.call(this, e);
            }
          }),
          b(He, Ve, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function() {
              return ["none"];
            },
            attrTest: function(e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.scale - 1) > this.options.threshold ||
                  this.state & Re)
              );
            },
            emit: function(e) {
              1 !== e.scale &&
                (e.additionalEvent =
                  this.options.event + (e.scale < 1 ? "in" : "out")),
                this._super.emit.call(this, e);
            }
          }),
          b(ze, Fe, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function() {
              return ["auto"];
            },
            process: function(e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                r = e.distance < t.threshold,
                s = e.deltaTime > t.time;
              if (
                ((this._input = e), !r || !n || (e.eventType & ($ | H) && !s))
              )
                this.reset();
              else if (e.eventType & V)
                this.reset(),
                  (this._timer = m(
                    function() {
                      (this.state = Oe), this.tryEmit();
                    },
                    t.time,
                    this
                  ));
              else if (e.eventType & $) return Oe;
              return 32;
            },
            reset: function() {
              clearTimeout(this._timer);
            },
            emit: function(e) {
              this.state === Oe &&
                (e && e.eventType & $
                  ? this.manager.emit(this.options.event + "up", e)
                  : ((this._input.timeStamp = f()),
                    this.manager.emit(this.options.event, this._input)));
            }
          }),
          b(Be, Ve, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function() {
              return ["none"];
            },
            attrTest: function(e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.rotation) > this.options.threshold ||
                  this.state & Re)
              );
            }
          }),
          b(qe, Ve, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: K | Z,
              pointers: 1
            },
            getTouchAction: function() {
              return $e.prototype.getTouchAction.call(this);
            },
            attrTest: function(e) {
              var t,
                n = this.options.direction;
              return (
                n & (K | Z)
                  ? (t = e.overallVelocity)
                  : n & K
                  ? (t = e.overallVelocityX)
                  : n & Z && (t = e.overallVelocityY),
                this._super.attrTest.call(this, e) &&
                  n & e.offsetDirection &&
                  e.distance > this.options.threshold &&
                  e.maxPointers == this.options.pointers &&
                  p(t) > this.options.velocity &&
                  e.eventType & $
              );
            },
            emit: function(e) {
              var t = je(e.offsetDirection);
              t && this.manager.emit(this.options.event + t, e),
                this.manager.emit(this.options.event, e);
            }
          }),
          b(Qe, Fe, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10
            },
            getTouchAction: function() {
              return ["manipulation"];
            },
            process: function(e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                r = e.distance < t.threshold,
                s = e.deltaTime < t.time;
              if ((this.reset(), e.eventType & V && 0 === this.count))
                return this.failTimeout();
              if (r && s && n) {
                if (e.eventType != $) return this.failTimeout();
                var i = !this.pTime || e.timeStamp - this.pTime < t.interval,
                  o =
                    !this.pCenter ||
                    ie(this.pCenter, e.center) < t.posThreshold;
                if (
                  ((this.pTime = e.timeStamp),
                  (this.pCenter = e.center),
                  o && i ? (this.count += 1) : (this.count = 1),
                  (this._input = e),
                  0 == this.count % t.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = m(
                        function() {
                          (this.state = Oe), this.tryEmit();
                        },
                        t.interval,
                        this
                      )),
                      Re)
                    : Oe;
              }
              return 32;
            },
            failTimeout: function() {
              return (
                (this._timer = m(
                  function() {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function() {
              clearTimeout(this._timer);
            },
            emit: function() {
              this.state == Oe &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            }
          }),
          (We.VERSION = "2.0.7"),
          (We.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Be, { enable: !1 }],
              [He, { enable: !1 }, ["rotate"]],
              [qe, { direction: K }],
              [$e, { direction: K }, ["swipe"]],
              [Qe],
              [Qe, { event: "doubletap", taps: 2 }, ["tap"]],
              [ze]
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)"
            }
          }),
          (Ke.prototype = {
            set: function(e) {
              return (
                l(this.options, e),
                e.touchAction && this.touchAction.update(),
                e.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = e.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function(e) {
              this.session.stopped = e ? 2 : 1;
            },
            recognize: function(e) {
              var t = this.session;
              if (!t.stopped) {
                var n;
                this.touchAction.preventDefaults(e);
                var r = this.recognizers,
                  s = t.curRecognizer;
                (!s || (s && s.state & Oe)) && (s = t.curRecognizer = null);
                for (var i = 0; i < r.length; )
                  (n = r[i]),
                    2 === t.stopped || (s && n != s && !n.canRecognizeWith(s))
                      ? n.reset()
                      : n.recognize(e),
                    !s && n.state & (Re | Pe | De) && (s = t.curRecognizer = n),
                    i++;
              }
            },
            get: function(e) {
              if (e instanceof Fe) return e;
              for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
              return null;
            },
            add: function(e) {
              if (g(e, "add", this)) return this;
              var t = this.get(e.options.event);
              return (
                t && this.remove(t),
                this.recognizers.push(e),
                (e.manager = this),
                this.touchAction.update(),
                e
              );
            },
            remove: function(e) {
              if (g(e, "remove", this)) return this;
              if ((e = this.get(e))) {
                var t = this.recognizers,
                  n = N(t, e);
                -1 !== n && (t.splice(n, 1), this.touchAction.update());
              }
              return this;
            },
            on: function(e, t) {
              if (e !== a && t !== a) {
                var n = this.handlers;
                return (
                  y(A(e), function(e) {
                    (n[e] = n[e] || []), n[e].push(t);
                  }),
                  this
                );
              }
            },
            off: function(e, t) {
              if (e !== a) {
                var n = this.handlers;
                return (
                  y(A(e), function(e) {
                    t ? n[e] && n[e].splice(N(n[e], t), 1) : delete n[e];
                  }),
                  this
                );
              }
            },
            emit: function(e, t) {
              this.options.domEvents &&
                (function(e, t) {
                  var n = i.createEvent("Event");
                  n.initEvent(e, !0, !0),
                    (n.gesture = t),
                    t.target.dispatchEvent(n);
                })(e, t);
              var n = this.handlers[e] && this.handlers[e].slice();
              if (n && n.length) {
                (t.type = e),
                  (t.preventDefault = function() {
                    t.srcEvent.preventDefault();
                  });
                for (var r = 0; r < n.length; ) n[r](t), r++;
              }
            },
            destroy: function() {
              this.element && Ze(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            }
          }),
          l(We, {
            INPUT_START: V,
            INPUT_MOVE: 2,
            INPUT_END: $,
            INPUT_CANCEL: H,
            STATE_POSSIBLE: Ne,
            STATE_BEGAN: Re,
            STATE_CHANGED: Pe,
            STATE_ENDED: De,
            STATE_RECOGNIZED: Oe,
            STATE_CANCELLED: Me,
            STATE_FAILED: 32,
            DIRECTION_NONE: z,
            DIRECTION_LEFT: B,
            DIRECTION_RIGHT: q,
            DIRECTION_UP: Q,
            DIRECTION_DOWN: W,
            DIRECTION_HORIZONTAL: K,
            DIRECTION_VERTICAL: Z,
            DIRECTION_ALL: G,
            Manager: Ke,
            Input: J,
            TouchAction: Ae,
            TouchInput: Se,
            MouseInput: ue,
            PointerEventInput: me,
            TouchMouseInput: Ce,
            SingleTouchInput: ve,
            Recognizer: Fe,
            AttrRecognizer: Ve,
            Tap: Qe,
            Pan: $e,
            Swipe: qe,
            Pinch: He,
            Rotate: Be,
            Press: ze,
            on: x,
            off: T,
            each: y,
            merge: w,
            extend: v,
            assign: l,
            inherit: b,
            bindFn: S,
            prefixed: D
          }),
          ((void 0 !== s
            ? s
            : "undefined" != typeof self
            ? self
            : {}
          ).Hammer = We),
          (r = function() {
            return We;
          }.call(t, n, t, e)) === a || (e.exports = r);
      })(window, document);
    },
    zUnb: function(e, t, n) {
      "use strict";
      function r(e) {
        return "function" == typeof e;
      }
      n.r(t), n("yLV6");
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        }
      };
      function o(e) {
        setTimeout(() => {
          throw e;
        });
      }
      const a = {
          closed: !0,
          next(e) {},
          error(e) {
            if (i.useDeprecatedSynchronousErrorHandling) throw e;
            o(e);
          },
          complete() {}
        },
        l = Array.isArray || (e => e && "number" == typeof e.length);
      function c(e) {
        return null !== e && "object" == typeof e;
      }
      function u(e) {
        return (
          Error.call(this),
          (this.message = e
            ? `${e.length} errors occurred during unsubscription:\n${e
                .map((e, t) => `${t + 1}) ${e.toString()}`)
                .join("\n  ")}`
            : ""),
          (this.name = "UnsubscriptionError"),
          (this.errors = e),
          this
        );
      }
      u.prototype = Object.create(Error.prototype);
      const h = u,
        d = (() => {
          class e {
            constructor(e) {
              (this.closed = !1),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null),
                e && (this._unsubscribe = e);
            }
            unsubscribe() {
              let e,
                t = !1;
              if (this.closed) return;
              let {
                _parent: n,
                _parents: s,
                _unsubscribe: i,
                _subscriptions: o
              } = this;
              (this.closed = !0),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null);
              let a = -1,
                u = s ? s.length : 0;
              for (; n; ) n.remove(this), (n = (++a < u && s[a]) || null);
              if (r(i))
                try {
                  i.call(this);
                } catch (d) {
                  (t = !0), (e = d instanceof h ? p(d.errors) : [d]);
                }
              if (l(o))
                for (a = -1, u = o.length; ++a < u; ) {
                  const n = o[a];
                  if (c(n))
                    try {
                      n.unsubscribe();
                    } catch (d) {
                      (t = !0),
                        (e = e || []),
                        d instanceof h
                          ? (e = e.concat(p(d.errors)))
                          : e.push(d);
                    }
                }
              if (t) throw new h(e);
            }
            add(t) {
              let n = t;
              switch (typeof t) {
                case "function":
                  n = new e(t);
                case "object":
                  if (
                    n === this ||
                    n.closed ||
                    "function" != typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof e)) {
                    const t = n;
                    (n = new e())._subscriptions = [t];
                  }
                  break;
                default:
                  if (!t) return e.EMPTY;
                  throw new Error(
                    "unrecognized teardown " + t + " added to Subscription."
                  );
              }
              if (n._addParent(this)) {
                const e = this._subscriptions;
                e ? e.push(n) : (this._subscriptions = [n]);
              }
              return n;
            }
            remove(e) {
              const t = this._subscriptions;
              if (t) {
                const n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }
            }
            _addParent(e) {
              let { _parent: t, _parents: n } = this;
              return (
                t !== e &&
                (t
                  ? n
                    ? -1 === n.indexOf(e) && (n.push(e), !0)
                    : ((this._parents = [e]), !0)
                  : ((this._parent = e), !0))
              );
            }
          }
          return (
            (e.EMPTY = (function(e) {
              return (e.closed = !0), e;
            })(new e())),
            e
          );
        })();
      function p(e) {
        return e.reduce((e, t) => e.concat(t instanceof h ? t.errors : t), []);
      }
      const f =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      class m extends d {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!e) {
                this.destination = a;
                break;
              }
              if ("object" == typeof e) {
                e instanceof m
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, e, t, n));
          }
        }
        [f]() {
          return this;
        }
        static create(e, t, n) {
          const r = new m(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: e, _parents: t } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = e),
            (this._parents = t),
            this
          );
        }
      }
      class g extends m {
        constructor(e, t, n, s) {
          let i;
          super(), (this._parentSubscriber = e);
          let o = this;
          r(t)
            ? (i = t)
            : t &&
              ((i = t.next),
              (n = t.error),
              (s = t.complete),
              t !== a &&
                (r((o = Object.create(t)).unsubscribe) &&
                  this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : o(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              o(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            t.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const y =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function _() {}
      function v(...e) {
        return w(e);
      }
      function w(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function(t) {
                return e.reduce((e, t) => t(e), t);
              }
          : _;
      }
      const b = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this,
              s = (function(e, t, n) {
                if (e) {
                  if (e instanceof m) return e;
                  if (e[f]) return e[f]();
                }
                return e || t || n ? new m(e, t, n) : new m(a);
              })(e, t, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function(e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) return !1;
                    e = n && n instanceof m ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = S(t))((t, n) => {
              let r;
              r = this.subscribe(
                t => {
                  try {
                    e(t);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [y]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length ? this : w(e)(this);
          }
          toPromise(e) {
            return new (e = S(e))((e, t) => {
              let n;
              this.subscribe(e => (n = e), e => t(e), () => e(n));
            });
          }
        }
        return (e.create = t => new e(t)), e;
      })();
      function S(e) {
        if ((e || (e = i.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      function E() {
        return (
          Error.call(this),
          (this.message = "object unsubscribed"),
          (this.name = "ObjectUnsubscribedError"),
          this
        );
      }
      E.prototype = Object.create(Error.prototype);
      const C = E;
      class x extends d {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class T extends m {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      const k = (() => {
        class e extends b {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [f]() {
            return new T(this);
          }
          lift(e) {
            const t = new I(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new C();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let s = 0; s < n; s++) r[s].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new C();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let s = 0; s < n; s++) r[s].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new C();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new C();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new C();
            return this.hasError
              ? (e.error(this.thrownError), d.EMPTY)
              : this.isStopped
              ? (e.complete(), d.EMPTY)
              : (this.observers.push(e), new x(this, e));
          }
          asObservable() {
            const e = new b();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new I(e, t)), e;
      })();
      class I extends k {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : d.EMPTY;
        }
      }
      function A(e) {
        return e && "function" == typeof e.schedule;
      }
      class N extends m {
        constructor(e, t, n) {
          super(),
            (this.parent = e),
            (this.outerValue = t),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(
            this.outerValue,
            e,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const R = e => t => {
          for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.closed || t.complete();
        },
        P = e => t => (
          e
            .then(
              e => {
                t.closed || (t.next(e), t.complete());
              },
              e => t.error(e)
            )
            .then(null, o),
          t
        );
      function D() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const O = D(),
        M = e => t => {
          const n = e[O]();
          for (;;) {
            const e = n.next();
            if (e.done) {
              t.complete();
              break;
            }
            if ((t.next(e.value), t.closed)) break;
          }
          return (
            "function" == typeof n.return &&
              t.add(() => {
                n.return && n.return();
              }),
            t
          );
        },
        F = e => t => {
          const n = e[y]();
          if ("function" != typeof n.subscribe)
            throw new TypeError(
              "Provided object does not correctly implement Symbol.observable"
            );
          return n.subscribe(t);
        },
        L = e => e && "number" == typeof e.length && "function" != typeof e;
      function j(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      const U = e => {
        if (e instanceof b)
          return t =>
            e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
        if (e && "function" == typeof e[y]) return F(e);
        if (L(e)) return R(e);
        if (j(e)) return P(e);
        if (e && "function" == typeof e[O]) return M(e);
        {
          const t = c(e) ? "an invalid object" : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected.` +
              " You can provide an Observable, Promise, Array, or Iterable."
          );
        }
      };
      function V(e, t, n, r, s = new N(e, n, r)) {
        if (!s.closed) return U(t)(s);
      }
      class $ extends m {
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      function H(e, t) {
        return function(n) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new z(e, t));
        };
      }
      class z {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new B(e, this.project, this.thisArg));
        }
      }
      class B extends m {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function q(e, t) {
        return new b(
          t
            ? n => {
                const r = new d();
                let s = 0;
                return (
                  r.add(
                    t.schedule(function() {
                      s !== e.length
                        ? (n.next(e[s++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : R(e)
        );
      }
      function Q(e, t) {
        if (!t) return e instanceof b ? e : new b(U(e));
        if (null != e) {
          if (
            (function(e) {
              return e && "function" == typeof e[y];
            })(e)
          )
            return (function(e, t) {
              return new b(
                t
                  ? n => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() => {
                            const s = e[y]();
                            r.add(
                              s.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : F(e)
              );
            })(e, t);
          if (j(e))
            return (function(e, t) {
              return new b(
                t
                  ? n => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              e => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e),
                                      r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              e => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    }
                  : P(e)
              );
            })(e, t);
          if (L(e)) return q(e, t);
          if (
            (function(e) {
              return e && "function" == typeof e[O];
            })(e) ||
            "string" == typeof e
          )
            return (function(e, t) {
              if (!e) throw new Error("Iterable cannot be null");
              return new b(
                t
                  ? n => {
                      const r = new d();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (s = e[O]()),
                              r.add(
                                t.schedule(function() {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const i = s.next();
                                    (e = i.value), (t = i.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t
                                    ? n.complete()
                                    : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    }
                  : M(e)
              );
            })(e, t);
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + " is not observable"
        );
      }
      function W(e, t, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof t
          ? r =>
              r.pipe(
                W((n, r) => Q(e(n, r)).pipe(H((e, s) => t(n, e, r, s))), n)
              )
          : ("number" == typeof t && (n = t), t => t.lift(new K(e, n)));
      }
      class K {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new Z(e, this.project, this.concurrent));
        }
      }
      class Z extends $ {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = new N(this, void 0, void 0);
          this.destination.add(r), V(this, e, t, n, r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function G(e) {
        return e;
      }
      function Y(e = Number.POSITIVE_INFINITY) {
        return W(G, e);
      }
      function X(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          r = e[e.length - 1];
        return (
          A(r)
            ? ((n = e.pop()),
              e.length > 1 &&
                "number" == typeof e[e.length - 1] &&
                (t = e.pop()))
            : "number" == typeof r && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof b
            ? e[0]
            : Y(t)(q(e, n))
        );
      }
      function J() {
        return function(e) {
          return e.lift(new ee(e));
        };
      }
      class ee {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new te(e, n),
            s = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class te extends m {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      const ne = class extends b {
          constructor(e, t) {
            super(),
              (this.source = e),
              (this.subjectFactory = t),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(e) {
            return this.getSubject().subscribe(e);
          }
          getSubject() {
            const e = this._subject;
            return (
              (e && !e.isStopped) || (this._subject = this.subjectFactory()),
              this._subject
            );
          }
          connect() {
            let e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new d()).add(
                  this.source.subscribe(new se(this.getSubject(), this))
                ),
                e.closed
                  ? ((this._connection = null), (e = d.EMPTY))
                  : (this._connection = e)),
              e
            );
          }
          refCount() {
            return J()(this);
          }
        }.prototype,
        re = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ne._subscribe },
          _isComplete: { value: ne._isComplete, writable: !0 },
          getSubject: { value: ne.getSubject },
          connect: { value: ne.connect },
          refCount: { value: ne.refCount }
        };
      class se extends T {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function ie(e, t) {
        return function(n) {
          let r;
          if (
            ((r =
              "function" == typeof e
                ? e
                : function() {
                    return e;
                  }),
            "function" == typeof t)
          )
            return n.lift(new oe(r, t));
          const s = Object.create(n, re);
          return (s.source = n), (s.subjectFactory = r), s;
        };
      }
      class oe {
        constructor(e, t) {
          (this.subjectFactory = e), (this.selector = t);
        }
        call(e, t) {
          const { selector: n } = this,
            r = this.subjectFactory(),
            s = n(r).subscribe(e);
          return s.add(t.subscribe(r)), s;
        }
      }
      function ae() {
        return new k();
      }
      const le = "__parameters__";
      function ce(e, t, n) {
        const r = (function(e) {
          return function(...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        })(t);
        function s(...e) {
          if (this instanceof s) return r.apply(this, e), this;
          const t = new s(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const s = e.hasOwnProperty(le)
              ? e[le]
              : Object.defineProperty(e, le, { value: [] })[le];
            for (; s.length <= r; ) s.push(null);
            return (s[r] = s[r] || []).push(t), e;
          }
        }
        return (
          n && (s.prototype = Object.create(n.prototype)),
          (s.prototype.ngMetadataName = e),
          (s.annotationCls = s),
          s
        );
      }
      const ue = ce("Inject", e => ({ token: e })),
        he = ce("Optional"),
        de = ce("Self"),
        pe = ce("SkipSelf");
      var fe = (function(e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })({});
      function me(e) {
        for (let t in e) if (e[t] === me) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function ge(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0
        };
      }
      function ye(e) {
        const t = e[_e];
        return t && t.token === e ? t : null;
      }
      const _e = me({ ngInjectableDef: me });
      function ve(e) {
        if ("string" == typeof e) return e;
        if (e instanceof Array) return "[" + e.map(ve).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      const we = me({ __forward_ref__: me });
      function be(e) {
        return (
          (e.__forward_ref__ = be),
          (e.toString = function() {
            return ve(this());
          }),
          e
        );
      }
      function Se(e) {
        const t = e;
        return "function" == typeof t &&
          t.hasOwnProperty(we) &&
          t.__forward_ref__ === be
          ? t()
          : e;
      }
      const Ee = "undefined" != typeof globalThis && globalThis,
        Ce = "undefined" != typeof window && window,
        xe =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Te = "undefined" != typeof global && global,
        ke = Ee || Te || Ce || xe;
      class Ie {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = "InjectionToken"),
            (this.ngInjectableDef = void 0),
            "number" == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ngInjectableDef = ge({
                  token: this,
                  providedIn: t.providedIn || "root",
                  factory: t.factory
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Ae = new Ie("INJECTOR", -1),
        Ne = new Object(),
        Re = "ngTempTokenPath",
        Pe = "ngTokenPath",
        De = /\n/gm,
        Oe = "\u0275",
        Me = "__source",
        Fe = me({ provide: String, useValue: me });
      let Le,
        je = void 0;
      function Ue(e) {
        const t = je;
        return (je = e), t;
      }
      function Ve(e, t = fe.Default) {
        return (Le ||
          function(e, t = fe.Default) {
            if (void 0 === je)
              throw new Error(
                "inject() must be called from an injection context"
              );
            return null === je
              ? (function(e, t, n) {
                  const r = ye(e);
                  if (r && "root" == r.providedIn)
                    return void 0 === r.value
                      ? (r.value = r.factory())
                      : r.value;
                  if (n & fe.Optional) return null;
                  throw new Error(`Injector: NOT_FOUND [${ve(e)}]`);
                })(e, 0, t)
              : je.get(e, t & fe.Optional ? null : void 0, t);
          })(e, t);
      }
      class $e {
        get(e, t = Ne) {
          if (t === Ne) {
            const t = new Error(`NullInjectorError: No provider for ${ve(e)}!`);
            throw ((t.name = "NullInjectorError"), t);
          }
          return t;
        }
      }
      function He(e, t, n, r = null) {
        e = e && "\n" === e.charAt(0) && e.charAt(1) == Oe ? e.substr(2) : e;
        let s = ve(t);
        if (t instanceof Array) s = t.map(ve).join(" -> ");
        else if ("object" == typeof t) {
          let e = [];
          for (let n in t)
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(
                n + ":" + ("string" == typeof r ? JSON.stringify(r) : ve(r))
              );
            }
          s = `{${e.join(", ")}}`;
        }
        return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${e.replace(De, "\n  ")}`;
      }
      const ze = new Ie(
          "The presence of this token marks an injector as being the root injector."
        ),
        Be = function(e, t, n) {
          return new Ye(e, t, n);
        },
        qe = (() => {
          class e {
            static create(e, t) {
              return Array.isArray(e)
                ? Be(e, t, "")
                : Be(e.providers, e.parent, e.name || "");
            }
          }
          return (
            (e.THROW_IF_NOT_FOUND = Ne),
            (e.NULL = new $e()),
            (e.ngInjectableDef = ge({
              token: e,
              providedIn: "any",
              factory: () => Ve(Ae)
            })),
            (e.__NG_ELEMENT_ID__ = -1),
            e
          );
        })(),
        Qe = function(e) {
          return e;
        },
        We = [],
        Ke = Qe,
        Ze = function() {
          return Array.prototype.slice.call(arguments);
        },
        Ge = "\u0275";
      class Ye {
        constructor(e, t = qe.NULL, n = null) {
          (this.parent = t), (this.source = n);
          const r = (this._records = new Map());
          r.set(qe, { token: qe, fn: Qe, deps: We, value: this, useNew: !1 }),
            r.set(Ae, { token: Ae, fn: Qe, deps: We, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = Se(n)) instanceof Array)
                  for (let r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ("function" == typeof n)
                    throw Je("Function/Class not supported", n);
                  if (!n || "object" != typeof n || !n.provide)
                    throw Je("Unexpected provider", n);
                  {
                    let e = Se(n.provide);
                    const r = (function(e) {
                      const t = (function(e) {
                        let t = We;
                        const n = e.deps;
                        if (n && n.length) {
                          t = [];
                          for (let e = 0; e < n.length; e++) {
                            let r = 6,
                              s = Se(n[e]);
                            if (s instanceof Array)
                              for (let e = 0, t = s; e < t.length; e++) {
                                const n = t[e];
                                n instanceof he || n == he
                                  ? (r |= 1)
                                  : n instanceof pe || n == pe
                                  ? (r &= -3)
                                  : n instanceof de || n == de
                                  ? (r &= -5)
                                  : (s = n instanceof ue ? n.token : Se(n));
                              }
                            t.push({ token: s, options: r });
                          }
                        } else if (e.useExisting)
                          t = [{ token: Se(e.useExisting), options: 6 }];
                        else if (!(n || Fe in e))
                          throw Je("'deps' required", e);
                        return t;
                      })(e);
                      let n = Qe,
                        r = We,
                        s = !1,
                        i = Se(e.provide);
                      if (Fe in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (s = !0), (n = Se(e.useClass));
                      else {
                        if ("function" != typeof i)
                          throw Je(
                            "StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",
                            e
                          );
                        (s = !0), (n = i);
                      }
                      return { deps: t, fn: n, useNew: s, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = t.get(e);
                      if (r) {
                        if (r.fn !== Ze) throw Xe(e);
                      } else
                        t.set(
                          e,
                          (r = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: Ze,
                            value: We
                          })
                        );
                      r.deps.push({ token: (e = n), options: 6 });
                    }
                    const s = t.get(e);
                    if (s && s.fn == Ze) throw Xe(e);
                    t.set(e, r);
                  }
                }
            })(r, e);
        }
        get(e, t, n = fe.Default) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, s, i, o) {
              try {
                return (function(t, n, r, s, i, o) {
                  let a;
                  if (!n || o & fe.SkipSelf)
                    o & fe.Self || (a = s.get(t, i, fe.Default));
                  else {
                    if ((a = n.value) == Ke)
                      throw Error(Ge + "Circular dependency");
                    if (a === We) {
                      n.value = Ke;
                      let t = void 0,
                        i = n.useNew,
                        o = n.fn,
                        l = n.deps,
                        c = We;
                      if (l.length) {
                        c = [];
                        for (let t = 0; t < l.length; t++) {
                          const n = l[t],
                            i = n.options,
                            o = 2 & i ? r.get(n.token) : void 0;
                          c.push(
                            e(
                              n.token,
                              o,
                              r,
                              o || 4 & i ? s : qe.NULL,
                              1 & i ? null : qe.THROW_IF_NOT_FOUND,
                              fe.Default
                            )
                          );
                        }
                      }
                      n.value = a = i ? new o(...c) : o.apply(t, c);
                    }
                  }
                  return a;
                })(t, n, r, s, i, o);
              } catch (a) {
                throw (a instanceof Error || (a = new Error(a)),
                (a[Re] = a[Re] || []).unshift(t),
                n && n.value == Ke && (n.value = We),
                a);
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (s) {
            return (function(e, t, n, r) {
              const s = e[Re];
              throw (t[Me] && s.unshift(t[Me]),
              (e.message = He("\n" + e.message, s, "StaticInjectorError", r)),
              (e[Pe] = s),
              (e[Re] = null),
              e);
            })(s, e, 0, this.source);
          }
        }
        toString() {
          const e = [];
          return (
            this._records.forEach((t, n) => e.push(ve(n))),
            `StaticInjector[${e.join(", ")}]`
          );
        }
      }
      function Xe(e) {
        return Je("Cannot mix multi providers and regular providers", e);
      }
      function Je(e, t) {
        return new Error(He(e, t, "StaticInjectorError"));
      }
      const et = "ngDebugContext",
        tt = "ngOriginalError",
        nt = "ngErrorLogger",
        rt = new Ie("AnalyzeForEntryComponents"),
        st = (function() {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = "Emulated"),
            (e[e.Native] = "Native"),
            (e[e.None] = "None"),
            (e[e.ShadowDom] = "ShadowDom"),
            e
          );
        })(),
        it = (() =>
          (
            ("undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            setTimeout
          ).bind(ke))();
      let ot = !0,
        at = !1;
      function lt() {
        return (at = !0), ot;
      }
      class ct {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              "sanitization-inert"
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const e = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(e),
              (this.inertBodyElement = this.inertDocument.createElement(
                "body"
              )),
              e.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector("svg")
              ? ((this.inertBodyElement.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector("svg img") &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(e) {
          e = "<body><remove></remove>" + e + "</body>";
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = "document"),
            t.open("GET", "data:text/html;charset=utf-8," + e, !1),
            t.send(void 0);
          const n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(e) {
          e = "<body><remove></remove>" + e + "</body>";
          try {
            const n = new window.DOMParser().parseFromString(e, "text/html")
              .body;
            return n.removeChild(n.firstChild), n;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement("template");
          return "content" in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode &&
                this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            ("xmlns:ns1" !== n && 0 !== n.indexOf("ns1:")) ||
              e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const ut = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        ht = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function dt(e) {
        return (e = String(e)).match(ut) || e.match(ht)
          ? e
          : (lt() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
              ),
            "unsafe:" + e);
      }
      function pt(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function ft(...e) {
        const t = {};
        for (const n of e)
          for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const mt = pt("area,br,col,hr,img,wbr"),
        gt = pt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        yt = pt("rp,rt"),
        _t = ft(yt, gt),
        vt = ft(
          mt,
          ft(
            gt,
            pt(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          ft(
            yt,
            pt(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          _t
        ),
        wt = pt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        bt = pt("srcset"),
        St = ft(
          wt,
          bt,
          pt(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          pt(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        Et = pt("script,style,template");
      class Ct {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild,
            n = !0;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              n && t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join("");
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!vt.hasOwnProperty(t))
            return (this.sanitizedSomething = !0), !Et.hasOwnProperty(t);
          this.buf.push("<"), this.buf.push(t);
          const n = e.attributes;
          for (let s = 0; s < n.length; s++) {
            const e = n.item(s),
              t = e.name,
              i = t.toLowerCase();
            if (!St.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = e.value;
            wt[i] && (o = dt(o)),
              bt[i] &&
                ((r = o),
                (o = (r = String(r))
                  .split(",")
                  .map(e => dt(e.trim()))
                  .join(", "))),
              this.buf.push(" ", t, '="', kt(o), '"');
          }
          var r;
          return this.buf.push(">"), !0;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          vt.hasOwnProperty(t) &&
            !mt.hasOwnProperty(t) &&
            (this.buf.push("</"), this.buf.push(t), this.buf.push(">"));
        }
        chars(e) {
          this.buf.push(kt(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`
            );
          return t;
        }
      }
      const xt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Tt = /([^\#-~ |!])/g;
      function kt(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(xt, function(e) {
            return (
              "&#" +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(Tt, function(e) {
            return "&#" + e.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let It;
      function At(e) {
        return "content" in e &&
          (function(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      const Nt = (function() {
        var e = {
          NONE: 0,
          HTML: 1,
          STYLE: 2,
          SCRIPT: 3,
          URL: 4,
          RESOURCE_URL: 5
        };
        return (
          (e[e.NONE] = "NONE"),
          (e[e.HTML] = "HTML"),
          (e[e.STYLE] = "STYLE"),
          (e[e.SCRIPT] = "SCRIPT"),
          (e[e.URL] = "URL"),
          (e[e.RESOURCE_URL] = "RESOURCE_URL"),
          e
        );
      })();
      class Rt {}
      const Pt = new RegExp(
          "^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$",
          "g"
        ),
        Dt = /^url\(([^)]+)\)$/;
      function Ot(e) {
        return e[et];
      }
      function Mt(e) {
        return e[tt];
      }
      function Ft(e, ...t) {
        e.error(...t);
      }
      class Lt {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function(e) {
              return e[nt] || Ft;
            })(e);
          r(this._console, "ERROR", e),
            t && r(this._console, "ORIGINAL ERROR", t),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(e) {
          return e ? (Ot(e) ? Ot(e) : this._findContext(Mt(e))) : null;
        }
        _findOriginalError(e) {
          let t = Mt(e);
          for (; t && Mt(t); ) t = Mt(t);
          return t;
        }
      }
      const jt = /([A-Z])/g;
      function Ut(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return "[ERROR] Exception while trying to serialize the value";
        }
      }
      let Vt = null;
      function $t() {
        if (!Vt) {
          const e = ke.Symbol;
          if (e && e.iterator) Vt = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Vt = n);
            }
          }
        }
        return Vt;
      }
      function Ht(e, t) {
        return (
          e === t ||
          ("number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t))
        );
      }
      function zt(e, t) {
        const n = qt(e),
          r = qt(t);
        if (n && r)
          return (function(e, t, n) {
            const r = e[$t()](),
              s = t[$t()]();
            for (;;) {
              const e = r.next(),
                t = s.next();
              if (e.done && t.done) return !0;
              if (e.done || t.done) return !1;
              if (!n(e.value, t.value)) return !1;
            }
          })(e, t, zt);
        {
          const s = e && ("object" == typeof e || "function" == typeof e),
            i = t && ("object" == typeof t || "function" == typeof t);
          return !(n || !s || r || !i) || Ht(e, t);
        }
      }
      class Bt {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new Bt(e);
        }
        static unwrap(e) {
          return Bt.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof Bt;
        }
      }
      function qt(e) {
        return (
          !!Qt(e) && (Array.isArray(e) || (!(e instanceof Map) && $t() in e))
        );
      }
      function Qt(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Wt(e) {
        return !!e && "function" == typeof e.then;
      }
      function Kt(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      class Zt {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class Gt {}
      class Yt {}
      function Xt(e) {
        const t = Error(
          `No component factory found for ${ve(
            e
          )}. Did you add it to @NgModule.entryComponents?`
        );
        return (t[Jt] = e), t;
      }
      const Jt = "ngComponent";
      class en {
        resolveComponentFactory(e) {
          throw Xt(e);
        }
      }
      const tn = (() => {
        class e {}
        return (e.NULL = new en()), e;
      })();
      class nn {
        constructor(e, t, n) {
          (this._parent = t),
            (this._ngModule = n),
            (this._factories = new Map());
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if (
            (!t &&
              this._parent &&
              (t = this._parent.resolveComponentFactory(e)),
            !t)
          )
            throw Xt(e);
          return new rn(t, this._ngModule);
        }
      }
      class rn extends Yt {
        constructor(e, t) {
          super(),
            (this.factory = e),
            (this.ngModule = t),
            (this.selector = e.selector),
            (this.componentType = e.componentType),
            (this.ngContentSelectors = e.ngContentSelectors),
            (this.inputs = e.inputs),
            (this.outputs = e.outputs);
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      class sn {}
      class on {}
      function an(...e) {}
      const ln = (() => {
          class e {
            constructor(e) {
              this.nativeElement = e;
            }
          }
          return (e.__NG_ELEMENT_ID__ = () => cn(e)), e;
        })(),
        cn = an;
      class un {}
      class hn {}
      const dn = (function() {
          var e = { Important: 1, DashCase: 2 };
          return (
            (e[e.Important] = "Important"), (e[e.DashCase] = "DashCase"), e
          );
        })(),
        pn = (() => {
          class e {}
          return (e.__NG_ELEMENT_ID__ = () => fn()), e;
        })(),
        fn = an;
      class mn {
        constructor(e) {
          (this.full = e),
            (this.major = e.split(".")[0]),
            (this.minor = e.split(".")[1]),
            (this.patch = e
              .split(".")
              .slice(2)
              .join("."));
        }
      }
      const gn = new mn("8.1.0");
      class yn {
        constructor() {}
        supports(e) {
          return qt(e);
        }
        create(e) {
          return new vn(e);
        }
      }
      const _n = (e, t) => t;
      class vn {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || _n);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; t || n; ) {
            const i = !n || (t && t.currentIndex < En(n, r, s)) ? t : n,
              o = En(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const e = o - r,
                t = a - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  t <= i && i < e && (s[n] = r + 1);
                }
                s[i.previousIndex] = t - e;
              }
            }
            o !== a && e(i, o, a);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !qt(e)))
            throw new Error(
              `Error trying to diff '${ve(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (r = this._trackByFn(t, (n = e[t]))),
                null !== s && Ht(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, t)),
                    Ht(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, t)), (i = !0)),
                (s = s._next);
          } else
            (t = 0),
              (function(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[$t()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, e => {
                (r = this._trackByFn(t, e)),
                  null !== s && Ht(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, e, r, t)),
                      Ht(s.item, e) || this._addIdentityChange(s, e))
                    : ((s = this._mismatch(s, e, r, t)), (i = !0)),
                  (s = s._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(s), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e, t;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
              e.previousIndex = e.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                e = this._movesHead;
              null !== e;
              e = t
            )
              (e.previousIndex = e.currentIndex), (t = e._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          return (
            null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Ht(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, s, r))
              : null !==
                (e =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Ht(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, s, r))
              : (e = this._addAfter(new wn(t, n), s, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (e = this._reinsertAfter(s, e._prev, r))
              : e.currentIndex != r &&
                ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            s = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new Sn()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return e.previousIndex === t
            ? e
            : ((this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
              e);
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Sn()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class wn {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class bn {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === t || t <= n.currentIndex) && Ht(n.trackById, e))
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class Sn {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new bn()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function En(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class Cn {
        constructor() {}
        supports(e) {
          return e instanceof Map || Qt(e);
        }
        create() {
          return new xn();
        }
      }
      class xn {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || Qt(e)))
              throw new Error(
                `Error trying to diff '${ve(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Tn(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Ht(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach(n => t(e[n], n));
        }
      }
      class Tn {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      const kn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return e.create(t, n);
                },
                deps: [[e, new pe(), new he()]]
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${((n = e),
                n.name || typeof n)}'`
              );
              var n;
            }
          }
          return (
            (e.ngInjectableDef = ge({
              token: e,
              providedIn: "root",
              factory: () => new e([new yn()])
            })),
            e
          );
        })(),
        In = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return e.create(t, n);
                },
                deps: [[e, new pe(), new he()]]
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (
            (e.ngInjectableDef = ge({
              token: e,
              providedIn: "root",
              factory: () => new e([new Cn()])
            })),
            e
          );
        })(),
        An = (() => {
          class e {}
          return (e.__NG_ELEMENT_ID__ = () => Nn()), e;
        })(),
        Nn = (...e) => {},
        Rn = [new Cn()],
        Pn = new kn([new yn()]),
        Dn = new In(Rn),
        On = (() => {
          class e {}
          return (e.__NG_ELEMENT_ID__ = () => Mn(e, ln)), e;
        })(),
        Mn = an,
        Fn = (() => {
          class e {}
          return (e.__NG_ELEMENT_ID__ = () => Ln(e, ln)), e;
        })(),
        Ln = an;
      function jn(e, t, n, r) {
        let s = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        return (
          r &&
            (s +=
              " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
          (function(e, t) {
            const n = new Error(e);
            return Un(n, t), n;
          })(s, e)
        );
      }
      function Un(e, t) {
        (e[et] = t), (e[nt] = t.logError.bind(t));
      }
      function Vn(e) {
        return new Error(
          `ViewDestroyedError: Attempt to use a destroyed view: ${e}`
        );
      }
      function $n(e, t, n) {
        const r = e.state,
          s = 1792 & r;
        return s === t
          ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
          : s === n;
      }
      function Hn(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), !0)
        );
      }
      function zn(e, t) {
        return e.nodes[t];
      }
      function Bn(e, t) {
        return e.nodes[t];
      }
      function qn(e, t) {
        return e.nodes[t];
      }
      function Qn(e, t) {
        return e.nodes[t];
      }
      function Wn(e, t) {
        return e.nodes[t];
      }
      const Kn = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0
        },
        Zn = () => {},
        Gn = new Map();
      function Yn(e) {
        let t = Gn.get(e);
        return t || ((t = ve(e) + "_" + Gn.size), Gn.set(e, t)), t;
      }
      const Xn = "$$undefined",
        Jn = "$$empty";
      function er(e) {
        return {
          id: Xn,
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data
        };
      }
      let tr = 0;
      function nr(e, t, n, r) {
        return !(!(2 & e.state) && Ht(e.oldValues[t.bindingIndex + n], r));
      }
      function rr(e, t, n, r) {
        return !!nr(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function sr(e, t, n, r) {
        const s = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !zt(s, r)) {
          const i = t.bindings[n].name;
          throw jn(
            Kn.createDebugContext(e, t.nodeIndex),
            `${i}: ${s}`,
            `${i}: ${r}`,
            0 != (1 & e.state)
          );
        }
      }
      function ir(e) {
        let t = e;
        for (; t; )
          2 & t.def.flags && (t.state |= 8),
            (t = t.viewContainerParent || t.parent);
      }
      function or(e, t) {
        let n = e;
        for (; n && n !== t; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function ar(e, t, n, r) {
        try {
          return (
            ir(33554432 & e.def.nodes[t].flags ? Bn(e, t).componentView : e),
            Kn.handleEvent(e, t, n, r)
          );
        } catch (s) {
          e.root.errorHandler.handleError(s);
        }
      }
      function lr(e) {
        return e.parent ? Bn(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function cr(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function ur(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Bn(e, t.nodeIndex).renderElement;
          case 2:
            return zn(e, t.nodeIndex).renderText;
        }
      }
      function hr(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function dr(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function pr(e) {
        return 1 << e % 32;
      }
      function fr(e) {
        const t = {};
        let n = 0;
        const r = {};
        return (
          e &&
            e.forEach(([e, s]) => {
              "number" == typeof e ? ((t[e] = s), (n |= pr(e))) : (r[e] = s);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function mr(e, t) {
        return e.map(e => {
          let n, r;
          return (
            Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
            n &&
              ("function" == typeof n || "object" == typeof n) &&
              t &&
              Object.defineProperty(n, Me, { value: t, configurable: !0 }),
            { flags: r, token: n, tokenKey: Yn(n) }
          );
        });
      }
      function gr(e, t, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === st.Native)
            ? Bn(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const yr = new WeakMap();
      function _r(e) {
        let t = yr.get(e);
        return t || (((t = e(() => Zn)).factory = e), yr.set(e, t)), t;
      }
      function vr(e, t, n, r, s) {
        3 === t && (n = e.renderer.parentNode(ur(e, e.def.lastRenderRootNode))),
          wr(e, t, 0, e.def.nodes.length - 1, n, r, s);
      }
      function wr(e, t, n, r, s, i, o) {
        for (let a = n; a <= r; a++) {
          const n = e.def.nodes[a];
          11 & n.flags && Sr(e, n, t, s, i, o), (a += n.childCount);
        }
      }
      function br(e, t, n, r, s, i) {
        let o = e;
        for (; o && !hr(o); ) o = o.parent;
        const a = o.parent,
          l = cr(o),
          c = l.nodeIndex + l.childCount;
        for (let u = l.nodeIndex + 1; u <= c; u++) {
          const e = a.def.nodes[u];
          e.ngContentIndex === t && Sr(a, e, n, r, s, i), (u += e.childCount);
        }
        if (!a.parent) {
          const o = e.root.projectableNodes[t];
          if (o) for (let t = 0; t < o.length; t++) Er(e, o[t], n, r, s, i);
        }
      }
      function Sr(e, t, n, r, s, i) {
        if (8 & t.flags) br(e, t.ngContent.index, n, r, s, i);
        else {
          const o = ur(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && Er(e, o, n, r, s, i),
                32 & t.bindingFlags &&
                  Er(Bn(e, t.nodeIndex).componentView, o, n, r, s, i))
              : Er(e, o, n, r, s, i),
            16777216 & t.flags)
          ) {
            const o = Bn(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < o.length; e++) vr(o[e], n, r, s, i);
          }
          1 & t.flags &&
            !t.element.name &&
            wr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, s, i);
        }
      }
      function Er(e, t, n, r, s, i) {
        const o = e.renderer;
        switch (n) {
          case 1:
            o.appendChild(r, t);
            break;
          case 2:
            o.insertBefore(r, t, s);
            break;
          case 3:
            o.removeChild(r, t);
            break;
          case 0:
            i.push(t);
        }
      }
      const Cr = /^:([^:]+):(.+)$/;
      function xr(e) {
        if (":" === e[0]) {
          const t = e.match(Cr);
          return [t[1], t[2]];
        }
        return ["", e];
      }
      function Tr(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      const kr = new Object(),
        Ir = Yn(qe),
        Ar = Yn(Ae),
        Nr = Yn(sn);
      function Rr(e, t, n, r) {
        return (
          (n = Se(n)),
          { index: -1, deps: mr(r, ve(t)), flags: e, token: t, value: n }
        );
      }
      function Pr(e, t, n = qe.THROW_IF_NOT_FOUND) {
        const r = Ue(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags))
            return e._parent.get(t.token, n);
          const o = t.tokenKey;
          switch (o) {
            case Ir:
            case Ar:
            case Nr:
              return e;
          }
          const a = e._def.providersByKey[o];
          let l;
          if (a) {
            let t = e._providers[a.index];
            return (
              void 0 === t && (t = e._providers[a.index] = Dr(e, a)),
              t === kr ? void 0 : t
            );
          }
          if (
            (l = ye(t.token)) &&
            ((s = e),
            null != (i = l).providedIn &&
              ((function(e, t) {
                return e._def.modules.indexOf(i.providedIn) > -1;
              })(s) ||
                ("root" === i.providedIn && s._def.isRoot)))
          ) {
            const n = e._providers.length;
            return (
              (e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: l.factory,
                deps: [],
                index: n,
                token: t.token
              }),
              (e._providers[n] = kr),
              (e._providers[n] = Dr(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Ue(r);
        }
        var s, i;
      }
      function Dr(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Pr(e, n[0]));
                case 2:
                  return new t(Pr(e, n[0]), Pr(e, n[1]));
                case 3:
                  return new t(Pr(e, n[0]), Pr(e, n[1]), Pr(e, n[2]));
                default:
                  const s = new Array(r);
                  for (let t = 0; t < r; t++) s[t] = Pr(e, n[t]);
                  return new t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(Pr(e, n[0]));
                case 2:
                  return t(Pr(e, n[0]), Pr(e, n[1]));
                case 3:
                  return t(Pr(e, n[0]), Pr(e, n[1]), Pr(e, n[2]));
                default:
                  const s = Array(r);
                  for (let t = 0; t < r; t++) s[t] = Pr(e, n[t]);
                  return t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Pr(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === kr ||
            null === n ||
            "object" != typeof n ||
            131072 & t.flags ||
            "function" != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? kr : n
        );
      }
      function Or(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
          return null;
        const r = n[t];
        return (
          (r.viewContainerParent = null),
          jr(n, t),
          Kn.dirtyParentQueries(r),
          Fr(r),
          r
        );
      }
      function Mr(e, t, n) {
        const r = t ? ur(t, t.def.lastRenderRootNode) : e.renderElement,
          s = n.renderer.parentNode(r),
          i = n.renderer.nextSibling(r);
        vr(n, 2, s, i, void 0);
      }
      function Fr(e) {
        vr(e, 3, null, null, void 0);
      }
      function Lr(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function jr(e, t) {
        t >= e.length - 1 ? e.pop() : e.splice(t, 1);
      }
      const Ur = new Object();
      function Vr(e, t, n, r, s, i) {
        return new $r(e, t, n, r, s, i);
      }
      class $r extends Yt {
        constructor(e, t, n, r, s, i) {
          super(),
            (this.selector = e),
            (this.componentType = t),
            (this._inputs = r),
            (this._outputs = s),
            (this.ngContentSelectors = i),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const e = [],
            t = this._inputs;
          for (let n in t) e.push({ propName: n, templateName: t[n] });
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs)
            e.push({ propName: t, templateName: this._outputs[t] });
          return e;
        }
        create(e, t, n, r) {
          if (!r) throw new Error("ngModule should be provided");
          const s = _r(this.viewDefFactory),
            i = s.nodes[0].element.componentProvider.nodeIndex,
            o = Kn.createRootView(e, t || [], n, s, r, Ur),
            a = qn(o, i).instance;
          return (
            n &&
              o.renderer.setAttribute(
                Bn(o, 0).renderElement,
                "ng-version",
                gn.full
              ),
            new Hr(o, new Qr(o), a)
          );
        }
      }
      class Hr extends Gt {
        constructor(e, t, n) {
          super(),
            (this._view = e),
            (this._viewRef = t),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = n);
        }
        get location() {
          return new ln(Bn(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new Gr(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      function zr(e, t, n) {
        return new Br(e, t, n);
      }
      class Br {
        constructor(e, t, n) {
          (this._view = e),
            (this._elDef = t),
            (this._data = n),
            (this._embeddedViews = []);
        }
        get element() {
          return new ln(this._data.renderElement);
        }
        get injector() {
          return new Gr(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view,
            t = this._elDef.parent;
          for (; !t && e; ) (t = cr(e)), (e = e.parent);
          return e ? new Gr(e, t) : new Gr(this._view, null);
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = Or(this._data, e);
            Kn.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new Qr(t);
            return e.attachToViewContainerRef(this), e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }
        createComponent(e, t, n, r, s) {
          const i = n || this.parentInjector;
          s || e instanceof rn || (s = i.get(sn));
          const o = e.create(i, r, void 0, s);
          return this.insert(o.hostView, t), o;
        }
        insert(e, t) {
          if (e.destroyed)
            throw new Error(
              "Cannot insert a destroyed View in a ViewContainer!"
            );
          const n = e;
          return (
            (function(e, t, n, r) {
              let s = t.viewContainer._embeddedViews;
              null == n && (n = s.length),
                (r.viewContainerParent = e),
                Lr(s, n, r),
                (function(e, t) {
                  const n = lr(t);
                  if (!n || n === e || 16 & t.state) return;
                  t.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function(e, n) {
                      if (4 & n.flags) return;
                      (t.parent.def.nodeFlags |= 4), (n.flags |= 4);
                      let r = n.parent;
                      for (; r; ) (r.childFlags |= 4), (r = r.parent);
                    })(0, t.parentNodeDef);
                })(t, r),
                Kn.dirtyParentQueries(r),
                Mr(t, n > 0 ? s[n - 1] : null, r);
            })(this._view, this._data, t, n._view),
            n.attachToViewContainerRef(this),
            e
          );
        }
        move(e, t) {
          if (e.destroyed)
            throw new Error("Cannot move a destroyed View in a ViewContainer!");
          const n = this._embeddedViews.indexOf(e._view);
          return (
            (function(e, t, r) {
              const s = e.viewContainer._embeddedViews,
                i = s[n];
              jr(s, n),
                null == r && (r = s.length),
                Lr(s, r, i),
                Kn.dirtyParentQueries(i),
                Fr(i),
                Mr(e, r > 0 ? s[r - 1] : null, i);
            })(this._data, 0, t),
            e
          );
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = Or(this._data, e);
          t && Kn.destroyView(t);
        }
        detach(e) {
          const t = Or(this._data, e);
          return t ? new Qr(t) : null;
        }
      }
      function qr(e) {
        return new Qr(e);
      }
      class Qr {
        constructor(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        get rootNodes() {
          return (function(e) {
            const t = [];
            return vr(e, 0, void 0, void 0, t), t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          ir(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            Kn.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }
        checkNoChanges() {
          Kn.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(e);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            Kn.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null),
            Fr(this._view),
            Kn.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = e;
        }
      }
      function Wr(e, t) {
        return new Kr(e, t);
      }
      class Kr extends On {
        constructor(e, t) {
          super(), (this._parentView = e), (this._def = t);
        }
        createEmbeddedView(e) {
          return new Qr(
            Kn.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }
        get elementRef() {
          return new ln(
            Bn(this._parentView, this._def.nodeIndex).renderElement
          );
        }
      }
      function Zr(e, t) {
        return new Gr(e, t);
      }
      class Gr {
        constructor(e, t) {
          (this.view = e), (this.elDef = t);
        }
        get(e, t = qe.THROW_IF_NOT_FOUND) {
          return Kn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: e, tokenKey: Yn(e) },
            t
          );
        }
      }
      function Yr(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = Bn(e, n.nodeIndex);
          return n.element.template ? t.template : t.renderElement;
        }
        if (2 & n.flags) return zn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return qn(e, n.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${t}`);
      }
      function Xr(e) {
        return new Jr(e.renderer);
      }
      class Jr {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = xr(t),
            s = this.delegate.createElement(r, n);
          return e && this.delegate.appendChild(e, s), s;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment("");
          return e && this.delegate.appendChild(e, t), t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e),
            r = this.delegate.nextSibling(e);
          for (let s = 0; s < t.length; s++)
            this.delegate.insertBefore(n, t[s], r);
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, s] = xr(t);
          null != n
            ? this.delegate.setAttribute(e, s, n, r)
            : this.delegate.removeAttribute(e, s, r);
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }
        setElementStyle(e, t, n) {
          null != n
            ? this.delegate.setStyle(e, t, n)
            : this.delegate.removeStyle(e, t);
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error("Renderer.animate is no longer supported!");
        }
      }
      function es(e, t, n, r) {
        return new ts(e, t, n, r);
      }
      class ts {
        constructor(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(e) {
              const t = e._def,
                n = (e._providers = new Array(t.providers.length));
              for (let r = 0; r < t.providers.length; r++) {
                const s = t.providers[r];
                4096 & s.flags || (void 0 === n[r] && (n[r] = Dr(e, s)));
              }
            })(this);
        }
        get(e, t = qe.THROW_IF_NOT_FOUND, n = fe.Default) {
          let r = 0;
          return (
            n & fe.SkipSelf ? (r |= 1) : n & fe.Self && (r |= 4),
            Pr(this, { token: e, tokenKey: Yn(e), flags: r }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(tn);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${ve(
                this.instance.constructor
              )} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function(e, t) {
              const n = e._def,
                r = new Set();
              for (let s = 0; s < n.providers.length; s++)
                if (131072 & n.providers[s].flags) {
                  const t = e._providers[s];
                  if (t && t !== kr) {
                    const e = t.ngOnDestroy;
                    "function" != typeof e ||
                      r.has(t) ||
                      (e.apply(t), r.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach(e => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const ns = Yn(un),
        rs = Yn(pn),
        ss = Yn(ln),
        is = Yn(Fn),
        os = Yn(On),
        as = Yn(An),
        ls = Yn(qe),
        cs = Yn(Ae);
      function us(e, t, n, r, s, i, o, a) {
        const l = [];
        if (o)
          for (let u in o) {
            const [e, t] = o[u];
            l[e] = {
              flags: 8,
              name: u,
              nonMinifiedName: t,
              ns: null,
              securityContext: null,
              suffix: null
            };
          }
        const c = [];
        if (a)
          for (let u in a)
            c.push({ type: 1, propName: u, target: null, eventName: a[u] });
        return ds(e, (t |= 16384), n, r, s, s, i, l, c);
      }
      function hs(e, t, n, r, s) {
        return ds(-1, e, t, 0, n, r, s);
      }
      function ds(e, t, n, r, s, i, o, a, l) {
        const { matchedQueries: c, references: u, matchedQueryIds: h } = fr(n);
        l || (l = []), a || (a = []), (i = Se(i));
        const d = mr(o, ve(s));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: h,
          references: u,
          ngContentIndex: -1,
          childCount: r,
          bindings: a,
          bindingFlags: Tr(a),
          outputs: l,
          element: null,
          provider: { token: s, value: i, deps: d },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function ps(e, t) {
        return ys(e, t);
      }
      function fs(e, t) {
        let n = e;
        for (; n.parent && !hr(n); ) n = n.parent;
        return _s(n.parent, cr(n), !0, t.provider.value, t.provider.deps);
      }
      function ms(e, t) {
        const n = _s(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
        if (t.outputs.length)
          for (let r = 0; r < t.outputs.length; r++) {
            const s = t.outputs[r],
              i = n[s.propName];
            if (!Kt(i))
              throw new Error(
                `@Output ${s.propName} not initialized in '${n.constructor.name}'.`
              );
            {
              const n = i.subscribe(gs(e, t.parent.nodeIndex, s.eventName));
              e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function gs(e, t, n) {
        return r => ar(e, t, n, r);
      }
      function ys(e, t) {
        const n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return _s(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function(e, t, n, r, s) {
              const i = s.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(ws(e, t, n, s[0]));
                case 2:
                  return r(ws(e, t, n, s[0]), ws(e, t, n, s[1]));
                case 3:
                  return r(
                    ws(e, t, n, s[0]),
                    ws(e, t, n, s[1]),
                    ws(e, t, n, s[2])
                  );
                default:
                  const o = Array(i);
                  for (let r = 0; r < i; r++) o[r] = ws(e, t, n, s[r]);
                  return r(...o);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return ws(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function _s(e, t, n, r, s) {
        const i = s.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(ws(e, t, n, s[0]));
          case 2:
            return new r(ws(e, t, n, s[0]), ws(e, t, n, s[1]));
          case 3:
            return new r(
              ws(e, t, n, s[0]),
              ws(e, t, n, s[1]),
              ws(e, t, n, s[2])
            );
          default:
            const o = new Array(i);
            for (let r = 0; r < i; r++) o[r] = ws(e, t, n, s[r]);
            return new r(...o);
        }
      }
      const vs = {};
      function ws(e, t, n, r, s = qe.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const i = e;
        2 & r.flags && (s = null);
        const o = r.tokenKey;
        o === as && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        let a = e;
        for (; a; ) {
          if (t)
            switch (o) {
              case ns:
                return Xr(bs(a, t, n));
              case rs:
                return bs(a, t, n).renderer;
              case ss:
                return new ln(Bn(a, t.nodeIndex).renderElement);
              case is:
                return Bn(a, t.nodeIndex).viewContainer;
              case os:
                if (t.element.template) return Bn(a, t.nodeIndex).template;
                break;
              case as:
                return qr(bs(a, t, n));
              case ls:
              case cs:
                return Zr(a, t);
              default:
                const e = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[o];
                if (e) {
                  let t = qn(a, e.nodeIndex);
                  return (
                    t ||
                      ((t = { instance: ys(a, e) }),
                      (a.nodes[e.nodeIndex] = t)),
                    t.instance
                  );
                }
            }
          (n = hr(a)), (t = cr(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        const l = i.root.injector.get(r.token, vs);
        return l !== vs || s === vs
          ? l
          : i.root.ngModule.injector.get(r.token, s);
      }
      function bs(e, t, n) {
        let r;
        if (n) r = Bn(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !hr(r); ) r = r.parent;
        return r;
      }
      function Ss(e, t, n, r, s, i) {
        if (32768 & n.flags) {
          const t = Bn(e, n.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = s), 524288 & n.flags)) {
          i = i || {};
          const t = Bt.unwrap(e.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new Zt(t, s, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = s), i;
      }
      function Es(e, t) {
        if (!(e.def.nodeFlags & t)) return;
        const n = e.def.nodes;
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          let o = i.parent;
          for (
            !o && i.flags & t && xs(e, s, i.flags & t, r++),
              0 == (i.childFlags & t) && (s += i.childCount);
            o && 1 & o.flags && s === o.nodeIndex + o.childCount;

          )
            o.directChildFlags & t && (r = Cs(e, o, t, r)), (o = o.parent);
        }
      }
      function Cs(e, t, n, r) {
        for (let s = t.nodeIndex + 1; s <= t.nodeIndex + t.childCount; s++) {
          const t = e.def.nodes[s];
          t.flags & n && xs(e, s, t.flags & n, r++), (s += t.childCount);
        }
        return r;
      }
      function xs(e, t, n, r) {
        const s = qn(e, t);
        if (!s) return;
        const i = s.instance;
        i &&
          (Kn.setCurrentNode(e, t),
          1048576 & n && Hn(e, 512, r) && i.ngAfterContentInit(),
          2097152 & n && i.ngAfterContentChecked(),
          4194304 & n && Hn(e, 768, r) && i.ngAfterViewInit(),
          8388608 & n && i.ngAfterViewChecked(),
          131072 & n && i.ngOnDestroy());
      }
      const Ts = new Ie("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: () => it
        }),
        ks = {},
        Is = (function() {
          var e = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19
          };
          return (
            (e[e.LocaleId] = "LocaleId"),
            (e[e.DayPeriodsFormat] = "DayPeriodsFormat"),
            (e[e.DayPeriodsStandalone] = "DayPeriodsStandalone"),
            (e[e.DaysFormat] = "DaysFormat"),
            (e[e.DaysStandalone] = "DaysStandalone"),
            (e[e.MonthsFormat] = "MonthsFormat"),
            (e[e.MonthsStandalone] = "MonthsStandalone"),
            (e[e.Eras] = "Eras"),
            (e[e.FirstDayOfWeek] = "FirstDayOfWeek"),
            (e[e.WeekendRange] = "WeekendRange"),
            (e[e.DateFormat] = "DateFormat"),
            (e[e.TimeFormat] = "TimeFormat"),
            (e[e.DateTimeFormat] = "DateTimeFormat"),
            (e[e.NumberSymbols] = "NumberSymbols"),
            (e[e.NumberFormats] = "NumberFormats"),
            (e[e.CurrencySymbol] = "CurrencySymbol"),
            (e[e.CurrencyName] = "CurrencyName"),
            (e[e.Currencies] = "Currencies"),
            (e[e.PluralCase] = "PluralCase"),
            (e[e.ExtraData] = "ExtraData"),
            e
          );
        })(),
        As = void 0;
      var Ns = [
        "en",
        [["a", "p"], ["AM", "PM"], As],
        [["AM", "PM"], As, As],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        ],
        As,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        ],
        As,
        [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", As, "{1} 'at' {0}", As],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":"
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "$",
        "US Dollar",
        {},
        function(e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        }
      ];
      let Rs = "en-US";
      class Ps extends k {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            s = e => null,
            i = () => null;
          e && "object" == typeof e
            ? ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e.next(t));
                  }
                : t => {
                    e.next(t);
                  }),
              e.error &&
                (s = this.__isAsync
                  ? t => {
                      setTimeout(() => e.error(t));
                    }
                  : t => {
                      e.error(t);
                    }),
              e.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e(t));
                  }
                : t => {
                    e(t);
                  }),
              t &&
                (s = this.__isAsync
                  ? e => {
                      setTimeout(() => t(e));
                    }
                  : e => {
                      t(e);
                    }),
              n &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, s, i);
          return e instanceof d && e.add(o), o;
        }
      }
      function Ds() {
        return this._results[$t()]();
      }
      class Os {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new Ps()),
            (this.length = 0);
          const e = $t(),
            t = Os.prototype;
          t[e] || (t[e] = Ds);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let r = 0; r < t.length; r++) {
              let s = t[r];
              Array.isArray(s)
                ? (n === t && (n = t.slice(0, r)), e(s, n))
                : n !== t && n.push(s);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const Ms = new Ie("Application Initializer"),
        Fs = (() =>
          class {
            constructor(e) {
              (this.appInits = e),
                (this.initialized = !1),
                (this.done = !1),
                (this.donePromise = new Promise((e, t) => {
                  (this.resolve = e), (this.reject = t);
                }));
            }
            runInitializers() {
              if (this.initialized) return;
              const e = [],
                t = () => {
                  (this.done = !0), this.resolve();
                };
              if (this.appInits)
                for (let n = 0; n < this.appInits.length; n++) {
                  const t = this.appInits[n]();
                  Wt(t) && e.push(t);
                }
              Promise.all(e)
                .then(() => {
                  t();
                })
                .catch(e => {
                  this.reject(e);
                }),
                0 === e.length && t(),
                (this.initialized = !0);
            }
          })(),
        Ls = new Ie("AppId");
      function js() {
        return `${Us()}${Us()}${Us()}`;
      }
      function Us() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Vs = new Ie("Platform Initializer"),
        $s = new Ie("Platform ID"),
        Hs = new Ie("appBootstrapListener"),
        zs = (() =>
          class {
            log(e) {
              console.log(e);
            }
            warn(e) {
              console.warn(e);
            }
          })(),
        Bs = new Ie("LocaleId");
      function qs() {
        throw new Error("Runtime compiler is not loaded");
      }
      const Qs = qs,
        Ws = qs,
        Ks = qs,
        Zs = qs,
        Gs = (() =>
          class {
            constructor() {
              (this.compileModuleSync = Qs),
                (this.compileModuleAsync = Ws),
                (this.compileModuleAndAllComponentsSync = Ks),
                (this.compileModuleAndAllComponentsAsync = Zs);
            }
            clearCache() {}
            clearCacheFor(e) {}
            getModuleId(e) {}
          })();
      class Ys {}
      let Xs, Js;
      function ei() {
        const e = ke.wtf;
        return !(!e || !(Xs = e.trace) || ((Js = Xs.events), 0));
      }
      const ti = ei(),
        ni = ti
          ? function(e, t = null) {
              return Js.createScope(e, t);
            }
          : (e, t) =>
              function(e, t) {
                return null;
              },
        ri = ti
          ? function(e, t) {
              return Xs.leaveScope(e, t), t;
            }
          : (e, t) => t,
        si = (() => Promise.resolve(0))();
      function ii(e) {
        "undefined" == typeof Zone
          ? si.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class oi {
        constructor({ enableLongStackTrace: e = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ps(!1)),
            (this.onMicrotaskEmpty = new Ps(!1)),
            (this.onStable = new Ps(!1)),
            (this.onError = new Ps(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: "angular",
              properties: { isAngularZone: !0 },
              onInvokeTask: (e, n, r, s, i, o) => {
                try {
                  return ui(t), e.invokeTask(r, s, i, o);
                } finally {
                  hi(t);
                }
              },
              onInvoke: (e, n, r, s, i, o, a) => {
                try {
                  return ui(t), e.invoke(r, s, i, o, a);
                } finally {
                  hi(t);
                }
              },
              onHasTask: (e, n, r, s) => {
                e.hasTask(r, s),
                  n === r &&
                    ("microTask" == s.change
                      ? ((t.hasPendingMicrotasks = s.microTask), ci(t))
                      : "macroTask" == s.change &&
                        (t.hasPendingMacrotasks = s.macroTask));
              },
              onHandleError: (e, n, r, s) => (
                e.handleError(r, s),
                t.runOutsideAngular(() => t.onError.emit(s)),
                !1
              )
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!oi.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (oi.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, e, li, ai, ai);
          try {
            return s.runTask(i, t, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function ai() {}
      const li = {};
      function ci(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function ui(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function hi(e) {
        e._nesting--, ci(e);
      }
      class di {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ps()),
            (this.onMicrotaskEmpty = new Ps()),
            (this.onStable = new Ps()),
            (this.onError = new Ps());
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      const pi = (() =>
          class {
            constructor(e) {
              (this._ngZone = e),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                e.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      oi.assertNotInAngularZone(),
                        ii(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                ii(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let e = this._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  t =>
                    !t.updateCb ||
                    !t.updateCb(e) ||
                    (clearTimeout(t.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(e => ({
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data
                  }))
                : [];
            }
            addCallback(e, t, n) {
              let r = -1;
              t &&
                t > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    e => e.timeoutId !== r
                  )),
                    e(this._didWork, this.getPendingTasks());
                }, t)),
                this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
            }
            whenStable(e, t, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(e, t, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(e, t, n) {
              return [];
            }
          })(),
        fi = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), yi.addToWindow(this);
            }
            registerApplication(e, t) {
              this._applications.set(e, t);
            }
            unregisterApplication(e) {
              this._applications.delete(e);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(e) {
              return this._applications.get(e) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(e, t = !0) {
              return yi.findTestabilityInTree(this, e, t);
            }
          }
          return (e.ctorParameters = () => []), e;
        })();
      class mi {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let gi,
        yi = new mi(),
        _i = function(e) {
          return e instanceof rn;
        };
      const vi = new Ie("AllowMultipleToken");
      class wi {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function bi(e, t, n = []) {
        const r = `Platform: ${t}`,
          s = new Ie(r);
        return (t = []) => {
          let i = Si();
          if (!i || i.injector.get(vi, !1))
            if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
            else {
              const e = n.concat(t).concat({ provide: s, useValue: !0 });
              !(function(e) {
                if (gi && !gi.destroyed && !gi.injector.get(vi, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                gi = e.get(Ei);
                const t = e.get(Vs, null);
                t && t.forEach(e => e());
              })(qe.create({ providers: e, name: r }));
            }
          return (function(e) {
            const t = Si();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(s);
        };
      }
      function Si() {
        return gi && !gi.destroyed ? gi : null;
      }
      const Ei = (() =>
        class {
          constructor(e) {
            (this._injector = e),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(e, t) {
            const n =
                "noop" === (s = t ? t.ngZone : void 0)
                  ? new di()
                  : ("zone.js" === s ? void 0 : s) ||
                    new oi({ enableLongStackTrace: lt() }),
              r = [{ provide: oi, useValue: n }];
            var s;
            return n.run(() => {
              const t = qe.create({
                  providers: r,
                  parent: this.injector,
                  name: e.moduleType.name
                }),
                s = e.create(t),
                i = s.injector.get(Lt, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                (function(e) {
                  Rs = e.toLowerCase().replace(/_/g, "-");
                })(s.injector.get(Bs, "en-US")),
                s.onDestroy(() => Ti(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: e => {
                      i.handleError(e);
                    }
                  })
                ),
                (function(e, t, n) {
                  try {
                    const s = n();
                    return Wt(s)
                      ? s.catch(n => {
                          throw (t.runOutsideAngular(() => e.handleError(n)),
                          n);
                        })
                      : s;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(i, n, () => {
                  const e = s.injector.get(Fs);
                  return (
                    e.runInitializers(),
                    e.donePromise.then(() => (this._moduleDoBootstrap(s), s))
                  );
                })
              );
            });
          }
          bootstrapModule(e, t = []) {
            const n = Ci({}, t);
            return (function(e, t, n) {
              return e
                .get(Ys)
                .createCompiler([t])
                .compileModuleAsync(n);
            })(this.injector, n, e).then(e =>
              this.bootstrapModuleFactory(e, n)
            );
          }
          _moduleDoBootstrap(e) {
            const t = e.injector.get(xi);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach(e => t.bootstrap(e));
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${ve(
                    e.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                    "Please define one of these."
                );
              e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
          }
          onDestroy(e) {
            this._destroyListeners.push(e);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach(e => e.destroy()),
              this._destroyListeners.forEach(e => e()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        })();
      function Ci(e, t) {
        return Array.isArray(t) ? t.reduce(Ci, e) : Object.assign({}, e, t);
      }
      const xi = (() => {
        class e {
          constructor(e, t, n, r, s, i) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = lt()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const o = new b(e => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              a = new b(e => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    oi.assertNotInAngularZone(),
                      ii(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  oi.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = X(o, a.pipe(e => J()(ie(ae)(e))));
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              e instanceof Yt
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = _i(n) ? null : this._injector.get(sn),
              s = n.create(qe.NULL, [], t || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(pi, null);
            return (
              i &&
                s.injector
                  .get(fi)
                  .registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              lt() &&
                this._console.log(
                  "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            const t = e._tickScope();
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges)
                for (let e of this._views) e.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              (this._runningTick = !1), ri(t);
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            Ti(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Hs, [])
                .concat(this._bootstrapListeners)
                .forEach(t => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), Ti(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach(e => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (e._tickScope = ni("ApplicationRef#tick()")), e;
      })();
      function Ti(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class ki {}
      class Ii {}
      const Ai = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
        Ni = (() =>
          class {
            constructor(e, t) {
              (this._compiler = e), (this._config = t || Ai);
            }
            load(e) {
              return this._compiler instanceof Gs
                ? this.loadFactory(e)
                : this.loadAndCompile(e);
            }
            loadAndCompile(e) {
              let [t, r] = e.split("#");
              return (
                void 0 === r && (r = "default"),
                n("zn8P")(t)
                  .then(e => e[r])
                  .then(e => Ri(e, t, r))
                  .then(e => this._compiler.compileModuleAsync(e))
              );
            }
            loadFactory(e) {
              let [t, r] = e.split("#"),
                s = "NgFactory";
              return (
                void 0 === r && ((r = "default"), (s = "")),
                n("zn8P")(
                  this._config.factoryPathPrefix +
                    t +
                    this._config.factoryPathSuffix
                )
                  .then(e => e[r + s])
                  .then(e => Ri(e, t, r))
              );
            }
          })();
      function Ri(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      class Pi {
        constructor(e, t) {
          (this.name = e), (this.callback = t);
        }
      }
      class Di {
        constructor(e, t, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = e),
            t && t instanceof Oi && t.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class Oi extends Di {
        constructor(e, t, n) {
          super(e, t, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = e);
        }
        addChild(e) {
          e && (this.childNodes.push(e), (e.parent = this));
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...t),
            t.forEach(t => {
              t.parent && t.parent.removeChild(t), (e.parent = this);
            }));
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 === n
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t),
              (t.parent = this),
              this.childNodes.splice(n, 0, t));
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t.childNodes.forEach(t => {
                t instanceof Oi && (n(t) && r.push(t), e(t, n, r));
              });
            })(this, e, t),
            t
          );
        }
        queryAllNodes(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t instanceof Oi &&
                t.childNodes.forEach(t => {
                  n(t) && r.push(t), t instanceof Oi && e(t, n, r);
                });
            })(this, e, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter(e => e instanceof Oi);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach(n => {
            n.name == e && n.callback(t);
          });
        }
      }
      const Mi = new Map(),
        Fi = function(e) {
          return Mi.get(e) || null;
        };
      function Li(e) {
        Mi.set(e.nativeNode, e);
      }
      const ji = bi(null, "core", [
        { provide: $s, useValue: "unknown" },
        { provide: Ei, deps: [qe] },
        { provide: fi, deps: [] },
        { provide: zs, deps: [] }
      ]);
      function Ui() {
        return Pn;
      }
      function Vi() {
        return Dn;
      }
      function $i(e) {
        return e || "en-US";
      }
      function Hi(e) {
        let t = [];
        return (
          e.onStable.subscribe(() => {
            for (; t.length; ) t.pop()();
          }),
          function(e) {
            t.push(e);
          }
        );
      }
      const zi = (() =>
        class {
          constructor(e) {}
        })();
      function Bi(e, t, n, r, s, i) {
        e |= 1;
        const { matchedQueries: o, references: a, matchedQueryIds: l } = fr(t);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: o,
          matchedQueryIds: l,
          references: a,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? _r(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: s || Zn
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function qi(e, t, n, r, s, i, o = [], a, l, c, u, h) {
        c || (c = Zn);
        const { matchedQueries: d, references: p, matchedQueryIds: f } = fr(n);
        let m = null,
          g = null;
        i && ([m, g] = xr(i)), (a = a || []);
        const y = new Array(a.length);
        for (let w = 0; w < a.length; w++) {
          const [e, t, n] = a[w],
            [r, s] = xr(t);
          let i = void 0,
            o = void 0;
          switch (15 & e) {
            case 4:
              o = n;
              break;
            case 1:
            case 8:
              i = n;
          }
          y[w] = {
            flags: e,
            ns: r,
            name: s,
            nonMinifiedName: s,
            securityContext: i,
            suffix: o
          };
        }
        l = l || [];
        const _ = new Array(l.length);
        for (let w = 0; w < l.length; w++) {
          const [e, t] = l[w];
          _[w] = { type: 0, target: e, eventName: t, propName: null };
        }
        const v = (o = o || []).map(([e, t]) => {
          const [n, r] = xr(e);
          return [n, r, t];
        });
        return (
          (h = (function(e) {
            if (e && e.id === Xn) {
              const t =
                (null != e.encapsulation && e.encapsulation !== st.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? `c${tr++}` : Jn;
            }
            return e && e.id === Jn && (e = null), e || null;
          })(h)),
          u && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: f,
            references: p,
            ngContentIndex: r,
            childCount: s,
            bindings: y,
            bindingFlags: Tr(y),
            outputs: _,
            element: {
              ns: m,
              name: g,
              attrs: v,
              template: null,
              componentProvider: null,
              componentView: u || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || Zn
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function Qi(e, t, n) {
        const r = n.element,
          s = e.root.selectorOrNode,
          i = e.renderer;
        let o;
        if (e.parent || !s) {
          o = r.name ? i.createElement(r.name, r.ns) : i.createComment("");
          const s = gr(e, t, n);
          s && i.appendChild(s, o);
        } else
          o = i.selectRootElement(
            s,
            !!r.componentRendererType &&
              r.componentRendererType.encapsulation === st.ShadowDom
          );
        if (r.attrs)
          for (let a = 0; a < r.attrs.length; a++) {
            const [e, t, n] = r.attrs[a];
            i.setAttribute(o, t, n, e);
          }
        return o;
      }
      function Wi(e, t, n, r) {
        for (let o = 0; o < n.outputs.length; o++) {
          const a = n.outputs[o],
            l = Ki(
              e,
              n.nodeIndex,
              ((i = a.eventName), (s = a.target) ? `${s}:${i}` : i)
            );
          let c = a.target,
            u = e;
          "component" === a.target && ((c = null), (u = t));
          const h = u.renderer.listen(c || r, a.eventName, l);
          e.disposables[n.outputIndex + o] = h;
        }
        var s, i;
      }
      function Ki(e, t, n) {
        return r => ar(e, t, n, r);
      }
      function Zi(e, t, n, r) {
        if (!rr(e, t, n, r)) return !1;
        const s = t.bindings[n],
          i = Bn(e, t.nodeIndex),
          o = i.renderElement,
          a = s.name;
        switch (15 & s.flags) {
          case 1:
            !(function(e, t, n, r, s, i) {
              const o = t.securityContext;
              let a = o ? e.root.sanitizer.sanitize(o, i) : i;
              a = null != a ? a.toString() : null;
              const l = e.renderer;
              null != i
                ? l.setAttribute(n, s, a, r)
                : l.removeAttribute(n, s, r);
            })(e, s, o, s.ns, a, r);
            break;
          case 2:
            !(function(e, t, n, r) {
              const s = e.renderer;
              r ? s.addClass(t, n) : s.removeClass(t, n);
            })(e, o, a, r);
            break;
          case 4:
            !(function(e, t, n, r, s) {
              let i = e.root.sanitizer.sanitize(Nt.STYLE, s);
              if (null != i) {
                i = i.toString();
                const e = t.suffix;
                null != e && (i += e);
              } else i = null;
              const o = e.renderer;
              null != i ? o.setStyle(n, r, i) : o.removeStyle(n, r);
            })(e, s, o, a, r);
            break;
          case 8:
            !(function(e, t, n, r, s) {
              const i = t.securityContext;
              let o = i ? e.root.sanitizer.sanitize(i, s) : s;
              e.renderer.setProperty(n, r, o);
            })(
              33554432 & t.flags && 32 & s.flags ? i.componentView : e,
              s,
              o,
              a,
              r
            );
        }
        return !0;
      }
      function Gi(e, t, n) {
        let r = [];
        for (let s in n) r.push({ propName: s, bindingType: n[s] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: t, filterId: pr(t), bindings: r },
          ngContent: null
        };
      }
      function Yi(e) {
        const t = e.def.nodeMatchedQueries;
        for (; e.parent && dr(e); ) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let s = 0; s <= r; s++) {
            const r = e.def.nodes[s];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId &&
              Wn(e, s).setDirty(),
              (!(1 & r.flags && s + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (s += r.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            134217728 & t.flags && 536870912 & t.flags && Wn(e, n).setDirty(),
              (n += t.childCount);
          }
      }
      function Xi(e, t) {
        const n = Wn(e, t.nodeIndex);
        if (!n.dirty) return;
        let r,
          s = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          (s = Ji(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])),
            (r = qn(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((s = Ji(e, 0, e.def.nodes.length - 1, t.query, [])),
            (r = e.component));
        n.reset(s);
        const i = t.query.bindings;
        let o = !1;
        for (let a = 0; a < i.length; a++) {
          const e = i[a];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              (t = n), (o = !0);
          }
          r[e.propName] = t;
        }
        o && n.notifyOnChanges();
      }
      function Ji(e, t, n, r, s) {
        for (let i = t; i <= n; i++) {
          const t = e.def.nodes[i],
            n = t.matchedQueries[r.id];
          if (
            (null != n && s.push(eo(e, t, n)),
            1 & t.flags &&
              t.element.template &&
              (t.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            const n = Bn(e, i);
            if (
              ((t.childMatchedQueries & r.filterId) === r.filterId &&
                (Ji(e, i + 1, i + t.childCount, r, s), (i += t.childCount)),
              16777216 & t.flags)
            ) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const i = e[t],
                  o = lr(i);
                o && o === n && Ji(i, 0, i.def.nodes.length - 1, r, s);
              }
            }
            const o = n.template._projectedViews;
            if (o)
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                Ji(t, 0, t.def.nodes.length - 1, r, s);
              }
          }
          (t.childMatchedQueries & r.filterId) !== r.filterId &&
            (i += t.childCount);
        }
        return s;
      }
      function eo(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Bn(e, t.nodeIndex).renderElement;
            case 0:
              return new ln(Bn(e, t.nodeIndex).renderElement);
            case 2:
              return Bn(e, t.nodeIndex).template;
            case 3:
              return Bn(e, t.nodeIndex).viewContainer;
            case 4:
              return qn(e, t.nodeIndex).instance;
          }
      }
      function to(e, t) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: t }
        };
      }
      function no(e, t, n) {
        const r = gr(e, t, n);
        r && br(e, n.ngContent.index, 1, r, null, void 0);
      }
      function ro(e, t) {
        const n = Object.keys(t),
          r = n.length,
          s = new Array(r);
        for (let i = 0; i < r; i++) {
          const e = n[i];
          s[t[e]] = e;
        }
        return (function(e, t, n) {
          const r = new Array(n.length);
          for (let s = 0; s < n.length; s++) {
            const e = n[s];
            r[s] = {
              flags: 8,
              name: e,
              ns: null,
              nonMinifiedName: e,
              securityContext: null,
              suffix: null
            };
          }
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: 64,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: -1,
            childCount: 0,
            bindings: r,
            bindingFlags: Tr(r),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null
          };
        })(0, e, s);
      }
      function so(e, t, n) {
        const r = new Array(n.length - 1);
        for (let s = 1; s < n.length; s++)
          r[s - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[s]
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null
        };
      }
      function io(e, t, n) {
        let r;
        const s = e.renderer;
        r = s.createText(n.text.prefix);
        const i = gr(e, t, n);
        return i && s.appendChild(i, r), { renderText: r };
      }
      function oo(e, t) {
        return (null != e ? e.toString() : "") + t.suffix;
      }
      function ao(e, t, n, r) {
        let s = 0,
          i = 0,
          o = 0,
          a = 0,
          l = 0,
          c = null,
          u = null,
          h = !1,
          d = !1,
          p = null;
        for (let f = 0; f < t.length; f++) {
          const e = t[f];
          if (
            ((e.nodeIndex = f),
            (e.parent = c),
            (e.bindingIndex = s),
            (e.outputIndex = i),
            (e.renderParent = u),
            (o |= e.flags),
            (l |= e.matchedQueryIds),
            e.element)
          ) {
            const t = e.element;
            (t.publicProviders = c
              ? c.element.publicProviders
              : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (h = !1),
              (d = !1),
              e.element.template &&
                (l |= e.element.template.nodeMatchedQueries);
          }
          if (
            (co(c, e, t.length),
            (s += e.bindings.length),
            (i += e.outputs.length),
            !u && 3 & e.flags && (p = e),
            20224 & e.flags)
          ) {
            h ||
              ((h = !0),
              (c.element.publicProviders = Object.create(
                c.element.publicProviders
              )),
              (c.element.allProviders = c.element.publicProviders));
            const t = 0 != (32768 & e.flags);
            0 == (8192 & e.flags) || t
              ? (c.element.publicProviders[Yn(e.provider.token)] = e)
              : (d ||
                  ((d = !0),
                  (c.element.allProviders = Object.create(
                    c.element.publicProviders
                  ))),
                (c.element.allProviders[Yn(e.provider.token)] = e)),
              t && (c.element.componentProvider = e);
          }
          if (
            (c
              ? ((c.childFlags |= e.flags),
                (c.directChildFlags |= e.flags),
                (c.childMatchedQueries |= e.matchedQueryIds),
                e.element &&
                  e.element.template &&
                  (c.childMatchedQueries |=
                    e.element.template.nodeMatchedQueries))
              : (a |= e.flags),
            e.childCount > 0)
          )
            (c = e), lo(e) || (u = e);
          else
            for (; c && f === c.nodeIndex + c.childCount; ) {
              const e = c.parent;
              e &&
                ((e.childFlags |= c.childFlags),
                (e.childMatchedQueries |= c.childMatchedQueries)),
                (u = (c = e) && lo(c) ? c.renderParent : c);
            }
        }
        return {
          factory: null,
          nodeFlags: o,
          rootNodeFlags: a,
          nodeMatchedQueries: l,
          flags: e,
          nodes: t,
          updateDirectives: n || Zn,
          updateRenderer: r || Zn,
          handleEvent: (e, n, r, s) => t[n].element.handleEvent(e, r, s),
          bindingCount: s,
          outputCount: i,
          lastRenderRootNode: p
        };
      }
      function lo(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function co(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              "Illegal State: Embedded templates without nodes are not allowed!"
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
            );
          if (134217728 & t.flags && e)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`
            );
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`
            );
        }
      }
      function uo(e, t, n, r) {
        const s = fo(e.root, e.renderer, e, t, n);
        return mo(s, e.component, r), go(s), s;
      }
      function ho(e, t, n) {
        const r = fo(e, e.renderer, null, null, t);
        return mo(r, n, n), go(r), r;
      }
      function po(e, t, n, r) {
        const s = t.element.componentRendererType;
        let i;
        return (
          (i = s
            ? e.root.rendererFactory.createRenderer(r, s)
            : e.root.renderer),
          fo(e.root, i, e, t.element.componentProvider, n)
        );
      }
      function fo(e, t, n, r, s) {
        const i = new Array(s.nodes.length),
          o = s.outputCount ? new Array(s.outputCount) : null;
        return {
          def: s,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(s.bindingCount),
          disposables: o,
          initIndex: -1
        };
      }
      function mo(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function go(e) {
        let t;
        hr(e) &&
          (t = Bn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        const n = e.def,
          r = e.nodes;
        for (let s = 0; s < n.nodes.length; s++) {
          const i = n.nodes[s];
          let o;
          switch ((Kn.setCurrentNode(e, s), 201347067 & i.flags)) {
            case 1:
              const n = Qi(e, t, i);
              let a = void 0;
              if (33554432 & i.flags) {
                const t = _r(i.element.componentView);
                a = Kn.createComponentView(e, i, t, n);
              }
              Wi(e, a, i, n),
                (o = {
                  renderElement: n,
                  componentView: a,
                  viewContainer: null,
                  template: i.element.template ? Wr(e, i) : void 0
                }),
                16777216 & i.flags && (o.viewContainer = zr(e, i, o));
              break;
            case 2:
              o = io(e, t, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (o = r[s]) || 4096 & i.flags || (o = { instance: ps(e, i) });
              break;
            case 16:
              o = { instance: fs(e, i) };
              break;
            case 16384:
              (o = r[s]) || (o = { instance: ms(e, i) }),
                32768 & i.flags &&
                  mo(
                    Bn(e, i.parent.nodeIndex).componentView,
                    o.instance,
                    o.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              o = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              o = new Os();
              break;
            case 8:
              no(e, t, i), (o = void 0);
          }
          r[s] = o;
        }
        xo(e, Co.CreateViewNodes), Ao(e, 201326592, 268435456, 0);
      }
      function yo(e) {
        wo(e),
          Kn.updateDirectives(e, 1),
          To(e, Co.CheckNoChanges),
          Kn.updateRenderer(e, 1),
          xo(e, Co.CheckNoChanges),
          (e.state &= -97);
      }
      function _o(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          $n(e, 0, 256),
          wo(e),
          Kn.updateDirectives(e, 0),
          To(e, Co.CheckAndUpdate),
          Ao(e, 67108864, 536870912, 0);
        let t = $n(e, 256, 512);
        Es(e, 2097152 | (t ? 1048576 : 0)),
          Kn.updateRenderer(e, 0),
          xo(e, Co.CheckAndUpdate),
          Ao(e, 134217728, 536870912, 0),
          Es(e, 8388608 | ((t = $n(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          $n(e, 768, 1024);
      }
      function vo(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        return 0 === n
          ? (function(e, t, n, r, s, i, o, a, l, c, u, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n, r, s, i, o, a, l, c, u, h) {
                    const d = t.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && Zi(e, t, 0, n) && (p = !0),
                      d > 1 && Zi(e, t, 1, r) && (p = !0),
                      d > 2 && Zi(e, t, 2, s) && (p = !0),
                      d > 3 && Zi(e, t, 3, i) && (p = !0),
                      d > 4 && Zi(e, t, 4, o) && (p = !0),
                      d > 5 && Zi(e, t, 5, a) && (p = !0),
                      d > 6 && Zi(e, t, 6, l) && (p = !0),
                      d > 7 && Zi(e, t, 7, c) && (p = !0),
                      d > 8 && Zi(e, t, 8, u) && (p = !0),
                      d > 9 && Zi(e, t, 9, h) && (p = !0),
                      p
                    );
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                case 2:
                  return (function(e, t, n, r, s, i, o, a, l, c, u, h) {
                    let d = !1;
                    const p = t.bindings,
                      f = p.length;
                    if (
                      (f > 0 && rr(e, t, 0, n) && (d = !0),
                      f > 1 && rr(e, t, 1, r) && (d = !0),
                      f > 2 && rr(e, t, 2, s) && (d = !0),
                      f > 3 && rr(e, t, 3, i) && (d = !0),
                      f > 4 && rr(e, t, 4, o) && (d = !0),
                      f > 5 && rr(e, t, 5, a) && (d = !0),
                      f > 6 && rr(e, t, 6, l) && (d = !0),
                      f > 7 && rr(e, t, 7, c) && (d = !0),
                      f > 8 && rr(e, t, 8, u) && (d = !0),
                      f > 9 && rr(e, t, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = t.text.prefix;
                      f > 0 && (d += oo(n, p[0])),
                        f > 1 && (d += oo(r, p[1])),
                        f > 2 && (d += oo(s, p[2])),
                        f > 3 && (d += oo(i, p[3])),
                        f > 4 && (d += oo(o, p[4])),
                        f > 5 && (d += oo(a, p[5])),
                        f > 6 && (d += oo(l, p[6])),
                        f > 7 && (d += oo(c, p[7])),
                        f > 8 && (d += oo(u, p[8])),
                        f > 9 && (d += oo(h, p[9]));
                      const m = zn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(m, d);
                    }
                    return d;
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                case 16384:
                  return (function(e, t, n, r, s, i, o, a, l, c, u, h) {
                    const d = qn(e, t.nodeIndex),
                      p = d.instance;
                    let f = !1,
                      m = void 0;
                    const g = t.bindings.length;
                    return (
                      g > 0 &&
                        nr(e, t, 0, n) &&
                        ((f = !0), (m = Ss(e, d, t, 0, n, m))),
                      g > 1 &&
                        nr(e, t, 1, r) &&
                        ((f = !0), (m = Ss(e, d, t, 1, r, m))),
                      g > 2 &&
                        nr(e, t, 2, s) &&
                        ((f = !0), (m = Ss(e, d, t, 2, s, m))),
                      g > 3 &&
                        nr(e, t, 3, i) &&
                        ((f = !0), (m = Ss(e, d, t, 3, i, m))),
                      g > 4 &&
                        nr(e, t, 4, o) &&
                        ((f = !0), (m = Ss(e, d, t, 4, o, m))),
                      g > 5 &&
                        nr(e, t, 5, a) &&
                        ((f = !0), (m = Ss(e, d, t, 5, a, m))),
                      g > 6 &&
                        nr(e, t, 6, l) &&
                        ((f = !0), (m = Ss(e, d, t, 6, l, m))),
                      g > 7 &&
                        nr(e, t, 7, c) &&
                        ((f = !0), (m = Ss(e, d, t, 7, c, m))),
                      g > 8 &&
                        nr(e, t, 8, u) &&
                        ((f = !0), (m = Ss(e, d, t, 8, u, m))),
                      g > 9 &&
                        nr(e, t, 9, h) &&
                        ((f = !0), (m = Ss(e, d, t, 9, h, m))),
                      m && p.ngOnChanges(m),
                      65536 & t.flags &&
                        Hn(e, 256, t.nodeIndex) &&
                        p.ngOnInit(),
                      262144 & t.flags && p.ngDoCheck(),
                      f
                    );
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n, r, s, i, o, a, l, c, u, h) {
                    const d = t.bindings;
                    let p = !1;
                    const f = d.length;
                    if (
                      (f > 0 && rr(e, t, 0, n) && (p = !0),
                      f > 1 && rr(e, t, 1, r) && (p = !0),
                      f > 2 && rr(e, t, 2, s) && (p = !0),
                      f > 3 && rr(e, t, 3, i) && (p = !0),
                      f > 4 && rr(e, t, 4, o) && (p = !0),
                      f > 5 && rr(e, t, 5, a) && (p = !0),
                      f > 6 && rr(e, t, 6, l) && (p = !0),
                      f > 7 && rr(e, t, 7, c) && (p = !0),
                      f > 8 && rr(e, t, 8, u) && (p = !0),
                      f > 9 && rr(e, t, 9, h) && (p = !0),
                      p)
                    ) {
                      const p = Qn(e, t.nodeIndex);
                      let m;
                      switch (201347067 & t.flags) {
                        case 32:
                          (m = new Array(d.length)),
                            f > 0 && (m[0] = n),
                            f > 1 && (m[1] = r),
                            f > 2 && (m[2] = s),
                            f > 3 && (m[3] = i),
                            f > 4 && (m[4] = o),
                            f > 5 && (m[5] = a),
                            f > 6 && (m[6] = l),
                            f > 7 && (m[7] = c),
                            f > 8 && (m[8] = u),
                            f > 9 && (m[9] = h);
                          break;
                        case 64:
                          (m = {}),
                            f > 0 && (m[d[0].name] = n),
                            f > 1 && (m[d[1].name] = r),
                            f > 2 && (m[d[2].name] = s),
                            f > 3 && (m[d[3].name] = i),
                            f > 4 && (m[d[4].name] = o),
                            f > 5 && (m[d[5].name] = a),
                            f > 6 && (m[d[6].name] = l),
                            f > 7 && (m[d[7].name] = c),
                            f > 8 && (m[d[8].name] = u),
                            f > 9 && (m[d[9].name] = h);
                          break;
                        case 128:
                          const e = n;
                          switch (f) {
                            case 1:
                              m = e.transform(n);
                              break;
                            case 2:
                              m = e.transform(r);
                              break;
                            case 3:
                              m = e.transform(r, s);
                              break;
                            case 4:
                              m = e.transform(r, s, i);
                              break;
                            case 5:
                              m = e.transform(r, s, i, o);
                              break;
                            case 6:
                              m = e.transform(r, s, i, o, a);
                              break;
                            case 7:
                              m = e.transform(r, s, i, o, a, l);
                              break;
                            case 8:
                              m = e.transform(r, s, i, o, a, l, c);
                              break;
                            case 9:
                              m = e.transform(r, s, i, o, a, l, c, u);
                              break;
                            case 10:
                              m = e.transform(r, s, i, o, a, l, c, u, h);
                          }
                      }
                      p.value = m;
                    }
                    return p;
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                default:
                  throw "unreachable";
              }
            })(e, t, r, s, i, o, a, l, c, u, h, d)
          : (function(e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n) {
                    let r = !1;
                    for (let s = 0; s < n.length; s++)
                      Zi(e, t, s, n[s]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let i = 0; i < n.length; i++)
                      rr(e, t, i, n[i]) && (s = !0);
                    if (s) {
                      let s = "";
                      for (let e = 0; e < n.length; e++) s += oo(n[e], r[e]);
                      s = t.text.prefix + s;
                      const i = zn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(i, s);
                    }
                    return s;
                  })(e, t, n);
                case 16384:
                  return (function(e, t, n) {
                    const r = qn(e, t.nodeIndex),
                      s = r.instance;
                    let i = !1,
                      o = void 0;
                    for (let a = 0; a < n.length; a++)
                      nr(e, t, a, n[a]) &&
                        ((i = !0), (o = Ss(e, r, t, a, n[a], o)));
                    return (
                      o && s.ngOnChanges(o),
                      65536 & t.flags &&
                        Hn(e, 256, t.nodeIndex) &&
                        s.ngOnInit(),
                      262144 & t.flags && s.ngDoCheck(),
                      i
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let i = 0; i < n.length; i++)
                      rr(e, t, i, n[i]) && (s = !0);
                    if (s) {
                      const s = Qn(e, t.nodeIndex);
                      let i;
                      switch (201347067 & t.flags) {
                        case 32:
                          i = n;
                          break;
                        case 64:
                          i = {};
                          for (let t = 0; t < n.length; t++)
                            i[r[t].name] = n[t];
                          break;
                        case 128:
                          const e = n[0],
                            s = n.slice(1);
                          i = e.transform(...s);
                      }
                      s.value = i;
                    }
                    return s;
                  })(e, t, n);
                default:
                  throw "unreachable";
              }
            })(e, t, r);
      }
      function wo(e) {
        const t = e.def;
        if (4 & t.nodeFlags)
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = Bn(e, n).template._projectedViews;
              if (t)
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  (r.state |= 32), or(r, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function bo(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        return (
          0 === n
            ? (function(e, t, n, r, s, i, o, a, l, c, u, h) {
                const d = t.bindings.length;
                d > 0 && sr(e, t, 0, n),
                  d > 1 && sr(e, t, 1, r),
                  d > 2 && sr(e, t, 2, s),
                  d > 3 && sr(e, t, 3, i),
                  d > 4 && sr(e, t, 4, o),
                  d > 5 && sr(e, t, 5, a),
                  d > 6 && sr(e, t, 6, l),
                  d > 7 && sr(e, t, 7, c),
                  d > 8 && sr(e, t, 8, u),
                  d > 9 && sr(e, t, 9, h);
              })(e, t, r, s, i, o, a, l, c, u, h, d)
            : (function(e, t, n) {
                for (let r = 0; r < n.length; r++) sr(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function So(e, t) {
        if (Wn(e, t.nodeIndex).dirty)
          throw jn(
            Kn.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & e.state)
          );
      }
      function Eo(e) {
        if (!(128 & e.state)) {
          if (
            (To(e, Co.Destroy), xo(e, Co.Destroy), Es(e, 131072), e.disposables)
          )
            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function(e) {
            if (!(16 & e.state)) return;
            const t = lr(e);
            if (t) {
              const n = t.template._projectedViews;
              n && (jr(n, n.indexOf(e)), Kn.dirtyParentQueries(e));
            }
          })(e),
            e.renderer.destroyNode &&
              (function(e) {
                const t = e.def.nodes.length;
                for (let n = 0; n < t; n++) {
                  const t = e.def.nodes[n];
                  1 & t.flags
                    ? e.renderer.destroyNode(Bn(e, n).renderElement)
                    : 2 & t.flags
                    ? e.renderer.destroyNode(zn(e, n).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) &&
                      Wn(e, n).destroy();
                }
              })(e),
            hr(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      const Co = (function() {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (e[e.CreateViewNodes] = "CreateViewNodes"),
          (e[e.CheckNoChanges] = "CheckNoChanges"),
          (e[e.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews"),
          (e[e.CheckAndUpdate] = "CheckAndUpdate"),
          (e[e.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews"),
          (e[e.Destroy] = "Destroy"),
          e
        );
      })();
      function xo(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            33554432 & s.flags
              ? ko(Bn(e, r).componentView, t)
              : 0 == (33554432 & s.childFlags) && (r += s.childCount);
          }
      }
      function To(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            if (16777216 & s.flags) {
              const n = Bn(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) ko(n[e], t);
            } else 0 == (16777216 & s.childFlags) && (r += s.childCount);
          }
      }
      function ko(e, t) {
        const n = e.state;
        switch (t) {
          case Co.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? yo(e)
                : 64 & n && Io(e, Co.CheckNoChangesProjectedViews));
            break;
          case Co.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? yo(e) : 64 & n && Io(e, t));
            break;
          case Co.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? _o(e)
                : 64 & n && Io(e, Co.CheckAndUpdateProjectedViews));
            break;
          case Co.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? _o(e) : 64 & n && Io(e, t));
            break;
          case Co.Destroy:
            Eo(e);
            break;
          case Co.CreateViewNodes:
            go(e);
        }
      }
      function Io(e, t) {
        To(e, t), xo(e, t);
      }
      function Ao(e, t, n, r) {
        if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
        const s = e.def.nodes.length;
        for (let i = 0; i < s; i++) {
          const s = e.def.nodes[i];
          if (s.flags & t && s.flags & n)
            switch ((Kn.setCurrentNode(e, s.nodeIndex), r)) {
              case 0:
                Xi(e, s);
                break;
              case 1:
                So(e, s);
            }
          (s.childFlags & t && s.childFlags & n) || (i += s.childCount);
        }
      }
      let No = !1;
      function Ro(e, t, n, r, s, i) {
        const o = s.injector.get(hn);
        return ho(Do(e, s, o, t, n), r, i);
      }
      function Po(e, t, n, r, s, i) {
        const o = s.injector.get(hn),
          a = Do(e, s, new ha(o), t, n),
          l = zo(r);
        return ca(Zo.create, ho, null, [a, l, i]);
      }
      function Do(e, t, n, r, s) {
        const i = t.injector.get(Rt),
          o = t.injector.get(Lt),
          a = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: s,
          sanitizer: i,
          rendererFactory: n,
          renderer: a,
          errorHandler: o
        };
      }
      function Oo(e, t, n, r) {
        const s = zo(n);
        return ca(Zo.create, uo, null, [e, t, s, r]);
      }
      function Mo(e, t, n, r) {
        return (
          (n = Uo.get(t.element.componentProvider.provider.token) || zo(n)),
          ca(Zo.create, po, null, [e, t, n, r])
        );
      }
      function Fo(e, t, n, r) {
        return es(
          e,
          t,
          n,
          (function(e) {
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function(
              e
            ) {
              let t = !1,
                n = !1;
              return 0 === Lo.size
                ? { hasOverrides: t, hasDeprecatedOverrides: n }
                : (e.providers.forEach(e => {
                    const r = Lo.get(e.token);
                    3840 & e.flags &&
                      r &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach(e => {
                    jo.forEach((r, s) => {
                      ye(s).providedIn === e &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: t, hasDeprecatedOverrides: n });
            })(e);
            return t
              ? ((function(e) {
                  for (let t = 0; t < e.providers.length; t++) {
                    const r = e.providers[t];
                    n && (r.flags |= 4096);
                    const s = Lo.get(r.token);
                    s &&
                      ((r.flags = (-3841 & r.flags) | s.flags),
                      (r.deps = mr(s.deps)),
                      (r.value = s.value));
                  }
                  if (jo.size > 0) {
                    let t = new Set(e.modules);
                    jo.forEach((r, s) => {
                      if (t.has(ye(s).providedIn)) {
                        let t = {
                          token: s,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: mr(r.deps),
                          value: r.value,
                          index: e.providers.length
                        };
                        e.providers.push(t), (e.providersByKey[Yn(s)] = t);
                      }
                    });
                  }
                })((e = e.factory(() => Zn))),
                e)
              : e;
          })(r)
        );
      }
      const Lo = new Map(),
        jo = new Map(),
        Uo = new Map();
      function Vo(e) {
        let t;
        Lo.set(e.token, e),
          "function" == typeof e.token &&
            (t = ye(e.token)) &&
            "function" == typeof t.providedIn &&
            jo.set(e.token, e);
      }
      function $o(e, t) {
        const n = _r(t.viewDefFactory),
          r = _r(n.nodes[0].element.componentView);
        Uo.set(e, r);
      }
      function Ho() {
        Lo.clear(), jo.clear(), Uo.clear();
      }
      function zo(e) {
        if (0 === Lo.size) return e;
        const t = (function(e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const s = e.nodes[r];
            1 & s.flags && (n = s),
              n &&
                3840 & s.flags &&
                Lo.has(s.provider.token) &&
                (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(() => Zn);
        for (let r = 0; r < t.length; r++) n(e, t[r]);
        return e;
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const e = t.provider,
                n = Lo.get(e.token);
              n &&
                ((t.flags = (-3841 & t.flags) | n.flags),
                (e.deps = mr(n.deps)),
                (e.value = n.value));
            }
          }
        }
      }
      function Bo(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        const p = e.def.nodes[t];
        return (
          vo(e, p, n, r, s, i, o, a, l, c, u, h, d),
          224 & p.flags ? Qn(e, t).value : void 0
        );
      }
      function qo(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        const p = e.def.nodes[t];
        return (
          bo(e, p, n, r, s, i, o, a, l, c, u, h, d),
          224 & p.flags ? Qn(e, t).value : void 0
        );
      }
      function Qo(e) {
        return ca(Zo.detectChanges, _o, null, [e]);
      }
      function Wo(e) {
        return ca(Zo.checkNoChanges, yo, null, [e]);
      }
      function Ko(e) {
        return ca(Zo.destroy, Eo, null, [e]);
      }
      const Zo = (function() {
        var e = {
          create: 0,
          detectChanges: 1,
          checkNoChanges: 2,
          destroy: 3,
          handleEvent: 4
        };
        return (
          (e[e.create] = "create"),
          (e[e.detectChanges] = "detectChanges"),
          (e[e.checkNoChanges] = "checkNoChanges"),
          (e[e.destroy] = "destroy"),
          (e[e.handleEvent] = "handleEvent"),
          e
        );
      })();
      let Go, Yo, Xo;
      function Jo(e, t) {
        (Yo = e), (Xo = t);
      }
      function ea(e, t, n, r) {
        return (
          Jo(e, t), ca(Zo.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        );
      }
      function ta(e, t) {
        if (128 & e.state) throw Vn(Zo[Go]);
        return (
          Jo(e, ia(e, 0)),
          e.def.updateDirectives(function(e, n, r, ...s) {
            const i = e.def.nodes[n];
            return (
              0 === t ? ra(e, i, r, s) : sa(e, i, r, s),
              16384 & i.flags && Jo(e, ia(e, n)),
              224 & i.flags ? Qn(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function na(e, t) {
        if (128 & e.state) throw Vn(Zo[Go]);
        return (
          Jo(e, oa(e, 0)),
          e.def.updateRenderer(function(e, n, r, ...s) {
            const i = e.def.nodes[n];
            return (
              0 === t ? ra(e, i, r, s) : sa(e, i, r, s),
              3 & i.flags && Jo(e, oa(e, n)),
              224 & i.flags ? Qn(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function ra(e, t, n, r) {
        if (vo(e, t, n, ...r)) {
          const o = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e],
                a = o[e];
              8 & r.flags &&
                (n[
                  ((s = r.nonMinifiedName),
                  (i = void 0),
                  (i = s.replace(/[$@]/g, "_")),
                  `ng-reflect-${(s = i.replace(
                    jt,
                    (...e) => "-" + e[1].toLowerCase()
                  ))}`)
                ] = Ut(a));
            }
            const r = t.parent,
              a = Bn(e, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let t in n) {
                const r = n[t];
                null != r
                  ? e.renderer.setAttribute(a, t, r)
                  : e.renderer.removeAttribute(a, t);
              }
            else
              e.renderer.setValue(a, `bindings=${JSON.stringify(n, null, 2)}`);
          }
        }
        var s, i;
      }
      function sa(e, t, n, r) {
        bo(e, t, n, ...r);
      }
      function ia(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      function oa(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      class aa {
        constructor(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          let n = this.nodeDef,
            r = e;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = cr(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return (
            Bn(this.elView, this.elDef.nodeIndex).componentView || this.view
          );
        }
        get injector() {
          return Zr(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef)
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
            }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            la(this.elView, this.elDef, e);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && la(this.elView, n, e), (t += n.childCount);
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function(e) {
            for (; e && !hr(e); ) e = e.parent;
            return e.parent ? Bn(e.parent, cr(e).nodeIndex) : null;
          })(this.elOrCompView);
          return e ? e.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags
            ? ur(this.view, this.nodeDef)
            : ur(this.elView, this.elDef);
        }
        logError(e, ...t) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const s = (function(e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
            return n;
          })(n, r);
          let i = -1;
          n.factory(() => (++i === s ? e.error.bind(e, ...t) : Zn)),
            i < s &&
              (e.error(
                "Illegal state: the ViewDefinitionFactory did not call the logger!"
              ),
              e.error(...t));
        }
      }
      function la(e, t, n) {
        for (let r in t.references) n[r] = eo(e, t, t.references[r]);
      }
      function ca(e, t, n, r) {
        const s = Go,
          i = Yo,
          o = Xo;
        try {
          Go = e;
          const l = t.apply(n, r);
          return (Yo = i), (Xo = o), (Go = s), l;
        } catch (a) {
          if (Ot(a) || !Yo) throw a;
          throw (function(e, t) {
            return (
              e instanceof Error || (e = new Error(e.toString())), Un(e, t), e
            );
          })(a, ua());
        }
      }
      function ua() {
        return Yo ? new aa(Yo, Xo) : null;
      }
      class ha {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new da(this.delegate.createRenderer(e, t));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class da {
        constructor(e) {
          (this.delegate = e),
            (this.debugContextFactory = ua),
            (this.data = this.delegate.data);
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          !(function(e) {
            Mi.delete(e.nativeNode);
          })(Fi(e)),
            this.delegate.destroyNode && this.delegate.destroyNode(e);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t),
            r = this.createDebugContext(n);
          if (r) {
            const t = new Oi(n, null, r);
            (t.name = e), Li(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e),
            n = this.createDebugContext(t);
          return n && Li(new Di(t, null, n)), t;
        }
        createText(e) {
          const t = this.delegate.createText(e),
            n = this.createDebugContext(t);
          return n && Li(new Di(t, null, n)), t;
        }
        appendChild(e, t) {
          const n = Fi(e),
            r = Fi(t);
          n && r && n instanceof Oi && n.addChild(r),
            this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = Fi(e),
            s = Fi(t),
            i = Fi(n);
          r && s && r instanceof Oi && r.insertBefore(i, s),
            this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = Fi(e),
            r = Fi(t);
          n && r && n instanceof Oi && n.removeChild(r),
            this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t),
            r = ua();
          return r && Li(new Oi(n, null, r)), n;
        }
        setAttribute(e, t, n, r) {
          const s = Fi(e);
          s && s instanceof Oi && (s.attributes[r ? r + ":" + t : t] = n),
            this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = Fi(e);
          r && r instanceof Oi && (r.attributes[n ? n + ":" + t : t] = null),
            this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = Fi(e);
          n && n instanceof Oi && (n.classes[t] = !0),
            this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = Fi(e);
          n && n instanceof Oi && (n.classes[t] = !1),
            this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const s = Fi(e);
          s && s instanceof Oi && (s.styles[t] = n),
            this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = Fi(e);
          r && r instanceof Oi && (r.styles[t] = null),
            this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = Fi(e);
          r && r instanceof Oi && (r.properties[t] = n),
            this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ("string" != typeof e) {
            const r = Fi(e);
            r && r.listeners.push(new Pi(t, n));
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      function pa(e, t, n) {
        return new fa(e, t, n);
      }
      class fa extends on {
        constructor(e, t, n) {
          super(),
            (this.moduleType = e),
            (this._bootstrapComponents = t),
            (this._ngModuleDefFactory = n);
        }
        create(e) {
          !(function() {
            if (No) return;
            No = !0;
            const e = lt()
              ? {
                  setCurrentNode: Jo,
                  createRootView: Po,
                  createEmbeddedView: Oo,
                  createComponentView: Mo,
                  createNgModuleRef: Fo,
                  overrideProvider: Vo,
                  overrideComponentView: $o,
                  clearOverrides: Ho,
                  checkAndUpdateView: Qo,
                  checkNoChangesView: Wo,
                  destroyView: Ko,
                  createDebugContext: (e, t) => new aa(e, t),
                  handleEvent: ea,
                  updateDirectives: ta,
                  updateRenderer: na
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: Ro,
                  createEmbeddedView: uo,
                  createComponentView: po,
                  createNgModuleRef: es,
                  overrideProvider: Zn,
                  overrideComponentView: Zn,
                  clearOverrides: Zn,
                  checkAndUpdateView: _o,
                  checkNoChangesView: yo,
                  destroyView: Eo,
                  createDebugContext: (e, t) => new aa(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) =>
                    e.def.updateDirectives(0 === t ? Bo : qo, e),
                  updateRenderer: (e, t) =>
                    e.def.updateRenderer(0 === t ? Bo : qo, e)
                };
            (Kn.setCurrentNode = e.setCurrentNode),
              (Kn.createRootView = e.createRootView),
              (Kn.createEmbeddedView = e.createEmbeddedView),
              (Kn.createComponentView = e.createComponentView),
              (Kn.createNgModuleRef = e.createNgModuleRef),
              (Kn.overrideProvider = e.overrideProvider),
              (Kn.overrideComponentView = e.overrideComponentView),
              (Kn.clearOverrides = e.clearOverrides),
              (Kn.checkAndUpdateView = e.checkAndUpdateView),
              (Kn.checkNoChangesView = e.checkNoChangesView),
              (Kn.destroyView = e.destroyView),
              (Kn.resolveDep = ws),
              (Kn.createDebugContext = e.createDebugContext),
              (Kn.handleEvent = e.handleEvent),
              (Kn.updateDirectives = e.updateDirectives),
              (Kn.updateRenderer = e.updateRenderer),
              (Kn.dirtyParentQueries = Yi);
          })();
          const t = (function(e) {
            const t = Array.from(e.providers),
              n = Array.from(e.modules),
              r = {};
            for (const s in e.providersByKey) r[s] = e.providersByKey[s];
            return {
              factory: e.factory,
              isRoot: e.isRoot,
              providers: t,
              modules: n,
              providersByKey: r
            };
          })(_r(this._ngModuleDefFactory));
          return Kn.createNgModuleRef(
            this.moduleType,
            e || qe.NULL,
            this._bootstrapComponents,
            t
          );
        }
      }
      class ma {}
      class ga {
        constructor() {
          this.title = "planning-poker";
        }
      }
      class ya {}
      const _a = new Ie("Location Initialized");
      class va {}
      const wa = new Ie("appBaseHref"),
        ba = (() => {
          class e {
            constructor(t, n) {
              (this._subject = new Ps()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const r = this._platformStrategy.getBaseHref();
              (this._platformLocation = n),
                (this._baseHref = e.stripTrailingSlash(Sa(r))),
                this._platformStrategy.onPopState(e => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: e.state,
                    type: e.type
                  });
                });
            }
            path(e = !1) {
              return this.normalize(this._platformStrategy.path(e));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, n = "") {
              return (
                this.path() == this.normalize(t + e.normalizeQueryParams(n))
              );
            }
            normalize(t) {
              return e.stripTrailingSlash(
                (function(e, t) {
                  return e && t.startsWith(e) ? t.substring(e.length) : t;
                })(this._baseHref, Sa(t))
              );
            }
            prepareExternalUrl(e) {
              return (
                e && "/" !== e[0] && (e = "/" + e),
                this._platformStrategy.prepareExternalUrl(e)
              );
            }
            go(t, n = "", r = null) {
              this._platformStrategy.pushState(r, "", t, n),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + e.normalizeQueryParams(n)),
                  r
                );
            }
            replaceState(t, n = "", r = null) {
              this._platformStrategy.replaceState(r, "", t, n),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + e.normalizeQueryParams(n)),
                  r
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(e) {
              this._urlChangeListeners.push(e),
                this.subscribe(e => {
                  this._notifyUrlChangeListeners(e.url, e.state);
                });
            }
            _notifyUrlChangeListeners(e = "", t) {
              this._urlChangeListeners.forEach(n => n(e, t));
            }
            subscribe(e, t, n) {
              return this._subject.subscribe({
                next: e,
                error: t,
                complete: n
              });
            }
            static normalizeQueryParams(e) {
              return e && "?" !== e[0] ? "?" + e : e;
            }
            static joinWithSlash(e, t) {
              if (0 == e.length) return t;
              if (0 == t.length) return e;
              let n = 0;
              return (
                e.endsWith("/") && n++,
                t.startsWith("/") && n++,
                2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
              );
            }
            static stripTrailingSlash(e) {
              const t = e.match(/#|\?|$/),
                n = (t && t.index) || e.length;
              return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n);
            }
          }
          return e;
        })();
      function Sa(e) {
        return e.replace(/\/index.html$/, "");
      }
      const Ea = (() =>
          class extends va {
            constructor(e, t) {
              super(),
                (this._platformLocation = e),
                (this._baseHref = ""),
                null != t && (this._baseHref = t);
            }
            onPopState(e) {
              this._platformLocation.onPopState(e),
                this._platformLocation.onHashChange(e);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(e = !1) {
              let t = this._platformLocation.hash;
              return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t;
            }
            prepareExternalUrl(e) {
              const t = ba.joinWithSlash(this._baseHref, e);
              return t.length > 0 ? "#" + t : t;
            }
            pushState(e, t, n, r) {
              let s = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(e, t, s);
            }
            replaceState(e, t, n, r) {
              let s = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(e, t, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          })(),
        Ca = (() =>
          class extends va {
            constructor(e, t) {
              if (
                (super(),
                (this._platformLocation = e),
                null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
                null == t)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = t;
            }
            onPopState(e) {
              this._platformLocation.onPopState(e),
                this._platformLocation.onHashChange(e);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(e) {
              return ba.joinWithSlash(this._baseHref, e);
            }
            path(e = !1) {
              const t =
                  this._platformLocation.pathname +
                  ba.normalizeQueryParams(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && e ? `${t}${n}` : t;
            }
            pushState(e, t, n, r) {
              const s = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              this._platformLocation.pushState(e, t, s);
            }
            replaceState(e, t, n, r) {
              const s = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
              this._platformLocation.replaceState(e, t, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          })(),
        xa = (function() {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = "Zero"),
            (e[e.One] = "One"),
            (e[e.Two] = "Two"),
            (e[e.Few] = "Few"),
            (e[e.Many] = "Many"),
            (e[e.Other] = "Other"),
            e
          );
        })(),
        Ta = new Ie("UseV4Plurals");
      class ka {}
      const Ia = (() =>
        class extends ka {
          constructor(e, t) {
            super(), (this.locale = e), (this.deprecatedPluralFn = t);
          }
          getPluralCategory(e, t) {
            switch (
              this.deprecatedPluralFn
                ? this.deprecatedPluralFn(t || this.locale, e)
                : (function(e) {
                    return (function(e) {
                      const t = e.toLowerCase().replace(/_/g, "-");
                      let n = ks[t];
                      if (n) return n;
                      const r = t.split("-")[0];
                      if ((n = ks[r])) return n;
                      if ("en" === r) return Ns;
                      throw new Error(
                        `Missing locale data for the locale "${e}".`
                      );
                    })(e)[Is.PluralCase];
                  })(t || this.locale)(e)
            ) {
              case xa.Zero:
                return "zero";
              case xa.One:
                return "one";
              case xa.Two:
                return "two";
              case xa.Few:
                return "few";
              case xa.Many:
                return "many";
              default:
                return "other";
            }
          }
        })();
      class Aa {}
      const Na = (() =>
          class {
            constructor(e, t, n, r) {
              (this._iterableDiffers = e),
                (this._keyValueDiffers = t),
                (this._ngEl = n),
                (this._renderer = r),
                (this._initialClasses = []);
            }
            getValue() {
              return null;
            }
            setClass(e) {
              this._removeClasses(this._initialClasses),
                (this._initialClasses =
                  "string" == typeof e ? e.split(/\s+/) : []),
                this._applyClasses(this._initialClasses),
                this._applyClasses(this._rawClass);
            }
            setNgClass(e) {
              this._removeClasses(this._rawClass),
                this._applyClasses(this._initialClasses),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._rawClass = "string" == typeof e ? e.split(/\s+/) : e),
                this._rawClass &&
                  (qt(this._rawClass)
                    ? (this._iterableDiffer = this._iterableDiffers
                        .find(this._rawClass)
                        .create())
                    : (this._keyValueDiffer = this._keyValueDiffers
                        .find(this._rawClass)
                        .create()));
            }
            applyChanges() {
              if (this._iterableDiffer) {
                const e = this._iterableDiffer.diff(this._rawClass);
                e && this._applyIterableChanges(e);
              } else if (this._keyValueDiffer) {
                const e = this._keyValueDiffer.diff(this._rawClass);
                e && this._applyKeyValueChanges(e);
              }
            }
            _applyKeyValueChanges(e) {
              e.forEachAddedItem(e => this._toggleClass(e.key, e.currentValue)),
                e.forEachChangedItem(e =>
                  this._toggleClass(e.key, e.currentValue)
                ),
                e.forEachRemovedItem(e => {
                  e.previousValue && this._toggleClass(e.key, !1);
                });
            }
            _applyIterableChanges(e) {
              e.forEachAddedItem(e => {
                if ("string" != typeof e.item)
                  throw new Error(
                    `NgClass can only toggle CSS classes expressed as strings, got ${ve(
                      e.item
                    )}`
                  );
                this._toggleClass(e.item, !0);
              }),
                e.forEachRemovedItem(e => this._toggleClass(e.item, !1));
            }
            _applyClasses(e) {
              e &&
                (Array.isArray(e) || e instanceof Set
                  ? e.forEach(e => this._toggleClass(e, !0))
                  : Object.keys(e).forEach(t => this._toggleClass(t, !!e[t])));
            }
            _removeClasses(e) {
              e &&
                (Array.isArray(e) || e instanceof Set
                  ? e.forEach(e => this._toggleClass(e, !1))
                  : Object.keys(e).forEach(e => this._toggleClass(e, !1)));
            }
            _toggleClass(e, t) {
              (e = e.trim()) &&
                e.split(/\s+/g).forEach(e => {
                  t
                    ? this._renderer.addClass(this._ngEl.nativeElement, e)
                    : this._renderer.removeClass(this._ngEl.nativeElement, e);
                });
            }
          })(),
        Ra = (() => {
          class e {
            constructor(e) {
              this._delegate = e;
            }
            getValue() {
              return this._delegate.getValue();
            }
          }
          return (e.ngDirectiveDef = void 0), e;
        })(),
        Pa = (() =>
          class extends Ra {
            constructor(e) {
              super(e);
            }
            set klass(e) {
              this._delegate.setClass(e);
            }
            set ngClass(e) {
              this._delegate.setNgClass(e);
            }
            ngDoCheck() {
              this._delegate.applyChanges();
            }
          })();
      class Da {
        constructor(e, t, n, r) {
          (this.$implicit = e),
            (this.ngForOf = t),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      const Oa = (() =>
        class {
          constructor(e, t, n) {
            (this._viewContainer = e),
              (this._template = t),
              (this._differs = n),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(e) {
            (this._ngForOf = e), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(e) {
            lt() &&
              null != e &&
              "function" != typeof e &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  e
                )}. ` +
                  "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."
              ),
              (this._trackByFn = e);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(e) {
            e && (this._template = e);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (t) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${((e = n),
                    e.name ||
                      typeof e)}'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var e;
            if (this._differ) {
              const e = this._differ.diff(this._ngForOf);
              e && this._applyChanges(e);
            }
          }
          _applyChanges(e) {
            const t = [];
            e.forEachOperation((e, n, r) => {
              if (null == e.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Da(null, this._ngForOf, -1, -1),
                    r
                  ),
                  s = new Ma(e, n);
                t.push(s);
              } else if (null == r) this._viewContainer.remove(n);
              else {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new Ma(e, s);
                t.push(i);
              }
            });
            for (let n = 0; n < t.length; n++)
              this._perViewChange(t[n].view, t[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const e = this._viewContainer.get(n);
              (e.context.index = n),
                (e.context.count = r),
                (e.context.ngForOf = this._ngForOf);
            }
            e.forEachIdentityChange(e => {
              this._viewContainer.get(e.currentIndex).context.$implicit =
                e.item;
            });
          }
          _perViewChange(e, t) {
            e.context.$implicit = t.item;
          }
          static ngTemplateContextGuard(e, t) {
            return !0;
          }
        })();
      class Ma {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      const Fa = (() =>
        class {
          constructor(e, t) {
            (this._viewContainer = e),
              (this._context = new La()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = t);
          }
          set ngIf(e) {
            (this._context.$implicit = this._context.ngIf = e),
              this._updateView();
          }
          set ngIfThen(e) {
            ja("ngIfThen", e),
              (this._thenTemplateRef = e),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(e) {
            ja("ngIfElse", e),
              (this._elseTemplateRef = e),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
        })();
      class La {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function ja(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${ve(t)}'.`
          );
      }
      class Ua {}
      const Va = (() =>
          class {
            constructor(e, t, n) {
              (this._ngEl = e), (this._differs = t), (this._renderer = n);
            }
            getValue() {
              return null;
            }
            setNgStyle(e) {
              (this._ngStyle = e),
                !this._differ &&
                  e &&
                  (this._differ = this._differs.find(e).create());
            }
            applyChanges() {
              if (this._differ) {
                const e = this._differ.diff(this._ngStyle);
                e && this._applyChanges(e);
              }
            }
            _applyChanges(e) {
              e.forEachRemovedItem(e => this._setStyle(e.key, null)),
                e.forEachAddedItem(e => this._setStyle(e.key, e.currentValue)),
                e.forEachChangedItem(e =>
                  this._setStyle(e.key, e.currentValue)
                );
            }
            _setStyle(e, t) {
              const [n, r] = e.split(".");
              null != (t = null != t && r ? `${t}${r}` : t)
                ? this._renderer.setStyle(this._ngEl.nativeElement, n, t)
                : this._renderer.removeStyle(this._ngEl.nativeElement, n);
            }
          })(),
        $a = (() => {
          class e {
            constructor(e) {
              this._delegate = e;
            }
            getValue() {
              return this._delegate.getValue();
            }
          }
          return (e.ngDirectiveDef = void 0), e;
        })(),
        Ha = (() =>
          class extends $a {
            constructor(e) {
              super(e);
            }
            set ngStyle(e) {
              this._delegate.setNgStyle(e);
            }
            ngDoCheck() {
              this._delegate.applyChanges();
            }
          })(),
        za = (() => class {})(),
        Ba = new Ie("DocumentToken"),
        qa = "browser";
      function Qa(e) {
        return e === qa;
      }
      const Wa = (() => {
        class e {}
        return (
          (e.ngInjectableDef = ge({
            token: e,
            providedIn: "root",
            factory: () => new Ka(Ve(Ba), window, Ve(Lt))
          })),
          e
        );
      })();
      class Ka {
        constructor(e, t, n) {
          (this.document = e),
            (this.window = t),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(e) {
          this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
        }
        scrollToAnchor(e) {
          if (this.supportScrollRestoration()) {
            e =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(e)
                : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
            try {
              const n = this.document.querySelector(`#${e}`);
              if (n) return void this.scrollToElement(n);
              const r = this.document.querySelector(`[name='${e}']`);
              if (r) return void this.scrollToElement(r);
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = e);
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect(),
            n = t.left + this.window.pageXOffset,
            r = t.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (e) {
            return !1;
          }
        }
      }
      const Za = new b(e => e.complete());
      function Ga(e) {
        return e
          ? (function(e) {
              return new b(t => e.schedule(() => t.complete()));
            })(e)
          : Za;
      }
      function Ya(e) {
        const t = new b(t => {
          t.next(e), t.complete();
        });
        return (t._isScalar = !0), (t.value = e), t;
      }
      function Xa(...e) {
        let t = e[e.length - 1];
        switch ((A(t) ? e.pop() : (t = void 0), e.length)) {
          case 0:
            return Ga(t);
          case 1:
            return t ? q(e, t) : Ya(e[0]);
          default:
            return q(e, t);
        }
      }
      class Ja extends k {
        constructor(e) {
          super(), (this._value = e);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          return t && !t.closed && e.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new C();
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
      function el() {
        return (
          Error.call(this),
          (this.message = "no elements in sequence"),
          (this.name = "EmptyError"),
          this
        );
      }
      el.prototype = Object.create(Error.prototype);
      const tl = el,
        nl = {};
      class rl {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new sl(e, this.resultSelector));
        }
      }
      class sl extends $ {
        constructor(e, t) {
          super(e),
            (this.resultSelector = t),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(e) {
          this.values.push(nl), this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let n = 0; n < t; n++) {
              const t = e[n];
              this.add(V(this, t, t, n));
            }
          }
        }
        notifyComplete(e) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(e, t, n, r, s) {
          const i = this.values,
            o = this.toRespond
              ? i[n] === nl
                ? --this.toRespond
                : this.toRespond
              : 0;
          (i[n] = t),
            0 === o &&
              (this.resultSelector
                ? this._tryResultSelector(i)
                : this.destination.next(i.slice()));
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function il(e) {
        return new b(t => {
          let n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? Q(n) : Ga()).subscribe(t);
        });
      }
      function ol() {
        return Y(1);
      }
      function al(e, t) {
        return function(n) {
          return n.lift(new ll(e, t));
        };
      }
      class ll {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new cl(e, this.predicate, this.thisArg));
        }
      }
      class cl extends m {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      function ul() {
        return (
          Error.call(this),
          (this.message = "argument out of range"),
          (this.name = "ArgumentOutOfRangeError"),
          this
        );
      }
      ul.prototype = Object.create(Error.prototype);
      const hl = ul;
      function dl(e) {
        return function(t) {
          return 0 === e ? Ga() : t.lift(new pl(e));
        };
      }
      class pl {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new hl();
        }
        call(e, t) {
          return t.subscribe(new fl(e, this.total));
        }
      }
      class fl extends m {
        constructor(e, t) {
          super(e),
            (this.total = t),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(e) {
          const t = this.ring,
            n = this.total,
            r = this.count++;
          t.length < n ? t.push(e) : (t[r % n] = e);
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = t++ % n;
              e.next(r[s]);
            }
          }
          e.complete();
        }
      }
      function ml(e, t, n) {
        return function(r) {
          return r.lift(new gl(e, t, n));
        };
      }
      class gl {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(
            new yl(e, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class yl extends m {
        constructor(e, t, n, s) {
          super(e),
            (this._tapNext = _),
            (this._tapError = _),
            (this._tapComplete = _),
            (this._tapError = n || _),
            (this._tapComplete = s || _),
            r(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || _),
                (this._tapError = t.error || _),
                (this._tapComplete = t.complete || _));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
      const _l = (
        e = function() {
          return new tl();
        }
      ) =>
        ml({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw e();
          }
        });
      function vl(e = null) {
        return t => t.lift(new wl(e));
      }
      class wl {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new bl(e, this.defaultValue));
        }
      }
      class bl extends m {
        constructor(e, t) {
          super(e), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(e) {
          (this.isEmpty = !1), this.destination.next(e);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function Sl(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? al((t, n) => e(t, n, r)) : G,
            dl(1),
            n ? vl(t) : _l(() => new tl())
          );
      }
      function El(e) {
        return function(t) {
          const n = new Cl(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      class Cl {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new xl(e, this.selector, this.caught));
        }
      }
      class xl extends $ {
        constructor(e, t, n) {
          super(e), (this.selector = t), (this.caught = n);
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const r = new N(this, void 0, void 0);
            this.add(r), V(this, n, void 0, void 0, r);
          }
        }
      }
      function Tl(e) {
        return t => (0 === e ? Ga() : t.lift(new kl(e)));
      }
      class kl {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new hl();
        }
        call(e, t) {
          return t.subscribe(new Il(e, this.total));
        }
      }
      class Il extends m {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          const t = this.total,
            n = ++this.count;
          n <= t &&
            (this.destination.next(e),
            n === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Al(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? al((t, n) => e(t, n, r)) : G,
            Tl(1),
            n ? vl(t) : _l(() => new tl())
          );
      }
      class Nl {
        constructor(e, t, n) {
          (this.predicate = e), (this.thisArg = t), (this.source = n);
        }
        call(e, t) {
          return t.subscribe(
            new Rl(e, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class Rl extends m {
        constructor(e, t, n, r) {
          super(e),
            (this.predicate = t),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(e) {
          this.destination.next(e), this.destination.complete();
        }
        _next(e) {
          let t = !1;
          try {
            t = this.predicate.call(this.thisArg, e, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          t || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function Pl(e, t) {
        return "function" == typeof t
          ? n =>
              n.pipe(Pl((n, r) => Q(e(n, r)).pipe(H((e, s) => t(n, e, r, s)))))
          : t => t.lift(new Dl(e));
      }
      class Dl {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new Ol(e, this.project));
        }
      }
      class Ol extends $ {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new N(this, void 0, void 0);
          this.destination.add(s),
            (this.innerSubscription = V(this, e, t, n, s));
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(e) {
          this.destination.remove(e),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
      }
      function Ml(...e) {
        return ol()(Xa(...e));
      }
      function Fl(e, t) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function(r) {
            return r.lift(new Ll(e, t, n));
          }
        );
      }
      class Ll {
        constructor(e, t, n = !1) {
          (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
        }
        call(e, t) {
          return t.subscribe(
            new jl(e, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class jl extends m {
        constructor(e, t, n, r) {
          super(e),
            (this.accumulator = t),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          (this.hasSeed = !0), (this._seed = e);
        }
        _next(e) {
          if (this.hasSeed) return this._tryNext(e);
          (this.seed = e), this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Ul(e, t) {
        return W(e, t, 1);
      }
      class Vl {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new $l(e, this.callback));
        }
      }
      class $l extends m {
        constructor(e, t) {
          super(e), this.add(new d(t));
        }
      }
      let Hl = null;
      function zl() {
        return Hl;
      }
      class Bl {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      }
      class ql extends Bl {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const t = this.createElement("div", document);
            if (null != this.getStyle(t, "animationName"))
              this._animationPrefix = "";
            else {
              const e = ["Webkit", "Moz", "O", "ms"];
              for (let n = 0; n < e.length; n++)
                if (null != this.getStyle(t, e[n] + "AnimationName")) {
                  this._animationPrefix = "-" + e[n].toLowerCase() + "-";
                  break;
                }
            }
            const n = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend"
            };
            Object.keys(n).forEach(e => {
              null != this.getStyle(t, e) && (this._transitionEnd = n[e]);
            });
          } catch (e) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = null == n ? t : t + "/../" + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return "function" == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : "";
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : "";
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      }
      const Ql = {
          class: "className",
          innerHtml: "innerHTML",
          readonly: "readOnly",
          tabindex: "tabIndex"
        },
        Wl = 3,
        Kl = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS"
        },
        Zl = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock"
        },
        Gl = (() => {
          if (ke.Node)
            return (
              ke.Node.prototype.contains ||
              function(e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })();
      class Yl extends ql {
        parse(e) {
          throw new Error("parse not implemented");
        }
        static makeCurrent() {
          var e;
          (e = new Yl()), Hl || (Hl = e);
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          window.console && (console.error ? console.error(e) : console.log(e));
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        get attrToPropMap() {
          return Ql;
        }
        contains(e, t) {
          return Gl.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent("MouseEvent");
          return t.initEvent(e, !0, !0), t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent("Event");
          return t.initEvent(e, !0, !0), t;
        }
        preventDefault(e) {
          e.preventDefault(), (e.returnValue = !1);
        }
        isPrevented(e) {
          return (
            e.defaultPrevented || (null != e.returnValue && !e.returnValue)
          );
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          return "content" in e && this.isTemplateElement(e) ? e.content : null;
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          return this.hasProperty(e, "content") ? e.content : e;
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes,
            n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t[r];
          return n;
        }
        clearNodes(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach(n => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement("template");
          return (t.innerHTML = e), t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement(
            "SCRIPT"
          );
          return r.setAttribute(e, t), r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement("style");
          return this.appendChild(n, this.createTextNode(e, t)), n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(!0);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = "";
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || "";
          return n ? r == n : r.length > 0;
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map(),
            n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          return this.isTemplateElement(e) ? this.content(e) : e;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || "";
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && "TEMPLATE" === e.nodeName;
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return null != e.shadowRoot && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), !0);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute("href");
        }
        getEventKey(e) {
          let t = e.key;
          if (null == t) {
            if (null == (t = e.keyIdentifier)) return "Unidentified";
            t.startsWith("U+") &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              e.location === Wl && Zl.hasOwnProperty(t) && (t = Zl[t]));
          }
          return Kl[t] || t;
        }
        getGlobalEventTarget(e, t) {
          return "window" === t
            ? window
            : "document" === t
            ? e
            : "body" === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            Jl || (Jl = document.querySelector("base"))
              ? Jl.getAttribute("href")
              : null;
          return null == t
            ? null
            : ((n = t),
              Xl || (Xl = document.createElement("a")),
              Xl.setAttribute("href", n),
              "/" === Xl.pathname.charAt(0) ? Xl.pathname : "/" + Xl.pathname);
          var n;
        }
        resetBaseElement() {
          Jl = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, "data-" + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, "data-" + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return "function" == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return (function(e, t) {
            t = encodeURIComponent(t);
            for (const n of e.split(";")) {
              const e = n.indexOf("="),
                [r, s] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
              if (r.trim() === t) return decodeURIComponent(s);
            }
            return null;
          })(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        }
      }
      let Xl,
        Jl = null;
      function ec() {
        return !!window.history.pushState;
      }
      const tc = (() => {
          class e extends ya {
            constructor(e) {
              super(), (this._doc = e), this._init();
            }
            _init() {
              (this.location = zl().getLocation()),
                (this._history = zl().getHistory());
            }
            getBaseHrefFromDOM() {
              return zl().getBaseHref(this._doc);
            }
            onPopState(e) {
              zl()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("popstate", e, !1);
            }
            onHashChange(e) {
              zl()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("hashchange", e, !1);
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(e) {
              this.location.pathname = e;
            }
            pushState(e, t, n) {
              ec()
                ? this._history.pushState(e, t, n)
                : (this.location.hash = n);
            }
            replaceState(e, t, n) {
              ec()
                ? this._history.replaceState(e, t, n)
                : (this.location.hash = n);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            getState() {
              return this._history.state;
            }
          }
          return (
            (e.ctorParameters = () => [
              { type: void 0, decorators: [{ type: ue, args: [Ba] }] }
            ]),
            e
          );
        })(),
        nc = new Ie("TRANSITION_ID"),
        rc = [
          {
            provide: Ms,
            useFactory: function(e, t, n) {
              return () => {
                n.get(Fs).donePromise.then(() => {
                  const n = zl();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, "style[ng-transition]"))
                    .filter(t => n.getAttribute(t, "ng-transition") === e)
                    .forEach(e => n.remove(e));
                });
              };
            },
            deps: [nc, Ba, qe],
            multi: !0
          }
        ];
      class sc {
        static init() {
          var e;
          (e = new sc()), (yi = e);
        }
        addToWindow(e) {
          (ke.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (ke.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (ke.getAllAngularRootElements = () => e.getAllRootElements()),
            ke.frameworkStabilizers || (ke.frameworkStabilizers = []),
            ke.frameworkStabilizers.push(e => {
              const t = ke.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const s = function(t) {
                (r = r || t), 0 == --n && e(r);
              };
              t.forEach(function(e) {
                e.whenStable(s);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? zl().isShadowRoot(t)
              ? this.findTestabilityInTree(e, zl().getHost(t), !0)
              : this.findTestabilityInTree(e, zl().parentElement(t), !0)
            : null;
        }
      }
      function ic(e, t) {
        ("undefined" != typeof COMPILED && COMPILED) ||
          ((ke.ng = ke.ng || {})[e] = t);
      }
      const oc = (() => ({ ApplicationRef: xi, NgZone: oi }))();
      function ac(e) {
        return Fi(e);
      }
      const lc = new Ie("EventManagerPlugins"),
        cc = (() =>
          class {
            constructor(e, t) {
              (this._zone = t),
                (this._eventNameToPlugin = new Map()),
                e.forEach(e => (e.manager = this)),
                (this._plugins = e.slice().reverse());
            }
            addEventListener(e, t, n) {
              return this._findPluginFor(t).addEventListener(e, t, n);
            }
            addGlobalEventListener(e, t, n) {
              return this._findPluginFor(t).addGlobalEventListener(e, t, n);
            }
            getZone() {
              return this._zone;
            }
            _findPluginFor(e) {
              const t = this._eventNameToPlugin.get(e);
              if (t) return t;
              const n = this._plugins;
              for (let r = 0; r < n.length; r++) {
                const t = n[r];
                if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
              }
              throw new Error(`No event manager plugin found for event ${e}`);
            }
          })();
      class uc {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = zl().getGlobalEventTarget(this._doc, e);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      const hc = (() =>
          class {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(e) {
              const t = new Set();
              e.forEach(e => {
                this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
              }),
                this.onStylesAdded(t);
            }
            onStylesAdded(e) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          })(),
        dc = (() =>
          class extends hc {
            constructor(e) {
              super(),
                (this._doc = e),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(e.head);
            }
            _addStylesToHost(e, t) {
              e.forEach(e => {
                const n = this._doc.createElement("style");
                (n.textContent = e), this._styleNodes.add(t.appendChild(n));
              });
            }
            addHost(e) {
              this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
            }
            removeHost(e) {
              this._hostNodes.delete(e);
            }
            onStylesAdded(e) {
              this._hostNodes.forEach(t => this._addStylesToHost(e, t));
            }
            ngOnDestroy() {
              this._styleNodes.forEach(e => zl().remove(e));
            }
          })(),
        pc = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        },
        fc = /%COMP%/g,
        mc = "_nghost-%COMP%",
        gc = "_ngcontent-%COMP%";
      function yc(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          Array.isArray(s) ? yc(e, s, n) : ((s = s.replace(fc, e)), n.push(s));
        }
        return n;
      }
      function _c(e) {
        return t => {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      const vc = (() =>
        class {
          constructor(e, t, n) {
            (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new wc(e));
          }
          createRenderer(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case st.Emulated: {
                let n = this.rendererByCompId.get(t.id);
                return (
                  n ||
                    ((n = new Ec(
                      this.eventManager,
                      this.sharedStylesHost,
                      t,
                      this.appId
                    )),
                    this.rendererByCompId.set(t.id, n)),
                  n.applyToHost(e),
                  n
                );
              }
              case st.Native:
              case st.ShadowDom:
                return new Cc(this.eventManager, this.sharedStylesHost, e, t);
              default:
                if (!this.rendererByCompId.has(t.id)) {
                  const e = yc(t.id, t.styles, []);
                  this.sharedStylesHost.addStyles(e),
                    this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        })();
      class wc {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(pc[t] || t, e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = "string" == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ""), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ":" + t;
            const s = pc[r];
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = pc[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & dn.DashCase
            ? e.style.setProperty(t, n, r & dn.Important ? "important" : "")
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & dn.DashCase ? e.style.removeProperty(t) : (e.style[t] = "");
        }
        setProperty(e, t, n) {
          Sc(t, "property"), (e[t] = n);
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return (
            Sc(t, "listener"),
            "string" == typeof e
              ? this.eventManager.addGlobalEventListener(e, t, _c(n))
              : this.eventManager.addEventListener(e, t, _c(n))
          );
        }
      }
      const bc = (() => "@".charCodeAt(0))();
      function Sc(e, t) {
        if (e.charCodeAt(0) === bc)
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class Ec extends wc {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const s = yc(r + "-" + n.id, n.styles, []);
          t.addStyles(s),
            (this.contentAttr = gc.replace(fc, r + "-" + n.id)),
            (this.hostAttr = mc.replace(fc, r + "-" + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, "");
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class Cc extends wc {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === st.ShadowDom
                ? n.attachShadow({ mode: "open" })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = yc(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const e = document.createElement("style");
            (e.textContent = s[i]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      const xc = (() =>
          ("undefined" != typeof Zone && Zone.__symbol__) ||
          function(e) {
            return "__zone_symbol__" + e;
          })(),
        Tc = xc("addEventListener"),
        kc = xc("removeEventListener"),
        Ic = {},
        Ac = "__zone_symbol__propagationStopped",
        Nc = (() => {
          const e =
            "undefined" != typeof Zone && Zone[xc("BLACK_LISTED_EVENTS")];
          if (e) {
            const t = {};
            return (
              e.forEach(e => {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        Rc = function(e) {
          return !!Nc && Nc.hasOwnProperty(e);
        },
        Pc = function(e) {
          const t = Ic[e.type];
          if (!t) return;
          const n = this[t];
          if (!n) return;
          const r = [e];
          if (1 === n.length) {
            const e = n[0];
            return e.zone !== Zone.current
              ? e.zone.run(e.handler, this, r)
              : e.handler.apply(this, r);
          }
          {
            const t = n.slice();
            for (let n = 0; n < t.length && !0 !== e[Ac]; n++) {
              const e = t[n];
              e.zone !== Zone.current
                ? e.zone.run(e.handler, this, r)
                : e.handler.apply(this, r);
            }
          }
        },
        Dc = (() =>
          class extends uc {
            constructor(e, t, n) {
              super(e),
                (this.ngZone = t),
                (n &&
                  (function(e) {
                    return "server" === e;
                  })(n)) ||
                  this.patchEvent();
            }
            patchEvent() {
              if ("undefined" == typeof Event || !Event || !Event.prototype)
                return;
              if (Event.prototype.__zone_symbol__stopImmediatePropagation)
                return;
              const e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
                Event.prototype.stopImmediatePropagation);
              Event.prototype.stopImmediatePropagation = function() {
                this && (this[Ac] = !0), e && e.apply(this, arguments);
              };
            }
            supports(e) {
              return !0;
            }
            addEventListener(e, t, n) {
              let r = n;
              if (!e[Tc] || (oi.isInAngularZone() && !Rc(t)))
                e.addEventListener(t, r, !1);
              else {
                let n = Ic[t];
                n || (n = Ic[t] = xc("ANGULAR" + t + "FALSE"));
                let s = e[n];
                const i = s && s.length > 0;
                s || (s = e[n] = []);
                const o = Rc(t) ? Zone.root : Zone.current;
                if (0 === s.length) s.push({ zone: o, handler: r });
                else {
                  let e = !1;
                  for (let t = 0; t < s.length; t++)
                    if (s[t].handler === r) {
                      e = !0;
                      break;
                    }
                  e || s.push({ zone: o, handler: r });
                }
                i || e[Tc](t, Pc, !1);
              }
              return () => this.removeEventListener(e, t, r);
            }
            removeEventListener(e, t, n) {
              let r = e[kc];
              if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
              let s = Ic[t],
                i = s && e[s];
              if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
              let o = !1;
              for (let a = 0; a < i.length; a++)
                if (i[a].handler === n) {
                  (o = !0), i.splice(a, 1);
                  break;
                }
              o
                ? 0 === i.length && r.apply(e, [t, Pc, !1])
                : e.removeEventListener.apply(e, [t, n, !1]);
            }
          })(),
        Oc = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        Mc = new Ie("HammerGestureConfig"),
        Fc = new Ie("HammerLoader"),
        Lc = (() =>
          class {
            constructor() {
              (this.events = []), (this.overrides = {});
            }
            buildHammer(e) {
              const t = new Hammer(e, this.options);
              t.get("pinch").set({ enable: !0 }),
                t.get("rotate").set({ enable: !0 });
              for (const n in this.overrides) t.get(n).set(this.overrides[n]);
              return t;
            }
          })(),
        jc = (() =>
          class extends uc {
            constructor(e, t, n, r) {
              super(e),
                (this._config = t),
                (this.console = n),
                (this.loader = r);
            }
            supports(e) {
              return !(
                (!Oc.hasOwnProperty(e.toLowerCase()) &&
                  !this.isCustomEvent(e)) ||
                (!window.Hammer &&
                  !this.loader &&
                  (this.console.warn(
                    `The "${e}" event cannot be bound because Hammer.JS is not ` +
                      "loaded and no custom loader has been specified."
                  ),
                  1))
              );
            }
            addEventListener(e, t, n) {
              const r = this.manager.getZone();
              if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
                let r = !1,
                  s = () => {
                    r = !0;
                  };
                return (
                  this.loader()
                    .then(() => {
                      if (!window.Hammer)
                        return (
                          this.console.warn(
                            "The custom HAMMER_LOADER completed, but Hammer.JS is not present."
                          ),
                          void (s = () => {})
                        );
                      r || (s = this.addEventListener(e, t, n));
                    })
                    .catch(() => {
                      this.console.warn(
                        `The "${t}" event cannot be bound because the custom ` +
                          "Hammer.JS loader failed."
                      ),
                        (s = () => {});
                    }),
                  () => {
                    s();
                  }
                );
              }
              return r.runOutsideAngular(() => {
                const s = this._config.buildHammer(e),
                  i = function(e) {
                    r.runGuarded(function() {
                      n(e);
                    });
                  };
                return (
                  s.on(t, i),
                  () => {
                    s.off(t, i), "function" == typeof s.destroy && s.destroy();
                  }
                );
              });
            }
            isCustomEvent(e) {
              return this._config.events.indexOf(e) > -1;
            }
          })(),
        Uc = ["alt", "control", "meta", "shift"],
        Vc = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey
        },
        $c = (() => {
          class e extends uc {
            constructor(e) {
              super(e);
            }
            supports(t) {
              return null != e.parseEventName(t);
            }
            addEventListener(t, n, r) {
              const s = e.parseEventName(n),
                i = e.eventCallback(s.fullKey, r, this.manager.getZone());
              return this.manager
                .getZone()
                .runOutsideAngular(() =>
                  zl().onAndCancel(t, s.domEventName, i)
                );
            }
            static parseEventName(t) {
              const n = t.toLowerCase().split("."),
                r = n.shift();
              if (0 === n.length || ("keydown" !== r && "keyup" !== r))
                return null;
              const s = e._normalizeKey(n.pop());
              let i = "";
              if (
                (Uc.forEach(e => {
                  const t = n.indexOf(e);
                  t > -1 && (n.splice(t, 1), (i += e + "."));
                }),
                (i += s),
                0 != n.length || 0 === s.length)
              )
                return null;
              const o = {};
              return (o.domEventName = r), (o.fullKey = i), o;
            }
            static getEventFullKey(e) {
              let t = "",
                n = zl().getEventKey(e);
              return (
                " " === (n = n.toLowerCase())
                  ? (n = "space")
                  : "." === n && (n = "dot"),
                Uc.forEach(r => {
                  r != n && (0, Vc[r])(e) && (t += r + ".");
                }),
                (t += n)
              );
            }
            static eventCallback(t, n, r) {
              return s => {
                e.getEventFullKey(s) === t && r.runGuarded(() => n(s));
              };
            }
            static _normalizeKey(e) {
              switch (e) {
                case "esc":
                  return "escape";
                default:
                  return e;
              }
            }
          }
          return e;
        })();
      class Hc {}
      const zc = (() =>
        class extends Hc {
          constructor(e) {
            super(), (this._doc = e);
          }
          sanitize(e, t) {
            if (null == t) return null;
            switch (e) {
              case Nt.NONE:
                return t;
              case Nt.HTML:
                return t instanceof qc
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, "HTML"),
                    (function(e, t) {
                      let n = null;
                      try {
                        It = It || new ct(e);
                        let r = t ? String(t) : "";
                        n = It.getInertBodyElement(r);
                        let s = 5,
                          i = r;
                        do {
                          if (0 === s)
                            throw new Error(
                              "Failed to sanitize html because the input is unstable"
                            );
                          s--,
                            (r = i),
                            (i = n.innerHTML),
                            (n = It.getInertBodyElement(r));
                        } while (r !== i);
                        const o = new Ct(),
                          a = o.sanitizeChildren(At(n) || n);
                        return (
                          lt() &&
                            o.sanitizedSomething &&
                            console.warn(
                              "WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"
                            ),
                          a
                        );
                      } finally {
                        if (n) {
                          const e = At(n) || n;
                          for (; e.firstChild; ) e.removeChild(e.firstChild);
                        }
                      }
                    })(this._doc, String(t)));
              case Nt.STYLE:
                return t instanceof Qc
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, "Style"),
                    (function(e) {
                      if (!(e = String(e).trim())) return "";
                      const t = e.match(Dt);
                      return (t && dt(t[1]) === t[1]) ||
                        (e.match(Pt) &&
                          (function(e) {
                            let t = !0,
                              n = !0;
                            for (let r = 0; r < e.length; r++) {
                              const s = e.charAt(r);
                              "'" === s && n
                                ? (t = !t)
                                : '"' === s && t && (n = !n);
                            }
                            return t && n;
                          })(e))
                        ? e
                        : (lt() &&
                            console.warn(
                              `WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`
                            ),
                          "unsafe");
                    })(t));
              case Nt.SCRIPT:
                if (t instanceof Wc)
                  return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, "Script"),
                new Error("unsafe value used in a script context"));
              case Nt.URL:
                return t instanceof Zc || t instanceof Kc
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, "URL"), dt(String(t)));
              case Nt.RESOURCE_URL:
                if (t instanceof Zc)
                  return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, "ResourceURL"),
                new Error(
                  "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
                ));
              default:
                throw new Error(
                  `Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`
                );
            }
          }
          checkNotSafeValue(e, t) {
            if (e instanceof Bc)
              throw new Error(
                `Required a safe ${t}, got a ${e.getTypeName()} ` +
                  "(see http://g.co/ng/security#xss)"
              );
          }
          bypassSecurityTrustHtml(e) {
            return new qc(e);
          }
          bypassSecurityTrustStyle(e) {
            return new Qc(e);
          }
          bypassSecurityTrustScript(e) {
            return new Wc(e);
          }
          bypassSecurityTrustUrl(e) {
            return new Kc(e);
          }
          bypassSecurityTrustResourceUrl(e) {
            return new Zc(e);
          }
        })();
      class Bc {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            " (see http://g.co/ng/security#xss)"
          );
        }
      }
      class qc extends Bc {
        getTypeName() {
          return "HTML";
        }
      }
      class Qc extends Bc {
        getTypeName() {
          return "Style";
        }
      }
      class Wc extends Bc {
        getTypeName() {
          return "Script";
        }
      }
      class Kc extends Bc {
        getTypeName() {
          return "URL";
        }
      }
      class Zc extends Bc {
        getTypeName() {
          return "ResourceURL";
        }
      }
      const Gc = bi(ji, "browser", [
        { provide: $s, useValue: qa },
        {
          provide: Vs,
          useValue: function() {
            Yl.makeCurrent(), sc.init();
          },
          multi: !0
        },
        { provide: ya, useClass: tc, deps: [Ba] },
        {
          provide: Ba,
          useFactory: function() {
            return document;
          },
          deps: []
        }
      ]);
      function Yc() {
        return new Lt();
      }
      const Xc = (() => {
        class e {
          constructor(e) {
            if (e)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(t) {
            return {
              ngModule: e,
              providers: [
                { provide: Ls, useValue: t.appId },
                { provide: nc, useExisting: Ls },
                rc
              ]
            };
          }
        }
        return e;
      })();
      "undefined" != typeof window && window;
      class Jc {
        constructor(e, t) {
          (this.id = e), (this.url = t);
        }
      }
      class eu extends Jc {
        constructor(e, t, n = "imperative", r = null) {
          super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class tu extends Jc {
        constructor(e, t, n) {
          super(e, t), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class nu extends Jc {
        constructor(e, t, n) {
          super(e, t), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ru extends Jc {
        constructor(e, t, n) {
          super(e, t), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class su extends Jc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class iu extends Jc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ou extends Jc {
        constructor(e, t, n, r, s) {
          super(e, t),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class au extends Jc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class lu extends Jc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class cu {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class uu {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class hu {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ""}')`;
        }
      }
      class du {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ""}')`;
        }
      }
      class pu {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ""}')`;
        }
      }
      class fu {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ""}')`;
        }
      }
      class mu {
        constructor(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const gu = (() => class {})(),
        yu = "primary";
      class _u {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return this.params.hasOwnProperty(e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function vu(e) {
        return new _u(e);
      }
      const wu = "ngNavigationCancelingError";
      function bu(e) {
        const t = Error("NavigationCancelingError: " + e);
        return (t[wu] = !0), t;
      }
      function Su(e, t, n) {
        const r = n.path.split("/");
        if (r.length > e.length) return null;
        if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const t = r[i],
            n = e[i];
          if (t.startsWith(":")) s[t.substring(1)] = n;
          else if (t !== n.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: s };
      }
      class Eu {
        constructor(e, t) {
          (this.routes = e), (this.module = t);
        }
      }
      function Cu(e, t = "") {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          xu(r, Tu(t, r));
        }
      }
      function xu(e, t) {
        if (!e)
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(e))
          throw new Error(
            `Invalid configuration of route '${t}': Array cannot be specified`
          );
        if (
          !e.component &&
          !e.children &&
          !e.loadChildren &&
          e.outlet &&
          e.outlet !== yu
        )
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (e.redirectTo && e.children)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
          );
        if (e.children && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
          );
        if (e.redirectTo && e.component)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
          );
        if (e.path && e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': path and matcher cannot be used together`
          );
        if (
          void 0 === e.redirectTo &&
          !e.component &&
          !e.children &&
          !e.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        if ("string" == typeof e.path && "/" === e.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${t}': path cannot start with a slash`
          );
        if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== e.pathMatch &&
          "full" !== e.pathMatch &&
          "prefix" !== e.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
          );
        e.children && Cu(e.children, t);
      }
      function Tu(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? `${e}/`
              : !e && t.path
              ? t.path
              : `${e}/${t.path}`
            : ""
          : e;
      }
      function ku(e) {
        const t = e.children && e.children.map(ku),
          n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== yu &&
            (n.component = gu),
          n
        );
      }
      function Iu(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (e[(s = n[i])] !== t[s]) return !1;
        return !0;
      }
      function Au(e) {
        return Array.prototype.concat.apply([], e);
      }
      function Nu(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Ru(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function Pu(e) {
        return Kt(e) ? e : Wt(e) ? Q(Promise.resolve(e)) : Xa(e);
      }
      function Du(e, t, n) {
        return n
          ? (function(e, t) {
              return Iu(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!Lu(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function(e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every(n => t[n] === e[n])
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, s) {
                  if (n.segments.length > s.length) {
                    return (
                      !!Lu(n.segments.slice(0, s.length), s) && !r.hasChildren()
                    );
                  }
                  if (n.segments.length === s.length) {
                    if (!Lu(n.segments, s)) return !1;
                    for (const t in r.children) {
                      if (!n.children[t]) return !1;
                      if (!e(n.children[t], r.children[t])) return !1;
                    }
                    return !0;
                  }
                  {
                    const e = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return (
                      !!Lu(n.segments, e) &&
                      !!n.children[yu] &&
                      t(n.children[yu], r, i)
                    );
                  }
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      class Ou {
        constructor(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = vu(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return $u.serialize(this);
        }
      }
      class Mu {
        constructor(e, t) {
          (this.segments = e),
            (this.children = t),
            (this.parent = null),
            Ru(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Hu(this);
        }
      }
      class Fu {
        constructor(e, t) {
          (this.path = e), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = vu(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Ku(this);
        }
      }
      function Lu(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      function ju(e, t) {
        let n = [];
        return (
          Ru(e.children, (e, r) => {
            r === yu && (n = n.concat(t(e, r)));
          }),
          Ru(e.children, (e, r) => {
            r !== yu && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      class Uu {}
      class Vu {
        parse(e) {
          const t = new Ju(e);
          return new Ou(
            t.parseRootSegment(),
            t.parseQueryParams(),
            t.parseFragment()
          );
        }
        serialize(e) {
          var t;
          return `${`/${(function e(t, n) {
            if (!t.hasChildren()) return Hu(t);
            if (n) {
              const n = t.children[yu] ? e(t.children[yu], !1) : "",
                r = [];
              return (
                Ru(t.children, (t, n) => {
                  n !== yu && r.push(`${n}:${e(t, !1)}`);
                }),
                r.length > 0 ? `${n}(${r.join("//")})` : n
              );
            }
            {
              const n = ju(t, (n, r) =>
                r === yu ? [e(t.children[yu], !1)] : [`${r}:${e(n, !1)}`]
              );
              return `${Hu(t)}/(${n.join("//")})`;
            }
          })(e.root, !0)}`}${(function(e) {
            const t = Object.keys(e).map(t => {
              const n = e[t];
              return Array.isArray(n)
                ? n.map(e => `${Bu(t)}=${Bu(e)}`).join("&")
                : `${Bu(t)}=${Bu(n)}`;
            });
            return t.length ? `?${t.join("&")}` : "";
          })(e.queryParams)}${
            "string" == typeof e.fragment
              ? `#${((t = e.fragment), encodeURI(t))}`
              : ""
          }`;
        }
      }
      const $u = new Vu();
      function Hu(e) {
        return e.segments.map(e => Ku(e)).join("/");
      }
      function zu(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Bu(e) {
        return zu(e).replace(/%3B/gi, ";");
      }
      function qu(e) {
        return zu(e)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Qu(e) {
        return decodeURIComponent(e);
      }
      function Wu(e) {
        return Qu(e.replace(/\+/g, "%20"));
      }
      function Ku(e) {
        return `${qu(e.path)}${((t = e.parameters),
        Object.keys(t)
          .map(e => `;${qu(e)}=${qu(t[e])}`)
          .join(""))}`;
        var t;
      }
      const Zu = /^[^\/()?;=#]+/;
      function Gu(e) {
        const t = e.match(Zu);
        return t ? t[0] : "";
      }
      const Yu = /^[^=?&#]+/,
        Xu = /^[^?&#]+/;
      class Ju {
        constructor(e) {
          (this.url = e), (this.remaining = e);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Mu([], {})
              : new Mu([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional("&"));
          return e;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const e = [];
          for (
            this.peekStartsWith("(") || e.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), e.push(this.parseSegment());
          let t = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (t = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (e.length > 0 || Object.keys(t).length > 0) &&
              (n[yu] = new Mu(e, t)),
            n
          );
        }
        parseSegment() {
          const e = Gu(this.remaining);
          if ("" === e && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(e), new Fu(Qu(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          for (; this.consumeOptional(";"); ) this.parseParam(e);
          return e;
        }
        parseParam(e) {
          const t = Gu(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = "";
          if (this.consumeOptional("=")) {
            const e = Gu(this.remaining);
            e && this.capture((n = e));
          }
          e[Qu(t)] = Qu(n);
        }
        parseQueryParam(e) {
          const t = (function(e) {
            const t = e.match(Yu);
            return t ? t[0] : "";
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = "";
          if (this.consumeOptional("=")) {
            const e = (function(e) {
              const t = e.match(Xu);
              return t ? t[0] : "";
            })(this.remaining);
            e && this.capture((n = e));
          }
          const r = Wu(t),
            s = Wu(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            Array.isArray(t) || (e[r] = t = [t]), t.push(s);
          } else e[r] = s;
        }
        parseParens(e) {
          const t = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = Gu(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : e && (s = yu);
            const i = this.parseChildren();
            (t[s] = 1 === Object.keys(i).length ? i[yu] : new Mu([], i)),
              this.consumeOptional("//");
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return (
            !!this.peekStartsWith(e) &&
            ((this.remaining = this.remaining.substring(e.length)), !0)
          );
        }
        capture(e) {
          if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
        }
      }
      class eh {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(e) {
          const t = th(e, this._root);
          return t ? t.children.map(e => e.value) : [];
        }
        firstChild(e) {
          const t = th(e, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(e) {
          const t = nh(e, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map(e => e.value).filter(t => t !== e);
        }
        pathFromRoot(e) {
          return nh(e, this._root).map(e => e.value);
        }
      }
      function th(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const t = th(e, n);
          if (t) return t;
        }
        return null;
      }
      function nh(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = nh(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class rh {
        constructor(e, t) {
          (this.value = e), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function sh(e) {
        const t = {};
        return e && e.children.forEach(e => (t[e.value.outlet] = e)), t;
      }
      class ih extends eh {
        constructor(e, t) {
          super(e), (this.snapshot = t), hh(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function oh(e, t) {
        const n = (function(e, t) {
            const n = new ch([], {}, {}, "", {}, yu, t, null, e.root, -1, {});
            return new uh("", new rh(n, []));
          })(e, t),
          r = new Ja([new Fu("", {})]),
          s = new Ja({}),
          i = new Ja({}),
          o = new Ja({}),
          a = new Ja(""),
          l = new ah(r, s, o, a, i, yu, t, n.root);
        return (l.snapshot = n.root), new ih(new rh(l, []), n);
      }
      class ah {
        constructor(e, t, n, r, s, i, o, a) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(H(e => vu(e)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(H(e => vu(e)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function lh(e, t = "emptyOnly") {
        const n = e.pathFromRoot;
        let r = 0;
        if ("always" !== t)
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r],
              t = n[r - 1];
            if (e.routeConfig && "" === e.routeConfig.path) r--;
            else {
              if (t.component) break;
              r--;
            }
          }
        return (function(e) {
          return e.reduce(
            (e, t) => ({
              params: Object.assign({}, e.params, t.params),
              data: Object.assign({}, e.data, t.data),
              resolve: Object.assign({}, e.resolve, t._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class ch {
        constructor(e, t, n, r, s, i, o, a, l, c, u) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = vu(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = vu(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map(e => e.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class uh extends eh {
        constructor(e, t) {
          super(t), (this.url = e), hh(this, t);
        }
        toString() {
          return dh(this._root);
        }
      }
      function hh(e, t) {
        (t.value._routerState = e), t.children.forEach(t => hh(e, t));
      }
      function dh(e) {
        const t =
          e.children.length > 0 ? ` { ${e.children.map(dh).join(", ")} } ` : "";
        return `${e.value}${t}`;
      }
      function ph(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Iu(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            Iu(t.params, n.params) || e.params.next(n.params),
            (function(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!Iu(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            Iu(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function fh(e, t) {
        var n, r;
        return (
          Iu(e.params, t.params) &&
          Lu((n = e.url), (r = t.url)) &&
          n.every((e, t) => Iu(e.parameters, r[t].parameters)) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || fh(e.parent, t.parent))
        );
      }
      function mh(e) {
        return (
          "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function gh(e, t, n, r, s) {
        let i = {};
        return (
          r &&
            Ru(r, (e, t) => {
              i[t] = Array.isArray(e) ? e.map(e => `${e}`) : `${e}`;
            }),
          new Ou(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  const s = {};
                  return (
                    Ru(t.children, (t, i) => {
                      s[i] = t === n ? r : e(t, n, r);
                    }),
                    new Mu(t.segments, s)
                  );
                })(n.root, e, t),
            i,
            s
          )
        );
      }
      class yh {
        constructor(e, t, n) {
          if (
            ((this.isAbsolute = e),
            (this.numberOfDoubleDots = t),
            (this.commands = n),
            e && n.length > 0 && mh(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(e => "object" == typeof e && null != e && e.outlets);
          if (r && r !== Nu(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class _h {
        constructor(e, t, n) {
          (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
        }
      }
      function vh(e) {
        return "object" == typeof e && null != e && e.outlets
          ? e.outlets[yu]
          : `${e}`;
      }
      function wh(e, t, n) {
        if (
          (e || (e = new Mu([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return bh(e, t, n);
        const r = (function(e, t, n) {
            let r = 0,
              s = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < e.segments.length; ) {
              if (r >= n.length) return i;
              const t = e.segments[s],
                o = vh(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && "object" == typeof a && void 0 === a.outlets) {
                if (!xh(o, a, t)) return i;
                r += 2;
              } else {
                if (!xh(o, {}, t)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(e, t, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new Mu(e.segments.slice(0, r.pathIndex), {});
          return (
            (t.children[yu] = new Mu(
              e.segments.slice(r.pathIndex),
              e.children
            )),
            bh(t, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new Mu(e.segments, {})
          : r.match && !e.hasChildren()
          ? Sh(e, t, n)
          : r.match
          ? bh(e, 0, s)
          : Sh(e, t, n);
      }
      function bh(e, t, n) {
        if (0 === n.length) return new Mu(e.segments, {});
        {
          const r = (function(e) {
              return "object" != typeof e[0]
                ? { [yu]: e }
                : void 0 === e[0].outlets
                ? { [yu]: e }
                : e[0].outlets;
            })(n),
            s = {};
          return (
            Ru(r, (n, r) => {
              null !== n && (s[r] = wh(e.children[r], t, n));
            }),
            Ru(e.children, (e, t) => {
              void 0 === r[t] && (s[t] = e);
            }),
            new Mu(e.segments, s)
          );
        }
      }
      function Sh(e, t, n) {
        const r = e.segments.slice(0, t);
        let s = 0;
        for (; s < n.length; ) {
          if ("object" == typeof n[s] && void 0 !== n[s].outlets) {
            const e = Eh(n[s].outlets);
            return new Mu(r, e);
          }
          if (0 === s && mh(n[0])) {
            r.push(new Fu(e.segments[t].path, n[0])), s++;
            continue;
          }
          const i = vh(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && mh(o)
            ? (r.push(new Fu(i, Ch(o))), (s += 2))
            : (r.push(new Fu(i, {})), s++);
        }
        return new Mu(r, {});
      }
      function Eh(e) {
        const t = {};
        return (
          Ru(e, (e, n) => {
            null !== e && (t[n] = Sh(new Mu([], {}), 0, e));
          }),
          t
        );
      }
      function Ch(e) {
        const t = {};
        return Ru(e, (e, n) => (t[n] = `${e}`)), t;
      }
      function xh(e, t, n) {
        return e == n.path && Iu(t, n.parameters);
      }
      const Th = (e, t, n) =>
        H(
          r => (
            new kh(t, r.targetRouterState, r.currentRouterState, n).activate(e),
            r
          )
        );
      class kh {
        constructor(e, t, n, r) {
          (this.routeReuseStrategy = e),
            (this.futureState = t),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(e) {
          const t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e),
            ph(this.futureState.root),
            this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = sh(t);
          e.children.forEach(e => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n), delete r[t];
          }),
            Ru(r, (e, t) => {
              this.deactivateRouteAndItsChildren(e, n);
            });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(e, t, s.children);
            } else this.deactivateChildRoutes(e, t, n);
          else s && this.deactivateRouteAndItsChildren(t, n);
        }
        deactivateRouteAndItsChildren(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: t,
              route: e,
              contexts: r
            });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n) {
            const r = sh(e),
              s = e.value.component ? n.children : t;
            Ru(r, (e, t) => this.deactivateRouteAndItsChildren(e, s)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(e, t, n) {
          const r = sh(t);
          e.children.forEach(e => {
            this.activateRoutes(e, r[e.value.outlet], n),
              this.forwardEvent(new fu(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new du(e.value.snapshot));
        }
        activateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if ((ph(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, s.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                t.children.onOutletReAttached(e.contexts),
                (t.attachRef = e.componentRef),
                (t.route = e.route.value),
                t.outlet && t.outlet.attach(e.componentRef, e.route.value),
                Ih(e.route);
            } else {
              const n = (function(e) {
                  for (let t = r.snapshot.parent; t; t = t.parent) {
                    const e = t.routeConfig;
                    if (e && e._loadedConfig) return e._loadedConfig;
                    if (e && e.component) return null;
                  }
                  return null;
                })(),
                s = n ? n.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = r),
                (t.resolver = s),
                t.outlet && t.outlet.activateWith(r, s),
                this.activateChildRoutes(e, null, t.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }
      }
      function Ih(e) {
        ph(e.value), e.children.forEach(Ih);
      }
      function Ah(e) {
        return "function" == typeof e;
      }
      function Nh(e) {
        return e instanceof Ou;
      }
      class Rh {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class Ph {
        constructor(e) {
          this.urlTree = e;
        }
      }
      function Dh(e) {
        return new b(t => t.error(new Rh(e)));
      }
      function Oh(e) {
        return new b(t => t.error(new Ph(e)));
      }
      function Mh(e) {
        return new b(t =>
          t.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${e}'`
            )
          )
        );
      }
      class Fh {
        constructor(e, t, n, r, s) {
          (this.configLoader = t),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = e.get(sn));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            yu
          )
            .pipe(
              H(e =>
                this.createUrlTree(
                  e,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              El(e => {
                if (e instanceof Ph)
                  return (this.allowRedirects = !1), this.match(e.urlTree);
                if (e instanceof Rh) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(this.ngModule, this.config, e.root, yu)
            .pipe(H(t => this.createUrlTree(t, e.queryParams, e.fragment)))
            .pipe(
              El(e => {
                if (e instanceof Rh) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(
            `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
          );
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new Mu([], { [yu]: e }) : e;
          return new Ou(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe(H(e => new Mu([], e)))
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }
        expandChildren(e, t, n) {
          return (function(e, t) {
            if (0 === Object.keys(e).length) return Xa({});
            const n = [],
              r = [],
              s = {};
            return (
              Ru(e, (e, i) => {
                const o = t(i, e).pipe(H(e => (s[i] = e)));
                i === yu ? n.push(o) : r.push(o);
              }),
              Xa.apply(null, n.concat(r)).pipe(
                ol(),
                Sl(),
                H(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
        }
        expandSegment(e, t, n, r, s, i) {
          return Xa(...n).pipe(
            H(o =>
              this.expandSegmentAgainstRoute(e, t, n, o, r, s, i).pipe(
                El(e => {
                  if (e instanceof Rh) return Xa(null);
                  throw e;
                })
              )
            ),
            ol(),
            Al(e => !!e),
            El((e, n) => {
              if (e instanceof tl || "EmptyError" === e.name) {
                if (this.noLeftoversInUrl(t, r, s)) return Xa(new Mu([], {}));
                throw new Rh(t);
              }
              throw e;
            })
          );
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        expandSegmentAgainstRoute(e, t, n, r, s, i, o) {
          return Vh(r) !== i
            ? Dh(t)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(e, t, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i)
            : Dh(t);
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                e,
                t,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? Oh(s)
            : this.lineralizeSegments(n, s).pipe(
                W(n => {
                  const s = new Mu(n, {});
                  return this.expandSegment(e, s, t, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c
          } = Lh(t, r, s);
          if (!o) return Dh(t);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith("/")
            ? Oh(u)
            : this.lineralizeSegments(r, u).pipe(
                W(r => this.expandSegment(e, t, n, r.concat(s.slice(l)), i, !1))
              );
        }
        matchSegmentAgainstRoute(e, t, n, r) {
          if ("**" === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(e.injector, n)
                  .pipe(H(e => ((n._loadedConfig = e), new Mu(r, {}))))
              : Xa(new Mu(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = Lh(t, n, r);
          if (!s) return Dh(t);
          const a = r.slice(o);
          return this.getChildConfig(e, n, r).pipe(
            W(e => {
              const n = e.module,
                r = e.routes,
                { segmentGroup: s, slicedSegments: o } = (function(e, t, n, r) {
                  return n.length > 0 &&
                    (function(e, t, n) {
                      return r.some(n => Uh(e, t, n) && Vh(n) !== yu);
                    })(e, n)
                    ? {
                        segmentGroup: jh(
                          new Mu(
                            t,
                            (function(e, t) {
                              const n = {};
                              n[yu] = t;
                              for (const r of e)
                                "" === r.path &&
                                  Vh(r) !== yu &&
                                  (n[Vh(r)] = new Mu([], {}));
                              return n;
                            })(r, new Mu(n, e.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === n.length &&
                      (function(e, t, n) {
                        return r.some(n => Uh(e, t, n));
                      })(e, n)
                    ? {
                        segmentGroup: jh(
                          new Mu(
                            e.segments,
                            (function(e, t, n, r) {
                              const s = {};
                              for (const i of n)
                                Uh(e, t, i) &&
                                  !r[Vh(i)] &&
                                  (s[Vh(i)] = new Mu([], {}));
                              return Object.assign({}, r, s);
                            })(e, n, r, e.children)
                          )
                        ),
                        slicedSegments: n
                      }
                    : { segmentGroup: e, slicedSegments: n };
                })(t, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(H(e => new Mu(i, e)))
                : 0 === r.length && 0 === o.length
                ? Xa(new Mu(i, {}))
                : this.expandSegment(n, s, r, o, yu, !0).pipe(
                    H(e => new Mu(i.concat(e.segments), e.children))
                  );
            })
          );
        }
        getChildConfig(e, t, n) {
          return t.children
            ? Xa(new Eu(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Xa(t._loadedConfig)
              : (function(e, t, n) {
                  const r = t.canLoad;
                  return r && 0 !== r.length
                    ? Q(r)
                        .pipe(
                          H(r => {
                            const s = e.get(r);
                            let i;
                            if (
                              (function(e) {
                                return e && Ah(e.canLoad);
                              })(s)
                            )
                              i = s.canLoad(t, n);
                            else {
                              if (!Ah(s))
                                throw new Error("Invalid CanLoad guard");
                              i = s(t, n);
                            }
                            return Pu(i);
                          })
                        )
                        .pipe(
                          ol(),
                          ((s = e => !0 === e),
                          e => e.lift(new Nl(s, void 0, e)))
                        )
                    : Xa(!0);
                  var s;
                })(e.injector, t, n).pipe(
                  W(n =>
                    n
                      ? this.configLoader
                          .load(e.injector, t)
                          .pipe(H(e => ((t._loadedConfig = e), e)))
                      : (function(e) {
                          return new b(t =>
                            t.error(
                              bu(
                                `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : Xa(new Eu([], e));
        }
        lineralizeSegments(e, t) {
          let n = [],
            r = t.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Xa(n);
            if (r.numberOfChildren > 1 || !r.children[yu])
              return Mh(e.redirectTo);
            r = r.children[yu];
          }
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(
            t,
            this.urlSerializer.parse(t),
            e,
            n
          );
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const s = this.createSegmentGroup(e, t.root, n, r);
          return new Ou(
            s,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(e, t) {
          const n = {};
          return (
            Ru(e, (e, r) => {
              if ("string" == typeof e && e.startsWith(":")) {
                const s = e.substring(1);
                n[r] = t[s];
              } else n[r] = e;
            }),
            n
          );
        }
        createSegmentGroup(e, t, n, r) {
          const s = this.createSegments(e, t.segments, n, r);
          let i = {};
          return (
            Ru(t.children, (t, s) => {
              i[s] = this.createSegmentGroup(e, t, n, r);
            }),
            new Mu(s, i)
          );
        }
        createSegments(e, t, n, r) {
          return t.map(t =>
            t.path.startsWith(":")
              ? this.findPosParam(e, t, r)
              : this.findOrReturn(t, n)
          );
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${e}'. Cannot find '${t.path}'.`
            );
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) return t.splice(n), r;
            n++;
          }
          return e;
        }
      }
      function Lh(e, t, n) {
        if ("" === t.path)
          return "full" === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
              };
        const r = (t.matcher || Su)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {}
            };
      }
      function jh(e) {
        if (1 === e.numberOfChildren && e.children[yu]) {
          const t = e.children[yu];
          return new Mu(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function Uh(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Vh(e) {
        return e.outlet || yu;
      }
      class $h {
        constructor(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Hh {
        constructor(e, t) {
          (this.component = e), (this.route = t);
        }
      }
      function zh(e, t, n) {
        const r = e._root;
        return (function e(
          t,
          n,
          r,
          s,
          i = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = sh(n);
          return (
            t.children.forEach(t => {
              !(function(
                t,
                n,
                r,
                s,
                i = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const o = t.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(t.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function(e, t, n) {
                    if ("function" == typeof n) return n(e, t);
                    switch (n) {
                      case "pathParamsChange":
                        return !Lu(e.url, t.url);
                      case "pathParamsOrQueryParamsChange":
                        return (
                          !Lu(e.url, t.url) || !Iu(e.queryParams, t.queryParams)
                        );
                      case "always":
                        return !0;
                      case "paramsOrQueryParamsChange":
                        return !fh(e, t) || !Iu(e.queryParams, t.queryParams);
                      case "paramsChange":
                      default:
                        return !fh(e, t);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  if (
                    (c
                      ? i.canActivateChecks.push(new $h(s))
                      : ((o.data = a.data),
                        (o._resolvedData = a._resolvedData)),
                    e(t, n, o.component ? (l ? l.children : null) : r, s, i),
                    c)
                  ) {
                    i.canDeactivateChecks.push(
                      new Hh((l && l.outlet && l.outlet.component) || null, a)
                    );
                  }
                } else
                  a && qh(n, l, i),
                    i.canActivateChecks.push(new $h(s)),
                    e(t, null, o.component ? (l ? l.children : null) : r, s, i);
              })(t, o[t.value.outlet], r, s.concat([t.value]), i),
                delete o[t.value.outlet];
            }),
            Ru(o, (e, t) => qh(e, r.getContext(t), i)),
            i
          );
        })(r, t ? t._root : null, n, [r.value]);
      }
      function Bh(e, t, n) {
        const r = (function(e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) return e._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function qh(e, t, n) {
        const r = sh(e),
          s = e.value;
        Ru(r, (e, r) => {
          qh(e, s.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new Hh(
              s.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              s
            )
          );
      }
      const Qh = Symbol("INITIAL_VALUE");
      function Wh() {
        return Pl(e =>
          (function(...e) {
            let t = null,
              n = null;
            return (
              A(e[e.length - 1]) && (n = e.pop()),
              "function" == typeof e[e.length - 1] && (t = e.pop()),
              1 === e.length && l(e[0]) && (e = e[0]),
              q(e, n).lift(new rl(t))
            );
          })(
            ...e.map(e =>
              e.pipe(
                Tl(1),
                (function(...e) {
                  return t => {
                    let n = e[e.length - 1];
                    A(n) ? e.pop() : (n = null);
                    const r = e.length;
                    return Ml(
                      1 !== r || n ? (r > 0 ? q(e, n) : Ga(n)) : Ya(e[0]),
                      t
                    );
                  };
                })(Qh)
              )
            )
          ).pipe(
            Fl((e, t) => {
              let n = !1;
              return t.reduce((e, r, s) => {
                if (e !== Qh) return e;
                if ((r === Qh && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === t.length - 1 || Nh(r)) return r;
                }
                return e;
              }, e);
            }, Qh),
            al(e => e !== Qh),
            H(e => (Nh(e) ? e : !0 === e)),
            Tl(1)
          )
        );
      }
      function Kh(e, t) {
        return null !== e && t && t(new pu(e)), Xa(!0);
      }
      function Zh(e, t) {
        return null !== e && t && t(new hu(e)), Xa(!0);
      }
      function Gh(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Xa(
              r.map(r =>
                il(() => {
                  const s = Bh(r, t, n);
                  let i;
                  if (
                    (function(e) {
                      return e && Ah(e.canActivate);
                    })(s)
                  )
                    i = Pu(s.canActivate(t, e));
                  else {
                    if (!Ah(s)) throw new Error("Invalid CanActivate guard");
                    i = Pu(s(t, e));
                  }
                  return i.pipe(Al());
                })
              )
            ).pipe(Wh())
          : Xa(!0);
      }
      function Yh(e, t, n) {
        const r = t[t.length - 1],
          s = t
            .slice(0, t.length - 1)
            .reverse()
            .map(e =>
              (function(e) {
                const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e)
            )
            .filter(e => null !== e)
            .map(t =>
              il(() =>
                Xa(
                  t.guards.map(s => {
                    const i = Bh(s, t.node, n);
                    let o;
                    if (
                      (function(e) {
                        return e && Ah(e.canActivateChild);
                      })(i)
                    )
                      o = Pu(i.canActivateChild(r, e));
                    else {
                      if (!Ah(i))
                        throw new Error("Invalid CanActivateChild guard");
                      o = Pu(i(r, e));
                    }
                    return o.pipe(Al());
                  })
                ).pipe(Wh())
              )
            );
        return Xa(s).pipe(Wh());
      }
      class Xh {}
      class Jh {
        constructor(e, t, n, r, s, i) {
          (this.rootComponentType = e),
            (this.config = t),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = nd(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              n = this.processSegmentGroup(this.config, t, yu),
              r = new ch(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                yu,
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              s = new rh(r, n),
              i = new uh(this.url, s);
            return this.inheritParamsAndData(i._root), Xa(i);
          } catch (e) {
            return new b(t => t.error(e));
          }
        }
        inheritParamsAndData(e) {
          const t = e.value,
            n = lh(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(n.params)),
            (t.data = Object.freeze(n.data)),
            e.children.forEach(e => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }
        processChildren(e, t) {
          const n = ju(t, (t, n) => this.processSegmentGroup(e, t, n));
          return (
            (function(e) {
              const t = {};
              n.forEach(e => {
                const n = t[e.value.outlet];
                if (n) {
                  const t = n.url.map(e => e.toString()).join("/"),
                    r = e.value.url.map(e => e.toString()).join("/");
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${t}' and '${r}'.`
                  );
                }
                t[e.value.outlet] = e.value;
              });
            })(),
            n.sort((e, t) =>
              e.value.outlet === yu
                ? -1
                : t.value.outlet === yu
                ? 1
                : e.value.outlet.localeCompare(t.value.outlet)
            ),
            n
          );
        }
        processSegment(e, t, n, r) {
          for (const i of e)
            try {
              return this.processSegmentAgainstRoute(i, t, n, r);
            } catch (s) {
              if (!(s instanceof Xh)) throw s;
            }
          if (this.noLeftoversInUrl(t, n, r)) return [];
          throw new Xh();
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo) throw new Xh();
          if ((e.outlet || yu) !== r) throw new Xh();
          let s,
            i = [],
            o = [];
          if ("**" === e.path) {
            const i = n.length > 0 ? Nu(n).parameters : {};
            s = new ch(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              id(e),
              r,
              e.component,
              e,
              ed(t),
              td(t) + n.length,
              od(e)
            );
          } else {
            const a = (function(e, t, n) {
              if ("" === t.path) {
                if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0))
                  throw new Xh();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (t.matcher || Su)(n, e, t);
              if (!r) throw new Xh();
              const s = {};
              Ru(r.posParams, (e, t) => {
                s[t] = e.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(
                      {},
                      s,
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : s;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: i
              };
            })(t, e, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new ch(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                id(e),
                r,
                e.component,
                e,
                ed(t),
                td(t) + i.length,
                od(e)
              ));
          }
          const a = (function(e) {
              return e.children
                ? e.children
                : e.loadChildren
                ? e._loadedConfig.routes
                : [];
            })(e),
            { segmentGroup: l, slicedSegments: c } = nd(
              t,
              i,
              o,
              a,
              this.relativeLinkResolution
            );
          if (0 === c.length && l.hasChildren()) {
            const e = this.processChildren(a, l);
            return [new rh(s, e)];
          }
          if (0 === a.length && 0 === c.length) return [new rh(s, [])];
          const u = this.processSegment(a, l, c, yu);
          return [new rh(s, u)];
        }
      }
      function ed(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function td(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          n += (t = t._sourceSegment)._segmentIndexShift
            ? t._segmentIndexShift
            : 0;
        return n - 1;
      }
      function nd(e, t, n, r, s) {
        if (
          n.length > 0 &&
          (function(e, t, n) {
            return r.some(n => rd(e, t, n) && sd(n) !== yu);
          })(e, n)
        ) {
          const s = new Mu(
            t,
            (function(e, t, n, r) {
              const s = {};
              (s[yu] = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              for (const i of n)
                if ("" === i.path && sd(i) !== yu) {
                  const n = new Mu([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift = t.length),
                    (s[sd(i)] = n);
                }
              return s;
            })(e, t, r, new Mu(n, e.children))
          );
          return (
            (s._sourceSegment = e),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function(e, t, n) {
            return r.some(n => rd(e, t, n));
          })(e, n)
        ) {
          const i = new Mu(
            e.segments,
            (function(e, t, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (rd(e, n, a) && !s[sd(a)]) {
                  const n = new Mu([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift =
                      "legacy" === i ? e.segments.length : t.length),
                    (o[sd(a)] = n);
                }
              return Object.assign({}, s, o);
            })(e, t, n, r, e.children, s)
          );
          return (
            (i._sourceSegment = e),
            (i._segmentIndexShift = t.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new Mu(e.segments, e.children);
        return (
          (i._sourceSegment = e),
          (i._segmentIndexShift = t.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function rd(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function sd(e) {
        return e.outlet || yu;
      }
      function id(e) {
        return e.data || {};
      }
      function od(e) {
        return e.resolve || {};
      }
      function ad(e, t, n, r) {
        const s = Bh(e, t, r);
        return Pu(s.resolve ? s.resolve(t, n) : s(t, n));
      }
      function ld(e) {
        return function(t) {
          return t.pipe(
            Pl(t => {
              const n = e(t);
              return n ? Q(n).pipe(H(() => t)) : Q([t]);
            })
          );
        };
      }
      class cd {}
      class ud {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      }
      const hd = new Ie("ROUTES");
      class dd {
        constructor(e, t, n, r) {
          (this.loader = e),
            (this.compiler = t),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(e, t) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(t),
            this.loadModuleFactory(t.loadChildren).pipe(
              H(n => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const r = n.create(e);
                return new Eu(Au(r.injector.get(hd)).map(ku), r);
              })
            )
          );
        }
        loadModuleFactory(e) {
          return "string" == typeof e
            ? Q(this.loader.load(e))
            : Pu(e()).pipe(
                W(e =>
                  e instanceof on
                    ? Xa(e)
                    : Q(this.compiler.compileModuleAsync(e))
                )
              );
        }
      }
      class pd {}
      class fd {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      function md(e) {
        throw e;
      }
      function gd(e, t, n) {
        return t.parse("/");
      }
      function yd(e, t) {
        return Xa(null);
      }
      class _d {
        constructor(e, t, n, r, s, i, o, a) {
          (this.rootComponentType = e),
            (this.urlSerializer = t),
            (this.rootContexts = n),
            (this.location = r),
            (this.config = a),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new k()),
            (this.errorHandler = md),
            (this.malformedUriErrorHandler = gd),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: yd, afterPreactivation: yd }),
            (this.urlHandlingStrategy = new fd()),
            (this.routeReuseStrategy = new ud()),
            (this.onSameUrlNavigation = "ignore"),
            (this.paramsInheritanceStrategy = "emptyOnly"),
            (this.urlUpdateStrategy = "deferred"),
            (this.relativeLinkResolution = "legacy"),
            (this.ngModule = s.get(sn)),
            (this.console = s.get(zs));
          const l = s.get(oi);
          (this.isNgZoneEnabled = l instanceof oi),
            this.resetConfig(a),
            (this.currentUrlTree = new Ou(new Mu([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new dd(
              i,
              o,
              e => this.triggerEvent(new cu(e)),
              e => this.triggerEvent(new uu(e))
            )),
            (this.routerState = oh(
              this.currentUrlTree,
              this.rootComponentType
            )),
            (this.transitions = new Ja({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              urlAfterRedirects: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: "imperative",
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(e) {
          const t = this.events;
          return e.pipe(
            al(e => 0 !== e.id),
            H(e =>
              Object.assign({}, e, {
                extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl)
              })
            ),
            Pl(e => {
              let n = !1,
                r = !1;
              return Xa(e).pipe(
                ml(e => {
                  this.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null
                        })
                      : null
                  };
                }),
                Pl(e => {
                  const n =
                    !this.navigated ||
                    e.extractedUrl.toString() !==
                      this.browserUrlTree.toString();
                  if (
                    ("reload" === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  )
                    return Xa(e).pipe(
                      Pl(e => {
                        const n = this.transitions.getValue();
                        return (
                          t.next(
                            new eu(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              e.source,
                              e.restoredState
                            )
                          ),
                          n !== this.transitions.getValue() ? Za : [e]
                        );
                      }),
                      Pl(e => Promise.resolve(e)),
                      (function(e, t, n, r) {
                        return function(s) {
                          return s.pipe(
                            Pl(s =>
                              (function(e, t, n, r, i) {
                                return new Fh(
                                  e,
                                  t,
                                  n,
                                  s.extractedUrl,
                                  i
                                ).apply();
                              })(e, t, n, 0, r).pipe(
                                H(e =>
                                  Object.assign({}, s, { urlAfterRedirects: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.ngModule.injector,
                        this.configLoader,
                        this.urlSerializer,
                        this.config
                      ),
                      ml(e => {
                        this.currentNavigation = Object.assign(
                          {},
                          this.currentNavigation,
                          { finalUrl: e.urlAfterRedirects }
                        );
                      }),
                      (function(e, t, n, r, s) {
                        return function(i) {
                          return i.pipe(
                            W(i =>
                              (function(
                                e,
                                t,
                                n,
                                r,
                                s = "emptyOnly",
                                i = "legacy"
                              ) {
                                return new Jh(e, t, n, r, s, i).recognize();
                              })(
                                e,
                                t,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                H(e =>
                                  Object.assign({}, i, { targetSnapshot: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        e => this.serializeUrl(e),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      ml(e => {
                        "eager" === this.urlUpdateStrategy &&
                          (e.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              e.urlAfterRedirects,
                              !!e.extras.replaceUrl,
                              e.id,
                              e.extras.state
                            ),
                          (this.browserUrlTree = e.urlAfterRedirects));
                      }),
                      ml(e => {
                        const n = new su(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.next(n);
                      })
                    );
                  if (
                    n &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const {
                        id: n,
                        extractedUrl: r,
                        source: s,
                        restoredState: i,
                        extras: o
                      } = e,
                      a = new eu(n, this.serializeUrl(r), s, i);
                    t.next(a);
                    const l = oh(r, this.rootComponentType).snapshot;
                    return Xa(
                      Object.assign({}, e, {
                        targetSnapshot: l,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, o, {
                          skipLocationChange: !1,
                          replaceUrl: !1
                        })
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = e.rawUrl),
                    (this.browserUrlTree = e.urlAfterRedirects),
                    e.resolve(null),
                    Za
                  );
                }),
                ld(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o }
                  } = e;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o
                  });
                }),
                ml(e => {
                  const t = new iu(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                H(e =>
                  Object.assign({}, e, {
                    guards: zh(
                      e.targetSnapshot,
                      e.currentSnapshot,
                      this.rootContexts
                    )
                  })
                ),
                (function(e, t) {
                  return function(n) {
                    return n.pipe(
                      W(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: o
                          }
                        } = n;
                        return 0 === o.length && 0 === i.length
                          ? Xa(Object.assign({}, n, { guardsResult: !0 }))
                          : (function(e, t, n, r) {
                              return Q(o).pipe(
                                W(e =>
                                  (function(e, t, n, r, s) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? Xa(
                                          i.map(i => {
                                            const o = Bh(i, t, s);
                                            let a;
                                            if (
                                              (function(e) {
                                                return e && Ah(e.canDeactivate);
                                              })(o)
                                            )
                                              a = Pu(
                                                o.canDeactivate(e, t, n, r)
                                              );
                                            else {
                                              if (!Ah(o))
                                                throw new Error(
                                                  "Invalid CanDeactivate guard"
                                                );
                                              a = Pu(o(e, t, n, r));
                                            }
                                            return a.pipe(Al());
                                          })
                                        ).pipe(Wh())
                                      : Xa(!0);
                                  })(e.component, e.route, n, t, r)
                                ),
                                Al(e => !0 !== e, !0)
                              );
                            })(0, r, s, e).pipe(
                              W(n =>
                                n &&
                                (function(e) {
                                  return "boolean" == typeof n;
                                })()
                                  ? (function(e, t, n, r) {
                                      return Q(i).pipe(
                                        Ul(t =>
                                          Q([
                                            Zh(t.route.parent, r),
                                            Kh(t.route, r),
                                            Yh(e, t.path, n),
                                            Gh(e, t.route, n)
                                          ]).pipe(
                                            ol(),
                                            Al(e => !0 !== e, !0)
                                          )
                                        ),
                                        Al(e => !0 !== e, !0)
                                      );
                                    })(r, 0, e, t)
                                  : Xa(n)
                              ),
                              H(e => Object.assign({}, n, { guardsResult: e }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, e => this.triggerEvent(e)),
                ml(e => {
                  if (Nh(e.guardsResult)) {
                    const t = bu(
                      `Redirecting to "${this.serializeUrl(e.guardsResult)}"`
                    );
                    throw ((t.url = e.guardsResult), t);
                  }
                }),
                ml(e => {
                  const t = new ou(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                al(e => {
                  if (!e.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new nu(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      ""
                    );
                    return t.next(n), e.resolve(!1), !1;
                  }
                  return !0;
                }),
                ld(e => {
                  if (e.guards.canActivateChecks.length)
                    return Xa(e).pipe(
                      ml(e => {
                        const t = new au(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      (function(e, t) {
                        return function(n) {
                          return n.pipe(
                            W(n => {
                              const {
                                targetSnapshot: r,
                                guards: { canActivateChecks: s }
                              } = n;
                              return s.length
                                ? Q(s).pipe(
                                    Ul(n =>
                                      (function(e, t, n, s) {
                                        return (function(e, t, n, r) {
                                          const s = Object.keys(e);
                                          if (0 === s.length) return Xa({});
                                          if (1 === s.length) {
                                            const i = s[0];
                                            return ad(e[i], t, n, r).pipe(
                                              H(e => ({ [i]: e }))
                                            );
                                          }
                                          const i = {};
                                          return Q(s)
                                            .pipe(
                                              W(s =>
                                                ad(e[s], t, n, r).pipe(
                                                  H(e => ((i[s] = e), e))
                                                )
                                              )
                                            )
                                            .pipe(
                                              Sl(),
                                              H(() => i)
                                            );
                                        })(e._resolve, e, r, s).pipe(
                                          H(
                                            t => (
                                              (e._resolvedData = t),
                                              (e.data = Object.assign(
                                                {},
                                                e.data,
                                                lh(e, n).resolve
                                              )),
                                              null
                                            )
                                          )
                                        );
                                      })(n.route, 0, e, t)
                                    ),
                                    (function(e, t) {
                                      return arguments.length >= 2
                                        ? function(n) {
                                            return v(Fl(e, t), dl(1), vl(t))(n);
                                          }
                                        : function(t) {
                                            return v(
                                              Fl((t, n, r) => e(t, n, r + 1)),
                                              dl(1)
                                            )(t);
                                          };
                                    })((e, t) => e),
                                    H(e => n)
                                  )
                                : Xa(n);
                            })
                          );
                        };
                      })(
                        this.paramsInheritanceStrategy,
                        this.ngModule.injector
                      ),
                      ml(e => {
                        const t = new lu(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                }),
                ld(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o }
                  } = e;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o
                  });
                }),
                H(e => {
                  const t = (function(e, t, n) {
                    const r = (function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const s = r.value;
                        s._futureSnapshot = n.value;
                        const i = (function(t, n, r) {
                          return n.children.map(n => {
                            for (const s of r.children)
                              if (t.shouldReuseRoute(s.value.snapshot, n.value))
                                return e(t, n, s);
                            return e(t, n);
                          });
                        })(t, n, r);
                        return new rh(s, i);
                      }
                      {
                        const r = t.retrieve(n.value);
                        if (r) {
                          const e = r.route;
                          return (
                            (function e(t, n) {
                              if (t.value.routeConfig !== n.value.routeConfig)
                                throw new Error(
                                  "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                );
                              if (t.children.length !== n.children.length)
                                throw new Error(
                                  "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                );
                              n.value._futureSnapshot = t.value;
                              for (let r = 0; r < t.children.length; ++r)
                                e(t.children[r], n.children[r]);
                            })(n, e),
                            e
                          );
                        }
                        {
                          const r = new ah(
                              new Ja((s = n.value).url),
                              new Ja(s.params),
                              new Ja(s.queryParams),
                              new Ja(s.fragment),
                              new Ja(s.data),
                              s.outlet,
                              s.component,
                              s
                            ),
                            i = n.children.map(n => e(t, n));
                          return new rh(r, i);
                        }
                      }
                      var s;
                    })(e, t._root, n ? n._root : void 0);
                    return new ih(r, t);
                  })(
                    this.routeReuseStrategy,
                    e.targetSnapshot,
                    e.currentRouterState
                  );
                  return Object.assign({}, e, { targetRouterState: t });
                }),
                ml(e => {
                  (this.currentUrlTree = e.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      e.rawUrl
                    )),
                    (this.routerState = e.targetRouterState),
                    "deferred" === this.urlUpdateStrategy &&
                      (e.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!e.extras.replaceUrl,
                          e.id,
                          e.extras.state
                        ),
                      (this.browserUrlTree = e.urlAfterRedirects));
                }),
                Th(this.rootContexts, this.routeReuseStrategy, e =>
                  this.triggerEvent(e)
                ),
                ml({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  }
                }),
                (function(e) {
                  return t => t.lift(new Vl(e));
                })(() => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new nu(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    t.next(n), e.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                El(n => {
                  if (
                    ((r = !0),
                    (function(e) {
                      return n && n[wu];
                    })())
                  ) {
                    const r = Nh(n.url);
                    r ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(
                        e.currentRouterState,
                        e.currentUrlTree,
                        e.rawUrl
                      ));
                    const s = new nu(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n.message
                    );
                    t.next(s), e.resolve(!1), r && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(
                      e.currentRouterState,
                      e.currentUrlTree,
                      e.rawUrl
                    );
                    const r = new ru(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n
                    );
                    t.next(r);
                    try {
                      e.resolve(this.errorHandler(n));
                    } catch (s) {
                      e.reject(s);
                    }
                  }
                  return Za;
                })
              );
            })
          );
        }
        resetRootComponentType(e) {
          (this.rootComponentType = e),
            (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const e = this.transitions.value;
          return (e.urlAfterRedirects = this.browserUrlTree), e;
        }
        setTransition(e) {
          this.transitions.next(Object.assign({}, this.getTransition(), e));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(e => {
              let t = this.parseUrl(e.url);
              const n = "popstate" === e.type ? "popstate" : "hashchange",
                r = e.state && e.state.navigationId ? e.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, n, r, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(e) {
          this.events.next(e);
        }
        resetConfig(e) {
          Cu(e),
            (this.config = e.map(ku)),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(),
            (this.locationSubscription = null));
        }
        createUrlTree(e, t = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: s,
            preserveQueryParams: i,
            queryParamsHandling: o,
            preserveFragment: a
          } = t;
          lt() &&
            i &&
            console &&
            console.warn &&
            console.warn(
              "preserveQueryParams is deprecated, use queryParamsHandling instead."
            );
          const l = n || this.routerState.root,
            c = a ? this.currentUrlTree.fragment : s;
          let u = null;
          if (o)
            switch (o) {
              case "merge":
                u = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case "preserve":
                u = this.currentUrlTree.queryParams;
                break;
              default:
                u = r || null;
            }
          else u = i ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== u && (u = this.removeEmptyProps(u)),
            (function(e, t, n, r, s) {
              if (0 === n.length) return gh(t.root, t.root, t, r, s);
              const i = (function(e) {
                if ("string" == typeof e[0] && 1 === e.length && "/" === e[0])
                  return new yh(!0, 0, e);
                let t = 0,
                  n = !1;
                const r = e.reduce((e, r, s) => {
                  if ("object" == typeof r && null != r) {
                    if (r.outlets) {
                      const t = {};
                      return (
                        Ru(r.outlets, (e, n) => {
                          t[n] = "string" == typeof e ? e.split("/") : e;
                        }),
                        [...e, { outlets: t }]
                      );
                    }
                    if (r.segmentPath) return [...e, r.segmentPath];
                  }
                  return "string" != typeof r
                    ? [...e, r]
                    : 0 === s
                    ? (r.split("/").forEach((r, s) => {
                        (0 == s && "." === r) ||
                          (0 == s && "" === r
                            ? (n = !0)
                            : ".." === r
                            ? t++
                            : "" != r && e.push(r));
                      }),
                      e)
                    : [...e, r];
                }, []);
                return new yh(n, t, r);
              })(n);
              if (i.toRoot()) return gh(t.root, new Mu([], {}), t, r, s);
              const o = (function(e, n, r) {
                  if (e.isAbsolute) return new _h(t.root, !0, 0);
                  if (-1 === r.snapshot._lastPathIndex)
                    return new _h(r.snapshot._urlSegment, !0, 0);
                  const s = mh(e.commands[0]) ? 0 : 1;
                  return (function(t, n, i) {
                    let o = r.snapshot._urlSegment,
                      a = r.snapshot._lastPathIndex + s,
                      l = e.numberOfDoubleDots;
                    for (; l > a; ) {
                      if (((l -= a), !(o = o.parent)))
                        throw new Error("Invalid number of '../'");
                      a = o.segments.length;
                    }
                    return new _h(o, !1, a - l);
                  })();
                })(i, 0, e),
                a = o.processChildren
                  ? bh(o.segmentGroup, o.index, i.commands)
                  : wh(o.segmentGroup, o.index, i.commands);
              return gh(o.segmentGroup, a, t, r, s);
            })(l, this.currentUrlTree, e, u, c)
          );
        }
        navigateByUrl(e, t = { skipLocationChange: !1 }) {
          lt() &&
            this.isNgZoneEnabled &&
            !oi.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const n = Nh(e) ? e : this.parseUrl(e),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, "imperative", null, t);
        }
        navigate(e, t = { skipLocationChange: !1 }) {
          return (
            (function(e) {
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (null == n)
                  throw new Error(
                    `The requested path contains ${n} segment at index ${t}`
                  );
              }
            })(e),
            this.navigateByUrl(this.createUrlTree(e, t), t)
          );
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          let t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }
        isActive(e, t) {
          if (Nh(e)) return Du(this.currentUrlTree, e, t);
          const n = this.parseUrl(e);
          return Du(this.currentUrlTree, n, t);
        }
        removeEmptyProps(e) {
          return Object.keys(e).reduce((t, n) => {
            const r = e[n];
            return null != r && (t[n] = r), t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            e => {
              (this.navigated = !0),
                (this.lastSuccessfulId = e.id),
                this.events.next(
                  new tu(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                e.resolve(!0);
            },
            e => {
              this.console.warn("Unhandled Navigation Error: ");
            }
          );
        }
        scheduleNavigation(e, t, n, r) {
          const s = this.getTransition();
          if (
            s &&
            "imperative" !== t &&
            "imperative" === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            s &&
            "hashchange" == t &&
            "popstate" === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            s &&
            "popstate" == t &&
            "hashchange" === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          let i = null,
            o = null;
          const a = new Promise((e, t) => {
              (i = e), (o = t);
            }),
            l = ++this.navigationId;
          return (
            this.setTransition({
              id: l,
              source: t,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: e,
              extras: r,
              resolve: i,
              reject: o,
              promise: a,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            a.catch(e => Promise.reject(e))
          );
        }
        setBrowserUrl(e, t, n, r) {
          const s = this.urlSerializer.serialize(e);
          (r = r || {}),
            this.location.isCurrentPathEqualTo(s) || t
              ? this.location.replaceState(
                  s,
                  "",
                  Object.assign({}, r, { navigationId: n })
                )
              : this.location.go(
                  s,
                  "",
                  Object.assign({}, r, { navigationId: n })
                );
        }
        resetStateAndUrl(e, t, n) {
          (this.routerState = e),
            (this.currentUrlTree = t),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              n
            )),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            "",
            { navigationId: this.lastSuccessfulId }
          );
        }
      }
      class vd {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new wd()),
            (this.attachRef = null);
        }
      }
      class wd {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          (n.outlet = t), this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          return t || ((t = new vd()), this.contexts.set(e, t)), t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      const bd = (() =>
        class {
          constructor(e, t, n, r, s) {
            (this.parentContexts = e),
              (this.location = t),
              (this.resolver = n),
              (this.changeDetector = s),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new Ps()),
              (this.deactivateEvents = new Ps()),
              (this.name = r || yu),
              e.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const e = this.parentContexts.getContext(this.name);
              e &&
                e.route &&
                (e.attachRef
                  ? this.attach(e.attachRef, e.route)
                  : this.activateWith(e.route, e.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const e = this.activated;
            return (this.activated = null), (this._activatedRoute = null), e;
          }
          attach(e, t) {
            (this.activated = e),
              (this._activatedRoute = t),
              this.location.insert(e.hostView);
          }
          deactivate() {
            if (this.activated) {
              const e = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(e);
            }
          }
          activateWith(e, t) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = e;
            const n = (t = t || this.resolver).resolveComponentFactory(
                e._futureSnapshot.routeConfig.component
              ),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new Sd(e, r, this.location.injector);
            (this.activated = this.location.createComponent(
              n,
              this.location.length,
              s
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        })();
      class Sd {
        constructor(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        get(e, t) {
          return e === ah
            ? this.route
            : e === wd
            ? this.childContexts
            : this.parent.get(e, t);
        }
      }
      class Ed {}
      class Cd {
        preload(e, t) {
          return t().pipe(El(() => Xa(null)));
        }
      }
      class xd {
        preload(e, t) {
          return Xa(null);
        }
      }
      const Td = (() =>
        class {
          constructor(e, t, n, r, s) {
            (this.router = e),
              (this.injector = r),
              (this.preloadingStrategy = s),
              (this.loader = new dd(
                t,
                n,
                t => e.triggerEvent(new cu(t)),
                t => e.triggerEvent(new uu(t))
              ));
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                al(e => e instanceof tu),
                Ul(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            const e = this.injector.get(sn);
            return this.processRoutes(e, this.router.config);
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          processRoutes(e, t) {
            const n = [];
            for (const r of t)
              if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                const e = r._loadedConfig;
                n.push(this.processRoutes(e.module, e.routes));
              } else
                r.loadChildren && !r.canLoad
                  ? n.push(this.preloadConfig(e, r))
                  : r.children && n.push(this.processRoutes(e, r.children));
            return Q(n).pipe(
              Y(),
              H(e => void 0)
            );
          }
          preloadConfig(e, t) {
            return this.preloadingStrategy.preload(t, () =>
              this.loader
                .load(e.injector, t)
                .pipe(
                  W(
                    e => (
                      (t._loadedConfig = e),
                      this.processRoutes(e.module, e.routes)
                    )
                  )
                )
            );
          }
        })();
      class kd {
        constructor(e, t, n = {}) {
          (this.router = e),
            (this.viewportScroller = t),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = "imperative"),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration =
              n.scrollPositionRestoration || "disabled"),
            (n.anchorScrolling = n.anchorScrolling || "disabled");
        }
        init() {
          "disabled" !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration("manual"),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof eu
              ? ((this.store[
                  this.lastId
                ] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = e.navigationTrigger),
                (this.restoredId = e.restoredState
                  ? e.restoredState.navigationId
                  : 0))
              : e instanceof tu &&
                ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.router.parseUrl(e.urlAfterRedirects).fragment
                ));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof mu &&
              (e.position
                ? "top" === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : "enabled" === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(e.position)
                : e.anchor && "enabled" === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : "disabled" !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(e, t) {
          this.router.triggerEvent(
            new mu(
              e,
              "popstate" === this.lastSource
                ? this.store[this.restoredId]
                : null,
              t
            )
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription &&
            this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription &&
              this.scrollEventsSubscription.unsubscribe();
        }
      }
      const Id = new Ie("ROUTER_CONFIGURATION"),
        Ad = new Ie("ROUTER_FORROOT_GUARD"),
        Nd = [
          ba,
          { provide: Uu, useClass: Vu },
          {
            provide: _d,
            useFactory: Ld,
            deps: [
              xi,
              Uu,
              wd,
              ba,
              qe,
              ki,
              Gs,
              hd,
              Id,
              [pd, new he()],
              [cd, new he()]
            ]
          },
          wd,
          { provide: ah, useFactory: jd, deps: [_d] },
          { provide: ki, useClass: Ni },
          Td,
          xd,
          Cd,
          { provide: Id, useValue: { enableTracing: !1 } }
        ];
      function Rd() {
        return new wi("Router", _d);
      }
      const Pd = (() => {
        class e {
          constructor(e, t) {}
          static forRoot(t, n) {
            return {
              ngModule: e,
              providers: [
                Nd,
                Fd(t),
                {
                  provide: Ad,
                  useFactory: Md,
                  deps: [[_d, new he(), new pe()]]
                },
                { provide: Id, useValue: n || {} },
                {
                  provide: va,
                  useFactory: Od,
                  deps: [ya, [new ue(wa), new he()], Id]
                },
                { provide: kd, useFactory: Dd, deps: [_d, Wa, Id] },
                {
                  provide: Ed,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : xd
                },
                { provide: wi, multi: !0, useFactory: Rd },
                [
                  Ud,
                  { provide: Ms, multi: !0, useFactory: Vd, deps: [Ud] },
                  { provide: Hd, useFactory: $d, deps: [Ud] },
                  { provide: Hs, multi: !0, useExisting: Hd }
                ]
              ]
            };
          }
          static forChild(t) {
            return { ngModule: e, providers: [Fd(t)] };
          }
        }
        return e;
      })();
      function Dd(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new kd(e, t, n);
      }
      function Od(e, t, n = {}) {
        return n.useHash ? new Ea(e, t) : new Ca(e, t);
      }
      function Md(e) {
        if (e)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function Fd(e) {
        return [
          { provide: rt, multi: !0, useValue: e },
          { provide: hd, multi: !0, useValue: e }
        ];
      }
      function Ld(e, t, n, r, s, i, o, a, l = {}, c, u) {
        const h = new _d(null, t, n, r, s, i, o, Au(a));
        if (
          (c && (h.urlHandlingStrategy = c),
          u && (h.routeReuseStrategy = u),
          l.errorHandler && (h.errorHandler = l.errorHandler),
          l.malformedUriErrorHandler &&
            (h.malformedUriErrorHandler = l.malformedUriErrorHandler),
          l.enableTracing)
        ) {
          const e = zl();
          h.events.subscribe(t => {
            e.logGroup(`Router Event: ${t.constructor.name}`),
              e.log(t.toString()),
              e.log(t),
              e.logGroupEnd();
          });
        }
        return (
          l.onSameUrlNavigation &&
            (h.onSameUrlNavigation = l.onSameUrlNavigation),
          l.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
          l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy),
          l.relativeLinkResolution &&
            (h.relativeLinkResolution = l.relativeLinkResolution),
          h
        );
      }
      function jd(e) {
        return e.routerState.root;
      }
      const Ud = (() =>
        class {
          constructor(e) {
            (this.injector = e),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new k());
          }
          appInitializer() {
            return this.injector.get(_a, Promise.resolve(null)).then(() => {
              let e = null;
              const t = new Promise(t => (e = t)),
                n = this.injector.get(_d),
                r = this.injector.get(Id);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
              else if ("disabled" === r.initialNavigation)
                n.setUpLocationChangeListener(), e(!0);
              else {
                if ("enabled" !== r.initialNavigation)
                  throw new Error(
                    `Invalid initialNavigation options: '${r.initialNavigation}'`
                  );
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation
                    ? Xa(null)
                    : ((this.initNavigation = !0),
                      e(!0),
                      this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return t;
            });
          }
          bootstrapListener(e) {
            const t = this.injector.get(Id),
              n = this.injector.get(Td),
              r = this.injector.get(kd),
              s = this.injector.get(_d),
              i = this.injector.get(xi);
            e === i.components[0] &&
              (this.isLegacyEnabled(t)
                ? s.initialNavigation()
                : this.isLegacyDisabled(t) && s.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(e) {
            return (
              "legacy_enabled" === e.initialNavigation ||
              !0 === e.initialNavigation ||
              void 0 === e.initialNavigation
            );
          }
          isLegacyDisabled(e) {
            return (
              "legacy_disabled" === e.initialNavigation ||
              !1 === e.initialNavigation
            );
          }
        })();
      function Vd(e) {
        return e.appInitializer.bind(e);
      }
      function $d(e) {
        return e.bootstrapListener.bind(e);
      }
      const Hd = new Ie("Router Initializer");
      var zd = er({ encapsulation: 2, styles: [], data: {} });
      function Bd(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              16777216,
              null,
              null,
              1,
              "router-outlet",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            us(1, 212992, null, 0, bd, [wd, Fn, tn, [8, null], An], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function qd(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              1,
              "ng-component",
              [],
              null,
              null,
              null,
              Bd,
              zd
            )),
            us(1, 49152, null, 0, gu, [], null, null)
          ],
          null,
          null
        );
      }
      var Qd = Vr("ng-component", gu, qd, {}, {}, []);
      class Wd {
        constructor() {
          (this.detailMode = !1), (this.clickEvent = new Ps());
        }
        ngOnInit() {}
        handleClick() {
          this.clickEvent.emit({
            value: this.value,
            cardColor: {
              backgroundColor: this.cardColor.backgroundColor,
              fontColor: this.cardColor.fontColor
            }
          });
        }
        setDetailMode() {
          if (this.detailMode) return "detail-mode";
        }
        setFontColor() {
          if ("white" === this.cardColor.fontColor) return "font-white";
        }
      }
      var Kd = er({
        encapsulation: 0,
        styles: [
          [
            "span[_ngcontent-%COMP%]{font-weight:700}.card[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap;box-sizing:border-box;height:200px;width:auto;border-color:#778899;position:relative;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;border-radius:15px}@media screen and (min-width:320px) and (max-width:575px){.card[_ngcontent-%COMP%]{height:250px;font-size:26px}}@media screen and (min-width:576px) and (max-width:767px){.card[_ngcontent-%COMP%]{height:300px;font-size:24px}}@media screen and (min-width:768px){.card[_ngcontent-%COMP%]{height:350px;font-size:22px}}.top-right[_ngcontent-%COMP%]{text-align:right;margin-top:32px;margin-right:32px}.bottom-left[_ngcontent-%COMP%]{margin-bottom:32px;margin-left:32px;position:absolute;bottom:0;height:auto!important}.quarter-h[_ngcontent-%COMP%]{height:25%}.half-h[_ngcontent-%COMP%]{height:50%}.detail-mode[_ngcontent-%COMP%]{height:unset;margin:auto;font-size:128px}.font-white[_ngcontent-%COMP%]{color:#fff}"
          ]
        ],
        data: {}
      });
      function Zd(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              1,
              "span",
              [["class", "top-right quarter-h"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), so(1, null, ["", ""]))
          ],
          null,
          function(e, t) {
            e(t, 1, 0, t.component.value);
          }
        );
      }
      function Gd(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              3,
              "span",
              [["class", "half-h"]],
              null,
              null,
              null,
              null,
              null
            )),
            hs(512, null, Aa, Na, [kn, In, ln, pn]),
            us(
              2,
              278528,
              null,
              0,
              Pa,
              [Aa],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null
            ),
            (e()(), so(3, null, ["", ""]))
          ],
          function(e, t) {
            e(t, 2, 0, "half-h", t.component.setDetailMode());
          },
          function(e, t) {
            e(t, 3, 0, t.component.value);
          }
        );
      }
      function Yd(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              1,
              "span",
              [["class", "bottom-left quarter-h"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), so(1, null, ["", ""]))
          ],
          null,
          function(e, t) {
            e(t, 1, 0, t.component.value);
          }
        );
      }
      function Xd(e) {
        return ao(
          2,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              11,
              "div",
              [["class", "card"]],
              null,
              [[null, "click"]],
              function(e, t, n) {
                var r = !0;
                return (
                  "click" === t && (r = !1 !== e.component.handleClick() && r),
                  r
                );
              },
              null,
              null
            )),
            hs(512, null, Aa, Na, [kn, In, ln, pn]),
            us(
              2,
              278528,
              null,
              0,
              Pa,
              [Aa],
              { klass: [0, "klass"], ngClass: [1, "ngClass"] },
              null
            ),
            hs(512, null, Ua, Va, [ln, In, pn]),
            us(4, 278528, null, 0, Ha, [Ua], { ngStyle: [0, "ngStyle"] }, null),
            ro(5, { "background-color": 0 }),
            (e()(), Bi(16777216, null, null, 1, null, Zd)),
            us(7, 16384, null, 0, Fa, [Fn, On], { ngIf: [0, "ngIf"] }, null),
            (e()(), Bi(16777216, null, null, 1, null, Gd)),
            us(9, 16384, null, 0, Fa, [Fn, On], { ngIf: [0, "ngIf"] }, null),
            (e()(), Bi(16777216, null, null, 1, null, Yd)),
            us(11, 16384, null, 0, Fa, [Fn, On], { ngIf: [0, "ngIf"] }, null)
          ],
          function(e, t) {
            var n = t.component;
            e(t, 2, 0, "card", n.setFontColor());
            var r = e(t, 5, 0, n.cardColor.backgroundColor);
            e(t, 4, 0, r),
              e(t, 7, 0, !n.detailMode),
              e(t, 9, 0, n.detailMode),
              e(t, 11, 0, !n.detailMode);
          },
          null
        );
      }
      let Jd;
      try {
        Jd = "undefined" != typeof Intl && Intl.v8BreakIterator;
      } catch (ny) {
        Jd = !1;
      }
      const ep = (() => {
        class e {
          constructor(e) {
            (this._platformId = e),
              (this.isBrowser = this._platformId
                ? Qa(this._platformId)
                : "object" == typeof document && !!document),
              (this.EDGE =
                this.isBrowser && /(edge)/i.test(navigator.userAgent)),
              (this.TRIDENT =
                this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
              (this.BLINK =
                this.isBrowser &&
                !(!window.chrome && !Jd) &&
                "undefined" != typeof CSS &&
                !this.EDGE &&
                !this.TRIDENT),
              (this.WEBKIT =
                this.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) &&
                !this.BLINK &&
                !this.EDGE &&
                !this.TRIDENT),
              (this.IOS =
                this.isBrowser &&
                /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !("MSStream" in window)),
              (this.FIREFOX =
                this.isBrowser &&
                /(firefox|minefield)/i.test(navigator.userAgent)),
              (this.ANDROID =
                this.isBrowser &&
                /android/i.test(navigator.userAgent) &&
                !this.TRIDENT),
              (this.SAFARI =
                this.isBrowser &&
                /safari/i.test(navigator.userAgent) &&
                this.WEBKIT);
          }
        }
        return (
          (e.ngInjectableDef = ge({
            factory: function() {
              return new e(Ve($s, 8));
            },
            token: e,
            providedIn: "root"
          })),
          e
        );
      })();
      class tp extends d {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class np extends tp {
        constructor(e, t) {
          super(e, t),
            (this.scheduler = e),
            (this.work = t),
            (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n = !1,
            r = void 0;
          try {
            this.work(e);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const e = this.id,
            t = this.scheduler,
            n = t.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null);
        }
      }
      const rp = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class sp extends rp {
        constructor(e, t = rp.now) {
          super(e, () =>
            sp.delegate && sp.delegate !== this ? sp.delegate.now() : t()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return sp.delegate && sp.delegate !== this
            ? sp.delegate.schedule(e, t, n)
            : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      const ip = new sp(np),
        op = new Ie("mat-sanity-checks", {
          providedIn: "root",
          factory: function() {
            return !0;
          }
        }),
        ap = (() =>
          class {
            constructor(e, t) {
              (this._sanityChecksEnabled = e),
                (this._hammerLoader = t),
                (this._hasDoneGlobalChecks = !1),
                (this._hasCheckedHammer = !1),
                (this._document =
                  "object" == typeof document && document ? document : null),
                (this._window =
                  "object" == typeof window && window ? window : null),
                this._areChecksEnabled() &&
                  !this._hasDoneGlobalChecks &&
                  (this._checkDoctypeIsDefined(),
                  this._checkThemeIsPresent(),
                  (this._hasDoneGlobalChecks = !0));
            }
            _areChecksEnabled() {
              return this._sanityChecksEnabled && lt() && !this._isTestEnv();
            }
            _isTestEnv() {
              const e = this._window;
              return e && (e.__karma__ || e.jasmine);
            }
            _checkDoctypeIsDefined() {
              this._document &&
                !this._document.doctype &&
                console.warn(
                  "Current document does not have a doctype. This may cause some Angular Material components not to behave as expected."
                );
            }
            _checkThemeIsPresent() {
              if (
                !this._document ||
                !this._document.body ||
                "function" != typeof getComputedStyle
              )
                return;
              const e = this._document.createElement("div");
              e.classList.add("mat-theme-loaded-marker"),
                this._document.body.appendChild(e);
              const t = getComputedStyle(e);
              t &&
                "none" !== t.display &&
                console.warn(
                  "Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"
                ),
                this._document.body.removeChild(e);
            }
            _checkHammerIsAvailable() {
              !this._hasCheckedHammer &&
                this._window &&
                (!this._areChecksEnabled() ||
                  this._window.Hammer ||
                  this._hammerLoader ||
                  console.warn(
                    "Could not find HammerJS. Certain Angular Material components may not work correctly."
                  ),
                (this._hasCheckedHammer = !0));
            }
          })();
      function lp(e, t) {
        return class extends e {
          get color() {
            return this._color;
          }
          set color(e) {
            const n = e || t;
            n !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  `mat-${this._color}`
                ),
              n && this._elementRef.nativeElement.classList.add(`mat-${n}`),
              (this._color = n));
          }
          constructor(...e) {
            super(...e), (this.color = t);
          }
        };
      }
      let cp;
      try {
        cp = "undefined" != typeof Intl;
      } catch (ny) {
        cp = !1;
      }
      class up {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const hp = lp(up),
        dp = (() =>
          class extends hp {
            constructor(e, t, n) {
              super(e), (this._platform = t), (this._document = n);
            }
            ngAfterViewInit() {
              lt() &&
                this._platform.isBrowser &&
                (this._checkToolbarMixedModes(),
                this._toolbarRows.changes.subscribe(() =>
                  this._checkToolbarMixedModes()
                ));
            }
            _checkToolbarMixedModes() {
              this._toolbarRows.length &&
                Array.from(this._elementRef.nativeElement.childNodes)
                  .filter(
                    e =>
                      !(e.classList && e.classList.contains("mat-toolbar-row"))
                  )
                  .filter(
                    e =>
                      e.nodeType !==
                      (this._document ? this._document.COMMENT_NODE : 8)
                  )
                  .some(e => !(!e.textContent || !e.textContent.trim())) &&
                (function() {
                  throw Error(
                    "MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row."
                  );
                })();
            }
          })(),
        pp = (() => class {})(),
        fp = (() => class {})();
      var mp = er({
        encapsulation: 2,
        styles: [
          "@media (-ms-high-contrast:active){.mat-toolbar{outline:solid 1px}}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media (max-width:599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}"
        ],
        data: {}
      });
      function gp(e) {
        return ao(2, [to(null, 0), to(null, 1)], null, null);
      }
      class yp {
        constructor() {}
        ngOnInit() {}
      }
      var _p = er({ encapsulation: 0, styles: [[""]], data: {} });
      function vp(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              4,
              "mat-toolbar",
              [["class", "mat-toolbar"]],
              [
                [2, "mat-toolbar-multiple-rows", null],
                [2, "mat-toolbar-single-row", null]
              ],
              null,
              null,
              gp,
              mp
            )),
            us(1, 4243456, null, 1, dp, [ln, ep, Ba], null, null),
            Gi(603979776, 1, { _toolbarRows: 1 }),
            (e()(),
            qi(3, 0, null, 0, 1, "span", [], null, null, null, null, null)),
            (e()(), so(-1, null, ["Planning Poker"]))
          ],
          null,
          function(e, t) {
            e(
              t,
              0,
              0,
              Yr(t, 1)._toolbarRows.length > 0,
              0 === Yr(t, 1)._toolbarRows.length
            );
          }
        );
      }
      class wp {
        constructor(e) {
          (this.router = e),
            (this.range = [
              "0",
              "0.5",
              "1",
              "2",
              "3",
              "5",
              "8",
              "13",
              "21",
              "34",
              "55",
              "89",
              "100",
              "?",
              "\u2615",
              "\u{1f0cf}"
            ]);
        }
        ngOnInit() {}
        showCardInDetail(e) {
          this.router.navigate(["detail"], {
            state: { value: e.value, cardColor: e.cardColor }
          });
        }
        setCardColors() {
          const e = this.calculateRandomRGBColor();
          return {
            backgroundColor: e,
            fontColor: this.shouldFontBeWhite(e) ? "white" : "black"
          };
        }
        calculateRandomRGBColor() {
          return `rgb(${Math.ceil(255 * Math.random())},${Math.ceil(
            255 * Math.random()
          )},${Math.ceil(255 * Math.random())})`;
        }
        shouldFontBeWhite(e) {
          const t = e
              .replace("rgb", "")
              .replace("(", "")
              .replace(")", "")
              .split(","),
            n = Number(t[0]),
            r = Number(t[1]),
            s = Number(t[2]);
          return n < 100 || r < 100 || s < 100;
        }
      }
      var bp = er({
        encapsulation: 0,
        styles: [
          [
            ".cards-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);grid-gap:16px;margin:16px}@media screen and (min-width:320px) and (max-width:575px){.cards-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (min-width:576px) and (max-width:767px){.cards-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (min-width:768px){.cards-container[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}"
          ]
        ],
        data: {}
      });
      function Sp(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              1,
              "app-card",
              [],
              null,
              [[null, "clickEvent"]],
              function(e, t, n) {
                var r = !0;
                return (
                  "clickEvent" === t &&
                    (r = !1 !== e.component.showCardInDetail(n) && r),
                  r
                );
              },
              Xd,
              Kd
            )),
            us(
              1,
              114688,
              null,
              0,
              Wd,
              [],
              { value: [0, "value"], cardColor: [1, "cardColor"] },
              { clickEvent: "clickEvent" }
            )
          ],
          function(e, t) {
            e(t, 1, 0, t.context.$implicit, t.component.setCardColors());
          },
          null
        );
      }
      function Ep(e) {
        return ao(
          2,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              1,
              "app-toolbar",
              [],
              null,
              null,
              null,
              vp,
              _p
            )),
            us(1, 114688, null, 0, yp, [], null, null),
            (e()(),
            qi(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "cards-container"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Bi(16777216, null, null, 1, null, Sp)),
            us(
              4,
              278528,
              null,
              0,
              Oa,
              [Fn, On, kn],
              { ngForOf: [0, "ngForOf"] },
              null
            )
          ],
          function(e, t) {
            var n = t.component;
            e(t, 1, 0), e(t, 4, 0, n.range);
          },
          null
        );
      }
      function Cp(e) {
        return ao(
          0,
          [
            (e()(),
            qi(0, 0, null, null, 1, "app-cards", [], null, null, null, Ep, bp)),
            us(1, 114688, null, 0, wp, [_d], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var xp = Vr("app-cards", wp, Cp, { range: "range" }, {}, []);
      class Tp {
        constructor(e) {
          this.router = e;
          const t = this.router.getCurrentNavigation().extras.state;
          t || this.router.navigate(["/"]),
            (this.cardColor = t.cardColor),
            (this.value = t.value);
        }
        ngOnInit() {}
      }
      var kp = er({
        encapsulation: 0,
        styles: [
          [
            "app-card[_ngcontent-%COMP%]     div{margin:0 auto}@media screen and (min-width:320px) and (max-width:575px){app-card[_ngcontent-%COMP%]     div{width:290px!important;height:450px!important;margin-top:32px}}@media screen and (min-width:576px) and (max-width:767px){app-card[_ngcontent-%COMP%]     div{width:350px!important;height:500px!important;margin-top:48px}}@media screen and (min-width:768px){app-card[_ngcontent-%COMP%]     div{width:400px!important;height:550px!important;margin-top:72px}}"
          ]
        ],
        data: {}
      });
      function Ip(e) {
        return ao(
          2,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              1,
              "app-toolbar",
              [],
              null,
              null,
              null,
              vp,
              _p
            )),
            us(1, 114688, null, 0, yp, [], null, null),
            (e()(),
            qi(2, 0, null, null, 1, "app-card", [], null, null, null, Xd, Kd)),
            us(
              3,
              114688,
              null,
              0,
              Wd,
              [],
              {
                value: [0, "value"],
                cardColor: [1, "cardColor"],
                detailMode: [2, "detailMode"]
              },
              null
            )
          ],
          function(e, t) {
            var n = t.component;
            e(t, 1, 0), e(t, 3, 0, n.value, n.cardColor, !0);
          },
          null
        );
      }
      function Ap(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              0,
              null,
              null,
              1,
              "app-detail",
              [],
              null,
              null,
              null,
              Ip,
              kp
            )),
            us(1, 114688, null, 0, Tp, [_d], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var Np = Vr(
          "app-detail",
          Tp,
          Ap,
          { value: "value", cardColor: "cardColor" },
          {},
          []
        ),
        Rp = er({ encapsulation: 0, styles: [[""]], data: {} });
      function Pp(e) {
        return ao(
          0,
          [
            (e()(),
            qi(
              0,
              16777216,
              null,
              null,
              1,
              "router-outlet",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            us(1, 212992, null, 0, bd, [wd, Fn, tn, [8, null], An], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function Dp(e) {
        return ao(
          0,
          [
            (e()(),
            qi(0, 0, null, null, 1, "app-root", [], null, null, null, Pp, Rp)),
            us(1, 49152, null, 0, ga, [], null, null)
          ],
          null,
          null
        );
      }
      var Op = Vr("app-root", ga, Dp, {}, {}, []);
      class Mp {}
      class Fp {}
      const Lp = "*";
      function jp(e, t = null) {
        return { type: 2, steps: e, options: t };
      }
      function Up(e) {
        return { type: 6, styles: e, offset: null };
      }
      function Vp(e) {
        Promise.resolve(null).then(e);
      }
      class $p {
        constructor(e = 0, t = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this.parentPlayer = null),
            (this.totalTime = e + t);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(e => e()),
            (this._onDoneFns = []));
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          Vp(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach(e => e()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach(e => e()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(e) {}
        getPosition() {
          return 0;
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
      }
      class Hp {
        constructor(e) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = e);
          let t = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? Vp(() => this._onFinish())
            : this.players.forEach(e => {
                e.onDone(() => {
                  ++t == s && this._onFinish();
                }),
                  e.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  e.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (e, t) => Math.max(e, t.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(e => e()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach(e => e.init());
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach(e => e()),
            (this._onStartFns = []));
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach(e => e.play());
        }
        pause() {
          this.players.forEach(e => e.pause());
        }
        restart() {
          this.players.forEach(e => e.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach(e => e.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach(e => e.destroy()),
            this._onDestroyFns.forEach(e => e()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach(e => e.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(e) {
          const t = e * this.totalTime;
          this.players.forEach(e => {
            const n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
            e.setPosition(n);
          });
        }
        getPosition() {
          let e = 0;
          return (
            this.players.forEach(t => {
              const n = t.getPosition();
              e = Math.min(n, e);
            }),
            e
          );
        }
        beforeDestroy() {
          this.players.forEach(e => {
            e.beforeDestroy && e.beforeDestroy();
          });
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
      }
      const zp = "!";
      function Bp() {
        return "undefined" != typeof process;
      }
      function qp(e) {
        switch (e.length) {
          case 0:
            return new $p();
          case 1:
            return e[0];
          default:
            return new Hp(e);
        }
      }
      function Qp(e, t, n, r, s = {}, i = {}) {
        const o = [],
          a = [];
        let l = -1,
          c = null;
        if (
          (r.forEach(e => {
            const n = e.offset,
              r = n == l,
              u = (r && c) || {};
            Object.keys(e).forEach(n => {
              let r = n,
                a = e[n];
              if ("offset" !== n)
                switch (((r = t.normalizePropertyName(r, o)), a)) {
                  case zp:
                    a = s[n];
                    break;
                  case Lp:
                    a = i[n];
                    break;
                  default:
                    a = t.normalizeStyleValue(n, r, a, o);
                }
              u[r] = a;
            }),
              r || a.push(u),
              (c = u),
              (l = n);
          }),
          o.length)
        ) {
          const e = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${e}${o.join(e)}`
          );
        }
        return a;
      }
      function Wp(e, t, n, r) {
        switch (t) {
          case "start":
            e.onStart(() => r(n && Kp(n, "start", e)));
            break;
          case "done":
            e.onDone(() => r(n && Kp(n, "done", e)));
            break;
          case "destroy":
            e.onDestroy(() => r(n && Kp(n, "destroy", e)));
        }
      }
      function Kp(e, t, n) {
        const r = n.totalTime,
          s = Zp(
            e.element,
            e.triggerName,
            e.fromState,
            e.toState,
            t || e.phaseName,
            null == r ? e.totalTime : r,
            !!n.disabled
          ),
          i = e._data;
        return null != i && (s._data = i), s;
      }
      function Zp(e, t, n, r, s = "", i = 0, o) {
        return {
          element: e,
          triggerName: t,
          fromState: n,
          toState: r,
          phaseName: s,
          totalTime: i,
          disabled: !!o
        };
      }
      function Gp(e, t, n) {
        let r;
        return (
          e instanceof Map
            ? (r = e.get(t)) || e.set(t, (r = n))
            : (r = e[t]) || (r = e[t] = n),
          r
        );
      }
      function Yp(e) {
        const t = e.indexOf(":");
        return [e.substring(1, t), e.substr(t + 1)];
      }
      let Xp = (e, t) => !1,
        Jp = (e, t) => !1,
        ef = (e, t, n) => [];
      const tf = Bp();
      (tf || "undefined" != typeof Element) &&
        ((Xp = (e, t) => e.contains(t)),
        (Jp = (() => {
          if (tf || Element.prototype.matches) return (e, t) => e.matches(t);
          {
            const e = Element.prototype,
              t =
                e.matchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector ||
                e.oMatchesSelector ||
                e.webkitMatchesSelector;
            return t ? (e, n) => t.apply(e, [n]) : Jp;
          }
        })()),
        (ef = (e, t, n) => {
          let r = [];
          if (n) r.push(...e.querySelectorAll(t));
          else {
            const n = e.querySelector(t);
            n && r.push(n);
          }
          return r;
        }));
      let nf = null,
        rf = !1;
      function sf(e) {
        nf ||
          ((nf = ("undefined" != typeof document ? document.body : null) || {}),
          (rf = !!nf.style && "WebkitAppearance" in nf.style));
        let t = !0;
        return (
          nf.style &&
            !(function(e) {
              return "ebkit" == e.substring(1, 6);
            })(e) &&
            !(t = e in nf.style) &&
            rf &&
            (t =
              "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) in nf.style),
          t
        );
      }
      const of = Jp,
        af = Xp,
        lf = ef;
      function cf(e) {
        const t = {};
        return (
          Object.keys(e).forEach(n => {
            const r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            t[r] = e[n];
          }),
          t
        );
      }
      const uf = (() =>
          class {
            validateStyleProperty(e) {
              return sf(e);
            }
            matchesElement(e, t) {
              return of(e, t);
            }
            containsElement(e, t) {
              return af(e, t);
            }
            query(e, t, n) {
              return lf(e, t, n);
            }
            computeStyle(e, t, n) {
              return n || "";
            }
            animate(e, t, n, r, s, i = [], o) {
              return new $p(n, r);
            }
          })(),
        hf = (() => {
          class e {}
          return (e.NOOP = new uf()), e;
        })(),
        df = 1e3,
        pf = "{{",
        ff = "ng-enter",
        mf = "ng-leave",
        gf = "ng-trigger",
        yf = ".ng-trigger",
        _f = "ng-animating",
        vf = ".ng-animating";
      function wf(e) {
        if ("number" == typeof e) return e;
        const t = e.match(/^(-?[\.\d]+)(m?s)/);
        return !t || t.length < 2 ? 0 : bf(parseFloat(t[1]), t[2]);
      }
      function bf(e, t) {
        switch (t) {
          case "s":
            return e * df;
          default:
            return e;
        }
      }
      function Sf(e, t, n) {
        return e.hasOwnProperty("duration")
          ? e
          : (function(e, t, n) {
              let r,
                s = 0,
                i = "";
              if ("string" == typeof e) {
                const n = e.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    t.push(`The provided timing value "${e}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = bf(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = bf(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = e;
              if (!n) {
                let n = !1,
                  i = t.length;
                r < 0 &&
                  (t.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (n = !0)),
                  s < 0 &&
                    (t.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (n = !0)),
                  n &&
                    t.splice(
                      i,
                      0,
                      `The provided timing value "${e}" is invalid.`
                    );
              }
              return { duration: r, delay: s, easing: i };
            })(e, t, n);
      }
      function Ef(e, t = {}) {
        return (
          Object.keys(e).forEach(n => {
            t[n] = e[n];
          }),
          t
        );
      }
      function Cf(e, t, n = {}) {
        if (t) for (let r in e) n[r] = e[r];
        else Ef(e, n);
        return n;
      }
      function xf(e, t, n) {
        return n ? t + ":" + n + ";" : "";
      }
      function Tf(e) {
        let t = "";
        for (let n = 0; n < e.style.length; n++) {
          const r = e.style.item(n);
          t += xf(0, r, e.style.getPropertyValue(r));
        }
        for (const n in e.style)
          e.style.hasOwnProperty(n) &&
            !n.startsWith("_") &&
            (t += xf(
              0,
              n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              e.style[n]
            ));
        e.setAttribute("style", t);
      }
      function kf(e, t, n) {
        e.style &&
          (Object.keys(t).forEach(r => {
            const s = Mf(r);
            n && !n.hasOwnProperty(r) && (n[r] = e.style[s]),
              (e.style[s] = t[r]);
          }),
          Bp() && Tf(e));
      }
      function If(e, t) {
        e.style &&
          (Object.keys(t).forEach(t => {
            const n = Mf(t);
            e.style[n] = "";
          }),
          Bp() && Tf(e));
      }
      function Af(e) {
        return Array.isArray(e) ? (1 == e.length ? e[0] : jp(e)) : e;
      }
      const Nf = new RegExp(`${pf}\\s*(.+?)\\s*}}`, "g");
      function Rf(e) {
        let t = [];
        if ("string" == typeof e) {
          const n = e.toString();
          let r;
          for (; (r = Nf.exec(n)); ) t.push(r[1]);
          Nf.lastIndex = 0;
        }
        return t;
      }
      function Pf(e, t, n) {
        const r = e.toString(),
          s = r.replace(Nf, (e, r) => {
            let s = t[r];
            return (
              t.hasOwnProperty(r) ||
                (n.push(`Please provide a value for the animation param ${r}`),
                (s = "")),
              s.toString()
            );
          });
        return s == r ? e : s;
      }
      function Df(e) {
        const t = [];
        let n = e.next();
        for (; !n.done; ) t.push(n.value), (n = e.next());
        return t;
      }
      const Of = /-+([a-z0-9])/g;
      function Mf(e) {
        return e.replace(Of, (...e) => e[1].toUpperCase());
      }
      function Ff(e, t) {
        return 0 === e || 0 === t;
      }
      function Lf(e, t, n) {
        const r = Object.keys(n);
        if (r.length && t.length) {
          let i = t[0],
            o = [];
          if (
            (r.forEach(e => {
              i.hasOwnProperty(e) || o.push(e), (i[e] = n[e]);
            }),
            o.length)
          )
            for (var s = 1; s < t.length; s++) {
              let n = t[s];
              o.forEach(function(t) {
                n[t] = Uf(e, t);
              });
            }
        }
        return t;
      }
      function jf(e, t, n) {
        switch (t.type) {
          case 7:
            return e.visitTrigger(t, n);
          case 0:
            return e.visitState(t, n);
          case 1:
            return e.visitTransition(t, n);
          case 2:
            return e.visitSequence(t, n);
          case 3:
            return e.visitGroup(t, n);
          case 4:
            return e.visitAnimate(t, n);
          case 5:
            return e.visitKeyframes(t, n);
          case 6:
            return e.visitStyle(t, n);
          case 8:
            return e.visitReference(t, n);
          case 9:
            return e.visitAnimateChild(t, n);
          case 10:
            return e.visitAnimateRef(t, n);
          case 11:
            return e.visitQuery(t, n);
          case 12:
            return e.visitStagger(t, n);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${t.type}`
            );
        }
      }
      function Uf(e, t) {
        return window.getComputedStyle(e)[t];
      }
      const Vf = "*";
      function $f(e, t) {
        const n = [];
        return (
          "string" == typeof e
            ? e.split(/\s*,\s*/).forEach(e =>
                (function(e, t, n) {
                  if (":" == e[0]) {
                    const r = (function(e, t) {
                      switch (e) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (e, t) => parseFloat(t) > parseFloat(e);
                        case ":decrement":
                          return (e, t) => parseFloat(t) < parseFloat(e);
                        default:
                          return (
                            t.push(
                              `The transition alias value "${e}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(e, n);
                    if ("function" == typeof r) return void t.push(r);
                    e = r;
                  }
                  const r = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${e}" is not supported`
                      ),
                      t
                    );
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  t.push(Bf(s, o)),
                    "<" != i[0] || (s == Vf && o == Vf) || t.push(Bf(o, s));
                })(e, n, t)
              )
            : n.push(e),
          n
        );
      }
      const Hf = new Set(["true", "1"]),
        zf = new Set(["false", "0"]);
      function Bf(e, t) {
        const n = Hf.has(e) || zf.has(e),
          r = Hf.has(t) || zf.has(t);
        return (s, i) => {
          let o = e == Vf || e == s,
            a = t == Vf || t == i;
          return (
            !o && n && "boolean" == typeof s && (o = s ? Hf.has(e) : zf.has(e)),
            !a && r && "boolean" == typeof i && (a = i ? Hf.has(t) : zf.has(t)),
            o && a
          );
        };
      }
      const qf = ":self",
        Qf = new RegExp(`s*${qf}s*,?`, "g");
      function Wf(e, t, n) {
        return new Zf(e).build(t, n);
      }
      const Kf = "";
      class Zf {
        constructor(e) {
          this._driver = e;
        }
        build(e, t) {
          const n = new Gf(t);
          return this._resetContextStyleTimingState(n), jf(this, Af(e), n);
        }
        _resetContextStyleTimingState(e) {
          (e.currentQuerySelector = Kf),
            (e.collectedStyles = {}),
            (e.collectedStyles[Kf] = {}),
            (e.currentTime = 0);
        }
        visitTrigger(e, t) {
          let n = (t.queryCount = 0),
            r = (t.depCount = 0);
          const s = [],
            i = [];
          return (
            "@" == e.name.charAt(0) &&
              t.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            e.definitions.forEach(e => {
              if ((this._resetContextStyleTimingState(t), 0 == e.type)) {
                const n = e,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach(e => {
                    (n.name = e), s.push(this.visitState(n, t));
                  }),
                  (n.name = r);
              } else if (1 == e.type) {
                const s = this.visitTransition(e, t);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else
                t.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: e.name,
              states: s,
              transitions: i,
              queryCount: n,
              depCount: r,
              options: null
            }
          );
        }
        visitState(e, t) {
          const n = this.visitStyle(e.styles, t),
            r = (e.options && e.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach(e => {
                if (Yf(e)) {
                  const t = e;
                  Object.keys(t).forEach(e => {
                    Rf(t[e]).forEach(e => {
                      i.hasOwnProperty(e) || s.add(e);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = Df(s.values());
              t.errors.push(
                `state("${
                  e.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: e.name,
            style: n,
            options: r ? { params: r } : null
          };
        }
        visitTransition(e, t) {
          (t.queryCount = 0), (t.depCount = 0);
          const n = jf(this, Af(e.animation), t);
          return {
            type: 1,
            matchers: $f(e.expr, t.errors),
            animation: n,
            queryCount: t.queryCount,
            depCount: t.depCount,
            options: Xf(e.options)
          };
        }
        visitSequence(e, t) {
          return {
            type: 2,
            steps: e.steps.map(e => jf(this, e, t)),
            options: Xf(e.options)
          };
        }
        visitGroup(e, t) {
          const n = t.currentTime;
          let r = 0;
          const s = e.steps.map(e => {
            t.currentTime = n;
            const s = jf(this, e, t);
            return (r = Math.max(r, t.currentTime)), s;
          });
          return (
            (t.currentTime = r), { type: 3, steps: s, options: Xf(e.options) }
          );
        }
        visitAnimate(e, t) {
          const n = (function(e, t) {
            let n = null;
            if (e.hasOwnProperty("duration")) n = e;
            else if ("number" == typeof e) return Jf(Sf(e, t).duration, 0, "");
            const r = e;
            if (
              r.split(/\s+/).some(e => "{" == e.charAt(0) && "{" == e.charAt(1))
            ) {
              const e = Jf(0, 0, "");
              return (e.dynamic = !0), (e.strValue = r), e;
            }
            return Jf((n = n || Sf(r, t)).duration, n.delay, n.easing);
          })(e.timings, t.errors);
          let r;
          t.currentAnimateTimings = n;
          let s = e.styles ? e.styles : Up({});
          if (5 == s.type) r = this.visitKeyframes(s, t);
          else {
            let s = e.styles,
              i = !1;
            if (!s) {
              i = !0;
              const e = {};
              n.easing && (e.easing = n.easing), (s = Up(e));
            }
            t.currentTime += n.duration + n.delay;
            const o = this.visitStyle(s, t);
            (o.isEmptyStep = i), (r = o);
          }
          return (
            (t.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(e, t) {
          const n = this._makeStyleAst(e, t);
          return this._validateStyleAst(n, t), n;
        }
        _makeStyleAst(e, t) {
          const n = [];
          Array.isArray(e.styles)
            ? e.styles.forEach(e => {
                "string" == typeof e
                  ? e == Lp
                    ? n.push(e)
                    : t.errors.push(
                        `The provided style string value ${e} is not allowed.`
                      )
                  : n.push(e);
              })
            : n.push(e.styles);
          let r = !1,
            s = null;
          return (
            n.forEach(e => {
              if (Yf(e)) {
                const t = e,
                  n = t.easing;
                if ((n && ((s = n), delete t.easing), !r))
                  for (let e in t)
                    if (t[e].toString().indexOf(pf) >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: s,
              offset: e.offset,
              containsDynamicStyles: r,
              options: null
            }
          );
        }
        _validateStyleAst(e, t) {
          const n = t.currentAnimateTimings;
          let r = t.currentTime,
            s = t.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            e.styles.forEach(e => {
              "string" != typeof e &&
                Object.keys(e).forEach(n => {
                  if (!this._driver.validateStyleProperty(n))
                    return void t.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = t.collectedStyles[t.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (t.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    t.options &&
                      (function(r, s, i) {
                        const o = t.options.params || {},
                          a = Rf(e[n]);
                        a.length &&
                          a.forEach(e => {
                            o.hasOwnProperty(e) ||
                              i.push(
                                `Unable to resolve the local animation param ${e} in the given list of values`
                              );
                          });
                      })(0, 0, t.errors);
                });
            });
        }
        visitKeyframes(e, t) {
          const n = { type: 5, styles: [], options: null };
          if (!t.currentAnimateTimings)
            return (
              t.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              n
            );
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const l = e.steps.map(e => {
            const n = this._makeStyleAst(e, t);
            let l =
                null != n.offset
                  ? n.offset
                  : (function(e) {
                      if ("string" == typeof e) return null;
                      let t = null;
                      if (Array.isArray(e))
                        e.forEach(e => {
                          if (Yf(e) && e.hasOwnProperty("offset")) {
                            const n = e;
                            (t = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (Yf(e) && e.hasOwnProperty("offset")) {
                        const n = e;
                        (t = parseFloat(n.offset)), delete n.offset;
                      }
                      return t;
                    })(n.styles),
              c = 0;
            return (
              null != l && (r++, (c = n.offset = l)),
              (o = o || c < 0 || c > 1),
              (i = i || c < a),
              (a = c),
              s.push(c),
              n
            );
          });
          o &&
            t.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            i &&
              t.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const c = e.steps.length;
          let u = 0;
          r > 0 && r < c
            ? t.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == r && (u = 1 / (c - 1));
          const h = c - 1,
            d = t.currentTime,
            p = t.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((e, r) => {
              const i = u > 0 ? (r == h ? 1 : u * r) : s[r],
                o = i * f;
              (t.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(e, t),
                (e.offset = i),
                n.styles.push(e);
            }),
            n
          );
        }
        visitReference(e, t) {
          return {
            type: 8,
            animation: jf(this, Af(e.animation), t),
            options: Xf(e.options)
          };
        }
        visitAnimateChild(e, t) {
          return t.depCount++, { type: 9, options: Xf(e.options) };
        }
        visitAnimateRef(e, t) {
          return {
            type: 10,
            animation: this.visitReference(e.animation, t),
            options: Xf(e.options)
          };
        }
        visitQuery(e, t) {
          const n = t.currentQuerySelector,
            r = e.options || {};
          t.queryCount++, (t.currentQuery = e);
          const [s, i] = (function(e) {
            const t = !!e.split(/\s*,\s*/).find(e => e == qf);
            return (
              t && (e = e.replace(Qf, "")),
              [
                (e = e
                  .replace(/@\*/g, yf)
                  .replace(/@\w+/g, e => yf + "-" + e.substr(1))
                  .replace(/:animating/g, vf)),
                t
              ]
            );
          })(e.selector);
          (t.currentQuerySelector = n.length ? n + " " + s : s),
            Gp(t.collectedStyles, t.currentQuerySelector, {});
          const o = jf(this, Af(e.animation), t);
          return (
            (t.currentQuery = null),
            (t.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: e.selector,
              options: Xf(e.options)
            }
          );
        }
        visitStagger(e, t) {
          t.currentQuery ||
            t.errors.push("stagger() can only be used inside of query()");
          const n =
            "full" === e.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : Sf(e.timings, t.errors, !0);
          return {
            type: 12,
            animation: jf(this, Af(e.animation), t),
            timings: n,
            options: null
          };
        }
      }
      class Gf {
        constructor(e) {
          (this.errors = e),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function Yf(e) {
        return !Array.isArray(e) && "object" == typeof e;
      }
      function Xf(e) {
        var t;
        return (
          e
            ? (e = Ef(e)).params && (e.params = (t = e.params) ? Ef(t) : null)
            : (e = {}),
          e
        );
      }
      function Jf(e, t, n) {
        return { duration: e, delay: t, easing: n };
      }
      function em(e, t, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: e,
          keyframes: t,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a
        };
      }
      class tm {
        constructor() {
          this._map = new Map();
        }
        consume(e) {
          let t = this._map.get(e);
          return t ? this._map.delete(e) : (t = []), t;
        }
        append(e, t) {
          let n = this._map.get(e);
          n || this._map.set(e, (n = [])), n.push(...t);
        }
        has(e) {
          return this._map.has(e);
        }
        clear() {
          this._map.clear();
        }
      }
      const nm = 1,
        rm = new RegExp(":enter", "g"),
        sm = new RegExp(":leave", "g");
      function im(e, t, n, r, s, i = {}, o = {}, a, l, c = []) {
        return new om().buildKeyframes(e, t, n, r, s, i, o, a, l, c);
      }
      class om {
        buildKeyframes(e, t, n, r, s, i, o, a, l, c = []) {
          l = l || new tm();
          const u = new lm(e, t, l, r, s, c, []);
          (u.options = a),
            u.currentTimeline.setStyles([i], null, u.errors, a),
            jf(this, n, u);
          const h = u.timelines.filter(e => e.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const e = h[h.length - 1];
            e.allowOnlyTimelineStyles() || e.setStyles([o], null, u.errors, a);
          }
          return h.length
            ? h.map(e => e.buildKeyframes())
            : [em(t, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(e, t) {}
        visitState(e, t) {}
        visitTransition(e, t) {}
        visitAnimateChild(e, t) {
          const n = t.subInstructions.consume(t.element);
          if (n) {
            const r = t.createSubContext(e.options),
              s = t.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && t.transformIntoNewTimeline(i);
          }
          t.previousNode = e;
        }
        visitAnimateRef(e, t) {
          const n = t.createSubContext(e.options);
          n.transformIntoNewTimeline(),
            this.visitReference(e.animation, n),
            t.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (t.previousNode = e);
        }
        _visitSubInstructions(e, t, n) {
          let r = t.currentTimeline.currentTime;
          const s = null != n.duration ? wf(n.duration) : null,
            i = null != n.delay ? wf(n.delay) : null;
          return (
            0 !== s &&
              e.forEach(e => {
                const n = t.appendInstructionToTimeline(e, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(e, t) {
          t.updateOptions(e.options, !0),
            jf(this, e.animation, t),
            (t.previousNode = e);
        }
        visitSequence(e, t) {
          const n = t.subContextCount;
          let r = t;
          const s = e.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = t.createSubContext(s)).transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = am));
            const e = wf(s.delay);
            r.delayNextStep(e);
          }
          e.steps.length &&
            (e.steps.forEach(e => jf(this, e, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (t.previousNode = e);
        }
        visitGroup(e, t) {
          const n = [];
          let r = t.currentTimeline.currentTime;
          const s = e.options && e.options.delay ? wf(e.options.delay) : 0;
          e.steps.forEach(i => {
            const o = t.createSubContext(e.options);
            s && o.delayNextStep(s),
              jf(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach(e => t.currentTimeline.mergeTimelineCollectedStyles(e)),
            t.transformIntoNewTimeline(r),
            (t.previousNode = e);
        }
        _visitTiming(e, t) {
          if (e.dynamic) {
            const n = e.strValue;
            return Sf(t.params ? Pf(n, t.params, t.errors) : n, t.errors);
          }
          return { duration: e.duration, delay: e.delay, easing: e.easing };
        }
        visitAnimate(e, t) {
          const n = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
            r = t.currentTimeline;
          n.delay && (t.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = e.style;
          5 == s.type
            ? this.visitKeyframes(s, t)
            : (t.incrementTime(n.duration),
              this.visitStyle(s, t),
              r.applyStylesToKeyframe()),
            (t.currentAnimateTimings = null),
            (t.previousNode = e);
        }
        visitStyle(e, t) {
          const n = t.currentTimeline,
            r = t.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || e.easing;
          e.isEmptyStep
            ? n.applyEmptyStep(s)
            : n.setStyles(e.styles, s, t.errors, t.options),
            (t.previousNode = e);
        }
        visitKeyframes(e, t) {
          const n = t.currentAnimateTimings,
            r = t.currentTimeline.duration,
            s = n.duration,
            i = t.createSubContext().currentTimeline;
          (i.easing = n.easing),
            e.styles.forEach(e => {
              i.forwardTime((e.offset || 0) * s),
                i.setStyles(e.styles, e.easing, t.errors, t.options),
                i.applyStylesToKeyframe();
            }),
            t.currentTimeline.mergeTimelineCollectedStyles(i),
            t.transformIntoNewTimeline(r + s),
            (t.previousNode = e);
        }
        visitQuery(e, t) {
          const n = t.currentTimeline.currentTime,
            r = e.options || {},
            s = r.delay ? wf(r.delay) : 0;
          s &&
            (6 === t.previousNode.type ||
              (0 == n &&
                t.currentTimeline.getCurrentStyleProperties().length)) &&
            (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = am));
          let i = n;
          const o = t.invokeQuery(
            e.selector,
            e.originalSelector,
            e.limit,
            e.includeSelf,
            !!r.optional,
            t.errors
          );
          t.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            t.currentQueryIndex = r;
            const o = t.createSubContext(e.options, n);
            s && o.delayNextStep(s),
              n === t.element && (a = o.currentTimeline),
              jf(this, e.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (t.currentQueryIndex = 0),
            (t.currentQueryTotal = 0),
            t.transformIntoNewTimeline(i),
            a &&
              (t.currentTimeline.mergeTimelineCollectedStyles(a),
              t.currentTimeline.snapshotCurrentStyles()),
            (t.previousNode = e);
        }
        visitStagger(e, t) {
          const n = t.parentContext,
            r = t.currentTimeline,
            s = e.timings,
            i = Math.abs(s.duration),
            o = i * (t.currentQueryTotal - 1);
          let a = i * t.currentQueryIndex;
          switch (s.duration < 0 ? "reverse" : s.easing) {
            case "reverse":
              a = o - a;
              break;
            case "full":
              a = n.currentStaggerTime;
          }
          const l = t.currentTimeline;
          a && l.delayNextStep(a);
          const c = l.currentTime;
          jf(this, e.animation, t),
            (t.previousNode = e),
            (n.currentStaggerTime =
              r.currentTime - c + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const am = {};
      class lm {
        constructor(e, t, n, r, s, i, o, a) {
          (this._driver = e),
            (this.element = t),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = am),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new cm(this._driver, t, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(e, t) {
          if (!e) return;
          const n = e;
          let r = this.options;
          null != n.duration && (r.duration = wf(n.duration)),
            null != n.delay && (r.delay = wf(n.delay));
          const s = n.params;
          if (s) {
            let e = r.params;
            e || (e = this.options.params = {}),
              Object.keys(s).forEach(n => {
                (t && e.hasOwnProperty(n)) || (e[n] = Pf(s[n], e, this.errors));
              });
          }
        }
        _copyOptions() {
          const e = {};
          if (this.options) {
            const t = this.options.params;
            if (t) {
              const n = (e.params = {});
              Object.keys(t).forEach(e => {
                n[e] = t[e];
              });
            }
          }
          return e;
        }
        createSubContext(e = null, t, n) {
          const r = t || this.element,
            s = new lm(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(e),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(e) {
          return (
            (this.previousNode = am),
            (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(e, t, n) {
          const r = {
              duration: null != t ? t : e.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                e.delay,
              easing: ""
            },
            s = new um(
              this._driver,
              e.element,
              e.keyframes,
              e.preStyleProps,
              e.postStyleProps,
              r,
              e.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(e) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
        }
        delayNextStep(e) {
          e > 0 && this.currentTimeline.delayNextStep(e);
        }
        invokeQuery(e, t, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), e.length > 0)) {
            e = (e = e.replace(rm, "." + this._enterClassName)).replace(
              sm,
              "." + this._leaveClassName
            );
            let t = this._driver.query(this.element, e, 1 != n);
            0 !== n &&
              (t = n < 0 ? t.slice(t.length + n, t.length) : t.slice(0, n)),
              o.push(...t);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class cm {
        constructor(e, t, n, r) {
          (this._driver = e),
            (this.element = t),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              t
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                t,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(e) {
          const t =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || t
            ? (this.forwardTime(this.currentTime + e),
              t && this.snapshotCurrentStyles())
            : (this.startTime += e);
        }
        fork(e, t) {
          return (
            this.applyStylesToKeyframe(),
            new cm(
              this._driver,
              e,
              t || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += nm), this._loadKeyframe();
        }
        forwardTime(e) {
          this.applyStylesToKeyframe(),
            (this.duration = e),
            this._loadKeyframe();
        }
        _updateStyle(e, t) {
          (this._localTimelineStyles[e] = t),
            (this._globalTimelineStyles[e] = t),
            (this._styleSummary[e] = { time: this.currentTime, value: t });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(e) {
          e && (this._previousKeyframe.easing = e),
            Object.keys(this._globalTimelineStyles).forEach(e => {
              (this._backFill[e] = this._globalTimelineStyles[e] || Lp),
                (this._currentKeyframe[e] = Lp);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(e, t, n, r) {
          t && (this._previousKeyframe.easing = t);
          const s = (r && r.params) || {},
            i = (function(e, t) {
              const n = {};
              let r;
              return (
                e.forEach(e => {
                  "*" === e
                    ? (r = r || Object.keys(t)).forEach(e => {
                        n[e] = Lp;
                      })
                    : Cf(e, !1, n);
                }),
                n
              );
            })(e, this._globalTimelineStyles);
          Object.keys(i).forEach(e => {
            const t = Pf(i[e], s, n);
            (this._pendingStyles[e] = t),
              this._localTimelineStyles.hasOwnProperty(e) ||
                (this._backFill[e] = this._globalTimelineStyles.hasOwnProperty(
                  e
                )
                  ? this._globalTimelineStyles[e]
                  : Lp),
              this._updateStyle(e, t);
          });
        }
        applyStylesToKeyframe() {
          const e = this._pendingStyles,
            t = Object.keys(e);
          0 != t.length &&
            ((this._pendingStyles = {}),
            t.forEach(t => {
              this._currentKeyframe[t] = e[t];
            }),
            Object.keys(this._localTimelineStyles).forEach(e => {
              this._currentKeyframe.hasOwnProperty(e) ||
                (this._currentKeyframe[e] = this._localTimelineStyles[e]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach(e => {
            const t = this._localTimelineStyles[e];
            (this._pendingStyles[e] = t), this._updateStyle(e, t);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const e = [];
          for (let t in this._currentKeyframe) e.push(t);
          return e;
        }
        mergeTimelineCollectedStyles(e) {
          Object.keys(e._styleSummary).forEach(t => {
            const n = this._styleSummary[t],
              r = e._styleSummary[t];
            (!n || r.time > n.time) && this._updateStyle(t, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const e = new Set(),
            t = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, i) => {
            const o = Cf(s, !0);
            Object.keys(o).forEach(n => {
              const r = o[n];
              r == zp ? e.add(n) : r == Lp && t.add(n);
            }),
              n || (o.offset = i / this.duration),
              r.push(o);
          });
          const s = e.size ? Df(e.values()) : [],
            i = t.size ? Df(t.values()) : [];
          if (n) {
            const e = r[0],
              t = Ef(e);
            (e.offset = 0), (t.offset = 1), (r = [e, t]);
          }
          return em(
            this.element,
            r,
            s,
            i,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class um extends cm {
        constructor(e, t, n, r, s, i, o = !1) {
          super(e, t, i.delay),
            (this.element = t),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let e = this.keyframes,
            { delay: t, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && t) {
            const s = [],
              i = n + t,
              o = t / i,
              a = Cf(e[0], !1);
            (a.offset = 0), s.push(a);
            const l = Cf(e[0], !1);
            (l.offset = hm(o)), s.push(l);
            const c = e.length - 1;
            for (let r = 1; r <= c; r++) {
              let o = Cf(e[r], !1);
              (o.offset = hm((t + o.offset * n) / i)), s.push(o);
            }
            (n = i), (t = 0), (r = ""), (e = s);
          }
          return em(
            this.element,
            e,
            this.preStyleProps,
            this.postStyleProps,
            n,
            t,
            r,
            !0
          );
        }
      }
      function hm(e, t = 3) {
        const n = Math.pow(10, t - 1);
        return Math.round(e * n) / n;
      }
      class dm {}
      class pm extends dm {
        normalizePropertyName(e, t) {
          return Mf(e);
        }
        normalizeStyleValue(e, t, n, r) {
          let s = "";
          const i = n.toString().trim();
          if (fm[t] && 0 !== n && "0" !== n)
            if ("number" == typeof n) s = "px";
            else {
              const t = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              t &&
                0 == t[1].length &&
                r.push(`Please provide a CSS unit value for ${e}:${n}`);
            }
          return i + s;
        }
      }
      const fm = (() =>
        (function(e) {
          const t = {};
          return e.forEach(e => (t[e] = !0)), t;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function mm(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        return {
          type: 0,
          element: e,
          triggerName: t,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: u,
          totalTime: h,
          errors: d
        };
      }
      const gm = {};
      class ym {
        constructor(e, t, n) {
          (this._triggerName = e), (this.ast = t), (this._stateStyles = n);
        }
        match(e, t, n, r) {
          return (function(e, t, n, r, s) {
            return e.some(e => e(t, n, r, s));
          })(this.ast.matchers, e, t, n, r);
        }
        buildStyles(e, t, n) {
          const r = this._stateStyles["*"],
            s = this._stateStyles[e],
            i = r ? r.buildStyles(t, n) : {};
          return s ? s.buildStyles(t, n) : i;
        }
        build(e, t, n, r, s, i, o, a, l, c) {
          const u = [],
            h = (this.ast.options && this.ast.options.params) || gm,
            d = this.buildStyles(n, (o && o.params) || gm, u),
            p = (a && a.params) || gm,
            f = this.buildStyles(r, p, u),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            _ = "void" === r,
            v = { params: Object.assign({}, h, p) },
            w = c ? [] : im(e, t, this.ast.animation, s, i, d, f, v, l, u);
          let b = 0;
          if (
            (w.forEach(e => {
              b = Math.max(e.duration + e.delay, b);
            }),
            u.length)
          )
            return mm(t, this._triggerName, n, r, _, d, f, [], [], g, y, b, u);
          w.forEach(e => {
            const n = e.element,
              r = Gp(g, n, {});
            e.preStyleProps.forEach(e => (r[e] = !0));
            const s = Gp(y, n, {});
            e.postStyleProps.forEach(e => (s[e] = !0)), n !== t && m.add(n);
          });
          const S = Df(m.values());
          return mm(t, this._triggerName, n, r, _, d, f, w, S, g, y, b);
        }
      }
      class _m {
        constructor(e, t) {
          (this.styles = e), (this.defaultParams = t);
        }
        buildStyles(e, t) {
          const n = {},
            r = Ef(this.defaultParams);
          return (
            Object.keys(e).forEach(t => {
              const n = e[t];
              null != n && (r[t] = n);
            }),
            this.styles.styles.forEach(e => {
              if ("string" != typeof e) {
                const s = e;
                Object.keys(s).forEach(e => {
                  let i = s[e];
                  i.length > 1 && (i = Pf(i, r, t)), (n[e] = i);
                });
              }
            }),
            n
          );
        }
      }
      class vm {
        constructor(e, t) {
          (this.name = e),
            (this.ast = t),
            (this.transitionFactories = []),
            (this.states = {}),
            t.states.forEach(e => {
              this.states[e.name] = new _m(
                e.style,
                (e.options && e.options.params) || {}
              );
            }),
            wm(this.states, "true", "1"),
            wm(this.states, "false", "0"),
            t.transitions.forEach(t => {
              this.transitionFactories.push(new ym(e, t, this.states));
            }),
            (this.fallbackTransition = new ym(
              e,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(e, t) => !0],
                options: null,
                queryCount: 0,
                depCount: 0
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(e, t, n, r) {
          return (
            this.transitionFactories.find(s => s.match(e, t, n, r)) || null
          );
        }
        matchStyles(e, t, n) {
          return this.fallbackTransition.buildStyles(e, t, n);
        }
      }
      function wm(e, t, n) {
        e.hasOwnProperty(t)
          ? e.hasOwnProperty(n) || (e[n] = e[t])
          : e.hasOwnProperty(n) && (e[t] = e[n]);
      }
      const bm = new tm();
      class Sm {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(e, t) {
          const n = [],
            r = Wf(this._driver, t, n);
          if (n.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${n.join(
                "\n"
              )}`
            );
          this._animations[e] = r;
        }
        _buildPlayer(e, t, n) {
          const r = e.element,
            s = Qp(0, this._normalizer, 0, e.keyframes, t, n);
          return this._driver.animate(
            r,
            s,
            e.duration,
            e.delay,
            e.easing,
            [],
            !0
          );
        }
        create(e, t, n = {}) {
          const r = [],
            s = this._animations[e];
          let i;
          const o = new Map();
          if (
            (s
              ? (i = im(this._driver, t, s, ff, mf, {}, {}, n, bm, r)).forEach(
                  e => {
                    const t = Gp(o, e.element, {});
                    e.postStyleProps.forEach(e => (t[e] = null));
                  }
                )
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (i = [])),
            r.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${r.join(
                "\n"
              )}`
            );
          o.forEach((e, t) => {
            Object.keys(e).forEach(n => {
              e[n] = this._driver.computeStyle(t, n, Lp);
            });
          });
          const a = qp(
            i.map(e => {
              const t = o.get(e.element);
              return this._buildPlayer(e, {}, t);
            })
          );
          return (
            (this._playersById[e] = a),
            a.onDestroy(() => this.destroy(e)),
            this.players.push(a),
            a
          );
        }
        destroy(e) {
          const t = this._getPlayer(e);
          t.destroy(), delete this._playersById[e];
          const n = this.players.indexOf(t);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(e) {
          const t = this._playersById[e];
          if (!t)
            throw new Error(
              `Unable to find the timeline player referenced by ${e}`
            );
          return t;
        }
        listen(e, t, n, r) {
          const s = Zp(t, "", "", "");
          return Wp(this._getPlayer(e), n, s, r), () => {};
        }
        command(e, t, n, r) {
          if ("register" == n) return void this.register(e, r[0]);
          if ("create" == n) return void this.create(e, t, r[0] || {});
          const s = this._getPlayer(e);
          switch (n) {
            case "play":
              s.play();
              break;
            case "pause":
              s.pause();
              break;
            case "reset":
              s.reset();
              break;
            case "restart":
              s.restart();
              break;
            case "finish":
              s.finish();
              break;
            case "init":
              s.init();
              break;
            case "setPosition":
              s.setPosition(parseFloat(r[0]));
              break;
            case "destroy":
              this.destroy(e);
          }
        }
      }
      const Em = "ng-animate-queued",
        Cm = ".ng-animate-queued",
        xm = "ng-animate-disabled",
        Tm = ".ng-animate-disabled",
        km = "ng-star-inserted",
        Im = ".ng-star-inserted",
        Am = [],
        Nm = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1
        },
        Rm = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0
        },
        Pm = "__ng_removed";
      class Dm {
        constructor(e, t = "") {
          this.namespaceId = t;
          const n = e && e.hasOwnProperty("value");
          if (
            ((this.value = (function(e) {
              return null != e ? e : null;
            })(n ? e.value : e)),
            n)
          ) {
            const t = Ef(e);
            delete t.value, (this.options = t);
          } else this.options = {};
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(e) {
          const t = e.params;
          if (t) {
            const e = this.options.params;
            Object.keys(t).forEach(n => {
              null == e[n] && (e[n] = t[n]);
            });
          }
        }
      }
      const Om = "void",
        Mm = new Dm(Om);
      class Fm {
        constructor(e, t, n) {
          (this.id = e),
            (this.hostElement = t),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + e),
            Bm(t, this._hostClassName);
        }
        listen(e, t, n, r) {
          if (!this._triggers.hasOwnProperty(t))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${t}" because the provided event is undefined!`
            );
          if ("start" != (s = n) && "done" != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`
            );
          var s;
          const i = Gp(this._elementListeners, e, []),
            o = { name: t, phase: n, callback: r };
          i.push(o);
          const a = Gp(this._engine.statesByElement, e, {});
          return (
            a.hasOwnProperty(t) ||
              (Bm(e, gf), Bm(e, gf + "-" + t), (a[t] = Mm)),
            () => {
              this._engine.afterFlush(() => {
                const e = i.indexOf(o);
                e >= 0 && i.splice(e, 1), this._triggers[t] || delete a[t];
              });
            }
          );
        }
        register(e, t) {
          return !this._triggers[e] && ((this._triggers[e] = t), !0);
        }
        _getTrigger(e) {
          const t = this._triggers[e];
          if (!t)
            throw new Error(
              `The provided animation trigger "${e}" has not been registered!`
            );
          return t;
        }
        trigger(e, t, n, r = !0) {
          const s = this._getTrigger(t),
            i = new jm(this.id, t, e);
          let o = this._engine.statesByElement.get(e);
          o ||
            (Bm(e, gf),
            Bm(e, gf + "-" + t),
            this._engine.statesByElement.set(e, (o = {})));
          let a = o[t];
          const l = new Dm(n, this.id);
          if (
            (!(n && n.hasOwnProperty("value")) &&
              a &&
              l.absorbOptions(a.options),
            (o[t] = l),
            a || (a = Mm),
            l.value !== Om && a.value === l.value)
          ) {
            if (
              !(function(e, t) {
                const n = Object.keys(e),
                  r = Object.keys(t);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!t.hasOwnProperty(r) || e[r] !== t[r]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const t = [],
                n = s.matchStyles(a.value, a.params, t),
                r = s.matchStyles(l.value, l.params, t);
              t.length
                ? this._engine.reportError(t)
                : this._engine.afterFlush(() => {
                    If(e, n), kf(e, r);
                  });
            }
            return;
          }
          const c = Gp(this._engine.playersByElement, e, []);
          c.forEach(e => {
            e.namespaceId == this.id &&
              e.triggerName == t &&
              e.queued &&
              e.destroy();
          });
          let u = s.matchTransition(a.value, l.value, e, l.params),
            h = !1;
          if (!u) {
            if (!r) return;
            (u = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: t,
              transition: u,
              fromState: a,
              toState: l,
              player: i,
              isFallbackTransition: h
            }),
            h ||
              (Bm(e, Em),
              i.onStart(() => {
                qm(e, Em);
              })),
            i.onDone(() => {
              let t = this.players.indexOf(i);
              t >= 0 && this.players.splice(t, 1);
              const n = this._engine.playersByElement.get(e);
              if (n) {
                let e = n.indexOf(i);
                e >= 0 && n.splice(e, 1);
              }
            }),
            this.players.push(i),
            c.push(i),
            i
          );
        }
        deregister(e) {
          delete this._triggers[e],
            this._engine.statesByElement.forEach((t, n) => {
              delete t[e];
            }),
            this._elementListeners.forEach((t, n) => {
              this._elementListeners.set(n, t.filter(t => t.name != e));
            });
        }
        clearElementCache(e) {
          this._engine.statesByElement.delete(e),
            this._elementListeners.delete(e);
          const t = this._engine.playersByElement.get(e);
          t &&
            (t.forEach(e => e.destroy()),
            this._engine.playersByElement.delete(e));
        }
        _signalRemovalForInnerTriggers(e, t, n = !1) {
          this._engine.driver.query(e, yf, !0).forEach(e => {
            if (e[Pm]) return;
            const n = this._engine.fetchNamespacesByElement(e);
            n.size
              ? n.forEach(n => n.triggerLeaveAnimation(e, t, !1, !0))
              : this.clearElementCache(e);
          });
        }
        triggerLeaveAnimation(e, t, n, r) {
          const s = this._engine.statesByElement.get(e);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach(t => {
                if (this._triggers[t]) {
                  const n = this.trigger(e, t, Om, r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, e, !0, t),
                n && qp(i).onDone(() => this._engine.processLeaveNode(e)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(e) {
          const t = this._elementListeners.get(e);
          if (t) {
            const n = new Set();
            t.forEach(t => {
              const r = t.name;
              if (n.has(r)) return;
              n.add(r);
              const s = this._triggers[r].fallbackTransition,
                i = this._engine.statesByElement.get(e)[r] || Mm,
                o = new Dm(Om),
                a = new jm(this.id, r, e);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: e,
                  triggerName: r,
                  transition: s,
                  fromState: i,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0
                });
            });
          }
        }
        removeNode(e, t) {
          const n = this._engine;
          if (
            (e.childElementCount &&
              this._signalRemovalForInnerTriggers(e, t, !0),
            this.triggerLeaveAnimation(e, t, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const t = n.players.length ? n.playersByQueriedElement.get(e) : [];
            if (t && t.length) r = !0;
            else {
              let t = e;
              for (; (t = t.parentNode); )
                if (n.statesByElement.get(t)) {
                  r = !0;
                  break;
                }
            }
          }
          this.prepareLeaveAnimationListeners(e),
            r
              ? n.markElementAsRemoved(this.id, e, !1, t)
              : (n.afterFlush(() => this.clearElementCache(e)),
                n.destroyInnerAnimations(e),
                n._onRemovalComplete(e, t));
        }
        insertNode(e, t) {
          Bm(e, this._hostClassName);
        }
        drainQueuedTransitions(e) {
          const t = [];
          return (
            this._queue.forEach(n => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach(t => {
                  if (t.name == n.triggerName) {
                    const r = Zp(
                      s,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = e), Wp(n.player, t.phase, r, t.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : t.push(n);
            }),
            (this._queue = []),
            t.sort((e, t) => {
              const n = e.transition.ast.depCount,
                r = t.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(e.element, t.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(e) {
          this.players.forEach(e => e.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, e);
        }
        elementContainsData(e) {
          let t = !1;
          return (
            this._elementListeners.has(e) && (t = !0),
            !!this._queue.find(t => t.element === e) || t
          );
        }
      }
      class Lm {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this.driver = t),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (e, t) => {});
        }
        _onRemovalComplete(e, t) {
          this.onRemovalComplete(e, t);
        }
        get queuedPlayers() {
          const e = [];
          return (
            this._namespaceList.forEach(t => {
              t.players.forEach(t => {
                t.queued && e.push(t);
              });
            }),
            e
          );
        }
        createNamespace(e, t) {
          const n = new Fm(e, t, this);
          return (
            t.parentNode
              ? this._balanceNamespaceList(n, t)
              : (this.newHostElements.set(t, n), this.collectEnterElement(t)),
            (this._namespaceLookup[e] = n)
          );
        }
        _balanceNamespaceList(e, t) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (
                this.driver.containsElement(
                  this._namespaceList[s].hostElement,
                  t
                )
              ) {
                this._namespaceList.splice(s + 1, 0, e), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, e);
          } else this._namespaceList.push(e);
          return this.namespacesByHostElement.set(t, e), e;
        }
        register(e, t) {
          let n = this._namespaceLookup[e];
          return n || (n = this.createNamespace(e, t)), n;
        }
        registerTrigger(e, t, n) {
          let r = this._namespaceLookup[e];
          r && r.register(t, n) && this.totalAnimations++;
        }
        destroy(e, t) {
          if (!e) return;
          const n = this._fetchNamespace(e);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[e];
            const t = this._namespaceList.indexOf(n);
            t >= 0 && this._namespaceList.splice(t, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(t));
        }
        _fetchNamespace(e) {
          return this._namespaceLookup[e];
        }
        fetchNamespacesByElement(e) {
          const t = new Set(),
            n = this.statesByElement.get(e);
          if (n) {
            const e = Object.keys(n);
            for (let r = 0; r < e.length; r++) {
              const s = n[e[r]].namespaceId;
              if (s) {
                const e = this._fetchNamespace(s);
                e && t.add(e);
              }
            }
          }
          return t;
        }
        trigger(e, t, n, r) {
          if (Um(t)) {
            const s = this._fetchNamespace(e);
            if (s) return s.trigger(t, n, r), !0;
          }
          return !1;
        }
        insertNode(e, t, n, r) {
          if (!Um(t)) return;
          const s = t[Pm];
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const e = this.collectedLeaveElements.indexOf(t);
            e >= 0 && this.collectedLeaveElements.splice(e, 1);
          }
          if (e) {
            const r = this._fetchNamespace(e);
            r && r.insertNode(t, n);
          }
          r && this.collectEnterElement(t);
        }
        collectEnterElement(e) {
          this.collectedEnterElements.push(e);
        }
        markElementAsDisabled(e, t) {
          t
            ? this.disabledNodes.has(e) ||
              (this.disabledNodes.add(e), Bm(e, xm))
            : this.disabledNodes.has(e) &&
              (this.disabledNodes.delete(e), qm(e, xm));
        }
        removeNode(e, t, n, r) {
          if (Um(t)) {
            const s = e ? this._fetchNamespace(e) : null;
            if (
              (s ? s.removeNode(t, r) : this.markElementAsRemoved(e, t, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(t);
              n && n.id !== e && n.removeNode(t, r);
            }
          } else this._onRemovalComplete(t, r);
        }
        markElementAsRemoved(e, t, n, r) {
          this.collectedLeaveElements.push(t),
            (t[Pm] = {
              namespaceId: e,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1
            });
        }
        listen(e, t, n, r, s) {
          return Um(t) ? this._fetchNamespace(e).listen(t, n, r, s) : () => {};
        }
        _buildInstruction(e, t, n, r, s) {
          return e.transition.build(
            this.driver,
            e.element,
            e.fromState.value,
            e.toState.value,
            n,
            r,
            e.fromState.options,
            e.toState.options,
            t,
            s
          );
        }
        destroyInnerAnimations(e) {
          let t = this.driver.query(e, yf, !0);
          t.forEach(e => this.destroyActiveAnimationsForElement(e)),
            0 != this.playersByQueriedElement.size &&
              (t = this.driver.query(e, vf, !0)).forEach(e =>
                this.finishActiveQueriedAnimationOnElement(e)
              );
        }
        destroyActiveAnimationsForElement(e) {
          const t = this.playersByElement.get(e);
          t &&
            t.forEach(e => {
              e.queued ? (e.markedForDestroy = !0) : e.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(e) {
          const t = this.playersByQueriedElement.get(e);
          t && t.forEach(e => e.finish());
        }
        whenRenderingDone() {
          return new Promise(e => {
            if (this.players.length) return qp(this.players).onDone(() => e());
            e();
          });
        }
        processLeaveNode(e) {
          const t = e[Pm];
          if (t && t.setForRemoval) {
            if (((e[Pm] = Nm), t.namespaceId)) {
              this.destroyInnerAnimations(e);
              const n = this._fetchNamespace(t.namespaceId);
              n && n.clearElementCache(e);
            }
            this._onRemovalComplete(e, t.setForRemoval);
          }
          this.driver.matchesElement(e, Tm) &&
            this.markElementAsDisabled(e, !1),
            this.driver.query(e, Tm, !0).forEach(e => {
              this.markElementAsDisabled(e, !1);
            });
        }
        flush(e = -1) {
          let t = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((e, t) =>
                this._balanceNamespaceList(e, t)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              Bm(this.collectedEnterElements[n], km);
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              t = this._flushAnimations(n, e);
            } finally {
              for (let e = 0; e < n.length; e++) n[e]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach(e => e()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const e = this._whenQuietFns;
            (this._whenQuietFns = []),
              t.length
                ? qp(t).onDone(() => {
                    e.forEach(e => e());
                  })
                : e.forEach(e => e());
          }
        }
        reportError(e) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${e.join(
              "\n"
            )}`
          );
        }
        _flushAnimations(e, t) {
          const n = new tm(),
            r = [],
            s = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            c = new Set();
          this.disabledNodes.forEach(e => {
            c.add(e);
            const t = this.driver.query(e, Cm, !0);
            for (let n = 0; n < t.length; n++) c.add(t[n]);
          });
          const u = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = Hm(h, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((e, t) => {
            const n = ff + f++;
            p.set(t, n), e.forEach(e => Bm(e, n));
          });
          const m = [],
            g = new Set(),
            y = new Set();
          for (let N = 0; N < this.collectedLeaveElements.length; N++) {
            const e = this.collectedLeaveElements[N],
              t = e[Pm];
            t &&
              t.setForRemoval &&
              (m.push(e),
              g.add(e),
              t.hasAnimation
                ? this.driver.query(e, Im, !0).forEach(e => g.add(e))
                : y.add(e));
          }
          const _ = new Map(),
            v = Hm(h, Array.from(g));
          v.forEach((e, t) => {
            const n = mf + f++;
            _.set(t, n), e.forEach(e => Bm(e, n));
          }),
            e.push(() => {
              d.forEach((e, t) => {
                const n = p.get(t);
                e.forEach(e => qm(e, n));
              }),
                v.forEach((e, t) => {
                  const n = _.get(t);
                  e.forEach(e => qm(e, n));
                }),
                m.forEach(e => {
                  this.processLeaveNode(e);
                });
            });
          const w = [],
            b = [];
          for (let N = this._namespaceList.length - 1; N >= 0; N--)
            this._namespaceList[N].drainQueuedTransitions(t).forEach(e => {
              const t = e.player,
                s = e.element;
              if ((w.push(t), this.collectedEnterElements.length)) {
                const e = s[Pm];
                if (e && e.setForMove) return void t.destroy();
              }
              const c = !u || !this.driver.containsElement(u, s),
                h = _.get(s),
                d = p.get(s),
                f = this._buildInstruction(e, n, d, h, c);
              if (!f.errors || !f.errors.length)
                return c
                  ? (t.onStart(() => If(s, f.fromStyles)),
                    t.onDestroy(() => kf(s, f.toStyles)),
                    void r.push(t))
                  : e.isFallbackTransition
                  ? (t.onStart(() => If(s, f.fromStyles)),
                    t.onDestroy(() => kf(s, f.toStyles)),
                    void r.push(t))
                  : (f.timelines.forEach(e => (e.stretchStartingKeyframe = !0)),
                    n.append(s, f.timelines),
                    i.push({ instruction: f, player: t, element: s }),
                    f.queriedElements.forEach(e => Gp(o, e, []).push(t)),
                    f.preStyleProps.forEach((e, t) => {
                      const n = Object.keys(e);
                      if (n.length) {
                        let e = a.get(t);
                        e || a.set(t, (e = new Set())),
                          n.forEach(t => e.add(t));
                      }
                    }),
                    void f.postStyleProps.forEach((e, t) => {
                      const n = Object.keys(e);
                      let r = l.get(t);
                      r || l.set(t, (r = new Set())), n.forEach(e => r.add(e));
                    }));
              b.push(f);
            });
          if (b.length) {
            const e = [];
            b.forEach(t => {
              e.push(`@${t.triggerName} has failed due to:\n`),
                t.errors.forEach(t => e.push(`- ${t}\n`));
            }),
              w.forEach(e => e.destroy()),
              this.reportError(e);
          }
          const S = new Map(),
            E = new Map();
          i.forEach(e => {
            const t = e.element;
            n.has(t) &&
              (E.set(t, t),
              this._beforeAnimationBuild(
                e.player.namespaceId,
                e.instruction,
                S
              ));
          }),
            r.forEach(e => {
              const t = e.element;
              this._getPreviousPlayers(
                t,
                !1,
                e.namespaceId,
                e.triggerName,
                null
              ).forEach(e => {
                Gp(S, t, []).push(e), e.destroy();
              });
            });
          const C = m.filter(e => Wm(e, a, l)),
            x = new Map();
          $m(x, this.driver, y, l, Lp).forEach(e => {
            Wm(e, a, l) && C.push(e);
          });
          const T = new Map();
          d.forEach((e, t) => {
            $m(T, this.driver, new Set(e), a, zp);
          }),
            C.forEach(e => {
              const t = x.get(e),
                n = T.get(e);
              x.set(e, Object.assign({}, t, n));
            });
          const k = [],
            I = [],
            A = {};
          i.forEach(e => {
            const { element: t, player: i, instruction: o } = e;
            if (n.has(t)) {
              if (c.has(t))
                return (
                  i.onDestroy(() => kf(t, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let e = A;
              if (E.size > 1) {
                let n = t;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const t = E.get(n);
                  if (t) {
                    e = t;
                    break;
                  }
                  r.push(n);
                }
                r.forEach(t => E.set(t, e));
              }
              const n = this._buildAnimation(i.namespaceId, o, S, s, T, x);
              if ((i.setRealPlayer(n), e === A)) k.push(i);
              else {
                const t = this.playersByElement.get(e);
                t && t.length && (i.parentPlayer = qp(t)), r.push(i);
              }
            } else
              If(t, o.fromStyles),
                i.onDestroy(() => kf(t, o.toStyles)),
                I.push(i),
                c.has(t) && r.push(i);
          }),
            I.forEach(e => {
              const t = s.get(e.element);
              if (t && t.length) {
                const n = qp(t);
                e.setRealPlayer(n);
              }
            }),
            r.forEach(e => {
              e.parentPlayer ? e.syncPlayerEvents(e.parentPlayer) : e.destroy();
            });
          for (let N = 0; N < m.length; N++) {
            const e = m[N],
              t = e[Pm];
            if ((qm(e, mf), t && t.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let t = o.get(e);
              t && t.length && n.push(...t);
              let r = this.driver.query(e, vf, !0);
              for (let e = 0; e < r.length; e++) {
                let t = o.get(r[e]);
                t && t.length && n.push(...t);
              }
            }
            const r = n.filter(e => !e.destroyed);
            r.length ? Qm(this, e, r) : this.processLeaveNode(e);
          }
          return (
            (m.length = 0),
            k.forEach(e => {
              this.players.push(e),
                e.onDone(() => {
                  e.destroy();
                  const t = this.players.indexOf(e);
                  this.players.splice(t, 1);
                }),
                e.play();
            }),
            k
          );
        }
        elementContainsData(e, t) {
          let n = !1;
          const r = t[Pm];
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(t) && (n = !0),
            this.playersByQueriedElement.has(t) && (n = !0),
            this.statesByElement.has(t) && (n = !0),
            this._fetchNamespace(e).elementContainsData(t) || n
          );
        }
        afterFlush(e) {
          this._flushFns.push(e);
        }
        afterFlushAnimationsDone(e) {
          this._whenQuietFns.push(e);
        }
        _getPreviousPlayers(e, t, n, r, s) {
          let i = [];
          if (t) {
            const t = this.playersByQueriedElement.get(e);
            t && (i = t);
          } else {
            const t = this.playersByElement.get(e);
            if (t) {
              const e = !s || s == Om;
              t.forEach(t => {
                t.queued || ((e || t.triggerName == r) && i.push(t));
              });
            }
          }
          return (
            (n || r) &&
              (i = i.filter(
                e => !((n && n != e.namespaceId) || (r && r != e.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(e, t, n) {
          const r = t.element,
            s = t.isRemovalTransition ? void 0 : e,
            i = t.isRemovalTransition ? void 0 : t.triggerName;
          for (const o of t.timelines) {
            const e = o.element,
              a = e !== r,
              l = Gp(n, e, []);
            this._getPreviousPlayers(e, a, s, i, t.toState).forEach(e => {
              const t = e.getRealPlayer();
              t.beforeDestroy && t.beforeDestroy(), e.destroy(), l.push(e);
            });
          }
          If(r, t.fromStyles);
        }
        _buildAnimation(e, t, n, r, s, i) {
          const o = t.triggerName,
            a = t.element,
            l = [],
            c = new Set(),
            u = new Set(),
            h = t.timelines.map(t => {
              const h = t.element;
              c.add(h);
              const d = h[Pm];
              if (d && d.removedBeforeQueried)
                return new $p(t.duration, t.delay);
              const p = h !== a,
                f = (function(e) {
                  const t = [];
                  return (
                    (function e(t, n) {
                      for (let r = 0; r < t.length; r++) {
                        const s = t[r];
                        s instanceof Hp ? e(s.players, n) : n.push(s);
                      }
                    })((n.get(h) || Am).map(e => e.getRealPlayer()), t),
                    t
                  );
                })().filter(e => !!e.element && e.element === h),
                m = s.get(h),
                g = i.get(h),
                y = Qp(0, this._normalizer, 0, t.keyframes, m, g),
                _ = this._buildPlayer(t, y, f);
              if ((t.subTimeline && r && u.add(h), p)) {
                const t = new jm(e, o, h);
                t.setRealPlayer(_), l.push(t);
              }
              return _;
            });
          l.forEach(e => {
            Gp(this.playersByQueriedElement, e.element, []).push(e),
              e.onDone(() =>
                (function(e, t, n) {
                  let r;
                  if (e instanceof Map) {
                    if ((r = e.get(t))) {
                      if (r.length) {
                        const e = r.indexOf(n);
                        r.splice(e, 1);
                      }
                      0 == r.length && e.delete(t);
                    }
                  } else if ((r = e[t])) {
                    if (r.length) {
                      const e = r.indexOf(n);
                      r.splice(e, 1);
                    }
                    0 == r.length && delete e[t];
                  }
                  return r;
                })(this.playersByQueriedElement, e.element, e)
              );
          }),
            c.forEach(e => Bm(e, _f));
          const d = qp(h);
          return (
            d.onDestroy(() => {
              c.forEach(e => qm(e, _f)), kf(a, t.toStyles);
            }),
            u.forEach(e => {
              Gp(r, e, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(e, t, n) {
          return t.length > 0
            ? this.driver.animate(
                e.element,
                t,
                e.duration,
                e.delay,
                e.easing,
                n
              )
            : new $p(e.duration, e.delay);
        }
      }
      class jm {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.triggerName = t),
            (this.element = n),
            (this._player = new $p()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(e) {
          this._containsRealPlayer ||
            ((this._player = e),
            Object.keys(this._queuedCallbacks).forEach(t => {
              this._queuedCallbacks[t].forEach(n => Wp(e, t, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(e.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(e) {
          this.totalTime = e;
        }
        syncPlayerEvents(e) {
          const t = this._player;
          t.triggerCallback && e.onStart(() => t.triggerCallback("start")),
            e.onDone(() => this.finish()),
            e.onDestroy(() => this.destroy());
        }
        _queueEvent(e, t) {
          Gp(this._queuedCallbacks, e, []).push(t);
        }
        onDone(e) {
          this.queued && this._queueEvent("done", e), this._player.onDone(e);
        }
        onStart(e) {
          this.queued && this._queueEvent("start", e), this._player.onStart(e);
        }
        onDestroy(e) {
          this.queued && this._queueEvent("destroy", e),
            this._player.onDestroy(e);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(e) {
          this.queued || this._player.setPosition(e);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(e) {
          const t = this._player;
          t.triggerCallback && t.triggerCallback(e);
        }
      }
      function Um(e) {
        return e && 1 === e.nodeType;
      }
      function Vm(e, t) {
        const n = e.style.display;
        return (e.style.display = null != t ? t : "none"), n;
      }
      function $m(e, t, n, r, s) {
        const i = [];
        n.forEach(e => i.push(Vm(e)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach(e => {
            const n = (i[e] = t.computeStyle(r, e, s));
            (n && 0 != n.length) || ((r[Pm] = Rm), o.push(r));
          }),
            e.set(r, i);
        });
        let a = 0;
        return n.forEach(e => Vm(e, i[a++])), o;
      }
      function Hm(e, t) {
        const n = new Map();
        if ((e.forEach(e => n.set(e, [])), 0 == t.length)) return n;
        const r = new Set(t),
          s = new Map();
        return (
          t.forEach(e => {
            const t = (function e(t) {
              if (!t) return 1;
              let i = s.get(t);
              if (i) return i;
              const o = t.parentNode;
              return (i = n.has(o) ? o : r.has(o) ? 1 : e(o)), s.set(t, i), i;
            })(e);
            1 !== t && n.get(t).push(e);
          }),
          n
        );
      }
      const zm = "$$classes";
      function Bm(e, t) {
        if (e.classList) e.classList.add(t);
        else {
          let n = e[zm];
          n || (n = e[zm] = {}), (n[t] = !0);
        }
      }
      function qm(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
          let n = e[zm];
          n && delete n[t];
        }
      }
      function Qm(e, t, n) {
        qp(n).onDone(() => e.processLeaveNode(t));
      }
      function Wm(e, t, n) {
        const r = n.get(e);
        if (!r) return !1;
        let s = t.get(e);
        return s ? r.forEach(e => s.add(e)) : t.set(e, r), n.delete(e), !0;
      }
      class Km {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (e, t) => {}),
            (this._transitionEngine = new Lm(e, t, n)),
            (this._timelineEngine = new Sm(e, t, n)),
            (this._transitionEngine.onRemovalComplete = (e, t) =>
              this.onRemovalComplete(e, t));
        }
        registerTrigger(e, t, n, r, s) {
          const i = e + "-" + r;
          let o = this._triggerCache[i];
          if (!o) {
            const e = [],
              t = Wf(this._driver, s, e);
            if (e.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join(
                  "\n - "
                )}`
              );
            (o = (function(e, t) {
              return new vm(e, t);
            })(r, t)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(t, r, o);
        }
        register(e, t) {
          this._transitionEngine.register(e, t);
        }
        destroy(e, t) {
          this._transitionEngine.destroy(e, t);
        }
        onInsert(e, t, n, r) {
          this._transitionEngine.insertNode(e, t, n, r);
        }
        onRemove(e, t, n, r) {
          this._transitionEngine.removeNode(e, t, r || !1, n);
        }
        disableAnimations(e, t) {
          this._transitionEngine.markElementAsDisabled(e, t);
        }
        process(e, t, n, r) {
          if ("@" == n.charAt(0)) {
            const [e, s] = Yp(n);
            this._timelineEngine.command(e, t, s, r);
          } else this._transitionEngine.trigger(e, t, n, r);
        }
        listen(e, t, n, r, s) {
          if ("@" == n.charAt(0)) {
            const [e, r] = Yp(n);
            return this._timelineEngine.listen(e, t, r, s);
          }
          return this._transitionEngine.listen(e, t, n, r, s);
        }
        flush(e = -1) {
          this._transitionEngine.flush(e);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function Zm(e, t) {
        let n = null,
          r = null;
        return (
          Array.isArray(t) && t.length
            ? ((n = Ym(t[0])), t.length > 1 && (r = Ym(t[t.length - 1])))
            : t && (n = Ym(t)),
          n || r ? new Gm(e, n, r) : null
        );
      }
      const Gm = (() => {
        class e {
          constructor(t, n, r) {
            (this._element = t),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let s = e.initialStylesByElement.get(t);
            s || e.initialStylesByElement.set(t, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                kf(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (kf(this._element, this._initialStyles),
                this._endStyles &&
                  (kf(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (e.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (If(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (If(this._element, this._endStyles),
                  (this._endStyles = null)),
                kf(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (e.initialStylesByElement = new WeakMap()), e;
      })();
      function Ym(e) {
        let t = null;
        const n = Object.keys(e);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          Xm(s) && ((t = t || {})[s] = e[s]);
        }
        return t;
      }
      function Xm(e) {
        return "display" === e || "position" === e;
      }
      const Jm = 3,
        eg = "animation",
        tg = "animationend",
        ng = 1e3;
      class rg {
        constructor(e, t, n, r, s, i, o) {
          (this._element = e),
            (this._name = t),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = e => this._handleCallback(e));
        }
        apply() {
          !(function(e, t) {
            const n = cg(e, "").trim();
            n.length &&
              ((function(e, t) {
                let n = 0;
                for (let r = 0; r < e.length; r++) "," === e.charAt(r) && n++;
              })(n),
              (t = `${n}, ${t}`)),
              lg(e, "", t);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            ag(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          sg(this._element, this._name, "paused");
        }
        resume() {
          sg(this._element, this._name, "running");
        }
        setPosition(e) {
          const t = ig(this._element, this._name);
          (this._position = e * this._duration),
            lg(this._element, "Delay", `-${this._position}ms`, t);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(e) {
          const t = e._ngTestManualTimestamp || Date.now(),
            n = parseFloat(e.elapsedTime.toFixed(Jm)) * ng;
          e.animationName == this._name &&
            Math.max(t - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            ag(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function(e, t) {
              const n = cg(e, "").split(","),
                r = og(n, t);
              r >= 0 && (n.splice(r, 1), lg(e, "", n.join(",")));
            })(this._element, this._name));
        }
      }
      function sg(e, t, n) {
        lg(e, "PlayState", n, ig(e, t));
      }
      function ig(e, t) {
        const n = cg(e, "");
        return n.indexOf(",") > 0 ? og(n.split(","), t) : og([n], t);
      }
      function og(e, t) {
        for (let n = 0; n < e.length; n++) if (e[n].indexOf(t) >= 0) return n;
        return -1;
      }
      function ag(e, t, n) {
        n ? e.removeEventListener(tg, t) : e.addEventListener(tg, t);
      }
      function lg(e, t, n, r) {
        const s = eg + t;
        if (null != r) {
          const t = e.style[s];
          if (t.length) {
            const e = t.split(",");
            (e[r] = n), (n = e.join(","));
          }
        }
        e.style[s] = n;
      }
      function cg(e, t) {
        return e.style[eg + t];
      }
      const ug = "forwards",
        hg = "linear";
      class dg {
        constructor(e, t, n, r, s, i, o, a) {
          (this.element = e),
            (this.keyframes = t),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || hg),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach(e => e()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach(e => e()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach(e => e()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(e) {
          this._styler.setPosition(e);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new rg(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            ug,
            () => this.finish()
          );
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
        beforeDestroy() {
          this.init();
          const e = {};
          if (this.hasStarted()) {
            const t = this._state >= 3;
            Object.keys(this._finalStyles).forEach(n => {
              "offset" != n &&
                (e[n] = t ? this._finalStyles[n] : Uf(this.element, n));
            });
          }
          this.currentSnapshot = e;
        }
      }
      class pg extends $p {
        constructor(e, t) {
          super(),
            (this.element = e),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = cf(t));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach(e => {
              this._startingStyles[e] = this.element.style[e];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach(e =>
              this.element.style.setProperty(e, this._styles[e])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach(e => {
              const t = this._startingStyles[e];
              t
                ? this.element.style.setProperty(e, t)
                : this.element.style.removeProperty(e);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      const fg = "gen_css_kf_",
        mg = " ";
      class gg {
        constructor() {
          (this._count = 0),
            (this._head = document.querySelector("head")),
            (this._warningIssued = !1);
        }
        validateStyleProperty(e) {
          return sf(e);
        }
        matchesElement(e, t) {
          return of(e, t);
        }
        containsElement(e, t) {
          return af(e, t);
        }
        query(e, t, n) {
          return lf(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        buildKeyframeElement(e, t, n) {
          n = n.map(e => cf(e));
          let r = `@keyframes ${t} {\n`,
            s = "";
          n.forEach(e => {
            s = mg;
            const t = parseFloat(e.offset);
            (r += `${s}${100 * t}% {\n`),
              (s += mg),
              Object.keys(e).forEach(t => {
                const n = e[t];
                switch (t) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      n && (r += `${s}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${s}${t}: ${n};\n`);
                }
              }),
              (r += `${s}}\n`);
          }),
            (r += "}\n");
          const i = document.createElement("style");
          return (i.innerHTML = r), i;
        }
        animate(e, t, n, r, s, i = [], o) {
          o && this._notifyFaultyScrubber();
          const a = i.filter(e => e instanceof dg),
            l = {};
          Ff(n, r) &&
            a.forEach(e => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach(e => (l[e] = t[e]));
            });
          const c = (function(e) {
            let t = {};
            return (
              e &&
                (Array.isArray(e) ? e : [e]).forEach(e => {
                  Object.keys(e).forEach(n => {
                    "offset" != n && "easing" != n && (t[n] = e[n]);
                  });
                }),
              t
            );
          })((t = Lf(e, t, l)));
          if (0 == n) return new pg(e, c);
          const u = `${fg}${this._count++}`,
            h = this.buildKeyframeElement(e, u, t);
          document.querySelector("head").appendChild(h);
          const d = Zm(e, t),
            p = new dg(e, t, u, n, r, s, c, d);
          return (
            p.onDestroy(() =>
              (function(e) {
                h.parentNode.removeChild(h);
              })()
            ),
            p
          );
        }
        _notifyFaultyScrubber() {
          this._warningIssued ||
            (console.warn(
              "@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n",
              "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."
            ),
            (this._warningIssued = !0));
        }
      }
      class yg {
        constructor(e, t, n, r) {
          (this.element = e),
            (this.keyframes = t),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(e => e()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const e = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            e,
            this.options
          )),
            (this._finalKeyframe = e.length ? e[e.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(e, t, n) {
          return e.animate(t, n);
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach(e => e()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach(e => e()),
            (this._onDestroyFns = []));
        }
        setPosition(e) {
          this.domPlayer.currentTime = e * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const e = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach(t => {
              "offset" != t &&
                (e[t] = this._finished
                  ? this._finalKeyframe[t]
                  : Uf(this.element, t));
            }),
            (this.currentSnapshot = e);
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach(e => e()), (t.length = 0);
        }
      }
      class _g {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            vg().toString()
          )),
            (this._cssKeyframesDriver = new gg());
        }
        validateStyleProperty(e) {
          return sf(e);
        }
        matchesElement(e, t) {
          return of(e, t);
        }
        containsElement(e, t) {
          return af(e, t);
        }
        query(e, t, n) {
          return lf(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        overrideWebAnimationsSupport(e) {
          this._isNativeImpl = e;
        }
        animate(e, t, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(e, t, n, r, s, i);
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? "both" : "forwards"
          };
          s && (a.easing = s);
          const l = {},
            c = i.filter(e => e instanceof yg);
          Ff(n, r) &&
            c.forEach(e => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach(e => (l[e] = t[e]));
            });
          const u = Zm(e, (t = Lf(e, (t = t.map(e => Cf(e, !1))), l)));
          return new yg(e, t, a, u);
        }
      }
      function vg() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      const wg = (() =>
        class extends Mp {
          constructor(e, t) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = e.createRenderer(t.body, {
                id: "0",
                encapsulation: st.None,
                styles: [],
                data: { animation: [] }
              }));
          }
          build(e) {
            const t = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(e) ? jp(e) : e;
            return (
              Eg(this._renderer, null, t, "register", [n]),
              new bg(t, this._renderer)
            );
          }
        })();
      class bg extends Fp {
        constructor(e, t) {
          super(), (this._id = e), (this._renderer = t);
        }
        create(e, t) {
          return new Sg(this._id, e, t || {}, this._renderer);
        }
      }
      class Sg {
        constructor(e, t, n, r) {
          (this.id = e),
            (this.element = t),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", n);
        }
        _listen(e, t) {
          return this._renderer.listen(this.element, `@@${this.id}:${e}`, t);
        }
        _command(e, ...t) {
          return Eg(this._renderer, this.element, this.id, e, t);
        }
        onDone(e) {
          this._listen("done", e);
        }
        onStart(e) {
          this._listen("start", e);
        }
        onDestroy(e) {
          this._listen("destroy", e);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset");
        }
        setPosition(e) {
          this._command("setPosition", e);
        }
        getPosition() {
          return 0;
        }
      }
      function Eg(e, t, n, r, s) {
        return e.setProperty(t, `@@${n}:${r}`, s);
      }
      const Cg = "@",
        xg = "@.disabled",
        Tg = (() =>
          class {
            constructor(e, t, n) {
              (this.delegate = e),
                (this.engine = t),
                (this._zone = n),
                (this._currentId = 0),
                (this._microtaskId = 1),
                (this._animationCallbacksBuffer = []),
                (this._rendererCache = new Map()),
                (this._cdRecurDepth = 0),
                (this.promise = Promise.resolve(0)),
                (t.onRemovalComplete = (e, t) => {
                  t && t.parentNode(e) && t.removeChild(e.parentNode, e);
                });
            }
            createRenderer(e, t) {
              const n = this.delegate.createRenderer(e, t);
              if (!(e && t && t.data && t.data.animation)) {
                let e = this._rendererCache.get(n);
                return (
                  e ||
                    ((e = new kg("", n, this.engine)),
                    this._rendererCache.set(n, e)),
                  e
                );
              }
              const r = t.id,
                s = t.id + "-" + this._currentId;
              return (
                this._currentId++,
                this.engine.register(s, e),
                t.data.animation.forEach(t =>
                  this.engine.registerTrigger(r, s, e, t.name, t)
                ),
                new Ig(this, s, n, this.engine)
              );
            }
            begin() {
              this._cdRecurDepth++,
                this.delegate.begin && this.delegate.begin();
            }
            _scheduleCountTask() {
              this.promise.then(() => {
                this._microtaskId++;
              });
            }
            scheduleListenerCallback(e, t, n) {
              e >= 0 && e < this._microtaskId
                ? this._zone.run(() => t(n))
                : (0 == this._animationCallbacksBuffer.length &&
                    Promise.resolve(null).then(() => {
                      this._zone.run(() => {
                        this._animationCallbacksBuffer.forEach(e => {
                          const [t, n] = e;
                          t(n);
                        }),
                          (this._animationCallbacksBuffer = []);
                      });
                    }),
                  this._animationCallbacksBuffer.push([t, n]));
            }
            end() {
              this._cdRecurDepth--,
                0 == this._cdRecurDepth &&
                  this._zone.runOutsideAngular(() => {
                    this._scheduleCountTask(),
                      this.engine.flush(this._microtaskId);
                  }),
                this.delegate.end && this.delegate.end();
            }
            whenRenderingDone() {
              return this.engine.whenRenderingDone();
            }
          })();
      class kg {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.delegate = t),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? e => t.destroyNode(e)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(e, t) {
          return this.delegate.createElement(e, t);
        }
        createComment(e) {
          return this.delegate.createComment(e);
        }
        createText(e) {
          return this.delegate.createText(e);
        }
        appendChild(e, t) {
          this.delegate.appendChild(e, t),
            this.engine.onInsert(this.namespaceId, t, e, !1);
        }
        insertBefore(e, t, n) {
          this.delegate.insertBefore(e, t, n),
            this.engine.onInsert(this.namespaceId, t, e, !0);
        }
        removeChild(e, t, n) {
          this.engine.onRemove(this.namespaceId, t, this.delegate, n);
        }
        selectRootElement(e, t) {
          return this.delegate.selectRootElement(e, t);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setAttribute(e, t, n, r) {
          this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          t.charAt(0) == Cg && t == xg
            ? this.disableAnimations(e, !!n)
            : this.delegate.setProperty(e, t, n);
        }
        setValue(e, t) {
          this.delegate.setValue(e, t);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        disableAnimations(e, t) {
          this.engine.disableAnimations(e, t);
        }
      }
      class Ig extends kg {
        constructor(e, t, n, r) {
          super(t, n, r), (this.factory = e), (this.namespaceId = t);
        }
        setProperty(e, t, n) {
          t.charAt(0) == Cg
            ? "." == t.charAt(1) && t == xg
              ? this.disableAnimations(e, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, e, t.substr(1), n)
            : this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if (t.charAt(0) == Cg) {
            const r = (function(e) {
              switch (e) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return e;
              }
            })(e);
            let s = t.substr(1),
              i = "";
            return (
              s.charAt(0) != Cg &&
                ([s, i] = (function(e) {
                  const t = e.indexOf(".");
                  return [e.substring(0, t), e.substr(t + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, e => {
                this.factory.scheduleListenerCallback(e._data || -1, n, e);
              })
            );
          }
          return this.delegate.listen(e, t, n);
        }
      }
      const Ag = (() =>
        class extends Km {
          constructor(e, t, n) {
            super(e.body, t, n);
          }
        })();
      function Ng() {
        return "function" == typeof vg() ? new _g() : new gg();
      }
      function Rg() {
        return new pm();
      }
      function Pg(e, t, n) {
        return new Tg(e, t, n);
      }
      const Dg = new Ie("AnimationModuleType"),
        Og = (() => class {})();
      function Mg(e, t) {
        return new b(
          t
            ? n => t.schedule(Fg, 0, { error: e, subscriber: n })
            : t => t.error(e)
        );
      }
      function Fg({ error: e, subscriber: t }) {
        t.error(e);
      }
      function Lg(e, t, n, s) {
        return (
          r(n) && ((s = n), (n = void 0)),
          s
            ? Lg(e, t, n).pipe(H(e => (l(e) ? s(...e) : s(e))))
            : new b(r => {
                !(function e(t, n, r, s, i) {
                  let o;
                  if (
                    (function(e) {
                      return (
                        e &&
                        "function" == typeof e.addEventListener &&
                        "function" == typeof e.removeEventListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addEventListener(n, r, i),
                      (o = () => e.removeEventListener(n, r, i));
                  } else if (
                    (function(e) {
                      return (
                        e &&
                        "function" == typeof e.on &&
                        "function" == typeof e.off
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.on(n, r), (o = () => e.off(n, r));
                  } else if (
                    (function(e) {
                      return (
                        e &&
                        "function" == typeof e.addListener &&
                        "function" == typeof e.removeListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addListener(n, r), (o = () => e.removeListener(n, r));
                  } else {
                    if (!t || !t.length)
                      throw new TypeError("Invalid event target");
                    for (let o = 0, a = t.length; o < a; o++)
                      e(t[o], n, r, s, i);
                  }
                  s.add(o);
                })(
                  e,
                  t,
                  function(e) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : e
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      const jg = new b(_),
        Ug = (() => {
          class e {
            constructor(e, t, n) {
              (this.kind = e),
                (this.value = t),
                (this.error = n),
                (this.hasValue = "N" === e);
            }
            observe(e) {
              switch (this.kind) {
                case "N":
                  return e.next && e.next(this.value);
                case "E":
                  return e.error && e.error(this.error);
                case "C":
                  return e.complete && e.complete();
              }
            }
            do(e, t, n) {
              switch (this.kind) {
                case "N":
                  return e && e(this.value);
                case "E":
                  return t && t(this.error);
                case "C":
                  return n && n();
              }
            }
            accept(e, t, n) {
              return e && "function" == typeof e.next
                ? this.observe(e)
                : this.do(e, t, n);
            }
            toObservable() {
              switch (this.kind) {
                case "N":
                  return Xa(this.value);
                case "E":
                  return Mg(this.error);
                case "C":
                  return Ga();
              }
              throw new Error("unexpected notification kind value");
            }
            static createNext(t) {
              return void 0 !== t
                ? new e("N", t)
                : e.undefinedValueNotification;
            }
            static createError(t) {
              return new e("E", void 0, t);
            }
            static createComplete() {
              return e.completeNotification;
            }
          }
          return (
            (e.completeNotification = new e("C")),
            (e.undefinedValueNotification = new e("N", void 0)),
            e
          );
        })();
      class Vg {
        constructor(e, t) {
          (this.delay = e), (this.scheduler = t);
        }
        call(e, t) {
          return t.subscribe(new $g(e, this.delay, this.scheduler));
        }
      }
      class $g extends m {
        constructor(e, t, n) {
          super(e),
            (this.delay = t),
            (this.scheduler = n),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(e) {
          const t = e.source,
            n = t.queue,
            r = e.scheduler,
            s = e.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; )
            n.shift().notification.observe(s);
          if (n.length > 0) {
            const t = Math.max(0, n[0].time - r.now());
            this.schedule(e, t);
          } else this.unsubscribe(), (t.active = !1);
        }
        _schedule(e) {
          (this.active = !0),
            this.destination.add(
              e.schedule($g.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: e
              })
            );
        }
        scheduleNotification(e) {
          if (!0 === this.errored) return;
          const t = this.scheduler,
            n = new Hg(t.now() + this.delay, e);
          this.queue.push(n), !1 === this.active && this._schedule(t);
        }
        _next(e) {
          this.scheduleNotification(Ug.createNext(e));
        }
        _error(e) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(e),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(Ug.createComplete()), this.unsubscribe();
        }
      }
      class Hg {
        constructor(e, t) {
          (this.time = e), (this.notification = t);
        }
      }
      const zg =
        "Service workers are disabled or not supported by this browser";
      class Bg {
        constructor(e) {
          if (((this.serviceWorker = e), e)) {
            const t = Lg(e, "controllerchange").pipe(H(() => e.controller)),
              n = Ml(il(() => Xa(e.controller)), t);
            (this.worker = n.pipe(al(e => !!e))),
              (this.registration = this.worker.pipe(
                Pl(() => e.getRegistration())
              ));
            const r = Lg(e, "message")
              .pipe(H(e => e.data))
              .pipe(al(e => e && e.type))
              .pipe(ie(new k()));
            r.connect(), (this.events = r);
          } else
            this.worker = this.events = this.registration =
              ((t = zg), il(() => Mg(new Error(t))));
          var t;
        }
        postMessage(e, t) {
          return this.worker
            .pipe(
              Tl(1),
              ml(n => {
                n.postMessage(Object.assign({ action: e }, t));
              })
            )
            .toPromise()
            .then(() => void 0);
        }
        postMessageWithStatus(e, t, n) {
          const r = this.waitForStatus(n),
            s = this.postMessage(e, t);
          return Promise.all([r, s]).then(() => void 0);
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(e) {
          return this.events.pipe(al(t => t.type === e));
        }
        nextEventOfType(e) {
          return this.eventsOfType(e).pipe(Tl(1));
        }
        waitForStatus(e) {
          return this.eventsOfType("STATUS")
            .pipe(
              al(t => t.nonce === e),
              Tl(1),
              H(e => {
                if (!e.status) throw new Error(e.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      const qg = (() =>
          class {
            constructor(e) {
              if (
                ((this.sw = e),
                (this.subscriptionChanges = new k()),
                !e.isEnabled)
              )
                return (
                  (this.messages = jg),
                  (this.notificationClicks = jg),
                  void (this.subscription = jg)
                );
              (this.messages = this.sw
                .eventsOfType("PUSH")
                .pipe(H(e => e.data))),
                (this.notificationClicks = this.sw
                  .eventsOfType("NOTIFICATION_CLICK")
                  .pipe(H(e => e.data))),
                (this.pushManager = this.sw.registration.pipe(
                  H(e => e.pushManager)
                ));
              const t = this.pushManager.pipe(Pl(e => e.getSubscription()));
              this.subscription = X(t, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(e) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(zg));
              const t = { userVisibleOnly: !0 };
              let n = this.decodeBase64(
                  e.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")
                ),
                r = new Uint8Array(new ArrayBuffer(n.length));
              for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
              return (
                (t.applicationServerKey = r),
                this.pushManager
                  .pipe(
                    Pl(e => e.subscribe(t)),
                    Tl(1)
                  )
                  .toPromise()
                  .then(e => (this.subscriptionChanges.next(e), e))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      Tl(1),
                      Pl(e => {
                        if (null === e)
                          throw new Error(
                            "Not subscribed to push notifications."
                          );
                        return e.unsubscribe().then(e => {
                          if (!e) throw new Error("Unsubscribe failed!");
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(zg));
            }
            decodeBase64(e) {
              return atob(e);
            }
          })(),
        Qg = (() =>
          class {
            constructor(e) {
              if (((this.sw = e), !e.isEnabled))
                return (this.available = jg), void (this.activated = jg);
              (this.available = this.sw.eventsOfType("UPDATE_AVAILABLE")),
                (this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED"));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(zg));
              const e = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                "CHECK_FOR_UPDATES",
                { statusNonce: e },
                e
              );
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(zg));
              const e = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                "ACTIVATE_UPDATE",
                { statusNonce: e },
                e
              );
            }
          })();
      class Wg {}
      const Kg = new Ie("NGSW_REGISTER_SCRIPT");
      function Zg(e, t, n, r) {
        return () => {
          if (!(Qa(r) && "serviceWorker" in navigator && !1 !== n.enabled))
            return;
          let s;
          if (
            (navigator.serviceWorker.addEventListener(
              "controllerchange",
              () => {
                null !== navigator.serviceWorker.controller &&
                  navigator.serviceWorker.controller.postMessage({
                    action: "INITIALIZE"
                  });
              }
            ),
            "function" == typeof n.registrationStrategy)
          )
            s = n.registrationStrategy();
          else {
            const [t, ...r] = (
              n.registrationStrategy || "registerWhenStable"
            ).split(":");
            switch (t) {
              case "registerImmediately":
                s = Xa(null);
                break;
              case "registerWithDelay":
                s = Xa(null).pipe(
                  (function(e, t = ip) {
                    var n;
                    const r =
                      (n = e) instanceof Date && !isNaN(+n)
                        ? +e - t.now()
                        : Math.abs(e);
                    return e => e.lift(new Vg(r, t));
                  })(+r[0] || 0)
                );
                break;
              case "registerWhenStable":
                s = e.get(xi).isStable.pipe(al(e => e));
                break;
              default:
                throw new Error(
                  `Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`
                );
            }
          }
          s.pipe(Tl(1)).subscribe(() =>
            navigator.serviceWorker
              .register(t, { scope: n.scope })
              .catch(e =>
                console.error("Service worker registration failed with:", e)
              )
          );
        };
      }
      function Gg(e, t) {
        return new Bg(
          Qa(t) && !1 !== e.enabled ? navigator.serviceWorker : void 0
        );
      }
      const Yg = (() => {
        class e {
          static register(t, n = {}) {
            return {
              ngModule: e,
              providers: [
                { provide: Kg, useValue: t },
                { provide: Wg, useValue: n },
                { provide: Bg, useFactory: Gg, deps: [Wg, $s] },
                {
                  provide: Ms,
                  useFactory: Zg,
                  deps: [qe, Kg, Wg, $s],
                  multi: !0
                }
              ]
            };
          }
        }
        return e;
      })();
      class Xg {}
      class Jg {}
      class ey {}
      var ty = pa(ma, [ga], function(e) {
        return (function(e) {
          const t = {},
            n = [];
          let r = !1;
          for (let s = 0; s < e.length; s++) {
            const i = e[s];
            i.token === ze && !0 === i.value && (r = !0),
              1073741824 & i.flags && n.push(i.token),
              (i.index = s),
              (t[Yn(i.token)] = i);
          }
          return {
            factory: null,
            providersByKey: t,
            providers: e,
            modules: n,
            isRoot: r
          };
        })([
          Rr(512, tn, nn, [[8, [Qd, xp, Np, Op]], [3, tn], sn]),
          Rr(5120, Bs, $i, [[3, Bs]]),
          Rr(4608, ka, Ia, [Bs, [2, Ta]]),
          Rr(5120, Ts, Hi, [oi]),
          Rr(5120, Ls, js, []),
          Rr(5120, kn, Ui, []),
          Rr(5120, In, Vi, []),
          Rr(4608, Hc, zc, [Ba]),
          Rr(6144, Rt, null, [Hc]),
          Rr(4608, Mc, Lc, []),
          Rr(
            5120,
            lc,
            function(e, t, n, r, s, i, o, a) {
              return [new Dc(e, t, n), new $c(r), new jc(s, i, o, a)];
            },
            [Ba, oi, $s, Ba, Ba, Mc, zs, [2, Fc]]
          ),
          Rr(4608, cc, cc, [lc, oi]),
          Rr(135680, dc, dc, [Ba]),
          Rr(4608, vc, vc, [cc, dc, Ls]),
          Rr(5120, hf, Ng, []),
          Rr(5120, dm, Rg, []),
          Rr(4608, Km, Ag, [Ba, hf, dm]),
          Rr(5120, hn, Pg, [vc, Km, oi]),
          Rr(6144, hc, null, [dc]),
          Rr(4608, pi, pi, [oi]),
          Rr(5120, ah, jd, [_d]),
          Rr(4608, xd, xd, []),
          Rr(6144, Ed, null, [xd]),
          Rr(135680, Td, Td, [_d, ki, Gs, qe, Ed]),
          Rr(4608, Cd, Cd, []),
          Rr(5120, kd, Dd, [_d, Wa, Id]),
          Rr(5120, Hd, $d, [Ud]),
          Rr(
            5120,
            Hs,
            function(e) {
              return [e];
            },
            [Hd]
          ),
          Rr(5120, Bg, Gg, [Wg, $s]),
          Rr(4608, qg, qg, [Bg]),
          Rr(4608, Qg, Qg, [Bg]),
          Rr(4608, Mp, wg, [hn, Ba]),
          Rr(1073742336, za, za, []),
          Rr(1024, Lt, Yc, []),
          Rr(
            1024,
            wi,
            function() {
              return [Rd()];
            },
            []
          ),
          Rr(512, Ud, Ud, [qe]),
          Rr(256, Kg, "ngsw-worker.js", []),
          Rr(256, Wg, { enabled: !0 }, []),
          Rr(
            1024,
            Ms,
            function(e, t, n, r, s, i) {
              return [
                ((o = e),
                ic("probe", ac),
                ic(
                  "coreTokens",
                  Object.assign(
                    {},
                    oc,
                    (o || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
                  )
                ),
                () => ac),
                Vd(t),
                Zg(n, r, s, i)
              ];
              var o;
            },
            [[2, wi], Ud, qe, Kg, Wg, $s]
          ),
          Rr(512, Fs, Fs, [[2, Ms]]),
          Rr(131584, xi, xi, [oi, zs, qe, Lt, tn, Fs]),
          Rr(1073742336, zi, zi, [xi]),
          Rr(1073742336, Xc, Xc, [[3, Xc]]),
          Rr(1024, Ad, Md, [[3, _d]]),
          Rr(512, Uu, Vu, []),
          Rr(512, wd, wd, []),
          Rr(256, Id, {}, []),
          Rr(1024, va, Od, [ya, [2, wa], Id]),
          Rr(512, ba, ba, [va, ya]),
          Rr(512, Gs, Gs, []),
          Rr(512, ki, Ni, [Gs, [2, Ii]]),
          Rr(
            1024,
            hd,
            function() {
              return [
                [
                  { path: "", component: wp },
                  { path: "detail", component: Tp },
                  { path: "**", component: wp }
                ]
              ];
            },
            []
          ),
          Rr(1024, _d, Ld, [
            xi,
            Uu,
            wd,
            ba,
            qe,
            ki,
            Gs,
            hd,
            Id,
            [2, pd],
            [2, cd]
          ]),
          Rr(1073742336, Pd, Pd, [[2, Ad], [2, _d]]),
          Rr(1073742336, Xg, Xg, []),
          Rr(1073742336, Yg, Yg, []),
          Rr(1073742336, Og, Og, []),
          Rr(1073742336, fp, fp, []),
          Rr(1073742336, ap, ap, [[2, op], [2, Fc]]),
          Rr(1073742336, pp, pp, []),
          Rr(1073742336, Jg, Jg, []),
          Rr(1073742336, ey, ey, []),
          Rr(1073742336, ma, ma, []),
          Rr(256, ze, !0, []),
          Rr(256, Dg, "BrowserAnimations", [])
        ]);
      });
      (function() {
        if (at)
          throw new Error("Cannot enable prod mode after platform setup.");
        ot = !1;
      })(),
        Gc()
          .bootstrapModuleFactory(ty)
          .catch(e => console.error(e));
    },
    zn8P: function(e, t) {
      function n(e) {
        return Promise.resolve().then(function() {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = "zn8P");
    }
  },
  [[0, 0]]
]);
