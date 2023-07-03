import { defineComponent as ee, ref as j, onMounted as be, openBlock as St, createElementBlock as Nt, normalizeStyle as qt, createElementVNode as ot, createBlock as Xn, renderSlot as Ci, reactive as Gn, toRefs as Wn, watch as jn, nextTick as Hn, normalizeClass as Qn, unref as Kn, pushScopeId as Zn, popScopeId as Jn } from "vue";
function wt(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Ai(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t;
}
/*!
 * GSAP 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Z = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, de = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Lr, bt = 1e8, z = 1 / bt, wr = Math.PI * 2, ts = wr / 4, es = 0, Di = Math.sqrt, rs = Math.cos, is = Math.sin, H = function(t) {
  return typeof t == "string";
}, U = function(t) {
  return typeof t == "function";
}, pt = function(t) {
  return typeof t == "number";
}, Br = function(t) {
  return typeof t > "u";
}, Ot = function(t) {
  return typeof t == "object";
}, J = function(t) {
  return t !== !1;
}, zi = function() {
  return typeof window < "u";
}, Kr = function(t) {
  return U(t) || H(t);
}, Fi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, _t = Array.isArray, kr = /(?:-?\.?\d|\.)+/gi, Ri = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ae = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, hr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ei = /[+-]=-?[.\d]+/, Ni = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ns = /[\d.+\-=]+(?:e[-+]\d*)*/i, $, yt, Tr, Li, lt = {}, Qe = {}, Bi, Ii = function(t) {
  return (Qe = pe(t, lt)) && xt;
}, Ir = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, $i = function(t, e) {
  return !e && console.warn(t);
}, qi = function(t, e) {
  return t && (lt[t] = e) && Qe && (Qe[t] = e) || lt;
}, $e = function() {
  return 0;
}, $r = {}, Lt = [], Sr = {}, Vi, rt = {}, fr = {}, Zr = 30, je = [], qr = "", Vr = function(t) {
  var e = t[0], r, i;
  if (Ot(e) || U(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = je.length; i-- && !je[i].targetTest(e); )
      ;
    r = je[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new hn(t[i], r))) || t.splice(i, 1);
  return t;
}, Jt = function(t) {
  return t._gsap || Vr(vt(t))[0]._gsap;
}, Yi = function(t, e, r) {
  return (r = t[e]) && U(r) ? t[e]() : Br(r) && t.getAttribute && t.getAttribute(e) || r;
}, at = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, C = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ss = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Ce = function(t, e, r) {
  var i = pt(t[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a;
  if (i && (o.duration = t[1]), o.parent = r, e) {
    for (a = o; r && !("immediateRender" in a); )
      a = r.vars.defaults || {}, r = J(r.vars.inherit) && r.parent;
    o.immediateRender = J(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return o;
}, Ke = function() {
  var t = Lt.length, e = Lt.slice(0), r, i;
  for (Sr = {}, Lt.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Ui = function(t, e, r, i) {
  Lt.length && Ke(), t.render(e, r, i), Lt.length && Ke();
}, Xi = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Ni).length < 2 ? e : H(t) ? t.trim() : t;
}, Gi = function(t) {
  return t;
}, dt = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, os = function(t, e) {
  for (var r in e)
    r in t || r === "duration" || r === "ease" || (t[r] = e[r]);
}, pe = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Jr = function n(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Ot(e[r]) ? n(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Mr = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, He = function(t) {
  var e = t.parent || $, r = t.keyframes ? os : dt;
  if (J(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, as = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, ls = function(t, e, r, i, s) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var o = t[i], a;
  if (s)
    for (a = e[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e;
}, sr = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var s = e._prev, o = e._next;
  s ? s._next = o : t[r] === e && (t[r] = o), o ? o._prev = s : t[i] === e && (t[i] = s), e._next = e._prev = e.parent = null;
}, Vt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, te = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, us = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, hs = function n(t) {
  return !t || t._ts && n(t.parent);
}, ti = function(t) {
  return t._repeat ? ge(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, ge = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, Ze = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Yr = function(t) {
  return t._end = C(t._start + (t._tDur / Math.abs(t._ts || t._rts || z) || 0));
}, Wi = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = C(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Yr(t), r._dirty || te(r, t)), t;
}, or = function(t, e) {
  var r;
  if ((e._time || e._initted && !e._dur) && (r = Ze(t.rawTime(), e), (!e._dur || qe(0, e.totalDuration(), r) - e._tTime > z) && e.render(r, !0)), te(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -z;
  }
}, kt = function(t, e, r, i) {
  return e.parent && Vt(e), e._start = C(r + e._delay), e._end = C(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), ls(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || or(t, e), t;
}, ji = function(t, e) {
  return (lt.ScrollTrigger || Ir("scrollTrigger", e)) && lt.ScrollTrigger.create(e, t);
}, Hi = function(t, e, r, i) {
  if (zs(t, e), !t._initted)
    return 1;
  if (!r && t._pt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Vi !== ft.frame)
    return Lt.push(t), t._lazy = [e, i], 1;
}, fs = function n(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e));
}, cs = function(t, e, r, i) {
  var s = t.ratio, o = e < 0 || !e && (!t._start && fs(t) || (t._ts < 0 || t._dp._ts < 0) && t.data !== "isFromStart" && t.data !== "isStart") ? 0 : 1, a = t._rDelay, l = 0, u, h, _;
  if (a && t._repeat && (l = qe(0, t._tDur, e), h = ge(l, a), _ = ge(t._tTime, a), t._yoyo && h & 1 && (o = 1 - o), h !== _ && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || i || t._zTime === z || !e && t._zTime) {
    if (!t._initted && Hi(t, e, i, r))
      return;
    for (_ = t._zTime, t._zTime = e || (r ? z : 0), r || (r = e && !_), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && ct(t, "onUpdate"), l && t._repeat && !r && t.parent && ct(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Vt(t, 1), r || (ct(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, _s = function(t, e, r) {
  var i;
  if (r > e)
    for (i = t._first; i && i._start <= r; ) {
      if (!i._dur && i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= r; ) {
      if (!i._dur && i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, me = function(t, e, r, i) {
  var s = t._repeat, o = C(e) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : C(o * (s + 1) + t._rDelay * s) : o, a && !i ? Wi(t, t._tTime = t._tDur * a) : t.parent && Yr(t), r || te(t.parent, t), t;
}, ei = function(t) {
  return t instanceof K ? te(t) : me(t, t._dur);
}, ds = {
  _start: 0,
  endTime: $e
}, Q = function n(t, e) {
  var r = t.labels, i = t._recent || ds, s = t.duration() >= bt ? i.endTime(!1) : t._dur, o, a;
  return H(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), o === "<" || o === ">" ? (o === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) : (o = e.indexOf("="), o < 0 ? (e in r || (r[e] = s), r[e]) : (a = +(e.charAt(o - 1) + e.substr(o + 1)), o > 1 ? n(t, e.substr(0, o - 1)) + a : s + a))) : e == null ? s : +e;
}, Gt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, qe = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, nt = function(t) {
  if (typeof t != "string")
    return "";
  var e = ns.exec(t);
  return e ? t.substr(e.index + e[0].length) : "";
}, ps = function(t, e, r) {
  return Gt(r, function(i) {
    return qe(t, e, i);
  });
}, Pr = [].slice, Qi = function(t, e) {
  return t && Ot(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Ot(t[0])) && !t.nodeType && t !== yt;
}, gs = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var s;
    return H(i) && !e || Qi(i, 1) ? (s = r).push.apply(s, vt(i)) : r.push(i);
  }) || r;
}, vt = function(t, e) {
  return H(t) && !e && (Tr || !ye()) ? Pr.call(Li.querySelectorAll(t), 0) : _t(t) ? gs(t, e) : Qi(t) ? Pr.call(t, 0) : t ? [t] : [];
}, Ki = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Zi = function(t) {
  if (U(t))
    return t;
  var e = Ot(t) ? t : {
    each: t
  }, r = ue(e.ease), i = e.from || 0, s = parseFloat(e.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, u = e.axis, h = i, _ = i;
  return H(i) ? h = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (h = i[0], _ = i[1]), function(f, d, m) {
    var c = (m || e).length, g = o[c], p, x, y, v, b, w, T, S, k;
    if (!g) {
      if (k = e.grid === "auto" ? 0 : (e.grid || [1, bt])[1], !k) {
        for (T = -bt; T < (T = m[k++].getBoundingClientRect().left) && k < c; )
          ;
        k--;
      }
      for (g = o[c] = [], p = l ? Math.min(k, c) * h - 0.5 : i % k, x = l ? c * _ / k - 0.5 : i / k | 0, T = 0, S = bt, w = 0; w < c; w++)
        y = w % k - p, v = x - (w / k | 0), g[w] = b = u ? Math.abs(u === "y" ? v : y) : Di(y * y + v * v), b > T && (T = b), b < S && (S = b);
      i === "random" && Ki(g), g.max = T - S, g.min = S, g.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (k > c ? c - 1 : u ? u === "y" ? c / k : k : Math.max(k, c / k)) || 0) * (i === "edges" ? -1 : 1), g.b = c < 0 ? s - c : s, g.u = nt(e.amount || e.each) || 0, r = r && c < 0 ? an(r) : r;
    }
    return c = (g[f] - g.min) / g.max || 0, C(g.b + (r ? r(c) : c) * g.v) + g.u;
  };
}, Or = function(t) {
  var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
  return function(r) {
    var i = Math.round(parseFloat(r) / t) * t * e;
    return (i - i % 1) / e + (pt(r) ? 0 : nt(r));
  };
}, Ji = function(t, e) {
  var r = _t(t), i, s;
  return !r && Ot(t) && (i = r = t.radius || bt, t.values ? (t = vt(t.values), (s = !pt(t[0])) && (i *= i)) : t = Or(t.increment)), Gt(e, r ? U(t) ? function(o) {
    return s = t(o), Math.abs(s - o) <= i ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = bt, h = 0, _ = t.length, f, d; _--; )
      s ? (f = t[_].x - a, d = t[_].y - l, f = f * f + d * d) : f = Math.abs(t[_] - a), f < u && (u = f, h = _);
    return h = !i || u <= i ? t[h] : o, s || h === o || pt(o) ? h : h + nt(o);
  } : Or(t));
}, tn = function(t, e, r, i) {
  return Gt(_t(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return _t(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, ms = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(s, o) {
      return o(s);
    }, i);
  };
}, ys = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || nt(r));
  };
}, vs = function(t, e, r) {
  return rn(t, e, 0, 1, r);
}, en = function(t, e, r) {
  return Gt(r, function(i) {
    return t[~~e(i)];
  });
}, bs = function n(t, e, r) {
  var i = e - t;
  return _t(t) ? en(t, n(0, t.length), e) : Gt(r, function(s) {
    return (i + (s - t) % i) % i + t;
  });
}, xs = function n(t, e, r) {
  var i = e - t, s = i * 2;
  return _t(t) ? en(t, n(0, t.length - 1), e) : Gt(r, function(o) {
    return o = (s + (o - t) % s) % s || 0, t + (o > i ? s - o : o);
  });
}, ar = function(t) {
  for (var e = 0, r = "", i, s, o, a; ~(i = t.indexOf("random(", e)); )
    o = t.indexOf(")", i), a = t.charAt(i + 7) === "[", s = t.substr(i + 7, o - i - 7).match(a ? Ni : kr), r += t.substr(e, i - e) + tn(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), e = o + 1;
  return r + t.substr(e, t.length - e);
}, rn = function(t, e, r, i, s) {
  var o = e - t, a = i - r;
  return Gt(s, function(l) {
    return r + ((l - t) / o * a || 0);
  });
}, ws = function n(t, e, r, i) {
  var s = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!s) {
    var o = H(t), a = {}, l, u, h, _, f;
    if (r === !0 && (i = 1) && (r = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (_t(t) && !_t(e)) {
      for (h = [], _ = t.length, f = _ - 2, u = 1; u < _; u++)
        h.push(n(t[u - 1], t[u]));
      _--, s = function(m) {
        m *= _;
        var c = Math.min(f, ~~m);
        return h[c](m - c);
      }, r = e;
    } else
      i || (t = pe(_t(t) ? [] : {}, t));
    if (!h) {
      for (l in e)
        Ur.call(a, t, l, "get", e[l]);
      s = function(m) {
        return Wr(m, a) || (o ? t.p : t);
      };
    }
  }
  return Gt(r, s);
}, ri = function(t, e, r) {
  var i = t.labels, s = bt, o, a, l;
  for (o in i)
    a = i[o] - e, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, ct = function(t, e, r) {
  var i = t.vars, s = i[e], o, a;
  if (s)
    return o = i[e + "Params"], a = i.callbackScope || t, r && Lt.length && Ke(), o ? s.apply(a, o) : s.call(a);
}, Te = function(t) {
  return Vt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ct(t, "onInterrupt"), t;
}, le, ks = function(t) {
  t = !t.name && t.default || t;
  var e = t.name, r = U(t), i = e && !r && t.init ? function() {
    this._props = [];
  } : t, s = {
    init: $e,
    render: Wr,
    add: Ur,
    kill: Is,
    modifier: Bs,
    rawVars: 0
  }, o = {
    targetTest: 0,
    get: 0,
    getSetter: Gr,
    aliases: {},
    register: 0
  };
  if (ye(), t !== i) {
    if (rt[e])
      return;
    dt(i, dt(Mr(t, s), o)), pe(i.prototype, pe(s, Mr(t, o))), rt[i.prop = e] = i, t.targetTest && (je.push(i), $r[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  qi(e, i), t.register && t.register(xt, i, tt);
}, R = 255, Se = {
  aqua: [0, R, R],
  lime: [0, R, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, R],
  navy: [0, 0, 128],
  white: [R, R, R],
  olive: [128, 128, 0],
  yellow: [R, R, 0],
  orange: [R, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [R, 0, 0],
  pink: [R, 192, 203],
  cyan: [0, R, R],
  transparent: [R, R, R, 0]
}, cr = function(t, e, r) {
  return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * R + 0.5 | 0;
}, nn = function(t, e, r) {
  var i = t ? pt(t) ? [t >> 16, t >> 8 & R, t & R] : 0 : Se.black, s, o, a, l, u, h, _, f, d, m;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Se[t])
      i = Se[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & R, i & R, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & R, t & R];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = m = t.match(kr), !e)
        l = +i[0] % 360 / 360, u = +i[1] / 100, h = +i[2] / 100, o = h <= 0.5 ? h * (u + 1) : h + u - h * u, s = h * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = cr(l + 1 / 3, s, o), i[1] = cr(l, s, o), i[2] = cr(l - 1 / 3, s, o);
      else if (~t.indexOf("="))
        return i = t.match(Ri), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(kr) || Se.transparent;
    i = i.map(Number);
  }
  return e && !m && (s = i[0] / R, o = i[1] / R, a = i[2] / R, _ = Math.max(s, o, a), f = Math.min(s, o, a), h = (_ + f) / 2, _ === f ? l = u = 0 : (d = _ - f, u = h > 0.5 ? d / (2 - _ - f) : d / (_ + f), l = _ === s ? (o - a) / d + (o < a ? 6 : 0) : _ === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(h * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, sn = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Bt).forEach(function(s) {
    var o = s.match(ae) || [];
    e.push.apply(e, o), r.push(i += o.length + 1);
  }), e.c = r, e;
}, ii = function(t, e, r) {
  var i = "", s = (t + i).match(Bt), o = e ? "hsla(" : "rgba(", a = 0, l, u, h, _;
  if (!s)
    return t;
  if (s = s.map(function(f) {
    return (f = nn(f, e, 1)) && o + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), r && (h = sn(t), l = r.c, l.join(i) !== h.c.join(i)))
    for (u = t.replace(Bt, "1").split(ae), _ = u.length - 1; a < _; a++)
      i += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (h.length ? h : s.length ? s : r).shift());
  if (!u)
    for (u = t.split(Bt), _ = u.length - 1; a < _; a++)
      i += u[a] + s[a];
  return i + u[_];
}, Bt = function() {
  var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Se)
    n += "|" + t + "\\b";
  return new RegExp(n + ")", "gi");
}(), Ts = /hsl[a]?\(/, on = function(t) {
  var e = t.join(" "), r;
  if (Bt.lastIndex = 0, Bt.test(e))
    return r = Ts.test(e), t[1] = ii(t[1], r), t[0] = ii(t[0], r, sn(t[1])), !0;
}, Je, ft = function() {
  var n = Date.now, t = 500, e = 33, r = n(), i = r, s = 1e3 / 240, o = s, a = [], l, u, h, _, f, d, m = function c(g) {
    var p = n() - i, x = g === !0, y, v, b, w;
    if (p > t && (r += p - e), i += p, b = i - r, y = b - o, (y > 0 || x) && (w = ++_.frame, f = b - _.time * 1e3, _.time = b = b / 1e3, o += y + (y >= s ? 4 : s - y), v = 1), x || (l = u(c)), v)
      for (d = 0; d < a.length; d++)
        a[d](b, f, w, g);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(g) {
      return f / (1e3 / (g || 60));
    },
    wake: function() {
      Bi && (!Tr && zi() && (yt = Tr = window, Li = yt.document || {}, lt.gsap = xt, (yt.gsapVersions || (yt.gsapVersions = [])).push(xt.version), Ii(Qe || yt.GreenSockGlobals || !yt.gsap && yt || {}), h = yt.requestAnimationFrame), l && _.sleep(), u = h || function(g) {
        return setTimeout(g, o - _.time * 1e3 + 1 | 0);
      }, Je = 1, m(2));
    },
    sleep: function() {
      (h ? yt.cancelAnimationFrame : clearTimeout)(l), Je = 0, u = $e;
    },
    lagSmoothing: function(g, p) {
      t = g || 1 / z, e = Math.min(p, t, 0);
    },
    fps: function(g) {
      s = 1e3 / (g || 240), o = _.time * 1e3 + s;
    },
    add: function(g) {
      a.indexOf(g) < 0 && a.push(g), ye();
    },
    remove: function(g) {
      var p;
      ~(p = a.indexOf(g)) && a.splice(p, 1) && d >= p && d--;
    },
    _listeners: a
  }, _;
}(), ye = function() {
  return !Je && ft.wake();
}, A = {}, Ss = /^[\d.\-M][\d.\-,\s]/, Ms = /["']/g, Ps = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
    l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), e[i] = isNaN(u) ? u.replace(Ms, "").trim() : +u, i = l.substr(a + 1).trim();
  return e;
}, Os = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, Cs = function(t) {
  var e = (t + "").split("("), r = A[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Ps(e[1])] : Os(t).split(",").map(Xi)) : A._CE && Ss.test(t) ? A._CE("", t) : r;
}, an = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, ln = function n(t, e) {
  for (var r = t._first, i; r; )
    r instanceof K ? n(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? n(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, ue = function(t, e) {
  return t && (U(t) ? t : A[t] || Cs(t)) || e;
}, re = function(t, e, r, i) {
  r === void 0 && (r = function(l) {
    return 1 - e(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, o;
  return at(t, function(a) {
    A[a] = lt[a] = s, A[o = a.toLowerCase()] = r;
    for (var l in s)
      A[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = A[a + "." + l] = s[l];
  }), s;
}, un = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, _r = function n(t, e, r) {
  var i = e >= 1 ? e : 1, s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = s / wr * (Math.asin(1 / i) || 0), a = function(h) {
    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * is((h - o) * s) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : un(a);
  return s = wr / s, l.config = function(u, h) {
    return n(t, u, h);
  }, l;
}, dr = function n(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(s) {
    return 1 - r(1 - s);
  } : un(r);
  return i.config = function(s) {
    return n(t, s);
  }, i;
};
at("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, t) {
  var e = t < 5 ? t + 1 : t;
  re(n + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
A.Linear.easeNone = A.none = A.Linear.easeIn;
re("Elastic", _r("in"), _r("out"), _r());
(function(n, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, s = function(a) {
    return a < e ? n * a * a : a < r ? n * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? n * (a -= 2.25 / t) * a + 0.9375 : n * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  re("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
re("Expo", function(n) {
  return n ? Math.pow(2, 10 * (n - 1)) : 0;
});
re("Circ", function(n) {
  return -(Di(1 - n * n) - 1);
});
re("Sine", function(n) {
  return n === 1 ? 1 : -rs(n * ts) + 1;
});
re("Back", dr("in"), dr("out"), dr());
A.SteppedEase = A.steps = lt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), s = e ? 1 : 0, o = 1 - z;
    return function(a) {
      return ((i * qe(0, o, a) | 0) + s) * r;
    };
  }
};
de.ease = A["quad.out"];
at("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
  return qr += n + "," + n + "Params,";
});
var hn = function(t, e) {
  this.id = es++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Yi, this.set = e ? e.getSetter : Gr;
}, Re = /* @__PURE__ */ function() {
  function n(e, r) {
    var i = e.parent || $;
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, me(this, +e.duration, 1, 1), this.data = e.data, Je || ft.wake(), i && kt(i, this, r || r === 0 ? r : i._time, 1), e.reversed && this.reverse(), e.paused && this.paused(!0);
  }
  var t = n.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, me(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (ye(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Wi(this, r), !s._dp || s.parent || or(s, this); s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && kt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === z || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Ui(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + ti(this)) % this._dur || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + ti(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(r, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? ge(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -z ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? Ze(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -z ? 0 : this._rts, us(this.totalTime(qe(-this._delay, this._tDur, i), !0));
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ye(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= z) && Math.abs(this._zTime) !== z))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && kt(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (J(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ze(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.globalTime = function(r) {
    for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
      s = i._start + s / (i._ts || 1), i = i._dp;
    return s;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, ei(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    return arguments.length ? (this._rDelay = r, ei(this)) : this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(Q(this, r), J(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, J(i));
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -z : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -z, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - z);
  }, t.eventCallback = function(r, i, s) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[r] = i, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r];
  }, t.then = function(r) {
    var i = this;
    return new Promise(function(s) {
      var o = U(r) ? r : Gi, a = function() {
        var u = i.then;
        i.then = null, U(o) && (o = o(i)) && (o.then || o === i) && (i.then = u), s(o), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, t.kill = function() {
    Te(this);
  }, n;
}();
dt(Re.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -z,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = /* @__PURE__ */ function(n) {
  Ai(t, n);
  function t(r, i) {
    var s;
    return r === void 0 && (r = {}), s = n.call(this, r, i) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = J(r.sortChildren), s.parent && or(s.parent, wt(s)), r.scrollTrigger && ji(wt(s), r.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(i, s, o) {
    return new I(i, Ce(arguments, 0, this), Q(this, pt(s) ? arguments[3] : o)), this;
  }, e.from = function(i, s, o) {
    return new I(i, Ce(arguments, 1, this), Q(this, pt(s) ? arguments[3] : o)), this;
  }, e.fromTo = function(i, s, o, a) {
    return new I(i, Ce(arguments, 2, this), Q(this, pt(s) ? arguments[4] : a)), this;
  }, e.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, He(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new I(i, s, Q(this, o), 1), this;
  }, e.call = function(i, s, o) {
    return kt(this, I.delayedCall(0, i, s), Q(this, o));
  }, e.staggerTo = function(i, s, o, a, l, u, h) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = h, o.parent = this, new I(i, o, Q(this, l)), this;
  }, e.staggerFrom = function(i, s, o, a, l, u, h) {
    return o.runBackwards = 1, He(o).immediateRender = J(o.immediateRender), this.staggerTo(i, s, o, a, l, u, h);
  }, e.staggerFromTo = function(i, s, o, a, l, u, h, _) {
    return a.startAt = o, He(a).immediateRender = J(a.immediateRender), this.staggerTo(i, s, a, l, u, h, _);
  }, e.render = function(i, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, h = this !== $ && i > l - z && i >= 0 ? l : i < z ? 0 : i, _ = this._zTime < 0 != i < 0 && (this._initted || !u), f, d, m, c, g, p, x, y, v, b, w, T;
    if (h !== this._tTime || o || _) {
      if (a !== this._time && u && (h += this._time - a, i += this._time - a), f = h, v = this._start, y = this._ts, p = !y, _ && (u || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (w = this._yoyo, g = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(g * 100 + i, s, o);
        if (f = C(h % g), h === l ? (c = this._repeat, f = u) : (c = ~~(h / g), c && c === h / g && (f = u, c--), f > u && (f = u)), b = ge(this._tTime, g), !a && this._tTime && b !== c && (b = c), w && c & 1 && (f = u - f, T = 1), c !== b && !this._lock) {
          var S = w && b & 1, k = S === (w && c & 1);
          if (c < b && (S = !S), a = S ? 0 : u, this._lock = 1, this.render(a || (T ? 0 : C(c * g)), s, !u)._lock = 0, !s && this.parent && ct(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), a && a !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = S ? u : -1e-4, this.render(a, !0)), this._lock = 0, !this._ts && !p)
            return this;
          ln(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = _s(this, C(a), C(f)), x && (h -= f - (f = x._start))), this._tTime = h, this._time = f, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && f && !s && ct(this, "onStart"), f >= a && i >= 0)
        for (d = this._first; d; ) {
          if (m = d._next, (d._act || f >= d._start) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(i, s, o);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, o), f !== this._time || !this._ts && !p) {
              x = 0, m && (h += this._zTime = -z);
              break;
            }
          }
          d = m;
        }
      else {
        d = this._last;
        for (var P = i < 0 ? i : f; d; ) {
          if (m = d._prev, (d._act || P <= d._end) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(i, s, o);
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, s, o), f !== this._time || !this._ts && !p) {
              x = 0, m && (h += this._zTime = P ? -z : z);
              break;
            }
          }
          d = m;
        }
      }
      if (x && !s && (this.pause(), x.render(f >= a ? 0 : -z)._zTime = f >= a ? 1 : -1, this._ts))
        return this._start = v, Yr(this), this.render(i, s, o);
      this._onUpdate && !s && ct(this, "onUpdate", !0), (h === l && l >= this.totalDuration() || !h && a) && (v === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (h === l && this._ts > 0 || !h && this._ts < 0) && Vt(this, 1), !s && !(i < 0 && !a) && (h || a) && (ct(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, s) {
    var o = this;
    if (pt(s) || (s = Q(this, s)), !(i instanceof Re)) {
      if (_t(i))
        return i.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (H(i))
        return this.addLabel(i, s);
      if (U(i))
        i = I.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? kt(this, i, s) : this;
  }, e.getChildren = function(i, s, o, a) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -bt);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof I ? s && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, e.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === i)
        return s[o];
  }, e.remove = function(i) {
    return H(i) ? this.removeLabel(i) : U(i) ? this.killTweensOf(i) : (sr(this, i), i === this._recent && (this._recent = this._last), te(this));
  }, e.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = C(ft.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), n.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, s) {
    return this.labels[i] = Q(this, s), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, s, o) {
    var a = I.delayedCall(0, s || $e, o);
    return a.data = "isPause", this._hasPause = 1, kt(this, a, Q(this, i));
  }, e.removePause = function(i) {
    var s = this._first;
    for (i = Q(this, i); s; )
      s._start === i && s.data === "isPause" && Vt(s), s = s._next;
  }, e.killTweensOf = function(i, s, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      Dt !== a[l] && a[l].kill(i, s);
    return this;
  }, e.getTweensOf = function(i, s) {
    for (var o = [], a = vt(i), l = this._first, u = pt(s), h; l; )
      l instanceof I ? ss(l._targets, a) && (u ? (!Dt || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (h = l.getTweensOf(a, s)).length && o.push.apply(o, h), l = l._next;
    return o;
  }, e.tweenTo = function(i, s) {
    s = s || {};
    var o = this, a = Q(o, i), l = s, u = l.startAt, h = l.onStart, _ = l.onStartParams, f = l.immediateRender, d = I.to(o, dt({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || z,
      onStart: function() {
        o.pause();
        var c = s.duration || Math.abs((a - o._time) / o.timeScale());
        d._dur !== c && me(d, c, 0, 1).render(d._time, !0, !0), h && h.apply(d, _ || []);
      }
    }, s));
    return f ? d.render(0) : d;
  }, e.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, dt({
      startAt: {
        time: Q(this, i)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), ri(this, Q(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), ri(this, Q(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + z);
  }, e.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (s)
      for (u in l)
        l[u] >= o && (l[u] += i);
    return te(this);
  }, e.invalidate = function() {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(), i = i._next;
    return n.prototype.invalidate.call(this);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), te(this);
  }, e.totalDuration = function(i) {
    var s = 0, o = this, a = o._last, l = bt, u, h, _;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (_ = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), h = a._start, h > l && o._sort && a._ts && !o._lock ? (o._lock = 1, kt(o, a, h - a._delay, 1)._lock = 0) : l = h, h < 0 && a._ts && (s -= h, (!_ && !o._dp || _ && _.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      me(o, o === $ && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if ($._ts && (Ui($, Ze(i, $)), Vi = ft.frame), ft.frame >= Zr) {
      Zr += Z.autoSleep || 120;
      var s = $._first;
      if ((!s || !s._ts) && Z.autoSleep && ft._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || ft.sleep();
      }
    }
  }, t;
}(Re);
dt(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var As = function(t, e, r, i, s, o, a) {
  var l = new tt(this._pt, t, e, 0, 1, pn, null, s), u = 0, h = 0, _, f, d, m, c, g, p, x;
  for (l.b = r, l.e = i, r += "", i += "", (p = ~i.indexOf("random(")) && (i = ar(i)), o && (x = [r, i], o(x, t, e), r = x[0], i = x[1]), f = r.match(hr) || []; _ = hr.exec(i); )
    m = _[0], c = i.substring(u, _.index), d ? d = (d + 1) % 5 : c.substr(-5) === "rgba(" && (d = 1), m !== f[h++] && (g = parseFloat(f[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: c || h === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: m.charAt(1) === "=" ? parseFloat(m.substr(2)) * (m.charAt(0) === "-" ? -1 : 1) : parseFloat(m) - g,
      m: d && d < 4 ? Math.round : 0
    }, u = hr.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (Ei.test(i) || p) && (l.e = 0), this._pt = l, l;
}, Ur = function(t, e, r, i, s, o, a, l, u) {
  U(i) && (i = i(s || 0, t, o));
  var h = t[e], _ = r !== "get" ? r : U(h) ? u ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h, f = U(h) ? u ? Es : _n : Xr, d;
  if (H(i) && (~i.indexOf("random(") && (i = ar(i)), i.charAt(1) === "=" && (i = parseFloat(_) + parseFloat(i.substr(2)) * (i.charAt(0) === "-" ? -1 : 1) + (nt(_) || 0))), _ !== i)
    return isNaN(_ * i) ? (!h && !(e in t) && Ir(e, i), As.call(this, t, e, _, i, f, l || Z.stringFilter, u)) : (d = new tt(this._pt, t, e, +_ || 0, i - (_ || 0), typeof h == "boolean" ? Ls : dn, 0, f), u && (d.fp = u), a && d.modifier(a, this, t), this._pt = d);
}, Ds = function(t, e, r, i, s) {
  if (U(t) && (t = Ae(t, s, e, r, i)), !Ot(t) || t.style && t.nodeType || _t(t) || Fi(t))
    return H(t) ? Ae(t, s, e, r, i) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Ae(t[a], s, e, r, i);
  return o;
}, fn = function(t, e, r, i, s, o) {
  var a, l, u, h;
  if (rt[t] && (a = new rt[t]()).init(s, a.rawVars ? e[t] : Ds(e[t], i, s, o, r), r, i, o) !== !1 && (r._pt = l = new tt(r._pt, s, t, 0, 1, a.render, a, 0, a.priority), r !== le))
    for (u = r._ptLookup[r._targets.indexOf(s)], h = a._props.length; h--; )
      u[a._props[h]] = l;
  return a;
}, Dt, zs = function n(t, e) {
  var r = t.vars, i = r.ease, s = r.startAt, o = r.immediateRender, a = r.lazy, l = r.onUpdate, u = r.onUpdateParams, h = r.callbackScope, _ = r.runBackwards, f = r.yoyoEase, d = r.keyframes, m = r.autoRevert, c = t._dur, g = t._startAt, p = t._targets, x = t.parent, y = x && x.data === "nested" ? x.parent._targets : p, v = t._overwrite === "auto" && !Lr, b = t.timeline, w, T, S, k, P, O, E, N, L, D, F, X, ut;
  if (b && (!d || !i) && (i = "none"), t._ease = ue(i, de.ease), t._yEase = f ? an(ue(f === !0 ? i : f, de.ease)) : 0, f && t._yoyo && !t._repeat && (f = t._yEase, t._yEase = t._ease, t._ease = f), !b) {
    if (N = p[0] ? Jt(p[0]).harness : 0, X = N && r[N.prop], w = Mr(r, $r), g && g.render(-1, !0).kill(), s)
      if (Vt(t._startAt = I.set(p, dt({
        data: "isStart",
        overwrite: !1,
        parent: x,
        immediateRender: !0,
        lazy: J(a),
        startAt: null,
        delay: 0,
        onUpdate: l,
        onUpdateParams: u,
        callbackScope: h,
        stagger: 0
      }, s))), o) {
        if (e > 0)
          m || (t._startAt = 0);
        else if (c && !(e < 0 && g)) {
          e && (t._zTime = e);
          return;
        }
      } else
        m === !1 && (t._startAt = 0);
    else if (_ && c) {
      if (g)
        !m && (t._startAt = 0);
      else if (e && (o = !1), S = dt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && J(a),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: x
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, w), X && (S[N.prop] = X), Vt(t._startAt = I.set(p, S)), !o)
        n(t._startAt, z);
      else if (!e)
        return;
    }
    for (t._pt = 0, a = c && J(a) || a && !c, T = 0; T < p.length; T++) {
      if (P = p[T], E = P._gsap || Vr(p)[T]._gsap, t._ptLookup[T] = D = {}, Sr[E.id] && Lt.length && Ke(), F = y === p ? T : y.indexOf(P), N && (L = new N()).init(P, X || w, t, F, y) !== !1 && (t._pt = k = new tt(t._pt, P, L.name, 0, 1, L.render, L, 0, L.priority), L._props.forEach(function(mt) {
        D[mt] = k;
      }), L.priority && (O = 1)), !N || X)
        for (S in w)
          rt[S] && (L = fn(S, w, t, F, P, y)) ? L.priority && (O = 1) : D[S] = k = Ur.call(t, P, S, "get", w[S], F, y, 0, r.stringFilter);
      t._op && t._op[T] && t.kill(P, t._op[T]), v && t._pt && (Dt = t, $.killTweensOf(P, D, t.globalTime(0)), ut = !t.parent, Dt = 0), t._pt && a && (Sr[E.id] = 1);
    }
    O && gn(t), t._onInit && t._onInit(t);
  }
  t._from = !b && !!r.runBackwards, t._onUpdate = l, t._initted = (!t._op || t._pt) && !ut;
}, Fs = function(t, e) {
  var r = t[0] ? Jt(t[0]).harness : 0, i = r && r.aliases, s, o, a, l;
  if (!i)
    return e;
  s = pe({}, e);
  for (o in i)
    if (o in s)
      for (l = i[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, Ae = function(t, e, r, i, s) {
  return U(t) ? t.call(e, r, i, s) : H(t) && ~t.indexOf("random(") ? ar(t) : t;
}, cn = qr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Rs = (cn + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), I = /* @__PURE__ */ function(n) {
  Ai(t, n);
  function t(r, i, s, o) {
    var a;
    typeof i == "number" && (s.duration = i, i = s, s = null), a = n.call(this, o ? i : He(i), s) || this;
    var l = a.vars, u = l.duration, h = l.delay, _ = l.immediateRender, f = l.stagger, d = l.overwrite, m = l.keyframes, c = l.defaults, g = l.scrollTrigger, p = l.yoyoEase, x = a.parent, y = (_t(r) || Fi(r) ? pt(r[0]) : "length" in i) ? [r] : vt(r), v, b, w, T, S, k, P, O;
    if (a._targets = y.length ? Vr(y) : $i("GSAP target " + r + " not found. https://greensock.com", !Z.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, m || f || Kr(u) || Kr(h)) {
      if (i = a.vars, v = a.timeline = new K({
        data: "nested",
        defaults: c || {}
      }), v.kill(), v.parent = v._dp = wt(a), v._start = 0, m)
        dt(v.vars.defaults, {
          ease: "none"
        }), m.forEach(function(E) {
          return v.to(y, E, ">");
        });
      else {
        if (T = y.length, P = f ? Zi(f) : $e, Ot(f))
          for (S in f)
            ~cn.indexOf(S) && (O || (O = {}), O[S] = f[S]);
        for (b = 0; b < T; b++) {
          w = {};
          for (S in i)
            Rs.indexOf(S) < 0 && (w[S] = i[S]);
          w.stagger = 0, p && (w.yoyoEase = p), O && pe(w, O), k = y[b], w.duration = +Ae(u, wt(a), b, k, y), w.delay = (+Ae(h, wt(a), b, k, y) || 0) - a._delay, !f && T === 1 && w.delay && (a._delay = h = w.delay, a._start += h, w.delay = 0), v.to(k, w, P(b, k, y));
        }
        v.duration() ? u = h = 0 : a.timeline = 0;
      }
      u || a.duration(u = v.duration());
    } else
      a.timeline = 0;
    return d === !0 && !Lr && (Dt = wt(a), $.killTweensOf(y), Dt = 0), x && or(x, wt(a)), (_ || !u && !m && a._start === C(x._time) && J(_) && hs(wt(a)) && x.data !== "nested") && (a._tTime = -z, a.render(Math.max(0, -h))), g && ji(wt(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(i, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, h = i > l - z && i >= 0 ? l : i < z ? 0 : i, _, f, d, m, c, g, p, x, y;
    if (!u)
      cs(this, i, s, o);
    else if (h !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 != i < 0) {
      if (_ = h, x = this.timeline, this._repeat) {
        if (m = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, s, o);
        if (_ = C(h % m), h === l ? (d = this._repeat, _ = u) : (d = ~~(h / m), d && d === h / m && (_ = u, d--), _ > u && (_ = u)), g = this._yoyo && d & 1, g && (y = this._yEase, _ = u - _), c = ge(this._tTime, m), _ === a && !o && this._initted)
          return this;
        d !== c && (x && this._yEase && ln(x, g), this.vars.repeatRefresh && !g && !this._lock && (this._lock = o = 1, this.render(C(m * d), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Hi(this, i < 0 ? i : _, o, s))
          return this._tTime = 0, this;
        if (u !== this._dur)
          return this.render(i, s, o);
      }
      for (this._tTime = h, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = p = (y || this._ease)(_ / u), this._from && (this.ratio = p = 1 - p), _ && !a && !s && ct(this, "onStart"), f = this._pt; f; )
        f.r(p, f.d), f = f._next;
      x && x.render(i < 0 ? i : !_ && g ? -z : x._dur * p, s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (i < 0 && this._startAt && this._startAt.render(i, !0, o), ct(this, "onUpdate")), this._repeat && d !== c && this.vars.onRepeat && !s && this.parent && ct(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (i < 0 && this._startAt && !this._onUpdate && this._startAt.render(i, !0, !0), (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Vt(this, 1), !s && !(i < 0 && !a) && (h || a) && (ct(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function() {
    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), n.prototype.invalidate.call(this);
  }, e.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? Te(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, Dt && Dt.vars.overwrite !== !0)._first || Te(this), this.parent && o !== this.timeline.totalDuration() && me(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? vt(i) : a, u = this._ptLookup, h = this._pt, _, f, d, m, c, g, p;
    if ((!s || s === "all") && as(a, l))
      return s === "all" && (this._pt = 0), Te(this);
    for (_ = this._op = this._op || [], s !== "all" && (H(s) && (c = {}, at(s, function(x) {
      return c[x] = 1;
    }), s = c), s = Fs(a, s)), p = a.length; p--; )
      if (~l.indexOf(a[p])) {
        f = u[p], s === "all" ? (_[p] = s, m = f, d = {}) : (d = _[p] = _[p] || {}, m = s);
        for (c in m)
          g = f && f[c], g && ((!("kill" in g.d) || g.d.kill(c) === !0) && sr(this, g, "_pt"), delete f[c]), d !== "all" && (d[c] = 1);
      }
    return this._initted && !this._pt && h && Te(this), this;
  }, t.to = function(i, s) {
    return new t(i, s, arguments[2]);
  }, t.from = function(i, s) {
    return new t(i, Ce(arguments, 1));
  }, t.delayedCall = function(i, s, o, a) {
    return new t(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(i, s, o) {
    return new t(i, Ce(arguments, 2));
  }, t.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(i, s);
  }, t.killTweensOf = function(i, s, o) {
    return $.killTweensOf(i, s, o);
  }, t;
}(Re);
dt(I.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
at("staggerTo,staggerFrom,staggerFromTo", function(n) {
  I[n] = function() {
    var t = new K(), e = Pr.call(arguments, 0);
    return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, e);
  };
});
var Xr = function(t, e, r) {
  return t[e] = r;
}, _n = function(t, e, r) {
  return t[e](r);
}, Es = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Ns = function(t, e, r) {
  return t.setAttribute(e, r);
}, Gr = function(t, e) {
  return U(t[e]) ? _n : Br(t[e]) && t.setAttribute ? Ns : Xr;
}, dn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4, e);
}, Ls = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, pn = function(t, e) {
  var r = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, Wr = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, Bs = function(t, e, r, i) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === i && s.modifier(t, e, r), s = o;
}, Is = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? sr(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, $s = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, gn = function(t) {
  for (var e = t._pt, r, i, s, o; e; ) {
    for (r = e._next, i = s; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : o) ? e._prev._next = e : s = e, (e._next = i) ? i._prev = e : o = e, e = r;
  }
  t._pt = s;
}, tt = /* @__PURE__ */ function() {
  function n(e, r, i, s, o, a, l, u, h) {
    this.t = r, this.s = s, this.c = o, this.p = i, this.r = a || dn, this.d = l || this, this.set = u || Xr, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = n.prototype;
  return t.modifier = function(r, i, s) {
    this.mSet = this.mSet || this.set, this.set = $s, this.m = r, this.mt = s, this.tween = i;
  }, n;
}();
at(qr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
  return $r[n] = 1;
});
lt.TweenMax = lt.TweenLite = I;
lt.TimelineLite = lt.TimelineMax = K;
$ = new K({
  sortChildren: !1,
  defaults: de,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Z.stringFilter = on;
var tr = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return ks(i);
    });
  },
  timeline: function(t) {
    return new K(t);
  },
  getTweensOf: function(t, e) {
    return $.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    H(t) && (t = vt(t)[0]);
    var s = Jt(t || {}).get, o = r ? Gi : Xi;
    return r === "native" && (r = ""), t && (e ? o((rt[e] && rt[e].get || s)(t, e, r, i)) : function(a, l, u) {
      return o((rt[a] && rt[a].get || s)(t, a, l, u));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = vt(t), t.length > 1) {
      var i = t.map(function(h) {
        return xt.quickSetter(h, e, r);
      }), s = i.length;
      return function(h) {
        for (var _ = s; _--; )
          i[_](h);
      };
    }
    t = t[0] || {};
    var o = rt[e], a = Jt(t), l = a.harness && (a.harness.aliases || {})[e] || e, u = o ? function(h) {
      var _ = new o();
      le._pt = 0, _.init(t, r ? h + r : h, le, 0, [t]), _.render(1, _), le._pt && Wr(1, le);
    } : a.set(t, l);
    return o ? u : function(h) {
      return u(t, l, r ? h + r : h, a, 1);
    };
  },
  isTweening: function(t) {
    return $.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = ue(t.ease, de.ease)), Jr(de, t || {});
  },
  config: function(t) {
    return Jr(Z, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, s = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !rt[a] && !lt[a] && $i(e + " effect requires " + a + " plugin.");
    }), fr[e] = function(a, l, u) {
      return r(vt(a), dt(l || {}, s), u);
    }, o && (K.prototype[e] = function(a, l, u) {
      return this.add(fr[e](a, Ot(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    A[t] = ue(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? ue(t, e) : A;
  },
  getById: function(t) {
    return $.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new K(t), i, s;
    for (r.smoothChildTiming = J(t.smoothChildTiming), $.remove(r), r._dp = 0, r._time = r._tTime = $._time, i = $._first; i; )
      s = i._next, (e || !(!i._dur && i instanceof I && i.vars.onComplete === i._targets[0])) && kt(r, i, i._start - i._delay), i = s;
    return kt($, r, 0), r;
  },
  utils: {
    wrap: bs,
    wrapYoyo: xs,
    distribute: Zi,
    random: tn,
    snap: Ji,
    normalize: vs,
    getUnit: nt,
    clamp: ps,
    splitColor: nn,
    toArray: vt,
    mapRange: rn,
    pipe: ms,
    unitize: ys,
    interpolate: ws,
    shuffle: Ki
  },
  install: Ii,
  effects: fr,
  ticker: ft,
  updateRoot: K.updateRoot,
  plugins: rt,
  globalTimeline: $,
  core: {
    PropTween: tt,
    globals: qi,
    Tween: I,
    Timeline: K,
    Animation: Re,
    getCache: Jt,
    _removeLinkedListItem: sr,
    suppressOverwrites: function(t) {
      return Lr = t;
    }
  }
};
at("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
  return tr[n] = I[n];
});
ft.add(K.updateRoot);
le = tr.to({}, {
  duration: 0
});
var qs = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, Vs = function(t, e) {
  var r = t._targets, i, s, o;
  for (i in e)
    for (s = r.length; s--; )
      o = t._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = qs(o, i)), o && o.modifier && o.modifier(e[i], t, r[s], i));
}, pr = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (H(s) && (l = {}, at(s, function(h) {
          return l[h] = 1;
        }), s = l), e) {
          l = {};
          for (u in s)
            l[u] = e(s[u]);
          s = l;
        }
        Vs(a, s);
      };
    }
  };
}, xt = tr.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, s) {
    var o, a;
    for (o in e)
      a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, s, 0, 0, o), a && (a.op = o), this._props.push(o);
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r]);
  }
}, pr("roundProps", Or), pr("modifiers"), pr("snap", Ji)) || tr;
I.version = K.version = xt.version = "3.6.1";
Bi = 1;
zi() && ye();
A.Power0;
A.Power1;
A.Power2;
A.Power3;
A.Power4;
A.Linear;
A.Quad;
A.Cubic;
A.Quart;
A.Quint;
A.Strong;
A.Elastic;
A.Back;
A.SteppedEase;
A.Bounce;
A.Sine;
A.Expo;
A.Circ;
/*!
 * CSSPlugin 3.6.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ni, zt, he, jr, Qt, si, Ys = function() {
  return typeof window < "u";
}, Yt = {}, Ht = 180 / Math.PI, fe = Math.PI / 180, ie = Math.atan2, oi = 1e8, mn = /([A-Z])/g, Us = /(?:left|right|width|margin|padding|x)/i, Xs = /[\s,\(]\S/, Ft = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, yn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Gs = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Ws = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, js = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, vn = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, bn = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Hs = function(t, e, r) {
  return t.style[e] = r;
}, Qs = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Ks = function(t, e, r) {
  return t._gsap[e] = r;
}, Zs = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, Js = function(t, e, r, i, s) {
  var o = t._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, to = function(t, e, r, i, s) {
  var o = t._gsap;
  o[e] = r, o.renderTransform(s, o);
}, W = "transform", Ut = W + "Origin", xn, Cr = function(t, e) {
  var r = zt.createElementNS ? zt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : zt.createElement(t);
  return r.style ? r : zt.createElement(t);
}, Mt = function n(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(mn, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && n(t, ve(e) || e, 1) || "";
}, ai = "O,Moz,ms,Ms,Webkit".split(","), ve = function(t, e, r) {
  var i = e || Qt, s = i.style, o = 5;
  if (t in s && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(ai[o] + t in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ai[o] : "") + t;
}, Ar = function() {
  Ys() && window.document && (ni = window, zt = ni.document, he = zt.documentElement, Qt = Cr("div") || {
    style: {}
  }, Cr("div"), W = ve(W), Ut = W + "Origin", Qt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", xn = !!ve("perspective"), jr = 1);
}, gr = function n(t) {
  var e = Cr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, s = this.style.cssText, o;
  if (he.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = n;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), he.removeChild(e), this.style.cssText = s, o;
}, li = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, wn = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = gr.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === gr || (e = gr.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +li(t, ["x", "cx", "x1"]) || 0,
    y: +li(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, kn = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && wn(t));
}, Ee = function(t, e) {
  if (e) {
    var r = t.style;
    e in Yt && e !== Ut && (e = W), r.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(e.replace(mn, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Rt = function(t, e, r, i, s, o) {
  var a = new tt(t._pt, e, r, 0, 1, o ? bn : vn);
  return t._pt = a, a.b = i, a.e = s, t._props.push(r), a;
}, ui = {
  deg: 1,
  rad: 1,
  turn: 1
}, Xt = function n(t, e, r, i) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = Qt.style, l = Us.test(e), u = t.tagName.toLowerCase() === "svg", h = (u ? "client" : "offset") + (l ? "Width" : "Height"), _ = 100, f = i === "px", d = i === "%", m, c, g, p;
  return i === o || !s || ui[i] || ui[o] ? s : (o !== "px" && !f && (s = n(t, e, r, "px")), p = t.getCTM && kn(t), (d || o === "%") && (Yt[e] || ~e.indexOf("adius")) ? (m = p ? t.getBBox()[l ? "width" : "height"] : t[h], C(d ? s / m * _ : s / 100 * m)) : (a[l ? "width" : "height"] = _ + (f ? o : i), c = ~e.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode, p && (c = (t.ownerSVGElement || {}).parentNode), (!c || c === zt || !c.appendChild) && (c = zt.body), g = c._gsap, g && d && g.width && l && g.time === ft.time ? C(s / g.width * _) : ((d || o === "%") && (a.position = Mt(t, "position")), c === t && (a.position = "static"), c.appendChild(Qt), m = Qt[h], c.removeChild(Qt), a.position = "absolute", l && d && (g = Jt(c), g.time = ft.time, g.width = c[h]), C(f ? m * s / _ : m && s ? _ / m * s : 0))));
}, ne = function(t, e, r, i) {
  var s;
  return jr || Ar(), e in Ft && e !== "transform" && (e = Ft[e], ~e.indexOf(",") && (e = e.split(",")[0])), Yt[e] && e !== "transform" ? (s = Le(t, i), s = e !== "transformOrigin" ? s[e] : rr(Mt(t, Ut)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = er[e] && er[e](t, e, r) || Mt(t, e) || Yi(t, e) || (e === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Xt(t, e, s, r) + r : s;
}, eo = function(t, e, r, i) {
  if (!r || r === "none") {
    var s = ve(e, t, 1), o = s && Mt(t, s, 1);
    o && o !== r ? (e = s, r = o) : e === "borderColor" && (r = Mt(t, "borderTopColor"));
  }
  var a = new tt(this._pt, t.style, e, 0, 1, pn), l = 0, u = 0, h, _, f, d, m, c, g, p, x, y, v, b, w;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (t.style[e] = i, i = Mt(t, e) || i, t.style[e] = r), h = [r, i], on(h), r = h[0], i = h[1], f = r.match(ae) || [], w = i.match(ae) || [], w.length) {
    for (; _ = ae.exec(i); )
      g = _[0], x = i.substring(l, _.index), m ? m = (m + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (m = 1), g !== (c = f[u++] || "") && (d = parseFloat(c) || 0, v = c.substr((d + "").length), b = g.charAt(1) === "=" ? +(g.charAt(0) + "1") : 0, b && (g = g.substr(2)), p = parseFloat(g), y = g.substr((p + "").length), l = ae.lastIndex - y.length, y || (y = y || Z.units[e] || v, l === i.length && (i += y, a.e += y)), v !== y && (d = Xt(t, e, c, y) || 0), a._pt = {
        _next: a._pt,
        p: x || u === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: b ? b * p : p - d,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? bn : vn;
  return Ei.test(i) && (a.e = 0), this._pt = a, a;
}, hi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ro = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = hi[r] || r, e[1] = hi[i] || i, e.join(" ");
}, io = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, s = e.u, o = r._gsap, a, l, u;
    if (s === "all" || s === !0)
      i.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], Yt[a] && (l = 1, a = a === "transformOrigin" ? Ut : W), Ee(r, a);
    l && (Ee(r, W), o && (o.svg && r.removeAttribute("transform"), Le(r, 1), o.uncache = 1));
  }
}, er = {
  clearProps: function(t, e, r, i, s) {
    if (s.data !== "isFromStart") {
      var o = t._pt = new tt(t._pt, e, r, 0, 0, io);
      return o.u = i, o.pr = -10, o.tween = s, t._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Ne = [1, 0, 0, 1, 0, 0], Tn = {}, Sn = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, fi = function(t) {
  var e = Mt(t, W);
  return Sn(e) ? Ne : e.substr(7).match(Ri).map(C);
}, Hr = function(t, e) {
  var r = t._gsap || Jt(t), i = t.style, s = fi(t), o, a, l, u;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Ne : s) : (s === Ne && !t.offsetParent && t !== he && !r.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent) && (u = 1, a = t.nextSibling, he.appendChild(t)), s = fi(t), l ? i.display = l : Ee(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : he.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Dr = function(t, e, r, i, s, o) {
  var a = t._gsap, l = s || Hr(t, !0), u = a.xOrigin || 0, h = a.yOrigin || 0, _ = a.xOffset || 0, f = a.yOffset || 0, d = l[0], m = l[1], c = l[2], g = l[3], p = l[4], x = l[5], y = e.split(" "), v = parseFloat(y[0]) || 0, b = parseFloat(y[1]) || 0, w, T, S, k;
  r ? l !== Ne && (T = d * g - m * c) && (S = v * (g / T) + b * (-c / T) + (c * x - g * p) / T, k = v * (-m / T) + b * (d / T) - (d * x - m * p) / T, v = S, b = k) : (w = wn(t), v = w.x + (~y[0].indexOf("%") ? v / 100 * w.width : v), b = w.y + (~(y[1] || y[0]).indexOf("%") ? b / 100 * w.height : b)), i || i !== !1 && a.smooth ? (p = v - u, x = b - h, a.xOffset = _ + (p * d + x * c) - p, a.yOffset = f + (p * m + x * g) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = b, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[Ut] = "0px 0px", o && (Rt(o, a, "xOrigin", u, v), Rt(o, a, "yOrigin", h, b), Rt(o, a, "xOffset", _, a.xOffset), Rt(o, a, "yOffset", f, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + b);
}, Le = function(t, e) {
  var r = t._gsap || new hn(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, s = r.scaleX < 0, o = "px", a = "deg", l = Mt(t, Ut) || "0", u, h, _, f, d, m, c, g, p, x, y, v, b, w, T, S, k, P, O, E, N, L, D, F, X, ut, mt, Ct, G, xe, q, ht;
  return u = h = _ = m = c = g = p = x = y = 0, f = d = 1, r.svg = !!(t.getCTM && kn(t)), w = Hr(t, r.svg), r.svg && (F = !r.uncache && !e && t.getAttribute("data-svg-origin"), Dr(t, F || l, !!F || r.originIsAbsolute, r.smooth !== !1, w)), v = r.xOrigin || 0, b = r.yOrigin || 0, w !== Ne && (P = w[0], O = w[1], E = w[2], N = w[3], u = L = w[4], h = D = w[5], w.length === 6 ? (f = Math.sqrt(P * P + O * O), d = Math.sqrt(N * N + E * E), m = P || O ? ie(O, P) * Ht : 0, p = E || N ? ie(E, N) * Ht + m : 0, p && (d *= Math.abs(Math.cos(p * fe))), r.svg && (u -= v - (v * P + b * E), h -= b - (v * O + b * N))) : (ht = w[6], xe = w[7], mt = w[8], Ct = w[9], G = w[10], q = w[11], u = w[12], h = w[13], _ = w[14], T = ie(ht, G), c = T * Ht, T && (S = Math.cos(-T), k = Math.sin(-T), F = L * S + mt * k, X = D * S + Ct * k, ut = ht * S + G * k, mt = L * -k + mt * S, Ct = D * -k + Ct * S, G = ht * -k + G * S, q = xe * -k + q * S, L = F, D = X, ht = ut), T = ie(-E, G), g = T * Ht, T && (S = Math.cos(-T), k = Math.sin(-T), F = P * S - mt * k, X = O * S - Ct * k, ut = E * S - G * k, q = N * k + q * S, P = F, O = X, E = ut), T = ie(O, P), m = T * Ht, T && (S = Math.cos(T), k = Math.sin(T), F = P * S + O * k, X = L * S + D * k, O = O * S - P * k, D = D * S - L * k, P = F, L = X), c && Math.abs(c) + Math.abs(m) > 359.9 && (c = m = 0, g = 180 - g), f = C(Math.sqrt(P * P + O * O + E * E)), d = C(Math.sqrt(D * D + ht * ht)), T = ie(L, D), p = Math.abs(T) > 2e-4 ? T * Ht : 0, y = q ? 1 / (q < 0 ? -q : q) : 0), r.svg && (F = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Sn(Mt(t, W)), F && t.setAttribute("transform", F))), Math.abs(p) > 90 && Math.abs(p) < 270 && (s ? (f *= -1, p += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (d *= -1, p += p <= 0 ? 180 : -180)), r.x = u - ((r.xPercent = u && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = h - ((r.yPercent = h && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = _ + o, r.scaleX = C(f), r.scaleY = C(d), r.rotation = C(m) + a, r.rotationX = C(c) + a, r.rotationY = C(g) + a, r.skewX = p + a, r.skewY = x + a, r.transformPerspective = y + o, (r.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[Ut] = rr(l)), r.xOffset = r.yOffset = 0, r.force3D = Z.force3D, r.renderTransform = r.svg ? so : xn ? Mn : no, r.uncache = 0, r;
}, rr = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, mr = function(t, e, r) {
  var i = nt(e);
  return C(parseFloat(e) + parseFloat(Xt(t, "x", r + "px", i))) + i;
}, no = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Mn(t, e);
}, Wt = "0deg", we = "0px", jt = ") ", Mn = function(t, e) {
  var r = e || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, h = r.rotationY, _ = r.rotationX, f = r.skewX, d = r.skewY, m = r.scaleX, c = r.scaleY, g = r.transformPerspective, p = r.force3D, x = r.target, y = r.zOrigin, v = "", b = p === "auto" && t && t !== 1 || p === !0;
  if (y && (_ !== Wt || h !== Wt)) {
    var w = parseFloat(h) * fe, T = Math.sin(w), S = Math.cos(w), k;
    w = parseFloat(_) * fe, k = Math.cos(w), o = mr(x, o, T * k * -y), a = mr(x, a, -Math.sin(w) * -y), l = mr(x, l, S * k * -y + y);
  }
  g !== we && (v += "perspective(" + g + jt), (i || s) && (v += "translate(" + i + "%, " + s + "%) "), (b || o !== we || a !== we || l !== we) && (v += l !== we || b ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + jt), u !== Wt && (v += "rotate(" + u + jt), h !== Wt && (v += "rotateY(" + h + jt), _ !== Wt && (v += "rotateX(" + _ + jt), (f !== Wt || d !== Wt) && (v += "skew(" + f + ", " + d + jt), (m !== 1 || c !== 1) && (v += "scale(" + m + ", " + c + jt), x.style[W] = v || "translate(0, 0)";
}, so = function(t, e) {
  var r = e || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, h = r.skewY, _ = r.scaleX, f = r.scaleY, d = r.target, m = r.xOrigin, c = r.yOrigin, g = r.xOffset, p = r.yOffset, x = r.forceCSS, y = parseFloat(o), v = parseFloat(a), b, w, T, S, k;
  l = parseFloat(l), u = parseFloat(u), h = parseFloat(h), h && (h = parseFloat(h), u += h, l += h), l || u ? (l *= fe, u *= fe, b = Math.cos(l) * _, w = Math.sin(l) * _, T = Math.sin(l - u) * -f, S = Math.cos(l - u) * f, u && (h *= fe, k = Math.tan(u - h), k = Math.sqrt(1 + k * k), T *= k, S *= k, h && (k = Math.tan(h), k = Math.sqrt(1 + k * k), b *= k, w *= k)), b = C(b), w = C(w), T = C(T), S = C(S)) : (b = _, S = f, w = T = 0), (y && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (y = Xt(d, "x", o, "px"), v = Xt(d, "y", a, "px")), (m || c || g || p) && (y = C(y + m - (m * b + c * T) + g), v = C(v + c - (m * w + c * S) + p)), (i || s) && (k = d.getBBox(), y = C(y + i / 100 * k.width), v = C(v + s / 100 * k.height)), k = "matrix(" + b + "," + w + "," + T + "," + S + "," + y + "," + v + ")", d.setAttribute("transform", k), x && (d.style[W] = k);
}, oo = function(t, e, r, i, s, o) {
  var a = 360, l = H(s), u = parseFloat(s) * (l && ~s.indexOf("rad") ? Ht : 1), h = o ? u * o : u - i, _ = i + h + "deg", f, d;
  return l && (f = s.split("_")[1], f === "short" && (h %= a, h !== h % (a / 2) && (h += h < 0 ? a : -a)), f === "cw" && h < 0 ? h = (h + a * oi) % a - ~~(h / a) * a : f === "ccw" && h > 0 && (h = (h - a * oi) % a - ~~(h / a) * a)), t._pt = d = new tt(t._pt, e, r, i, h, Gs), d.e = _, d.u = "deg", t._props.push(r), d;
}, ci = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, ao = function(t, e, r) {
  var i = ci({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, h, _, f, d, m;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[W] = e, a = Le(r, 1), Ee(r, W), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[W], o[W] = e, a = Le(r, 1), o[W] = u);
  for (l in Yt)
    u = i[l], h = a[l], u !== h && s.indexOf(l) < 0 && (d = nt(u), m = nt(h), _ = d !== m ? Xt(r, l, u, m) : parseFloat(u), f = parseFloat(h), t._pt = new tt(t._pt, a, l, _, f - _, yn), t._pt.u = m || 0, t._props.push(l));
  ci(a, i);
};
at("padding,margin,Width,Radius", function(n, t) {
  var e = "Top", r = "Right", i = "Bottom", s = "Left", o = (t < 3 ? [e, r, i, s] : [e + s, e + r, i + r, i + s]).map(function(a) {
    return t < 2 ? n + a : "border" + a + n;
  });
  er[t > 1 ? "border" + n : n] = function(a, l, u, h, _) {
    var f, d;
    if (arguments.length < 4)
      return f = o.map(function(m) {
        return ne(a, m, u);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
    f = (h + "").split(" "), d = {}, o.forEach(function(m, c) {
      return d[m] = f[c] = f[c] || f[(c - 1) / 2 | 0];
    }), a.init(l, d, _);
  };
});
var Pn = {
  name: "css",
  register: Ar,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, s) {
    var o = this._props, a = t.style, l = r.vars.startAt, u, h, _, f, d, m, c, g, p, x, y, v, b, w, T;
    jr || Ar();
    for (c in e)
      if (c !== "autoRound" && (h = e[c], !(rt[c] && fn(c, e, r, i, t, s)))) {
        if (d = typeof h, m = er[c], d === "function" && (h = h.call(r, i, t, s), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = ar(h)), m)
          m(this, t, c, h, r) && (T = 1);
        else if (c.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(c) + "").trim(), h += "", Bt.lastIndex = 0, Bt.test(u) || (g = nt(u), p = nt(h)), p ? g !== p && (u = Xt(t, c, u, p) + p) : g && (h += g), this.add(a, "setProperty", u, h, i, s, 0, 0, c);
        else if (d !== "undefined") {
          if (l && c in l ? (u = typeof l[c] == "function" ? l[c].call(r, i, t, s) : l[c], c in Z.units && !nt(u) && (u += Z.units[c]), (u + "").charAt(1) === "=" && (u = ne(t, c))) : u = ne(t, c), f = parseFloat(u), x = d === "string" && h.charAt(1) === "=" ? +(h.charAt(0) + "1") : 0, x && (h = h.substr(2)), _ = parseFloat(h), c in Ft && (c === "autoAlpha" && (f === 1 && ne(t, "visibility") === "hidden" && _ && (f = 0), Rt(this, a, "visibility", f ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), c !== "scale" && c !== "transform" && (c = Ft[c], ~c.indexOf(",") && (c = c.split(",")[0]))), y = c in Yt, y) {
            if (v || (b = t._gsap, b.renderTransform && !e.parseTransform || Le(t, e.parseTransform), w = e.smoothOrigin !== !1 && b.smooth, v = this._pt = new tt(this._pt, a, W, 0, 1, b.renderTransform, b, 0, -1), v.dep = 1), c === "scale")
              this._pt = new tt(this._pt, b, "scaleY", b.scaleY, x ? x * _ : _ - b.scaleY), o.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              h = ro(h), b.svg ? Dr(t, h, 0, w, 0, this) : (p = parseFloat(h.split(" ")[2]) || 0, p !== b.zOrigin && Rt(this, b, "zOrigin", b.zOrigin, p), Rt(this, a, c, rr(u), rr(h)));
              continue;
            } else if (c === "svgOrigin") {
              Dr(t, h, 1, w, 0, this);
              continue;
            } else if (c in Tn) {
              oo(this, b, c, f, h, x);
              continue;
            } else if (c === "smoothOrigin") {
              Rt(this, b, "smooth", b.smooth, h);
              continue;
            } else if (c === "force3D") {
              b[c] = h;
              continue;
            } else if (c === "transform") {
              ao(this, h, t);
              continue;
            }
          } else
            c in a || (c = ve(c) || c);
          if (y || (_ || _ === 0) && (f || f === 0) && !Xs.test(h) && c in a)
            g = (u + "").substr((f + "").length), _ || (_ = 0), p = nt(h) || (c in Z.units ? Z.units[c] : g), g !== p && (f = Xt(t, c, u, p)), this._pt = new tt(this._pt, y ? b : a, c, f, x ? x * _ : _ - f, !y && (p === "px" || c === "zIndex") && e.autoRound !== !1 ? js : yn), this._pt.u = p || 0, g !== p && (this._pt.b = u, this._pt.r = Ws);
          else if (c in a)
            eo.call(this, t, c, u, h);
          else if (c in t)
            this.add(t, c, t[c], h, i, s);
          else {
            Ir(c, h);
            continue;
          }
          o.push(c);
        }
      }
    T && gn(this);
  },
  get: ne,
  aliases: Ft,
  getSetter: function(t, e, r) {
    var i = Ft[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Yt && e !== Ut && (t._gsap.x || ne(t, "x")) ? r && si === r ? e === "scale" ? Zs : Ks : (si = r || {}) && (e === "scale" ? Js : to) : t.style && !Br(t.style[e]) ? Hs : ~e.indexOf("-") ? Qs : Gr(t, e);
  },
  core: {
    _removeProperty: Ee,
    _getMatrix: Hr
  }
};
xt.utils.checkPrefix = ve;
(function(n, t, e, r) {
  var i = at(n + "," + t + "," + e, function(s) {
    Yt[s] = 1;
  });
  at(t, function(s) {
    Z.units[s] = "deg", Tn[s] = 1;
  }), Ft[i[13]] = n + "," + t, at(r, function(s) {
    var o = s.split(":");
    Ft[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
at("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
  Z.units[n] = "px";
});
xt.registerPlugin(Pn);
var Pt = xt.registerPlugin(Pn) || xt;
Pt.core.Tween;
function lo(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var On = { exports: {} }, Cn = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, An = { exports: {} }, uo = function(t) {
  return !t || typeof t == "string" ? !1 : t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && t.constructor.name !== "String");
}, ho = uo, fo = Array.prototype.concat, co = Array.prototype.slice, _i = An.exports = function(t) {
  for (var e = [], r = 0, i = t.length; r < i; r++) {
    var s = t[r];
    ho(s) ? e = fo.call(e, co.call(s)) : e.push(s);
  }
  return e;
};
_i.wrap = function(n) {
  return function() {
    return n(_i(arguments));
  };
};
var _o = An.exports, De = Cn, Ve = _o, Dn = Object.hasOwnProperty, zn = /* @__PURE__ */ Object.create(null);
for (var yr in De)
  Dn.call(De, yr) && (zn[De[yr]] = yr);
var st = On.exports = {
  to: {},
  get: {}
};
st.get = function(n) {
  var t = n.substring(0, 3).toLowerCase(), e, r;
  switch (t) {
    case "hsl":
      e = st.get.hsl(n), r = "hsl";
      break;
    case "hwb":
      e = st.get.hwb(n), r = "hwb";
      break;
    default:
      e = st.get.rgb(n), r = "rgb";
      break;
  }
  return e ? { model: r, value: e } : null;
};
st.get.rgb = function(n) {
  if (!n)
    return null;
  var t = /^#([a-f0-9]{3,4})$/i, e = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, r = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, i = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, s = /^(\w+)$/, o = [0, 0, 0, 1], a, l, u;
  if (a = n.match(e)) {
    for (u = a[2], a = a[1], l = 0; l < 3; l++) {
      var h = l * 2;
      o[l] = parseInt(a.slice(h, h + 2), 16);
    }
    u && (o[3] = parseInt(u, 16) / 255);
  } else if (a = n.match(t)) {
    for (a = a[1], u = a[3], l = 0; l < 3; l++)
      o[l] = parseInt(a[l] + a[l], 16);
    u && (o[3] = parseInt(u + u, 16) / 255);
  } else if (a = n.match(r)) {
    for (l = 0; l < 3; l++)
      o[l] = parseInt(a[l + 1], 0);
    a[4] && (a[5] ? o[3] = parseFloat(a[4]) * 0.01 : o[3] = parseFloat(a[4]));
  } else if (a = n.match(i)) {
    for (l = 0; l < 3; l++)
      o[l] = Math.round(parseFloat(a[l + 1]) * 2.55);
    a[4] && (a[5] ? o[3] = parseFloat(a[4]) * 0.01 : o[3] = parseFloat(a[4]));
  } else
    return (a = n.match(s)) ? a[1] === "transparent" ? [0, 0, 0, 0] : Dn.call(De, a[1]) ? (o = De[a[1]], o[3] = 1, o) : null : null;
  for (l = 0; l < 3; l++)
    o[l] = It(o[l], 0, 255);
  return o[3] = It(o[3], 0, 1), o;
};
st.get.hsl = function(n) {
  if (!n)
    return null;
  var t = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = n.match(t);
  if (e) {
    var r = parseFloat(e[4]), i = (parseFloat(e[1]) % 360 + 360) % 360, s = It(parseFloat(e[2]), 0, 100), o = It(parseFloat(e[3]), 0, 100), a = It(isNaN(r) ? 1 : r, 0, 1);
    return [i, s, o, a];
  }
  return null;
};
st.get.hwb = function(n) {
  if (!n)
    return null;
  var t = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = n.match(t);
  if (e) {
    var r = parseFloat(e[4]), i = (parseFloat(e[1]) % 360 + 360) % 360, s = It(parseFloat(e[2]), 0, 100), o = It(parseFloat(e[3]), 0, 100), a = It(isNaN(r) ? 1 : r, 0, 1);
    return [i, s, o, a];
  }
  return null;
};
st.to.hex = function() {
  var n = Ve(arguments);
  return "#" + Xe(n[0]) + Xe(n[1]) + Xe(n[2]) + (n[3] < 1 ? Xe(Math.round(n[3] * 255)) : "");
};
st.to.rgb = function() {
  var n = Ve(arguments);
  return n.length < 4 || n[3] === 1 ? "rgb(" + Math.round(n[0]) + ", " + Math.round(n[1]) + ", " + Math.round(n[2]) + ")" : "rgba(" + Math.round(n[0]) + ", " + Math.round(n[1]) + ", " + Math.round(n[2]) + ", " + n[3] + ")";
};
st.to.rgb.percent = function() {
  var n = Ve(arguments), t = Math.round(n[0] / 255 * 100), e = Math.round(n[1] / 255 * 100), r = Math.round(n[2] / 255 * 100);
  return n.length < 4 || n[3] === 1 ? "rgb(" + t + "%, " + e + "%, " + r + "%)" : "rgba(" + t + "%, " + e + "%, " + r + "%, " + n[3] + ")";
};
st.to.hsl = function() {
  var n = Ve(arguments);
  return n.length < 4 || n[3] === 1 ? "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)" : "hsla(" + n[0] + ", " + n[1] + "%, " + n[2] + "%, " + n[3] + ")";
};
st.to.hwb = function() {
  var n = Ve(arguments), t = "";
  return n.length >= 4 && n[3] !== 1 && (t = ", " + n[3]), "hwb(" + n[0] + ", " + n[1] + "%, " + n[2] + "%" + t + ")";
};
st.to.keyword = function(n) {
  return zn[n.slice(0, 3)];
};
function It(n, t, e) {
  return Math.min(Math.max(t, n), e);
}
function Xe(n) {
  var t = Math.round(n).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
var po = On.exports;
const Be = Cn, Fn = {};
for (const n of Object.keys(Be))
  Fn[Be[n]] = n;
const M = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var Rn = M;
for (const n of Object.keys(M)) {
  if (!("channels" in M[n]))
    throw new Error("missing channels property: " + n);
  if (!("labels" in M[n]))
    throw new Error("missing channel labels property: " + n);
  if (M[n].labels.length !== M[n].channels)
    throw new Error("channel and label counts mismatch: " + n);
  const { channels: t, labels: e } = M[n];
  delete M[n].channels, delete M[n].labels, Object.defineProperty(M[n], "channels", { value: t }), Object.defineProperty(M[n], "labels", { value: e });
}
M.rgb.hsl = function(n) {
  const t = n[0] / 255, e = n[1] / 255, r = n[2] / 255, i = Math.min(t, e, r), s = Math.max(t, e, r), o = s - i;
  let a, l;
  s === i ? a = 0 : t === s ? a = (e - r) / o : e === s ? a = 2 + (r - t) / o : r === s && (a = 4 + (t - e) / o), a = Math.min(a * 60, 360), a < 0 && (a += 360);
  const u = (i + s) / 2;
  return s === i ? l = 0 : u <= 0.5 ? l = o / (s + i) : l = o / (2 - s - i), [a, l * 100, u * 100];
};
M.rgb.hsv = function(n) {
  let t, e, r, i, s;
  const o = n[0] / 255, a = n[1] / 255, l = n[2] / 255, u = Math.max(o, a, l), h = u - Math.min(o, a, l), _ = function(f) {
    return (u - f) / 6 / h + 1 / 2;
  };
  return h === 0 ? (i = 0, s = 0) : (s = h / u, t = _(o), e = _(a), r = _(l), o === u ? i = r - e : a === u ? i = 1 / 3 + t - r : l === u && (i = 2 / 3 + e - t), i < 0 ? i += 1 : i > 1 && (i -= 1)), [
    i * 360,
    s * 100,
    u * 100
  ];
};
M.rgb.hwb = function(n) {
  const t = n[0], e = n[1];
  let r = n[2];
  const i = M.rgb.hsl(n)[0], s = 1 / 255 * Math.min(t, Math.min(e, r));
  return r = 1 - 1 / 255 * Math.max(t, Math.max(e, r)), [i, s * 100, r * 100];
};
M.rgb.cmyk = function(n) {
  const t = n[0] / 255, e = n[1] / 255, r = n[2] / 255, i = Math.min(1 - t, 1 - e, 1 - r), s = (1 - t - i) / (1 - i) || 0, o = (1 - e - i) / (1 - i) || 0, a = (1 - r - i) / (1 - i) || 0;
  return [s * 100, o * 100, a * 100, i * 100];
};
function go(n, t) {
  return (n[0] - t[0]) ** 2 + (n[1] - t[1]) ** 2 + (n[2] - t[2]) ** 2;
}
M.rgb.keyword = function(n) {
  const t = Fn[n];
  if (t)
    return t;
  let e = 1 / 0, r;
  for (const i of Object.keys(Be)) {
    const s = Be[i], o = go(n, s);
    o < e && (e = o, r = i);
  }
  return r;
};
M.keyword.rgb = function(n) {
  return Be[n];
};
M.rgb.xyz = function(n) {
  let t = n[0] / 255, e = n[1] / 255, r = n[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  const i = t * 0.4124 + e * 0.3576 + r * 0.1805, s = t * 0.2126 + e * 0.7152 + r * 0.0722, o = t * 0.0193 + e * 0.1192 + r * 0.9505;
  return [i * 100, s * 100, o * 100];
};
M.rgb.lab = function(n) {
  const t = M.rgb.xyz(n);
  let e = t[0], r = t[1], i = t[2];
  e /= 95.047, r /= 100, i /= 108.883, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, i = i > 8856e-6 ? i ** (1 / 3) : 7.787 * i + 16 / 116;
  const s = 116 * r - 16, o = 500 * (e - r), a = 200 * (r - i);
  return [s, o, a];
};
M.hsl.rgb = function(n) {
  const t = n[0] / 360, e = n[1] / 100, r = n[2] / 100;
  let i, s, o;
  if (e === 0)
    return o = r * 255, [o, o, o];
  r < 0.5 ? i = r * (1 + e) : i = r + e - r * e;
  const a = 2 * r - i, l = [0, 0, 0];
  for (let u = 0; u < 3; u++)
    s = t + 1 / 3 * -(u - 1), s < 0 && s++, s > 1 && s--, 6 * s < 1 ? o = a + (i - a) * 6 * s : 2 * s < 1 ? o = i : 3 * s < 2 ? o = a + (i - a) * (2 / 3 - s) * 6 : o = a, l[u] = o * 255;
  return l;
};
M.hsl.hsv = function(n) {
  const t = n[0];
  let e = n[1] / 100, r = n[2] / 100, i = e;
  const s = Math.max(r, 0.01);
  r *= 2, e *= r <= 1 ? r : 2 - r, i *= s <= 1 ? s : 2 - s;
  const o = (r + e) / 2, a = r === 0 ? 2 * i / (s + i) : 2 * e / (r + e);
  return [t, a * 100, o * 100];
};
M.hsv.rgb = function(n) {
  const t = n[0] / 60, e = n[1] / 100;
  let r = n[2] / 100;
  const i = Math.floor(t) % 6, s = t - Math.floor(t), o = 255 * r * (1 - e), a = 255 * r * (1 - e * s), l = 255 * r * (1 - e * (1 - s));
  switch (r *= 255, i) {
    case 0:
      return [r, l, o];
    case 1:
      return [a, r, o];
    case 2:
      return [o, r, l];
    case 3:
      return [o, a, r];
    case 4:
      return [l, o, r];
    case 5:
      return [r, o, a];
  }
};
M.hsv.hsl = function(n) {
  const t = n[0], e = n[1] / 100, r = n[2] / 100, i = Math.max(r, 0.01);
  let s, o;
  o = (2 - e) * r;
  const a = (2 - e) * i;
  return s = e * i, s /= a <= 1 ? a : 2 - a, s = s || 0, o /= 2, [t, s * 100, o * 100];
};
M.hwb.rgb = function(n) {
  const t = n[0] / 360;
  let e = n[1] / 100, r = n[2] / 100;
  const i = e + r;
  let s;
  i > 1 && (e /= i, r /= i);
  const o = Math.floor(6 * t), a = 1 - r;
  s = 6 * t - o, o & 1 && (s = 1 - s);
  const l = e + s * (a - e);
  let u, h, _;
  switch (o) {
    default:
    case 6:
    case 0:
      u = a, h = l, _ = e;
      break;
    case 1:
      u = l, h = a, _ = e;
      break;
    case 2:
      u = e, h = a, _ = l;
      break;
    case 3:
      u = e, h = l, _ = a;
      break;
    case 4:
      u = l, h = e, _ = a;
      break;
    case 5:
      u = a, h = e, _ = l;
      break;
  }
  return [u * 255, h * 255, _ * 255];
};
M.cmyk.rgb = function(n) {
  const t = n[0] / 100, e = n[1] / 100, r = n[2] / 100, i = n[3] / 100, s = 1 - Math.min(1, t * (1 - i) + i), o = 1 - Math.min(1, e * (1 - i) + i), a = 1 - Math.min(1, r * (1 - i) + i);
  return [s * 255, o * 255, a * 255];
};
M.xyz.rgb = function(n) {
  const t = n[0] / 100, e = n[1] / 100, r = n[2] / 100;
  let i, s, o;
  return i = t * 3.2406 + e * -1.5372 + r * -0.4986, s = t * -0.9689 + e * 1.8758 + r * 0.0415, o = t * 0.0557 + e * -0.204 + r * 1.057, i = i > 31308e-7 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, i = Math.min(Math.max(0, i), 1), s = Math.min(Math.max(0, s), 1), o = Math.min(Math.max(0, o), 1), [i * 255, s * 255, o * 255];
};
M.xyz.lab = function(n) {
  let t = n[0], e = n[1], r = n[2];
  t /= 95.047, e /= 100, r /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
  const i = 116 * e - 16, s = 500 * (t - e), o = 200 * (e - r);
  return [i, s, o];
};
M.lab.xyz = function(n) {
  const t = n[0], e = n[1], r = n[2];
  let i, s, o;
  s = (t + 16) / 116, i = e / 500 + s, o = s - r / 200;
  const a = s ** 3, l = i ** 3, u = o ** 3;
  return s = a > 8856e-6 ? a : (s - 16 / 116) / 7.787, i = l > 8856e-6 ? l : (i - 16 / 116) / 7.787, o = u > 8856e-6 ? u : (o - 16 / 116) / 7.787, i *= 95.047, s *= 100, o *= 108.883, [i, s, o];
};
M.lab.lch = function(n) {
  const t = n[0], e = n[1], r = n[2];
  let i;
  i = Math.atan2(r, e) * 360 / 2 / Math.PI, i < 0 && (i += 360);
  const o = Math.sqrt(e * e + r * r);
  return [t, o, i];
};
M.lch.lab = function(n) {
  const t = n[0], e = n[1], i = n[2] / 360 * 2 * Math.PI, s = e * Math.cos(i), o = e * Math.sin(i);
  return [t, s, o];
};
M.rgb.ansi16 = function(n, t = null) {
  const [e, r, i] = n;
  let s = t === null ? M.rgb.hsv(n)[2] : t;
  if (s = Math.round(s / 50), s === 0)
    return 30;
  let o = 30 + (Math.round(i / 255) << 2 | Math.round(r / 255) << 1 | Math.round(e / 255));
  return s === 2 && (o += 60), o;
};
M.hsv.ansi16 = function(n) {
  return M.rgb.ansi16(M.hsv.rgb(n), n[2]);
};
M.rgb.ansi256 = function(n) {
  const t = n[0], e = n[1], r = n[2];
  return t === e && e === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(r / 255 * 5);
};
M.ansi16.rgb = function(n) {
  let t = n % 10;
  if (t === 0 || t === 7)
    return n > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
  const e = (~~(n > 50) + 1) * 0.5, r = (t & 1) * e * 255, i = (t >> 1 & 1) * e * 255, s = (t >> 2 & 1) * e * 255;
  return [r, i, s];
};
M.ansi256.rgb = function(n) {
  if (n >= 232) {
    const s = (n - 232) * 10 + 8;
    return [s, s, s];
  }
  n -= 16;
  let t;
  const e = Math.floor(n / 36) / 5 * 255, r = Math.floor((t = n % 36) / 6) / 5 * 255, i = t % 6 / 5 * 255;
  return [e, r, i];
};
M.rgb.hex = function(n) {
  const e = (((Math.round(n[0]) & 255) << 16) + ((Math.round(n[1]) & 255) << 8) + (Math.round(n[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(e.length) + e;
};
M.hex.rgb = function(n) {
  const t = n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t)
    return [0, 0, 0];
  let e = t[0];
  t[0].length === 3 && (e = e.split("").map((a) => a + a).join(""));
  const r = parseInt(e, 16), i = r >> 16 & 255, s = r >> 8 & 255, o = r & 255;
  return [i, s, o];
};
M.rgb.hcg = function(n) {
  const t = n[0] / 255, e = n[1] / 255, r = n[2] / 255, i = Math.max(Math.max(t, e), r), s = Math.min(Math.min(t, e), r), o = i - s;
  let a, l;
  return o < 1 ? a = s / (1 - o) : a = 0, o <= 0 ? l = 0 : i === t ? l = (e - r) / o % 6 : i === e ? l = 2 + (r - t) / o : l = 4 + (t - e) / o, l /= 6, l %= 1, [l * 360, o * 100, a * 100];
};
M.hsl.hcg = function(n) {
  const t = n[1] / 100, e = n[2] / 100, r = e < 0.5 ? 2 * t * e : 2 * t * (1 - e);
  let i = 0;
  return r < 1 && (i = (e - 0.5 * r) / (1 - r)), [n[0], r * 100, i * 100];
};
M.hsv.hcg = function(n) {
  const t = n[1] / 100, e = n[2] / 100, r = t * e;
  let i = 0;
  return r < 1 && (i = (e - r) / (1 - r)), [n[0], r * 100, i * 100];
};
M.hcg.rgb = function(n) {
  const t = n[0] / 360, e = n[1] / 100, r = n[2] / 100;
  if (e === 0)
    return [r * 255, r * 255, r * 255];
  const i = [0, 0, 0], s = t % 1 * 6, o = s % 1, a = 1 - o;
  let l = 0;
  switch (Math.floor(s)) {
    case 0:
      i[0] = 1, i[1] = o, i[2] = 0;
      break;
    case 1:
      i[0] = a, i[1] = 1, i[2] = 0;
      break;
    case 2:
      i[0] = 0, i[1] = 1, i[2] = o;
      break;
    case 3:
      i[0] = 0, i[1] = a, i[2] = 1;
      break;
    case 4:
      i[0] = o, i[1] = 0, i[2] = 1;
      break;
    default:
      i[0] = 1, i[1] = 0, i[2] = a;
  }
  return l = (1 - e) * r, [
    (e * i[0] + l) * 255,
    (e * i[1] + l) * 255,
    (e * i[2] + l) * 255
  ];
};
M.hcg.hsv = function(n) {
  const t = n[1] / 100, e = n[2] / 100, r = t + e * (1 - t);
  let i = 0;
  return r > 0 && (i = t / r), [n[0], i * 100, r * 100];
};
M.hcg.hsl = function(n) {
  const t = n[1] / 100, r = n[2] / 100 * (1 - t) + 0.5 * t;
  let i = 0;
  return r > 0 && r < 0.5 ? i = t / (2 * r) : r >= 0.5 && r < 1 && (i = t / (2 * (1 - r))), [n[0], i * 100, r * 100];
};
M.hcg.hwb = function(n) {
  const t = n[1] / 100, e = n[2] / 100, r = t + e * (1 - t);
  return [n[0], (r - t) * 100, (1 - r) * 100];
};
M.hwb.hcg = function(n) {
  const t = n[1] / 100, r = 1 - n[2] / 100, i = r - t;
  let s = 0;
  return i < 1 && (s = (r - i) / (1 - i)), [n[0], i * 100, s * 100];
};
M.apple.rgb = function(n) {
  return [n[0] / 65535 * 255, n[1] / 65535 * 255, n[2] / 65535 * 255];
};
M.rgb.apple = function(n) {
  return [n[0] / 255 * 65535, n[1] / 255 * 65535, n[2] / 255 * 65535];
};
M.gray.rgb = function(n) {
  return [n[0] / 100 * 255, n[0] / 100 * 255, n[0] / 100 * 255];
};
M.gray.hsl = function(n) {
  return [0, 0, n[0]];
};
M.gray.hsv = M.gray.hsl;
M.gray.hwb = function(n) {
  return [0, 100, n[0]];
};
M.gray.cmyk = function(n) {
  return [0, 0, 0, n[0]];
};
M.gray.lab = function(n) {
  return [n[0], 0, 0];
};
M.gray.hex = function(n) {
  const t = Math.round(n[0] / 100 * 255) & 255, r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
M.rgb.gray = function(n) {
  return [(n[0] + n[1] + n[2]) / 3 / 255 * 100];
};
const ir = Rn;
function mo() {
  const n = {}, t = Object.keys(ir);
  for (let e = t.length, r = 0; r < e; r++)
    n[t[r]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return n;
}
function yo(n) {
  const t = mo(), e = [n];
  for (t[n].distance = 0; e.length; ) {
    const r = e.pop(), i = Object.keys(ir[r]);
    for (let s = i.length, o = 0; o < s; o++) {
      const a = i[o], l = t[a];
      l.distance === -1 && (l.distance = t[r].distance + 1, l.parent = r, e.unshift(a));
    }
  }
  return t;
}
function vo(n, t) {
  return function(e) {
    return t(n(e));
  };
}
function bo(n, t) {
  const e = [t[n].parent, n];
  let r = ir[t[n].parent][n], i = t[n].parent;
  for (; t[i].parent; )
    e.unshift(t[i].parent), r = vo(ir[t[i].parent][i], r), i = t[i].parent;
  return r.conversion = e, r;
}
var xo = function(n) {
  const t = yo(n), e = {}, r = Object.keys(t);
  for (let i = r.length, s = 0; s < i; s++) {
    const o = r[s];
    t[o].parent !== null && (e[o] = bo(o, t));
  }
  return e;
};
const zr = Rn, wo = xo, se = {}, ko = Object.keys(zr);
function To(n) {
  const t = function(...e) {
    const r = e[0];
    return r == null ? r : (r.length > 1 && (e = r), n(e));
  };
  return "conversion" in n && (t.conversion = n.conversion), t;
}
function So(n) {
  const t = function(...e) {
    const r = e[0];
    if (r == null)
      return r;
    r.length > 1 && (e = r);
    const i = n(e);
    if (typeof i == "object")
      for (let s = i.length, o = 0; o < s; o++)
        i[o] = Math.round(i[o]);
    return i;
  };
  return "conversion" in n && (t.conversion = n.conversion), t;
}
ko.forEach((n) => {
  se[n] = {}, Object.defineProperty(se[n], "channels", { value: zr[n].channels }), Object.defineProperty(se[n], "labels", { value: zr[n].labels });
  const t = wo(n);
  Object.keys(t).forEach((r) => {
    const i = t[r];
    se[n][r] = So(i), se[n][r].raw = To(i);
  });
});
var Mo = se;
const oe = po, it = Mo, En = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], Fr = {};
for (const n of Object.keys(it))
  Fr[[...it[n].labels].sort().join("")] = n;
const nr = {};
function Y(n, t) {
  if (!(this instanceof Y))
    return new Y(n, t);
  if (t && t in En && (t = null), t && !(t in it))
    throw new Error("Unknown model: " + t);
  let e, r;
  if (n == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (n instanceof Y)
    this.model = n.model, this.color = [...n.color], this.valpha = n.valpha;
  else if (typeof n == "string") {
    const i = oe.get(n);
    if (i === null)
      throw new Error("Unable to parse color from string: " + n);
    this.model = i.model, r = it[this.model].channels, this.color = i.value.slice(0, r), this.valpha = typeof i.value[r] == "number" ? i.value[r] : 1;
  } else if (n.length > 0) {
    this.model = t || "rgb", r = it[this.model].channels;
    const i = Array.prototype.slice.call(n, 0, r);
    this.color = Rr(i, r), this.valpha = typeof n[r] == "number" ? n[r] : 1;
  } else if (typeof n == "number")
    this.model = "rgb", this.color = [
      n >> 16 & 255,
      n >> 8 & 255,
      n & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const i = Object.keys(n);
    "alpha" in n && (i.splice(i.indexOf("alpha"), 1), this.valpha = typeof n.alpha == "number" ? n.alpha : 0);
    const s = i.sort().join("");
    if (!(s in Fr))
      throw new Error("Unable to parse color from object: " + JSON.stringify(n));
    this.model = Fr[s];
    const { labels: o } = it[this.model], a = [];
    for (e = 0; e < o.length; e++)
      a.push(n[o[e]]);
    this.color = Rr(a);
  }
  if (nr[this.model])
    for (r = it[this.model].channels, e = 0; e < r; e++) {
      const i = nr[this.model][e];
      i && (this.color[e] = i(this.color[e]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
Y.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(n) {
    let t = this.model in oe.to ? this : this.rgb();
    t = t.round(typeof n == "number" ? n : 1);
    const e = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return oe.to[t.model](e);
  },
  percentString(n) {
    const t = this.rgb().round(typeof n == "number" ? n : 1), e = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return oe.to.rgb.percent(e);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const n = {}, { channels: t } = it[this.model], { labels: e } = it[this.model];
    for (let r = 0; r < t; r++)
      n[e[r]] = this.color[r];
    return this.valpha !== 1 && (n.alpha = this.valpha), n;
  },
  unitArray() {
    const n = this.rgb().color;
    return n[0] /= 255, n[1] /= 255, n[2] /= 255, this.valpha !== 1 && n.push(this.valpha), n;
  },
  unitObject() {
    const n = this.rgb().object();
    return n.r /= 255, n.g /= 255, n.b /= 255, this.valpha !== 1 && (n.alpha = this.valpha), n;
  },
  round(n) {
    return n = Math.max(n || 0, 0), new Y([...this.color.map(Oo(n)), this.valpha], this.model);
  },
  alpha(n) {
    return n !== void 0 ? new Y([...this.color, Math.max(0, Math.min(1, n))], this.model) : this.valpha;
  },
  // Rgb
  red: B("rgb", 0, V(255)),
  green: B("rgb", 1, V(255)),
  blue: B("rgb", 2, V(255)),
  hue: B(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (n) => (n % 360 + 360) % 360),
  saturationl: B("hsl", 1, V(100)),
  lightness: B("hsl", 2, V(100)),
  saturationv: B("hsv", 1, V(100)),
  value: B("hsv", 2, V(100)),
  chroma: B("hcg", 1, V(100)),
  gray: B("hcg", 2, V(100)),
  white: B("hwb", 1, V(100)),
  wblack: B("hwb", 2, V(100)),
  cyan: B("cmyk", 0, V(100)),
  magenta: B("cmyk", 1, V(100)),
  yellow: B("cmyk", 2, V(100)),
  black: B("cmyk", 3, V(100)),
  x: B("xyz", 0, V(95.047)),
  y: B("xyz", 1, V(100)),
  z: B("xyz", 2, V(108.833)),
  l: B("lab", 0, V(100)),
  a: B("lab", 1),
  b: B("lab", 2),
  keyword(n) {
    return n !== void 0 ? new Y(n) : it[this.model].keyword(this.color);
  },
  hex(n) {
    return n !== void 0 ? new Y(n) : oe.to.hex(this.rgb().round().color);
  },
  hexa(n) {
    if (n !== void 0)
      return new Y(n);
    const t = this.rgb().round().color;
    let e = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return e.length === 1 && (e = "0" + e), oe.to.hex(t) + e;
  },
  rgbNumber() {
    const n = this.rgb().color;
    return (n[0] & 255) << 16 | (n[1] & 255) << 8 | n[2] & 255;
  },
  luminosity() {
    const n = this.rgb().color, t = [];
    for (const [e, r] of n.entries()) {
      const i = r / 255;
      t[e] = i <= 0.04045 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  },
  contrast(n) {
    const t = this.luminosity(), e = n.luminosity();
    return t > e ? (t + 0.05) / (e + 0.05) : (e + 0.05) / (t + 0.05);
  },
  level(n) {
    const t = this.contrast(n);
    return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
  },
  isDark() {
    const n = this.rgb().color;
    return (n[0] * 2126 + n[1] * 7152 + n[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const n = this.rgb();
    for (let t = 0; t < 3; t++)
      n.color[t] = 255 - n.color[t];
    return n;
  },
  lighten(n) {
    const t = this.hsl();
    return t.color[2] += t.color[2] * n, t;
  },
  darken(n) {
    const t = this.hsl();
    return t.color[2] -= t.color[2] * n, t;
  },
  saturate(n) {
    const t = this.hsl();
    return t.color[1] += t.color[1] * n, t;
  },
  desaturate(n) {
    const t = this.hsl();
    return t.color[1] -= t.color[1] * n, t;
  },
  whiten(n) {
    const t = this.hwb();
    return t.color[1] += t.color[1] * n, t;
  },
  blacken(n) {
    const t = this.hwb();
    return t.color[2] += t.color[2] * n, t;
  },
  grayscale() {
    const n = this.rgb().color, t = n[0] * 0.3 + n[1] * 0.59 + n[2] * 0.11;
    return Y.rgb(t, t, t);
  },
  fade(n) {
    return this.alpha(this.valpha - this.valpha * n);
  },
  opaquer(n) {
    return this.alpha(this.valpha + this.valpha * n);
  },
  rotate(n) {
    const t = this.hsl();
    let e = t.color[0];
    return e = (e + n) % 360, e = e < 0 ? 360 + e : e, t.color[0] = e, t;
  },
  mix(n, t) {
    if (!n || !n.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof n);
    const e = n.rgb(), r = this.rgb(), i = t === void 0 ? 0.5 : t, s = 2 * i - 1, o = e.alpha() - r.alpha(), a = ((s * o === -1 ? s : (s + o) / (1 + s * o)) + 1) / 2, l = 1 - a;
    return Y.rgb(
      a * e.red() + l * r.red(),
      a * e.green() + l * r.green(),
      a * e.blue() + l * r.blue(),
      e.alpha() * i + r.alpha() * (1 - i)
    );
  }
};
for (const n of Object.keys(it)) {
  if (En.includes(n))
    continue;
  const { channels: t } = it[n];
  Y.prototype[n] = function(...e) {
    return this.model === n ? new Y(this) : e.length > 0 ? new Y(e, n) : new Y([...Co(it[this.model][n].raw(this.color)), this.valpha], n);
  }, Y[n] = function(...e) {
    let r = e[0];
    return typeof r == "number" && (r = Rr(e, t)), new Y(r, n);
  };
}
function Po(n, t) {
  return Number(n.toFixed(t));
}
function Oo(n) {
  return function(t) {
    return Po(t, n);
  };
}
function B(n, t, e) {
  n = Array.isArray(n) ? n : [n];
  for (const r of n)
    (nr[r] || (nr[r] = []))[t] = e;
  return n = n[0], function(r) {
    let i;
    return r !== void 0 ? (e && (r = e(r)), i = this[n](), i.color[t] = r, i) : (i = this[n]().color[t], e && (i = e(i)), i);
  };
}
function V(n) {
  return function(t) {
    return Math.max(0, Math.min(n, t));
  };
}
function Co(n) {
  return Array.isArray(n) ? n : [n];
}
function Rr(n, t) {
  for (let e = 0; e < t; e++)
    typeof n[e] != "number" && (n[e] = 0);
  return n;
}
var Ao = Y;
const di = /* @__PURE__ */ lo(Ao), Do = ["width", "height"], zo = ["stroke-width", "stroke"], Fo = ["stroke-width", "stroke"], Ro = /* @__PURE__ */ ee({
  __name: "add",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "currentColor" },
    strokeWidth: { default: 10 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "currentColor" },
    animation: { type: Boolean, default: !0 }
  },
  setup(n) {
    const t = n, e = j(null), r = j(null), i = j(null);
    return be(() => {
      var u, h, _, f;
      var s;
      const o = r.value, a = i.value;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var l = e.value;
        for (let d = 0; d < t.parentDeep; d++)
          l = l.parentNode;
        s = l;
      } else
        t.targer && (s = document.getElementById(t.targer));
      if (s == null && console.error("targer is undefined"), t.animation) {
        const d = Pt.timeline({ paused: !0 });
        let m = (h = (u = di(t.color)) == null ? void 0 : u.alpha(0.1)) == null ? void 0 : h.toString(), c = (f = (_ = di(t.color)) == null ? void 0 : _.alpha(0.7)) == null ? void 0 : f.toString();
        d.fromTo(o, { attr: { x1: "40", x2: "40", stroke: m, "stroke-linecap": "butt" }, transformOrigin: "center" }, { attr: { x1: "10", x2: "70", stroke: c, "stroke-linecap": t.linecap }, duration: t.duration, rotation: 360 }), d.fromTo(a, { attr: { x1: "40", y1: "40", x2: "40", y2: "40", stroke: m, "stroke-linecap": "butt" }, transformOrigin: "center" }, { attr: { x1: "40", y1: "10", x2: "40", y2: "70", stroke: c, "stroke-linecap": t.linecap }, duration: t.duration, rotation: 360 }, 0), s == null || s.addEventListener("mouseenter", () => {
          d.play();
        }), s == null || s.addEventListener("mouseleave", () => {
          d.reverse();
        });
      }
    }), (s, o) => (St(), Nt("svg", {
      ref_key: "root",
      ref: e,
      class: "root",
      width: t.width,
      height: t.height,
      viewBox: "0 0 80 80",
      style: qt({ rotate: t.rotate + "deg", "--hover-color": t.hoverColor })
    }, [
      ot("line", {
        ref_key: "line1",
        ref: r,
        class: "line1",
        x1: "10",
        y1: "40",
        x2: "70",
        y2: "40",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, zo),
      ot("line", {
        ref_key: "line2",
        ref: i,
        x1: "40",
        y1: "10",
        x2: "40",
        y2: "70",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, Fo)
    ], 12, Do));
  }
});
const Ma = /* @__PURE__ */ ee({
  __name: "close",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "currentColor" },
    strokeWidth: { default: 10 },
    rotate: { default: 45 },
    parentDeep: {},
    width: {},
    height: {},
    linecap: {},
    hoverColor: {},
    animation: { type: Boolean, default: !0 }
  },
  setup(n) {
    const t = n;
    return (e, r) => (St(), Xn(Ro, {
      rotate: t.rotate,
      targer: t.targer,
      color: t.color,
      "stroke-width": t.strokeWidth,
      duration: t.duration,
      parentDeep: t.parentDeep,
      linecap: t.linecap,
      hoverColor: t.hoverColor,
      width: t.width,
      height: t.height,
      animation: t.animation
    }, null, 8, ["rotate", "targer", "color", "stroke-width", "duration", "parentDeep", "linecap", "hoverColor", "width", "height", "animation"]));
  }
});
function lr(n) {
  if (!n)
    throw new Error("svg is not defined");
  n && (n.addEventListener("mouseenter", () => {
    n.classList.add("hover");
  }), n.addEventListener("mouseleave", () => {
    n.classList.remove("hover");
  }));
}
const Eo = ["width", "height"], No = ["stroke", "stroke-width"], Lo = ["stroke", "stroke-width"], Bo = /* @__PURE__ */ ee({
  __name: "edit",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "currentColor" },
    strokeWidth: { default: 50 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "currentColor" },
    animation: { type: Boolean, default: !0 }
  },
  setup(n) {
    const t = n, e = j(null), r = j(null), i = j(null);
    return be(() => {
      var s;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var o = e.value;
        for (let a = 0; a < t.parentDeep; a++)
          o = o.parentNode;
        s = o;
      } else
        t.targer && (s = document.getElementById(t.targer));
      if (s == null && console.error("targer is undefined"), e.value && lr(e.value), t.animation && s) {
        const a = Pt.timeline({ paused: !0 });
        let l = r.value.getTotalLength(), u = `${l} ${l}`, h = l;
        a.fromTo(r.value, { attr: { stroke: t.color }, opacity: 0.1, strokeDashoffset: h, strokeDasharray: u, transformOrigin: "center" }, { attr: { stroke: t.color }, opacity: 1, strokeDashoffset: 0, duration: t.duration }), a.fromTo(i.value, { attr: { stroke: t.color }, strokeDashoffset: h, strokeDasharray: u, opacity: 0.1, transformOrigin: "center" }, { attr: { stroke: t.color }, opacity: 1, strokeDashoffset: 0, duration: t.duration }, 0), s == null || s.addEventListener("mouseenter", () => {
          a.play();
        }), s == null || s.addEventListener("mouseleave", () => {
          a.reverse();
        });
      }
    }), (s, o) => (St(), Nt("svg", {
      ref_key: "root",
      ref: e,
      width: t.width,
      height: t.height,
      viewBox: "0 0 1024 924",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:svg": "http://www.w3.org/2000/svg",
      class: "icon root",
      version: "1.1",
      style: qt({ "--hover-color": t.hoverColor })
    }, [
      ot("path", {
        ref_key: "line1",
        ref: r,
        d: "M611,94L266,97c-25,7-44,34-43,84l5,574c1,34-3,34,31,36l546,3c18,1,14,-7,15,-27l0,-324",
        fill: "none",
        id: "svg_1",
        stroke: t.color,
        "stroke-linecap": "round",
        "stroke-width": `${t.strokeWidth}px`
      }, null, 8, No),
      ot("path", {
        ref_key: "line2",
        ref: i,
        d: "m847.74,188.67q1.9,4.54 3.09,10.58t1.18,12.6t-2.38,13.1t-7.62,12.6q-5.71,6.05 -10.24,10.58t-7.86,8.07q-3.81,4.03 -7.14,7.06l-89.09,-94.25q5.71,-5.54 13.58,-13.36t13.1,-12.35q6.67,-5.55 13.81,-7.81t14.06,-2.02t13.34,2.27t11.2,4.53q10,5.55 22.16,19.41t18.82,28.98l-0.01,0.01zm-371.12,245.96q2.85,-3.02 13.34,-14.37t26.2,-27.97l34.77,-36.8l38.59,-40.83l102.43,-108.37l89.09,94.75l-102.43,108.37l-38.12,40.83q-19.05,19.66 -34.3,36.03t-25.25,26.96t-11.91,12.09q-4.76,4.54 -10.96,9.57t-12.87,8.07q-6.67,3.53 -19.54,8.56t-26.92,9.83t-26.68,8.32t-18.82,4.54q-12.87,1.51 -17.14,-4.03t-2.38,-18.65q0.95,-7.06 4.53,-20.41t7.62,-27.72t7.86,-26.46t6.19,-16.63q2.86,-7.06 6.44,-12.86t10.24,-12.86l0,0.02l0.02,0.02z",
        fill: "none",
        id: "svg_2",
        stroke: t.color,
        "stroke-width": `${t.strokeWidth - 10}px`
      }, null, 8, Lo)
    ], 12, Eo));
  }
});
const Ye = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [r, i] of t)
    e[r] = i;
  return e;
}, Pa = /* @__PURE__ */ Ye(Bo, [["__scopeId", "data-v-5e3cb0ad"]]), Io = ["width", "height"], $o = ["fill"], qo = ["fill"], Vo = ["fill"], Yo = /* @__PURE__ */ ee({
  __name: "more",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "currentColor" },
    strokeWidth: { default: 10 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "currentColor" },
    animation: { type: Boolean, default: !0 }
  },
  setup(n, { expose: t }) {
    const e = n, r = j(null), i = j(null), s = j(null), o = j(null);
    return be(() => {
      var a;
      if (e.parentDeep != null && e.parentDeep > 0 && r.value != null) {
        var l = r.value;
        for (let u = 0; u < e.parentDeep; u++)
          l = l.parentNode;
        a = l;
      } else
        e.targer && (a = document.getElementById(e.targer));
      if (a == null && console.error("targer is undefined"), r.value && lr(r.value), e.animation && a) {
        const u = Pt.timeline({ paused: !0 });
        u.fromTo(s.value, { opacity: 0, transformOrigin: "center" }, { opacity: 1, duration: e.duration, fill: e.color }), u.fromTo(i.value, { x: 280, opacity: 0 }, { x: -60, fill: e.color, opacity: 1, duration: e.duration }, 0), u.fromTo(o.value, { x: -280, opacity: 0 }, { x: 60, fill: e.color, opacity: 1, duration: e.duration }, 0), a.addEventListener("mouseenter", () => {
          u.play();
        }), a.addEventListener("mouseleave", () => {
          u.reverse();
        });
      }
    }), t({
      point1: i,
      point2: s,
      point3: o
    }), (a, l) => (St(), Nt("svg", {
      ref_key: "root",
      ref: r,
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      id: "root",
      style: qt({ "--hover-color": e.hoverColor })
    }, [
      ot("path", {
        id: "nihao",
        class: "rare-more",
        ref_key: "point1",
        ref: i,
        d: "M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z",
        fill: e.color,
        "p-id": "2443"
      }, null, 8, $o),
      ot("path", {
        class: "rare-more",
        ref_key: "point2",
        ref: s,
        d: "M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z",
        fill: e.color,
        "p-id": "2444"
      }, null, 8, qo),
      ot("path", {
        class: "rare-more",
        ref_key: "point3",
        ref: o,
        d: "M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z",
        fill: e.color,
        "p-id": "2445"
      }, null, 8, Vo)
    ], 12, Io));
  }
});
const Oa = /* @__PURE__ */ Ye(Yo, [["__scopeId", "data-v-c7bd89b1"]]), Uo = /* @__PURE__ */ ee({
  __name: "tray",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "#f3f3f3" },
    strokeWidth: { default: 10 },
    parentDeep: {},
    width: {},
    height: {},
    linecap: { default: "butt" },
    padding: { default: "3px" }
  },
  setup(n) {
    const t = n, e = j(null), r = j(null), i = j(null);
    return be(() => {
      const s = r.value, o = i.value, a = Pt.timeline({ paused: !0 });
      a.fromTo(s, { transformOrigin: "center", scale: 0 }, { duration: t.duration, scale: 1 }), o == null || o.addEventListener("mouseenter", () => {
        a.play();
      }), o == null || o.addEventListener("mouseleave", () => {
        a.reverse();
      });
    }), (s, o) => (St(), Nt("cite", {
      class: "tray",
      ref_key: "tray",
      ref: e,
      style: qt({ padding: t.padding })
    }, [
      ot("div", {
        class: "bg",
        ref_key: "bg",
        ref: r,
        style: qt({
          backgroundColor: t.color,
          borderRadius: t.linecap == "round" ? "5px" : "0px"
        })
      }, null, 4),
      ot("div", {
        ref_key: "slotTarget",
        ref: i,
        style: { height: "inherit", "line-height": "0px" }
      }, [
        Ci(s.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 4));
  }
});
const Ca = /* @__PURE__ */ Ye(Uo, [["__scopeId", "data-v-d341a45c"]]), Xo = ["width", "height"], Go = ["fill"], Wo = /* @__PURE__ */ ee({
  __name: "delete",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "currentColor" },
    strokeWidth: { default: 10 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "currentColor" },
    animation: { type: Boolean, default: !0 }
  },
  setup(n) {
    const t = n, e = j(null);
    return be(() => {
      var r;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var i = e.value;
        for (let s = 0; s < t.parentDeep; s++)
          i = i.parentNode;
        r = i;
      } else
        t.targer && (r = document.getElementById(t.targer));
      if (r == null && console.error("targer is undefined"), e.value && lr(e.value), t.animation && r) {
        const s = Pt.timeline({ paused: !0 });
        s.fromTo(e.value, { opacity: 0.1, rotateY: 90, transformOrigin: "center" }, { opacity: 1, rotateY: 0, duration: t.duration, fill: t.color }), r.addEventListener("mouseenter", () => {
          s.play();
        }), r.addEventListener("mouseleave", () => {
          s.reverse();
        });
      }
    }), (r, i) => (St(), Nt("svg", {
      ref_key: "root",
      ref: e,
      class: "root",
      viewBox: "0 0 800 850",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      calss: "root",
      width: t.width,
      height: t.height,
      style: qt({ "--hover-color": t.hoverColor })
    }, [
      ot("path", {
        fill: t.color,
        d: "M 249.6 99.2 v 64 h 320 v -64 H 249.6 z m 416 144 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 39.7648 -32.2352 72 -72 72 H 201.6 c -39.7648 0 -72 -32.2352 -72 -72 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 13.2552 10.7448 24 24 24 h 416 c 13.2552 0 24 -10.7448 24 -24 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 z m -344 32 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z m 176 0 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z M 577.6 51.2 c 22.0912 0 40 17.9088 40 40 v 72 h 126.4 c 13.2552 0 24 10.7448 24 24 c 0 13.2552 -10.7448 24 -24 24 H 75.2 c -13.2552 0 -24 -10.7448 -24 -24 c 0 -13.2552 10.7448 -24 24 -24 h 126.4 v -72 c 0 -22.0912 17.9088 -40 40 -40 h 336 z"
      }, null, 8, Go)
    ], 12, Xo));
  }
});
const Aa = /* @__PURE__ */ Ye(Wo, [["__scopeId", "data-v-1fa4d80e"]]);
/*!
 * paths 3.6.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var jo = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Ho = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Qo = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, Ko = /(^[#\.][a-z]|[a-y][a-z])/i, Zo = Math.PI / 180, Ge = Math.sin, We = Math.cos, ze = Math.abs, ke = Math.sqrt, pi = function(t) {
  return typeof t == "string";
}, Nn = function(t) {
  return typeof t == "number";
}, gi = 1e5, At = function(t) {
  return Math.round(t * gi) / gi || 0;
};
function Jo(n) {
  n = pi(n) && Ko.test(n) && document.querySelector(n) || n;
  var t = n.getAttribute ? n : 0, e;
  return t && (n = n.getAttribute("d")) ? (t._gsPath || (t._gsPath = {}), e = t._gsPath[n], e && !e._dirty ? e : t._gsPath[n] = $t(n)) : n ? pi(n) ? $t(n) : Nn(n[0]) ? [n] : n : console.warn("Expecting a <path> element or an SVG path data string");
}
function Me(n) {
  var t = 0, e;
  for (n.reverse(); t < n.length; t += 2)
    e = n[t], n[t] = n[t + 1], n[t + 1] = e;
  n.reversed = !n.reversed;
}
var ta = function(t, e) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = [].slice.call(t.attributes), s = i.length, o;
  for (e = "," + e + ","; --s > -1; )
    o = i[s].nodeName.toLowerCase(), e.indexOf("," + o + ",") < 0 && r.setAttributeNS(null, o, i[s].nodeValue);
  return r;
}, ea = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, ra = function(t, e) {
  for (var r = e ? e.split(",") : [], i = {}, s = r.length; --s > -1; )
    i[r[s]] = +t.getAttribute(r[s]) || 0;
  return i;
};
function Ln(n, t) {
  var e = n.tagName.toLowerCase(), r = 0.552284749831, i, s, o, a, l, u, h, _, f, d, m, c, g, p, x, y, v, b, w, T, S, k;
  return e === "path" || !n.getBBox ? n : (u = ta(n, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), k = ra(n, ea[e]), e === "rect" ? (a = k.rx, l = k.ry || a, s = k.x, o = k.y, d = k.width - a * 2, m = k.height - l * 2, a || l ? (c = s + a * (1 - r), g = s + a, p = g + d, x = p + a * r, y = p + a, v = o + l * (1 - r), b = o + l, w = b + m, T = w + l * r, S = w + l, i = "M" + y + "," + b + " V" + w + " C" + [y, T, x, S, p, S, p - (p - g) / 3, S, g + (p - g) / 3, S, g, S, c, S, s, T, s, w, s, w - (w - b) / 3, s, b + (w - b) / 3, s, b, s, v, c, o, g, o, g + (p - g) / 3, o, p - (p - g) / 3, o, p, o, x, o, y, v, y, b].join(",") + "z") : i = "M" + (s + d) + "," + o + " v" + m + " h" + -d + " v" + -m + " h" + d + "z") : e === "circle" || e === "ellipse" ? (e === "circle" ? (a = l = k.r, _ = a * r) : (a = k.rx, l = k.ry, _ = l * r), s = k.cx, o = k.cy, h = a * r, i = "M" + (s + a) + "," + o + " C" + [s + a, o + _, s + h, o + l, s, o + l, s - h, o + l, s - a, o + _, s - a, o, s - a, o - _, s - h, o - l, s, o - l, s + h, o - l, s + a, o - _, s + a, o].join(",") + "z") : e === "line" ? i = "M" + k.x1 + "," + k.y1 + " L" + k.x2 + "," + k.y2 : (e === "polyline" || e === "polygon") && (f = (n.getAttribute("points") + "").match(Ho) || [], s = f.shift(), o = f.shift(), i = "M" + s + "," + o + " L" + f.join(","), e === "polygon" && (i += "," + s + "," + o + "z")), u.setAttribute("d", ce(u._gsRawPath = $t(i))), t && n.parentNode && (n.parentNode.insertBefore(u, n), n.parentNode.removeChild(n)), u);
}
function ia(n, t, e, r, i, s, o, a, l) {
  if (!(n === a && t === l)) {
    e = ze(e), r = ze(r);
    var u = i % 360 * Zo, h = We(u), _ = Ge(u), f = Math.PI, d = f * 2, m = (n - a) / 2, c = (t - l) / 2, g = h * m + _ * c, p = -_ * m + h * c, x = g * g, y = p * p, v = x / (e * e) + y / (r * r);
    v > 1 && (e = ke(v) * e, r = ke(v) * r);
    var b = e * e, w = r * r, T = (b * w - b * y - w * x) / (b * y + w * x);
    T < 0 && (T = 0);
    var S = (s === o ? -1 : 1) * ke(T), k = S * (e * p / r), P = S * -(r * g / e), O = (n + a) / 2, E = (t + l) / 2, N = O + (h * k - _ * P), L = E + (_ * k + h * P), D = (g - k) / e, F = (p - P) / r, X = (-g - k) / e, ut = (-p - P) / r, mt = D * D + F * F, Ct = (F < 0 ? -1 : 1) * Math.acos(D / ke(mt)), G = (D * ut - F * X < 0 ? -1 : 1) * Math.acos((D * X + F * ut) / ke(mt * (X * X + ut * ut)));
    isNaN(G) && (G = f), !o && G > 0 ? G -= d : o && G < 0 && (G += d), Ct %= d, G %= d;
    var xe = Math.ceil(ze(G) / (d / 4)), q = [], ht = G / xe, Ue = 4 / 3 * Ge(ht / 2) / (1 + We(ht / 2)), qn = h * e, Vn = _ * e, Yn = _ * -r, Un = h * r, et;
    for (et = 0; et < xe; et++)
      i = Ct + et * ht, g = We(i), p = Ge(i), D = We(i += ht), F = Ge(i), q.push(g - Ue * p, p + Ue * g, D + Ue * F, F - Ue * D, D, F);
    for (et = 0; et < q.length; et += 2)
      g = q[et], p = q[et + 1], q[et] = g * qn + p * Yn + N, q[et + 1] = g * Vn + p * Un + L;
    return q[et - 2] = a, q[et - 1] = l, q;
  }
}
function $t(n) {
  var t = (n + "").replace(Qo, function(k) {
    var P = +k;
    return P < 1e-4 && P > -1e-4 ? 0 : P;
  }).match(jo) || [], e = [], r = 0, i = 0, s = 2 / 3, o = t.length, a = 0, l = "ERROR: malformed path: " + n, u, h, _, f, d, m, c, g, p, x, y, v, b, w, T, S = function(P, O, E, N) {
    x = (E - P) / 3, y = (N - O) / 3, c.push(P + x, O + y, E - x, N - y, E, N);
  };
  if (!n || !isNaN(t[0]) || isNaN(t[1]))
    return console.log(l), e;
  for (u = 0; u < o; u++)
    if (b = d, isNaN(t[u]) ? (d = t[u].toUpperCase(), m = d !== t[u]) : u--, _ = +t[u + 1], f = +t[u + 2], m && (_ += r, f += i), u || (g = _, p = f), d === "M")
      c && (c.length < 8 ? e.length -= 1 : a += c.length), r = g = _, i = p = f, c = [_, f], e.push(c), u += 2, d = "L";
    else if (d === "C")
      c || (c = [0, 0]), m || (r = i = 0), c.push(_, f, r + t[u + 3] * 1, i + t[u + 4] * 1, r += t[u + 5] * 1, i += t[u + 6] * 1), u += 6;
    else if (d === "S")
      x = r, y = i, (b === "C" || b === "S") && (x += r - c[c.length - 4], y += i - c[c.length - 3]), m || (r = i = 0), c.push(x, y, _, f, r += t[u + 3] * 1, i += t[u + 4] * 1), u += 4;
    else if (d === "Q")
      x = r + (_ - r) * s, y = i + (f - i) * s, m || (r = i = 0), r += t[u + 3] * 1, i += t[u + 4] * 1, c.push(x, y, r + (_ - r) * s, i + (f - i) * s, r, i), u += 4;
    else if (d === "T")
      x = r - c[c.length - 4], y = i - c[c.length - 3], c.push(r + x, i + y, _ + (r + x * 1.5 - _) * s, f + (i + y * 1.5 - f) * s, r = _, i = f), u += 2;
    else if (d === "H")
      S(r, i, r = _, i), u += 1;
    else if (d === "V")
      S(r, i, r, i = _ + (m ? i - r : 0)), u += 1;
    else if (d === "L" || d === "Z")
      d === "Z" && (_ = g, f = p, c.closed = !0), (d === "L" || ze(r - _) > 0.5 || ze(i - f) > 0.5) && (S(r, i, _, f), d === "L" && (u += 2)), r = _, i = f;
    else if (d === "A") {
      if (w = t[u + 4], T = t[u + 5], x = t[u + 6], y = t[u + 7], h = 7, w.length > 1 && (w.length < 3 ? (y = x, x = T, h--) : (y = T, x = w.substr(2), h -= 2), T = w.charAt(1), w = w.charAt(0)), v = ia(r, i, +t[u + 1], +t[u + 2], +t[u + 3], +w, +T, (m ? r : 0) + x * 1, (m ? i : 0) + y * 1), u += h, v)
        for (h = 0; h < v.length; h++)
          c.push(v[h]);
      r = c[c.length - 2], i = c[c.length - 1];
    } else
      console.log(l);
  return u = c.length, u < 6 ? (e.pop(), u = 0) : c[0] === c[u - 2] && c[1] === c[u - 1] && (c.closed = !0), e.totalPoints = a + u, e;
}
function ce(n) {
  Nn(n[0]) && (n = [n]);
  var t = "", e = n.length, r, i, s, o;
  for (i = 0; i < e; i++) {
    for (o = n[i], t += "M" + At(o[0]) + "," + At(o[1]) + " C", r = o.length, s = 2; s < r; s++)
      t += At(o[s++]) + "," + At(o[s++]) + " " + At(o[s++]) + "," + At(o[s++]) + " " + At(o[s++]) + "," + At(o[s]) + " ";
    o.closed && (t += "z");
  }
  return t;
}
/*!
 * MorphSVGPlugin 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gt, Qr, Pe, Bn, Oe, In = function() {
  return gt || typeof window < "u" && (gt = window.gsap) && gt.registerPlugin && gt;
}, vr = function(t) {
  return typeof t == "function";
}, Kt = Math.atan2, mi = Math.cos, yi = Math.sin, Tt = Math.sqrt, ur = Math.PI, vi = ur * 2, na = ur * 0.3, sa = ur * 0.7, $n = 1e20, Ie = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, oa = /(^[#\.][a-z]|[a-y][a-z])/i, aa = /[achlmqstvz]/i, Et = function(t) {
  return console && console.warn(t);
}, la = 1, bi = function(t) {
  var e = t.length, r = 0, i = 0, s;
  for (s = 0; s < e; s++)
    r += t[s++], i += t[s];
  return [r / (e / 2), i / (e / 2)];
}, _e = function(t) {
  var e = t.length, r = t[0], i = r, s = t[1], o = s, a, l, u;
  for (u = 6; u < e; u += 6)
    a = t[u], l = t[u + 1], a > r ? r = a : a < i && (i = a), l > s ? s = l : l < o && (o = l);
  return t.centerX = (r + i) / 2, t.centerY = (s + o) / 2, t.size = (r - i) * (s - o);
}, Fe = function(t, e) {
  e === void 0 && (e = 3);
  for (var r = t.length, i = t[0][0], s = i, o = t[0][1], a = o, l = 1 / e, u, h, _, f, d, m, c, g, p, x, y, v, b, w, T, S; --r > -1; )
    for (d = t[r], u = d.length, f = 6; f < u; f += 6)
      for (p = d[f], x = d[f + 1], y = d[f + 2] - p, w = d[f + 3] - x, v = d[f + 4] - p, T = d[f + 5] - x, b = d[f + 6] - p, S = d[f + 7] - x, m = e; --m > -1; )
        c = l * m, g = 1 - c, h = (c * c * b + 3 * g * (c * v + g * y)) * c + p, _ = (c * c * S + 3 * g * (c * T + g * w)) * c + x, h > i ? i = h : h < s && (s = h), _ > o ? o = _ : _ < a && (a = _);
  return t.centerX = (i + s) / 2, t.centerY = (o + a) / 2, t.left = s, t.width = i - s, t.top = a, t.height = o - a, t.size = (i - s) * (o - a);
}, ua = function(t, e) {
  return e.length - t.length;
}, xi = function(t, e) {
  var r = t.size || _e(t), i = e.size || _e(e);
  return Math.abs(i - r) < (r + i) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : i - r;
}, wi = function(t, e) {
  var r = t.slice(0), i = t.length, s = i - 2, o, a;
  for (e = e | 0, o = 0; o < i; o++)
    a = (o + e) % s, t[o++] = r[a], t[o] = r[a + 1];
}, br = function(t, e, r, i, s) {
  var o = t.length, a = 0, l = o - 2, u, h, _, f;
  for (r *= 6, h = 0; h < o; h += 6)
    u = (h + r) % l, f = t[u] - (e[h] - i), _ = t[u + 1] - (e[h + 1] - s), a += Tt(_ * _ + f * f);
  return a;
}, ha = function(t, e, r) {
  var i = t.length, s = bi(t), o = bi(e), a = o[0] - s[0], l = o[1] - s[1], u = br(t, e, 0, a, l), h = 0, _, f, d;
  for (d = 6; d < i; d += 6)
    f = br(t, e, d / 6, a, l), f < u && (u = f, h = d);
  if (r)
    for (_ = t.slice(0), Me(_), d = 6; d < i; d += 6)
      f = br(_, e, d / 6, a, l), f < u && (u = f, h = -d);
  return h / 6;
}, fa = function(t, e, r) {
  for (var i = t.length, s = $n, o = 0, a = 0, l, u, h, _, f, d; --i > -1; )
    for (l = t[i], d = l.length, f = 0; f < d; f += 6)
      u = l[f] - e, h = l[f + 1] - r, _ = Tt(u * u + h * h), _ < s && (s = _, o = l[f], a = l[f + 1]);
  return [o, a];
}, ca = function(t, e, r, i, s, o) {
  var a = e.length, l = 0, u = Math.min(t.size || _e(t), e[r].size || _e(e[r])) * i, h = $n, _ = t.centerX + s, f = t.centerY + o, d, m, c, g, p;
  for (m = r; m < a && (d = e[m].size || _e(e[m]), !(d < u)); m++)
    c = e[m].centerX - _, g = e[m].centerY - f, p = Tt(c * c + g * g), p < h && (l = m, h = p);
  return p = e[l], e.splice(l, 1), p;
}, xr = function(t, e) {
  var r = 0, i = 0.999999, s = t.length, o = e / ((s - 2) / 6), a, l, u, h, _, f, d, m, c, g, p, x, y, v;
  for (y = 2; y < s; y += 6)
    for (r += o; r > i; )
      a = t[y - 2], l = t[y - 1], u = t[y], h = t[y + 1], _ = t[y + 2], f = t[y + 3], d = t[y + 4], m = t[y + 5], v = 1 / ((Math.floor(r) || 1) + 1), c = a + (u - a) * v, p = u + (_ - u) * v, c += (p - c) * v, p += (_ + (d - _) * v - p) * v, g = l + (h - l) * v, x = h + (f - h) * v, g += (x - g) * v, x += (f + (m - f) * v - x) * v, t.splice(
        y,
        4,
        a + (u - a) * v,
        //first control point
        l + (h - l) * v,
        c,
        //second control point
        g,
        c + (p - c) * v,
        //new fabricated anchor on line
        g + (x - g) * v,
        p,
        //third control point
        x,
        _ + (d - _) * v,
        //fourth control point
        f + (m - f) * v
      ), y += 6, s += 6, r--;
  return t;
}, Er = function(t, e, r, i, s) {
  var o = e.length - t.length, a = o > 0 ? e : t, l = o > 0 ? t : e, u = 0, h = i === "complexity" ? ua : xi, _ = i === "position" ? 0 : typeof i == "number" ? i : 0.8, f = l.length, d = typeof r == "object" && r.push ? r.slice(0) : [r], m = d[0] === "reverse" || d[0] < 0, c = r === "log", g, p, x, y, v, b, w;
  if (l[0]) {
    if (a.length > 1 && (t.sort(h), e.sort(h), b = a.size || Fe(a), b = l.size || Fe(l), b = a.centerX - l.centerX, w = a.centerY - l.centerY, h === xi))
      for (f = 0; f < l.length; f++)
        a.splice(f, 0, ca(l[f], a, f, _, b, w));
    if (o)
      for (o < 0 && (o = -o), a[0].length > l[0].length && xr(l[0], (a[0].length - l[0].length) / 6 | 0), f = l.length; u < o; )
        y = a[f].size || _e(a[f]), x = fa(l, a[f].centerX, a[f].centerY), y = x[0], v = x[1], l[f++] = [y, v, y, v, y, v, y, v], l.totalPoints += 8, u++;
    for (f = 0; f < t.length; f++)
      g = e[f], p = t[f], o = g.length - p.length, o < 0 ? xr(g, -o / 6 | 0) : o > 0 && xr(p, o / 6 | 0), m && s !== !1 && !p.reversed && Me(p), r = d[f] || d[f] === 0 ? d[f] : "auto", r && (p.closed || Math.abs(p[0] - p[p.length - 2]) < 0.5 && Math.abs(p[1] - p[p.length - 1]) < 0.5 ? r === "auto" || r === "log" ? (d[f] = r = ha(p, g, !f || s === !1), r < 0 && (m = !0, Me(p), r = -r), wi(p, r * 6)) : r !== "reverse" && (f && r < 0 && Me(p), wi(p, (r < 0 ? -r : r) * 6)) : !m && (r === "auto" && Math.abs(g[0] - p[0]) + Math.abs(g[1] - p[1]) + Math.abs(g[g.length - 2] - p[p.length - 2]) + Math.abs(g[g.length - 1] - p[p.length - 1]) > Math.abs(g[0] - p[p.length - 2]) + Math.abs(g[1] - p[p.length - 1]) + Math.abs(g[g.length - 2] - p[0]) + Math.abs(g[g.length - 1] - p[1]) || r % 2) ? (Me(p), d[f] = -1, m = !0) : r === "auto" ? d[f] = 0 : r === "reverse" && (d[f] = -1), p.closed !== g.closed && (p.closed = g.closed = !1));
    return c && Et("shapeIndex:[" + d.join(",") + "]"), t.shapeIndex = d, d;
  }
}, ki = function(t, e, r, i, s) {
  var o = $t(t[0]), a = $t(t[1]);
  Er(o, a, e || e === 0 ? e : "auto", r, s) && (t[0] = ce(o), t[1] = ce(a), (i === "log" || i === !0) && Et('precompile:["' + t[0] + '","' + t[1] + '"]'));
}, _a = function(t, e) {
  if (!e)
    return t;
  var r = t.match(Ie) || [], i = r.length, s = "", o, a, l;
  for (e === "reverse" ? (a = i - 1, o = -2) : (a = ((parseInt(e, 10) || 0) * 2 + 1 + i * 100) % i, o = 2), l = 0; l < i; l += 2)
    s += r[a - 1] + "," + r[a] + " ", a = (a + o) % i;
  return s;
}, Ti = function(t, e) {
  var r = 0, i = parseFloat(t[0]), s = parseFloat(t[1]), o = i + "," + s + " ", a = 0.999999, l, u, h, _, f, d, m;
  for (h = t.length, l = e * 0.5 / (h * 0.5 - 1), u = 0; u < h - 2; u += 2) {
    if (r += l, d = parseFloat(t[u + 2]), m = parseFloat(t[u + 3]), r > a)
      for (f = 1 / (Math.floor(r) + 1), _ = 1; r > a; )
        o += (i + (d - i) * f * _).toFixed(2) + "," + (s + (m - s) * f * _).toFixed(2) + " ", r--, _++;
    o += d + "," + m + " ", i = d, s = m;
  }
  return o;
}, Nr = function(t) {
  var e = t[0].match(Ie) || [], r = t[1].match(Ie) || [], i = r.length - e.length;
  i > 0 ? t[0] = Ti(e, i) : t[1] = Ti(r, -i);
}, da = function(t) {
  return isNaN(t) ? Nr : function(e) {
    Nr(e), e[1] = _a(e[1], parseInt(t, 10));
  };
}, pa = function(t, e, r) {
  var i = typeof t == "string", s, o;
  return (!i || oa.test(t) || (t.match(Ie) || []).length < 3) && (s = Qr(t)[0], s ? (o = (s.nodeName + "").toUpperCase(), e && o !== "PATH" && (s = Ln(s, !1), o = "PATH"), t = s.getAttribute(o === "PATH" ? "d" : "points") || "", s === r && (t = s.getAttributeNS(null, "data-original") || t)) : (Et("WARNING: invalid morph to: " + t), t = !1)), t;
}, Si = function(t, e) {
  for (var r = t.length, i = 0.2 * (e || 1), s, o, a, l, u, h, _, f, d, m, c, g; --r > -1; ) {
    for (o = t[r], c = o.isSmooth = o.isSmooth || [0, 0, 0, 0], g = o.smoothData = o.smoothData || [0, 0, 0, 0], c.length = 4, f = o.length - 2, _ = 6; _ < f; _ += 6)
      a = o[_] - o[_ - 2], l = o[_ + 1] - o[_ - 1], u = o[_ + 2] - o[_], h = o[_ + 3] - o[_ + 1], d = Kt(l, a), m = Kt(h, u), s = Math.abs(d - m) < i, s && (g[_ - 2] = d, g[_ + 2] = m, g[_ - 1] = Tt(a * a + l * l), g[_ + 3] = Tt(u * u + h * h)), c.push(s, s, 0, 0, s, s);
    o[f] === o[0] && o[f + 1] === o[1] && (a = o[0] - o[f - 2], l = o[1] - o[f - 1], u = o[2] - o[0], h = o[3] - o[1], d = Kt(l, a), m = Kt(h, u), Math.abs(d - m) < i && (g[f - 2] = d, g[2] = m, g[f - 1] = Tt(a * a + l * l), g[3] = Tt(u * u + h * h), c[f - 2] = c[f - 1] = !0));
  }
  return t;
}, Mi = function(t) {
  var e = t.trim().split(" "), r = ~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0]), i = ~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1]);
  return {
    x: r / 100,
    y: i / 100
  };
}, ga = function(t) {
  return t !== t % ur ? t + (t < 0 ? vi : -vi) : t;
}, Pi = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.", ma = function(t, e, r, i) {
  var s = this._origin, o = this._eOrigin, a = t[r] - s.x, l = t[r + 1] - s.y, u = Tt(a * a + l * l), h = Kt(l, a), _, f;
  return a = e[r] - o.x, l = e[r + 1] - o.y, _ = Kt(l, a) - h, f = ga(_), !i && Pe && Math.abs(f + Pe.ca) < na && (i = Pe), this._anchorPT = Pe = {
    _next: this._anchorPT,
    t,
    sa: h,
    //starting angle
    ca: i && f * i.ca < 0 && Math.abs(f) > sa ? _ : f,
    //change in angle
    sl: u,
    //starting length
    cl: Tt(a * a + l * l) - u,
    //change in length
    i: r
  };
}, Oi = function(t) {
  gt = In(), Oe = Oe || gt && gt.plugins.morphSVG, gt && Oe ? (Qr = gt.utils.toArray, Oe.prototype._tweenRotation = ma, Bn = 1) : t && Et("Please gsap.registerPlugin(MorphSVGPlugin)");
}, Zt = {
  version: "3.6.1",
  name: "morphSVG",
  rawVars: 1,
  // otherwise "render" would be interpreted as a function-based value.
  register: function(t, e) {
    gt = t, Oe = e, Oi();
  },
  init: function(t, e, r, i, s) {
    if (Bn || Oi(1), !e)
      return Et("invalid shape"), !1;
    vr(e) && (e = e.call(r, i, t, s));
    var o, a, l, u, h, _, f, d, m, c, g, p, x, y, v, b, w, T, S, k, P, O;
    if (typeof e == "string" || e.getBBox || e[0])
      e = {
        shape: e
      };
    else if (typeof e == "object") {
      o = {};
      for (a in e)
        o[a] = vr(e[a]) && a !== "render" ? e[a].call(r, i, t, s) : e[a];
      e = o;
    }
    var E = t.nodeType ? window.getComputedStyle(t) : {}, N = E.fill + "", L = !(N === "none" || (N.match(Ie) || [])[3] === "0" || E.fillRule === "evenodd"), D = (e.origin || "50 50").split(",");
    if (o = (t.nodeName + "").toUpperCase(), h = o === "POLYLINE" || o === "POLYGON", o !== "PATH" && !h && !e.prop)
      return Et("Cannot morph a <" + o + "> element. " + Pi), !1;
    if (a = o === "PATH" ? "d" : "points", !e.prop && !vr(t.setAttribute))
      return !1;
    if (u = pa(e.shape || e.d || e.points || "", a === "d", t), h && aa.test(u))
      return Et("A <" + o + "> cannot accept path data. " + Pi), !1;
    if (_ = e.shapeIndex || e.shapeIndex === 0 ? e.shapeIndex : "auto", f = e.map || Zt.defaultMap, this._prop = e.prop, this._render = e.render || Zt.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : Zt.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = r, u) {
      if (this._target = t, w = typeof e.precompile == "object", c = this._prop ? t[this._prop] : t.getAttribute(a), !this._prop && !t.getAttributeNS(null, "data-original") && t.setAttributeNS(null, "data-original", c), a === "d" || this._prop) {
        if (c = $t(w ? e.precompile[0] : c), g = $t(w ? e.precompile[1] : u), !w && !Er(c, g, _, f, L))
          return !1;
        for ((e.precompile === "log" || e.precompile === !0) && Et('precompile:["' + ce(c) + '","' + ce(g) + '"]'), P = (e.type || Zt.defaultType) !== "linear", P && (c = Si(c, e.smoothTolerance), g = Si(g, e.smoothTolerance), c.size || Fe(c), g.size || Fe(g), k = Mi(D[0]), this._origin = c.origin = {
          x: c.left + k.x * c.width,
          y: c.top + k.y * c.height
        }, D[1] && (k = Mi(D[1])), this._eOrigin = {
          x: g.left + k.x * g.width,
          y: g.top + k.y * g.height
        }), this._rawPath = t._gsRawPath = c, x = c.length; --x > -1; )
          for (v = c[x], b = g[x], d = v.isSmooth || [], m = b.isSmooth || [], y = v.length, Pe = 0, p = 0; p < y; p += 2)
            (b[p] !== v[p] || b[p + 1] !== v[p + 1]) && (P ? d[p] && m[p] ? (T = v.smoothData, S = b.smoothData, O = p + (p === y - 4 ? 7 - y : 5), this._controlPT = {
              _next: this._controlPT,
              i: p,
              j: x,
              l1s: T[p + 1],
              l1c: S[p + 1] - T[p + 1],
              l2s: T[O],
              l2c: S[O] - T[O]
            }, l = this._tweenRotation(v, b, p + 2), this._tweenRotation(v, b, p, l), this._tweenRotation(v, b, O - 1, l), p += 4) : this._tweenRotation(v, b, p) : (l = this.add(v, p, v[p], b[p]), l = this.add(v, p + 1, v[p + 1], b[p + 1]) || l));
      } else
        l = this.add(t, "setAttribute", t.getAttribute(a) + "", u + "", i, s, 0, da(_), a);
      P && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x), l = this.add(this._origin, "y", this._origin.y, this._eOrigin.y)), l && (this._props.push("morphSVG"), l.end = u, l.endProp = a);
    }
    return la;
  },
  render: function(t, e) {
    for (var r = e._rawPath, i = e._controlPT, s = e._anchorPT, o = e._rnd, a = e._target, l = e._pt, u, h, _, f, d, m, c, g, p, x, y, v, b; l; )
      l.r(t, l.d), l = l._next;
    if (t === 1 && e._apply)
      for (l = e._pt; l; )
        l.end && (e._prop ? a[e._prop] = l.end : a.setAttribute(l.endProp, l.end)), l = l._next;
    else if (r) {
      for (; s; )
        m = s.sa + t * s.ca, d = s.sl + t * s.cl, s.t[s.i] = e._origin.x + mi(m) * d, s.t[s.i + 1] = e._origin.y + yi(m) * d, s = s._next;
      for (_ = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; i; )
        c = i.i, f = r[i.j], b = c + (c === f.length - 4 ? 7 - f.length : 5), m = Kt(f[b] - f[c + 1], f[b - 1] - f[c]), y = yi(m), v = mi(m), p = f[c + 2], x = f[c + 3], d = i.l1s + _ * i.l1c, f[c] = p - v * d, f[c + 1] = x - y * d, d = i.l2s + _ * i.l2c, f[b - 1] = p + v * d, f[b] = x + y * d, i = i._next;
      if (a._gsRawPath = r, e._apply) {
        for (u = "", h = " ", g = 0; g < r.length; g++)
          for (f = r[g], d = f.length, u += "M" + (f[0] * o | 0) / o + h + (f[1] * o | 0) / o + " C", c = 2; c < d; c++)
            u += (f[c] * o | 0) / o + h;
        e._prop ? a[e._prop] = u : a.setAttribute("d", u);
      }
    }
    e._render && r && e._render.call(e._tween, r, a);
  },
  kill: function(t) {
    this._pt = this._rawPath = 0;
  },
  getRawPath: Jo,
  stringToRawPath: $t,
  rawPathToString: ce,
  normalizeStrings: function(t, e, r) {
    var i = r.shapeIndex, s = r.map, o = [t, e];
    return ki(o, i, s), o;
  },
  pathFilter: ki,
  pointsFilter: Nr,
  getTotalSize: Fe,
  equalizeSegmentQuantity: Er,
  convertToPath: function(t, e) {
    return Qr(t).map(function(r) {
      return Ln(r, e !== !1);
    });
  },
  defaultType: "linear",
  defaultUpdateTarget: !0,
  defaultMap: "size"
};
In() && gt.registerPlugin(Zt);
const ya = (n) => (Zn("data-v-dae8c6da"), n = n(), Jn(), n), va = ["width", "height"], ba = ["fill"], xa = ["width", "height"], wa = /* @__PURE__ */ ya(() => /* @__PURE__ */ ot("path", {
  id: "decagon",
  opacity: "0",
  d: "M722.773333 381.44a64 64 0 0 1 90.453334 90.453333l-252.970667 253.013334a68.266667 68.266667 0 0 1-96.512 0l-253.013333-253.013334a64 64 0 0 1 90.538666-90.453333L512 592.128l210.773333-210.773333z",
  fill: "#111111",
  "p-id": "2447"
}, null, -1)), ka = [
  wa
], Ta = /* @__PURE__ */ ee({
  __name: "select",
  props: {
    keyId: {
      type: String,
      default: "1"
    },
    hover: {
      type: Boolean,
      default: !1
    },
    hoverColor: {
      type: String,
      default: "#000"
    },
    parentDeep: {
      type: Number,
      default: 1
    },
    // 旋转的圈数 360 为一圈
    rotate: {
      type: Number,
      default: 360
    },
    animation: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "currentColor"
    },
    width: {
      type: Number,
      default: 48
    },
    duration: {
      type: Number,
      default: 0.3
    },
    targer: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 48
    },
    showKey: {
      type: String,
      default: "1"
    },
    changeShow: {
      type: Function,
      default: void 0
    }
  },
  emits: ["open", "close", "update:visible"],
  setup(n) {
    const t = n, e = Gn({
      show: !1
    }), { show: r } = Wn(e), i = j(), s = j(), o = j();
    var a;
    jn(() => r.value, (u) => {
      const h = s.value, _ = i.value;
      if (!h || !_)
        throw new Error("无法获取ref: drawerBody或drawer元素");
      const f = h.offsetHeight, d = u ? _.offsetHeight + f : t.height;
      Hn(() => {
        _.style.height = d + "px", console.log("执行tv动画", u, a), u ? a.play() : a.reverse();
      });
    });
    function l(u) {
      console.log(u.type, r.value), !(t.hover && u.type === "click") && (!t.hover && (u.type === "mouseenter" || u.type === "mouseleave") || (r.value = !r.value));
    }
    return be(() => {
      var u;
      if (t.parentDeep != null && t.parentDeep > 0 && i.value != null) {
        var h = i.value;
        for (let _ = 0; _ < t.parentDeep; _++)
          h = h.parentNode;
        u = h;
      } else
        t.targer && (u = document.getElementById(t.targer));
      if (u == null && console.error("targer is undefined"), console.log("onHoverTarger", u), i.value && lr(i.value), t.animation && u) {
        let _ = 0.3;
        const f = Pt.timeline({ paused: !0 });
        f.fromTo(o.value.parentElement, { opacity: 0, transformOrigin: "center" }, { opacity: 1, fill: t.color }), u.addEventListener("mouseenter", () => {
          f.play().duration(_);
        }), u.addEventListener("mouseleave", () => {
          r.value ? (r.value = !1, f.reverse().duration(t.duration)) : f.reverse();
        });
      }
      a = (() => {
        Pt.registerPlugin(Zt);
        let _ = Zt.convertToPath([o.value]), f = Pt.timeline({
          paused: !0
        });
        return f.to(_, { rotate: t.rotate, transformOrigin: "50% 50%", duration: t.duration }), f.to(_, { morphSVG: "#decagon" }, 0), f;
      })();
    }), (u, h) => (St(), Nt("div", {
      ref_key: "root",
      ref: i,
      class: Qn(["set", Kn(r) ? "show" : ""]),
      style: qt({
        width: t.width + "px",
        height: t.height + "px",
        transition: `all ${t.duration}s ease`
      }),
      onMouseenter: l,
      onMouseleave: l
    }, [
      (St(), Nt("svg", {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: l,
        width: t.width,
        height: t.height,
        id: "root",
        style: qt({ "--hover-color": t.hoverColor })
      }, [
        ot("path", {
          class: "rare-more",
          ref_key: "point11",
          ref: o,
          d: "M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z",
          fill: t.color,
          "p-id": "2443"
        }, null, 8, ba)
      ], 12, va)),
      (St(), Nt("svg", {
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: t.width,
        display: "none",
        height: t.height
      }, ka, 8, xa)),
      ot("div", {
        ref_key: "drawerBody",
        ref: s
      }, [
        Ci(u.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 38));
  }
});
const Da = /* @__PURE__ */ Ye(Ta, [["__scopeId", "data-v-dae8c6da"]]);
export {
  Ro as Add,
  Ma as Close,
  Aa as Delete,
  Pa as Edit,
  Oa as More,
  Da as Select,
  Ca as Tray
};
