"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9691], {
        39691: (t, e, i) => {
            let n, r, s, o, a;
            i.r(e), i.d(e, {
                AcceleratedAnimation: () => e4,
                AnimatePresence: () => s2,
                AnimateSharedLayout: () => aL,
                DeprecatedLayoutGroupContext: () => s4,
                DragControls: () => aa,
                FlatTree: () => re,
                LayoutGroup: () => oe,
                LayoutGroupContext: () => nC,
                LazyMotion: () => s5,
                MotionConfig: () => s3,
                MotionConfigContext: () => rQ,
                MotionContext: () => r0,
                MotionGlobalConfig: () => C,
                MotionValue: () => iu,
                PresenceContext: () => nT,
                Reorder: () => l,
                SwitchLayoutGroupContext: () => nV,
                VisualElement: () => sH,
                addPointerEvent: () => iU,
                addPointerInfo: () => iO,
                addScaleCorrector: () => nj,
                animate: () => o7,
                animateValue: () => e_,
                animateVisualElement: () => iA,
                animationControls: () => o$,
                animations: () => ij,
                anticipate: () => X,
                backIn: () => Y,
                backInOut: () => G,
                backOut: () => H,
                buildTransform: () => sw,
                calcLength: () => iQ,
                cancelFrame: () => B,
                cancelSync: () => az,
                circIn: () => K,
                circInOut: () => _,
                circOut: () => q,
                clamp: () => to,
                color: () => tG,
                complex: () => tQ,
                createBox: () => ni,
                createRendererMotionComponent: () => sn,
                createScopedAnimate: () => o8,
                cubicBezier: () => W,
                delay: () => rn,
                disableInstantTransitions: () => ag,
                distance: () => iW,
                distance2D: () => iN,
                domAnimation: () => on,
                domMax: () => or,
                domMin: () => oi,
                easeIn: () => eg,
                easeInOut: () => ey,
                easeOut: () => ev,
                filterProps: () => sj,
                findSpring: () => eu,
                frame: () => F,
                frameData: () => O,
                frameSteps: () => I,
                inView: () => as,
                interpolate: () => eW,
                invariant: () => J,
                isBrowser: () => r1,
                isDragActive: () => i$,
                isMotionComponent: () => ac,
                isMotionValue: () => ix,
                isValidMotionProp: () => sk,
                m: () => s_,
                makeUseVisualState: () => sp,
                mirrorEasing: () => N,
                mix: () => eU,
                motion: () => sq,
                motionValue: () => ih,
                optimizedAppearDataAttribute: () => im,
                pipe: () => eb,
                progress: () => eA,
                px: () => ty,
                resolveMotionValue: () => ri,
                reverseEasing: () => z,
                scroll: () => oU,
                scrollInfo: () => oF,
                spring: () => ef,
                stagger: () => aW,
                startOptimizedAppearAnimation: () => aA,
                steps: () => aH,
                sync: () => aN,
                transform: () => oh,
                unwrapMotionComponent: () => ad,
                useAnimate: () => at,
                useAnimation: () => ai,
                useAnimationControls: () => ae,
                useAnimationFrame: () => oG,
                useCycle: () => an,
                useDeprecatedAnimatedState: () => aC,
                useDeprecatedInvertedScale: () => ak,
                useDomEvent: () => ah,
                useDragControls: () => au,
                useElementScroll: () => oH,
                useForceUpdate: () => s6,
                useInView: () => ao,
                useInstantLayoutTransition: () => ap,
                useInstantTransition: () => am,
                useIsPresent: () => nM,
                useIsomorphicLayoutEffect: () => r2,
                useMotionTemplate: () => oa,
                useMotionValue: () => os,
                useMotionValueEvent: () => om,
                usePresence: () => nE,
                useReducedMotion: () => oq,
                useReducedMotionConfig: () => o_,
                useResetProjection: () => av,
                useScroll: () => oz,
                useSpring: () => of ,
                useTime: () => oX,
                useTransform: () => oc,
                useUnmountEffect: () => oJ,
                useVelocity: () => og,
                useViewportScroll: () => oY,
                useWillChange: () => oK,
                visualElementStore: () => sU,
                warning: () => $,
                wrap: () => o0
            });
            var l = {};

            function u(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy(function() {
                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return t(...i)
                }, {
                    get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }

            function h(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            i.r(l), i.d(l, {
                Group: () => aF,
                Item: () => aU
            });
            let c = t => Array.isArray(t);

            function d(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function p(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function f(t, e, i, n) {
                if ("function" == typeof e || ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e)) {
                    let [r, s] = function(t) {
                        let e = [{}, {}];
                        return null == t || t.values.forEach((t, i) => {
                            e[0][i] = t.get(), e[1][i] = t.getVelocity()
                        }), e
                    }(n);
                    e = e(void 0 !== i ? i : t.custom, r, s)
                }
                return e
            }

            function m(t, e, i) {
                let n = t.getProps();
                return f(n, e, void 0 !== i ? i : n.custom, t)
            }
            let g = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                v = ["initial", ...g],
                y = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                x = new Set(y),
                w = t => 1e3 * t,
                P = t => t / 1e3,
                S = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                b = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                A = {
                    type: "keyframes",
                    duration: .8
                },
                T = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                E = (t, e) => {
                    let {
                        keyframes: i
                    } = e;
                    return i.length > 2 ? A : x.has(t) ? t.startsWith("scale") ? b(i[1]) : S : T
                };

            function M(t, e) {
                return t[e] || t.default || t
            }
            let C = {
                    skipAnimations: !1,
                    useManualTiming: !1
                },
                V = {
                    current: !1
                },
                R = t => null !== t;

            function k(t, e, i) {
                let {
                    repeat: n,
                    repeatType: r = "loop"
                } = e, s = t.filter(R), o = n && "loop" !== r && n % 2 == 1 ? 0 : s.length - 1;
                return o && void 0 !== i ? i : s[o]
            }
            let D = t => t,
                L = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function j(t, e) {
                let i = !1,
                    n = !0,
                    r = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    s = () => i = !0,
                    o = L.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            i = new Set,
                            n = !1,
                            r = !1,
                            s = new WeakSet,
                            o = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function a(e) {
                            s.has(e) && (l.schedule(e), t()), e(o)
                        }
                        let l = {
                            schedule: function(t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    a = o && n ? e : i;
                                return r && s.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), s.delete(t)
                            },
                            process: t => {
                                if (o = t, n) {
                                    r = !0;
                                    return
                                }
                                n = !0, [e, i] = [i, e], i.clear(), e.forEach(a), n = !1, r && (r = !1, l.process(t))
                            }
                        };
                        return l
                    }(s), t), {}),
                    {
                        read: a,
                        resolveKeyframes: l,
                        update: u,
                        preRender: h,
                        render: c,
                        postRender: d
                    } = o,
                    p = () => {
                        let s = C.useManualTiming ? r.timestamp : performance.now();
                        i = !1, r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1), r.timestamp = s, r.isProcessing = !0, a.process(r), l.process(r), u.process(r), h.process(r), c.process(r), d.process(r), r.isProcessing = !1, i && e && (n = !1, t(p))
                    },
                    f = () => {
                        i = !0, n = !0, r.isProcessing || t(p)
                    };
                return {
                    schedule: L.reduce((t, e) => {
                        let n = o[e];
                        return t[e] = function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return i || f(), n.schedule(t, e, r)
                        }, t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < L.length; e++) o[L[e]].cancel(t)
                    },
                    state: r,
                    steps: o
                }
            }
            let {
                schedule: F,
                cancel: B,
                state: O,
                steps: I
            } = j("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : D, !0), U = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function W(t, e, i, n) {
                if (t === e && i === n) return D;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = U(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : U(r(t), e, n)
            }
            let N = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                z = t => e => 1 - t(1 - e),
                H = W(.33, 1.53, .69, .99),
                Y = z(H),
                G = N(Y),
                X = t => (t *= 2) < 1 ? .5 * Y(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                K = t => 1 - Math.sin(Math.acos(t)),
                q = z(K),
                _ = N(K),
                Z = t => /^0[^.\s]+$/u.test(t),
                $ = D,
                J = D,
                Q = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                tt = t => e => "string" == typeof e && e.startsWith(t),
                te = tt("--"),
                ti = tt("var(--"),
                tn = t => !!ti(t) && tr.test(t.split("/*")[0].trim()),
                tr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                ts = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                to = (t, e, i) => i > e ? e : i < t ? t : i,
                ta = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                tl = { ...ta,
                    transform: t => to(0, 1, t)
                },
                tu = { ...ta,
                    default: 1
                },
                th = t => Math.round(1e5 * t) / 1e5,
                tc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                td = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tp = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

            function tf(t) {
                return "string" == typeof t
            }
            let tm = t => ({
                    test: e => tf(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => "".concat(e).concat(t)
                }),
                tg = tm("deg"),
                tv = tm("%"),
                ty = tm("px"),
                tx = tm("vh"),
                tw = tm("vw"),
                tP = { ...tv,
                    parse: t => tv.parse(t) / 100,
                    transform: t => tv.transform(100 * t)
                },
                tS = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                tb = t => t === ta || t === ty,
                tA = (t, e) => parseFloat(t.split(", ")[e]),
                tT = (t, e) => (i, n) => {
                    let {
                        transform: r
                    } = n;
                    if ("none" === r || !r) return 0;
                    let s = r.match(/^matrix3d\((.+)\)$/u);
                    if (s) return tA(s[1], e); {
                        let e = r.match(/^matrix\((.+)\)$/u);
                        return e ? tA(e[1], t) : 0
                    }
                },
                tE = new Set(["x", "y", "z"]),
                tM = y.filter(t => !tE.has(t)),
                tC = {
                    width: (t, e) => {
                        let {
                            x: i
                        } = t, {
                            paddingLeft: n = "0",
                            paddingRight: r = "0"
                        } = e;
                        return i.max - i.min - parseFloat(n) - parseFloat(r)
                    },
                    height: (t, e) => {
                        let {
                            y: i
                        } = t, {
                            paddingTop: n = "0",
                            paddingBottom: r = "0"
                        } = e;
                        return i.max - i.min - parseFloat(n) - parseFloat(r)
                    },
                    top: (t, e) => {
                        let {
                            top: i
                        } = e;
                        return parseFloat(i)
                    },
                    left: (t, e) => {
                        let {
                            left: i
                        } = e;
                        return parseFloat(i)
                    },
                    bottom: (t, e) => {
                        let {
                            y: i
                        } = t, {
                            top: n
                        } = e;
                        return parseFloat(n) + (i.max - i.min)
                    },
                    right: (t, e) => {
                        let {
                            x: i
                        } = t, {
                            left: n
                        } = e;
                        return parseFloat(n) + (i.max - i.min)
                    },
                    x: tT(4, 13),
                    y: tT(5, 14)
                };
            tC.translateX = tC.x, tC.translateY = tC.y;
            let tV = t => e => e.test(t),
                tR = [ta, ty, tv, tg, tw, tx, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                tk = t => tR.find(tV(t)),
                tD = new Set,
                tL = !1,
                tj = !1;

            function tF() {
                if (tj) {
                    let t = Array.from(tD).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return tM.forEach(i => {
                                let n = t.getValue(i);
                                void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                            }), e
                        }(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(e => {
                            var i;
                            let [n, r] = e;
                            null === (i = t.getValue(n)) || void 0 === i || i.set(r)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                tj = !1, tL = !1, tD.forEach(t => t.complete()), tD.clear()
            }

            function tB() {
                tD.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (tj = !0)
                })
            }
            class tO {
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (tD.add(this), tL || (tL = !0, F.read(tB), F.resolveKeyframes(tF))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: n
                    } = this;
                    for (let r = 0; r < t.length; r++)
                        if (null === t[r]) {
                            if (0 === r) {
                                let r = null == n ? void 0 : n.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== r) t[0] = r;
                                else if (i && e) {
                                    let n = i.readValue(e, s);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
                            } else t[r] = t[r - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tD.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, tD.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
                constructor(t, e, i, n, r, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
                }
            }
            let tI = (t, e) => i => !!(tf(i) && tp.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                tU = (t, e, i) => n => {
                    if (!tf(n)) return n;
                    let [r, s, o, a] = n.match(tc);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                tW = t => to(0, 255, t),
                tN = { ...ta,
                    transform: t => Math.round(tW(t))
                },
                tz = {
                    test: tI("rgb", "red"),
                    parse: tU("red", "green", "blue"),
                    transform: t => {
                        let {
                            red: e,
                            green: i,
                            blue: n,
                            alpha: r = 1
                        } = t;
                        return "rgba(" + tN.transform(e) + ", " + tN.transform(i) + ", " + tN.transform(n) + ", " + th(tl.transform(r)) + ")"
                    }
                },
                tH = {
                    test: tI("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            n = "",
                            r = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(n, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: tz.transform
                },
                tY = {
                    test: tI("hsl", "hue"),
                    parse: tU("hue", "saturation", "lightness"),
                    transform: t => {
                        let {
                            hue: e,
                            saturation: i,
                            lightness: n,
                            alpha: r = 1
                        } = t;
                        return "hsla(" + Math.round(e) + ", " + tv.transform(th(i)) + ", " + tv.transform(th(n)) + ", " + th(tl.transform(r)) + ")"
                    }
                },
                tG = {
                    test: t => tz.test(t) || tH.test(t) || tY.test(t),
                    parse: t => tz.test(t) ? tz.parse(t) : tY.test(t) ? tY.parse(t) : tH.parse(t),
                    transform: t => tf(t) ? t : t.hasOwnProperty("red") ? tz.transform(t) : tY.transform(t)
                },
                tX = "number",
                tK = "color",
                tq = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function t_(t) {
                let e = t.toString(),
                    i = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    r = [],
                    s = 0,
                    o = e.replace(tq, t => (tG.test(t) ? (n.color.push(s), r.push(tK), i.push(tG.parse(t))) : t.startsWith("var(") ? (n.var.push(s), r.push("var"), i.push(t)) : (n.number.push(s), r.push(tX), i.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: i,
                    split: o,
                    indexes: n,
                    types: r
                }
            }

            function tZ(t) {
                return t_(t).values
            }

            function t$(t) {
                let {
                    split: e,
                    types: i
                } = t_(t), n = e.length;
                return t => {
                    let r = "";
                    for (let s = 0; s < n; s++)
                        if (r += e[s], void 0 !== t[s]) {
                            let e = i[s];
                            e === tX ? r += th(t[s]) : e === tK ? r += tG.transform(t[s]) : r += t[s]
                        }
                    return r
                }
            }
            let tJ = t => "number" == typeof t ? 0 : t,
                tQ = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && tf(t) && ((null === (e = t.match(tc)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(td)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: tZ,
                    createTransformer: t$,
                    getAnimatableNone: function(t) {
                        let e = tZ(t);
                        return t$(t)(e.map(tJ))
                    }
                },
                t0 = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function t1(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(tc) || [];
                if (!n) return t;
                let r = i.replace(n, ""),
                    s = t0.has(e) ? 1 : 0;
                return n !== i && (s *= 100), e + "(" + s + r + ")"
            }
            let t2 = /\b([a-z-]*)\(.*?\)/gu,
                t3 = { ...tQ,
                    getAnimatableNone: t => {
                        let e = t.match(t2);
                        return e ? e.map(t1).join(" ") : t
                    }
                },
                t5 = { ...ta,
                    transform: Math.round
                },
                t9 = {
                    borderWidth: ty,
                    borderTopWidth: ty,
                    borderRightWidth: ty,
                    borderBottomWidth: ty,
                    borderLeftWidth: ty,
                    borderRadius: ty,
                    radius: ty,
                    borderTopLeftRadius: ty,
                    borderTopRightRadius: ty,
                    borderBottomRightRadius: ty,
                    borderBottomLeftRadius: ty,
                    width: ty,
                    maxWidth: ty,
                    height: ty,
                    maxHeight: ty,
                    size: ty,
                    top: ty,
                    right: ty,
                    bottom: ty,
                    left: ty,
                    padding: ty,
                    paddingTop: ty,
                    paddingRight: ty,
                    paddingBottom: ty,
                    paddingLeft: ty,
                    margin: ty,
                    marginTop: ty,
                    marginRight: ty,
                    marginBottom: ty,
                    marginLeft: ty,
                    rotate: tg,
                    rotateX: tg,
                    rotateY: tg,
                    rotateZ: tg,
                    scale: tu,
                    scaleX: tu,
                    scaleY: tu,
                    scaleZ: tu,
                    skew: tg,
                    skewX: tg,
                    skewY: tg,
                    distance: ty,
                    translateX: ty,
                    translateY: ty,
                    translateZ: ty,
                    x: ty,
                    y: ty,
                    z: ty,
                    perspective: ty,
                    transformPerspective: ty,
                    opacity: tl,
                    originX: tP,
                    originY: tP,
                    originZ: ty,
                    zIndex: t5,
                    backgroundPositionX: ty,
                    backgroundPositionY: ty,
                    fillOpacity: tl,
                    strokeOpacity: tl,
                    numOctaves: t5
                },
                t4 = { ...t9,
                    color: tG,
                    backgroundColor: tG,
                    outlineColor: tG,
                    fill: tG,
                    stroke: tG,
                    borderColor: tG,
                    borderTopColor: tG,
                    borderRightColor: tG,
                    borderBottomColor: tG,
                    borderLeftColor: tG,
                    filter: t3,
                    WebkitFilter: t3
                },
                t6 = t => t4[t];

            function t8(t, e) {
                let i = t6(t);
                return i !== t3 && (i = tQ), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let t7 = new Set(["auto", "none", "0"]);
            class et extends tO {
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if ("string" == typeof n && tn(n = n.trim())) {
                            let r = function t(e, i) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                                J(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
                                let [r, s] = function(t) {
                                    let e = ts.exec(t);
                                    if (!e) return [, ];
                                    let [, i, n, r] = e;
                                    return ["--".concat(null != i ? i : n), r]
                                }(e);
                                if (!r) return;
                                let o = window.getComputedStyle(i).getPropertyValue(r);
                                if (o) {
                                    let t = o.trim();
                                    return Q(t) ? parseFloat(t) : t
                                }
                                return tn(s) ? t(s, i, n + 1) : s
                            }(n, e.current);
                            void 0 !== r && (t[i] = r), i === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !tS.has(i) || 2 !== t.length) return;
                    let [n, r] = t, s = tk(n), o = tk(r);
                    if (s !== o) {
                        if (tb(s) && tb(o))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || Z(n)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let n, r = 0;
                        for (; r < t.length && !n;) {
                            let e = t[r];
                            "string" == typeof e && !t7.has(e) && t_(e).values.length && (n = t[r]), r++
                        }
                        if (n && i)
                            for (let r of e) t[r] = t8(i, n)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tC[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(i, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: i,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e || !e.current) return;
                    let r = e.getValue(i);
                    r && r.jump(this.measuredOrigin, !1);
                    let s = n.length - 1,
                        o = n[s];
                    n[s] = tC[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(t => {
                        let [i, n] = t;
                        e.getValue(i).set(n)
                    }), this.resolveNoneKeyframes()
                }
                constructor(t, e, i, n, r) {
                    super(t, e, i, n, r, !0)
                }
            }

            function ee(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }

            function ei(t) {
                return "function" == typeof t
            }

            function en() {
                n = void 0
            }
            let er = {
                    now: () => (void 0 === n && er.set(O.isProcessing || C.useManualTiming ? O.timestamp : performance.now()), n),
                    set: t => {
                        n = t, queueMicrotask(en)
                    }
                },
                es = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tQ.test(t) || "0" === t) && !t.startsWith("url("));
            class eo {
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (tB(), tF()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = er.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: n,
                        velocity: r,
                        delay: s,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, i, n) {
                            let r = t[0];
                            if (null === r) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                o = es(r, e),
                                a = es(s, e);
                            return $(o === a, "You are trying to animate ".concat(e, ' from "').concat(r, '" to "').concat(s, '". ').concat(r, " is not an animatable value - to enable this animation set ").concat(r, " to a value animatable to ").concat(s, " via the `style` property.")), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let i = 0; i < t.length; i++)
                                    if (t[i] !== e) return !0
                            }(t) || ("spring" === i || ei(i)) && n)
                        }(t, i, n, r)) {
                        if (V.current || !s) {
                            null == a || a(k(t, this.options, e)), null == o || o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let u = this.initPlayback(t, e);
                    !1 !== u && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...u
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: n = 0,
                    repeatDelay: r = 0,
                    repeatType: s = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = er.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: n,
                        repeatDelay: r,
                        repeatType: s,
                        ...o
                    }, this.updateFinishedPromise()
                }
            }

            function ea(t, e) {
                return e ? 1e3 / e * t : 0
            }

            function el(t, e, i) {
                let n = Math.max(e - 5, 0);
                return ea(i - t(n), e - n)
            }

            function eu(t) {
                let e, i, {
                    duration: n = 800,
                    bounce: r = .25,
                    velocity: s = 0,
                    mass: o = 1
                } = t;
                $(n <= w(10), "Spring duration must be 10 seconds or less");
                let a = 1 - r;
                a = to(.05, 1, a), n = to(.01, 10, P(n)), a < 1 ? (e = t => {
                    let e = t * a,
                        i = e * n;
                    return .001 - (e - s) / eh(t, a) * Math.exp(-i)
                }, i = t => {
                    let i = t * a * n,
                        r = Math.pow(a, 2) * Math.pow(t, 2) * n,
                        o = Math.exp(-i),
                        l = eh(Math.pow(t, 2), a);
                    return (i * s + s - r) * o * (-e(t) + .001 > 0 ? -1 : 1) / l
                }) : (e = t => -.001 + Math.exp(-t * n) * ((t - s) * n + 1), i = t => n * n * (s - t) * Math.exp(-t * n));
                let l = function(t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n
                }(e, i, 5 / n);
                if (n = w(n), isNaN(l)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: n
                }; {
                    let t = Math.pow(l, 2) * o;
                    return {
                        stiffness: t,
                        damping: 2 * a * Math.sqrt(o * t),
                        duration: n
                    }
                }
            }

            function eh(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let ec = ["duration", "bounce"],
                ed = ["stiffness", "damping", "mass"];

            function ep(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function ef(t) {
                let e, {
                        keyframes: i,
                        restDelta: n,
                        restSpeed: r,
                        ...s
                    } = t,
                    o = i[0],
                    a = i[i.length - 1],
                    l = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: u,
                        damping: h,
                        mass: c,
                        duration: d,
                        velocity: p,
                        isResolvedFromDuration: f
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!ep(t, ed) && ep(t, ec)) {
                            let i = eu(t);
                            (e = { ...e,
                                ...i,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }({ ...s,
                        velocity: -P(s.velocity || 0)
                    }),
                    m = p || 0,
                    g = h / (2 * Math.sqrt(u * c)),
                    v = a - o,
                    y = P(Math.sqrt(u / c)),
                    x = 5 > Math.abs(v);
                if (r || (r = x ? .01 : 2), n || (n = x ? .005 : .5), g < 1) {
                    let t = eh(y, g);
                    e = e => a - Math.exp(-g * y * e) * ((m + g * y * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
                } else if (1 === g) e = t => a - Math.exp(-y * t) * (v + (m + y * v) * t);
                else {
                    let t = y * Math.sqrt(g * g - 1);
                    e = e => {
                        let i = Math.exp(-g * y * e),
                            n = Math.min(t * e, 300);
                        return a - i * ((m + g * y * v) * Math.sinh(n) + t * v * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: f && d || null,
                    next: t => {
                        let i = e(t);
                        if (f) l.done = t >= d;
                        else {
                            let s = 0;
                            g < 1 && (s = 0 === t ? w(m) : el(e, t, i));
                            let o = Math.abs(s) <= r,
                                u = Math.abs(a - i) <= n;
                            l.done = o && u
                        }
                        return l.value = l.done ? a : i, l
                    }
                }
            }

            function em(t) {
                let e, i, {
                        keyframes: n,
                        velocity: r = 0,
                        power: s = .8,
                        timeConstant: o = 325,
                        bounceDamping: a = 10,
                        bounceStiffness: l = 500,
                        modifyTarget: u,
                        min: h,
                        max: c,
                        restDelta: d = .5,
                        restSpeed: p
                    } = t,
                    f = n[0],
                    m = {
                        done: !1,
                        value: f
                    },
                    g = t => void 0 !== h && t < h || void 0 !== c && t > c,
                    v = t => void 0 === h ? c : void 0 === c ? h : Math.abs(h - t) < Math.abs(c - t) ? h : c,
                    y = s * r,
                    x = f + y,
                    w = void 0 === u ? x : u(x);
                w !== x && (y = w - f);
                let P = t => -y * Math.exp(-t / o),
                    S = t => w + P(t),
                    b = t => {
                        let e = P(t),
                            i = S(t);
                        m.done = Math.abs(e) <= d, m.value = m.done ? w : i
                    },
                    A = t => {
                        g(m.value) && (e = t, i = ef({
                            keyframes: [m.value, v(m.value)],
                            velocity: el(S, t, m.value),
                            damping: a,
                            stiffness: l,
                            restDelta: d,
                            restSpeed: p
                        }))
                    };
                return A(0), {
                    calculatedDuration: null,
                    next: t => {
                        let n = !1;
                        return (i || void 0 !== e || (n = !0, b(t), A(t)), void 0 !== e && t >= e) ? i.next(t - e) : (n || b(t), m)
                    }
                }
            }
            let eg = W(.42, 0, 1, 1),
                ev = W(0, 0, .58, 1),
                ey = W(.42, 0, .58, 1),
                ex = t => Array.isArray(t) && "number" != typeof t[0],
                ew = {
                    linear: D,
                    easeIn: eg,
                    easeInOut: ey,
                    easeOut: ev,
                    circIn: K,
                    circInOut: _,
                    circOut: q,
                    backIn: Y,
                    backInOut: G,
                    backOut: H,
                    anticipate: X
                },
                eP = t => {
                    if (Array.isArray(t)) {
                        J(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return W(e, i, n, r)
                    }
                    return "string" == typeof t ? (J(void 0 !== ew[t], "Invalid easing type '".concat(t, "'")), ew[t]) : t
                },
                eS = (t, e) => i => e(t(i)),
                eb = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return e.reduce(eS)
                },
                eA = (t, e, i) => {
                    let n = e - t;
                    return 0 === n ? 1 : (i - t) / n
                },
                eT = (t, e, i) => t + (e - t) * i;

            function eE(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function eM(t, e) {
                return i => i > 0 ? e : t
            }
            let eC = (t, e, i) => {
                    let n = t * t,
                        r = i * (e * e - n) + n;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                eV = [tH, tz, tY],
                eR = t => eV.find(e => e.test(t));

            function ek(t) {
                let e = eR(t);
                if ($(!!e, "'".concat(t, "' is not an animatable color. Use the equivalent color code instead.")), !e) return !1;
                let i = e.parse(t);
                return e === tY && (i = function(t) {
                    let {
                        hue: e,
                        saturation: i,
                        lightness: n,
                        alpha: r
                    } = t;
                    e /= 360, n /= 100;
                    let s = 0,
                        o = 0,
                        a = 0;
                    if (i /= 100) {
                        let t = n < .5 ? n * (1 + i) : n + i - n * i,
                            r = 2 * n - t;
                        s = eE(r, t, e + 1 / 3), o = eE(r, t, e), a = eE(r, t, e - 1 / 3)
                    } else s = o = a = n;
                    return {
                        red: Math.round(255 * s),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * a),
                        alpha: r
                    }
                }(i)), i
            }
            let eD = (t, e) => {
                    let i = ek(t),
                        n = ek(e);
                    if (!i || !n) return eM(t, e);
                    let r = { ...i
                    };
                    return t => (r.red = eC(i.red, n.red, t), r.green = eC(i.green, n.green, t), r.blue = eC(i.blue, n.blue, t), r.alpha = eT(i.alpha, n.alpha, t), tz.transform(r))
                },
                eL = new Set(["none", "hidden"]);

            function ej(t, e) {
                return i => eT(t, e, i)
            }

            function eF(t) {
                return "number" == typeof t ? ej : "string" == typeof t ? tn(t) ? eM : tG.test(t) ? eD : eI : Array.isArray(t) ? eB : "object" == typeof t ? tG.test(t) ? eD : eO : eM
            }

            function eB(t, e) {
                let i = [...t],
                    n = i.length,
                    r = t.map((t, i) => eF(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < n; e++) i[e] = r[e](t);
                    return i
                }
            }

            function eO(t, e) {
                let i = { ...t,
                        ...e
                    },
                    n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = eF(t[r])(t[r], e[r]));
                return t => {
                    for (let e in n) i[e] = n[e](t);
                    return i
                }
            }
            let eI = (t, e) => {
                let i = tQ.createTransformer(e),
                    n = t_(t),
                    r = t_(e);
                return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? eL.has(t) && !r.values.length || eL.has(e) && !n.values.length ? function(t, e) {
                    return eL.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t
                }(t, e) : eb(eB(function(t, e) {
                    var i;
                    let n = [],
                        r = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][r[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        n[s] = l, r[o]++
                    }
                    return n
                }(n, r), r.values), i) : ($(!0, "Complex values '".concat(t, "' and '").concat(e, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")), eM(t, e))
            };

            function eU(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? eT(t, e, i) : eF(t)(t, e)
            }

            function eW(t, e) {
                let {
                    clamp: i = !0,
                    ease: n,
                    mixer: r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = t.length;
                if (J(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                if (2 === s && t[0] === t[1]) return () => e[1];
                t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let o = function(t, e, i) {
                        let n = [],
                            r = i || eU,
                            s = t.length - 1;
                        for (let i = 0; i < s; i++) {
                            let s = r(t[i], t[i + 1]);
                            e && (s = eb(Array.isArray(e) ? e[i] || D : e, s)), n.push(s)
                        }
                        return n
                    }(e, n, r),
                    a = o.length,
                    l = e => {
                        let i = 0;
                        if (a > 1)
                            for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                        let n = eA(t[i], t[i + 1], e);
                        return o[i](n)
                    };
                return i ? e => l(to(t[0], t[s - 1], e)) : l
            }

            function eN(t, e) {
                let i = t[t.length - 1];
                for (let n = 1; n <= e; n++) {
                    let r = eA(0, e, n);
                    t.push(eT(i, 1, r))
                }
            }

            function ez(t) {
                let e = [0];
                return eN(e, t.length - 1), e
            }

            function eH(t) {
                let {
                    duration: e = 300,
                    keyframes: i,
                    times: n,
                    ease: r = "easeInOut"
                } = t, s = ex(r) ? r.map(eP) : eP(r), o = {
                    done: !1,
                    value: i[0]
                }, a = eW((n && n.length === i.length ? n : ez(i)).map(t => t * e), i, {
                    ease: Array.isArray(s) ? s : i.map(() => s || ey).splice(0, i.length - 1)
                });
                return {
                    calculatedDuration: e,
                    next: t => (o.value = a(t), o.done = t >= e, o)
                }
            }

            function eY(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let eG = t => {
                    let e = e => {
                        let {
                            timestamp: i
                        } = e;
                        return t(i)
                    };
                    return {
                        start: () => F.update(e, !0),
                        stop: () => B(e),
                        now: () => O.isProcessing ? O.timestamp : er.now()
                    }
                },
                eX = {
                    decay: em,
                    inertia: em,
                    tween: eH,
                    keyframes: eH,
                    spring: ef
                },
                eK = t => t / 100;
            class eq extends eo {
                initPlayback(t) {
                    let e, i;
                    let {
                        type: n = "keyframes",
                        repeat: r = 0,
                        repeatDelay: s = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, l = ei(n) ? n : eX[n] || eH;
                    l !== eH && "number" != typeof t[0] && (e = eb(eK, eU(t[0], t[1])), t = [0, 100]);
                    let u = l({ ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (i = l({ ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === u.calculatedDuration && (u.calculatedDuration = eY(u));
                    let {
                        calculatedDuration: h
                    } = u, c = h + s;
                    return {
                        generator: u,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: h,
                        resolvedDuration: c,
                        totalDuration: c * (r + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            resolved: i
                        } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: r,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: h
                    } = i;
                    if (null === this.startTime) return r.next(0);
                    let {
                        delay: c,
                        repeat: d,
                        repeatType: p,
                        repeatDelay: f,
                        onUpdate: m
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
                        v = this.speed >= 0 ? g < 0 : g > u;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let y = this.currentTime,
                        x = r;
                    if (d) {
                        let t = Math.min(this.currentTime, u) / h,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i, f && (i -= f / h)) : "mirror" === p && (x = s)), y = to(0, 1, i) * h
                    }
                    let w = v ? {
                        done: !1,
                        value: a[0]
                    } : x.next(y);
                    o && (w.value = o(w.value));
                    let {
                        done: P
                    } = w;
                    v || null === l || (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let S = null === this.holdTime && ("finished" === this.state || "running" === this.state && P);
                    return S && void 0 !== n && (w.value = k(a, this.options, n)), m && m(w.value), S && this.finish(), w
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? P(t.calculatedDuration) : 0
                }
                get time() {
                    return P(this.currentTime)
                }
                set time(t) {
                    t = w(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = P(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = eG,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options, s = (null == n ? void 0 : n.KeyframeResolver) || tO;
                    this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
            }

            function e_(t) {
                return new eq(t)
            }
            let eZ = new Set(["opacity", "clipPath", "filter", "transform"]),
                e$ = t => Array.isArray(t) && "number" == typeof t[0],
                eJ = (t, e) => {
                    let i = "",
                        n = Math.max(Math.round(e / 10), 2);
                    for (let e = 0; e < n; e++) i += t(eA(0, n - 1, e)) + ", ";
                    return "linear(".concat(i.substring(0, i.length - 2), ")")
                },
                eQ = {
                    linearEasing: void 0
                },
                e0 = function(t, e) {
                    let i = ee(t);
                    return () => {
                        var t;
                        return null !== (t = eQ[e]) && void 0 !== t ? t : i()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                e1 = t => {
                    let [e, i, n, r] = t;
                    return "cubic-bezier(".concat(e, ", ").concat(i, ", ").concat(n, ", ").concat(r, ")")
                },
                e2 = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: e1([0, .65, .55, 1]),
                    circOut: e1([.55, 0, 1, .45]),
                    backIn: e1([.31, .01, .66, -.59]),
                    backOut: e1([.33, 1.53, .69, .99])
                };

            function e3(t, e, i) {
                let {
                    delay: n = 0,
                    duration: r = 300,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = {
                    [e]: i
                };
                l && (u.offset = l);
                let h = function t(e, i) {
                    if (e) return "function" == typeof e && e0() ? eJ(e, i) : e$(e) ? e1(e) : Array.isArray(e) ? e.map(e => t(e, i) || e2.easeOut) : e2[e]
                }(a, r);
                return Array.isArray(h) && (u.easing = h), t.animate(u, {
                    delay: n,
                    duration: r,
                    easing: Array.isArray(h) ? "linear" : h,
                    fill: "both",
                    iterations: s + 1,
                    direction: "reverse" === o ? "alternate" : "normal"
                })
            }
            let e5 = ee(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                e9 = {
                    anticipate: X,
                    backInOut: G,
                    circInOut: _
                };
            class e4 extends eo {
                initPlayback(t, e) {
                    var i, n;
                    let {
                        duration: r = 300,
                        times: s,
                        ease: o,
                        type: a,
                        motionValue: l,
                        name: u,
                        startTime: h
                    } = this.options;
                    if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
                    if ("string" == typeof o && e0() && o in e9 && (o = e9[o]), ei((n = this.options).type) || "spring" === n.type || ! function t(e) {
                            return !!("function" == typeof e && e0() || !e || "string" == typeof e && (e in e2 || e0()) || e$(e) || Array.isArray(e) && e.every(t))
                        }(n.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: n,
                            element: l,
                            ...u
                        } = this.options, h = function(t, e) {
                            let i = new eq({ ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                r = [],
                                s = 0;
                            for (; !n.done && s < 2e4;) r.push((n = i.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: r,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), r = h.duration, s = h.times, o = h.ease, a = "keyframes"
                    }
                    let c = e3(l.owner.current, u, t, { ...this.options,
                        duration: r,
                        times: s,
                        ease: o
                    });
                    return c.startTime = null != h ? h : this.calcStartTime(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        l.set(k(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: c,
                        duration: r,
                        times: s,
                        type: a,
                        ease: o,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return P(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return P(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = w(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return D;
                        let {
                            animation: i
                        } = e;
                        i.timeline = t, i.onfinish = null
                    } else this.pendingTimeline = t;
                    return D
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: a,
                            element: l,
                            ...u
                        } = this.options, h = new eq({ ...u,
                            keyframes: i,
                            duration: n,
                            type: r,
                            ease: s,
                            times: o,
                            isGenerator: !0
                        }), c = w(this.time);
                        t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10)
                    }
                    let {
                        onStop: a
                    } = this.options;
                    a && a(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: n,
                        repeatType: r,
                        damping: s,
                        type: o
                    } = t;
                    return e5() && i && eZ.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
                }
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options;
                    this.resolver = new et(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
            }

            function e6(t, e) {
                let i;
                let n = () => {
                    let {
                        currentTime: n
                    } = e, r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), i = r
                };
                return F.update(n, !0), () => B(n)
            }
            let e8 = ee(() => void 0 !== window.ScrollTimeline);
            class e7 {
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t) {
                    let e = this.animations.map(e => {
                        if (!e8() || !e.attachTimeline) return e.pause(), e6(t => {
                            e.time = e.duration * t
                        }, t);
                        e.attachTimeline(t)
                    });
                    return () => {
                        e.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
            }
            let it = function(t, e, i) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        s = arguments.length > 5 ? arguments[5] : void 0;
                    return o => {
                        let a = M(n, t) || {},
                            l = a.delay || n.delay || 0,
                            {
                                elapsed: u = 0
                            } = n;
                        u -= w(l);
                        let h = {
                            keyframes: Array.isArray(i) ? i : [null, i],
                            ease: "easeOut",
                            velocity: e.getVelocity(),
                            ...a,
                            delay: -u,
                            onUpdate: t => {
                                e.set(t), a.onUpdate && a.onUpdate(t)
                            },
                            onComplete: () => {
                                o(), a.onComplete && a.onComplete()
                            },
                            name: t,
                            motionValue: e,
                            element: s ? void 0 : r
                        };
                        ! function(t) {
                            let {
                                when: e,
                                delay: i,
                                delayChildren: n,
                                staggerChildren: r,
                                staggerDirection: s,
                                repeat: o,
                                repeatType: a,
                                repeatDelay: l,
                                from: u,
                                elapsed: h,
                                ...c
                            } = t;
                            return !!Object.keys(c).length
                        }(a) && (h = { ...h,
                            ...E(t, h)
                        }), h.duration && (h.duration = w(h.duration)), h.repeatDelay && (h.repeatDelay = w(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                        let c = !1;
                        if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 !== h.delay || (c = !0)), (V.current || C.skipAnimations) && (c = !0, h.duration = 0, h.delay = 0), c && !s && void 0 !== e.get()) {
                            let t = k(h.keyframes, a);
                            if (void 0 !== t) return F.update(() => {
                                h.onUpdate(t), h.onComplete()
                            }), new e7([])
                        }
                        return !s && e4.supports(h) ? new e4(h) : new eq(h)
                    }
                },
                ie = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                ii = t => c(t) ? t[t.length - 1] || 0 : t;

            function ir(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function is(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class io {
                add(t) {
                    return ir(this.subscriptions, t), () => is(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
                constructor() {
                    this.subscriptions = []
                }
            }
            let ia = t => !isNaN(parseFloat(t)),
                il = {
                    current: void 0
                };
            class iu {
                setCurrent(t) {
                    this.current = t, this.updatedAt = er.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = ia(this.current))
                }
                setPrevFrameValue() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new io);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), F.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return il.current && il.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let t = er.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return ea(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                constructor(t, e = {}) {
                    var i = this;
                    this.version = "11.8.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = function(t) {
                        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = er.now();
                        i.updatedAt !== n && i.setPrevFrameValue(), i.prev = i.current, i.setCurrent(t), i.current !== i.prev && i.events.change && i.events.change.notify(i.current), e && i.events.renderRequest && i.events.renderRequest.notify(i.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
            }

            function ih(t, e) {
                return new iu(t, e)
            }

            function ic(t, e) {
                let {
                    transitionEnd: i = {},
                    transition: n = {},
                    ...r
                } = m(t, e) || {};
                for (let e in r = { ...r,
                        ...i
                    }) {
                    let i = ii(r[e]);
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, ih(i))
                }
            }
            let id = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                ip = "framerAppearId",
                im = "data-" + id(ip);

            function ig(t) {
                return t.props[im]
            }

            function iv(t) {
                return x.has(t) ? "transform" : eZ.has(t) ? id(t) : void 0
            }
            class iy extends iu {
                add(t) {
                    let e = iv(t);
                    e && (ir(this.values, e), this.update())
                }
                update() {
                    this.set(this.values.length ? this.values.join(", ") : "auto")
                }
                constructor() {
                    super(...arguments), this.values = []
                }
            }
            let ix = t => !!(t && t.getVelocity);

            function iw(t, e) {
                var i, n;
                if (!t.applyWillChange) return;
                let r = t.getValue("willChange");
                if (r || (null === (i = t.props.style) || void 0 === i ? void 0 : i.willChange) || (r = new iy("auto"), t.addValue("willChange", r)), ix(n = r) && n.add) return r.add(e)
            }

            function iP(t, e) {
                var i;
                let {
                    delay: n = 0,
                    transitionOverride: r,
                    type: s
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e;
                r && (o = r);
                let u = [],
                    h = s && t.animationState && t.animationState.getState()[s];
                for (let e in l) {
                    let r = t.getValue(e, null !== (i = t.latestValues[e]) && void 0 !== i ? i : null),
                        s = l[e];
                    if (void 0 === s || h && function(t, e) {
                            let {
                                protectedKeys: i,
                                needsAnimating: n
                            } = t, r = i.hasOwnProperty(e) && !0 !== n[e];
                            return n[e] = !1, r
                        }(h, e)) continue;
                    let a = {
                            delay: n,
                            ...M(o || {}, e)
                        },
                        c = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = ig(t);
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, F);
                            null !== t && (a.startTime = t, c = !0)
                        }
                    }
                    iw(t, e), r.start(it(e, r, s, t.shouldReduceMotion && x.has(e) ? {
                        type: !1
                    } : a, t, c));
                    let d = r.animation;
                    d && u.push(d)
                }
                return a && Promise.all(u).then(() => {
                    F.update(() => {
                        a && ic(t, a)
                    })
                }), u
            }

            function iS(t, e) {
                var i;
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = m(t, e, "exit" === n.type ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = r || {};
                n.transitionOverride && (s = n.transitionOverride);
                let o = r ? () => Promise.all(iP(t, r, n)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? function() {
                        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            {
                                delayChildren: r = 0,
                                staggerChildren: o,
                                staggerDirection: a
                            } = s;
                        return function(t, e) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                s = arguments.length > 5 ? arguments[5] : void 0,
                                o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    return t * n
                                } : function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    return a - t * n
                                };
                            return Array.from(t.variantChildren).sort(ib).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(iS(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + i, o, a, n)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(n.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function ib(t, e) {
                return t.sortNodePosition(e)
            }

            function iA(t, e) {
                let i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (t.notify("AnimationStart", e), Array.isArray(e)) i = Promise.all(e.map(e => iS(t, e, n)));
                else if ("string" == typeof e) i = iS(t, e, n);
                else {
                    let r = "function" == typeof e ? m(t, e, n.custom) : e;
                    i = Promise.all(iP(t, r, n))
                }
                return i.then(() => {
                    t.notify("AnimationComplete", e)
                })
            }
            let iT = v.length,
                iE = [...g].reverse(),
                iM = g.length;

            function iC() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function iV() {
                return {
                    animate: iC(!0),
                    whileInView: iC(),
                    whileHover: iC(),
                    whileTap: iC(),
                    whileDrag: iC(),
                    whileFocus: iC(),
                    exit: iC()
                }
            }
            class iR {
                update() {}
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
            }
            class ik extends iR {
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    h(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(e => {
                                let {
                                    animation: i,
                                    options: n
                                } = e;
                                return iA(t, i, n)
                            })),
                            i = iV(),
                            n = !0,
                            r = e => (i, n) => {
                                var r;
                                let s = m(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = s;
                                    i = { ...i,
                                        ...n,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function s(s) {
                            let {
                                props: o
                            } = t, a = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < iT; t++) {
                                    let n = v[t],
                                        r = e.props[n];
                                    (p(r) || !1 === r) && (i[n] = r)
                                }
                                return i
                            }(t.parent) || {}, l = [], u = new Set, f = {}, m = 1 / 0;
                            for (let e = 0; e < iM; e++) {
                                var g;
                                let v = iE[e],
                                    y = i[v],
                                    x = void 0 !== o[v] ? o[v] : a[v],
                                    w = p(x),
                                    P = v === s ? y.isActive : null;
                                !1 === P && (m = e);
                                let S = x === a[v] && x !== o[v] && w;
                                if (S && n && t.manuallyAnimateOnMount && (S = !1), y.protectedKeys = { ...f
                                    }, !y.isActive && null === P || !x && !y.prevProp || h(x) || "boolean" == typeof x) continue;
                                let b = (g = y.prevProp, "string" == typeof x ? x !== g : !!Array.isArray(x) && !d(x, g)),
                                    A = b || v === s && y.isActive && !S && w || e > m && w,
                                    T = !1,
                                    E = Array.isArray(x) ? x : [x],
                                    M = E.reduce(r(v), {});
                                !1 === P && (M = {});
                                let {
                                    prevResolvedValues: C = {}
                                } = y, V = { ...C,
                                    ...M
                                }, R = e => {
                                    A = !0, u.has(e) && (T = !0, u.delete(e)), y.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in V) {
                                    let e = M[t],
                                        i = C[t];
                                    if (!f.hasOwnProperty(t))(c(e) && c(i) ? d(e, i) : e === i) ? void 0 !== e && u.has(t) ? R(t) : y.protectedKeys[t] = !0 : null != e ? R(t) : u.add(t)
                                }
                                y.prevProp = x, y.prevResolvedValues = M, y.isActive && (f = { ...f,
                                    ...M
                                }), n && t.blockInitialAnimation && (A = !1);
                                let k = !(S && b) || T;
                                A && k && l.push(...E.map(t => ({
                                    animation: t,
                                    options: {
                                        type: v
                                    }
                                })))
                            }
                            if (u.size) {
                                let e = {};
                                u.forEach(i => {
                                    let n = t.getBaseTarget(i),
                                        r = t.getValue(i);
                                    r && (r.liveStyle = !0), e[i] = null != n ? n : null
                                }), l.push({
                                    animation: e
                                })
                            }
                            let y = !!l.length;
                            return n && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (y = !1), n = !1, y ? e(l) : Promise.resolve()
                        }
                        return {
                            animateChanges: s,
                            setActive: function(e, n) {
                                var r;
                                if (i[e].isActive === n) return Promise.resolve();
                                null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let o = s(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return o
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = iV(), n = !0
                            }
                        }
                    }(t))
                }
            }
            let iD = 0;
            class iL extends iR {
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
                constructor() {
                    super(...arguments), this.id = iD++
                }
            }
            let ij = {
                    animation: {
                        Feature: ik
                    },
                    exit: {
                        Feature: iL
                    }
                },
                iF = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function iB(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page";
                return {
                    point: {
                        x: t["".concat(e, "X")],
                        y: t["".concat(e, "Y")]
                    }
                }
            }
            let iO = t => e => iF(e) && t(e, iB(e));

            function iI(t, e, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    passive: !0
                };
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }

            function iU(t, e, i, n) {
                return iI(t, e, iO(i), n)
            }
            let iW = (t, e) => Math.abs(t - e);

            function iN(t, e) {
                return Math.sqrt(iW(t.x, e.x) ** 2 + iW(t.y, e.y) ** 2)
            }
            class iz {
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), B(this.updatePoint)
                }
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = iG(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = iN(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: n
                            } = t, {
                                timestamp: r
                            } = O;
                            this.history.push({ ...n,
                                timestamp: r
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = iH(e, this.transformPagePoint), F.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: n,
                                resumeAnimation: r
                            } = this.handlers;
                            if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = iG("pointercancel" === t.type ? this.lastMoveEventInfo : iH(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !iF(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let s = iH(iB(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = O;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, iG(s, this.history)), this.removeListeners = eb(iU(this.contextWindow, "pointermove", this.handlePointerMove), iU(this.contextWindow, "pointerup", this.handlePointerUp), iU(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
            }

            function iH(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function iY(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function iG(t, e) {
                let {
                    point: i
                } = t;
                return {
                    point: i,
                    delta: iY(i, iX(e)),
                    offset: iY(i, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = iX(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > w(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = P(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function iX(t) {
                return t[t.length - 1]
            }

            function iK(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let iq = iK("dragHorizontal"),
                i_ = iK("dragVertical");

            function iZ(t) {
                let e = !1;
                if ("y" === t) e = i_();
                else if ("x" === t) e = iq();
                else {
                    let t = iq(),
                        i = i_();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function i$() {
                let t = iZ(!0);
                return !t || (t(), !1)
            }

            function iJ(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function iQ(t) {
                return t.max - t.min
            }

            function i0(t, e, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                t.origin = n, t.originPoint = eT(e.min, e.max, t.origin), t.scale = iQ(i) / iQ(e), t.translate = eT(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function i1(t, e, i, n) {
                i0(t.x, e.x, i.x, n ? n.originX : void 0), i0(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function i2(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + iQ(e)
            }

            function i3(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + iQ(e)
            }

            function i5(t, e, i) {
                i3(t.x, e.x, i.x), i3(t.y, e.y, i.y)
            }

            function i9(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function i4(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function i6(t, e, i) {
                return {
                    min: i8(t, e),
                    max: i8(t, i)
                }
            }

            function i8(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let i7 = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                nt = () => ({
                    x: i7(),
                    y: i7()
                }),
                ne = () => ({
                    min: 0,
                    max: 0
                }),
                ni = () => ({
                    x: ne(),
                    y: ne()
                });

            function nn(t) {
                return [t("x"), t("y")]
            }

            function nr(t) {
                let {
                    top: e,
                    left: i,
                    right: n,
                    bottom: r
                } = t;
                return {
                    x: {
                        min: i,
                        max: n
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }

            function ns(t) {
                return void 0 === t || 1 === t
            }

            function no(t) {
                let {
                    scale: e,
                    scaleX: i,
                    scaleY: n
                } = t;
                return !ns(e) || !ns(i) || !ns(n)
            }

            function na(t) {
                return no(t) || nl(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function nl(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function nu(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function nh(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                t.min = nu(t.min, e, i, n, r), t.max = nu(t.max, e, i, n, r)
            }

            function nc(t, e) {
                let {
                    x: i,
                    y: n
                } = e;
                nh(t.x, i.translate, i.scale, i.originPoint), nh(t.y, n.translate, n.scale, n.originPoint)
            }

            function nd(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function np(t, e, i, n) {
                let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5,
                    s = eT(t.min, t.max, r);
                nh(t, e, i, s, n)
            }

            function nf(t, e) {
                np(t.x, e.x, e.scaleX, e.scale, e.originX), np(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function nm(t, e) {
                return nr(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let ng = t => {
                    let {
                        current: e
                    } = t;
                    return e ? e.ownerDocument.defaultView : null
                },
                nv = new WeakMap;
            class ny {
                start(t) {
                    let {
                        snapToCursor: e = !1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new iz(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(iB(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = iZ(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nn(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tv.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        n && (e = iQ(n) * (parseFloat(e) / 100))
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && F.postRender(() => r(t, e)), iw(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t) {
                                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                        i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => nn(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: ng(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && F.postRender(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !nx(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, e, i) {
                        let {
                            min: n,
                            max: r
                        } = e;
                        return void 0 !== n && t < n ? t = i ? eT(n, t, i.min) : Math.max(t, n) : void 0 !== r && t > r && (t = i ? eT(r, t, i.max) : Math.min(t, r)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                    e && iJ(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, e) {
                        let {
                            top: i,
                            left: n,
                            bottom: r,
                            right: s
                        } = e;
                        return {
                            x: i9(t.x, n, s),
                            y: i9(t.y, i, r)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .35;
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: i6(t, "left", "right"),
                            y: i6(t, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && nn(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !iJ(e)) return !1;
                    let n = e.current;
                    J(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = nm(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (nd(n.x, r.offset.x), nd(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: i4((t = r.layout.layoutBox).x, s.x),
                            y: i4(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function(t) {
                            let {
                                x: e,
                                y: i
                            } = t;
                            return {
                                top: i.min,
                                right: e.max,
                                bottom: i.max,
                                left: e.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = nr(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(nn(o => {
                        if (!nx(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return iw(this.visualElement, t), i.start(it(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    nn(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    nn(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = "_drag".concat(t.toUpperCase()),
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    nn(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!nx(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - eT(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!iJ(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    nn(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = iQ(t),
                                    r = iQ(e);
                                return r > n ? i = eA(e.min, e.max - n, t.min) : n > r && (i = eA(t.min, t.max - r, e.min)), to(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), nn(e => {
                        if (!nx(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set(eT(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    nv.set(this.visualElement, this);
                    let t = iU(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            iJ(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), F.read(e);
                    let r = iI(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", t => {
                            let {
                                delta: e,
                                hasLayoutChanged: i
                            } = t;
                            this.isDragging && i && (nn(t => {
                                let i = this.getAxisMotionValue(t);
                                i && (this.originPoint[t] += e[t].translate, i.set(i.get() + e[t].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ni(), this.visualElement = t
                }
            }

            function nx(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class nw extends iR {
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || D
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
                constructor(t) {
                    super(t), this.removeGroupControls = D, this.removeListeners = D, this.controls = new ny(t)
                }
            }
            let nP = t => (e, i) => {
                t && F.postRender(() => t(e, i))
            };
            class nS extends iR {
                onPointerDown(t) {
                    this.session = new iz(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: ng(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: nP(t),
                        onStart: nP(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && F.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = iU(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
                constructor() {
                    super(...arguments), this.removePointerDownListener = D
                }
            }
            var nb = i(154),
                nA = i(98930);
            let nT = (0, nA.createContext)(null);

            function nE() {
                let t = (0, nA.useContext)(nT);
                if (null === t) return [!0, null];
                let {
                    isPresent: e,
                    onExitComplete: i,
                    register: n
                } = t, r = (0, nA.useId)();
                (0, nA.useEffect)(() => n(r), []);
                let s = (0, nA.useCallback)(() => i && i(r), [r, i]);
                return !e && i ? [!1, s] : [!0]
            }

            function nM() {
                var t;
                return null === (t = (0, nA.useContext)(nT)) || t.isPresent
            }
            let nC = (0, nA.createContext)({}),
                nV = (0, nA.createContext)({}),
                nR = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function nk(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let nD = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!ty.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let i = nk(t, e.target.x),
                            n = nk(t, e.target.y);
                        return "".concat(i, "% ").concat(n, "%")
                    }
                },
                nL = {};

            function nj(t) {
                Object.assign(nL, t)
            }
            let {
                schedule: nF,
                cancel: nB
            } = j(queueMicrotask, !1);
            class nO extends nA.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    nj(nU), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), nR.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || F.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), nF.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function nI(t) {
                let [e, i] = nE(), n = (0, nA.useContext)(nC);
                return (0, nb.jsx)(nO, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, nA.useContext)(nV),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let nU = {
                    borderRadius: { ...nD,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: nD,
                    borderTopRightRadius: nD,
                    borderBottomLeftRadius: nD,
                    borderBottomRightRadius: nD,
                    boxShadow: {
                        correct: (t, e) => {
                            let {
                                treeScale: i,
                                projectionDelta: n
                            } = e, r = tQ.parse(t);
                            if (r.length > 5) return t;
                            let s = tQ.createTransformer(t),
                                o = "number" != typeof r[0] ? 1 : 0,
                                a = n.x.scale * i.x,
                                l = n.y.scale * i.y;
                            r[0 + o] /= a, r[1 + o] /= l;
                            let u = eT(a, l, .5);
                            return "number" == typeof r[2 + o] && (r[2 + o] /= u), "number" == typeof r[3 + o] && (r[3 + o] /= u), s(r)
                        }
                    }
                },
                nW = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nN = nW.length,
                nz = t => "string" == typeof t ? parseFloat(t) : t,
                nH = t => "number" == typeof t || ty.test(t);

            function nY(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let nG = nK(0, .5, q),
                nX = nK(.5, .95, D);

            function nK(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i(eA(t, e, n))
            }

            function nq(t, e) {
                t.min = e.min, t.max = e.max
            }

            function n_(t, e) {
                nq(t.x, e.x), nq(t.y, e.y)
            }

            function nZ(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function n$(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function nJ(t, e, i, n, r) {
                let [s, o, a] = i;
                ! function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t,
                        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : t;
                    if (tv.test(e) && (e = parseFloat(e), e = eT(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = eT(s.min, s.max, n);
                    t === s && (a -= e), t.min = n$(t.min, e, i, a, r), t.max = n$(t.max, e, i, a, r)
                }(t, e[s], e[o], e[a], e.scale, n, r)
            }
            let nQ = ["x", "scaleX", "originX"],
                n0 = ["y", "scaleY", "originY"];

            function n1(t, e, i, n) {
                nJ(t.x, e, nQ, i ? i.x : void 0, n ? n.x : void 0), nJ(t.y, e, n0, i ? i.y : void 0, n ? n.y : void 0)
            }

            function n2(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function n3(t) {
                return n2(t.x) && n2(t.y)
            }

            function n5(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function n9(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function n4(t, e) {
                return n9(t.x, e.x) && n9(t.y, e.y)
            }

            function n6(t) {
                return iQ(t.x) / iQ(t.y)
            }

            function n8(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class n7 {
                add(t) {
                    ir(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (is(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
                constructor() {
                    this.members = []
                }
            }
            let rt = (t, e) => t.depth - e.depth;
            class re {
                add(t) {
                    ir(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    is(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(rt), this.isDirty = !1, this.children.forEach(t)
                }
                constructor() {
                    this.children = [], this.isDirty = !1
                }
            }

            function ri(t) {
                let e = ix(t) ? t.get() : t;
                return ie(e) ? e.toValue() : e
            }

            function rn(t, e) {
                let i = er.now(),
                    n = r => {
                        let {
                            timestamp: s
                        } = r, o = s - i;
                        o >= e && (B(n), t(o - e))
                    };
                return F.read(n, !0), () => B(n)
            }

            function rr(t) {
                return t instanceof SVGElement && "svg" !== t.tagName
            }

            function rs(t, e, i) {
                let n = ix(t) ? t : ih(t);
                return n.start(it("", n, e, i)), n.animation
            }
            let ro = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                ra = "undefined" != typeof window && void 0 !== window.MotionDebug,
                rl = ["", "X", "Y", "Z"],
                ru = {
                    visibility: "hidden"
                },
                rh = 0;

            function rc(t, e, i, n) {
                let {
                    latestValues: r
                } = e;
                r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function rd(t) {
                let {
                    attachResizeListener: e,
                    defaultParent: i,
                    measureScroll: n,
                    checkIsScrollRoot: r,
                    resetTransform: s
                } = t;
                return class {
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new io), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t) {
                        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        let r = this.eventHandlers.get(t);
                        r && r.notify(...i)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root.hasTreeAnimated;
                        if (this.instance) return;
                        this.isSVG = rr(t), this.instance = t;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), e) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            e(t, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = rn(n, 250), nR.hasAnimatedSinceResize && (nR.hasAnimatedSinceResize = !1, this.nodes.forEach(rP))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", t => {
                            let {
                                delta: e,
                                hasLayoutChanged: i,
                                hasRelativeTargetChanged: n,
                                layout: r
                            } = t;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let o = this.options.transition || s.getDefaultTransition() || rV,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: l
                                } = s.getProps(),
                                u = !this.targetLayout || !n4(this.targetLayout, r) || n,
                                h = !i && n;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || i && (u || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, h);
                                let t = { ...M(o, "layout"),
                                    onPlay: a,
                                    onComplete: l
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
                            } else i || rP(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, B(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(rA), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate() {
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let n = ig(i);
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", F, !(t || i))
                                }
                                let {
                                    parent: r
                                } = e;
                                r && !r.hasCheckedOptimisedAppear && t(r)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ry);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(rx), this.isUpdating = !1, this.nodes.forEach(rw), this.nodes.forEach(rp), this.nodes.forEach(rf), this.clearAllSnapshots();
                        let t = er.now();
                        O.delta = to(0, 1e3 / 60, t - O.timestamp), O.timestamp = t, O.isProcessing = !0, I.update.process(O), I.preRender.process(O), I.render.process(O), O.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, nF.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(rv), this.sharedNodes.forEach(rT)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        F.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = ni(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
                            e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = r(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: n(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!s) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !n3(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            r = n !== this.prevTransformTemplateValue;
                        t && (e || na(this.latestValues) || r) && (s(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure() {
                        var t;
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return e && (n = this.removeTransform(n)), rD((t = n).x), rD(t.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return ni();
                        let i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(rj))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (nd(i.x, t.offset.x), nd(i.y, t.offset.y))
                        }
                        return i
                    }
                    removeElementScroll(t) {
                        var e;
                        let i = ni();
                        if (n_(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            n !== this.root && r && s.layoutScroll && (r.wasRoot && n_(i, t), nd(i.x, r.offset.x), nd(i.y, r.offset.y))
                        }
                        return i
                    }
                    applyTransform(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = ni();
                        n_(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && nf(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), na(n.latestValues) && nf(i, n.latestValues)
                        }
                        return na(this.latestValues) && nf(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = ni();
                        n_(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !na(i.latestValues)) continue;
                            no(i.latestValues) && i.updateSnapshot();
                            let n = ni();
                            n_(n, i.measurePageBox()), n1(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return na(this.latestValues) && n1(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== O.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta() {
                        var t, e, i, n;
                        let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(r || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = O.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ni(), this.relativeTargetOrigin = ni(), i5(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), n_(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = ni(), this.targetWithTransforms = ni()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), e = this.target, i = this.relativeTarget, n = this.relativeParent.target, i2(e.x, i.x, n.x), i2(e.y, i.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : n_(this.target, this.layout.layoutBox), nc(this.target, this.targetDelta)) : n_(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ni(), this.relativeTargetOrigin = ni(), i5(this.relativeTargetOrigin, this.target, t.target), n_(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                ra && ro.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || no(this.parent.latestValues) || nl(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === O.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        n_(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i) {
                            let n, r, s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    r = (n = i[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = n.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && nf(t, {
                                        x: -n.scroll.offset.x,
                                        y: -n.scroll.offset.y
                                    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, nc(t, r)), s && na(n.latestValues) && nf(t, n.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = ni());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (nZ(this.prevProjectionDelta.x, this.projectionDelta.x), nZ(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), i1(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && n8(this.projectionDelta.x, this.prevProjectionDelta.x) && n8(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), ra && ro.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender() {
                        var t;
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(), e) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = nt(), this.projectionDelta = nt(), this.projectionDeltaWithTransform = nt()
                    }
                    setAnimationOrigin(t) {
                        let e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = nt();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !i;
                        let a = ni(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(rC));
                        this.animationProgress = 0, this.mixTargetDelta = i => {
                            let n = i / 1e3;
                            if (rE(o.x, t.x, n), rE(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, p, f;
                                i5(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, rM(p.x, f.x, a.x, n), rM(p.y, f.y, a.y, n), e && (u = this.relativeTarget, d = e, n5(u.x, d.x) && n5(u.y, d.y)) && (this.isProjectionDirty = !1), e || (e = ni()), n_(e, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = eT(0, void 0 !== i.opacity ? i.opacity : 1, nG(n)), t.opacityExit = eT(void 0 !== e.opacity ? e.opacity : 1, 0, nX(n))) : s && (t.opacity = eT(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < nN; r++) {
                                    let s = "border".concat(nW[r], "Radius"),
                                        o = nY(e, s),
                                        a = nY(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || nH(o) === nH(a) ? (t[s] = Math.max(eT(nz(o), nz(a), n), 0), (tv.test(a) || tv.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = eT(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (B(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = F.update(() => {
                            nR.hasAnimatedSinceResize = !0, this.currentAnimation = rs(0, 1e3, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && rL(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || ni();
                                let e = iQ(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = iQ(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            n_(e, i), nf(e, r), i1(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new n7), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote() {
                        let {
                            needsReset: t,
                            transition: e,
                            preserveFollowOpacity: i
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let n = {};
                        i.z && rc("z", t, n, this.animationValues);
                        for (let e = 0; e < rl.length; e++) rc("rotate".concat(rl[e]), t, n, this.animationValues), rc("skew".concat(rl[e]), t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return ru;
                        let n = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = ri(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = ri(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !na(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(t, e, i) {
                            let n = "",
                                r = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                o = (null == i ? void 0 : i.z) || 0;
                            if ((r || s || o) && (n = "translate3d(".concat(r, "px, ").concat(s, "px, ").concat(o, "px) ")), (1 !== e.x || 1 !== e.y) && (n += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: r,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = i;
                                t && (n = "perspective(".concat(t, "px) ").concat(n)), e && (n += "rotate(".concat(e, "deg) ")), r && (n += "rotateX(".concat(r, "deg) ")), s && (n += "rotateY(".concat(s, "deg) ")), o && (n += "skewX(".concat(o, "deg) ")), a && (n += "skewY(".concat(a, "deg) "))
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (n += "scale(".concat(a, ", ").concat(l, ")")), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = "".concat(100 * a.origin, "% ").concat(100 * l.origin, "% 0"), s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, nL) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = nL[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? ri(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ry), this.root.sharedNodes.clear()
                    }
                    constructor(t = {}, e = null == i ? void 0 : i()) {
                        this.id = rh++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, ra && (ro.totalNodes = ro.resolvedTargetDeltas = ro.recalculatedProjection = 0), this.nodes.forEach(rm), this.nodes.forEach(rS), this.nodes.forEach(rb), this.nodes.forEach(rg), ra && window.MotionDebug.record(ro)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = e ? e.root || e : this, this.path = e ? [...e.path, e] : [], this.parent = e, this.depth = e ? e.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new re)
                    }
                }
            }

            function rp(t) {
                t.updateLayout()
            }

            function rf(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? nn(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = iQ(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : rL(r, i.layoutBox, e) && nn(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = iQ(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = nt();
                    i1(o, e, i.layoutBox);
                    let a = nt();
                    s ? i1(a, t.applyTransform(n, !0), i.measuredBox) : i1(a, e, i.layoutBox);
                    let l = !n3(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = ni();
                                i5(o, i.layoutBox, r.layoutBox);
                                let a = ni();
                                i5(a, e, s.layoutBox), n4(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function rm(t) {
                ra && ro.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function rg(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function rv(t) {
                t.clearSnapshot()
            }

            function ry(t) {
                t.clearMeasurements()
            }

            function rx(t) {
                t.isLayoutDirty = !1
            }

            function rw(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function rP(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function rS(t) {
                t.resolveTargetDelta()
            }

            function rb(t) {
                t.calcProjection()
            }

            function rA(t) {
                t.resetSkewAndRotation()
            }

            function rT(t) {
                t.removeLeadSnapshot()
            }

            function rE(t, e, i) {
                t.translate = eT(e.translate, 0, i), t.scale = eT(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function rM(t, e, i, n) {
                t.min = eT(e.min, i.min, n), t.max = eT(e.max, i.max, n)
            }

            function rC(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let rV = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                rR = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                rk = rR("applewebkit/") && !rR("chrome/") ? Math.round : D;

            function rD(t) {
                t.min = rk(t.min), t.max = rk(t.max)
            }

            function rL(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(n6(e) - n6(i)))
            }

            function rj(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let rF = rd({
                    attachResizeListener: (t, e) => iI(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                rB = {
                    current: void 0
                },
                rO = rd({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!rB.current) {
                            let t = new rF({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), rB.current = t
                        }
                        return rB.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                rI = {
                    pan: {
                        Feature: nS
                    },
                    drag: {
                        Feature: nw,
                        ProjectionNode: rO,
                        MeasureLayout: nI
                    }
                };

            function rU(t, e) {
                let i = e ? "onHoverStart" : "onHoverEnd";
                return iU(t.current, e ? "pointerenter" : "pointerleave", (n, r) => {
                    if ("touch" === n.pointerType || i$()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e);
                    let o = s[i];
                    o && F.postRender(() => o(n, r))
                }, {
                    passive: !t.getProps()[i]
                })
            }
            class rW extends iR {
                mount() {
                    this.unmount = eb(rU(this.node, !0), rU(this.node, !1))
                }
                unmount() {}
            }
            class rN extends iR {
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = eb(iI(this.node.current, "focus", () => this.onFocus()), iI(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
                constructor() {
                    super(...arguments), this.isActive = !1
                }
            }
            let rz = (t, e) => !!e && (t === e || rz(t, e.parentElement));

            function rH(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, iB(i))
            }
            class rY extends iR {
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: i,
                        whileTap: n
                    } = this.node.getProps();
                    n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && F.postRender(() => i(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !i$()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: i
                    } = this.node.getProps();
                    i && F.postRender(() => i(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = iU(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        i = iI(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = eb(e, i)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
                constructor() {
                    super(...arguments), this.removeStartListeners = D, this.removeEndListeners = D, this.removeAccessibleListeners = D, this.startPointerPress = (t, e) => {
                        if (this.isPressing) return;
                        this.removeEndListeners();
                        let i = this.node.getProps(),
                            n = iU(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: i,
                                    onTapCancel: n,
                                    globalTapTarget: r
                                } = this.node.getProps(), s = r || rz(this.node.current, t.target) ? i : n;
                                s && F.update(() => s(t, e))
                            }, {
                                passive: !(i.onTap || i.onPointerUp)
                            }),
                            r = iU(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(i.onTapCancel || i.onPointerCancel)
                            });
                        this.removeEndListeners = eb(n, r), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = iI(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = iI(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && rH("up", (t, e) => {
                                        let {
                                            onTap: i
                                        } = this.node.getProps();
                                        i && F.postRender(() => i(t, e))
                                    })
                                }), rH("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = iI(this.node.current, "blur", () => {
                                this.isPressing && rH("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = eb(t, e)
                    }
                }
            }
            let rG = new WeakMap,
                rX = new WeakMap,
                rK = t => {
                    let e = rG.get(t.target);
                    e && e(t)
                },
                rq = t => {
                    t.forEach(rK)
                },
                r_ = {
                    some: 0,
                    all: 1
                };
            class rZ extends iR {
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : r_[n]
                    };
                    return function(t, e, i) {
                        let n = function(t) {
                            let {
                                root: e,
                                ...i
                            } = t, n = e || document;
                            rX.has(n) || rX.set(n, {});
                            let r = rX.get(n),
                                s = JSON.stringify(i);
                            return r[s] || (r[s] = new IntersectionObserver(rq, {
                                root: e,
                                ...i
                            })), r[s]
                        }(e);
                        return rG.set(t, i), n.observe(t), () => {
                            rG.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function(t) {
                        let {
                            viewport: e = {}
                        } = t, {
                            viewport: i = {}
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return t => e[t] !== i[t]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
            }
            let r$ = {
                    inView: {
                        Feature: rZ
                    },
                    tap: {
                        Feature: rY
                    },
                    focus: {
                        Feature: rN
                    },
                    hover: {
                        Feature: rW
                    }
                },
                rJ = {
                    layout: {
                        ProjectionNode: rO,
                        MeasureLayout: nI
                    }
                },
                rQ = (0, nA.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                r0 = (0, nA.createContext)({}),
                r1 = "undefined" != typeof window,
                r2 = r1 ? nA.useLayoutEffect : nA.useEffect,
                r3 = (0, nA.createContext)({
                    strict: !1
                }),
                r5 = !1;

            function r9() {
                window.MotionHandoffIsComplete = !0
            }

            function r4(t) {
                return h(t.animate) || v.some(e => p(t[e]))
            }

            function r6(t) {
                return !!(r4(t) || t.variants)
            }

            function r8(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let r7 = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                st = {};
            for (let t in r7) st[t] = {
                isEnabled: e => r7[t].some(t => !!e[t])
            };

            function se(t) {
                for (let e in t) st[e] = { ...st[e],
                    ...t[e]
                }
            }
            let si = Symbol.for("motionComponentSymbol");

            function sn(t) {
                let {
                    preloadedFeatures: e,
                    createVisualElement: i,
                    useRender: n,
                    useVisualState: r,
                    Component: s
                } = t;
                e && se(e);
                let o = (0, nA.forwardRef)(function(t, e) {
                    var o;
                    let a;
                    let l = { ...(0, nA.useContext)(rQ),
                            ...t,
                            layoutId: function(t) {
                                let {
                                    layoutId: e
                                } = t, i = (0, nA.useContext)(nC).id;
                                return i && void 0 !== e ? i + "-" + e : e
                            }(t)
                        },
                        {
                            isStatic: u
                        } = l,
                        h = function(t) {
                            let {
                                initial: e,
                                animate: i
                            } = function(t, e) {
                                if (r4(t)) {
                                    let {
                                        initial: e,
                                        animate: i
                                    } = t;
                                    return {
                                        initial: !1 === e || p(e) ? e : void 0,
                                        animate: p(i) ? i : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0, nA.useContext)(r0));
                            return (0, nA.useMemo)(() => ({
                                initial: e,
                                animate: i
                            }), [r8(e), r8(i)])
                        }(t),
                        c = r(t, u);
                    if (!u && r1) {
                        (0, nA.useContext)(r3).strict;
                        let t = function(t) {
                            let {
                                drag: e,
                                layout: i
                            } = st;
                            if (!e && !i) return {};
                            let n = { ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(l);
                        a = t.MeasureLayout, h.visualElement = function(t, e, i, n, r) {
                            var s;
                            let {
                                visualElement: o
                            } = (0, nA.useContext)(r0), a = (0, nA.useContext)(r3), l = (0, nA.useContext)(nT), u = (0, nA.useContext)(rQ).reducedMotion, h = (0, nA.useRef)();
                            n = n || a.renderer, !h.current && n && (h.current = n(t, {
                                visualState: e,
                                parent: o,
                                props: i,
                                presenceContext: l,
                                blockInitialAnimation: !!l && !1 === l.initial,
                                reducedMotionConfig: u
                            }));
                            let c = h.current,
                                d = (0, nA.useContext)(nV);
                            c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function(t, e, i, n) {
                                let {
                                    layoutId: r,
                                    layout: s,
                                    drag: o,
                                    dragConstraints: a,
                                    layoutScroll: l,
                                    layoutRoot: u
                                } = e;
                                t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)), t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && iJ(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: n,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(h.current, i, r, d), (0, nA.useInsertionEffect)(() => {
                                c && c.update(i, l)
                            });
                            let p = i[im],
                                f = (0, nA.useRef)(!!p && !window.MotionHandoffIsComplete && (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s ? void 0 : s.call(window, p)));
                            return r2(() => {
                                c && (c.updateFeatures(), nF.render(c.render), f.current && c.animationState && c.animationState.animateChanges())
                            }), (0, nA.useEffect)(() => {
                                c && (!f.current && c.animationState && c.animationState.animateChanges(), f.current = !1, r5 || (r5 = !0, queueMicrotask(r9)))
                            }), c
                        }(s, c, l, i, t.ProjectionNode)
                    }
                    return (0, nb.jsxs)(r0.Provider, {
                        value: h,
                        children: [a && h.visualElement ? (0, nb.jsx)(a, {
                            visualElement: h.visualElement,
                            ...l
                        }) : null, n(s, t, (o = h.visualElement, (0, nA.useCallback)(t => {
                            t && c.mount && c.mount(t), o && (t ? o.mount(t) : o.unmount()), e && ("function" == typeof e ? e(t) : iJ(e) && (e.current = t))
                        }, [o])), c, u, h.visualElement)]
                    })
                });
                return o[si] = s, o
            }
            let sr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function ss(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (sr.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }

            function so(t, e, i, n) {
                let {
                    style: r,
                    vars: s
                } = e;
                for (let e in Object.assign(t.style, r, n && n.getProjectionStyles(i)), s) t.style.setProperty(e, s[e])
            }
            let sa = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function sl(t, e, i, n) {
                for (let i in so(t, e, void 0, n), e.attrs) t.setAttribute(sa.has(i) ? i : id(i), e.attrs[i])
            }

            function su(t, e) {
                let {
                    layout: i,
                    layoutId: n
                } = e;
                return x.has(t) || t.startsWith("origin") || (i || void 0 !== n) && (!!nL[t] || "opacity" === t)
            }

            function sh(t, e, i) {
                var n;
                let {
                    style: r
                } = t, s = {};
                for (let o in r)(ix(r[o]) || e.style && ix(e.style[o]) || su(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
                return i && r && "string" == typeof r.willChange && (i.applyWillChange = !1), s
            }

            function sc(t, e, i) {
                let n = sh(t, e, i);
                for (let i in t)(ix(t[i]) || ix(e[i])) && (n[-1 !== y.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return n
            }

            function sd(t) {
                let e = (0, nA.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
            let sp = t => (e, i) => {
                let n = (0, nA.useContext)(r0),
                    r = (0, nA.useContext)(nT),
                    s = () => (function(t, e, i, n, r) {
                        let {
                            applyWillChange: s = !1,
                            scrapeMotionValuesFromProps: o,
                            createRenderState: a,
                            onMount: l
                        } = t, u = {
                            latestValues: function(t, e, i, n, r) {
                                var s;
                                let o = {},
                                    a = [],
                                    l = n && (null === (s = t.style) || void 0 === s ? void 0 : s.willChange) === void 0,
                                    u = r(t, {});
                                for (let t in u) o[t] = ri(u[t]);
                                let {
                                    initial: c,
                                    animate: d
                                } = t, p = r4(t), f = r6(t);
                                e && f && !p && !1 !== t.inherit && (void 0 === c && (c = e.initial), void 0 === d && (d = e.animate));
                                let m = !!i && !1 === i.initial,
                                    g = (m = m || !1 === c) ? d : c;
                                return g && "boolean" != typeof g && !h(g) && sf(t, g, (t, e) => {
                                    for (let e in t) {
                                        let i = t[e];
                                        if (Array.isArray(i)) {
                                            let t = m ? i.length - 1 : 0;
                                            i = i[t]
                                        }
                                        null !== i && (o[e] = i)
                                    }
                                    for (let t in e) o[t] = e[t]
                                }), l && (d && !1 !== c && !h(d) && sf(t, d, t => {
                                    for (let e in t) ! function(t, e) {
                                        let i = iv(e);
                                        i && ir(t, i)
                                    }(a, e)
                                }), a.length && (o.willChange = a.join(","))), o
                            }(e, i, n, !r && s, o),
                            renderState: a()
                        };
                        return l && (u.mount = t => l(e, t, u)), u
                    })(t, e, n, r, i);
                return i ? s() : sd(s)
            };

            function sf(t, e, i) {
                let n = Array.isArray(e) ? e : [e];
                for (let e = 0; e < n.length; e++) {
                    let r = f(t, n[e]);
                    if (r) {
                        let {
                            transitionEnd: t,
                            transition: e,
                            ...n
                        } = r;
                        i(n, t)
                    }
                }
            }
            let sm = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                sg = () => ({ ...sm(),
                    attrs: {}
                }),
                sv = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                sy = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                sx = y.length;

            function sw(t, e, i) {
                let n = "",
                    r = !0;
                for (let s = 0; s < sx; s++) {
                    let o = y[s],
                        a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = sv(a, t9[o]);
                        if (!l) {
                            r = !1;
                            let e = sy[o] || o;
                            n += "".concat(e, "(").concat(t, ") ")
                        }
                        i && (e[o] = t)
                    }
                }
                return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
            }

            function sP(t, e, i) {
                let {
                    style: n,
                    vars: r,
                    transformOrigin: s
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let i = e[t];
                    if (x.has(t)) {
                        o = !0;
                        continue
                    }
                    if (te(t)) {
                        r[t] = i;
                        continue
                    } {
                        let e = sv(i, t9[t]);
                        t.startsWith("origin") ? (a = !0, s[t] = e) : n[t] = e
                    }
                }
                if (!e.transform && (o || i ? n.transform = sw(e, t.transform, i) : n.transform && (n.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = s;
                    n.transformOrigin = "".concat(t, " ").concat(e, " ").concat(i)
                }
            }

            function sS(t, e, i) {
                return "string" == typeof t ? t : ty.transform(e + i * t)
            }
            let sb = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                sA = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function sT(t, e, i, n) {
                let {
                    attrX: r,
                    attrY: s,
                    attrScale: o,
                    originX: a,
                    originY: l,
                    pathLength: u,
                    pathSpacing: h = 1,
                    pathOffset: c = 0,
                    ...d
                } = e;
                if (sP(t, d, n), i) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: f,
                    dimensions: m
                } = t;
                p.transform && (m && (f.transform = p.transform), delete p.transform), m && (void 0 !== a || void 0 !== l || f.transform) && (f.transformOrigin = function(t, e, i) {
                    let n = sS(e, t.x, t.width),
                        r = sS(i, t.y, t.height);
                    return "".concat(n, " ").concat(r)
                }(m, void 0 !== a ? a : .5, void 0 !== l ? l : .5)), void 0 !== r && (p.x = r), void 0 !== s && (p.y = s), void 0 !== o && (p.scale = o), void 0 !== u && function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    t.pathLength = 1;
                    let s = r ? sb : sA;
                    t[s.offset] = ty.transform(-n);
                    let o = ty.transform(e),
                        a = ty.transform(i);
                    t[s.array] = "".concat(o, " ").concat(a)
                }(p, u, h, c, !1)
            }
            let sE = t => "string" == typeof t && "svg" === t.toLowerCase(),
                sM = {
                    useVisualState: sp({
                        scrapeMotionValuesFromProps: sc,
                        createRenderState: sg,
                        onMount: (t, e, i) => {
                            let {
                                renderState: n,
                                latestValues: r
                            } = i;
                            F.read(() => {
                                try {
                                    n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    n.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), F.render(() => {
                                sT(n, r, sE(e.tagName), t.transformTemplate), sl(e, n)
                            })
                        }
                    })
                },
                sC = {
                    useVisualState: sp({
                        applyWillChange: !0,
                        scrapeMotionValuesFromProps: sh,
                        createRenderState: sm
                    })
                };

            function sV(t, e, i) {
                for (let n in e) ix(e[n]) || su(n, i) || (t[n] = e[n])
            }
            let sR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function sk(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || sR.has(t)
            }
            let sD = t => !sk(t);

            function sL(t) {
                t && (sD = e => e.startsWith("on") ? !sk(e) : t(e))
            }
            try {
                sL(require("@emotion/is-prop-valid").default)
            } catch (t) {}

            function sj(t, e, i) {
                let n = {};
                for (let r in t)("values" !== r || "object" != typeof t.values) && (sD(r) || !0 === i && sk(r) || !e && !sk(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                return n
            }

            function sF(t, e) {
                return function(i) {
                    let {
                        forwardMotionProps: n
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        forwardMotionProps: !1
                    };
                    return sn({ ...ss(i) ? sM : sC,
                        preloadedFeatures: t,
                        useRender: function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return (e, i, n, r, s) => {
                                let {
                                    latestValues: o
                                } = r, a = (ss(e) ? function(t, e, i, n) {
                                    let r = (0, nA.useMemo)(() => {
                                        let i = sg();
                                        return sT(i, e, sE(n), t.transformTemplate), { ...i.attrs,
                                            style: { ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        sV(e, t.style, t), r.style = { ...e,
                                            ...r.style
                                        }
                                    }
                                    return r
                                } : function(t, e) {
                                    let i = {},
                                        n = function(t, e) {
                                            let i = t.style || {},
                                                n = {};
                                            return sV(n, i, t), Object.assign(n, function(t, e) {
                                                let {
                                                    transformTemplate: i
                                                } = t;
                                                return (0, nA.useMemo)(() => {
                                                    let t = sm();
                                                    return sP(t, e, i), Object.assign({}, t.vars, t.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
                                })(i, o, s, e), l = sj(i, "string" == typeof e, t), u = e !== nA.Fragment ? { ...l,
                                    ...a,
                                    ref: n
                                } : {}, {
                                    children: h
                                } = i, c = (0, nA.useMemo)(() => ix(h) ? h.get() : h, [h]);
                                return (0, nA.createElement)(e, { ...u,
                                    children: c
                                })
                            }
                        }(n),
                        createVisualElement: e,
                        Component: i
                    })
                }
            }
            let sB = {
                    current: null
                },
                sO = {
                    current: !1
                };

            function sI() {
                if (sO.current = !0, r1) {
                    if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => sB.current = t.matches;
                        t.addListener(e), e()
                    } else sB.current = !1
                }
            }
            let sU = new WeakMap,
                sW = [...tR, tG, tQ],
                sN = t => sW.find(tV(t)),
                sz = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class sH {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                mount(t) {
                    this.current = t, sU.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), sO.current || sI(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || sB.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in sU.delete(this.current), this.projection && this.projection.unmount(), B(this.notifyUpdate), B(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = x.has(t),
                        r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && F.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        r(), s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in st) {
                        let e = st[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ni()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < sz.length; e++) {
                        let i = sz[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let n in e) {
                            let r = e[n],
                                s = i[n];
                            if (ix(r)) t.addValue(n, r);
                            else if (ix(s)) t.addValue(n, ih(r, {
                                owner: t
                            }));
                            else if (s !== r) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, ih(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = ih(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    var i;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && (Q(n) || Z(n)) ? n = parseFloat(n) : !sN(n) && tQ.test(e) && (n = t8(t, e)), this.setBaseTarget(t, ix(n) ? n.get() : n)), ix(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let i;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let r = f(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        r && (i = r[t])
                    }
                    if (n && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || ix(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new io), this.events[t].add(e)
                }
                notify(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    this.events[t] && this.events[t].notify(...i)
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    blockInitialAnimation: r,
                    visualState: s
                }, o = {}) {
                    this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = tO, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = er.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, F.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = e.initial ? { ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = r4(e), this.isVariantNode = r6(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== a[t] && ix(e) && e.set(a[t], !1)
                    }
                }
            }
            class sY extends sH {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, e) {
                    let {
                        vars: i,
                        style: n
                    } = e;
                    delete i[t], delete n[t]
                }
                constructor() {
                    super(...arguments), this.KeyframeResolver = et
                }
            }
            class sG extends sY {
                readValueFromInstance(t, e) {
                    if (x.has(e)) {
                        let t = t6(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = (te(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, e) {
                    let {
                        transformPagePoint: i
                    } = e;
                    return nm(t, i)
                }
                build(t, e, i) {
                    sP(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return sh(t, e, i)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    ix(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = "".concat(t))
                    }))
                }
                constructor() {
                    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = so
                }
            }
            class sX extends sY {
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (x.has(e)) {
                        let t = t6(e);
                        return t && t.default || 0
                    }
                    return e = sa.has(e) ? e : id(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return sc(t, e, i)
                }
                build(t, e, i) {
                    sT(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    sl(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = sE(t.tagName), super.mount(t)
                }
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ni
                }
            }
            let sK = (t, e) => ss(t) ? new sX(e) : new sG(e, {
                    allowProjection: t !== nA.Fragment
                }),
                sq = u(sF({ ...ij,
                    ...r$,
                    ...rI,
                    ...rJ
                }, sK)),
                s_ = u(sF());
            class sZ extends nA.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function s$(t) {
                let {
                    children: e,
                    isPresent: i
                } = t, n = (0, nA.useId)(), r = (0, nA.useRef)(null), s = (0, nA.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0
                }), {
                    nonce: o
                } = (0, nA.useContext)(rQ);
                return (0, nA.useInsertionEffect)(() => {
                    let {
                        width: t,
                        height: e,
                        top: a,
                        left: l
                    } = s.current;
                    if (i || !r.current || !t || !e) return;
                    r.current.dataset.motionPopId = n;
                    let u = document.createElement("style");
                    return o && (u.nonce = o), document.head.appendChild(u), u.sheet && u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(n, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            top: ").concat(a, "px !important;\n            left: ").concat(l, "px !important;\n          }\n        ")), () => {
                        document.head.removeChild(u)
                    }
                }, [i]), (0, nb.jsx)(sZ, {
                    isPresent: i,
                    childRef: r,
                    sizeRef: s,
                    children: nA.cloneElement(e, {
                        ref: r
                    })
                })
            }
            let sJ = t => {
                let {
                    children: e,
                    initial: i,
                    isPresent: n,
                    onExitComplete: r,
                    custom: s,
                    presenceAffectsLayout: o,
                    mode: a
                } = t, l = sd(sQ), u = (0, nA.useId)(), h = (0, nA.useMemo)(() => ({
                    id: u,
                    initial: i,
                    isPresent: n,
                    custom: s,
                    onExitComplete: t => {
                        for (let e of (l.set(t, !0), l.values()))
                            if (!e) return;
                        r && r()
                    },
                    register: t => (l.set(t, !1), () => l.delete(t))
                }), o ? [Math.random()] : [n]);
                return (0, nA.useMemo)(() => {
                    l.forEach((t, e) => l.set(e, !1))
                }, [n]), nA.useEffect(() => {
                    n || l.size || !r || r()
                }, [n]), "popLayout" === a && (e = (0, nb.jsx)(s$, {
                    isPresent: n,
                    children: e
                })), (0, nb.jsx)(nT.Provider, {
                    value: h,
                    children: e
                })
            };

            function sQ() {
                return new Map
            }
            let s0 = t => t.key || "";

            function s1(t) {
                let e = [];
                return nA.Children.forEach(t, t => {
                    (0, nA.isValidElement)(t) && e.push(t)
                }), e
            }
            let s2 = t => {
                let {
                    children: e,
                    exitBeforeEnter: i,
                    custom: n,
                    initial: r = !0,
                    onExitComplete: s,
                    presenceAffectsLayout: o = !0,
                    mode: a = "sync"
                } = t;
                J(!i, "Replace exitBeforeEnter with mode='wait'");
                let l = (0, nA.useMemo)(() => s1(e), [e]),
                    u = l.map(s0),
                    h = (0, nA.useRef)(!0),
                    c = (0, nA.useRef)(l),
                    d = sd(() => new Map),
                    [p, f] = (0, nA.useState)(l),
                    [m, g] = (0, nA.useState)(l);
                r2(() => {
                    h.current = !1, c.current = l;
                    for (let t = 0; t < m.length; t++) {
                        let e = s0(m[t]);
                        u.includes(e) ? d.delete(e) : !0 !== d.get(e) && d.set(e, !1)
                    }
                }, [m, u.length, u.join("-")]);
                let v = [];
                if (l !== p) {
                    let t = [...l];
                    for (let e = 0; e < m.length; e++) {
                        let i = m[e],
                            n = s0(i);
                        u.includes(n) || (t.splice(e, 0, i), v.push(i))
                    }
                    "wait" === a && v.length && (t = v), g(s1(t)), f(l);
                    return
                }
                let {
                    forceRender: y
                } = (0, nA.useContext)(nC);
                return (0, nb.jsx)(nb.Fragment, {
                    children: m.map(t => {
                        let e = s0(t),
                            i = l === m || u.includes(e);
                        return (0, nb.jsx)(sJ, {
                            isPresent: i,
                            initial: (!h.current || !!r) && void 0,
                            custom: i ? void 0 : n,
                            presenceAffectsLayout: o,
                            mode: a,
                            onExitComplete: i ? void 0 : () => {
                                if (!d.has(e)) return;
                                d.set(e, !0);
                                let t = !0;
                                d.forEach(e => {
                                    e || (t = !1)
                                }), t && (null == y || y(), g(c.current), s && s())
                            },
                            children: t
                        }, e)
                    })
                })
            };

            function s3(t) {
                let {
                    children: e,
                    isValidProp: i,
                    ...n
                } = t;
                i && sL(i), (n = { ...(0, nA.useContext)(rQ),
                    ...n
                }).isStatic = sd(() => n.isStatic);
                let r = (0, nA.useMemo)(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
                return (0, nb.jsx)(rQ.Provider, {
                    value: r,
                    children: e
                })
            }

            function s5(t) {
                let {
                    children: e,
                    features: i,
                    strict: n = !1
                } = t, [, r] = (0, nA.useState)(!s9(i)), s = (0, nA.useRef)(void 0);
                if (!s9(i)) {
                    let {
                        renderer: t,
                        ...e
                    } = i;
                    s.current = t, se(e)
                }
                return (0, nA.useEffect)(() => {
                    s9(i) && i().then(t => {
                        let {
                            renderer: e,
                            ...i
                        } = t;
                        se(i), s.current = e, r(!0)
                    })
                }, []), (0, nb.jsx)(r3.Provider, {
                    value: {
                        renderer: s.current,
                        strict: n
                    },
                    children: e
                })
            }

            function s9(t) {
                return "function" == typeof t
            }
            let s4 = (0, nA.createContext)(null);

            function s6() {
                let t = function() {
                        let t = (0, nA.useRef)(!1);
                        return r2(() => (t.current = !0, () => {
                            t.current = !1
                        }), []), t
                    }(),
                    [e, i] = (0, nA.useState)(0),
                    n = (0, nA.useCallback)(() => {
                        t.current && i(e + 1)
                    }, [e]);
                return [(0, nA.useCallback)(() => F.postRender(n), [n]), e]
            }
            let s8 = t => !t.isLayoutDirty && t.willUpdate(!1),
                s7 = t => !0 === t,
                ot = t => s7(!0 === t) || "id" === t,
                oe = t => {
                    let {
                        children: e,
                        id: i,
                        inherit: n = !0
                    } = t, r = (0, nA.useContext)(nC), s = (0, nA.useContext)(s4), [o, a] = s6(), l = (0, nA.useRef)(null), u = r.id || s;
                    null === l.current && (ot(n) && u && (i = i ? u + "-" + i : u), l.current = {
                        id: i,
                        group: s7(n) && r.group || function() {
                            let t = new Set,
                                e = new WeakMap,
                                i = () => t.forEach(s8);
                            return {
                                add: n => {
                                    t.add(n), e.set(n, n.addEventListener("willUpdate", i))
                                },
                                remove: n => {
                                    t.delete(n);
                                    let r = e.get(n);
                                    r && (r(), e.delete(n)), i()
                                },
                                dirty: i
                            }
                        }()
                    });
                    let h = (0, nA.useMemo)(() => ({ ...l.current,
                        forceRender: o
                    }), [a]);
                    return (0, nb.jsx)(nC.Provider, {
                        value: h,
                        children: e
                    })
                },
                oi = {
                    renderer: sK,
                    ...ij
                },
                on = {
                    renderer: sK,
                    ...ij,
                    ...r$
                },
                or = { ...on,
                    ...rI,
                    ...rJ
                };

            function os(t) {
                let e = sd(() => ih(t)),
                    {
                        isStatic: i
                    } = (0, nA.useContext)(rQ);
                if (i) {
                    let [, i] = (0, nA.useState)(t);
                    (0, nA.useEffect)(() => e.on("change", i), [])
                }
                return e
            }

            function oo(t, e) {
                let i = os(e()),
                    n = () => i.set(e());
                return n(), r2(() => {
                    let e = () => F.preRender(n, !1, !0),
                        i = t.map(t => t.on("change", e));
                    return () => {
                        i.forEach(t => t()), B(n)
                    }
                }), i
            }

            function oa(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                let r = t.length;
                return oo(i.filter(ix), function() {
                    let e = "";
                    for (let n = 0; n < r; n++) {
                        e += t[n];
                        let r = i[n];
                        r && (e += ix(r) ? r.get() : r)
                    }
                    return e
                })
            }
            let ol = t => t && "object" == typeof t && t.mix,
                ou = t => ol(t) ? t.mix : void 0;

            function oh() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                let n = !Array.isArray(e[0]),
                    r = n ? 0 : -1,
                    s = e[0 + r],
                    o = e[1 + r],
                    a = e[2 + r],
                    l = e[3 + r],
                    u = eW(o, a, {
                        mixer: ou(a[0]),
                        ...l
                    });
                return n ? u(s) : u
            }

            function oc(t, e, i, n) {
                if ("function" == typeof t) return function(t) {
                    il.current = [], t();
                    let e = oo(il.current, t);
                    return il.current = void 0, e
                }(t);
                let r = "function" == typeof e ? e : oh(e, i, n);
                return Array.isArray(t) ? od(t, r) : od([t], t => {
                    let [e] = t;
                    return r(e)
                })
            }

            function od(t, e) {
                let i = sd(() => []);
                return oo(t, () => {
                    i.length = 0;
                    let n = t.length;
                    for (let e = 0; e < n; e++) i[e] = t[e].get();
                    return e(i)
                })
            }

            function op(t) {
                return "number" == typeof t ? t : parseFloat(t)
            }

            function of (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        isStatic: i
                    } = (0, nA.useContext)(rQ),
                    n = (0, nA.useRef)(null),
                    r = os(ix(t) ? op(t.get()) : t),
                    s = (0, nA.useRef)(r.get()),
                    o = (0, nA.useRef)(() => {}),
                    a = () => {
                        let t = n.current;
                        t && 0 === t.time && t.sample(O.delta), l(), n.current = e_({
                            keyframes: [r.get(), s.current],
                            velocity: r.getVelocity(),
                            type: "spring",
                            restDelta: .001,
                            restSpeed: .01,
                            ...e,
                            onUpdate: o.current
                        })
                    },
                    l = () => {
                        n.current && n.current.stop()
                    };
                return (0, nA.useInsertionEffect)(() => r.attach((t, e) => i ? e(t) : (s.current = t, o.current = e, F.update(a), r.get()), l), [JSON.stringify(e)]), r2(() => {
                    if (ix(t)) return t.on("change", t => r.set(op(t)))
                }, [r]), r
            }

            function om(t, e, i) {
                (0, nA.useInsertionEffect)(() => t.on(e, i), [t, e, i])
            }

            function og(t) {
                let e = os(t.getVelocity()),
                    i = () => {
                        let n = t.getVelocity();
                        e.set(n), n && F.update(i)
                    };
                return om(t, "change", () => {
                    F.update(i, !1, !0)
                }), e
            }

            function ov(t, e, i) {
                var n;
                if ("string" == typeof t) {
                    let r = document;
                    e && (J(!!e.current, "Scope provided, but no element detected."), r = e.current), i ? (null !== (n = i[t]) && void 0 !== n || (i[t] = r.querySelectorAll(t)), t = i[t]) : t = r.querySelectorAll(t)
                } else t instanceof Element && (t = [t]);
                return Array.from(t || [])
            }
            let oy = new WeakMap;

            function ox(t) {
                var e;
                let {
                    target: i,
                    contentRect: n,
                    borderBoxSize: r
                } = t;
                null === (e = oy.get(i)) || void 0 === e || e.forEach(t => {
                    t({
                        target: i,
                        contentSize: n,
                        get size() {
                            return function(t, e) {
                                if (e) {
                                    let {
                                        inlineSize: t,
                                        blockSize: i
                                    } = e[0];
                                    return {
                                        width: t,
                                        height: i
                                    }
                                }
                                return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : {
                                    width: t.offsetWidth,
                                    height: t.offsetHeight
                                }
                            }(i, r)
                        }
                    })
                })
            }

            function ow(t) {
                t.forEach(ox)
            }
            let oP = new Set,
                oS = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                ob = () => ({
                    time: 0,
                    x: oS(),
                    y: oS()
                }),
                oA = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function oT(t, e, i, n) {
                let r = i[e],
                    {
                        length: s,
                        position: o
                    } = oA[e],
                    a = r.current,
                    l = i.time;
                r.current = t["scroll".concat(o)], r.scrollLength = t["scroll".concat(s)] - t["client".concat(s)], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = eA(0, r.scrollLength, r.current);
                let u = n - l;
                r.velocity = u > 50 ? 0 : ea(r.current - a, u)
            }
            let oE = {
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                },
                oM = {
                    start: 0,
                    center: .5,
                    end: 1
                };

            function oC(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = 0;
                if (t in oM && (t = oM[t]), "string" == typeof t) {
                    let e = parseFloat(t);
                    t.endsWith("px") ? n = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? n = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? n = e / 100 * document.documentElement.clientHeight : t = e
                }
                return "number" == typeof t && (n = e * t), i + n
            }
            let oV = [0, 0],
                oR = {
                    x: 0,
                    y: 0
                },
                ok = new WeakMap,
                oD = new WeakMap,
                oL = new WeakMap,
                oj = t => t === document.documentElement ? window : t;

            function oF(t) {
                let {
                    container: e = document.documentElement,
                    ...i
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = oL.get(e);
                n || (n = new Set, oL.set(e, n));
                let o = function(t, e, i) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return {
                        measure: () => (function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                                i = arguments.length > 2 ? arguments[2] : void 0;
                            if (i.x.targetOffset = 0, i.y.targetOffset = 0, e !== t) {
                                let n = e;
                                for (; n && n !== t;) i.x.targetOffset += n.offsetLeft, i.y.targetOffset += n.offsetTop, n = n.offsetParent
                            }
                            i.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, i.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, i.x.containerLength = t.clientWidth, i.y.containerLength = t.clientHeight
                        })(t, n.target, i),
                        update: e => {
                            oT(t, "x", i, e), oT(t, "y", i, e), i.time = e, (n.offset || n.target) && function(t, e, i) {
                                let {
                                    offset: n = oE.All
                                } = i, {
                                    target: r = t,
                                    axis: s = "y"
                                } = i, o = "y" === s ? "height" : "width", a = r !== t ? function(t, e) {
                                    let i = {
                                            x: 0,
                                            y: 0
                                        },
                                        n = t;
                                    for (; n && n !== e;)
                                        if (n instanceof HTMLElement) i.x += n.offsetLeft, i.y += n.offsetTop, n = n.offsetParent;
                                        else if ("svg" === n.tagName) {
                                        let t = n.getBoundingClientRect(),
                                            e = (n = n.parentElement).getBoundingClientRect();
                                        i.x += t.left - e.left, i.y += t.top - e.top
                                    } else if (n instanceof SVGGraphicsElement) {
                                        let {
                                            x: t,
                                            y: e
                                        } = n.getBBox();
                                        i.x += t, i.y += e;
                                        let r = null,
                                            s = n.parentNode;
                                        for (; !r;) "svg" === s.tagName && (r = s), s = n.parentNode;
                                        n = r
                                    } else break;
                                    return i
                                }(r, t) : oR, l = r === t ? {
                                    width: t.scrollWidth,
                                    height: t.scrollHeight
                                } : "getBBox" in r && "svg" !== r.tagName ? r.getBBox() : {
                                    width: r.clientWidth,
                                    height: r.clientHeight
                                }, u = {
                                    width: t.clientWidth,
                                    height: t.clientHeight
                                };
                                e[s].offset.length = 0;
                                let h = !e[s].interpolate,
                                    c = n.length;
                                for (let t = 0; t < c; t++) {
                                    let i = function(t, e, i, n) {
                                        let r = Array.isArray(t) ? t : oV,
                                            s = 0;
                                        return "number" == typeof t ? r = [t, t] : "string" == typeof t && (r = (t = t.trim()).includes(" ") ? t.split(" ") : [t, oM[t] ? t : "0"]), oC(r[0], i, n) - oC(r[1], e)
                                    }(n[t], u[o], l[o], a[s]);
                                    h || i === e[s].interpolatorOffsets[t] || (h = !0), e[s].offset[t] = i
                                }
                                h && (e[s].interpolate = eW(e[s].offset, ez(n)), e[s].interpolatorOffsets = [...e[s].offset]), e[s].progress = e[s].interpolate(e[s].current)
                            }(t, i, n)
                        },
                        notify: () => e(i)
                    }
                }(e, t, ob(), i);
                if (n.add(o), !ok.has(e)) {
                    let t = () => {
                            for (let t of n) t.measure()
                        },
                        i = () => {
                            for (let t of n) t.update(O.timestamp)
                        },
                        o = () => {
                            for (let t of n) t.notify()
                        },
                        a = () => {
                            F.read(t, !1, !0), F.read(i, !1, !0), F.update(o, !1, !0)
                        };
                    ok.set(e, a);
                    let l = oj(e);
                    window.addEventListener("resize", a, {
                        passive: !0
                    }), e !== document.documentElement && oD.set(e, "function" == typeof e ? (oP.add(e), s || (s = () => {
                        let t = {
                                width: window.innerWidth,
                                height: window.innerHeight
                            },
                            e = {
                                target: window,
                                size: t,
                                contentSize: t
                            };
                        oP.forEach(t => t(e))
                    }, window.addEventListener("resize", s)), () => {
                        oP.delete(e), !oP.size && s && (s = void 0)
                    }) : function(t, e) {
                        r || "undefined" == typeof ResizeObserver || (r = new ResizeObserver(ow));
                        let i = ov(t);
                        return i.forEach(t => {
                            let i = oy.get(t);
                            i || (i = new Set, oy.set(t, i)), i.add(e), null == r || r.observe(t)
                        }), () => {
                            i.forEach(t => {
                                let i = oy.get(t);
                                null == i || i.delete(e), (null == i ? void 0 : i.size) || null == r || r.unobserve(t)
                            })
                        }
                    }(e, a)), l.addEventListener("scroll", a, {
                        passive: !0
                    })
                }
                let a = ok.get(e);
                return F.read(a, !1, !0), () => {
                    var t;
                    B(a);
                    let i = oL.get(e);
                    if (!i || (i.delete(o), i.size)) return;
                    let n = ok.get(e);
                    ok.delete(e), n && (oj(e).removeEventListener("scroll", n), null === (t = oD.get(e)) || void 0 === t || t(), window.removeEventListener("resize", n))
                }
            }
            let oB = new Map;

            function oO() {
                let {
                    source: t,
                    container: e = document.documentElement,
                    axis: i = "y"
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t && (e = t), oB.has(e) || oB.set(e, {});
                let n = oB.get(e);
                return n[i] || (n[i] = e8() ? new ScrollTimeline({
                    source: e,
                    axis: i
                }) : function(t) {
                    let {
                        source: e,
                        container: i,
                        axis: n = "y"
                    } = t;
                    e && (i = e);
                    let r = {
                            value: 0
                        },
                        s = oF(t => {
                            r.value = 100 * t[n].progress
                        }, {
                            container: i,
                            axis: n
                        });
                    return {
                        currentTime: r,
                        cancel: s
                    }
                }({
                    source: e,
                    axis: i
                })), n[i]
            }

            function oI(t) {
                return t && (t.target || t.offset)
            }

            function oU(t, e) {
                let i = (null == e ? void 0 : e.axis) || "y";
                return "function" == typeof t ? 2 === t.length || oI(e) ? oF(e => {
                    t(e[i].progress, e)
                }, e) : e6(t, oO(e)) : oI(e) ? (t.pause(), oF(e => {
                    t.time = t.duration * e[i].progress
                }, e)) : t.attachTimeline(oO(e))
            }

            function oW(t, e) {
                $(!!(!e || e.current), "You have defined a ".concat(t, " options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its `layoutEffect: false` option."))
            }
            let oN = () => ({
                scrollX: ih(0),
                scrollY: ih(0),
                scrollXProgress: ih(0),
                scrollYProgress: ih(0)
            });

            function oz() {
                let {
                    container: t,
                    target: e,
                    layoutEffect: i = !0,
                    ...n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = sd(oN);
                return (i ? r2 : nA.useEffect)(() => (oW("target", e), oW("container", t), oU((t, e) => {
                    let {
                        x: i,
                        y: n
                    } = e;
                    r.scrollX.set(i.current), r.scrollXProgress.set(i.progress), r.scrollY.set(n.current), r.scrollYProgress.set(n.progress)
                }, { ...n,
                    container: (null == t ? void 0 : t.current) || void 0,
                    target: (null == e ? void 0 : e.current) || void 0
                })), [t, e, JSON.stringify(n.offset)]), r
            }

            function oH(t) {
                return oz({
                    container: t
                })
            }

            function oY() {
                return oz()
            }

            function oG(t) {
                let e = (0, nA.useRef)(0),
                    {
                        isStatic: i
                    } = (0, nA.useContext)(rQ);
                (0, nA.useEffect)(() => {
                    if (i) return;
                    let n = i => {
                        let {
                            timestamp: n,
                            delta: r
                        } = i;
                        e.current || (e.current = n), t(n - e.current, r)
                    };
                    return F.update(n, !0), () => B(n)
                }, [t])
            }

            function oX() {
                let t = os(0);
                return oG(e => t.set(e)), t
            }

            function oK() {
                return sd(() => new iy("auto"))
            }

            function oq() {
                sO.current || sI();
                let [t] = (0, nA.useState)(sB.current);
                return t
            }

            function o_() {
                let t = oq(),
                    {
                        reducedMotion: e
                    } = (0, nA.useContext)(rQ);
                return "never" !== e && ("always" === e || t)
            }

            function oZ(t, e) {
                [...e].reverse().forEach(i => {
                    let n = t.getVariant(i);
                    n && ic(t, n), t.variantChildren && t.variantChildren.forEach(t => {
                        oZ(t, e)
                    })
                })
            }

            function o$() {
                let t = !1,
                    e = new Set,
                    i = {
                        subscribe: t => (e.add(t), () => void e.delete(t)),
                        start(i, n) {
                            J(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let r = [];
                            return e.forEach(t => {
                                r.push(iA(t, i, {
                                    transitionOverride: n
                                }))
                            }), Promise.all(r)
                        },
                        set: i => (J(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
                            Array.isArray(i) ? oZ(t, i) : "string" == typeof i ? oZ(t, [i]) : ic(t, i)
                        })),
                        stop() {
                            e.forEach(t => {
                                ! function(t) {
                                    t.values.forEach(t => t.stop())
                                }(t)
                            })
                        },
                        mount: () => (t = !0, () => {
                            t = !1, i.stop()
                        })
                    };
                return i
            }

            function oJ(t) {
                return (0, nA.useEffect)(() => () => t(), [])
            }

            function oQ(t, e, i, n) {
                var r;
                return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? i : null !== (r = n.get(e)) && void 0 !== r ? r : t
            }
            let o0 = (t, e, i) => {
                let n = e - t;
                return ((i - t) % n + n) % n + t
            };

            function o1(t, e) {
                return t.at !== e.at ? t.at - e.at : null === t.value ? 1 : null === e.value ? -1 : 0
            }

            function o2(t, e) {
                return e.has(t) || e.set(t, {}), e.get(t)
            }

            function o3(t, e) {
                return e[t] || (e[t] = []), e[t]
            }
            let o5 = t => "number" == typeof t,
                o9 = t => t.every(o5);

            function o4(t, e, i, n) {
                let r = ov(t, n),
                    s = r.length;
                J(!!s, "No valid element provided.");
                let o = [];
                for (let t = 0; t < s; t++) {
                    let n = r[t];
                    sU.has(n) || function(t) {
                        let e = {
                                presenceContext: null,
                                props: {},
                                visualState: {
                                    renderState: {
                                        transform: {},
                                        transformOrigin: {},
                                        style: {},
                                        vars: {},
                                        attrs: {}
                                    },
                                    latestValues: {}
                                }
                            },
                            i = rr(t) ? new sX(e) : new sG(e);
                        i.mount(t), sU.set(t, i)
                    }(n);
                    let a = sU.get(n),
                        l = { ...i
                        };
                    "function" == typeof l.delay && (l.delay = l.delay(t, s)), o.push(...iP(a, { ...e,
                        transition: l
                    }, {}))
                }
                return new e7(o)
            }
            let o6 = t => Array.isArray(t) && Array.isArray(t[0]),
                o8 = t => function(e, i, n) {
                    let r;
                    return r = o6(e) ? function(t, e, i) {
                        let n = [];
                        return (function(t) {
                            let {
                                defaultTransition: e = {},
                                ...i
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = e.duration || .3, s = new Map, o = new Map, a = {}, l = new Map, u = 0, h = 0, c = 0;
                            for (let i = 0; i < t.length; i++) {
                                let s = t[i];
                                if ("string" == typeof s) {
                                    l.set(s, h);
                                    continue
                                }
                                if (!Array.isArray(s)) {
                                    l.set(s.name, oQ(h, s.at, u, l));
                                    continue
                                }
                                let [d, p, f = {}] = s;
                                void 0 !== f.at && (h = oQ(h, f.at, u, l));
                                let m = 0,
                                    g = function(t, i, n) {
                                        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                            a = Array.isArray(t) ? t : [t],
                                            {
                                                delay: l = 0,
                                                times: u = ez(a),
                                                type: d = "keyframes",
                                                ...p
                                            } = i,
                                            {
                                                ease: f = e.ease || "easeOut",
                                                duration: g
                                            } = i,
                                            v = "function" == typeof l ? l(s, o) : l,
                                            y = a.length;
                                        if (y <= 2 && "spring" === d || ei(d)) {
                                            let t = 100;
                                            2 === y && o9(a) && (t = Math.abs(a[1] - a[0]));
                                            let e = { ...p
                                            };
                                            void 0 !== g && (e.duration = w(g));
                                            let i = function(t) {
                                                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                                                    i = ef({
                                                        keyframes: [0, e],
                                                        ...t
                                                    }),
                                                    n = Math.min(eY(i), 2e4);
                                                return {
                                                    type: "keyframes",
                                                    ease: t => i.next(n * t).value / e,
                                                    duration: P(n)
                                                }
                                            }(e, t);
                                            f = i.ease, g = i.duration
                                        }
                                        null != g || (g = r);
                                        let x = h + v,
                                            S = x + g;
                                        1 === u.length && 0 === u[0] && (u[1] = 1);
                                        let b = u.length - a.length;
                                        b > 0 && eN(u, b), 1 === a.length && a.unshift(null),
                                            function(t, e, i, n, r, s) {
                                                ! function(t, e, i) {
                                                    for (let n = 0; n < t.length; n++) {
                                                        let r = t[n];
                                                        r.at > e && r.at < i && (is(t, r), n--)
                                                    }
                                                }(t, r, s);
                                                for (let a = 0; a < e.length; a++) {
                                                    var o;
                                                    t.push({
                                                        value: e[a],
                                                        at: eT(r, s, n[a]),
                                                        easing: (o = a, ex(i) ? i[o0(0, i.length, o)] : i)
                                                    })
                                                }
                                            }(n, a, f, u, x, S), m = Math.max(v + g, m), c = Math.max(S, c)
                                    };
                                if (ix(d)) g(p, f, o3("default", o2(d, o)));
                                else {
                                    let t = ov(d, n, a),
                                        e = t.length;
                                    for (let i = 0; i < e; i++) {
                                        let n = o2(t[i], o);
                                        for (let t in p) g(p[t], f[t] ? { ...f,
                                            ...f[t]
                                        } : { ...f
                                        }, o3(t, n), i, e)
                                    }
                                }
                                u = h, h += m
                            }
                            return o.forEach((t, n) => {
                                for (let r in t) {
                                    let o = t[r];
                                    o.sort(o1);
                                    let a = [],
                                        l = [],
                                        u = [];
                                    for (let t = 0; t < o.length; t++) {
                                        let {
                                            at: e,
                                            value: i,
                                            easing: n
                                        } = o[t];
                                        a.push(i), l.push(eA(0, c, e)), u.push(n || "easeOut")
                                    }
                                    0 !== l[0] && (l.unshift(0), a.unshift(a[0]), u.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), s.has(n) || s.set(n, {
                                        keyframes: {},
                                        transition: {}
                                    });
                                    let h = s.get(n);
                                    h.keyframes[r] = a, h.transition[r] = { ...e,
                                        duration: c,
                                        ease: u,
                                        times: l,
                                        ...i
                                    }
                                }
                            }), s
                        })(t, e, i).forEach((t, e) => {
                            let i, {
                                keyframes: r,
                                transition: s
                            } = t;
                            i = ix(e) ? rs(e, r.default, s.default) : o4(e, r, s), n.push(i)
                        }), new e7(n)
                    }(e, i, t) : "object" != typeof i || Array.isArray(i) ? rs(e, i, n) : o4(e, i, n, t), t && t.animations.push(r), r
                },
                o7 = o8();

            function at() {
                let t = sd(() => ({
                        current: null,
                        animations: []
                    })),
                    e = sd(() => o8(t));
                return oJ(() => {
                    t.animations.forEach(t => t.stop())
                }), [t, e]
            }

            function ae() {
                let t = sd(o$);
                return r2(t.mount, []), t
            }
            let ai = ae;

            function an() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                let n = (0, nA.useRef)(0),
                    [r, s] = (0, nA.useState)(e[n.current]);
                return [r, (0, nA.useCallback)(t => {
                    n.current = "number" != typeof t ? o0(0, e.length, n.current + 1) : t, s(e[n.current])
                }, [e.length, ...e])]
            }
            let ar = {
                some: 0,
                all: 1
            };

            function as(t, e) {
                let {
                    root: i,
                    margin: n,
                    amount: r = "some"
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = ov(t), o = new WeakMap, a = new IntersectionObserver(t => {
                    t.forEach(t => {
                        let i = o.get(t.target);
                        if (!!i !== t.isIntersecting) {
                            if (t.isIntersecting) {
                                let i = e(t);
                                "function" == typeof i ? o.set(t.target, i) : a.unobserve(t.target)
                            } else i && (i(t), o.delete(t.target))
                        }
                    })
                }, {
                    root: i,
                    rootMargin: n,
                    threshold: "number" == typeof r ? r : ar[r]
                });
                return s.forEach(t => a.observe(t)), () => a.disconnect()
            }

            function ao(t) {
                let {
                    root: e,
                    margin: i,
                    amount: n,
                    once: r = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, [s, o] = (0, nA.useState)(!1);
                return (0, nA.useEffect)(() => {
                    if (!t.current || r && s) return;
                    let a = {
                        root: e && e.current || void 0,
                        margin: i,
                        amount: n
                    };
                    return as(t.current, () => (o(!0), r ? void 0 : () => o(!1)), a)
                }, [e, t, i, r, n]), s
            }
            class aa {
                subscribe(t) {
                    return this.componentControls.add(t), () => this.componentControls.delete(t)
                }
                start(t, e) {
                    this.componentControls.forEach(i => {
                        i.start(t.nativeEvent || t, e)
                    })
                }
                constructor() {
                    this.componentControls = new Set
                }
            }
            let al = () => new aa;

            function au() {
                return sd(al)
            }

            function ah(t, e, i, n) {
                (0, nA.useEffect)(() => {
                    let r = t.current;
                    if (i && r) return iI(r, e, i, n)
                }, [t, e, i, n])
            }

            function ac(t) {
                return null !== t && "object" == typeof t && si in t
            }

            function ad(t) {
                if (ac(t)) return t[si]
            }

            function ap() {
                return af
            }

            function af(t) {
                rB.current && (rB.current.isUpdating = !1, rB.current.blockUpdate(), t && t())
            }

            function am() {
                let [t, e] = s6(), i = (0, nA.useRef)();
                return (0, nA.useEffect)(() => {
                    F.postRender(() => F.postRender(() => {
                        e === i.current && (V.current = !1)
                    }))
                }, [e]), n => {
                    af(() => {
                        V.current = !0, t(), n(), i.current = e + 1
                    })
                }
            }

            function ag() {
                V.current = !1
            }

            function av() {
                return (0, nA.useCallback)(() => {
                    let t = rB.current;
                    t && t.resetTree()
                }, [])
            }
            let ay = (t, e) => {
                    let i = x.has(e) ? "transform" : e;
                    return "".concat(t, ": ").concat(i)
                },
                ax = new Map,
                aw = new Set;

            function aP(t, e, i) {
                let n = ay(t, e),
                    r = ax.get(n);
                if (!r) return null;
                let {
                    animation: s,
                    startTime: o
                } = r;

                function a() {
                    var n;
                    null === (n = window.MotionCancelOptimisedAnimation) || void 0 === n || n.call(window, t, e, i)
                }
                return (s.onfinish = a, null === o || window.MotionHandoffIsComplete) ? (a(), null) : o
            }
            let aS = new Set;

            function ab() {
                aS.forEach(t => {
                    t.animation.play(), t.animation.startTime = t.startTime
                }), aS.clear()
            }

            function aA(t, e, i, n, r) {
                if (window.MotionHandoffIsComplete) {
                    window.MotionHandoffAnimation = void 0;
                    return
                }
                let s = t.dataset[ip];
                if (!s) return;
                window.MotionHandoffAnimation = aP;
                let l = ay(s, e);
                a || (a = e3(t, e, [i[0], i[0]], {
                    duration: 1e4,
                    ease: "linear"
                }), ax.set(l, {
                    animation: a,
                    startTime: null
                }), window.MotionHandoffAnimation = aP, window.MotionHasOptimisedAnimation = (t, e) => {
                    if (!t) return !1;
                    if (!e) return aw.has(t);
                    let i = ay(t, e);
                    return !!ax.get(i)
                }, window.MotionCancelOptimisedAnimation = (t, e, i, n) => {
                    let r = ay(t, e),
                        s = ax.get(r);
                    s && (i && void 0 === n ? i.postRender(() => {
                        i.postRender(() => {
                            s.animation.cancel()
                        })
                    }) : s.animation.cancel(), i && n ? (aS.add(s), i.render(ab)) : (ax.delete(r), ax.size || (window.MotionCancelOptimisedAnimation = void 0)))
                }, window.MotionCheckAppearSync = (t, e, i) => {
                    var n, r;
                    let s = ig(t);
                    if (!s) return;
                    let o = null === (n = window.MotionHasOptimisedAnimation) || void 0 === n ? void 0 : n.call(window, s, e),
                        a = null === (r = t.props.values) || void 0 === r ? void 0 : r[e];
                    if (!o || !a) return;
                    let l = i.on("change", t => {
                        var i;
                        a.get() !== t && (null === (i = window.MotionCancelOptimisedAnimation) || void 0 === i || i.call(window, s, e), l())
                    });
                    return l
                });
                let u = () => {
                    a.cancel();
                    let s = e3(t, e, i, n);
                    void 0 === o && (o = performance.now()), s.startTime = o, ax.set(l, {
                        animation: s,
                        startTime: o
                    }), r && r(s)
                };
                aw.add(s), a.ready ? a.ready.then(u).catch(D) : u()
            }
            let aT = () => ({});
            class aE extends sH {
                build() {}
                resetTransform() {}
                restoreTransform() {}
                removeValueFromRenderState() {}
                renderInstance() {}
                scrapeMotionValuesFromProps() {
                    return aT()
                }
                getBaseTargetFromProps() {}
                readValueFromInstance(t, e, i) {
                    return i.initialState[e] || 0
                }
                sortInstanceNodePosition() {
                    return 0
                }
                constructor() {
                    super(...arguments), this.measureInstanceViewportBox = ni
                }
            }
            let aM = sp({
                scrapeMotionValuesFromProps: aT,
                createRenderState: aT
            });

            function aC(t) {
                let [e, i] = (0, nA.useState)(t), n = aM({}, !1), r = sd(() => new aE({
                    props: {
                        onUpdate: t => {
                            i({ ...t
                            })
                        }
                    },
                    visualState: n,
                    presenceContext: null
                }, {
                    initialState: t
                }));
                return (0, nA.useLayoutEffect)(() => (r.mount({}), () => r.unmount()), [r]), [e, sd(() => t => iA(r, t))]
            }
            let aV = t => t > .001 ? 1 / t : 1e5,
                aR = !1;

            function ak(t) {
                let e = os(1),
                    i = os(1),
                    {
                        visualElement: n
                    } = (0, nA.useContext)(r0);
                return J(!!(t || n), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), $(aR, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), aR = !0, t ? (e = t.scaleX || e, i = t.scaleY || i) : n && (e = n.getValue("scaleX", 1), i = n.getValue("scaleY", 1)), {
                    scaleX: oc(e, aV),
                    scaleY: oc(i, aV)
                }
            }
            let aD = 0,
                aL = t => {
                    let {
                        children: e
                    } = t;
                    return nA.useEffect(() => {
                        J(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
                    }, []), (0, nb.jsx)(oe, {
                        id: sd(() => "asl-".concat(aD++)),
                        children: e
                    })
                },
                aj = (0, nA.createContext)(null),
                aF = (0, nA.forwardRef)(function(t, e) {
                    let {
                        children: i,
                        as: n = "ul",
                        axis: r = "y",
                        onReorder: s,
                        values: o,
                        ...a
                    } = t, l = sd(() => sq[n]), u = [], h = (0, nA.useRef)(!1);
                    return J(!!o, "Reorder.Group must be provided a values prop"), (0, nA.useEffect)(() => {
                        h.current = !1
                    }), (0, nb.jsx)(l, { ...a,
                        ref: e,
                        ignoreStrict: !0,
                        children: (0, nb.jsx)(aj.Provider, {
                            value: {
                                axis: r,
                                registerItem: (t, e) => {
                                    let i = u.findIndex(e => t === e.value); - 1 !== i ? u[i].layout = e[r] : u.push({
                                        value: t,
                                        layout: e[r]
                                    }), u.sort(aO)
                                },
                                updateOrder: (t, e, i) => {
                                    if (h.current) return;
                                    let n = function(t, e, i, n) {
                                        if (!n) return t;
                                        let r = t.findIndex(t => t.value === e);
                                        if (-1 === r) return t;
                                        let s = n > 0 ? 1 : -1,
                                            o = t[r + s];
                                        if (!o) return t;
                                        let a = t[r],
                                            l = o.layout,
                                            u = eT(l.min, l.max, .5);
                                        return 1 === s && a.layout.max + i > u || -1 === s && a.layout.min + i < u ? function(t, e, i) {
                                            let [...n] = t, r = e < 0 ? n.length + e : e;
                                            if (r >= 0 && r < n.length) {
                                                let t = i < 0 ? n.length + i : i,
                                                    [r] = n.splice(e, 1);
                                                n.splice(t, 0, r)
                                            }
                                            return n
                                        }(t, r, r + s) : t
                                    }(u, t, e, i);
                                    u !== n && (h.current = !0, s(n.map(aB).filter(t => -1 !== o.indexOf(t))))
                                }
                            },
                            children: i
                        })
                    })
                });

            function aB(t) {
                return t.value
            }

            function aO(t, e) {
                return t.layout.min - e.layout.min
            }

            function aI(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return ix(t) ? t : os(e)
            }
            let aU = (0, nA.forwardRef)(function(t, e) {
                let {
                    children: i,
                    style: n = {},
                    value: r,
                    as: s = "li",
                    onDrag: o,
                    layout: a = !0,
                    ...l
                } = t, u = sd(() => sq[s]), h = (0, nA.useContext)(aj), c = {
                    x: aI(n.x),
                    y: aI(n.y)
                }, d = oc([c.x, c.y], t => {
                    let [e, i] = t;
                    return e || i ? 1 : "unset"
                });
                J(!!h, "Reorder.Item must be a child of Reorder.Group");
                let {
                    axis: p,
                    registerItem: f,
                    updateOrder: m
                } = h;
                return (0, nb.jsx)(u, {
                    drag: p,
                    ...l,
                    dragSnapToOrigin: !0,
                    style: { ...n,
                        x: c.x,
                        y: c.y,
                        zIndex: d
                    },
                    layout: a,
                    onDrag: (t, e) => {
                        let {
                            velocity: i
                        } = e;
                        i[p] && m(r, c[p].get(), i[p]), o && o(t, e)
                    },
                    onLayoutMeasure: t => f(r, t),
                    ref: e,
                    ignoreStrict: !0,
                    children: i
                })
            });

            function aW() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .1,
                    {
                        startDelay: e = 0,
                        from: i = 0,
                        ease: n
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (r, s) => {
                    let o = t * Math.abs(("number" == typeof i ? i : function(t, e) {
                        if ("first" === t) return 0; {
                            let i = e - 1;
                            return "last" === t ? i : i / 2
                        }
                    }(i, s)) - r);
                    if (n) {
                        let e = s * t;
                        o = eP(n)(o / e) * e
                    }
                    return e + o
                }
            }
            let aN = F,
                az = L.reduce((t, e) => (t[e] = t => B(t), t), {});

            function aH(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
                return i => {
                    let n = (i = "end" === e ? Math.min(i, .999) : Math.max(i, .001)) * t;
                    return to(0, 1, ("end" === e ? Math.floor(n) : Math.ceil(n)) / t)
                }
            }
        }
    }
]);