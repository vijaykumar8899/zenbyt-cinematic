(function(g) {
    var window = this;
    /*
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    'use strict';
    var Cfb = function(a) {
            a.mutedAutoplay = !1;
            a.endSeconds = NaN;
            a.limitedPlaybackDurationInSeconds = NaN;
            g.lQ(a)
        },
        Dfb = function(a) {
            g.Xo(a);
            for (var b = 0; b < a.Zf.length; b++) {
                var c = a.Zf[b],
                    d = a.sy[b];
                if (d !== c.version) return !0;
                if (!g.Uo(c) || c.ll)
                    if (c.ll || c.CZ !== g.Zo)(c.U0(c) || Dfb(c)) && c.V0(c), c.ll = !1, c.CZ = g.Zo;
                if (d !== c.version) return !0
            }
            return !1
        },
        Efb = function(a) {
            g.Xo(a);
            if (g.Uo(a))
                for (var b = 0; b < a.Zf.length; b++) g.Vo(a.Zf[b], a.Wm[b]);
            a.Zf.length = a.sy.length = a.Wm.length = 0;
            a.Yi && (a.Yi.length = a.Eu.length = 0)
        },
        Ffb = function(a, b, c) {
            function d(f) {
                e.Bz = f
            }
            var e = Object.create(g.a$a);
            c && (e.Ht = !0);
            e.Cm = a;
            e.schedule = b;
            a = {};
            e.TB = (a.notify = function() {
                return g.Rka(e)
            }, a.Gs = function() {
                if (e.Cm !== null) {
                    if (g.So) throw Error("Schedulers cannot synchronously execute watches while scheduling.");
                    e.ll = !1;
                    if (!e.qF || Dfb(e)) {
                        e.qF = !0;
                        var f = g.To(e);
                        try {
                            e.Bz(), e.Bz = g.$o, e.Cm(d)
                        } finally {
                            g.Wo(e, f)
                        }
                    }
                }
            }, a.wma = function() {
                return e.Bz()
            }, a.destroy = function() {
                if (e.Cm !== null || e.schedule !== null) Efb(e), e.Bz(), e.Cm = null, e.schedule = null, e.Bz = g.$o
            }, a[g.Yo] = e, a);
            return e.TB
        },
        Y3 = function(a, b) {
            a = g.Ro(a);
            try {
                return b()
            } finally {
                g.Ro(a)
            }
        },
        Gfb = function() {
            return {
                I: "svg",
                W: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    Gc: !0,
                    S: "ytp-svg-fill",
                    W: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        Hfb = function() {
            return {
                I: "svg",
                W: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 143 51",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    W: {
                        d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        "clip-rule": "evenodd",
                        d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
                        fill: "white",
                        "fill-rule": "evenodd"
                    }
                }]
            }
        },
        Ifb = function() {},
        Z3 = function(a, b) {
            for (; a.length > b;) a.pop()
        },
        Jfb = function(a) {
            a = Array(a);
            Z3(a, 0);
            return a
        },
        Kfb = function(a, b, c) {
            if (c == null) a.removeAttribute(b);
            else {
                var d = b.lastIndexOf("xml:", 0) === 0 ? "http://www.w3.org/XML/1998/namespace" : b.lastIndexOf("xlink:", 0) === 0 ? "http://www.w3.org/1999/xlink" : null;
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
            }
        },
        Mfb = function(a, b, c) {
            a = a.style;
            if (typeof c === "string") a.cssText = c;
            else {
                a.cssText = "";
                for (var d in c)
                    if (Lfb.call(c, d)) {
                        b = a;
                        var e = d,
                            f = c[d];
                        e.indexOf("-") >= 0 ? b.setProperty(e, f) : b[e] = f
                    }
            }
        },
        Nfb = function(a, b, c) {
            var d = typeof c;
            d === "object" || d === "function" ? a[b] = c : Kfb(a, b, c)
        },
        Ofb = function() {
            var a = new Ifb;
            a.__default = Nfb;
            a.style = Mfb;
            return a
        },
        Pfb = function(a, b, c, d) {
            (d[b] || d.__default)(a, b, c)
        },
        Qfb = function(a) {
            this.created = [];
            this.j = [];
            this.node = a
        },
        Rfb = function(a, b) {
            this.j = null;
            this.B = a;
            this.key = b;
            this.text = void 0
        },
        Sfb = function(a, b, c) {
            b = new Rfb(b, c);
            return a.__incrementalDOMData = b
        },
        $3 = function(a, b) {
            if (a.__incrementalDOMData) return a.__incrementalDOMData;
            var c = a.nodeType === 1 ? a.localName : a.nodeName,
                d = a.nodeType === 1 ? a.getAttribute("key") : null;
            b = Sfb(a, c, a.nodeType === 1 ? d || b : null);
            if (a.nodeType === 1 && (a = a.attributes, c = a.length)) {
                d = b.j || (b.j = Jfb(c * 2));
                for (var e = 0, f = 0; e < c; e += 1, f += 2) {
                    var h = a[e],
                        l = h.value;
                    d[f] = h.name;
                    d[f + 1] = l
                }
            }
            return b
        },
        Tfb = function(a, b, c, d, e) {
            return b == c && d == e
        },
        d4 = function(a) {
            for (var b = a4, c = b4(); c !== a;) {
                var d = c.nextSibling;
                b.removeChild(c);
                c4.j.push(c);
                c = d
            }
        },
        b4 = function() {
            return e4 ? e4.nextSibling : a4.firstChild
        },
        Ufb = function(a, b) {
            e4 = b4();
            var c;
            a: {
                if (c = e4) {
                    do {
                        var d = c,
                            e = a,
                            f = b,
                            h = $3(d, f);
                        if (f4(d, e, h.B, f, h.key)) break a
                    } while (b && (c = c.nextSibling))
                }
                c = null
            }
            c || (a === "#text" ? (a = g4.createTextNode(""), Sfb(a, "#text", null)) : (c = g4, d = a4, typeof a === "function" ? c = new a : c = (d = a === "svg" ? "http://www.w3.org/2000/svg" : a === "math" ? "http://www.w3.org/1998/Math/MathML" : d == null || $3(d).B === "foreignObject" ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), Sfb(c, a, b), a = c), c4.created.push(a), c = a);
            a = c;
            if (a !== e4) {
                if (h4.indexOf(a) >= 0)
                    for (b = a4, c = a.nextSibling,
                        d = e4; d !== null && d !== a;) e = d.nextSibling, b.insertBefore(d, c), d = e;
                else a4.insertBefore(a, e4);
                e4 = a
            }
        },
        Vfb = function(a, b) {
            Ufb(a, b);
            a4 = e4;
            e4 = null;
            return a4
        },
        Xfb = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = b.matches === void 0 ? Tfb : b.matches;
            return function(d, e, f) {
                var h = c4,
                    l = g4,
                    m = h4,
                    n = i4,
                    p = e4,
                    q = a4,
                    r = f4;
                g4 = d.ownerDocument;
                c4 = new Qfb(d);
                f4 = c;
                i4 = [];
                e4 = null;
                var t = a4 = d.parentNode,
                    u, x = Wfb.call(d);
                if ((u = x.nodeType === 11 || x.nodeType === 9 ? x.activeElement : null) && d.contains(u)) {
                    for (x = []; u !== t;) x.push(u), u = u.parentNode || (t ? u.host : null);
                    t = x
                } else t = [];
                h4 = t;
                try {
                    return a(d, e, f)
                } finally {
                    d = c4, j4 && d.j.length > 0 && j4(d.j), g4 = l, c4 = h, f4 = r, i4 = n, e4 = p, a4 = q, h4 = m
                }
            }
        },
        Yfb = function(a, b, c, d) {
            k4.push(Pfb);
            k4.push(a);
            k4.push(b);
            k4.push(c);
            k4.push(d)
        },
        Zfb = function(a) {
            Ufb("#text", null);
            var b = e4;
            var c = $3(b);
            if (c.text !== a) {
                c = c.text = a;
                for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
                b.data !== c && (b.data = c)
            }
        },
        m4 = function() {
            return {
                Jn: l4()
            }
        },
        $fb = function(a) {
            var b = a.component;
            var c = a.debugInstance;
            a = a.Cm;
            var d, e = (d = b.E7) != null ? d : b.name;
            n4.push({
                name: c ? e + " (" + c + ")" : e,
                KA: !!b.KA
            });
            b = a();
            n4.pop();
            return b
        },
        l4 = function() {
            return n4.slice()
        },
        o4 = function() {
            var a = n4[n4.length - 1];
            return a ? a.KA || !1 : !1
        },
        p4 = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = n4.length;
            b.stack && (n4 = [].concat(g.w(b.stack)));
            try {
                return a()
            } catch (d) {
                throw agb(d), d;
            } finally {
                a = n4.length - c, a > 0 && n4.splice(-a)
            }
        },
        agb = function(a) {
            var b = n4;
            if (b.length !== 0 && !a.Jn) {
                var c = b.slice(-20).reverse().map(function(d) {
                    return d.name
                }).join(" > ");
                c = a.message + "\n\nComponent stack: " + c;
                try {
                    a.Jn = b.slice(), q4.S7 && (a.stack && (a.stack = a.stack.replace(a.message, c)), a.message = c)
                } catch (d) {}
            }
        },
        s4 = function(a) {
            var b = r4;
            if (b && b !== bgb && !b[cgb]) {
                var c = l4();
                b.xE || (b.xE = []);
                b.xE.push(function() {
                    return void p4(function() {
                        return void a()
                    }, {
                        stack: c
                    })
                })
            }
        },
        egb = function(a) {
            var b = r4;
            b && !b.Ma && (s4(function() {
                return void dgb(a)
            }), a.parent = b)
        },
        fgb = function(a) {
            a.xE && (Y3(g.b$a, function() {
                for (var b = g.v(a.xE), c = b.next(); !c.done; c = b.next()) c = c.value, c()
            }), a.xE.length = 0)
        },
        dgb = function(a) {
            if (!a.Ma) {
                a.Ma = !0;
                var b;
                (b = a[Symbol.dispose]) == null || b.call(a);
                delete a.parent;
                fgb(a)
            }
        },
        t4 = function(a, b) {
            var c = r4;
            r4 = a;
            try {
                return b()
            } finally {
                r4 = c
            }
        },
        u4 = function(a) {
            var b = !!r4,
                c = {};
            (b === void 0 || b) && egb(c);
            t4(c, function() {
                return void a(c)
            });
            return function() {
                return void dgb(c)
            }
        },
        ggb = function(a) {
            for (var b = g.v(a), c = b.next(); !c.done; c = b.next()) c = c.value, a.delete(c), v4(c)
        },
        hgb = function() {
            Efb(this);
            w4.delete(this);
            dgb(this)
        },
        igb = function(a) {
            a.Ma || w4.add(a)
        },
        jgb = function(a) {
            return g.J(function(b) {
                if (b.j == 1) return a.Ma ? b.return() : g.G(b, Promise.resolve(), 2);
                v4(a);
                g.wa(b)
            })
        },
        v4 = function(a) {
            if (a.IS !== null && !a.Ma) {
                if (g.So) throw Error("Schedulers cannot synchronously execute effects while scheduling.");
                a.ll = !1;
                if (!a.qF || Dfb(a)) {
                    a.qF = !0;
                    kgb++;
                    fgb(a);
                    var b = r4;
                    r4 = a;
                    var c = g.To(a);
                    try {
                        p4(a.IS, {
                            stack: a.Jn
                        })
                    } finally {
                        g.Wo(a, c), r4 = b
                    }
                }
            }
        },
        lgb = function(a) {
            for (var b = g.v(a), c = b.next(); !c.done; c = b.next()) c = c.value, a.delete(c), c.Gs()
        },
        mgb = function(a) {
            a.Ma || x4.add(a)
        },
        ngb = function(a) {
            return g.J(function(b) {
                if (b.j == 1) return a.Ma ? b.return() : g.G(b, Promise.resolve(), 2);
                a.Gs();
                g.wa(b)
            })
        },
        pgb = function(a, b, c) {
            function d() {
                return void p4(b, {
                    stack: e
                })
            }
            ogb++;
            var e = l4(),
                f = Ffb(function() {
                    f.Ma || (kgb++, fgb(f), t4(f, d))
                }, function() {
                    return void a(f)
                }, c === void 0 ? !1 : c);
            f.wZ = !0;
            egb(f);
            f[Symbol.dispose] = function() {
                f.destroy();
                x4.delete(f)
            };
            return f
        },
        qgb = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            q4.RM ? (ogb++, b = Object.create(b), b.Jn = l4(), b.IS = a, egb(b), a = b) : a = pgb(c, a, d);
            return a
        },
        sgb = function(a) {
            a = qgb(a, rgb, ngb);
            q4.RM ? jgb(a) : ngb(a)
        },
        vgb = function(a, b, c) {
            if (Object.hasOwnProperty.call(tgb, a) && (a = tgb[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
                for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
                    var l = a[f],
                        m = l.Ci;
                    if (!m) return l.zd;
                    d === null && (d = {});
                    m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
                    if (m === l.Li) return l.zd;
                    m == null && (e = !0)
                }
                if (e) return null
            }
            b = ugb[b];
            return typeof b === "number" ? b : null
        },
        xgb = function(a, b, c) {
            if (c === null || c === void 0) return c;
            var d = vgb(a.tagName.toLowerCase(), b, function() {
                var h;
                (h = q4.handleError) == null || h.call(q4, a.tagName.toLowerCase(), Error("Contingent attribute/property lookups are not supported."), m4())
            });
            if (d === null) return c;
            d = wgb[d];
            var e;
            if ((e = d.Au) == null ? 0 : e.call(d, c)) {
                if (d.Us) return d.Us(c);
                var f;
                (f = q4.handleError) == null || f.call(q4, a.tagName.toLowerCase(), Error("Value Handler's unwrap function does not exist."), m4())
            }
            return d.Dr ? d.Dr(a.tagName, b, String(c)) : c
        },
        zgb = function(a) {
            function b(d, e, f) {
                g.Gl(d, ygb);
                for (var h = Math.min(e.length - f, d.length), l = 0; l < h; l++)
                    if (d[l] !== ygb(e[f + l])) return !1;
                return !0
            }
            a = String(a);
            for (var c = 0;
                (c = a.indexOf("<", c)) != -1;) {
                if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
                c += 1
            }
            return a
        },
        ygb = function(a) {
            return "A" <= a && a <= "Z" ? a.toLowerCase() : a
        },
        y4 = function(a, b, c) {
            if (c === !1 && Agb.has(b)) Kfb(a, b, null);
            else if (b !== "idomKey" && b !== "skip" && b !== "skipchildren" && b !== "children" && b !== "el") {
                if (b.startsWith("on"))
                    if (b[2] === ":") {
                        if (c === void 0 || c === null) {
                            var d;
                            (d = q4.handleError) == null || d.call(q4, a.tagName, Error("The " + b + " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."), {
                                Jn: l4()
                            });
                            a[b] = void 0;
                            return
                        }
                        if (typeof c !== "object" || c === null) throw Error("Expected " + b + " to be an EventHandler but its type was: " + (typeof c +
                            ". Event handlers must be created using useHandler."));
                        if (typeof c.bY !== "function") throw Error("Expected the event handler for " + b + " to have a 'getFn' property but its keys were: " + (Object.keys(c) + ". Event handlers must be created using useHandler."));
                        var e = c.bY(0),
                            f = b.slice(3);
                        if ((d = o4()) && a["on" + f] === void 0) a.addEventListener(f, e), s4(function() {
                            return void a.removeEventListener(f, e)
                        });
                        else if (d || !Bgb.includes(f)) a["on" + f] = e
                    } else {
                        Cgb(a, b, c);
                        return
                    }
                else if (b.startsWith("data-") && typeof c === "string") try {
                    c = zgb(c)
                } catch (h) {
                    c = "zSoyz"
                }
                typeof c !== "function" || a._disposeEffects != null ? (q4.R7 && (c = xgb(a, b, c)), b === "style" ? Dgb(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : Cgb(a, b, c)) : (a._signalProps || (a._signalProps = []), a._signalValues || (a._signalValues = []), a._signalProps.push(b))
            }
        },
        Egb = function(a, b, c) {
            c = (c === void 0 ? {} : c).KA;
            if (b == null ? 0 : b.el) {
                var d = b.el;
                if (typeof d === "function") d(a);
                else {
                    var e;
                    (e = d.Bba) == null || e.call(d, a);
                    a._disposeRef || (a._disposeRef = function() {
                        var f;
                        (f = d.qca) == null || f.call(d);
                        delete a._disposeRef
                    }, c && s4(function() {
                        var f;
                        return void((f = a._disposeRef) == null ? void 0 : f.call(a))
                    }))
                }
            }
        },
        z4 = function(a) {
            this.props = a;
            this.C = !1
        },
        Fgb = function() {
            if (o4()) throw Error("Reactive components are not allowed to use useState or other memoization based hooks.");
            return A4
        },
        B4 = function(a) {
            z4.call(this, a);
            var b = this;
            this.uA = [];
            this.D = 0;
            this.G = u4(function(c) {
                b.rJ = c;
                s4(function() {
                    Ggb(b, b.el)
                })
            })
        },
        Ggb = function(a, b) {
            if (!a.C && b) {
                a.C = !0;
                try {
                    a.oJ()
                } catch (e) {
                    var c, d;
                    (d = q4.handleError) == null || d.call(q4, (c = a.j) == null ? void 0 : c.qt, e, {
                        Jn: l4()
                    })
                }
                C4.oJ(a);
                a.el = null;
                b.__instance && delete b.__instance
            }
        },
        Hgb = function(a, b) {
            var c = g.Fa.apply(2, arguments),
                d;
            b = (d = b) != null ? d : {};
            d = {};
            return d.type = a, d.props = b, d.children = c, d[D4] = !0, d
        },
        E4 = function(a) {
            return a.children
        },
        G4 = function(a, b) {
            var c = F4;
            F4 = a;
            try {
                return b()
            } finally {
                F4 = c
            }
        },
        Jgb = function(a) {
            a = qgb(a, Igb, mgb, !0);
            q4.RM ? v4(a) : a.Gs()
        },
        Lgb = function(a) {
            a = qgb(a, Kgb, mgb);
            q4.RM ? v4(a) : a.Gs()
        },
        H4 = function() {
            return document.createTextNode("")
        },
        I4 = function(a) {
            a = document.createTextNode(String(a));
            a._isSignalTextNode = !0;
            return a
        },
        J4 = function(a) {
            a = typeof a;
            return a === "string" || a === "number" || a === "boolean"
        },
        K4 = function(a) {
            return a instanceof g.md || a instanceof g.qd || a instanceof g.xd || !1
        },
        Mgb = function(a, b) {
            a.parentElement && a.parentElement.replaceChild(b, a);
            return b
        },
        Ngb = function(a, b) {
            a.textContent !== String(b) && (a.textContent = String(b));
            return a
        },
        L4 = function(a, b) {
            var c = a[0].parentElement;
            if (c)
                if (a[0].previousSibling || a[a.length - 1].nextSibling) {
                    c.insertBefore(b, a[0]);
                    for (var d = a.length - 1; d >= 0; d--) c.removeChild(a[d])
                } else c.textContent = "", c.appendChild(b);
            return b
        },
        Ogb = function(a, b) {
            if (a[0].parentElement)
                for (var c = a[0].parentElement, d = b.length, e = a.length, f = d, h = 0, l = 0, m = a[e - 1].nextSibling, n = null; h < e || l < f;)
                    if (a[h] === b[l]) h++, l++;
                    else {
                        for (; a[e - 1] === b[f - 1];) e--, f--;
                        if (e === h)
                            for (var p = f < d ? l ? b[l - 1].nextSibling : b[f - l] : m; l < f;) c.insertBefore(b[l++], p);
                        else if (f === l)
                            for (; h < e;) p = a[h], n && n.has(p) || c.removeChild(p), h++;
                        else if (a[h] === b[f - 1] && b[l] === a[e - 1]) p = a[--e].nextSibling, c.insertBefore(b[l++], a[h++].nextSibling), c.insertBefore(b[--f], p), a[e] = b[f];
                        else {
                            if (!n)
                                for (n = new Map, p = l; p < f;) n.set(b[p], p++);
                            p = n.get(a[h]);
                            if (p == null) c.removeChild(a[h]), h++;
                            else if (l < p && p < f) {
                                for (var q = h, r = 1, t = void 0; ++q < e && q < f && (t = n.get(a[q])) != null && t === p +
                                    r;) r++;
                                if (r > p - l)
                                    for (q = a[h]; l < p;) c.insertBefore(b[l++], q);
                                else c.replaceChild(b[l++], a[h++])
                            } else h++
                        }
                    }
            return b
        },
        M4 = function(a) {
            return g.Va(a) ? "nodeType" in a : !1
        },
        Rgb = function(a) {
            var b = {}.pma;
            var c = Pgb();
            (b ? Jgb : Lgb)(function() {
                var d = c[0],
                    e = c.Bm,
                    f = G4(N4, a);
                d = Qgb(d, f, c);
                Array.isArray(d) || (c.Bm = [d]);
                f = c.Bm;
                if (e && (!Array.isArray(e) || e.length !== 0)) {
                    e = Array.isArray(e) ? e[0] : e;
                    var h = e[O4],
                        l = e._disposeEffects;
                    e._disposeEffects = void 0;
                    e = Array.isArray(f) ? f[0] : f;
                    e[O4] = h;
                    e[O4] && (e[O4].D_ = e === f ? 1 : f.length);
                    e._disposeEffects = l
                }
                c[0] = d
            });
            return c
        },
        Qgb = function(a, b, c) {
            for (; typeof b === "function";) b = b();
            if (b != null && b[D4]) {
                var d, e, f;
                (f = q4.handleError) == null || f.call(q4, (d = b.type) == null ? void 0 : d.qt, Error("Encountered a VNode when only real nodes are expected. Tag name: " + ((e = b.type) == null ? void 0 : e.qt)), m4())
            }
            if (a == null) return b == null ? H4() : J4(b) ? I4(b) : K4(b) ? I4(b.toString()) : M4(b) ? b : b.length === 0 ? H4() : P4(b, c);
            if (M4(a)) {
                if (b == null) return Mgb(a, H4());
                if (J4(b)) return Ngb(a, b);
                if (K4(b)) return Ngb(a, b.toString());
                if (M4(b)) return Mgb(a, b);
                if (b.length === 0) return Mgb(a, H4());
                b = P4(b, c);
                Ogb([a], c.Bm);
                return b
            }
            a =
                Q4(a);
            if (b == null) return L4(a, H4());
            if (J4(b)) return L4(a, I4(b));
            if (K4(b)) return L4(a, I4(b.toString()));
            if (M4(b)) return Ogb(a, [b])[0];
            if (b.length === 0) return L4(a, H4());
            b = P4(b, c);
            Ogb(a, c.Bm);
            return b
        },
        Q4 = function(a, b, c) {
            return Sgb(a, b != null ? b : [], c === void 0 ? !1 : c)
        },
        P4 = function(a, b) {
            var c = Q4(a, void 0, !0);
            if (c.length === 0) return H4();
            b.Bm = c;
            return a
        },
        Sgb = function(a, b, c, d, e) {
            b = b === void 0 ? [] : b;
            c = c === void 0 ? !1 : c;
            e = e === void 0 ? -1 : e;
            if (a == null) return b;
            J4(a) && (a = I4(a), d && c && (d[e] = a));
            K4(a) && (a = I4(a.toString()), d && c && (d[e] = a));
            if (M4(a)) return Tgb(b, a);
            if (Array.isArray(a)) {
                for (d = 0; d < a.length; d++) Sgb(a[d], b, c, a, d);
                return b
            }
            if (typeof a === "function") return a = Rgb(a)[0], d && c && (d[e] = a), Tgb(b, a);
            if (a != null && a[D4]) {
                var f = a;
                a = G4(N4, function() {
                    return F4.apply(null, [f.type, f.props].concat(g.w(f.children)))
                });
                return Sgb(a, b, c)
            }
            var h;
            (h = q4.handleError) == null || h.call(q4, "unknown", Error("Unrecognized JSXResult type in flattening."), m4());
            return b
        },
        Pgb = function(a) {
            var b = [];
            if (!a) return b.Bm = [], b;
            b[0] = P4(a, b);
            return b
        },
        Tgb = function(a, b) {
            Array.isArray(a) ? a.push(b) : a.appendChild(b);
            return a
        },
        Ugb = function(a, b) {
            var c, d, e = u4(function(n) {
                d = n;
                c = G4(N4, function() {
                    return Y3(g.c$a, function() {
                        return a(b)
                    })
                })
            });
            c != null && c.Bm || !Array.isArray(c) || (c = Pgb(c));
            var f = c != null && c.Bm ? c.Bm : c;
            var h = Array.isArray(f) ? f[0] : f;
            if (h) {
                var l, m = (l = b == null ? void 0 : b.idomKey) != null ? l : a;
                l = a.f3;
                h._disposeEffects = e;
                e = h[O4] || {};
                Object.assign(e, {
                    key: m,
                    props: l ? b : void 0,
                    D_: f !== h ? f.length : 1,
                    context: d,
                    H9: !!h[O4],
                    d2: c != null && c.Bm ? c : e.d2
                });
                h[O4] = e
            } else e();
            t4(d, function() {});
            return c
        },
        Vgb = function(a, b) {
            a._disposeEffects == null && a._signalProps != null && (a._disposeEffects = u4(function() {
                Lgb(function() {
                    for (var c = a._signalProps, d = a._signalValues, e = 0; e < c.length; e++) {
                        var f = c[e],
                            h = b[f]();
                        d[e] !== h && (d[e] = h, y4(a, f, h))
                    }
                })
            }))
        },
        Wgb = function(a, b) {
            a._disposeEffects = u4(function() {
                a._isSignalTextNode = !0;
                Lgb(function() {
                    var c = b();
                    c == null && (c = "");
                    var d = typeof c;
                    if (d === "object" || d === "function") throw Error("Invalid text node kind: " + d + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information.");
                    a.textContent = String(c)
                })
            })
        },
        Zgb = function(a, b) {
            var c = g.Fa.apply(2, arguments);
            b != null || (b = {});
            if (a === E4) return c;
            if (typeof a === "function") return $fb({
                component: a,
                debugInstance: b.debugInstance,
                Cm: function() {
                    c.length > 0 && (b.children = c.length === 1 ? c[0] : c);
                    var f = Xgb(a, b);
                    return f === !1 ? Ygb(a, b) : f
                }
            });
            var d = document.createElement(a),
                e;
            for (e in b) y4(d, e, b[e]);
            Vgb(d, b);
            Q4(c, d);
            Egb(d, b, {
                KA: !0
            });
            return d
        },
        Xgb = function(a, b) {
            if (a.Una || a.KA) return !1;
            b || (b = {});
            var c = new B4(b);
            c.B = a;
            var d = Y3(g.c$a, function() {
                return c.By(b)
            });
            if (!(d instanceof HTMLElement)) return d;
            d.__instance = c;
            c.el = d;
            c.j = a;
            a.qt = d.tagName.toLowerCase();
            C4.tE(c);
            return d
        },
        $gb = function(a) {
            sgb(function() {
                Y3(null, a)
            })
        },
        ahb = function(a) {
            if (a) {
                var b;
                (b = a._disposeRef) == null || b.call(a);
                var c;
                (c = a._disposeEffects) == null || c.call(a);
                a.__instance && a.__instance instanceof z4 && (b = a.__instance, Ggb(b, a), b instanceof B4 && b.G());
                for (b = 0; b < a.childNodes.length; b++) ahb(a.childNodes[b])
            }
        },
        chb = function(a) {
            bhb.push(a) === 1 && requestAnimationFrame(function() {
                setTimeout(function() {
                    var b = [].concat(g.w(bhb));
                    bhb = [];
                    b = g.v(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        try {
                            for (var d = 0; d < c.length; d++) ahb(c[d])
                        } catch (e) {
                            d = c = void 0, (d = (c = q4).handleError) == null || d.call(c, "unknown", e, {
                                Jn: l4()
                            })
                        }
                    }
                })
            })
        },
        R4 = function(a, b) {
            return F4.apply(null, [a,
                b
            ].concat(g.w(g.Fa.apply(2, arguments))))
        },
        dhb = function(a) {
            var b = null,
                c;
            return {
                value: null,
                Bba: function(d) {
                    if (c && d !== c) {
                        var e;
                        (e = b) == null || e();
                        c._disposeRef = void 0
                    }
                    c = d;
                    b = a(d) || null
                },
                qca: function() {
                    var d;
                    (d = b) == null || d()
                }
            }
        },
        ehb = function(a) {
            var b = Fgb();
            if (b == null) throw Error("A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly");
            var c = b.D++;
            b.uA || (b.uA = []);
            var d = b.uA;
            d[c] || (d[c] = {
                key: a,
                host: b
            });
            if (a !== d[c].key) {
                var e, f;
                a = ((e = b.j) == null ? void 0 : e.name) || ((f = b.B) == null ? void 0 : f.name);
                throw Error("Hook called out of order in " + a + ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.");
            }
            return d[c]
        },
        fhb = function(a, b) {
            return !a || a.length !== (b == null ? void 0 : b.length) || a.some(function(c, d) {
                return c !== b[d]
            })
        },
        ghb = function(a, b) {
            var c = ehb("onChange"),
                d = Fgb();
            fhb(c.Xg, b) && (c.Xg = b, c.A0 = a, d.oz || (d.oz = []), d.oz.push(c))
        },
        S4 = function(a, b) {
            ghb(function() {
                return Y3(null, a)
            }, b)
        },
        hhb = function(a) {
            o4() ? $gb(function() {
                Y3(null, a)
            }) : ghb(function() {
                return Y3(null, a)
            }, [])
        },
        jhb = function(a) {
            var b = [].concat(g.w(a));
            a.length = 0;
            a = g.v(b);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                ihb(b);
                var c = b.A0;
                b.A0 = null;
                if (c = c == null ? void 0 : c()) b.z0 = c
            }
        },
        ihb = function(a) {
            var b = a.z0;
            a.z0 = null;
            b == null || b()
        },
        T4 = function(a) {
            var b = [];
            if (o4()) return a();
            var c = ehb("useMemoInternal");
            fhb(c.Xg, b) && (c.Xg = b, c.value = a());
            return c.value
        },
        U4 = function() {
            var a = T4(function() {
                return dhb(function(b) {
                    a.value = b;
                    var c = Y3(null, function() {});
                    return function() {
                        c == null || c();
                        a.value = null
                    }
                })
            });
            return a
        },
        khb = function(a) {
            var b = r4,
                c = l4();
            return {
                bY: function() {
                    return function(d) {
                        b.Ma || p4(function() {
                            return a(d)
                        }, {
                            stack: c
                        }) !== !0 && d.stopPropagation()
                    }
                }
            }
        },
        lhb = function(a) {
            if (typeof a.children === "function") return a.children(), null;
            a = g.v(a.children);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, b();
            return null
        },
        nhb = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            p4(function() {
                return mhb(a, b, c)
            })
        },
        mhb = function(a, b, c) {
            c = ((c === void 0 ? 0 : c) ? ohb : phb)(a, function() {
                V4(b)
            });
            return c === null ? a : c
        },
        V4 = function(a) {
            if (a !== void 0 && a !== null)
                if (Array.isArray(a)) {
                    a = g.v(a);
                    for (var b = a.next(); !b.done; b = a.next()) V4(b.value)
                } else if (a instanceof g.md || a instanceof g.qd || a instanceof g.xd) Zfb(a.toString());
            else if (M4(a)) {
                if (b4() !== a) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
                e4 = b4()
            } else {
                var c = typeof a;
                if (c === "boolean" || c === "number" || c === "string") Zfb(a);
                else if (typeof a === "function") {
                    b = a4;
                    var d = b4();
                    if (!d ||
                        !d._isSignalTextNode) {
                        var e = b.insertBefore,
                            f = document.createTextNode("");
                        Wgb(f, a);
                        e.call(b, f, d)
                    }
                    e4 = b4()
                } else {
                    if (typeof a.type === "string") {
                        a.ir || Vfb(a.type, a.props.idomKey);
                        b = a4;
                        for (e in a.props) a.props[e] !== qhb && (f = a.props[e], c = i4, c.push(e), c.push(f));
                        e = q4.attributes;
                        e = e === void 0 ? rhb : e;
                        f = a4;
                        var h = $3(f);
                        c = e;
                        e = i4;
                        h = h.j || (h.j = Jfb(e.length));
                        for (var l = !h.length || !1, m = 0; m < e.length; m += 2) {
                            var n = e[m];
                            if (l) h[m] = n;
                            else if (h[m] !== n) break;
                            var p = e[m + 1];
                            if (l || h[m + 1] !== p) h[m + 1] = p, Yfb(f, n, p, c)
                        }
                        if (m < e.length || m < h.length) {
                            for (m =
                                l = m; m < h.length; m += 2) W4[h[m]] = h[m + 1];
                            for (m = l; m < e.length; m += 2) l = e[m], n = e[m + 1], W4[l] !== n && Yfb(f, l, n, c), h[m] = l, h[m + 1] = n, delete W4[l];
                            Z3(h, e.length);
                            for (d in W4) Yfb(f, d, void 0, c), delete W4[d]
                        }
                        d = shb;
                        shb = f = k4.length;
                        for (c = d; c < f; c += 5)(0, k4[c])(k4[c + 1], k4[c + 2], k4[c + 3], k4[c + 4]);
                        shb = d;
                        Z3(k4, d);
                        Z3(e, 0);
                        Vgb(b, a.props);
                        (a.props.skip || a.props.skipchildren) && a4.hasChildNodes() ? e4 = a4.lastChild : V4(a.children);
                        d4(null);
                        e4 = a4;
                        a4 = a4.parentNode;
                        a.ir && (a.ir = !1);
                        Egb(b, a.props);
                        return b
                    }
                    if (a.type === E4) V4(a.children);
                    else if (!thb(a)) {
                        try {
                            uhb(a)
                        } catch (q) {
                            d =
                                q, (f = q4.handleError) == null || f.call(q4, (b = a.type) == null ? void 0 : b.qt, d, {
                                    Jn: l4()
                                })
                        }
                        a.ir && (d4(null), e4 = a4, a4 = a4.parentNode, a.ir = !1)
                    }
                }
            }
        },
        vhb = function(a, b) {
            var c;
            ((c = a.prototype) == null ? void 0 : c.By) === void 0 ? (b = new B4(b), b.B = a) : b = new a(b);
            b.j = a;
            b.QN = {
                rR: b.state,
                uZ: !1
            };
            return b
        },
        uhb = function(a) {
            var b = a.type,
                c = b.qt;
            if (b === lhb) a.props.children = a.children, b(a.props);
            else {
                a.children.length > 0 && (a.props.children = a.children);
                var d;
                (d = a.props).idomKey || (d.idomKey = b);
                if (c) {
                    var e = Vfb(c, a.props.idomKey);
                    a.ir = !0;
                    var f = e.__instance
                }
                f || (f = vhb(b, a.props), f.props = null, e && (e.__instance = f, f.el = e));
                var h;
                c = ((h = f.QN) != null ? h : {
                    rR: f.state,
                    uZ: !1
                }).rR;
                f.QN = void 0;
                b.D8 && (c = b.D8(a.props, c));
                f.props = a.props;
                f.state = c;
                h = function() {
                    var l = f;
                    C4.QW(l);
                    var m = l.By(l.props);
                    m ? (l.props.idomKey && (m.props.idomKey = l.props.idomKey), l = m) : l = void 0;
                    if (m = l)
                        if (m.ir = a.ir, l = V4(m), a.ir = m.ir, !b.qt)
                            if (l) b.qt = l.tagName.toLowerCase(), l.__instance = f, f.el = l;
                            else {
                                var n;
                                if ((n = f.uA) == null ? 0 : n.length) {
                                    var p;
                                    (p = q4.handleError) == null || p.call(q4, "unknown", Error("A component used hooks, but failed to return a host element"), {
                                        Jn: l4()
                                    })
                                }
                            }
                    f.tE();
                    C4.tE(f)
                };
                (c = f.B) ? $fb({
                    component: c,
                    debugInstance: f.props.debugInstance,
                    Cm: h
                }): h()
            }
        },
        thb = function(a) {
            var b = a.type;
            if (!b.KA) return !1;
            a.props.children = a.children.length > 1 ? a.children : a.children[0];
            var c, d = (c = a.props.idomKey) != null ? c : a.type,
                e;
            if (b4() && ((e = b4()[O4]) == null ? void 0 : e.key) === d) {
                d = b4();
                c = d[O4];
                if (!c) throw Error("Reactive data has been lost on node. Tag name: " + d.tagName);
                if (!b.f3) {
                    var f;
                    (f = c.Dpa) == null || f.call(c, a.props);
                    whb(c);
                    return !0
                }
                f = r4;
                b = b.f3(a.props, c.props, f !== null ? f : c.context, c.H9);
                f = xhb(b);
                yhb(a.props, c.props);
                f > 0 ? V4(b) : e4 = b4();
                return !0
            }
            if (zhb.has(b.name) && a.props.allowIdomInterop !== Ahb) throw Error(b.name +
                " can not be called from a IDOM component. See go/cow-errors#control-flow-component-called-from-Idom-Component");
            (b = $fb({
                component: a.type,
                debugInstance: a.props.debugInstance,
                Cm: function() {
                    return Ygb(a.type, a.props)
                }
            })) && Bhb(b);
            return !0
        },
        xhb = function(a) {
            if (a) {
                if (Array.isArray(a)) {
                    var b = 0;
                    a = g.v(a);
                    for (var c = a.next(); !c.done; c = a.next())(c = c.value) && (b = c.type === E4 ? b + c.children.length : b + 1);
                    return b
                }
                if (a.type === E4) return a.children.length
            } else return 0;
            return 1
        },
        yhb = function(a, b) {
            b && (b.children = a.children, b.Q7 = a.Q7, b.fallback = a.fallback)
        },
        Chb = function(a) {
            for (var b = 0; b < Q4(a).length; b++) e4 = b4()
        },
        whb = function(a) {
            var b = Dhb();
            if (b) Chb(b);
            else
                for (var c = 0; c < a.D_; c++)(b = Dhb()) ? Chb(b) : e4 = b4()
        },
        Dhb = function() {
            var a;
            return (a = b4()[O4]) == null ? void 0 : a.d2
        },
        Bhb = function(a) {
            a = a != null && a.Bm ? a.Bm : a;
            a = Array.isArray(a) ? a : [a];
            a = g.v(a);
            for (var b = a.next(); !b.done; b = a.next()) a4.insertBefore(b.value, b4()), e4 = b4()
        },
        Ehb = function(a) {
            var b = Fgb(),
                c = T4(function() {
                    return {
                        value: typeof a === "function" ? a() : a
                    }
                });
            return [c.value, function(d) {
                if (A4 !== null) {
                    var e;
                    (e = q4.handleError) == null || e.call(q4, "unknown", Error("Can't set state during rendering"), m4())
                }
                c.value = typeof d === "function" ? d(c.value) : d;
                b.QN = {
                    rR: b.state,
                    uZ: !0
                };
                t4(b.rJ, function() {
                    G4(Hgb, function() {
                        if (b.el) {
                            var f, h = {},
                                l = (h.props = b.props, h.type = b.j, h.children = (f = b.props.children) != null ? f : [], h[D4] = !0, h);
                            try {
                                nhb(b.el, l, !0)
                            } catch (p) {
                                var m, n;
                                (n = q4.handleError) == null || n.call(q4, (m = b.j) == null ? void 0 : m.qt, p, {
                                    Jn: l4()
                                })
                            }
                        }
                    })
                })
            }]
        },
        Fhb = function() {
            return T4(function() {
                return {
                    value: null
                }
            })
        },
        Jhb = function(a) {
            var b = Ghb;
            Hhb.push(a);
            Ihb || (b(function() {
                for (var c = g.v(Hhb), d = c.next(); !d.done; d = c.next()) d = d.value, d();
                Hhb.length = 0;
                Ihb = !1
            }), Ihb = !0)
        },
        Ghb = function(a) {
            Promise.resolve().then(a)
        },
        Khb = function(a) {
            a = g.v(Ehb(a));
            var b = a.next().value,
                c = a.next().value;
            return [b, function(d) {
                Jhb(function() {
                    c(d)
                })
            }]
        },
        Lhb = function(a) {
            function b() {
                var l = a.J.bd() ? "Hide more shorts" : "Hide more videos";
                e(l)
            }
            var c = g.v(Ehb("Hide more videos")),
                d = c.next().value,
                e = c.next().value;
            S4(function() {
                var l = a.J;
                l.addEventListener("videodatachange", b);
                return function() {
                    l.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            var f = T4(function() {
                    return (new g.Ux(g.ny())).element
                }),
                h = U4();
            hhb(function() {
                h.value.appendChild(f)
            });
            return R4("button", {
                class: "ytp-button ytp-collapse",
                "aria-label": d,
                "on:click": khb(function() {
                    a.action && a.action()
                })
            }, R4("div", {
                class: "ytp-collapse-icon",
                el: h,
                skip: !0
            }))
        },
        Mhb = function(a) {
            function b() {
                var h = a.J.bd() ? "More shorts" : "More videos";
                e(h)
            }
            var c = g.v(Khb("More videos")),
                d = c.next().value,
                e = c.next().value,
                f = U4();
            S4(function() {
                a.TB && (a.TB.value = f.value)
            }, [a.TB]);
            S4(function() {
                var h = a.J;
                h.addEventListener("videodatachange", b);
                return function() {
                    h.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            return R4("button", {
                el: f,
                class: "ytp-button ytp-expand",
                "on:click": khb(function() {
                    a.action && a.action()
                })
            }, d)
        },
        Nhb = function(a, b) {
            var c = Fhb();
            S4(function() {
                var d = new g.b1(a);
                d.B = !0;
                c.value = d;
                return function() {
                    var e;
                    (e = c.value) == null || e.dispose()
                }
            }, [a,
                b
            ]);
            return c
        },
        Ohb = function(a) {
            function b(x) {
                a: {
                    var B = g.v([1,
                        16, 32
                    ]);
                    for (var E = B.next(); !E.done; E = B.next())
                        if (g.Y(x, E.value)) {
                            B = !0;
                            break a
                        }
                    B = !1
                }
                if (!B) {
                    var F;
                    (F = p.value) != null && F.suggestionData.length > 0 && h(g.Y(x, 4) && !g.Y(x, 2) && !g.Y(x, 1024))
                }
            }

            function c() {
                b(a.J.getPlayerStateObject())
            }

            function d(x) {
                b(x.state)
            }
            var e = g.v(Khb(!1)),
                f = e.next().value,
                h = e.next().value,
                l = g.v(Khb(!1));
            e = l.next().value;
            var m = l.next().value,
                n = U4(),
                p = Nhb(a.J, a.Me),
                q = U4();
            l = Fhb();
            var r = Fhb();
            S4(function() {
                var x = a.J,
                    B = x.bd() ? 157212 : 172777;
                r.value = new g.P;
                x.createClientVe(q.value, r.value, B);
                x.addEventListener("presentingplayerstatechange", d);
                x.addEventListener("videodatachange", c);
                B = x.U().controlsType === "0";
                g.wp(x.getRootNode(), "ytp-pause-overlay-controls-hidden", B);
                return function() {
                    x.removeEventListener("videodatachange", c);
                    x.removeEventListener("presentingplayerstatechange",
                        d);
                    var E;
                    (E = r.value) == null || E.dispose()
                }
            }, [a.J]);
            S4(function() {
                var x;
                (x = p.value) == null || x.Ja(n.value)
            }, [p]);
            var t = a.J;
            if (f)
                if (g.wp(t.getRootNode(), "ytp-expand-pause-overlay", !e), e) l.value.focus();
                else {
                    var u = p.value;
                    g.c1(u);
                    u.show();
                    q.value.focus()
                }
            q.value && t.logVisibility(q.value, f && !e);
            return R4("ytp-pause-overlay", {
                el: q,
                class: "ytp-pause-overlay",
                "aria-hidden": !f
            }, R4(Lhb, {
                J: a.J,
                Me: a.Me,
                action: function() {
                    m(!0)
                }
            }), R4(Mhb, {
                J: a.J,
                Me: a.Me,
                action: function() {
                    m(!1)
                },
                TB: l
            }), R4("div", {
                el: n,
                skip: !0
            }))
        },
        Phb = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.K = this.B = 0;
            this.G = new g.XE(this);
            this.j = [];
            this.suggestionData = [];
            this.columns = this.containerWidth = 0;
            this.title = new g.U({
                I: "h2",
                S: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.U({
                I: "button",
                La: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Show previous suggested videos"
                },
                V: [g.dy()]
            });
            this.qa = new g.a1(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.D = this.C = 0;
            this.N = !0;
            this.next = new g.U({
                I: "button",
                La: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Show more suggested videos"
                },
                V: [g.ey()]
            });
            g.Q(this, this.G);
            a = a.U();
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.sp(this.element, "ytp-error-overlay-round-corners");
            this.Y = a.D;
            g.Q(this, this.title);
            this.title.Ja(this.element);
            this.suggestions = new g.U({
                I: "div",
                S: "ytp-suggestions"
            });
            g.Q(this, this.suggestions);
            this.suggestions.Ja(this.element);
            g.Q(this, this.previous);
            this.previous.Ja(this.element);
            this.previous.listen("click", this.o4, this);
            g.Q(this, this.qa);
            for (var c = {
                    yA: 0
                }; c.yA < 16; c = {
                    yA: c.yA
                }, c.yA++) {
                var d = new g.U({
                    I: "a",
                    S: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: a.Y,
                        "aria-label": "{{aria_label}}"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-suggestion-image",
                        V: [{
                            I: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            S: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-suggestion-title",
                        W: {
                            title: "{{hover_title}}"
                        },
                        va: "{{title}}"
                    }, {
                        I: "div",
                        S: "ytp-suggestion-author",
                        va: "{{views_or_author}}"
                    }]
                });
                g.Q(this, d);
                d.Ja(this.suggestions.element);
                var e = d.Fa("ytp-suggestion-link");
                g.um(e, "transitionDelay", c.yA / 20 + "s");
                this.G.T(e, "click", function(f) {
                    return function(h) {
                        var l = f.yA,
                            m = b.suggestionData[l],
                            n = m.sessionData;
                        g.UO(b.api.U()) && b.api.L("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.logClick(b.j[l].element), l = m.zl(), m = {}, g.kS(b.api, m, "emb_rel_err"), l = g.$i(l, m), g.KS(l, b.api, h)) : g.JS(h, b.api, b.Y, n || void 0) && b.api.mp(m.videoId, n, m.playlistId)
                    }
                }(c));
                this.j.push(d)
            }
            g.Q(this, this.next);
            this.next.Ja(this.element);
            this.next.listen("click", this.n4, this);
            this.G.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.ob().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        Qhb = function(a, b) {
            if (a.api.U().L("web_player_log_click_before_generating_ve_conversion_params"))
                for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++) a.api.logVisibility(a.j[c].element, b)
        },
        Rhb = function(a) {
            a.next.element.style.bottom =
                a.K + "px";
            a.previous.element.style.bottom = a.K + "px";
            var b = a.C,
                c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
            g.wp(a.element, "ytp-scroll-min", b >= 0);
            g.wp(a.element, "ytp-scroll-max", b <= c)
        },
        Shb = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.j[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.zl(),
                    h = a.api.U();
                if (g.UO(h) && !h.L("web_player_log_click_before_generating_ve_conversion_params")) {
                    var l = {};
                    g.uR(a.api, "addEmbedsConversionTrackingParams", [l]);
                    a.api.L("embeds_web_enable_referring_feature_deprecation") || g.kL(l, "emb_rel_err");
                    f = g.$i(f, l)
                }
                d.element.style.display = "";
                l = d.Fa("ytp-suggestion-title");
                g.Ap.test(c.title) ? l.dir = "rtl" : g.f$a.test(c.title) && (l.dir = "ltr");
                l = d.Fa("ytp-suggestion-author");
                g.Ap.test(e) ? l.dir = "rtl" : g.f$a.test(e) && (l.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.iz(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                e = d.Fa("ytp-suggestion-image");
                f = c.dh();
                e.style.backgroundImage = f ? "url(" + f + ")" : "";
                h.L("web_player_log_click_before_generating_ve_conversion_params") && (a.api.createServerVe(d.element, d), (c = (c = c.sessionData) && c.itct) && a.api.setTrackingParams(d.element, c))
            }
            for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
            Rhb(a)
        },
        X4 = function(a) {
            g.KU.call(this, a);
            var b = this;
            this.j = null;
            var c = a.U(),
                d = {
                    target: c.Y
                },
                e = ["ytp-small-redirect"];
            c.C ? e.push("no-link") : (c = g.vP(c), d.href = c, d["aria-label"] = "Visit YouTube to search for more videos");
            var f = new g.U({
                I: "a",
                La: e,
                W: d,
                V: [{
                    I: "svg",
                    W: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        W: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        I: "path",
                        W: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                }]
            });
            f.Ja(this.element);
            a.createClientVe(f.element, this, 178053);
            this.T(f.element, "click", function(h) {
                Thb(b, h, f.element)
            });
            g.Q(this, f);
            a.U().C || (this.j = new Phb(a), this.j.Ja(this.element), g.Q(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.ob().getPlayerSize())
        },
        Thb = function(a, b, c) {
            b.preventDefault();
            a.api.logClick(c);
            b = c.getAttribute("href");
            c = {};
            g.uR(a.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.Gc(c) ? b : g.$i(b, c);
            g.Rd(b)
        },
        Uhb = function(a, b) {
            a.Fa("ytp-error-content").style.paddingTop = "0px";
            var c = a.Fa("ytp-error-content"),
                d = c.clientHeight;
            a.j && a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px"
        },
        Xhb = function(a, b) {
            var c = a.api.U(),
                d;
            b.reason && (Vhb(b.reason) ? d = g.by(b.reason) : d = g.LU(g.ay(b.reason)), a.Cd(d, "content"));
            var e;
            b.subreason && (Vhb(b.subreason) ? e = g.by(b.subreason) : e = g.LU(g.ay(b.subreason)), a.Cd(e, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer) {
                d = a.Fa("ytp-error-content-wrap-subreason");
                b = b.proceedButton.buttonRenderer;
                var f = g.ne("A");
                if (b.text && b.text.simpleText && (e = b.text.simpleText, f.textContent = e, !Whb(d, e) && (!c.C || c.embedsErrorLinks))) {
                    var h;
                    c = (h = g.S(b == null ? void 0 : b.navigationEndpoint, g.uy)) == null ?
                        void 0 : h.url;
                    var l;
                    h = (l = g.S(b == null ? void 0 : b.navigationEndpoint, g.uy)) == null ? void 0 : l.target;
                    c && (f.setAttribute("href", c), a.api.createClientVe(f, a, 178424), a.T(f, "click", function(m) {
                        Thb(a, m, f)
                    }));
                    h && f.setAttribute("target", h);
                    l = g.ne("DIV");
                    l.appendChild(f);
                    d.appendChild(l)
                }
            }
        },
        Vhb = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        Whb = function(a, b) {
            a = g.ee("A", a);
            for (var c = 0; c < a.length; c++)
                if (a[c].textContent === b) return !0;
            return !1
        },
        Yhb = function(a, b) {
            g.U.call(this, {
                I: "a",
                La: ["ytp-impression-link"],
                W: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                V: [{
                    I: "div",
                    S: "ytp-impression-link-content",
                    W: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-impression-link-text",
                        va: "Watch on"
                    }, {
                        I: "div",
                        S: "ytp-impression-link-logo",
                        va: "{{logoSvg}}"
                    }]
                }]
            });
            this.api = a;
            this.Me = b;
            this.updateValue("target", a.U().Y);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(this.api, "presentingplayerstatechange", this.Fk);
            this.T(this.api, "videoplayerreset", this.CU);
            this.T(this.element,
                "click", this.onClick);
            this.onVideoDataChange();
            this.CU()
        },
        Zhb = function(a) {
            var b = {};
            g.uR(a.api, "addEmbedsConversionTrackingParams", [b]);
            var c = a.api.getVideoUrl();
            a.api.L("embeds_web_enable_referring_feature_deprecation") || g.kL(b, "emb_imp_woyt");
            return c = g.$i(c, b)
        },
        Y4 = function(a) {
            g.U.call(this, {
                I: "div",
                La: ["ytp-mobile-a11y-hidden-seek-button"],
                V: [{
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    W: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    W: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Fa("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Fa("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.createClientVe(this.j, this,
                141902);
            this.api.createClientVe(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.Fk);
            this.T(this.j, "click", this.B);
            this.T(this.forwardButton, "click", this.C);
            this.Fk()
        },
        Z4 = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-endscreen-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-end-panel",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-end-text", "ytp-button"],
                        va: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.D = this.Fa("ytp-muted-autoplay-end-panel");
            this.B = !1;
            this.api.createClientVe(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.C);
            this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
            this.listen("click", this.onClick);
            this.hide()
        },
        $4 = function(a) {
            var b = a.U();
            g.U.call(this, {
                I: "a",
                La: ["ytp-watermark", "yt-uix-sessionlink"],
                W: {
                    target: b.Y,
                    href: "{{url}}",
                    "aria-label": g.MD("Watch on $WEBSITE", {
                        WEBSITE: g.jP(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                va: "{{logoSvg}}"
            });
            this.api = a;
            this.j = null;
            this.B = !1;
            this.state = a.getPlayerStateObject();
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.kc);
            this.onVideoDataChange();
            this.wd(this.state);
            this.kc(a.ob().getPlayerSize())
        },
        $hb = function(a) {
            var b = a.api.getVideoData(),
                c = a.api.U().Ed && !g.Y(a.state, 2) && !g.mR(a.api.getVideoData(1));
            b.mutedAutoplay || g.Xx(a, c);
            a.api.logVisibility(a.element, c)
        },
        cib = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-bottom-buttons",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        W: {
                            "aria-label": "Muted Playback Indicator"
                        },
                        V: [{
                            I: "div",
                            La: ["ytp-muted-autoplay-equalizer-icon"],
                            V: [{
                                I: "svg",
                                W: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                V: [{
                                    I: "g",
                                    W: {
                                        fill: "#fff"
                                    },
                                    V: [{
                                            I: "rect",
                                            S: "ytp-equalizer-bar-left",
                                            W: {
                                                height: "9",
                                                width: "4",
                                                x: "1",
                                                y: "7"
                                            }
                                        }, {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-middle",
                                            W: {
                                                height: "14",
                                                width: "4",
                                                x: "6",
                                                y: "2"
                                            }
                                        },
                                        {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-right",
                                            W: {
                                                height: "12",
                                                width: "4",
                                                x: "11",
                                                y: "4"
                                            }
                                        }
                                    ]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            var b = this;
            this.api = a;
            this.bottomButtons = this.Fa("ytp-muted-autoplay-bottom-buttons");
            this.Fa("ytp-muted-autoplay-equalizer");
            this.C = new g.kp(this.G9, 4E3, this);
            this.B = !1;
            a.createClientVe(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.ZM);
            this.T(a, "onMutedAutoplayStarts", function() {
                aib(b);
                b.ZM();
                bib(b);
                b.B = !1
            });
            this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
            this.listen("click", this.onClick);
            this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
            this.hide();
            g.zR(a.app) && (aib(this), this.ZM(), bib(this));
            g.Q(this, this.C)
        },
        bib = function(a) {
            a.Hb && a.j && (a.j.show(), a.C.start())
        },
        aib = function(a) {
            a.watermark || (a.watermark = new $4(a.api), g.Q(a, a.watermark), a.watermark.Ja(a.bottomButtons, 0), g.wp(a.watermark.element, "ytp-muted-autoplay-watermark", !0), a.j = new g.Ny(a.watermark, 0, !0, 100), g.Q(a, a.j))
        },
        a5 = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-pause-overlay",
                W: {
                    tabIndex: "-1"
                }
            });
            var b = this;
            this.api = a;
            this.C = new g.XE(this);
            this.D = new g.Ny(this, 1E3, !1, 100, function() {
                b.j.B = !1
            }, function() {
                b.j.B = !0
            });
            this.B = !1;
            this.expandButton = new g.U({
                I: "button",
                La: ["ytp-button", "ytp-expand"],
                va: this.api.bd() ? "More shorts" : "More videos"
            });
            a.U().controlsType === "0" && g.sp(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.sp(this.element, "ytp-pause-overlay-round-corners");
            g.Q(this, this.C);
            g.Q(this, this.D);
            var c = new g.U({
                I: "button",
                La: ["ytp-button", "ytp-collapse"],
                W: {
                    "aria-label": this.api.bd() ? "Hide more shorts" : "Hide more videos"
                },
                V: [{
                    I: "div",
                    S: "ytp-collapse-icon",
                    V: [g.ny()]
                }]
            });
            g.Q(this, c);
            c.Ja(this.element);
            c.listen("click", this.G, this);
            g.Q(this, this.expandButton);
            this.expandButton.Ja(this.element);
            this.expandButton.listen("click", this.K, this);
            this.j = new g.b1(a);
            g.Q(this, this.j);
            this.j.B = !1;
            this.j.Ja(this.element);
            this.api.bd() ? this.api.createClientVe(this.element, this, 157212) : this.api.createClientVe(this.element, this, 172777);
            this.C.T(this.api, "presentingplayerstatechange", this.Ta);
            this.C.T(this.api, "videodatachange", this.Ta);
            this.hide()
        },
        b5 = function(a) {
            g.U.call(this, {
                I: "div",
                La: ["ytp-player-content", "ytp-iv-player-content"],
                V: [{
                    I: "div",
                    S: "ytp-countdown-timer",
                    V: [{
                        I: "svg",
                        W: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-countdown-timer-ring",
                            W: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-countdown-timer-background",
                            W: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-opacity": "0.3",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }]
                    }, {
                        I: "span",
                        S: "ytp-countdown-timer-time",
                        va: "{{duration}}"
                    }]
                }]
            });
            this.api = a;
            this.K = this.Fa("ytp-svg-countdown-timer-ring");
            this.j = null;
            this.D = this.C = 0;
            this.B = !1;
            this.G = 0;
            this.api.createClientVe(this.element, this, 159628)
        },
        eib = function(a) {
            a.j || (a.C = 5E3, a.D = (0, g.T)(), a.j = new g.jp(function() {
                dib(a)
            }, null), dib(a))
        },
        dib = function(a) {
            if (!a.B) {
                var b = Math.min((0, g.T)() - a.D, a.C);
                var c = a.C - b;
                b = a.C === 0 ? 0 : Math.max(c / a.C, 0);
                c = Math.round(c / 1E3);
                a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
                a.updateValue("duration", c);
                b <= 0 && a.j ? c5(a) : a.j && a.j.start()
            }
        },
        c5 = function(a) {
            a.j && (a.j.dispose(), a.j = null, a.B = !1)
        },
        gib = function(a) {
            g.gU.call(this, a);
            this.J = a;
            this.j = new g.XE(this);
            this.B = null;
            this.N = !1;
            this.countdownTimer = null;
            this.Y = !1;
            fib(this);
            g.Q(this, this.j);
            this.load()
        },
        iib = function(a) {
            var b = g.p8a(a.J);
            b !== a.Y && (a.Y = b, a.G && (a.G.dispose(), a.G = null), a.C && (a.C.dispose(), a.C = null), a.D && (a.D.dispose(), a.D = null), a.B && (a.B.stop(), a.B.dispose(), a.B = null), b && (b = g.ER(a.J), a.J.bd() && (a.D = new g.U({
                    I: "div",
                    S: "ytp-pause-overlay-backdrop",
                    W: {
                        tabIndex: "-1"
                    }
                }), g.Q(a, a.D), g.nS(a.J, a.D.element, 4), a.B = new g.Ny(a.D, 1E3, !1, 100), g.Q(a, a.B), a.D.hide()), a.G = new g.U({
                    I: "div",
                    S: "ytp-pause-overlay-container",
                    W: {
                        tabIndex: "-1"
                    }
                }), g.Q(a, a.G), a.J.L("embeds_web_enable_keto_pause_overlay") ? nhb(a.G.element, R4(Ohb, {
                    J: a.J,
                    Me: b
                })) :
                (a.C = new a5(a.J, b), g.Q(a, a.C), a.C.Ja(a.G.element)), g.nS(a.J, a.G.element, 4), hib(a, a.J.getPlayerStateObject())))
        },
        hib = function(a, b) {
            a.B && (!g.Y(b, 4) && !g.Y(b, 2) || g.Y(b, 1024) ? a.B.hide() : a.B.show())
        },
        fib = function(a) {
            var b = a.J;
            a = !!b.bd();
            g.wp(b.getRootNode(), "ytp-shorts-mode", a);
            if (b = b.getVideoData()) b.dX = a
        },
        d5 = function(a, b) {
            var c = a.J.U();
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: a.J.getCurrentTime() === 0 ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : a.J.getPlayerState() === 0 ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Bfa(a.J.U().loaderUrl),
                eventType: b,
                youtubeHost: g.Ui(a.J.U().Ia) || ""
            };
            a.embeddedPlayerMode = c.Ea;
            g.Nt("embedsAdEvent", a)
        },
        ogb = 0,
        kgb = 0;
    var Ahb = Symbol("ALLOW_IDOM_INTEROP_SYMBOL");
    var cgb = Symbol("DISABLE_ON_CLEANUP");
    var Lfb = Object.prototype.hasOwnProperty;
    Ifb.prototype = Object.create(null);
    var rhb = Ofb();
    var j4 = null;
    var Wfb = typeof Node !== "undefined" && Node.prototype.getRootNode || function() {
        for (var a = this, b = a; a;) b = a, a = a.parentNode;
        return b
    };
    var c4 = null,
        e4 = null,
        a4 = null,
        g4 = null,
        h4 = [],
        f4 = Tfb,
        i4 = [],
        phb = function(a) {
            return Xfb(function(b, c, d) {
                a4 = e4 = b;
                e4 = null;
                c(d);
                d4(null);
                e4 = a4;
                a4 = a4.parentNode;
                return b
            }, a)
        }(),
        ohb = function(a) {
            return Xfb(function(b, c, d) {
                var e = {
                    nextSibling: b
                };
                e4 = e;
                c(d);
                a4 && d4(b.nextSibling);
                return e === e4 ? null : e4
            }, a)
        }();
    var k4 = [],
        shb = 0;
    var W4 = new Ifb;
    var q4 = {
        attributes: Ofb(),
        handleError: function(a, b) {
            throw b;
        },
        R7: !0,
        S7: !0,
        RM: g.B8a,
        q3: g.C8a
    };
    var n4 = [];
    var e5 = {},
        bgb = (e5.wZ = !0, e5[Symbol.dispose] = function() {
            var a;
            (a = q4.handleError) == null || a.call(q4, "unknown", Error("This owner cannot be disposed"), m4())
        }, e5.Ma = !1, e5);
    var r4 = null;
    var w4 = new Set,
        f5 = {},
        jib = Object.assign({}, {
            wZ: !0
        }, g.ap, (f5.Zf = void 0, f5.qF = !1, f5.IS = null, f5.MO = !0, f5.Ht = !1, f5[Symbol.dispose] = hgb, f5.Jn = void 0, f5));
    var x4 = new Set;
    g.Yka = function() {
        if (q4.q3) {
            var a = w4;
            w4 = new Set;
            ggb(a)
        } else ggb(w4);
        q4.q3 ? (a = x4, x4 = new Set, lgb(a)) : lgb(x4)
    };
    var rgb = Object.assign({}, jib, {
        mE: jgb,
        Ht: !1
    });
    var Agb = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var ugb = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-describedby": 10,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 12,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        tgb = {
            a: {
                href: [{
                    zd: 3
                }]
            },
            area: {
                href: [{
                    zd: 3
                }]
            },
            audio: {
                src: [{
                    zd: 3
                }]
            },
            button: {
                formaction: [{
                    zd: 3
                }],
                formmethod: [{
                    zd: 1
                }]
            },
            form: {
                action: [{
                    zd: 3
                }],
                method: [{
                    zd: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    zd: 2
                }]
            },
            img: {
                src: [{
                    zd: 3
                }],
                srcset: [{
                    zd: 11
                }]
            },
            input: {
                accept: [{
                    zd: 1
                }],
                formaction: [{
                    zd: 3
                }],
                formmethod: [{
                    zd: 1
                }],
                pattern: [{
                    zd: 1
                }],
                readonly: [{
                    zd: 1
                }],
                src: [{
                    zd: 3
                }]
            },
            link: {
                href: [{
                    zd: 3,
                    Ci: "rel",
                    Li: "alternate"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "author"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "bookmark"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "canonical"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "cite"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "help"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "icon"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "license"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "next"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "prefetch"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "dns-prefetch"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "prerender"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "preconnect"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "preload"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "prev"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "search"
                }, {
                    zd: 3,
                    Ci: "rel",
                    Li: "subresource"
                }]
            },
            script: {
                defer: [{
                    zd: 1
                }]
            },
            source: {
                src: [{
                    zd: 3
                }],
                srcset: [{
                    zd: 11
                }]
            },
            textarea: {
                readonly: [{
                    zd: 1
                }]
            },
            video: {
                src: [{
                    zd: 3
                }]
            }
        };
    var kib = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        g5 = {},
        wgb = (g5[1] = {
            Dr: null,
            Au: null,
            Us: null
        }, g5[2] = {
            Dr: function() {
                return g.ud.toString()
            },
            Au: function(a) {
                return a instanceof g.zd
            },
            Us: function(a) {
                return g.Ad(a)
            }
        }, g5[3] = {
            Dr: function(a, b, c) {
                return kib.test(c) ? c : g.ud.toString()
            },
            Au: function(a) {
                return a instanceof g.qd
            },
            Us: function(a) {
                return g.rd(a)
            }
        }, g5[4] = {
            Dr: function() {
                return g.ud.toString()
            },
            Au: function(a) {
                return a instanceof g.md
            },
            Us: function(a) {
                return g.od(a)
            }
        }, g5[5] = {
            Dr: null,
            Au: function(a) {
                return a instanceof g.xd
            },
            Us: function(a) {
                return a.toString()
            }
        }, g5[7] = {
            Dr: null,
            Au: null,
            Us: null
        }, g5[8] = {
            Dr: null,
            Au: null,
            Us: null
        }, g5[10] = {
            Dr: null,
            Au: null,
            Us: null
        }, g5);
    var qhb = Symbol("ATTR_TAG_VALUE");
    RegExp.prototype.hasOwnProperty("sticky");
    var lib = Ofb(),
        Cgb = lib.__default,
        Dgb = lib.style,
        Bgb = ["focusin", "focusout"];
    var C4 = {
        mma: function() {},
        Boa: function() {},
        qma: function() {},
        QW: function() {},
        nma: function() {},
        G7: function() {},
        tE: function() {},
        oJ: function() {},
        H7: function() {}
    };
    var D4 = Symbol("IS_VNODE");
    z4.prototype.tE = function() {};
    z4.prototype.G7 = function() {};
    z4.prototype.oJ = function() {};
    z4.prototype.H7 = function() {};
    var A4 = null;
    g.z(B4, z4);
    B4.prototype.By = function(a) {
        var b = this,
            c = A4;
        A4 = this;
        this.D = 0;
        try {
            return p4(function() {
                return Y3(g.c$a, function() {
                    return t4(b.rJ, function() {
                        return b.B(a)
                    })
                })
            })
        } finally {
            A4 = c
        }
    };
    var N4, F4 = Hgb;
    var O4 = Symbol("reactiveData");
    var Igb = Object.assign({}, jib, {
        mE: igb,
        Ht: !0
    });
    var Kgb = Object.assign({}, jib, {
        mE: igb,
        Ht: !1
    });
    var Ygb = Ugb;
    N4 = Zgb;
    var bhb = [];
    (function() {
        var a = j4;
        j4 = function(b) {
            a == null || a(b);
            chb(b)
        }
    })();
    (function(a) {
        var b = {},
            c;
        for (c in a) b = {
            N0: void 0,
            w_: void 0
        }, b.N0 = C4[c], b.w_ = a[c], C4[c] = function(d) {
            return function() {
                var e = g.Fa.apply(0, arguments);
                d.N0.apply(null, g.w(e));
                d.w_.apply(null, g.w(e))
            }
        }(b)
    })({
        QW: function(a) {
            t4(a.rJ, function() {
                var b;
                ((b = a.oz) == null ? 0 : b.length) && jhb(a.oz)
            })
        },
        tE: function(a) {
            t4(a.rJ, function() {
                var b;
                ((b = a.oz) == null ? 0 : b.length) && jhb(a.oz)
            })
        },
        oJ: function(a) {
            var b;
            ((b = a.uA) == null ? 0 : b.length) && a.uA.forEach(ihb)
        }
    });
    N4 = Zgb;
    var zhb = new Set(["For", "If", "Match", "Watch"]),
        mib = {},
        nib = (mib.__default = function() {
            return y4
        }, mib.style = function() {
            return y4
        }, mib),
        h5;
    for (h5 in nib) q4.attributes[h5] = nib[h5](q4.attributes[h5]);
    var Hhb = [],
        Ihb = !1;
    g.z(Phb, g.U);
    g.k = Phb.prototype;
    g.k.hide = function() {
        this.N = !0;
        g.U.prototype.hide.call(this);
        Qhb(this, !1)
    };
    g.k.show = function() {
        this.N = !1;
        g.U.prototype.show.call(this);
        Qhb(this, !0)
    };
    g.k.isHidden = function() {
        return this.N
    };
    g.k.n4 = function() {
        this.scrollTo(this.C - this.containerWidth)
    };
    g.k.o4 = function() {
        this.scrollTo(this.C + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.U(),
            d = 16 / 9,
            e = a.width >= 650,
            f = a.width < 480 || a.height < 290,
            h = Math.min(this.suggestionData.length, this.j.length);
        if (Math.min(a.width, a.height) <= 150 || h === 0 || !c.Dd) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            m = a / l - this.B;
            var q = Math.floor(m / d);
            b && q + 100 > b && m > 50 && (q = Math.max(b, 50 / d), l = Math.ceil(a / (d * (q - 100) + this.B)), m = a / l - this.B,
                q = Math.floor(m / d));
            m < 50 || g.jS(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.j[b];
                var r = d.Fa("ytp-suggestion-image");
                r.style.width = m + "px";
                r.style.height = q + "px";
                d.Fa("ytp-suggestion-title").style.width = m + "px";
                d.Fa("ytp-suggestion-author").style.width = m + "px";
                d = d.Fa("ytp-suggestion-duration");
                d.style.display = d && m < 100 ? "none" : ""
            }
            h = e + n + p + 4;
            this.K = h + c + (q - f) / 2;
            this.suggestions.element.style.height = q + h + "px";
            this.D = m;
            this.containerWidth = a;
            this.columns = l;
            this.C = 0;
            this.suggestions.element.scrollLeft = -0;
            Rhb(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.Y = a.Df ? !1 : b.D;
        a.suggestions ? this.suggestionData = g.qn(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        Shb(this);
        a.Df ? this.title.update({
            title: g.MD("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Hd(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
        this.qa.start(this.C, a, 1E3);
        this.C = a;
        Rhb(this);
        Qhb(this, !0)
    };
    g.z(X4, g.KU);
    X4.prototype.show = function() {
        g.KU.prototype.show.call(this);
        Uhb(this, this.api.ob().getPlayerSize())
    };
    X4.prototype.resize = function(a) {
        g.KU.prototype.resize.call(this, a);
        this.j && (Uhb(this, a), g.wp(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    X4.prototype.B = function(a) {
        g.KU.prototype.B.call(this, a);
        var b = this.api.getVideoData();
        if (b.KD || b.playerErrorMessageRenderer)(a = b.KD) ? Xhb(this, a) : b.playerErrorMessageRenderer && Xhb(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.On && (b.nw ? Vhb(b.nw) ? c = g.by(b.nw) : c = g.LU(g.ay(b.nw)) : c = g.LU(a.On), this.Cd(c, "subreason"))
        }
    };
    g.z(Yhb, g.U);
    g.k = Yhb.prototype;
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = Gfb(),
            c = 96714;
        g.nR(a) ? (b = Hfb(), c = 216165, g.sp(this.element, "ytp-music-impression-link")) : g.up(this.element, "ytp-music-impression-link");
        this.updateValue("logoSvg", b);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this, c)
    };
    g.k.Fk = function() {
        this.api.getPlayerStateObject().isCued() || (this.hide(), this.api.logVisibility(this.element, !1))
    };
    g.k.CU = function() {
        var a = this.api.getVideoData(),
            b = this.api.U(),
            c = this.api.getVideoData().Df,
            d = b.Ed,
            e = !b.Dd,
            f = this.Me.Mg();
        b = b.C;
        d || f || c || e || b || this.api.bd() || !a.videoId ? (this.hide(), this.api.logVisibility(this.element, !1)) : (a = Zhb(this), this.updateValue("url", a), this.show())
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = Zhb(this);
        g.KS(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.show = function() {
        this.api.getPlayerStateObject().isCued() && (g.U.prototype.show.call(this), this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0))
    };
    g.z(Y4, g.U);
    Y4.prototype.Fk = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.ai() || g.Y(a, 2) && g.LR(this.api) || g.Y(a, 64) ? (this.api.logVisibility(this.j, !1), this.api.logVisibility(this.forwardButton, !1), this.hide()) : (this.show(), this.api.logVisibility(this.j, !0), this.api.logVisibility(this.forwardButton, !0))
    };
    Y4.prototype.B = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
        this.api.logClick(this.j)
    };
    Y4.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
        this.api.logClick(this.forwardButton)
    };
    g.z(Z4, g.U);
    Z4.prototype.C = function() {
        var a = this.api.getPlayerStateObject();
        this.api.getVideoData().mutedAutoplay && (g.Y(a, 2) && !this.Hb ? (this.show(), this.j || (this.j = new g.IU(this.api), g.Q(this, this.j), this.j.Ja(this.D, 0), this.j.show()), a = this.api.getVideoData(), this.updateValue("text", a.AU), g.wp(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.logVisibility(this.element, this.Hb), this.api.Ac("onMutedAutoplayEnds")) : this.hide())
    };
    Z4.prototype.onClick = function() {
        if (!this.B) {
            this.j && (this.j.xa(), this.j = null);
            g.wp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Cfb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.bB();
            this.api.logClick(this.element);
            this.hide();
            this.B = !0
        }
    };
    Z4.prototype.onMutedAutoplayStarts = function() {
        this.B = !1;
        this.j && (this.j.xa(), this.j = null)
    };
    g.z($4, g.U);
    g.k = $4.prototype;
    g.k.onStateChange = function(a) {
        this.wd(a.state)
    };
    g.k.wd = function(a) {
        this.state !== a && (this.state = a);
        $hb(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.U();
        a.C && g.sp(this.element, "ytp-no-hover");
        var b = this.api.getVideoData();
        b.videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", a), this.j || (this.j = this.listen("click", this.onClick))) : this.j && (this.updateValue("url", null), this.Nc(this.j), this.j = null);
        a = Gfb();
        var c = 76758;
        g.nR(b) && (a = Hfb(), c = 216164);
        this.updateValue("logoSvg", a);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this,
            c);
        $hb(this)
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = this.api.getVideoUrl(!g.jz(a), !1, !0, !0);
        if (this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            var c = {};
            g.uR(this.api, "addEmbedsConversionTrackingParams", [c]);
            this.api.L("embeds_web_enable_referring_feature_deprecation") || g.kL(c, "emb_yt_watermark");
            b = g.$i(b, c)
        }
        g.KS(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") ||
            this.api.logClick(this.element)
    };
    g.k.kc = function(a) {
        if ((a = a.width < 480) && !this.B || !a && this.B) {
            var b = new g.U(Gfb()),
                c = this.Fa("ytp-watermark");
            g.wp(c, "ytp-watermark-small", a);
            g.qe(c);
            b.Ja(c);
            this.B = a
        }
    };
    g.z(cib, g.U);
    g.k = cib.prototype;
    g.k.ZM = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.getVideoData().mutedAutoplay || g.Y(a, 2) ? this.hide() : this.Hb || (g.U.prototype.show.call(this), this.api.logVisibility(this.element, this.Hb))
    };
    g.k.G9 = function() {
        this.j && this.j.hide()
    };
    g.k.onAutoplayBlocked = function() {
        this.hide();
        Cfb(this.api.getVideoData())
    };
    g.k.onClick = function() {
        if (!this.B) {
            g.wp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Cfb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.bB();
            this.api.logClick(this.element);
            this.api.Ac("onMutedAutoplayEnds");
            this.B = !0
        }
    };
    g.k.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.xa(), this.watermark = null)
    };
    g.z(a5, g.U);
    a5.prototype.hide = function() {
        g.up(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.U.prototype.hide.call(this)
    };
    a5.prototype.G = function() {
        this.B = !0;
        g.up(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.bd() && this.api.logVisibility(this.element, !1);
        this.expandButton.focus()
    };
    a5.prototype.K = function() {
        this.B = !1;
        g.sp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.bd() && this.api.logVisibility(this.element, !0);
        this.focus()
    };
    a5.prototype.Ta = function() {
        var a = this.api.getPlayerStateObject();
        g.Y(a, 1) || g.Y(a, 16) || g.Y(a, 32) || (!g.Y(a, 4) || g.Y(a, 2) || g.Y(a, 1024) ? (this.B || this.api.logVisibility(this.element, !1), this.D.hide()) : this.j.suggestionData.length > 0 && (this.B || (g.sp(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.c1(this.j), this.j.show(), this.api.logVisibility(this.element, !0)), this.D.show()))
    };
    g.z(b5, g.U);
    b5.prototype.show = function() {
        g.U.prototype.show.call(this);
        this.api.logVisibility(this.element, !0)
    };
    b5.prototype.xa = function() {
        c5(this);
        g.U.prototype.xa.call(this)
    };
    g.z(gib, g.gU);
    g.k = gib.prototype;
    g.k.hn = function() {
        return !1
    };
    g.k.create = function() {
        var a = this.J.U(),
            b = g.ER(this.J),
            c, d = (c = this.J.getVideoData()) == null ? void 0 : c.clientPlaybackNonce;
        d && g.AA({
            clientPlaybackNonce: d
        });
        a.bb && !a.disableOrganicUi && iib(this);
        this.Z = new cib(this.J);
        g.Q(this, this.Z);
        g.nS(this.J, this.Z.element, 4);
        this.ra = new Z4(this.J);
        g.Q(this, this.ra);
        g.nS(this.J, this.ra.element, 4);
        a.Ed && (this.watermark = new $4(this.J), g.Q(this, this.watermark), g.nS(this.J, this.watermark.element, 8));
        b && !a.disableOrganicUi && (this.K = new Yhb(this.J, b), g.Q(this, this.K), g.nS(this.J,
            this.K.element, 8), g.zR(this.J.app) && (this.onMutedAutoplayStarts(), this.K.hide()));
        a.B && (this.qa = new Y4(this.J), g.Q(this, this.qa), g.nS(this.J, this.qa.element, 4));
        this.j.T(this.J, "appresize", this.kc);
        this.j.T(this.J, "presentingplayerstatechange", this.Fk);
        this.j.T(this.J, "videodatachange", this.onVideoDataChange);
        this.j.T(this.J, "videoplayerreset", this.onReset);
        this.j.T(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.T(this.J, "onAdStart", this.onAdStart);
        this.j.T(this.J, "onAdComplete",
            this.onAdComplete);
        this.j.T(this.J, "onAdSkip", this.onAdSkip);
        this.j.T(this.J, "onAdStateChange", this.onAdStateChange);
        if (this.N = g.Ks(g.cP(a))) this.countdownTimer = new b5(this.J), g.Q(this, this.countdownTimer), g.nS(this.J, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.j.T(this.J, g.BD("embeds"), this.onCueRangeEnter), this.j.T(this.J, g.CD("embeds"), this.onCueRangeExit);
        this.Fc(this.J.getPlayerStateObject());
        this.player.Bg("embed");
        var e, f;
        ((e = this.J.U().getWebPlayerContextConfig()) == null ?
            0 : (f = e.embedsHostFlags) == null ? 0 : f.allowOverridingVisitorDataPlayerVars) && (a = g.ur("IDENTITY_MEMENTO")) && this.J.Xm("onMementoChange", a)
    };
    g.k.onCueRangeEnter = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (this.countdownTimer.show(), eib(this.countdownTimer))
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (c5(this.countdownTimer), this.countdownTimer.hide())
    };
    g.k.kc = function() {
        var a = this.J.ob().getPlayerSize();
        this.rg && this.rg.resize(a)
    };
    g.k.onReset = function() {
        fib(this)
    };
    g.k.Fk = function(a) {
        this.Fc(a.state)
    };
    g.k.Fc = function(a) {
        g.Y(a, 128) ? (this.rg || (this.rg = new X4(this.J), g.Q(this, this.rg), g.nS(this.J, this.rg.element, 4)), this.rg.B(a.Yg), this.rg.show(), g.sp(this.J.getRootNode(), "ytp-embed-error")) : this.rg && (this.rg.dispose(), this.rg = null, g.up(this.J.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.j)
            if (g.Y(a, 64)) this.countdownTimer.hide(), c5(this.countdownTimer);
            else if (a.isPaused()) {
            var b = this.countdownTimer;
            b.B || (b.B = !0, b.G = (0, g.T)())
        } else a.isPlaying() && this.countdownTimer.B &&
            (b = this.countdownTimer, b.B && (b.D += (0, g.T)() - b.G, b.B = !1, dib(b)));
        hib(this, a)
    };
    g.k.onMutedAutoplayStarts = function() {
        this.J.getVideoData().mutedAutoplay && this.Z && g.wp(this.J.getRootNode(), "ytp-muted-autoplay", !0)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c = this.OF !== b.videoId;
        a = !c && a === "dataloaded";
        var d = {
            isShortsModeEnabled: !!this.J.bd()
        };
        g.Nt("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: d
        });
        c && (this.OF = b.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.N && (this.J.mf("embeds"), b.isAd() || b.limitedPlaybackDurationInSeconds < 5 || g.jS(this.J) || (b = Math.max((b.startSeconds + b.limitedPlaybackDurationInSeconds - 5) * 1E3, 0),
            b = new g.zD(b, b + 5E3, {
                id: "countdown timer",
                namespace: "embeds"
            }), this.J.hf([b]))), this.J.U().bb && !this.J.U().disableOrganicUi && (fib(this), iib(this)));
        this.J.U().C && this.C && this.C.detach()
    };
    g.k.onAdStart = function() {
        d5(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.k.onAdComplete = function() {
        d5(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.k.onAdSkip = function() {
        d5(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.k.onAdStateChange = function(a) {
        a === 2 && d5(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.fU("embed", gib);
})(_yt_player);