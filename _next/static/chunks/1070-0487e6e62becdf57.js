(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1070, 8026], {
        25274: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            let i = (0, r(84931).A)("CircleAlert", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "12",
                    key: "1pkeuh"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "16",
                    y2: "16",
                    key: "4dfq90"
                }]
            ])
        },
        22497: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            let i = (0, r(84931).A)("FileText", [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
                    key: "1rqfz7"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4",
                    key: "tnqrlb"
                }],
                ["path", {
                    d: "M10 9H8",
                    key: "b1mrlr"
                }],
                ["path", {
                    d: "M16 13H8",
                    key: "t4e002"
                }],
                ["path", {
                    d: "M16 17H8",
                    key: "z1uh3a"
                }]
            ])
        },
        77497: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            let i = (0, r(84931).A)("Folder", [
                ["path", {
                    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
                    key: "1kt360"
                }]
            ])
        },
        72380: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => n.a
            });
            var i = r(813),
                n = r.n(i),
                o = {};
            for (let e in i) "default" !== e && (o[e] = () => i[e]);
            r.d(t, o)
        },
        28026: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => n.a
            });
            var i = r(13347),
                n = r.n(i),
                o = {};
            for (let e in i) "default" !== e && (o[e] = () => i[e]);
            r.d(t, o)
        },
        14190: (e, t, r) => {
            "use strict";
            var i = r(34737);
            r.o(i, "NextRequest") && r.d(t, {
                NextRequest: function() {
                    return i.NextRequest
                }
            }), r.o(i, "NextResponse") && r.d(t, {
                NextResponse: function() {
                    return i.NextResponse
                }
            }), r.o(i, "userAgent") && r.d(t, {
                userAgent: function() {
                    return i.userAgent
                }
            }), r.o(i, "userAgentFromString") && r.d(t, {
                userAgentFromString: function() {
                    return i.userAgentFromString
                }
            })
        },
        13347: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return g
                    },
                    handleClientScriptLoad: function() {
                        return h
                    },
                    initScriptLoader: function() {
                        return m
                    }
                });
            let i = r(93e3),
                n = r(28461),
                o = r(154),
                a = i._(r(51439)),
                s = n._(r(98930)),
                l = r(80326),
                u = r(16466),
                c = r(79534),
                d = new Map,
                f = new Set,
                p = e => {
                    if (a.default.preinit) {
                        e.forEach(e => {
                            a.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let r = document.createElement("link");
                            r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                        })
                    }
                },
                b = e => {
                    let {
                        src: t,
                        id: r,
                        onLoad: i = () => {},
                        onReady: n = null,
                        dangerouslySetInnerHTML: o,
                        children: a = "",
                        strategy: s = "afterInteractive",
                        onError: l,
                        stylesheets: c
                    } = e, b = r || t;
                    if (b && f.has(b)) return;
                    if (d.has(t)) {
                        f.add(b), d.get(t).then(i, l);
                        return
                    }
                    let h = () => {
                            n && n(), f.add(b)
                        },
                        m = document.createElement("script"),
                        w = new Promise((e, t) => {
                            m.addEventListener("load", function(t) {
                                e(), i && i.call(this, t), h()
                            }), m.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            l && l(e)
                        });
                    o ? (m.innerHTML = o.__html || "", h()) : a ? (m.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", h()) : t && (m.src = t, d.set(t, w)), (0, u.setAttributesFromProps)(m, e), "worker" === s && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", s), c && p(c), document.body.appendChild(m)
                };

            function h(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => b(e))
                }) : b(e)
            }

            function m(e) {
                e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function w(e) {
                let {
                    id: t,
                    src: r = "",
                    onLoad: i = () => {},
                    onReady: n = null,
                    strategy: u = "afterInteractive",
                    onError: d,
                    stylesheets: p,
                    ...h
                } = e, {
                    updateScripts: m,
                    scripts: w,
                    getIsSsr: g,
                    appDir: v,
                    nonce: y
                } = (0, s.useContext)(l.HeadManagerContext), _ = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || r;
                    _.current || (n && e && f.has(e) && n(), _.current = !0)
                }, [n, t, r]);
                let x = (0, s.useRef)(!1);
                if ((0, s.useEffect)(() => {
                        !x.current && ("afterInteractive" === u ? b(e) : "lazyOnload" === u && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => b(e)) : window.addEventListener("load", () => {
                            (0, c.requestIdleCallback)(() => b(e))
                        })), x.current = !0)
                    }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (m ? (w[u] = (w[u] || []).concat([{
                        id: t,
                        src: r,
                        onLoad: i,
                        onReady: n,
                        onError: d,
                        ...h
                    }]), m(w)) : g && g() ? f.add(t || r) : g && !g() && b(e)), v) {
                    if (p && p.forEach(e => {
                            a.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === u) return r ? (a.default.preload(r, h.integrity ? {
                        as: "script",
                        integrity: h.integrity,
                        nonce: y,
                        crossOrigin: h.crossOrigin
                    } : {
                        as: "script",
                        nonce: y,
                        crossOrigin: h.crossOrigin
                    }), (0, o.jsx)("script", {
                        nonce: y,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, { ...h,
                                id: t
                            }]) + ")"
                        }
                    })) : (h.dangerouslySetInnerHTML && (h.children = h.dangerouslySetInnerHTML.__html, delete h.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                        nonce: y,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...h,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === u && r && a.default.preload(r, h.integrity ? {
                        as: "script",
                        integrity: h.integrity,
                        nonce: y,
                        crossOrigin: h.crossOrigin
                    } : {
                        as: "script",
                        nonce: y,
                        crossOrigin: h.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(w, "__nextScript", {
                value: !0
            });
            let g = w;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        16466: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setAttributesFromProps", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv",
                    noModule: "noModule"
                },
                i = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

            function n(e) {
                return ["async", "defer", "noModule"].includes(e)
            }

            function o(e, t) {
                for (let [o, a] of Object.entries(t)) {
                    if (!t.hasOwnProperty(o) || i.includes(o) || void 0 === a) continue;
                    let s = r[o] || o.toLowerCase();
                    "SCRIPT" === e.tagName && n(s) ? e[s] = !!a : e.setAttribute(s, String(a)), (!1 === a || "SCRIPT" === e.tagName && n(s) && (!a || "false" === a)) && (e.setAttribute(s, ""), e.removeAttribute(s))
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        59811: e => {
            "use strict";
            var t = Object.defineProperty,
                r = Object.getOwnPropertyDescriptor,
                i = Object.getOwnPropertyNames,
                n = Object.prototype.hasOwnProperty,
                o = {};

            function a(e) {
                var t;
                let r = ["path" in e && e.path && `Path=${e.path}`, "expires" in e && (e.expires || 0 === e.expires) && `Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`, "maxAge" in e && "number" == typeof e.maxAge && `Max-Age=${e.maxAge}`, "domain" in e && e.domain && `Domain=${e.domain}`, "secure" in e && e.secure && "Secure", "httpOnly" in e && e.httpOnly && "HttpOnly", "sameSite" in e && e.sameSite && `SameSite=${e.sameSite}`, "partitioned" in e && e.partitioned && "Partitioned", "priority" in e && e.priority && `Priority=${e.priority}`].filter(Boolean),
                    i = `${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}`;
                return 0 === r.length ? i : `${i}; ${r.join("; ")}`
            }

            function s(e) {
                let t = new Map;
                for (let r of e.split(/; */)) {
                    if (!r) continue;
                    let e = r.indexOf("=");
                    if (-1 === e) {
                        t.set(r, "true");
                        continue
                    }
                    let [i, n] = [r.slice(0, e), r.slice(e + 1)];
                    try {
                        t.set(i, decodeURIComponent(null != n ? n : "true"))
                    } catch {}
                }
                return t
            }

            function l(e) {
                var t, r;
                if (!e) return;
                let [
                    [i, n], ...o
                ] = s(e), {
                    domain: a,
                    expires: l,
                    httponly: d,
                    maxage: f,
                    path: p,
                    samesite: b,
                    secure: h,
                    partitioned: m,
                    priority: w
                } = Object.fromEntries(o.map(([e, t]) => [e.toLowerCase().replace(/-/g, ""), t]));
                return function(e) {
                    let t = {};
                    for (let r in e) e[r] && (t[r] = e[r]);
                    return t
                }({
                    name: i,
                    value: decodeURIComponent(n),
                    domain: a,
                    ...l && {
                        expires: new Date(l)
                    },
                    ...d && {
                        httpOnly: !0
                    },
                    ..."string" == typeof f && {
                        maxAge: Number(f)
                    },
                    path: p,
                    ...b && {
                        sameSite: u.includes(t = (t = b).toLowerCase()) ? t : void 0
                    },
                    ...h && {
                        secure: !0
                    },
                    ...w && {
                        priority: c.includes(r = (r = w).toLowerCase()) ? r : void 0
                    },
                    ...m && {
                        partitioned: !0
                    }
                })
            }((e, r) => {
                for (var i in r) t(e, i, {
                    get: r[i],
                    enumerable: !0
                })
            })(o, {
                RequestCookies: () => d,
                ResponseCookies: () => f,
                parseCookie: () => s,
                parseSetCookie: () => l,
                stringifyCookie: () => a
            }), e.exports = ((e, o, a, s) => {
                if (o && "object" == typeof o || "function" == typeof o)
                    for (let l of i(o)) n.call(e, l) || l === a || t(e, l, {
                        get: () => o[l],
                        enumerable: !(s = r(o, l)) || s.enumerable
                    });
                return e
            })(t({}, "__esModule", {
                value: !0
            }), o);
            var u = ["strict", "lax", "none"],
                c = ["low", "medium", "high"],
                d = class {
                    constructor(e) {
                        this._parsed = new Map, this._headers = e;
                        let t = e.get("cookie");
                        if (t)
                            for (let [e, r] of s(t)) this._parsed.set(e, {
                                name: e,
                                value: r
                            })
                    }[Symbol.iterator]() {
                        return this._parsed[Symbol.iterator]()
                    }
                    get size() {
                        return this._parsed.size
                    }
                    get(...e) {
                        let t = "string" == typeof e[0] ? e[0] : e[0].name;
                        return this._parsed.get(t)
                    }
                    getAll(...e) {
                        var t;
                        let r = Array.from(this._parsed);
                        if (!e.length) return r.map(([e, t]) => t);
                        let i = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
                        return r.filter(([e]) => e === i).map(([e, t]) => t)
                    }
                    has(e) {
                        return this._parsed.has(e)
                    }
                    set(...e) {
                        let [t, r] = 1 === e.length ? [e[0].name, e[0].value] : e, i = this._parsed;
                        return i.set(t, {
                            name: t,
                            value: r
                        }), this._headers.set("cookie", Array.from(i).map(([e, t]) => a(t)).join("; ")), this
                    }
                    delete(e) {
                        let t = this._parsed,
                            r = Array.isArray(e) ? e.map(e => t.delete(e)) : t.delete(e);
                        return this._headers.set("cookie", Array.from(t).map(([e, t]) => a(t)).join("; ")), r
                    }
                    clear() {
                        return this.delete(Array.from(this._parsed.keys())), this
                    }[Symbol.for("edge-runtime.inspect.custom")]() {
                        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
                    }
                    toString() {
                        return [...this._parsed.values()].map(e => `${e.name}=${encodeURIComponent(e.value)}`).join("; ")
                    }
                },
                f = class {
                    constructor(e) {
                        var t, r, i;
                        this._parsed = new Map, this._headers = e;
                        let n = null != (i = null != (r = null == (t = e.getSetCookie) ? void 0 : t.call(e)) ? r : e.get("set-cookie")) ? i : [];
                        for (let e of Array.isArray(n) ? n : function(e) {
                                if (!e) return [];
                                var t, r, i, n, o, a = [],
                                    s = 0;

                                function l() {
                                    for (; s < e.length && /\s/.test(e.charAt(s));) s += 1;
                                    return s < e.length
                                }
                                for (; s < e.length;) {
                                    for (t = s, o = !1; l();)
                                        if ("," === (r = e.charAt(s))) {
                                            for (i = s, s += 1, l(), n = s; s < e.length && "=" !== (r = e.charAt(s)) && ";" !== r && "," !== r;) s += 1;
                                            s < e.length && "=" === e.charAt(s) ? (o = !0, s = n, a.push(e.substring(t, i)), t = s) : s = i + 1
                                        } else s += 1;
                                    (!o || s >= e.length) && a.push(e.substring(t, e.length))
                                }
                                return a
                            }(n)) {
                            let t = l(e);
                            t && this._parsed.set(t.name, t)
                        }
                    }
                    get(...e) {
                        let t = "string" == typeof e[0] ? e[0] : e[0].name;
                        return this._parsed.get(t)
                    }
                    getAll(...e) {
                        var t;
                        let r = Array.from(this._parsed.values());
                        if (!e.length) return r;
                        let i = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
                        return r.filter(e => e.name === i)
                    }
                    has(e) {
                        return this._parsed.has(e)
                    }
                    set(...e) {
                        let [t, r, i] = 1 === e.length ? [e[0].name, e[0].value, e[0]] : e, n = this._parsed;
                        return n.set(t, function(e = {
                                name: "",
                                value: ""
                            }) {
                                return "number" == typeof e.expires && (e.expires = new Date(e.expires)), e.maxAge && (e.expires = new Date(Date.now() + 1e3 * e.maxAge)), (null === e.path || void 0 === e.path) && (e.path = "/"), e
                            }({
                                name: t,
                                value: r,
                                ...i
                            })),
                            function(e, t) {
                                for (let [, r] of (t.delete("set-cookie"), e)) {
                                    let e = a(r);
                                    t.append("set-cookie", e)
                                }
                            }(n, this._headers), this
                    }
                    delete(...e) {
                        let [t, r] = "string" == typeof e[0] ? [e[0]] : [e[0].name, e[0]];
                        return this.set({ ...r,
                            name: t,
                            value: "",
                            expires: new Date(0)
                        })
                    }[Symbol.for("edge-runtime.inspect.custom")]() {
                        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
                    }
                    toString() {
                        return [...this._parsed.values()].map(a).join("; ")
                    }
                }
        },
        45447: e => {
            ! function() {
                "use strict";
                var t = {
                        114: function(e) {
                            function t(e) {
                                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
                            }

                            function r(e, t) {
                                for (var r, i = "", n = 0, o = -1, a = 0, s = 0; s <= e.length; ++s) {
                                    if (s < e.length) r = e.charCodeAt(s);
                                    else if (47 === r) break;
                                    else r = 47;
                                    if (47 === r) {
                                        if (o === s - 1 || 1 === a);
                                        else if (o !== s - 1 && 2 === a) {
                                            if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                                                if (i.length > 2) {
                                                    var l = i.lastIndexOf("/");
                                                    if (l !== i.length - 1) {
                                                        -1 === l ? (i = "", n = 0) : n = (i = i.slice(0, l)).length - 1 - i.lastIndexOf("/"), o = s, a = 0;
                                                        continue
                                                    }
                                                } else if (2 === i.length || 1 === i.length) {
                                                    i = "", n = 0, o = s, a = 0;
                                                    continue
                                                }
                                            }
                                            t && (i.length > 0 ? i += "/.." : i = "..", n = 2)
                                        } else i.length > 0 ? i += "/" + e.slice(o + 1, s) : i = e.slice(o + 1, s), n = s - o - 1;
                                        o = s, a = 0
                                    } else 46 === r && -1 !== a ? ++a : a = -1
                                }
                                return i
                            }
                            var i = {
                                resolve: function() {
                                    for (var e, i, n = "", o = !1, a = arguments.length - 1; a >= -1 && !o; a--) a >= 0 ? i = arguments[a] : (void 0 === e && (e = ""), i = e), t(i), 0 !== i.length && (n = i + "/" + n, o = 47 === i.charCodeAt(0));
                                    return (n = r(n, !o), o) ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : "."
                                },
                                normalize: function(e) {
                                    if (t(e), 0 === e.length) return ".";
                                    var i = 47 === e.charCodeAt(0),
                                        n = 47 === e.charCodeAt(e.length - 1);
                                    return (0 !== (e = r(e, !i)).length || i || (e = "."), e.length > 0 && n && (e += "/"), i) ? "/" + e : e
                                },
                                isAbsolute: function(e) {
                                    return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                                },
                                join: function() {
                                    if (0 == arguments.length) return ".";
                                    for (var e, r = 0; r < arguments.length; ++r) {
                                        var n = arguments[r];
                                        t(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                                    }
                                    return void 0 === e ? "." : i.normalize(e)
                                },
                                relative: function(e, r) {
                                    if (t(e), t(r), e === r || (e = i.resolve(e)) === (r = i.resolve(r))) return "";
                                    for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                                    for (var o = e.length, a = o - n, s = 1; s < r.length && 47 === r.charCodeAt(s); ++s);
                                    for (var l = r.length - s, u = a < l ? a : l, c = -1, d = 0; d <= u; ++d) {
                                        if (d === u) {
                                            if (l > u) {
                                                if (47 === r.charCodeAt(s + d)) return r.slice(s + d + 1);
                                                if (0 === d) return r.slice(s + d)
                                            } else a > u && (47 === e.charCodeAt(n + d) ? c = d : 0 === d && (c = 0));
                                            break
                                        }
                                        var f = e.charCodeAt(n + d);
                                        if (f !== r.charCodeAt(s + d)) break;
                                        47 === f && (c = d)
                                    }
                                    var p = "";
                                    for (d = n + c + 1; d <= o; ++d)(d === o || 47 === e.charCodeAt(d)) && (0 === p.length ? p += ".." : p += "/..");
                                    return p.length > 0 ? p + r.slice(s + c) : (s += c, 47 === r.charCodeAt(s) && ++s, r.slice(s))
                                },
                                _makeLong: function(e) {
                                    return e
                                },
                                dirname: function(e) {
                                    if (t(e), 0 === e.length) return ".";
                                    for (var r = e.charCodeAt(0), i = 47 === r, n = -1, o = !0, a = e.length - 1; a >= 1; --a)
                                        if (47 === (r = e.charCodeAt(a))) {
                                            if (!o) {
                                                n = a;
                                                break
                                            }
                                        } else o = !1;
                                    return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
                                },
                                basename: function(e, r) {
                                    if (void 0 !== r && "string" != typeof r) throw TypeError('"ext" argument must be a string');
                                    t(e);
                                    var i, n = 0,
                                        o = -1,
                                        a = !0;
                                    if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                                        if (r.length === e.length && r === e) return "";
                                        var s = r.length - 1,
                                            l = -1;
                                        for (i = e.length - 1; i >= 0; --i) {
                                            var u = e.charCodeAt(i);
                                            if (47 === u) {
                                                if (!a) {
                                                    n = i + 1;
                                                    break
                                                }
                                            } else -1 === l && (a = !1, l = i + 1), s >= 0 && (u === r.charCodeAt(s) ? -1 == --s && (o = i) : (s = -1, o = l))
                                        }
                                        return n === o ? o = l : -1 === o && (o = e.length), e.slice(n, o)
                                    }
                                    for (i = e.length - 1; i >= 0; --i)
                                        if (47 === e.charCodeAt(i)) {
                                            if (!a) {
                                                n = i + 1;
                                                break
                                            }
                                        } else -1 === o && (a = !1, o = i + 1);
                                    return -1 === o ? "" : e.slice(n, o)
                                },
                                extname: function(e) {
                                    t(e);
                                    for (var r = -1, i = 0, n = -1, o = !0, a = 0, s = e.length - 1; s >= 0; --s) {
                                        var l = e.charCodeAt(s);
                                        if (47 === l) {
                                            if (!o) {
                                                i = s + 1;
                                                break
                                            }
                                            continue
                                        } - 1 === n && (o = !1, n = s + 1), 46 === l ? -1 === r ? r = s : 1 !== a && (a = 1) : -1 !== r && (a = -1)
                                    }
                                    return -1 === r || -1 === n || 0 === a || 1 === a && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
                                },
                                format: function(e) {
                                    var t, r;
                                    if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                    return t = e.dir || e.root, r = e.base || (e.name || "") + (e.ext || ""), t ? t === e.root ? t + r : t + "/" + r : r
                                },
                                parse: function(e) {
                                    t(e);
                                    var r, i = {
                                        root: "",
                                        dir: "",
                                        base: "",
                                        ext: "",
                                        name: ""
                                    };
                                    if (0 === e.length) return i;
                                    var n = e.charCodeAt(0),
                                        o = 47 === n;
                                    o ? (i.root = "/", r = 1) : r = 0;
                                    for (var a = -1, s = 0, l = -1, u = !0, c = e.length - 1, d = 0; c >= r; --c) {
                                        if (47 === (n = e.charCodeAt(c))) {
                                            if (!u) {
                                                s = c + 1;
                                                break
                                            }
                                            continue
                                        } - 1 === l && (u = !1, l = c + 1), 46 === n ? -1 === a ? a = c : 1 !== d && (d = 1) : -1 !== a && (d = -1)
                                    }
                                    return -1 === a || -1 === l || 0 === d || 1 === d && a === l - 1 && a === s + 1 ? -1 !== l && (0 === s && o ? i.base = i.name = e.slice(1, l) : i.base = i.name = e.slice(s, l)) : (0 === s && o ? (i.name = e.slice(1, a), i.base = e.slice(1, l)) : (i.name = e.slice(s, a), i.base = e.slice(s, l)), i.ext = e.slice(a, l)), s > 0 ? i.dir = e.slice(0, s - 1) : o && (i.dir = "/"), i
                                },
                                sep: "/",
                                delimiter: ":",
                                win32: null,
                                posix: null
                            };
                            i.posix = i, e.exports = i
                        }
                    },
                    r = {};

                function i(e) {
                    var n = r[e];
                    if (void 0 !== n) return n.exports;
                    var o = r[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](o, o.exports, i), a = !1
                    } finally {
                        a && delete r[e]
                    }
                    return o.exports
                }
                i.ab = "//";
                var n = i(114);
                e.exports = n
            }()
        },
        48899: (e, t, r) => {
            var i;
            (() => {
                var n = {
                        226: function(n, o) {
                            ! function(a, s) {
                                "use strict";
                                var l = "function",
                                    u = "undefined",
                                    c = "object",
                                    d = "string",
                                    f = "major",
                                    p = "model",
                                    b = "name",
                                    h = "type",
                                    m = "vendor",
                                    w = "version",
                                    g = "architecture",
                                    v = "console",
                                    y = "mobile",
                                    _ = "tablet",
                                    x = "smarttv",
                                    S = "wearable",
                                    k = "embedded",
                                    E = "Amazon",
                                    P = "Apple",
                                    R = "ASUS",
                                    O = "BlackBerry",
                                    A = "Browser",
                                    C = "Chrome",
                                    T = "Firefox",
                                    j = "Google",
                                    I = "Huawei",
                                    N = "Microsoft",
                                    L = "Motorola",
                                    M = "Opera",
                                    D = "Samsung",
                                    U = "Sharp",
                                    q = "Sony",
                                    F = "Xiaomi",
                                    H = "Zebra",
                                    z = "Facebook",
                                    $ = "Chromium OS",
                                    B = "Mac OS",
                                    X = function(e, t) {
                                        var r = {};
                                        for (var i in e) t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
                                        return r
                                    },
                                    G = function(e) {
                                        for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                                        return t
                                    },
                                    W = function(e, t) {
                                        return typeof e === d && -1 !== V(t).indexOf(V(e))
                                    },
                                    V = function(e) {
                                        return e.toLowerCase()
                                    },
                                    Y = function(e, t) {
                                        if (typeof e === d) return e = e.replace(/^\s\s*/, ""), typeof t === u ? e : e.substring(0, 350)
                                    },
                                    K = function(e, t) {
                                        for (var r, i, n, o, a, u, d = 0; d < t.length && !a;) {
                                            var f = t[d],
                                                p = t[d + 1];
                                            for (r = i = 0; r < f.length && !a && f[r];)
                                                if (a = f[r++].exec(e))
                                                    for (n = 0; n < p.length; n++) u = a[++i], typeof(o = p[n]) === c && o.length > 0 ? 2 === o.length ? typeof o[1] == l ? this[o[0]] = o[1].call(this, u) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== l || o[1].exec && o[1].test ? this[o[0]] = u ? u.replace(o[1], o[2]) : void 0 : this[o[0]] = u ? o[1].call(this, u, o[2]) : void 0 : 4 === o.length && (this[o[0]] = u ? o[3].call(this, u.replace(o[1], o[2])) : void 0) : this[o] = u || s;
                                            d += 2
                                        }
                                    },
                                    Z = function(e, t) {
                                        for (var r in t)
                                            if (typeof t[r] === c && t[r].length > 0) {
                                                for (var i = 0; i < t[r].length; i++)
                                                    if (W(t[r][i], e)) return "?" === r ? s : r
                                            } else if (W(t[r], e)) return "?" === r ? s : r;
                                        return e
                                    },
                                    J = {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2e3: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        10: ["NT 6.4", "NT 10.0"],
                                        RT: "ARM"
                                    },
                                    Q = {
                                        browser: [
                                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                            [w, [b, "Chrome"]],
                                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                            [w, [b, "Edge"]],
                                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                            [b, w],
                                            [/opios[\/ ]+([\w\.]+)/i],
                                            [w, [b, M + " Mini"]],
                                            [/\bopr\/([\w\.]+)/i],
                                            [w, [b, M]],
                                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                            [b, w],
                                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                            [w, [b, "UC" + A]],
                                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                            [w, [b, "WeChat(Win) Desktop"]],
                                            [/micromessenger\/([\w\.]+)/i],
                                            [w, [b, "WeChat"]],
                                            [/konqueror\/([\w\.]+)/i],
                                            [w, [b, "Konqueror"]],
                                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                            [w, [b, "IE"]],
                                            [/ya(?:search)?browser\/([\w\.]+)/i],
                                            [w, [b, "Yandex"]],
                                            [/(avast|avg)\/([\w\.]+)/i],
                                            [
                                                [b, /(.+)/, "$1 Secure " + A], w
                                            ],
                                            [/\bfocus\/([\w\.]+)/i],
                                            [w, [b, T + " Focus"]],
                                            [/\bopt\/([\w\.]+)/i],
                                            [w, [b, M + " Touch"]],
                                            [/coc_coc\w+\/([\w\.]+)/i],
                                            [w, [b, "Coc Coc"]],
                                            [/dolfin\/([\w\.]+)/i],
                                            [w, [b, "Dolphin"]],
                                            [/coast\/([\w\.]+)/i],
                                            [w, [b, M + " Coast"]],
                                            [/miuibrowser\/([\w\.]+)/i],
                                            [w, [b, "MIUI " + A]],
                                            [/fxios\/([-\w\.]+)/i],
                                            [w, [b, T]],
                                            [/\bqihu|(qi?ho?o?|360)browser/i],
                                            [
                                                [b, "360 " + A]
                                            ],
                                            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                            [
                                                [b, /(.+)/, "$1 " + A], w
                                            ],
                                            [/(comodo_dragon)\/([\w\.]+)/i],
                                            [
                                                [b, /_/g, " "], w
                                            ],
                                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                            [b, w],
                                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                            [b],
                                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                            [
                                                [b, z], w
                                            ],
                                            [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                            [b, w],
                                            [/\bgsa\/([\w\.]+) .*safari\//i],
                                            [w, [b, "GSA"]],
                                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                            [w, [b, "TikTok"]],
                                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                                            [w, [b, C + " Headless"]],
                                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                                            [
                                                [b, C + " WebView"], w
                                            ],
                                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                            [w, [b, "Android " + A]],
                                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                            [b, w],
                                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                            [w, [b, "Mobile Safari"]],
                                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                            [w, b],
                                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                            [b, [w, Z, {
                                                "1.0": "/8",
                                                1.2: "/1",
                                                1.3: "/3",
                                                "2.0": "/412",
                                                "2.0.2": "/416",
                                                "2.0.3": "/417",
                                                "2.0.4": "/419",
                                                "?": "/"
                                            }]],
                                            [/(webkit|khtml)\/([\w\.]+)/i],
                                            [b, w],
                                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                            [
                                                [b, "Netscape"], w
                                            ],
                                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                            [w, [b, T + " Reality"]],
                                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                            [b, w],
                                            [/(cobalt)\/([\w\.]+)/i],
                                            [b, [w, /master.|lts./, ""]]
                                        ],
                                        cpu: [
                                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                            [
                                                [g, "amd64"]
                                            ],
                                            [/(ia32(?=;))/i],
                                            [
                                                [g, V]
                                            ],
                                            [/((?:i[346]|x)86)[;\)]/i],
                                            [
                                                [g, "ia32"]
                                            ],
                                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                            [
                                                [g, "arm64"]
                                            ],
                                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                            [
                                                [g, "armhf"]
                                            ],
                                            [/windows (ce|mobile); ppc;/i],
                                            [
                                                [g, "arm"]
                                            ],
                                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                            [
                                                [g, /ower/, "", V]
                                            ],
                                            [/(sun4\w)[;\)]/i],
                                            [
                                                [g, "sparc"]
                                            ],
                                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                            [
                                                [g, V]
                                            ]
                                        ],
                                        device: [
                                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                            [p, [m, D],
                                                [h, _]
                                            ],
                                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                            [p, [m, D],
                                                [h, y]
                                            ],
                                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                            [p, [m, P],
                                                [h, y]
                                            ],
                                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                            [p, [m, P],
                                                [h, _]
                                            ],
                                            [/(macintosh);/i],
                                            [p, [m, P]],
                                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                            [p, [m, U],
                                                [h, y]
                                            ],
                                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                            [p, [m, I],
                                                [h, _]
                                            ],
                                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                            [p, [m, I],
                                                [h, y]
                                            ],
                                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                            [
                                                [p, /_/g, " "],
                                                [m, F],
                                                [h, y]
                                            ],
                                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                            [
                                                [p, /_/g, " "],
                                                [m, F],
                                                [h, _]
                                            ],
                                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                            [p, [m, "OPPO"],
                                                [h, y]
                                            ],
                                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                            [p, [m, "Vivo"],
                                                [h, y]
                                            ],
                                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                            [p, [m, "Realme"],
                                                [h, y]
                                            ],
                                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                            [p, [m, L],
                                                [h, y]
                                            ],
                                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                            [p, [m, L],
                                                [h, _]
                                            ],
                                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                            [p, [m, "LG"],
                                                [h, _]
                                            ],
                                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                            [p, [m, "LG"],
                                                [h, y]
                                            ],
                                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                            [p, [m, "Lenovo"],
                                                [h, _]
                                            ],
                                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                            [
                                                [p, /_/g, " "],
                                                [m, "Nokia"],
                                                [h, y]
                                            ],
                                            [/(pixel c)\b/i],
                                            [p, [m, j],
                                                [h, _]
                                            ],
                                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                            [p, [m, j],
                                                [h, y]
                                            ],
                                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                            [p, [m, q],
                                                [h, y]
                                            ],
                                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                            [
                                                [p, "Xperia Tablet"],
                                                [m, q],
                                                [h, _]
                                            ],
                                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                            [p, [m, "OnePlus"],
                                                [h, y]
                                            ],
                                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                            [p, [m, E],
                                                [h, _]
                                            ],
                                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                            [
                                                [p, /(.+)/g, "Fire Phone $1"],
                                                [m, E],
                                                [h, y]
                                            ],
                                            [/(playbook);[-\w\),; ]+(rim)/i],
                                            [p, m, [h, _]],
                                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                            [p, [m, O],
                                                [h, y]
                                            ],
                                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                            [p, [m, R],
                                                [h, _]
                                            ],
                                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                            [p, [m, R],
                                                [h, y]
                                            ],
                                            [/(nexus 9)/i],
                                            [p, [m, "HTC"],
                                                [h, _]
                                            ],
                                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                            [m, [p, /_/g, " "],
                                                [h, y]
                                            ],
                                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                            [p, [m, "Acer"],
                                                [h, _]
                                            ],
                                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                            [p, [m, "Meizu"],
                                                [h, y]
                                            ],
                                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                            [m, p, [h, y]],
                                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                            [m, p, [h, _]],
                                            [/(surface duo)/i],
                                            [p, [m, N],
                                                [h, _]
                                            ],
                                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                            [p, [m, "Fairphone"],
                                                [h, y]
                                            ],
                                            [/(u304aa)/i],
                                            [p, [m, "AT&T"],
                                                [h, y]
                                            ],
                                            [/\bsie-(\w*)/i],
                                            [p, [m, "Siemens"],
                                                [h, y]
                                            ],
                                            [/\b(rct\w+) b/i],
                                            [p, [m, "RCA"],
                                                [h, _]
                                            ],
                                            [/\b(venue[\d ]{2,7}) b/i],
                                            [p, [m, "Dell"],
                                                [h, _]
                                            ],
                                            [/\b(q(?:mv|ta)\w+) b/i],
                                            [p, [m, "Verizon"],
                                                [h, _]
                                            ],
                                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                            [p, [m, "Barnes & Noble"],
                                                [h, _]
                                            ],
                                            [/\b(tm\d{3}\w+) b/i],
                                            [p, [m, "NuVision"],
                                                [h, _]
                                            ],
                                            [/\b(k88) b/i],
                                            [p, [m, "ZTE"],
                                                [h, _]
                                            ],
                                            [/\b(nx\d{3}j) b/i],
                                            [p, [m, "ZTE"],
                                                [h, y]
                                            ],
                                            [/\b(gen\d{3}) b.+49h/i],
                                            [p, [m, "Swiss"],
                                                [h, y]
                                            ],
                                            [/\b(zur\d{3}) b/i],
                                            [p, [m, "Swiss"],
                                                [h, _]
                                            ],
                                            [/\b((zeki)?tb.*\b) b/i],
                                            [p, [m, "Zeki"],
                                                [h, _]
                                            ],
                                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                            [
                                                [m, "Dragon Touch"], p, [h, _]
                                            ],
                                            [/\b(ns-?\w{0,9}) b/i],
                                            [p, [m, "Insignia"],
                                                [h, _]
                                            ],
                                            [/\b((nxa|next)-?\w{0,9}) b/i],
                                            [p, [m, "NextBook"],
                                                [h, _]
                                            ],
                                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                            [
                                                [m, "Voice"], p, [h, y]
                                            ],
                                            [/\b(lvtel\-)?(v1[12]) b/i],
                                            [
                                                [m, "LvTel"], p, [h, y]
                                            ],
                                            [/\b(ph-1) /i],
                                            [p, [m, "Essential"],
                                                [h, y]
                                            ],
                                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                            [p, [m, "Envizen"],
                                                [h, _]
                                            ],
                                            [/\b(trio[-\w\. ]+) b/i],
                                            [p, [m, "MachSpeed"],
                                                [h, _]
                                            ],
                                            [/\btu_(1491) b/i],
                                            [p, [m, "Rotor"],
                                                [h, _]
                                            ],
                                            [/(shield[\w ]+) b/i],
                                            [p, [m, "Nvidia"],
                                                [h, _]
                                            ],
                                            [/(sprint) (\w+)/i],
                                            [m, p, [h, y]],
                                            [/(kin\.[onetw]{3})/i],
                                            [
                                                [p, /\./g, " "],
                                                [m, N],
                                                [h, y]
                                            ],
                                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                            [p, [m, H],
                                                [h, _]
                                            ],
                                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                            [p, [m, H],
                                                [h, y]
                                            ],
                                            [/smart-tv.+(samsung)/i],
                                            [m, [h, x]],
                                            [/hbbtv.+maple;(\d+)/i],
                                            [
                                                [p, /^/, "SmartTV"],
                                                [m, D],
                                                [h, x]
                                            ],
                                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                            [
                                                [m, "LG"],
                                                [h, x]
                                            ],
                                            [/(apple) ?tv/i],
                                            [m, [p, P + " TV"],
                                                [h, x]
                                            ],
                                            [/crkey/i],
                                            [
                                                [p, C + "cast"],
                                                [m, j],
                                                [h, x]
                                            ],
                                            [/droid.+aft(\w)( bui|\))/i],
                                            [p, [m, E],
                                                [h, x]
                                            ],
                                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                            [p, [m, U],
                                                [h, x]
                                            ],
                                            [/(bravia[\w ]+)( bui|\))/i],
                                            [p, [m, q],
                                                [h, x]
                                            ],
                                            [/(mitv-\w{5}) bui/i],
                                            [p, [m, F],
                                                [h, x]
                                            ],
                                            [/Hbbtv.*(technisat) (.*);/i],
                                            [m, p, [h, x]],
                                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                            [
                                                [m, Y],
                                                [p, Y],
                                                [h, x]
                                            ],
                                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                            [
                                                [h, x]
                                            ],
                                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                            [m, p, [h, v]],
                                            [/droid.+; (shield) bui/i],
                                            [p, [m, "Nvidia"],
                                                [h, v]
                                            ],
                                            [/(playstation [345portablevi]+)/i],
                                            [p, [m, q],
                                                [h, v]
                                            ],
                                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                            [p, [m, N],
                                                [h, v]
                                            ],
                                            [/((pebble))app/i],
                                            [m, p, [h, S]],
                                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                            [p, [m, P],
                                                [h, S]
                                            ],
                                            [/droid.+; (glass) \d/i],
                                            [p, [m, j],
                                                [h, S]
                                            ],
                                            [/droid.+; (wt63?0{2,3})\)/i],
                                            [p, [m, H],
                                                [h, S]
                                            ],
                                            [/(quest( 2| pro)?)/i],
                                            [p, [m, z],
                                                [h, S]
                                            ],
                                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                            [m, [h, k]],
                                            [/(aeobc)\b/i],
                                            [p, [m, E],
                                                [h, k]
                                            ],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                            [p, [h, y]],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                            [p, [h, _]],
                                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                            [
                                                [h, _]
                                            ],
                                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                            [
                                                [h, y]
                                            ],
                                            [/(android[-\w\. ]{0,9});.+buil/i],
                                            [p, [m, "Generic"]]
                                        ],
                                        engine: [
                                            [/windows.+ edge\/([\w\.]+)/i],
                                            [w, [b, "EdgeHTML"]],
                                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                            [w, [b, "Blink"]],
                                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                            [b, w],
                                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                            [w, b]
                                        ],
                                        os: [
                                            [/microsoft (windows) (vista|xp)/i],
                                            [b, w],
                                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                            [b, [w, Z, J]],
                                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                            [
                                                [b, "Windows"],
                                                [w, Z, J]
                                            ],
                                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                            [
                                                [w, /_/g, "."],
                                                [b, "iOS"]
                                            ],
                                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                            [
                                                [b, B],
                                                [w, /_/g, "."]
                                            ],
                                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                            [w, b],
                                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                            [b, w],
                                            [/\(bb(10);/i],
                                            [w, [b, O]],
                                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                            [w, [b, "Symbian"]],
                                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                            [w, [b, T + " OS"]],
                                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                            [w, [b, "webOS"]],
                                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                            [w, [b, "watchOS"]],
                                            [/crkey\/([\d\.]+)/i],
                                            [w, [b, C + "cast"]],
                                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                            [
                                                [b, $], w
                                            ],
                                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                            [b, w],
                                            [/(sunos) ?([\w\.\d]*)/i],
                                            [
                                                [b, "Solaris"], w
                                            ],
                                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                            [b, w]
                                        ]
                                    },
                                    ee = function(e, t) {
                                        if (typeof e === c && (t = e, e = s), !(this instanceof ee)) return new ee(e, t).getResult();
                                        var r = typeof a !== u && a.navigator ? a.navigator : s,
                                            i = e || (r && r.userAgent ? r.userAgent : ""),
                                            n = r && r.userAgentData ? r.userAgentData : s,
                                            o = t ? X(Q, t) : Q,
                                            v = r && r.userAgent == i;
                                        return this.getBrowser = function() {
                                            var e, t = {};
                                            return t[b] = s, t[w] = s, K.call(t, i, o.browser), t[f] = typeof(e = t[w]) === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : s, v && r && r.brave && typeof r.brave.isBrave == l && (t[b] = "Brave"), t
                                        }, this.getCPU = function() {
                                            var e = {};
                                            return e[g] = s, K.call(e, i, o.cpu), e
                                        }, this.getDevice = function() {
                                            var e = {};
                                            return e[m] = s, e[p] = s, e[h] = s, K.call(e, i, o.device), v && !e[h] && n && n.mobile && (e[h] = y), v && "Macintosh" == e[p] && r && typeof r.standalone !== u && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[p] = "iPad", e[h] = _), e
                                        }, this.getEngine = function() {
                                            var e = {};
                                            return e[b] = s, e[w] = s, K.call(e, i, o.engine), e
                                        }, this.getOS = function() {
                                            var e = {};
                                            return e[b] = s, e[w] = s, K.call(e, i, o.os), v && !e[b] && n && "Unknown" != n.platform && (e[b] = n.platform.replace(/chrome os/i, $).replace(/macos/i, B)), e
                                        }, this.getResult = function() {
                                            return {
                                                ua: this.getUA(),
                                                browser: this.getBrowser(),
                                                engine: this.getEngine(),
                                                os: this.getOS(),
                                                device: this.getDevice(),
                                                cpu: this.getCPU()
                                            }
                                        }, this.getUA = function() {
                                            return i
                                        }, this.setUA = function(e) {
                                            return i = typeof e === d && e.length > 350 ? Y(e, 350) : e, this
                                        }, this.setUA(i), this
                                    };
                                ee.VERSION = "1.0.35", ee.BROWSER = G([b, w, f]), ee.CPU = G([g]), ee.DEVICE = G([p, m, h, v, y, x, _, S, k]), ee.ENGINE = ee.OS = G([b, w]), typeof o !== u ? (n.exports && (o = n.exports = ee), o.UAParser = ee) : r.amdO ? void 0 !== (i = (function() {
                                    return ee
                                }).call(t, r, t, e)) && (e.exports = i) : typeof a !== u && (a.UAParser = ee);
                                var et = typeof a !== u && (a.jQuery || a.Zepto);
                                if (et && !et.ua) {
                                    var er = new ee;
                                    et.ua = er.getResult(), et.ua.get = function() {
                                        return er.getUA()
                                    }, et.ua.set = function(e) {
                                        er.setUA(e);
                                        var t = er.getResult();
                                        for (var r in t) et.ua[r] = t[r]
                                    }
                                }
                            }("object" == typeof window ? window : this)
                        }
                    },
                    o = {};

                function a(e) {
                    var t = o[e];
                    if (void 0 !== t) return t.exports;
                    var r = o[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        n[e].call(r.exports, r, r.exports, a), i = !1
                    } finally {
                        i && delete o[e]
                    }
                    return r.exports
                }
                a.ab = "//";
                var s = a(226);
                e.exports = s
            })()
        },
        82569: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    ACTION_SUFFIX: function() {
                        return d
                    },
                    APP_DIR_ALIAS: function() {
                        return T
                    },
                    CACHE_ONE_YEAR: function() {
                        return S
                    },
                    DOT_NEXT_ALIAS: function() {
                        return A
                    },
                    ESLINT_DEFAULT_DIRS: function() {
                        return K
                    },
                    GSP_NO_RETURNED_VALUE: function() {
                        return B
                    },
                    GSSP_COMPONENT_MEMBER_ERROR: function() {
                        return W
                    },
                    GSSP_NO_RETURNED_VALUE: function() {
                        return X
                    },
                    INFINITE_CACHE: function() {
                        return k
                    },
                    INSTRUMENTATION_HOOK_FILENAME: function() {
                        return R
                    },
                    MATCHED_PATH_HEADER: function() {
                        return n
                    },
                    MIDDLEWARE_FILENAME: function() {
                        return E
                    },
                    MIDDLEWARE_LOCATION_REGEXP: function() {
                        return P
                    },
                    NEXT_BODY_SUFFIX: function() {
                        return b
                    },
                    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
                        return x
                    },
                    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
                        return m
                    },
                    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
                        return w
                    },
                    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
                        return _
                    },
                    NEXT_CACHE_TAGS_HEADER: function() {
                        return h
                    },
                    NEXT_CACHE_TAG_MAX_ITEMS: function() {
                        return v
                    },
                    NEXT_CACHE_TAG_MAX_LENGTH: function() {
                        return y
                    },
                    NEXT_DATA_SUFFIX: function() {
                        return f
                    },
                    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
                        return i
                    },
                    NEXT_META_SUFFIX: function() {
                        return p
                    },
                    NEXT_QUERY_PARAM_PREFIX: function() {
                        return r
                    },
                    NEXT_RESUME_HEADER: function() {
                        return g
                    },
                    NON_STANDARD_NODE_ENV: function() {
                        return V
                    },
                    PAGES_DIR_ALIAS: function() {
                        return O
                    },
                    PRERENDER_REVALIDATE_HEADER: function() {
                        return o
                    },
                    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
                        return a
                    },
                    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
                        return U
                    },
                    ROOT_DIR_ALIAS: function() {
                        return C
                    },
                    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
                        return D
                    },
                    RSC_ACTION_ENCRYPTION_ALIAS: function() {
                        return M
                    },
                    RSC_ACTION_PROXY_ALIAS: function() {
                        return N
                    },
                    RSC_ACTION_VALIDATE_ALIAS: function() {
                        return I
                    },
                    RSC_CACHE_WRAPPER_ALIAS: function() {
                        return L
                    },
                    RSC_MOD_REF_PROXY_ALIAS: function() {
                        return j
                    },
                    RSC_PREFETCH_SUFFIX: function() {
                        return s
                    },
                    RSC_SEGMENTS_DIR_SUFFIX: function() {
                        return l
                    },
                    RSC_SEGMENT_SUFFIX: function() {
                        return u
                    },
                    RSC_SUFFIX: function() {
                        return c
                    },
                    SERVER_PROPS_EXPORT_ERROR: function() {
                        return $
                    },
                    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
                        return F
                    },
                    SERVER_PROPS_SSG_CONFLICT: function() {
                        return H
                    },
                    SERVER_RUNTIME: function() {
                        return Z
                    },
                    SSG_FALLBACK_EXPORT_ERROR: function() {
                        return Y
                    },
                    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
                        return q
                    },
                    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
                        return z
                    },
                    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
                        return G
                    },
                    WEBPACK_LAYERS: function() {
                        return Q
                    },
                    WEBPACK_RESOURCE_QUERIES: function() {
                        return ee
                    }
                });
            let r = "nxtP",
                i = "nxtI",
                n = "x-matched-path",
                o = "x-prerender-revalidate",
                a = "x-prerender-revalidate-if-generated",
                s = ".prefetch.rsc",
                l = ".segments",
                u = ".segment.rsc",
                c = ".rsc",
                d = ".action",
                f = ".json",
                p = ".meta",
                b = ".body",
                h = "x-next-cache-tags",
                m = "x-next-revalidated-tags",
                w = "x-next-revalidate-tag-token",
                g = "next-resume",
                v = 128,
                y = 256,
                _ = 1024,
                x = "_N_T_",
                S = 31536e3,
                k = 0xfffffffe,
                E = "middleware",
                P = `(?:src/)?${E}`,
                R = "instrumentation",
                O = "private-next-pages",
                A = "private-dot-next",
                C = "private-next-root-dir",
                T = "private-next-app-dir",
                j = "private-next-rsc-mod-ref-proxy",
                I = "private-next-rsc-action-validate",
                N = "private-next-rsc-server-reference",
                L = "private-next-rsc-cache-wrapper",
                M = "private-next-rsc-action-encryption",
                D = "private-next-rsc-action-client-wrapper",
                U = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
                q = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
                F = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
                H = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
                z = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
                $ = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
                B = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
                X = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
                G = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
                W = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
                V = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
                Y = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
                K = ["app", "pages", "components", "lib", "src"],
                Z = {
                    edge: "edge",
                    experimentalEdge: "experimental-edge",
                    nodejs: "nodejs"
                },
                J = {
                    shared: "shared",
                    reactServerComponents: "rsc",
                    serverSideRendering: "ssr",
                    actionBrowser: "action-browser",
                    api: "api",
                    middleware: "middleware",
                    instrument: "instrument",
                    edgeAsset: "edge-asset",
                    appPagesBrowser: "app-pages-browser"
                },
                Q = { ...J,
                    GROUP: {
                        builtinReact: [J.reactServerComponents, J.actionBrowser],
                        serverOnly: [J.reactServerComponents, J.actionBrowser, J.instrument, J.middleware],
                        neutralTarget: [J.api],
                        clientOnly: [J.serverSideRendering, J.appPagesBrowser],
                        bundled: [J.reactServerComponents, J.actionBrowser, J.serverSideRendering, J.appPagesBrowser, J.shared, J.instrument],
                        appPages: [J.reactServerComponents, J.serverSideRendering, J.appPagesBrowser, J.actionBrowser]
                    }
                },
                ee = {
                    edgeSSREntry: "__next_edge_ssr_entry__",
                    metadata: "__next_metadata__",
                    metadataRoute: "__next_metadata_route__",
                    metadataImageMeta: "__next_metadata_image_meta__"
                }
        },
        53711: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "after", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let i = r(7752);

            function n(e) {
                let t = i.workAsyncStorage.getStore();
                if (!t) throw Object.defineProperty(Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", {
                    value: "E468",
                    enumerable: !1
                });
                let {
                    afterContext: r
                } = t;
                return r.after(e)
            }
        },
        93453: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    Object.keys(e).forEach(function(r) {
                        "default" === r || Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
                            enumerable: !0,
                            get: function() {
                                return e[r]
                            }
                        })
                    })
                }(r(53711), t)
        },
        28338: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "connection", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let i = r(7752),
                n = r(12757),
                o = r(18261),
                a = r(69153),
                s = r(94144),
                l = r(65011);

            function u() {
                let e = i.workAsyncStorage.getStore(),
                    t = n.workUnitAsyncStorage.getStore();
                if (e) {
                    if (t && "after" === t.phase && !(0, l.isRequestAPICallableInsideAfter)()) throw Object.defineProperty(Error(`Route ${e.route} used "connection" inside "after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                        value: "E186",
                        enumerable: !1
                    });
                    if (e.forceStatic) return Promise.resolve(void 0);
                    if (t) {
                        if ("cache" === t.type) throw Object.defineProperty(Error(`Route ${e.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E111",
                            enumerable: !1
                        });
                        if ("unstable-cache" === t.type) throw Object.defineProperty(Error(`Route ${e.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                            value: "E1",
                            enumerable: !1
                        })
                    }
                    if (e.dynamicShouldError) throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                        value: "E562",
                        enumerable: !1
                    });
                    if (t) {
                        if ("prerender" === t.type) return (0, s.makeHangingPromise)(t.renderSignal, "`connection()`");
                        "prerender-ppr" === t.type ? (0, o.postponeWithTracking)(e.route, "connection", t.dynamicTracking) : "prerender-legacy" === t.type && (0, o.throwToInterruptStaticGeneration)("connection", e, t)
                    }(0, o.trackDynamicDataInDynamicRender)(e, t)
                }
                return Promise.resolve(void 0)
            }
        },
        66499: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "unstable_rootParams", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            let i = r(36405),
                n = r(18261),
                o = r(7752),
                a = r(12757),
                s = r(94144),
                l = r(65011),
                u = new WeakMap;
            async function c() {
                let e = o.workAsyncStorage.getStore(),
                    t = a.workUnitAsyncStorage.getStore();
                if (!e) throw Object.defineProperty(new i.InvariantError("Missing workStore in unstable_rootParams"), "__NEXT_ERROR_CODE", {
                    value: "E615",
                    enumerable: !1
                });
                let r = e.rootParams;
                if (t) switch (t.type) {
                    case "cache":
                        e.fallbackRouteParams;
                        break;
                    case "prerender":
                    case "prerender-ppr":
                    case "prerender-legacy":
                        return function(e, t, r) {
                            let i = t.fallbackRouteParams;
                            if (i) {
                                let o = !1;
                                for (let t in e)
                                    if (i.has(t)) {
                                        o = !0;
                                        break
                                    }
                                if (o) {
                                    if ("prerender" === r.type) {
                                        let t = u.get(e);
                                        if (t) return t;
                                        let i = (0, s.makeHangingPromise)(r.renderSignal, "`unstable_rootParams`");
                                        return u.set(e, i), i
                                    }
                                    return function(e, t, r, i) {
                                        let o = u.get(e);
                                        if (o) return o;
                                        let a = { ...e
                                            },
                                            s = Promise.resolve(a);
                                        return u.set(e, s), Object.keys(e).forEach(o => {
                                            l.wellKnownProperties.has(o) || (t.has(o) ? Object.defineProperty(a, o, {
                                                get() {
                                                    let e = (0, l.describeStringPropertyAccess)("unstable_rootParams", o);
                                                    "prerender-ppr" === i.type ? (0, n.postponeWithTracking)(r.route, e, i.dynamicTracking) : (0, n.throwToInterruptStaticGeneration)(e, r, i)
                                                },
                                                enumerable: !0
                                            }) : s[o] = e[o])
                                        }), s
                                    }(e, i, t, r)
                                }
                            }
                            return d(e)
                        }(r, e, t)
                }
                return d(r)
            }

            function d(e) {
                let t = u.get(e);
                if (t) return t;
                let r = Promise.resolve(e);
                return u.set(e, r), Object.keys(e).forEach(t => {
                    l.wellKnownProperties.has(t) || (r[t] = e[t])
                }), r
            }
        },
        67699: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    PageSignatureError: function() {
                        return r
                    },
                    RemovedPageError: function() {
                        return i
                    },
                    RemovedUAError: function() {
                        return n
                    }
                });
            class r extends Error {
                constructor({
                    page: e
                }) {
                    super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)
                }
            }
            class i extends Error {
                constructor() {
                    super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)
                }
            }
            class n extends Error {
                constructor() {
                    super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)
                }
            }
        },
        34737: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    ImageResponse: function() {
                        return i.ImageResponse
                    },
                    NextRequest: function() {
                        return n.NextRequest
                    },
                    NextResponse: function() {
                        return o.NextResponse
                    },
                    URLPattern: function() {
                        return s.URLPattern
                    },
                    after: function() {
                        return l.after
                    },
                    connection: function() {
                        return u.connection
                    },
                    unstable_rootParams: function() {
                        return c.unstable_rootParams
                    },
                    userAgent: function() {
                        return a.userAgent
                    },
                    userAgentFromString: function() {
                        return a.userAgentFromString
                    }
                });
            let i = r(7058),
                n = r(74642),
                o = r(18558),
                a = r(50098),
                s = r(78905),
                l = r(93453),
                u = r(28338),
                c = r(66499)
        },
        77070: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NextURL", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            let i = r(51628),
                n = r(4271),
                o = r(46328),
                a = r(49174),
                s = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;

            function l(e, t) {
                return new URL(String(e).replace(s, "localhost"), t && String(t).replace(s, "localhost"))
            }
            let u = Symbol("NextURLInternal");
            class c {
                constructor(e, t, r) {
                    let i, n;
                    "object" == typeof t && "pathname" in t || "string" == typeof t ? (i = t, n = r || {}) : n = r || t || {}, this[u] = {
                        url: l(e, i ? ? n.base),
                        options: n,
                        basePath: ""
                    }, this.analyze()
                }
                analyze() {
                    var e, t, r, n, s;
                    let l = (0, a.getNextPathnameInfo)(this[u].url.pathname, {
                            nextConfig: this[u].options.nextConfig,
                            parseData: !0,
                            i18nProvider: this[u].options.i18nProvider
                        }),
                        c = (0, o.getHostname)(this[u].url, this[u].options.headers);
                    this[u].domainLocale = this[u].options.i18nProvider ? this[u].options.i18nProvider.detectDomainLocale(c) : (0, i.detectDomainLocale)(null == (t = this[u].options.nextConfig) ? void 0 : null == (e = t.i18n) ? void 0 : e.domains, c);
                    let d = (null == (r = this[u].domainLocale) ? void 0 : r.defaultLocale) || (null == (s = this[u].options.nextConfig) ? void 0 : null == (n = s.i18n) ? void 0 : n.defaultLocale);
                    this[u].url.pathname = l.pathname, this[u].defaultLocale = d, this[u].basePath = l.basePath ? ? "", this[u].buildId = l.buildId, this[u].locale = l.locale ? ? d, this[u].trailingSlash = l.trailingSlash
                }
                formatPathname() {
                    return (0, n.formatNextPathnameInfo)({
                        basePath: this[u].basePath,
                        buildId: this[u].buildId,
                        defaultLocale: this[u].options.forceLocale ? void 0 : this[u].defaultLocale,
                        locale: this[u].locale,
                        pathname: this[u].url.pathname,
                        trailingSlash: this[u].trailingSlash
                    })
                }
                formatSearch() {
                    return this[u].url.search
                }
                get buildId() {
                    return this[u].buildId
                }
                set buildId(e) {
                    this[u].buildId = e
                }
                get locale() {
                    return this[u].locale ? ? ""
                }
                set locale(e) {
                    var t, r;
                    if (!this[u].locale || !(null == (r = this[u].options.nextConfig) ? void 0 : null == (t = r.i18n) ? void 0 : t.locales.includes(e))) throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e}"`), "__NEXT_ERROR_CODE", {
                        value: "E597",
                        enumerable: !1
                    });
                    this[u].locale = e
                }
                get defaultLocale() {
                    return this[u].defaultLocale
                }
                get domainLocale() {
                    return this[u].domainLocale
                }
                get searchParams() {
                    return this[u].url.searchParams
                }
                get host() {
                    return this[u].url.host
                }
                set host(e) {
                    this[u].url.host = e
                }
                get hostname() {
                    return this[u].url.hostname
                }
                set hostname(e) {
                    this[u].url.hostname = e
                }
                get port() {
                    return this[u].url.port
                }
                set port(e) {
                    this[u].url.port = e
                }
                get protocol() {
                    return this[u].url.protocol
                }
                set protocol(e) {
                    this[u].url.protocol = e
                }
                get href() {
                    let e = this.formatPathname(),
                        t = this.formatSearch();
                    return `${this.protocol}//${this.host}${e}${t}${this.hash}`
                }
                set href(e) {
                    this[u].url = l(e), this.analyze()
                }
                get origin() {
                    return this[u].url.origin
                }
                get pathname() {
                    return this[u].url.pathname
                }
                set pathname(e) {
                    this[u].url.pathname = e
                }
                get hash() {
                    return this[u].url.hash
                }
                set hash(e) {
                    this[u].url.hash = e
                }
                get search() {
                    return this[u].url.search
                }
                set search(e) {
                    this[u].url.search = e
                }
                get password() {
                    return this[u].url.password
                }
                set password(e) {
                    this[u].url.password = e
                }
                get username() {
                    return this[u].url.username
                }
                set username(e) {
                    this[u].url.username = e
                }
                get basePath() {
                    return this[u].basePath
                }
                set basePath(e) {
                    this[u].basePath = e.startsWith("/") ? e : `/${e}`
                }
                toString() {
                    return this.href
                }
                toJSON() {
                    return this.href
                }[Symbol.for("edge-runtime.inspect.custom")]() {
                    return {
                        href: this.href,
                        origin: this.origin,
                        protocol: this.protocol,
                        username: this.username,
                        password: this.password,
                        host: this.host,
                        hostname: this.hostname,
                        port: this.port,
                        pathname: this.pathname,
                        search: this.search,
                        searchParams: this.searchParams,
                        hash: this.hash
                    }
                }
                clone() {
                    return new c(String(this), this[u].options)
                }
            }
        },
        91180: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    RequestCookies: function() {
                        return i.RequestCookies
                    },
                    ResponseCookies: function() {
                        return i.ResponseCookies
                    },
                    stringifyCookie: function() {
                        return i.stringifyCookie
                    }
                });
            let i = r(59811)
        },
        7058: (e, t) => {
            "use strict";

            function r() {
                throw Object.defineProperty(Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'), "__NEXT_ERROR_CODE", {
                    value: "E183",
                    enumerable: !1
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageResponse", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        74642: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    INTERNALS: function() {
                        return s
                    },
                    NextRequest: function() {
                        return l
                    }
                });
            let i = r(77070),
                n = r(81936),
                o = r(67699),
                a = r(91180),
                s = Symbol("internal request");
            class l extends Request {
                constructor(e, t = {}) {
                    let r = "string" != typeof e && "url" in e ? e.url : String(e);
                    (0, n.validateURL)(r), e instanceof Request ? super(e, t) : super(r, t);
                    let o = new i.NextURL(r, {
                        headers: (0, n.toNodeOutgoingHttpHeaders)(this.headers),
                        nextConfig: t.nextConfig
                    });
                    this[s] = {
                        cookies: new a.RequestCookies(this.headers),
                        nextUrl: o,
                        url: o.toString()
                    }
                }[Symbol.for("edge-runtime.inspect.custom")]() {
                    return {
                        cookies: this.cookies,
                        nextUrl: this.nextUrl,
                        url: this.url,
                        bodyUsed: this.bodyUsed,
                        cache: this.cache,
                        credentials: this.credentials,
                        destination: this.destination,
                        headers: Object.fromEntries(this.headers),
                        integrity: this.integrity,
                        keepalive: this.keepalive,
                        method: this.method,
                        mode: this.mode,
                        redirect: this.redirect,
                        referrer: this.referrer,
                        referrerPolicy: this.referrerPolicy,
                        signal: this.signal
                    }
                }
                get cookies() {
                    return this[s].cookies
                }
                get nextUrl() {
                    return this[s].nextUrl
                }
                get page() {
                    throw new o.RemovedPageError
                }
                get ua() {
                    throw new o.RemovedUAError
                }
                get url() {
                    return this[s].url
                }
            }
        },
        18558: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NextResponse", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let i = r(91180),
                n = r(77070),
                o = r(81936),
                a = r(62891),
                s = r(91180),
                l = Symbol("internal response"),
                u = new Set([301, 302, 303, 307, 308]);

            function c(e, t) {
                var r;
                if (null == e ? void 0 : null == (r = e.request) ? void 0 : r.headers) {
                    if (!(e.request.headers instanceof Headers)) throw Object.defineProperty(Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", {
                        value: "E119",
                        enumerable: !1
                    });
                    let r = [];
                    for (let [i, n] of e.request.headers) t.set("x-middleware-request-" + i, n), r.push(i);
                    t.set("x-middleware-override-headers", r.join(","))
                }
            }
            class d extends Response {
                constructor(e, t = {}) {
                    super(e, t);
                    let r = this.headers,
                        u = new Proxy(new s.ResponseCookies(r), {
                            get(e, n, o) {
                                switch (n) {
                                    case "delete":
                                    case "set":
                                        return (...o) => {
                                            let a = Reflect.apply(e[n], e, o),
                                                l = new Headers(r);
                                            return a instanceof s.ResponseCookies && r.set("x-middleware-set-cookie", a.getAll().map(e => (0, i.stringifyCookie)(e)).join(",")), c(t, l), a
                                        };
                                    default:
                                        return a.ReflectAdapter.get(e, n, o)
                                }
                            }
                        });
                    this[l] = {
                        cookies: u,
                        url: t.url ? new n.NextURL(t.url, {
                            headers: (0, o.toNodeOutgoingHttpHeaders)(r),
                            nextConfig: t.nextConfig
                        }) : void 0
                    }
                }[Symbol.for("edge-runtime.inspect.custom")]() {
                    return {
                        cookies: this.cookies,
                        url: this.url,
                        body: this.body,
                        bodyUsed: this.bodyUsed,
                        headers: Object.fromEntries(this.headers),
                        ok: this.ok,
                        redirected: this.redirected,
                        status: this.status,
                        statusText: this.statusText,
                        type: this.type
                    }
                }
                get cookies() {
                    return this[l].cookies
                }
                static json(e, t) {
                    let r = Response.json(e, t);
                    return new d(r.body, r)
                }
                static redirect(e, t) {
                    let r = "number" == typeof t ? t : (null == t ? void 0 : t.status) ? ? 307;
                    if (!u.has(r)) throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", {
                        value: "E529",
                        enumerable: !1
                    });
                    let i = "object" == typeof t ? t : {},
                        n = new Headers(null == i ? void 0 : i.headers);
                    return n.set("Location", (0, o.validateURL)(e)), new d(null, { ...i,
                        headers: n,
                        status: r
                    })
                }
                static rewrite(e, t) {
                    let r = new Headers(null == t ? void 0 : t.headers);
                    return r.set("x-middleware-rewrite", (0, o.validateURL)(e)), c(t, r), new d(null, { ...t,
                        headers: r
                    })
                }
                static next(e) {
                    let t = new Headers(null == e ? void 0 : e.headers);
                    return t.set("x-middleware-next", "1"), c(e, t), new d(null, { ...e,
                        headers: t
                    })
                }
            }
        },
        78905: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "URLPattern", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = "undefined" == typeof URLPattern ? void 0 : URLPattern
        },
        50098: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    isBot: function() {
                        return n
                    },
                    userAgent: function() {
                        return a
                    },
                    userAgentFromString: function() {
                        return o
                    }
                });
            let i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(48899));

            function n(e) {
                return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)
            }

            function o(e) {
                return { ...(0, i.default)(e),
                    isBot: void 0 !== e && n(e)
                }
            }

            function a({
                headers: e
            }) {
                return o(e.get("user-agent") || void 0)
            }
        },
        81936: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    fromNodeOutgoingHttpHeaders: function() {
                        return n
                    },
                    normalizeNextQueryParam: function() {
                        return l
                    },
                    splitCookiesString: function() {
                        return o
                    },
                    toNodeOutgoingHttpHeaders: function() {
                        return a
                    },
                    validateURL: function() {
                        return s
                    }
                });
            let i = r(82569);

            function n(e) {
                let t = new Headers;
                for (let [r, i] of Object.entries(e))
                    for (let e of Array.isArray(i) ? i : [i]) void 0 !== e && ("number" == typeof e && (e = e.toString()), t.append(r, e));
                return t
            }

            function o(e) {
                var t, r, i, n, o, a = [],
                    s = 0;

                function l() {
                    for (; s < e.length && /\s/.test(e.charAt(s));) s += 1;
                    return s < e.length
                }
                for (; s < e.length;) {
                    for (t = s, o = !1; l();)
                        if ("," === (r = e.charAt(s))) {
                            for (i = s, s += 1, l(), n = s; s < e.length && "=" !== (r = e.charAt(s)) && ";" !== r && "," !== r;) s += 1;
                            s < e.length && "=" === e.charAt(s) ? (o = !0, s = n, a.push(e.substring(t, i)), t = s) : s = i + 1
                        } else s += 1;
                    (!o || s >= e.length) && a.push(e.substring(t, e.length))
                }
                return a
            }

            function a(e) {
                let t = {},
                    r = [];
                if (e)
                    for (let [i, n] of e.entries()) "set-cookie" === i.toLowerCase() ? (r.push(...o(n)), t[i] = 1 === r.length ? r[0] : r) : t[i] = n;
                return t
            }

            function s(e) {
                try {
                    return String(new URL(String(e)))
                } catch (t) {
                    throw Object.defineProperty(Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
                        cause: t
                    }), "__NEXT_ERROR_CODE", {
                        value: "E61",
                        enumerable: !1
                    })
                }
            }

            function l(e, t) {
                for (let r of [i.NEXT_QUERY_PARAM_PREFIX, i.NEXT_INTERCEPTION_MARKER_PREFIX]) e !== r && e.startsWith(r) && t(e.substring(r.length))
            }
        },
        813: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let i = r(93e3)._(r(88949));

            function n(e, t) {
                var r;
                let n = {};
                "function" == typeof e && (n.loader = e);
                let o = { ...n,
                    ...t
                };
                return (0, i.default)({ ...o,
                    modules: null == (r = o.loadableGenerated) ? void 0 : r.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        46328: (e, t) => {
            "use strict";

            function r(e, t) {
                let r;
                if ((null == t ? void 0 : t.host) && !Array.isArray(t.host)) r = t.host.toString().split(":", 1)[0];
                else {
                    if (!e.hostname) return;
                    r = e.hostname
                }
                return r.toLowerCase()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getHostname", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        51628: (e, t) => {
            "use strict";

            function r(e, t, r) {
                if (e)
                    for (let o of (r && (r = r.toLowerCase()), e)) {
                        var i, n;
                        if (t === (null == (i = o.domain) ? void 0 : i.split(":", 1)[0].toLowerCase()) || r === o.defaultLocale.toLowerCase() || (null == (n = o.locales) ? void 0 : n.some(e => e.toLowerCase() === r))) return o
                    }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "detectDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        4873: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = new WeakMap;

            function i(e, t) {
                let i;
                if (!t) return {
                    pathname: e
                };
                let n = r.get(t);
                n || (n = t.map(e => e.toLowerCase()), r.set(t, n));
                let o = e.split("/", 2);
                if (!o[1]) return {
                    pathname: e
                };
                let a = o[1].toLowerCase(),
                    s = n.indexOf(a);
                return s < 0 ? {
                    pathname: e
                } : (i = t[s], {
                    pathname: e = e.slice(i.length + 1) || "/",
                    detectedLocale: i
                })
            }
        },
        99034: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let i = r(50806);

            function n(e) {
                let {
                    reason: t,
                    children: r
                } = e;
                if ("undefined" == typeof window) throw Object.defineProperty(new i.BailoutToCSRError(t), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1
                });
                return r
            }
        },
        88949: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let i = r(154),
                n = r(98930),
                o = r(99034),
                a = r(4023);

            function s(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            let l = {
                    loader: () => Promise.resolve(s(() => null)),
                    loading: null,
                    ssr: !0
                },
                u = function(e) {
                    let t = { ...l,
                            ...e
                        },
                        r = (0, n.lazy)(() => t.loader().then(s)),
                        u = t.loading;

                    function c(e) {
                        let s = u ? (0, i.jsx)(u, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            l = !t.ssr || !!t.loading,
                            c = l ? n.Suspense : n.Fragment,
                            d = t.ssr ? (0, i.jsxs)(i.Fragment, {
                                children: ["undefined" == typeof window ? (0, i.jsx)(a.PreloadChunks, {
                                    moduleIds: t.modules
                                }) : null, (0, i.jsx)(r, { ...e
                                })]
                            }) : (0, i.jsx)(o.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, i.jsx)(r, { ...e
                                })
                            });
                        return (0, i.jsx)(c, { ...l ? {
                                fallback: s
                            } : {},
                            children: d
                        })
                    }
                    return c.displayName = "LoadableComponent", c
                }
        },
        4023: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let i = r(154),
                n = r(51439),
                o = r(7752),
                a = r(30885);

            function s(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let r = o.workAsyncStorage.getStore();
                if (void 0 === r) return null;
                let s = [];
                if (r.reactLoadableManifest && t) {
                    let e = r.reactLoadableManifest;
                    for (let r of t) {
                        if (!e[r]) continue;
                        let t = e[r].files;
                        s.push(...t)
                    }
                }
                return 0 === s.length ? null : (0, i.jsx)(i.Fragment, {
                    children: s.map(e => {
                        let t = r.assetPrefix + "/_next/" + (0, a.encodeURIPath)(e);
                        return e.endsWith(".css") ? (0, i.jsx)("link", {
                            precedence: "dynamic",
                            href: t,
                            rel: "stylesheet",
                            as: "style"
                        }, e) : ((0, n.preload)(t, {
                            as: "script",
                            fetchPriority: "low"
                        }), null)
                    })
                })
            }
        },
        52518: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addLocale", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let i = r(38610),
                n = r(75163);

            function o(e, t, r, o) {
                if (!t || t === r) return e;
                let a = e.toLowerCase();
                return !o && ((0, n.pathHasPrefix)(a, "/api") || (0, n.pathHasPrefix)(a, "/" + t.toLowerCase())) ? e : (0, i.addPathPrefix)(e, "/" + t)
            }
        },
        23123: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addPathSuffix", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let i = r(53923);

            function n(e, t) {
                if (!e.startsWith("/") || !t) return e;
                let {
                    pathname: r,
                    query: n,
                    hash: o
                } = (0, i.parsePath)(e);
                return "" + r + t + n + o
            }
        },
        4271: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "formatNextPathnameInfo", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let i = r(24049),
                n = r(38610),
                o = r(23123),
                a = r(52518);

            function s(e) {
                let t = (0, a.addLocale)(e.pathname, e.locale, e.buildId ? void 0 : e.defaultLocale, e.ignorePrefix);
                return (e.buildId || !e.trailingSlash) && (t = (0, i.removeTrailingSlash)(t)), e.buildId && (t = (0, o.addPathSuffix)((0, n.addPathPrefix)(t, "/_next/data/" + e.buildId), "/" === e.pathname ? "index.json" : ".json")), t = (0, n.addPathPrefix)(t, e.basePath), !e.buildId && e.trailingSlash ? t.endsWith("/") ? t : (0, o.addPathSuffix)(t, "/") : (0, i.removeTrailingSlash)(t)
            }
        },
        49174: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getNextPathnameInfo", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let i = r(4873),
                n = r(52373),
                o = r(75163);

            function a(e, t) {
                var r, a;
                let {
                    basePath: s,
                    i18n: l,
                    trailingSlash: u
                } = null != (r = t.nextConfig) ? r : {}, c = {
                    pathname: e,
                    trailingSlash: "/" !== e ? e.endsWith("/") : u
                };
                s && (0, o.pathHasPrefix)(c.pathname, s) && (c.pathname = (0, n.removePathPrefix)(c.pathname, s), c.basePath = s);
                let d = c.pathname;
                if (c.pathname.startsWith("/_next/data/") && c.pathname.endsWith(".json")) {
                    let e = c.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"),
                        r = e[0];
                    c.buildId = r, d = "index" !== e[1] ? "/" + e.slice(1).join("/") : "/", !0 === t.parseData && (c.pathname = d)
                }
                if (l) {
                    let e = t.i18nProvider ? t.i18nProvider.analyze(c.pathname) : (0, i.normalizeLocalePath)(c.pathname, l.locales);
                    c.locale = e.detectedLocale, c.pathname = null != (a = e.pathname) ? a : c.pathname, !e.detectedLocale && c.buildId && (e = t.i18nProvider ? t.i18nProvider.analyze(d) : (0, i.normalizeLocalePath)(d, l.locales)).detectedLocale && (c.locale = e.detectedLocale)
                }
                return c
            }
        },
        52373: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "removePathPrefix", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let i = r(75163);

            function n(e, t) {
                if (!(0, i.pathHasPrefix)(e, t)) return e;
                let r = e.slice(t.length);
                return r.startsWith("/") ? r : "/" + r
            }
        },
        37180: (e, t, r) => {
            "use strict";
            var i = (function(e) {
                    e && "object" == typeof e && "default" in e && e.default
                }(r(98930)), r(95073)),
                n = new i,
                o = n.getBrowser(),
                a = n.getCPU(),
                s = n.getDevice(),
                l = n.getEngine(),
                u = n.getOS(),
                c = n.getUA(),
                d = {
                    Mobile: "mobile",
                    Tablet: "tablet",
                    SmartTv: "smarttv",
                    Console: "console",
                    Wearable: "wearable",
                    Embedded: "embedded",
                    Browser: void 0
                },
                f = {
                    Chrome: "Chrome",
                    Firefox: "Firefox",
                    Opera: "Opera",
                    Yandex: "Yandex",
                    Safari: "Safari",
                    InternetExplorer: "Internet Explorer",
                    Edge: "Edge",
                    Chromium: "Chromium",
                    Ie: "IE",
                    MobileSafari: "Mobile Safari",
                    MIUI: "MIUI Browser",
                    SamsungBrowser: "Samsung Browser"
                },
                p = {
                    IOS: "iOS",
                    Android: "Android",
                    WindowsPhone: "Windows Phone",
                    Windows: "Windows",
                    MAC_OS: "Mac OS"
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                    return e || t
                },
                h = function() {
                    return !!("undefined" != typeof window && (window.navigator || navigator)) && (window.navigator || navigator)
                },
                m = function(e) {
                    var t = h();
                    return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
                },
                w = function(e) {
                    return e.type === d.Browser
                },
                g = function(e) {
                    return e.name === f.Edge
                },
                v = function(e) {
                    return "string" == typeof e && -1 !== e.indexOf("Edg/")
                },
                y = function() {
                    return m("iPad")
                };
            s.type, d.SmartTv, s.type, d.Console, s.type, d.Wearable, s.type, d.Embedded, o.name === f.MobileSafari || y(), o.name, f.Chromium,
                function(e) {
                    var t = e.type;
                    return t === d.Mobile || t === d.Tablet
                }(s) || y(), s.type, d.Mobile, s.type === d.Tablet || y(), w(s);
            var _ = w(s),
                x = (u.name, p.Android, u.name, p.WindowsPhone, u.name === p.IOS || y(), o.name, f.Chrome, o.name, f.Firefox, function(e) {
                    var t = e.name;
                    return t === f.Safari || t === f.MobileSafari
                }(o));
            o.name, f.Opera,
                function(e) {
                    var t = e.name;
                    t === f.InternetExplorer || f.Ie
                }(o), b(u.version), b(u.name), b(o.version), b(o.major), b(o.name), b(s.vendor), b(s.model), b(l.name), b(l.version), b(c), g(o) || v(c), o.name, f.Yandex, b(s.type, "browser"),
                function() {
                    var e = h();
                    e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
                }(), y(), m("iPhone"), m("iPod"),
                function() {
                    var e = h(),
                        t = e && e.userAgent && e.userAgent.toLowerCase();
                    "string" == typeof t && /electron/.test(t)
                }(), v(c), g(o) && v(c), u.name, p.Windows, u.name, p.MAC_OS, o.name, f.MIUI, o.name, f.SamsungBrowser, t.xl = _, t.nr = x
        },
        95073: function(e, t, r) {
            var i;
            ! function(n, o) {
                "use strict";
                var a = "function",
                    s = "undefined",
                    l = "object",
                    u = "string",
                    c = "major",
                    d = "model",
                    f = "name",
                    p = "type",
                    b = "vendor",
                    h = "version",
                    m = "architecture",
                    w = "console",
                    g = "mobile",
                    v = "tablet",
                    y = "smarttv",
                    _ = "wearable",
                    x = "embedded",
                    S = "Amazon",
                    k = "Apple",
                    E = "ASUS",
                    P = "BlackBerry",
                    R = "Browser",
                    O = "Chrome",
                    A = "Firefox",
                    C = "Google",
                    T = "Huawei",
                    j = "Microsoft",
                    I = "Motorola",
                    N = "Opera",
                    L = "Samsung",
                    M = "Sharp",
                    D = "Sony",
                    U = "Xiaomi",
                    q = "Zebra",
                    F = "Facebook",
                    H = "Chromium OS",
                    z = "Mac OS",
                    $ = " Browser",
                    B = function(e, t) {
                        var r = {};
                        for (var i in e) t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
                        return r
                    },
                    X = function(e) {
                        for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                        return t
                    },
                    G = function(e, t) {
                        return typeof e === u && -1 !== W(t).indexOf(W(e))
                    },
                    W = function(e) {
                        return e.toLowerCase()
                    },
                    V = function(e, t) {
                        if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
                    },
                    Y = function(e, t) {
                        for (var r, i, n, s, u, c, d = 0; d < t.length && !u;) {
                            var f = t[d],
                                p = t[d + 1];
                            for (r = i = 0; r < f.length && !u && f[r];)
                                if (u = f[r++].exec(e))
                                    for (n = 0; n < p.length; n++) c = u[++i], typeof(s = p[n]) === l && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : void 0 : this[s[0]] = c ? s[1].call(this, c, s[2]) : void 0 : 4 === s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : void 0) : this[s] = c || o;
                            d += 2
                        }
                    },
                    K = function(e, t) {
                        for (var r in t)
                            if (typeof t[r] === l && t[r].length > 0) {
                                for (var i = 0; i < t[r].length; i++)
                                    if (G(t[r][i], e)) return "?" === r ? o : r
                            } else if (G(t[r], e)) return "?" === r ? o : r;
                        return t.hasOwnProperty("*") ? t["*"] : e
                    },
                    Z = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    J = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [h, [f, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [h, [f, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [f, h],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [h, [f, N + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [h, [f, N + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [h, [f, N]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [h, [f, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [f, h],
                            [/quark(?:pc)?\/([-\w\.]+)/i],
                            [h, [f, "Quark"]],
                            [/\bddg\/([\w\.]+)/i],
                            [h, [f, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [h, [f, "UC" + R]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [h, [f, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [h, [f, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [h, [f, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [h, [f, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [h, [f, "Smart Lenovo " + R]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1 Secure " + R], h
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [h, [f, A + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [h, [f, N + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [h, [f, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [h, [f, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [h, [f, N + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [h, [f, "MIUI " + R]],
                            [/fxios\/([-\w\.]+)/i],
                            [h, [f, A]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [f, "360" + $]
                            ],
                            [/\b(qq)\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1Browser"], h
                            ],
                            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1" + $], h
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [h, [f, L + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [f, /_/g, " "], h
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [h, [f, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [f, "Sogou Mobile"], h
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [f, h],
                            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                            [f],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [f, F], h
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [f, h],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [h, [f, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [h, [f, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [h, [f, O + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [f, O + " WebView"], h
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [h, [f, "Android " + R]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [f, h],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [h, [f, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [h, f],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [f, [h, K, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [f, h],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [f, "Netscape"], h
                            ],
                            [/(wolvic)\/([\w\.]+)/i],
                            [f, h],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [h, [f, A + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [f, [h, /_/g, "."]],
                            [/(cobalt)\/([\w\.]+)/i],
                            [f, [h, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [m, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [m, W]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [m, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [m, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [m, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [m, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [m, /ower/, "", W]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [m, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [m, W]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [b, L],
                                [p, v]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                            [d, [b, L],
                                [p, g]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [b, k],
                                [p, g]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [b, k],
                                [p, v]
                            ],
                            [/(macintosh);/i],
                            [d, [b, k]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [b, M],
                                [p, g]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [d, [b, T],
                                [p, v]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [d, [b, T],
                                [p, g]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [b, U],
                                [p, g]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [b, U],
                                [p, v]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [b, "OPPO"],
                                [p, g]
                            ],
                            [/\b(opd2\d{3}a?) bui/i],
                            [d, [b, "OPPO"],
                                [p, v]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [b, "Vivo"],
                                [p, g]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [b, "Realme"],
                                [p, g]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [d, [b, I],
                                [p, g]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [b, I],
                                [p, v]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [b, "LG"],
                                [p, v]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [d, [b, "LG"],
                                [p, g]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [d, [b, "Lenovo"],
                                [p, v]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [d, /_/g, " "],
                                [b, "Nokia"],
                                [p, g]
                            ],
                            [/(pixel c)\b/i],
                            [d, [b, C],
                                [p, v]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [b, C],
                                [p, g]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [b, D],
                                [p, g]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [b, D],
                                [p, v]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [b, "OnePlus"],
                                [p, g]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [b, S],
                                [p, v]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [b, S],
                                [p, g]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, b, [p, v]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [b, P],
                                [p, g]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [b, E],
                                [p, v]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [b, E],
                                [p, g]
                            ],
                            [/(nexus 9)/i],
                            [d, [b, "HTC"],
                                [p, v]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [b, [d, /_/g, " "],
                                [p, g]
                            ],
                            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                            [d, [b, "TCL"],
                                [p, v]
                            ],
                            [/(itel) ((\w+))/i],
                            [
                                [b, W], d, [p, K, {
                                    tablet: ["p10001l", "w7001"],
                                    "*": "mobile"
                                }]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [b, "Acer"],
                                [p, v]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [b, "Meizu"],
                                [p, g]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [b, "Ulefone"],
                                [p, g]
                            ],
                            [/droid.+; (a(?:015|06[35]|142p?))/i],
                            [d, [b, "Nothing"],
                                [p, g]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [b, d, [p, g]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [b, d, [p, v]],
                            [/(surface duo)/i],
                            [d, [b, j],
                                [p, v]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [b, "Fairphone"],
                                [p, g]
                            ],
                            [/(u304aa)/i],
                            [d, [b, "AT&T"],
                                [p, g]
                            ],
                            [/\bsie-(\w*)/i],
                            [d, [b, "Siemens"],
                                [p, g]
                            ],
                            [/\b(rct\w+) b/i],
                            [d, [b, "RCA"],
                                [p, v]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [b, "Dell"],
                                [p, v]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [b, "Verizon"],
                                [p, v]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [b, "Barnes & Noble"],
                                [p, v]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [b, "NuVision"],
                                [p, v]
                            ],
                            [/\b(k88) b/i],
                            [d, [b, "ZTE"],
                                [p, v]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [d, [b, "ZTE"],
                                [p, g]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [b, "Swiss"],
                                [p, g]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [d, [b, "Swiss"],
                                [p, v]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [b, "Zeki"],
                                [p, v]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [b, "Dragon Touch"], d, [p, v]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [b, "Insignia"],
                                [p, v]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [b, "NextBook"],
                                [p, v]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [b, "Voice"], d, [p, g]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [b, "LvTel"], d, [p, g]
                            ],
                            [/\b(ph-1) /i],
                            [d, [b, "Essential"],
                                [p, g]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [b, "Envizen"],
                                [p, v]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [b, "MachSpeed"],
                                [p, v]
                            ],
                            [/\btu_(1491) b/i],
                            [d, [b, "Rotor"],
                                [p, v]
                            ],
                            [/(shield[\w ]+) b/i],
                            [d, [b, "Nvidia"],
                                [p, v]
                            ],
                            [/(sprint) (\w+)/i],
                            [b, d, [p, g]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [b, j],
                                [p, g]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [b, q],
                                [p, v]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [b, q],
                                [p, g]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [b, [p, y]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [b, L],
                                [p, y]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [b, "LG"],
                                [p, y]
                            ],
                            [/(apple) ?tv/i],
                            [b, [d, k + " TV"],
                                [p, y]
                            ],
                            [/crkey/i],
                            [
                                [d, O + "cast"],
                                [b, C],
                                [p, y]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [b, S],
                                [p, y]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [b, M],
                                [p, y]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [b, D],
                                [p, y]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [d, [b, U],
                                [p, y]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [b, d, [p, y]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [b, V],
                                [d, V],
                                [p, y]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [p, y]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [b, d, [p, w]],
                            [/droid.+; (shield) bui/i],
                            [d, [b, "Nvidia"],
                                [p, w]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [d, [b, D],
                                [p, w]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [b, j],
                                [p, w]
                            ],
                            [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                            [d, [b, L],
                                [p, _]
                            ],
                            [/((pebble))app/i],
                            [b, d, [p, _]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [b, k],
                                [p, _]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [b, C],
                                [p, _]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [b, q],
                                [p, _]
                            ],
                            [/(quest( \d| pro)?)/i],
                            [d, [b, F],
                                [p, _]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [b, [p, x]],
                            [/(aeobc)\b/i],
                            [d, [b, S],
                                [p, x]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [p, g]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [p, v]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [p, v]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [p, g]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [d, [b, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [h, [f, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [h, [f, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [f, h],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [h, f]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [f, h],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [f, [h, K, Z]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [h, K, Z],
                                [f, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [h, /_/g, "."],
                                [f, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [f, z],
                                [h, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [h, f],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [f, h],
                            [/\(bb(10);/i],
                            [h, [f, P]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [h, [f, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [h, [f, A + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [h, [f, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [h, [f, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [h, [f, O + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [f, H], h
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [f, h],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [f, "Solaris"], h
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [f, h]
                        ]
                    },
                    Q = function(e, t) {
                        if (typeof e === l && (t = e, e = o), !(this instanceof Q)) return new Q(e, t).getResult();
                        var r = typeof n !== s && n.navigator ? n.navigator : o,
                            i = e || (r && r.userAgent ? r.userAgent : ""),
                            w = r && r.userAgentData ? r.userAgentData : o,
                            y = t ? B(J, t) : J,
                            _ = r && r.userAgent == i;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[f] = o, t[h] = o, Y.call(t, i, y.browser), t[c] = typeof(e = t[h]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, _ && r && r.brave && typeof r.brave.isBrave == a && (t[f] = "Brave"), t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[m] = o, Y.call(e, i, y.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[b] = o, e[d] = o, e[p] = o, Y.call(e, i, y.device), _ && !e[p] && w && w.mobile && (e[p] = g), _ && "Macintosh" == e[d] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[d] = "iPad", e[p] = v), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[f] = o, e[h] = o, Y.call(e, i, y.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[f] = o, e[h] = o, Y.call(e, i, y.os), _ && !e[f] && w && w.platform && "Unknown" != w.platform && (e[f] = w.platform.replace(/chrome os/i, H).replace(/macos/i, z)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return i
                        }, this.setUA = function(e) {
                            return i = typeof e === u && e.length > 500 ? V(e, 500) : e, this
                        }, this.setUA(i), this
                    };
                Q.VERSION = "1.0.39", Q.BROWSER = X([f, h, c]), Q.CPU = X([m]), Q.DEVICE = X([d, b, p, w, g, y, v, _, x]), Q.ENGINE = Q.OS = X([f, h]), typeof t !== s ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : r.amdO ? o !== (i = (function() {
                    return Q
                }).call(t, r, t, e)) && (e.exports = i) : typeof n !== s && (n.UAParser = Q);
                var ee = typeof n !== s && (n.jQuery || n.Zepto);
                if (ee && !ee.ua) {
                    var et = new Q;
                    ee.ua = et.getResult(), ee.ua.get = function() {
                        return et.getUA()
                    }, ee.ua.set = function(e) {
                        et.setUA(e);
                        var t = et.getResult();
                        for (var r in t) ee.ua[r] = t[r]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        79168: (e, t, r) => {
            "use strict";
            ! function() {
                function e(t) {
                    if (null == t) return null;
                    if ("function" == typeof t) return t.$$typeof === N ? null : t.displayName || t.name || null;
                    if ("string" == typeof t) return t;
                    switch (t) {
                        case h:
                            return "Fragment";
                        case b:
                            return "Portal";
                        case w:
                            return "Profiler";
                        case m:
                            return "StrictMode";
                        case O:
                            return "Suspense";
                        case A:
                            return "SuspenseList"
                    }
                    if ("object" == typeof t) switch ("number" == typeof t.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), t.$$typeof) {
                        case P:
                            return (t.displayName || "Context") + ".Provider";
                        case E:
                            return (t._context.displayName || "Context") + ".Consumer";
                        case R:
                            var r = t.render;
                            return (t = t.displayName) || (t = "" !== (t = r.displayName || r.name || "") ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                        case C:
                            return null !== (r = t.displayName || null) ? r : e(t.type) || "Memo";
                        case T:
                            r = t._payload, t = t._init;
                            try {
                                return e(t(r))
                            } catch (e) {}
                    }
                    return null
                }

                function i(e) {
                    try {
                        var t = !1
                    } catch (e) {
                        t = !0
                    }
                    if (t) {
                        var r = (t = console).error,
                            i = "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
                        return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), "" + e
                    }
                }

                function n() {}

                function o(e) {
                    if (void 0 === H) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        H = t && t[1] || "", z = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
                    }
                    return "\n" + H + e + z
                }

                function a(e, t) {
                    if (!e || B) return "";
                    var r = X.get(e);
                    if (void 0 !== r) return r;
                    B = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
                    var i = null;
                    i = L.H, L.H = null,
                        function() {
                            if (0 === F) {
                                g = console.log, v = console.info, y = console.warn, _ = console.error, x = console.group, S = console.groupCollapsed, k = console.groupEnd;
                                var e = {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n,
                                    writable: !0
                                };
                                Object.defineProperties(console, {
                                    info: e,
                                    log: e,
                                    warn: e,
                                    error: e,
                                    group: e,
                                    groupCollapsed: e,
                                    groupEnd: e
                                })
                            }
                            F++
                        }();
                    try {
                        var a = {
                            DetermineComponentFrameRoot: function() {
                                try {
                                    if (t) {
                                        var r = function() {
                                            throw Error()
                                        };
                                        if (Object.defineProperty(r.prototype, "props", {
                                                set: function() {
                                                    throw Error()
                                                }
                                            }), "object" == typeof Reflect && Reflect.construct) {
                                            try {
                                                Reflect.construct(r, [])
                                            } catch (e) {
                                                var i = e
                                            }
                                            Reflect.construct(e, [], r)
                                        } else {
                                            try {
                                                r.call()
                                            } catch (e) {
                                                i = e
                                            }
                                            e.call(r.prototype)
                                        }
                                    } else {
                                        try {
                                            throw Error()
                                        } catch (e) {
                                            i = e
                                        }(r = e()) && "function" == typeof r.catch && r.catch(function() {})
                                    }
                                } catch (e) {
                                    if (e && i && "string" == typeof e.stack) return [e.stack, i.stack]
                                }
                                return [null, null]
                            }
                        };
                        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                        var s = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                        s && s.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                            value: "DetermineComponentFrameRoot"
                        });
                        var l = a.DetermineComponentFrameRoot(),
                            u = l[0],
                            c = l[1];
                        if (u && c) {
                            var d = u.split("\n"),
                                f = c.split("\n");
                            for (l = s = 0; s < d.length && !d[s].includes("DetermineComponentFrameRoot");) s++;
                            for (; l < f.length && !f[l].includes("DetermineComponentFrameRoot");) l++;
                            if (s === d.length || l === f.length)
                                for (s = d.length - 1, l = f.length - 1; 1 <= s && 0 <= l && d[s] !== f[l];) l--;
                            for (; 1 <= s && 0 <= l; s--, l--)
                                if (d[s] !== f[l]) {
                                    if (1 !== s || 1 !== l)
                                        do
                                            if (s--, l--, 0 > l || d[s] !== f[l]) {
                                                var p = "\n" + d[s].replace(" at new ", " at ");
                                                return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), "function" == typeof e && X.set(e, p), p
                                            }
                                    while (1 <= s && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        B = !1, L.H = i,
                            function() {
                                if (0 == --F) {
                                    var e = {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0
                                    };
                                    Object.defineProperties(console, {
                                        log: D({}, e, {
                                            value: g
                                        }),
                                        info: D({}, e, {
                                            value: v
                                        }),
                                        warn: D({}, e, {
                                            value: y
                                        }),
                                        error: D({}, e, {
                                            value: _
                                        }),
                                        group: D({}, e, {
                                            value: x
                                        }),
                                        groupCollapsed: D({}, e, {
                                            value: S
                                        }),
                                        groupEnd: D({}, e, {
                                            value: k
                                        })
                                    })
                                }
                                0 > F && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
                            }(), Error.prepareStackTrace = r
                    }
                    return d = (d = e ? e.displayName || e.name : "") ? o(d) : "", "function" == typeof e && X.set(e, d), d
                }

                function s() {
                    var e = L.A;
                    return null === e ? null : e.getOwner()
                }

                function l() {
                    var t = e(this.type);
                    return W[t] || (W[t] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), void 0 !== (t = this.props.ref) ? t : null
                }

                function u(e, t) {
                    if ("object" == typeof e && e && e.$$typeof !== G) {
                        if (q(e))
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                c(i) && d(i, t)
                            } else if (c(e)) e._store && (e._store.validated = 1);
                            else if ("function" == typeof(r = null === e || "object" != typeof e ? null : "function" == typeof(r = I && e[I] || e["@@iterator"]) ? r : null) && r !== e.entries && (r = r.call(e)) !== e)
                            for (; !(e = r.next()).done;) c(e.value) && d(e.value, t)
                    }
                }

                function c(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === p
                }

                function d(t, r) {
                    if (t._store && !t._store.validated && null == t.key && (t._store.validated = 1, !Y[i = r, n = "", (l = s()) && (l = e(l.type)) && (n = "\n\nCheck the render method of `" + l + "`."), n || (i = e(i)) && (n = "\n\nCheck the top-level render call using <" + i + ">."), r = n])) {
                        Y[r] = !0;
                        var i, n, l, u = "";
                        t && null != t._owner && t._owner !== s() && (u = null, "number" == typeof t._owner.tag ? u = e(t._owner.type) : "string" == typeof t._owner.name && (u = t._owner.name), u = " It was passed a child from " + u + ".");
                        var c = L.getCurrentStack;
                        L.getCurrentStack = function() {
                            var e = function e(t) {
                                if (null == t) return "";
                                if ("function" == typeof t) {
                                    var r = t.prototype;
                                    return a(t, !(!r || !r.isReactComponent))
                                }
                                if ("string" == typeof t) return o(t);
                                switch (t) {
                                    case O:
                                        return o("Suspense");
                                    case A:
                                        return o("SuspenseList")
                                }
                                if ("object" == typeof t) switch (t.$$typeof) {
                                    case R:
                                        return a(t.render, !1);
                                    case C:
                                        return e(t.type);
                                    case T:
                                        r = t._payload, t = t._init;
                                        try {
                                            return e(t(r))
                                        } catch (e) {}
                                }
                                return ""
                            }(t.type);
                            return c && (e += c() || ""), e
                        }, console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', r, u), L.getCurrentStack = c
                    }
                }
                var f = r(98930),
                    p = Symbol.for("react.transitional.element"),
                    b = Symbol.for("react.portal"),
                    h = Symbol.for("react.fragment"),
                    m = Symbol.for("react.strict_mode"),
                    w = Symbol.for("react.profiler");
                Symbol.for("react.provider");
                var g, v, y, _, x, S, k, E = Symbol.for("react.consumer"),
                    P = Symbol.for("react.context"),
                    R = Symbol.for("react.forward_ref"),
                    O = Symbol.for("react.suspense"),
                    A = Symbol.for("react.suspense_list"),
                    C = Symbol.for("react.memo"),
                    T = Symbol.for("react.lazy"),
                    j = Symbol.for("react.offscreen"),
                    I = Symbol.iterator,
                    N = Symbol.for("react.client.reference"),
                    L = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    M = Object.prototype.hasOwnProperty,
                    D = Object.assign,
                    U = Symbol.for("react.client.reference"),
                    q = Array.isArray,
                    F = 0;
                n.__reactDisabledLog = !0;
                var H, z, $, B = !1,
                    X = new("function" == typeof WeakMap ? WeakMap : Map),
                    G = Symbol.for("react.client.reference"),
                    W = {},
                    V = {},
                    Y = {};
                t.Fragment = h, t.jsxDEV = function(t, r, n, o, a, c) {
                    return function(t, r, n, o, a, c) {
                        if ("string" == typeof t || "function" == typeof t || t === h || t === w || t === m || t === O || t === A || t === j || "object" == typeof t && null !== t && (t.$$typeof === T || t.$$typeof === C || t.$$typeof === P || t.$$typeof === E || t.$$typeof === R || t.$$typeof === U || void 0 !== t.getModuleId)) {
                            var d, f, b, g, v, y = r.children;
                            if (void 0 !== y) {
                                if (o) {
                                    if (q(y)) {
                                        for (o = 0; o < y.length; o++) u(y[o], t);
                                        Object.freeze && Object.freeze(y)
                                    } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.")
                                } else u(y, t)
                            }
                        } else y = "", (void 0 === t || "object" == typeof t && null !== t && 0 === Object.keys(t).length) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), null === t ? o = "null" : q(t) ? o = "array" : void 0 !== t && t.$$typeof === p ? (o = "<" + (e(t.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : o = typeof t, console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", o, y);
                        if (M.call(r, "key")) {
                            y = e(t);
                            var _ = Object.keys(r).filter(function(e) {
                                return "key" !== e
                            });
                            V[y + (o = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}")] || (console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', o, y, _ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", y), V[y + o] = !0)
                        }
                        if (y = null, void 0 !== n && (i(n), y = "" + n), function(e) {
                                if (M.call(e, "key")) {
                                    var t = Object.getOwnPropertyDescriptor(e, "key").get;
                                    if (t && t.isReactWarning) return !1
                                }
                                return void 0 !== e.key
                            }(r) && (i(r.key), y = "" + r.key), "key" in r)
                            for (var x in n = {}, r) "key" !== x && (n[x] = r[x]);
                        else n = r;
                        return y && function(e, t) {
                            function r() {
                                $ || ($ = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t))
                            }
                            r.isReactWarning = !0, Object.defineProperty(e, "key", {
                                get: r,
                                configurable: !0
                            })
                        }(n, "function" == typeof t ? t.displayName || t.name || "Unknown" : t), d = t, f = y, b = c, g = s(), b = (v = n).ref, d = {
                            $$typeof: p,
                            type: d,
                            key: f,
                            props: v,
                            _owner: g
                        }, null !== (void 0 !== b ? b : null) ? Object.defineProperty(d, "ref", {
                            enumerable: !1,
                            get: l
                        }) : Object.defineProperty(d, "ref", {
                            enumerable: !1,
                            value: null
                        }), d._store = {}, Object.defineProperty(d._store, "validated", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: 0
                        }), Object.defineProperty(d, "_debugInfo", {
                            configurable: !1,
                            enumerable: !1,
                            writable: !0,
                            value: null
                        }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d
                    }(t, r, n, o, 0, c)
                }
            }()
        },
        74963: (e, t, r) => {
            "use strict";
            e.exports = r(79168)
        },
        44873: (e, t, r) => {
            "use strict";
            r.d(t, {
                qg: () => a
            });
            let i = /(^|@)\S+:\d+/,
                n = /^\s*at .*(\S+:\d+|\(native\))/m,
                o = /^(eval@)?(\[native code\])?$/;

            function a(e, t) {
                var r, a, u, c;
                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return !e.stacktrace || e.message.includes("\n") && e.message.split("\n").length > e.stacktrace.split("\n").length ? function(e, t) {
                    let r = /Line (\d+).*script (?:in )?(\S+)/i,
                        i = e.message.split("\n"),
                        n = [];
                    for (let e = 2, t = i.length; e < t; e += 2) {
                        let t = r.exec(i[e]);
                        t && n.push({
                            file: t[2],
                            line: +t[1],
                            raw: i[e]
                        })
                    }
                    return l(n, void 0)
                }(e) : e.stack ? l(e.stack.split("\n").filter(e => !!e.match(i) && !e.match(/^Error created at/)), t).map(e => {
                    let t;
                    let r = e.split("@"),
                        i = s(r.pop()),
                        n = r.shift() || "",
                        o = n.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                    return n.match(/\(([^)]*)\)/) && (t = n.replace(/^[^(]+\(([^)]*)\)$/, "$1")), {
                        function: o,
                        args: void 0 === t || "[arguments not available]" === t ? void 0 : t.split(","),
                        file: i[0],
                        line: i[1] ? +i[1] : void 0,
                        col: i[2] ? +i[2] : void 0,
                        raw: e
                    }
                }) : function(e, t) {
                    let r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        i = e.stacktrace.split("\n"),
                        n = [];
                    for (let e = 0, t = i.length; e < t; e += 2) {
                        let t = r.exec(i[e]);
                        t && n.push({
                            function: t[3] || void 0,
                            file: t[2],
                            line: t[1] ? +t[1] : void 0,
                            raw: i[e]
                        })
                    }
                    return l(n, void 0)
                }(e);
                if (e.stack && e.stack.match(n)) {
                    return r = e.stack, a = t, l(r.split("\n").filter(e => !!e.match(n)), a).map(e => {
                        e.includes("(eval ") && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                        let t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                            r = t.match(/ (\(.+\)$)/);
                        t = r ? t.replace(r[0], "") : t;
                        let i = s(r ? r[1] : t);
                        return {
                            function: r && t || void 0,
                            file: ["eval", "<anonymous>"].includes(i[0]) ? void 0 : i[0],
                            line: i[1] ? +i[1] : void 0,
                            col: i[2] ? +i[2] : void 0,
                            raw: e
                        }
                    })
                }
                if (e.stack) {
                    return u = e.stack, c = t, l(u.split("\n").filter(e => !e.match(o)), c).map(e => {
                        if (e.includes(" > eval") && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !e.includes("@") && !e.includes(":")) return {
                            function: e
                        }; {
                            let t = /(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,
                                r = e.match(t),
                                i = r && r[1] ? r[1] : void 0,
                                n = s(e.replace(t, ""));
                            return {
                                function: i,
                                file: n[0],
                                line: n[1] ? +n[1] : void 0,
                                col: n[2] ? +n[2] : void 0,
                                raw: e
                            }
                        }
                    })
                }
                if (t ? .allowEmpty) return [];
                throw Error("Cannot parse given Error object")
            }

            function s(e) {
                if (!e.includes(":")) return [e, void 0, void 0];
                let t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                return [t[1], t[2] || void 0, t[3] || void 0]
            }

            function l(e, t) {
                return t && null != t.slice ? Array.isArray(t.slice) ? e.slice(t.slice[0], t.slice[1]) : e.slice(0, t.slice) : e
            }
        },
        25388: (e, t, r) => {
            "use strict";

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) e[i] = r[i]
                }
                return e
            }
            r.d(t, {
                A: () => n
            });
            var n = function e(t, r) {
                function n(e, n, o) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(o = i({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var a = "";
                        for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
                        return document.cookie = e + "=" + t.write(n, e) + a
                    }
                }
                return Object.create({
                    set: n,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var r = document.cookie ? document.cookie.split("; ") : [], i = {}, n = 0; n < r.length; n++) {
                                var o = r[n].split("="),
                                    a = o.slice(1).join("=");
                                try {
                                    var s = decodeURIComponent(o[0]);
                                    if (i[s] = t.read(a, s), e === s) break
                                } catch (e) {}
                            }
                            return e ? i[e] : i
                        }
                    },
                    remove: function(e, t) {
                        n(e, "", i({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, i({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(i({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(r)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        },
        75061: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => u
            });
            var i = r(98930),
                n = (e, t, r, i, n, o, a, s) => {
                    let l = document.documentElement,
                        u = ["light", "dark"];

                    function c(t) {
                        (Array.isArray(e) ? e : [e]).forEach(e => {
                            let r = "class" === e,
                                i = r && o ? n.map(e => o[e] || e) : n;
                            r ? (l.classList.remove(...i), l.classList.add(t)) : l.setAttribute(e, t)
                        }), s && u.includes(t) && (l.style.colorScheme = t)
                    }
                    if (i) c(i);
                    else try {
                        let e = localStorage.getItem(t) || r,
                            i = a && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                        c(i)
                    } catch (e) {}
                },
                o = ["light", "dark"],
                a = "(prefers-color-scheme: dark)",
                s = "undefined" == typeof window,
                l = i.createContext(void 0),
                u = e => i.useContext(l) ? i.createElement(i.Fragment, null, e.children) : i.createElement(d, { ...e
                }),
                c = ["light", "dark"],
                d = e => {
                    let {
                        forcedTheme: t,
                        disableTransitionOnChange: r = !1,
                        enableSystem: n = !0,
                        enableColorScheme: s = !0,
                        storageKey: u = "theme",
                        themes: d = c,
                        defaultTheme: m = n ? "system" : "light",
                        attribute: w = "data-theme",
                        value: g,
                        children: v,
                        nonce: y,
                        scriptProps: _
                    } = e, [x, S] = i.useState(() => p(u, m)), [k, E] = i.useState(() => p(u)), P = g ? Object.values(g) : d, R = i.useCallback(e => {
                        let t = e;
                        if (!t) return;
                        "system" === e && n && (t = h());
                        let i = g ? g[t] : t,
                            a = r ? b(y) : null,
                            l = document.documentElement,
                            u = e => {
                                "class" === e ? (l.classList.remove(...P), i && l.classList.add(i)) : e.startsWith("data-") && (i ? l.setAttribute(e, i) : l.removeAttribute(e))
                            };
                        if (Array.isArray(w) ? w.forEach(u) : u(w), s) {
                            let e = o.includes(m) ? m : null,
                                r = o.includes(t) ? t : e;
                            l.style.colorScheme = r
                        }
                        null == a || a()
                    }, [y]), O = i.useCallback(e => {
                        let t = "function" == typeof e ? e(x) : e;
                        S(t);
                        try {
                            localStorage.setItem(u, t)
                        } catch (e) {}
                    }, [x]), A = i.useCallback(e => {
                        E(h(e)), "system" === x && n && !t && R("system")
                    }, [x, t]);
                    i.useEffect(() => {
                        let e = window.matchMedia(a);
                        return e.addListener(A), A(e), () => e.removeListener(A)
                    }, [A]), i.useEffect(() => {
                        let e = e => {
                            e.key === u && (e.newValue ? S(e.newValue) : O(m))
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }, [O]), i.useEffect(() => {
                        R(null != t ? t : x)
                    }, [t, x]);
                    let C = i.useMemo(() => ({
                        theme: x,
                        setTheme: O,
                        forcedTheme: t,
                        resolvedTheme: "system" === x ? k : x,
                        themes: n ? [...d, "system"] : d,
                        systemTheme: n ? k : void 0
                    }), [x, O, t, k, n, d]);
                    return i.createElement(l.Provider, {
                        value: C
                    }, i.createElement(f, {
                        forcedTheme: t,
                        storageKey: u,
                        attribute: w,
                        enableSystem: n,
                        enableColorScheme: s,
                        defaultTheme: m,
                        value: g,
                        themes: d,
                        nonce: y,
                        scriptProps: _
                    }), v)
                },
                f = i.memo(e => {
                    let {
                        forcedTheme: t,
                        storageKey: r,
                        attribute: o,
                        enableSystem: a,
                        enableColorScheme: s,
                        defaultTheme: l,
                        value: u,
                        themes: c,
                        nonce: d,
                        scriptProps: f
                    } = e, p = JSON.stringify([o, r, l, t, c, u, a, s]).slice(1, -1);
                    return i.createElement("script", { ...f,
                        suppressHydrationWarning: !0,
                        nonce: "undefined" == typeof window ? d : "",
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(n.toString(), ")(").concat(p, ")")
                        }
                    })
                }),
                p = (e, t) => {
                    let r;
                    if (!s) {
                        try {
                            r = localStorage.getItem(e) || void 0
                        } catch (e) {}
                        return r || t
                    }
                },
                b = e => {
                    let t = document.createElement("style");
                    return e && t.setAttribute("nonce", e), t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(t)
                        }, 1)
                    }
                },
                h = e => (e || (e = window.matchMedia(a)), e.matches ? "dark" : "light")
        }
    }
]);