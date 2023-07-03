import { defineComponent as jt, ref as U, onMounted as he, openBlock as xt, createElementBlock as Dt, normalizeStyle as Et, createElementVNode as tt, createBlock as gn, renderSlot as lr, reactive as mn, toRefs as yn, watch as xn, nextTick as vn, normalizeClass as wn, unref as bn, pushScopeId as Tn, popScopeId as Sn } from "vue";
function gt(l) {
  if (l === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l;
}
function ur(l, t) {
  l.prototype = Object.create(t.prototype), l.prototype.constructor = l, l.__proto__ = t;
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
var j = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, se = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, yi, dt = 1e8, A = 1 / dt, oi = Math.PI * 2, Pn = oi / 4, kn = 0, fr = Math.sqrt, Cn = Math.cos, Mn = Math.sin, X = function(t) {
  return typeof t == "string";
}, I = function(t) {
  return typeof t == "function";
}, ut = function(t) {
  return typeof t == "number";
}, xi = function(t) {
  return typeof t > "u";
}, bt = function(t) {
  return typeof t == "object";
}, H = function(t) {
  return t !== !1;
}, hr = function() {
  return typeof window < "u";
}, zi = function(t) {
  return I(t) || X(t);
}, _r = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, at = Array.isArray, ai = /(?:-?\.?\d|\.)+/gi, cr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Kt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, He = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, dr = /[+-]=-?[.\d]+/, pr = /[#\-+.]*\b[a-z\d-=+%.]+/gi, On = /[\d.+\-=]+(?:e[-+]\d*)*/i, L, _t, li, gr, it = {}, Be = {}, mr, yr = function(t) {
  return (Be = oe(t, it)) && pt;
}, vi = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, xr = function(t, e) {
  return !e && console.warn(t);
}, vr = function(t, e) {
  return t && (it[t] = e) && Be && (Be[t] = e) || it;
}, Oe = function() {
  return 0;
}, wi = {}, At = [], ui = {}, wr, K = {}, Qe = {}, Ri = 30, Ne = [], bi = "", Ti = function(t) {
  var e = t[0], i, r;
  if (bt(e) || I(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = Ne.length; r-- && !Ne[r].targetTest(e); )
      ;
    i = Ne[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new $r(t[r], i))) || t.splice(r, 1);
  return t;
}, Gt = function(t) {
  return t._gsap || Ti(ct(t))[0]._gsap;
}, br = function(t, e, i) {
  return (i = t[e]) && I(i) ? t[e]() : xi(i) && t.getAttribute && t.getAttribute(e) || i;
}, et = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, M = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Dn = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, ve = function(t, e, i) {
  var r = ut(t[1]), n = (r ? 2 : 1) + (e < 2 ? 0 : 1), s = t[n], o;
  if (r && (s.duration = t[1]), s.parent = i, e) {
    for (o = s; i && !("immediateRender" in o); )
      o = i.vars.defaults || {}, i = H(i.vars.inherit) && i.parent;
    s.immediateRender = H(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1];
  }
  return s;
}, Le = function() {
  var t = At.length, e = At.slice(0), i, r;
  for (ui = {}, At.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Tr = function(t, e, i, r) {
  At.length && Le(), t.render(e, i, r), At.length && Le();
}, Sr = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(pr).length < 2 ? e : X(t) ? t.trim() : t;
}, Pr = function(t) {
  return t;
}, lt = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, An = function(t, e) {
  for (var i in e)
    i in t || i === "duration" || i === "ease" || (t[i] = e[i]);
}, oe = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Ei = function l(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = bt(e[i]) ? l(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, fi = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, Fe = function(t) {
  var e = t.parent || L, i = t.keyframes ? An : lt;
  if (H(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, zn = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Rn = function(t, e, i, r, n) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var s = t[r], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, Ue = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Nt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, Wt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, En = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Nn = function l(t) {
  return !t || t._ts && l(t.parent);
}, Ni = function(t) {
  return t._repeat ? ae(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, ae = function(t, e) {
  var i = Math.floor(t /= e);
  return t && i === t ? i - 1 : i;
}, Ve = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Si = function(t) {
  return t._end = M(t._start + (t._tDur / Math.abs(t._ts || t._rts || A) || 0));
}, kr = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = M(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Si(t), i._dirty || Wt(i, t)), t;
}, Xe = function(t, e) {
  var i;
  if ((e._time || e._initted && !e._dur) && (i = Ve(t.rawTime(), e), (!e._dur || De(0, e.totalDuration(), i) - e._tTime > A) && e.render(i, !0)), Wt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -A;
  }
}, mt = function(t, e, i, r) {
  return e.parent && Nt(e), e._start = M(i + e._delay), e._end = M(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Rn(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Xe(t, e), t;
}, Cr = function(t, e) {
  return (it.ScrollTrigger || vi("scrollTrigger", e)) && it.ScrollTrigger.create(e, t);
}, Mr = function(t, e, i, r) {
  if (rs(t, e), !t._initted)
    return 1;
  if (!i && t._pt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && wr !== st.frame)
    return At.push(t), t._lazy = [e, r], 1;
}, Fn = function l(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || l(e));
}, Bn = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Fn(t) || (t._ts < 0 || t._dp._ts < 0) && t.data !== "isFromStart" && t.data !== "isStart") ? 0 : 1, o = t._rDelay, a = 0, u, f, d;
  if (o && t._repeat && (a = De(0, t._tDur, e), f = ae(a, o), d = ae(t._tTime, o), t._yoyo && f & 1 && (s = 1 - s), f !== d && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || r || t._zTime === A || !e && t._zTime) {
    if (!t._initted && Mr(t, e, r, i))
      return;
    for (d = t._zTime, t._zTime = e || (i ? A : 0), i || (i = e && !d), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = a, u = t._pt; u; )
      u.r(s, u.d), u = u._next;
    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && ot(t, "onUpdate"), a && t._repeat && !i && t.parent && ot(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Nt(t, 1), i || (ot(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, Ln = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (!r._dur && r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (!r._dur && r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, le = function(t, e, i, r) {
  var n = t._repeat, s = M(e) || 0, o = t._tTime / t._tDur;
  return o && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : M(s * (n + 1) + t._rDelay * n) : s, o && !r ? kr(t, t._tTime = t._tDur * o) : t.parent && Si(t), i || Wt(t.parent, t), t;
}, Fi = function(t) {
  return t instanceof W ? Wt(t) : le(t, t._dur);
}, Vn = {
  _start: 0,
  endTime: Oe
}, G = function l(t, e) {
  var i = t.labels, r = t._recent || Vn, n = t.duration() >= dt ? r.endTime(!1) : t._dur, s, o;
  return X(e) && (isNaN(e) || e in i) ? (s = e.charAt(0), s === "<" || s === ">" ? (s === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) : (s = e.indexOf("="), s < 0 ? (e in i || (i[e] = n), i[e]) : (o = +(e.charAt(s - 1) + e.substr(s + 1)), s > 1 ? l(t, e.substr(0, s - 1)) + o : n + o))) : e == null ? n : +e;
}, Vt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, De = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, J = function(t) {
  if (typeof t != "string")
    return "";
  var e = On.exec(t);
  return e ? t.substr(e.index + e[0].length) : "";
}, In = function(t, e, i) {
  return Vt(i, function(r) {
    return De(t, e, r);
  });
}, hi = [].slice, Or = function(t, e) {
  return t && bt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && bt(t[0])) && !t.nodeType && t !== _t;
}, Yn = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return X(r) && !e || Or(r, 1) ? (n = i).push.apply(n, ct(r)) : i.push(r);
  }) || i;
}, ct = function(t, e) {
  return X(t) && !e && (li || !ue()) ? hi.call(gr.querySelectorAll(t), 0) : at(t) ? Yn(t, e) : Or(t) ? hi.call(t, 0) : t ? [t] : [];
}, Dr = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Ar = function(t) {
  if (I(t))
    return t;
  var e = bt(t) ? t : {
    each: t
  }, i = te(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = r > 0 && r < 1, a = isNaN(r) || o, u = e.axis, f = r, d = r;
  return X(r) ? f = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !o && a && (f = r[0], d = r[1]), function(h, c, m) {
    var _ = (m || e).length, g = s[_], p, w, y, x, v, b, S, P, T;
    if (!g) {
      if (T = e.grid === "auto" ? 0 : (e.grid || [1, dt])[1], !T) {
        for (S = -dt; S < (S = m[T++].getBoundingClientRect().left) && T < _; )
          ;
        T--;
      }
      for (g = s[_] = [], p = a ? Math.min(T, _) * f - 0.5 : r % T, w = a ? _ * d / T - 0.5 : r / T | 0, S = 0, P = dt, b = 0; b < _; b++)
        y = b % T - p, x = w - (b / T | 0), g[b] = v = u ? Math.abs(u === "y" ? x : y) : fr(y * y + x * x), v > S && (S = v), v < P && (P = v);
      r === "random" && Dr(g), g.max = S - P, g.min = P, g.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (T > _ ? _ - 1 : u ? u === "y" ? _ / T : T : Math.max(T, _ / T)) || 0) * (r === "edges" ? -1 : 1), g.b = _ < 0 ? n - _ : n, g.u = J(e.amount || e.each) || 0, i = i && _ < 0 ? Vr(i) : i;
    }
    return _ = (g[h] - g.min) / g.max || 0, M(g.b + (i ? i(_) : _) * g.v) + g.u;
  };
}, _i = function(t) {
  var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
  return function(i) {
    var r = Math.round(parseFloat(i) / t) * t * e;
    return (r - r % 1) / e + (ut(i) ? 0 : J(i));
  };
}, zr = function(t, e) {
  var i = at(t), r, n;
  return !i && bt(t) && (r = i = t.radius || dt, t.values ? (t = ct(t.values), (n = !ut(t[0])) && (r *= r)) : t = _i(t.increment)), Vt(e, i ? I(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), a = parseFloat(n ? s.y : 0), u = dt, f = 0, d = t.length, h, c; d--; )
      n ? (h = t[d].x - o, c = t[d].y - a, h = h * h + c * c) : h = Math.abs(t[d] - o), h < u && (u = h, f = d);
    return f = !r || u <= r ? t[f] : s, n || f === s || ut(s) ? f : f + J(s);
  } : _i(t));
}, Rr = function(t, e, i, r) {
  return Vt(at(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return at(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, $n = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, qn = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || J(i));
  };
}, Un = function(t, e, i) {
  return Nr(t, e, 0, 1, i);
}, Er = function(t, e, i) {
  return Vt(i, function(r) {
    return t[~~e(r)];
  });
}, Xn = function l(t, e, i) {
  var r = e - t;
  return at(t) ? Er(t, l(0, t.length), e) : Vt(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, Gn = function l(t, e, i) {
  var r = e - t, n = r * 2;
  return at(t) ? Er(t, l(0, t.length - 1), e) : Vt(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, Ge = function(t) {
  for (var e = 0, i = "", r, n, s, o; ~(r = t.indexOf("random(", e)); )
    s = t.indexOf(")", r), o = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(o ? pr : ai), i += t.substr(e, r - e) + Rr(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return i + t.substr(e, t.length - e);
}, Nr = function(t, e, i, r, n) {
  var s = e - t, o = r - i;
  return Vt(n, function(a) {
    return i + ((a - t) / s * o || 0);
  });
}, Wn = function l(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(c) {
    return (1 - c) * t + c * e;
  };
  if (!n) {
    var s = X(t), o = {}, a, u, f, d, h;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (at(t) && !at(e)) {
      for (f = [], d = t.length, h = d - 2, u = 1; u < d; u++)
        f.push(l(t[u - 1], t[u]));
      d--, n = function(m) {
        m *= d;
        var _ = Math.min(h, ~~m);
        return f[_](m - _);
      }, i = e;
    } else
      r || (t = oe(at(t) ? [] : {}, t));
    if (!f) {
      for (a in e)
        Pi.call(o, t, a, "get", e[a]);
      n = function(m) {
        return Mi(m, o) || (s ? t.p : t);
      };
    }
  }
  return Vt(i, n);
}, Bi = function(t, e, i) {
  var r = t.labels, n = dt, s, o, a;
  for (s in r)
    o = r[s] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (a = s, n = o);
  return a;
}, ot = function(t, e, i) {
  var r = t.vars, n = r[e], s, o;
  if (n)
    return s = r[e + "Params"], o = r.callbackScope || t, i && At.length && Le(), s ? n.apply(o, s) : n.call(o);
}, pe = function(t) {
  return Nt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ot(t, "onInterrupt"), t;
}, Jt, jn = function(t) {
  t = !t.name && t.default || t;
  var e = t.name, i = I(t), r = e && !i && t.init ? function() {
    this._props = [];
  } : t, n = {
    init: Oe,
    render: Mi,
    add: Pi,
    kill: fs,
    modifier: us,
    rawVars: 0
  }, s = {
    targetTest: 0,
    get: 0,
    getSetter: Ci,
    aliases: {},
    register: 0
  };
  if (ue(), t !== r) {
    if (K[e])
      return;
    lt(r, lt(fi(t, n), s)), oe(r.prototype, oe(n, fi(t, s))), K[r.prop = e] = r, t.targetTest && (Ne.push(r), wi[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  vr(e, r), t.register && t.register(pt, r, Q);
}, R = 255, ge = {
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
}, Ze = function(t, e, i) {
  return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * R + 0.5 | 0;
}, Fr = function(t, e, i) {
  var r = t ? ut(t) ? [t >> 16, t >> 8 & R, t & R] : 0 : ge.black, n, s, o, a, u, f, d, h, c, m;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ge[t])
      r = ge[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & R, r & R, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & R, t & R];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = m = t.match(ai), !e)
        a = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, s = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ze(a + 1 / 3, n, s), r[1] = Ze(a, n, s), r[2] = Ze(a - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(cr), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(ai) || ge.transparent;
    r = r.map(Number);
  }
  return e && !m && (n = r[0] / R, s = r[1] / R, o = r[2] / R, d = Math.max(n, s, o), h = Math.min(n, s, o), f = (d + h) / 2, d === h ? a = u = 0 : (c = d - h, u = f > 0.5 ? c / (2 - d - h) : c / (d + h), a = d === n ? (s - o) / c + (s < o ? 6 : 0) : d === s ? (o - n) / c + 2 : (n - s) / c + 4, a *= 60), r[0] = ~~(a + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, Br = function(t) {
  var e = [], i = [], r = -1;
  return t.split(zt).forEach(function(n) {
    var s = n.match(Kt) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, Li = function(t, e, i) {
  var r = "", n = (t + r).match(zt), s = e ? "hsla(" : "rgba(", o = 0, a, u, f, d;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = Fr(h, e, 1)) && s + (e ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), i && (f = Br(t), a = i.c, a.join(r) !== f.c.join(r)))
    for (u = t.replace(zt, "1").split(Kt), d = u.length - 1; o < d; o++)
      r += u[o] + (~a.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : i).shift());
  if (!u)
    for (u = t.split(zt), d = u.length - 1; o < d; o++)
      r += u[o] + n[o];
  return r + u[d];
}, zt = function() {
  var l = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in ge)
    l += "|" + t + "\\b";
  return new RegExp(l + ")", "gi");
}(), Hn = /hsl[a]?\(/, Lr = function(t) {
  var e = t.join(" "), i;
  if (zt.lastIndex = 0, zt.test(e))
    return i = Hn.test(e), t[1] = Li(t[1], i), t[0] = Li(t[0], i, Br(t[1])), !0;
}, Ie, st = function() {
  var l = Date.now, t = 500, e = 33, i = l(), r = i, n = 1e3 / 240, s = n, o = [], a, u, f, d, h, c, m = function _(g) {
    var p = l() - r, w = g === !0, y, x, v, b;
    if (p > t && (i += p - e), r += p, v = r - i, y = v - s, (y > 0 || w) && (b = ++d.frame, h = v - d.time * 1e3, d.time = v = v / 1e3, s += y + (y >= n ? 4 : n - y), x = 1), w || (a = u(_)), x)
      for (c = 0; c < o.length; c++)
        o[c](v, h, b, g);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(g) {
      return h / (1e3 / (g || 60));
    },
    wake: function() {
      mr && (!li && hr() && (_t = li = window, gr = _t.document || {}, it.gsap = pt, (_t.gsapVersions || (_t.gsapVersions = [])).push(pt.version), yr(Be || _t.GreenSockGlobals || !_t.gsap && _t || {}), f = _t.requestAnimationFrame), a && d.sleep(), u = f || function(g) {
        return setTimeout(g, s - d.time * 1e3 + 1 | 0);
      }, Ie = 1, m(2));
    },
    sleep: function() {
      (f ? _t.cancelAnimationFrame : clearTimeout)(a), Ie = 0, u = Oe;
    },
    lagSmoothing: function(g, p) {
      t = g || 1 / A, e = Math.min(p, t, 0);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = d.time * 1e3 + n;
    },
    add: function(g) {
      o.indexOf(g) < 0 && o.push(g), ue();
    },
    remove: function(g) {
      var p;
      ~(p = o.indexOf(g)) && o.splice(p, 1) && c >= p && c--;
    },
    _listeners: o
  }, d;
}(), ue = function() {
  return !Ie && st.wake();
}, O = {}, Qn = /^[\d.\-M][\d.\-,\s]/, Zn = /["']/g, Kn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, a, u; n < s; n++)
    a = i[n], o = n !== s - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, o), e[r] = isNaN(u) ? u.replace(Zn, "").trim() : +u, r = a.substr(o + 1).trim();
  return e;
}, Jn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, ts = function(t) {
  var e = (t + "").split("("), i = O[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Kn(e[1])] : Jn(t).split(",").map(Sr)) : O._CE && Qn.test(t) ? O._CE("", t) : i;
}, Vr = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Ir = function l(t, e) {
  for (var i = t._first, r; i; )
    i instanceof W ? l(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? l(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, te = function(t, e) {
  return t && (I(t) ? t : O[t] || ts(t)) || e;
}, Ht = function(t, e, i, r) {
  i === void 0 && (i = function(a) {
    return 1 - e(1 - a);
  }), r === void 0 && (r = function(a) {
    return a < 0.5 ? e(a * 2) / 2 : 1 - e((1 - a) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return et(t, function(o) {
    O[o] = it[o] = n, O[s = o.toLowerCase()] = i;
    for (var a in n)
      O[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = O[o + "." + a] = n[a];
  }), n;
}, Yr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ke = function l(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / oi * (Math.asin(1 / r) || 0), o = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * Mn((f - s) * n) + 1;
  }, a = t === "out" ? o : t === "in" ? function(u) {
    return 1 - o(1 - u);
  } : Yr(o);
  return n = oi / n, a.config = function(u, f) {
    return l(t, u, f);
  }, a;
}, Je = function l(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : Yr(i);
  return r.config = function(n) {
    return l(t, n);
  }, r;
};
et("Linear,Quad,Cubic,Quart,Quint,Strong", function(l, t) {
  var e = t < 5 ? t + 1 : t;
  Ht(l + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Ht("Elastic", Ke("in"), Ke("out"), Ke());
(function(l, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(o) {
    return o < e ? l * o * o : o < i ? l * Math.pow(o - 1.5 / t, 2) + 0.75 : o < r ? l * (o -= 2.25 / t) * o + 0.9375 : l * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  Ht("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Ht("Expo", function(l) {
  return l ? Math.pow(2, 10 * (l - 1)) : 0;
});
Ht("Circ", function(l) {
  return -(fr(1 - l * l) - 1);
});
Ht("Sine", function(l) {
  return l === 1 ? 1 : -Cn(l * Pn) + 1;
});
Ht("Back", Je("in"), Je("out"), Je());
O.SteppedEase = O.steps = it.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - A;
    return function(o) {
      return ((r * De(0, s, o) | 0) + n) * i;
    };
  }
};
se.ease = O["quad.out"];
et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(l) {
  return bi += l + "," + l + "Params,";
});
var $r = function(t, e) {
  this.id = kn++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : br, this.set = e ? e.getSetter : Ci;
}, Se = /* @__PURE__ */ function() {
  function l(e, i) {
    var r = e.parent || L;
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, le(this, +e.duration, 1, 1), this.data = e.data, Ie || st.wake(), r && mt(r, this, i || i === 0 ? i : r._time, 1), e.reversed && this.reverse(), e.paused && this.paused(!0);
  }
  var t = l.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, le(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (ue(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (kr(this, i), !n._dp || n.parent || Xe(n, this); n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && mt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === A || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Tr(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Ni(this)) % this._dur || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ni(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? ae(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i) {
    if (!arguments.length)
      return this._rts === -A ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var r = this.parent && this._ts ? Ve(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -A ? 0 : this._rts, En(this.totalTime(De(-this._delay, this._tDur, r), !0));
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ue(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= A) && Math.abs(this._zTime) !== A))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && mt(r, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (H(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ve(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (r._ts || 1), r = r._dp;
    return n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Fi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    return arguments.length ? (this._rDelay = i, Fi(this)) : this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(G(this, i), H(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, H(r));
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -A : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -A, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - A);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this;
    return new Promise(function(n) {
      var s = I(i) ? i : Pr, o = function() {
        var u = r.then;
        r.then = null, I(s) && (s = s(r)) && (s.then || s === r) && (r.then = u), n(s), r.then = u;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o;
    });
  }, t.kill = function() {
    pe(this);
  }, l;
}();
lt(Se.prototype, {
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
  _zTime: -A,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var W = /* @__PURE__ */ function(l) {
  ur(t, l);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = l.call(this, i, r) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = H(i.sortChildren), n.parent && Xe(n.parent, gt(n)), i.scrollTrigger && Cr(gt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return new B(r, ve(arguments, 0, this), G(this, ut(n) ? arguments[3] : s)), this;
  }, e.from = function(r, n, s) {
    return new B(r, ve(arguments, 1, this), G(this, ut(n) ? arguments[3] : s)), this;
  }, e.fromTo = function(r, n, s, o) {
    return new B(r, ve(arguments, 2, this), G(this, ut(n) ? arguments[4] : o)), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, Fe(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new B(r, n, G(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return mt(this, B.delayedCall(0, r, n), G(this, s));
  }, e.staggerTo = function(r, n, s, o, a, u, f) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = u, s.onCompleteParams = f, s.parent = this, new B(r, s, G(this, a)), this;
  }, e.staggerFrom = function(r, n, s, o, a, u, f) {
    return s.runBackwards = 1, Fe(s).immediateRender = H(s.immediateRender), this.staggerTo(r, n, s, o, a, u, f);
  }, e.staggerFromTo = function(r, n, s, o, a, u, f, d) {
    return o.startAt = s, Fe(o).immediateRender = H(o.immediateRender), this.staggerTo(r, n, o, a, u, f, d);
  }, e.render = function(r, n, s) {
    var o = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = this !== L && r > a - A && r >= 0 ? a : r < A ? 0 : r, d = this._zTime < 0 != r < 0 && (this._initted || !u), h, c, m, _, g, p, w, y, x, v, b, S;
    if (f !== this._tTime || s || d) {
      if (o !== this._time && u && (f += this._time - o, r += this._time - o), h = f, x = this._start, y = this._ts, p = !y, d && (u || (o = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (b = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, s);
        if (h = M(f % g), f === a ? (_ = this._repeat, h = u) : (_ = ~~(f / g), _ && _ === f / g && (h = u, _--), h > u && (h = u)), v = ae(this._tTime, g), !o && this._tTime && v !== _ && (v = _), b && _ & 1 && (h = u - h, S = 1), _ !== v && !this._lock) {
          var P = b && v & 1, T = P === (b && _ & 1);
          if (_ < v && (P = !P), o = P ? 0 : u, this._lock = 1, this.render(o || (S ? 0 : M(_ * g)), n, !u)._lock = 0, !n && this.parent && ot(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), o && o !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, a = this._tDur, T && (this._lock = 2, o = P ? u : -1e-4, this.render(o, !0)), this._lock = 0, !this._ts && !p)
            return this;
          Ir(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = Ln(this, M(o), M(h)), w && (f -= h - (h = w._start))), this._tTime = f, this._time = h, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, o = 0), !o && h && !n && ot(this, "onStart"), h >= o && r >= 0)
        for (c = this._first; c; ) {
          if (m = c._next, (c._act || h >= c._start) && c._ts && w !== c) {
            if (c.parent !== this)
              return this.render(r, n, s);
            if (c.render(c._ts > 0 ? (h - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (h - c._start) * c._ts, n, s), h !== this._time || !this._ts && !p) {
              w = 0, m && (f += this._zTime = -A);
              break;
            }
          }
          c = m;
        }
      else {
        c = this._last;
        for (var k = r < 0 ? r : h; c; ) {
          if (m = c._prev, (c._act || k <= c._end) && c._ts && w !== c) {
            if (c.parent !== this)
              return this.render(r, n, s);
            if (c.render(c._ts > 0 ? (k - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (k - c._start) * c._ts, n, s), h !== this._time || !this._ts && !p) {
              w = 0, m && (f += this._zTime = k ? -A : A);
              break;
            }
          }
          c = m;
        }
      }
      if (w && !n && (this.pause(), w.render(h >= o ? 0 : -A)._zTime = h >= o ? 1 : -1, this._ts))
        return this._start = x, Si(this), this.render(r, n, s);
      this._onUpdate && !n && ot(this, "onUpdate", !0), (f === a && a >= this.totalDuration() || !f && o) && (x === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === a && this._ts > 0 || !f && this._ts < 0) && Nt(this, 1), !n && !(r < 0 && !o) && (f || o) && (ot(this, f === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (ut(n) || (n = G(this, n)), !(r instanceof Se)) {
      if (at(r))
        return r.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (X(r))
        return this.addLabel(r, n);
      if (I(r))
        r = B.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? mt(this, r, n) : this;
  }, e.getChildren = function(r, n, s, o) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -dt);
    for (var a = [], u = this._first; u; )
      u._start >= o && (u instanceof B ? n && a.push(u) : (s && a.push(u), r && a.push.apply(a, u.getChildren(!0, n, s)))), u = u._next;
    return a;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return X(r) ? this.removeLabel(r) : I(r) ? this.killTweensOf(r) : (Ue(this, r), r === this._recent && (this._recent = this._last), Wt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = M(st.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), l.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = G(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var o = B.delayedCall(0, n || Oe, s);
    return o.data = "isPause", this._hasPause = 1, mt(this, o, G(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = G(this, r); n; )
      n._start === r && n.data === "isPause" && Nt(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var o = this.getTweensOf(r, s), a = o.length; a--; )
      Pt !== o[a] && o[a].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], o = ct(r), a = this._first, u = ut(n), f; a; )
      a instanceof B ? Dn(a._targets, o) && (u ? (!Pt || a._initted && a._ts) && a.globalTime(0) <= n && a.globalTime(a.totalDuration()) > n : !n || a.isActive()) && s.push(a) : (f = a.getTweensOf(o, n)).length && s.push.apply(s, f), a = a._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, o = G(s, r), a = n, u = a.startAt, f = a.onStart, d = a.onStartParams, h = a.immediateRender, c = B.to(s, lt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || A,
      onStart: function() {
        s.pause();
        var _ = n.duration || Math.abs((o - s._time) / s.timeScale());
        c._dur !== _ && le(c, _, 0, 1).render(c._time, !0, !0), f && f.apply(c, d || []);
      }
    }, n));
    return h ? c.render(0) : c;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, lt({
      startAt: {
        time: G(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Bi(this, G(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Bi(this, G(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + A);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, a = this.labels, u; o; )
      o._start >= s && (o._start += r, o._end += r), o = o._next;
    if (n)
      for (u in a)
        a[u] >= s && (a[u] += r);
    return Wt(this);
  }, e.invalidate = function() {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(), r = r._next;
    return l.prototype.invalidate.call(this);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Wt(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, o = s._last, a = dt, u, f, d;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (d = s.parent; o; )
        u = o._prev, o._dirty && o.totalDuration(), f = o._start, f > a && s._sort && o._ts && !s._lock ? (s._lock = 1, mt(s, o, f - o._delay, 1)._lock = 0) : a = f, f < 0 && o._ts && (n -= f, (!d && !s._dp || d && d.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), a = 0), o._end > n && o._ts && (n = o._end), o = u;
      le(s, s === L && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (L._ts && (Tr(L, Ve(r, L)), wr = st.frame), st.frame >= Ri) {
      Ri += j.autoSleep || 120;
      var n = L._first;
      if ((!n || !n._ts) && j.autoSleep && st._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || st.sleep();
      }
    }
  }, t;
}(Se);
lt(W.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var es = function(t, e, i, r, n, s, o) {
  var a = new Q(this._pt, t, e, 0, 1, Wr, null, n), u = 0, f = 0, d, h, c, m, _, g, p, w;
  for (a.b = i, a.e = r, i += "", r += "", (p = ~r.indexOf("random(")) && (r = Ge(r)), s && (w = [i, r], s(w, t, e), i = w[0], r = w[1]), h = i.match(He) || []; d = He.exec(r); )
    m = d[0], _ = r.substring(u, d.index), c ? c = (c + 1) % 5 : _.substr(-5) === "rgba(" && (c = 1), m !== h[f++] && (g = parseFloat(h[f - 1]) || 0, a._pt = {
      _next: a._pt,
      p: _ || f === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: m.charAt(1) === "=" ? parseFloat(m.substr(2)) * (m.charAt(0) === "-" ? -1 : 1) : parseFloat(m) - g,
      m: c && c < 4 ? Math.round : 0
    }, u = He.lastIndex);
  return a.c = u < r.length ? r.substring(u, r.length) : "", a.fp = o, (dr.test(r) || p) && (a.e = 0), this._pt = a, a;
}, Pi = function(t, e, i, r, n, s, o, a, u) {
  I(r) && (r = r(n || 0, t, s));
  var f = t[e], d = i !== "get" ? i : I(f) ? u ? t[e.indexOf("set") || !I(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f, h = I(f) ? u ? os : Xr : ki, c;
  if (X(r) && (~r.indexOf("random(") && (r = Ge(r)), r.charAt(1) === "=" && (r = parseFloat(d) + parseFloat(r.substr(2)) * (r.charAt(0) === "-" ? -1 : 1) + (J(d) || 0))), d !== r)
    return isNaN(d * r) ? (!f && !(e in t) && vi(e, r), es.call(this, t, e, d, r, h, a || j.stringFilter, u)) : (c = new Q(this._pt, t, e, +d || 0, r - (d || 0), typeof f == "boolean" ? ls : Gr, 0, h), u && (c.fp = u), o && c.modifier(o, this, t), this._pt = c);
}, is = function(t, e, i, r, n) {
  if (I(t) && (t = we(t, n, e, i, r)), !bt(t) || t.style && t.nodeType || at(t) || _r(t))
    return X(t) ? we(t, n, e, i, r) : t;
  var s = {}, o;
  for (o in t)
    s[o] = we(t[o], n, e, i, r);
  return s;
}, qr = function(t, e, i, r, n, s) {
  var o, a, u, f;
  if (K[t] && (o = new K[t]()).init(n, o.rawVars ? e[t] : is(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = a = new Q(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== Jt))
    for (u = i._ptLookup[i._targets.indexOf(n)], f = o._props.length; f--; )
      u[o._props[f]] = a;
  return o;
}, Pt, rs = function l(t, e) {
  var i = t.vars, r = i.ease, n = i.startAt, s = i.immediateRender, o = i.lazy, a = i.onUpdate, u = i.onUpdateParams, f = i.callbackScope, d = i.runBackwards, h = i.yoyoEase, c = i.keyframes, m = i.autoRevert, _ = t._dur, g = t._startAt, p = t._targets, w = t.parent, y = w && w.data === "nested" ? w.parent._targets : p, x = t._overwrite === "auto" && !yi, v = t.timeline, b, S, P, T, k, C, E, N, F, D, z, Y, rt;
  if (v && (!c || !r) && (r = "none"), t._ease = te(r, se.ease), t._yEase = h ? Vr(te(h === !0 ? r : h, se.ease)) : 0, h && t._yoyo && !t._repeat && (h = t._yEase, t._yEase = t._ease, t._ease = h), !v) {
    if (N = p[0] ? Gt(p[0]).harness : 0, Y = N && i[N.prop], b = fi(i, wi), g && g.render(-1, !0).kill(), n)
      if (Nt(t._startAt = B.set(p, lt({
        data: "isStart",
        overwrite: !1,
        parent: w,
        immediateRender: !0,
        lazy: H(o),
        startAt: null,
        delay: 0,
        onUpdate: a,
        onUpdateParams: u,
        callbackScope: f,
        stagger: 0
      }, n))), s) {
        if (e > 0)
          m || (t._startAt = 0);
        else if (_ && !(e < 0 && g)) {
          e && (t._zTime = e);
          return;
        }
      } else
        m === !1 && (t._startAt = 0);
    else if (d && _) {
      if (g)
        !m && (t._startAt = 0);
      else if (e && (s = !1), P = lt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && H(o),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: w
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, b), Y && (P[N.prop] = Y), Nt(t._startAt = B.set(p, P)), !s)
        l(t._startAt, A);
      else if (!e)
        return;
    }
    for (t._pt = 0, o = _ && H(o) || o && !_, S = 0; S < p.length; S++) {
      if (k = p[S], E = k._gsap || Ti(p)[S]._gsap, t._ptLookup[S] = D = {}, ui[E.id] && At.length && Le(), z = y === p ? S : y.indexOf(k), N && (F = new N()).init(k, Y || b, t, z, y) !== !1 && (t._pt = T = new Q(t._pt, k, F.name, 0, 1, F.render, F, 0, F.priority), F._props.forEach(function(ht) {
        D[ht] = T;
      }), F.priority && (C = 1)), !N || Y)
        for (P in b)
          K[P] && (F = qr(P, b, t, z, k, y)) ? F.priority && (C = 1) : D[P] = T = Pi.call(t, k, P, "get", b[P], z, y, 0, i.stringFilter);
      t._op && t._op[S] && t.kill(k, t._op[S]), x && t._pt && (Pt = t, L.killTweensOf(k, D, t.globalTime(0)), rt = !t.parent, Pt = 0), t._pt && o && (ui[E.id] = 1);
    }
    C && jr(t), t._onInit && t._onInit(t);
  }
  t._from = !v && !!i.runBackwards, t._onUpdate = a, t._initted = (!t._op || t._pt) && !rt;
}, ns = function(t, e) {
  var i = t[0] ? Gt(t[0]).harness : 0, r = i && i.aliases, n, s, o, a;
  if (!r)
    return e;
  n = oe({}, e);
  for (s in r)
    if (s in n)
      for (a = r[s].split(","), o = a.length; o--; )
        n[a[o]] = n[s];
  return n;
}, we = function(t, e, i, r, n) {
  return I(t) ? t.call(e, i, r, n) : X(t) && ~t.indexOf("random(") ? Ge(t) : t;
}, Ur = bi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", ss = (Ur + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), B = /* @__PURE__ */ function(l) {
  ur(t, l);
  function t(i, r, n, s) {
    var o;
    typeof r == "number" && (n.duration = r, r = n, n = null), o = l.call(this, s ? r : Fe(r), n) || this;
    var a = o.vars, u = a.duration, f = a.delay, d = a.immediateRender, h = a.stagger, c = a.overwrite, m = a.keyframes, _ = a.defaults, g = a.scrollTrigger, p = a.yoyoEase, w = o.parent, y = (at(i) || _r(i) ? ut(i[0]) : "length" in r) ? [i] : ct(i), x, v, b, S, P, T, k, C;
    if (o._targets = y.length ? Ti(y) : xr("GSAP target " + i + " not found. https://greensock.com", !j.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = c, m || h || zi(u) || zi(f)) {
      if (r = o.vars, x = o.timeline = new W({
        data: "nested",
        defaults: _ || {}
      }), x.kill(), x.parent = x._dp = gt(o), x._start = 0, m)
        lt(x.vars.defaults, {
          ease: "none"
        }), m.forEach(function(E) {
          return x.to(y, E, ">");
        });
      else {
        if (S = y.length, k = h ? Ar(h) : Oe, bt(h))
          for (P in h)
            ~Ur.indexOf(P) && (C || (C = {}), C[P] = h[P]);
        for (v = 0; v < S; v++) {
          b = {};
          for (P in r)
            ss.indexOf(P) < 0 && (b[P] = r[P]);
          b.stagger = 0, p && (b.yoyoEase = p), C && oe(b, C), T = y[v], b.duration = +we(u, gt(o), v, T, y), b.delay = (+we(f, gt(o), v, T, y) || 0) - o._delay, !h && S === 1 && b.delay && (o._delay = f = b.delay, o._start += f, b.delay = 0), x.to(T, b, k(v, T, y));
        }
        x.duration() ? u = f = 0 : o.timeline = 0;
      }
      u || o.duration(u = x.duration());
    } else
      o.timeline = 0;
    return c === !0 && !yi && (Pt = gt(o), L.killTweensOf(y), Pt = 0), w && Xe(w, gt(o)), (d || !u && !m && o._start === M(w._time) && H(d) && Nn(gt(o)) && w.data !== "nested") && (o._tTime = -A, o.render(Math.max(0, -f))), g && Cr(gt(o), g), o;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var o = this._time, a = this._tDur, u = this._dur, f = r > a - A && r >= 0 ? a : r < A ? 0 : r, d, h, c, m, _, g, p, w, y;
    if (!u)
      Bn(this, r, n, s);
    else if (f !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 != r < 0) {
      if (d = f, w = this.timeline, this._repeat) {
        if (m = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, s);
        if (d = M(f % m), f === a ? (c = this._repeat, d = u) : (c = ~~(f / m), c && c === f / m && (d = u, c--), d > u && (d = u)), g = this._yoyo && c & 1, g && (y = this._yEase, d = u - d), _ = ae(this._tTime, m), d === o && !s && this._initted)
          return this;
        c !== _ && (w && this._yEase && Ir(w, g), this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1, this.render(M(m * c), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Mr(this, r < 0 ? r : d, s, n))
          return this._tTime = 0, this;
        if (u !== this._dur)
          return this.render(r, n, s);
      }
      for (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = p = (y || this._ease)(d / u), this._from && (this.ratio = p = 1 - p), d && !o && !n && ot(this, "onStart"), h = this._pt; h; )
        h.r(p, h.d), h = h._next;
      w && w.render(r < 0 ? r : !d && g ? -A : w._dur * p, n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (r < 0 && this._startAt && this._startAt.render(r, !0, s), ot(this, "onUpdate")), this._repeat && c !== _ && this.vars.onRepeat && !n && this.parent && ot(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (r < 0 && this._startAt && !this._onUpdate && this._startAt.render(r, !0, !0), (r || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Nt(this, 1), !n && !(r < 0 && !o) && (f || o) && (ot(this, f === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function() {
    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), l.prototype.invalidate.call(this);
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? pe(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Pt && Pt.vars.overwrite !== !0)._first || pe(this), this.parent && s !== this.timeline.totalDuration() && le(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, a = r ? ct(r) : o, u = this._ptLookup, f = this._pt, d, h, c, m, _, g, p;
    if ((!n || n === "all") && zn(o, a))
      return n === "all" && (this._pt = 0), pe(this);
    for (d = this._op = this._op || [], n !== "all" && (X(n) && (_ = {}, et(n, function(w) {
      return _[w] = 1;
    }), n = _), n = ns(o, n)), p = o.length; p--; )
      if (~a.indexOf(o[p])) {
        h = u[p], n === "all" ? (d[p] = n, m = h, c = {}) : (c = d[p] = d[p] || {}, m = n);
        for (_ in m)
          g = h && h[_], g && ((!("kill" in g.d) || g.d.kill(_) === !0) && Ue(this, g, "_pt"), delete h[_]), c !== "all" && (c[_] = 1);
      }
    return this._initted && !this._pt && f && pe(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return new t(r, ve(arguments, 1));
  }, t.delayedCall = function(r, n, s, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, t.fromTo = function(r, n, s) {
    return new t(r, ve(arguments, 2));
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return L.killTweensOf(r, n, s);
  }, t;
}(Se);
lt(B.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
et("staggerTo,staggerFrom,staggerFromTo", function(l) {
  B[l] = function() {
    var t = new W(), e = hi.call(arguments, 0);
    return e.splice(l === "staggerFromTo" ? 5 : 4, 0, 0), t[l].apply(t, e);
  };
});
var ki = function(t, e, i) {
  return t[e] = i;
}, Xr = function(t, e, i) {
  return t[e](i);
}, os = function(t, e, i, r) {
  return t[e](r.fp, i);
}, as = function(t, e, i) {
  return t.setAttribute(e, i);
}, Ci = function(t, e) {
  return I(t[e]) ? Xr : xi(t[e]) && t.setAttribute ? as : ki;
}, Gr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4, e);
}, ls = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Wr = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, Mi = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, us = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, fs = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Ue(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, hs = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, jr = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, Q = /* @__PURE__ */ function() {
  function l(e, i, r, n, s, o, a, u, f) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = o || Gr, this.d = a || this, this.set = u || ki, this.pr = f || 0, this._next = e, e && (e._prev = this);
  }
  var t = l.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = hs, this.m = i, this.mt = n, this.tween = r;
  }, l;
}();
et(bi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(l) {
  return wi[l] = 1;
});
it.TweenMax = it.TweenLite = B;
it.TimelineLite = it.TimelineMax = W;
L = new W({
  sortChildren: !1,
  defaults: se,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
j.stringFilter = Lr;
var Ye = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return jn(r);
    });
  },
  timeline: function(t) {
    return new W(t);
  },
  getTweensOf: function(t, e) {
    return L.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    X(t) && (t = ct(t)[0]);
    var n = Gt(t || {}).get, s = i ? Pr : Sr;
    return i === "native" && (i = ""), t && (e ? s((K[e] && K[e].get || n)(t, e, i, r)) : function(o, a, u) {
      return s((K[o] && K[o].get || n)(t, o, a, u));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = ct(t), t.length > 1) {
      var r = t.map(function(f) {
        return pt.quickSetter(f, e, i);
      }), n = r.length;
      return function(f) {
        for (var d = n; d--; )
          r[d](f);
      };
    }
    t = t[0] || {};
    var s = K[e], o = Gt(t), a = o.harness && (o.harness.aliases || {})[e] || e, u = s ? function(f) {
      var d = new s();
      Jt._pt = 0, d.init(t, i ? f + i : f, Jt, 0, [t]), d.render(1, d), Jt._pt && Mi(1, Jt);
    } : o.set(t, a);
    return s ? u : function(f) {
      return u(t, a, i ? f + i : f, o, 1);
    };
  },
  isTweening: function(t) {
    return L.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = te(t.ease, se.ease)), Ei(se, t || {});
  },
  config: function(t) {
    return Ei(j, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(o) {
      return o && !K[o] && !it[o] && xr(e + " effect requires " + o + " plugin.");
    }), Qe[e] = function(o, a, u) {
      return i(ct(o), lt(a || {}, n), u);
    }, s && (W.prototype[e] = function(o, a, u) {
      return this.add(Qe[e](o, bt(a) ? a : (u = a) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    O[t] = te(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? te(t, e) : O;
  },
  getById: function(t) {
    return L.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new W(t), r, n;
    for (i.smoothChildTiming = H(t.smoothChildTiming), L.remove(i), i._dp = 0, i._time = i._tTime = L._time, r = L._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof B && r.vars.onComplete === r._targets[0])) && mt(i, r, r._start - r._delay), r = n;
    return mt(L, i, 0), i;
  },
  utils: {
    wrap: Xn,
    wrapYoyo: Gn,
    distribute: Ar,
    random: Rr,
    snap: zr,
    normalize: Un,
    getUnit: J,
    clamp: In,
    splitColor: Fr,
    toArray: ct,
    mapRange: Nr,
    pipe: $n,
    unitize: qn,
    interpolate: Wn,
    shuffle: Dr
  },
  install: yr,
  effects: Qe,
  ticker: st,
  updateRoot: W.updateRoot,
  plugins: K,
  globalTimeline: L,
  core: {
    PropTween: Q,
    globals: vr,
    Tween: B,
    Timeline: W,
    Animation: Se,
    getCache: Gt,
    _removeLinkedListItem: Ue,
    suppressOverwrites: function(t) {
      return yi = t;
    }
  }
};
et("to,from,fromTo,delayedCall,set,killTweensOf", function(l) {
  return Ye[l] = B[l];
});
st.add(W.updateRoot);
Jt = Ye.to({}, {
  duration: 0
});
var _s = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, cs = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = _s(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, ti = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(o) {
        var a, u;
        if (X(n) && (a = {}, et(n, function(f) {
          return a[f] = 1;
        }), n = a), e) {
          a = {};
          for (u in n)
            a[u] = e(n[u]);
          n = a;
        }
        cs(o, n);
      };
    }
  };
}, pt = Ye.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, o;
    for (s in e)
      o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], r, n, 0, 0, s), o && (o.op = s), this._props.push(s);
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i]);
  }
}, ti("roundProps", _i), ti("modifiers"), ti("snap", zr)) || Ye;
B.version = W.version = pt.version = "3.6.1";
mr = 1;
hr() && ue();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.6.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Vi, kt, ee, Oi, qt, Ii, ds = function() {
  return typeof window < "u";
}, Ft = {}, $t = 180 / Math.PI, ie = Math.PI / 180, Qt = Math.atan2, Yi = 1e8, Hr = /([A-Z])/g, ps = /(?:left|right|width|margin|padding|x)/i, gs = /[\s,\(]\S/, Ct = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Qr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, ms = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, ys = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, xs = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Zr = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Kr = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, vs = function(t, e, i) {
  return t.style[e] = i;
}, ws = function(t, e, i) {
  return t.style.setProperty(e, i);
}, bs = function(t, e, i) {
  return t._gsap[e] = i;
}, Ts = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Ss = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, Ps = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, q = "transform", Bt = q + "Origin", Jr, ci = function(t, e) {
  var i = kt.createElementNS ? kt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : kt.createElement(t);
  return i.style ? i : kt.createElement(t);
}, vt = function l(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(Hr, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && l(t, fe(e) || e, 1) || "";
}, $i = "O,Moz,ms,Ms,Webkit".split(","), fe = function(t, e, i) {
  var r = e || qt, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !($i[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? $i[s] : "") + t;
}, di = function() {
  ds() && window.document && (Vi = window, kt = Vi.document, ee = kt.documentElement, qt = ci("div") || {
    style: {}
  }, ci("div"), q = fe(q), Bt = q + "Origin", qt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Jr = !!fe("perspective"), Oi = 1);
}, ei = function l(t) {
  var e = ci("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
  if (ee.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = l;
    } catch {
    }
  else
    this._gsapBBox && (s = this._gsapBBox());
  return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), ee.removeChild(e), this.style.cssText = n, s;
}, qi = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, tn = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = ei.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === ei || (e = ei.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +qi(t, ["x", "cx", "x1"]) || 0,
    y: +qi(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, en = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && tn(t));
}, Pe = function(t, e) {
  if (e) {
    var i = t.style;
    e in Ft && e !== Bt && (e = q), i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(e.replace(Hr, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, Mt = function(t, e, i, r, n, s) {
  var o = new Q(t._pt, e, i, 0, 1, s ? Kr : Zr);
  return t._pt = o, o.b = r, o.e = n, t._props.push(i), o;
}, Ui = {
  deg: 1,
  rad: 1,
  turn: 1
}, Lt = function l(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = qt.style, a = ps.test(e), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (a ? "Width" : "Height"), d = 100, h = r === "px", c = r === "%", m, _, g, p;
  return r === s || !n || Ui[r] || Ui[s] ? n : (s !== "px" && !h && (n = l(t, e, i, "px")), p = t.getCTM && en(t), (c || s === "%") && (Ft[e] || ~e.indexOf("adius")) ? (m = p ? t.getBBox()[a ? "width" : "height"] : t[f], M(c ? n / m * d : n / 100 * m)) : (o[a ? "width" : "height"] = d + (h ? s : r), _ = ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, p && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === kt || !_.appendChild) && (_ = kt.body), g = _._gsap, g && c && g.width && a && g.time === st.time ? M(n / g.width * d) : ((c || s === "%") && (o.position = vt(t, "position")), _ === t && (o.position = "static"), _.appendChild(qt), m = qt[f], _.removeChild(qt), o.position = "absolute", a && c && (g = Gt(_), g.time = st.time, g.width = _[f]), M(h ? m * n / d : m && n ? d / m * n : 0))));
}, Zt = function(t, e, i, r) {
  var n;
  return Oi || di(), e in Ct && e !== "transform" && (e = Ct[e], ~e.indexOf(",") && (e = e.split(",")[0])), Ft[e] && e !== "transform" ? (n = Ce(t, r), n = e !== "transformOrigin" ? n[e] : qe(vt(t, Bt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = $e[e] && $e[e](t, e, i) || vt(t, e) || br(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Lt(t, e, n, i) + i : n;
}, ks = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = fe(e, t, 1), s = n && vt(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = vt(t, "borderTopColor"));
  }
  var o = new Q(this._pt, t.style, e, 0, 1, Wr), a = 0, u = 0, f, d, h, c, m, _, g, p, w, y, x, v, b;
  if (o.b = i, o.e = r, i += "", r += "", r === "auto" && (t.style[e] = r, r = vt(t, e) || r, t.style[e] = i), f = [i, r], Lr(f), i = f[0], r = f[1], h = i.match(Kt) || [], b = r.match(Kt) || [], b.length) {
    for (; d = Kt.exec(r); )
      g = d[0], w = r.substring(a, d.index), m ? m = (m + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (m = 1), g !== (_ = h[u++] || "") && (c = parseFloat(_) || 0, x = _.substr((c + "").length), v = g.charAt(1) === "=" ? +(g.charAt(0) + "1") : 0, v && (g = g.substr(2)), p = parseFloat(g), y = g.substr((p + "").length), a = Kt.lastIndex - y.length, y || (y = y || j.units[e] || x, a === r.length && (r += y, o.e += y)), x !== y && (c = Lt(t, e, _, y) || 0), o._pt = {
        _next: o._pt,
        p: w || u === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: c,
        c: v ? v * p : p - c,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = a < r.length ? r.substring(a, r.length) : "";
  } else
    o.r = e === "display" && r === "none" ? Kr : Zr;
  return dr.test(r) && (o.e = 0), this._pt = o, o;
}, Xi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Cs = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Xi[i] || i, e[1] = Xi[r] || r, e.join(" ");
}, Ms = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, o, a, u;
    if (n === "all" || n === !0)
      r.cssText = "", a = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        o = n[u], Ft[o] && (a = 1, o = o === "transformOrigin" ? Bt : q), Pe(i, o);
    a && (Pe(i, q), s && (s.svg && i.removeAttribute("transform"), Ce(i, 1), s.uncache = 1));
  }
}, $e = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new Q(t._pt, e, i, 0, 0, Ms);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
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
}, ke = [1, 0, 0, 1, 0, 0], rn = {}, nn = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Gi = function(t) {
  var e = vt(t, q);
  return nn(e) ? ke : e.substr(7).match(cr).map(M);
}, Di = function(t, e) {
  var i = t._gsap || Gt(t), r = t.style, n = Gi(t), s, o, a, u;
  return i.svg && t.getAttribute("transform") ? (a = t.transform.baseVal.consolidate().matrix, n = [a.a, a.b, a.c, a.d, a.e, a.f], n.join(",") === "1,0,0,1,0,0" ? ke : n) : (n === ke && !t.offsetParent && t !== ee && !i.svg && (a = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (u = 1, o = t.nextSibling, ee.appendChild(t)), n = Gi(t), a ? r.display = a : Pe(t, "display"), u && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : ee.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, pi = function(t, e, i, r, n, s) {
  var o = t._gsap, a = n || Di(t, !0), u = o.xOrigin || 0, f = o.yOrigin || 0, d = o.xOffset || 0, h = o.yOffset || 0, c = a[0], m = a[1], _ = a[2], g = a[3], p = a[4], w = a[5], y = e.split(" "), x = parseFloat(y[0]) || 0, v = parseFloat(y[1]) || 0, b, S, P, T;
  i ? a !== ke && (S = c * g - m * _) && (P = x * (g / S) + v * (-_ / S) + (_ * w - g * p) / S, T = x * (-m / S) + v * (c / S) - (c * w - m * p) / S, x = P, v = T) : (b = tn(t), x = b.x + (~y[0].indexOf("%") ? x / 100 * b.width : x), v = b.y + (~(y[1] || y[0]).indexOf("%") ? v / 100 * b.height : v)), r || r !== !1 && o.smooth ? (p = x - u, w = v - f, o.xOffset = d + (p * c + w * _) - p, o.yOffset = h + (p * m + w * g) - w) : o.xOffset = o.yOffset = 0, o.xOrigin = x, o.yOrigin = v, o.smooth = !!r, o.origin = e, o.originIsAbsolute = !!i, t.style[Bt] = "0px 0px", s && (Mt(s, o, "xOrigin", u, x), Mt(s, o, "yOrigin", f, v), Mt(s, o, "xOffset", d, o.xOffset), Mt(s, o, "yOffset", h, o.yOffset)), t.setAttribute("data-svg-origin", x + " " + v);
}, Ce = function(t, e) {
  var i = t._gsap || new $r(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", a = vt(t, Bt) || "0", u, f, d, h, c, m, _, g, p, w, y, x, v, b, S, P, T, k, C, E, N, F, D, z, Y, rt, ht, Tt, $, _e, V, nt;
  return u = f = d = m = _ = g = p = w = y = 0, h = c = 1, i.svg = !!(t.getCTM && en(t)), b = Di(t, i.svg), i.svg && (z = !i.uncache && !e && t.getAttribute("data-svg-origin"), pi(t, z || a, !!z || i.originIsAbsolute, i.smooth !== !1, b)), x = i.xOrigin || 0, v = i.yOrigin || 0, b !== ke && (k = b[0], C = b[1], E = b[2], N = b[3], u = F = b[4], f = D = b[5], b.length === 6 ? (h = Math.sqrt(k * k + C * C), c = Math.sqrt(N * N + E * E), m = k || C ? Qt(C, k) * $t : 0, p = E || N ? Qt(E, N) * $t + m : 0, p && (c *= Math.abs(Math.cos(p * ie))), i.svg && (u -= x - (x * k + v * E), f -= v - (x * C + v * N))) : (nt = b[6], _e = b[7], ht = b[8], Tt = b[9], $ = b[10], V = b[11], u = b[12], f = b[13], d = b[14], S = Qt(nt, $), _ = S * $t, S && (P = Math.cos(-S), T = Math.sin(-S), z = F * P + ht * T, Y = D * P + Tt * T, rt = nt * P + $ * T, ht = F * -T + ht * P, Tt = D * -T + Tt * P, $ = nt * -T + $ * P, V = _e * -T + V * P, F = z, D = Y, nt = rt), S = Qt(-E, $), g = S * $t, S && (P = Math.cos(-S), T = Math.sin(-S), z = k * P - ht * T, Y = C * P - Tt * T, rt = E * P - $ * T, V = N * T + V * P, k = z, C = Y, E = rt), S = Qt(C, k), m = S * $t, S && (P = Math.cos(S), T = Math.sin(S), z = k * P + C * T, Y = F * P + D * T, C = C * P - k * T, D = D * P - F * T, k = z, F = Y), _ && Math.abs(_) + Math.abs(m) > 359.9 && (_ = m = 0, g = 180 - g), h = M(Math.sqrt(k * k + C * C + E * E)), c = M(Math.sqrt(D * D + nt * nt)), S = Qt(F, D), p = Math.abs(S) > 2e-4 ? S * $t : 0, y = V ? 1 / (V < 0 ? -V : V) : 0), i.svg && (z = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !nn(vt(t, q)), z && t.setAttribute("transform", z))), Math.abs(p) > 90 && Math.abs(p) < 270 && (n ? (h *= -1, p += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (c *= -1, p += p <= 0 ? 180 : -180)), i.x = u - ((i.xPercent = u && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = f - ((i.yPercent = f && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = d + s, i.scaleX = M(h), i.scaleY = M(c), i.rotation = M(m) + o, i.rotationX = M(_) + o, i.rotationY = M(g) + o, i.skewX = p + o, i.skewY = w + o, i.transformPerspective = y + s, (i.zOrigin = parseFloat(a.split(" ")[2]) || 0) && (r[Bt] = qe(a)), i.xOffset = i.yOffset = 0, i.force3D = j.force3D, i.renderTransform = i.svg ? Ds : Jr ? sn : Os, i.uncache = 0, i;
}, qe = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, ii = function(t, e, i) {
  var r = J(e);
  return M(parseFloat(e) + parseFloat(Lt(t, "x", i + "px", r))) + r;
}, Os = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, sn(t, e);
}, It = "0deg", ce = "0px", Yt = ") ", sn = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, a = i.z, u = i.rotation, f = i.rotationY, d = i.rotationX, h = i.skewX, c = i.skewY, m = i.scaleX, _ = i.scaleY, g = i.transformPerspective, p = i.force3D, w = i.target, y = i.zOrigin, x = "", v = p === "auto" && t && t !== 1 || p === !0;
  if (y && (d !== It || f !== It)) {
    var b = parseFloat(f) * ie, S = Math.sin(b), P = Math.cos(b), T;
    b = parseFloat(d) * ie, T = Math.cos(b), s = ii(w, s, S * T * -y), o = ii(w, o, -Math.sin(b) * -y), a = ii(w, a, P * T * -y + y);
  }
  g !== ce && (x += "perspective(" + g + Yt), (r || n) && (x += "translate(" + r + "%, " + n + "%) "), (v || s !== ce || o !== ce || a !== ce) && (x += a !== ce || v ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Yt), u !== It && (x += "rotate(" + u + Yt), f !== It && (x += "rotateY(" + f + Yt), d !== It && (x += "rotateX(" + d + Yt), (h !== It || c !== It) && (x += "skew(" + h + ", " + c + Yt), (m !== 1 || _ !== 1) && (x += "scale(" + m + ", " + _ + Yt), w.style[q] = x || "translate(0, 0)";
}, Ds = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, a = i.rotation, u = i.skewX, f = i.skewY, d = i.scaleX, h = i.scaleY, c = i.target, m = i.xOrigin, _ = i.yOrigin, g = i.xOffset, p = i.yOffset, w = i.forceCSS, y = parseFloat(s), x = parseFloat(o), v, b, S, P, T;
  a = parseFloat(a), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, a += f), a || u ? (a *= ie, u *= ie, v = Math.cos(a) * d, b = Math.sin(a) * d, S = Math.sin(a - u) * -h, P = Math.cos(a - u) * h, u && (f *= ie, T = Math.tan(u - f), T = Math.sqrt(1 + T * T), S *= T, P *= T, f && (T = Math.tan(f), T = Math.sqrt(1 + T * T), v *= T, b *= T)), v = M(v), b = M(b), S = M(S), P = M(P)) : (v = d, P = h, b = S = 0), (y && !~(s + "").indexOf("px") || x && !~(o + "").indexOf("px")) && (y = Lt(c, "x", s, "px"), x = Lt(c, "y", o, "px")), (m || _ || g || p) && (y = M(y + m - (m * v + _ * S) + g), x = M(x + _ - (m * b + _ * P) + p)), (r || n) && (T = c.getBBox(), y = M(y + r / 100 * T.width), x = M(x + n / 100 * T.height)), T = "matrix(" + v + "," + b + "," + S + "," + P + "," + y + "," + x + ")", c.setAttribute("transform", T), w && (c.style[q] = T);
}, As = function(t, e, i, r, n, s) {
  var o = 360, a = X(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? $t : 1), f = s ? u * s : u - r, d = r + f + "deg", h, c;
  return a && (h = n.split("_")[1], h === "short" && (f %= o, f !== f % (o / 2) && (f += f < 0 ? o : -o)), h === "cw" && f < 0 ? f = (f + o * Yi) % o - ~~(f / o) * o : h === "ccw" && f > 0 && (f = (f - o * Yi) % o - ~~(f / o) * o)), t._pt = c = new Q(t._pt, e, i, r, f, ms), c.e = d, c.u = "deg", t._props.push(i), c;
}, Wi = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, zs = function(t, e, i) {
  var r = Wi({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, a, u, f, d, h, c, m;
  r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), s[q] = e, o = Ce(i, 1), Pe(i, q), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[q], s[q] = e, o = Ce(i, 1), s[q] = u);
  for (a in Ft)
    u = r[a], f = o[a], u !== f && n.indexOf(a) < 0 && (c = J(u), m = J(f), d = c !== m ? Lt(i, a, u, m) : parseFloat(u), h = parseFloat(f), t._pt = new Q(t._pt, o, a, d, h - d, Qr), t._pt.u = m || 0, t._props.push(a));
  Wi(o, r);
};
et("padding,margin,Width,Radius", function(l, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
    return t < 2 ? l + o : "border" + o + l;
  });
  $e[t > 1 ? "border" + l : l] = function(o, a, u, f, d) {
    var h, c;
    if (arguments.length < 4)
      return h = s.map(function(m) {
        return Zt(o, m, u);
      }), c = h.join(" "), c.split(h[0]).length === 5 ? h[0] : c;
    h = (f + "").split(" "), c = {}, s.forEach(function(m, _) {
      return c[m] = h[_] = h[_] || h[(_ - 1) / 2 | 0];
    }), o.init(a, c, d);
  };
});
var on = {
  name: "css",
  register: di,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, o = t.style, a = i.vars.startAt, u, f, d, h, c, m, _, g, p, w, y, x, v, b, S;
    Oi || di();
    for (_ in e)
      if (_ !== "autoRound" && (f = e[_], !(K[_] && qr(_, e, i, r, t, n)))) {
        if (c = typeof f, m = $e[_], c === "function" && (f = f.call(i, r, t, n), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = Ge(f)), m)
          m(this, t, _, f, i) && (S = 1);
        else if (_.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(_) + "").trim(), f += "", zt.lastIndex = 0, zt.test(u) || (g = J(u), p = J(f)), p ? g !== p && (u = Lt(t, _, u, p) + p) : g && (f += g), this.add(o, "setProperty", u, f, r, n, 0, 0, _);
        else if (c !== "undefined") {
          if (a && _ in a ? (u = typeof a[_] == "function" ? a[_].call(i, r, t, n) : a[_], _ in j.units && !J(u) && (u += j.units[_]), (u + "").charAt(1) === "=" && (u = Zt(t, _))) : u = Zt(t, _), h = parseFloat(u), w = c === "string" && f.charAt(1) === "=" ? +(f.charAt(0) + "1") : 0, w && (f = f.substr(2)), d = parseFloat(f), _ in Ct && (_ === "autoAlpha" && (h === 1 && Zt(t, "visibility") === "hidden" && d && (h = 0), Mt(this, o, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), _ !== "scale" && _ !== "transform" && (_ = Ct[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), y = _ in Ft, y) {
            if (x || (v = t._gsap, v.renderTransform && !e.parseTransform || Ce(t, e.parseTransform), b = e.smoothOrigin !== !1 && v.smooth, x = this._pt = new Q(this._pt, o, q, 0, 1, v.renderTransform, v, 0, -1), x.dep = 1), _ === "scale")
              this._pt = new Q(this._pt, v, "scaleY", v.scaleY, w ? w * d : d - v.scaleY), s.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              f = Cs(f), v.svg ? pi(t, f, 0, b, 0, this) : (p = parseFloat(f.split(" ")[2]) || 0, p !== v.zOrigin && Mt(this, v, "zOrigin", v.zOrigin, p), Mt(this, o, _, qe(u), qe(f)));
              continue;
            } else if (_ === "svgOrigin") {
              pi(t, f, 1, b, 0, this);
              continue;
            } else if (_ in rn) {
              As(this, v, _, h, f, w);
              continue;
            } else if (_ === "smoothOrigin") {
              Mt(this, v, "smooth", v.smooth, f);
              continue;
            } else if (_ === "force3D") {
              v[_] = f;
              continue;
            } else if (_ === "transform") {
              zs(this, f, t);
              continue;
            }
          } else
            _ in o || (_ = fe(_) || _);
          if (y || (d || d === 0) && (h || h === 0) && !gs.test(f) && _ in o)
            g = (u + "").substr((h + "").length), d || (d = 0), p = J(f) || (_ in j.units ? j.units[_] : g), g !== p && (h = Lt(t, _, u, p)), this._pt = new Q(this._pt, y ? v : o, _, h, w ? w * d : d - h, !y && (p === "px" || _ === "zIndex") && e.autoRound !== !1 ? xs : Qr), this._pt.u = p || 0, g !== p && (this._pt.b = u, this._pt.r = ys);
          else if (_ in o)
            ks.call(this, t, _, u, f);
          else if (_ in t)
            this.add(t, _, t[_], f, r, n);
          else {
            vi(_, f);
            continue;
          }
          s.push(_);
        }
      }
    S && jr(this);
  },
  get: Zt,
  aliases: Ct,
  getSetter: function(t, e, i) {
    var r = Ct[e];
    return r && r.indexOf(",") < 0 && (e = r), e in Ft && e !== Bt && (t._gsap.x || Zt(t, "x")) ? i && Ii === i ? e === "scale" ? Ts : bs : (Ii = i || {}) && (e === "scale" ? Ss : Ps) : t.style && !xi(t.style[e]) ? vs : ~e.indexOf("-") ? ws : Ci(t, e);
  },
  core: {
    _removeProperty: Pe,
    _getMatrix: Di
  }
};
pt.utils.checkPrefix = fe;
(function(l, t, e, i) {
  var r = et(l + "," + t + "," + e, function(n) {
    Ft[n] = 1;
  });
  et(t, function(n) {
    j.units[n] = "deg", rn[n] = 1;
  }), Ct[r[13]] = l + "," + t, et(i, function(n) {
    var s = n.split(":");
    Ct[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(l) {
  j.units[l] = "px";
});
pt.registerPlugin(on);
var wt = pt.registerPlugin(on) || pt;
wt.core.Tween;
const Rs = ["width", "height"], Es = ["stroke-width", "stroke"], Ns = ["stroke-width", "stroke"], Fs = /* @__PURE__ */ jt({
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
  setup(l) {
    const t = l, e = U(null), i = U(null), r = U(null);
    return he(() => {
      var n;
      const s = i.value, o = r.value;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var a = e.value;
        for (let u = 0; u < t.parentDeep; u++)
          a = a.parentNode;
        n = a;
      } else
        t.targer && (n = document.getElementById(t.targer));
      if (n == null && console.error("targer is undefined"), t.animation) {
        const u = wt.timeline({ paused: !0 });
        u.fromTo(s, { attr: { x1: "40", x2: "40", "stroke-linecap": "butt" }, opacity: 0.1, transformOrigin: "center" }, { attr: { x1: "10", x2: "70", stroke: t.color, "stroke-linecap": t.linecap }, opacity: 1, duration: t.duration, rotation: 360 }), u.fromTo(o, { attr: { x1: "40", y1: "40", x2: "40", y2: "40", "stroke-linecap": "butt" }, opacity: 0.1, transformOrigin: "center" }, { attr: { x1: "40", y1: "10", x2: "40", y2: "70", stroke: t.color, "stroke-linecap": t.linecap }, opacity: 1, duration: t.duration, rotation: 360 }, 0), n == null || n.addEventListener("mouseenter", () => {
          u.play();
        }), n == null || n.addEventListener("mouseleave", () => {
          u.reverse();
        });
      }
    }), (n, s) => (xt(), Dt("svg", {
      ref_key: "root",
      ref: e,
      class: "root",
      width: t.width,
      height: t.height,
      viewBox: "0 0 80 80",
      style: Et({ rotate: t.rotate + "deg", "--hover-color": t.hoverColor })
    }, [
      tt("line", {
        ref_key: "line1",
        ref: i,
        class: "line1",
        x1: "10",
        y1: "40",
        x2: "70",
        y2: "40",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, Es),
      tt("line", {
        ref_key: "line2",
        ref: r,
        x1: "40",
        y1: "10",
        x2: "40",
        y2: "70",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, Ns)
    ], 12, Rs));
  }
});
const Oo = /* @__PURE__ */ jt({
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
  setup(l) {
    const t = l;
    return (e, i) => (xt(), gn(Fs, {
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
function We(l) {
  if (!l)
    throw new Error("svg is not defined");
  l && (l.addEventListener("mouseenter", () => {
    l.classList.add("hover");
  }), l.addEventListener("mouseleave", () => {
    l.classList.remove("hover");
  }));
}
const Bs = ["width", "height"], Ls = ["stroke", "stroke-width"], Vs = ["stroke", "stroke-width"], Is = /* @__PURE__ */ jt({
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
  setup(l) {
    const t = l, e = U(null), i = U(null), r = U(null);
    return he(() => {
      var n;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var s = e.value;
        for (let o = 0; o < t.parentDeep; o++)
          s = s.parentNode;
        n = s;
      } else
        t.targer && (n = document.getElementById(t.targer));
      if (n == null && console.error("targer is undefined"), e.value && We(e.value), t.animation && n) {
        const o = wt.timeline({ paused: !0 });
        let a = i.value.getTotalLength(), u = `${a} ${a}`, f = a;
        o.fromTo(i.value, { attr: { stroke: t.color }, opacity: 0.1, strokeDashoffset: f, strokeDasharray: u, transformOrigin: "center" }, { attr: { stroke: t.color }, opacity: 1, strokeDashoffset: 0, duration: t.duration }), o.fromTo(r.value, { attr: { stroke: t.color }, strokeDashoffset: f, strokeDasharray: u, opacity: 0.1, transformOrigin: "center" }, { attr: { stroke: t.color }, opacity: 1, strokeDashoffset: 0, duration: t.duration }, 0), n == null || n.addEventListener("mouseenter", () => {
          o.play();
        }), n == null || n.addEventListener("mouseleave", () => {
          o.reverse();
        });
      }
    }), (n, s) => (xt(), Dt("svg", {
      ref_key: "root",
      ref: e,
      width: t.width,
      height: t.height,
      viewBox: "0 0 1024 924",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:svg": "http://www.w3.org/2000/svg",
      class: "icon root",
      version: "1.1",
      style: Et({ "--hover-color": t.hoverColor })
    }, [
      tt("path", {
        ref_key: "line1",
        ref: i,
        d: "M611,94L266,97c-25,7-44,34-43,84l5,574c1,34-3,34,31,36l546,3c18,1,14,-7,15,-27l0,-324",
        fill: "none",
        id: "svg_1",
        stroke: t.color,
        "stroke-linecap": "round",
        "stroke-width": `${t.strokeWidth}px`
      }, null, 8, Ls),
      tt("path", {
        ref_key: "line2",
        ref: r,
        d: "m847.74,188.67q1.9,4.54 3.09,10.58t1.18,12.6t-2.38,13.1t-7.62,12.6q-5.71,6.05 -10.24,10.58t-7.86,8.07q-3.81,4.03 -7.14,7.06l-89.09,-94.25q5.71,-5.54 13.58,-13.36t13.1,-12.35q6.67,-5.55 13.81,-7.81t14.06,-2.02t13.34,2.27t11.2,4.53q10,5.55 22.16,19.41t18.82,28.98l-0.01,0.01zm-371.12,245.96q2.85,-3.02 13.34,-14.37t26.2,-27.97l34.77,-36.8l38.59,-40.83l102.43,-108.37l89.09,94.75l-102.43,108.37l-38.12,40.83q-19.05,19.66 -34.3,36.03t-25.25,26.96t-11.91,12.09q-4.76,4.54 -10.96,9.57t-12.87,8.07q-6.67,3.53 -19.54,8.56t-26.92,9.83t-26.68,8.32t-18.82,4.54q-12.87,1.51 -17.14,-4.03t-2.38,-18.65q0.95,-7.06 4.53,-20.41t7.62,-27.72t7.86,-26.46t6.19,-16.63q2.86,-7.06 6.44,-12.86t10.24,-12.86l0,0.02l0.02,0.02z",
        fill: "none",
        id: "svg_2",
        stroke: t.color,
        "stroke-width": `${t.strokeWidth - 10}px`
      }, null, 8, Vs)
    ], 12, Bs));
  }
});
const Ae = (l, t) => {
  const e = l.__vccOpts || l;
  for (const [i, r] of t)
    e[i] = r;
  return e;
}, Do = /* @__PURE__ */ Ae(Is, [["__scopeId", "data-v-5e3cb0ad"]]), Ys = ["width", "height"], $s = ["fill"], qs = ["fill"], Us = ["fill"], Xs = /* @__PURE__ */ jt({
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
  setup(l, { expose: t }) {
    const e = l, i = U(null), r = U(null), n = U(null), s = U(null);
    return he(() => {
      var o;
      if (e.parentDeep != null && e.parentDeep > 0 && i.value != null) {
        var a = i.value;
        for (let u = 0; u < e.parentDeep; u++)
          a = a.parentNode;
        o = a;
      } else
        e.targer && (o = document.getElementById(e.targer));
      if (o == null && console.error("targer is undefined"), i.value && We(i.value), e.animation && o) {
        const u = wt.timeline({ paused: !0 });
        u.fromTo(n.value, { opacity: 0, transformOrigin: "center" }, { opacity: 1, duration: e.duration, fill: e.color }), u.fromTo(r.value, { x: 280, opacity: 0 }, { x: -60, fill: e.color, opacity: 1, duration: e.duration }, 0), u.fromTo(s.value, { x: -280, opacity: 0 }, { x: 60, fill: e.color, opacity: 1, duration: e.duration }, 0), o.addEventListener("mouseenter", () => {
          u.play();
        }), o.addEventListener("mouseleave", () => {
          u.reverse();
        });
      }
    }), t({
      point1: r,
      point2: n,
      point3: s
    }), (o, a) => (xt(), Dt("svg", {
      ref_key: "root",
      ref: i,
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      id: "root",
      style: Et({ "--hover-color": e.hoverColor })
    }, [
      tt("path", {
        id: "nihao",
        class: "rare-more",
        ref_key: "point1",
        ref: r,
        d: "M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z",
        fill: e.color,
        "p-id": "2443"
      }, null, 8, $s),
      tt("path", {
        class: "rare-more",
        ref_key: "point2",
        ref: n,
        d: "M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z",
        fill: e.color,
        "p-id": "2444"
      }, null, 8, qs),
      tt("path", {
        class: "rare-more",
        ref_key: "point3",
        ref: s,
        d: "M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z",
        fill: e.color,
        "p-id": "2445"
      }, null, 8, Us)
    ], 12, Ys));
  }
});
const Ao = /* @__PURE__ */ Ae(Xs, [["__scopeId", "data-v-c7bd89b1"]]), Gs = /* @__PURE__ */ jt({
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
  setup(l) {
    const t = l, e = U(null), i = U(null), r = U(null);
    return he(() => {
      const n = i.value, s = r.value, o = wt.timeline({ paused: !0 });
      o.fromTo(n, { transformOrigin: "center", scale: 0 }, { duration: t.duration, scale: 1 }), s == null || s.addEventListener("mouseenter", () => {
        o.play();
      }), s == null || s.addEventListener("mouseleave", () => {
        o.reverse();
      });
    }), (n, s) => (xt(), Dt("cite", {
      class: "tray",
      ref_key: "tray",
      ref: e,
      style: Et({ padding: t.padding })
    }, [
      tt("div", {
        class: "bg",
        ref_key: "bg",
        ref: i,
        style: Et({
          backgroundColor: t.color,
          borderRadius: t.linecap == "round" ? "5px" : "0px"
        })
      }, null, 4),
      tt("div", {
        ref_key: "slotTarget",
        ref: r,
        style: { height: "inherit", "line-height": "0px" }
      }, [
        lr(n.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 4));
  }
});
const zo = /* @__PURE__ */ Ae(Gs, [["__scopeId", "data-v-d341a45c"]]), Ws = ["width", "height"], js = ["fill"], Hs = /* @__PURE__ */ jt({
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
  setup(l) {
    const t = l, e = U(null);
    return he(() => {
      var i;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var r = e.value;
        for (let n = 0; n < t.parentDeep; n++)
          r = r.parentNode;
        i = r;
      } else
        t.targer && (i = document.getElementById(t.targer));
      if (i == null && console.error("targer is undefined"), e.value && We(e.value), t.animation && i) {
        const n = wt.timeline({ paused: !0 });
        n.fromTo(e.value, { opacity: 0.1, rotateY: 90, transformOrigin: "center" }, { opacity: 1, rotateY: 0, duration: t.duration, fill: t.color }), i.addEventListener("mouseenter", () => {
          n.play();
        }), i.addEventListener("mouseleave", () => {
          n.reverse();
        });
      }
    }), (i, r) => (xt(), Dt("svg", {
      ref_key: "root",
      ref: e,
      class: "root",
      viewBox: "0 0 800 850",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      calss: "root",
      width: t.width,
      height: t.height,
      style: Et({ "--hover-color": t.hoverColor })
    }, [
      tt("path", {
        fill: t.color,
        d: "M 249.6 99.2 v 64 h 320 v -64 H 249.6 z m 416 144 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 39.7648 -32.2352 72 -72 72 H 201.6 c -39.7648 0 -72 -32.2352 -72 -72 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 13.2552 10.7448 24 24 24 h 416 c 13.2552 0 24 -10.7448 24 -24 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 z m -344 32 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z m 176 0 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z M 577.6 51.2 c 22.0912 0 40 17.9088 40 40 v 72 h 126.4 c 13.2552 0 24 10.7448 24 24 c 0 13.2552 -10.7448 24 -24 24 H 75.2 c -13.2552 0 -24 -10.7448 -24 -24 c 0 -13.2552 10.7448 -24 24 -24 h 126.4 v -72 c 0 -22.0912 17.9088 -40 40 -40 h 336 z"
      }, null, 8, js)
    ], 12, Ws));
  }
});
const Ro = /* @__PURE__ */ Ae(Hs, [["__scopeId", "data-v-1fa4d80e"]]);
/*!
 * paths 3.6.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Qs = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Zs = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Ks = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, Js = /(^[#\.][a-z]|[a-y][a-z])/i, to = Math.PI / 180, Re = Math.sin, Ee = Math.cos, be = Math.abs, de = Math.sqrt, ji = function(t) {
  return typeof t == "string";
}, an = function(t) {
  return typeof t == "number";
}, Hi = 1e5, St = function(t) {
  return Math.round(t * Hi) / Hi || 0;
};
function eo(l) {
  l = ji(l) && Js.test(l) && document.querySelector(l) || l;
  var t = l.getAttribute ? l : 0, e;
  return t && (l = l.getAttribute("d")) ? (t._gsPath || (t._gsPath = {}), e = t._gsPath[l], e && !e._dirty ? e : t._gsPath[l] = Rt(l)) : l ? ji(l) ? Rt(l) : an(l[0]) ? [l] : l : console.warn("Expecting a <path> element or an SVG path data string");
}
function me(l) {
  var t = 0, e;
  for (l.reverse(); t < l.length; t += 2)
    e = l[t], l[t] = l[t + 1], l[t + 1] = e;
  l.reversed = !l.reversed;
}
var io = function(t, e) {
  var i = document.createElementNS("http://www.w3.org/2000/svg", "path"), r = [].slice.call(t.attributes), n = r.length, s;
  for (e = "," + e + ","; --n > -1; )
    s = r[n].nodeName.toLowerCase(), e.indexOf("," + s + ",") < 0 && i.setAttributeNS(null, s, r[n].nodeValue);
  return i;
}, ro = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, no = function(t, e) {
  for (var i = e ? e.split(",") : [], r = {}, n = i.length; --n > -1; )
    r[i[n]] = +t.getAttribute(i[n]) || 0;
  return r;
};
function ln(l, t) {
  var e = l.tagName.toLowerCase(), i = 0.552284749831, r, n, s, o, a, u, f, d, h, c, m, _, g, p, w, y, x, v, b, S, P, T;
  return e === "path" || !l.getBBox ? l : (u = io(l, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), T = no(l, ro[e]), e === "rect" ? (o = T.rx, a = T.ry || o, n = T.x, s = T.y, c = T.width - o * 2, m = T.height - a * 2, o || a ? (_ = n + o * (1 - i), g = n + o, p = g + c, w = p + o * i, y = p + o, x = s + a * (1 - i), v = s + a, b = v + m, S = b + a * i, P = b + a, r = "M" + y + "," + v + " V" + b + " C" + [y, S, w, P, p, P, p - (p - g) / 3, P, g + (p - g) / 3, P, g, P, _, P, n, S, n, b, n, b - (b - v) / 3, n, v + (b - v) / 3, n, v, n, x, _, s, g, s, g + (p - g) / 3, s, p - (p - g) / 3, s, p, s, w, s, y, x, y, v].join(",") + "z") : r = "M" + (n + c) + "," + s + " v" + m + " h" + -c + " v" + -m + " h" + c + "z") : e === "circle" || e === "ellipse" ? (e === "circle" ? (o = a = T.r, d = o * i) : (o = T.rx, a = T.ry, d = a * i), n = T.cx, s = T.cy, f = o * i, r = "M" + (n + o) + "," + s + " C" + [n + o, s + d, n + f, s + a, n, s + a, n - f, s + a, n - o, s + d, n - o, s, n - o, s - d, n - f, s - a, n, s - a, n + f, s - a, n + o, s - d, n + o, s].join(",") + "z") : e === "line" ? r = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2 : (e === "polyline" || e === "polygon") && (h = (l.getAttribute("points") + "").match(Zs) || [], n = h.shift(), s = h.shift(), r = "M" + n + "," + s + " L" + h.join(","), e === "polygon" && (r += "," + n + "," + s + "z")), u.setAttribute("d", re(u._gsRawPath = Rt(r))), t && l.parentNode && (l.parentNode.insertBefore(u, l), l.parentNode.removeChild(l)), u);
}
function so(l, t, e, i, r, n, s, o, a) {
  if (!(l === o && t === a)) {
    e = be(e), i = be(i);
    var u = r % 360 * to, f = Ee(u), d = Re(u), h = Math.PI, c = h * 2, m = (l - o) / 2, _ = (t - a) / 2, g = f * m + d * _, p = -d * m + f * _, w = g * g, y = p * p, x = w / (e * e) + y / (i * i);
    x > 1 && (e = de(x) * e, i = de(x) * i);
    var v = e * e, b = i * i, S = (v * b - v * y - b * w) / (v * y + b * w);
    S < 0 && (S = 0);
    var P = (n === s ? -1 : 1) * de(S), T = P * (e * p / i), k = P * -(i * g / e), C = (l + o) / 2, E = (t + a) / 2, N = C + (f * T - d * k), F = E + (d * T + f * k), D = (g - T) / e, z = (p - k) / i, Y = (-g - T) / e, rt = (-p - k) / i, ht = D * D + z * z, Tt = (z < 0 ? -1 : 1) * Math.acos(D / de(ht)), $ = (D * rt - z * Y < 0 ? -1 : 1) * Math.acos((D * Y + z * rt) / de(ht * (Y * Y + rt * rt)));
    isNaN($) && ($ = h), !s && $ > 0 ? $ -= c : s && $ < 0 && ($ += c), Tt %= c, $ %= c;
    var _e = Math.ceil(be($) / (c / 4)), V = [], nt = $ / _e, ze = 4 / 3 * Re(nt / 2) / (1 + Ee(nt / 2)), _n = f * e, cn = d * e, dn = d * -i, pn = f * i, Z;
    for (Z = 0; Z < _e; Z++)
      r = Tt + Z * nt, g = Ee(r), p = Re(r), D = Ee(r += nt), z = Re(r), V.push(g - ze * p, p + ze * g, D + ze * z, z - ze * D, D, z);
    for (Z = 0; Z < V.length; Z += 2)
      g = V[Z], p = V[Z + 1], V[Z] = g * _n + p * dn + N, V[Z + 1] = g * cn + p * pn + F;
    return V[Z - 2] = o, V[Z - 1] = a, V;
  }
}
function Rt(l) {
  var t = (l + "").replace(Ks, function(T) {
    var k = +T;
    return k < 1e-4 && k > -1e-4 ? 0 : k;
  }).match(Qs) || [], e = [], i = 0, r = 0, n = 2 / 3, s = t.length, o = 0, a = "ERROR: malformed path: " + l, u, f, d, h, c, m, _, g, p, w, y, x, v, b, S, P = function(k, C, E, N) {
    w = (E - k) / 3, y = (N - C) / 3, _.push(k + w, C + y, E - w, N - y, E, N);
  };
  if (!l || !isNaN(t[0]) || isNaN(t[1]))
    return console.log(a), e;
  for (u = 0; u < s; u++)
    if (v = c, isNaN(t[u]) ? (c = t[u].toUpperCase(), m = c !== t[u]) : u--, d = +t[u + 1], h = +t[u + 2], m && (d += i, h += r), u || (g = d, p = h), c === "M")
      _ && (_.length < 8 ? e.length -= 1 : o += _.length), i = g = d, r = p = h, _ = [d, h], e.push(_), u += 2, c = "L";
    else if (c === "C")
      _ || (_ = [0, 0]), m || (i = r = 0), _.push(d, h, i + t[u + 3] * 1, r + t[u + 4] * 1, i += t[u + 5] * 1, r += t[u + 6] * 1), u += 6;
    else if (c === "S")
      w = i, y = r, (v === "C" || v === "S") && (w += i - _[_.length - 4], y += r - _[_.length - 3]), m || (i = r = 0), _.push(w, y, d, h, i += t[u + 3] * 1, r += t[u + 4] * 1), u += 4;
    else if (c === "Q")
      w = i + (d - i) * n, y = r + (h - r) * n, m || (i = r = 0), i += t[u + 3] * 1, r += t[u + 4] * 1, _.push(w, y, i + (d - i) * n, r + (h - r) * n, i, r), u += 4;
    else if (c === "T")
      w = i - _[_.length - 4], y = r - _[_.length - 3], _.push(i + w, r + y, d + (i + w * 1.5 - d) * n, h + (r + y * 1.5 - h) * n, i = d, r = h), u += 2;
    else if (c === "H")
      P(i, r, i = d, r), u += 1;
    else if (c === "V")
      P(i, r, i, r = d + (m ? r - i : 0)), u += 1;
    else if (c === "L" || c === "Z")
      c === "Z" && (d = g, h = p, _.closed = !0), (c === "L" || be(i - d) > 0.5 || be(r - h) > 0.5) && (P(i, r, d, h), c === "L" && (u += 2)), i = d, r = h;
    else if (c === "A") {
      if (b = t[u + 4], S = t[u + 5], w = t[u + 6], y = t[u + 7], f = 7, b.length > 1 && (b.length < 3 ? (y = w, w = S, f--) : (y = S, w = b.substr(2), f -= 2), S = b.charAt(1), b = b.charAt(0)), x = so(i, r, +t[u + 1], +t[u + 2], +t[u + 3], +b, +S, (m ? i : 0) + w * 1, (m ? r : 0) + y * 1), u += f, x)
        for (f = 0; f < x.length; f++)
          _.push(x[f]);
      i = _[_.length - 2], r = _[_.length - 1];
    } else
      console.log(a);
  return u = _.length, u < 6 ? (e.pop(), u = 0) : _[0] === _[u - 2] && _[1] === _[u - 1] && (_.closed = !0), e.totalPoints = o + u, e;
}
function re(l) {
  an(l[0]) && (l = [l]);
  var t = "", e = l.length, i, r, n, s;
  for (r = 0; r < e; r++) {
    for (s = l[r], t += "M" + St(s[0]) + "," + St(s[1]) + " C", i = s.length, n = 2; n < i; n++)
      t += St(s[n++]) + "," + St(s[n++]) + " " + St(s[n++]) + "," + St(s[n++]) + " " + St(s[n++]) + "," + St(s[n]) + " ";
    s.closed && (t += "z");
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
var ft, Ai, ye, un, xe, fn = function() {
  return ft || typeof window < "u" && (ft = window.gsap) && ft.registerPlugin && ft;
}, ri = function(t) {
  return typeof t == "function";
}, Ut = Math.atan2, Qi = Math.cos, Zi = Math.sin, yt = Math.sqrt, je = Math.PI, Ki = je * 2, oo = je * 0.3, ao = je * 0.7, hn = 1e20, Me = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, lo = /(^[#\.][a-z]|[a-y][a-z])/i, uo = /[achlmqstvz]/i, Ot = function(t) {
  return console && console.warn(t);
}, fo = 1, Ji = function(t) {
  var e = t.length, i = 0, r = 0, n;
  for (n = 0; n < e; n++)
    i += t[n++], r += t[n];
  return [i / (e / 2), r / (e / 2)];
}, ne = function(t) {
  var e = t.length, i = t[0], r = i, n = t[1], s = n, o, a, u;
  for (u = 6; u < e; u += 6)
    o = t[u], a = t[u + 1], o > i ? i = o : o < r && (r = o), a > n ? n = a : a < s && (s = a);
  return t.centerX = (i + r) / 2, t.centerY = (n + s) / 2, t.size = (i - r) * (n - s);
}, Te = function(t, e) {
  e === void 0 && (e = 3);
  for (var i = t.length, r = t[0][0], n = r, s = t[0][1], o = s, a = 1 / e, u, f, d, h, c, m, _, g, p, w, y, x, v, b, S, P; --i > -1; )
    for (c = t[i], u = c.length, h = 6; h < u; h += 6)
      for (p = c[h], w = c[h + 1], y = c[h + 2] - p, b = c[h + 3] - w, x = c[h + 4] - p, S = c[h + 5] - w, v = c[h + 6] - p, P = c[h + 7] - w, m = e; --m > -1; )
        _ = a * m, g = 1 - _, f = (_ * _ * v + 3 * g * (_ * x + g * y)) * _ + p, d = (_ * _ * P + 3 * g * (_ * S + g * b)) * _ + w, f > r ? r = f : f < n && (n = f), d > s ? s = d : d < o && (o = d);
  return t.centerX = (r + n) / 2, t.centerY = (s + o) / 2, t.left = n, t.width = r - n, t.top = o, t.height = s - o, t.size = (r - n) * (s - o);
}, ho = function(t, e) {
  return e.length - t.length;
}, tr = function(t, e) {
  var i = t.size || ne(t), r = e.size || ne(e);
  return Math.abs(r - i) < (i + r) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : r - i;
}, er = function(t, e) {
  var i = t.slice(0), r = t.length, n = r - 2, s, o;
  for (e = e | 0, s = 0; s < r; s++)
    o = (s + e) % n, t[s++] = i[o], t[s] = i[o + 1];
}, ni = function(t, e, i, r, n) {
  var s = t.length, o = 0, a = s - 2, u, f, d, h;
  for (i *= 6, f = 0; f < s; f += 6)
    u = (f + i) % a, h = t[u] - (e[f] - r), d = t[u + 1] - (e[f + 1] - n), o += yt(d * d + h * h);
  return o;
}, _o = function(t, e, i) {
  var r = t.length, n = Ji(t), s = Ji(e), o = s[0] - n[0], a = s[1] - n[1], u = ni(t, e, 0, o, a), f = 0, d, h, c;
  for (c = 6; c < r; c += 6)
    h = ni(t, e, c / 6, o, a), h < u && (u = h, f = c);
  if (i)
    for (d = t.slice(0), me(d), c = 6; c < r; c += 6)
      h = ni(d, e, c / 6, o, a), h < u && (u = h, f = -c);
  return f / 6;
}, co = function(t, e, i) {
  for (var r = t.length, n = hn, s = 0, o = 0, a, u, f, d, h, c; --r > -1; )
    for (a = t[r], c = a.length, h = 0; h < c; h += 6)
      u = a[h] - e, f = a[h + 1] - i, d = yt(u * u + f * f), d < n && (n = d, s = a[h], o = a[h + 1]);
  return [s, o];
}, po = function(t, e, i, r, n, s) {
  var o = e.length, a = 0, u = Math.min(t.size || ne(t), e[i].size || ne(e[i])) * r, f = hn, d = t.centerX + n, h = t.centerY + s, c, m, _, g, p;
  for (m = i; m < o && (c = e[m].size || ne(e[m]), !(c < u)); m++)
    _ = e[m].centerX - d, g = e[m].centerY - h, p = yt(_ * _ + g * g), p < f && (a = m, f = p);
  return p = e[a], e.splice(a, 1), p;
}, si = function(t, e) {
  var i = 0, r = 0.999999, n = t.length, s = e / ((n - 2) / 6), o, a, u, f, d, h, c, m, _, g, p, w, y, x;
  for (y = 2; y < n; y += 6)
    for (i += s; i > r; )
      o = t[y - 2], a = t[y - 1], u = t[y], f = t[y + 1], d = t[y + 2], h = t[y + 3], c = t[y + 4], m = t[y + 5], x = 1 / ((Math.floor(i) || 1) + 1), _ = o + (u - o) * x, p = u + (d - u) * x, _ += (p - _) * x, p += (d + (c - d) * x - p) * x, g = a + (f - a) * x, w = f + (h - f) * x, g += (w - g) * x, w += (h + (m - h) * x - w) * x, t.splice(
        y,
        4,
        o + (u - o) * x,
        //first control point
        a + (f - a) * x,
        _,
        //second control point
        g,
        _ + (p - _) * x,
        //new fabricated anchor on line
        g + (w - g) * x,
        p,
        //third control point
        w,
        d + (c - d) * x,
        //fourth control point
        h + (m - h) * x
      ), y += 6, n += 6, i--;
  return t;
}, gi = function(t, e, i, r, n) {
  var s = e.length - t.length, o = s > 0 ? e : t, a = s > 0 ? t : e, u = 0, f = r === "complexity" ? ho : tr, d = r === "position" ? 0 : typeof r == "number" ? r : 0.8, h = a.length, c = typeof i == "object" && i.push ? i.slice(0) : [i], m = c[0] === "reverse" || c[0] < 0, _ = i === "log", g, p, w, y, x, v, b;
  if (a[0]) {
    if (o.length > 1 && (t.sort(f), e.sort(f), v = o.size || Te(o), v = a.size || Te(a), v = o.centerX - a.centerX, b = o.centerY - a.centerY, f === tr))
      for (h = 0; h < a.length; h++)
        o.splice(h, 0, po(a[h], o, h, d, v, b));
    if (s)
      for (s < 0 && (s = -s), o[0].length > a[0].length && si(a[0], (o[0].length - a[0].length) / 6 | 0), h = a.length; u < s; )
        y = o[h].size || ne(o[h]), w = co(a, o[h].centerX, o[h].centerY), y = w[0], x = w[1], a[h++] = [y, x, y, x, y, x, y, x], a.totalPoints += 8, u++;
    for (h = 0; h < t.length; h++)
      g = e[h], p = t[h], s = g.length - p.length, s < 0 ? si(g, -s / 6 | 0) : s > 0 && si(p, s / 6 | 0), m && n !== !1 && !p.reversed && me(p), i = c[h] || c[h] === 0 ? c[h] : "auto", i && (p.closed || Math.abs(p[0] - p[p.length - 2]) < 0.5 && Math.abs(p[1] - p[p.length - 1]) < 0.5 ? i === "auto" || i === "log" ? (c[h] = i = _o(p, g, !h || n === !1), i < 0 && (m = !0, me(p), i = -i), er(p, i * 6)) : i !== "reverse" && (h && i < 0 && me(p), er(p, (i < 0 ? -i : i) * 6)) : !m && (i === "auto" && Math.abs(g[0] - p[0]) + Math.abs(g[1] - p[1]) + Math.abs(g[g.length - 2] - p[p.length - 2]) + Math.abs(g[g.length - 1] - p[p.length - 1]) > Math.abs(g[0] - p[p.length - 2]) + Math.abs(g[1] - p[p.length - 1]) + Math.abs(g[g.length - 2] - p[0]) + Math.abs(g[g.length - 1] - p[1]) || i % 2) ? (me(p), c[h] = -1, m = !0) : i === "auto" ? c[h] = 0 : i === "reverse" && (c[h] = -1), p.closed !== g.closed && (p.closed = g.closed = !1));
    return _ && Ot("shapeIndex:[" + c.join(",") + "]"), t.shapeIndex = c, c;
  }
}, ir = function(t, e, i, r, n) {
  var s = Rt(t[0]), o = Rt(t[1]);
  gi(s, o, e || e === 0 ? e : "auto", i, n) && (t[0] = re(s), t[1] = re(o), (r === "log" || r === !0) && Ot('precompile:["' + t[0] + '","' + t[1] + '"]'));
}, go = function(t, e) {
  if (!e)
    return t;
  var i = t.match(Me) || [], r = i.length, n = "", s, o, a;
  for (e === "reverse" ? (o = r - 1, s = -2) : (o = ((parseInt(e, 10) || 0) * 2 + 1 + r * 100) % r, s = 2), a = 0; a < r; a += 2)
    n += i[o - 1] + "," + i[o] + " ", o = (o + s) % r;
  return n;
}, rr = function(t, e) {
  var i = 0, r = parseFloat(t[0]), n = parseFloat(t[1]), s = r + "," + n + " ", o = 0.999999, a, u, f, d, h, c, m;
  for (f = t.length, a = e * 0.5 / (f * 0.5 - 1), u = 0; u < f - 2; u += 2) {
    if (i += a, c = parseFloat(t[u + 2]), m = parseFloat(t[u + 3]), i > o)
      for (h = 1 / (Math.floor(i) + 1), d = 1; i > o; )
        s += (r + (c - r) * h * d).toFixed(2) + "," + (n + (m - n) * h * d).toFixed(2) + " ", i--, d++;
    s += c + "," + m + " ", r = c, n = m;
  }
  return s;
}, mi = function(t) {
  var e = t[0].match(Me) || [], i = t[1].match(Me) || [], r = i.length - e.length;
  r > 0 ? t[0] = rr(e, r) : t[1] = rr(i, -r);
}, mo = function(t) {
  return isNaN(t) ? mi : function(e) {
    mi(e), e[1] = go(e[1], parseInt(t, 10));
  };
}, yo = function(t, e, i) {
  var r = typeof t == "string", n, s;
  return (!r || lo.test(t) || (t.match(Me) || []).length < 3) && (n = Ai(t)[0], n ? (s = (n.nodeName + "").toUpperCase(), e && s !== "PATH" && (n = ln(n, !1), s = "PATH"), t = n.getAttribute(s === "PATH" ? "d" : "points") || "", n === i && (t = n.getAttributeNS(null, "data-original") || t)) : (Ot("WARNING: invalid morph to: " + t), t = !1)), t;
}, nr = function(t, e) {
  for (var i = t.length, r = 0.2 * (e || 1), n, s, o, a, u, f, d, h, c, m, _, g; --i > -1; ) {
    for (s = t[i], _ = s.isSmooth = s.isSmooth || [0, 0, 0, 0], g = s.smoothData = s.smoothData || [0, 0, 0, 0], _.length = 4, h = s.length - 2, d = 6; d < h; d += 6)
      o = s[d] - s[d - 2], a = s[d + 1] - s[d - 1], u = s[d + 2] - s[d], f = s[d + 3] - s[d + 1], c = Ut(a, o), m = Ut(f, u), n = Math.abs(c - m) < r, n && (g[d - 2] = c, g[d + 2] = m, g[d - 1] = yt(o * o + a * a), g[d + 3] = yt(u * u + f * f)), _.push(n, n, 0, 0, n, n);
    s[h] === s[0] && s[h + 1] === s[1] && (o = s[0] - s[h - 2], a = s[1] - s[h - 1], u = s[2] - s[0], f = s[3] - s[1], c = Ut(a, o), m = Ut(f, u), Math.abs(c - m) < r && (g[h - 2] = c, g[2] = m, g[h - 1] = yt(o * o + a * a), g[3] = yt(u * u + f * f), _[h - 2] = _[h - 1] = !0));
  }
  return t;
}, sr = function(t) {
  var e = t.trim().split(" "), i = ~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0]), r = ~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1]);
  return {
    x: i / 100,
    y: r / 100
  };
}, xo = function(t) {
  return t !== t % je ? t + (t < 0 ? Ki : -Ki) : t;
}, or = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.", vo = function(t, e, i, r) {
  var n = this._origin, s = this._eOrigin, o = t[i] - n.x, a = t[i + 1] - n.y, u = yt(o * o + a * a), f = Ut(a, o), d, h;
  return o = e[i] - s.x, a = e[i + 1] - s.y, d = Ut(a, o) - f, h = xo(d), !r && ye && Math.abs(h + ye.ca) < oo && (r = ye), this._anchorPT = ye = {
    _next: this._anchorPT,
    t,
    sa: f,
    //starting angle
    ca: r && h * r.ca < 0 && Math.abs(h) > ao ? d : h,
    //change in angle
    sl: u,
    //starting length
    cl: yt(o * o + a * a) - u,
    //change in length
    i
  };
}, ar = function(t) {
  ft = fn(), xe = xe || ft && ft.plugins.morphSVG, ft && xe ? (Ai = ft.utils.toArray, xe.prototype._tweenRotation = vo, un = 1) : t && Ot("Please gsap.registerPlugin(MorphSVGPlugin)");
}, Xt = {
  version: "3.6.1",
  name: "morphSVG",
  rawVars: 1,
  // otherwise "render" would be interpreted as a function-based value.
  register: function(t, e) {
    ft = t, xe = e, ar();
  },
  init: function(t, e, i, r, n) {
    if (un || ar(1), !e)
      return Ot("invalid shape"), !1;
    ri(e) && (e = e.call(i, r, t, n));
    var s, o, a, u, f, d, h, c, m, _, g, p, w, y, x, v, b, S, P, T, k, C;
    if (typeof e == "string" || e.getBBox || e[0])
      e = {
        shape: e
      };
    else if (typeof e == "object") {
      s = {};
      for (o in e)
        s[o] = ri(e[o]) && o !== "render" ? e[o].call(i, r, t, n) : e[o];
      e = s;
    }
    var E = t.nodeType ? window.getComputedStyle(t) : {}, N = E.fill + "", F = !(N === "none" || (N.match(Me) || [])[3] === "0" || E.fillRule === "evenodd"), D = (e.origin || "50 50").split(",");
    if (s = (t.nodeName + "").toUpperCase(), f = s === "POLYLINE" || s === "POLYGON", s !== "PATH" && !f && !e.prop)
      return Ot("Cannot morph a <" + s + "> element. " + or), !1;
    if (o = s === "PATH" ? "d" : "points", !e.prop && !ri(t.setAttribute))
      return !1;
    if (u = yo(e.shape || e.d || e.points || "", o === "d", t), f && uo.test(u))
      return Ot("A <" + s + "> cannot accept path data. " + or), !1;
    if (d = e.shapeIndex || e.shapeIndex === 0 ? e.shapeIndex : "auto", h = e.map || Xt.defaultMap, this._prop = e.prop, this._render = e.render || Xt.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : Xt.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = i, u) {
      if (this._target = t, b = typeof e.precompile == "object", _ = this._prop ? t[this._prop] : t.getAttribute(o), !this._prop && !t.getAttributeNS(null, "data-original") && t.setAttributeNS(null, "data-original", _), o === "d" || this._prop) {
        if (_ = Rt(b ? e.precompile[0] : _), g = Rt(b ? e.precompile[1] : u), !b && !gi(_, g, d, h, F))
          return !1;
        for ((e.precompile === "log" || e.precompile === !0) && Ot('precompile:["' + re(_) + '","' + re(g) + '"]'), k = (e.type || Xt.defaultType) !== "linear", k && (_ = nr(_, e.smoothTolerance), g = nr(g, e.smoothTolerance), _.size || Te(_), g.size || Te(g), T = sr(D[0]), this._origin = _.origin = {
          x: _.left + T.x * _.width,
          y: _.top + T.y * _.height
        }, D[1] && (T = sr(D[1])), this._eOrigin = {
          x: g.left + T.x * g.width,
          y: g.top + T.y * g.height
        }), this._rawPath = t._gsRawPath = _, w = _.length; --w > -1; )
          for (x = _[w], v = g[w], c = x.isSmooth || [], m = v.isSmooth || [], y = x.length, ye = 0, p = 0; p < y; p += 2)
            (v[p] !== x[p] || v[p + 1] !== x[p + 1]) && (k ? c[p] && m[p] ? (S = x.smoothData, P = v.smoothData, C = p + (p === y - 4 ? 7 - y : 5), this._controlPT = {
              _next: this._controlPT,
              i: p,
              j: w,
              l1s: S[p + 1],
              l1c: P[p + 1] - S[p + 1],
              l2s: S[C],
              l2c: P[C] - S[C]
            }, a = this._tweenRotation(x, v, p + 2), this._tweenRotation(x, v, p, a), this._tweenRotation(x, v, C - 1, a), p += 4) : this._tweenRotation(x, v, p) : (a = this.add(x, p, x[p], v[p]), a = this.add(x, p + 1, x[p + 1], v[p + 1]) || a));
      } else
        a = this.add(t, "setAttribute", t.getAttribute(o) + "", u + "", r, n, 0, mo(d), o);
      k && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x), a = this.add(this._origin, "y", this._origin.y, this._eOrigin.y)), a && (this._props.push("morphSVG"), a.end = u, a.endProp = o);
    }
    return fo;
  },
  render: function(t, e) {
    for (var i = e._rawPath, r = e._controlPT, n = e._anchorPT, s = e._rnd, o = e._target, a = e._pt, u, f, d, h, c, m, _, g, p, w, y, x, v; a; )
      a.r(t, a.d), a = a._next;
    if (t === 1 && e._apply)
      for (a = e._pt; a; )
        a.end && (e._prop ? o[e._prop] = a.end : o.setAttribute(a.endProp, a.end)), a = a._next;
    else if (i) {
      for (; n; )
        m = n.sa + t * n.ca, c = n.sl + t * n.cl, n.t[n.i] = e._origin.x + Qi(m) * c, n.t[n.i + 1] = e._origin.y + Zi(m) * c, n = n._next;
      for (d = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; r; )
        _ = r.i, h = i[r.j], v = _ + (_ === h.length - 4 ? 7 - h.length : 5), m = Ut(h[v] - h[_ + 1], h[v - 1] - h[_]), y = Zi(m), x = Qi(m), p = h[_ + 2], w = h[_ + 3], c = r.l1s + d * r.l1c, h[_] = p - x * c, h[_ + 1] = w - y * c, c = r.l2s + d * r.l2c, h[v - 1] = p + x * c, h[v] = w + y * c, r = r._next;
      if (o._gsRawPath = i, e._apply) {
        for (u = "", f = " ", g = 0; g < i.length; g++)
          for (h = i[g], c = h.length, u += "M" + (h[0] * s | 0) / s + f + (h[1] * s | 0) / s + " C", _ = 2; _ < c; _++)
            u += (h[_] * s | 0) / s + f;
        e._prop ? o[e._prop] = u : o.setAttribute("d", u);
      }
    }
    e._render && i && e._render.call(e._tween, i, o);
  },
  kill: function(t) {
    this._pt = this._rawPath = 0;
  },
  getRawPath: eo,
  stringToRawPath: Rt,
  rawPathToString: re,
  normalizeStrings: function(t, e, i) {
    var r = i.shapeIndex, n = i.map, s = [t, e];
    return ir(s, r, n), s;
  },
  pathFilter: ir,
  pointsFilter: mi,
  getTotalSize: Te,
  equalizeSegmentQuantity: gi,
  convertToPath: function(t, e) {
    return Ai(t).map(function(i) {
      return ln(i, e !== !1);
    });
  },
  defaultType: "linear",
  defaultUpdateTarget: !0,
  defaultMap: "size"
};
fn() && ft.registerPlugin(Xt);
const wo = (l) => (Tn("data-v-2c4533df"), l = l(), Sn(), l), bo = ["width", "height"], To = ["fill"], So = ["width", "height"], Po = /* @__PURE__ */ wo(() => /* @__PURE__ */ tt("path", {
  id: "decagon",
  opacity: "0",
  d: "M722.773333 381.44a64 64 0 0 1 90.453334 90.453333l-252.970667 253.013334a68.266667 68.266667 0 0 1-96.512 0l-253.013333-253.013334a64 64 0 0 1 90.538666-90.453333L512 592.128l210.773333-210.773333z",
  fill: "#111111",
  "p-id": "2447"
}, null, -1)), ko = [
  Po
], Co = /* @__PURE__ */ jt({
  __name: "select",
  props: {
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
    changeShow: {
      type: Function,
      default: void 0
    }
  },
  emits: ["open", "close", "update:visible"],
  setup(l) {
    const t = l, e = mn({
      show: !1
    }), { show: i } = yn(e), r = U(), n = U(), s = U();
    var o;
    xn(() => i.value, (u) => {
      const f = n.value, d = r.value;
      if (!f || !d)
        throw new Error("无法获取ref: drawerBody或drawer元素");
      const h = f.offsetHeight, c = u ? d.offsetHeight + h : t.height;
      vn(() => {
        d.style.height = c + "px", console.log("执行tv动画", u, o), u ? o.play() : o.reverse();
      });
    });
    function a(u) {
      console.log(u.type, i.value), !(t.hover && u.type === "click") && (!t.hover && (u.type === "mouseenter" || u.type === "mouseleave") || (i.value = !i.value));
    }
    return he(() => {
      var u;
      if (t.parentDeep != null && t.parentDeep > 0 && r.value != null) {
        var f = r.value;
        for (let d = 0; d < t.parentDeep; d++)
          f = f.parentNode;
        u = f;
      } else
        t.targer && (u = document.getElementById(t.targer));
      if (u == null && console.error("targer is undefined"), console.log("onHoverTarger", u), r.value && We(r.value), t.animation && u) {
        let d = 0.3;
        const h = wt.timeline({ paused: !0 });
        h.fromTo(s.value.parentElement, { opacity: 0, transformOrigin: "center" }, { opacity: 1, fill: t.color }), u.addEventListener("mouseenter", () => {
          h.play().duration(d);
        }), u.addEventListener("mouseleave", () => {
          i.value ? (i.value = !1, h.reverse().duration(t.duration)) : h.reverse();
        });
      }
      o = (() => {
        wt.registerPlugin(Xt);
        let d = Xt.convertToPath([s.value]), h = wt.timeline({
          paused: !0
        });
        return h.to(d, { rotate: t.rotate, transformOrigin: "50% 50%", duration: t.duration }), h.to(d, { morphSVG: "#decagon" }, 0), h;
      })();
    }), (u, f) => (xt(), Dt("div", {
      ref_key: "root",
      ref: r,
      class: wn(["set", bn(i) ? "show" : ""]),
      style: Et({
        width: t.width + "px",
        height: t.height + "px",
        transition: `all ${t.duration}s ease`
      }),
      onMouseenter: a,
      onMouseleave: a
    }, [
      (xt(), Dt("svg", {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: a,
        width: t.width,
        height: t.height,
        id: "root",
        style: Et({ "--hover-color": t.hoverColor })
      }, [
        tt("path", {
          class: "rare-more",
          ref_key: "moreRef",
          ref: s,
          d: "M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z",
          fill: t.color,
          "p-id": "2443"
        }, null, 8, To)
      ], 12, bo)),
      (xt(), Dt("svg", {
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: t.width,
        display: "none",
        height: t.height
      }, ko, 8, So)),
      tt("div", {
        ref_key: "drawerBody",
        ref: n
      }, [
        lr(u.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 38));
  }
});
const Eo = /* @__PURE__ */ Ae(Co, [["__scopeId", "data-v-2c4533df"]]);
export {
  Fs as Add,
  Oo as Close,
  Ro as Delete,
  Do as Edit,
  Ao as More,
  Eo as Select,
  zo as Tray
};
