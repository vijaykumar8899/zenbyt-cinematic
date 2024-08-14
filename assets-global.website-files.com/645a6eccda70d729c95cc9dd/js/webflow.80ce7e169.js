/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var M_ = Object.create;
    var Kr = Object.defineProperty;
    var D_ = Object.getOwnPropertyDescriptor;
    var G_ = Object.getOwnPropertyNames;
    var V_ = Object.getPrototypeOf,
        B_ = Object.prototype.hasOwnProperty;
    var ne = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        be = (e, t) => {
            for (var r in t) Kr(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Os = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of G_(t)) !B_.call(e, i) && i !== r && Kr(e, i, {
                    get: () => t[i],
                    enumerable: !(n = D_(t, i)) || n.enumerable
                });
            return e
        };
    var Q = (e, t, r) => (r = e != null ? M_(V_(e)) : {}, Os(t || !e || !e.__esModule ? Kr(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        Xe = e => Os(Kr({}, "__esModule", {
            value: !0
        }), e);
    var As = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = u.getPropertyValue("position"),
                        p = u.getPropertyValue("overflow"),
                        g = u.getPropertyValue("display");
                    (!f || f === "static") && (a.style.position = "relative"), p !== "hidden" && (a.style.overflow = "hidden"), (!g || g === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let p in f) u.getPropertyValue(p) !== f[p] && (a.style[p] = f[p])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let f = a[u].nodeName.toLowerCase();
                        if (f === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else f === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Ss = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Ti = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(l, h) {
                var y = new he.Bare;
                return y.init(l, h)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(h) {
                    return "-" + h.toLowerCase()
                })
            }

            function n(l) {
                var h = parseInt(l.slice(1), 16),
                    y = h >> 16 & 255,
                    T = h >> 8 & 255,
                    C = 255 & h;
                return [y, T, C]
            }

            function i(l, h, y) {
                return "#" + (1 << 24 | l << 16 | h << 8 | y).toString(16).slice(1)
            }

            function o() {}

            function s(l, h) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof h + "] " + h)
            }

            function a(l, h, y) {
                f("Units do not match [" + l + "]: " + h + ", " + y)
            }

            function u(l, h, y) {
                if (h !== void 0 && (y = h), l === void 0) return y;
                var T = y;
                return L_.test(l) || !bs.test(l) ? T = parseInt(l, 10) : bs.test(l) && (T = 1e3 * parseFloat(l)), 0 > T && (T = 0), T === T ? T : y
            }

            function f(l) {
                Te.debug && window && window.console.warn(l)
            }

            function p(l) {
                for (var h = -1, y = l ? l.length : 0, T = []; ++h < y;) {
                    var C = l[h];
                    C && T.push(C)
                }
                return T
            }
            var g = function(l, h, y) {
                    function T(X) {
                        return typeof X == "object"
                    }

                    function C(X) {
                        return typeof X == "function"
                    }

                    function A() {}

                    function V(X, re) {
                        function P() {
                            var ve = new z;
                            return C(ve.init) && ve.init.apply(ve, arguments), ve
                        }

                        function z() {}
                        re === y && (re = X, X = Object), P.Bare = z;
                        var K, se = A[l] = X[l],
                            Ue = z[l] = P[l] = new A;
                        return Ue.constructor = P, P.mixin = function(ve) {
                            return z[l] = P[l] = V(P, ve)[l], P
                        }, P.open = function(ve) {
                            if (K = {}, C(ve) ? K = ve.call(P, Ue, se, P, X) : T(ve) && (K = ve), T(K))
                                for (var sr in K) h.call(K, sr) && (Ue[sr] = K[sr]);
                            return C(Ue.init) || (Ue.init = X), P
                        }, P.open(re)
                    }
                    return V
                }("prototype", {}.hasOwnProperty),
                d = {
                    ease: ["ease", function(l, h, y, T) {
                        var C = (l /= T) * l,
                            A = C * l;
                        return h + y * (-2.75 * A * C + 11 * C * C + -15.5 * A + 8 * C + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, h, y, T) {
                        var C = (l /= T) * l,
                            A = C * l;
                        return h + y * (-1 * A * C + 3 * C * C + -3 * A + 2 * C)
                    }],
                    "ease-out": ["ease-out", function(l, h, y, T) {
                        var C = (l /= T) * l,
                            A = C * l;
                        return h + y * (.3 * A * C + -1.6 * C * C + 2.2 * A + -1.8 * C + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, h, y, T) {
                        var C = (l /= T) * l,
                            A = C * l;
                        return h + y * (2 * A * C + -5 * C * C + 2 * A + 2 * C)
                    }],
                    linear: ["linear", function(l, h, y, T) {
                        return y * l / T + h
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, h, y, T) {
                        return y * (l /= T) * l + h
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, h, y, T) {
                        return -y * (l /= T) * (l - 2) + h
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, h, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l + h : -y / 2 * (--l * (l - 2) - 1) + h
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, h, y, T) {
                        return y * (l /= T) * l * l + h
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, h, y, T) {
                        return y * ((l = l / T - 1) * l * l + 1) + h
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, h, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l * l + h : y / 2 * ((l -= 2) * l * l + 2) + h
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, h, y, T) {
                        return y * (l /= T) * l * l * l + h
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, h, y, T) {
                        return -y * ((l = l / T - 1) * l * l * l - 1) + h
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, h, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l * l * l + h : -y / 2 * ((l -= 2) * l * l * l - 2) + h
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, h, y, T) {
                        return y * (l /= T) * l * l * l * l + h
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, h, y, T) {
                        return y * ((l = l / T - 1) * l * l * l * l + 1) + h
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, h, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l * l * l * l + h : y / 2 * ((l -= 2) * l * l * l * l + 2) + h
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, h, y, T) {
                        return -y * Math.cos(l / T * (Math.PI / 2)) + y + h
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, h, y, T) {
                        return y * Math.sin(l / T * (Math.PI / 2)) + h
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, h, y, T) {
                        return -y / 2 * (Math.cos(Math.PI * l / T) - 1) + h
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, h, y, T) {
                        return l === 0 ? h : y * Math.pow(2, 10 * (l / T - 1)) + h
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, h, y, T) {
                        return l === T ? h + y : y * (-Math.pow(2, -10 * l / T) + 1) + h
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, h, y, T) {
                        return l === 0 ? h : l === T ? h + y : (l /= T / 2) < 1 ? y / 2 * Math.pow(2, 10 * (l - 1)) + h : y / 2 * (-Math.pow(2, -10 * --l) + 2) + h
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, h, y, T) {
                        return -y * (Math.sqrt(1 - (l /= T) * l) - 1) + h
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, h, y, T) {
                        return y * Math.sqrt(1 - (l = l / T - 1) * l) + h
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, h, y, T) {
                        return (l /= T / 2) < 1 ? -y / 2 * (Math.sqrt(1 - l * l) - 1) + h : y / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + h
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, h, y, T, C) {
                        return C === void 0 && (C = 1.70158), y * (l /= T) * l * ((C + 1) * l - C) + h
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, h, y, T, C) {
                        return C === void 0 && (C = 1.70158), y * ((l = l / T - 1) * l * ((C + 1) * l + C) + 1) + h
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, h, y, T, C) {
                        return C === void 0 && (C = 1.70158), (l /= T / 2) < 1 ? y / 2 * l * l * (((C *= 1.525) + 1) * l - C) + h : y / 2 * ((l -= 2) * l * (((C *= 1.525) + 1) * l + C) + 2) + h
                    }]
                },
                m = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                O = document,
                E = window,
                b = "bkwld-tram",
                v = /[\-\.0-9]/g,
                S = /[A-Z]/,
                I = "number",
                w = /^(rgb|#)/,
                R = /(em|cm|mm|in|pt|pc|px)$/,
                x = /(em|cm|mm|in|pt|pc|px|%)$/,
                F = /(deg|rad|turn)$/,
                M = "unitless",
                G = /(all|none) 0s ease 0s/,
                U = /^(width|height)$/,
                k = " ",
                L = O.createElement("a"),
                _ = ["Webkit", "Moz", "O", "ms"],
                N = ["-webkit-", "-moz-", "-o-", "-ms-"],
                D = function(l) {
                    if (l in L.style) return {
                        dom: l,
                        css: l
                    };
                    var h, y, T = "",
                        C = l.split("-");
                    for (h = 0; h < C.length; h++) T += C[h].charAt(0).toUpperCase() + C[h].slice(1);
                    for (h = 0; h < _.length; h++)
                        if (y = _[h] + T, y in L.style) return {
                            dom: y,
                            css: N[h] + l
                        }
                },
                q = t.support = {
                    bind: Function.prototype.bind,
                    transform: D("transform"),
                    transition: D("transition"),
                    backface: D("backface-visibility"),
                    timing: D("transition-timing-function")
                };
            if (q.transition) {
                var W = q.timing.dom;
                if (L.style[W] = d["ease-in-back"][0], !L.style[W])
                    for (var H in m) d[H][0] = m[H]
            }
            var ee = t.frame = function() {
                    var l = E.requestAnimationFrame || E.webkitRequestAnimationFrame || E.mozRequestAnimationFrame || E.oRequestAnimationFrame || E.msRequestAnimationFrame;
                    return l && q.bind ? l.bind(E) : function(h) {
                        E.setTimeout(h, 16)
                    }
                }(),
                we = t.now = function() {
                    var l = E.performance,
                        h = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return h && q.bind ? h.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                ot = g(function(l) {
                    function h(B, Y) {
                        var oe = p(("" + B).split(k)),
                            Z = oe[0];
                        Y = Y || {};
                        var ye = _i[Z];
                        if (!ye) return f("Unsupported property: " + Z);
                        if (!Y.weak || !this.props[Z]) {
                            var Le = ye[0],
                                Ie = this.props[Z];
                            return Ie || (Ie = this.props[Z] = new Le.Bare), Ie.init(this.$el, oe, ye, Y), Ie
                        }
                    }

                    function y(B, Y, oe) {
                        if (B) {
                            var Z = typeof B;
                            if (Y || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), Z == "number" && Y) return this.timer = new jr({
                                duration: B,
                                context: this,
                                complete: A
                            }), void(this.active = !0);
                            if (Z == "string" && Y) {
                                switch (B) {
                                    case "hide":
                                        P.call(this);
                                        break;
                                    case "stop":
                                        V.call(this);
                                        break;
                                    case "redraw":
                                        z.call(this);
                                        break;
                                    default:
                                        h.call(this, B, oe && oe[1])
                                }
                                return A.call(this)
                            }
                            if (Z == "function") return void B.call(this, this);
                            if (Z == "object") {
                                var ye = 0;
                                Ue.call(this, B, function(ue, F_) {
                                    ue.span > ye && (ye = ue.span), ue.stop(), ue.animate(F_)
                                }, function(ue) {
                                    "wait" in ue && (ye = u(ue.wait, 0))
                                }), se.call(this), ye > 0 && (this.timer = new jr({
                                    duration: ye,
                                    context: this
                                }), this.active = !0, Y && (this.timer.complete = A));
                                var Le = this,
                                    Ie = !1,
                                    zr = {};
                                ee(function() {
                                    Ue.call(Le, B, function(ue) {
                                        ue.active && (Ie = !0, zr[ue.name] = ue.nextStyle)
                                    }), Ie && Le.$el.css(zr)
                                })
                            }
                        }
                    }

                    function T(B) {
                        B = u(B, 0), this.active ? this.queue.push({
                            options: B
                        }) : (this.timer = new jr({
                            duration: B,
                            context: this,
                            complete: A
                        }), this.active = !0)
                    }

                    function C(B) {
                        return this.active ? (this.queue.push({
                            options: B,
                            args: arguments
                        }), void(this.timer.complete = A)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function A() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var B = this.queue.shift();
                            y.call(this, B.options, !0, B.args)
                        }
                    }

                    function V(B) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var Y;
                        typeof B == "string" ? (Y = {}, Y[B] = 1) : Y = typeof B == "object" && B != null ? B : this.props, Ue.call(this, Y, ve), se.call(this)
                    }

                    function X(B) {
                        V.call(this, B), Ue.call(this, B, sr, P_)
                    }

                    function re(B) {
                        typeof B != "string" && (B = "block"), this.el.style.display = B
                    }

                    function P() {
                        V.call(this), this.el.style.display = "none"
                    }

                    function z() {
                        this.el.offsetHeight
                    }

                    function K() {
                        V.call(this), e.removeData(this.el, b), this.$el = this.el = null
                    }

                    function se() {
                        var B, Y, oe = [];
                        this.upstream && oe.push(this.upstream);
                        for (B in this.props) Y = this.props[B], Y.active && oe.push(Y.string);
                        oe = oe.join(","), this.style !== oe && (this.style = oe, this.el.style[q.transition.dom] = oe)
                    }

                    function Ue(B, Y, oe) {
                        var Z, ye, Le, Ie, zr = Y !== ve,
                            ue = {};
                        for (Z in B) Le = B[Z], Z in at ? (ue.transform || (ue.transform = {}), ue.transform[Z] = Le) : (S.test(Z) && (Z = r(Z)), Z in _i ? ue[Z] = Le : (Ie || (Ie = {}), Ie[Z] = Le));
                        for (Z in ue) {
                            if (Le = ue[Z], ye = this.props[Z], !ye) {
                                if (!zr) continue;
                                ye = h.call(this, Z)
                            }
                            Y.call(this, ye, Le)
                        }
                        oe && Ie && oe.call(this, Ie)
                    }

                    function ve(B) {
                        B.stop()
                    }

                    function sr(B, Y) {
                        B.set(Y)
                    }

                    function P_(B) {
                        this.$el.css(B)
                    }

                    function Ne(B, Y) {
                        l[B] = function() {
                            return this.children ? q_.call(this, Y, arguments) : (this.el && Y.apply(this, arguments), this)
                        }
                    }

                    function q_(B, Y) {
                        var oe, Z = this.children.length;
                        for (oe = 0; Z > oe; oe++) B.apply(this.children[oe], Y);
                        return this
                    }
                    l.init = function(B) {
                        if (this.$el = e(B), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, Te.keepInherited && !Te.fallback) {
                            var Y = Ts(this.el, "transition");
                            Y && !G.test(Y) && (this.upstream = Y)
                        }
                        q.backface && Te.hideBackface && St(this.el, q.backface.css, "hidden")
                    }, Ne("add", h), Ne("start", y), Ne("wait", T), Ne("then", C), Ne("next", A), Ne("stop", V), Ne("set", X), Ne("show", re), Ne("hide", P), Ne("redraw", z), Ne("destroy", K)
                }),
                he = g(ot, function(l) {
                    function h(y, T) {
                        var C = e.data(y, b) || e.data(y, b, new ot.Bare);
                        return C.el || C.init(y), T ? C.start(T) : C
                    }
                    l.init = function(y, T) {
                        var C = e(y);
                        if (!C.length) return this;
                        if (C.length === 1) return h(C[0], T);
                        var A = [];
                        return C.each(function(V, X) {
                            A.push(h(X, T))
                        }), this.children = A, this
                    }
                }),
                j = g(function(l) {
                    function h() {
                        var A = this.get();
                        this.update("auto");
                        var V = this.get();
                        return this.update(A), V
                    }

                    function y(A, V, X) {
                        return V !== void 0 && (X = V), A in d ? A : X
                    }

                    function T(A) {
                        var V = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
                        return (V ? i(V[1], V[2], V[3]) : A).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var C = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(A, V, X, re) {
                        this.$el = A, this.el = A[0];
                        var P = V[0];
                        X[2] && (P = X[2]), Is[P] && (P = Is[P]), this.name = P, this.type = X[1], this.duration = u(V[1], this.duration, C.duration), this.ease = y(V[2], this.ease, C.ease), this.delay = u(V[3], this.delay, C.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = U.test(this.name), this.unit = re.unit || this.unit || Te.defaultUnit, this.angle = re.angle || this.angle || Te.defaultAngle, Te.fallback || re.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + k + this.duration + "ms" + (this.ease != "ease" ? k + d[this.ease][0] : "") + (this.delay ? k + this.delay + "ms" : ""))
                    }, l.set = function(A) {
                        A = this.convert(A, this.type), this.update(A), this.redraw()
                    }, l.transition = function(A) {
                        this.active = !0, A = this.convert(A, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), A == "auto" && (A = h.call(this))), this.nextStyle = A
                    }, l.fallback = function(A) {
                        var V = this.el.style[this.name] || this.convert(this.get(), this.type);
                        A = this.convert(A, this.type), this.auto && (V == "auto" && (V = this.convert(this.get(), this.type)), A == "auto" && (A = h.call(this))), this.tween = new ar({
                            from: V,
                            to: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return Ts(this.el, this.name)
                    }, l.update = function(A) {
                        St(this.el, this.name, A)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, St(this.el, this.name, this.get()));
                        var A = this.tween;
                        A && A.context && A.destroy()
                    }, l.convert = function(A, V) {
                        if (A == "auto" && this.auto) return A;
                        var X, re = typeof A == "number",
                            P = typeof A == "string";
                        switch (V) {
                            case I:
                                if (re) return A;
                                if (P && A.replace(v, "") === "") return +A;
                                X = "number(unitless)";
                                break;
                            case w:
                                if (P) {
                                    if (A === "" && this.original) return this.original;
                                    if (V.test(A)) return A.charAt(0) == "#" && A.length == 7 ? A : T(A)
                                }
                                X = "hex or rgb string";
                                break;
                            case R:
                                if (re) return A + this.unit;
                                if (P && V.test(A)) return A;
                                X = "number(px) or string(unit)";
                                break;
                            case x:
                                if (re) return A + this.unit;
                                if (P && V.test(A)) return A;
                                X = "number(px) or string(unit or %)";
                                break;
                            case F:
                                if (re) return A + this.angle;
                                if (P && V.test(A)) return A;
                                X = "number(deg) or string(angle)";
                                break;
                            case M:
                                if (re || P && x.test(A)) return A;
                                X = "number(unitless) or string(unit or %)"
                        }
                        return s(X, A), A
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                Re = g(j, function(l, h) {
                    l.init = function() {
                        h.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), w))
                    }
                }),
                or = g(j, function(l, h) {
                    l.init = function() {
                        h.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(y) {
                        this.$el[this.name](y)
                    }
                }),
                Wr = g(j, function(l, h) {
                    function y(T, C) {
                        var A, V, X, re, P;
                        for (A in T) re = at[A], X = re[0], V = re[1] || A, P = this.convert(T[A], X), C.call(this, V, P, X)
                    }
                    l.init = function() {
                        h.init.apply(this, arguments), this.current || (this.current = {}, at.perspective && Te.perspective && (this.current.perspective = Te.perspective, St(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(T) {
                        y.call(this, T, function(C, A) {
                            this.current[C] = A
                        }), St(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(T) {
                        var C = this.values(T);
                        this.tween = new _s({
                            current: this.current,
                            values: C,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var A, V = {};
                        for (A in this.current) V[A] = A in C ? C[A] : this.current[A];
                        this.active = !0, this.nextStyle = this.style(V)
                    }, l.fallback = function(T) {
                        var C = this.values(T);
                        this.tween = new _s({
                            current: this.current,
                            values: C,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        St(this.el, this.name, this.style(this.current))
                    }, l.style = function(T) {
                        var C, A = "";
                        for (C in T) A += C + "(" + T[C] + ") ";
                        return A
                    }, l.values = function(T) {
                        var C, A = {};
                        return y.call(this, T, function(V, X, re) {
                            A[V] = X, this.current[V] === void 0 && (C = 0, ~V.indexOf("scale") && (C = 1), this.current[V] = this.convert(C, re))
                        }), A
                    }
                }),
                ar = g(function(l) {
                    function h(P) {
                        X.push(P) === 1 && ee(y)
                    }

                    function y() {
                        var P, z, K, se = X.length;
                        if (se)
                            for (ee(y), z = we(), P = se; P--;) K = X[P], K && K.render(z)
                    }

                    function T(P) {
                        var z, K = e.inArray(P, X);
                        K >= 0 && (z = X.slice(K + 1), X.length = K, z.length && (X = X.concat(z)))
                    }

                    function C(P) {
                        return Math.round(P * re) / re
                    }

                    function A(P, z, K) {
                        return i(P[0] + K * (z[0] - P[0]), P[1] + K * (z[1] - P[1]), P[2] + K * (z[2] - P[2]))
                    }
                    var V = {
                        ease: d.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(P) {
                        this.duration = P.duration || 0, this.delay = P.delay || 0;
                        var z = P.ease || V.ease;
                        d[z] && (z = d[z][1]), typeof z != "function" && (z = V.ease), this.ease = z, this.update = P.update || o, this.complete = P.complete || o, this.context = P.context || this, this.name = P.name;
                        var K = P.from,
                            se = P.to;
                        K === void 0 && (K = V.from), se === void 0 && (se = V.to), this.unit = P.unit || "", typeof K == "number" && typeof se == "number" ? (this.begin = K, this.change = se - K) : this.format(se, K), this.value = this.begin + this.unit, this.start = we(), P.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = we()), this.active = !0, h(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, T(this))
                    }, l.render = function(P) {
                        var z, K = P - this.start;
                        if (this.delay) {
                            if (K <= this.delay) return;
                            K -= this.delay
                        }
                        if (K < this.duration) {
                            var se = this.ease(K, 0, 1, this.duration);
                            return z = this.startRGB ? A(this.startRGB, this.endRGB, se) : C(this.begin + se * this.change), this.value = z + this.unit, void this.update.call(this.context, this.value)
                        }
                        z = this.endHex || this.begin + this.change, this.value = z + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(P, z) {
                        if (z += "", P += "", P.charAt(0) == "#") return this.startRGB = n(z), this.endRGB = n(P), this.endHex = P, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var K = z.replace(v, ""),
                                se = P.replace(v, "");
                            K !== se && a("tween", z, P), this.unit = K
                        }
                        z = parseFloat(z), P = parseFloat(P), this.begin = this.value = z, this.change = P - z
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var X = [],
                        re = 1e3
                }),
                jr = g(ar, function(l) {
                    l.init = function(h) {
                        this.duration = h.duration || 0, this.complete = h.complete || o, this.context = h.context, this.play()
                    }, l.render = function(h) {
                        var y = h - this.start;
                        y < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                _s = g(ar, function(l, h) {
                    l.init = function(y) {
                        this.context = y.context, this.update = y.update, this.tweens = [], this.current = y.current;
                        var T, C;
                        for (T in y.values) C = y.values[T], this.current[T] !== C && this.tweens.push(new ar({
                            name: T,
                            from: this.current[T],
                            to: C,
                            duration: y.duration,
                            delay: y.delay,
                            ease: y.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(y) {
                        var T, C, A = this.tweens.length,
                            V = !1;
                        for (T = A; T--;) C = this.tweens[T], C.context && (C.render(y), this.current[C.name] = C.value, V = !0);
                        return V ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (h.destroy.call(this), this.tweens) {
                            var y, T = this.tweens.length;
                            for (y = T; y--;) this.tweens[y].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                Te = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !q.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!q.transition) return Te.fallback = !0;
                Te.agentTests.push("(" + l + ")");
                var h = new RegExp(Te.agentTests.join("|"), "i");
                Te.fallback = h.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new ar(l)
            }, t.delay = function(l, h, y) {
                return new jr({
                    complete: h,
                    duration: l,
                    context: y
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var St = e.style,
                Ts = e.css,
                Is = {
                    transform: q.transform && q.transform.css
                },
                _i = {
                    color: [Re, w],
                    background: [Re, w, "background-color"],
                    "outline-color": [Re, w],
                    "border-color": [Re, w],
                    "border-top-color": [Re, w],
                    "border-right-color": [Re, w],
                    "border-bottom-color": [Re, w],
                    "border-left-color": [Re, w],
                    "border-width": [j, R],
                    "border-top-width": [j, R],
                    "border-right-width": [j, R],
                    "border-bottom-width": [j, R],
                    "border-left-width": [j, R],
                    "border-spacing": [j, R],
                    "letter-spacing": [j, R],
                    margin: [j, R],
                    "margin-top": [j, R],
                    "margin-right": [j, R],
                    "margin-bottom": [j, R],
                    "margin-left": [j, R],
                    padding: [j, R],
                    "padding-top": [j, R],
                    "padding-right": [j, R],
                    "padding-bottom": [j, R],
                    "padding-left": [j, R],
                    "outline-width": [j, R],
                    opacity: [j, I],
                    top: [j, x],
                    right: [j, x],
                    bottom: [j, x],
                    left: [j, x],
                    "font-size": [j, x],
                    "text-indent": [j, x],
                    "word-spacing": [j, x],
                    width: [j, x],
                    "min-width": [j, x],
                    "max-width": [j, x],
                    height: [j, x],
                    "min-height": [j, x],
                    "max-height": [j, x],
                    "line-height": [j, M],
                    "scroll-top": [or, I, "scrollTop"],
                    "scroll-left": [or, I, "scrollLeft"]
                },
                at = {};
            q.transform && (_i.transform = [Wr], at = {
                x: [x, "translateX"],
                y: [x, "translateY"],
                rotate: [F],
                rotateX: [F],
                rotateY: [F],
                scale: [I],
                scaleX: [I],
                scaleY: [I],
                skew: [F],
                skewX: [F],
                skewY: [F]
            }), q.transform && q.backface && (at.z = [x, "translateZ"], at.rotateZ = [F], at.scaleZ = [I], at.perspective = [R]);
            var L_ = /ms/,
                bs = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var ws = c((w5, xs) => {
        "use strict";
        var U_ = window.$,
            X_ = Ti() && U_.tram;
        xs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                f = n.hasOwnProperty,
                p = r.forEach,
                g = r.map,
                d = r.reduce,
                m = r.reduceRight,
                O = r.filter,
                E = r.every,
                b = r.some,
                v = r.indexOf,
                S = r.lastIndexOf,
                I = Array.isArray,
                w = Object.keys,
                R = i.bind,
                x = e.each = e.forEach = function(_, N, D) {
                    if (_ == null) return _;
                    if (p && _.forEach === p) _.forEach(N, D);
                    else if (_.length === +_.length) {
                        for (var q = 0, W = _.length; q < W; q++)
                            if (N.call(D, _[q], q, _) === t) return
                    } else
                        for (var H = e.keys(_), q = 0, W = H.length; q < W; q++)
                            if (N.call(D, _[H[q]], H[q], _) === t) return;
                    return _
                };
            e.map = e.collect = function(_, N, D) {
                var q = [];
                return _ == null ? q : g && _.map === g ? _.map(N, D) : (x(_, function(W, H, ee) {
                    q.push(N.call(D, W, H, ee))
                }), q)
            }, e.find = e.detect = function(_, N, D) {
                var q;
                return F(_, function(W, H, ee) {
                    if (N.call(D, W, H, ee)) return q = W, !0
                }), q
            }, e.filter = e.select = function(_, N, D) {
                var q = [];
                return _ == null ? q : O && _.filter === O ? _.filter(N, D) : (x(_, function(W, H, ee) {
                    N.call(D, W, H, ee) && q.push(W)
                }), q)
            };
            var F = e.some = e.any = function(_, N, D) {
                N || (N = e.identity);
                var q = !1;
                return _ == null ? q : b && _.some === b ? _.some(N, D) : (x(_, function(W, H, ee) {
                    if (q || (q = N.call(D, W, H, ee))) return t
                }), !!q)
            };
            e.contains = e.include = function(_, N) {
                return _ == null ? !1 : v && _.indexOf === v ? _.indexOf(N) != -1 : F(_, function(D) {
                    return D === N
                })
            }, e.delay = function(_, N) {
                var D = s.call(arguments, 2);
                return setTimeout(function() {
                    return _.apply(null, D)
                }, N)
            }, e.defer = function(_) {
                return e.delay.apply(e, [_, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(_) {
                var N, D, q;
                return function() {
                    N || (N = !0, D = arguments, q = this, X_.frame(function() {
                        N = !1, _.apply(q, D)
                    }))
                }
            }, e.debounce = function(_, N, D) {
                var q, W, H, ee, we, ot = function() {
                    var he = e.now() - ee;
                    he < N ? q = setTimeout(ot, N - he) : (q = null, D || (we = _.apply(H, W), H = W = null))
                };
                return function() {
                    H = this, W = arguments, ee = e.now();
                    var he = D && !q;
                    return q || (q = setTimeout(ot, N)), he && (we = _.apply(H, W), H = W = null), we
                }
            }, e.defaults = function(_) {
                if (!e.isObject(_)) return _;
                for (var N = 1, D = arguments.length; N < D; N++) {
                    var q = arguments[N];
                    for (var W in q) _[W] === void 0 && (_[W] = q[W])
                }
                return _
            }, e.keys = function(_) {
                if (!e.isObject(_)) return [];
                if (w) return w(_);
                var N = [];
                for (var D in _) e.has(_, D) && N.push(D);
                return N
            }, e.has = function(_, N) {
                return f.call(_, N)
            }, e.isObject = function(_) {
                return _ === Object(_)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var M = /(.)^/,
                G = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                U = /\\|'|\r|\n|\u2028|\u2029/g,
                k = function(_) {
                    return "\\" + G[_]
                },
                L = /^\s*(\w|\$)+\s*$/;
            return e.template = function(_, N, D) {
                !N && D && (N = D), N = e.defaults({}, N, e.templateSettings);
                var q = RegExp([(N.escape || M).source, (N.interpolate || M).source, (N.evaluate || M).source].join("|") + "|$", "g"),
                    W = 0,
                    H = "__p+='";
                _.replace(q, function(he, j, Re, or, Wr) {
                    return H += _.slice(W, Wr).replace(U, k), W = Wr + he.length, j ? H += `'+
((__t=(` + j + `))==null?'':_.escape(__t))+
'` : Re ? H += `'+
((__t=(` + Re + `))==null?'':__t)+
'` : or && (H += `';
` + or + `
__p+='`), he
                }), H += `';
`;
                var ee = N.variable;
                if (ee) {
                    if (!L.test(ee)) throw new Error("variable is not a bare identifier: " + ee)
                } else H = `with(obj||{}){
` + H + `}
`, ee = "obj";
                H = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + H + `return __p;
`;
                var we;
                try {
                    we = new Function(N.variable || "obj", "_", H)
                } catch (he) {
                    throw he.source = H, he
                }
                var ot = function(he) {
                    return we.call(this, he, e)
                };
                return ot.source = "function(" + ee + `){
` + H + "}", ot
            }, e
        }()
    });
    var Qe = c((C5, Ms) => {
        "use strict";
        var J = {},
            xt = {},
            wt = [],
            bi = window.Webflow || [],
            st = window.jQuery,
            qe = st(window),
            H_ = st(document),
            He = st.isFunction,
            Pe = J._ = ws(),
            Rs = J.tram = Ti() && st.tram,
            $r = !1,
            Oi = !1;
        Rs.config.hideBackface = !1;
        Rs.config.keepInherited = !0;
        J.define = function(e, t, r) {
            xt[e] && Ls(xt[e]);
            var n = xt[e] = t(st, Pe, r) || {};
            return Ns(n), n
        };
        J.require = function(e) {
            return xt[e]
        };

        function Ns(e) {
            J.env() && (He(e.design) && qe.on("__wf_design", e.design), He(e.preview) && qe.on("__wf_preview", e.preview)), He(e.destroy) && qe.on("__wf_destroy", e.destroy), e.ready && He(e.ready) && k_(e)
        }

        function k_(e) {
            if ($r) {
                e.ready();
                return
            }
            Pe.contains(wt, e.ready) || wt.push(e.ready)
        }

        function Ls(e) {
            He(e.design) && qe.off("__wf_design", e.design), He(e.preview) && qe.off("__wf_preview", e.preview), He(e.destroy) && qe.off("__wf_destroy", e.destroy), e.ready && He(e.ready) && W_(e)
        }

        function W_(e) {
            wt = Pe.filter(wt, function(t) {
                return t !== e.ready
            })
        }
        J.push = function(e) {
            if ($r) {
                He(e) && e();
                return
            }
            bi.push(e)
        };
        J.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Yr = navigator.userAgent.toLowerCase(),
            Ps = J.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            j_ = J.env.chrome = /chrome/.test(Yr) && /Google/.test(navigator.vendor) && parseInt(Yr.match(/chrome\/(\d+)\./)[1], 10),
            z_ = J.env.ios = /(ipod|iphone|ipad)/.test(Yr);
        J.env.safari = /safari/.test(Yr) && !j_ && !z_;
        var Ii;
        Ps && H_.on("touchstart mousedown", function(e) {
            Ii = e.target
        });
        J.validClick = Ps ? function(e) {
            return e === Ii || st.contains(e, Ii)
        } : function() {
            return !0
        };
        var qs = "resize.webflow orientationchange.webflow load.webflow",
            K_ = "scroll.webflow " + qs;
        J.resize = Ai(qe, qs);
        J.scroll = Ai(qe, K_);
        J.redraw = Ai();

        function Ai(e, t) {
            var r = [],
                n = {};
            return n.up = Pe.throttle(function(i) {
                Pe.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Pe.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Pe.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        J.location = function(e) {
            window.location = e
        };
        J.env() && (J.location = function() {});
        J.ready = function() {
            $r = !0, Oi ? Y_() : Pe.each(wt, Cs), Pe.each(bi, Cs), J.resize.up()
        };

        function Cs(e) {
            He(e) && e()
        }

        function Y_() {
            Oi = !1, Pe.each(xt, Ns)
        }
        var ht;
        J.load = function(e) {
            ht.then(e)
        };

        function Fs() {
            ht && (ht.reject(), qe.off("load", ht.resolve)), ht = new st.Deferred, qe.on("load", ht.resolve)
        }
        J.destroy = function(e) {
            e = e || {}, Oi = !0, qe.triggerHandler("__wf_destroy"), e.domready != null && ($r = e.domready), Pe.each(xt, Ls), J.resize.off(), J.scroll.off(), J.redraw.off(), wt = [], bi = [], ht.state() === "pending" && Fs()
        };
        st(J.ready);
        Fs();
        Ms.exports = window.Webflow = J
    });
    var Vs = c((R5, Gs) => {
        "use strict";
        var Ds = Qe();
        Ds.define("brand", Gs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var m = n.attr("data-wf-status"),
                    O = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(O) && s.hostname !== O && (m = !0), m && !a && (f = f || g(), d(), setTimeout(d, 500), e(r).off(u, p).on(u, p))
            };

            function p() {
                var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", m ? "display: none !important;" : "")
            }

            function g() {
                var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    O = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    E = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return m.append(O, E), m[0]
            }

            function d() {
                var m = i.children(o),
                    O = m.length && m.get(0) === f,
                    E = Ds.env("editor");
                if (O) {
                    E && m.remove();
                    return
                }
                m.length && m.remove(), E || i.append(f)
            }
            return t
        })
    });
    var Us = c((N5, Bs) => {
        "use strict";
        var Si = Qe();
        Si.define("edit", Bs.exports = function(e, t, r) {
            if (r = r || {}, (Si.env("test") || Si.env("frame")) && !r.fixture && !$_()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, f = r.load || d,
                p = !1;
            try {
                p = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            p ? f() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && f() : i.on(a, g).triggerHandler(a);

            function g() {
                u || /\?edit/.test(s.hash) && f()
            }

            function d() {
                u = !0, window.WebflowEditor = !0, i.off(a, g), S(function(w) {
                    e.ajax({
                        url: v("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: m(w)
                    })
                })
            }

            function m(w) {
                return function(R) {
                    if (!R) {
                        console.error("Could not load editor data");
                        return
                    }
                    R.thirdPartyCookiesSupported = w, O(b(R.scriptPath), function() {
                        window.WebflowEditor(R)
                    })
                }
            }

            function O(w, R) {
                e.ajax({
                    type: "GET",
                    url: w,
                    dataType: "script",
                    cache: !0
                }).then(R, E)
            }

            function E(w, R, x) {
                throw console.error("Could not load editor script: " + R), x
            }

            function b(w) {
                return w.indexOf("//") >= 0 ? w : v("https://editor-api.webflow.com" + w)
            }

            function v(w) {
                return w.replace(/([^:])\/\//g, "$1/")
            }

            function S(w) {
                var R = window.document.createElement("iframe");
                R.src = "https://webflow.com/site/third-party-cookie-check.html", R.style.display = "none", R.sandbox = "allow-scripts allow-same-origin";
                var x = function(F) {
                    F.data === "WF_third_party_cookies_unsupported" ? (I(R, x), w(!1)) : F.data === "WF_third_party_cookies_supported" && (I(R, x), w(!0))
                };
                R.onerror = function() {
                    I(R, x), w(!1)
                }, window.addEventListener("message", x, !1), window.document.body.appendChild(R)
            }

            function I(w, R) {
                window.removeEventListener("message", R, !1), w.remove()
            }
            return n
        });

        function $_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Hs = c((L5, Xs) => {
        "use strict";
        var Q_ = Qe();
        Q_.define("focus-visible", Xs.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(I) {
                    return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
                }

                function u(I) {
                    var w = I.type,
                        R = I.tagName;
                    return !!(R === "INPUT" && s[w] && !I.readOnly || R === "TEXTAREA" && !I.readOnly || I.isContentEditable)
                }

                function f(I) {
                    I.getAttribute("data-wf-focus-visible") || I.setAttribute("data-wf-focus-visible", "true")
                }

                function p(I) {
                    I.getAttribute("data-wf-focus-visible") && I.removeAttribute("data-wf-focus-visible")
                }

                function g(I) {
                    I.metaKey || I.altKey || I.ctrlKey || (a(r.activeElement) && f(r.activeElement), n = !0)
                }

                function d() {
                    n = !1
                }

                function m(I) {
                    a(I.target) && (n || u(I.target)) && f(I.target)
                }

                function O(I) {
                    a(I.target) && I.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), p(I.target))
                }

                function E() {
                    document.visibilityState === "hidden" && (i && (n = !0), b())
                }

                function b() {
                    document.addEventListener("mousemove", S), document.addEventListener("mousedown", S), document.addEventListener("mouseup", S), document.addEventListener("pointermove", S), document.addEventListener("pointerdown", S), document.addEventListener("pointerup", S), document.addEventListener("touchmove", S), document.addEventListener("touchstart", S), document.addEventListener("touchend", S)
                }

                function v() {
                    document.removeEventListener("mousemove", S), document.removeEventListener("mousedown", S), document.removeEventListener("mouseup", S), document.removeEventListener("pointermove", S), document.removeEventListener("pointerdown", S), document.removeEventListener("pointerup", S), document.removeEventListener("touchmove", S), document.removeEventListener("touchstart", S), document.removeEventListener("touchend", S)
                }

                function S(I) {
                    I.target.nodeName && I.target.nodeName.toLowerCase() === "html" || (n = !1, v())
                }
                document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", E, !0), b(), r.addEventListener("focus", m, !0), r.addEventListener("blur", O, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var js = c((P5, Ws) => {
        "use strict";
        var ks = Qe();
        ks.define("focus", Ws.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ks.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Ys = c((q5, Ks) => {
        "use strict";
        var xi = window.jQuery,
            ke = {},
            Qr = [],
            zs = ".w-ix",
            Zr = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, xi(t).triggerHandler(ke.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, xi(t).triggerHandler(ke.types.OUTRO))
                }
            };
        ke.triggers = {};
        ke.types = {
            INTRO: "w-ix-intro" + zs,
            OUTRO: "w-ix-outro" + zs
        };
        ke.init = function() {
            for (var e = Qr.length, t = 0; t < e; t++) {
                var r = Qr[t];
                r[0](0, r[1])
            }
            Qr = [], xi.extend(ke.triggers, Zr)
        };
        ke.async = function() {
            for (var e in Zr) {
                var t = Zr[e];
                Zr.hasOwnProperty(e) && (ke.triggers[e] = function(r, n) {
                    Qr.push([t, n])
                })
            }
        };
        ke.async();
        Ks.exports = ke
    });
    var Js = c((F5, Zs) => {
        "use strict";
        var wi = Ys();

        function $s(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var Z_ = window.jQuery,
            Jr = {},
            Qs = ".w-ix",
            J_ = {
                reset: function(e, t) {
                    wi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    wi.triggers.intro(e, t), $s(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    wi.triggers.outro(e, t), $s(t, "COMPONENT_INACTIVE")
                }
            };
        Jr.triggers = {};
        Jr.types = {
            INTRO: "w-ix-intro" + Qs,
            OUTRO: "w-ix-outro" + Qs
        };
        Z_.extend(Jr.triggers, J_);
        Zs.exports = Jr
    });
    var eu = c((M5, Ze) => {
        function Ci(e) {
            return Ze.exports = Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ze.exports.__esModule = !0, Ze.exports.default = Ze.exports, Ci(e)
        }
        Ze.exports = Ci, Ze.exports.__esModule = !0, Ze.exports.default = Ze.exports
    });
    var en = c((D5, ur) => {
        var eT = eu().default;

        function tu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (tu = function(i) {
                return i ? r : t
            })(e)
        }

        function tT(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || eT(e) != "object" && typeof e != "function") return {
                default: e
            };
            var r = tu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        ur.exports = tT, ur.exports.__esModule = !0, ur.exports.default = ur.exports
    });
    var ru = c((G5, cr) => {
        function rT(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        cr.exports = rT, cr.exports.__esModule = !0, cr.exports.default = cr.exports
    });
    var ie = c((V5, nu) => {
        var tn = function(e) {
            return e && e.Math == Math && e
        };
        nu.exports = tn(typeof globalThis == "object" && globalThis) || tn(typeof window == "object" && window) || tn(typeof self == "object" && self) || tn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Ct = c((B5, iu) => {
        iu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var vt = c((U5, ou) => {
        var nT = Ct();
        ou.exports = !nT(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var rn = c((X5, au) => {
        var lr = Function.prototype.call;
        au.exports = lr.bind ? lr.bind(lr) : function() {
            return lr.apply(lr, arguments)
        }
    });
    var lu = c(cu => {
        "use strict";
        var su = {}.propertyIsEnumerable,
            uu = Object.getOwnPropertyDescriptor,
            iT = uu && !su.call({
                1: 2
            }, 1);
        cu.f = iT ? function(t) {
            var r = uu(this, t);
            return !!r && r.enumerable
        } : su
    });
    var Ri = c((k5, fu) => {
        fu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Fe = c((W5, pu) => {
        var du = Function.prototype,
            Ni = du.bind,
            Li = du.call,
            oT = Ni && Ni.bind(Li);
        pu.exports = Ni ? function(e) {
            return e && oT(Li, e)
        } : function(e) {
            return e && function() {
                return Li.apply(e, arguments)
            }
        }
    });
    var vu = c((j5, hu) => {
        var gu = Fe(),
            aT = gu({}.toString),
            sT = gu("".slice);
        hu.exports = function(e) {
            return sT(aT(e), 8, -1)
        }
    });
    var Eu = c((z5, yu) => {
        var uT = ie(),
            cT = Fe(),
            lT = Ct(),
            fT = vu(),
            Pi = uT.Object,
            dT = cT("".split);
        yu.exports = lT(function() {
            return !Pi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return fT(e) == "String" ? dT(e, "") : Pi(e)
        } : Pi
    });
    var qi = c((K5, mu) => {
        var pT = ie(),
            gT = pT.TypeError;
        mu.exports = function(e) {
            if (e == null) throw gT("Can't call method on " + e);
            return e
        }
    });
    var fr = c((Y5, _u) => {
        var hT = Eu(),
            vT = qi();
        _u.exports = function(e) {
            return hT(vT(e))
        }
    });
    var We = c(($5, Tu) => {
        Tu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Rt = c((Q5, Iu) => {
        var yT = We();
        Iu.exports = function(e) {
            return typeof e == "object" ? e !== null : yT(e)
        }
    });
    var dr = c((Z5, bu) => {
        var Fi = ie(),
            ET = We(),
            mT = function(e) {
                return ET(e) ? e : void 0
            };
        bu.exports = function(e, t) {
            return arguments.length < 2 ? mT(Fi[e]) : Fi[e] && Fi[e][t]
        }
    });
    var Au = c((J5, Ou) => {
        var _T = Fe();
        Ou.exports = _T({}.isPrototypeOf)
    });
    var xu = c((eU, Su) => {
        var TT = dr();
        Su.exports = TT("navigator", "userAgent") || ""
    });
    var qu = c((tU, Pu) => {
        var Lu = ie(),
            Mi = xu(),
            wu = Lu.process,
            Cu = Lu.Deno,
            Ru = wu && wu.versions || Cu && Cu.version,
            Nu = Ru && Ru.v8,
            Me, nn;
        Nu && (Me = Nu.split("."), nn = Me[0] > 0 && Me[0] < 4 ? 1 : +(Me[0] + Me[1]));
        !nn && Mi && (Me = Mi.match(/Edge\/(\d+)/), (!Me || Me[1] >= 74) && (Me = Mi.match(/Chrome\/(\d+)/), Me && (nn = +Me[1])));
        Pu.exports = nn
    });
    var Di = c((rU, Mu) => {
        var Fu = qu(),
            IT = Ct();
        Mu.exports = !!Object.getOwnPropertySymbols && !IT(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Fu && Fu < 41
        })
    });
    var Gi = c((nU, Du) => {
        var bT = Di();
        Du.exports = bT && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Vi = c((iU, Gu) => {
        var OT = ie(),
            AT = dr(),
            ST = We(),
            xT = Au(),
            wT = Gi(),
            CT = OT.Object;
        Gu.exports = wT ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = AT("Symbol");
            return ST(t) && xT(t.prototype, CT(e))
        }
    });
    var Bu = c((oU, Vu) => {
        var RT = ie(),
            NT = RT.String;
        Vu.exports = function(e) {
            try {
                return NT(e)
            } catch {
                return "Object"
            }
        }
    });
    var Xu = c((aU, Uu) => {
        var LT = ie(),
            PT = We(),
            qT = Bu(),
            FT = LT.TypeError;
        Uu.exports = function(e) {
            if (PT(e)) return e;
            throw FT(qT(e) + " is not a function")
        }
    });
    var ku = c((sU, Hu) => {
        var MT = Xu();
        Hu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : MT(r)
        }
    });
    var ju = c((uU, Wu) => {
        var DT = ie(),
            Bi = rn(),
            Ui = We(),
            Xi = Rt(),
            GT = DT.TypeError;
        Wu.exports = function(e, t) {
            var r, n;
            if (t === "string" && Ui(r = e.toString) && !Xi(n = Bi(r, e)) || Ui(r = e.valueOf) && !Xi(n = Bi(r, e)) || t !== "string" && Ui(r = e.toString) && !Xi(n = Bi(r, e))) return n;
            throw GT("Can't convert object to primitive value")
        }
    });
    var Ku = c((cU, zu) => {
        zu.exports = !1
    });
    var on = c((lU, $u) => {
        var Yu = ie(),
            VT = Object.defineProperty;
        $u.exports = function(e, t) {
            try {
                VT(Yu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Yu[e] = t
            }
            return t
        }
    });
    var an = c((fU, Zu) => {
        var BT = ie(),
            UT = on(),
            Qu = "__core-js_shared__",
            XT = BT[Qu] || UT(Qu, {});
        Zu.exports = XT
    });
    var Hi = c((dU, ec) => {
        var HT = Ku(),
            Ju = an();
        (ec.exports = function(e, t) {
            return Ju[e] || (Ju[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: HT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var rc = c((pU, tc) => {
        var kT = ie(),
            WT = qi(),
            jT = kT.Object;
        tc.exports = function(e) {
            return jT(WT(e))
        }
    });
    var ut = c((gU, nc) => {
        var zT = Fe(),
            KT = rc(),
            YT = zT({}.hasOwnProperty);
        nc.exports = Object.hasOwn || function(t, r) {
            return YT(KT(t), r)
        }
    });
    var ki = c((hU, ic) => {
        var $T = Fe(),
            QT = 0,
            ZT = Math.random(),
            JT = $T(1.toString);
        ic.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + JT(++QT + ZT, 36)
        }
    });
    var Wi = c((vU, cc) => {
        var eI = ie(),
            tI = Hi(),
            oc = ut(),
            rI = ki(),
            ac = Di(),
            uc = Gi(),
            Nt = tI("wks"),
            yt = eI.Symbol,
            sc = yt && yt.for,
            nI = uc ? yt : yt && yt.withoutSetter || rI;
        cc.exports = function(e) {
            if (!oc(Nt, e) || !(ac || typeof Nt[e] == "string")) {
                var t = "Symbol." + e;
                ac && oc(yt, e) ? Nt[e] = yt[e] : uc && sc ? Nt[e] = sc(t) : Nt[e] = nI(t)
            }
            return Nt[e]
        }
    });
    var pc = c((yU, dc) => {
        var iI = ie(),
            oI = rn(),
            lc = Rt(),
            fc = Vi(),
            aI = ku(),
            sI = ju(),
            uI = Wi(),
            cI = iI.TypeError,
            lI = uI("toPrimitive");
        dc.exports = function(e, t) {
            if (!lc(e) || fc(e)) return e;
            var r = aI(e, lI),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = oI(r, e, t), !lc(n) || fc(n)) return n;
                throw cI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), sI(e, t)
        }
    });
    var ji = c((EU, gc) => {
        var fI = pc(),
            dI = Vi();
        gc.exports = function(e) {
            var t = fI(e, "string");
            return dI(t) ? t : t + ""
        }
    });
    var Ki = c((mU, vc) => {
        var pI = ie(),
            hc = Rt(),
            zi = pI.document,
            gI = hc(zi) && hc(zi.createElement);
        vc.exports = function(e) {
            return gI ? zi.createElement(e) : {}
        }
    });
    var Yi = c((_U, yc) => {
        var hI = vt(),
            vI = Ct(),
            yI = Ki();
        yc.exports = !hI && !vI(function() {
            return Object.defineProperty(yI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var $i = c(mc => {
        var EI = vt(),
            mI = rn(),
            _I = lu(),
            TI = Ri(),
            II = fr(),
            bI = ji(),
            OI = ut(),
            AI = Yi(),
            Ec = Object.getOwnPropertyDescriptor;
        mc.f = EI ? Ec : function(t, r) {
            if (t = II(t), r = bI(r), AI) try {
                return Ec(t, r)
            } catch {}
            if (OI(t, r)) return TI(!mI(_I.f, t, r), t[r])
        }
    });
    var pr = c((IU, Tc) => {
        var _c = ie(),
            SI = Rt(),
            xI = _c.String,
            wI = _c.TypeError;
        Tc.exports = function(e) {
            if (SI(e)) return e;
            throw wI(xI(e) + " is not an object")
        }
    });
    var gr = c(Oc => {
        var CI = ie(),
            RI = vt(),
            NI = Yi(),
            Ic = pr(),
            LI = ji(),
            PI = CI.TypeError,
            bc = Object.defineProperty;
        Oc.f = RI ? bc : function(t, r, n) {
            if (Ic(t), r = LI(r), Ic(n), NI) try {
                return bc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw PI("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var sn = c((OU, Ac) => {
        var qI = vt(),
            FI = gr(),
            MI = Ri();
        Ac.exports = qI ? function(e, t, r) {
            return FI.f(e, t, MI(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var Zi = c((AU, Sc) => {
        var DI = Fe(),
            GI = We(),
            Qi = an(),
            VI = DI(Function.toString);
        GI(Qi.inspectSource) || (Qi.inspectSource = function(e) {
            return VI(e)
        });
        Sc.exports = Qi.inspectSource
    });
    var Cc = c((SU, wc) => {
        var BI = ie(),
            UI = We(),
            XI = Zi(),
            xc = BI.WeakMap;
        wc.exports = UI(xc) && /native code/.test(XI(xc))
    });
    var Ji = c((xU, Nc) => {
        var HI = Hi(),
            kI = ki(),
            Rc = HI("keys");
        Nc.exports = function(e) {
            return Rc[e] || (Rc[e] = kI(e))
        }
    });
    var un = c((wU, Lc) => {
        Lc.exports = {}
    });
    var Gc = c((CU, Dc) => {
        var WI = Cc(),
            Mc = ie(),
            eo = Fe(),
            jI = Rt(),
            zI = sn(),
            to = ut(),
            ro = an(),
            KI = Ji(),
            YI = un(),
            Pc = "Object already initialized",
            io = Mc.TypeError,
            $I = Mc.WeakMap,
            cn, hr, ln, QI = function(e) {
                return ln(e) ? hr(e) : cn(e, {})
            },
            ZI = function(e) {
                return function(t) {
                    var r;
                    if (!jI(t) || (r = hr(t)).type !== e) throw io("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        WI || ro.state ? (ct = ro.state || (ro.state = new $I), qc = eo(ct.get), no = eo(ct.has), Fc = eo(ct.set), cn = function(e, t) {
            if (no(ct, e)) throw new io(Pc);
            return t.facade = e, Fc(ct, e, t), t
        }, hr = function(e) {
            return qc(ct, e) || {}
        }, ln = function(e) {
            return no(ct, e)
        }) : (Et = KI("state"), YI[Et] = !0, cn = function(e, t) {
            if (to(e, Et)) throw new io(Pc);
            return t.facade = e, zI(e, Et, t), t
        }, hr = function(e) {
            return to(e, Et) ? e[Et] : {}
        }, ln = function(e) {
            return to(e, Et)
        });
        var ct, qc, no, Fc, Et;
        Dc.exports = {
            set: cn,
            get: hr,
            has: ln,
            enforce: QI,
            getterFor: ZI
        }
    });
    var Uc = c((RU, Bc) => {
        var oo = vt(),
            JI = ut(),
            Vc = Function.prototype,
            eb = oo && Object.getOwnPropertyDescriptor,
            ao = JI(Vc, "name"),
            tb = ao && function() {}.name === "something",
            rb = ao && (!oo || oo && eb(Vc, "name").configurable);
        Bc.exports = {
            EXISTS: ao,
            PROPER: tb,
            CONFIGURABLE: rb
        }
    });
    var jc = c((NU, Wc) => {
        var nb = ie(),
            Xc = We(),
            ib = ut(),
            Hc = sn(),
            ob = on(),
            ab = Zi(),
            kc = Gc(),
            sb = Uc().CONFIGURABLE,
            ub = kc.get,
            cb = kc.enforce,
            lb = String(String).split("String");
        (Wc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if (Xc(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!ib(r, "name") || sb && r.name !== a) && Hc(r, "name", a), u = cb(r), u.source || (u.source = lb.join(typeof a == "string" ? a : ""))), e === nb) {
                o ? e[t] = r : ob(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Hc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Xc(this) && ub(this).source || ab(this)
        })
    });
    var so = c((LU, zc) => {
        var fb = Math.ceil,
            db = Math.floor;
        zc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? db : fb)(t)
        }
    });
    var Yc = c((PU, Kc) => {
        var pb = so(),
            gb = Math.max,
            hb = Math.min;
        Kc.exports = function(e, t) {
            var r = pb(e);
            return r < 0 ? gb(r + t, 0) : hb(r, t)
        }
    });
    var Qc = c((qU, $c) => {
        var vb = so(),
            yb = Math.min;
        $c.exports = function(e) {
            return e > 0 ? yb(vb(e), 9007199254740991) : 0
        }
    });
    var Jc = c((FU, Zc) => {
        var Eb = Qc();
        Zc.exports = function(e) {
            return Eb(e.length)
        }
    });
    var uo = c((MU, tl) => {
        var mb = fr(),
            _b = Yc(),
            Tb = Jc(),
            el = function(e) {
                return function(t, r, n) {
                    var i = mb(t),
                        o = Tb(i),
                        s = _b(n, o),
                        a;
                    if (e && r != r) {
                        for (; o > s;)
                            if (a = i[s++], a != a) return !0
                    } else
                        for (; o > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        tl.exports = {
            includes: el(!0),
            indexOf: el(!1)
        }
    });
    var lo = c((DU, nl) => {
        var Ib = Fe(),
            co = ut(),
            bb = fr(),
            Ob = uo().indexOf,
            Ab = un(),
            rl = Ib([].push);
        nl.exports = function(e, t) {
            var r = bb(e),
                n = 0,
                i = [],
                o;
            for (o in r) !co(Ab, o) && co(r, o) && rl(i, o);
            for (; t.length > n;) co(r, o = t[n++]) && (~Ob(i, o) || rl(i, o));
            return i
        }
    });
    var fn = c((GU, il) => {
        il.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var al = c(ol => {
        var Sb = lo(),
            xb = fn(),
            wb = xb.concat("length", "prototype");
        ol.f = Object.getOwnPropertyNames || function(t) {
            return Sb(t, wb)
        }
    });
    var ul = c(sl => {
        sl.f = Object.getOwnPropertySymbols
    });
    var ll = c((UU, cl) => {
        var Cb = dr(),
            Rb = Fe(),
            Nb = al(),
            Lb = ul(),
            Pb = pr(),
            qb = Rb([].concat);
        cl.exports = Cb("Reflect", "ownKeys") || function(t) {
            var r = Nb.f(Pb(t)),
                n = Lb.f;
            return n ? qb(r, n(t)) : r
        }
    });
    var dl = c((XU, fl) => {
        var Fb = ut(),
            Mb = ll(),
            Db = $i(),
            Gb = gr();
        fl.exports = function(e, t) {
            for (var r = Mb(t), n = Gb.f, i = Db.f, o = 0; o < r.length; o++) {
                var s = r[o];
                Fb(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var gl = c((HU, pl) => {
        var Vb = Ct(),
            Bb = We(),
            Ub = /#|\.prototype\./,
            vr = function(e, t) {
                var r = Hb[Xb(e)];
                return r == Wb ? !0 : r == kb ? !1 : Bb(t) ? Vb(t) : !!t
            },
            Xb = vr.normalize = function(e) {
                return String(e).replace(Ub, ".").toLowerCase()
            },
            Hb = vr.data = {},
            kb = vr.NATIVE = "N",
            Wb = vr.POLYFILL = "P";
        pl.exports = vr
    });
    var vl = c((kU, hl) => {
        var fo = ie(),
            jb = $i().f,
            zb = sn(),
            Kb = jc(),
            Yb = on(),
            $b = dl(),
            Qb = gl();
        hl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, s, a, u, f, p;
            if (n ? s = fo : i ? s = fo[r] || Yb(r, {}) : s = (fo[r] || {}).prototype, s)
                for (a in t) {
                    if (f = t[a], e.noTargetGet ? (p = jb(s, a), u = p && p.value) : u = s[a], o = Qb(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                        if (typeof f == typeof u) continue;
                        $b(f, u)
                    }(e.sham || u && u.sham) && zb(f, "sham", !0), Kb(s, a, f, e)
                }
        }
    });
    var El = c((WU, yl) => {
        var Zb = lo(),
            Jb = fn();
        yl.exports = Object.keys || function(t) {
            return Zb(t, Jb)
        }
    });
    var _l = c((jU, ml) => {
        var e0 = vt(),
            t0 = gr(),
            r0 = pr(),
            n0 = fr(),
            i0 = El();
        ml.exports = e0 ? Object.defineProperties : function(t, r) {
            r0(t);
            for (var n = n0(r), i = i0(r), o = i.length, s = 0, a; o > s;) t0.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var Il = c((zU, Tl) => {
        var o0 = dr();
        Tl.exports = o0("document", "documentElement")
    });
    var Rl = c((KU, Cl) => {
        var a0 = pr(),
            s0 = _l(),
            bl = fn(),
            u0 = un(),
            c0 = Il(),
            l0 = Ki(),
            f0 = Ji(),
            Ol = ">",
            Al = "<",
            go = "prototype",
            ho = "script",
            xl = f0("IE_PROTO"),
            po = function() {},
            wl = function(e) {
                return Al + ho + Ol + e + Al + "/" + ho + Ol
            },
            Sl = function(e) {
                e.write(wl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            d0 = function() {
                var e = l0("iframe"),
                    t = "java" + ho + ":",
                    r;
                return e.style.display = "none", c0.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(wl("document.F=Object")), r.close(), r.F
            },
            dn, pn = function() {
                try {
                    dn = new ActiveXObject("htmlfile")
                } catch {}
                pn = typeof document < "u" ? document.domain && dn ? Sl(dn) : d0() : Sl(dn);
                for (var e = bl.length; e--;) delete pn[go][bl[e]];
                return pn()
            };
        u0[xl] = !0;
        Cl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (po[go] = a0(t), n = new po, po[go] = null, n[xl] = t) : n = pn(), r === void 0 ? n : s0(n, r)
        }
    });
    var Ll = c((YU, Nl) => {
        var p0 = Wi(),
            g0 = Rl(),
            h0 = gr(),
            vo = p0("unscopables"),
            yo = Array.prototype;
        yo[vo] == null && h0.f(yo, vo, {
            configurable: !0,
            value: g0(null)
        });
        Nl.exports = function(e) {
            yo[vo][e] = !0
        }
    });
    var Pl = c(() => {
        "use strict";
        var v0 = vl(),
            y0 = uo().includes,
            E0 = Ll();
        v0({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return y0(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        E0("includes")
    });
    var Fl = c((ZU, ql) => {
        var m0 = ie(),
            _0 = Fe();
        ql.exports = function(e, t) {
            return _0(m0[e].prototype[t])
        }
    });
    var Dl = c((JU, Ml) => {
        Pl();
        var T0 = Fl();
        Ml.exports = T0("Array", "includes")
    });
    var Vl = c((eX, Gl) => {
        var I0 = Dl();
        Gl.exports = I0
    });
    var Ul = c((tX, Bl) => {
        var b0 = Vl();
        Bl.exports = b0
    });
    var Eo = c((rX, Xl) => {
        var O0 = typeof global == "object" && global && global.Object === Object && global;
        Xl.exports = O0
    });
    var De = c((nX, Hl) => {
        var A0 = Eo(),
            S0 = typeof self == "object" && self && self.Object === Object && self,
            x0 = A0 || S0 || Function("return this")();
        Hl.exports = x0
    });
    var Lt = c((iX, kl) => {
        var w0 = De(),
            C0 = w0.Symbol;
        kl.exports = C0
    });
    var Kl = c((oX, zl) => {
        var Wl = Lt(),
            jl = Object.prototype,
            R0 = jl.hasOwnProperty,
            N0 = jl.toString,
            yr = Wl ? Wl.toStringTag : void 0;

        function L0(e) {
            var t = R0.call(e, yr),
                r = e[yr];
            try {
                e[yr] = void 0;
                var n = !0
            } catch {}
            var i = N0.call(e);
            return n && (t ? e[yr] = r : delete e[yr]), i
        }
        zl.exports = L0
    });
    var $l = c((aX, Yl) => {
        var P0 = Object.prototype,
            q0 = P0.toString;

        function F0(e) {
            return q0.call(e)
        }
        Yl.exports = F0
    });
    var lt = c((sX, Jl) => {
        var Ql = Lt(),
            M0 = Kl(),
            D0 = $l(),
            G0 = "[object Null]",
            V0 = "[object Undefined]",
            Zl = Ql ? Ql.toStringTag : void 0;

        function B0(e) {
            return e == null ? e === void 0 ? V0 : G0 : Zl && Zl in Object(e) ? M0(e) : D0(e)
        }
        Jl.exports = B0
    });
    var mo = c((uX, ef) => {
        function U0(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        ef.exports = U0
    });
    var _o = c((cX, tf) => {
        var X0 = mo(),
            H0 = X0(Object.getPrototypeOf, Object);
        tf.exports = H0
    });
    var Je = c((lX, rf) => {
        function k0(e) {
            return e != null && typeof e == "object"
        }
        rf.exports = k0
    });
    var To = c((fX, of ) => {
        var W0 = lt(),
            j0 = _o(),
            z0 = Je(),
            K0 = "[object Object]",
            Y0 = Function.prototype,
            $0 = Object.prototype,
            nf = Y0.toString,
            Q0 = $0.hasOwnProperty,
            Z0 = nf.call(Object);

        function J0(e) {
            if (!z0(e) || W0(e) != K0) return !1;
            var t = j0(e);
            if (t === null) return !0;
            var r = Q0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && nf.call(r) == Z0
        } of .exports = J0
    });
    var af = c(Io => {
        "use strict";
        Object.defineProperty(Io, "__esModule", {
            value: !0
        });
        Io.default = eO;

        function eO(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var sf = c((Oo, bo) => {
        "use strict";
        Object.defineProperty(Oo, "__esModule", {
            value: !0
        });
        var tO = af(),
            rO = nO(tO);

        function nO(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Pt;
        typeof self < "u" ? Pt = self : typeof window < "u" ? Pt = window : typeof global < "u" ? Pt = global : typeof bo < "u" ? Pt = bo : Pt = Function("return this")();
        var iO = (0, rO.default)(Pt);
        Oo.default = iO
    });
    var Ao = c(Er => {
        "use strict";
        Er.__esModule = !0;
        Er.ActionTypes = void 0;
        Er.default = ff;
        var oO = To(),
            aO = lf(oO),
            sO = sf(),
            uf = lf(sO);

        function lf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var cf = Er.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function ff(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(ff)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function f() {
                a === s && (a = s.slice())
            }

            function p() {
                return o
            }

            function g(E) {
                if (typeof E != "function") throw new Error("Expected listener to be a function.");
                var b = !0;
                return f(), a.push(E),
                    function() {
                        if (b) {
                            b = !1, f();
                            var S = a.indexOf(E);
                            a.splice(S, 1)
                        }
                    }
            }

            function d(E) {
                if (!(0, aO.default)(E)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof E.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, E)
                } finally {
                    u = !1
                }
                for (var b = s = a, v = 0; v < b.length; v++) b[v]();
                return E
            }

            function m(E) {
                if (typeof E != "function") throw new Error("Expected the nextReducer to be a function.");
                i = E, d({
                    type: cf.INIT
                })
            }

            function O() {
                var E, b = g;
                return E = {
                    subscribe: function(S) {
                        if (typeof S != "object") throw new TypeError("Expected the observer to be an object.");

                        function I() {
                            S.next && S.next(p())
                        }
                        I();
                        var w = b(I);
                        return {
                            unsubscribe: w
                        }
                    }
                }, E[uf.default] = function() {
                    return this
                }, E
            }
            return d({
                type: cf.INIT
            }), n = {
                dispatch: d,
                subscribe: g,
                getState: p,
                replaceReducer: m
            }, n[uf.default] = O, n
        }
    });
    var xo = c(So => {
        "use strict";
        So.__esModule = !0;
        So.default = uO;

        function uO(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var gf = c(wo => {
        "use strict";
        wo.__esModule = !0;
        wo.default = pO;
        var df = Ao(),
            cO = To(),
            hX = pf(cO),
            lO = xo(),
            vX = pf(lO);

        function pf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function fO(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function dO(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: df.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + df.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function pO(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                dO(r)
            } catch (u) {
                a = u
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    p = arguments[1];
                if (a) throw a;
                if (!1) var g;
                for (var d = !1, m = {}, O = 0; O < o.length; O++) {
                    var E = o[O],
                        b = r[E],
                        v = f[E],
                        S = b(v, p);
                    if (typeof S > "u") {
                        var I = fO(E, p);
                        throw new Error(I)
                    }
                    m[E] = S, d = d || S !== v
                }
                return d ? m : f
            }
        }
    });
    var vf = c(Co => {
        "use strict";
        Co.__esModule = !0;
        Co.default = gO;

        function hf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function gO(e, t) {
            if (typeof e == "function") return hf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = hf(s, t))
            }
            return n
        }
    });
    var No = c(Ro => {
        "use strict";
        Ro.__esModule = !0;
        Ro.default = hO;

        function hO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var yf = c(Lo => {
        "use strict";
        Lo.__esModule = !0;
        var vO = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Lo.default = _O;
        var yO = No(),
            EO = mO(yO);

        function mO(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function _O() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        f = [],
                        p = {
                            getState: a.getState,
                            dispatch: function(d) {
                                return u(d)
                            }
                        };
                    return f = t.map(function(g) {
                        return g(p)
                    }), u = EO.default.apply(void 0, f)(a.dispatch), vO({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Po = c(Ce => {
        "use strict";
        Ce.__esModule = !0;
        Ce.compose = Ce.applyMiddleware = Ce.bindActionCreators = Ce.combineReducers = Ce.createStore = void 0;
        var TO = Ao(),
            IO = qt(TO),
            bO = gf(),
            OO = qt(bO),
            AO = vf(),
            SO = qt(AO),
            xO = yf(),
            wO = qt(xO),
            CO = No(),
            RO = qt(CO),
            NO = xo(),
            TX = qt(NO);

        function qt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ce.createStore = IO.default;
        Ce.combineReducers = OO.default;
        Ce.bindActionCreators = SO.default;
        Ce.applyMiddleware = wO.default;
        Ce.compose = RO.default
    });
    var Ge, qo, je, LO, PO, gn, qO, Fo = ne(() => {
        "use strict";
        Ge = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, qo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, je = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, LO = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, PO = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, gn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, qO = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Oe, FO, hn = ne(() => {
        "use strict";
        Oe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, FO = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var MO, Ef = ne(() => {
        "use strict";
        MO = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var DO, GO, VO, BO, UO, XO, HO, Mo, mf = ne(() => {
        "use strict";
        hn();
        ({
            TRANSFORM_MOVE: DO,
            TRANSFORM_SCALE: GO,
            TRANSFORM_ROTATE: VO,
            TRANSFORM_SKEW: BO,
            STYLE_SIZE: UO,
            STYLE_FILTER: XO,
            STYLE_FONT_VARIATION: HO
        } = Oe), Mo = {
            [DO]: !0,
            [GO]: !0,
            [VO]: !0,
            [BO]: !0,
            [UO]: !0,
            [XO]: !0,
            [HO]: !0
        }
    });
    var ce = {};
    be(ce, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => aA,
        IX2_ANIMATION_FRAME_CHANGED: () => eA,
        IX2_CLEAR_REQUESTED: () => QO,
        IX2_ELEMENT_STATE_CHANGED: () => oA,
        IX2_EVENT_LISTENER_ADDED: () => ZO,
        IX2_EVENT_STATE_CHANGED: () => JO,
        IX2_INSTANCE_ADDED: () => rA,
        IX2_INSTANCE_REMOVED: () => iA,
        IX2_INSTANCE_STARTED: () => nA,
        IX2_MEDIA_QUERIES_DEFINED: () => uA,
        IX2_PARAMETER_CHANGED: () => tA,
        IX2_PLAYBACK_REQUESTED: () => YO,
        IX2_PREVIEW_REQUESTED: () => KO,
        IX2_RAW_DATA_IMPORTED: () => kO,
        IX2_SESSION_INITIALIZED: () => WO,
        IX2_SESSION_STARTED: () => jO,
        IX2_SESSION_STOPPED: () => zO,
        IX2_STOP_REQUESTED: () => $O,
        IX2_TEST_FRAME_RENDERED: () => cA,
        IX2_VIEWPORT_WIDTH_CHANGED: () => sA
    });
    var kO, WO, jO, zO, KO, YO, $O, QO, ZO, JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, _f = ne(() => {
        "use strict";
        kO = "IX2_RAW_DATA_IMPORTED", WO = "IX2_SESSION_INITIALIZED", jO = "IX2_SESSION_STARTED", zO = "IX2_SESSION_STOPPED", KO = "IX2_PREVIEW_REQUESTED", YO = "IX2_PLAYBACK_REQUESTED", $O = "IX2_STOP_REQUESTED", QO = "IX2_CLEAR_REQUESTED", ZO = "IX2_EVENT_LISTENER_ADDED", JO = "IX2_EVENT_STATE_CHANGED", eA = "IX2_ANIMATION_FRAME_CHANGED", tA = "IX2_PARAMETER_CHANGED", rA = "IX2_INSTANCE_ADDED", nA = "IX2_INSTANCE_STARTED", iA = "IX2_INSTANCE_REMOVED", oA = "IX2_ELEMENT_STATE_CHANGED", aA = "IX2_ACTION_LIST_PLAYBACK_CHANGED", sA = "IX2_VIEWPORT_WIDTH_CHANGED", uA = "IX2_MEDIA_QUERIES_DEFINED", cA = "IX2_TEST_FRAME_RENDERED"
    });
    var ge = {};
    be(ge, {
        ABSTRACT_NODE: () => sS,
        AUTO: () => $A,
        BACKGROUND: () => kA,
        BACKGROUND_COLOR: () => HA,
        BAR_DELIMITER: () => JA,
        BORDER_COLOR: () => WA,
        BOUNDARY_SELECTOR: () => gA,
        CHILDREN: () => eS,
        COLON_DELIMITER: () => ZA,
        COLOR: () => jA,
        COMMA_DELIMITER: () => QA,
        CONFIG_UNIT: () => IA,
        CONFIG_VALUE: () => EA,
        CONFIG_X_UNIT: () => mA,
        CONFIG_X_VALUE: () => hA,
        CONFIG_Y_UNIT: () => _A,
        CONFIG_Y_VALUE: () => vA,
        CONFIG_Z_UNIT: () => TA,
        CONFIG_Z_VALUE: () => yA,
        DISPLAY: () => zA,
        FILTER: () => VA,
        FLEX: () => KA,
        FONT_VARIATION_SETTINGS: () => BA,
        HEIGHT: () => XA,
        HTML_ELEMENT: () => oS,
        IMMEDIATE_CHILDREN: () => tS,
        IX2_ID_DELIMITER: () => lA,
        OPACITY: () => GA,
        PARENT: () => nS,
        PLAIN_OBJECT: () => aS,
        PRESERVE_3D: () => iS,
        RENDER_GENERAL: () => cS,
        RENDER_PLUGIN: () => fS,
        RENDER_STYLE: () => lS,
        RENDER_TRANSFORM: () => uS,
        ROTATE_X: () => LA,
        ROTATE_Y: () => PA,
        ROTATE_Z: () => qA,
        SCALE_3D: () => NA,
        SCALE_X: () => wA,
        SCALE_Y: () => CA,
        SCALE_Z: () => RA,
        SIBLINGS: () => rS,
        SKEW: () => FA,
        SKEW_X: () => MA,
        SKEW_Y: () => DA,
        TRANSFORM: () => bA,
        TRANSLATE_3D: () => xA,
        TRANSLATE_X: () => OA,
        TRANSLATE_Y: () => AA,
        TRANSLATE_Z: () => SA,
        WF_PAGE: () => fA,
        WIDTH: () => UA,
        WILL_CHANGE: () => YA,
        W_MOD_IX: () => pA,
        W_MOD_JS: () => dA
    });
    var lA, fA, dA, pA, gA, hA, vA, yA, EA, mA, _A, TA, IA, bA, OA, AA, SA, xA, wA, CA, RA, NA, LA, PA, qA, FA, MA, DA, GA, VA, BA, UA, XA, HA, kA, WA, jA, zA, KA, YA, $A, QA, ZA, JA, eS, tS, rS, nS, iS, oS, aS, sS, uS, cS, lS, fS, Tf = ne(() => {
        "use strict";
        lA = "|", fA = "data-wf-page", dA = "w-mod-js", pA = "w-mod-ix", gA = ".w-dyn-item", hA = "xValue", vA = "yValue", yA = "zValue", EA = "value", mA = "xUnit", _A = "yUnit", TA = "zUnit", IA = "unit", bA = "transform", OA = "translateX", AA = "translateY", SA = "translateZ", xA = "translate3d", wA = "scaleX", CA = "scaleY", RA = "scaleZ", NA = "scale3d", LA = "rotateX", PA = "rotateY", qA = "rotateZ", FA = "skew", MA = "skewX", DA = "skewY", GA = "opacity", VA = "filter", BA = "font-variation-settings", UA = "width", XA = "height", HA = "backgroundColor", kA = "background", WA = "borderColor", jA = "color", zA = "display", KA = "flex", YA = "willChange", $A = "AUTO", QA = ",", ZA = ":", JA = "|", eS = "CHILDREN", tS = "IMMEDIATE_CHILDREN", rS = "SIBLINGS", nS = "PARENT", iS = "preserve-3d", oS = "HTML_ELEMENT", aS = "PLAIN_OBJECT", sS = "ABSTRACT_NODE", uS = "RENDER_TRANSFORM", cS = "RENDER_GENERAL", lS = "RENDER_STYLE", fS = "RENDER_PLUGIN"
    });
    var If = {};
    be(If, {
        ActionAppliesTo: () => FO,
        ActionTypeConsts: () => Oe,
        EventAppliesTo: () => qo,
        EventBasedOn: () => je,
        EventContinuousMouseAxes: () => LO,
        EventLimitAffectedElements: () => PO,
        EventTypeConsts: () => Ge,
        IX2EngineActionTypes: () => ce,
        IX2EngineConstants: () => ge,
        InteractionTypeConsts: () => MO,
        QuickEffectDirectionConsts: () => qO,
        QuickEffectIds: () => gn,
        ReducedMotionTypes: () => Mo
    });
    var Ae = ne(() => {
        "use strict";
        Fo();
        hn();
        Ef();
        mf();
        _f();
        Tf();
        hn();
        Fo()
    });
    var dS, bf, Of = ne(() => {
        "use strict";
        Ae();
        ({
            IX2_RAW_DATA_IMPORTED: dS
        } = ce), bf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case dS:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Ft = c(ae => {
        "use strict";
        Object.defineProperty(ae, "__esModule", {
            value: !0
        });
        var pS = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ae.clone = yn;
        ae.addLast = xf;
        ae.addFirst = wf;
        ae.removeLast = Cf;
        ae.removeFirst = Rf;
        ae.insert = Nf;
        ae.removeAt = Lf;
        ae.replaceAt = Pf;
        ae.getIn = En;
        ae.set = mn;
        ae.setIn = _n;
        ae.update = Ff;
        ae.updateIn = Mf;
        ae.merge = Df;
        ae.mergeDeep = Gf;
        ae.mergeIn = Vf;
        ae.omit = Bf;
        ae.addDefaults = Uf;
        var Af = "INVALID_ARGS";

        function Sf(e) {
            throw new Error(e)
        }

        function Do(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var gS = {}.hasOwnProperty;

        function yn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Do(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Se(e, t, r) {
            var n = r;
            n == null && Sf(Af);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var f = s[u];
                if (f != null) {
                    var p = Do(f);
                    if (p.length)
                        for (var g = 0; g <= p.length; g++) {
                            var d = p[g];
                            if (!(e && n[d] !== void 0)) {
                                var m = f[d];
                                t && vn(n[d]) && vn(m) && (m = Se(e, t, n[d], m)), !(m === void 0 || m === n[d]) && (i || (i = !0, n = yn(n)), n[d] = m)
                            }
                        }
                }
            }
            return n
        }

        function vn(e) {
            var t = typeof e > "u" ? "undefined" : pS(e);
            return e != null && (t === "object" || t === "function")
        }

        function xf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function wf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Cf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Rf(e) {
            return e.length ? e.slice(1) : e
        }

        function Nf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Lf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Pf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function En(e, t) {
            if (!Array.isArray(t) && Sf(Af), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function mn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = yn(i);
            return o[t] = r, o
        }

        function qf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = vn(e) && vn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = qf(s, t, r, n + 1)
            }
            return mn(e, o, i)
        }

        function _n(e, t, r) {
            return t.length ? qf(e, t, r, 0) : r
        }

        function Ff(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return mn(e, t, i)
        }

        function Mf(e, t, r) {
            var n = En(e, t),
                i = r(n);
            return _n(e, t, i)
        }

        function Df(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Se.call.apply(Se, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Se(!1, !1, e, t, r, n, i, o)
        }

        function Gf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Se.call.apply(Se, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Se(!1, !0, e, t, r, n, i, o)
        }

        function Vf(e, t, r, n, i, o, s) {
            var a = En(e, t);
            a == null && (a = {});
            for (var u = void 0, f = arguments.length, p = Array(f > 7 ? f - 7 : 0), g = 7; g < f; g++) p[g - 7] = arguments[g];
            return p.length ? u = Se.call.apply(Se, [null, !1, !1, a, r, n, i, o, s].concat(p)) : u = Se(!1, !1, a, r, n, i, o, s), _n(e, t, u)
        }

        function Bf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (gS.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, s = Do(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Uf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Se.call.apply(Se, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Se(!0, !1, e, t, r, n, i, o)
        }
        var hS = {
            clone: yn,
            addLast: xf,
            addFirst: wf,
            removeLast: Cf,
            removeFirst: Rf,
            insert: Nf,
            removeAt: Lf,
            replaceAt: Pf,
            getIn: En,
            set: mn,
            setIn: _n,
            update: Ff,
            updateIn: Mf,
            merge: Df,
            mergeDeep: Gf,
            mergeIn: Vf,
            omit: Bf,
            addDefaults: Uf
        };
        ae.default = hS
    });
    var Hf, vS, yS, ES, mS, _S, Xf, kf, Wf = ne(() => {
        "use strict";
        Ae();
        Hf = Q(Ft()), {
            IX2_PREVIEW_REQUESTED: vS,
            IX2_PLAYBACK_REQUESTED: yS,
            IX2_STOP_REQUESTED: ES,
            IX2_CLEAR_REQUESTED: mS
        } = ce, _S = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Xf = Object.create(null, {
            [vS]: {
                value: "preview"
            },
            [yS]: {
                value: "playback"
            },
            [ES]: {
                value: "stop"
            },
            [mS]: {
                value: "clear"
            }
        }), kf = (e = _S, t) => {
            if (t.type in Xf) {
                let r = [Xf[t.type]];
                return (0, Hf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Ee, TS, IS, bS, OS, AS, SS, xS, wS, CS, RS, jf, NS, zf, Kf = ne(() => {
        "use strict";
        Ae();
        Ee = Q(Ft()), {
            IX2_SESSION_INITIALIZED: TS,
            IX2_SESSION_STARTED: IS,
            IX2_TEST_FRAME_RENDERED: bS,
            IX2_SESSION_STOPPED: OS,
            IX2_EVENT_LISTENER_ADDED: AS,
            IX2_EVENT_STATE_CHANGED: SS,
            IX2_ANIMATION_FRAME_CHANGED: xS,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: wS,
            IX2_VIEWPORT_WIDTH_CHANGED: CS,
            IX2_MEDIA_QUERIES_DEFINED: RS
        } = ce, jf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, NS = 20, zf = (e = jf, t) => {
            switch (t.type) {
                case TS:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Ee.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case IS:
                    return (0, Ee.set)(e, "active", !0);
                case bS:
                    {
                        let {
                            payload: {
                                step: r = NS
                            }
                        } = t;
                        return (0, Ee.set)(e, "tick", e.tick + r)
                    }
                case OS:
                    return jf;
                case xS:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Ee.set)(e, "tick", r)
                    }
                case AS:
                    {
                        let r = (0, Ee.addLast)(e.eventListeners, t.payload);
                        return (0, Ee.set)(e, "eventListeners", r)
                    }
                case SS:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Ee.setIn)(e, ["eventState", r], n)
                    }
                case wS:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Ee.setIn)(e, ["playbackState", r], n)
                    }
                case CS:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: f
                            } = n[s];
                            if (r >= u && r <= f) {
                                o = a;
                                break
                            }
                        }
                        return (0, Ee.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case RS:
                    return (0, Ee.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var $f = c((UX, Yf) => {
        function LS() {
            this.__data__ = [], this.size = 0
        }
        Yf.exports = LS
    });
    var Tn = c((XX, Qf) => {
        function PS(e, t) {
            return e === t || e !== e && t !== t
        }
        Qf.exports = PS
    });
    var mr = c((HX, Zf) => {
        var qS = Tn();

        function FS(e, t) {
            for (var r = e.length; r--;)
                if (qS(e[r][0], t)) return r;
            return -1
        }
        Zf.exports = FS
    });
    var ed = c((kX, Jf) => {
        var MS = mr(),
            DS = Array.prototype,
            GS = DS.splice;

        function VS(e) {
            var t = this.__data__,
                r = MS(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : GS.call(t, r, 1), --this.size, !0
        }
        Jf.exports = VS
    });
    var rd = c((WX, td) => {
        var BS = mr();

        function US(e) {
            var t = this.__data__,
                r = BS(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        td.exports = US
    });
    var id = c((jX, nd) => {
        var XS = mr();

        function HS(e) {
            return XS(this.__data__, e) > -1
        }
        nd.exports = HS
    });
    var ad = c((zX, od) => {
        var kS = mr();

        function WS(e, t) {
            var r = this.__data__,
                n = kS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        od.exports = WS
    });
    var _r = c((KX, sd) => {
        var jS = $f(),
            zS = ed(),
            KS = rd(),
            YS = id(),
            $S = ad();

        function Mt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Mt.prototype.clear = jS;
        Mt.prototype.delete = zS;
        Mt.prototype.get = KS;
        Mt.prototype.has = YS;
        Mt.prototype.set = $S;
        sd.exports = Mt
    });
    var cd = c((YX, ud) => {
        var QS = _r();

        function ZS() {
            this.__data__ = new QS, this.size = 0
        }
        ud.exports = ZS
    });
    var fd = c(($X, ld) => {
        function JS(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        ld.exports = JS
    });
    var pd = c((QX, dd) => {
        function ex(e) {
            return this.__data__.get(e)
        }
        dd.exports = ex
    });
    var hd = c((ZX, gd) => {
        function tx(e) {
            return this.__data__.has(e)
        }
        gd.exports = tx
    });
    var ze = c((JX, vd) => {
        function rx(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        vd.exports = rx
    });
    var Go = c((eH, yd) => {
        var nx = lt(),
            ix = ze(),
            ox = "[object AsyncFunction]",
            ax = "[object Function]",
            sx = "[object GeneratorFunction]",
            ux = "[object Proxy]";

        function cx(e) {
            if (!ix(e)) return !1;
            var t = nx(e);
            return t == ax || t == sx || t == ox || t == ux
        }
        yd.exports = cx
    });
    var md = c((tH, Ed) => {
        var lx = De(),
            fx = lx["__core-js_shared__"];
        Ed.exports = fx
    });
    var Id = c((rH, Td) => {
        var Vo = md(),
            _d = function() {
                var e = /[^.]+$/.exec(Vo && Vo.keys && Vo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function dx(e) {
            return !!_d && _d in e
        }
        Td.exports = dx
    });
    var Bo = c((nH, bd) => {
        var px = Function.prototype,
            gx = px.toString;

        function hx(e) {
            if (e != null) {
                try {
                    return gx.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        bd.exports = hx
    });
    var Ad = c((iH, Od) => {
        var vx = Go(),
            yx = Id(),
            Ex = ze(),
            mx = Bo(),
            _x = /[\\^$.*+?()[\]{}|]/g,
            Tx = /^\[object .+?Constructor\]$/,
            Ix = Function.prototype,
            bx = Object.prototype,
            Ox = Ix.toString,
            Ax = bx.hasOwnProperty,
            Sx = RegExp("^" + Ox.call(Ax).replace(_x, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function xx(e) {
            if (!Ex(e) || yx(e)) return !1;
            var t = vx(e) ? Sx : Tx;
            return t.test(mx(e))
        }
        Od.exports = xx
    });
    var xd = c((oH, Sd) => {
        function wx(e, t) {
            return e ? .[t]
        }
        Sd.exports = wx
    });
    var ft = c((aH, wd) => {
        var Cx = Ad(),
            Rx = xd();

        function Nx(e, t) {
            var r = Rx(e, t);
            return Cx(r) ? r : void 0
        }
        wd.exports = Nx
    });
    var In = c((sH, Cd) => {
        var Lx = ft(),
            Px = De(),
            qx = Lx(Px, "Map");
        Cd.exports = qx
    });
    var Tr = c((uH, Rd) => {
        var Fx = ft(),
            Mx = Fx(Object, "create");
        Rd.exports = Mx
    });
    var Pd = c((cH, Ld) => {
        var Nd = Tr();

        function Dx() {
            this.__data__ = Nd ? Nd(null) : {}, this.size = 0
        }
        Ld.exports = Dx
    });
    var Fd = c((lH, qd) => {
        function Gx(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        qd.exports = Gx
    });
    var Dd = c((fH, Md) => {
        var Vx = Tr(),
            Bx = "__lodash_hash_undefined__",
            Ux = Object.prototype,
            Xx = Ux.hasOwnProperty;

        function Hx(e) {
            var t = this.__data__;
            if (Vx) {
                var r = t[e];
                return r === Bx ? void 0 : r
            }
            return Xx.call(t, e) ? t[e] : void 0
        }
        Md.exports = Hx
    });
    var Vd = c((dH, Gd) => {
        var kx = Tr(),
            Wx = Object.prototype,
            jx = Wx.hasOwnProperty;

        function zx(e) {
            var t = this.__data__;
            return kx ? t[e] !== void 0 : jx.call(t, e)
        }
        Gd.exports = zx
    });
    var Ud = c((pH, Bd) => {
        var Kx = Tr(),
            Yx = "__lodash_hash_undefined__";

        function $x(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = Kx && t === void 0 ? Yx : t, this
        }
        Bd.exports = $x
    });
    var Hd = c((gH, Xd) => {
        var Qx = Pd(),
            Zx = Fd(),
            Jx = Dd(),
            ew = Vd(),
            tw = Ud();

        function Dt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Dt.prototype.clear = Qx;
        Dt.prototype.delete = Zx;
        Dt.prototype.get = Jx;
        Dt.prototype.has = ew;
        Dt.prototype.set = tw;
        Xd.exports = Dt
    });
    var jd = c((hH, Wd) => {
        var kd = Hd(),
            rw = _r(),
            nw = In();

        function iw() {
            this.size = 0, this.__data__ = {
                hash: new kd,
                map: new(nw || rw),
                string: new kd
            }
        }
        Wd.exports = iw
    });
    var Kd = c((vH, zd) => {
        function ow(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        zd.exports = ow
    });
    var Ir = c((yH, Yd) => {
        var aw = Kd();

        function sw(e, t) {
            var r = e.__data__;
            return aw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Yd.exports = sw
    });
    var Qd = c((EH, $d) => {
        var uw = Ir();

        function cw(e) {
            var t = uw(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        $d.exports = cw
    });
    var Jd = c((mH, Zd) => {
        var lw = Ir();

        function fw(e) {
            return lw(this, e).get(e)
        }
        Zd.exports = fw
    });
    var tp = c((_H, ep) => {
        var dw = Ir();

        function pw(e) {
            return dw(this, e).has(e)
        }
        ep.exports = pw
    });
    var np = c((TH, rp) => {
        var gw = Ir();

        function hw(e, t) {
            var r = gw(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        rp.exports = hw
    });
    var bn = c((IH, ip) => {
        var vw = jd(),
            yw = Qd(),
            Ew = Jd(),
            mw = tp(),
            _w = np();

        function Gt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Gt.prototype.clear = vw;
        Gt.prototype.delete = yw;
        Gt.prototype.get = Ew;
        Gt.prototype.has = mw;
        Gt.prototype.set = _w;
        ip.exports = Gt
    });
    var ap = c((bH, op) => {
        var Tw = _r(),
            Iw = In(),
            bw = bn(),
            Ow = 200;

        function Aw(e, t) {
            var r = this.__data__;
            if (r instanceof Tw) {
                var n = r.__data__;
                if (!Iw || n.length < Ow - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new bw(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        op.exports = Aw
    });
    var Uo = c((OH, sp) => {
        var Sw = _r(),
            xw = cd(),
            ww = fd(),
            Cw = pd(),
            Rw = hd(),
            Nw = ap();

        function Vt(e) {
            var t = this.__data__ = new Sw(e);
            this.size = t.size
        }
        Vt.prototype.clear = xw;
        Vt.prototype.delete = ww;
        Vt.prototype.get = Cw;
        Vt.prototype.has = Rw;
        Vt.prototype.set = Nw;
        sp.exports = Vt
    });
    var cp = c((AH, up) => {
        var Lw = "__lodash_hash_undefined__";

        function Pw(e) {
            return this.__data__.set(e, Lw), this
        }
        up.exports = Pw
    });
    var fp = c((SH, lp) => {
        function qw(e) {
            return this.__data__.has(e)
        }
        lp.exports = qw
    });
    var pp = c((xH, dp) => {
        var Fw = bn(),
            Mw = cp(),
            Dw = fp();

        function On(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new Fw; ++t < r;) this.add(e[t])
        }
        On.prototype.add = On.prototype.push = Mw;
        On.prototype.has = Dw;
        dp.exports = On
    });
    var hp = c((wH, gp) => {
        function Gw(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        gp.exports = Gw
    });
    var yp = c((CH, vp) => {
        function Vw(e, t) {
            return e.has(t)
        }
        vp.exports = Vw
    });
    var Xo = c((RH, Ep) => {
        var Bw = pp(),
            Uw = hp(),
            Xw = yp(),
            Hw = 1,
            kw = 2;

        function Ww(e, t, r, n, i, o) {
            var s = r & Hw,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var f = o.get(e),
                p = o.get(t);
            if (f && p) return f == t && p == e;
            var g = -1,
                d = !0,
                m = r & kw ? new Bw : void 0;
            for (o.set(e, t), o.set(t, e); ++g < a;) {
                var O = e[g],
                    E = t[g];
                if (n) var b = s ? n(E, O, g, t, e, o) : n(O, E, g, e, t, o);
                if (b !== void 0) {
                    if (b) continue;
                    d = !1;
                    break
                }
                if (m) {
                    if (!Uw(t, function(v, S) {
                            if (!Xw(m, S) && (O === v || i(O, v, r, n, o))) return m.push(S)
                        })) {
                        d = !1;
                        break
                    }
                } else if (!(O === E || i(O, E, r, n, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), d
        }
        Ep.exports = Ww
    });
    var _p = c((NH, mp) => {
        var jw = De(),
            zw = jw.Uint8Array;
        mp.exports = zw
    });
    var Ip = c((LH, Tp) => {
        function Kw(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Tp.exports = Kw
    });
    var Op = c((PH, bp) => {
        function Yw(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        bp.exports = Yw
    });
    var Cp = c((qH, wp) => {
        var Ap = Lt(),
            Sp = _p(),
            $w = Tn(),
            Qw = Xo(),
            Zw = Ip(),
            Jw = Op(),
            eC = 1,
            tC = 2,
            rC = "[object Boolean]",
            nC = "[object Date]",
            iC = "[object Error]",
            oC = "[object Map]",
            aC = "[object Number]",
            sC = "[object RegExp]",
            uC = "[object Set]",
            cC = "[object String]",
            lC = "[object Symbol]",
            fC = "[object ArrayBuffer]",
            dC = "[object DataView]",
            xp = Ap ? Ap.prototype : void 0,
            Ho = xp ? xp.valueOf : void 0;

        function pC(e, t, r, n, i, o, s) {
            switch (r) {
                case dC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case fC:
                    return !(e.byteLength != t.byteLength || !o(new Sp(e), new Sp(t)));
                case rC:
                case nC:
                case aC:
                    return $w(+e, +t);
                case iC:
                    return e.name == t.name && e.message == t.message;
                case sC:
                case cC:
                    return e == t + "";
                case oC:
                    var a = Zw;
                case uC:
                    var u = n & eC;
                    if (a || (a = Jw), e.size != t.size && !u) return !1;
                    var f = s.get(e);
                    if (f) return f == t;
                    n |= tC, s.set(e, t);
                    var p = Qw(a(e), a(t), n, i, o, s);
                    return s.delete(e), p;
                case lC:
                    if (Ho) return Ho.call(e) == Ho.call(t)
            }
            return !1
        }
        wp.exports = pC
    });
    var An = c((FH, Rp) => {
        function gC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Rp.exports = gC
    });
    var le = c((MH, Np) => {
        var hC = Array.isArray;
        Np.exports = hC
    });
    var ko = c((DH, Lp) => {
        var vC = An(),
            yC = le();

        function EC(e, t, r) {
            var n = t(e);
            return yC(e) ? n : vC(n, r(e))
        }
        Lp.exports = EC
    });
    var qp = c((GH, Pp) => {
        function mC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        Pp.exports = mC
    });
    var Wo = c((VH, Fp) => {
        function _C() {
            return []
        }
        Fp.exports = _C
    });
    var jo = c((BH, Dp) => {
        var TC = qp(),
            IC = Wo(),
            bC = Object.prototype,
            OC = bC.propertyIsEnumerable,
            Mp = Object.getOwnPropertySymbols,
            AC = Mp ? function(e) {
                return e == null ? [] : (e = Object(e), TC(Mp(e), function(t) {
                    return OC.call(e, t)
                }))
            } : IC;
        Dp.exports = AC
    });
    var Vp = c((UH, Gp) => {
        function SC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Gp.exports = SC
    });
    var Up = c((XH, Bp) => {
        var xC = lt(),
            wC = Je(),
            CC = "[object Arguments]";

        function RC(e) {
            return wC(e) && xC(e) == CC
        }
        Bp.exports = RC
    });
    var br = c((HH, kp) => {
        var Xp = Up(),
            NC = Je(),
            Hp = Object.prototype,
            LC = Hp.hasOwnProperty,
            PC = Hp.propertyIsEnumerable,
            qC = Xp(function() {
                return arguments
            }()) ? Xp : function(e) {
                return NC(e) && LC.call(e, "callee") && !PC.call(e, "callee")
            };
        kp.exports = qC
    });
    var jp = c((kH, Wp) => {
        function FC() {
            return !1
        }
        Wp.exports = FC
    });
    var Sn = c((Or, Bt) => {
        var MC = De(),
            DC = jp(),
            Yp = typeof Or == "object" && Or && !Or.nodeType && Or,
            zp = Yp && typeof Bt == "object" && Bt && !Bt.nodeType && Bt,
            GC = zp && zp.exports === Yp,
            Kp = GC ? MC.Buffer : void 0,
            VC = Kp ? Kp.isBuffer : void 0,
            BC = VC || DC;
        Bt.exports = BC
    });
    var xn = c((WH, $p) => {
        var UC = 9007199254740991,
            XC = /^(?:0|[1-9]\d*)$/;

        function HC(e, t) {
            var r = typeof e;
            return t = t ? ? UC, !!t && (r == "number" || r != "symbol" && XC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        $p.exports = HC
    });
    var wn = c((jH, Qp) => {
        var kC = 9007199254740991;

        function WC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kC
        }
        Qp.exports = WC
    });
    var Jp = c((zH, Zp) => {
        var jC = lt(),
            zC = wn(),
            KC = Je(),
            YC = "[object Arguments]",
            $C = "[object Array]",
            QC = "[object Boolean]",
            ZC = "[object Date]",
            JC = "[object Error]",
            eR = "[object Function]",
            tR = "[object Map]",
            rR = "[object Number]",
            nR = "[object Object]",
            iR = "[object RegExp]",
            oR = "[object Set]",
            aR = "[object String]",
            sR = "[object WeakMap]",
            uR = "[object ArrayBuffer]",
            cR = "[object DataView]",
            lR = "[object Float32Array]",
            fR = "[object Float64Array]",
            dR = "[object Int8Array]",
            pR = "[object Int16Array]",
            gR = "[object Int32Array]",
            hR = "[object Uint8Array]",
            vR = "[object Uint8ClampedArray]",
            yR = "[object Uint16Array]",
            ER = "[object Uint32Array]",
            te = {};
        te[lR] = te[fR] = te[dR] = te[pR] = te[gR] = te[hR] = te[vR] = te[yR] = te[ER] = !0;
        te[YC] = te[$C] = te[uR] = te[QC] = te[cR] = te[ZC] = te[JC] = te[eR] = te[tR] = te[rR] = te[nR] = te[iR] = te[oR] = te[aR] = te[sR] = !1;

        function mR(e) {
            return KC(e) && zC(e.length) && !!te[jC(e)]
        }
        Zp.exports = mR
    });
    var tg = c((KH, eg) => {
        function _R(e) {
            return function(t) {
                return e(t)
            }
        }
        eg.exports = _R
    });
    var ng = c((Ar, Ut) => {
        var TR = Eo(),
            rg = typeof Ar == "object" && Ar && !Ar.nodeType && Ar,
            Sr = rg && typeof Ut == "object" && Ut && !Ut.nodeType && Ut,
            IR = Sr && Sr.exports === rg,
            zo = IR && TR.process,
            bR = function() {
                try {
                    var e = Sr && Sr.require && Sr.require("util").types;
                    return e || zo && zo.binding && zo.binding("util")
                } catch {}
            }();
        Ut.exports = bR
    });
    var Cn = c((YH, ag) => {
        var OR = Jp(),
            AR = tg(),
            ig = ng(),
            og = ig && ig.isTypedArray,
            SR = og ? AR(og) : OR;
        ag.exports = SR
    });
    var Ko = c(($H, sg) => {
        var xR = Vp(),
            wR = br(),
            CR = le(),
            RR = Sn(),
            NR = xn(),
            LR = Cn(),
            PR = Object.prototype,
            qR = PR.hasOwnProperty;

        function FR(e, t) {
            var r = CR(e),
                n = !r && wR(e),
                i = !r && !n && RR(e),
                o = !r && !n && !i && LR(e),
                s = r || n || i || o,
                a = s ? xR(e.length, String) : [],
                u = a.length;
            for (var f in e)(t || qR.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || NR(f, u))) && a.push(f);
            return a
        }
        sg.exports = FR
    });
    var Rn = c((QH, ug) => {
        var MR = Object.prototype;

        function DR(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || MR;
            return e === r
        }
        ug.exports = DR
    });
    var lg = c((ZH, cg) => {
        var GR = mo(),
            VR = GR(Object.keys, Object);
        cg.exports = VR
    });
    var Nn = c((JH, fg) => {
        var BR = Rn(),
            UR = lg(),
            XR = Object.prototype,
            HR = XR.hasOwnProperty;

        function kR(e) {
            if (!BR(e)) return UR(e);
            var t = [];
            for (var r in Object(e)) HR.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        fg.exports = kR
    });
    var mt = c((ek, dg) => {
        var WR = Go(),
            jR = wn();

        function zR(e) {
            return e != null && jR(e.length) && !WR(e)
        }
        dg.exports = zR
    });
    var xr = c((tk, pg) => {
        var KR = Ko(),
            YR = Nn(),
            $R = mt();

        function QR(e) {
            return $R(e) ? KR(e) : YR(e)
        }
        pg.exports = QR
    });
    var hg = c((rk, gg) => {
        var ZR = ko(),
            JR = jo(),
            eN = xr();

        function tN(e) {
            return ZR(e, eN, JR)
        }
        gg.exports = tN
    });
    var Eg = c((nk, yg) => {
        var vg = hg(),
            rN = 1,
            nN = Object.prototype,
            iN = nN.hasOwnProperty;

        function oN(e, t, r, n, i, o) {
            var s = r & rN,
                a = vg(e),
                u = a.length,
                f = vg(t),
                p = f.length;
            if (u != p && !s) return !1;
            for (var g = u; g--;) {
                var d = a[g];
                if (!(s ? d in t : iN.call(t, d))) return !1
            }
            var m = o.get(e),
                O = o.get(t);
            if (m && O) return m == t && O == e;
            var E = !0;
            o.set(e, t), o.set(t, e);
            for (var b = s; ++g < u;) {
                d = a[g];
                var v = e[d],
                    S = t[d];
                if (n) var I = s ? n(S, v, d, t, e, o) : n(v, S, d, e, t, o);
                if (!(I === void 0 ? v === S || i(v, S, r, n, o) : I)) {
                    E = !1;
                    break
                }
                b || (b = d == "constructor")
            }
            if (E && !b) {
                var w = e.constructor,
                    R = t.constructor;
                w != R && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof R == "function" && R instanceof R) && (E = !1)
            }
            return o.delete(e), o.delete(t), E
        }
        yg.exports = oN
    });
    var _g = c((ik, mg) => {
        var aN = ft(),
            sN = De(),
            uN = aN(sN, "DataView");
        mg.exports = uN
    });
    var Ig = c((ok, Tg) => {
        var cN = ft(),
            lN = De(),
            fN = cN(lN, "Promise");
        Tg.exports = fN
    });
    var Og = c((ak, bg) => {
        var dN = ft(),
            pN = De(),
            gN = dN(pN, "Set");
        bg.exports = gN
    });
    var Yo = c((sk, Ag) => {
        var hN = ft(),
            vN = De(),
            yN = hN(vN, "WeakMap");
        Ag.exports = yN
    });
    var Ln = c((uk, Lg) => {
        var $o = _g(),
            Qo = In(),
            Zo = Ig(),
            Jo = Og(),
            ea = Yo(),
            Ng = lt(),
            Xt = Bo(),
            Sg = "[object Map]",
            EN = "[object Object]",
            xg = "[object Promise]",
            wg = "[object Set]",
            Cg = "[object WeakMap]",
            Rg = "[object DataView]",
            mN = Xt($o),
            _N = Xt(Qo),
            TN = Xt(Zo),
            IN = Xt(Jo),
            bN = Xt(ea),
            _t = Ng;
        ($o && _t(new $o(new ArrayBuffer(1))) != Rg || Qo && _t(new Qo) != Sg || Zo && _t(Zo.resolve()) != xg || Jo && _t(new Jo) != wg || ea && _t(new ea) != Cg) && (_t = function(e) {
            var t = Ng(e),
                r = t == EN ? e.constructor : void 0,
                n = r ? Xt(r) : "";
            if (n) switch (n) {
                case mN:
                    return Rg;
                case _N:
                    return Sg;
                case TN:
                    return xg;
                case IN:
                    return wg;
                case bN:
                    return Cg
            }
            return t
        });
        Lg.exports = _t
    });
    var Bg = c((ck, Vg) => {
        var ta = Uo(),
            ON = Xo(),
            AN = Cp(),
            SN = Eg(),
            Pg = Ln(),
            qg = le(),
            Fg = Sn(),
            xN = Cn(),
            wN = 1,
            Mg = "[object Arguments]",
            Dg = "[object Array]",
            Pn = "[object Object]",
            CN = Object.prototype,
            Gg = CN.hasOwnProperty;

        function RN(e, t, r, n, i, o) {
            var s = qg(e),
                a = qg(t),
                u = s ? Dg : Pg(e),
                f = a ? Dg : Pg(t);
            u = u == Mg ? Pn : u, f = f == Mg ? Pn : f;
            var p = u == Pn,
                g = f == Pn,
                d = u == f;
            if (d && Fg(e)) {
                if (!Fg(t)) return !1;
                s = !0, p = !1
            }
            if (d && !p) return o || (o = new ta), s || xN(e) ? ON(e, t, r, n, i, o) : AN(e, t, u, r, n, i, o);
            if (!(r & wN)) {
                var m = p && Gg.call(e, "__wrapped__"),
                    O = g && Gg.call(t, "__wrapped__");
                if (m || O) {
                    var E = m ? e.value() : e,
                        b = O ? t.value() : t;
                    return o || (o = new ta), i(E, b, r, n, o)
                }
            }
            return d ? (o || (o = new ta), SN(e, t, r, n, i, o)) : !1
        }
        Vg.exports = RN
    });
    var ra = c((lk, Hg) => {
        var NN = Bg(),
            Ug = Je();

        function Xg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Ug(e) && !Ug(t) ? e !== e && t !== t : NN(e, t, r, n, Xg, i)
        }
        Hg.exports = Xg
    });
    var Wg = c((fk, kg) => {
        var LN = Uo(),
            PN = ra(),
            qN = 1,
            FN = 2;

        function MN(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    f = e[u],
                    p = a[1];
                if (s && a[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var g = new LN;
                    if (n) var d = n(f, p, u, e, t, g);
                    if (!(d === void 0 ? PN(p, f, qN | FN, n, g) : d)) return !1
                }
            }
            return !0
        }
        kg.exports = MN
    });
    var na = c((dk, jg) => {
        var DN = ze();

        function GN(e) {
            return e === e && !DN(e)
        }
        jg.exports = GN
    });
    var Kg = c((pk, zg) => {
        var VN = na(),
            BN = xr();

        function UN(e) {
            for (var t = BN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, VN(i)]
            }
            return t
        }
        zg.exports = UN
    });
    var ia = c((gk, Yg) => {
        function XN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Yg.exports = XN
    });
    var Qg = c((hk, $g) => {
        var HN = Wg(),
            kN = Kg(),
            WN = ia();

        function jN(e) {
            var t = kN(e);
            return t.length == 1 && t[0][2] ? WN(t[0][0], t[0][1]) : function(r) {
                return r === e || HN(r, e, t)
            }
        }
        $g.exports = jN
    });
    var wr = c((vk, Zg) => {
        var zN = lt(),
            KN = Je(),
            YN = "[object Symbol]";

        function $N(e) {
            return typeof e == "symbol" || KN(e) && zN(e) == YN
        }
        Zg.exports = $N
    });
    var qn = c((yk, Jg) => {
        var QN = le(),
            ZN = wr(),
            JN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            eL = /^\w*$/;

        function tL(e, t) {
            if (QN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || ZN(e) ? !0 : eL.test(e) || !JN.test(e) || t != null && e in Object(t)
        }
        Jg.exports = tL
    });
    var rh = c((Ek, th) => {
        var eh = bn(),
            rL = "Expected a function";

        function oa(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(rL);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(oa.Cache || eh), r
        }
        oa.Cache = eh;
        th.exports = oa
    });
    var ih = c((mk, nh) => {
        var nL = rh(),
            iL = 500;

        function oL(e) {
            var t = nL(e, function(n) {
                    return r.size === iL && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        nh.exports = oL
    });
    var ah = c((_k, oh) => {
        var aL = ih(),
            sL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            uL = /\\(\\)?/g,
            cL = aL(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(sL, function(r, n, i, o) {
                    t.push(i ? o.replace(uL, "$1") : n || r)
                }), t
            });
        oh.exports = cL
    });
    var aa = c((Tk, sh) => {
        function lL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        sh.exports = lL
    });
    var ph = c((Ik, dh) => {
        var uh = Lt(),
            fL = aa(),
            dL = le(),
            pL = wr(),
            gL = 1 / 0,
            ch = uh ? uh.prototype : void 0,
            lh = ch ? ch.toString : void 0;

        function fh(e) {
            if (typeof e == "string") return e;
            if (dL(e)) return fL(e, fh) + "";
            if (pL(e)) return lh ? lh.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -gL ? "-0" : t
        }
        dh.exports = fh
    });
    var hh = c((bk, gh) => {
        var hL = ph();

        function vL(e) {
            return e == null ? "" : hL(e)
        }
        gh.exports = vL
    });
    var Cr = c((Ok, vh) => {
        var yL = le(),
            EL = qn(),
            mL = ah(),
            _L = hh();

        function TL(e, t) {
            return yL(e) ? e : EL(e, t) ? [e] : mL(_L(e))
        }
        vh.exports = TL
    });
    var Ht = c((Ak, yh) => {
        var IL = wr(),
            bL = 1 / 0;

        function OL(e) {
            if (typeof e == "string" || IL(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -bL ? "-0" : t
        }
        yh.exports = OL
    });
    var Fn = c((Sk, Eh) => {
        var AL = Cr(),
            SL = Ht();

        function xL(e, t) {
            t = AL(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[SL(t[r++])];
            return r && r == n ? e : void 0
        }
        Eh.exports = xL
    });
    var Mn = c((xk, mh) => {
        var wL = Fn();

        function CL(e, t, r) {
            var n = e == null ? void 0 : wL(e, t);
            return n === void 0 ? r : n
        }
        mh.exports = CL
    });
    var Th = c((wk, _h) => {
        function RL(e, t) {
            return e != null && t in Object(e)
        }
        _h.exports = RL
    });
    var bh = c((Ck, Ih) => {
        var NL = Cr(),
            LL = br(),
            PL = le(),
            qL = xn(),
            FL = wn(),
            ML = Ht();

        function DL(e, t, r) {
            t = NL(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = ML(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && FL(i) && qL(s, i) && (PL(e) || LL(e)))
        }
        Ih.exports = DL
    });
    var Ah = c((Rk, Oh) => {
        var GL = Th(),
            VL = bh();

        function BL(e, t) {
            return e != null && VL(e, t, GL)
        }
        Oh.exports = BL
    });
    var xh = c((Nk, Sh) => {
        var UL = ra(),
            XL = Mn(),
            HL = Ah(),
            kL = qn(),
            WL = na(),
            jL = ia(),
            zL = Ht(),
            KL = 1,
            YL = 2;

        function $L(e, t) {
            return kL(e) && WL(t) ? jL(zL(e), t) : function(r) {
                var n = XL(r, e);
                return n === void 0 && n === t ? HL(r, e) : UL(t, n, KL | YL)
            }
        }
        Sh.exports = $L
    });
    var Dn = c((Lk, wh) => {
        function QL(e) {
            return e
        }
        wh.exports = QL
    });
    var sa = c((Pk, Ch) => {
        function ZL(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Ch.exports = ZL
    });
    var Nh = c((qk, Rh) => {
        var JL = Fn();

        function eP(e) {
            return function(t) {
                return JL(t, e)
            }
        }
        Rh.exports = eP
    });
    var Ph = c((Fk, Lh) => {
        var tP = sa(),
            rP = Nh(),
            nP = qn(),
            iP = Ht();

        function oP(e) {
            return nP(e) ? tP(iP(e)) : rP(e)
        }
        Lh.exports = oP
    });
    var dt = c((Mk, qh) => {
        var aP = Qg(),
            sP = xh(),
            uP = Dn(),
            cP = le(),
            lP = Ph();

        function fP(e) {
            return typeof e == "function" ? e : e == null ? uP : typeof e == "object" ? cP(e) ? sP(e[0], e[1]) : aP(e) : lP(e)
        }
        qh.exports = fP
    });
    var ua = c((Dk, Fh) => {
        var dP = dt(),
            pP = mt(),
            gP = xr();

        function hP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!pP(t)) {
                    var o = dP(r, 3);
                    t = gP(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Fh.exports = hP
    });
    var ca = c((Gk, Mh) => {
        function vP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Mh.exports = vP
    });
    var Gh = c((Vk, Dh) => {
        var yP = /\s/;

        function EP(e) {
            for (var t = e.length; t-- && yP.test(e.charAt(t)););
            return t
        }
        Dh.exports = EP
    });
    var Bh = c((Bk, Vh) => {
        var mP = Gh(),
            _P = /^\s+/;

        function TP(e) {
            return e && e.slice(0, mP(e) + 1).replace(_P, "")
        }
        Vh.exports = TP
    });
    var Gn = c((Uk, Hh) => {
        var IP = Bh(),
            Uh = ze(),
            bP = wr(),
            Xh = 0 / 0,
            OP = /^[-+]0x[0-9a-f]+$/i,
            AP = /^0b[01]+$/i,
            SP = /^0o[0-7]+$/i,
            xP = parseInt;

        function wP(e) {
            if (typeof e == "number") return e;
            if (bP(e)) return Xh;
            if (Uh(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Uh(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = IP(e);
            var r = AP.test(e);
            return r || SP.test(e) ? xP(e.slice(2), r ? 2 : 8) : OP.test(e) ? Xh : +e
        }
        Hh.exports = wP
    });
    var jh = c((Xk, Wh) => {
        var CP = Gn(),
            kh = 1 / 0,
            RP = 17976931348623157e292;

        function NP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = CP(e), e === kh || e === -kh) {
                var t = e < 0 ? -1 : 1;
                return t * RP
            }
            return e === e ? e : 0
        }
        Wh.exports = NP
    });
    var la = c((Hk, zh) => {
        var LP = jh();

        function PP(e) {
            var t = LP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        zh.exports = PP
    });
    var Yh = c((kk, Kh) => {
        var qP = ca(),
            FP = dt(),
            MP = la(),
            DP = Math.max;

        function GP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : MP(r);
            return i < 0 && (i = DP(n + i, 0)), qP(e, FP(t, 3), i)
        }
        Kh.exports = GP
    });
    var fa = c((Wk, $h) => {
        var VP = ua(),
            BP = Yh(),
            UP = VP(BP);
        $h.exports = UP
    });
    var Jh = {};
    be(Jh, {
        ELEMENT_MATCHES: () => XP,
        FLEX_PREFIXED: () => da,
        IS_BROWSER_ENV: () => Ve,
        TRANSFORM_PREFIXED: () => pt,
        TRANSFORM_STYLE_PREFIXED: () => Bn,
        withBrowser: () => Vn
    });
    var Zh, Ve, Vn, XP, da, pt, Qh, Bn, Un = ne(() => {
        "use strict";
        Zh = Q(fa()), Ve = typeof window < "u", Vn = (e, t) => Ve ? e() : t, XP = Vn(() => (0, Zh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), da = Vn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), pt = Vn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), Qh = pt.split("transform")[0], Bn = Qh ? Qh + "TransformStyle" : "transformStyle"
    });
    var pa = c((jk, iv) => {
        var HP = 4,
            kP = .001,
            WP = 1e-7,
            jP = 10,
            Rr = 11,
            Xn = 1 / (Rr - 1),
            zP = typeof Float32Array == "function";

        function ev(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function tv(e, t) {
            return 3 * t - 6 * e
        }

        function rv(e) {
            return 3 * e
        }

        function Hn(e, t, r) {
            return ((ev(t, r) * e + tv(t, r)) * e + rv(t)) * e
        }

        function nv(e, t, r) {
            return 3 * ev(t, r) * e * e + 2 * tv(t, r) * e + rv(t)
        }

        function KP(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = Hn(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > WP && ++a < jP);
            return s
        }

        function YP(e, t, r, n) {
            for (var i = 0; i < HP; ++i) {
                var o = nv(t, r, n);
                if (o === 0) return t;
                var s = Hn(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        iv.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = zP ? new Float32Array(Rr) : new Array(Rr);
            if (t !== r || n !== i)
                for (var s = 0; s < Rr; ++s) o[s] = Hn(s * Xn, t, n);

            function a(u) {
                for (var f = 0, p = 1, g = Rr - 1; p !== g && o[p] <= u; ++p) f += Xn;
                --p;
                var d = (u - o[p]) / (o[p + 1] - o[p]),
                    m = f + d * Xn,
                    O = nv(m, t, n);
                return O >= kP ? YP(u, m, t, n) : O === 0 ? m : KP(u, f, f + Xn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : Hn(a(f), r, i)
            }
        }
    });
    var Lr = {};
    be(Lr, {
        bounce: () => Nq,
        bouncePast: () => Lq,
        ease: () => $P,
        easeIn: () => QP,
        easeInOut: () => JP,
        easeOut: () => ZP,
        inBack: () => Iq,
        inCirc: () => Eq,
        inCubic: () => nq,
        inElastic: () => Aq,
        inExpo: () => hq,
        inOutBack: () => Oq,
        inOutCirc: () => _q,
        inOutCubic: () => oq,
        inOutElastic: () => xq,
        inOutExpo: () => yq,
        inOutQuad: () => rq,
        inOutQuart: () => uq,
        inOutQuint: () => fq,
        inOutSine: () => gq,
        inQuad: () => eq,
        inQuart: () => aq,
        inQuint: () => cq,
        inSine: () => dq,
        outBack: () => bq,
        outBounce: () => Tq,
        outCirc: () => mq,
        outCubic: () => iq,
        outElastic: () => Sq,
        outExpo: () => vq,
        outQuad: () => tq,
        outQuart: () => sq,
        outQuint: () => lq,
        outSine: () => pq,
        swingFrom: () => Cq,
        swingFromTo: () => wq,
        swingTo: () => Rq
    });

    function eq(e) {
        return Math.pow(e, 2)
    }

    function tq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function rq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function nq(e) {
        return Math.pow(e, 3)
    }

    function iq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function oq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function aq(e) {
        return Math.pow(e, 4)
    }

    function sq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function uq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function cq(e) {
        return Math.pow(e, 5)
    }

    function lq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function fq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function dq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function pq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function gq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function hq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function vq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function yq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Eq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function mq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function _q(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Tq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Iq(e) {
        let t = et;
        return e * e * ((t + 1) * e - t)
    }

    function bq(e) {
        let t = et;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Oq(e) {
        let t = et;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Aq(e) {
        let t = et,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Sq(e) {
        let t = et,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function xq(e) {
        let t = et,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function wq(e) {
        let t = et;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Cq(e) {
        let t = et;
        return e * e * ((t + 1) * e - t)
    }

    function Rq(e) {
        let t = et;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Nq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Lq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Nr, et, $P, QP, ZP, JP, ga = ne(() => {
        "use strict";
        Nr = Q(pa()), et = 1.70158, $P = (0, Nr.default)(.25, .1, .25, 1), QP = (0, Nr.default)(.42, 0, 1, 1), ZP = (0, Nr.default)(0, 0, .58, 1), JP = (0, Nr.default)(.42, 0, .58, 1)
    });
    var av = {};
    be(av, {
        applyEasing: () => qq,
        createBezierEasing: () => Pq,
        optimizeFloat: () => Pr
    });

    function Pr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Pq(e) {
        return (0, ov.default)(...e)
    }

    function qq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Pr(r ? t > 0 ? r(t) : t : t > 0 && e && Lr[e] ? Lr[e](t) : t)
    }
    var ov, ha = ne(() => {
        "use strict";
        ga();
        ov = Q(pa())
    });
    var cv = {};
    be(cv, {
        createElementState: () => uv,
        ixElements: () => Kq,
        mergeActionState: () => va
    });

    function uv(e, t, r, n, i) {
        let o = r === Fq ? (0, kt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, kt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function va(e, t, r, n, i) {
        let o = $q(i);
        return (0, kt.mergeIn)(e, [t, zq, r], n, o)
    }

    function $q(e) {
        let {
            config: t
        } = e;
        return Yq.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var kt, Kk, Fq, Yk, Mq, Dq, Gq, Vq, Bq, Uq, Xq, Hq, kq, Wq, jq, sv, zq, Kq, Yq, lv = ne(() => {
        "use strict";
        kt = Q(Ft());
        Ae();
        ({
            HTML_ELEMENT: Kk,
            PLAIN_OBJECT: Fq,
            ABSTRACT_NODE: Yk,
            CONFIG_X_VALUE: Mq,
            CONFIG_Y_VALUE: Dq,
            CONFIG_Z_VALUE: Gq,
            CONFIG_VALUE: Vq,
            CONFIG_X_UNIT: Bq,
            CONFIG_Y_UNIT: Uq,
            CONFIG_Z_UNIT: Xq,
            CONFIG_UNIT: Hq
        } = ge), {
            IX2_SESSION_STOPPED: kq,
            IX2_INSTANCE_ADDED: Wq,
            IX2_ELEMENT_STATE_CHANGED: jq
        } = ce, sv = {}, zq = "refState", Kq = (e = sv, t = {}) => {
            switch (t.type) {
                case kq:
                    return sv;
                case Wq:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, kt.getIn)(u, [r, n]) !== n && (u = uv(u, n, s, r, o)),
                        va(u, r, a, i, o)
                    }
                case jq:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return va(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        Yq = [
            [Mq, Bq],
            [Dq, Uq],
            [Gq, Xq],
            [Vq, Hq]
        ]
    });
    var fv = c(fe => {
        "use strict";
        Object.defineProperty(fe, "__esModule", {
            value: !0
        });
        fe.renderPlugin = fe.getPluginOrigin = fe.getPluginDuration = fe.getPluginDestination = fe.getPluginConfig = fe.createPluginInstance = fe.clearPlugin = void 0;
        var Qq = e => e.value;
        fe.getPluginConfig = Qq;
        var Zq = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        fe.getPluginDuration = Zq;
        var Jq = e => e || {
            value: 0
        };
        fe.getPluginOrigin = Jq;
        var eF = e => ({
            value: e.value
        });
        fe.getPluginDestination = eF;
        var tF = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        fe.createPluginInstance = tF;
        var rF = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        fe.renderPlugin = rF;
        var nF = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        fe.clearPlugin = nF
    });
    var pv = c(de => {
        "use strict";
        Object.defineProperty(de, "__esModule", {
            value: !0
        });
        de.renderPlugin = de.getPluginOrigin = de.getPluginDuration = de.getPluginDestination = de.getPluginConfig = de.createPluginInstance = de.clearPlugin = void 0;
        var iF = e => document.querySelector(`[data-w-id="${e}"]`),
            oF = () => window.Webflow.require("spline"),
            aF = (e, t) => e.filter(r => !t.includes(r)),
            sF = (e, t) => e.value[t];
        de.getPluginConfig = sF;
        var uF = () => null;
        de.getPluginDuration = uF;
        var dv = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            cF = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = aF(n, o);
                    return s.length ? s.reduce((u, f) => (u[f] = dv[f], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = dv[s], o), {})
            };
        de.getPluginOrigin = cF;
        var lF = e => e.value;
        de.getPluginDestination = lF;
        var fF = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? iF(n) : null
        };
        de.createPluginInstance = fF;
        var dF = (e, t, r) => {
            let n = oF(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                s = a => {
                    if (!a) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && a.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: f
                    } = t;
                    f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        de.renderPlugin = dF;
        var pF = () => null;
        de.clearPlugin = pF
    });
    var Ea = c(ya => {
        "use strict";
        Object.defineProperty(ya, "__esModule", {
            value: !0
        });
        ya.normalizeColor = gF;
        var gv = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function gF(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                a = (typeof gv[o] == "string" ? gv[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(u[0]),
                    p = parseFloat(u[1].replace("%", "")) / 100,
                    g = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * g - 1)) * p,
                    m = d * (1 - Math.abs(f / 60 % 2 - 1)),
                    O = g - d / 2,
                    E, b, v;
                f >= 0 && f < 60 ? (E = d, b = m, v = 0) : f >= 60 && f < 120 ? (E = m, b = d, v = 0) : f >= 120 && f < 180 ? (E = 0, b = d, v = m) : f >= 180 && f < 240 ? (E = 0, b = m, v = d) : f >= 240 && f < 300 ? (E = m, b = 0, v = d) : (E = d, b = 0, v = m), t = Math.round((E + O) * 255), r = Math.round((b + O) * 255), n = Math.round((v + O) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(u[0]),
                    p = parseFloat(u[1].replace("%", "")) / 100,
                    g = parseFloat(u[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * g - 1)) * p,
                    m = d * (1 - Math.abs(f / 60 % 2 - 1)),
                    O = g - d / 2,
                    E, b, v;
                f >= 0 && f < 60 ? (E = d, b = m, v = 0) : f >= 60 && f < 120 ? (E = m, b = d, v = 0) : f >= 120 && f < 180 ? (E = 0, b = d, v = m) : f >= 180 && f < 240 ? (E = 0, b = m, v = d) : f >= 240 && f < 300 ? (E = m, b = 0, v = d) : (E = d, b = 0, v = m), t = Math.round((E + O) * 255), r = Math.round((b + O) * 255), n = Math.round((v + O) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var hv = c(pe => {
        "use strict";
        Object.defineProperty(pe, "__esModule", {
            value: !0
        });
        pe.renderPlugin = pe.getPluginOrigin = pe.getPluginDuration = pe.getPluginDestination = pe.getPluginConfig = pe.createPluginInstance = pe.clearPlugin = void 0;
        var hF = Ea(),
            vF = (e, t) => e.value[t];
        pe.getPluginConfig = vF;
        var yF = () => null;
        pe.getPluginDuration = yF;
        var EF = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, hF.normalizeColor)(i)
        };
        pe.getPluginOrigin = EF;
        var mF = e => e.value;
        pe.getPluginDestination = mF;
        var _F = () => null;
        pe.createPluginInstance = _F;
        var TF = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: s,
                    red: a,
                    green: u,
                    blue: f,
                    alpha: p
                } = o,
                g;
            s != null && (g = s + i), a != null && f != null && u != null && p != null && (g = `rgba(${a}, ${u}, ${f}, ${p})`), g != null && document.documentElement.style.setProperty(n, g)
        };
        pe.renderPlugin = TF;
        var IF = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        pe.clearPlugin = IF
    });
    var vv = c(kn => {
        "use strict";
        var _a = en().default;
        Object.defineProperty(kn, "__esModule", {
            value: !0
        });
        kn.pluginMethodMap = void 0;
        var ma = (Ae(), Xe(If)),
            bF = _a(fv()),
            OF = _a(pv()),
            AF = _a(hv()),
            eW = kn.pluginMethodMap = new Map([
                [ma.ActionTypeConsts.PLUGIN_LOTTIE, { ...bF
                }],
                [ma.ActionTypeConsts.PLUGIN_SPLINE, { ...OF
                }],
                [ma.ActionTypeConsts.PLUGIN_VARIABLE, { ...AF
                }]
            ])
    });
    var yv = {};
    be(yv, {
        clearPlugin: () => Sa,
        createPluginInstance: () => xF,
        getPluginConfig: () => Ia,
        getPluginDestination: () => Oa,
        getPluginDuration: () => SF,
        getPluginOrigin: () => ba,
        isPluginType: () => Tt,
        renderPlugin: () => Aa
    });

    function Tt(e) {
        return Ta.pluginMethodMap.has(e)
    }
    var Ta, It, Ia, ba, SF, Oa, xF, Aa, Sa, xa = ne(() => {
        "use strict";
        Un();
        Ta = Q(vv());
        It = e => t => {
            if (!Ve) return () => null;
            let r = Ta.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Ia = It("getPluginConfig"), ba = It("getPluginOrigin"), SF = It("getPluginDuration"), Oa = It("getPluginDestination"), xF = It("createPluginInstance"), Aa = It("renderPlugin"), Sa = It("clearPlugin")
    });
    var mv = c((nW, Ev) => {
        function wF(e, t) {
            return e == null || e !== e ? t : e
        }
        Ev.exports = wF
    });
    var Tv = c((iW, _v) => {
        function CF(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        _v.exports = CF
    });
    var bv = c((oW, Iv) => {
        function RF(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Iv.exports = RF
    });
    var Av = c((aW, Ov) => {
        var NF = bv(),
            LF = NF();
        Ov.exports = LF
    });
    var wa = c((sW, Sv) => {
        var PF = Av(),
            qF = xr();

        function FF(e, t) {
            return e && PF(e, t, qF)
        }
        Sv.exports = FF
    });
    var wv = c((uW, xv) => {
        var MF = mt();

        function DF(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!MF(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        xv.exports = DF
    });
    var Ca = c((cW, Cv) => {
        var GF = wa(),
            VF = wv(),
            BF = VF(GF);
        Cv.exports = BF
    });
    var Nv = c((lW, Rv) => {
        function UF(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        Rv.exports = UF
    });
    var Pv = c((fW, Lv) => {
        var XF = Tv(),
            HF = Ca(),
            kF = dt(),
            WF = Nv(),
            jF = le();

        function zF(e, t, r) {
            var n = jF(e) ? XF : WF,
                i = arguments.length < 3;
            return n(e, kF(t, 4), r, i, HF)
        }
        Lv.exports = zF
    });
    var Fv = c((dW, qv) => {
        var KF = ca(),
            YF = dt(),
            $F = la(),
            QF = Math.max,
            ZF = Math.min;

        function JF(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = $F(r), i = r < 0 ? QF(n + i, 0) : ZF(i, n - 1)), KF(e, YF(t, 3), i, !0)
        }
        qv.exports = JF
    });
    var Dv = c((pW, Mv) => {
        var eM = ua(),
            tM = Fv(),
            rM = eM(tM);
        Mv.exports = rM
    });

    function Gv(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function nM(e, t) {
        if (Gv(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Gv(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var Ra, Vv = ne(() => {
        "use strict";
        Ra = nM
    });
    var ny = {};
    be(ny, {
        cleanupHTMLElement: () => e1,
        clearAllStyles: () => JM,
        clearObjectCache: () => _M,
        getActionListProgress: () => r1,
        getAffectedElements: () => Fa,
        getComputedStyle: () => wM,
        getDestinationValues: () => FM,
        getElementId: () => OM,
        getInstanceId: () => IM,
        getInstanceOrigin: () => NM,
        getItemConfigByKey: () => qM,
        getMaxDurationItemIndex: () => ry,
        getNamespacedParameterId: () => o1,
        getRenderType: () => Jv,
        getStyleProp: () => MM,
        mediaQueriesEqual: () => s1,
        observeStore: () => xM,
        reduceListToGroup: () => n1,
        reifyState: () => AM,
        renderHTMLElement: () => DM,
        shallowEqual: () => Ra,
        shouldAllowMediaQuery: () => a1,
        shouldNamespaceEventParameter: () => i1,
        stringifyTarget: () => u1
    });

    function _M() {
        Wn.clear()
    }

    function IM() {
        return "i" + TM++
    }

    function OM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + bM++
    }

    function AM({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, Yn.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function xM({
        store: e,
        select: t,
        onChange: r,
        comparator: n = SM
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                s();
                return
            }
            n(f, a) || (a = f, r(a, e))
        }
        return s
    }

    function Xv(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function Fa({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((L, _) => L.concat(Fa({
            config: {
                target: _
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: f,
            getSiblingElements: p,
            matchSelector: g,
            elementContains: d,
            isSiblingNode: m
        } = i, {
            target: O
        } = e;
        if (!O) return [];
        let {
            id: E,
            objectId: b,
            selector: v,
            selectorGuids: S,
            appliesTo: I,
            useEventTarget: w
        } = Xv(O);
        if (b) return [Wn.has(b) ? Wn.get(b) : Wn.set(b, {}).get(b)];
        if (I === qo.PAGE) {
            let L = s(E);
            return L ? [L] : []
        }
        let x = (t ? .action ? .config ? .affectedElements ? ? {})[E || v] || {},
            F = !!(x.id || x.selector),
            M, G, U, k = t && a(Xv(t.target));
        if (F ? (M = x.limitAffectedElements, G = k, U = a(x)) : G = U = a({
                id: E,
                selector: v,
                selectorGuids: S
            }), t && w) {
            let L = r && (U || w === !0) ? [r] : u(k);
            if (U) {
                if (w === yM) return u(U).filter(_ => L.some(N => d(_, N)));
                if (w === Bv) return u(U).filter(_ => L.some(N => d(N, _)));
                if (w === Uv) return u(U).filter(_ => L.some(N => m(N, _)))
            }
            return L
        }
        return G == null || U == null ? [] : Ve && n ? u(U).filter(L => n.contains(L)) : M === Bv ? u(G, U) : M === vM ? f(u(G)).filter(g(U)) : M === Uv ? p(u(G)).filter(g(U)) : u(U)
    }

    function wM({
        element: e,
        actionItem: t
    }) {
        if (!Ve) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case Yt:
            case $t:
            case Qt:
            case Zt:
            case Qn:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function NM(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (Tt(s)) return ba(s)(t[s], n);
        switch (n.actionTypeId) {
            case jt:
            case zt:
            case Kt:
            case Dr:
                return t[n.actionTypeId] || Ma[n.actionTypeId];
            case Gr:
                return CM(t[n.actionTypeId], n.config.filters);
            case Vr:
                return RM(t[n.actionTypeId], n.config.fontVariations);
            case $v:
                return {
                    value: (0, tt.default)(parseFloat(o(e, zn)), 1)
                };
            case Yt:
                {
                    let a = o(e, Ke),
                        u = o(e, Ye),
                        f, p;
                    return n.config.widthUnit === gt ? f = Hv.test(a) ? parseFloat(a) : parseFloat(r.width) : f = (0, tt.default)(parseFloat(a), parseFloat(r.width)),
                    n.config.heightUnit === gt ? p = Hv.test(u) ? parseFloat(u) : parseFloat(r.height) : p = (0, tt.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: p
                    }
                }
            case $t:
            case Qt:
            case Zt:
                return $M({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case Qn:
                return {
                    value: (0, tt.default)(o(e, Kn), r.display)
                };
            case mM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function FM({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Tt(t.actionTypeId)) return Oa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case jt:
            case zt:
            case Kt:
            case Dr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case Yt:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: f
                    } = t.config;
                    if (!Ve) return {
                        widthValue: u,
                        heightValue: f
                    };
                    if (s === gt) {
                        let p = n(e, Ke);
                        i(e, Ke, ""), u = o(e, "offsetWidth"), i(e, Ke, p)
                    }
                    if (a === gt) {
                        let p = n(e, Ye);
                        i(e, Ye, ""), f = o(e, "offsetHeight"), i(e, Ye, p)
                    }
                    return {
                        widthValue: u,
                        heightValue: f
                    }
                }
            case $t:
            case Qt:
            case Zt:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s,
                        globalSwatchId: a
                    } = t.config;
                    if (a && a.startsWith("--")) {
                        let {
                            getStyle: u
                        } = r, f = u(e, a), p = (0, jv.normalizeColor)(f);
                        return {
                            rValue: p.red,
                            gValue: p.green,
                            bValue: p.blue,
                            aValue: p.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case Gr:
                return t.config.filters.reduce(LM, {});
            case Vr:
                return t.config.fontVariations.reduce(PM, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function Jv(e) {
        if (/^TRANSFORM_/.test(e)) return Kv;
        if (/^STYLE_/.test(e)) return Pa;
        if (/^GENERAL_/.test(e)) return La;
        if (/^PLUGIN_/.test(e)) return Yv
    }

    function MM(e, t) {
        return e === Pa ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function DM(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case Kv:
                return XM(e, t, r, i, s);
            case Pa:
                return QM(e, t, r, i, o, s);
            case La:
                return ZM(e, i, s);
            case Yv:
                {
                    let {
                        actionTypeId: f
                    } = i;
                    if (Tt(f)) return Aa(f)(u, t, i)
                }
        }
    }

    function XM(e, t, r, n, i) {
        let o = UM.map(a => {
                let u = Ma[a],
                    {
                        xValue: f = u.xValue,
                        yValue: p = u.yValue,
                        zValue: g = u.zValue,
                        xUnit: d = "",
                        yUnit: m = "",
                        zUnit: O = ""
                    } = t[a] || {};
                switch (a) {
                    case jt:
                        return `${aM}(${f}${d}, ${p}${m}, ${g}${O})`;
                    case zt:
                        return `${sM}(${f}${d}, ${p}${m}, ${g}${O})`;
                    case Kt:
                        return `${uM}(${f}${d}) ${cM}(${p}${m}) ${lM}(${g}${O})`;
                    case Dr:
                        return `${fM}(${f}${d}, ${p}${m})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        bt(e, pt, i), s(e, pt, o), WM(n, r) && s(e, Bn, dM)
    }

    function HM(e, t, r, n) {
        let i = (0, Yn.default)(t, (s, a, u) => `${s} ${u}(${a}${BM(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        bt(e, qr, n), o(e, qr, i)
    }

    function kM(e, t, r, n) {
        let i = (0, Yn.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        bt(e, Fr, n), o(e, Fr, i)
    }

    function WM({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === jt && n !== void 0 || e === zt && n !== void 0 || e === Kt && (t !== void 0 || r !== void 0)
    }

    function YM(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function $M({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = qa[t],
            o = n(e, i),
            s = zM.test(o) ? o : r[i],
            a = YM(KM, s).split(Mr);
        return {
            rValue: (0, tt.default)(parseInt(a[0], 10), 255),
            gValue: (0, tt.default)(parseInt(a[1], 10), 255),
            bValue: (0, tt.default)(parseInt(a[2], 10), 255),
            aValue: (0, tt.default)(parseFloat(a[3]), 1)
        }
    }

    function QM(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case Yt:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: f,
                        heightValue: p
                    } = r;f !== void 0 && (a === gt && (a = "px"), bt(e, Ke, o), s(e, Ke, f + a)),
                    p !== void 0 && (u === gt && (u = "px"), bt(e, Ye, o), s(e, Ye, p + u));
                    break
                }
            case Gr:
                {
                    HM(e, r, n.config, o);
                    break
                }
            case Vr:
                {
                    kM(e, r, n.config, o);
                    break
                }
            case $t:
            case Qt:
            case Zt:
                {
                    let a = qa[n.actionTypeId],
                        u = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        p = Math.round(r.bValue),
                        g = r.aValue;bt(e, a, o),
                    s(e, a, g >= 1 ? `rgb(${u},${f},${p})` : `rgba(${u},${f},${p},${g})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = n.config;bt(e, i, o),
                    s(e, i, r.value + a);
                    break
                }
        }
    }

    function ZM(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case Qn:
                {
                    let {
                        value: i
                    } = t.config;i === pM && Ve ? n(e, Kn, da) : n(e, Kn, i);
                    return
                }
        }
    }

    function bt(e, t, r) {
        if (!Ve) return;
        let n = Zv[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, Wt);
        if (!s) {
            o(e, Wt, n);
            return
        }
        let a = s.split(Mr).map(Qv);
        a.indexOf(n) === -1 && o(e, Wt, a.concat(n).join(Mr))
    }

    function ey(e, t, r) {
        if (!Ve) return;
        let n = Zv[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, Wt);
        !s || s.indexOf(n) === -1 || o(e, Wt, s.split(Mr).map(Qv).filter(a => a !== n).join(Mr))
    }

    function JM({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                f = i[u];
            f && kv({
                actionList: f,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            kv({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function kv({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Wv({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                Wv({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Wv({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            Tt(o) ? a = u => Sa(o)(u, i) : a = ty({
                effect: t1,
                actionTypeId: o,
                elementApi: r
            }), Fa({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function e1(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === Yt) {
            let {
                config: s
            } = t;
            s.widthUnit === gt && n(e, Ke, ""), s.heightUnit === gt && n(e, Ye, "")
        }
        i(e, Wt) && ty({
            effect: ey,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function t1(e, t, r) {
        let {
            setStyle: n
        } = r;
        ey(e, t, r), n(e, t, ""), t === pt && n(e, Bn, "")
    }

    function ry(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function r1(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {
                actionItems: p
            } = u, g = p[ry(p)], {
                config: d,
                actionTypeId: m
            } = g;
            i.id === g.id && (a = s + o);
            let O = Jv(m) === La ? 0 : d.duration;
            s += d.delay + O
        }), s > 0 ? Pr(a / s) : 0
    }

    function n1({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, $n.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: f
            }) => f.some(s))
        }), (0, $n.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function i1(e, {
        basedOn: t
    }) {
        return e === Ge.SCROLLING_IN_VIEW && (t === je.ELEMENT || t == null) || e === Ge.MOUSE_MOVE && t === je.ELEMENT
    }

    function o1(e, t) {
        return e + EM + t
    }

    function a1(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function s1(e, t) {
        return Ra(e && e.sort(), t && t.sort())
    }

    function u1(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Na + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Na + r + Na + n
    }
    var tt, Yn, jn, $n, jv, iM, oM, aM, sM, uM, cM, lM, fM, dM, pM, zn, qr, Fr, Ke, Ye, zv, gM, hM, Bv, vM, Uv, yM, Kn, Wt, gt, Mr, EM, Na, Kv, La, Pa, Yv, jt, zt, Kt, Dr, $v, Gr, Vr, Yt, $t, Qt, Zt, Qn, mM, Qv, qa, Zv, Wn, TM, bM, SM, Hv, CM, RM, LM, PM, qM, Ma, GM, VM, BM, UM, jM, zM, KM, ty, iy = ne(() => {
        "use strict";
        tt = Q(mv()), Yn = Q(Pv()), jn = Q(Dv()), $n = Q(Ft());
        Ae();
        Vv();
        ha();
        jv = Q(Ea());
        xa();
        Un();
        ({
            BACKGROUND: iM,
            TRANSFORM: oM,
            TRANSLATE_3D: aM,
            SCALE_3D: sM,
            ROTATE_X: uM,
            ROTATE_Y: cM,
            ROTATE_Z: lM,
            SKEW: fM,
            PRESERVE_3D: dM,
            FLEX: pM,
            OPACITY: zn,
            FILTER: qr,
            FONT_VARIATION_SETTINGS: Fr,
            WIDTH: Ke,
            HEIGHT: Ye,
            BACKGROUND_COLOR: zv,
            BORDER_COLOR: gM,
            COLOR: hM,
            CHILDREN: Bv,
            IMMEDIATE_CHILDREN: vM,
            SIBLINGS: Uv,
            PARENT: yM,
            DISPLAY: Kn,
            WILL_CHANGE: Wt,
            AUTO: gt,
            COMMA_DELIMITER: Mr,
            COLON_DELIMITER: EM,
            BAR_DELIMITER: Na,
            RENDER_TRANSFORM: Kv,
            RENDER_GENERAL: La,
            RENDER_STYLE: Pa,
            RENDER_PLUGIN: Yv
        } = ge), {
            TRANSFORM_MOVE: jt,
            TRANSFORM_SCALE: zt,
            TRANSFORM_ROTATE: Kt,
            TRANSFORM_SKEW: Dr,
            STYLE_OPACITY: $v,
            STYLE_FILTER: Gr,
            STYLE_FONT_VARIATION: Vr,
            STYLE_SIZE: Yt,
            STYLE_BACKGROUND_COLOR: $t,
            STYLE_BORDER: Qt,
            STYLE_TEXT_COLOR: Zt,
            GENERAL_DISPLAY: Qn,
            OBJECT_VALUE: mM
        } = Oe, Qv = e => e.trim(), qa = Object.freeze({
            [$t]: zv,
            [Qt]: gM,
            [Zt]: hM
        }), Zv = Object.freeze({
            [pt]: oM,
            [zv]: iM,
            [zn]: zn,
            [qr]: qr,
            [Ke]: Ke,
            [Ye]: Ye,
            [Fr]: Fr
        }), Wn = new Map;
        TM = 1;
        bM = 1;
        SM = (e, t) => e === t;
        Hv = /px/, CM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = GM[n.type]), r), e || {}), RM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = VM[n.type] || n.defaultValue || 0), r), e || {});
        LM = (e, t) => (t && (e[t.type] = t.value || 0), e), PM = (e, t) => (t && (e[t.type] = t.value || 0), e), qM = (e, t, r) => {
            if (Tt(e)) return Ia(e)(r, t);
            switch (e) {
                case Gr:
                    {
                        let n = (0, jn.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Vr:
                    {
                        let n = (0, jn.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Ma = {
            [jt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [zt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Kt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Dr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, GM = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), VM = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), BM = (e, t) => {
            let r = (0, jn.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, UM = Object.keys(Ma);
        jM = "\\(([^)]+)\\)", zM = /^rgb/, KM = RegExp(`rgba?${jM}`);
        ty = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case jt:
                case zt:
                case Kt:
                case Dr:
                    e(n, pt, r);
                    break;
                case Gr:
                    e(n, qr, r);
                    break;
                case Vr:
                    e(n, Fr, r);
                    break;
                case $v:
                    e(n, zn, r);
                    break;
                case Yt:
                    e(n, Ke, r), e(n, Ye, r);
                    break;
                case $t:
                case Qt:
                case Zt:
                    e(n, qa[t], r);
                    break;
                case Qn:
                    e(n, Kn, r);
                    break
            }
        }
    });
    var Ot = c(me => {
        "use strict";
        var Jt = en().default;
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        me.IX2VanillaUtils = me.IX2VanillaPlugins = me.IX2ElementsReducer = me.IX2Easings = me.IX2EasingUtils = me.IX2BrowserSupport = void 0;
        var c1 = Jt((Un(), Xe(Jh)));
        me.IX2BrowserSupport = c1;
        var l1 = Jt((ga(), Xe(Lr)));
        me.IX2Easings = l1;
        var f1 = Jt((ha(), Xe(av)));
        me.IX2EasingUtils = f1;
        var d1 = Jt((lv(), Xe(cv)));
        me.IX2ElementsReducer = d1;
        var p1 = Jt((xa(), Xe(yv)));
        me.IX2VanillaPlugins = p1;
        var g1 = Jt((iy(), Xe(ny)));
        me.IX2VanillaUtils = g1
    });
    var Jn, rt, h1, v1, y1, E1, m1, _1, Zn, oy, T1, I1, Da, b1, O1, A1, S1, ay, sy = ne(() => {
        "use strict";
        Ae();
        Jn = Q(Ot()), rt = Q(Ft()), {
            IX2_RAW_DATA_IMPORTED: h1,
            IX2_SESSION_STOPPED: v1,
            IX2_INSTANCE_ADDED: y1,
            IX2_INSTANCE_STARTED: E1,
            IX2_INSTANCE_REMOVED: m1,
            IX2_ANIMATION_FRAME_CHANGED: _1
        } = ce, {
            optimizeFloat: Zn,
            applyEasing: oy,
            createBezierEasing: T1
        } = Jn.IX2EasingUtils, {
            RENDER_GENERAL: I1
        } = ge, {
            getItemConfigByKey: Da,
            getRenderType: b1,
            getStyleProp: O1
        } = Jn.IX2VanillaUtils, A1 = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: f,
                skipMotion: p,
                skipToValue: g
            } = e, {
                parameters: d
            } = t.payload, m = Math.max(1 - s, .01), O = d[n];
            O == null && (m = 1, O = a);
            let E = Math.max(O, 0) || 0,
                b = Zn(E - r),
                v = p ? g : Zn(r + b * m),
                S = v * 100;
            if (v === r && e.current) return e;
            let I, w, R, x;
            for (let M = 0, {
                    length: G
                } = i; M < G; M++) {
                let {
                    keyframe: U,
                    actionItems: k
                } = i[M];
                if (M === 0 && (I = k[0]), S >= U) {
                    I = k[0];
                    let L = i[M + 1],
                        _ = L && S !== U;
                    w = _ ? L.actionItems[0] : null, _ && (R = U / 100, x = (L.keyframe - U) / 100)
                }
            }
            let F = {};
            if (I && !w)
                for (let M = 0, {
                        length: G
                    } = o; M < G; M++) {
                    let U = o[M];
                    F[U] = Da(u, U, I.config)
                } else if (I && w && R !== void 0 && x !== void 0) {
                    let M = (v - R) / x,
                        G = I.config.easing,
                        U = oy(G, M, f);
                    for (let k = 0, {
                            length: L
                        } = o; k < L; k++) {
                        let _ = o[k],
                            N = Da(u, _, I.config),
                            W = (Da(u, _, w.config) - N) * U + N;
                        F[_] = W
                    }
                }
            return (0, rt.merge)(e, {
                position: v,
                current: F
            })
        }, S1 = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: f,
                destinationKeys: p,
                pluginDuration: g,
                instanceDelay: d,
                customEasingFn: m,
                skipMotion: O
            } = e, E = u.config.easing, {
                duration: b,
                delay: v
            } = u.config;
            g != null && (b = g), v = d ? ? v, s === I1 ? b = 0 : (o || O) && (b = v = 0);
            let {
                now: S
            } = t.payload;
            if (r && n) {
                let I = S - (i + v);
                if (a) {
                    let M = S - i,
                        G = b + v,
                        U = Zn(Math.min(Math.max(0, M / G), 1));
                    e = (0, rt.set)(e, "verboseTimeElapsed", G * U)
                }
                if (I < 0) return e;
                let w = Zn(Math.min(Math.max(0, I / b), 1)),
                    R = oy(E, w, m),
                    x = {},
                    F = null;
                return p.length && (F = p.reduce((M, G) => {
                    let U = f[G],
                        k = parseFloat(n[G]) || 0,
                        _ = (parseFloat(U) - k) * R + k;
                    return M[G] = _, M
                }, {})), x.current = F, x.position = w, w === 1 && (x.active = !1, x.complete = !0), (0, rt.merge)(e, x)
            }
            return e
        }, ay = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case h1:
                    return t.payload.ixInstances || Object.freeze({});
                case v1:
                    return Object.freeze({});
                case y1:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            isCarrier: p,
                            origin: g,
                            destination: d,
                            immediate: m,
                            verbose: O,
                            continuous: E,
                            parameterId: b,
                            actionGroups: v,
                            smoothing: S,
                            restingValue: I,
                            pluginInstance: w,
                            pluginDuration: R,
                            instanceDelay: x,
                            skipMotion: F,
                            skipToValue: M
                        } = t.payload,
                        {
                            actionTypeId: G
                        } = i,
                        U = b1(G),
                        k = O1(U, G),
                        L = Object.keys(d).filter(N => d[N] != null && typeof d[N] != "string"),
                        {
                            easing: _
                        } = i.config;
                        return (0, rt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: g,
                            destination: d,
                            destinationKeys: L,
                            immediate: m,
                            verbose: O,
                            current: null,
                            actionItem: i,
                            actionTypeId: G,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            renderType: U,
                            isCarrier: p,
                            styleProp: k,
                            continuous: E,
                            parameterId: b,
                            actionGroups: v,
                            smoothing: S,
                            restingValue: I,
                            pluginInstance: w,
                            pluginDuration: R,
                            instanceDelay: x,
                            skipMotion: F,
                            skipToValue: M,
                            customEasingFn: Array.isArray(_) && _.length === 4 ? T1(_) : void 0
                        })
                    }
                case E1:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, rt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case m1:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== r && (n[a] = e[a])
                        }
                        return n
                    }
                case _1:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let s = n[o],
                                a = e[s],
                                u = a.continuous ? A1 : S1;
                            r = (0, rt.set)(r, s, u(a, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var x1, w1, C1, uy, cy = ne(() => {
        "use strict";
        Ae();
        ({
            IX2_RAW_DATA_IMPORTED: x1,
            IX2_SESSION_STOPPED: w1,
            IX2_PARAMETER_CHANGED: C1
        } = ce), uy = (e = {}, t) => {
            switch (t.type) {
                case x1:
                    return t.payload.ixParameters || {};
                case w1:
                    return {};
                case C1:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var dy = {};
    be(dy, {
        default: () => N1
    });
    var ly, fy, R1, N1, py = ne(() => {
        "use strict";
        ly = Q(Po());
        Of();
        Wf();
        Kf();
        fy = Q(Ot());
        sy();
        cy();
        ({
            ixElements: R1
        } = fy.IX2ElementsReducer), N1 = (0, ly.combineReducers)({
            ixData: bf,
            ixRequest: kf,
            ixSession: zf,
            ixElements: R1,
            ixInstances: ay,
            ixParameters: uy
        })
    });
    var hy = c((RW, gy) => {
        var L1 = lt(),
            P1 = le(),
            q1 = Je(),
            F1 = "[object String]";

        function M1(e) {
            return typeof e == "string" || !P1(e) && q1(e) && L1(e) == F1
        }
        gy.exports = M1
    });
    var yy = c((NW, vy) => {
        var D1 = sa(),
            G1 = D1("length");
        vy.exports = G1
    });
    var my = c((LW, Ey) => {
        var V1 = "\\ud800-\\udfff",
            B1 = "\\u0300-\\u036f",
            U1 = "\\ufe20-\\ufe2f",
            X1 = "\\u20d0-\\u20ff",
            H1 = B1 + U1 + X1,
            k1 = "\\ufe0e\\ufe0f",
            W1 = "\\u200d",
            j1 = RegExp("[" + W1 + V1 + H1 + k1 + "]");

        function z1(e) {
            return j1.test(e)
        }
        Ey.exports = z1
    });
    var wy = c((PW, xy) => {
        var Ty = "\\ud800-\\udfff",
            K1 = "\\u0300-\\u036f",
            Y1 = "\\ufe20-\\ufe2f",
            $1 = "\\u20d0-\\u20ff",
            Q1 = K1 + Y1 + $1,
            Z1 = "\\ufe0e\\ufe0f",
            J1 = "[" + Ty + "]",
            Ga = "[" + Q1 + "]",
            Va = "\\ud83c[\\udffb-\\udfff]",
            eD = "(?:" + Ga + "|" + Va + ")",
            Iy = "[^" + Ty + "]",
            by = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Oy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            tD = "\\u200d",
            Ay = eD + "?",
            Sy = "[" + Z1 + "]?",
            rD = "(?:" + tD + "(?:" + [Iy, by, Oy].join("|") + ")" + Sy + Ay + ")*",
            nD = Sy + Ay + rD,
            iD = "(?:" + [Iy + Ga + "?", Ga, by, Oy, J1].join("|") + ")",
            _y = RegExp(Va + "(?=" + Va + ")|" + iD + nD, "g");

        function oD(e) {
            for (var t = _y.lastIndex = 0; _y.test(e);) ++t;
            return t
        }
        xy.exports = oD
    });
    var Ry = c((qW, Cy) => {
        var aD = yy(),
            sD = my(),
            uD = wy();

        function cD(e) {
            return sD(e) ? uD(e) : aD(e)
        }
        Cy.exports = cD
    });
    var Ly = c((FW, Ny) => {
        var lD = Nn(),
            fD = Ln(),
            dD = mt(),
            pD = hy(),
            gD = Ry(),
            hD = "[object Map]",
            vD = "[object Set]";

        function yD(e) {
            if (e == null) return 0;
            if (dD(e)) return pD(e) ? gD(e) : e.length;
            var t = fD(e);
            return t == hD || t == vD ? e.size : lD(e).length
        }
        Ny.exports = yD
    });
    var qy = c((MW, Py) => {
        var ED = "Expected a function";

        function mD(e) {
            if (typeof e != "function") throw new TypeError(ED);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Py.exports = mD
    });
    var Ba = c((DW, Fy) => {
        var _D = ft(),
            TD = function() {
                try {
                    var e = _D(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Fy.exports = TD
    });
    var Ua = c((GW, Dy) => {
        var My = Ba();

        function ID(e, t, r) {
            t == "__proto__" && My ? My(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Dy.exports = ID
    });
    var Vy = c((VW, Gy) => {
        var bD = Ua(),
            OD = Tn(),
            AD = Object.prototype,
            SD = AD.hasOwnProperty;

        function xD(e, t, r) {
            var n = e[t];
            (!(SD.call(e, t) && OD(n, r)) || r === void 0 && !(t in e)) && bD(e, t, r)
        }
        Gy.exports = xD
    });
    var Xy = c((BW, Uy) => {
        var wD = Vy(),
            CD = Cr(),
            RD = xn(),
            By = ze(),
            ND = Ht();

        function LD(e, t, r, n) {
            if (!By(e)) return e;
            t = CD(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = ND(t[i]),
                    f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var p = a[u];
                    f = n ? n(p, u, a) : void 0, f === void 0 && (f = By(p) ? p : RD(t[i + 1]) ? [] : {})
                }
                wD(a, u, f), a = a[u]
            }
            return e
        }
        Uy.exports = LD
    });
    var ky = c((UW, Hy) => {
        var PD = Fn(),
            qD = Xy(),
            FD = Cr();

        function MD(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = PD(e, s);
                r(a, s) && qD(o, FD(s, e), a)
            }
            return o
        }
        Hy.exports = MD
    });
    var jy = c((XW, Wy) => {
        var DD = An(),
            GD = _o(),
            VD = jo(),
            BD = Wo(),
            UD = Object.getOwnPropertySymbols,
            XD = UD ? function(e) {
                for (var t = []; e;) DD(t, VD(e)), e = GD(e);
                return t
            } : BD;
        Wy.exports = XD
    });
    var Ky = c((HW, zy) => {
        function HD(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        zy.exports = HD
    });
    var $y = c((kW, Yy) => {
        var kD = ze(),
            WD = Rn(),
            jD = Ky(),
            zD = Object.prototype,
            KD = zD.hasOwnProperty;

        function YD(e) {
            if (!kD(e)) return jD(e);
            var t = WD(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !KD.call(e, n)) || r.push(n);
            return r
        }
        Yy.exports = YD
    });
    var Zy = c((WW, Qy) => {
        var $D = Ko(),
            QD = $y(),
            ZD = mt();

        function JD(e) {
            return ZD(e) ? $D(e, !0) : QD(e)
        }
        Qy.exports = JD
    });
    var eE = c((jW, Jy) => {
        var e2 = ko(),
            t2 = jy(),
            r2 = Zy();

        function n2(e) {
            return e2(e, r2, t2)
        }
        Jy.exports = n2
    });
    var rE = c((zW, tE) => {
        var i2 = aa(),
            o2 = dt(),
            a2 = ky(),
            s2 = eE();

        function u2(e, t) {
            if (e == null) return {};
            var r = i2(s2(e), function(n) {
                return [n]
            });
            return t = o2(t), a2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        tE.exports = u2
    });
    var iE = c((KW, nE) => {
        var c2 = dt(),
            l2 = qy(),
            f2 = rE();

        function d2(e, t) {
            return f2(e, l2(c2(t)))
        }
        nE.exports = d2
    });
    var aE = c((YW, oE) => {
        var p2 = Nn(),
            g2 = Ln(),
            h2 = br(),
            v2 = le(),
            y2 = mt(),
            E2 = Sn(),
            m2 = Rn(),
            _2 = Cn(),
            T2 = "[object Map]",
            I2 = "[object Set]",
            b2 = Object.prototype,
            O2 = b2.hasOwnProperty;

        function A2(e) {
            if (e == null) return !0;
            if (y2(e) && (v2(e) || typeof e == "string" || typeof e.splice == "function" || E2(e) || _2(e) || h2(e))) return !e.length;
            var t = g2(e);
            if (t == T2 || t == I2) return !e.size;
            if (m2(e)) return !p2(e).length;
            for (var r in e)
                if (O2.call(e, r)) return !1;
            return !0
        }
        oE.exports = A2
    });
    var uE = c(($W, sE) => {
        var S2 = Ua(),
            x2 = wa(),
            w2 = dt();

        function C2(e, t) {
            var r = {};
            return t = w2(t, 3), x2(e, function(n, i, o) {
                S2(r, i, t(n, i, o))
            }), r
        }
        sE.exports = C2
    });
    var lE = c((QW, cE) => {
        function R2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        cE.exports = R2
    });
    var dE = c((ZW, fE) => {
        var N2 = Dn();

        function L2(e) {
            return typeof e == "function" ? e : N2
        }
        fE.exports = L2
    });
    var gE = c((JW, pE) => {
        var P2 = lE(),
            q2 = Ca(),
            F2 = dE(),
            M2 = le();

        function D2(e, t) {
            var r = M2(e) ? P2 : q2;
            return r(e, F2(t))
        }
        pE.exports = D2
    });
    var vE = c((ej, hE) => {
        var G2 = De(),
            V2 = function() {
                return G2.Date.now()
            };
        hE.exports = V2
    });
    var mE = c((tj, EE) => {
        var B2 = ze(),
            Xa = vE(),
            yE = Gn(),
            U2 = "Expected a function",
            X2 = Math.max,
            H2 = Math.min;

        function k2(e, t, r) {
            var n, i, o, s, a, u, f = 0,
                p = !1,
                g = !1,
                d = !0;
            if (typeof e != "function") throw new TypeError(U2);
            t = yE(t) || 0, B2(r) && (p = !!r.leading, g = "maxWait" in r, o = g ? X2(yE(r.maxWait) || 0, t) : o, d = "trailing" in r ? !!r.trailing : d);

            function m(x) {
                var F = n,
                    M = i;
                return n = i = void 0, f = x, s = e.apply(M, F), s
            }

            function O(x) {
                return f = x, a = setTimeout(v, t), p ? m(x) : s
            }

            function E(x) {
                var F = x - u,
                    M = x - f,
                    G = t - F;
                return g ? H2(G, o - M) : G
            }

            function b(x) {
                var F = x - u,
                    M = x - f;
                return u === void 0 || F >= t || F < 0 || g && M >= o
            }

            function v() {
                var x = Xa();
                if (b(x)) return S(x);
                a = setTimeout(v, E(x))
            }

            function S(x) {
                return a = void 0, d && n ? m(x) : (n = i = void 0, s)
            }

            function I() {
                a !== void 0 && clearTimeout(a), f = 0, n = u = i = a = void 0
            }

            function w() {
                return a === void 0 ? s : S(Xa())
            }

            function R() {
                var x = Xa(),
                    F = b(x);
                if (n = arguments, i = this, u = x, F) {
                    if (a === void 0) return O(u);
                    if (g) return clearTimeout(a), a = setTimeout(v, t), m(u)
                }
                return a === void 0 && (a = setTimeout(v, t)), s
            }
            return R.cancel = I, R.flush = w, R
        }
        EE.exports = k2
    });
    var TE = c((rj, _E) => {
        var W2 = mE(),
            j2 = ze(),
            z2 = "Expected a function";

        function K2(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(z2);
            return j2(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), W2(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        _E.exports = K2
    });
    var bE = {};
    be(bE, {
        actionListPlaybackChanged: () => tr,
        animationFrameChanged: () => ti,
        clearRequested: () => mG,
        elementStateChanged: () => $a,
        eventListenerAdded: () => ei,
        eventStateChanged: () => za,
        instanceAdded: () => Ka,
        instanceRemoved: () => Ya,
        instanceStarted: () => ri,
        mediaQueriesDefined: () => Za,
        parameterChanged: () => er,
        playbackRequested: () => yG,
        previewRequested: () => vG,
        rawDataImported: () => Ha,
        sessionInitialized: () => ka,
        sessionStarted: () => Wa,
        sessionStopped: () => ja,
        stopRequested: () => EG,
        testFrameRendered: () => _G,
        viewportWidthChanged: () => Qa
    });
    var IE, Y2, $2, Q2, Z2, J2, eG, tG, rG, nG, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, gG, hG, Ha, ka, Wa, ja, vG, yG, EG, mG, ei, _G, za, ti, er, Ka, ri, Ya, $a, tr, Qa, Za, ni = ne(() => {
        "use strict";
        Ae();
        IE = Q(Ot()), {
            IX2_RAW_DATA_IMPORTED: Y2,
            IX2_SESSION_INITIALIZED: $2,
            IX2_SESSION_STARTED: Q2,
            IX2_SESSION_STOPPED: Z2,
            IX2_PREVIEW_REQUESTED: J2,
            IX2_PLAYBACK_REQUESTED: eG,
            IX2_STOP_REQUESTED: tG,
            IX2_CLEAR_REQUESTED: rG,
            IX2_EVENT_LISTENER_ADDED: nG,
            IX2_TEST_FRAME_RENDERED: iG,
            IX2_EVENT_STATE_CHANGED: oG,
            IX2_ANIMATION_FRAME_CHANGED: aG,
            IX2_PARAMETER_CHANGED: sG,
            IX2_INSTANCE_ADDED: uG,
            IX2_INSTANCE_STARTED: cG,
            IX2_INSTANCE_REMOVED: lG,
            IX2_ELEMENT_STATE_CHANGED: fG,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: dG,
            IX2_VIEWPORT_WIDTH_CHANGED: pG,
            IX2_MEDIA_QUERIES_DEFINED: gG
        } = ce, {
            reifyState: hG
        } = IE.IX2VanillaUtils, Ha = e => ({
            type: Y2,
            payload: { ...hG(e)
            }
        }), ka = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: $2,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Wa = () => ({
            type: Q2
        }), ja = () => ({
            type: Z2
        }), vG = ({
            rawData: e,
            defer: t
        }) => ({
            type: J2,
            payload: {
                defer: t,
                rawData: e
            }
        }), yG = ({
            actionTypeId: e = Oe.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: eG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), EG = e => ({
            type: tG,
            payload: {
                actionListId: e
            }
        }), mG = () => ({
            type: rG
        }), ei = (e, t) => ({
            type: nG,
            payload: {
                target: e,
                listenerParams: t
            }
        }), _G = (e = 1) => ({
            type: iG,
            payload: {
                step: e
            }
        }), za = (e, t) => ({
            type: oG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), ti = (e, t) => ({
            type: aG,
            payload: {
                now: e,
                parameters: t
            }
        }), er = (e, t) => ({
            type: sG,
            payload: {
                key: e,
                value: t
            }
        }), Ka = e => ({
            type: uG,
            payload: { ...e
            }
        }), ri = (e, t) => ({
            type: cG,
            payload: {
                instanceId: e,
                time: t
            }
        }), Ya = e => ({
            type: lG,
            payload: {
                instanceId: e
            }
        }), $a = (e, t, r, n) => ({
            type: fG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), tr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: dG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), Qa = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: pG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), Za = () => ({
            type: gG
        })
    });
    var _e = {};
    be(_e, {
        elementContains: () => ts,
        getChildElements: () => RG,
        getClosestElement: () => Br,
        getProperty: () => AG,
        getQuerySelector: () => es,
        getRefType: () => rs,
        getSiblingElements: () => NG,
        getStyle: () => OG,
        getValidDocument: () => xG,
        isSiblingNode: () => CG,
        matchSelector: () => SG,
        queryDocument: () => wG,
        setStyle: () => bG
    });

    function bG(e, t, r) {
        e.style[t] = r
    }

    function OG(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function AG(e, t) {
        return e[t]
    }

    function SG(e) {
        return t => t[Ja](e)
    }

    function es({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(OE) !== -1) {
                let n = e.split(OE),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(SE)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function xG(e) {
        return e == null || e === document.documentElement.getAttribute(SE) ? document : null
    }

    function wG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ts(e, t) {
        return e.contains(t)
    }

    function CG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function RG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function NG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function rs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? TG : IG : null
    }
    var AE, Ja, OE, TG, IG, SE, Br, xE = ne(() => {
        "use strict";
        AE = Q(Ot());
        Ae();
        ({
            ELEMENT_MATCHES: Ja
        } = AE.IX2BrowserSupport), {
            IX2_ID_DELIMITER: OE,
            HTML_ELEMENT: TG,
            PLAIN_OBJECT: IG,
            WF_PAGE: SE
        } = ge;
        Br = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[Ja] && r[Ja](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ns = c((oj, CE) => {
        var LG = ze(),
            wE = Object.create,
            PG = function() {
                function e() {}
                return function(t) {
                    if (!LG(t)) return {};
                    if (wE) return wE(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        CE.exports = PG
    });
    var ii = c((aj, RE) => {
        function qG() {}
        RE.exports = qG
    });
    var ai = c((sj, NE) => {
        var FG = ns(),
            MG = ii();

        function oi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        oi.prototype = FG(MG.prototype);
        oi.prototype.constructor = oi;
        NE.exports = oi
    });
    var FE = c((uj, qE) => {
        var LE = Lt(),
            DG = br(),
            GG = le(),
            PE = LE ? LE.isConcatSpreadable : void 0;

        function VG(e) {
            return GG(e) || DG(e) || !!(PE && e && e[PE])
        }
        qE.exports = VG
    });
    var GE = c((cj, DE) => {
        var BG = An(),
            UG = FE();

        function ME(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = UG), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? ME(a, t - 1, r, n, i) : BG(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        DE.exports = ME
    });
    var BE = c((lj, VE) => {
        var XG = GE();

        function HG(e) {
            var t = e == null ? 0 : e.length;
            return t ? XG(e, 1) : []
        }
        VE.exports = HG
    });
    var XE = c((fj, UE) => {
        function kG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        UE.exports = kG
    });
    var WE = c((dj, kE) => {
        var WG = XE(),
            HE = Math.max;

        function jG(e, t, r) {
            return t = HE(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = HE(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), WG(e, this, a)
                }
        }
        kE.exports = jG
    });
    var zE = c((pj, jE) => {
        function zG(e) {
            return function() {
                return e
            }
        }
        jE.exports = zG
    });
    var $E = c((gj, YE) => {
        var KG = zE(),
            KE = Ba(),
            YG = Dn(),
            $G = KE ? function(e, t) {
                return KE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: KG(t),
                    writable: !0
                })
            } : YG;
        YE.exports = $G
    });
    var ZE = c((hj, QE) => {
        var QG = 800,
            ZG = 16,
            JG = Date.now;

        function eV(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = JG(),
                    i = ZG - (n - r);
                if (r = n, i > 0) {
                    if (++t >= QG) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        QE.exports = eV
    });
    var em = c((vj, JE) => {
        var tV = $E(),
            rV = ZE(),
            nV = rV(tV);
        JE.exports = nV
    });
    var rm = c((yj, tm) => {
        var iV = BE(),
            oV = WE(),
            aV = em();

        function sV(e) {
            return aV(oV(e, void 0, iV), e + "")
        }
        tm.exports = sV
    });
    var om = c((Ej, im) => {
        var nm = Yo(),
            uV = nm && new nm;
        im.exports = uV
    });
    var sm = c((mj, am) => {
        function cV() {}
        am.exports = cV
    });
    var is = c((_j, cm) => {
        var um = om(),
            lV = sm(),
            fV = um ? function(e) {
                return um.get(e)
            } : lV;
        cm.exports = fV
    });
    var fm = c((Tj, lm) => {
        var dV = {};
        lm.exports = dV
    });
    var os = c((Ij, pm) => {
        var dm = fm(),
            pV = Object.prototype,
            gV = pV.hasOwnProperty;

        function hV(e) {
            for (var t = e.name + "", r = dm[t], n = gV.call(dm, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        pm.exports = hV
    });
    var ui = c((bj, gm) => {
        var vV = ns(),
            yV = ii(),
            EV = 4294967295;

        function si(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = EV, this.__views__ = []
        }
        si.prototype = vV(yV.prototype);
        si.prototype.constructor = si;
        gm.exports = si
    });
    var vm = c((Oj, hm) => {
        function mV(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        hm.exports = mV
    });
    var Em = c((Aj, ym) => {
        var _V = ui(),
            TV = ai(),
            IV = vm();

        function bV(e) {
            if (e instanceof _V) return e.clone();
            var t = new TV(e.__wrapped__, e.__chain__);
            return t.__actions__ = IV(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        ym.exports = bV
    });
    var Tm = c((Sj, _m) => {
        var OV = ui(),
            mm = ai(),
            AV = ii(),
            SV = le(),
            xV = Je(),
            wV = Em(),
            CV = Object.prototype,
            RV = CV.hasOwnProperty;

        function ci(e) {
            if (xV(e) && !SV(e) && !(e instanceof OV)) {
                if (e instanceof mm) return e;
                if (RV.call(e, "__wrapped__")) return wV(e)
            }
            return new mm(e)
        }
        ci.prototype = AV.prototype;
        ci.prototype.constructor = ci;
        _m.exports = ci
    });
    var bm = c((xj, Im) => {
        var NV = ui(),
            LV = is(),
            PV = os(),
            qV = Tm();

        function FV(e) {
            var t = PV(e),
                r = qV[t];
            if (typeof r != "function" || !(t in NV.prototype)) return !1;
            if (e === r) return !0;
            var n = LV(r);
            return !!n && e === n[0]
        }
        Im.exports = FV
    });
    var xm = c((wj, Sm) => {
        var Om = ai(),
            MV = rm(),
            DV = is(),
            as = os(),
            GV = le(),
            Am = bm(),
            VV = "Expected a function",
            BV = 8,
            UV = 32,
            XV = 128,
            HV = 256;

        function kV(e) {
            return MV(function(t) {
                var r = t.length,
                    n = r,
                    i = Om.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(VV);
                    if (i && !s && as(o) == "wrapper") var s = new Om([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = as(o),
                        u = a == "wrapper" ? DV(o) : void 0;
                    u && Am(u[0]) && u[1] == (XV | BV | UV | HV) && !u[4].length && u[9] == 1 ? s = s[as(u[0])].apply(s, u[3]) : s = o.length == 1 && Am(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var f = arguments,
                        p = f[0];
                    if (s && f.length == 1 && GV(p)) return s.plant(p).value();
                    for (var g = 0, d = r ? t[g].apply(this, f) : p; ++g < r;) d = t[g].call(this, d);
                    return d
                }
            })
        }
        Sm.exports = kV
    });
    var Cm = c((Cj, wm) => {
        var WV = xm(),
            jV = WV();
        wm.exports = jV
    });
    var Nm = c((Rj, Rm) => {
        function zV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Rm.exports = zV
    });
    var Pm = c((Nj, Lm) => {
        var KV = Nm(),
            ss = Gn();

        function YV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ss(r), r = r === r ? r : 0), t !== void 0 && (t = ss(t), t = t === t ? t : 0), KV(ss(e), t, r)
        }
        Lm.exports = YV
    });
    var Xm, Hm, km, Wm, $V, QV, ZV, JV, eB, tB, rB, nB, iB, oB, aB, sB, uB, cB, lB, jm, zm, fB, dB, pB, Km, gB, hB, Ym, vB, us, $m, qm, Fm, Qm, Xr, yB, $e, Zm, EB, xe, Be, Hr, Jm, cs, Mm, ls, mB, Ur, _B, TB, IB, e_, Dm, bB, Gm, OB, AB, SB, Vm, li, fi, Bm, Um, t_, r_ = ne(() => {
        "use strict";
        Xm = Q(Cm()), Hm = Q(Mn()), km = Q(Pm());
        Ae();
        fs();
        ni();
        Wm = Q(Ot()), {
            MOUSE_CLICK: $V,
            MOUSE_SECOND_CLICK: QV,
            MOUSE_DOWN: ZV,
            MOUSE_UP: JV,
            MOUSE_OVER: eB,
            MOUSE_OUT: tB,
            DROPDOWN_CLOSE: rB,
            DROPDOWN_OPEN: nB,
            SLIDER_ACTIVE: iB,
            SLIDER_INACTIVE: oB,
            TAB_ACTIVE: aB,
            TAB_INACTIVE: sB,
            NAVBAR_CLOSE: uB,
            NAVBAR_OPEN: cB,
            MOUSE_MOVE: lB,
            PAGE_SCROLL_DOWN: jm,
            SCROLL_INTO_VIEW: zm,
            SCROLL_OUT_OF_VIEW: fB,
            PAGE_SCROLL_UP: dB,
            SCROLLING_IN_VIEW: pB,
            PAGE_FINISH: Km,
            ECOMMERCE_CART_CLOSE: gB,
            ECOMMERCE_CART_OPEN: hB,
            PAGE_START: Ym,
            PAGE_SCROLL: vB
        } = Ge, us = "COMPONENT_ACTIVE", $m = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: qm
        } = ge, {
            getNamespacedParameterId: Fm
        } = Wm.IX2VanillaUtils, Qm = e => t => typeof t == "object" && e(t) ? !0 : t, Xr = Qm(({
            element: e,
            nativeEvent: t
        }) => e === t.target), yB = Qm(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), $e = (0, Xm.default)([Xr, yB]), Zm = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !mB[i.eventTypeId]) return i
            }
            return null
        }, EB = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!Zm(e, n)
        }, xe = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, f = Zm(e, u);
            return f && rr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + qm + n.split(qm)[1],
                actionListId: (0, Hm.default)(f, "action.config.actionListId")
            }), rr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), kr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, Be = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Hr = {
            handler: Be($e, xe)
        }, Jm = { ...Hr,
            types: [us, $m].join(" ")
        }, cs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Mm = "mouseover mouseout", ls = {
            types: cs
        }, mB = {
            PAGE_START: Ym,
            PAGE_FINISH: Km
        }, Ur = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, km.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), _B = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), TB = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, IB = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Ur(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return _B(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, e_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [us, $m].indexOf(n) !== -1 ? n === us : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Dm = e => (t, r) => {
            let n = {
                elementHovered: TB(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, bB = e => (t, r) => {
            let n = { ...r,
                elementVisible: IB(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Gm = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Ur(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: f
            } = s, p = f === "PX", g = i - o, d = Number((n / g).toFixed(2));
            if (r && r.percentTop === d) return r;
            let m = (p ? u : o * (u || 0) / 100) / g,
                O, E, b = 0;
            r && (O = d > r.percentTop, E = r.scrollingDown !== O, b = E ? d : r.anchorTop);
            let v = a === jm ? d >= b + m : d <= b - m,
                S = { ...r,
                    percentTop: d,
                    inBounds: v,
                    anchorTop: b,
                    scrollingDown: O
                };
            return r && v && (E || S.inBounds !== r.inBounds) && e(t, S) || S
        }, OB = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, AB = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, SB = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Vm = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, li = (e = !0) => ({ ...Jm,
            handler: Be(e ? $e : Xr, e_((t, r) => r.isActive ? Hr.handler(t, r) : r))
        }), fi = (e = !0) => ({ ...Jm,
            handler: Be(e ? $e : Xr, e_((t, r) => r.isActive ? r : Hr.handler(t, r)))
        }), Bm = { ...ls,
            handler: bB((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === zm === r ? (xe(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Um = .05, t_ = {
            [iB]: li(),
            [oB]: fi(),
            [nB]: li(),
            [rB]: fi(),
            [cB]: li(!1),
            [uB]: fi(!1),
            [aB]: li(),
            [sB]: fi(),
            [hB]: {
                types: "ecommerce-cart-open",
                handler: Be($e, xe)
            },
            [gB]: {
                types: "ecommerce-cart-close",
                handler: Be($e, xe)
            },
            [$V]: {
                types: "click",
                handler: Be($e, Vm((e, {
                    clickCount: t
                }) => {
                    EB(e) ? t === 1 && xe(e) : xe(e)
                }))
            },
            [QV]: {
                types: "click",
                handler: Be($e, Vm((e, {
                    clickCount: t
                }) => {
                    t === 2 && xe(e)
                }))
            },
            [ZV]: { ...Hr,
                types: "mousedown"
            },
            [JV]: { ...Hr,
                types: "mouseup"
            },
            [eB]: {
                types: Mm,
                handler: Be($e, Dm((e, t) => {
                    t.elementHovered && xe(e)
                }))
            },
            [tB]: {
                types: Mm,
                handler: Be($e, Dm((e, t) => {
                    t.elementHovered || xe(e)
                }))
            },
            [lB]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: f,
                        restingState: p = 0
                    } = r, {
                        clientX: g = o.clientX,
                        clientY: d = o.clientY,
                        pageX: m = o.pageX,
                        pageY: O = o.pageY
                    } = n, E = a === "X_AXIS", b = n.type === "mouseout", v = p / 100, S = u, I = !1;
                    switch (s) {
                        case je.VIEWPORT:
                            {
                                v = E ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case je.PAGE:
                            {
                                let {
                                    scrollLeft: w,
                                    scrollTop: R,
                                    scrollWidth: x,
                                    scrollHeight: F
                                } = Ur();v = E ? Math.min(w + m, x) / x : Math.min(R + O, F) / F;
                                break
                            }
                        case je.ELEMENT:
                        default:
                            {
                                S = Fm(i, u);
                                let w = n.type.indexOf("mouse") === 0;
                                if (w && $e({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let R = t.getBoundingClientRect(),
                                    {
                                        left: x,
                                        top: F,
                                        width: M,
                                        height: G
                                    } = R;
                                if (!w && !OB({
                                        left: g,
                                        top: d
                                    }, R)) break;I = !0,
                                v = E ? (g - x) / M : (d - F) / G;
                                break
                            }
                    }
                    return b && (v > 1 - Um || v < Um) && (v = Math.round(v)), (s !== je.ELEMENT || I || I !== o.elementHovered) && (v = f ? 1 - v : v, e.dispatch(er(S, v))), {
                        elementHovered: I,
                        clientX: g,
                        clientY: d,
                        pageX: m,
                        pageY: O
                    }
                }
            },
            [vB]: {
                types: cs,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = Ur(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(er(r, a))
                }
            },
            [pB]: {
                types: cs,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: f
                    } = Ur(), {
                        basedOn: p,
                        selectedAxis: g,
                        continuousParameterGroupId: d,
                        startsEntering: m,
                        startsExiting: O,
                        addEndOffset: E,
                        addStartOffset: b,
                        addOffsetValue: v = 0,
                        endOffsetValue: S = 0
                    } = r, I = g === "X_AXIS";
                    if (p === je.VIEWPORT) {
                        let w = I ? o / a : s / u;
                        return w !== i.scrollPercent && t.dispatch(er(d, w)), {
                            scrollPercent: w
                        }
                    } else {
                        let w = Fm(n, d),
                            R = e.getBoundingClientRect(),
                            x = (b ? v : 0) / 100,
                            F = (E ? S : 0) / 100;
                        x = m ? x : 1 - x, F = O ? F : 1 - F;
                        let M = R.top + Math.min(R.height * x, f),
                            U = R.top + R.height * F - M,
                            k = Math.min(f + U, u),
                            _ = Math.min(Math.max(0, f - M), k) / k;
                        return _ !== i.scrollPercent && t.dispatch(er(w, _)), {
                            scrollPercent: _
                        }
                    }
                }
            },
            [zm]: Bm,
            [fB]: Bm,
            [jm]: { ...ls,
                handler: Gm((e, t) => {
                    t.scrollingDown && xe(e)
                })
            },
            [dB]: { ...ls,
                handler: Gm((e, t) => {
                    t.scrollingDown || xe(e)
                })
            },
            [Km]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Be(Xr, AB(xe))
            },
            [Ym]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Be(Xr, SB(xe))
            }
        }
    });
    var m_ = {};
    be(m_, {
        observeRequests: () => jB,
        startActionGroup: () => kr,
        startEngine: () => yi,
        stopActionGroup: () => rr,
        stopAllActionGroups: () => v_,
        stopEngine: () => Ei
    });

    function jB(e) {
        At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: YB
        }), At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: $B
        }), At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: QB
        }), At({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: ZB
        })
    }

    function zB(e) {
        At({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Ei(e), d_({
                    store: e,
                    elementApi: _e
                }), yi({
                    store: e,
                    allowEvents: !0
                }), p_()
            }
        })
    }

    function KB(e, t) {
        let r = At({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function YB({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            yi({
                store: r,
                rawData: e,
                allowEvents: !0
            }), p_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function p_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function $B(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: f = !0
        } = e, {
            rawData: p
        } = e;
        if (n && i && p && a) {
            let g = p.actionLists[n];
            g && (p = FB({
                actionList: g,
                actionItemId: i,
                rawData: p
            }))
        }
        if (yi({
                store: t,
                rawData: p,
                allowEvents: s,
                testManual: u
            }), n && r === Oe.GENERAL_START_ACTION || ds(r)) {
            rr({
                store: t,
                actionListId: n
            }), h_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let g = kr({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: f
            });
            f && g && t.dispatch(tr({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function QB({
        actionListId: e
    }, t) {
        e ? rr({
            store: t,
            actionListId: e
        }) : v_({
            store: t
        }), Ei(t)
    }

    function ZB(e, t) {
        Ei(t), d_({
            store: t,
            elementApi: _e
        })
    }

    function yi({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Ha(t)), i.active || (e.dispatch(ka({
            hasBoundaryNodes: !!document.querySelector(pi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (i5(e), JB(), e.getState().ixSession.hasDefinedMediaQueries && zB(e)), e.dispatch(Wa()), e5(e, n))
    }

    function JB() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(n_) === -1 && (e.className += ` ${n_}`)
    }

    function e5(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(ti(n, o)), t ? KB(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ei(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(t5), VB(), e.dispatch(ja())
        }
    }

    function t5({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function r5({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: f,
            ixSession: p
        } = e.getState(), {
            events: g
        } = f, d = g[n], {
            eventTypeId: m
        } = d, O = {}, E = {}, b = [], {
            continuousActionGroups: v
        } = s, {
            id: S
        } = s;
        MB(m, i) && (S = DB(t, S));
        let I = p.hasBoundaryNodes && r ? Br(r, pi) : null;
        v.forEach(w => {
            let {
                keyframe: R,
                actionItems: x
            } = w;
            x.forEach(F => {
                let {
                    actionTypeId: M
                } = F, {
                    target: G
                } = F.config;
                if (!G) return;
                let U = G.boundaryMode ? I : null,
                    k = BB(G) + ps + M;
                if (E[k] = n5(E[k], R, F), !O[k]) {
                    O[k] = !0;
                    let {
                        config: L
                    } = F;
                    gi({
                        config: L,
                        event: d,
                        eventTarget: r,
                        elementRoot: U,
                        elementApi: _e
                    }).forEach(_ => {
                        b.push({
                            element: _,
                            key: k
                        })
                    })
                }
            })
        }), b.forEach(({
            element: w,
            key: R
        }) => {
            let x = E[R],
                F = (0, nt.default)(x, "[0].actionItems[0]", {}),
                {
                    actionTypeId: M
                } = F,
                G = vi(M) ? hs(M)(w, F) : null,
                U = gs({
                    element: w,
                    actionItem: F,
                    elementApi: _e
                }, G);
            vs({
                store: e,
                element: w,
                eventId: n,
                actionListId: o,
                actionItem: F,
                destination: U,
                continuous: !0,
                parameterId: S,
                actionGroups: x,
                smoothing: a,
                restingValue: u,
                pluginInstance: G
            })
        })
    }

    function n5(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function i5(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        g_(e), (0, nr.default)(r, (i, o) => {
            let s = t_[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            l5({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && a5(e)
    }

    function a5(e) {
        let t = () => {
            g_(e)
        };
        o5.forEach(r => {
            window.addEventListener(r, t), e.dispatch(ei(window, [r, t]))
        }), t()
    }

    function g_(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(Qa({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function l5({
        logic: e,
        store: t,
        events: r
    }) {
        f5(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = s5(r, c5);
        if (!(0, a_.default)(a)) return;
        (0, nr.default)(a, (g, d) => {
            let m = r[d],
                {
                    action: O,
                    id: E,
                    mediaQueries: b = o.mediaQueryKeys
                } = m,
                {
                    actionListId: v
                } = O.config;
            UB(b, o.mediaQueryKeys) || t.dispatch(Za()), O.actionTypeId === Oe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(I => {
                let {
                    continuousParameterGroupId: w
                } = I, R = (0, nt.default)(s, `${v}.continuousParameterGroups`, []), x = (0, o_.default)(R, ({
                    id: G
                }) => G === w), F = (I.smoothing || 0) / 100, M = (I.restingState || 0) / 100;
                x && g.forEach((G, U) => {
                    let k = E + ps + U;
                    r5({
                        store: t,
                        eventStateKey: k,
                        eventTarget: G,
                        eventId: E,
                        eventConfig: I,
                        actionListId: v,
                        parameterGroup: x,
                        smoothing: F,
                        restingValue: M
                    })
                })
            }), (O.actionTypeId === Oe.GENERAL_START_ACTION || ds(O.actionTypeId)) && h_({
                store: t,
                actionListId: v,
                eventId: E
            })
        });
        let u = g => {
                let {
                    ixSession: d
                } = t.getState();
                u5(a, (m, O, E) => {
                    let b = r[O],
                        v = d.eventState[E],
                        {
                            action: S,
                            mediaQueries: I = o.mediaQueryKeys
                        } = b;
                    if (!hi(I, d.mediaQueryKey)) return;
                    let w = (R = {}) => {
                        let x = i({
                            store: t,
                            element: m,
                            event: b,
                            eventConfig: R,
                            nativeEvent: g,
                            eventStateKey: E
                        }, v);
                        XB(x, v) || t.dispatch(za(E, x))
                    };
                    S.actionTypeId === Oe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(b.config) ? b.config : [b.config]).forEach(w) : w()
                })
            },
            f = (0, l_.default)(u, WB),
            p = ({
                target: g = document,
                types: d,
                throttle: m
            }) => {
                d.split(" ").filter(Boolean).forEach(O => {
                    let E = m ? f : u;
                    g.addEventListener(O, E), t.dispatch(ei(g, [O, E]))
                })
            };
        Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e)
    }

    function f5(e) {
        if (!kB) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = es(o);
            t[s] || (i === Ge.MOUSE_CLICK || i === Ge.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function h_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, nt.default)(u, "actionItemGroups[0].actionItems", []),
                p = (0, nt.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!hi(p, i.mediaQueryKey)) return;
            f.forEach(g => {
                let {
                    config: d,
                    actionTypeId: m
                } = g, O = d ? .target ? .useEventTarget === !0 && d ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : d, E = gi({
                    config: O,
                    event: a,
                    elementApi: _e
                }), b = vi(m);
                E.forEach(v => {
                    let S = b ? hs(m)(v, g) : null;
                    vs({
                        destination: gs({
                            element: v,
                            actionItem: g,
                            elementApi: _e
                        }, S),
                        immediate: !0,
                        store: e,
                        element: v,
                        eventId: r,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: S
                    })
                })
            })
        }
    }

    function v_({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, nr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                ys(r, e), i && e.dispatch(tr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function rr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? Br(r, pi) : null;
        (0, nr.default)(o, u => {
            let f = (0, nt.default)(u, "actionItem.config.target.boundaryMode"),
                p = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && p) {
                if (a && f && !ts(a, u.element)) return;
                ys(u, e), u.verbose && e.dispatch(tr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function kr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: f
        } = e.getState(), {
            events: p
        } = u, g = p[t] || {}, {
            mediaQueries: d = u.mediaQueryKeys
        } = g, m = (0, nt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: O,
            useFirstGroupAsInitialState: E
        } = m;
        if (!O || !O.length) return !1;
        o >= O.length && (0, nt.default)(g, "config.loop") && (o = 0), o === 0 && E && o++;
        let v = (o === 0 || o === 1 && E) && ds(g.action ? .actionTypeId) ? g.config.delay : void 0,
            S = (0, nt.default)(O, [o, "actionItems"], []);
        if (!S.length || !hi(d, f.mediaQueryKey)) return !1;
        let I = f.hasBoundaryNodes && r ? Br(r, pi) : null,
            w = LB(S),
            R = !1;
        return S.forEach((x, F) => {
            let {
                config: M,
                actionTypeId: G
            } = x, U = vi(G), {
                target: k
            } = M;
            if (!k) return;
            let L = k.boundaryMode ? I : null;
            gi({
                config: M,
                event: g,
                eventTarget: r,
                elementRoot: L,
                elementApi: _e
            }).forEach((N, D) => {
                let q = U ? hs(G)(N, x) : null,
                    W = U ? HB(G)(N, x) : null;
                R = !0;
                let H = w === F && D === 0,
                    ee = PB({
                        element: N,
                        actionItem: x
                    }),
                    we = gs({
                        element: N,
                        actionItem: x,
                        elementApi: _e
                    }, q);
                vs({
                    store: e,
                    element: N,
                    actionItem: x,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: H,
                    computedStyle: ee,
                    destination: we,
                    immediate: s,
                    verbose: a,
                    pluginInstance: q,
                    pluginDuration: W,
                    instanceDelay: v
                })
            })
        }), R
    }

    function vs(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: f,
            eventId: p
        } = n, g = !u, d = RB(), {
            ixElements: m,
            ixSession: O,
            ixData: E
        } = t.getState(), b = CB(m, i), {
            refState: v
        } = m[b] || {}, S = rs(i), I = O.reducedMotion && Mo[o.actionTypeId], w;
        if (I && u) switch (E.events[p] ? .eventTypeId) {
            case Ge.MOUSE_MOVE:
            case Ge.MOUSE_MOVE_IN_VIEWPORT:
                w = f;
                break;
            default:
                w = .5;
                break
        }
        let R = qB(i, v, r, o, _e, a);
        if (t.dispatch(Ka({
                instanceId: d,
                elementId: b,
                origin: R,
                refType: S,
                skipMotion: I,
                skipToValue: w,
                ...n
            })), y_(document.body, "ix2-animation-started", d), s) {
            d5(t, d);
            return
        }
        At({
            store: t,
            select: ({
                ixInstances: x
            }) => x[d],
            onChange: E_
        }), g && t.dispatch(ri(d, O.tick))
    }

    function ys(e, t) {
        y_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === f_ && GB(o, n, _e), t.dispatch(Ya(e.id))
    }

    function y_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function d5(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(ri(t, 0)), e.dispatch(ti(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        E_(n[t], e)
    }

    function E_(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: f,
            groupIndex: p,
            eventId: g,
            eventTarget: d,
            eventStateKey: m,
            actionListId: O,
            isCarrier: E,
            styleProp: b,
            verbose: v,
            pluginInstance: S
        } = e, {
            ixData: I,
            ixSession: w
        } = t.getState(), {
            events: R
        } = I, x = R[g] || {}, {
            mediaQueries: F = I.mediaQueryKeys
        } = x;
        if (hi(F, w.mediaQueryKey) && (n || r || i)) {
            if (f || u === wB && i) {
                t.dispatch($a(o, a, f, s));
                let {
                    ixElements: M
                } = t.getState(), {
                    ref: G,
                    refType: U,
                    refState: k
                } = M[o] || {}, L = k && k[a];
                (U === f_ || vi(a)) && NB(G, k, L, g, s, b, _e, u, S)
            }
            if (i) {
                if (E) {
                    let M = kr({
                        store: t,
                        eventId: g,
                        eventTarget: d,
                        eventStateKey: m,
                        actionListId: O,
                        groupIndex: p + 1,
                        verbose: v
                    });
                    v && !M && t.dispatch(tr({
                        actionListId: O,
                        isPlaying: !1
                    }))
                }
                ys(e, t)
            }
        }
    }
    var o_, nt, a_, s_, u_, c_, nr, l_, di, xB, ds, ps, pi, f_, wB, n_, gi, CB, gs, At, RB, NB, d_, LB, PB, qB, FB, MB, DB, hi, GB, VB, BB, UB, XB, vi, hs, HB, i_, kB, WB, o5, s5, u5, c5, fs = ne(() => {
        "use strict";
        o_ = Q(fa()), nt = Q(Mn()), a_ = Q(Ly()), s_ = Q(iE()), u_ = Q(aE()), c_ = Q(uE()), nr = Q(gE()), l_ = Q(TE());
        Ae();
        di = Q(Ot());
        ni();
        xE();
        r_();
        xB = Object.keys(gn), ds = e => xB.includes(e), {
            COLON_DELIMITER: ps,
            BOUNDARY_SELECTOR: pi,
            HTML_ELEMENT: f_,
            RENDER_GENERAL: wB,
            W_MOD_IX: n_
        } = ge, {
            getAffectedElements: gi,
            getElementId: CB,
            getDestinationValues: gs,
            observeStore: At,
            getInstanceId: RB,
            renderHTMLElement: NB,
            clearAllStyles: d_,
            getMaxDurationItemIndex: LB,
            getComputedStyle: PB,
            getInstanceOrigin: qB,
            reduceListToGroup: FB,
            shouldNamespaceEventParameter: MB,
            getNamespacedParameterId: DB,
            shouldAllowMediaQuery: hi,
            cleanupHTMLElement: GB,
            clearObjectCache: VB,
            stringifyTarget: BB,
            mediaQueriesEqual: UB,
            shallowEqual: XB
        } = di.IX2VanillaUtils, {
            isPluginType: vi,
            createPluginInstance: hs,
            getPluginDuration: HB
        } = di.IX2VanillaPlugins, i_ = navigator.userAgent, kB = i_.match(/iPad/i) || i_.match(/iPhone/), WB = 12;
        o5 = ["resize", "orientationchange"];
        s5 = (e, t) => (0, s_.default)((0, c_.default)(e, t), u_.default), u5 = (e, t) => {
            (0, nr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + ps + o;
                    t(i, n, s)
                })
            })
        }, c5 = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return gi({
                config: t,
                elementApi: _e
            })
        }
    });
    var T_ = c(it => {
        "use strict";
        var p5 = en().default,
            g5 = ru().default;
        Object.defineProperty(it, "__esModule", {
            value: !0
        });
        it.actions = void 0;
        it.destroy = __;
        it.init = m5;
        it.setEnv = E5;
        it.store = void 0;
        Ul();
        var h5 = Po(),
            v5 = g5((py(), Xe(dy))),
            Es = (fs(), Xe(m_)),
            y5 = p5((ni(), Xe(bE)));
        it.actions = y5;
        var ms = it.store = (0, h5.createStore)(v5.default);

        function E5(e) {
            e() && (0, Es.observeRequests)(ms)
        }

        function m5(e) {
            __(), (0, Es.startEngine)({
                store: ms,
                rawData: e,
                allowEvents: !0
            })
        }

        function __() {
            (0, Es.stopEngine)(ms)
        }
    });
    var A_ = c((Bj, O_) => {
        "use strict";
        var I_ = Qe(),
            b_ = T_();
        b_.setEnv(I_.env);
        I_.define("ix2", O_.exports = function() {
            return b_
        })
    });
    var x_ = c((Uj, S_) => {
        "use strict";
        var ir = Qe();
        ir.define("links", S_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = ir.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                f = /index\.(html|php)$/,
                p = /\/$/,
                g, d;
            r.ready = r.design = r.preview = m;

            function m() {
                i = o && ir.env("design"), d = ir.env("slug") || s.pathname || "", ir.scroll.off(E), g = [];
                for (var v = document.links, S = 0; S < v.length; ++S) O(v[S]);
                g.length && (ir.scroll.on(E), E())
            }

            function O(v) {
                if (!v.getAttribute("hreflang")) {
                    var S = i && v.getAttribute("href-disabled") || v.getAttribute("href");
                    if (a.href = S, !(S.indexOf(":") >= 0)) {
                        var I = e(v);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var w = e(a.hash);
                            w.length && g.push({
                                link: I,
                                sec: w,
                                active: !1
                            });
                            return
                        }
                        if (!(S === "#" || S === "")) {
                            var R = a.href === s.href || S === d || f.test(S) && p.test(d);
                            b(I, u, R)
                        }
                    }
                }
            }

            function E() {
                var v = n.scrollTop(),
                    S = n.height();
                t.each(g, function(I) {
                    if (!I.link.attr("hreflang")) {
                        var w = I.link,
                            R = I.sec,
                            x = R.offset().top,
                            F = R.outerHeight(),
                            M = S * .5,
                            G = R.is(":visible") && x + F - M >= v && x + M <= v + S;
                        I.active !== G && (I.active = G, b(w, u, G))
                    }
                })
            }

            function b(v, S, I) {
                var w = v.hasClass(S);
                I && w || !I && !w || (I ? v.addClass(S) : v.removeClass(S))
            }
            return r
        })
    });
    var C_ = c((Xj, w_) => {
        "use strict";
        var mi = Qe();
        mi.define("scroll", w_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = O() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(L) {
                    window.setTimeout(L, 15)
                },
                u = mi.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                p = 'a[href="#"]',
                g = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
                d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                m = document.createElement("style");
            m.appendChild(document.createTextNode(d));

            function O() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var E = /^#[a-zA-Z0-9][\w:.-]*$/;

            function b(L) {
                return E.test(L.hash) && L.host + L.pathname === r.host + r.pathname
            }
            let v = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function S() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || v.matches
            }

            function I(L, _) {
                var N;
                switch (_) {
                    case "add":
                        N = L.attr("tabindex"), N ? L.attr("data-wf-tabindex-swap", N) : L.attr("tabindex", "-1");
                        break;
                    case "remove":
                        N = L.attr("data-wf-tabindex-swap"), N ? (L.attr("tabindex", N), L.removeAttr("data-wf-tabindex-swap")) : L.removeAttr("tabindex");
                        break
                }
                L.toggleClass("wf-force-outline-none", _ === "add")
            }

            function w(L) {
                var _ = L.currentTarget;
                if (!(mi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))) {
                    var N = b(_) ? _.hash : "";
                    if (N !== "") {
                        var D = e(N);
                        D.length && (L && (L.preventDefault(), L.stopPropagation()), R(N, L), window.setTimeout(function() {
                            x(D, function() {
                                I(D, "add"), D.get(0).focus({
                                    preventScroll: !0
                                }), I(D, "remove")
                            })
                        }, L ? 0 : 300))
                    }
                }
            }

            function R(L) {
                if (r.hash !== L && n && n.pushState && !(mi.env.chrome && r.protocol === "file:")) {
                    var _ = n.state && n.state.hash;
                    _ !== L && n.pushState({
                        hash: L
                    }, "", L)
                }
            }

            function x(L, _) {
                var N = i.scrollTop(),
                    D = F(L);
                if (N !== D) {
                    var q = M(L, N, D),
                        W = Date.now(),
                        H = function() {
                            var ee = Date.now() - W;
                            window.scroll(0, G(N, D, ee, q)), ee <= q ? a(H) : typeof _ == "function" && _()
                        };
                    a(H)
                }
            }

            function F(L) {
                var _ = e(f),
                    N = _.css("position") === "fixed" ? _.outerHeight() : 0,
                    D = L.offset().top - N;
                if (L.data("scroll") === "mid") {
                    var q = i.height() - N,
                        W = L.outerHeight();
                    W < q && (D -= Math.round((q - W) / 2))
                }
                return D
            }

            function M(L, _, N) {
                if (S()) return 0;
                var D = 1;
                return s.add(L).each(function(q, W) {
                    var H = parseFloat(W.getAttribute("data-scroll-time"));
                    !isNaN(H) && H >= 0 && (D = H)
                }), (472.143 * Math.log(Math.abs(_ - N) + 125) - 2e3) * D
            }

            function G(L, _, N, D) {
                return N > D ? _ : L + (_ - L) * U(N / D)
            }

            function U(L) {
                return L < .5 ? 4 * L * L * L : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1
            }

            function k() {
                var {
                    WF_CLICK_EMPTY: L,
                    WF_CLICK_SCROLL: _
                } = t;
                o.on(_, g, w), o.on(L, p, function(N) {
                    N.preventDefault()
                }), document.head.insertBefore(m, document.head.firstChild)
            }
            return {
                ready: k
            }
        })
    });
    var N_ = c((Hj, R_) => {
        "use strict";
        var _5 = Qe();
        _5.define("touch", R_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, p;
                o.addEventListener("touchstart", g, !1), o.addEventListener("touchmove", d, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", O, !1), o.addEventListener("mousedown", g, !1), o.addEventListener("mousemove", d, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", O, !1);

                function g(b) {
                    var v = b.touches;
                    v && v.length > 1 || (s = !0, v ? (a = !0, f = v[0].clientX) : f = b.clientX, p = f)
                }

                function d(b) {
                    if (s) {
                        if (a && b.type === "mousemove") {
                            b.preventDefault(), b.stopPropagation();
                            return
                        }
                        var v = b.touches,
                            S = v ? v[0].clientX : b.clientX,
                            I = S - p;
                        p = S, Math.abs(I) > u && r && String(r()) === "" && (i("swipe", b, {
                            direction: I > 0 ? "right" : "left"
                        }), O())
                    }
                }

                function m(b) {
                    if (s && (s = !1, a && b.type === "mouseup")) {
                        b.preventDefault(), b.stopPropagation(), a = !1;
                        return
                    }
                }

                function O() {
                    s = !1
                }

                function E() {
                    o.removeEventListener("touchstart", g, !1), o.removeEventListener("touchmove", d, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", O, !1), o.removeEventListener("mousedown", g, !1), o.removeEventListener("mousemove", d, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", O, !1), o = null
                }
                this.destroy = E
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    As();
    Ss();
    Vs();
    Us();
    Hs();
    js();
    Js();
    A_();
    x_();
    C_();
    N_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "645a6eccda70d7f00b5cc9de",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "645a6eccda70d7f00b5cc9de",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683713966488
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "645a6eccda70d7f00b5cc9de",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "645a6eccda70d7f00b5cc9de",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683730659990
        },
        "e-5": {
            "id": "e-5",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1538126201273
        },
        "e-6": {
            "id": "e-6",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1538126201273
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c231dd7dda086383bac996",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c231dd7dda086383bac996",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690469177892
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64c231dd7dda086383bac996",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c231dd7dda086383bac996",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690473286894
        },
        "e-20": {
            "id": "e-20",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-container",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-container",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1596719677771
        },
        "e-22": {
            "id": "e-22",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-container",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-container",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37d",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1596719266460
        },
        "e-24": {
            "id": "e-24",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-container",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-container",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1596719677770
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button1",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button1",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37f",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1690535958156
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button1",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button1",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690535975376
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button1",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button1",
                "originalId": "64c231dd7dda086383bac996|59f25e90-1f5a-b4ed-2d71-3bf6f497f37f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690535975377
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64c231dd7dda086383bac996|bddff7f9-9efc-63ad-2095-9a242f1cc216",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c231dd7dda086383bac996|bddff7f9-9efc-63ad-2095-9a242f1cc216",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626248424830
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64c231dd7dda086383bac996|bddff7f9-9efc-63ad-2095-9a242f1cc216",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c231dd7dda086383bac996|bddff7f9-9efc-63ad-2095-9a242f1cc216",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626248424833
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".pre-footer-section",
                "originalId": "8ad6de98-baa5-06ec-ccc8-0de60fbe48ff",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".pre-footer-section",
                "originalId": "8ad6de98-baa5-06ec-ccc8-0de60fbe48ff",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-24-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1690539847763
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690552846528
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690552846528
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383888c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383888c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690553575080
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383888c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383888c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690553575080
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838892",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838892",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690553849816
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838892",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd123838892",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690553849816
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383889e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383889e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690554007483
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383889e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd12383889e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690554007483
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690554041130
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690554041130
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690554041130
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e5b0add2-a0b9-1a47-3795-2fd1238388ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690554041130
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbb66676e827566578e50b|99384d4b-c024-edc8-b6e2-bf11719a3dd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb66676e827566578e50b|99384d4b-c024-edc8-b6e2-bf11719a3dd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691072102319
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbb821c68248980e71647a|99384d4b-c024-edc8-b6e2-bf11719a3dd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb821c68248980e71647a|99384d4b-c024-edc8-b6e2-bf11719a3dd3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691072546162
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbb821c68248980e71647a|017d9147-cc3c-e770-a633-2787d94a1f5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb821c68248980e71647a|017d9147-cc3c-e770-a633-2787d94a1f5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691072546162
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbb910ecad715c926a97b4|26a341a2-39f3-af67-e028-00d401561fe1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb910ecad715c926a97b4|26a341a2-39f3-af67-e028-00d401561fe1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-26-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1640705379224
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64cbb910ecad715c926a97b4|ce539879-0191-1c30-42d3-4d2e03ed3524",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb910ecad715c926a97b4|ce539879-0191-1c30-42d3-4d2e03ed3524",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691080587405
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64cbb910ecad715c926a97b4|ce539879-0191-1c30-42d3-4d2e03ed3524",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb910ecad715c926a97b4|ce539879-0191-1c30-42d3-4d2e03ed3524",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691080587405
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".burger",
                "originalId": "64c231dd7dda086383bac996|573b5c35-016e-bdef-a7c1-f34b4dc16732",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".burger",
                "originalId": "64c231dd7dda086383bac996|573b5c35-016e-bdef-a7c1-f34b4dc16732",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-5-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1691142052965
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691142988371
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691142988372
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbdcf93aed21a8126e0df6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbdcf93aed21a8126e0df6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691489908049
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d105451bd28cee479c95cc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d105451bd28cee479c95cc",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691491213970
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbdf21762c3b665fd533e4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbdf21762c3b665fd533e4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691503794668
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbdf21762c3b665fd533e4|4c7ac5e0-2fc0-18e4-f7c1-ef3f7015923a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbdf21762c3b665fd533e4|4c7ac5e0-2fc0-18e4-f7c1-ef3f7015923a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691680464315
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64cbdf21762c3b665fd533e4|4c7ac5e0-2fc0-18e4-f7c1-ef3f7015923a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbdf21762c3b665fd533e4|4c7ac5e0-2fc0-18e4-f7c1-ef3f7015923a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691680464315
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d60953c62eddf432ab8dc9|a48764de-b4be-8298-c573-92d50a38a3eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d60953c62eddf432ab8dc9|a48764de-b4be-8298-c573-92d50a38a3eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-34-p",
                "smoothing": 0,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1690854680921
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d60953c62eddf432ab8dc9|aa8f0766-951c-390c-adc2-68e138fcae9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d60953c62eddf432ab8dc9|aa8f0766-951c-390c-adc2-68e138fcae9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-34-p",
                "smoothing": 0,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 100
            }],
            "createdOn": 1691764993027
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".bio-link-image",
                "originalId": "64cbdcf93aed21a8126e0df6|7cb5fb47-8e61-f6ff-8883-69f581324813",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".bio-link-image",
                "originalId": "64cbdcf93aed21a8126e0df6|7cb5fb47-8e61-f6ff-8883-69f581324813",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692198467393
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".bio-link-image",
                "originalId": "64cbdcf93aed21a8126e0df6|7cb5fb47-8e61-f6ff-8883-69f581324813",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".bio-link-image",
                "originalId": "64cbdcf93aed21a8126e0df6|7cb5fb47-8e61-f6ff-8883-69f581324813",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692198467394
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64cbb821c68248980e71647a|27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb821c68248980e71647a|27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694008194409
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64cbb821c68248980e71647a|27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64cbb821c68248980e71647a|27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694008194409
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ee0b857f3684eeea5ed277|635b0c08-f896-c27c-3036-9e6ac67cda06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ee0b857f3684eeea5ed277|635b0c08-f896-c27c-3036-9e6ac67cda06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-26-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1694076479901
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64ee0b857f3684eeea5ed277|635b0c08-f896-c27c-3036-9e6ac67cda1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ee0b857f3684eeea5ed277|635b0c08-f896-c27c-3036-9e6ac67cda1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694076479901
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64ee0b857f3684eeea5ed277|635b0c08-f896-c27c-3036-9e6ac67cda1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ee0b857f3684eeea5ed277|635b0c08-f896-c27c-3036-9e6ac67cda1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694076479901
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694077659383
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "27519d67-349d-c3d7-561b-d13e1ef060a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694077659384
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Cursor Effect",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "645a6eccda70d7f00b5cc9de|0ff116f3-2461-2e99-e8ff-b4f6bf246568"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "645a6eccda70d7f00b5cc9de|0ff116f3-2461-2e99-e8ff-b4f6bf246568"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "645a6eccda70d7f00b5cc9de|0ff116f3-2461-2e99-e8ff-b4f6bf246568"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683713970878
        },
        "a-2": {
            "id": "a-2",
            "title": "Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "645a6eccda70d7f00b5cc9de|ef0f5419-c1e2-bac6-7e99-9ffe46dc2fde"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "645a6eccda70d7f00b5cc9de|0ff116f3-2461-2e99-e8ff-b4f6bf246568"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "id": "645a6eccda70d7f00b5cc9de|ef0f5419-c1e2-bac6-7e99-9ffe46dc2fde"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 1200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "645a6eccda70d7f00b5cc9de|0ff116f3-2461-2e99-e8ff-b4f6bf246568"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683730664706
        },
        "a-3": {
            "id": "a-3",
            "title": "Burger Open - Desktop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "em",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-3-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-3-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "xValue": -14,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-3-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "xValue": 14,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-3-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "yValue": -8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "yValue": 8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-3-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "widthValue": 100,
                        "heightValue": 26,
                        "widthUnit": "%",
                        "heightUnit": "rem",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-3-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1538126204271
        },
        "a-4": {
            "id": "a-4",
            "title": "Burger Close - Desktop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-4-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-4-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1200,
                        "target": {
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "rem",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1538126204271
        },
        "a-8": {
            "id": "a-8",
            "title": "Blinking Constant",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c231dd7dda086383bac996|1e3da284-37c6-d85f-63eb-5702979b82a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "64c231dd7dda086383bac996|1e3da284-37c6-d85f-63eb-5702979b82a7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "64c231dd7dda086383bac996|1e3da284-37c6-d85f-63eb-5702979b82a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683713970878
        },
        "a-10": {
            "id": "a-10",
            "title": "Homepage Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c231dd7dda086383bac996|a203b9f7-d92f-c846-21be-aa29f2dfc386"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c231dd7dda086383bac996|a203b9f7-d92f-c846-21be-aa29f2dfc386"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c231dd7dda086383bac996|1897a435-2877-3e54-af63-ab39d51ea6d8"
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c231dd7dda086383bac996|1e3da284-37c6-d85f-63eb-5702979b82a7"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".gravity-logo",
                            "selectorGuids": ["1dcd08e1-d607-adef-9a68-414e793d75c0"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".burger",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 2000,
                        "target": {
                            "id": "64c231dd7dda086383bac996|a203b9f7-d92f-c846-21be-aa29f2dfc386"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "64c231dd7dda086383bac996|a203b9f7-d92f-c846-21be-aa29f2dfc386"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".burger",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".gravity-logo",
                            "selectorGuids": ["1dcd08e1-d607-adef-9a68-414e793d75c0"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "id": "64c231dd7dda086383bac996|1897a435-2877-3e54-af63-ab39d51ea6d8"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c231dd7dda086383bac996|1e3da284-37c6-d85f-63eb-5702979b82a7"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1690473401506
        },
        "a-14": {
            "id": "a-14",
            "title": "button1-hover-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button1",
                            "selectorGuids": ["f87734f6-dcd5-3173-0ef8-c576d476274d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 150,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1596719682492
        },
        "a-11": {
            "id": "a-11",
            "title": "button-move",
            "continuousParameterGroups": [{
                "id": "a-11-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": -15,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 15,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": -11,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": -13,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 15,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": -15,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 11,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "xValue": 13,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-11-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": -20,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": 12,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": -17,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": -12,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {},
                            "yValue": 17,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1596719249543
        },
        "a-16": {
            "id": "a-16",
            "title": "button1-hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button1",
                            "selectorGuids": ["f87734f6-dcd5-3173-0ef8-c576d476274d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button1",
                            "selectorGuids": ["f87734f6-dcd5-3173-0ef8-c576d476274d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 150,
                        "target": {},
                        "yValue": -60,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1596719682492
        },
        "a-22": {
            "id": "a-22",
            "title": "Move Text Down",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-wrapper",
                            "selectorGuids": ["8625ea33-ff66-2a65-bc70-5cc8960dec53"]
                        },
                        "yValue": -1.88,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626248432997
        },
        "a-23": {
            "id": "a-23",
            "title": "Move Text Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-wrapper",
                            "selectorGuids": ["8625ea33-ff66-2a65-bc70-5cc8960dec53"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626248432997
        },
        "a-24": {
            "id": "a-24",
            "title": "Prefooter Mouse Interaction",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".pre-footer-links-wrapper",
                                "selectorGuids": ["228e6eaa-ba4d-cbdc-ded1-657c4c196a09"]
                            },
                            "xValue": 13,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-24-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".pre-footer-links-wrapper",
                                "selectorGuids": ["228e6eaa-ba4d-cbdc-ded1-657c4c196a09"]
                            },
                            "xValue": -93,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-24-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1690539851854
        },
        "a-25": {
            "id": "a-25",
            "title": "Top",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".movement-inverse",
                            "selectorGuids": ["563161e5-1d7b-785d-bf38-b2ba0572de46"]
                        },
                        "yValue": 75,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".movement",
                            "selectorGuids": ["563161e5-1d7b-785d-bf38-b2ba0572de45"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["563161e5-1d7b-785d-bf38-b2ba0572de48"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".movement-inverse",
                            "selectorGuids": ["563161e5-1d7b-785d-bf38-b2ba0572de46"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".movement",
                            "selectorGuids": ["563161e5-1d7b-785d-bf38-b2ba0572de45"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["563161e5-1d7b-785d-bf38-b2ba0572de48"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1618511290728
        },
        "a-26": {
            "id": "a-26",
            "title": "scroll",
            "continuousParameterGroups": [{
                "id": "a-26-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-26-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column._1",
                                "selectorGuids": ["8558f12f-dfc5-f200-9d80-d79015a9b145", "8558f12f-dfc5-f200-9d80-d79015a9b148"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column._3",
                                "selectorGuids": ["8558f12f-dfc5-f200-9d80-d79015a9b145", "8558f12f-dfc5-f200-9d80-d79015a9b14a"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column._2",
                                "selectorGuids": ["8558f12f-dfc5-f200-9d80-d79015a9b145", "8558f12f-dfc5-f200-9d80-d79015a9b149"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-26-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column._1",
                                "selectorGuids": ["8558f12f-dfc5-f200-9d80-d79015a9b145", "8558f12f-dfc5-f200-9d80-d79015a9b148"]
                            },
                            "yValue": -45,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column._3",
                                "selectorGuids": ["8558f12f-dfc5-f200-9d80-d79015a9b145", "8558f12f-dfc5-f200-9d80-d79015a9b14a"]
                            },
                            "yValue": -45,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".column._2",
                                "selectorGuids": ["8558f12f-dfc5-f200-9d80-d79015a9b145", "8558f12f-dfc5-f200-9d80-d79015a9b149"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1640705382156
        },
        "a-5": {
            "id": "a-5",
            "title": "Sticky Burger",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ef"
                            },
                            "xValue": -13,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ef"
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ef"
                            },
                            "xValue": 13,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-5-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ef"
                            },
                            "yValue": -13,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-5-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ef"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "id": "297327a2-ff48-9ecf-0d41-5d54ccd6f3ef"
                            },
                            "yValue": 13,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1538387352014
        },
        "a-6": {
            "id": "a-6",
            "title": "Burger Open - Tablet/Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "xValue": -14,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "xValue": 14,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-6-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "yValue": -8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "yValue": 8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-13",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-6-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-6-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1538126204271
        },
        "a-7": {
            "id": "a-7",
            "title": "Burger Close - Tablet/Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-left",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e20"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".b2-middle-bar-right",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e21"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar3",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e22"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-7-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".b2-bar1",
                            "selectorGuids": ["dc6cb580-c32b-44ec-04c1-75f9c3812e1e"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-7-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menu-container",
                            "selectorGuids": ["f5f72c67-2f4d-1c6d-94ef-1b524df2ee38"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-7-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav__menu",
                            "selectorGuids": ["31484151-6241-0f82-a790-0583dd2f8018"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1538126204271
        },
        "a-32": {
            "id": "a-32",
            "title": "Roster Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".hero",
                            "selectorGuids": ["ef7060b4-7a82-e29e-7f53-55ad9dd98c26"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".hero",
                            "selectorGuids": ["ef7060b4-7a82-e29e-7f53-55ad9dd98c26"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1691489914112
        },
        "a-33": {
            "id": "a-33",
            "title": "Single Roster Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "selector": ".roster-single-job-title",
                            "selectorGuids": ["f1fef42f-7b79-5484-dbf0-39550aa389a0"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "selector": ".single-roster-title",
                            "selectorGuids": ["bc905b4a-1b4c-affb-59ed-e08353685239"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".roster-single-hero-section",
                            "selectorGuids": ["294ed127-a2c3-1191-a5b4-b335a9fde101"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "selector": ".single-roster-title",
                            "selectorGuids": ["bc905b4a-1b4c-affb-59ed-e08353685239"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "selector": ".roster-single-job-title",
                            "selectorGuids": ["f1fef42f-7b79-5484-dbf0-39550aa389a0"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".roster-single-hero-section",
                            "selectorGuids": ["294ed127-a2c3-1191-a5b4-b335a9fde101"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1691503800988
        },
        "a-34": {
            "id": "a-34",
            "title": "Horizontal Scroll",
            "continuousParameterGroups": [{
                "id": "a-34-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-34-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".mover",
                                "selectorGuids": ["d829fd31-d99e-289f-7c34-6278ee047d73"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-34-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".mover",
                                "selectorGuids": ["d829fd31-d99e-289f-7c34-6278ee047d73"]
                            },
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1690854692964
        },
        "a-35": {
            "id": "a-35",
            "title": "Roster Image Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-4",
                            "selectorGuids": ["2be88a8e-9e00-28d4-cd26-4b34240dd2f1"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "c7fc",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-4",
                            "selectorGuids": ["2be88a8e-9e00-28d4-cd26-4b34240dd2f1"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "c7fc",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692198473645
        },
        "a-36": {
            "id": "a-36",
            "title": "Roster Image Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-4",
                            "selectorGuids": ["2be88a8e-9e00-28d4-cd26-4b34240dd2f1"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "d660",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692198552993
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});