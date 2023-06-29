import { defineComponent as ce, ref as tt, onMounted as De, openBlock as fe, createElementBlock as Ae, normalizeStyle as se, createElementVNode as bt, createBlock as yi, renderSlot as vi } from "vue";
function Tt(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function cn(i, t) {
  i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.__proto__ = t;
}
/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ut = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, oe = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Pr, Q, I, _t = 1e8, A = 1 / _t, ur = Math.PI * 2, bi = ur / 4, xi = 0, fn = Math.sqrt, wi = Math.cos, ki = Math.sin, G = function(t) {
  return typeof t == "string";
}, B = function(t) {
  return typeof t == "function";
}, Ot = function(t) {
  return typeof t == "number";
}, Cr = function(t) {
  return typeof t > "u";
}, wt = function(t) {
  return typeof t == "object";
}, et = function(t) {
  return t !== !1;
}, Dr = function() {
  return typeof window < "u";
}, ze = function(t) {
  return B(t) || G(t);
}, _n = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Z = Array.isArray, hr = /(?:-?\.?\d|\.)+/gi, dn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Je = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, pn = /[+-]=-?[.\d]+/, gn = /[^,'"\[\]\s]+/gi, Ti = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, F, ft, cr, Ar, ht = {}, Ne = {}, mn, yn = function(t) {
  return (Ne = jt(t, ht)) && it;
}, Er = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, qe = function(t, e) {
  return !e && console.warn(t);
}, vn = function(t, e) {
  return t && (ht[t] = e) && Ne && (Ne[t] = e) || ht;
}, we = function() {
  return 0;
}, Mi = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Le = {
  suppressEvents: !0,
  kill: !1
}, Oi = {
  suppressEvents: !0
}, Fr = {}, At = [], fr = {}, bn, st = {}, tr = {}, Gr = 30, Ie = [], zr = "", Rr = function(t) {
  var e = t[0], r, n;
  if (wt(e) || B(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (n = Ie.length; n-- && !Ie[n].targetTest(e); )
      ;
    r = Ie[n];
  }
  for (n = t.length; n--; )
    t[n] && (t[n]._gsap || (t[n]._gsap = new Yn(t[n], r))) || t.splice(n, 1);
  return t;
}, Wt = function(t) {
  return t._gsap || Rr(dt(t))[0]._gsap;
}, xn = function(t, e, r) {
  return (r = t[e]) && B(r) ? t[e]() : Cr(r) && t.getAttribute && t.getAttribute(e) || r;
}, rt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, N = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, K = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, re = function(t, e) {
  var r = e.charAt(0), n = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + n : r === "-" ? t - n : r === "*" ? t * n : t / n;
}, Si = function(t, e) {
  for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, Ve = function() {
  var t = At.length, e = At.slice(0), r, n;
  for (fr = {}, At.length = 0, r = 0; r < t; r++)
    n = e[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, wn = function(t, e, r, n) {
  At.length && !Q && Ve(), t.render(e, r, n || Q && e < 0 && (t._initted || t._startAt)), At.length && !Q && Ve();
}, kn = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(gn).length < 2 ? e : G(t) ? t.trim() : t;
}, Tn = function(t) {
  return t;
}, gt = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Pi = function(t) {
  return function(e, r) {
    for (var n in r)
      n in e || n === "duration" && t || n === "ease" || (e[n] = r[n]);
  };
}, jt = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Kr = function i(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = wt(e[r]) ? i(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Ue = function(t, e) {
  var r = {}, n;
  for (n in t)
    n in e || (r[n] = t[n]);
  return r;
}, ye = function(t) {
  var e = t.parent || F, r = t.keyframes ? Pi(Z(t.keyframes)) : gt;
  if (et(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Ci = function(t, e) {
  for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Mn = function(t, e, r, n, s) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var o = t[n], a;
  if (s)
    for (a = e[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e;
}, je = function(t, e, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var s = e._prev, o = e._next;
  s ? s._next = o : t[r] === e && (t[r] = o), o ? o._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null;
}, zt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Xt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, Di = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, _r = function(t, e, r, n) {
  return t._startAt && (Q ? t._startAt.revert(Le) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n));
}, Ai = function i(t) {
  return !t || t._ts && i(t.parent);
}, jr = function(t) {
  return t._repeat ? ae(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, ae = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, $e = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Qe = function(t) {
  return t._end = K(t._start + (t._tDur / Math.abs(t._ts || t._rts || A) || 0));
}, Ze = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = K(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Qe(t), r._dirty || Xt(r, t)), t;
}, On = function(t, e) {
  var r;
  if ((e._time || e._initted && !e._dur) && (r = $e(t.rawTime(), e), (!e._dur || Ee(0, e.totalDuration(), r) - e._tTime > A) && e.render(r, !0)), Xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -A;
  }
}, yt = function(t, e, r, n) {
  return e.parent && zt(e), e._start = K((Ot(r) ? r : r || t !== F ? ct(t, r, e) : t._time) + e._delay), e._end = K(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Mn(t, e, "_first", "_last", t._sort ? "_start" : 0), dr(e) || (t._recent = e), n || On(t, e), t._ts < 0 && Ze(t, t._tTime), t;
}, Sn = function(t, e) {
  return (ht.ScrollTrigger || Er("scrollTrigger", e)) && ht.ScrollTrigger.create(e, t);
}, Pn = function(t, e, r, n, s) {
  if (Ir(t, e, s), !t._initted)
    return 1;
  if (!r && t._pt && !Q && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && bn !== ot.frame)
    return At.push(t), t._lazy = [s, n], 1;
}, Ei = function i(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || i(e));
}, dr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Fi = function(t, e, r, n) {
  var s = t.ratio, o = e < 0 || !e && (!t._start && Ei(t) && !(!t._initted && dr(t)) || (t._ts < 0 || t._dp._ts < 0) && !dr(t)) ? 0 : 1, a = t._rDelay, l = 0, u, h, f;
  if (a && t._repeat && (l = Ee(0, t._tDur, e), h = ae(l, a), t._yoyo && h & 1 && (o = 1 - o), h !== ae(t._tTime, a) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || Q || n || t._zTime === A || !e && t._zTime) {
    if (!t._initted && Pn(t, e, n, r, l))
      return;
    for (f = t._zTime, t._zTime = e || (r ? A : 0), r || (r = e && !f), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    e < 0 && _r(t, e, r, !0), t._onUpdate && !r && pt(t, "onUpdate"), l && t._repeat && !r && t.parent && pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && zt(t, 1), !r && !Q && (pt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, zi = function(t, e, r) {
  var n;
  if (r > e)
    for (n = t._first; n && n._start <= r; ) {
      if (n.data === "isPause" && n._start > e)
        return n;
      n = n._next;
    }
  else
    for (n = t._last; n && n._start >= r; ) {
      if (n.data === "isPause" && n._start < e)
        return n;
      n = n._prev;
    }
}, le = function(t, e, r, n) {
  var s = t._repeat, o = K(e) || 0, a = t._tTime / t._tDur;
  return a && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : K(o * (s + 1) + t._rDelay * s) : o, a > 0 && !n && Ze(t, t._tTime = t._tDur * a), t.parent && Qe(t), r || Xt(t.parent, t), t;
}, Qr = function(t) {
  return t instanceof J ? Xt(t) : le(t, t._dur);
}, Ri = {
  _start: 0,
  endTime: we,
  totalDuration: we
}, ct = function i(t, e, r) {
  var n = t.labels, s = t._recent || Ri, o = t.duration() >= _t ? s.endTime(!1) : t._dur, a, l, u;
  return G(e) && (isNaN(e) || e in n) ? (l = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (e in n || (n[e] = o), n[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && r && (l = l / 100 * (Z(r) ? r[0] : r).totalDuration()), a > 1 ? i(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e;
}, ve = function(t, e, r) {
  var n = Ot(e[1]), s = (n ? 2 : 1) + (t < 2 ? 0 : 1), o = e[s], a, l;
  if (n && (o.duration = e[1]), o.parent = r, t) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = et(l.vars.inherit) && l.parent;
    o.immediateRender = et(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1];
  }
  return new $(e[0], o, e[s + 1]);
}, Lt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Ee = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, j = function(t, e) {
  return !G(t) || !(e = Ti.exec(t)) ? "" : e[1];
}, Li = function(t, e, r) {
  return Lt(r, function(n) {
    return Ee(t, e, n);
  });
}, pr = [].slice, Cn = function(t, e) {
  return t && wt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && wt(t[0])) && !t.nodeType && t !== ft;
}, Ii = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(n) {
    var s;
    return G(n) && !e || Cn(n, 1) ? (s = r).push.apply(s, dt(n)) : r.push(n);
  }) || r;
}, dt = function(t, e, r) {
  return I && !e && I.selector ? I.selector(t) : G(t) && !r && (cr || !ue()) ? pr.call((e || Ar).querySelectorAll(t), 0) : Z(t) ? Ii(t, r) : Cn(t) ? pr.call(t, 0) : t ? [t] : [];
}, gr = function(t) {
  return t = dt(t)[0] || qe("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return dt(e, r.querySelectorAll ? r : r === t ? qe("Invalid scope") || Ar.createElement("div") : t);
  };
}, Dn = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, An = function(t) {
  if (B(t))
    return t;
  var e = wt(t) ? t : {
    each: t
  }, r = Gt(e.ease), n = e.from || 0, s = parseFloat(e.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, u = e.axis, h = n, f = n;
  return G(n) ? h = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (h = n[0], f = n[1]), function(_, d, p) {
    var c = (p || e).length, g = o[c], m, y, b, x, v, M, T, k, w;
    if (!g) {
      if (w = e.grid === "auto" ? 0 : (e.grid || [1, _t])[1], !w) {
        for (T = -_t; T < (T = p[w++].getBoundingClientRect().left) && w < c; )
          ;
        w--;
      }
      for (g = o[c] = [], m = l ? Math.min(w, c) * h - 0.5 : n % w, y = w === _t ? 0 : l ? c * f / w - 0.5 : n / w | 0, T = 0, k = _t, M = 0; M < c; M++)
        b = M % w - m, x = y - (M / w | 0), g[M] = v = u ? Math.abs(u === "y" ? x : b) : fn(b * b + x * x), v > T && (T = v), v < k && (k = v);
      n === "random" && Dn(g), g.max = T - k, g.min = k, g.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (w > c ? c - 1 : u ? u === "y" ? c / w : w : Math.max(w, c / w)) || 0) * (n === "edges" ? -1 : 1), g.b = c < 0 ? s - c : s, g.u = j(e.amount || e.each) || 0, r = r && c < 0 ? Vn(r) : r;
    }
    return c = (g[_] - g.min) / g.max || 0, K(g.b + (r ? r(c) : c) * g.v) + g.u;
  };
}, mr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var n = K(Math.round(parseFloat(r) / t) * t * e);
    return (n - n % 1) / e + (Ot(r) ? 0 : j(r));
  };
}, En = function(t, e) {
  var r = Z(t), n, s;
  return !r && wt(t) && (n = r = t.radius || _t, t.values ? (t = dt(t.values), (s = !Ot(t[0])) && (n *= n)) : t = mr(t.increment)), Lt(e, r ? B(t) ? function(o) {
    return s = t(o), Math.abs(s - o) <= n ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = _t, h = 0, f = t.length, _, d; f--; )
      s ? (_ = t[f].x - a, d = t[f].y - l, _ = _ * _ + d * d) : _ = Math.abs(t[f] - a), _ < u && (u = _, h = f);
    return h = !n || u <= n ? t[h] : o, s || h === o || Ot(o) ? h : h + j(o);
  } : mr(t));
}, Fn = function(t, e, r, n) {
  return Lt(Z(t) ? !e : r === !0 ? !!(r = 0) : !n, function() {
    return Z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * n) / n;
  });
}, Bi = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(n) {
    return e.reduce(function(s, o) {
      return o(s);
    }, n);
  };
}, Ni = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || j(r));
  };
}, qi = function(t, e, r) {
  return Rn(t, e, 0, 1, r);
}, zn = function(t, e, r) {
  return Lt(r, function(n) {
    return t[~~e(n)];
  });
}, Vi = function i(t, e, r) {
  var n = e - t;
  return Z(t) ? zn(t, i(0, t.length), e) : Lt(r, function(s) {
    return (n + (s - t) % n) % n + t;
  });
}, Ui = function i(t, e, r) {
  var n = e - t, s = n * 2;
  return Z(t) ? zn(t, i(0, t.length - 1), e) : Lt(r, function(o) {
    return o = (s + (o - t) % s) % s || 0, t + (o > n ? s - o : o);
  });
}, ke = function(t) {
  for (var e = 0, r = "", n, s, o, a; ~(n = t.indexOf("random(", e)); )
    o = t.indexOf(")", n), a = t.charAt(n + 7) === "[", s = t.substr(n + 7, o - n - 7).match(a ? gn : hr), r += t.substr(e, n - e) + Fn(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), e = o + 1;
  return r + t.substr(e, t.length - e);
}, Rn = function(t, e, r, n, s) {
  var o = e - t, a = n - r;
  return Lt(s, function(l) {
    return r + ((l - t) / o * a || 0);
  });
}, $i = function i(t, e, r, n) {
  var s = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!s) {
    var o = G(t), a = {}, l, u, h, f, _;
    if (r === !0 && (n = 1) && (r = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Z(t) && !Z(e)) {
      for (h = [], f = t.length, _ = f - 2, u = 1; u < f; u++)
        h.push(i(t[u - 1], t[u]));
      f--, s = function(p) {
        p *= f;
        var c = Math.min(_, ~~p);
        return h[c](p - c);
      }, r = e;
    } else
      n || (t = jt(Z(t) ? [] : {}, t));
    if (!h) {
      for (l in e)
        Lr.call(a, t, l, "get", e[l]);
      s = function(p) {
        return qr(p, a) || (o ? t.p : t);
      };
    }
  }
  return Lt(r, s);
}, Zr = function(t, e, r) {
  var n = t.labels, s = _t, o, a, l;
  for (o in n)
    a = n[o] - e, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, pt = function(t, e, r) {
  var n = t.vars, s = n[e], o = I, a = t._ctx, l, u, h;
  if (s)
    return l = n[e + "Params"], u = n.callbackScope || t, r && At.length && Ve(), a && (I = a), h = l ? s.apply(u, l) : s.call(u), I = o, h;
}, ge = function(t) {
  return zt(t), t.scrollTrigger && t.scrollTrigger.kill(!!Q), t.progress() < 1 && pt(t, "onInterrupt"), t;
}, ee, Ln = [], In = function(t) {
  if (Dr() && t) {
    t = !t.name && t.default || t;
    var e = t.name, r = B(t), n = e && !r && t.init ? function() {
      this._props = [];
    } : t, s = {
      init: we,
      render: qr,
      add: Lr,
      kill: ss,
      modifier: is,
      rawVars: 0
    }, o = {
      targetTest: 0,
      get: 0,
      getSetter: Nr,
      aliases: {},
      register: 0
    };
    if (ue(), t !== n) {
      if (st[e])
        return;
      gt(n, gt(Ue(t, s), o)), jt(n.prototype, jt(s, Ue(t, o))), st[n.prop = e] = n, t.targetTest && (Ie.push(n), Fr[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
    }
    vn(e, n), t.register && t.register(it, n, nt);
  } else
    t && Ln.push(t);
}, D = 255, me = {
  aqua: [0, D, D],
  lime: [0, D, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, D],
  navy: [0, 0, 128],
  white: [D, D, D],
  olive: [128, 128, 0],
  yellow: [D, D, 0],
  orange: [D, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [D, 0, 0],
  pink: [D, 192, 203],
  cyan: [0, D, D],
  transparent: [D, D, D, 0]
}, er = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * D + 0.5 | 0;
}, Bn = function(t, e, r) {
  var n = t ? Ot(t) ? [t >> 16, t >> 8 & D, t & D] : 0 : me.black, s, o, a, l, u, h, f, _, d, p;
  if (!n) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), me[t])
      n = me[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return n = parseInt(t.substr(1, 6), 16), [n >> 16, n >> 8 & D, n & D, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & D, t & D];
    } else if (t.substr(0, 3) === "hsl") {
      if (n = p = t.match(hr), !e)
        l = +n[0] % 360 / 360, u = +n[1] / 100, h = +n[2] / 100, o = h <= 0.5 ? h * (u + 1) : h + u - h * u, s = h * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = er(l + 1 / 3, s, o), n[1] = er(l, s, o), n[2] = er(l - 1 / 3, s, o);
      else if (~t.indexOf("="))
        return n = t.match(dn), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = t.match(hr) || me.transparent;
    n = n.map(Number);
  }
  return e && !p && (s = n[0] / D, o = n[1] / D, a = n[2] / D, f = Math.max(s, o, a), _ = Math.min(s, o, a), h = (f + _) / 2, f === _ ? l = u = 0 : (d = f - _, u = h > 0.5 ? d / (2 - f - _) : d / (f + _), l = f === s ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(u * 100 + 0.5), n[2] = ~~(h * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, Nn = function(t) {
  var e = [], r = [], n = -1;
  return t.split(Et).forEach(function(s) {
    var o = s.match(te) || [];
    e.push.apply(e, o), r.push(n += o.length + 1);
  }), e.c = r, e;
}, Hr = function(t, e, r) {
  var n = "", s = (t + n).match(Et), o = e ? "hsla(" : "rgba(", a = 0, l, u, h, f;
  if (!s)
    return t;
  if (s = s.map(function(_) {
    return (_ = Bn(_, e, 1)) && o + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (h = Nn(t), l = r.c, l.join(n) !== h.c.join(n)))
    for (u = t.replace(Et, "1").split(te), f = u.length - 1; a < f; a++)
      n += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (h.length ? h : s.length ? s : r).shift());
  if (!u)
    for (u = t.split(Et), f = u.length - 1; a < f; a++)
      n += u[a] + s[a];
  return n + u[f];
}, Et = function() {
  var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in me)
    i += "|" + t + "\\b";
  return new RegExp(i + ")", "gi");
}(), Yi = /hsl[a]?\(/, qn = function(t) {
  var e = t.join(" "), r;
  if (Et.lastIndex = 0, Et.test(e))
    return r = Yi.test(e), t[1] = Hr(t[1], r), t[0] = Hr(t[0], r, Nn(t[1])), !0;
}, Te, ot = function() {
  var i = Date.now, t = 500, e = 33, r = i(), n = r, s = 1e3 / 240, o = s, a = [], l, u, h, f, _, d, p = function c(g) {
    var m = i() - n, y = g === !0, b, x, v, M;
    if (m > t && (r += m - e), n += m, v = n - r, b = v - o, (b > 0 || y) && (M = ++f.frame, _ = v - f.time * 1e3, f.time = v = v / 1e3, o += b + (b >= s ? 4 : s - b), x = 1), y || (l = u(c)), x)
      for (d = 0; d < a.length; d++)
        a[d](v, _, M, g);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(g) {
      return _ / (1e3 / (g || 60));
    },
    wake: function() {
      mn && (!cr && Dr() && (ft = cr = window, Ar = ft.document || {}, ht.gsap = it, (ft.gsapVersions || (ft.gsapVersions = [])).push(it.version), yn(Ne || ft.GreenSockGlobals || !ft.gsap && ft || {}), h = ft.requestAnimationFrame, Ln.forEach(In)), l && f.sleep(), u = h || function(g) {
        return setTimeout(g, o - f.time * 1e3 + 1 | 0);
      }, Te = 1, p(2));
    },
    sleep: function() {
      (h ? ft.cancelAnimationFrame : clearTimeout)(l), Te = 0, u = we;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, e = Math.min(m || 33, t);
    },
    fps: function(g) {
      s = 1e3 / (g || 240), o = f.time * 1e3 + s;
    },
    add: function(g, m, y) {
      var b = m ? function(x, v, M, T) {
        g(x, v, M, T), f.remove(b);
      } : g;
      return f.remove(g), a[y ? "unshift" : "push"](b), ue(), b;
    },
    remove: function(g, m) {
      ~(m = a.indexOf(g)) && a.splice(m, 1) && d >= m && d--;
    },
    _listeners: a
  }, f;
}(), ue = function() {
  return !Te && ot.wake();
}, S = {}, Wi = /^[\d.\-M][\d.\-,\s]/, Xi = /["']/g, Gi = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), n = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
    l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), e[n] = isNaN(u) ? u.replace(Xi, "").trim() : +u, n = l.substr(a + 1).trim();
  return e;
}, Ki = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), n = t.indexOf("(", e);
  return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r);
}, ji = function(t) {
  var e = (t + "").split("("), r = S[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Gi(e[1])] : Ki(t).split(",").map(kn)) : S._CE && Wi.test(t) ? S._CE("", t) : r;
}, Vn = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Un = function i(t, e) {
  for (var r = t._first, n; r; )
    r instanceof J ? i(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? i(r.timeline, e) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = e)), r = r._next;
}, Gt = function(t, e) {
  return t && (B(t) ? t : S[t] || ji(t)) || e;
}, Qt = function(t, e, r, n) {
  r === void 0 && (r = function(l) {
    return 1 - e(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: e,
    easeOut: r,
    easeInOut: n
  }, o;
  return rt(t, function(a) {
    S[a] = ht[a] = s, S[o = a.toLowerCase()] = r;
    for (var l in s)
      S[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = S[a + "." + l] = s[l];
  }), s;
}, $n = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, rr = function i(t, e, r) {
  var n = e >= 1 ? e : 1, s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = s / ur * (Math.asin(1 / n) || 0), a = function(h) {
    return h === 1 ? 1 : n * Math.pow(2, -10 * h) * ki((h - o) * s) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : $n(a);
  return s = ur / s, l.config = function(u, h) {
    return i(t, u, h);
  }, l;
}, nr = function i(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, n = t === "out" ? r : t === "in" ? function(s) {
    return 1 - r(1 - s);
  } : $n(r);
  return n.config = function(s) {
    return i(t, s);
  }, n;
};
rt("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, t) {
  var e = t < 5 ? t + 1 : t;
  Qt(i + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
S.Linear.easeNone = S.none = S.Linear.easeIn;
Qt("Elastic", rr("in"), rr("out"), rr());
(function(i, t) {
  var e = 1 / t, r = 2 * e, n = 2.5 * e, s = function(a) {
    return a < e ? i * a * a : a < r ? i * Math.pow(a - 1.5 / t, 2) + 0.75 : a < n ? i * (a -= 2.25 / t) * a + 0.9375 : i * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Qt("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
Qt("Expo", function(i) {
  return i ? Math.pow(2, 10 * (i - 1)) : 0;
});
Qt("Circ", function(i) {
  return -(fn(1 - i * i) - 1);
});
Qt("Sine", function(i) {
  return i === 1 ? 1 : -wi(i * bi) + 1;
});
Qt("Back", nr("in"), nr("out"), nr());
S.SteppedEase = S.steps = ht.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, n = t + (e ? 0 : 1), s = e ? 1 : 0, o = 1 - A;
    return function(a) {
      return ((n * Ee(0, o, a) | 0) + s) * r;
    };
  }
};
oe.ease = S["quad.out"];
rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
  return zr += i + "," + i + "Params,";
});
var Yn = function(t, e) {
  this.id = xi++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : xn, this.set = e ? e.getSetter : Nr;
}, Me = /* @__PURE__ */ function() {
  function i(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, le(this, +e.duration, 1, 1), this.data = e.data, I && (this._ctx = I, I.data.push(this)), Te || ot.wake();
  }
  var t = i.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, le(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, n) {
    if (ue(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Ze(this, r), !s._dp || s.parent || On(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && yt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === A || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), wn(this, r, n)), this;
  }, t.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + jr(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, t.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + jr(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(r, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, n) : this._repeat ? ae(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -A ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? $e(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -A ? 0 : this._rts, this.totalTime(Ee(-Math.abs(this._delay), this._tDur, n), !0), Qe(this), Di(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ue(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== A && (this._tTime -= A)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && yt(n, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (et(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $e(n.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = Oi);
    var n = Q;
    return Q = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Q = n, this;
  }, t.globalTime = function(r) {
    for (var n = this, s = arguments.length ? r : n.rawTime(); n; )
      s = n._start + s / (n._ts || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r) : s;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Qr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, Qr(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, n) {
    return this.totalTime(ct(this, r), et(n));
  }, t.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, et(n));
  }, t.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, t.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -A : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -A, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, n = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= n && s < this.endTime(!0) - A);
  }, t.eventCallback = function(r, n, s) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[r] = n, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = n)) : delete o[r], this) : o[r];
  }, t.then = function(r) {
    var n = this;
    return new Promise(function(s) {
      var o = B(r) ? r : Tn, a = function() {
        var u = n.then;
        n.then = null, B(o) && (o = o(n)) && (o.then || o === n) && (n.then = u), s(o), n.then = u;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
    });
  }, t.kill = function() {
    ge(this);
  }, i;
}();
gt(Me.prototype, {
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
var J = /* @__PURE__ */ function(i) {
  cn(t, i);
  function t(r, n) {
    var s;
    return r === void 0 && (r = {}), s = i.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = et(r.sortChildren), F && yt(r.parent || F, Tt(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Sn(Tt(s), r.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(n, s, o) {
    return ve(0, arguments, this), this;
  }, e.from = function(n, s, o) {
    return ve(1, arguments, this), this;
  }, e.fromTo = function(n, s, o, a) {
    return ve(2, arguments, this), this;
  }, e.set = function(n, s, o) {
    return s.duration = 0, s.parent = this, ye(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new $(n, s, ct(this, o), 1), this;
  }, e.call = function(n, s, o) {
    return yt(this, $.delayedCall(0, n, s), o);
  }, e.staggerTo = function(n, s, o, a, l, u, h) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = h, o.parent = this, new $(n, o, ct(this, l)), this;
  }, e.staggerFrom = function(n, s, o, a, l, u, h) {
    return o.runBackwards = 1, ye(o).immediateRender = et(o.immediateRender), this.staggerTo(n, s, o, a, l, u, h);
  }, e.staggerFromTo = function(n, s, o, a, l, u, h, f) {
    return a.startAt = o, ye(a).immediateRender = et(a.immediateRender), this.staggerTo(n, s, a, l, u, h, f);
  }, e.render = function(n, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, h = n <= 0 ? 0 : K(n), f = this._zTime < 0 != n < 0 && (this._initted || !u), _, d, p, c, g, m, y, b, x, v, M, T;
    if (this !== F && h > l && n >= 0 && (h = l), h !== this._tTime || o || f) {
      if (a !== this._time && u && (h += this._time - a, n += this._time - a), _ = h, x = this._start, b = this._ts, m = !b, f && (u || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (M = this._yoyo, g = u + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(g * 100 + n, s, o);
        if (_ = K(h % g), h === l ? (c = this._repeat, _ = u) : (c = ~~(h / g), c && c === h / g && (_ = u, c--), _ > u && (_ = u)), v = ae(this._tTime, g), !a && this._tTime && v !== c && this._tTime - v * g - this._dur <= 0 && (v = c), M && c & 1 && (_ = u - _, T = 1), c !== v && !this._lock) {
          var k = M && v & 1, w = k === (M && c & 1);
          if (c < v && (k = !k), a = k ? 0 : u, this._lock = 1, this.render(a || (T ? 0 : K(c * g)), s, !u)._lock = 0, this._tTime = h, !s && this.parent && pt(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, w && (this._lock = 2, a = k ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          Un(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = zi(this, K(a), K(_)), y && (h -= _ - (_ = y._start))), this._tTime = h, this._time = _, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && _ && !s && !c && (pt(this, "onStart"), this._tTime !== h))
        return this;
      if (_ >= a && n >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || _ >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(n, s, o);
            if (d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, s, o), _ !== this._time || !this._ts && !m) {
              y = 0, p && (h += this._zTime = -A);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var P = n < 0 ? n : _; d; ) {
          if (p = d._prev, (d._act || P <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(n, s, o);
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, s, o || Q && (d._initted || d._startAt)), _ !== this._time || !this._ts && !m) {
              y = 0, p && (h += this._zTime = P ? -A : A);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !s && (this.pause(), y.render(_ >= a ? 0 : -A)._zTime = _ >= a ? 1 : -1, this._ts))
        return this._start = x, Qe(this), this.render(n, s, o);
      this._onUpdate && !s && pt(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && a) && (x === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (h === l && this._ts > 0 || !h && this._ts < 0) && zt(this, 1), !s && !(n < 0 && !a) && (h || a || !l) && (pt(this, h === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(n, s) {
    var o = this;
    if (Ot(s) || (s = ct(this, s, n)), !(n instanceof Me)) {
      if (Z(n))
        return n.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (G(n))
        return this.addLabel(n, s);
      if (B(n))
        n = $.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? yt(this, n, s) : this;
  }, e.getChildren = function(n, s, o, a) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -_t);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof $ ? s && l.push(u) : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, e.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === n)
        return s[o];
  }, e.remove = function(n) {
    return G(n) ? this.removeLabel(n) : B(n) ? this.killTweensOf(n) : (je(this, n), n === this._recent && (this._recent = this._last), Xt(this));
  }, e.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = K(ot.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), i.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(n, s) {
    return this.labels[n] = ct(this, s), this;
  }, e.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, e.addPause = function(n, s, o) {
    var a = $.delayedCall(0, s || we, o);
    return a.data = "isPause", this._hasPause = 1, yt(this, a, ct(this, n));
  }, e.removePause = function(n) {
    var s = this._first;
    for (n = ct(this, n); s; )
      s._start === n && s.data === "isPause" && zt(s), s = s._next;
  }, e.killTweensOf = function(n, s, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      Pt !== a[l] && a[l].kill(n, s);
    return this;
  }, e.getTweensOf = function(n, s) {
    for (var o = [], a = dt(n), l = this._first, u = Ot(s), h; l; )
      l instanceof $ ? Si(l._targets, a) && (u ? (!Pt || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (h = l.getTweensOf(a, s)).length && o.push.apply(o, h), l = l._next;
    return o;
  }, e.tweenTo = function(n, s) {
    s = s || {};
    var o = this, a = ct(o, n), l = s, u = l.startAt, h = l.onStart, f = l.onStartParams, _ = l.immediateRender, d, p = $.to(o, gt({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || A,
      onStart: function() {
        if (o.pause(), !d) {
          var g = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== g && le(p, g, 0, 1).render(p._time, !0, !0), d = 1;
        }
        h && h.apply(p, f || []);
      }
    }, s));
    return _ ? p.render(0) : p;
  }, e.tweenFromTo = function(n, s, o) {
    return this.tweenTo(s, gt({
      startAt: {
        time: ct(this, n)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(n) {
    return n === void 0 && (n = this._time), Zr(this, ct(this, n));
  }, e.previousLabel = function(n) {
    return n === void 0 && (n = this._time), Zr(this, ct(this, n), 1);
  }, e.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + A);
  }, e.shiftChildren = function(n, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (s)
      for (u in l)
        l[u] >= o && (l[u] += n);
    return Xt(this);
  }, e.invalidate = function(n) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(n), s = s._next;
    return i.prototype.invalidate.call(this, n);
  }, e.clear = function(n) {
    n === void 0 && (n = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), Xt(this);
  }, e.totalDuration = function(n) {
    var s = 0, o = this, a = o._last, l = _t, u, h, f;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (f = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), h = a._start, h > l && o._sort && a._ts && !o._lock ? (o._lock = 1, yt(o, a, h - a._delay, 1)._lock = 0) : l = h, h < 0 && a._ts && (s -= h, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      le(o, o === F && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(n) {
    if (F._ts && (wn(F, $e(n, F)), bn = ot.frame), ot.frame >= Gr) {
      Gr += ut.autoSleep || 120;
      var s = F._first;
      if ((!s || !s._ts) && ut.autoSleep && ot._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || ot.sleep();
      }
    }
  }, t;
}(Me);
gt(J.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Qi = function(t, e, r, n, s, o, a) {
  var l = new nt(this._pt, t, e, 0, 1, Qn, null, s), u = 0, h = 0, f, _, d, p, c, g, m, y;
  for (l.b = r, l.e = n, r += "", n += "", (m = ~n.indexOf("random(")) && (n = ke(n)), o && (y = [r, n], o(y, t, e), r = y[0], n = y[1]), _ = r.match(Je) || []; f = Je.exec(n); )
    p = f[0], c = n.substring(u, f.index), d ? d = (d + 1) % 5 : c.substr(-5) === "rgba(" && (d = 1), p !== _[h++] && (g = parseFloat(_[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: c || h === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: p.charAt(1) === "=" ? re(g, p) - g : parseFloat(p) - g,
      m: d && d < 4 ? Math.round : 0
    }, u = Je.lastIndex);
  return l.c = u < n.length ? n.substring(u, n.length) : "", l.fp = a, (pn.test(n) || m) && (l.e = 0), this._pt = l, l;
}, Lr = function(t, e, r, n, s, o, a, l, u, h) {
  B(n) && (n = n(s || 0, t, o));
  var f = t[e], _ = r !== "get" ? r : B(f) ? u ? t[e.indexOf("set") || !B(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f, d = B(f) ? u ? es : Kn : Br, p;
  if (G(n) && (~n.indexOf("random(") && (n = ke(n)), n.charAt(1) === "=" && (p = re(_, n) + (j(_) || 0), (p || p === 0) && (n = p))), !h || _ !== n || yr)
    return !isNaN(_ * n) && n !== "" ? (p = new nt(this._pt, t, e, +_ || 0, n - (_ || 0), typeof f == "boolean" ? ns : jn, 0, d), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!f && !(e in t) && Er(e, n), Qi.call(this, t, e, _, n, d, l || ut.stringFilter, u));
}, Zi = function(t, e, r, n, s) {
  if (B(t) && (t = be(t, s, e, r, n)), !wt(t) || t.style && t.nodeType || Z(t) || _n(t))
    return G(t) ? be(t, s, e, r, n) : t;
  var o = {}, a;
  for (a in t)
    o[a] = be(t[a], s, e, r, n);
  return o;
}, Wn = function(t, e, r, n, s, o) {
  var a, l, u, h;
  if (st[t] && (a = new st[t]()).init(s, a.rawVars ? e[t] : Zi(e[t], n, s, o, r), r, n, o) !== !1 && (r._pt = l = new nt(r._pt, s, t, 0, 1, a.render, a, 0, a.priority), r !== ee))
    for (u = r._ptLookup[r._targets.indexOf(s)], h = a._props.length; h--; )
      u[a._props[h]] = l;
  return a;
}, Pt, yr, Ir = function i(t, e, r) {
  var n = t.vars, s = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, u = n.onUpdate, h = n.onUpdateParams, f = n.callbackScope, _ = n.runBackwards, d = n.yoyoEase, p = n.keyframes, c = n.autoRevert, g = t._dur, m = t._startAt, y = t._targets, b = t.parent, x = b && b.data === "nested" ? b.vars.targets : y, v = t._overwrite === "auto" && !Pr, M = t.timeline, T, k, w, P, C, R, q, V, E, Y, U, H, It;
  if (M && (!p || !s) && (s = "none"), t._ease = Gt(s, oe.ease), t._yEase = d ? Vn(Gt(d === !0 ? s : d, oe.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !M && !!n.runBackwards, !M || p && !n.stagger) {
    if (V = y[0] ? Wt(y[0]).harness : 0, H = V && n[V.prop], T = Ue(n, Fr), m && (m._zTime < 0 && m.progress(1), e < 0 && _ && a && !c ? m.render(-1, !0) : m.revert(_ && g ? Le : Mi), m._lazy = 0), o) {
      if (zt(t._startAt = $.set(y, gt({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !m && et(l),
        startAt: null,
        delay: 0,
        onUpdate: u,
        onUpdateParams: h,
        callbackScope: f,
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q || !a && !c) && t._startAt.revert(Le), a && g && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (_ && g && !m) {
      if (e && (a = !1), w = gt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !m && et(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, T), H && (w[V.prop] = H), zt(t._startAt = $.set(y, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q ? t._startAt.revert(Le) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        i(t._startAt, A, A);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = g && et(l) || l && !g, k = 0; k < y.length; k++) {
      if (C = y[k], q = C._gsap || Rr(y)[k]._gsap, t._ptLookup[k] = Y = {}, fr[q.id] && At.length && Ve(), U = x === y ? k : x.indexOf(C), V && (E = new V()).init(C, H || T, t, U, x) !== !1 && (t._pt = P = new nt(t._pt, C, E.name, 0, 1, E.render, E, 0, E.priority), E._props.forEach(function(Bt) {
        Y[Bt] = P;
      }), E.priority && (R = 1)), !V || H)
        for (w in T)
          st[w] && (E = Wn(w, T, t, U, C, x)) ? E.priority && (R = 1) : Y[w] = P = Lr.call(t, C, w, "get", T[w], U, x, 0, n.stringFilter);
      t._op && t._op[k] && t.kill(C, t._op[k]), v && t._pt && (Pt = t, F.killTweensOf(C, Y, t.globalTime(e)), It = !t.parent, Pt = 0), t._pt && l && (fr[q.id] = 1);
    }
    R && Zn(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !It, p && e <= 0 && M.render(_t, !0, !0);
}, Hi = function(t, e, r, n, s, o, a) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, h, f, _;
  if (!l)
    for (l = t._ptCache[e] = [], f = t._ptLookup, _ = t._targets.length; _--; ) {
      if (u = f[_][e], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
          u = u._next;
      if (!u)
        return yr = 1, t.vars[e] = "+=0", Ir(t, a), yr = 0, 1;
      l.push(u);
    }
  for (_ = l.length; _--; )
    h = l[_], u = h._pt || h, u.s = (n || n === 0) && !s ? n : u.s + (n || 0) + o * u.c, u.c = r - u.s, h.e && (h.e = N(r) + j(h.e)), h.b && (h.b = u.s + j(h.b));
}, Ji = function(t, e) {
  var r = t[0] ? Wt(t[0]).harness : 0, n = r && r.aliases, s, o, a, l;
  if (!n)
    return e;
  s = jt({}, e);
  for (o in n)
    if (o in s)
      for (l = n[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, ts = function(t, e, r, n) {
  var s = e.ease || n || "power1.inOut", o, a;
  if (Z(e))
    a = r[t] || (r[t] = []), e.forEach(function(l, u) {
      return a.push({
        t: u / (e.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (o in e)
      a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: e[o],
        e: s
      });
}, be = function(t, e, r, n, s) {
  return B(t) ? t.call(e, r, n, s) : G(t) && ~t.indexOf("random(") ? ke(t) : t;
}, Xn = zr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Gn = {};
rt(Xn + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
  return Gn[i] = 1;
});
var $ = /* @__PURE__ */ function(i) {
  cn(t, i);
  function t(r, n, s, o) {
    var a;
    typeof n == "number" && (s.duration = n, n = s, s = null), a = i.call(this, o ? n : ye(n)) || this;
    var l = a.vars, u = l.duration, h = l.delay, f = l.immediateRender, _ = l.stagger, d = l.overwrite, p = l.keyframes, c = l.defaults, g = l.scrollTrigger, m = l.yoyoEase, y = n.parent || F, b = (Z(r) || _n(r) ? Ot(r[0]) : "length" in n) ? [r] : dt(r), x, v, M, T, k, w, P, C;
    if (a._targets = b.length ? Rr(b) : qe("GSAP target " + r + " not found. https://greensock.com", !ut.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || _ || ze(u) || ze(h)) {
      if (n = a.vars, x = a.timeline = new J({
        data: "nested",
        defaults: c || {},
        targets: y && y.data === "nested" ? y.vars.targets : b
      }), x.kill(), x.parent = x._dp = Tt(a), x._start = 0, _ || ze(u) || ze(h)) {
        if (T = b.length, P = _ && An(_), wt(_))
          for (k in _)
            ~Xn.indexOf(k) && (C || (C = {}), C[k] = _[k]);
        for (v = 0; v < T; v++)
          M = Ue(n, Gn), M.stagger = 0, m && (M.yoyoEase = m), C && jt(M, C), w = b[v], M.duration = +be(u, Tt(a), v, w, b), M.delay = (+be(h, Tt(a), v, w, b) || 0) - a._delay, !_ && T === 1 && M.delay && (a._delay = h = M.delay, a._start += h, M.delay = 0), x.to(w, M, P ? P(v, w, b) : 0), x._ease = S.none;
        x.duration() ? u = h = 0 : a.timeline = 0;
      } else if (p) {
        ye(gt(x.vars.defaults, {
          ease: "none"
        })), x._ease = Gt(p.ease || n.ease || "none");
        var R = 0, q, V, E;
        if (Z(p))
          p.forEach(function(Y) {
            return x.to(b, Y, ">");
          }), x.duration();
        else {
          M = {};
          for (k in p)
            k === "ease" || k === "easeEach" || ts(k, p[k], M, p.easeEach);
          for (k in M)
            for (q = M[k].sort(function(Y, U) {
              return Y.t - U.t;
            }), R = 0, v = 0; v < q.length; v++)
              V = q[v], E = {
                ease: V.e,
                duration: (V.t - (v ? q[v - 1].t : 0)) / 100 * u
              }, E[k] = V.v, x.to(b, E, R), R += E.duration;
          x.duration() < u && x.to({}, {
            duration: u - x.duration()
          });
        }
      }
      u || a.duration(u = x.duration());
    } else
      a.timeline = 0;
    return d === !0 && !Pr && (Pt = Tt(a), F.killTweensOf(b), Pt = 0), yt(y, Tt(a), s), n.reversed && a.reverse(), n.paused && a.paused(!0), (f || !u && !p && a._start === K(y._time) && et(f) && Ai(Tt(a)) && y.data !== "nested") && (a._tTime = -A, a.render(Math.max(0, -h) || 0)), g && Sn(Tt(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(n, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, h = n < 0, f = n > l - A && !h ? l : n < A ? 0 : n, _, d, p, c, g, m, y, b, x;
    if (!u)
      Fi(this, n, s, o);
    else if (f !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (_ = f, b = this.timeline, this._repeat) {
        if (c = u + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(c * 100 + n, s, o);
        if (_ = K(f % c), f === l ? (p = this._repeat, _ = u) : (p = ~~(f / c), p && p === f / c && (_ = u, p--), _ > u && (_ = u)), m = this._yoyo && p & 1, m && (x = this._yEase, _ = u - _), g = ae(this._tTime, c), _ === a && !o && this._initted)
          return this._tTime = f, this;
        p !== g && (b && this._yEase && Un(b, m), this.vars.repeatRefresh && !m && !this._lock && (this._lock = o = 1, this.render(K(c * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Pn(this, h ? n : _, o, s, f))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (u !== this._dur)
          return this.render(n, s, o);
      }
      if (this._tTime = f, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (x || this._ease)(_ / u), this._from && (this.ratio = y = 1 - y), _ && !a && !s && !p && (pt(this, "onStart"), this._tTime !== f))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      b && b.render(n < 0 ? n : !_ && m ? -A : b._dur * b._ease(_ / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (h && _r(this, n, s, o), pt(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !s && this.parent && pt(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (h && !this._onUpdate && _r(this, n, !0, !0), (n || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && zt(this, 1), !s && !(h && !a) && (f || a || m) && (pt(this, f === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), i.prototype.invalidate.call(this, n);
  }, e.resetTo = function(n, s, o, a) {
    Te || ot.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || Ir(this, l), u = this._ease(l / this._dur), Hi(this, n, s, o, a, u, l) ? this.resetTo(n, s, o, a) : (Ze(this, 0), this.parent || Mn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? ge(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, Pt && Pt.vars.overwrite !== !0)._first || ge(this), this.parent && o !== this.timeline.totalDuration() && le(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? dt(n) : a, u = this._ptLookup, h = this._pt, f, _, d, p, c, g, m;
    if ((!s || s === "all") && Ci(a, l))
      return s === "all" && (this._pt = 0), ge(this);
    for (f = this._op = this._op || [], s !== "all" && (G(s) && (c = {}, rt(s, function(y) {
      return c[y] = 1;
    }), s = c), s = Ji(a, s)), m = a.length; m--; )
      if (~l.indexOf(a[m])) {
        _ = u[m], s === "all" ? (f[m] = s, p = _, d = {}) : (d = f[m] = f[m] || {}, p = s);
        for (c in p)
          g = _ && _[c], g && ((!("kill" in g.d) || g.d.kill(c) === !0) && je(this, g, "_pt"), delete _[c]), d !== "all" && (d[c] = 1);
      }
    return this._initted && !this._pt && h && ge(this), this;
  }, t.to = function(n, s) {
    return new t(n, s, arguments[2]);
  }, t.from = function(n, s) {
    return ve(1, arguments);
  }, t.delayedCall = function(n, s, o, a) {
    return new t(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(n, s, o) {
    return ve(2, arguments);
  }, t.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(n, s);
  }, t.killTweensOf = function(n, s, o) {
    return F.killTweensOf(n, s, o);
  }, t;
}(Me);
gt($.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
rt("staggerTo,staggerFrom,staggerFromTo", function(i) {
  $[i] = function() {
    var t = new J(), e = pr.call(arguments, 0);
    return e.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), t[i].apply(t, e);
  };
});
var Br = function(t, e, r) {
  return t[e] = r;
}, Kn = function(t, e, r) {
  return t[e](r);
}, es = function(t, e, r, n) {
  return t[e](n.fp, r);
}, rs = function(t, e, r) {
  return t.setAttribute(e, r);
}, Nr = function(t, e) {
  return B(t[e]) ? Kn : Cr(t[e]) && t.setAttribute ? rs : Br;
}, jn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, ns = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Qn = function(t, e) {
  var r = e._pt, n = "";
  if (!t && e.b)
    n = e.b;
  else if (t === 1 && e.e)
    n = e.e;
  else {
    for (; r; )
      n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + n, r = r._next;
    n += e.c;
  }
  e.set(e.t, e.p, n, e);
}, qr = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, is = function(t, e, r, n) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === n && s.modifier(t, e, r), s = o;
}, ss = function(t) {
  for (var e = this._pt, r, n; e; )
    n = e._next, e.p === t && !e.op || e.op === t ? je(this, e, "_pt") : e.dep || (r = 1), e = n;
  return !r;
}, os = function(t, e, r, n) {
  n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
}, Zn = function(t) {
  for (var e = t._pt, r, n, s, o; e; ) {
    for (r = e._next, n = s; n && n.pr > e.pr; )
      n = n._next;
    (e._prev = n ? n._prev : o) ? e._prev._next = e : s = e, (e._next = n) ? n._prev = e : o = e, e = r;
  }
  t._pt = s;
}, nt = /* @__PURE__ */ function() {
  function i(e, r, n, s, o, a, l, u, h) {
    this.t = r, this.s = s, this.c = o, this.p = n, this.r = a || jn, this.d = l || this, this.set = u || Br, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = i.prototype;
  return t.modifier = function(r, n, s) {
    this.mSet = this.mSet || this.set, this.set = os, this.m = r, this.mt = s, this.tween = n;
  }, i;
}();
rt(zr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
  return Fr[i] = 1;
});
ht.TweenMax = ht.TweenLite = $;
ht.TimelineLite = ht.TimelineMax = J;
F = new J({
  sortChildren: !1,
  defaults: oe,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ut.stringFilter = qn;
var Kt = [], Be = {}, as = [], Jr = 0, ls = 0, ir = function(t) {
  return (Be[t] || as).map(function(e) {
    return e();
  });
}, vr = function() {
  var t = Date.now(), e = [];
  t - Jr > 2 && (ir("matchMediaInit"), Kt.forEach(function(r) {
    var n = r.queries, s = r.conditions, o, a, l, u;
    for (a in n)
      o = ft.matchMedia(n[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
    u && (r.revert(), l && e.push(r));
  }), ir("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r);
  }), Jr = t, ir("matchMedia"));
}, Hn = /* @__PURE__ */ function() {
  function i(e, r) {
    this.selector = r && gr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = ls++, e && this.add(e);
  }
  var t = i.prototype;
  return t.add = function(r, n, s) {
    B(r) && (s = n, n = r, r = B);
    var o = this, a = function() {
      var u = I, h = o.selector, f;
      return u && u !== o && u.data.push(o), s && (o.selector = gr(s)), I = o, f = n.apply(o, arguments), B(f) && o._r.push(f), I = u, o.selector = h, o.isReverted = !1, f;
    };
    return o.last = a, r === B ? a(o) : r ? o[r] = a : a;
  }, t.ignore = function(r) {
    var n = I;
    I = null, r(this), I = n;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof i ? r.push.apply(r, n.getTweens()) : n instanceof $ && !(n.parent && n.parent.data === "nested") && r.push(n);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, n) {
    var s = this;
    if (r) {
      var o = this.getTweens();
      this.data.forEach(function(l) {
        l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(u) {
          return o.splice(o.indexOf(u), 1);
        }));
      }), o.map(function(l) {
        return {
          g: l.globalTime(0),
          t: l
        };
      }).sort(function(l, u) {
        return u.g - l.g || -1;
      }).forEach(function(l) {
        return l.t.revert(r);
      }), this.data.forEach(function(l) {
        return l instanceof J ? l.data !== "nested" && l.kill() : !(l instanceof $) && l.revert && l.revert(r);
      }), this._r.forEach(function(l) {
        return l(r, s);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(l) {
        return l.kill && l.kill();
      });
    if (this.clear(), n)
      for (var a = Kt.length; a--; )
        Kt[a].id === this.id && Kt.splice(a, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, i;
}(), us = /* @__PURE__ */ function() {
  function i(e) {
    this.contexts = [], this.scope = e;
  }
  var t = i.prototype;
  return t.add = function(r, n, s) {
    wt(r) || (r = {
      matches: r
    });
    var o = new Hn(0, s || this.scope), a = o.conditions = {}, l, u, h;
    I && !o.selector && (o.selector = I.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = r;
    for (u in r)
      u === "all" ? h = 1 : (l = ft.matchMedia(r[u]), l && (Kt.indexOf(o) < 0 && Kt.push(o), (a[u] = l.matches) && (h = 1), l.addListener ? l.addListener(vr) : l.addEventListener("change", vr)));
    return h && n(o), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(n) {
      return n.kill(r, !0);
    });
  }, i;
}(), Ye = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(n) {
      return In(n);
    });
  },
  timeline: function(t) {
    return new J(t);
  },
  getTweensOf: function(t, e) {
    return F.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, n) {
    G(t) && (t = dt(t)[0]);
    var s = Wt(t || {}).get, o = r ? Tn : kn;
    return r === "native" && (r = ""), t && (e ? o((st[e] && st[e].get || s)(t, e, r, n)) : function(a, l, u) {
      return o((st[a] && st[a].get || s)(t, a, l, u));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = dt(t), t.length > 1) {
      var n = t.map(function(h) {
        return it.quickSetter(h, e, r);
      }), s = n.length;
      return function(h) {
        for (var f = s; f--; )
          n[f](h);
      };
    }
    t = t[0] || {};
    var o = st[e], a = Wt(t), l = a.harness && (a.harness.aliases || {})[e] || e, u = o ? function(h) {
      var f = new o();
      ee._pt = 0, f.init(t, r ? h + r : h, ee, 0, [t]), f.render(1, f), ee._pt && qr(1, ee);
    } : a.set(t, l);
    return o ? u : function(h) {
      return u(t, l, r ? h + r : h, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var n, s = it.to(t, jt((n = {}, n[e] = "+=0.1", n.paused = !0, n), r || {})), o = function(l, u, h) {
      return s.resetTo(e, l, u, h);
    };
    return o.tween = s, o;
  },
  isTweening: function(t) {
    return F.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Gt(t.ease, oe.ease)), Kr(oe, t || {});
  },
  config: function(t) {
    return Kr(ut, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, n = t.plugins, s = t.defaults, o = t.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !st[a] && !ht[a] && qe(e + " effect requires " + a + " plugin.");
    }), tr[e] = function(a, l, u) {
      return r(dt(a), gt(l || {}, s), u);
    }, o && (J.prototype[e] = function(a, l, u) {
      return this.add(tr[e](a, wt(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    S[t] = Gt(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Gt(t, e) : S;
  },
  getById: function(t) {
    return F.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new J(t), n, s;
    for (r.smoothChildTiming = et(t.smoothChildTiming), F.remove(r), r._dp = 0, r._time = r._tTime = F._time, n = F._first; n; )
      s = n._next, (e || !(!n._dur && n instanceof $ && n.vars.onComplete === n._targets[0])) && yt(r, n, n._start - n._delay), n = s;
    return yt(F, r, 0), r;
  },
  context: function(t, e) {
    return t ? new Hn(t, e) : I;
  },
  matchMedia: function(t) {
    return new us(t);
  },
  matchMediaRefresh: function() {
    return Kt.forEach(function(t) {
      var e = t.conditions, r, n;
      for (n in e)
        e[n] && (e[n] = !1, r = 1);
      r && t.revert();
    }) || vr();
  },
  addEventListener: function(t, e) {
    var r = Be[t] || (Be[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = Be[t], n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: Vi,
    wrapYoyo: Ui,
    distribute: An,
    random: Fn,
    snap: En,
    normalize: qi,
    getUnit: j,
    clamp: Li,
    splitColor: Bn,
    toArray: dt,
    selector: gr,
    mapRange: Rn,
    pipe: Bi,
    unitize: Ni,
    interpolate: $i,
    shuffle: Dn
  },
  install: yn,
  effects: tr,
  ticker: ot,
  updateRoot: J.updateRoot,
  plugins: st,
  globalTimeline: F,
  core: {
    PropTween: nt,
    globals: vn,
    Tween: $,
    Timeline: J,
    Animation: Me,
    getCache: Wt,
    _removeLinkedListItem: je,
    reverting: function() {
      return Q;
    },
    context: function(t) {
      return t && I && (I.data.push(t), t._ctx = I), I;
    },
    suppressOverwrites: function(t) {
      return Pr = t;
    }
  }
};
rt("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
  return Ye[i] = $[i];
});
ot.add(J.updateRoot);
ee = Ye.to({}, {
  duration: 0
});
var hs = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, cs = function(t, e) {
  var r = t._targets, n, s, o;
  for (n in e)
    for (s = r.length; s--; )
      o = t._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = hs(o, n)), o && o.modifier && o.modifier(e[n], t, r[s], n));
}, sr = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (G(s) && (l = {}, rt(s, function(h) {
          return l[h] = 1;
        }), s = l), e) {
          l = {};
          for (u in s)
            l[u] = e(s[u]);
          s = l;
        }
        cs(a, s);
      };
    }
  };
}, it = Ye.registerPlugin({
  name: "attr",
  init: function(t, e, r, n, s) {
    var o, a, l;
    this.tween = r;
    for (o in e)
      l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", e[o], n, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      Q ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, sr("roundProps", mr), sr("modifiers"), sr("snap", En)) || Ye;
$.version = J.version = it.version = "3.12.1";
mn = 1;
Dr() && ue();
S.Power0;
S.Power1;
S.Power2;
S.Power3;
S.Power4;
S.Linear;
S.Quad;
S.Cubic;
S.Quart;
S.Quint;
S.Strong;
S.Elastic;
S.Back;
S.SteppedEase;
S.Bounce;
S.Sine;
S.Expo;
S.Circ;
/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var tn, Ct, ne, Vr, Yt, en, Ur, fs = function() {
  return typeof window < "u";
}, St = {}, $t = 180 / Math.PI, ie = Math.PI / 180, Zt = Math.atan2, rn = 1e8, $r = /([A-Z])/g, _s = /(left|right|width|margin|padding|x)/i, ds = /[\s,\(]\S/, vt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, br = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, ps = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, gs = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, ms = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Jn = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, ti = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, ys = function(t, e, r) {
  return t.style[e] = r;
}, vs = function(t, e, r) {
  return t.style.setProperty(e, r);
}, bs = function(t, e, r) {
  return t._gsap[e] = r;
}, xs = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, ws = function(t, e, r, n, s) {
  var o = t._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, ks = function(t, e, r, n, s) {
  var o = t._gsap;
  o[e] = r, o.renderTransform(s, o);
}, z = "transform", mt = z + "Origin", Ts = function i(t, e) {
  var r = this, n = this.target, s = n.style;
  if (t in St && s) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = vt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return r.tfm[o] = Mt(n, o);
      }) : this.tfm[t] = n._gsap.x ? n._gsap[t] : Mt(n, t);
    else
      return vt.transform.split(",").forEach(function(o) {
        return i.call(r, o, e);
      });
    if (this.props.indexOf(z) >= 0)
      return;
    n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(mt, e, "")), t = z;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, ei = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Ms = function() {
  var t = this.props, e = this.target, r = e.style, n = e._gsap, s, o;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? e[t[s]] = t[s + 2] : t[s + 2] ? r[t[s]] = t[s + 2] : r.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace($r, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = Ur(), (!s || !s.isStart) && !r[z] && (ei(r), n.uncache = 1);
  }
}, ri = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Ms,
    save: Ts
  };
  return t._gsap || it.core.getCache(t), e && e.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, ni, xr = function(t, e) {
  var r = Ct.createElementNS ? Ct.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ct.createElement(t);
  return r.style ? r : Ct.createElement(t);
}, xt = function i(t, e, r) {
  var n = getComputedStyle(t);
  return n[e] || n.getPropertyValue(e.replace($r, "-$1").toLowerCase()) || n.getPropertyValue(e) || !r && i(t, he(e) || e, 1) || "";
}, nn = "O,Moz,ms,Ms,Webkit".split(","), he = function(t, e, r) {
  var n = e || Yt, s = n.style, o = 5;
  if (t in s && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(nn[o] + t in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? nn[o] : "") + t;
}, wr = function() {
  fs() && window.document && (tn = window, Ct = tn.document, ne = Ct.documentElement, Yt = xr("div") || {
    style: {}
  }, xr("div"), z = he(z), mt = z + "Origin", Yt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ni = !!he("perspective"), Ur = it.core.reverting, Vr = 1);
}, or = function i(t) {
  var e = xr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, n = this.nextSibling, s = this.style.cssText, o;
  if (ne.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = i;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), ne.removeChild(e), this.style.cssText = s, o;
}, sn = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, ii = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = or.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === or || (e = or.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +sn(t, ["x", "cx", "x1"]) || 0,
    y: +sn(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, si = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ii(t));
}, Oe = function(t, e) {
  if (e) {
    var r = t.style;
    e in St && e !== mt && (e = z), r.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(e.replace($r, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Dt = function(t, e, r, n, s, o) {
  var a = new nt(t._pt, e, r, 0, 1, o ? ti : Jn);
  return t._pt = a, a.b = n, a.e = s, t._props.push(r), a;
}, on = {
  deg: 1,
  rad: 1,
  turn: 1
}, Os = {
  grid: 1,
  flex: 1
}, Rt = function i(t, e, r, n) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = Yt.style, l = _s.test(e), u = t.tagName.toLowerCase() === "svg", h = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, _ = n === "px", d = n === "%", p, c, g, m;
  return n === o || !s || on[n] || on[o] ? s : (o !== "px" && !_ && (s = i(t, e, r, "px")), m = t.getCTM && si(t), (d || o === "%") && (St[e] || ~e.indexOf("adius")) ? (p = m ? t.getBBox()[l ? "width" : "height"] : t[h], N(d ? s / p * f : s / 100 * p)) : (a[l ? "width" : "height"] = f + (_ ? o : n), c = ~e.indexOf("adius") || n === "em" && t.appendChild && !u ? t : t.parentNode, m && (c = (t.ownerSVGElement || {}).parentNode), (!c || c === Ct || !c.appendChild) && (c = Ct.body), g = c._gsap, g && d && g.width && l && g.time === ot.time && !g.uncache ? N(s / g.width * f) : ((d || o === "%") && !Os[xt(c, "display")] && (a.position = xt(t, "position")), c === t && (a.position = "static"), c.appendChild(Yt), p = Yt[h], c.removeChild(Yt), a.position = "absolute", l && d && (g = Wt(c), g.time = ot.time, g.width = c[h]), N(_ ? p * s / f : p && s ? f / p * s : 0))));
}, Mt = function(t, e, r, n) {
  var s;
  return Vr || wr(), e in vt && e !== "transform" && (e = vt[e], ~e.indexOf(",") && (e = e.split(",")[0])), St[e] && e !== "transform" ? (s = Pe(t, n), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : Xe(xt(t, mt)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = We[e] && We[e](t, e, r) || xt(t, e) || xn(t, e) || (e === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Rt(t, e, s, r) + r : s;
}, Ss = function(t, e, r, n) {
  if (!r || r === "none") {
    var s = he(e, t, 1), o = s && xt(t, s, 1);
    o && o !== r ? (e = s, r = o) : e === "borderColor" && (r = xt(t, "borderTopColor"));
  }
  var a = new nt(this._pt, t.style, e, 0, 1, Qn), l = 0, u = 0, h, f, _, d, p, c, g, m, y, b, x, v;
  if (a.b = r, a.e = n, r += "", n += "", n === "auto" && (t.style[e] = n, n = xt(t, e) || n, t.style[e] = r), h = [r, n], qn(h), r = h[0], n = h[1], _ = r.match(te) || [], v = n.match(te) || [], v.length) {
    for (; f = te.exec(n); )
      g = f[0], y = n.substring(l, f.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), g !== (c = _[u++] || "") && (d = parseFloat(c) || 0, x = c.substr((d + "").length), g.charAt(1) === "=" && (g = re(d, g) + x), m = parseFloat(g), b = g.substr((m + "").length), l = te.lastIndex - b.length, b || (b = b || ut.units[e] || x, l === n.length && (n += b, a.e += b)), x !== b && (d = Rt(t, e, c, b) || 0), a._pt = {
        _next: a._pt,
        p: y || u === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = e === "display" && n === "none" ? ti : Jn;
  return pn.test(n) && (a.e = 0), this._pt = a, a;
}, an = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ps = function(t) {
  var e = t.split(" "), r = e[0], n = e[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (t = r, r = n, n = t), e[0] = an[r] || r, e[1] = an[n] || n, e.join(" ");
}, Cs = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, n = r.style, s = e.u, o = r._gsap, a, l, u;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], St[a] && (l = 1, a = a === "transformOrigin" ? mt : z), Oe(r, a);
    l && (Oe(r, z), o && (o.svg && r.removeAttribute("transform"), Pe(r, 1), o.uncache = 1, ei(n)));
  }
}, We = {
  clearProps: function(t, e, r, n, s) {
    if (s.data !== "isFromStart") {
      var o = t._pt = new nt(t._pt, e, r, 0, 0, Cs);
      return o.u = n, o.pr = -10, o.tween = s, t._props.push(r), 1;
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
}, Se = [1, 0, 0, 1, 0, 0], oi = {}, ai = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, ln = function(t) {
  var e = xt(t, z);
  return ai(e) ? Se : e.substr(7).match(dn).map(N);
}, Yr = function(t, e) {
  var r = t._gsap || Wt(t), n = t.style, s = ln(t), o, a, l, u;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Se : s) : (s === Se && !t.offsetParent && t !== ne && !r.svg && (l = n.display, n.display = "block", o = t.parentNode, (!o || !t.offsetParent) && (u = 1, a = t.nextElementSibling, ne.appendChild(t)), s = ln(t), l ? n.display = l : Oe(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : ne.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, kr = function(t, e, r, n, s, o) {
  var a = t._gsap, l = s || Yr(t, !0), u = a.xOrigin || 0, h = a.yOrigin || 0, f = a.xOffset || 0, _ = a.yOffset || 0, d = l[0], p = l[1], c = l[2], g = l[3], m = l[4], y = l[5], b = e.split(" "), x = parseFloat(b[0]) || 0, v = parseFloat(b[1]) || 0, M, T, k, w;
  r ? l !== Se && (T = d * g - p * c) && (k = x * (g / T) + v * (-c / T) + (c * y - g * m) / T, w = x * (-p / T) + v * (d / T) - (d * y - p * m) / T, x = k, v = w) : (M = ii(t), x = M.x + (~b[0].indexOf("%") ? x / 100 * M.width : x), v = M.y + (~(b[1] || b[0]).indexOf("%") ? v / 100 * M.height : v)), n || n !== !1 && a.smooth ? (m = x - u, y = v - h, a.xOffset = f + (m * d + y * c) - m, a.yOffset = _ + (m * p + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = x, a.yOrigin = v, a.smooth = !!n, a.origin = e, a.originIsAbsolute = !!r, t.style[mt] = "0px 0px", o && (Dt(o, a, "xOrigin", u, x), Dt(o, a, "yOrigin", h, v), Dt(o, a, "xOffset", f, a.xOffset), Dt(o, a, "yOffset", _, a.yOffset)), t.setAttribute("data-svg-origin", x + " " + v);
}, Pe = function(t, e) {
  var r = t._gsap || new Yn(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var n = t.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = xt(t, mt) || "0", h, f, _, d, p, c, g, m, y, b, x, v, M, T, k, w, P, C, R, q, V, E, Y, U, H, It, Bt, de, Nt, Xr, kt, qt;
  return h = f = _ = c = g = m = y = b = x = 0, d = p = 1, r.svg = !!(t.getCTM && si(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[z] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[z] !== "none" ? l[z] : "")), n.scale = n.rotate = n.translate = "none"), T = Yr(t, r.svg), r.svg && (r.uncache ? (H = t.getBBox(), u = r.xOrigin - H.x + "px " + (r.yOrigin - H.y) + "px", U = "") : U = !e && t.getAttribute("data-svg-origin"), kr(t, U || u, !!U || r.originIsAbsolute, r.smooth !== !1, T)), v = r.xOrigin || 0, M = r.yOrigin || 0, T !== Se && (C = T[0], R = T[1], q = T[2], V = T[3], h = E = T[4], f = Y = T[5], T.length === 6 ? (d = Math.sqrt(C * C + R * R), p = Math.sqrt(V * V + q * q), c = C || R ? Zt(R, C) * $t : 0, y = q || V ? Zt(q, V) * $t + c : 0, y && (p *= Math.abs(Math.cos(y * ie))), r.svg && (h -= v - (v * C + M * q), f -= M - (v * R + M * V))) : (qt = T[6], Xr = T[7], Bt = T[8], de = T[9], Nt = T[10], kt = T[11], h = T[12], f = T[13], _ = T[14], k = Zt(qt, Nt), g = k * $t, k && (w = Math.cos(-k), P = Math.sin(-k), U = E * w + Bt * P, H = Y * w + de * P, It = qt * w + Nt * P, Bt = E * -P + Bt * w, de = Y * -P + de * w, Nt = qt * -P + Nt * w, kt = Xr * -P + kt * w, E = U, Y = H, qt = It), k = Zt(-q, Nt), m = k * $t, k && (w = Math.cos(-k), P = Math.sin(-k), U = C * w - Bt * P, H = R * w - de * P, It = q * w - Nt * P, kt = V * P + kt * w, C = U, R = H, q = It), k = Zt(R, C), c = k * $t, k && (w = Math.cos(k), P = Math.sin(k), U = C * w + R * P, H = E * w + Y * P, R = R * w - C * P, Y = Y * w - E * P, C = U, E = H), g && Math.abs(g) + Math.abs(c) > 359.9 && (g = c = 0, m = 180 - m), d = N(Math.sqrt(C * C + R * R + q * q)), p = N(Math.sqrt(Y * Y + qt * qt)), k = Zt(E, Y), y = Math.abs(k) > 2e-4 ? k * $t : 0, x = kt ? 1 / (kt < 0 ? -kt : kt) : 0), r.svg && (U = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ai(xt(t, z)), U && t.setAttribute("transform", U))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (d *= -1, y += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = h - ((r.xPercent = h && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = f - ((r.yPercent = f && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = _ + o, r.scaleX = N(d), r.scaleY = N(p), r.rotation = N(c) + a, r.rotationX = N(g) + a, r.rotationY = N(m) + a, r.skewX = y + a, r.skewY = b + a, r.transformPerspective = x + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (n[mt] = Xe(u)), r.xOffset = r.yOffset = 0, r.force3D = ut.force3D, r.renderTransform = r.svg ? As : ni ? li : Ds, r.uncache = 0, r;
}, Xe = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, ar = function(t, e, r) {
  var n = j(e);
  return N(parseFloat(e) + parseFloat(Rt(t, "x", r + "px", n))) + n;
}, Ds = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, li(t, e);
}, Vt = "0deg", pe = "0px", Ut = ") ", li = function(t, e) {
  var r = e || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, h = r.rotationY, f = r.rotationX, _ = r.skewX, d = r.skewY, p = r.scaleX, c = r.scaleY, g = r.transformPerspective, m = r.force3D, y = r.target, b = r.zOrigin, x = "", v = m === "auto" && t && t !== 1 || m === !0;
  if (b && (f !== Vt || h !== Vt)) {
    var M = parseFloat(h) * ie, T = Math.sin(M), k = Math.cos(M), w;
    M = parseFloat(f) * ie, w = Math.cos(M), o = ar(y, o, T * w * -b), a = ar(y, a, -Math.sin(M) * -b), l = ar(y, l, k * w * -b + b);
  }
  g !== pe && (x += "perspective(" + g + Ut), (n || s) && (x += "translate(" + n + "%, " + s + "%) "), (v || o !== pe || a !== pe || l !== pe) && (x += l !== pe || v ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Ut), u !== Vt && (x += "rotate(" + u + Ut), h !== Vt && (x += "rotateY(" + h + Ut), f !== Vt && (x += "rotateX(" + f + Ut), (_ !== Vt || d !== Vt) && (x += "skew(" + _ + ", " + d + Ut), (p !== 1 || c !== 1) && (x += "scale(" + p + ", " + c + Ut), y.style[z] = x || "translate(0, 0)";
}, As = function(t, e) {
  var r = e || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, h = r.skewY, f = r.scaleX, _ = r.scaleY, d = r.target, p = r.xOrigin, c = r.yOrigin, g = r.xOffset, m = r.yOffset, y = r.forceCSS, b = parseFloat(o), x = parseFloat(a), v, M, T, k, w;
  l = parseFloat(l), u = parseFloat(u), h = parseFloat(h), h && (h = parseFloat(h), u += h, l += h), l || u ? (l *= ie, u *= ie, v = Math.cos(l) * f, M = Math.sin(l) * f, T = Math.sin(l - u) * -_, k = Math.cos(l - u) * _, u && (h *= ie, w = Math.tan(u - h), w = Math.sqrt(1 + w * w), T *= w, k *= w, h && (w = Math.tan(h), w = Math.sqrt(1 + w * w), v *= w, M *= w)), v = N(v), M = N(M), T = N(T), k = N(k)) : (v = f, k = _, M = T = 0), (b && !~(o + "").indexOf("px") || x && !~(a + "").indexOf("px")) && (b = Rt(d, "x", o, "px"), x = Rt(d, "y", a, "px")), (p || c || g || m) && (b = N(b + p - (p * v + c * T) + g), x = N(x + c - (p * M + c * k) + m)), (n || s) && (w = d.getBBox(), b = N(b + n / 100 * w.width), x = N(x + s / 100 * w.height)), w = "matrix(" + v + "," + M + "," + T + "," + k + "," + b + "," + x + ")", d.setAttribute("transform", w), y && (d.style[z] = w);
}, Es = function(t, e, r, n, s) {
  var o = 360, a = G(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? $t : 1), u = l - n, h = n + u + "deg", f, _;
  return a && (f = s.split("_")[1], f === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), f === "cw" && u < 0 ? u = (u + o * rn) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * rn) % o - ~~(u / o) * o)), t._pt = _ = new nt(t._pt, e, r, n, u, ps), _.e = h, _.u = "deg", t._props.push(r), _;
}, un = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Fs = function(t, e, r) {
  var n = un({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, h, f, _, d, p;
  n.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[z] = e, a = Pe(r, 1), Oe(r, z), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[z], o[z] = e, a = Pe(r, 1), o[z] = u);
  for (l in St)
    u = n[l], h = a[l], u !== h && s.indexOf(l) < 0 && (d = j(u), p = j(h), f = d !== p ? Rt(r, l, u, p) : parseFloat(u), _ = parseFloat(h), t._pt = new nt(t._pt, a, l, f, _ - f, br), t._pt.u = p || 0, t._props.push(l));
  un(a, n);
};
rt("padding,margin,Width,Radius", function(i, t) {
  var e = "Top", r = "Right", n = "Bottom", s = "Left", o = (t < 3 ? [e, r, n, s] : [e + s, e + r, n + r, n + s]).map(function(a) {
    return t < 2 ? i + a : "border" + a + i;
  });
  We[t > 1 ? "border" + i : i] = function(a, l, u, h, f) {
    var _, d;
    if (arguments.length < 4)
      return _ = o.map(function(p) {
        return Mt(a, p, u);
      }), d = _.join(" "), d.split(_[0]).length === 5 ? _[0] : d;
    _ = (h + "").split(" "), d = {}, o.forEach(function(p, c) {
      return d[p] = _[c] = _[c] || _[(c - 1) / 2 | 0];
    }), a.init(l, d, f);
  };
});
var ui = {
  name: "css",
  register: wr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, n, s) {
    var o = this._props, a = t.style, l = r.vars.startAt, u, h, f, _, d, p, c, g, m, y, b, x, v, M, T, k;
    Vr || wr(), this.styles = this.styles || ri(t), k = this.styles.props, this.tween = r;
    for (c in e)
      if (c !== "autoRound" && (h = e[c], !(st[c] && Wn(c, e, r, n, t, s)))) {
        if (d = typeof h, p = We[c], d === "function" && (h = h.call(r, n, t, s), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = ke(h)), p)
          p(this, t, c, h, r) && (T = 1);
        else if (c.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(c) + "").trim(), h += "", Et.lastIndex = 0, Et.test(u) || (g = j(u), m = j(h)), m ? g !== m && (u = Rt(t, c, u, m) + m) : g && (h += g), this.add(a, "setProperty", u, h, n, s, 0, 0, c), o.push(c), k.push(c, 0, a[c]);
        else if (d !== "undefined") {
          if (l && c in l ? (u = typeof l[c] == "function" ? l[c].call(r, n, t, s) : l[c], G(u) && ~u.indexOf("random(") && (u = ke(u)), j(u + "") || (u += ut.units[c] || j(Mt(t, c)) || ""), (u + "").charAt(1) === "=" && (u = Mt(t, c))) : u = Mt(t, c), _ = parseFloat(u), y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), f = parseFloat(h), c in vt && (c === "autoAlpha" && (_ === 1 && Mt(t, "visibility") === "hidden" && f && (_ = 0), k.push("visibility", 0, a.visibility), Dt(this, a, "visibility", _ ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), c !== "scale" && c !== "transform" && (c = vt[c], ~c.indexOf(",") && (c = c.split(",")[0]))), b = c in St, b) {
            if (this.styles.save(c), x || (v = t._gsap, v.renderTransform && !e.parseTransform || Pe(t, e.parseTransform), M = e.smoothOrigin !== !1 && v.smooth, x = this._pt = new nt(this._pt, a, z, 0, 1, v.renderTransform, v, 0, -1), x.dep = 1), c === "scale")
              this._pt = new nt(this._pt, v, "scaleY", v.scaleY, (y ? re(v.scaleY, y + f) : f) - v.scaleY || 0, br), this._pt.u = 0, o.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              k.push(mt, 0, a[mt]), h = Ps(h), v.svg ? kr(t, h, 0, M, 0, this) : (m = parseFloat(h.split(" ")[2]) || 0, m !== v.zOrigin && Dt(this, v, "zOrigin", v.zOrigin, m), Dt(this, a, c, Xe(u), Xe(h)));
              continue;
            } else if (c === "svgOrigin") {
              kr(t, h, 1, M, 0, this);
              continue;
            } else if (c in oi) {
              Es(this, v, c, _, y ? re(_, y + h) : h);
              continue;
            } else if (c === "smoothOrigin") {
              Dt(this, v, "smooth", v.smooth, h);
              continue;
            } else if (c === "force3D") {
              v[c] = h;
              continue;
            } else if (c === "transform") {
              Fs(this, h, t);
              continue;
            }
          } else
            c in a || (c = he(c) || c);
          if (b || (f || f === 0) && (_ || _ === 0) && !ds.test(h) && c in a)
            g = (u + "").substr((_ + "").length), f || (f = 0), m = j(h) || (c in ut.units ? ut.units[c] : g), g !== m && (_ = Rt(t, c, u, m)), this._pt = new nt(this._pt, b ? v : a, c, _, (y ? re(_, y + f) : f) - _, !b && (m === "px" || c === "zIndex") && e.autoRound !== !1 ? ms : br), this._pt.u = m || 0, g !== m && m !== "%" && (this._pt.b = u, this._pt.r = gs);
          else if (c in a)
            Ss.call(this, t, c, u, y ? y + h : h);
          else if (c in t)
            this.add(t, c, u || t[c], y ? y + h : h, n, s);
          else if (c !== "parseTransform") {
            Er(c, h);
            continue;
          }
          b || (c in a ? k.push(c, 0, a[c]) : k.push(c, 1, u || t[c])), o.push(c);
        }
      }
    T && Zn(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Ur())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: Mt,
  aliases: vt,
  getSetter: function(t, e, r) {
    var n = vt[e];
    return n && n.indexOf(",") < 0 && (e = n), e in St && e !== mt && (t._gsap.x || Mt(t, "x")) ? r && en === r ? e === "scale" ? xs : bs : (en = r || {}) && (e === "scale" ? ws : ks) : t.style && !Cr(t.style[e]) ? ys : ~e.indexOf("-") ? vs : Nr(t, e);
  },
  core: {
    _removeProperty: Oe,
    _getMatrix: Yr
  }
};
it.utils.checkPrefix = he;
it.core.getStyleSaver = ri;
(function(i, t, e, r) {
  var n = rt(i + "," + t + "," + e, function(s) {
    St[s] = 1;
  });
  rt(t, function(s) {
    ut.units[s] = "deg", oi[s] = 1;
  }), vt[n[13]] = i + "," + t, rt(r, function(s) {
    var o = s.split(":");
    vt[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
  ut.units[i] = "px";
});
it.registerPlugin(ui);
var _e = it.registerPlugin(ui) || it;
_e.core.Tween;
function zs(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var hi = { exports: {} }, ci = {
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
}, fi = { exports: {} }, Rs = function(t) {
  return !t || typeof t == "string" ? !1 : t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && t.constructor.name !== "String");
}, Ls = Rs, Is = Array.prototype.concat, Bs = Array.prototype.slice, hn = fi.exports = function(t) {
  for (var e = [], r = 0, n = t.length; r < n; r++) {
    var s = t[r];
    Ls(s) ? e = Is.call(e, Bs.call(s)) : e.push(s);
  }
  return e;
};
hn.wrap = function(i) {
  return function() {
    return i(hn(arguments));
  };
};
var Ns = fi.exports, xe = ci, Fe = Ns, _i = Object.hasOwnProperty, di = /* @__PURE__ */ Object.create(null);
for (var lr in xe)
  _i.call(xe, lr) && (di[xe[lr]] = lr);
var lt = hi.exports = {
  to: {},
  get: {}
};
lt.get = function(i) {
  var t = i.substring(0, 3).toLowerCase(), e, r;
  switch (t) {
    case "hsl":
      e = lt.get.hsl(i), r = "hsl";
      break;
    case "hwb":
      e = lt.get.hwb(i), r = "hwb";
      break;
    default:
      e = lt.get.rgb(i), r = "rgb";
      break;
  }
  return e ? { model: r, value: e } : null;
};
lt.get.rgb = function(i) {
  if (!i)
    return null;
  var t = /^#([a-f0-9]{3,4})$/i, e = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, r = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, n = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, s = /^(\w+)$/, o = [0, 0, 0, 1], a, l, u;
  if (a = i.match(e)) {
    for (u = a[2], a = a[1], l = 0; l < 3; l++) {
      var h = l * 2;
      o[l] = parseInt(a.slice(h, h + 2), 16);
    }
    u && (o[3] = parseInt(u, 16) / 255);
  } else if (a = i.match(t)) {
    for (a = a[1], u = a[3], l = 0; l < 3; l++)
      o[l] = parseInt(a[l] + a[l], 16);
    u && (o[3] = parseInt(u + u, 16) / 255);
  } else if (a = i.match(r)) {
    for (l = 0; l < 3; l++)
      o[l] = parseInt(a[l + 1], 0);
    a[4] && (a[5] ? o[3] = parseFloat(a[4]) * 0.01 : o[3] = parseFloat(a[4]));
  } else if (a = i.match(n)) {
    for (l = 0; l < 3; l++)
      o[l] = Math.round(parseFloat(a[l + 1]) * 2.55);
    a[4] && (a[5] ? o[3] = parseFloat(a[4]) * 0.01 : o[3] = parseFloat(a[4]));
  } else
    return (a = i.match(s)) ? a[1] === "transparent" ? [0, 0, 0, 0] : _i.call(xe, a[1]) ? (o = xe[a[1]], o[3] = 1, o) : null : null;
  for (l = 0; l < 3; l++)
    o[l] = Ft(o[l], 0, 255);
  return o[3] = Ft(o[3], 0, 1), o;
};
lt.get.hsl = function(i) {
  if (!i)
    return null;
  var t = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = i.match(t);
  if (e) {
    var r = parseFloat(e[4]), n = (parseFloat(e[1]) % 360 + 360) % 360, s = Ft(parseFloat(e[2]), 0, 100), o = Ft(parseFloat(e[3]), 0, 100), a = Ft(isNaN(r) ? 1 : r, 0, 1);
    return [n, s, o, a];
  }
  return null;
};
lt.get.hwb = function(i) {
  if (!i)
    return null;
  var t = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = i.match(t);
  if (e) {
    var r = parseFloat(e[4]), n = (parseFloat(e[1]) % 360 + 360) % 360, s = Ft(parseFloat(e[2]), 0, 100), o = Ft(parseFloat(e[3]), 0, 100), a = Ft(isNaN(r) ? 1 : r, 0, 1);
    return [n, s, o, a];
  }
  return null;
};
lt.to.hex = function() {
  var i = Fe(arguments);
  return "#" + Re(i[0]) + Re(i[1]) + Re(i[2]) + (i[3] < 1 ? Re(Math.round(i[3] * 255)) : "");
};
lt.to.rgb = function() {
  var i = Fe(arguments);
  return i.length < 4 || i[3] === 1 ? "rgb(" + Math.round(i[0]) + ", " + Math.round(i[1]) + ", " + Math.round(i[2]) + ")" : "rgba(" + Math.round(i[0]) + ", " + Math.round(i[1]) + ", " + Math.round(i[2]) + ", " + i[3] + ")";
};
lt.to.rgb.percent = function() {
  var i = Fe(arguments), t = Math.round(i[0] / 255 * 100), e = Math.round(i[1] / 255 * 100), r = Math.round(i[2] / 255 * 100);
  return i.length < 4 || i[3] === 1 ? "rgb(" + t + "%, " + e + "%, " + r + "%)" : "rgba(" + t + "%, " + e + "%, " + r + "%, " + i[3] + ")";
};
lt.to.hsl = function() {
  var i = Fe(arguments);
  return i.length < 4 || i[3] === 1 ? "hsl(" + i[0] + ", " + i[1] + "%, " + i[2] + "%)" : "hsla(" + i[0] + ", " + i[1] + "%, " + i[2] + "%, " + i[3] + ")";
};
lt.to.hwb = function() {
  var i = Fe(arguments), t = "";
  return i.length >= 4 && i[3] !== 1 && (t = ", " + i[3]), "hwb(" + i[0] + ", " + i[1] + "%, " + i[2] + "%" + t + ")";
};
lt.to.keyword = function(i) {
  return di[i.slice(0, 3)];
};
function Ft(i, t, e) {
  return Math.min(Math.max(t, i), e);
}
function Re(i) {
  var t = Math.round(i).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
var qs = hi.exports;
const Ce = ci, pi = {};
for (const i of Object.keys(Ce))
  pi[Ce[i]] = i;
const O = {
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
var gi = O;
for (const i of Object.keys(O)) {
  if (!("channels" in O[i]))
    throw new Error("missing channels property: " + i);
  if (!("labels" in O[i]))
    throw new Error("missing channel labels property: " + i);
  if (O[i].labels.length !== O[i].channels)
    throw new Error("channel and label counts mismatch: " + i);
  const { channels: t, labels: e } = O[i];
  delete O[i].channels, delete O[i].labels, Object.defineProperty(O[i], "channels", { value: t }), Object.defineProperty(O[i], "labels", { value: e });
}
O.rgb.hsl = function(i) {
  const t = i[0] / 255, e = i[1] / 255, r = i[2] / 255, n = Math.min(t, e, r), s = Math.max(t, e, r), o = s - n;
  let a, l;
  s === n ? a = 0 : t === s ? a = (e - r) / o : e === s ? a = 2 + (r - t) / o : r === s && (a = 4 + (t - e) / o), a = Math.min(a * 60, 360), a < 0 && (a += 360);
  const u = (n + s) / 2;
  return s === n ? l = 0 : u <= 0.5 ? l = o / (s + n) : l = o / (2 - s - n), [a, l * 100, u * 100];
};
O.rgb.hsv = function(i) {
  let t, e, r, n, s;
  const o = i[0] / 255, a = i[1] / 255, l = i[2] / 255, u = Math.max(o, a, l), h = u - Math.min(o, a, l), f = function(_) {
    return (u - _) / 6 / h + 1 / 2;
  };
  return h === 0 ? (n = 0, s = 0) : (s = h / u, t = f(o), e = f(a), r = f(l), o === u ? n = r - e : a === u ? n = 1 / 3 + t - r : l === u && (n = 2 / 3 + e - t), n < 0 ? n += 1 : n > 1 && (n -= 1)), [
    n * 360,
    s * 100,
    u * 100
  ];
};
O.rgb.hwb = function(i) {
  const t = i[0], e = i[1];
  let r = i[2];
  const n = O.rgb.hsl(i)[0], s = 1 / 255 * Math.min(t, Math.min(e, r));
  return r = 1 - 1 / 255 * Math.max(t, Math.max(e, r)), [n, s * 100, r * 100];
};
O.rgb.cmyk = function(i) {
  const t = i[0] / 255, e = i[1] / 255, r = i[2] / 255, n = Math.min(1 - t, 1 - e, 1 - r), s = (1 - t - n) / (1 - n) || 0, o = (1 - e - n) / (1 - n) || 0, a = (1 - r - n) / (1 - n) || 0;
  return [s * 100, o * 100, a * 100, n * 100];
};
function Vs(i, t) {
  return (i[0] - t[0]) ** 2 + (i[1] - t[1]) ** 2 + (i[2] - t[2]) ** 2;
}
O.rgb.keyword = function(i) {
  const t = pi[i];
  if (t)
    return t;
  let e = 1 / 0, r;
  for (const n of Object.keys(Ce)) {
    const s = Ce[n], o = Vs(i, s);
    o < e && (e = o, r = n);
  }
  return r;
};
O.keyword.rgb = function(i) {
  return Ce[i];
};
O.rgb.xyz = function(i) {
  let t = i[0] / 255, e = i[1] / 255, r = i[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  const n = t * 0.4124 + e * 0.3576 + r * 0.1805, s = t * 0.2126 + e * 0.7152 + r * 0.0722, o = t * 0.0193 + e * 0.1192 + r * 0.9505;
  return [n * 100, s * 100, o * 100];
};
O.rgb.lab = function(i) {
  const t = O.rgb.xyz(i);
  let e = t[0], r = t[1], n = t[2];
  e /= 95.047, r /= 100, n /= 108.883, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
  const s = 116 * r - 16, o = 500 * (e - r), a = 200 * (r - n);
  return [s, o, a];
};
O.hsl.rgb = function(i) {
  const t = i[0] / 360, e = i[1] / 100, r = i[2] / 100;
  let n, s, o;
  if (e === 0)
    return o = r * 255, [o, o, o];
  r < 0.5 ? n = r * (1 + e) : n = r + e - r * e;
  const a = 2 * r - n, l = [0, 0, 0];
  for (let u = 0; u < 3; u++)
    s = t + 1 / 3 * -(u - 1), s < 0 && s++, s > 1 && s--, 6 * s < 1 ? o = a + (n - a) * 6 * s : 2 * s < 1 ? o = n : 3 * s < 2 ? o = a + (n - a) * (2 / 3 - s) * 6 : o = a, l[u] = o * 255;
  return l;
};
O.hsl.hsv = function(i) {
  const t = i[0];
  let e = i[1] / 100, r = i[2] / 100, n = e;
  const s = Math.max(r, 0.01);
  r *= 2, e *= r <= 1 ? r : 2 - r, n *= s <= 1 ? s : 2 - s;
  const o = (r + e) / 2, a = r === 0 ? 2 * n / (s + n) : 2 * e / (r + e);
  return [t, a * 100, o * 100];
};
O.hsv.rgb = function(i) {
  const t = i[0] / 60, e = i[1] / 100;
  let r = i[2] / 100;
  const n = Math.floor(t) % 6, s = t - Math.floor(t), o = 255 * r * (1 - e), a = 255 * r * (1 - e * s), l = 255 * r * (1 - e * (1 - s));
  switch (r *= 255, n) {
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
O.hsv.hsl = function(i) {
  const t = i[0], e = i[1] / 100, r = i[2] / 100, n = Math.max(r, 0.01);
  let s, o;
  o = (2 - e) * r;
  const a = (2 - e) * n;
  return s = e * n, s /= a <= 1 ? a : 2 - a, s = s || 0, o /= 2, [t, s * 100, o * 100];
};
O.hwb.rgb = function(i) {
  const t = i[0] / 360;
  let e = i[1] / 100, r = i[2] / 100;
  const n = e + r;
  let s;
  n > 1 && (e /= n, r /= n);
  const o = Math.floor(6 * t), a = 1 - r;
  s = 6 * t - o, o & 1 && (s = 1 - s);
  const l = e + s * (a - e);
  let u, h, f;
  switch (o) {
    default:
    case 6:
    case 0:
      u = a, h = l, f = e;
      break;
    case 1:
      u = l, h = a, f = e;
      break;
    case 2:
      u = e, h = a, f = l;
      break;
    case 3:
      u = e, h = l, f = a;
      break;
    case 4:
      u = l, h = e, f = a;
      break;
    case 5:
      u = a, h = e, f = l;
      break;
  }
  return [u * 255, h * 255, f * 255];
};
O.cmyk.rgb = function(i) {
  const t = i[0] / 100, e = i[1] / 100, r = i[2] / 100, n = i[3] / 100, s = 1 - Math.min(1, t * (1 - n) + n), o = 1 - Math.min(1, e * (1 - n) + n), a = 1 - Math.min(1, r * (1 - n) + n);
  return [s * 255, o * 255, a * 255];
};
O.xyz.rgb = function(i) {
  const t = i[0] / 100, e = i[1] / 100, r = i[2] / 100;
  let n, s, o;
  return n = t * 3.2406 + e * -1.5372 + r * -0.4986, s = t * -0.9689 + e * 1.8758 + r * 0.0415, o = t * 0.0557 + e * -0.204 + r * 1.057, n = n > 31308e-7 ? 1.055 * n ** (1 / 2.4) - 0.055 : n * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, n = Math.min(Math.max(0, n), 1), s = Math.min(Math.max(0, s), 1), o = Math.min(Math.max(0, o), 1), [n * 255, s * 255, o * 255];
};
O.xyz.lab = function(i) {
  let t = i[0], e = i[1], r = i[2];
  t /= 95.047, e /= 100, r /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
  const n = 116 * e - 16, s = 500 * (t - e), o = 200 * (e - r);
  return [n, s, o];
};
O.lab.xyz = function(i) {
  const t = i[0], e = i[1], r = i[2];
  let n, s, o;
  s = (t + 16) / 116, n = e / 500 + s, o = s - r / 200;
  const a = s ** 3, l = n ** 3, u = o ** 3;
  return s = a > 8856e-6 ? a : (s - 16 / 116) / 7.787, n = l > 8856e-6 ? l : (n - 16 / 116) / 7.787, o = u > 8856e-6 ? u : (o - 16 / 116) / 7.787, n *= 95.047, s *= 100, o *= 108.883, [n, s, o];
};
O.lab.lch = function(i) {
  const t = i[0], e = i[1], r = i[2];
  let n;
  n = Math.atan2(r, e) * 360 / 2 / Math.PI, n < 0 && (n += 360);
  const o = Math.sqrt(e * e + r * r);
  return [t, o, n];
};
O.lch.lab = function(i) {
  const t = i[0], e = i[1], n = i[2] / 360 * 2 * Math.PI, s = e * Math.cos(n), o = e * Math.sin(n);
  return [t, s, o];
};
O.rgb.ansi16 = function(i, t = null) {
  const [e, r, n] = i;
  let s = t === null ? O.rgb.hsv(i)[2] : t;
  if (s = Math.round(s / 50), s === 0)
    return 30;
  let o = 30 + (Math.round(n / 255) << 2 | Math.round(r / 255) << 1 | Math.round(e / 255));
  return s === 2 && (o += 60), o;
};
O.hsv.ansi16 = function(i) {
  return O.rgb.ansi16(O.hsv.rgb(i), i[2]);
};
O.rgb.ansi256 = function(i) {
  const t = i[0], e = i[1], r = i[2];
  return t === e && e === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(r / 255 * 5);
};
O.ansi16.rgb = function(i) {
  let t = i % 10;
  if (t === 0 || t === 7)
    return i > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
  const e = (~~(i > 50) + 1) * 0.5, r = (t & 1) * e * 255, n = (t >> 1 & 1) * e * 255, s = (t >> 2 & 1) * e * 255;
  return [r, n, s];
};
O.ansi256.rgb = function(i) {
  if (i >= 232) {
    const s = (i - 232) * 10 + 8;
    return [s, s, s];
  }
  i -= 16;
  let t;
  const e = Math.floor(i / 36) / 5 * 255, r = Math.floor((t = i % 36) / 6) / 5 * 255, n = t % 6 / 5 * 255;
  return [e, r, n];
};
O.rgb.hex = function(i) {
  const e = (((Math.round(i[0]) & 255) << 16) + ((Math.round(i[1]) & 255) << 8) + (Math.round(i[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(e.length) + e;
};
O.hex.rgb = function(i) {
  const t = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t)
    return [0, 0, 0];
  let e = t[0];
  t[0].length === 3 && (e = e.split("").map((a) => a + a).join(""));
  const r = parseInt(e, 16), n = r >> 16 & 255, s = r >> 8 & 255, o = r & 255;
  return [n, s, o];
};
O.rgb.hcg = function(i) {
  const t = i[0] / 255, e = i[1] / 255, r = i[2] / 255, n = Math.max(Math.max(t, e), r), s = Math.min(Math.min(t, e), r), o = n - s;
  let a, l;
  return o < 1 ? a = s / (1 - o) : a = 0, o <= 0 ? l = 0 : n === t ? l = (e - r) / o % 6 : n === e ? l = 2 + (r - t) / o : l = 4 + (t - e) / o, l /= 6, l %= 1, [l * 360, o * 100, a * 100];
};
O.hsl.hcg = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = e < 0.5 ? 2 * t * e : 2 * t * (1 - e);
  let n = 0;
  return r < 1 && (n = (e - 0.5 * r) / (1 - r)), [i[0], r * 100, n * 100];
};
O.hsv.hcg = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = t * e;
  let n = 0;
  return r < 1 && (n = (e - r) / (1 - r)), [i[0], r * 100, n * 100];
};
O.hcg.rgb = function(i) {
  const t = i[0] / 360, e = i[1] / 100, r = i[2] / 100;
  if (e === 0)
    return [r * 255, r * 255, r * 255];
  const n = [0, 0, 0], s = t % 1 * 6, o = s % 1, a = 1 - o;
  let l = 0;
  switch (Math.floor(s)) {
    case 0:
      n[0] = 1, n[1] = o, n[2] = 0;
      break;
    case 1:
      n[0] = a, n[1] = 1, n[2] = 0;
      break;
    case 2:
      n[0] = 0, n[1] = 1, n[2] = o;
      break;
    case 3:
      n[0] = 0, n[1] = a, n[2] = 1;
      break;
    case 4:
      n[0] = o, n[1] = 0, n[2] = 1;
      break;
    default:
      n[0] = 1, n[1] = 0, n[2] = a;
  }
  return l = (1 - e) * r, [
    (e * n[0] + l) * 255,
    (e * n[1] + l) * 255,
    (e * n[2] + l) * 255
  ];
};
O.hcg.hsv = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = t + e * (1 - t);
  let n = 0;
  return r > 0 && (n = t / r), [i[0], n * 100, r * 100];
};
O.hcg.hsl = function(i) {
  const t = i[1] / 100, r = i[2] / 100 * (1 - t) + 0.5 * t;
  let n = 0;
  return r > 0 && r < 0.5 ? n = t / (2 * r) : r >= 0.5 && r < 1 && (n = t / (2 * (1 - r))), [i[0], n * 100, r * 100];
};
O.hcg.hwb = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = t + e * (1 - t);
  return [i[0], (r - t) * 100, (1 - r) * 100];
};
O.hwb.hcg = function(i) {
  const t = i[1] / 100, r = 1 - i[2] / 100, n = r - t;
  let s = 0;
  return n < 1 && (s = (r - n) / (1 - n)), [i[0], n * 100, s * 100];
};
O.apple.rgb = function(i) {
  return [i[0] / 65535 * 255, i[1] / 65535 * 255, i[2] / 65535 * 255];
};
O.rgb.apple = function(i) {
  return [i[0] / 255 * 65535, i[1] / 255 * 65535, i[2] / 255 * 65535];
};
O.gray.rgb = function(i) {
  return [i[0] / 100 * 255, i[0] / 100 * 255, i[0] / 100 * 255];
};
O.gray.hsl = function(i) {
  return [0, 0, i[0]];
};
O.gray.hsv = O.gray.hsl;
O.gray.hwb = function(i) {
  return [0, 100, i[0]];
};
O.gray.cmyk = function(i) {
  return [0, 0, 0, i[0]];
};
O.gray.lab = function(i) {
  return [i[0], 0, 0];
};
O.gray.hex = function(i) {
  const t = Math.round(i[0] / 100 * 255) & 255, r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
O.rgb.gray = function(i) {
  return [(i[0] + i[1] + i[2]) / 3 / 255 * 100];
};
const Ge = gi;
function Us() {
  const i = {}, t = Object.keys(Ge);
  for (let e = t.length, r = 0; r < e; r++)
    i[t[r]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return i;
}
function $s(i) {
  const t = Us(), e = [i];
  for (t[i].distance = 0; e.length; ) {
    const r = e.pop(), n = Object.keys(Ge[r]);
    for (let s = n.length, o = 0; o < s; o++) {
      const a = n[o], l = t[a];
      l.distance === -1 && (l.distance = t[r].distance + 1, l.parent = r, e.unshift(a));
    }
  }
  return t;
}
function Ys(i, t) {
  return function(e) {
    return t(i(e));
  };
}
function Ws(i, t) {
  const e = [t[i].parent, i];
  let r = Ge[t[i].parent][i], n = t[i].parent;
  for (; t[n].parent; )
    e.unshift(t[n].parent), r = Ys(Ge[t[n].parent][n], r), n = t[n].parent;
  return r.conversion = e, r;
}
var Xs = function(i) {
  const t = $s(i), e = {}, r = Object.keys(t);
  for (let n = r.length, s = 0; s < n; s++) {
    const o = r[s];
    t[o].parent !== null && (e[o] = Ws(o, t));
  }
  return e;
};
const Tr = gi, Gs = Xs, Ht = {}, Ks = Object.keys(Tr);
function js(i) {
  const t = function(...e) {
    const r = e[0];
    return r == null ? r : (r.length > 1 && (e = r), i(e));
  };
  return "conversion" in i && (t.conversion = i.conversion), t;
}
function Qs(i) {
  const t = function(...e) {
    const r = e[0];
    if (r == null)
      return r;
    r.length > 1 && (e = r);
    const n = i(e);
    if (typeof n == "object")
      for (let s = n.length, o = 0; o < s; o++)
        n[o] = Math.round(n[o]);
    return n;
  };
  return "conversion" in i && (t.conversion = i.conversion), t;
}
Ks.forEach((i) => {
  Ht[i] = {}, Object.defineProperty(Ht[i], "channels", { value: Tr[i].channels }), Object.defineProperty(Ht[i], "labels", { value: Tr[i].labels });
  const t = Gs(i);
  Object.keys(t).forEach((r) => {
    const n = t[r];
    Ht[i][r] = Qs(n), Ht[i][r].raw = js(n);
  });
});
var Zs = Ht;
const Jt = qs, at = Zs, mi = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], Mr = {};
for (const i of Object.keys(at))
  Mr[[...at[i].labels].sort().join("")] = i;
const Ke = {};
function X(i, t) {
  if (!(this instanceof X))
    return new X(i, t);
  if (t && t in mi && (t = null), t && !(t in at))
    throw new Error("Unknown model: " + t);
  let e, r;
  if (i == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (i instanceof X)
    this.model = i.model, this.color = [...i.color], this.valpha = i.valpha;
  else if (typeof i == "string") {
    const n = Jt.get(i);
    if (n === null)
      throw new Error("Unable to parse color from string: " + i);
    this.model = n.model, r = at[this.model].channels, this.color = n.value.slice(0, r), this.valpha = typeof n.value[r] == "number" ? n.value[r] : 1;
  } else if (i.length > 0) {
    this.model = t || "rgb", r = at[this.model].channels;
    const n = Array.prototype.slice.call(i, 0, r);
    this.color = Or(n, r), this.valpha = typeof i[r] == "number" ? i[r] : 1;
  } else if (typeof i == "number")
    this.model = "rgb", this.color = [
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const n = Object.keys(i);
    "alpha" in i && (n.splice(n.indexOf("alpha"), 1), this.valpha = typeof i.alpha == "number" ? i.alpha : 0);
    const s = n.sort().join("");
    if (!(s in Mr))
      throw new Error("Unable to parse color from object: " + JSON.stringify(i));
    this.model = Mr[s];
    const { labels: o } = at[this.model], a = [];
    for (e = 0; e < o.length; e++)
      a.push(i[o[e]]);
    this.color = Or(a);
  }
  if (Ke[this.model])
    for (r = at[this.model].channels, e = 0; e < r; e++) {
      const n = Ke[this.model][e];
      n && (this.color[e] = n(this.color[e]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
X.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(i) {
    let t = this.model in Jt.to ? this : this.rgb();
    t = t.round(typeof i == "number" ? i : 1);
    const e = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return Jt.to[t.model](e);
  },
  percentString(i) {
    const t = this.rgb().round(typeof i == "number" ? i : 1), e = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return Jt.to.rgb.percent(e);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const i = {}, { channels: t } = at[this.model], { labels: e } = at[this.model];
    for (let r = 0; r < t; r++)
      i[e[r]] = this.color[r];
    return this.valpha !== 1 && (i.alpha = this.valpha), i;
  },
  unitArray() {
    const i = this.rgb().color;
    return i[0] /= 255, i[1] /= 255, i[2] /= 255, this.valpha !== 1 && i.push(this.valpha), i;
  },
  unitObject() {
    const i = this.rgb().object();
    return i.r /= 255, i.g /= 255, i.b /= 255, this.valpha !== 1 && (i.alpha = this.valpha), i;
  },
  round(i) {
    return i = Math.max(i || 0, 0), new X([...this.color.map(Js(i)), this.valpha], this.model);
  },
  alpha(i) {
    return i !== void 0 ? new X([...this.color, Math.max(0, Math.min(1, i))], this.model) : this.valpha;
  },
  // Rgb
  red: L("rgb", 0, W(255)),
  green: L("rgb", 1, W(255)),
  blue: L("rgb", 2, W(255)),
  hue: L(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (i) => (i % 360 + 360) % 360),
  saturationl: L("hsl", 1, W(100)),
  lightness: L("hsl", 2, W(100)),
  saturationv: L("hsv", 1, W(100)),
  value: L("hsv", 2, W(100)),
  chroma: L("hcg", 1, W(100)),
  gray: L("hcg", 2, W(100)),
  white: L("hwb", 1, W(100)),
  wblack: L("hwb", 2, W(100)),
  cyan: L("cmyk", 0, W(100)),
  magenta: L("cmyk", 1, W(100)),
  yellow: L("cmyk", 2, W(100)),
  black: L("cmyk", 3, W(100)),
  x: L("xyz", 0, W(95.047)),
  y: L("xyz", 1, W(100)),
  z: L("xyz", 2, W(108.833)),
  l: L("lab", 0, W(100)),
  a: L("lab", 1),
  b: L("lab", 2),
  keyword(i) {
    return i !== void 0 ? new X(i) : at[this.model].keyword(this.color);
  },
  hex(i) {
    return i !== void 0 ? new X(i) : Jt.to.hex(this.rgb().round().color);
  },
  hexa(i) {
    if (i !== void 0)
      return new X(i);
    const t = this.rgb().round().color;
    let e = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return e.length === 1 && (e = "0" + e), Jt.to.hex(t) + e;
  },
  rgbNumber() {
    const i = this.rgb().color;
    return (i[0] & 255) << 16 | (i[1] & 255) << 8 | i[2] & 255;
  },
  luminosity() {
    const i = this.rgb().color, t = [];
    for (const [e, r] of i.entries()) {
      const n = r / 255;
      t[e] = n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  },
  contrast(i) {
    const t = this.luminosity(), e = i.luminosity();
    return t > e ? (t + 0.05) / (e + 0.05) : (e + 0.05) / (t + 0.05);
  },
  level(i) {
    const t = this.contrast(i);
    return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
  },
  isDark() {
    const i = this.rgb().color;
    return (i[0] * 2126 + i[1] * 7152 + i[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const i = this.rgb();
    for (let t = 0; t < 3; t++)
      i.color[t] = 255 - i.color[t];
    return i;
  },
  lighten(i) {
    const t = this.hsl();
    return t.color[2] += t.color[2] * i, t;
  },
  darken(i) {
    const t = this.hsl();
    return t.color[2] -= t.color[2] * i, t;
  },
  saturate(i) {
    const t = this.hsl();
    return t.color[1] += t.color[1] * i, t;
  },
  desaturate(i) {
    const t = this.hsl();
    return t.color[1] -= t.color[1] * i, t;
  },
  whiten(i) {
    const t = this.hwb();
    return t.color[1] += t.color[1] * i, t;
  },
  blacken(i) {
    const t = this.hwb();
    return t.color[2] += t.color[2] * i, t;
  },
  grayscale() {
    const i = this.rgb().color, t = i[0] * 0.3 + i[1] * 0.59 + i[2] * 0.11;
    return X.rgb(t, t, t);
  },
  fade(i) {
    return this.alpha(this.valpha - this.valpha * i);
  },
  opaquer(i) {
    return this.alpha(this.valpha + this.valpha * i);
  },
  rotate(i) {
    const t = this.hsl();
    let e = t.color[0];
    return e = (e + i) % 360, e = e < 0 ? 360 + e : e, t.color[0] = e, t;
  },
  mix(i, t) {
    if (!i || !i.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof i);
    const e = i.rgb(), r = this.rgb(), n = t === void 0 ? 0.5 : t, s = 2 * n - 1, o = e.alpha() - r.alpha(), a = ((s * o === -1 ? s : (s + o) / (1 + s * o)) + 1) / 2, l = 1 - a;
    return X.rgb(
      a * e.red() + l * r.red(),
      a * e.green() + l * r.green(),
      a * e.blue() + l * r.blue(),
      e.alpha() * n + r.alpha() * (1 - n)
    );
  }
};
for (const i of Object.keys(at)) {
  if (mi.includes(i))
    continue;
  const { channels: t } = at[i];
  X.prototype[i] = function(...e) {
    return this.model === i ? new X(this) : e.length > 0 ? new X(e, i) : new X([...to(at[this.model][i].raw(this.color)), this.valpha], i);
  }, X[i] = function(...e) {
    let r = e[0];
    return typeof r == "number" && (r = Or(e, t)), new X(r, i);
  };
}
function Hs(i, t) {
  return Number(i.toFixed(t));
}
function Js(i) {
  return function(t) {
    return Hs(t, i);
  };
}
function L(i, t, e) {
  i = Array.isArray(i) ? i : [i];
  for (const r of i)
    (Ke[r] || (Ke[r] = []))[t] = e;
  return i = i[0], function(r) {
    let n;
    return r !== void 0 ? (e && (r = e(r)), n = this[i](), n.color[t] = r, n) : (n = this[i]().color[t], e && (n = e(n)), n);
  };
}
function W(i) {
  return function(t) {
    return Math.max(0, Math.min(i, t));
  };
}
function to(i) {
  return Array.isArray(i) ? i : [i];
}
function Or(i, t) {
  for (let e = 0; e < t; e++)
    typeof i[e] != "number" && (i[e] = 0);
  return i;
}
var eo = X;
const Sr = /* @__PURE__ */ zs(eo), ro = ["width", "height"], no = ["stroke-width", "stroke"], io = ["stroke-width", "stroke"], so = /* @__PURE__ */ ce({
  __name: "add",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "black" },
    strokeWidth: { default: 10 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "black" },
    animation: { type: Boolean, default: !0 }
  },
  setup(i) {
    const t = i, e = tt(null), r = tt(null), n = tt(null);
    return De(() => {
      var u, h, f, _;
      var s;
      const o = r.value, a = n.value;
      if (console.log("linecap", t.linecap), t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var l = e.value;
        for (let d = 0; d < t.parentDeep; d++)
          l = l.parentNode;
        s = l;
      } else
        t.targer && (s = document.getElementById(t.targer));
      if (s == null && console.error("targer is undefined"), t.animation) {
        const d = _e.timeline({ paused: !0 });
        let p = (h = (u = Sr(t.color)) == null ? void 0 : u.alpha(0.1)) == null ? void 0 : h.toString(), c = (_ = (f = Sr(t.color)) == null ? void 0 : f.alpha(0.7)) == null ? void 0 : _.toString();
        d.fromTo(o, { attr: { x1: "40", x2: "40", stroke: p, "stroke-linecap": "butt" }, transformOrigin: "center" }, { attr: { x1: "10", x2: "70", stroke: c, "stroke-linecap": t.linecap }, duration: t.duration, rotation: 360 }), d.fromTo(a, { attr: { x1: "40", y1: "40", x2: "40", y2: "40", stroke: p, "stroke-linecap": "butt" }, transformOrigin: "center" }, { attr: { x1: "40", y1: "10", x2: "40", y2: "70", stroke: c, "stroke-linecap": t.linecap }, duration: t.duration, rotation: 360 }, 0), s == null || s.addEventListener("mouseenter", () => {
          d.play();
        }), s == null || s.addEventListener("mouseleave", () => {
          d.reverse();
        });
      }
    }), (s, o) => (fe(), Ae("svg", {
      ref_key: "root",
      ref: e,
      class: "root",
      width: t.width,
      height: t.height,
      viewBox: "0 0 80 80",
      style: se({ rotate: t.rotate + "deg", "--hover-color": t.hoverColor })
    }, [
      bt("line", {
        ref_key: "line1",
        ref: r,
        class: "line1",
        x1: "10",
        y1: "40",
        x2: "70",
        y2: "40",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, no),
      bt("line", {
        ref_key: "line2",
        ref: n,
        x1: "40",
        y1: "10",
        x2: "40",
        y2: "70",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, io)
    ], 12, ro));
  }
});
const xo = /* @__PURE__ */ ce({
  __name: "close",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "black" },
    strokeWidth: { default: 10 },
    rotate: { default: 45 },
    parentDeep: {},
    width: {},
    height: {},
    linecap: {},
    hoverColor: {},
    animation: { type: Boolean, default: !0 }
  },
  setup(i) {
    const t = i;
    return (e, r) => (fe(), yi(so, {
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
function Wr(i) {
  if (!i)
    throw new Error("svg is not defined");
  i && (i.addEventListener("mouseenter", () => {
    i.classList.add("hover");
  }), i.addEventListener("mouseleave", () => {
    i.classList.remove("hover");
  }));
}
const oo = ["width", "height"], ao = ["stroke", "stroke-width"], lo = ["stroke", "stroke-width"], uo = /* @__PURE__ */ ce({
  __name: "edit",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "black" },
    strokeWidth: { default: 50 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "black" },
    animation: { type: Boolean, default: !0 }
  },
  setup(i) {
    const t = i, e = tt(null), r = tt(null), n = tt(null);
    return De(() => {
      var s;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var o = e.value;
        for (let a = 0; a < t.parentDeep; a++)
          o = o.parentNode;
        s = o;
      } else
        t.targer && (s = document.getElementById(t.targer));
      if (s == null && console.error("targer is undefined"), e.value && Wr(e.value), t.animation && s) {
        let a = Sr(t.color).alpha(0.1).string();
        const l = _e.timeline({ paused: !0 });
        let u = r.value.getTotalLength(), h = `${u} ${u}`, f = u;
        l.fromTo(r.value, { attr: { stroke: a }, opacity: 0.1, strokeDashoffset: f, strokeDasharray: h, transformOrigin: "center" }, { attr: { stroke: t.color }, opacity: 1, strokeDashoffset: 0, duration: t.duration }), l.fromTo(n.value, { attr: { stroke: a }, strokeDashoffset: f, strokeDasharray: h, opacity: 0.1, transformOrigin: "center" }, { attr: { stroke: t.color }, opacity: 1, strokeDashoffset: 0, duration: t.duration }, 0), s == null || s.addEventListener("mouseenter", () => {
          l.play();
        }), s == null || s.addEventListener("mouseleave", () => {
          l.reverse();
        });
      }
    }), (s, o) => (fe(), Ae("svg", {
      ref_key: "root",
      ref: e,
      width: t.width,
      height: t.height,
      viewBox: "0 0 1024 924",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:svg": "http://www.w3.org/2000/svg",
      class: "icon root",
      version: "1.1",
      style: se({ "--hover-color": t.hoverColor })
    }, [
      bt("path", {
        ref_key: "line1",
        ref: r,
        d: "M611,94L266,97c-25,7-44,34-43,84l5,574c1,34-3,34,31,36l546,3c18,1,14,-7,15,-27l0,-324",
        fill: "none",
        id: "svg_1",
        stroke: t.color,
        "stroke-linecap": "round",
        "stroke-width": `${t.strokeWidth}px`
      }, null, 8, ao),
      bt("path", {
        ref_key: "line2",
        ref: n,
        d: "m847.74,188.67q1.9,4.54 3.09,10.58t1.18,12.6t-2.38,13.1t-7.62,12.6q-5.71,6.05 -10.24,10.58t-7.86,8.07q-3.81,4.03 -7.14,7.06l-89.09,-94.25q5.71,-5.54 13.58,-13.36t13.1,-12.35q6.67,-5.55 13.81,-7.81t14.06,-2.02t13.34,2.27t11.2,4.53q10,5.55 22.16,19.41t18.82,28.98l-0.01,0.01zm-371.12,245.96q2.85,-3.02 13.34,-14.37t26.2,-27.97l34.77,-36.8l38.59,-40.83l102.43,-108.37l89.09,94.75l-102.43,108.37l-38.12,40.83q-19.05,19.66 -34.3,36.03t-25.25,26.96t-11.91,12.09q-4.76,4.54 -10.96,9.57t-12.87,8.07q-6.67,3.53 -19.54,8.56t-26.92,9.83t-26.68,8.32t-18.82,4.54q-12.87,1.51 -17.14,-4.03t-2.38,-18.65q0.95,-7.06 4.53,-20.41t7.62,-27.72t7.86,-26.46t6.19,-16.63q2.86,-7.06 6.44,-12.86t10.24,-12.86l0,0.02l0.02,0.02z",
        fill: "none",
        id: "svg_2",
        stroke: t.color,
        "stroke-width": `${t.strokeWidth - 10}px`
      }, null, 8, lo)
    ], 12, oo));
  }
});
const He = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [r, n] of t)
    e[r] = n;
  return e;
}, wo = /* @__PURE__ */ He(uo, [["__scopeId", "data-v-49534453"]]), ho = ["width", "height"], co = ["fill"], fo = ["fill"], _o = ["fill"], po = /* @__PURE__ */ ce({
  __name: "more",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "black" },
    strokeWidth: { default: 10 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "black" },
    animation: { type: Boolean, default: !0 }
  },
  setup(i) {
    const t = i, e = tt(null), r = tt(null), n = tt(null), s = tt(null);
    return De(() => {
      var o;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var a = e.value;
        for (let l = 0; l < t.parentDeep; l++)
          a = a.parentNode;
        o = a;
      } else
        t.targer && (o = document.getElementById(t.targer));
      if (o == null && console.error("targer is undefined"), e.value && Wr(e.value), t.animation && o) {
        const l = _e.timeline({ paused: !0 });
        l.fromTo(n.value, { opacity: 0, transformOrigin: "center" }, { opacity: 1, duration: t.duration, fill: t.color }), l.fromTo(r.value, { x: 280, opacity: 0 }, { x: -60, fill: t.color, opacity: 1, duration: t.duration }, 0), l.fromTo(s.value, { x: -280, opacity: 0 }, { x: 60, fill: t.color, opacity: 1, duration: t.duration }, 0), o.addEventListener("mouseenter", () => {
          l.play();
        }), o.addEventListener("mouseleave", () => {
          l.reverse();
        });
      }
    }), (o, a) => (fe(), Ae("svg", {
      ref_key: "root",
      ref: e,
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: t.width,
      height: t.height,
      id: "root",
      style: se({ "--hover-color": t.hoverColor })
    }, [
      bt("path", {
        ref_key: "point1",
        ref: r,
        d: "M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z",
        fill: t.color,
        "p-id": "2443"
      }, null, 8, co),
      bt("path", {
        ref_key: "point2",
        ref: n,
        d: "M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z",
        fill: t.color,
        "p-id": "2444"
      }, null, 8, fo),
      bt("path", {
        ref_key: "point3",
        ref: s,
        d: "M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z",
        fill: t.color,
        "p-id": "2445"
      }, null, 8, _o)
    ], 12, ho));
  }
});
const ko = /* @__PURE__ */ He(po, [["__scopeId", "data-v-23e93ada"]]), go = /* @__PURE__ */ ce({
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
  setup(i) {
    const t = i, e = tt(null), r = tt(null), n = tt(null);
    return De(() => {
      const s = r.value, o = n.value, a = _e.timeline({ paused: !0 });
      a.fromTo(s, { transformOrigin: "center", scale: 0 }, { duration: t.duration, scale: 1 }), o == null || o.addEventListener("mouseenter", () => {
        a.play();
      }), o == null || o.addEventListener("mouseleave", () => {
        a.reverse();
      });
    }), (s, o) => (fe(), Ae("cite", {
      class: "tray",
      ref_key: "tray",
      ref: e,
      style: se({ padding: t.padding })
    }, [
      bt("div", {
        class: "bg",
        ref_key: "bg",
        ref: r,
        style: se({
          backgroundColor: t.color,
          borderRadius: t.linecap == "round" ? "5px" : "0px"
        })
      }, null, 4),
      bt("div", {
        ref_key: "slotTarget",
        ref: n,
        style: { height: "inherit", "line-height": "0px" }
      }, [
        vi(s.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 4));
  }
});
const To = /* @__PURE__ */ He(go, [["__scopeId", "data-v-3757cb6e"]]), mo = ["width", "height"], yo = ["fill"], vo = /* @__PURE__ */ ce({
  __name: "delete",
  props: {
    duration: { default: 0.3 },
    targer: { default: void 0 },
    color: { default: "black" },
    strokeWidth: { default: 10 },
    rotate: { default: 0 },
    parentDeep: { default: 1 },
    width: { default: 12 },
    height: { default: 12 },
    linecap: { default: "butt" },
    hoverColor: { default: "black" },
    animation: { type: Boolean, default: !0 }
  },
  setup(i) {
    const t = i, e = tt(null);
    return De(() => {
      var r;
      if (t.parentDeep != null && t.parentDeep > 0 && e.value != null) {
        var n = e.value;
        for (let s = 0; s < t.parentDeep; s++)
          n = n.parentNode;
        r = n;
      } else
        t.targer && (r = document.getElementById(t.targer));
      if (r == null && console.error("targer is undefined"), e.value && Wr(e.value), t.animation && r) {
        const s = _e.timeline({ paused: !0 });
        s.fromTo(e.value, { opacity: 0.1, rotateY: 90, transformOrigin: "center" }, { opacity: 1, rotateY: 0, duration: t.duration, fill: t.color }), r.addEventListener("mouseenter", () => {
          s.play();
        }), r.addEventListener("mouseleave", () => {
          s.reverse();
        });
      }
    }), (r, n) => (fe(), Ae("svg", {
      ref_key: "root",
      ref: e,
      class: "root",
      viewBox: "0 0 800 850",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      calss: "root",
      width: t.width,
      height: t.height,
      style: se({ "--hover-color": t.hoverColor })
    }, [
      bt("path", {
        fill: t.color,
        d: "M 249.6 99.2 v 64 h 320 v -64 H 249.6 z m 416 144 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 39.7648 -32.2352 72 -72 72 H 201.6 c -39.7648 0 -72 -32.2352 -72 -72 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 13.2552 10.7448 24 24 24 h 416 c 13.2552 0 24 -10.7448 24 -24 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 z m -344 32 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z m 176 0 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z M 577.6 51.2 c 22.0912 0 40 17.9088 40 40 v 72 h 126.4 c 13.2552 0 24 10.7448 24 24 c 0 13.2552 -10.7448 24 -24 24 H 75.2 c -13.2552 0 -24 -10.7448 -24 -24 c 0 -13.2552 10.7448 -24 24 -24 h 126.4 v -72 c 0 -22.0912 17.9088 -40 40 -40 h 336 z"
      }, null, 8, yo)
    ], 12, mo));
  }
});
const Mo = /* @__PURE__ */ He(vo, [["__scopeId", "data-v-62a609bd"]]);
export {
  so as Add,
  xo as Close,
  Mo as Delete,
  wo as Edit,
  ko as More,
  To as Tray
};
