import { defineComponent as ci, ref as Xe, onMounted as _i, openBlock as di, createElementBlock as pi, normalizeStyle as gi, createElementVNode as Nr } from "vue";
function wt(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function nn(i, t) {
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
var lt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ne = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, br, Q, L, ct = 1e8, D = 1 / ct, rr = Math.PI * 2, mi = rr / 4, yi = 0, sn = Math.sqrt, vi = Math.cos, bi = Math.sin, W = function(t) {
  return typeof t == "string";
}, N = function(t) {
  return typeof t == "function";
}, Tt = function(t) {
  return typeof t == "number";
}, xr = function(t) {
  return typeof t > "u";
}, bt = function(t) {
  return typeof t == "object";
}, tt = function(t) {
  return t !== !1;
}, wr = function() {
  return typeof window < "u";
}, Se = function(t) {
  return N(t) || W(t);
}, on = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Z = Array.isArray, nr = /(?:-?\.?\d|\.)+/gi, an = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ht = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, $e = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ln = /[+-]=-?[.\d]+/, un = /[^,'"\[\]\s]+/gi, xi = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, E, ft, ir, kr, ut = {}, De = {}, hn, fn = function(t) {
  return (De = Wt(t, ut)) && nt;
}, Tr = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Fe = function(t, e) {
  return !e && console.warn(t);
}, cn = function(t, e) {
  return t && (ut[t] = e) && De && (De[t] = e) || ut;
}, ge = function() {
  return 0;
}, wi = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Pe = {
  suppressEvents: !0,
  kill: !1
}, ki = {
  suppressEvents: !0
}, Mr = {}, Ct = [], sr = {}, _n, it = {}, Ge = {}, Br = 30, Ce = [], Sr = "", Or = function(t) {
  var e = t[0], r, n;
  if (bt(e) || N(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (n = Ce.length; n-- && !Ce[n].targetTest(e); )
      ;
    r = Ce[n];
  }
  for (n = t.length; n--; )
    t[n] && (t[n]._gsap || (t[n]._gsap = new Ln(t[n], r))) || t.splice(n, 1);
  return t;
}, Yt = function(t) {
  return t._gsap || Or(_t(t))[0]._gsap;
}, dn = function(t, e, r) {
  return (r = t[e]) && N(r) ? t[e]() : xr(r) && t.getAttribute && t.getAttribute(e) || r;
}, et = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, B = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, K = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, te = function(t, e) {
  var r = e.charAt(0), n = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + n : r === "-" ? t - n : r === "*" ? t * n : t / n;
}, Ti = function(t, e) {
  for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, Ee = function() {
  var t = Ct.length, e = Ct.slice(0), r, n;
  for (sr = {}, Ct.length = 0, r = 0; r < t; r++)
    n = e[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, pn = function(t, e, r, n) {
  Ct.length && !Q && Ee(), t.render(e, r, n || Q && e < 0 && (t._initted || t._startAt)), Ct.length && !Q && Ee();
}, gn = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(un).length < 2 ? e : W(t) ? t.trim() : t;
}, mn = function(t) {
  return t;
}, pt = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Mi = function(t) {
  return function(e, r) {
    for (var n in r)
      n in e || n === "duration" && t || n === "ease" || (e[n] = r[n]);
  };
}, Wt = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Ur = function i(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = bt(e[r]) ? i(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, ze = function(t, e) {
  var r = {}, n;
  for (n in t)
    n in e || (r[n] = t[n]);
  return r;
}, ce = function(t) {
  var e = t.parent || E, r = t.keyframes ? Mi(Z(t.keyframes)) : pt;
  if (tt(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Si = function(t, e) {
  for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, yn = function(t, e, r, n, s) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var o = t[n], a;
  if (s)
    for (a = e[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e;
}, Ve = function(t, e, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var s = e._prev, o = e._next;
  s ? s._next = o : t[r] === e && (t[r] = o), o ? o._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null;
}, Ft = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Xt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, Oi = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, or = function(t, e, r, n) {
  return t._startAt && (Q ? t._startAt.revert(Pe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n));
}, Pi = function i(t) {
  return !t || t._ts && i(t.parent);
}, Vr = function(t) {
  return t._repeat ? ie(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, ie = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, Re = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, qe = function(t) {
  return t._end = K(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0));
}, Ye = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = K(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), qe(t), r._dirty || Xt(r, t)), t;
}, vn = function(t, e) {
  var r;
  if ((e._time || e._initted && !e._dur) && (r = Re(t.rawTime(), e), (!e._dur || Te(0, e.totalDuration(), r) - e._tTime > D) && e.render(r, !0)), Xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -D;
  }
}, mt = function(t, e, r, n) {
  return e.parent && Ft(e), e._start = K((Tt(r) ? r : r || t !== E ? ht(t, r, e) : t._time) + e._delay), e._end = K(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), yn(t, e, "_first", "_last", t._sort ? "_start" : 0), ar(e) || (t._recent = e), n || vn(t, e), t._ts < 0 && Ye(t, t._tTime), t;
}, bn = function(t, e) {
  return (ut.ScrollTrigger || Tr("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t);
}, xn = function(t, e, r, n, s) {
  if (Cr(t, e, s), !t._initted)
    return 1;
  if (!r && t._pt && !Q && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && _n !== st.frame)
    return Ct.push(t), t._lazy = [s, n], 1;
}, Ci = function i(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || i(e));
}, ar = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Ai = function(t, e, r, n) {
  var s = t.ratio, o = e < 0 || !e && (!t._start && Ci(t) && !(!t._initted && ar(t)) || (t._ts < 0 || t._dp._ts < 0) && !ar(t)) ? 0 : 1, a = t._rDelay, l = 0, u, h, c;
  if (a && t._repeat && (l = Te(0, t._tDur, e), h = ie(l, a), t._yoyo && h & 1 && (o = 1 - o), h !== ie(t._tTime, a) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || Q || n || t._zTime === D || !e && t._zTime) {
    if (!t._initted && xn(t, e, n, r, l))
      return;
    for (c = t._zTime, t._zTime = e || (r ? D : 0), r || (r = e && !c), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    e < 0 && or(t, e, r, !0), t._onUpdate && !r && dt(t, "onUpdate"), l && t._repeat && !r && t.parent && dt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Ft(t, 1), !r && !Q && (dt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, Di = function(t, e, r) {
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
}, se = function(t, e, r, n) {
  var s = t._repeat, o = K(e) || 0, a = t._tTime / t._tDur;
  return a && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : K(o * (s + 1) + t._rDelay * s) : o, a > 0 && !n && Ye(t, t._tTime = t._tDur * a), t.parent && qe(t), r || Xt(t.parent, t), t;
}, qr = function(t) {
  return t instanceof J ? Xt(t) : se(t, t._dur);
}, Fi = {
  _start: 0,
  endTime: ge,
  totalDuration: ge
}, ht = function i(t, e, r) {
  var n = t.labels, s = t._recent || Fi, o = t.duration() >= ct ? s.endTime(!1) : t._dur, a, l, u;
  return W(e) && (isNaN(e) || e in n) ? (l = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (e in n || (n[e] = o), n[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && r && (l = l / 100 * (Z(r) ? r[0] : r).totalDuration()), a > 1 ? i(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e;
}, _e = function(t, e, r) {
  var n = Tt(e[1]), s = (n ? 2 : 1) + (t < 2 ? 0 : 1), o = e[s], a, l;
  if (n && (o.duration = e[1]), o.parent = r, t) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = tt(l.vars.inherit) && l.parent;
    o.immediateRender = tt(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1];
  }
  return new Y(e[0], o, e[s + 1]);
}, zt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Te = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, j = function(t, e) {
  return !W(t) || !(e = xi.exec(t)) ? "" : e[1];
}, Ei = function(t, e, r) {
  return zt(r, function(n) {
    return Te(t, e, n);
  });
}, lr = [].slice, wn = function(t, e) {
  return t && bt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && bt(t[0])) && !t.nodeType && t !== ft;
}, zi = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(n) {
    var s;
    return W(n) && !e || wn(n, 1) ? (s = r).push.apply(s, _t(n)) : r.push(n);
  }) || r;
}, _t = function(t, e, r) {
  return L && !e && L.selector ? L.selector(t) : W(t) && !r && (ir || !oe()) ? lr.call((e || kr).querySelectorAll(t), 0) : Z(t) ? zi(t, r) : wn(t) ? lr.call(t, 0) : t ? [t] : [];
}, ur = function(t) {
  return t = _t(t)[0] || Fe("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return _t(e, r.querySelectorAll ? r : r === t ? Fe("Invalid scope") || kr.createElement("div") : t);
  };
}, kn = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Tn = function(t) {
  if (N(t))
    return t;
  var e = bt(t) ? t : {
    each: t
  }, r = $t(e.ease), n = e.from || 0, s = parseFloat(e.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, u = e.axis, h = n, c = n;
  return W(n) ? h = c = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (h = n[0], c = n[1]), function(_, d, p) {
    var f = (p || e).length, g = o[f], m, y, b, x, v, M, T, k, w;
    if (!g) {
      if (w = e.grid === "auto" ? 0 : (e.grid || [1, ct])[1], !w) {
        for (T = -ct; T < (T = p[w++].getBoundingClientRect().left) && w < f; )
          ;
        w--;
      }
      for (g = o[f] = [], m = l ? Math.min(w, f) * h - 0.5 : n % w, y = w === ct ? 0 : l ? f * c / w - 0.5 : n / w | 0, T = 0, k = ct, M = 0; M < f; M++)
        b = M % w - m, x = y - (M / w | 0), g[M] = v = u ? Math.abs(u === "y" ? x : b) : sn(b * b + x * x), v > T && (T = v), v < k && (k = v);
      n === "random" && kn(g), g.max = T - k, g.min = k, g.v = f = (parseFloat(e.amount) || parseFloat(e.each) * (w > f ? f - 1 : u ? u === "y" ? f / w : w : Math.max(w, f / w)) || 0) * (n === "edges" ? -1 : 1), g.b = f < 0 ? s - f : s, g.u = j(e.amount || e.each) || 0, r = r && f < 0 ? zn(r) : r;
    }
    return f = (g[_] - g.min) / g.max || 0, K(g.b + (r ? r(f) : f) * g.v) + g.u;
  };
}, hr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var n = K(Math.round(parseFloat(r) / t) * t * e);
    return (n - n % 1) / e + (Tt(r) ? 0 : j(r));
  };
}, Mn = function(t, e) {
  var r = Z(t), n, s;
  return !r && bt(t) && (n = r = t.radius || ct, t.values ? (t = _t(t.values), (s = !Tt(t[0])) && (n *= n)) : t = hr(t.increment)), zt(e, r ? N(t) ? function(o) {
    return s = t(o), Math.abs(s - o) <= n ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = ct, h = 0, c = t.length, _, d; c--; )
      s ? (_ = t[c].x - a, d = t[c].y - l, _ = _ * _ + d * d) : _ = Math.abs(t[c] - a), _ < u && (u = _, h = c);
    return h = !n || u <= n ? t[h] : o, s || h === o || Tt(o) ? h : h + j(o);
  } : hr(t));
}, Sn = function(t, e, r, n) {
  return zt(Z(t) ? !e : r === !0 ? !!(r = 0) : !n, function() {
    return Z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * n) / n;
  });
}, Ri = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(n) {
    return e.reduce(function(s, o) {
      return o(s);
    }, n);
  };
}, Ii = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || j(r));
  };
}, Li = function(t, e, r) {
  return Pn(t, e, 0, 1, r);
}, On = function(t, e, r) {
  return zt(r, function(n) {
    return t[~~e(n)];
  });
}, Ni = function i(t, e, r) {
  var n = e - t;
  return Z(t) ? On(t, i(0, t.length), e) : zt(r, function(s) {
    return (n + (s - t) % n) % n + t;
  });
}, Bi = function i(t, e, r) {
  var n = e - t, s = n * 2;
  return Z(t) ? On(t, i(0, t.length - 1), e) : zt(r, function(o) {
    return o = (s + (o - t) % s) % s || 0, t + (o > n ? s - o : o);
  });
}, me = function(t) {
  for (var e = 0, r = "", n, s, o, a; ~(n = t.indexOf("random(", e)); )
    o = t.indexOf(")", n), a = t.charAt(n + 7) === "[", s = t.substr(n + 7, o - n - 7).match(a ? un : nr), r += t.substr(e, n - e) + Sn(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), e = o + 1;
  return r + t.substr(e, t.length - e);
}, Pn = function(t, e, r, n, s) {
  var o = e - t, a = n - r;
  return zt(s, function(l) {
    return r + ((l - t) / o * a || 0);
  });
}, Ui = function i(t, e, r, n) {
  var s = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!s) {
    var o = W(t), a = {}, l, u, h, c, _;
    if (r === !0 && (n = 1) && (r = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Z(t) && !Z(e)) {
      for (h = [], c = t.length, _ = c - 2, u = 1; u < c; u++)
        h.push(i(t[u - 1], t[u]));
      c--, s = function(p) {
        p *= c;
        var f = Math.min(_, ~~p);
        return h[f](p - f);
      }, r = e;
    } else
      n || (t = Wt(Z(t) ? [] : {}, t));
    if (!h) {
      for (l in e)
        Pr.call(a, t, l, "get", e[l]);
      s = function(p) {
        return Fr(p, a) || (o ? t.p : t);
      };
    }
  }
  return zt(r, s);
}, Yr = function(t, e, r) {
  var n = t.labels, s = ct, o, a, l;
  for (o in n)
    a = n[o] - e, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, dt = function(t, e, r) {
  var n = t.vars, s = n[e], o = L, a = t._ctx, l, u, h;
  if (s)
    return l = n[e + "Params"], u = n.callbackScope || t, r && Ct.length && Ee(), a && (L = a), h = l ? s.apply(u, l) : s.call(u), L = o, h;
}, he = function(t) {
  return Ft(t), t.scrollTrigger && t.scrollTrigger.kill(!!Q), t.progress() < 1 && dt(t, "onInterrupt"), t;
}, Jt, Cn = [], An = function(t) {
  if (wr() && t) {
    t = !t.name && t.default || t;
    var e = t.name, r = N(t), n = e && !r && t.init ? function() {
      this._props = [];
    } : t, s = {
      init: ge,
      render: Fr,
      add: Pr,
      kill: rs,
      modifier: es,
      rawVars: 0
    }, o = {
      targetTest: 0,
      get: 0,
      getSetter: Dr,
      aliases: {},
      register: 0
    };
    if (oe(), t !== n) {
      if (it[e])
        return;
      pt(n, pt(ze(t, s), o)), Wt(n.prototype, Wt(s, ze(t, o))), it[n.prop = e] = n, t.targetTest && (Ce.push(n), Mr[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
    }
    cn(e, n), t.register && t.register(nt, n, rt);
  } else
    t && Cn.push(t);
}, A = 255, fe = {
  aqua: [0, A, A],
  lime: [0, A, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, A],
  navy: [0, 0, 128],
  white: [A, A, A],
  olive: [128, 128, 0],
  yellow: [A, A, 0],
  orange: [A, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [A, 0, 0],
  pink: [A, 192, 203],
  cyan: [0, A, A],
  transparent: [A, A, A, 0]
}, We = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * A + 0.5 | 0;
}, Dn = function(t, e, r) {
  var n = t ? Tt(t) ? [t >> 16, t >> 8 & A, t & A] : 0 : fe.black, s, o, a, l, u, h, c, _, d, p;
  if (!n) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), fe[t])
      n = fe[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return n = parseInt(t.substr(1, 6), 16), [n >> 16, n >> 8 & A, n & A, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & A, t & A];
    } else if (t.substr(0, 3) === "hsl") {
      if (n = p = t.match(nr), !e)
        l = +n[0] % 360 / 360, u = +n[1] / 100, h = +n[2] / 100, o = h <= 0.5 ? h * (u + 1) : h + u - h * u, s = h * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = We(l + 1 / 3, s, o), n[1] = We(l, s, o), n[2] = We(l - 1 / 3, s, o);
      else if (~t.indexOf("="))
        return n = t.match(an), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = t.match(nr) || fe.transparent;
    n = n.map(Number);
  }
  return e && !p && (s = n[0] / A, o = n[1] / A, a = n[2] / A, c = Math.max(s, o, a), _ = Math.min(s, o, a), h = (c + _) / 2, c === _ ? l = u = 0 : (d = c - _, u = h > 0.5 ? d / (2 - c - _) : d / (c + _), l = c === s ? (o - a) / d + (o < a ? 6 : 0) : c === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(u * 100 + 0.5), n[2] = ~~(h * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, Fn = function(t) {
  var e = [], r = [], n = -1;
  return t.split(At).forEach(function(s) {
    var o = s.match(Ht) || [];
    e.push.apply(e, o), r.push(n += o.length + 1);
  }), e.c = r, e;
}, Xr = function(t, e, r) {
  var n = "", s = (t + n).match(At), o = e ? "hsla(" : "rgba(", a = 0, l, u, h, c;
  if (!s)
    return t;
  if (s = s.map(function(_) {
    return (_ = Dn(_, e, 1)) && o + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (h = Fn(t), l = r.c, l.join(n) !== h.c.join(n)))
    for (u = t.replace(At, "1").split(Ht), c = u.length - 1; a < c; a++)
      n += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (h.length ? h : s.length ? s : r).shift());
  if (!u)
    for (u = t.split(At), c = u.length - 1; a < c; a++)
      n += u[a] + s[a];
  return n + u[c];
}, At = function() {
  var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in fe)
    i += "|" + t + "\\b";
  return new RegExp(i + ")", "gi");
}(), Vi = /hsl[a]?\(/, En = function(t) {
  var e = t.join(" "), r;
  if (At.lastIndex = 0, At.test(e))
    return r = Vi.test(e), t[1] = Xr(t[1], r), t[0] = Xr(t[0], r, Fn(t[1])), !0;
}, ye, st = function() {
  var i = Date.now, t = 500, e = 33, r = i(), n = r, s = 1e3 / 240, o = s, a = [], l, u, h, c, _, d, p = function f(g) {
    var m = i() - n, y = g === !0, b, x, v, M;
    if (m > t && (r += m - e), n += m, v = n - r, b = v - o, (b > 0 || y) && (M = ++c.frame, _ = v - c.time * 1e3, c.time = v = v / 1e3, o += b + (b >= s ? 4 : s - b), x = 1), y || (l = u(f)), x)
      for (d = 0; d < a.length; d++)
        a[d](v, _, M, g);
  };
  return c = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(g) {
      return _ / (1e3 / (g || 60));
    },
    wake: function() {
      hn && (!ir && wr() && (ft = ir = window, kr = ft.document || {}, ut.gsap = nt, (ft.gsapVersions || (ft.gsapVersions = [])).push(nt.version), fn(De || ft.GreenSockGlobals || !ft.gsap && ft || {}), h = ft.requestAnimationFrame, Cn.forEach(An)), l && c.sleep(), u = h || function(g) {
        return setTimeout(g, o - c.time * 1e3 + 1 | 0);
      }, ye = 1, p(2));
    },
    sleep: function() {
      (h ? ft.cancelAnimationFrame : clearTimeout)(l), ye = 0, u = ge;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, e = Math.min(m || 33, t);
    },
    fps: function(g) {
      s = 1e3 / (g || 240), o = c.time * 1e3 + s;
    },
    add: function(g, m, y) {
      var b = m ? function(x, v, M, T) {
        g(x, v, M, T), c.remove(b);
      } : g;
      return c.remove(g), a[y ? "unshift" : "push"](b), oe(), b;
    },
    remove: function(g, m) {
      ~(m = a.indexOf(g)) && a.splice(m, 1) && d >= m && d--;
    },
    _listeners: a
  }, c;
}(), oe = function() {
  return !ye && st.wake();
}, O = {}, qi = /^[\d.\-M][\d.\-,\s]/, Yi = /["']/g, Xi = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), n = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
    l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), e[n] = isNaN(u) ? u.replace(Yi, "").trim() : +u, n = l.substr(a + 1).trim();
  return e;
}, $i = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), n = t.indexOf("(", e);
  return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r);
}, Gi = function(t) {
  var e = (t + "").split("("), r = O[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Xi(e[1])] : $i(t).split(",").map(gn)) : O._CE && qi.test(t) ? O._CE("", t) : r;
}, zn = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Rn = function i(t, e) {
  for (var r = t._first, n; r; )
    r instanceof J ? i(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? i(r.timeline, e) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = e)), r = r._next;
}, $t = function(t, e) {
  return t && (N(t) ? t : O[t] || Gi(t)) || e;
}, Kt = function(t, e, r, n) {
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
  return et(t, function(a) {
    O[a] = ut[a] = s, O[o = a.toLowerCase()] = r;
    for (var l in s)
      O[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = O[a + "." + l] = s[l];
  }), s;
}, In = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ke = function i(t, e, r) {
  var n = e >= 1 ? e : 1, s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = s / rr * (Math.asin(1 / n) || 0), a = function(h) {
    return h === 1 ? 1 : n * Math.pow(2, -10 * h) * bi((h - o) * s) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : In(a);
  return s = rr / s, l.config = function(u, h) {
    return i(t, u, h);
  }, l;
}, je = function i(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, n = t === "out" ? r : t === "in" ? function(s) {
    return 1 - r(1 - s);
  } : In(r);
  return n.config = function(s) {
    return i(t, s);
  }, n;
};
et("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, t) {
  var e = t < 5 ? t + 1 : t;
  Kt(i + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Kt("Elastic", Ke("in"), Ke("out"), Ke());
(function(i, t) {
  var e = 1 / t, r = 2 * e, n = 2.5 * e, s = function(a) {
    return a < e ? i * a * a : a < r ? i * Math.pow(a - 1.5 / t, 2) + 0.75 : a < n ? i * (a -= 2.25 / t) * a + 0.9375 : i * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Kt("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
Kt("Expo", function(i) {
  return i ? Math.pow(2, 10 * (i - 1)) : 0;
});
Kt("Circ", function(i) {
  return -(sn(1 - i * i) - 1);
});
Kt("Sine", function(i) {
  return i === 1 ? 1 : -vi(i * mi) + 1;
});
Kt("Back", je("in"), je("out"), je());
O.SteppedEase = O.steps = ut.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, n = t + (e ? 0 : 1), s = e ? 1 : 0, o = 1 - D;
    return function(a) {
      return ((n * Te(0, o, a) | 0) + s) * r;
    };
  }
};
ne.ease = O["quad.out"];
et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
  return Sr += i + "," + i + "Params,";
});
var Ln = function(t, e) {
  this.id = yi++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : dn, this.set = e ? e.getSetter : Dr;
}, ve = /* @__PURE__ */ function() {
  function i(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, se(this, +e.duration, 1, 1), this.data = e.data, L && (this._ctx = L, L.data.push(this)), ye || st.wake();
  }
  var t = i.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, se(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, n) {
    if (oe(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Ye(this, r), !s._dp || s.parent || vn(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && mt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === D || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), pn(this, r, n)), this;
  }, t.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Vr(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, t.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Vr(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(r, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, n) : this._repeat ? ie(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -D ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? Re(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -D ? 0 : this._rts, this.totalTime(Te(-Math.abs(this._delay), this._tDur, n), !0), qe(this), Oi(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (oe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && mt(n, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (tt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Re(n.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = ki);
    var n = Q;
    return Q = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Q = n, this;
  }, t.globalTime = function(r) {
    for (var n = this, s = arguments.length ? r : n.rawTime(); n; )
      s = n._start + s / (n._ts || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r) : s;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, qr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, qr(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, n) {
    return this.totalTime(ht(this, r), tt(n));
  }, t.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, tt(n));
  }, t.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, t.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -D : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -D, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, n = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= n && s < this.endTime(!0) - D);
  }, t.eventCallback = function(r, n, s) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[r] = n, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = n)) : delete o[r], this) : o[r];
  }, t.then = function(r) {
    var n = this;
    return new Promise(function(s) {
      var o = N(r) ? r : mn, a = function() {
        var u = n.then;
        n.then = null, N(o) && (o = o(n)) && (o.then || o === n) && (n.then = u), s(o), n.then = u;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
    });
  }, t.kill = function() {
    he(this);
  }, i;
}();
pt(ve.prototype, {
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
  _zTime: -D,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var J = /* @__PURE__ */ function(i) {
  nn(t, i);
  function t(r, n) {
    var s;
    return r === void 0 && (r = {}), s = i.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = tt(r.sortChildren), E && mt(r.parent || E, wt(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && bn(wt(s), r.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(n, s, o) {
    return _e(0, arguments, this), this;
  }, e.from = function(n, s, o) {
    return _e(1, arguments, this), this;
  }, e.fromTo = function(n, s, o, a) {
    return _e(2, arguments, this), this;
  }, e.set = function(n, s, o) {
    return s.duration = 0, s.parent = this, ce(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Y(n, s, ht(this, o), 1), this;
  }, e.call = function(n, s, o) {
    return mt(this, Y.delayedCall(0, n, s), o);
  }, e.staggerTo = function(n, s, o, a, l, u, h) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = h, o.parent = this, new Y(n, o, ht(this, l)), this;
  }, e.staggerFrom = function(n, s, o, a, l, u, h) {
    return o.runBackwards = 1, ce(o).immediateRender = tt(o.immediateRender), this.staggerTo(n, s, o, a, l, u, h);
  }, e.staggerFromTo = function(n, s, o, a, l, u, h, c) {
    return a.startAt = o, ce(a).immediateRender = tt(a.immediateRender), this.staggerTo(n, s, a, l, u, h, c);
  }, e.render = function(n, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, h = n <= 0 ? 0 : K(n), c = this._zTime < 0 != n < 0 && (this._initted || !u), _, d, p, f, g, m, y, b, x, v, M, T;
    if (this !== E && h > l && n >= 0 && (h = l), h !== this._tTime || o || c) {
      if (a !== this._time && u && (h += this._time - a, n += this._time - a), _ = h, x = this._start, b = this._ts, m = !b, c && (u || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (M = this._yoyo, g = u + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(g * 100 + n, s, o);
        if (_ = K(h % g), h === l ? (f = this._repeat, _ = u) : (f = ~~(h / g), f && f === h / g && (_ = u, f--), _ > u && (_ = u)), v = ie(this._tTime, g), !a && this._tTime && v !== f && this._tTime - v * g - this._dur <= 0 && (v = f), M && f & 1 && (_ = u - _, T = 1), f !== v && !this._lock) {
          var k = M && v & 1, w = k === (M && f & 1);
          if (f < v && (k = !k), a = k ? 0 : u, this._lock = 1, this.render(a || (T ? 0 : K(f * g)), s, !u)._lock = 0, this._tTime = h, !s && this.parent && dt(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, w && (this._lock = 2, a = k ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          Rn(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Di(this, K(a), K(_)), y && (h -= _ - (_ = y._start))), this._tTime = h, this._time = _, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && _ && !s && !f && (dt(this, "onStart"), this._tTime !== h))
        return this;
      if (_ >= a && n >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || _ >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(n, s, o);
            if (d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, s, o), _ !== this._time || !this._ts && !m) {
              y = 0, p && (h += this._zTime = -D);
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
              y = 0, p && (h += this._zTime = P ? -D : D);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !s && (this.pause(), y.render(_ >= a ? 0 : -D)._zTime = _ >= a ? 1 : -1, this._ts))
        return this._start = x, qe(this), this.render(n, s, o);
      this._onUpdate && !s && dt(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && a) && (x === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (h === l && this._ts > 0 || !h && this._ts < 0) && Ft(this, 1), !s && !(n < 0 && !a) && (h || a || !l) && (dt(this, h === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(n, s) {
    var o = this;
    if (Tt(s) || (s = ht(this, s, n)), !(n instanceof ve)) {
      if (Z(n))
        return n.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (W(n))
        return this.addLabel(n, s);
      if (N(n))
        n = Y.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? mt(this, n, s) : this;
  }, e.getChildren = function(n, s, o, a) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -ct);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof Y ? s && l.push(u) : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, e.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === n)
        return s[o];
  }, e.remove = function(n) {
    return W(n) ? this.removeLabel(n) : N(n) ? this.killTweensOf(n) : (Ve(this, n), n === this._recent && (this._recent = this._last), Xt(this));
  }, e.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = K(st.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), i.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(n, s) {
    return this.labels[n] = ht(this, s), this;
  }, e.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, e.addPause = function(n, s, o) {
    var a = Y.delayedCall(0, s || ge, o);
    return a.data = "isPause", this._hasPause = 1, mt(this, a, ht(this, n));
  }, e.removePause = function(n) {
    var s = this._first;
    for (n = ht(this, n); s; )
      s._start === n && s.data === "isPause" && Ft(s), s = s._next;
  }, e.killTweensOf = function(n, s, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      St !== a[l] && a[l].kill(n, s);
    return this;
  }, e.getTweensOf = function(n, s) {
    for (var o = [], a = _t(n), l = this._first, u = Tt(s), h; l; )
      l instanceof Y ? Ti(l._targets, a) && (u ? (!St || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (h = l.getTweensOf(a, s)).length && o.push.apply(o, h), l = l._next;
    return o;
  }, e.tweenTo = function(n, s) {
    s = s || {};
    var o = this, a = ht(o, n), l = s, u = l.startAt, h = l.onStart, c = l.onStartParams, _ = l.immediateRender, d, p = Y.to(o, pt({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || D,
      onStart: function() {
        if (o.pause(), !d) {
          var g = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== g && se(p, g, 0, 1).render(p._time, !0, !0), d = 1;
        }
        h && h.apply(p, c || []);
      }
    }, s));
    return _ ? p.render(0) : p;
  }, e.tweenFromTo = function(n, s, o) {
    return this.tweenTo(s, pt({
      startAt: {
        time: ht(this, n)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(n) {
    return n === void 0 && (n = this._time), Yr(this, ht(this, n));
  }, e.previousLabel = function(n) {
    return n === void 0 && (n = this._time), Yr(this, ht(this, n), 1);
  }, e.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + D);
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
    var s = 0, o = this, a = o._last, l = ct, u, h, c;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (c = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), h = a._start, h > l && o._sort && a._ts && !o._lock ? (o._lock = 1, mt(o, a, h - a._delay, 1)._lock = 0) : l = h, h < 0 && a._ts && (s -= h, (!c && !o._dp || c && c.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      se(o, o === E && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(n) {
    if (E._ts && (pn(E, Re(n, E)), _n = st.frame), st.frame >= Br) {
      Br += lt.autoSleep || 120;
      var s = E._first;
      if ((!s || !s._ts) && lt.autoSleep && st._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || st.sleep();
      }
    }
  }, t;
}(ve);
pt(J.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Wi = function(t, e, r, n, s, o, a) {
  var l = new rt(this._pt, t, e, 0, 1, Yn, null, s), u = 0, h = 0, c, _, d, p, f, g, m, y;
  for (l.b = r, l.e = n, r += "", n += "", (m = ~n.indexOf("random(")) && (n = me(n)), o && (y = [r, n], o(y, t, e), r = y[0], n = y[1]), _ = r.match($e) || []; c = $e.exec(n); )
    p = c[0], f = n.substring(u, c.index), d ? d = (d + 1) % 5 : f.substr(-5) === "rgba(" && (d = 1), p !== _[h++] && (g = parseFloat(_[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: f || h === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: p.charAt(1) === "=" ? te(g, p) - g : parseFloat(p) - g,
      m: d && d < 4 ? Math.round : 0
    }, u = $e.lastIndex);
  return l.c = u < n.length ? n.substring(u, n.length) : "", l.fp = a, (ln.test(n) || m) && (l.e = 0), this._pt = l, l;
}, Pr = function(t, e, r, n, s, o, a, l, u, h) {
  N(n) && (n = n(s || 0, t, o));
  var c = t[e], _ = r !== "get" ? r : N(c) ? u ? t[e.indexOf("set") || !N(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c, d = N(c) ? u ? Hi : Vn : Ar, p;
  if (W(n) && (~n.indexOf("random(") && (n = me(n)), n.charAt(1) === "=" && (p = te(_, n) + (j(_) || 0), (p || p === 0) && (n = p))), !h || _ !== n || fr)
    return !isNaN(_ * n) && n !== "" ? (p = new rt(this._pt, t, e, +_ || 0, n - (_ || 0), typeof c == "boolean" ? ts : qn, 0, d), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!c && !(e in t) && Tr(e, n), Wi.call(this, t, e, _, n, d, l || lt.stringFilter, u));
}, Ki = function(t, e, r, n, s) {
  if (N(t) && (t = de(t, s, e, r, n)), !bt(t) || t.style && t.nodeType || Z(t) || on(t))
    return W(t) ? de(t, s, e, r, n) : t;
  var o = {}, a;
  for (a in t)
    o[a] = de(t[a], s, e, r, n);
  return o;
}, Nn = function(t, e, r, n, s, o) {
  var a, l, u, h;
  if (it[t] && (a = new it[t]()).init(s, a.rawVars ? e[t] : Ki(e[t], n, s, o, r), r, n, o) !== !1 && (r._pt = l = new rt(r._pt, s, t, 0, 1, a.render, a, 0, a.priority), r !== Jt))
    for (u = r._ptLookup[r._targets.indexOf(s)], h = a._props.length; h--; )
      u[a._props[h]] = l;
  return a;
}, St, fr, Cr = function i(t, e, r) {
  var n = t.vars, s = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, u = n.onUpdate, h = n.onUpdateParams, c = n.callbackScope, _ = n.runBackwards, d = n.yoyoEase, p = n.keyframes, f = n.autoRevert, g = t._dur, m = t._startAt, y = t._targets, b = t.parent, x = b && b.data === "nested" ? b.vars.targets : y, v = t._overwrite === "auto" && !br, M = t.timeline, T, k, w, P, C, R, U, V, F, X, q, H, Rt;
  if (M && (!p || !s) && (s = "none"), t._ease = $t(s, ne.ease), t._yEase = d ? zn($t(d === !0 ? s : d, ne.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !M && !!n.runBackwards, !M || p && !n.stagger) {
    if (V = y[0] ? Yt(y[0]).harness : 0, H = V && n[V.prop], T = ze(n, Mr), m && (m._zTime < 0 && m.progress(1), e < 0 && _ && a && !f ? m.render(-1, !0) : m.revert(_ && g ? Pe : wi), m._lazy = 0), o) {
      if (Ft(t._startAt = Y.set(y, pt({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !m && tt(l),
        startAt: null,
        delay: 0,
        onUpdate: u,
        onUpdateParams: h,
        callbackScope: c,
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q || !a && !f) && t._startAt.revert(Pe), a && g && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (_ && g && !m) {
      if (e && (a = !1), w = pt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !m && tt(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, T), H && (w[V.prop] = H), Ft(t._startAt = Y.set(y, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q ? t._startAt.revert(Pe) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        i(t._startAt, D, D);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = g && tt(l) || l && !g, k = 0; k < y.length; k++) {
      if (C = y[k], U = C._gsap || Or(y)[k]._gsap, t._ptLookup[k] = X = {}, sr[U.id] && Ct.length && Ee(), q = x === y ? k : x.indexOf(C), V && (F = new V()).init(C, H || T, t, q, x) !== !1 && (t._pt = P = new rt(t._pt, C, F.name, 0, 1, F.render, F, 0, F.priority), F._props.forEach(function(It) {
        X[It] = P;
      }), F.priority && (R = 1)), !V || H)
        for (w in T)
          it[w] && (F = Nn(w, T, t, q, C, x)) ? F.priority && (R = 1) : X[w] = P = Pr.call(t, C, w, "get", T[w], q, x, 0, n.stringFilter);
      t._op && t._op[k] && t.kill(C, t._op[k]), v && t._pt && (St = t, E.killTweensOf(C, X, t.globalTime(e)), Rt = !t.parent, St = 0), t._pt && l && (sr[U.id] = 1);
    }
    R && Xn(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !Rt, p && e <= 0 && M.render(ct, !0, !0);
}, ji = function(t, e, r, n, s, o, a) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, h, c, _;
  if (!l)
    for (l = t._ptCache[e] = [], c = t._ptLookup, _ = t._targets.length; _--; ) {
      if (u = c[_][e], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
          u = u._next;
      if (!u)
        return fr = 1, t.vars[e] = "+=0", Cr(t, a), fr = 0, 1;
      l.push(u);
    }
  for (_ = l.length; _--; )
    h = l[_], u = h._pt || h, u.s = (n || n === 0) && !s ? n : u.s + (n || 0) + o * u.c, u.c = r - u.s, h.e && (h.e = B(r) + j(h.e)), h.b && (h.b = u.s + j(h.b));
}, Qi = function(t, e) {
  var r = t[0] ? Yt(t[0]).harness : 0, n = r && r.aliases, s, o, a, l;
  if (!n)
    return e;
  s = Wt({}, e);
  for (o in n)
    if (o in s)
      for (l = n[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, Zi = function(t, e, r, n) {
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
}, de = function(t, e, r, n, s) {
  return N(t) ? t.call(e, r, n, s) : W(t) && ~t.indexOf("random(") ? me(t) : t;
}, Bn = Sr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Un = {};
et(Bn + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
  return Un[i] = 1;
});
var Y = /* @__PURE__ */ function(i) {
  nn(t, i);
  function t(r, n, s, o) {
    var a;
    typeof n == "number" && (s.duration = n, n = s, s = null), a = i.call(this, o ? n : ce(n)) || this;
    var l = a.vars, u = l.duration, h = l.delay, c = l.immediateRender, _ = l.stagger, d = l.overwrite, p = l.keyframes, f = l.defaults, g = l.scrollTrigger, m = l.yoyoEase, y = n.parent || E, b = (Z(r) || on(r) ? Tt(r[0]) : "length" in n) ? [r] : _t(r), x, v, M, T, k, w, P, C;
    if (a._targets = b.length ? Or(b) : Fe("GSAP target " + r + " not found. https://greensock.com", !lt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || _ || Se(u) || Se(h)) {
      if (n = a.vars, x = a.timeline = new J({
        data: "nested",
        defaults: f || {},
        targets: y && y.data === "nested" ? y.vars.targets : b
      }), x.kill(), x.parent = x._dp = wt(a), x._start = 0, _ || Se(u) || Se(h)) {
        if (T = b.length, P = _ && Tn(_), bt(_))
          for (k in _)
            ~Bn.indexOf(k) && (C || (C = {}), C[k] = _[k]);
        for (v = 0; v < T; v++)
          M = ze(n, Un), M.stagger = 0, m && (M.yoyoEase = m), C && Wt(M, C), w = b[v], M.duration = +de(u, wt(a), v, w, b), M.delay = (+de(h, wt(a), v, w, b) || 0) - a._delay, !_ && T === 1 && M.delay && (a._delay = h = M.delay, a._start += h, M.delay = 0), x.to(w, M, P ? P(v, w, b) : 0), x._ease = O.none;
        x.duration() ? u = h = 0 : a.timeline = 0;
      } else if (p) {
        ce(pt(x.vars.defaults, {
          ease: "none"
        })), x._ease = $t(p.ease || n.ease || "none");
        var R = 0, U, V, F;
        if (Z(p))
          p.forEach(function(X) {
            return x.to(b, X, ">");
          }), x.duration();
        else {
          M = {};
          for (k in p)
            k === "ease" || k === "easeEach" || Zi(k, p[k], M, p.easeEach);
          for (k in M)
            for (U = M[k].sort(function(X, q) {
              return X.t - q.t;
            }), R = 0, v = 0; v < U.length; v++)
              V = U[v], F = {
                ease: V.e,
                duration: (V.t - (v ? U[v - 1].t : 0)) / 100 * u
              }, F[k] = V.v, x.to(b, F, R), R += F.duration;
          x.duration() < u && x.to({}, {
            duration: u - x.duration()
          });
        }
      }
      u || a.duration(u = x.duration());
    } else
      a.timeline = 0;
    return d === !0 && !br && (St = wt(a), E.killTweensOf(b), St = 0), mt(y, wt(a), s), n.reversed && a.reverse(), n.paused && a.paused(!0), (c || !u && !p && a._start === K(y._time) && tt(c) && Pi(wt(a)) && y.data !== "nested") && (a._tTime = -D, a.render(Math.max(0, -h) || 0)), g && bn(wt(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(n, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, h = n < 0, c = n > l - D && !h ? l : n < D ? 0 : n, _, d, p, f, g, m, y, b, x;
    if (!u)
      Ai(this, n, s, o);
    else if (c !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (_ = c, b = this.timeline, this._repeat) {
        if (f = u + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(f * 100 + n, s, o);
        if (_ = K(c % f), c === l ? (p = this._repeat, _ = u) : (p = ~~(c / f), p && p === c / f && (_ = u, p--), _ > u && (_ = u)), m = this._yoyo && p & 1, m && (x = this._yEase, _ = u - _), g = ie(this._tTime, f), _ === a && !o && this._initted)
          return this._tTime = c, this;
        p !== g && (b && this._yEase && Rn(b, m), this.vars.repeatRefresh && !m && !this._lock && (this._lock = o = 1, this.render(K(f * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (xn(this, h ? n : _, o, s, c))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (u !== this._dur)
          return this.render(n, s, o);
      }
      if (this._tTime = c, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (x || this._ease)(_ / u), this._from && (this.ratio = y = 1 - y), _ && !a && !s && !p && (dt(this, "onStart"), this._tTime !== c))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      b && b.render(n < 0 ? n : !_ && m ? -D : b._dur * b._ease(_ / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (h && or(this, n, s, o), dt(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !s && this.parent && dt(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (h && !this._onUpdate && or(this, n, !0, !0), (n || !u) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Ft(this, 1), !s && !(h && !a) && (c || a || m) && (dt(this, c === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), i.prototype.invalidate.call(this, n);
  }, e.resetTo = function(n, s, o, a) {
    ye || st.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || Cr(this, l), u = this._ease(l / this._dur), ji(this, n, s, o, a, u, l) ? this.resetTo(n, s, o, a) : (Ye(this, 0), this.parent || yn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? he(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, St && St.vars.overwrite !== !0)._first || he(this), this.parent && o !== this.timeline.totalDuration() && se(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? _t(n) : a, u = this._ptLookup, h = this._pt, c, _, d, p, f, g, m;
    if ((!s || s === "all") && Si(a, l))
      return s === "all" && (this._pt = 0), he(this);
    for (c = this._op = this._op || [], s !== "all" && (W(s) && (f = {}, et(s, function(y) {
      return f[y] = 1;
    }), s = f), s = Qi(a, s)), m = a.length; m--; )
      if (~l.indexOf(a[m])) {
        _ = u[m], s === "all" ? (c[m] = s, p = _, d = {}) : (d = c[m] = c[m] || {}, p = s);
        for (f in p)
          g = _ && _[f], g && ((!("kill" in g.d) || g.d.kill(f) === !0) && Ve(this, g, "_pt"), delete _[f]), d !== "all" && (d[f] = 1);
      }
    return this._initted && !this._pt && h && he(this), this;
  }, t.to = function(n, s) {
    return new t(n, s, arguments[2]);
  }, t.from = function(n, s) {
    return _e(1, arguments);
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
    return _e(2, arguments);
  }, t.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(n, s);
  }, t.killTweensOf = function(n, s, o) {
    return E.killTweensOf(n, s, o);
  }, t;
}(ve);
pt(Y.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
et("staggerTo,staggerFrom,staggerFromTo", function(i) {
  Y[i] = function() {
    var t = new J(), e = lr.call(arguments, 0);
    return e.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), t[i].apply(t, e);
  };
});
var Ar = function(t, e, r) {
  return t[e] = r;
}, Vn = function(t, e, r) {
  return t[e](r);
}, Hi = function(t, e, r, n) {
  return t[e](n.fp, r);
}, Ji = function(t, e, r) {
  return t.setAttribute(e, r);
}, Dr = function(t, e) {
  return N(t[e]) ? Vn : xr(t[e]) && t.setAttribute ? Ji : Ar;
}, qn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, ts = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Yn = function(t, e) {
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
}, Fr = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, es = function(t, e, r, n) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === n && s.modifier(t, e, r), s = o;
}, rs = function(t) {
  for (var e = this._pt, r, n; e; )
    n = e._next, e.p === t && !e.op || e.op === t ? Ve(this, e, "_pt") : e.dep || (r = 1), e = n;
  return !r;
}, ns = function(t, e, r, n) {
  n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
}, Xn = function(t) {
  for (var e = t._pt, r, n, s, o; e; ) {
    for (r = e._next, n = s; n && n.pr > e.pr; )
      n = n._next;
    (e._prev = n ? n._prev : o) ? e._prev._next = e : s = e, (e._next = n) ? n._prev = e : o = e, e = r;
  }
  t._pt = s;
}, rt = /* @__PURE__ */ function() {
  function i(e, r, n, s, o, a, l, u, h) {
    this.t = r, this.s = s, this.c = o, this.p = n, this.r = a || qn, this.d = l || this, this.set = u || Ar, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = i.prototype;
  return t.modifier = function(r, n, s) {
    this.mSet = this.mSet || this.set, this.set = ns, this.m = r, this.mt = s, this.tween = n;
  }, i;
}();
et(Sr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
  return Mr[i] = 1;
});
ut.TweenMax = ut.TweenLite = Y;
ut.TimelineLite = ut.TimelineMax = J;
E = new J({
  sortChildren: !1,
  defaults: ne,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
lt.stringFilter = En;
var Gt = [], Ae = {}, is = [], $r = 0, ss = 0, Qe = function(t) {
  return (Ae[t] || is).map(function(e) {
    return e();
  });
}, cr = function() {
  var t = Date.now(), e = [];
  t - $r > 2 && (Qe("matchMediaInit"), Gt.forEach(function(r) {
    var n = r.queries, s = r.conditions, o, a, l, u;
    for (a in n)
      o = ft.matchMedia(n[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
    u && (r.revert(), l && e.push(r));
  }), Qe("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r);
  }), $r = t, Qe("matchMedia"));
}, $n = /* @__PURE__ */ function() {
  function i(e, r) {
    this.selector = r && ur(r), this.data = [], this._r = [], this.isReverted = !1, this.id = ss++, e && this.add(e);
  }
  var t = i.prototype;
  return t.add = function(r, n, s) {
    N(r) && (s = n, n = r, r = N);
    var o = this, a = function() {
      var u = L, h = o.selector, c;
      return u && u !== o && u.data.push(o), s && (o.selector = ur(s)), L = o, c = n.apply(o, arguments), N(c) && o._r.push(c), L = u, o.selector = h, o.isReverted = !1, c;
    };
    return o.last = a, r === N ? a(o) : r ? o[r] = a : a;
  }, t.ignore = function(r) {
    var n = L;
    L = null, r(this), L = n;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof i ? r.push.apply(r, n.getTweens()) : n instanceof Y && !(n.parent && n.parent.data === "nested") && r.push(n);
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
        return l instanceof J ? l.data !== "nested" && l.kill() : !(l instanceof Y) && l.revert && l.revert(r);
      }), this._r.forEach(function(l) {
        return l(r, s);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(l) {
        return l.kill && l.kill();
      });
    if (this.clear(), n)
      for (var a = Gt.length; a--; )
        Gt[a].id === this.id && Gt.splice(a, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, i;
}(), os = /* @__PURE__ */ function() {
  function i(e) {
    this.contexts = [], this.scope = e;
  }
  var t = i.prototype;
  return t.add = function(r, n, s) {
    bt(r) || (r = {
      matches: r
    });
    var o = new $n(0, s || this.scope), a = o.conditions = {}, l, u, h;
    L && !o.selector && (o.selector = L.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = r;
    for (u in r)
      u === "all" ? h = 1 : (l = ft.matchMedia(r[u]), l && (Gt.indexOf(o) < 0 && Gt.push(o), (a[u] = l.matches) && (h = 1), l.addListener ? l.addListener(cr) : l.addEventListener("change", cr)));
    return h && n(o), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(n) {
      return n.kill(r, !0);
    });
  }, i;
}(), Ie = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(n) {
      return An(n);
    });
  },
  timeline: function(t) {
    return new J(t);
  },
  getTweensOf: function(t, e) {
    return E.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, n) {
    W(t) && (t = _t(t)[0]);
    var s = Yt(t || {}).get, o = r ? mn : gn;
    return r === "native" && (r = ""), t && (e ? o((it[e] && it[e].get || s)(t, e, r, n)) : function(a, l, u) {
      return o((it[a] && it[a].get || s)(t, a, l, u));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = _t(t), t.length > 1) {
      var n = t.map(function(h) {
        return nt.quickSetter(h, e, r);
      }), s = n.length;
      return function(h) {
        for (var c = s; c--; )
          n[c](h);
      };
    }
    t = t[0] || {};
    var o = it[e], a = Yt(t), l = a.harness && (a.harness.aliases || {})[e] || e, u = o ? function(h) {
      var c = new o();
      Jt._pt = 0, c.init(t, r ? h + r : h, Jt, 0, [t]), c.render(1, c), Jt._pt && Fr(1, Jt);
    } : a.set(t, l);
    return o ? u : function(h) {
      return u(t, l, r ? h + r : h, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var n, s = nt.to(t, Wt((n = {}, n[e] = "+=0.1", n.paused = !0, n), r || {})), o = function(l, u, h) {
      return s.resetTo(e, l, u, h);
    };
    return o.tween = s, o;
  },
  isTweening: function(t) {
    return E.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = $t(t.ease, ne.ease)), Ur(ne, t || {});
  },
  config: function(t) {
    return Ur(lt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, n = t.plugins, s = t.defaults, o = t.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !it[a] && !ut[a] && Fe(e + " effect requires " + a + " plugin.");
    }), Ge[e] = function(a, l, u) {
      return r(_t(a), pt(l || {}, s), u);
    }, o && (J.prototype[e] = function(a, l, u) {
      return this.add(Ge[e](a, bt(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    O[t] = $t(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? $t(t, e) : O;
  },
  getById: function(t) {
    return E.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new J(t), n, s;
    for (r.smoothChildTiming = tt(t.smoothChildTiming), E.remove(r), r._dp = 0, r._time = r._tTime = E._time, n = E._first; n; )
      s = n._next, (e || !(!n._dur && n instanceof Y && n.vars.onComplete === n._targets[0])) && mt(r, n, n._start - n._delay), n = s;
    return mt(E, r, 0), r;
  },
  context: function(t, e) {
    return t ? new $n(t, e) : L;
  },
  matchMedia: function(t) {
    return new os(t);
  },
  matchMediaRefresh: function() {
    return Gt.forEach(function(t) {
      var e = t.conditions, r, n;
      for (n in e)
        e[n] && (e[n] = !1, r = 1);
      r && t.revert();
    }) || cr();
  },
  addEventListener: function(t, e) {
    var r = Ae[t] || (Ae[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = Ae[t], n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: Ni,
    wrapYoyo: Bi,
    distribute: Tn,
    random: Sn,
    snap: Mn,
    normalize: Li,
    getUnit: j,
    clamp: Ei,
    splitColor: Dn,
    toArray: _t,
    selector: ur,
    mapRange: Pn,
    pipe: Ri,
    unitize: Ii,
    interpolate: Ui,
    shuffle: kn
  },
  install: fn,
  effects: Ge,
  ticker: st,
  updateRoot: J.updateRoot,
  plugins: it,
  globalTimeline: E,
  core: {
    PropTween: rt,
    globals: cn,
    Tween: Y,
    Timeline: J,
    Animation: ve,
    getCache: Yt,
    _removeLinkedListItem: Ve,
    reverting: function() {
      return Q;
    },
    context: function(t) {
      return t && L && (L.data.push(t), t._ctx = L), L;
    },
    suppressOverwrites: function(t) {
      return br = t;
    }
  }
};
et("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
  return Ie[i] = Y[i];
});
st.add(J.updateRoot);
Jt = Ie.to({}, {
  duration: 0
});
var as = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, ls = function(t, e) {
  var r = t._targets, n, s, o;
  for (n in e)
    for (s = r.length; s--; )
      o = t._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = as(o, n)), o && o.modifier && o.modifier(e[n], t, r[s], n));
}, Ze = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (W(s) && (l = {}, et(s, function(h) {
          return l[h] = 1;
        }), s = l), e) {
          l = {};
          for (u in s)
            l[u] = e(s[u]);
          s = l;
        }
        ls(a, s);
      };
    }
  };
}, nt = Ie.registerPlugin({
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
}, Ze("roundProps", hr), Ze("modifiers"), Ze("snap", Mn)) || Ie;
Y.version = J.version = nt.version = "3.12.1";
hn = 1;
wr() && oe();
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
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Gr, Ot, ee, Er, qt, Wr, zr, us = function() {
  return typeof window < "u";
}, Mt = {}, Vt = 180 / Math.PI, re = Math.PI / 180, jt = Math.atan2, Kr = 1e8, Rr = /([A-Z])/g, hs = /(left|right|width|margin|padding|x)/i, fs = /[\s,\(]\S/, yt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, _r = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, cs = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, _s = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, ds = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Gn = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Wn = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, ps = function(t, e, r) {
  return t.style[e] = r;
}, gs = function(t, e, r) {
  return t.style.setProperty(e, r);
}, ms = function(t, e, r) {
  return t._gsap[e] = r;
}, ys = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, vs = function(t, e, r, n, s) {
  var o = t._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, bs = function(t, e, r, n, s) {
  var o = t._gsap;
  o[e] = r, o.renderTransform(s, o);
}, z = "transform", gt = z + "Origin", xs = function i(t, e) {
  var r = this, n = this.target, s = n.style;
  if (t in Mt && s) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = yt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return r.tfm[o] = kt(n, o);
      }) : this.tfm[t] = n._gsap.x ? n._gsap[t] : kt(n, t);
    else
      return yt.transform.split(",").forEach(function(o) {
        return i.call(r, o, e);
      });
    if (this.props.indexOf(z) >= 0)
      return;
    n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(gt, e, "")), t = z;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, Kn = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, ws = function() {
  var t = this.props, e = this.target, r = e.style, n = e._gsap, s, o;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? e[t[s]] = t[s + 2] : t[s + 2] ? r[t[s]] = t[s + 2] : r.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(Rr, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = zr(), (!s || !s.isStart) && !r[z] && (Kn(r), n.uncache = 1);
  }
}, jn = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: ws,
    save: xs
  };
  return t._gsap || nt.core.getCache(t), e && e.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, Qn, dr = function(t, e) {
  var r = Ot.createElementNS ? Ot.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ot.createElement(t);
  return r.style ? r : Ot.createElement(t);
}, vt = function i(t, e, r) {
  var n = getComputedStyle(t);
  return n[e] || n.getPropertyValue(e.replace(Rr, "-$1").toLowerCase()) || n.getPropertyValue(e) || !r && i(t, ae(e) || e, 1) || "";
}, jr = "O,Moz,ms,Ms,Webkit".split(","), ae = function(t, e, r) {
  var n = e || qt, s = n.style, o = 5;
  if (t in s && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(jr[o] + t in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? jr[o] : "") + t;
}, pr = function() {
  us() && window.document && (Gr = window, Ot = Gr.document, ee = Ot.documentElement, qt = dr("div") || {
    style: {}
  }, dr("div"), z = ae(z), gt = z + "Origin", qt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Qn = !!ae("perspective"), zr = nt.core.reverting, Er = 1);
}, He = function i(t) {
  var e = dr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, n = this.nextSibling, s = this.style.cssText, o;
  if (ee.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = i;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), ee.removeChild(e), this.style.cssText = s, o;
}, Qr = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, Zn = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = He.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === He || (e = He.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +Qr(t, ["x", "cx", "x1"]) || 0,
    y: +Qr(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Hn = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Zn(t));
}, be = function(t, e) {
  if (e) {
    var r = t.style;
    e in Mt && e !== gt && (e = z), r.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(e.replace(Rr, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Pt = function(t, e, r, n, s, o) {
  var a = new rt(t._pt, e, r, 0, 1, o ? Wn : Gn);
  return t._pt = a, a.b = n, a.e = s, t._props.push(r), a;
}, Zr = {
  deg: 1,
  rad: 1,
  turn: 1
}, ks = {
  grid: 1,
  flex: 1
}, Et = function i(t, e, r, n) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = qt.style, l = hs.test(e), u = t.tagName.toLowerCase() === "svg", h = (u ? "client" : "offset") + (l ? "Width" : "Height"), c = 100, _ = n === "px", d = n === "%", p, f, g, m;
  return n === o || !s || Zr[n] || Zr[o] ? s : (o !== "px" && !_ && (s = i(t, e, r, "px")), m = t.getCTM && Hn(t), (d || o === "%") && (Mt[e] || ~e.indexOf("adius")) ? (p = m ? t.getBBox()[l ? "width" : "height"] : t[h], B(d ? s / p * c : s / 100 * p)) : (a[l ? "width" : "height"] = c + (_ ? o : n), f = ~e.indexOf("adius") || n === "em" && t.appendChild && !u ? t : t.parentNode, m && (f = (t.ownerSVGElement || {}).parentNode), (!f || f === Ot || !f.appendChild) && (f = Ot.body), g = f._gsap, g && d && g.width && l && g.time === st.time && !g.uncache ? B(s / g.width * c) : ((d || o === "%") && !ks[vt(f, "display")] && (a.position = vt(t, "position")), f === t && (a.position = "static"), f.appendChild(qt), p = qt[h], f.removeChild(qt), a.position = "absolute", l && d && (g = Yt(f), g.time = st.time, g.width = f[h]), B(_ ? p * s / c : p && s ? c / p * s : 0))));
}, kt = function(t, e, r, n) {
  var s;
  return Er || pr(), e in yt && e !== "transform" && (e = yt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Mt[e] && e !== "transform" ? (s = we(t, n), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : Ne(vt(t, gt)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = Le[e] && Le[e](t, e, r) || vt(t, e) || dn(t, e) || (e === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Et(t, e, s, r) + r : s;
}, Ts = function(t, e, r, n) {
  if (!r || r === "none") {
    var s = ae(e, t, 1), o = s && vt(t, s, 1);
    o && o !== r ? (e = s, r = o) : e === "borderColor" && (r = vt(t, "borderTopColor"));
  }
  var a = new rt(this._pt, t.style, e, 0, 1, Yn), l = 0, u = 0, h, c, _, d, p, f, g, m, y, b, x, v;
  if (a.b = r, a.e = n, r += "", n += "", n === "auto" && (t.style[e] = n, n = vt(t, e) || n, t.style[e] = r), h = [r, n], En(h), r = h[0], n = h[1], _ = r.match(Ht) || [], v = n.match(Ht) || [], v.length) {
    for (; c = Ht.exec(n); )
      g = c[0], y = n.substring(l, c.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), g !== (f = _[u++] || "") && (d = parseFloat(f) || 0, x = f.substr((d + "").length), g.charAt(1) === "=" && (g = te(d, g) + x), m = parseFloat(g), b = g.substr((m + "").length), l = Ht.lastIndex - b.length, b || (b = b || lt.units[e] || x, l === n.length && (n += b, a.e += b)), x !== b && (d = Et(t, e, f, b) || 0), a._pt = {
        _next: a._pt,
        p: y || u === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = e === "display" && n === "none" ? Wn : Gn;
  return ln.test(n) && (a.e = 0), this._pt = a, a;
}, Hr = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ms = function(t) {
  var e = t.split(" "), r = e[0], n = e[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (t = r, r = n, n = t), e[0] = Hr[r] || r, e[1] = Hr[n] || n, e.join(" ");
}, Ss = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, n = r.style, s = e.u, o = r._gsap, a, l, u;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], Mt[a] && (l = 1, a = a === "transformOrigin" ? gt : z), be(r, a);
    l && (be(r, z), o && (o.svg && r.removeAttribute("transform"), we(r, 1), o.uncache = 1, Kn(n)));
  }
}, Le = {
  clearProps: function(t, e, r, n, s) {
    if (s.data !== "isFromStart") {
      var o = t._pt = new rt(t._pt, e, r, 0, 0, Ss);
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
}, xe = [1, 0, 0, 1, 0, 0], Jn = {}, ti = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Jr = function(t) {
  var e = vt(t, z);
  return ti(e) ? xe : e.substr(7).match(an).map(B);
}, Ir = function(t, e) {
  var r = t._gsap || Yt(t), n = t.style, s = Jr(t), o, a, l, u;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? xe : s) : (s === xe && !t.offsetParent && t !== ee && !r.svg && (l = n.display, n.display = "block", o = t.parentNode, (!o || !t.offsetParent) && (u = 1, a = t.nextElementSibling, ee.appendChild(t)), s = Jr(t), l ? n.display = l : be(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : ee.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, gr = function(t, e, r, n, s, o) {
  var a = t._gsap, l = s || Ir(t, !0), u = a.xOrigin || 0, h = a.yOrigin || 0, c = a.xOffset || 0, _ = a.yOffset || 0, d = l[0], p = l[1], f = l[2], g = l[3], m = l[4], y = l[5], b = e.split(" "), x = parseFloat(b[0]) || 0, v = parseFloat(b[1]) || 0, M, T, k, w;
  r ? l !== xe && (T = d * g - p * f) && (k = x * (g / T) + v * (-f / T) + (f * y - g * m) / T, w = x * (-p / T) + v * (d / T) - (d * y - p * m) / T, x = k, v = w) : (M = Zn(t), x = M.x + (~b[0].indexOf("%") ? x / 100 * M.width : x), v = M.y + (~(b[1] || b[0]).indexOf("%") ? v / 100 * M.height : v)), n || n !== !1 && a.smooth ? (m = x - u, y = v - h, a.xOffset = c + (m * d + y * f) - m, a.yOffset = _ + (m * p + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = x, a.yOrigin = v, a.smooth = !!n, a.origin = e, a.originIsAbsolute = !!r, t.style[gt] = "0px 0px", o && (Pt(o, a, "xOrigin", u, x), Pt(o, a, "yOrigin", h, v), Pt(o, a, "xOffset", c, a.xOffset), Pt(o, a, "yOffset", _, a.yOffset)), t.setAttribute("data-svg-origin", x + " " + v);
}, we = function(t, e) {
  var r = t._gsap || new Ln(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var n = t.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = vt(t, gt) || "0", h, c, _, d, p, f, g, m, y, b, x, v, M, T, k, w, P, C, R, U, V, F, X, q, H, Rt, It, le, Lt, Lr, xt, Nt;
  return h = c = _ = f = g = m = y = b = x = 0, d = p = 1, r.svg = !!(t.getCTM && Hn(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[z] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[z] !== "none" ? l[z] : "")), n.scale = n.rotate = n.translate = "none"), T = Ir(t, r.svg), r.svg && (r.uncache ? (H = t.getBBox(), u = r.xOrigin - H.x + "px " + (r.yOrigin - H.y) + "px", q = "") : q = !e && t.getAttribute("data-svg-origin"), gr(t, q || u, !!q || r.originIsAbsolute, r.smooth !== !1, T)), v = r.xOrigin || 0, M = r.yOrigin || 0, T !== xe && (C = T[0], R = T[1], U = T[2], V = T[3], h = F = T[4], c = X = T[5], T.length === 6 ? (d = Math.sqrt(C * C + R * R), p = Math.sqrt(V * V + U * U), f = C || R ? jt(R, C) * Vt : 0, y = U || V ? jt(U, V) * Vt + f : 0, y && (p *= Math.abs(Math.cos(y * re))), r.svg && (h -= v - (v * C + M * U), c -= M - (v * R + M * V))) : (Nt = T[6], Lr = T[7], It = T[8], le = T[9], Lt = T[10], xt = T[11], h = T[12], c = T[13], _ = T[14], k = jt(Nt, Lt), g = k * Vt, k && (w = Math.cos(-k), P = Math.sin(-k), q = F * w + It * P, H = X * w + le * P, Rt = Nt * w + Lt * P, It = F * -P + It * w, le = X * -P + le * w, Lt = Nt * -P + Lt * w, xt = Lr * -P + xt * w, F = q, X = H, Nt = Rt), k = jt(-U, Lt), m = k * Vt, k && (w = Math.cos(-k), P = Math.sin(-k), q = C * w - It * P, H = R * w - le * P, Rt = U * w - Lt * P, xt = V * P + xt * w, C = q, R = H, U = Rt), k = jt(R, C), f = k * Vt, k && (w = Math.cos(k), P = Math.sin(k), q = C * w + R * P, H = F * w + X * P, R = R * w - C * P, X = X * w - F * P, C = q, F = H), g && Math.abs(g) + Math.abs(f) > 359.9 && (g = f = 0, m = 180 - m), d = B(Math.sqrt(C * C + R * R + U * U)), p = B(Math.sqrt(X * X + Nt * Nt)), k = jt(F, X), y = Math.abs(k) > 2e-4 ? k * Vt : 0, x = xt ? 1 / (xt < 0 ? -xt : xt) : 0), r.svg && (q = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ti(vt(t, z)), q && t.setAttribute("transform", q))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (d *= -1, y += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = h - ((r.xPercent = h && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = c - ((r.yPercent = c && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = _ + o, r.scaleX = B(d), r.scaleY = B(p), r.rotation = B(f) + a, r.rotationX = B(g) + a, r.rotationY = B(m) + a, r.skewX = y + a, r.skewY = b + a, r.transformPerspective = x + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (n[gt] = Ne(u)), r.xOffset = r.yOffset = 0, r.force3D = lt.force3D, r.renderTransform = r.svg ? Ps : Qn ? ei : Os, r.uncache = 0, r;
}, Ne = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Je = function(t, e, r) {
  var n = j(e);
  return B(parseFloat(e) + parseFloat(Et(t, "x", r + "px", n))) + n;
}, Os = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ei(t, e);
}, Bt = "0deg", ue = "0px", Ut = ") ", ei = function(t, e) {
  var r = e || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, h = r.rotationY, c = r.rotationX, _ = r.skewX, d = r.skewY, p = r.scaleX, f = r.scaleY, g = r.transformPerspective, m = r.force3D, y = r.target, b = r.zOrigin, x = "", v = m === "auto" && t && t !== 1 || m === !0;
  if (b && (c !== Bt || h !== Bt)) {
    var M = parseFloat(h) * re, T = Math.sin(M), k = Math.cos(M), w;
    M = parseFloat(c) * re, w = Math.cos(M), o = Je(y, o, T * w * -b), a = Je(y, a, -Math.sin(M) * -b), l = Je(y, l, k * w * -b + b);
  }
  g !== ue && (x += "perspective(" + g + Ut), (n || s) && (x += "translate(" + n + "%, " + s + "%) "), (v || o !== ue || a !== ue || l !== ue) && (x += l !== ue || v ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Ut), u !== Bt && (x += "rotate(" + u + Ut), h !== Bt && (x += "rotateY(" + h + Ut), c !== Bt && (x += "rotateX(" + c + Ut), (_ !== Bt || d !== Bt) && (x += "skew(" + _ + ", " + d + Ut), (p !== 1 || f !== 1) && (x += "scale(" + p + ", " + f + Ut), y.style[z] = x || "translate(0, 0)";
}, Ps = function(t, e) {
  var r = e || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, h = r.skewY, c = r.scaleX, _ = r.scaleY, d = r.target, p = r.xOrigin, f = r.yOrigin, g = r.xOffset, m = r.yOffset, y = r.forceCSS, b = parseFloat(o), x = parseFloat(a), v, M, T, k, w;
  l = parseFloat(l), u = parseFloat(u), h = parseFloat(h), h && (h = parseFloat(h), u += h, l += h), l || u ? (l *= re, u *= re, v = Math.cos(l) * c, M = Math.sin(l) * c, T = Math.sin(l - u) * -_, k = Math.cos(l - u) * _, u && (h *= re, w = Math.tan(u - h), w = Math.sqrt(1 + w * w), T *= w, k *= w, h && (w = Math.tan(h), w = Math.sqrt(1 + w * w), v *= w, M *= w)), v = B(v), M = B(M), T = B(T), k = B(k)) : (v = c, k = _, M = T = 0), (b && !~(o + "").indexOf("px") || x && !~(a + "").indexOf("px")) && (b = Et(d, "x", o, "px"), x = Et(d, "y", a, "px")), (p || f || g || m) && (b = B(b + p - (p * v + f * T) + g), x = B(x + f - (p * M + f * k) + m)), (n || s) && (w = d.getBBox(), b = B(b + n / 100 * w.width), x = B(x + s / 100 * w.height)), w = "matrix(" + v + "," + M + "," + T + "," + k + "," + b + "," + x + ")", d.setAttribute("transform", w), y && (d.style[z] = w);
}, Cs = function(t, e, r, n, s) {
  var o = 360, a = W(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Vt : 1), u = l - n, h = n + u + "deg", c, _;
  return a && (c = s.split("_")[1], c === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), c === "cw" && u < 0 ? u = (u + o * Kr) % o - ~~(u / o) * o : c === "ccw" && u > 0 && (u = (u - o * Kr) % o - ~~(u / o) * o)), t._pt = _ = new rt(t._pt, e, r, n, u, cs), _.e = h, _.u = "deg", t._props.push(r), _;
}, tn = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, As = function(t, e, r) {
  var n = tn({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, h, c, _, d, p;
  n.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[z] = e, a = we(r, 1), be(r, z), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[z], o[z] = e, a = we(r, 1), o[z] = u);
  for (l in Mt)
    u = n[l], h = a[l], u !== h && s.indexOf(l) < 0 && (d = j(u), p = j(h), c = d !== p ? Et(r, l, u, p) : parseFloat(u), _ = parseFloat(h), t._pt = new rt(t._pt, a, l, c, _ - c, _r), t._pt.u = p || 0, t._props.push(l));
  tn(a, n);
};
et("padding,margin,Width,Radius", function(i, t) {
  var e = "Top", r = "Right", n = "Bottom", s = "Left", o = (t < 3 ? [e, r, n, s] : [e + s, e + r, n + r, n + s]).map(function(a) {
    return t < 2 ? i + a : "border" + a + i;
  });
  Le[t > 1 ? "border" + i : i] = function(a, l, u, h, c) {
    var _, d;
    if (arguments.length < 4)
      return _ = o.map(function(p) {
        return kt(a, p, u);
      }), d = _.join(" "), d.split(_[0]).length === 5 ? _[0] : d;
    _ = (h + "").split(" "), d = {}, o.forEach(function(p, f) {
      return d[p] = _[f] = _[f] || _[(f - 1) / 2 | 0];
    }), a.init(l, d, c);
  };
});
var ri = {
  name: "css",
  register: pr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, n, s) {
    var o = this._props, a = t.style, l = r.vars.startAt, u, h, c, _, d, p, f, g, m, y, b, x, v, M, T, k;
    Er || pr(), this.styles = this.styles || jn(t), k = this.styles.props, this.tween = r;
    for (f in e)
      if (f !== "autoRound" && (h = e[f], !(it[f] && Nn(f, e, r, n, t, s)))) {
        if (d = typeof h, p = Le[f], d === "function" && (h = h.call(r, n, t, s), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = me(h)), p)
          p(this, t, f, h, r) && (T = 1);
        else if (f.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(f) + "").trim(), h += "", At.lastIndex = 0, At.test(u) || (g = j(u), m = j(h)), m ? g !== m && (u = Et(t, f, u, m) + m) : g && (h += g), this.add(a, "setProperty", u, h, n, s, 0, 0, f), o.push(f), k.push(f, 0, a[f]);
        else if (d !== "undefined") {
          if (l && f in l ? (u = typeof l[f] == "function" ? l[f].call(r, n, t, s) : l[f], W(u) && ~u.indexOf("random(") && (u = me(u)), j(u + "") || (u += lt.units[f] || j(kt(t, f)) || ""), (u + "").charAt(1) === "=" && (u = kt(t, f))) : u = kt(t, f), _ = parseFloat(u), y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), c = parseFloat(h), f in yt && (f === "autoAlpha" && (_ === 1 && kt(t, "visibility") === "hidden" && c && (_ = 0), k.push("visibility", 0, a.visibility), Pt(this, a, "visibility", _ ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), f !== "scale" && f !== "transform" && (f = yt[f], ~f.indexOf(",") && (f = f.split(",")[0]))), b = f in Mt, b) {
            if (this.styles.save(f), x || (v = t._gsap, v.renderTransform && !e.parseTransform || we(t, e.parseTransform), M = e.smoothOrigin !== !1 && v.smooth, x = this._pt = new rt(this._pt, a, z, 0, 1, v.renderTransform, v, 0, -1), x.dep = 1), f === "scale")
              this._pt = new rt(this._pt, v, "scaleY", v.scaleY, (y ? te(v.scaleY, y + c) : c) - v.scaleY || 0, _r), this._pt.u = 0, o.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              k.push(gt, 0, a[gt]), h = Ms(h), v.svg ? gr(t, h, 0, M, 0, this) : (m = parseFloat(h.split(" ")[2]) || 0, m !== v.zOrigin && Pt(this, v, "zOrigin", v.zOrigin, m), Pt(this, a, f, Ne(u), Ne(h)));
              continue;
            } else if (f === "svgOrigin") {
              gr(t, h, 1, M, 0, this);
              continue;
            } else if (f in Jn) {
              Cs(this, v, f, _, y ? te(_, y + h) : h);
              continue;
            } else if (f === "smoothOrigin") {
              Pt(this, v, "smooth", v.smooth, h);
              continue;
            } else if (f === "force3D") {
              v[f] = h;
              continue;
            } else if (f === "transform") {
              As(this, h, t);
              continue;
            }
          } else
            f in a || (f = ae(f) || f);
          if (b || (c || c === 0) && (_ || _ === 0) && !fs.test(h) && f in a)
            g = (u + "").substr((_ + "").length), c || (c = 0), m = j(h) || (f in lt.units ? lt.units[f] : g), g !== m && (_ = Et(t, f, u, m)), this._pt = new rt(this._pt, b ? v : a, f, _, (y ? te(_, y + c) : c) - _, !b && (m === "px" || f === "zIndex") && e.autoRound !== !1 ? ds : _r), this._pt.u = m || 0, g !== m && m !== "%" && (this._pt.b = u, this._pt.r = _s);
          else if (f in a)
            Ts.call(this, t, f, u, y ? y + h : h);
          else if (f in t)
            this.add(t, f, u || t[f], y ? y + h : h, n, s);
          else if (f !== "parseTransform") {
            Tr(f, h);
            continue;
          }
          b || (f in a ? k.push(f, 0, a[f]) : k.push(f, 1, u || t[f])), o.push(f);
        }
      }
    T && Xn(this);
  },
  render: function(t, e) {
    if (e.tween._time || !zr())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: kt,
  aliases: yt,
  getSetter: function(t, e, r) {
    var n = yt[e];
    return n && n.indexOf(",") < 0 && (e = n), e in Mt && e !== gt && (t._gsap.x || kt(t, "x")) ? r && Wr === r ? e === "scale" ? ys : ms : (Wr = r || {}) && (e === "scale" ? vs : bs) : t.style && !xr(t.style[e]) ? ps : ~e.indexOf("-") ? gs : Dr(t, e);
  },
  core: {
    _removeProperty: be,
    _getMatrix: Ir
  }
};
nt.utils.checkPrefix = ae;
nt.core.getStyleSaver = jn;
(function(i, t, e, r) {
  var n = et(i + "," + t + "," + e, function(s) {
    Mt[s] = 1;
  });
  et(t, function(s) {
    lt.units[s] = "deg", Jn[s] = 1;
  }), yt[n[13]] = i + "," + t, et(r, function(s) {
    var o = s.split(":");
    yt[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
  lt.units[i] = "px";
});
nt.registerPlugin(ri);
var ni = nt.registerPlugin(ri) || nt;
ni.core.Tween;
function Ds(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ii = { exports: {} }, si = {
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
}, oi = { exports: {} }, Fs = function(t) {
  return !t || typeof t == "string" ? !1 : t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && t.constructor.name !== "String");
}, Es = Fs, zs = Array.prototype.concat, Rs = Array.prototype.slice, en = oi.exports = function(t) {
  for (var e = [], r = 0, n = t.length; r < n; r++) {
    var s = t[r];
    Es(s) ? e = zs.call(e, Rs.call(s)) : e.push(s);
  }
  return e;
};
en.wrap = function(i) {
  return function() {
    return i(en(arguments));
  };
};
var Is = oi.exports, pe = si, Me = Is, ai = Object.hasOwnProperty, li = /* @__PURE__ */ Object.create(null);
for (var tr in pe)
  ai.call(pe, tr) && (li[pe[tr]] = tr);
var at = ii.exports = {
  to: {},
  get: {}
};
at.get = function(i) {
  var t = i.substring(0, 3).toLowerCase(), e, r;
  switch (t) {
    case "hsl":
      e = at.get.hsl(i), r = "hsl";
      break;
    case "hwb":
      e = at.get.hwb(i), r = "hwb";
      break;
    default:
      e = at.get.rgb(i), r = "rgb";
      break;
  }
  return e ? { model: r, value: e } : null;
};
at.get.rgb = function(i) {
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
    return (a = i.match(s)) ? a[1] === "transparent" ? [0, 0, 0, 0] : ai.call(pe, a[1]) ? (o = pe[a[1]], o[3] = 1, o) : null : null;
  for (l = 0; l < 3; l++)
    o[l] = Dt(o[l], 0, 255);
  return o[3] = Dt(o[3], 0, 1), o;
};
at.get.hsl = function(i) {
  if (!i)
    return null;
  var t = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = i.match(t);
  if (e) {
    var r = parseFloat(e[4]), n = (parseFloat(e[1]) % 360 + 360) % 360, s = Dt(parseFloat(e[2]), 0, 100), o = Dt(parseFloat(e[3]), 0, 100), a = Dt(isNaN(r) ? 1 : r, 0, 1);
    return [n, s, o, a];
  }
  return null;
};
at.get.hwb = function(i) {
  if (!i)
    return null;
  var t = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = i.match(t);
  if (e) {
    var r = parseFloat(e[4]), n = (parseFloat(e[1]) % 360 + 360) % 360, s = Dt(parseFloat(e[2]), 0, 100), o = Dt(parseFloat(e[3]), 0, 100), a = Dt(isNaN(r) ? 1 : r, 0, 1);
    return [n, s, o, a];
  }
  return null;
};
at.to.hex = function() {
  var i = Me(arguments);
  return "#" + Oe(i[0]) + Oe(i[1]) + Oe(i[2]) + (i[3] < 1 ? Oe(Math.round(i[3] * 255)) : "");
};
at.to.rgb = function() {
  var i = Me(arguments);
  return i.length < 4 || i[3] === 1 ? "rgb(" + Math.round(i[0]) + ", " + Math.round(i[1]) + ", " + Math.round(i[2]) + ")" : "rgba(" + Math.round(i[0]) + ", " + Math.round(i[1]) + ", " + Math.round(i[2]) + ", " + i[3] + ")";
};
at.to.rgb.percent = function() {
  var i = Me(arguments), t = Math.round(i[0] / 255 * 100), e = Math.round(i[1] / 255 * 100), r = Math.round(i[2] / 255 * 100);
  return i.length < 4 || i[3] === 1 ? "rgb(" + t + "%, " + e + "%, " + r + "%)" : "rgba(" + t + "%, " + e + "%, " + r + "%, " + i[3] + ")";
};
at.to.hsl = function() {
  var i = Me(arguments);
  return i.length < 4 || i[3] === 1 ? "hsl(" + i[0] + ", " + i[1] + "%, " + i[2] + "%)" : "hsla(" + i[0] + ", " + i[1] + "%, " + i[2] + "%, " + i[3] + ")";
};
at.to.hwb = function() {
  var i = Me(arguments), t = "";
  return i.length >= 4 && i[3] !== 1 && (t = ", " + i[3]), "hwb(" + i[0] + ", " + i[1] + "%, " + i[2] + "%" + t + ")";
};
at.to.keyword = function(i) {
  return li[i.slice(0, 3)];
};
function Dt(i, t, e) {
  return Math.min(Math.max(t, i), e);
}
function Oe(i) {
  var t = Math.round(i).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
var Ls = ii.exports;
const ke = si, ui = {};
for (const i of Object.keys(ke))
  ui[ke[i]] = i;
const S = {
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
var hi = S;
for (const i of Object.keys(S)) {
  if (!("channels" in S[i]))
    throw new Error("missing channels property: " + i);
  if (!("labels" in S[i]))
    throw new Error("missing channel labels property: " + i);
  if (S[i].labels.length !== S[i].channels)
    throw new Error("channel and label counts mismatch: " + i);
  const { channels: t, labels: e } = S[i];
  delete S[i].channels, delete S[i].labels, Object.defineProperty(S[i], "channels", { value: t }), Object.defineProperty(S[i], "labels", { value: e });
}
S.rgb.hsl = function(i) {
  const t = i[0] / 255, e = i[1] / 255, r = i[2] / 255, n = Math.min(t, e, r), s = Math.max(t, e, r), o = s - n;
  let a, l;
  s === n ? a = 0 : t === s ? a = (e - r) / o : e === s ? a = 2 + (r - t) / o : r === s && (a = 4 + (t - e) / o), a = Math.min(a * 60, 360), a < 0 && (a += 360);
  const u = (n + s) / 2;
  return s === n ? l = 0 : u <= 0.5 ? l = o / (s + n) : l = o / (2 - s - n), [a, l * 100, u * 100];
};
S.rgb.hsv = function(i) {
  let t, e, r, n, s;
  const o = i[0] / 255, a = i[1] / 255, l = i[2] / 255, u = Math.max(o, a, l), h = u - Math.min(o, a, l), c = function(_) {
    return (u - _) / 6 / h + 1 / 2;
  };
  return h === 0 ? (n = 0, s = 0) : (s = h / u, t = c(o), e = c(a), r = c(l), o === u ? n = r - e : a === u ? n = 1 / 3 + t - r : l === u && (n = 2 / 3 + e - t), n < 0 ? n += 1 : n > 1 && (n -= 1)), [
    n * 360,
    s * 100,
    u * 100
  ];
};
S.rgb.hwb = function(i) {
  const t = i[0], e = i[1];
  let r = i[2];
  const n = S.rgb.hsl(i)[0], s = 1 / 255 * Math.min(t, Math.min(e, r));
  return r = 1 - 1 / 255 * Math.max(t, Math.max(e, r)), [n, s * 100, r * 100];
};
S.rgb.cmyk = function(i) {
  const t = i[0] / 255, e = i[1] / 255, r = i[2] / 255, n = Math.min(1 - t, 1 - e, 1 - r), s = (1 - t - n) / (1 - n) || 0, o = (1 - e - n) / (1 - n) || 0, a = (1 - r - n) / (1 - n) || 0;
  return [s * 100, o * 100, a * 100, n * 100];
};
function Ns(i, t) {
  return (i[0] - t[0]) ** 2 + (i[1] - t[1]) ** 2 + (i[2] - t[2]) ** 2;
}
S.rgb.keyword = function(i) {
  const t = ui[i];
  if (t)
    return t;
  let e = 1 / 0, r;
  for (const n of Object.keys(ke)) {
    const s = ke[n], o = Ns(i, s);
    o < e && (e = o, r = n);
  }
  return r;
};
S.keyword.rgb = function(i) {
  return ke[i];
};
S.rgb.xyz = function(i) {
  let t = i[0] / 255, e = i[1] / 255, r = i[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  const n = t * 0.4124 + e * 0.3576 + r * 0.1805, s = t * 0.2126 + e * 0.7152 + r * 0.0722, o = t * 0.0193 + e * 0.1192 + r * 0.9505;
  return [n * 100, s * 100, o * 100];
};
S.rgb.lab = function(i) {
  const t = S.rgb.xyz(i);
  let e = t[0], r = t[1], n = t[2];
  e /= 95.047, r /= 100, n /= 108.883, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
  const s = 116 * r - 16, o = 500 * (e - r), a = 200 * (r - n);
  return [s, o, a];
};
S.hsl.rgb = function(i) {
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
S.hsl.hsv = function(i) {
  const t = i[0];
  let e = i[1] / 100, r = i[2] / 100, n = e;
  const s = Math.max(r, 0.01);
  r *= 2, e *= r <= 1 ? r : 2 - r, n *= s <= 1 ? s : 2 - s;
  const o = (r + e) / 2, a = r === 0 ? 2 * n / (s + n) : 2 * e / (r + e);
  return [t, a * 100, o * 100];
};
S.hsv.rgb = function(i) {
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
S.hsv.hsl = function(i) {
  const t = i[0], e = i[1] / 100, r = i[2] / 100, n = Math.max(r, 0.01);
  let s, o;
  o = (2 - e) * r;
  const a = (2 - e) * n;
  return s = e * n, s /= a <= 1 ? a : 2 - a, s = s || 0, o /= 2, [t, s * 100, o * 100];
};
S.hwb.rgb = function(i) {
  const t = i[0] / 360;
  let e = i[1] / 100, r = i[2] / 100;
  const n = e + r;
  let s;
  n > 1 && (e /= n, r /= n);
  const o = Math.floor(6 * t), a = 1 - r;
  s = 6 * t - o, o & 1 && (s = 1 - s);
  const l = e + s * (a - e);
  let u, h, c;
  switch (o) {
    default:
    case 6:
    case 0:
      u = a, h = l, c = e;
      break;
    case 1:
      u = l, h = a, c = e;
      break;
    case 2:
      u = e, h = a, c = l;
      break;
    case 3:
      u = e, h = l, c = a;
      break;
    case 4:
      u = l, h = e, c = a;
      break;
    case 5:
      u = a, h = e, c = l;
      break;
  }
  return [u * 255, h * 255, c * 255];
};
S.cmyk.rgb = function(i) {
  const t = i[0] / 100, e = i[1] / 100, r = i[2] / 100, n = i[3] / 100, s = 1 - Math.min(1, t * (1 - n) + n), o = 1 - Math.min(1, e * (1 - n) + n), a = 1 - Math.min(1, r * (1 - n) + n);
  return [s * 255, o * 255, a * 255];
};
S.xyz.rgb = function(i) {
  const t = i[0] / 100, e = i[1] / 100, r = i[2] / 100;
  let n, s, o;
  return n = t * 3.2406 + e * -1.5372 + r * -0.4986, s = t * -0.9689 + e * 1.8758 + r * 0.0415, o = t * 0.0557 + e * -0.204 + r * 1.057, n = n > 31308e-7 ? 1.055 * n ** (1 / 2.4) - 0.055 : n * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, n = Math.min(Math.max(0, n), 1), s = Math.min(Math.max(0, s), 1), o = Math.min(Math.max(0, o), 1), [n * 255, s * 255, o * 255];
};
S.xyz.lab = function(i) {
  let t = i[0], e = i[1], r = i[2];
  t /= 95.047, e /= 100, r /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
  const n = 116 * e - 16, s = 500 * (t - e), o = 200 * (e - r);
  return [n, s, o];
};
S.lab.xyz = function(i) {
  const t = i[0], e = i[1], r = i[2];
  let n, s, o;
  s = (t + 16) / 116, n = e / 500 + s, o = s - r / 200;
  const a = s ** 3, l = n ** 3, u = o ** 3;
  return s = a > 8856e-6 ? a : (s - 16 / 116) / 7.787, n = l > 8856e-6 ? l : (n - 16 / 116) / 7.787, o = u > 8856e-6 ? u : (o - 16 / 116) / 7.787, n *= 95.047, s *= 100, o *= 108.883, [n, s, o];
};
S.lab.lch = function(i) {
  const t = i[0], e = i[1], r = i[2];
  let n;
  n = Math.atan2(r, e) * 360 / 2 / Math.PI, n < 0 && (n += 360);
  const o = Math.sqrt(e * e + r * r);
  return [t, o, n];
};
S.lch.lab = function(i) {
  const t = i[0], e = i[1], n = i[2] / 360 * 2 * Math.PI, s = e * Math.cos(n), o = e * Math.sin(n);
  return [t, s, o];
};
S.rgb.ansi16 = function(i, t = null) {
  const [e, r, n] = i;
  let s = t === null ? S.rgb.hsv(i)[2] : t;
  if (s = Math.round(s / 50), s === 0)
    return 30;
  let o = 30 + (Math.round(n / 255) << 2 | Math.round(r / 255) << 1 | Math.round(e / 255));
  return s === 2 && (o += 60), o;
};
S.hsv.ansi16 = function(i) {
  return S.rgb.ansi16(S.hsv.rgb(i), i[2]);
};
S.rgb.ansi256 = function(i) {
  const t = i[0], e = i[1], r = i[2];
  return t === e && e === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(r / 255 * 5);
};
S.ansi16.rgb = function(i) {
  let t = i % 10;
  if (t === 0 || t === 7)
    return i > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
  const e = (~~(i > 50) + 1) * 0.5, r = (t & 1) * e * 255, n = (t >> 1 & 1) * e * 255, s = (t >> 2 & 1) * e * 255;
  return [r, n, s];
};
S.ansi256.rgb = function(i) {
  if (i >= 232) {
    const s = (i - 232) * 10 + 8;
    return [s, s, s];
  }
  i -= 16;
  let t;
  const e = Math.floor(i / 36) / 5 * 255, r = Math.floor((t = i % 36) / 6) / 5 * 255, n = t % 6 / 5 * 255;
  return [e, r, n];
};
S.rgb.hex = function(i) {
  const e = (((Math.round(i[0]) & 255) << 16) + ((Math.round(i[1]) & 255) << 8) + (Math.round(i[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(e.length) + e;
};
S.hex.rgb = function(i) {
  const t = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t)
    return [0, 0, 0];
  let e = t[0];
  t[0].length === 3 && (e = e.split("").map((a) => a + a).join(""));
  const r = parseInt(e, 16), n = r >> 16 & 255, s = r >> 8 & 255, o = r & 255;
  return [n, s, o];
};
S.rgb.hcg = function(i) {
  const t = i[0] / 255, e = i[1] / 255, r = i[2] / 255, n = Math.max(Math.max(t, e), r), s = Math.min(Math.min(t, e), r), o = n - s;
  let a, l;
  return o < 1 ? a = s / (1 - o) : a = 0, o <= 0 ? l = 0 : n === t ? l = (e - r) / o % 6 : n === e ? l = 2 + (r - t) / o : l = 4 + (t - e) / o, l /= 6, l %= 1, [l * 360, o * 100, a * 100];
};
S.hsl.hcg = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = e < 0.5 ? 2 * t * e : 2 * t * (1 - e);
  let n = 0;
  return r < 1 && (n = (e - 0.5 * r) / (1 - r)), [i[0], r * 100, n * 100];
};
S.hsv.hcg = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = t * e;
  let n = 0;
  return r < 1 && (n = (e - r) / (1 - r)), [i[0], r * 100, n * 100];
};
S.hcg.rgb = function(i) {
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
S.hcg.hsv = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = t + e * (1 - t);
  let n = 0;
  return r > 0 && (n = t / r), [i[0], n * 100, r * 100];
};
S.hcg.hsl = function(i) {
  const t = i[1] / 100, r = i[2] / 100 * (1 - t) + 0.5 * t;
  let n = 0;
  return r > 0 && r < 0.5 ? n = t / (2 * r) : r >= 0.5 && r < 1 && (n = t / (2 * (1 - r))), [i[0], n * 100, r * 100];
};
S.hcg.hwb = function(i) {
  const t = i[1] / 100, e = i[2] / 100, r = t + e * (1 - t);
  return [i[0], (r - t) * 100, (1 - r) * 100];
};
S.hwb.hcg = function(i) {
  const t = i[1] / 100, r = 1 - i[2] / 100, n = r - t;
  let s = 0;
  return n < 1 && (s = (r - n) / (1 - n)), [i[0], n * 100, s * 100];
};
S.apple.rgb = function(i) {
  return [i[0] / 65535 * 255, i[1] / 65535 * 255, i[2] / 65535 * 255];
};
S.rgb.apple = function(i) {
  return [i[0] / 255 * 65535, i[1] / 255 * 65535, i[2] / 255 * 65535];
};
S.gray.rgb = function(i) {
  return [i[0] / 100 * 255, i[0] / 100 * 255, i[0] / 100 * 255];
};
S.gray.hsl = function(i) {
  return [0, 0, i[0]];
};
S.gray.hsv = S.gray.hsl;
S.gray.hwb = function(i) {
  return [0, 100, i[0]];
};
S.gray.cmyk = function(i) {
  return [0, 0, 0, i[0]];
};
S.gray.lab = function(i) {
  return [i[0], 0, 0];
};
S.gray.hex = function(i) {
  const t = Math.round(i[0] / 100 * 255) & 255, r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
S.rgb.gray = function(i) {
  return [(i[0] + i[1] + i[2]) / 3 / 255 * 100];
};
const Be = hi;
function Bs() {
  const i = {}, t = Object.keys(Be);
  for (let e = t.length, r = 0; r < e; r++)
    i[t[r]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return i;
}
function Us(i) {
  const t = Bs(), e = [i];
  for (t[i].distance = 0; e.length; ) {
    const r = e.pop(), n = Object.keys(Be[r]);
    for (let s = n.length, o = 0; o < s; o++) {
      const a = n[o], l = t[a];
      l.distance === -1 && (l.distance = t[r].distance + 1, l.parent = r, e.unshift(a));
    }
  }
  return t;
}
function Vs(i, t) {
  return function(e) {
    return t(i(e));
  };
}
function qs(i, t) {
  const e = [t[i].parent, i];
  let r = Be[t[i].parent][i], n = t[i].parent;
  for (; t[n].parent; )
    e.unshift(t[n].parent), r = Vs(Be[t[n].parent][n], r), n = t[n].parent;
  return r.conversion = e, r;
}
var Ys = function(i) {
  const t = Us(i), e = {}, r = Object.keys(t);
  for (let n = r.length, s = 0; s < n; s++) {
    const o = r[s];
    t[o].parent !== null && (e[o] = qs(o, t));
  }
  return e;
};
const mr = hi, Xs = Ys, Qt = {}, $s = Object.keys(mr);
function Gs(i) {
  const t = function(...e) {
    const r = e[0];
    return r == null ? r : (r.length > 1 && (e = r), i(e));
  };
  return "conversion" in i && (t.conversion = i.conversion), t;
}
function Ws(i) {
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
$s.forEach((i) => {
  Qt[i] = {}, Object.defineProperty(Qt[i], "channels", { value: mr[i].channels }), Object.defineProperty(Qt[i], "labels", { value: mr[i].labels });
  const t = Xs(i);
  Object.keys(t).forEach((r) => {
    const n = t[r];
    Qt[i][r] = Ws(n), Qt[i][r].raw = Gs(n);
  });
});
var Ks = Qt;
const Zt = Ls, ot = Ks, fi = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], yr = {};
for (const i of Object.keys(ot))
  yr[[...ot[i].labels].sort().join("")] = i;
const Ue = {};
function G(i, t) {
  if (!(this instanceof G))
    return new G(i, t);
  if (t && t in fi && (t = null), t && !(t in ot))
    throw new Error("Unknown model: " + t);
  let e, r;
  if (i == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (i instanceof G)
    this.model = i.model, this.color = [...i.color], this.valpha = i.valpha;
  else if (typeof i == "string") {
    const n = Zt.get(i);
    if (n === null)
      throw new Error("Unable to parse color from string: " + i);
    this.model = n.model, r = ot[this.model].channels, this.color = n.value.slice(0, r), this.valpha = typeof n.value[r] == "number" ? n.value[r] : 1;
  } else if (i.length > 0) {
    this.model = t || "rgb", r = ot[this.model].channels;
    const n = Array.prototype.slice.call(i, 0, r);
    this.color = vr(n, r), this.valpha = typeof i[r] == "number" ? i[r] : 1;
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
    if (!(s in yr))
      throw new Error("Unable to parse color from object: " + JSON.stringify(i));
    this.model = yr[s];
    const { labels: o } = ot[this.model], a = [];
    for (e = 0; e < o.length; e++)
      a.push(i[o[e]]);
    this.color = vr(a);
  }
  if (Ue[this.model])
    for (r = ot[this.model].channels, e = 0; e < r; e++) {
      const n = Ue[this.model][e];
      n && (this.color[e] = n(this.color[e]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
G.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(i) {
    let t = this.model in Zt.to ? this : this.rgb();
    t = t.round(typeof i == "number" ? i : 1);
    const e = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return Zt.to[t.model](e);
  },
  percentString(i) {
    const t = this.rgb().round(typeof i == "number" ? i : 1), e = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return Zt.to.rgb.percent(e);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const i = {}, { channels: t } = ot[this.model], { labels: e } = ot[this.model];
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
    return i = Math.max(i || 0, 0), new G([...this.color.map(Qs(i)), this.valpha], this.model);
  },
  alpha(i) {
    return i !== void 0 ? new G([...this.color, Math.max(0, Math.min(1, i))], this.model) : this.valpha;
  },
  // Rgb
  red: I("rgb", 0, $(255)),
  green: I("rgb", 1, $(255)),
  blue: I("rgb", 2, $(255)),
  hue: I(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (i) => (i % 360 + 360) % 360),
  saturationl: I("hsl", 1, $(100)),
  lightness: I("hsl", 2, $(100)),
  saturationv: I("hsv", 1, $(100)),
  value: I("hsv", 2, $(100)),
  chroma: I("hcg", 1, $(100)),
  gray: I("hcg", 2, $(100)),
  white: I("hwb", 1, $(100)),
  wblack: I("hwb", 2, $(100)),
  cyan: I("cmyk", 0, $(100)),
  magenta: I("cmyk", 1, $(100)),
  yellow: I("cmyk", 2, $(100)),
  black: I("cmyk", 3, $(100)),
  x: I("xyz", 0, $(95.047)),
  y: I("xyz", 1, $(100)),
  z: I("xyz", 2, $(108.833)),
  l: I("lab", 0, $(100)),
  a: I("lab", 1),
  b: I("lab", 2),
  keyword(i) {
    return i !== void 0 ? new G(i) : ot[this.model].keyword(this.color);
  },
  hex(i) {
    return i !== void 0 ? new G(i) : Zt.to.hex(this.rgb().round().color);
  },
  hexa(i) {
    if (i !== void 0)
      return new G(i);
    const t = this.rgb().round().color;
    let e = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return e.length === 1 && (e = "0" + e), Zt.to.hex(t) + e;
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
    return G.rgb(t, t, t);
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
    return G.rgb(
      a * e.red() + l * r.red(),
      a * e.green() + l * r.green(),
      a * e.blue() + l * r.blue(),
      e.alpha() * n + r.alpha() * (1 - n)
    );
  }
};
for (const i of Object.keys(ot)) {
  if (fi.includes(i))
    continue;
  const { channels: t } = ot[i];
  G.prototype[i] = function(...e) {
    return this.model === i ? new G(this) : e.length > 0 ? new G(e, i) : new G([...Zs(ot[this.model][i].raw(this.color)), this.valpha], i);
  }, G[i] = function(...e) {
    let r = e[0];
    return typeof r == "number" && (r = vr(e, t)), new G(r, i);
  };
}
function js(i, t) {
  return Number(i.toFixed(t));
}
function Qs(i) {
  return function(t) {
    return js(t, i);
  };
}
function I(i, t, e) {
  i = Array.isArray(i) ? i : [i];
  for (const r of i)
    (Ue[r] || (Ue[r] = []))[t] = e;
  return i = i[0], function(r) {
    let n;
    return r !== void 0 ? (e && (r = e(r)), n = this[i](), n.color[t] = r, n) : (n = this[i]().color[t], e && (n = e(n)), n);
  };
}
function $(i) {
  return function(t) {
    return Math.max(0, Math.min(i, t));
  };
}
function Zs(i) {
  return Array.isArray(i) ? i : [i];
}
function vr(i, t) {
  for (let e = 0; e < t; e++)
    typeof i[e] != "number" && (i[e] = 0);
  return i;
}
var Hs = G;
const rn = /* @__PURE__ */ Ds(Hs), Js = ["width", "height"], to = ["stroke-width", "stroke"], eo = ["stroke-width", "stroke"], ro = /* @__PURE__ */ ci({
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
    const t = i, e = Xe(null), r = Xe(null), n = Xe(null);
    return _i(() => {
      var u, h, c, _;
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
        const d = ni.timeline({ paused: !0 });
        let p = (h = (u = rn(t.color)) == null ? void 0 : u.alpha(0.1)) == null ? void 0 : h.toString(), f = (_ = (c = rn(t.color)) == null ? void 0 : c.alpha(0.7)) == null ? void 0 : _.toString();
        d.fromTo(o, { attr: { x1: "40", x2: "40", stroke: p, "stroke-linecap": "butt" }, transformOrigin: "center" }, { attr: { x1: "10", x2: "70", stroke: f, "stroke-linecap": t.linecap }, duration: t.duration, rotation: 360 }), d.fromTo(a, { attr: { x1: "40", y1: "40", x2: "40", y2: "40", stroke: p, "stroke-linecap": "butt" }, transformOrigin: "center" }, { attr: { x1: "40", y1: "10", x2: "40", y2: "70", stroke: f, "stroke-linecap": t.linecap }, duration: t.duration, rotation: 360 }, 0), s == null || s.addEventListener("mouseenter", () => {
          d.play();
        }), s == null || s.addEventListener("mouseleave", () => {
          d.reverse();
        });
      }
    }), (s, o) => (di(), pi("svg", {
      ref_key: "root",
      ref: e,
      class: "root",
      width: t.width,
      height: t.height,
      viewBox: "0 0 80 80",
      style: gi({ rotate: t.rotate + "deg", "--hover-color": t.hoverColor })
    }, [
      Nr("line", {
        ref_key: "line1",
        ref: r,
        class: "line1",
        x1: "10",
        y1: "40",
        x2: "70",
        y2: "40",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, to),
      Nr("line", {
        ref_key: "line2",
        ref: n,
        x1: "40",
        y1: "10",
        x2: "40",
        y2: "70",
        "stroke-width": t.strokeWidth,
        stroke: t.color
      }, null, 8, eo)
    ], 12, Js));
  }
});
const er = {
  install(i) {
    i.component("Add", ro);
  }
}, io = {
  install(i) {
    var t;
    (t = er.install) == null || t.call(er, i);
  }
};
export {
  ro as Add,
  er as AddPlugin,
  io as default
};
