(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1559], {
        88760: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 82309)), Promise.resolve().then(r.bind(r, 63060))
        },
        63060: (e, t, r) => {
            "use strict";
            r.d(t, {
                MissingEnvs: () => i
            });
            var n = r(154),
                s = r(77345),
                l = r(98930);

            function i(e) {
                let {
                    names: t,
                    projectId: r
                } = e, [i, a] = (0, l.useState)(!0);
                return i ? (0, n.jsxs)("details", {
                    className: "absolute inset-x-0 top-0 z-[999] cursor-pointer border-b border-yellow-100 bg-yellow-200 px-4 py-2 text-sm leading-7 text-gray-800",
                    children: [(0, n.jsxs)("summary", {
                        className: "relative select-none font-medium text-black",
                        children: [(0, n.jsx)("span", {
                            children: "Missing Environment Variables"
                        }), (0, n.jsx)("span", {
                            className: "absolute right-0 font-normal hover:underline",
                            onClick: () => {
                                a(!1)
                            },
                            children: "Close"
                        })]
                    }), (0, n.jsxs)("p", {
                        children: ["This project expects the following environment variables to be set. It may work without them, but some features may not work as expected.\xa0", r && (0, n.jsx)(s.Link, {
                            href: "".concat("https://".concat("v0.dev"), "/chat/projects/").concat(r),
                            target: "_blank",
                            className: "underline",
                            children: "Manage your environment variables."
                        })]
                    }), (0, n.jsx)("ul", {
                        className: "font-mono",
                        children: t.map(e => (0, n.jsx)("li", {
                            children: (0, n.jsx)("strong", {
                                children: e
                            })
                        }, e))
                    })]
                }) : null
            }
        },
        77345: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                Error: () => l,
                Image: () => o,
                Link: () => a(),
                Stripe: () => c,
                StripeCheckout: () => d,
                StripeProducts: () => u
            });
            var n = r(595),
                s = r(154);

            function l(e) {
                let {
                    reason: t
                } = e;
                return (0, s.jsx)("div", {
                    className: "flex flex-col items-center justify-center rounded-lg border-4 border-red-500 bg-red-200 p-4 text-red-500",
                    children: null != t ? t : "Unknown error"
                })
            }
            var i = r(7394),
                a = r.n(i);
            let o = (0, n.s)(() => r.e(8774).then(r.bind(r, 48774)).then(e => ({
                    default: e.default
                }))),
                c = (0, n.s)(() => Promise.all([r.e(1860), r.e(2255), r.e(1740)]).then(r.bind(r, 31740)).then(e => ({
                    default: e.Stripe
                }))),
                d = (0, n.s)(() => Promise.all([r.e(1860), r.e(2255), r.e(1740)]).then(r.bind(r, 31740)).then(e => ({
                    default: e.StripeCheckout
                }))),
                u = (0, n.s)(() => Promise.all([r.e(8774), r.e(2255), r.e(9596)]).then(r.bind(r, 9596)).then(e => ({
                    default: e.StripeProducts
                })))
        },
        595: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => l
            });
            var n = r(154),
                s = r(98930);

            function l(e) {
                let t = s.lazy(e);
                return s.forwardRef(function(e, r) {
                    return (0, n.jsx)(s.Suspense, {
                        children: (0, n.jsx)(t, { ...e,
                            ref: r
                        })
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4996, 9209, 8774, 7795, 7394, 1070, 6447, 1037, 2309, 6735, 1411, 7358], () => t(88760)), _N_E = e.O()
    }
]);