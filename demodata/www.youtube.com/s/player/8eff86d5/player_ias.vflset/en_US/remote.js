(function(g) {
    var window = this;
    'use strict';
    var c7 = function(a) {
            g.Ak(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.$a()).toString(36));
            return a
        },
        d7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Iga(a.D, b, c)
        },
        ypb = function(a) {
            if (a instanceof g.ln) return a;
            if (typeof a.pm == "function") return a.pm(!1);
            if (g.Ta(a)) {
                var b = 0,
                    c = new g.ln;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.o1;
                        if (b in a) return g.mn(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        zpb = function(a, b, c) {
            if (g.Ta(a)) g.Mb(a, b, c);
            else
                for (a = ypb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Apb = function(a, b) {
            var c = [];
            zpb(b, function(d) {
                try {
                    var e = g.Pp.prototype.B.call(this, d, !0)
                } catch (f) {
                    if (f == "Storage: Invalid value was encountered") return;
                    throw f;
                }
                e === void 0 ? c.push(d) : g.Cla(e) && c.push(d)
            }, a);
            return c
        },
        Bpb = function(a, b) {
            Apb(a, b).forEach(function(c) {
                g.Pp.prototype.remove.call(this, c)
            }, a)
        },
        Cpb = function(a) {
            if (a.qa) {
                if (a.qa.locationOverrideToken) return {
                    locationOverrideToken: a.qa.locationOverrideToken
                };
                if (a.qa.latitudeE7 != null && a.qa.longitudeE7 != null) return {
                    latitudeE7: a.qa.latitudeE7,
                    longitudeE7: a.qa.longitudeE7
                }
            }
            return null
        },
        Dpb = function(a, b) {
            g.sb(a, b) || a.push(b)
        },
        Epb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Fpb = function(a, b) {
            return g.Ec(a, b)
        },
        Gpb = function(a) {
            try {
                return g.Na.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        e7 = function(a) {
            if (g.Na.JSON) try {
                return g.Na.JSON.parse(a)
            } catch (b) {}
            return Gpb(a)
        },
        Hpb = function(a) {
            if (a.Im && typeof a.Im == "function") return a.Im();
            if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
            if (typeof a === "string") return a.split("");
            if (g.Ta(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.Bc(a)
        },
        Ipb = function(a) {
            if (a.Vn && typeof a.Vn == "function") return a.Vn();
            if (!a.Im || typeof a.Im != "function") {
                if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
                if (!(typeof Set !== "undefined" && a instanceof Set)) {
                    if (g.Ta(a) || typeof a === "string") {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.Cc(a)
                }
            }
        },
        Jpb = function(a, b) {
            if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
            else if (g.Ta(a) || typeof a === "string") Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = Ipb(a), d = Hpb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        Kpb = function(a, b, c, d) {
            var e = new g.ok(null);
            a && g.pk(e, a);
            b && g.qk(e, b);
            c && g.vk(e, c);
            d && (e.B = d);
            return e
        },
        Lpb = function() {
            this.j = f7();
            this.j.Xj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                ud: 3,
                rd: "channel_type"
            })
        },
        Mpb = function(a, b) {
            a.j.hm("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Npb = function() {
            this.j = f7();
            this.j.Xj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                ud: 3,
                rd: "channel_type"
            })
        },
        Opb = function(a, b) {
            a.j.hm("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        Ppb = function() {
            this.j = f7();
            this.j.Xj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                ud: 3,
                rd: "channel_type"
            })
        },
        Qpb = function(a, b) {
            a.j.hm("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        Rpb = function() {
            this.j = f7();
            this.j.Xj("/client_streamz/youtube/living_room/mdx/channel/error", {
                ud: 3,
                rd: "channel_type"
            })
        },
        Spb = function(a, b) {
            a.j.hm("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        Tpb = function() {
            this.j = f7();
            this.j.Xj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        Upb = function() {
            this.j = f7();
            this.j.Xj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        Vpb = function(a, b) {
            return new g.op(a, b)
        },
        g7 = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        h7 = function(a, b) {
            this.B = {};
            this.j = [];
            this.Ev = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof h7)
                    for (c = a.Vn(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        i7 = function(a) {
            if (a.size != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    g7(a.B, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.size != a.j.length) {
                var e = {};
                for (c = b = 0; b < a.j.length;) d = a.j[b], g7(e, d) || (a.j[c++] = d, e[d] = 1), b++;
                a.j.length = c
            }
        },
        Zpb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new h7;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", Wpb(this, a.capabilities || ""), Xpb(this, a.compatibleSenderThemes || ""), Ypb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        Wpb = function(a, b) {
            a.capabilities.clear();
            g.qn(b.split(","), g.Za(Fpb, $pb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        Xpb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.qn(b.split(","), g.Za(Fpb, aqb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        Ypb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        j7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        k7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        bqb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        cqb = function(a) {
            return new j7(a)
        },
        dqb = function(a) {
            return Array.isArray(a) ? g.Gl(a, cqb) : []
        },
        l7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        eqb = function(a) {
            return Array.isArray(a) ? "[" + g.Gl(a, l7).join(",") + "]" : "null"
        },
        fqb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = Math.random() * 16 | 0;
                    return (a == "x" ? b : b & 3 | 8).toString(16)
                })
        },
        gqb = function(a) {
            return g.Gl(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        hqb = function(a, b) {
            return g.qb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        m7 = function(a, b) {
            return g.qb(a, function(c) {
                return k7(c, b)
            })
        },
        iqb = function() {
            var a = (0, g.gt)();
            a && Bpb(a, a.j.pm(!0))
        },
        n7 = function() {
            var a = g.jt("yt-remote-connected-devices") || [];
            g.Jb(a);
            return a
        },
        jqb = function(a) {
            if (a.length == 0) return [];
            var b = a[0].indexOf("#"),
                c = b == -1 ? a[0] : a[0].substring(0, b);
            return g.Gl(a, function(d, e) {
                return e == 0 ? d : d.substring(c.length)
            })
        },
        kqb = function(a) {
            g.it("yt-remote-connected-devices", a, 86400)
        },
        o7 = function() {
            if (lqb) return lqb;
            var a = g.jt("yt-remote-device-id");
            a || (a = fqb(), g.it("yt-remote-device-id", a, 31536E3));
            for (var b = n7(), c = 1, d = a; g.sb(b, d);) c++, d = a + "#" + c;
            return lqb = d
        },
        mqb = function() {
            var a = n7(),
                b = o7();
            g.lt() && g.Lb(a, b);
            a = jqb(a);
            if (a.length == 0) try {
                g.ks("remote_sid")
            } catch (c) {} else try {
                g.is("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        nqb = function() {
            return g.jt("yt-remote-session-browser-channel")
        },
        oqb = function() {
            return g.jt("yt-remote-local-screens") || []
        },
        pqb = function() {
            g.it("yt-remote-lounge-token-expiration", !0, 86400)
        },
        qqb = function(a) {
            a.length > 5 && (a = a.slice(a.length - 5));
            var b = g.Gl(oqb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Gl(a, function(d) {
                    return d.loungeToken
                });
            g.Hl(c, function(d) {
                return !g.sb(b, d)
            }) && pqb();
            g.it("yt-remote-local-screens", a, 31536E3)
        },
        p7 = function(a) {
            a || (g.kt("yt-remote-session-screen-id"), g.kt("yt-remote-session-video-id"));
            mqb();
            a = n7();
            g.ub(a, o7());
            kqb(a)
        },
        rqb = function() {
            if (!q7) {
                var a = g.Vp();
                a && (q7 = new g.Mp(a))
            }
        },
        sqb = function() {
            rqb();
            return q7 ? !!q7.get("yt-remote-use-staging-server") : !1
        },
        r7 = function(a, b) {
            g.Kv[a] = !0;
            var c = g.Iv();
            c && c.publish.apply(c, arguments);
            g.Kv[a] = !1
        },
        tqb = function() {},
        f7 = function() {
            if (!s7) {
                s7 = new g.Ue(new tqb);
                var a = g.Vr("client_streamz_web_flush_count", -1);
                a !== -1 && (s7.C = a)
            }
            return s7
        },
        uqb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        vqb = function(a) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
        },
        wqb = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        t7 = function(a) {
            a.length ? xqb(a.shift(), function() {
                t7(a)
            }) : yqb()
        },
        zqb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        xqb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Ud(d, g.Nq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Aqb = function() {
            var a = uqb(),
                b = [];
            if (a > 1) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        yqb = function() {
            var a = wqb();
            a && a(!1, "No cast extension found")
        },
        Cqb = function() {
            if (Bqb) {
                var a = 2,
                    b = wqb(),
                    c = function() {
                        a--;
                        a == 0 && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                xqb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", yqb, c)
            }
        },
        Dqb = function() {
            Cqb();
            var a = Aqb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            t7(a)
        },
        Fqb = function() {
            Cqb();
            var a = Aqb();
            a.push.apply(a, g.w(Eqb.map(zqb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            t7(a)
        },
        u7 = function(a, b, c) {
            g.P.call(this);
            this.K = c != null ? (0, g.Ya)(a, c) : a;
            this.Wi = b;
            this.G = (0, g.Ya)(this.F4, this);
            this.j = !1;
            this.B = 0;
            this.C = this.qd = null;
            this.D = []
        },
        v7 = function(a, b, c) {
            g.P.call(this);
            this.D = c != null ? a.bind(c) : a;
            this.Wi = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.qd = null
        },
        Gqb = function(a) {
            a.qd = g.Se(function() {
                a.qd = null;
                a.j && !a.B && (a.j = !1, Gqb(a))
            }, a.Wi);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        w7 = function() {},
        Hqb = function() {
            g.lb.call(this, "p")
        },
        Iqb = function() {
            g.lb.call(this, "o")
        },
        Kqb = function() {
            return Jqb = Jqb || new g.Zc
        },
        Lqb = function(a) {
            g.lb.call(this, "serverreachability", a)
        },
        x7 = function(a) {
            var b = Kqb();
            b.dispatchEvent(new Lqb(b, a))
        },
        Mqb = function(a) {
            g.lb.call(this, "statevent", a)
        },
        y7 = function(a) {
            var b = Kqb();
            b.dispatchEvent(new Mqb(b, a))
        },
        Nqb = function(a, b, c, d) {
            g.lb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        z7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Na.setTimeout(function() {
                a()
            }, b)
        },
        A7 = function() {},
        B7 = function(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.Tb = c;
            this.Nb = d || 1;
            this.Bb = new g.Fk(this);
            this.fb = 45E3;
            this.Na = null;
            this.K = !1;
            this.Y = this.bb = this.Z = this.Ra = this.Ca = this.qb = this.qa = null;
            this.ra = [];
            this.j = null;
            this.N = 0;
            this.G = this.Ia = null;
            this.Jb = -1;
            this.Ka = !1;
            this.Xa = 0;
            this.Wa = null;
            this.Kb = this.Va = this.zb = this.Ea = !1;
            this.B = new Oqb
        },
        Oqb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        Qqb = function(a, b, c) {
            a.Ra = 1;
            a.Z = c7(b.clone());
            a.Y = c;
            a.Ea = !0;
            Pqb(a, null)
        },
        Pqb = function(a, b) {
            a.Ca = Date.now();
            C7(a);
            a.bb = a.Z.clone();
            d7(a.bb, "t", a.Nb);
            a.N = 0;
            var c = a.C.Ra;
            a.B = new Oqb;
            a.j = Rqb(a.C, c ? b : null, !a.Y);
            a.Xa > 0 && (a.Wa = new v7((0, g.Ya)(a.KU, a, a.j), a.Xa));
            a.Bb.listen(a.j, "readystatechange", a.H4);
            b = a.Na ? g.Kc(a.Na) : {};
            a.Y ? (a.Ia || (a.Ia = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.bb, a.Ia, a.Y, b)) : (a.Ia = "GET", a.j.send(a.bb, a.Ia, null, b));
            x7(1)
        },
        Tqb = function(a) {
            if (!Sqb(a)) return g.ij(a.j);
            var b = g.jj(a.j);
            if (b === "") return "";
            var c = "",
                d = b.length,
                e = g.gj(a.j) == 4;
            if (!a.B.C) {
                if (typeof TextDecoder === "undefined") return D7(a), E7(a), "";
                a.B.C = new g.Na.TextDecoder
            }
            for (var f = 0; f < d; f++) a.B.B = !0, c += a.B.C.decode(b[f], {
                stream: !(e && f == d - 1)
            });
            b.length = 0;
            a.B.j += c;
            a.N = 0;
            return a.B.j
        },
        Sqb = function(a) {
            return a.j ? a.Ia == "GET" && a.Ra != 2 && a.C.gf : !1
        },
        Wqb = function(a, b) {
            var c = a.N,
                d = b.indexOf("\n", c);
            if (d == -1) return Uqb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Vqb;
            d += 1;
            if (d + c > b.length) return Uqb;
            b = b.slice(d, d + c);
            a.N = d + c;
            return b
        },
        C7 = function(a) {
            a.qb = Date.now() + a.fb;
            Xqb(a, a.fb)
        },
        Xqb = function(a, b) {
            if (a.qa != null) throw Error("WatchDog timer not null");
            a.qa = z7((0, g.Ya)(a.G4, a), b)
        },
        Yqb = function(a) {
            a.qa && (g.Na.clearTimeout(a.qa), a.qa = null)
        },
        E7 = function(a) {
            a.C.Lg() || a.Ka || Zqb(a.C, a)
        },
        D7 = function(a) {
            Yqb(a);
            g.gb(a.Wa);
            a.Wa = null;
            a.Bb.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        grb = function(a, b) {
            try {
                var c = a.C;
                if (c.Qh != 0 && (c.j == a || $qb(c.B, a)))
                    if (!a.Va && $qb(c.B, a) && c.Qh == 3) {
                        try {
                            var d = c.nf.j.parse(b)
                        } catch (x) {
                            d = null
                        }
                        if (Array.isArray(d) && d.length == 3) {
                            var e = d;
                            if (e[0] == 0) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ca + 3E3 < a.Ca) F7(c), G7(c);
                                        else break a;
                                    arb(c);
                                    y7(18)
                                }
                            }
                            else c.je = e[1], 0 < c.je - c.Wa && e[2] < 37500 && c.Va && c.ra == 0 && !c.qa && (c.qa = z7((0, g.Ya)(c.I4, c), 6E3));
                            if (brb(c.B) <= 1 && c.Lc) {
                                try {
                                    c.Lc()
                                } catch (x) {}
                                c.Lc = void 0
                            }
                        } else H7(c, 11)
                    } else if ((a.Va || c.j == a) && F7(c), !g.Qb(b))
                    for (e = c.nf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Wa = f[0];
                        f = f[1];
                        if (c.Qh == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Nb = f[2];
                                var h = f[3];
                                h != null && (c.LU = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.Xa = 1.5 * l);
                                d = c;
                                var m = a.ZP();
                                if (m) {
                                    var n = g.kj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.Ub(n, "spdy") || g.Ub(n, "quic") || g.Ub(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (crb(p, p.B), p.B = null))
                                    }
                                    if (d.Ea) {
                                        var q = g.kj(m, "X-HTTP-Session-Id");
                                        q && (d.ze = q, g.Ak(d.Na, d.Ea, q))
                                    }
                                }
                                c.Qh = 3;
                                c.G && c.G.RU();
                                c.Bc && (c.Xc = Date.now() - a.Ca);
                                d = c;
                                var r = a;
                                d.Dd = drb(d, d.Ra ? d.Nb : null, d.Tb);
                                if (r.Va) {
                                    erb(d.B,
                                        r);
                                    var t = r,
                                        u = d.Xa;
                                    u && t.setTimeout(u);
                                    t.qa && (Yqb(t), C7(t));
                                    d.j = r
                                } else frb(d);
                                c.C.length > 0 && I7(c)
                            } else f[0] != "stop" && f[0] != "close" || H7(c, 7);
                        else c.Qh == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? H7(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.QU(f), c.ra = 0)
                    }
                x7(4)
            } catch (x) {}
        },
        hrb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        irb = function(a) {
            this.G = a || 10;
            g.Na.PerformanceNavigationTiming ? (a = g.Na.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.Na.chrome && g.Na.chrome.loadTimes && g.Na.chrome.loadTimes() && g.Na.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            this.D > 1 && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        jrb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        brb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        $qb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        crb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        erb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        krb = function(a) {
            if (a.B != null) return a.C.concat(a.B.ra);
            if (a.j != null && a.j.size !== 0) {
                var b = a.C;
                a = g.v(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.Ab(a.C)
        },
        lrb = function(a, b) {
            var c = new A7;
            if (g.Na.Image) {
                var d = new Image;
                d.onload = g.Za(J7, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.Za(J7, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.Za(J7, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.Za(J7, c, "TestLoadImage: timeout", !1, b, d);
                g.Na.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        mrb = function(a, b) {
            var c = new A7,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    J7(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? J7(c, "TestPingServer: ok", !0, b) : J7(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                J7(c, "TestPingServer: error", !1, b)
            })
        },
        J7 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        nrb = function() {
            this.j = new w7
        },
        orb = function(a, b, c) {
            var d = c || "";
            try {
                Jpb(a, function(e, f) {
                    var h = e;
                    g.Va(e) && (h = g.Mi(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        K7 = function(a, b, c) {
            return c && c.M9 ? c.M9[a] || b : b
        },
        prb = function(a) {
            this.C = [];
            this.Nb = this.Dd = this.Na = this.Tb = this.j = this.ze = this.Ea = this.Ka = this.N = this.Jb = this.Y = null;
            this.Pf = this.bb = 0;
            this.Of = K7("failFast", !1, a);
            this.Va = this.qa = this.Z = this.K = this.G = null;
            this.qc = !0;
            this.je = this.Wa = -1;
            this.Kb = this.ra = this.Ca = 0;
            this.Nf = K7("baseRetryDelayMs", 5E3, a);
            this.Qf = K7("retryDelaySeedMs", 1E4, a);
            this.rh = K7("forwardChannelMaxRetries", 2, a);
            this.Ed = K7("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Xd = a && a.Hpa || void 0;
            this.Sf = a && a.xoa || void 0;
            this.gf = a && a.Fpa || !1;
            this.Xa = void 0;
            this.Ra = a && a.nea ||
                !1;
            this.D = "";
            this.B = new irb(a && a.Bma);
            this.nf = new nrb;
            this.Bb = a && a.Sma || !1;
            this.qb = a && a.Hma || !1;
            this.Bb && this.qb && (this.qb = !1);
            this.Rf = a && a.rma || !1;
            a && a.Uma && (this.qc = !1);
            this.Bc = !this.Bb && this.qc && a && a.Fma || !1;
            this.Sd = void 0;
            a && a.a_ && a.a_ > 0 && (this.Sd = a.a_);
            this.Lc = void 0;
            this.Xc = 0;
            this.fb = !1;
            this.zb = this.Ia = null
        },
        G7 = function(a) {
            a.j && (qrb(a), a.j.cancel(), a.j = null)
        },
        rrb = function(a) {
            G7(a);
            a.Z && (g.Na.clearTimeout(a.Z), a.Z = null);
            F7(a);
            a.B.cancel();
            a.K && (typeof a.K === "number" && g.Na.clearTimeout(a.K), a.K = null)
        },
        I7 = function(a) {
            jrb(a.B) || a.K || (a.K = !0, g.He(a.NU, a), a.Ca = 0)
        },
        trb = function(a, b) {
            if (brb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.ra.concat(a.C), !0;
            if (a.Qh == 1 || a.Qh == 2 || a.Ca >= (a.Of ? 0 : a.rh)) return !1;
            a.K = z7((0, g.Ya)(a.NU, a, b), srb(a, a.Ca));
            a.Ca++;
            return !0
        },
        vrb = function(a, b) {
            var c;
            b ? c = b.Tb : c = a.bb++;
            var d = a.Na.clone();
            g.Ak(d, "SID", a.D);
            g.Ak(d, "RID", c);
            g.Ak(d, "AID", a.Wa);
            L7(a, d);
            a.N && a.Y && g.Ek(d, a.N, a.Y);
            c = new B7(a, a.D, c, a.Ca + 1);
            a.N === null && (c.Na = a.Y);
            b && (a.C = b.ra.concat(a.C));
            b = urb(a, c, 1E3);
            c.setTimeout(Math.round(a.Ed * .5) + Math.round(a.Ed * .5 * Math.random()));
            crb(a.B, c);
            Qqb(c, d, b)
        },
        L7 = function(a, b) {
            a.Ka && g.wc(a.Ka, function(c, d) {
                g.Ak(b, d, c)
            });
            a.G && Jpb({}, function(c, d) {
                g.Ak(b, d, c)
            })
        },
        urb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.Ya)(a.G.J4, a.G, a) : null;
            a: {
                for (var e = a.C, f = -1;;) {
                    var h = ["count=" + c];
                    f == -1 ? c > 0 ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                    for (var l = !0, m = 0; m < c; m++) {
                        var n = e[m].j,
                            p = e[m].map;
                        n -= f;
                        if (n < 0) f = Math.max(0, e[m].j - 100), l = !1;
                        else try {
                            orb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                    }
                    if (l) {
                        d = h.join("&");
                        break a
                    }
                }
                d = void 0
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        frb = function(a) {
            a.j || a.Z || (a.Kb = 1, g.He(a.MU, a), a.ra = 0)
        },
        arb = function(a) {
            if (a.j || a.Z || a.ra >= 3) return !1;
            a.Kb++;
            a.Z = z7((0, g.Ya)(a.MU, a), srb(a, a.ra));
            a.ra++;
            return !0
        },
        qrb = function(a) {
            a.Ia != null && (g.Na.clearTimeout(a.Ia), a.Ia = null)
        },
        wrb = function(a) {
            a.j = new B7(a, a.D, "rpc", a.Kb);
            a.N === null && (a.j.Na = a.Y);
            a.j.Xa = 0;
            var b = a.Dd.clone();
            g.Ak(b, "RID", "rpc");
            g.Ak(b, "SID", a.D);
            g.Ak(b, "AID", a.Wa);
            g.Ak(b, "CI", a.Va ? "0" : "1");
            !a.Va && a.Sd && g.Ak(b, "TO", a.Sd);
            g.Ak(b, "TYPE", "xmlhttp");
            L7(a, b);
            a.N && a.Y && g.Ek(b, a.N, a.Y);
            a.Xa && a.j.setTimeout(a.Xa);
            var c = a.j;
            a = a.Nb;
            c.Ra = 1;
            c.Z = c7(b.clone());
            c.Y = null;
            c.Ea = !0;
            Pqb(c, a)
        },
        F7 = function(a) {
            a.qa != null && (g.Na.clearTimeout(a.qa), a.qa = null)
        },
        Zqb = function(a, b) {
            var c = null;
            if (a.j == b) {
                F7(a);
                qrb(a);
                a.j = null;
                var d = 2
            } else if ($qb(a.B, b)) c = b.ra, erb(a.B, b), d = 1;
            else return;
            if (a.Qh != 0)
                if (b.K)
                    if (d == 1) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Ca;
                        var e = a.Ca;
                        d = Kqb();
                        d.dispatchEvent(new Nqb(d, c, b, e));
                        I7(a)
                    } else frb(a);
            else {
                var f = b.Jb;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && trb(a, b) || d == 2 && arb(a))) switch (c && c.length > 0 && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        H7(a, 5);
                        break;
                    case 4:
                        H7(a, 10);
                        break;
                    case 3:
                        H7(a, 6);
                        break;
                    default:
                        H7(a, 2)
                }
            }
        },
        srb = function(a, b) {
            var c = a.Nf + Math.floor(Math.random() *
                a.Qf);
            a.isActive() || (c *= 2);
            return c * b
        },
        H7 = function(a, b) {
            if (b == 2) {
                var c = (0, g.Ya)(a.vea, a),
                    d = a.Sf,
                    e = !d;
                d = new g.ok(d || "//www.google.com/images/cleardot.gif");
                g.Na.location && g.Na.location.protocol == "http" || g.pk(d, "https");
                c7(d);
                e ? lrb(d.toString(), c) : mrb(d.toString(), c)
            } else y7(2);
            a.Qh = 0;
            a.G && a.G.PU(b);
            xrb(a);
            rrb(a)
        },
        xrb = function(a) {
            a.Qh = 0;
            a.zb = [];
            if (a.G) {
                var b = krb(a.B);
                if (b.length != 0 || a.C.length != 0) g.Bb(a.zb, b), g.Bb(a.zb, a.C), a.B.C.length = 0, g.Ab(a.C), a.C.length = 0;
                a.G.OU()
            }
        },
        yrb = function(a) {
            if (a.Qh == 0) return a.zb;
            var b = [];
            g.Bb(b, krb(a.B));
            g.Bb(b, a.C);
            return b
        },
        drb = function(a, b, c) {
            var d = g.Bk(c);
            d.j != "" ? (b && g.qk(d, b + "." + d.j), g.vk(d, d.C)) : (d = g.Na.location, d = Kpb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ea;
            c = a.ze;
            b && c && g.Ak(d, b, c);
            g.Ak(d, "VER", a.LU);
            L7(a, d);
            return d
        },
        Rqb = function(a, b, c) {
            if (b && !a.Ra) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.gf && !a.Xd ? new g.dj(new g.kk({
                n2: c
            })) : new g.dj(a.Xd);
            b.K = a.Ra;
            return b
        },
        zrb = function() {},
        Arb = function() {},
        N7 = function(a, b) {
            g.Zc.call(this);
            this.j = new prb(b);
            this.G = a;
            this.B = b && b.A$ || null;
            a = b && b.z$ || null;
            b && b.zma && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.aoa || null;
            b && b.m_ && (a ? a["X-WebChannel-Content-Type"] = b.m_ : a = {
                "X-WebChannel-Content-Type": b.m_
            });
            b && b.iX && (a ? a["X-WebChannel-Client-Profile"] = b.iX : a = {
                "X-WebChannel-Client-Profile": b.iX
            });
            this.j.Jb = a;
            (a = b && b.Zna) && !g.Qb(a) && (this.j.N = a);
            this.K = b && b.nea || !1;
            this.D = b && b.Zoa || !1;
            (b = b && b.J9) && !g.Qb(b) && (this.j.Ea = b, g.Dc(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new M7(this)
        },
        Brb = function(a) {
            Hqb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Ac(b)) ? g.Hc(b, this.j) : b : this.data = a
        },
        Crb = function(a) {
            Iqb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        M7 = function(a) {
            this.j = a
        },
        Drb = function(a, b) {
            this.B = a;
            this.j = b
        },
        Erb = function(a) {
            return yrb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? Gpb(b) : b) : c = b;
                return c
            })
        },
        O7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Na.setTimeout(function() {
                a()
            }, b)
        },
        Q7 = function(a) {
            P7.dispatchEvent(new Frb(P7, a))
        },
        Frb = function(a) {
            g.lb.call(this, "statevent", a)
        },
        R7 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.Fk(this);
            this.G = new g.Re;
            this.G.setInterval(250)
        },
        Hrb = function(a, b, c) {
            a.oI = 1;
            a.fD = c7(b.clone());
            a.Sv = c;
            a.Ea = !0;
            Grb(a, null)
        },
        Irb = function(a, b, c, d, e) {
            a.oI = 1;
            a.fD = c7(b.clone());
            a.Sv = null;
            a.Ea = c;
            e && (a.F1 = !1);
            Grb(a, d)
        },
        Grb = function(a, b) {
            a.iD = Date.now();
            Jrb(a);
            a.nI = a.fD.clone();
            d7(a.nI, "t", a.K);
            a.qI = 0;
            a.mj = a.j.fN(a.j.jD() ? b : null);
            a.dN > 0 && (a.mI = new v7((0, g.Ya)(a.SU, a, a.mj), a.dN));
            a.C.listen(a.mj, "readystatechange", a.L4);
            b = a.Qv ? g.Kc(a.Qv) : {};
            a.Sv ? (a.pI = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.mj.send(a.nI, a.pI, a.Sv, b)) : (a.pI = "GET", a.F1 && !g.rc && (b.Connection = "close"), a.mj.send(a.nI, a.pI, null, b));
            a.j.ws(1)
        },
        Mrb = function(a, b) {
            var c = a.qI,
                d = b.indexOf("\n", c);
            if (d == -1) return Krb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Lrb;
            d += 1;
            if (d + c > b.length) return Krb;
            b = b.slice(d, d + c);
            a.qI = d + c;
            return b
        },
        Jrb = function(a) {
            a.eN = Date.now() + a.B;
            Nrb(a, a.B)
        },
        Nrb = function(a, b) {
            if (a.ez != null) throw Error("WatchDog timer not null");
            a.ez = O7((0, g.Ya)(a.K4, a), b)
        },
        Orb = function(a) {
            a.ez && (g.Na.clearTimeout(a.ez), a.ez = null)
        },
        Prb = function(a) {
            a.j.Lg() || a.gD || a.j.hN(a)
        },
        S7 = function(a) {
            Orb(a);
            g.gb(a.mI);
            a.mI = null;
            a.G.stop();
            a.C.removeAll();
            if (a.mj) {
                var b = a.mj;
                a.mj = null;
                b.abort();
                b.dispose()
            }
            a.L2 && (a.L2 = null)
        },
        Qrb = function(a, b) {
            try {
                a.j.TU(a, b), a.j.ws(4)
            } catch (c) {}
        },
        Srb = function(a, b, c, d, e) {
            if (d == 0) c(!1);
            else {
                var f = e || 0;
                d--;
                Rrb(a, b, function(h) {
                    h ? c(!0) : g.Na.setTimeout(function() {
                        Srb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        Rrb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    T7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    T7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    T7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    T7(d), c(!1)
                } catch (e) {}
            };
            g.Na.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        T7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        Trb = function(a) {
            this.j = a;
            this.B = new w7
        },
        Urb = function(a) {
            var b = U7(a.j, a.dE, "/mail/images/cleardot.gif");
            c7(b);
            Srb(b.toString(), 5E3, (0, g.Ya)(a.c7, a), 3, 2E3);
            a.ws(1)
        },
        Vrb = function(a) {
            var b = a.j.K;
            b != null ? (Q7(5), b ? (Q7(11), V7(a.j, a, !1)) : (Q7(12), V7(a.j, a, !0))) : (a.Xk = new R7(a), a.Xk.Qv = a.gN, b = a.j, b = U7(b, b.jD() ? a.rI : null, a.iN), Q7(5), d7(b, "TYPE", "xmlhttp"), Irb(a.Xk, b, !1, a.rI, !1))
        },
        Wrb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new w7;
            this.Y = a || null;
            this.K = b != null ? b : null;
            this.Z = c || !1
        },
        Xrb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Yrb = function(a, b, c, d) {
            g.lb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        Zrb = function(a) {
            g.lb.call(this, "serverreachability", a)
        },
        asb = function(a) {
            a.M4(1, 0);
            a.sI = U7(a, null, a.kN);
            $rb(a)
        },
        bsb = function(a) {
            a.Gt && (a.Gt.abort(), a.Gt = null);
            a.Tg && (a.Tg.cancel(), a.Tg = null);
            a.Zq && (g.Na.clearTimeout(a.Zq), a.Zq = null);
            W7(a);
            a.nk && (a.nk.cancel(), a.nk = null);
            a.Zs && (g.Na.clearTimeout(a.Zs), a.Zs = null)
        },
        csb = function(a, b) {
            if (a.j == 0) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new Xrb(a.N4++, b));
            a.j != 2 && a.j != 3 || $rb(a)
        },
        dsb = function(a) {
            var b = 0;
            a.Tg && b++;
            a.nk && b++;
            return b
        },
        $rb = function(a) {
            a.nk || a.Zs || (a.Zs = O7((0, g.Ya)(a.XU, a), 0), a.gz = 0)
        },
        gsb = function(a, b) {
            if (a.j == 1) {
                if (!b) {
                    a.lD = Math.floor(Math.random() * 1E5);
                    b = a.lD++;
                    var c = new R7(a, "", b);
                    c.Qv = a.pp;
                    var d = esb(a),
                        e = a.sI.clone();
                    g.Ak(e, "RID", b);
                    g.Ak(e, "CVER", "1");
                    X7(a, e);
                    Hrb(c, e, d);
                    a.nk = c;
                    a.j = 2
                }
            } else a.j == 3 && (b ? fsb(a, b) : a.B.length == 0 || a.nk || fsb(a))
        },
        fsb = function(a, b) {
            if (b)
                if (a.Tv > 6) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.lD - 1;
                    b = esb(a)
                } else c = b.N, b = b.Sv;
            else c = a.lD++, b = esb(a);
            var d = a.sI.clone();
            g.Ak(d, "SID", a.D);
            g.Ak(d, "RID", c);
            g.Ak(d, "AID", a.iz);
            X7(a, d);
            c = new R7(a, a.D, c, a.gz + 1);
            c.Qv = a.pp;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.nk = c;
            Hrb(c, d, b)
        },
        X7 = function(a, b) {
            a.Pi && (a = a.Pi.bV()) && g.wc(a, function(c, d) {
                g.Ak(b, d, c)
            })
        },
        esb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (a.Tv > 6 && b > 0) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    XF: void 0
                }, f++) {
                e.XF = a.B[f].j;
                var h = a.B[f].map;
                e.XF = a.Tv <= 6 ? f : e.XF - d;
                try {
                    g.wc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.XF + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.XF + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        hsb = function(a) {
            a.Tg || a.Zq || (a.N = 1, a.Zq = O7((0, g.Ya)(a.WU, a), 0), a.fz = 0)
        },
        jsb = function(a) {
            if (a.Tg || a.Zq || a.fz >= 3) return !1;
            a.N++;
            a.Zq = O7((0, g.Ya)(a.WU, a), isb(a, a.fz));
            a.fz++;
            return !0
        },
        V7 = function(a, b, c) {
            a.QM = a.K == null ? c : !a.K;
            a.qp = b.Yq;
            a.Z || asb(a)
        },
        W7 = function(a) {
            a.Uv != null && (g.Na.clearTimeout(a.Uv), a.Uv = null)
        },
        isb = function(a, b) {
            var c = 5E3 + Math.floor(Math.random() * 1E4);
            a.isActive() || (c *= 2);
            return c * b
        },
        Y7 = function(a, b) {
            if (b == 2 || b == 9) {
                var c = null;
                a.Pi && (c = null);
                var d = (0, g.Ya)(a.uea, a);
                c || (c = new g.ok("//www.google.com/images/cleardot.gif"), c7(c));
                Rrb(c.toString(), 1E4, d)
            } else Q7(2);
            ksb(a, b)
        },
        ksb = function(a, b) {
            a.j = 0;
            a.Pi && a.Pi.YU(b);
            lsb(a);
            bsb(a)
        },
        lsb = function(a) {
            a.j = 0;
            a.qp = -1;
            if (a.Pi)
                if (a.C.length == 0 && a.B.length == 0) a.Pi.lN();
                else {
                    var b = g.Ab(a.C),
                        c = g.Ab(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Pi.lN(b, c)
                }
        },
        U7 = function(a, b, c) {
            var d = g.Bk(c);
            if (d.j != "") b && g.qk(d, b + "." + d.j), g.vk(d, d.C);
            else {
                var e = window.location;
                d = Kpb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.kD && g.wc(a.kD, function(f, h) {
                g.Ak(d, h, f)
            });
            g.Ak(d, "VER", a.Tv);
            X7(a, d);
            return d
        },
        msb = function() {},
        nsb = function() {
            this.j = [];
            this.B = []
        },
        osb = function(a) {
            g.lb.call(this, "channelMessage");
            this.message = a
        },
        psb = function(a) {
            g.lb.call(this, "channelError");
            this.error = a
        },
        qsb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Z7 = function(a, b) {
            g.P.call(this);
            this.j = new g.kp(this.jca, 0, this);
            g.Q(this, this.j);
            this.Wi = 5E3;
            this.B = 0;
            if (typeof a === "function") b && (a = (0, g.Ya)(a, b));
            else if (a && typeof a.handleEvent === "function") a = (0, g.Ya)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        rsb = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? function() {
                return ""
            } : d;
            e = e === void 0 ? !1 : e;
            this.Ca = a;
            this.N = b;
            this.C = new g.Lp;
            this.B = new Z7(this.zda, this);
            this.j = null;
            this.qa = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Ra = c;
            this.ra = d;
            this.Va = e;
            this.Na = new Lpb;
            this.Ia = new Npb;
            this.Ka = new Ppb;
            this.Ea = new Rpb;
            this.Wa = new Tpb;
            this.bb = new Upb
        },
        ssb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.pp || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.pp = c
            }
        },
        $7 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Ti(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Ui(a) || "";
            a = g.Zb();
            a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.Yb(a, "10.0") < 0 && (this.B = !1))
        },
        a8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.$i(c + b, {})
        },
        tsb = function(a, b) {
            g.Zc.call(this);
            var c = this;
            this.Gd = a();
            this.Gd.subscribe("handlerOpened", this.P4, this);
            this.Gd.subscribe("handlerClosed", this.onClosed, this);
            this.Gd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Gd.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        usb = function(a, b, c) {
            var d = this;
            c = c === void 0 ? function() {
                return ""
            } : c;
            var e = e === void 0 ? new Arb : e;
            var f = f === void 0 ? new g.Lp : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ca = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Z7(function() {
                d.C.isActive();
                var h;
                ((h = d.channel) == null ? void 0 : brb((new Drb(h, h.j)).j.B)) === 0 && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.qa = !1;
            this.logger = null;
            this.ra = [];
            this.xg = void 0;
            this.Na = new Lpb;
            this.Ia = new Npb;
            this.Ka = new Ppb;
            this.Ea = new Rpb
        },
        vsb = function(a) {
            g.Sc(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.v(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.publish("webChannelOpened");
                Mpb(a.Na, "WEB_CHANNEL")
            });
            g.Sc(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = (b = a.channel) == null ? void 0 : Erb(new Drb(b, b.j));
                c && (a.ra = [].concat(g.w(c)));
                Opb(a.Ia, "WEB_CHANNEL")
            });
            g.Sc(a.channel, "p", function(b) {
                var c = b.data;
                c[0] === "gracefulReconnect" ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new qsb(c[0], c[1]));
                a.xg = b.statusCode;
                Qpb(a.Ka, "WEB_CHANNEL")
            });
            g.Sc(a.channel, "o", function() {
                a.xg === 401 || a.C.start();
                a.publish("webChannelError");
                Spb(a.Ea, "WEB_CHANNEL")
            })
        },
        wsb = function(a) {
            var b = a.Ca();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        xsb = function(a) {
            g.Zc.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.Q4, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        ysb = function(a, b, c, d, e) {
            function f() {
                return new rsb(a8(a, "/bc"), b, !1, c, d)
            }
            c = c === void 0 ? function() {
                return ""
            } : c;
            return g.Ur("enable_mdx_web_channel_desktop") ? new xsb(function() {
                return new usb(a8(a, "/wc"), b, c)
            }) : new tsb(f, e)
        },
        Csb = function() {
            var a = zsb;
            Asb();
            b8.push(a);
            Bsb()
        },
        c8 = function(a, b) {
            Asb();
            var c = Dsb(a, String(b));
            b8.length == 0 ? Esb(c) : (Bsb(), g.Mb(b8, function(d) {
                d(c)
            }))
        },
        d8 = function(a) {
            c8("CP", a)
        },
        Asb = function() {
            b8 || (b8 = g.Pa("yt.mdx.remote.debug.handlers_") || [], g.Oa("yt.mdx.remote.debug.handlers_", b8))
        },
        Esb = function(a) {
            var b = (e8 + 1) % 50;
            e8 = b;
            f8[b] = a;
            g8 || (g8 = b == 49)
        },
        Bsb = function() {
            var a = b8;
            if (f8[0]) {
                var b = g8 ? e8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = f8[b];
                    g.Mb(a, function(d) {
                        d(c)
                    })
                } while (b != e8);
                f8 = Array(50);
                e8 = -1;
                g8 = !1
            }
        },
        Dsb = function(a, b) {
            var c = (Date.now() - Fsb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        h8 = function(a) {
            g.Qx.call(this);
            this.K = a;
            this.screens = []
        },
        Gsb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        Hsb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.qn(a.screens, function(f) {
                return !!hqb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = Gsb(a, b[d]) || c;
            return c
        },
        Isb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.qn(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        Jsb = function(a, b, c, d, e) {
            g.Qx.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.qd = NaN
        },
        j8 = function(a) {
            h8.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            i8(this);
            this.info("Initializing with " + eqb(this.screens))
        },
        Ksb = function(a) {
            if (a.screens.length) {
                var b = g.Gl(a.screens, function(d) {
                        return d.id
                    }),
                    c = a8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.Ya)(a.j9, a), (0, g.Ya)(a.i9, a))
            }
        },
        i8 = function(a) {
            if (g.Ur("deprecate_pair_servlet_enabled")) return Hsb(a, []);
            var b = dqb(oqb());
            b = g.qn(b, function(c) {
                return !c.uuid
            });
            return Hsb(a, b)
        },
        k8 = function(a, b) {
            qqb(g.Gl(a.screens, bqb));
            b && pqb()
        },
        Msb = function(a, b) {
            g.Qx.call(this);
            this.K = b;
            b = (b = g.jt("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.sb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            Lsb("Initialized with " + g.Mi(this.j))
        },
        Nsb = function(a, b, c) {
            var d = a8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.Ya)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c(e[h].status == "online");
                        return
                    }
                c(!1)
            }, a), (0, g.Ya)(function() {
                c(!1)
            }, a))
        },
        Psb = function(a, b) {
            a: if (Epb(b) != Epb(a.j)) var c = !1;
                else {
                    c = g.Cc(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Lsb("Updated online screens: " + g.Mi(a.j)), a.j = b, a.publish("screenChange"));Osb(a)
        },
        l8 = function(a) {
            isNaN(a.C) || g.Rr(a.C);
            a.C = g.Pr((0, g.Ya)(a.RS, a), a.D > 0 && a.D < g.$a() ? 2E4 : 1E4)
        },
        Lsb = function(a) {
            c8("OnlineScreenService", a)
        },
        Qsb = function(a) {
            var b = {};
            g.Mb(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.dg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Osb = function(a) {
            a = g.Cc(g.xc(a.j, function(b) {
                return b
            }));
            g.Jb(a);
            a.length ? g.it("yt-remote-online-screen-ids", a.join(","), 60) : g.kt("yt-remote-online-screen-ids")
        },
        m8 = function(a, b) {
            b = b === void 0 ? !1 : b;
            h8.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            Rsb(this)
        },
        Tsb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.yl(),
                l = c ? m7(h, c) : null;
            c && (a.N || l) || (l = m7(h, b));
            if (l) {
                l.uuid = b;
                var m = n8(a, l);
                Nsb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? Ssb(a, c, (0, g.Ya)(function(n) {
                var p = n8(this, new j7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Nsb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        Usb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        Vsb = function(a, b, c) {
            Nsb(a.j, b, c)
        },
        Ssb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Zr(a8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        Wsb = function(a) {
            a.screens = a.B.yl();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + eqb(a.screens))
        },
        Rsb = function(a) {
            Xsb(a);
            a.B = new j8(a.D);
            a.B.subscribe("screenChange", (0, g.Ya)(a.t9, a));
            Wsb(a);
            a.N || (a.C = dqb(g.jt("yt-remote-automatic-screen-cache") || []));
            Xsb(a);
            a.info("Initializing automatic screens: " + eqb(a.C));
            a.j = new Msb(a.D, (0, g.Ya)(a.yl, a, !0));
            a.j.subscribe("screenChange", (0, g.Ya)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        n8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = m7(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || Ysb(a));
            Xsb(a);
            a.G[b.uuid] = b.id;
            g.it("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        Ysb = function(a) {
            a = g.qn(a.C, function(b) {
                return b.idType != "shortLived"
            });
            g.it("yt-remote-automatic-screen-cache", g.Gl(a, bqb))
        },
        Xsb = function(a) {
            a.G = g.jt("yt-remote-device-id-map") || {}
        },
        o8 = function(a, b, c) {
            g.Qx.call(this);
            this.Ea = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        p8 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        Zsb = function(a, b) {
            a.j && (a.j.token = b, n8(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        q8 = function(a, b) {
            c8(a.Ea, b)
        },
        r8 = function(a, b, c) {
            o8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.Ya)(this.V4, this);
            this.Ia = (0, g.Ya)(this.wca, this);
            this.qa = g.Pr(function() {
                $sb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ca = !1;
            this.Y = "unknown"
        },
        btb = function(a, b) {
            g.Rr(a.N);
            a.N = 0;
            b == 0 ? atb(a) : a.N = g.Pr(function() {
                atb(a)
            }, b)
        },
        atb = function(a) {
            ctb(a, "getLoungeToken");
            g.Rr(a.G);
            a.G = g.Pr(function() {
                dtb(a, null)
            }, 3E4)
        },
        ctb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Mi());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Ya)(function() {
                q8(this, "Failed to send message: " + b + ".")
            }, a)) : q8(a, "Sending yt message without session: " + g.Mi(c))
        },
        etb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.sY(b, function(c) {
                p8(a, c)
            }, function() {
                return a.Ej()
            }, 5)) : a.Ej(Error("Waiting for session status timed out."))
        },
        gtb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new j7(b);
            ftb(a, d, function(e) {
                e ? (a.Ca = !0, n8(a.D, d), p8(a, d), a.Y = "unknown", btb(a, c)) : (g.xr(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Ej())
            }, 5)
        },
        $sb = function(a, b) {
            g.Rr(a.qa);
            a.qa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? gtb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.xr(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), etb(a, b.screenId))) : (g.xr(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), etb(a, b.screenId)) :
                etb(a, b.screenId) : a.Ej(Error("Waiting for session status timed out."))
        },
        dtb = function(a, b) {
            g.Rr(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, btb(a, 3E4)) : (Zsb(a, b.loungeToken), a.Ca = !1, a.Y = "unknown", btb(a, b.loungeTokenRefreshIntervalMs))
        },
        ftb = function(a, b, c, d) {
            g.Rr(a.K);
            a.K = 0;
            Vsb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.Pr(function() {
                    ftb(a, b, c, d - 1)
                }, 300)
            })
        },
        htb = function(a) {
            g.Rr(a.Z);
            a.Z = 0;
            g.Rr(a.K);
            a.K = 0;
            g.Rr(a.qa);
            a.qa = 0;
            g.Rr(a.G);
            a.G = 0;
            g.Rr(a.N);
            a.N = 0
        },
        s8 = function(a, b, c, d) {
            o8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ia = "";
            this.Ra = c;
            this.Na = null;
            this.qa = function() {};
            this.Y = NaN;
            this.Ka = (0, g.Ya)(this.W4, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.ra = !1;
            this.Ca = "unknown"
        },
        t8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
        },
        itb = function(a) {
            a.G = a.D.dV(a.Ia, a.B.label, a.B.friendlyName, t8(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                p8(a, b);
                b.idType == "shortLived" && c > 0 && u8(a, c)
            }, function(b) {
                a.G = function() {};
                a.Ej(b)
            })
        },
        jtb = function(a) {
            var b = {};
            b.pairingCode = a.Ia;
            b.theme = a.Ra;
            sqb() && (b.env_useStageMdx = 1);
            return g.Zi(b)
        },
        ktb = function(a) {
            return new Promise(function(b) {
                a.Ia = fqb();
                if (a.Na) {
                    var c = new chrome.cast.DialLaunchResponse(!0, jtb(a));
                    b(c);
                    itb(a)
                } else a.qa = function() {
                    g.Rr(a.Y);
                    a.qa = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, jtb(a));
                    b(d);
                    itb(a)
                }, a.Y = g.Pr(function() {
                    a.qa()
                }, 100)
            })
        },
        mtb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new j7(b);
            return (new Promise(function(e) {
                ltb(a, d, function(f) {
                    f ? (a.ra = !0, n8(a.D, d), p8(a, d), u8(a, c)) : g.xr(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : ktb(a)
            })
        },
        ntb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                Tsb(a.D, c, b, d, function(f) {
                    f && f.token && p8(a, f);
                    e(f)
                }, function(f) {
                    q8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : ktb(a)
            })
        },
        ltb = function(a, b, c, d) {
            g.Rr(a.K);
            a.K = 0;
            Vsb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.Pr(function() {
                    ltb(a, b, c, d - 1)
                }, 300)
            })
        },
        u8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            t8(a) && (g.Rr(a.N), a.N = 0, b == 0 ? otb(a) : a.N = g.Pr(function() {
                otb(a)
            }, b))
        },
        otb = function(a) {
            t8(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ca = c, u8(a, 3E4)) : (a.ra = !1, a.Ca = "unknown", Zsb(a, b.loungeToken), u8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ca = "noLoungeTokenResponse";
                u8(a, 3E4)
            })
        },
        ptb = function(a) {
            g.Rr(a.K);
            a.K = 0;
            g.Rr(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.Rr(a.Y)
        },
        v8 = function(a, b) {
            o8.call(this, a, b, "ManualSession");
            this.C = g.Pr((0, g.Ya)(this.TA, this, null), 150)
        },
        w8 = function(a, b) {
            g.Qx.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.Ya)(this.wba, this)
        },
        qtb = function(a, b) {
            return b ? g.qb(a.C, function(c) {
                return k7(b, c.label)
            }, a) : null
        },
        x8 = function(a) {
            c8("Controller", a)
        },
        zsb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        y8 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        z8 = function(a, b, c) {
            b != a.j && (g.gb(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.Ya)(a.l0, a, b)), b.subscribe("sessionFailed", function() {
                return rtb(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.TA(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        rtb = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        stb = function(a) {
            var b = a.B.cV(),
                c = a.j && a.j.B;
            a = g.Gl(b, function(d) {
                c && k7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = qtb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        ztb = function(a, b, c, d) {
            d.disableCastApi ? A8("Cannot initialize because disabled by Mdx config.") : ttb() ? utb(b, d) && (vtb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? wtb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? wtb(a, c) : (B8("Failed to load cast API: " + f), xtb(!1), vtb(!1), g.kt("yt-remote-cast-available"), g.kt("yt-remote-cast-receiver"),
                    ytb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Pv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? uqb() >= 60 && Dqb() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? yqb() : uqb() >= 89 ? Fqb() : (Cqb(), t7(Eqb.map(zqb))))) : A8("Cannot initialize because not running Chrome")
        },
        ytb = function() {
            A8("dispose");
            var a = C8();
            a && a.dispose();
            g.Oa("yt.mdx.remote.cloudview.instance_", null);
            Atb(!1);
            g.Nv(Btb);
            Btb.length = 0
        },
        D8 = function() {
            return !!g.jt("yt-remote-cast-installed")
        },
        Ctb = function() {
            var a = g.jt("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Dtb = function() {
            A8("clearCurrentReceiver");
            g.kt("yt-remote-cast-receiver")
        },
        Etb = function() {
            return D8() ? C8() ? C8().getCastSession() : (B8("getCastSelector: Cast is not initialized."), null) : (B8("getCastSelector: Cast API is not installed!"), null)
        },
        Ftb = function() {
            D8() ? C8() ? E8() ? (A8("Requesting cast selector."), C8().requestSession()) : (A8("Wait for cast API to be ready to request the session."), Btb.push(g.Mv("yt-remote-cast2-api-ready", Ftb))) : B8("requestCastSelector: Cast is not initialized.") : B8("requestCastSelector: Cast API is not installed!")
        },
        F8 = function(a, b) {
            E8() ? C8().setConnectedScreenStatus(a, b) : B8("setConnectedScreenStatus called before ready.")
        },
        ttb = function() {
            var a = g.Zb().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.TE || a
        },
        Gtb = function(a, b) {
            C8().init(a, b)
        },
        utb = function(a, b) {
            var c = !1;
            C8() || (a = new w8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.it("yt-remote-cast-available", d);
                r7("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                A8("onReceiverSelected: " + d.friendlyName);
                g.it("yt-remote-cast-receiver", d);
                r7("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                A8("onReceiverResumed: " + d.friendlyName);
                g.it("yt-remote-cast-receiver", d);
                r7("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                A8("onSessionChange: " + l7(d));
                d || g.kt("yt-remote-cast-receiver");
                r7("yt-remote-cast2-session-change", d)
            }), g.Oa("yt.mdx.remote.cloudview.instance_", a), c = !0);
            A8("cloudview.createSingleton_: " + c);
            return c
        },
        C8 = function() {
            return g.Pa("yt.mdx.remote.cloudview.instance_")
        },
        wtb = function(a, b) {
            xtb(!0);
            vtb(!1);
            Gtb(a, function(c) {
                c ? (Atb(!0), g.Ov("yt-remote-cast2-api-ready")) : (B8("Failed to initialize cast API."), xtb(!1), g.kt("yt-remote-cast-available"), g.kt("yt-remote-cast-receiver"), ytb());
                b(c)
            })
        },
        A8 = function(a) {
            c8("cloudview", a)
        },
        B8 = function(a) {
            c8("cloudview", a)
        },
        xtb = function(a) {
            A8("setCastInstalled_ " + a);
            g.it("yt-remote-cast-installed", a)
        },
        E8 = function() {
            return !!g.Pa("yt.mdx.remote.cloudview.apiReady_")
        },
        Atb = function(a) {
            A8("setApiReady_ " + a);
            g.Oa("yt.mdx.remote.cloudview.apiReady_", a)
        },
        vtb = function(a) {
            g.Oa("yt.mdx.remote.cloudview.initializing_", a)
        },
        G8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Bl = this.Up = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        Htb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Up = !1;
            a.Bl = !1;
            a.N = 0;
            a.K = g.$a();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        H8 = function(a) {
            return a.isPlaying() ? (g.$a() - a.K) / 1E3 : 0
        },
        I8 = function(a, b) {
            a.N = b;
            a.K = g.$a()
        },
        J8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.$a() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        K8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && Htb(a)
        },
        Itb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Lc(a.trackData);
            b.hasPrevious = a.Up;
            b.hasNext = a.Bl;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        M8 = function(a, b) {
            g.Qx.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new nsb;
            this.B = this.j = null;
            this.Y = (0, g.Ya)(this.iaa, this);
            this.N = (0, g.Ya)(this.lG, this);
            this.Z = (0, g.Ya)(this.haa, this);
            this.qa = (0, g.Ya)(this.maa, this);
            var d = 0;
            a ? (d = a.getProxyState(), d != 3 && (a.subscribe("proxyStateChange", this.oT, this), Jtb(this))) : d = 3;
            d != 0 && (b ? this.oT(d) : g.Pr(function() {
                c.oT(d)
            }, 0));
            (a = Etb()) && L8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.qa)
        },
        N8 = function(a) {
            return new G8(a.D.getPlayerContextData())
        },
        Jtb = function(a) {
            g.Mb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.Za(this.uba, b), this))
            }, a)
        },
        Ktb = function(a) {
            g.Mb(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        O8 = function(a) {
            return a.getState() == 1
        },
        P8 = function(a, b) {
            var c = a.G;
            c.j.length + c.B.length < 50 && a.G.enqueue(b)
        },
        Ltb = function(a, b, c) {
            var d = N8(a);
            I8(d, c);
            d.playerState != -1E3 && (d.playerState = b);
            Q8(a, d)
        },
        R8 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        Q8 = function(a, b) {
            Ktb(a);
            a.D.setPlayerContextData(Itb(b));
            Jtb(a)
        },
        L8 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.lG(null));
            a.B = b;
            a.B && (d8("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.lG(a.B.media[0]))
        },
        Mtb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = N8(a);
                b.contentId != d.videoId && d8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                I8(d, a.j.getEstimatedTime());
                Q8(a, d)
            } else d8("No cast media video. Ignoring state update.")
        },
        S8 = function(a, b, c) {
            return (0, g.Ya)(function(d) {
                this.dg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.dg("Retrying " + b + " using MDx browser channel."), R8(this, b, c))
            }, a)
        },
        V8 = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            g.Qx.call(this);
            var e = this;
            this.K = NaN;
            this.Ia = !1;
            this.Y = this.Z = this.ra = this.Ca = NaN;
            this.qa = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Na = a;
            this.Ka = d;
            this.qa.push(g.Ws(window, "beforeunload", function() {
                e.Tz(2)
            }));
            this.C = [];
            this.j = new G8;
            this.Ra = b.id;
            this.Ea = b.idType;
            this.B = ysb(this.Na, c, this.hV, this.Ea == "shortLived", this.Ra);
            this.B.listen("channelOpened", function() {
                Ntb(e)
            });
            this.B.listen("channelClosed", function() {
                T8("Channel closed");
                isNaN(e.K) ? p7(!0) : p7();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                p7();
                isNaN(e.gF()) ? (f == 1 && e.Ea == "shortLived" && e.publish("browserChannelAuthError", f), T8("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ia = !0, T8("Channel error: " + f + " with reconnection in " + e.gF() + " ms"), U8(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                Otb(e, f)
            });
            this.B.Js(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.lt() && g.it("yt-remote-session-video-id", f)
            })
        },
        Ptb = function(a) {
            return g.qb(a.C, function(b) {
                return b.type == "LOUNGE_SCREEN"
            })
        },
        T8 = function(a) {
            c8("conn", a)
        },
        U8 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        Qtb = function(a) {
            a.K = g.Pr(function() {
                T8("Connecting timeout");
                a.Tz(1)
            }, 2E4)
        },
        Rtb = function(a) {
            g.Rr(a.K);
            a.K = NaN
        },
        Stb = function(a) {
            g.Rr(a.Ca);
            a.Ca = NaN
        },
        Utb = function(a) {
            Ttb(a);
            a.ra = g.Pr(function() {
                W8(a, "getNowPlaying")
            }, 2E4)
        },
        Ttb = function(a) {
            g.Rr(a.ra);
            a.ra = NaN
        },
        Ntb = function(a) {
            T8("Channel opened");
            a.Ia && (a.Ia = !1, Stb(a), a.Ca = g.Pr(function() {
                T8("Timing out waiting for a screen.");
                a.Tz(1)
            }, 15E3))
        },
        Wtb = function(a, b) {
            var c = null;
            if (b) {
                var d = Ptb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Oa("yt.mdx.remote.remoteClient_", c);
            b && (Rtb(a), Stb(a));
            c = a.B.EA() && isNaN(a.K);
            b == c ? b && (U8(a, 1), W8(a, "getSubtitlesTrack")) : b ? (a.nY() && a.j.reset(), U8(a, 1), W8(a, "getNowPlaying"), Vtb(a)) : a.Tz(1)
        },
        Xtb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Gc(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        Ytb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            K8(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        $tb = function(a, b) {
            b.params = b.params || {};
            Ytb(a, b, "NOW_PLAYING_MAY_CHANGE");
            Ztb(a, b);
            a.publish("autoplayDismissed")
        },
        Ztb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            I8(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c;
            c == -1 && a.j.playerState == -1E3 && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.Vo(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            a.j.playerState == 1 ? Utb(a) : Ttb(a);
            a.publish("remotePlayerChange")
        },
        aub = function(a, b) {
            if (a.j.playerState != -1E3) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                I8(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        bub = function(a, b) {
            var c = b.params.muted == "true";
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        cub = function(a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        dub = function(a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        },
        eub = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            a.G == "DISABLED" && a.publish("autoplayDismissed")
        },
        fub = function(a, b) {
            var c = b.params.hasNext == "true";
            a.j.Up = b.params.hasPrevious == "true";
            a.j.Bl = c;
            a.publish("previousNextChange")
        },
        Otb = function(a, b) {
            b = b.message;
            b.params ? T8("Received: action=" + b.action + ", params=" + g.Mi(b.params)) : T8("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = e7(b.params.devices);
                    a.C = g.Gl(b, function(d) {
                        return new Zpb(d)
                    });
                    b = !!g.qb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    Wtb(a, b);
                    b = a.rZ("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.xb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    Wtb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new Zpb(e7(b.params.device));
                    g.qb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || Dpb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new Zpb(e7(b.params.device));
                    g.xb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    Ytb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    $tb(a, b);
                    break;
                case "onStateChange":
                    Ztb(a, b);
                    break;
                case "onAdStateChange":
                    aub(a, b);
                    break;
                case "onVolumeChanged":
                    bub(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    Xtb(a, b);
                    break;
                case "nowAutoplaying":
                    cub(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    dub(a, b);
                    break;
                case "onAutoplayModeChanged":
                    eub(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    fub(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    T8("Unrecognized action: " + b.action)
            }
        },
        Vtb = function(a) {
            g.Rr(a.Y);
            a.Y = g.Pr(function() {
                a.Tz(1)
            }, 864E5)
        },
        W8 = function(a, b, c) {
            c ? T8("Sending: action=" + b + ", params=" + g.Mi(c)) : T8("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        gub = function(a) {
            h8.call(this, "ScreenServiceProxy");
            this.fh = a;
            this.j = [];
            this.j.push(this.fh.$_s("screenChange", (0, g.Ya)(this.a5, this)));
            this.j.push(this.fh.$_s("onlineScreenChange", (0, g.Ya)(this.aba, this)))
        },
        lub = function(a, b) {
            rqb();
            if (!q7 || !q7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.ur("MDX_CONFIG") || b;
                iqb();
                mqb();
                X8 || (X8 = new $7(b ? b.loungeApiHost : void 0), sqb() && (X8.j = "/api/loungedev"));
                Y8 || (Y8 = g.Pa("yt.mdx.remote.deferredProxies_") || [], g.Oa("yt.mdx.remote.deferredProxies_", Y8));
                hub();
                var c = Z8();
                if (!c) {
                    var d = new m8(X8, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Oa("yt.mdx.remote.screenService_", d);
                    c = Z8();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Oa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    ztb(a, d, function(f) {
                        f ? $8() && F8($8(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            r7("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Pa("yt.mdx.remote.initialized_") && (g.Oa("yt.mdx.remote.initialized_", !0), a9("Initializing: " + g.Mi(b)),
                    b9.push(g.Mv("yt-remote-cast2-api-ready", function() {
                        r7("yt-remote-api-ready")
                    })), b9.push(g.Mv("yt-remote-cast2-availability-change", function() {
                        r7("yt-remote-receiver-availability-change")
                    })), b9.push(g.Mv("yt-remote-cast2-receiver-selected", function() {
                        c9(null);
                        r7("yt-remote-auto-connect", "cast-selector-receiver")
                    })), b9.push(g.Mv("yt-remote-cast2-receiver-resumed", function() {
                        r7("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), b9.push(g.Mv("yt-remote-cast2-session-change", iub)), b9.push(g.Mv("yt-remote-connection-change", function(f) {
                        f ? F8($8(), "YouTube TV") : d9() || (F8(null, null), Dtb())
                    })), b9.push(g.Mv("yt-remote-cast2-session-failed", function() {
                        r7("yt-remote-connection-failed")
                    })), a = jub(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Ur("desktop_enable_autoplay") &&
                    e.push("atp"), e.length > 0 && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), a9(" -- with channel params: " + g.Mi(a)), a ? (g.it("yt-remote-session-app", a.app), g.it("yt-remote-session-name", a.name)) : (g.kt("yt-remote-session-app"), g.kt("yt-remote-session-name")), g.Oa("yt.mdx.remote.channelParams_", a), c.start(), $8() || kub())
            }
        },
        mub = function() {
            var a = Z8().fh.$_gos();
            var b = e9();
            b && f9() && (hqb(a, b) || a.push(b));
            return gqb(a)
        },
        oub = function() {
            var a = nub();
            !a && D8() && Ctb() && (a = {
                key: "cast-selector-receiver",
                name: Ctb()
            });
            return a
        },
        nub = function() {
            var a = mub(),
                b = e9();
            b || (b = d9());
            return g.qb(a, function(c) {
                return b && k7(b, c.key) ? !0 : !1
            })
        },
        e9 = function() {
            var a = $8();
            if (!a) return null;
            var b = Z8().yl();
            return m7(b, a)
        },
        iub = function(a) {
            a9("remote.onCastSessionChange_: " + l7(a));
            if (a) {
                var b = e9();
                if (b && b.id == a.id) {
                    if (F8(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token)) g9 && (g9.token = a), (b = f9()) && b.Js(a)
                } else b && h9(), i9(a, 1)
            } else f9() && h9()
        },
        h9 = function() {
            E8() ? C8().stopSession() : B8("stopSession called before API ready.");
            var a = f9();
            a && (a.disconnect(1), pub(null))
        },
        qub = function() {
            var a = f9();
            return !!a && a.getProxyState() != 3
        },
        a9 = function(a) {
            c8("remote", a)
        },
        Z8 = function() {
            if (!rub) {
                var a = g.Pa("yt.mdx.remote.screenService_");
                rub = a ? new gub(a) : null
            }
            return rub
        },
        $8 = function() {
            return g.Pa("yt.mdx.remote.currentScreenId_")
        },
        sub = function(a) {
            g.Oa("yt.mdx.remote.currentScreenId_", a)
        },
        tub = function() {
            return g.Pa("yt.mdx.remote.connectData_")
        },
        c9 = function(a) {
            g.Oa("yt.mdx.remote.connectData_", a)
        },
        f9 = function() {
            return g.Pa("yt.mdx.remote.connection_")
        },
        pub = function(a) {
            var b = f9();
            c9(null);
            a || sub("");
            g.Oa("yt.mdx.remote.connection_", a);
            Y8 && (g.Mb(Y8, function(c) {
                c(a)
            }), Y8.length = 0);
            b && !a ? r7("yt-remote-connection-change", !1) : !b && a && r7("yt-remote-connection-change", !0)
        },
        d9 = function() {
            var a = g.lt();
            if (!a) return null;
            var b = Z8();
            if (!b) return null;
            b = b.yl();
            return m7(b, a)
        },
        i9 = function(a, b) {
            $8();
            e9() && e9();
            if (j9) g9 = a;
            else {
                sub(a.id);
                var c = g.Pa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new V8(X8, a, jub(), c);
                a.connect(b, tub());
                a.subscribe("beforeDisconnect", function(d) {
                    r7("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    f9() && (f9(), pub(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = e9();
                    d && d.idType == "shortLived" && (E8() ? C8().handleBrowserChannelAuthError() : B8("refreshLoungeToken called before API ready."))
                });
                pub(a)
            }
        },
        kub = function() {
            var a = d9();
            a ? (a9("Resume connection to: " + l7(a)), i9(a, 0)) : (p7(), Dtb(), a9("Skipping connecting because no session screen found."))
        },
        hub = function() {
            var a = jub();
            if (g.Gc(a)) {
                a = o7();
                var b = g.jt("yt-remote-session-name") || "",
                    c = g.jt("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.ur("SESSION_INDEX", "0"));
                (b = g.ur("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Oa("yt.mdx.remote.channelParams_", a)
            }
        },
        jub = function() {
            return g.Pa("yt.mdx.remote.channelParams_") || {}
        },
        wub = function(a, b, c) {
            g.P.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Ic = c;
            this.events = new g.XE(this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                uub(d, e)
            });
            this.D = !1;
            this.G = new g.UF(64);
            this.j = new g.kp(this.f2, 500, this);
            this.B = new g.kp(this.j2, 1E3, this);
            this.N = new u7(this.Rea, 0, this);
            this.C = {};
            this.Z = new g.kp(this.l3, 1E3, this);
            this.K = new v7(this.seekTo, 1E3, this);
            g.Q(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.Laa);
            this.events.T(b, "captionschanged", this.eaa);
            this.events.T(b, "captionssettingschanged", this.t2);
            this.events.T(b, "videoplayerreset", this.wL);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Ic.zX()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                vub(d.module) || k9(d) || l9(d, 0)
            });
            a = this.Ic;
            a.Ma();
            a.subscribe("proxyStateChange", this.g0, this);
            a.subscribe("remotePlayerChange", this.vG, this);
            a.subscribe("remoteQueueChange", this.wL, this);
            a.subscribe("previousNextChange", this.d0, this);
            a.subscribe("nowAutoplaying", this.X_, this);
            a.subscribe("autoplayDismissed", this.G_, this);
            g.Q(this, this.j);
            g.Q(this, this.B);
            g.Q(this, this.N);
            g.Q(this, this.Z);
            g.Q(this, this.K);
            this.t2();
            this.wL();
            this.vG()
        },
        uub = function(a, b) {
            if (k9(a)) {
                a.Ic.unsubscribe("remotePlayerChange", a.vG, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = N8(a.Ic);
                if (c !== d.volume || b !== d.muted) a.Ic.setVolume(c, b), a.Z.start();
                a.Ic.subscribe("remotePlayerChange", a.vG, a)
            }
        },
        xub = function(a) {
            a.Sc(0);
            a.j.stop();
            a.Fc(new g.UF(64))
        },
        yub = function(a, b) {
            if (k9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.Mc(c, b));
                a.Ic.gV(a.J.getVideoData(1).videoId, c);
                a.C = N8(a.Ic).trackData
            }
        },
        l9 = function(a, b) {
            var c = a.J.getPlaylist();
            if (c == null ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Ic.playVideo(c.videoId, b, d, e, c.playerParams, c.Ka, Cpb(c));
            a.Fc(new g.UF(1))
        },
        zub = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    dZ: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        k9 = function(a) {
            return N8(a.Ic).videoId === a.J.getVideoData(1).videoId
        },
        m9 = function() {
            g.U.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        va: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        va: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            La: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            va: "Cancel"
                        }, {
                            I: "button",
                            La: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            va: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.Ny(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.Q(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        n9 = function(a) {
            g.U.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.Rra()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.Ny(this, 250);
            g.Q(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.wd(a.getPlayerStateObject())
        },
        m$ = function(a, b) {
            g.AT.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Yu = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        Aub = function(a) {
            g.gU.call(this, a);
            this.iq = {
                key: fqb(),
                name: "This computer"
            };
            this.tm = null;
            this.subscriptions = [];
            this.xS = this.Ic = null;
            this.Yu = [this.iq];
            this.Jt = this.iq;
            this.Ee = new g.UF(64);
            this.FZ = 0;
            this.gi = -1;
            this.MG = !1;
            this.LG = this.NB = null;
            if (!g.aP(this.player.U()) && !g.rz(this.player.U())) {
                a = this.player;
                var b = g.ER(a);
                b && (b = b.Hm()) && (b = new m$(a, b), g.Q(this, b));
                b = new n9(a);
                g.Q(this, b);
                g.nS(a, b.element, 4);
                this.NB = new m9;
                g.Q(this, this.NB);
                g.nS(a, this.NB.element, 4);
                this.MG = !!d9()
            }
        },
        o$ = function(a) {
            a.LG && (a.player.removeEventListener("presentingplayerstatechange",
                a.LG), a.LG = null)
        },
        Bub = function(a, b, c) {
            a.Ee = c;
            a.player.publish("presentingplayerstatechange", new g.Yy(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Jt.key)
                if (b.key === a.iq.key) h9();
                else if (vub(a) && Cub(a), a.Jt = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.rz(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.dU(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ka,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = Cpb(d)) && (a.locationInfo = d);
                    d = a
                }
                a9("Connecting to: " + g.Mi(b));
                b.key == "cast-selector-receiver" ? (c9(d || null), b = d || null, E8() ? C8().setLaunchParams(b) : B8("setLaunchParams called before ready.")) : !d && qub() && $8() == b.key ? r7("yt-remote-connection-change", !0) : (h9(), c9(d || null), d = Z8().yl(), (b = m7(d, b.key)) && i9(b, 1))
            }
        },
        vub = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.MG || !a.NB ? !1 : g.nP(b) || g.pP(b)
        },
        Cub = function(a) {
            a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.LG = function(b) {
                !a.MG && g.$y(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.LG));
            a.NB && a.NB.md();
            f9() || (j9 = !0)
        };
    g.k = h7.prototype;
    g.k.Im = function() {
        i7(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
        return a
    };
    g.k.Vn = function() {
        i7(this);
        return this.j.concat()
    };
    g.k.has = function(a) {
        return g7(this.B, a)
    };
    g.k.isEmpty = function() {
        return this.size == 0
    };
    g.k.clear = function() {
        this.B = {};
        this.Ev = this.size = this.j.length = 0
    };
    g.k.remove = function(a) {
        return this.delete(a)
    };
    g.k.delete = function(a) {
        return g7(this.B, a) ? (delete this.B[a], --this.size, this.Ev++, this.j.length > 2 * this.size && i7(this), !0) : !1
    };
    g.k.get = function(a, b) {
        return g7(this.B, a) ? this.B[a] : b
    };
    g.k.set = function(a, b) {
        g7(this.B, a) || (this.size += 1, this.j.push(a), this.Ev++);
        this.B[a] = b
    };
    g.k.forEach = function(a, b) {
        for (var c = this.Vn(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.k.clone = function() {
        return new h7(this)
    };
    g.k.keys = function() {
        return g.Fp(this.pm(!0)).j()
    };
    g.k.values = function() {
        return g.Fp(this.pm(!1)).j()
    };
    g.k.entries = function() {
        var a = this;
        return Vpb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    g.k.pm = function(a) {
        i7(this);
        var b = 0,
            c = this.Ev,
            d = this,
            e = new g.ln;
        e.next = function() {
            if (c != d.Ev) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return g.o1;
            var f = d.j[b++];
            return g.mn(a ? f : d.B[f])
        };
        return e
    };
    var $pb = {
            aga: "atp",
            Aka: "ska",
            Vja: "que",
            ija: "mus",
            yka: "sus",
            Kha: "dsp",
            lka: "seq",
            Zia: "mic",
            Xga: "dpa",
            iga: "cds",
            gja: "mlm",
            Vga: "dsdtr",
            pja: "ntb",
            nla: "vsp",
            iha: "scn",
            Xja: "rpe",
            Sga: "dcn",
            Tga: "dcp",
            Eja: "pas",
            Uga: "drq",
            uja: "opf",
            hha: "els",
            qka: "svq",
            hja: "mvp"
        },
        aqb = {
            mla: "u",
            vga: "cl",
            Fia: "k",
            bia: "i",
            Kga: "cr",
            jja: "m",
            xha: "g",
            F6: "up"
        },
        lqb = "",
        q7 = null;
    tqb.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.Ur("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.bfa(c.value), c = {
                serializedIncrementBatch: g.Xe(c.j())
            }, g.Nt("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var s7, Bqb = vqb("loadCastFramework") || vqb("loadCastApplicationFramework"),
        Eqb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.ab(u7, g.P);
    g.k = u7.prototype;
    g.k.E4 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.qd ? this.C = g.$a() + this.Wi : this.qd = g.Se(this.G, this.Wi)
    };
    g.k.stop = function() {
        this.qd && (g.Na.clearTimeout(this.qd), this.qd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        u7.Mf.xa.call(this)
    };
    g.k.F4 = function() {
        this.qd && (g.Na.clearTimeout(this.qd), this.qd = null);
        this.C ? (this.qd = g.Se(this.G, this.C - g.$a()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.z(v7, g.P);
    g.k = v7.prototype;
    g.k.cN = function(a) {
        this.C = arguments;
        this.qd || this.B ? this.j = !0 : Gqb(this)
    };
    g.k.stop = function() {
        this.qd && (g.Na.clearTimeout(this.qd), this.qd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.qd || (this.j = !1, Gqb(this))
    };
    g.k.xa = function() {
        g.P.prototype.xa.call(this);
        this.stop()
    };
    w7.prototype.stringify = function(a) {
        return g.Na.JSON.stringify(a, void 0)
    };
    w7.prototype.parse = function(a) {
        return g.Na.JSON.parse(a, void 0)
    };
    g.ab(Hqb, g.lb);
    g.ab(Iqb, g.lb);
    var Jqb = null;
    g.ab(Lqb, g.lb);
    g.ab(Mqb, g.lb);
    g.ab(Nqb, g.lb);
    A7.prototype.debug = function() {};
    A7.prototype.info = function() {};
    A7.prototype.warning = function() {};
    var Vqb = {},
        Uqb = {};
    g.k = B7.prototype;
    g.k.setTimeout = function(a) {
        this.fb = a
    };
    g.k.H4 = function(a) {
        a = a.target;
        var b = this.Wa;
        b && g.gj(a) == 3 ? b.cN() : this.KU(a)
    };
    g.k.KU = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.gj(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.ij(this.j) || g.jj(this.j)))) {
                    this.Ka || b != 4 || c == 7 || (c == 8 || d <= 0 ? x7(3) : x7(2));
                    Yqb(this);
                    var e = this.j.getStatus();
                    this.Jb = e;
                    var f = Tqb(this);
                    if (this.K = e == 200) {
                        if (this.zb && !this.Va) {
                            b: {
                                if (this.j) {
                                    var h = g.kj(this.j, "X-HTTP-Initial-Response");
                                    if (h && !g.Qb(h)) {
                                        var l = h;
                                        break b
                                    }
                                }
                                l = null
                            }
                            if (a = l) this.Va = !0,
                            grb(this, a);
                            else {
                                this.K = !1;
                                this.G = 3;
                                y7(12);
                                D7(this);
                                E7(this);
                                break a
                            }
                        }
                        if (this.Ea) {
                            a = !0;
                            for (var m; !this.Ka && this.N < f.length;)
                                if (m = Wqb(this, f), m == Uqb) {
                                    b == 4 && (this.G = 4, y7(14), a = !1);
                                    break
                                } else if (m == Vqb) {
                                this.G = 4;
                                y7(15);
                                a = !1;
                                break
                            } else grb(this, m);
                            Sqb(this) && this.N != 0 && (this.B.j = this.B.j.slice(this.N), this.N = 0);
                            b != 4 || f.length != 0 || this.B.B || (this.G = 1, y7(16), a = !1);
                            this.K = this.K && a;
                            a ? f.length > 0 && !this.Kb && (this.Kb = !0, this.C.GR(this)) : (D7(this), E7(this))
                        } else grb(this, f);
                        b == 4 && D7(this);
                        this.K && !this.Ka && (b == 4 ? Zqb(this.C, this) : (this.K = !1, C7(this)))
                    } else g.Qfa(this.j), e == 400 && f.indexOf("Unknown SID") >
                        0 ? (this.G = 3, y7(12)) : (this.G = 0, y7(13)), D7(this), E7(this)
                }
            }
        } catch (n) {} finally {}
    };
    g.k.cancel = function() {
        this.Ka = !0;
        D7(this)
    };
    g.k.G4 = function() {
        this.qa = null;
        var a = Date.now();
        a - this.qb >= 0 ? (this.Ra != 2 && (x7(3), y7(17)), D7(this), this.G = 2, E7(this)) : Xqb(this, this.qb - a)
    };
    g.k.getLastError = function() {
        return this.G
    };
    g.k.ZP = function() {
        return this.j
    };
    irb.prototype.cancel = function() {
        this.C = krb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = prb.prototype;
    g.k.LU = 8;
    g.k.Qh = 1;
    g.k.connect = function(a, b, c, d) {
        y7(0);
        this.Tb = a;
        this.Ka = b || {};
        c && d !== void 0 && (this.Ka.OSID = c, this.Ka.OAID = d);
        this.Va = this.qc;
        this.Na = drb(this, null, this.Tb);
        I7(this)
    };
    g.k.disconnect = function() {
        rrb(this);
        if (this.Qh == 3) {
            var a = this.bb++,
                b = this.Na.clone();
            g.Ak(b, "SID", this.D);
            g.Ak(b, "RID", a);
            g.Ak(b, "TYPE", "terminate");
            L7(this, b);
            a = new B7(this, this.D, a);
            a.Ra = 2;
            a.Z = c7(b.clone());
            b = !1;
            if (g.Na.navigator && g.Na.navigator.sendBeacon) try {
                b = g.Na.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Na.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = Rqb(a.C, null), a.j.send(a.Z));
            a.Ca = Date.now();
            C7(a)
        }
        xrb(this)
    };
    g.k.Lg = function() {
        return this.Qh == 0
    };
    g.k.getState = function() {
        return this.Qh
    };
    g.k.NU = function(a) {
        if (this.K)
            if (this.K = null, this.Qh == 1) {
                if (!a) {
                    this.bb = Math.floor(Math.random() * 1E5);
                    a = this.bb++;
                    var b = new B7(this, "", a),
                        c = this.Y;
                    this.Jb && (c ? (c = g.Kc(c), g.Mc(c, this.Jb)) : c = this.Jb);
                    this.N !== null || this.qb || (b.Na = c, c = null);
                    var d;
                    if (this.Bb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, typeof f === "string")) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (f === void 0) break;d += f;
                            if (d > 4096) {
                                d = e;
                                break a
                            }
                            if (d === 4096 || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = urb(this, b, d);
                    e = this.Na.clone();
                    g.Ak(e, "RID", a);
                    g.Ak(e, "CVER", 22);
                    this.Ea && g.Ak(e, "X-HTTP-Session-Id", this.Ea);
                    L7(this, e);
                    c && (this.qb ? d = "headers=" + g.Vd(g.Jga(c)) + "&" + d : this.N && g.Ek(e, this.N, c));
                    crb(this.B, b);
                    this.Rf && g.Ak(e, "TYPE", "init");
                    this.Bb ? (g.Ak(e, "$req", d), g.Ak(e, "SID", "null"), b.zb = !0, Qqb(b, e, null)) : Qqb(b, e, d);
                    this.Qh = 2
                }
            } else this.Qh == 3 && (a ? vrb(this, a) : this.C.length == 0 || jrb(this.B) || vrb(this))
    };
    g.k.MU = function() {
        this.Z = null;
        wrb(this);
        if (this.Bc && !(this.fb || this.j == null || this.Xc <= 0)) {
            var a = 2 * this.Xc;
            this.Ia = z7((0, g.Ya)(this.daa, this), a)
        }
    };
    g.k.daa = function() {
        this.Ia && (this.Ia = null, this.Va = !1, this.fb = !0, y7(10), G7(this), wrb(this))
    };
    g.k.GR = function(a) {
        this.j == a && this.Bc && !this.fb && (qrb(this), this.fb = !0, y7(11))
    };
    g.k.I4 = function() {
        this.qa != null && (this.qa = null, G7(this), arb(this), y7(19))
    };
    g.k.vea = function(a) {
        a ? y7(2) : y7(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = zrb.prototype;
    g.k.RU = function() {};
    g.k.QU = function() {};
    g.k.PU = function() {};
    g.k.OU = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.J4 = function() {};
    g.ab(N7, g.Zc);
    N7.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Ra = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    N7.prototype.close = function() {
        this.j.disconnect()
    };
    N7.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Mi(a), a = c);
        b.C.push(new hrb(b.Pf++, a));
        b.Qh == 3 && I7(b)
    };
    N7.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        N7.Mf.xa.call(this)
    };
    g.ab(Brb, Hqb);
    g.ab(Crb, Iqb);
    g.ab(M7, zrb);
    M7.prototype.RU = function() {
        this.j.dispatchEvent("m")
    };
    M7.prototype.QU = function(a) {
        this.j.dispatchEvent(new Brb(a))
    };
    M7.prototype.PU = function(a) {
        this.j.dispatchEvent(new Crb(a))
    };
    M7.prototype.OU = function() {
        this.j.dispatchEvent("n")
    };
    var P7 = new g.Zc;
    g.z(Frb, g.lb);
    g.k = R7.prototype;
    g.k.Qv = null;
    g.k.Ys = !1;
    g.k.ez = null;
    g.k.eN = null;
    g.k.iD = null;
    g.k.oI = null;
    g.k.fD = null;
    g.k.nI = null;
    g.k.Sv = null;
    g.k.mj = null;
    g.k.qI = 0;
    g.k.L2 = null;
    g.k.pI = null;
    g.k.Rv = null;
    g.k.hD = -1;
    g.k.F1 = !0;
    g.k.gD = !1;
    g.k.dN = 0;
    g.k.mI = null;
    var Lrb = {},
        Krb = {};
    g.k = R7.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.L4 = function(a) {
        a = a.target;
        var b = this.mI;
        b && g.gj(a) == 3 ? b.cN() : this.SU(a)
    };
    g.k.SU = function(a) {
        try {
            if (a == this.mj) a: {
                var b = g.gj(this.mj),
                    c = this.mj.B,
                    d = this.mj.getStatus();
                if (g.rc && !g.qc("420+")) {
                    if (b < 4) break a
                } else if (b < 3 || b == 3 && !g.ij(this.mj)) break a;this.gD || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.ws(3) : this.j.ws(2));Orb(this);
                var e = this.mj.getStatus();this.hD = e;
                var f = g.ij(this.mj);
                if (this.Ys = e == 200) {
                    b == 4 && S7(this);
                    if (this.Ea) {
                        for (a = !0; !this.gD && this.qI < f.length;) {
                            var h = Mrb(this, f);
                            if (h == Krb) {
                                b == 4 && (this.Rv = 4, Q7(15), a = !1);
                                break
                            } else if (h == Lrb) {
                                this.Rv = 4;
                                Q7(16);
                                a = !1;
                                break
                            } else Qrb(this,
                                h)
                        }
                        b == 4 && f.length == 0 && (this.Rv = 1, Q7(17), a = !1);
                        this.Ys = this.Ys && a;
                        a || (S7(this), Prb(this))
                    } else Qrb(this, f);
                    this.Ys && !this.gD && (b == 4 ? this.j.hN(this) : (this.Ys = !1, Jrb(this)))
                } else e == 400 && f.indexOf("Unknown SID") > 0 ? (this.Rv = 3, Q7(13)) : (this.Rv = 0, Q7(14)),
                S7(this),
                Prb(this)
            }
        } catch (l) {} finally {}
    };
    g.k.cancel = function() {
        this.gD = !0;
        S7(this)
    };
    g.k.K4 = function() {
        this.ez = null;
        var a = Date.now();
        a - this.eN >= 0 ? (this.oI != 2 && this.j.ws(3), S7(this), this.Rv = 2, Q7(18), Prb(this)) : Nrb(this, this.eN - a)
    };
    g.k.getLastError = function() {
        return this.Rv
    };
    g.k = Trb.prototype;
    g.k.gN = null;
    g.k.Xk = null;
    g.k.VL = !1;
    g.k.iN = null;
    g.k.fm = null;
    g.k.Yq = -1;
    g.k.rI = null;
    g.k.dE = null;
    g.k.connect = function(a) {
        this.iN = a;
        a = U7(this.j, null, this.iN);
        Q7(3);
        Date.now();
        var b = this.j.Y;
        b != null ? (this.rI = b[0], (this.dE = b[1]) ? (this.fm = 1, Urb(this)) : (this.fm = 2, Vrb(this))) : (d7(a, "MODE", "init"), this.Xk = new R7(this), this.Xk.Qv = this.gN, Irb(this.Xk, a, !1, null, !0), this.fm = 0)
    };
    g.k.c7 = function(a) {
        if (a) this.fm = 2, Vrb(this);
        else {
            Q7(4);
            var b = this.j;
            b.qp = b.Gt.Yq;
            Y7(b, 9)
        }
        a && this.ws(2)
    };
    g.k.fN = function(a) {
        return this.j.fN(a)
    };
    g.k.abort = function() {
        this.Xk && (this.Xk.cancel(), this.Xk = null);
        this.Yq = -1
    };
    g.k.Lg = function() {
        return !1
    };
    g.k.TU = function(a, b) {
        this.Yq = a.hD;
        if (this.fm == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.qp = this.Yq;
                    Y7(a, 2);
                    return
                }
                this.rI = c[0];
                this.dE = c[1]
            } else a = this.j, a.qp = this.Yq, Y7(a, 2);
        else this.fm == 2 && (this.VL ? (Q7(7), Date.now()) : b == "11111" ? (Q7(6), this.VL = !0, Date.now(), this.Yq = 200, this.Xk.cancel(), Q7(12), V7(this.j, this, !0)) : (Q7(8), Date.now(), this.VL = !1))
    };
    g.k.hN = function() {
        this.Yq = this.Xk.hD;
        if (this.Xk.Ys) this.fm == 0 ? this.dE ? (this.fm = 1, Urb(this)) : (this.fm = 2, Vrb(this)) : this.fm == 2 && (this.VL ? (Q7(12), V7(this.j, this, !0)) : (Q7(11), V7(this.j, this, !1)));
        else {
            this.fm == 0 ? Q7(9) : this.fm == 2 && Q7(10);
            var a = this.j;
            this.Xk.getLastError();
            a.qp = this.Yq;
            Y7(a, 2)
        }
    };
    g.k.jD = function() {
        return this.j.jD()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.ws = function(a) {
        this.j.ws(a)
    };
    g.k = Wrb.prototype;
    g.k.pp = null;
    g.k.kD = null;
    g.k.nk = null;
    g.k.Tg = null;
    g.k.kN = null;
    g.k.sI = null;
    g.k.UU = null;
    g.k.jN = null;
    g.k.lD = 0;
    g.k.N4 = 0;
    g.k.Pi = null;
    g.k.Zs = null;
    g.k.Zq = null;
    g.k.Uv = null;
    g.k.Gt = null;
    g.k.QM = null;
    g.k.iz = -1;
    g.k.VU = -1;
    g.k.qp = -1;
    g.k.gz = 0;
    g.k.fz = 0;
    g.k.Tv = 8;
    g.ab(Yrb, g.lb);
    g.ab(Zrb, g.lb);
    g.k = Wrb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        Q7(0);
        this.kN = b;
        this.kD = c || {};
        d && e !== void 0 && (this.kD.OSID = d, this.kD.OAID = e);
        this.Z ? (O7((0, g.Ya)(this.lX, this, a), 100), asb(this)) : this.lX(a)
    };
    g.k.disconnect = function() {
        bsb(this);
        if (this.j == 3) {
            var a = this.lD++,
                b = this.sI.clone();
            g.Ak(b, "SID", this.D);
            g.Ak(b, "RID", a);
            g.Ak(b, "TYPE", "terminate");
            X7(this, b);
            a = new R7(this, this.D, a);
            a.oI = 2;
            a.fD = c7(b.clone());
            (new Image).src = a.fD.toString();
            a.iD = Date.now();
            Jrb(a)
        }
        lsb(this)
    };
    g.k.lX = function(a) {
        this.Gt = new Trb(this);
        this.Gt.gN = this.pp;
        this.Gt.B = this.G;
        this.Gt.connect(a)
    };
    g.k.Lg = function() {
        return this.j == 0
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.XU = function(a) {
        this.Zs = null;
        gsb(this, a)
    };
    g.k.WU = function() {
        this.Zq = null;
        this.Tg = new R7(this, this.D, "rpc", this.N);
        this.Tg.Qv = this.pp;
        this.Tg.dN = 0;
        var a = this.UU.clone();
        g.Ak(a, "RID", "rpc");
        g.Ak(a, "SID", this.D);
        g.Ak(a, "CI", this.QM ? "0" : "1");
        g.Ak(a, "AID", this.iz);
        X7(this, a);
        g.Ak(a, "TYPE", "xmlhttp");
        Irb(this.Tg, a, !0, this.jN, !1)
    };
    g.k.TU = function(a, b) {
        if (this.j != 0 && (this.Tg == a || this.nk == a))
            if (this.qp = a.hD, this.nk == a && this.j == 3)
                if (this.Tv > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c, a[0] == 0) a: {
                            if (!this.Zq) {
                                if (this.Tg)
                                    if (this.Tg.iD + 3E3 < this.nk.iD) W7(this), this.Tg.cancel(), this.Tg = null;
                                    else break a;
                                jsb(this);
                                Q7(19)
                            }
                        }
                    else this.VU = a[1], 0 < this.VU - this.iz && a[2] < 37500 && this.QM && this.fz == 0 && !this.Uv && (this.Uv = O7((0, g.Ya)(this.O4, this), 6E3));
                    else Y7(this, 11)
                } else b != null && Y7(this, 11);
        else if (this.Tg ==
            a && W7(this), !g.Qb(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.iz = c[0], c = c[1], this.j == 2 ? c[0] == "c" ? (this.D = c[1], this.jN = c[2], c = c[3], c != null ? this.Tv = c : this.Tv = 6, this.j = 3, this.Pi && this.Pi.aV(), this.UU = U7(this, this.jD() ? this.jN : null, this.kN), hsb(this)) : c[0] == "stop" && Y7(this, 7) : this.j == 3 && (c[0] == "stop" ? Y7(this, 7) : c[0] != "noop" && this.Pi && this.Pi.ZU(c), this.fz = 0)
    };
    g.k.O4 = function() {
        this.Uv != null && (this.Uv = null, this.Tg.cancel(), this.Tg = null, jsb(this), Q7(20))
    };
    g.k.hN = function(a) {
        if (this.Tg == a) {
            W7(this);
            this.Tg = null;
            var b = 2
        } else if (this.nk == a) this.nk = null, b = 1;
        else return;
        this.qp = a.hD;
        if (this.j != 0)
            if (a.Ys)
                if (b == 1) {
                    b = a.Sv ? a.Sv.length : 0;
                    a = Date.now() - a.iD;
                    var c = P7;
                    c.dispatchEvent(new Yrb(c, b, a, this.gz));
                    $rb(this);
                    this.C.length = 0
                } else hsb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = c == 3 || c == 7 || c == 0 && this.qp > 0)) {
                if (d = b == 1) this.nk || this.Zs || this.j == 1 || this.gz >= 2 ? d = !1 : (this.Zs = O7((0, g.Ya)(this.XU, this, a), isb(this, this.gz)), this.gz++, d = !0);
                d = !(d || b == 2 && jsb(this))
            }
            if (d) switch (c) {
                case 1:
                    Y7(this,
                        5);
                    break;
                case 4:
                    Y7(this, 10);
                    break;
                case 3:
                    Y7(this, 6);
                    break;
                case 7:
                    Y7(this, 12);
                    break;
                default:
                    Y7(this, 2)
            }
        }
    };
    g.k.M4 = function(a) {
        if (!g.sb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.uea = function(a) {
        a ? Q7(2) : (Q7(1), ksb(this, 8))
    };
    g.k.fN = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.dj;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Pi && this.Pi.isActive(this)
    };
    g.k.ws = function(a) {
        var b = P7;
        b.dispatchEvent(new Zrb(b, a))
    };
    g.k.jD = function() {
        return !1
    };
    g.k = msb.prototype;
    g.k.aV = function() {};
    g.k.ZU = function() {};
    g.k.YU = function() {};
    g.k.lN = function() {};
    g.k.bV = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = nsb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.sb(this.j, a) || g.sb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.A8a)(b, a);
        c >= 0 ? (g.tb(b, c), b = !0) : b = !1;
        return b || g.ub(this.B, a)
    };
    g.k.Im = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.z(osb, g.lb);
    g.z(psb, g.lb);
    g.ab(Z7, g.P);
    g.k = Z7.prototype;
    g.k.jca = function() {
        this.Wi = Math.min(3E5, this.Wi * 2);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.Wi + 15E3 * Math.random();
        g.lp(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Wi = 5E3
    };
    g.ab(rsb, msb);
    g.k = rsb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Ph = function(a) {
        return this.C.Ph(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.gb(this.C), this.disconnect(), g.gb(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.Ma = function() {
        return this.qa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ca + "/test";
            b = this.Ca + "/bind";
            var d = new Wrb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ra),
                e = this.j;
            e && (e.Pi = null);
            d.Pi = this;
            this.j = d;
            ssb(this);
            if (this.j) {
                d = g.ur("ID_TOKEN");
                var f = this.j.pp || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.pp = f
            }
            e ? (e.getState() != 3 && dsb(e) == 0 || e.getState(), this.j.connect(a, b, this.N, e.D, e.iz)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        ssb(this);
        this.j && (this.j.getState() == 3 && gsb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Mc(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.EA() && (ssb(this), csb(this.j, a))
    };
    g.k.aV = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) csb(this.j, a[b])
        }
        this.publish("handlerOpened");
        Mpb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.YU = function(a) {
        var b = a == 2 && this.j.qp == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        Spb(this.Ea, "BROWSER_CHANNEL")
    };
    g.k.lN = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        Opb(this.Ia, "BROWSER_CHANNEL");
        a && this.Wa.j.nN("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.bb.j.nN("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.bV = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        this.G != 0 && (a.ui = "" + this.G);
        this.Z != 0 && (a.ui = "" + this.Z);
        this.K && g.Mc(a, this.K);
        return a
    };
    g.k.ZU = function(a) {
        a[0] == "S" ? this.Y = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new qsb(a[0], a[1]));
        Qpb(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.EA = function() {
        return !!this.j && this.j.getState() == 3
    };
    g.k.Js = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Va && this.j) {
            var b = this.j.pp || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.pp = b
        }
    };
    g.k.getDeviceId = function() {
        return this.N.id
    };
    g.k.Xt = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.vy = function() {
        var a = this.B;
        g.mp(a.j);
        a.start()
    };
    g.k.zda = function() {
        this.B.isActive();
        dsb(this.j) == 0 && this.connect(this.K, this.G)
    };
    $7.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.Za(this.D, d, !f),
            onError: g.Za(this.C, e),
            onTimeout: g.Za(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.Zr(b, a)
    };
    $7.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    $7.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    $7.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.z(tsb, g.Zc);
    g.k = tsb.prototype;
    g.k.connect = function(a, b, c) {
        this.Gd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Gd.disconnect(a)
    };
    g.k.vy = function() {
        this.Gd.vy()
    };
    g.k.getDeviceId = function() {
        return this.Gd.getDeviceId()
    };
    g.k.Xt = function() {
        return this.Gd.Xt()
    };
    g.k.EA = function() {
        return this.Gd.EA()
    };
    g.k.P4 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Gd,
            b = this.j;
        g.it("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.QM,
            sessionId: a.j.D,
            arrayId: a.j.iz
        });
        g.it("yt-remote-session-screen-id", b);
        a = n7();
        b = o7();
        g.sb(a, b) || a.push(b);
        kqb(a);
        mqb()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new osb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new psb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Gd.sendMessage(a, b)
    };
    g.k.Js = function(a) {
        this.Gd.Js(a)
    };
    g.k.dispose = function() {
        this.Gd.dispose()
    };
    g.k = usb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.K !== 2 && (this.C.stop(), this.Z = a, this.N = b, wsb(this), (a = g.ur("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.v$ && (this.B.mdxVersion = "" + this.j.v$), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.u7 && (this.B.cst = this.j.u7),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), this.N !== 0 ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new N7(this.pathPrefix, {
            J9: "gsessionid",
            z$: this.D,
            A$: this.B
        }), this.channel.open(), this.K = 2, vsb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = a === void 0 ? 0 : a;
        this.C.stop();
        wsb(this);
        this.channel && (this.Y !== 0 ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.Xt = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.vy = function() {
        var a = this.C;
        g.mp(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (wsb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Js = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.w(g.Fa.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Ph = function(a) {
        return this.G.Ph(a)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.gb(this.G), this.disconnect(), g.gb(this.C), this.Ca = function() {
            return ""
        })
    };
    g.k.Ma = function() {
        return this.qa
    };
    g.z(xsb, g.Zc);
    g.k = xsb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.vy = function() {
        this.j.vy()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.Xt = function() {
        return this.j.Xt()
    };
    g.k.EA = function() {
        return this.j.K === 3
    };
    g.k.Q4 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new osb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new psb(this.j.xg === 401 ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Js = function(a) {
        this.j.Js(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var Fsb = Date.now(),
        b8 = null,
        f8 = Array(50),
        e8 = -1,
        g8 = !1;
    g.ab(h8, g.Qx);
    h8.prototype.yl = function() {
        return this.screens
    };
    h8.prototype.contains = function(a) {
        return !!hqb(this.screens, a)
    };
    h8.prototype.get = function(a) {
        return a ? m7(this.screens, a) : null
    };
    h8.prototype.info = function(a) {
        c8(this.K, a)
    };
    g.z(Jsb, g.Qx);
    g.k = Jsb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.qd) && this.K0()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.qd) || (g.Rr(this.qd), this.qd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.Qx.prototype.xa.call(this)
    };
    g.k.K0 = function() {
        this.qd = NaN;
        this.j = g.Zr(a8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.Ya)(this.S4, this),
            onError: (0, g.Ya)(this.R4, this),
            onTimeout: (0, g.Ya)(this.T4, this)
        })
    };
    g.k.S4 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new j7(a), b)
    };
    g.k.R4 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= Dub.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = Dub[this.B], this.qd = g.Pr((0, g.Ya)(this.K0, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.T4 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var Dub = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.ab(j8, h8);
    g.k = j8.prototype;
    g.k.start = function() {
        i8(this) && this.publish("screenChange");
        !g.jt("yt-remote-lounge-token-expiration") && Ksb(this);
        g.Rr(this.j);
        this.j = g.Pr((0, g.Ya)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        i8(this);
        Gsb(this, a);
        k8(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || Ksb(this)
    };
    g.k.remove = function(a, b) {
        var c = i8(this);
        Isb(this, a) && (k8(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.PM = function(a, b, c, d) {
        var e = i8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.xa = function() {
        g.Rr(this.j);
        j8.Mf.xa.call(this)
    };
    g.k.j9 = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k8(this, !b);
        b && c8(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.i9 = function(a) {
        c8(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.z(Msb, g.Qx);
    g.k = Msb.prototype;
    g.k.start = function() {
        var a = parseInt(g.jt("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.$a() - 144E5 < a ? 0 : a) ? l8(this): (this.D = g.$a() + 3E5, g.it("yt-remote-fast-check-period", this.D), this.RS())
    };
    g.k.isEmpty = function() {
        return g.Gc(this.j)
    };
    g.k.update = function() {
        Lsb("Updating availability on schedule.");
        var a = this.K(),
            b = g.xc(this.j, function(c, d) {
                return c && !!m7(a, d)
            }, this);
        Psb(this, b)
    };
    g.k.xa = function() {
        g.Rr(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.Qx.prototype.xa.call(this)
    };
    g.k.RS = function() {
        g.Rr(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = Qsb(this);
        if (Epb(a)) {
            var b = a8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.Cc(a).join(",")
            }, (0, g.Ya)(this.Rba, this, a), (0, g.Ya)(this.Qba, this))
        } else Psb(this, {}), l8(this)
    };
    g.k.Rba = function(a, b) {
        this.B = null;
        var c = g.Cc(Qsb(this));
        if (g.Kb(c, g.Cc(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = b[e].status == "online";
            Psb(this, c);
            l8(this)
        } else this.dg("Changing Screen set during request."), this.RS()
    };
    g.k.Qba = function(a) {
        this.dg("Screen availability failed: " + a);
        this.B = null;
        l8(this)
    };
    g.k.dg = function(a) {
        c8("OnlineScreenService", a)
    };
    g.ab(m8, h8);
    g.k = m8.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.PM = function(a, b, c, d) {
        this.B.contains(a) ? this.B.PM(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c8(this.K, a), d(Error(a)))
    };
    g.k.yl = function(a) {
        return a ? this.screens : g.zb(this.screens, g.qn(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.cV = function() {
        return g.qn(this.yl(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.dV = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Jsb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.gb(l);
            e(n8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.gb(l);
            f(m)
        });
        l.start();
        return (0, g.Ya)(l.stop, l)
    };
    g.k.U4 = function(a, b, c, d) {
        g.Zr(a8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ya)(function(e, f) {
                e = new j7(f.screen || {});
                if (!e.name || Usb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); Usb(this, l);) {
                            h++;
                            if (h > 20) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(n8(this, e))
            }, this),
            onError: (0, g.Ya)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ya)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.gb(this.B);
        g.gb(this.j);
        m8.Mf.xa.call(this)
    };
    g.k.t9 = function() {
        Wsb(this);
        this.publish("screenChange");
        this.j.update()
    };
    m8.prototype.dispose = m8.prototype.dispose;
    g.ab(o8, g.Qx);
    g.k = o8.prototype;
    g.k.Ej = function(a) {
        this.Ma() || (a && (q8(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        c8(this.Ea, a)
    };
    g.k.eV = function() {
        return null
    };
    g.k.kT = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ya)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ya)(function() {
            q8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.kT("");
        o8.Mf.xa.call(this)
    };
    g.z(r8, o8);
    g.k = r8.prototype;
    g.k.iT = function(a) {
        if (this.C) {
            if (this.C == a) return;
            q8(this, "Overriding cast session with new session object");
            htb(this);
            this.Ca = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia);
        ctb(this, "getMdxSessionStatus")
    };
    g.k.TA = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Mi(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.Ya)(function() {
            this.Ej()
        }, this), (0, g.Ya)(function() {
            this.Ej(Error("Failed to stop receiver app."))
        }, this)) : this.Ej(Error("Stopping cast device without session."))
    };
    g.k.kT = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        htb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia));
        this.C = null;
        o8.prototype.xa.call(this)
    };
    g.k.wca = function(a, b) {
        if (!this.Ma())
            if (b)
                if (b = e7(b), g.Va(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Mi(b)), a) {
                    case "mdxSessionStatus":
                        $sb(this, b);
                        break;
                    case "loungeToken":
                        dtb(this, b);
                        break;
                    default:
                        q8(this, "Unknown youtube message: " + a)
                } else q8(this, "Unable to parse message.");
                else q8(this, "No data in message.")
    };
    g.k.sY = function(a, b, c, d) {
        g.Rr(this.Z);
        this.Z = 0;
        Tsb(this.D, this.B.label, a, this.B.friendlyName, (0, g.Ya)(function(e) {
            e ? b(e) : d >= 0 ? (q8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.Pr((0, g.Ya)(this.sY, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.eV = function() {
        return this.C
    };
    g.k.V4 = function(a) {
        this.Ma() || a || (q8(this, "Cast session died."), this.Ej())
    };
    g.z(s8, o8);
    g.k = s8.prototype;
    g.k.iT = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ka)
    };
    g.k.TA = function(a) {
        this.Na = a;
        this.qa()
    };
    g.k.stop = function() {
        ptb(this);
        this.C ? this.C.stop((0, g.Ya)(this.Ej, this, null), (0, g.Ya)(this.Ej, this, "Failed to stop DIAL device.")) : this.Ej()
    };
    g.k.xa = function() {
        ptb(this);
        this.C && this.C.removeUpdateListener(this.Ka);
        this.C = null;
        o8.prototype.xa.call(this)
    };
    g.k.W4 = function(a) {
        this.Ma() || a || (q8(this, "DIAL session died."), this.G(), this.G = function() {}, this.Ej())
    };
    g.z(v8, o8);
    v8.prototype.stop = function() {
        this.Ej()
    };
    v8.prototype.iT = function() {};
    v8.prototype.TA = function() {
        g.Rr(this.C);
        this.C = NaN;
        var a = m7(this.D.yl(), this.B.label);
        a ? p8(this, a) : this.Ej(Error("No such screen"))
    };
    v8.prototype.xa = function() {
        g.Rr(this.C);
        this.C = NaN;
        o8.prototype.xa.call(this)
    };
    g.z(w8, g.Qx);
    g.k = w8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        g.Ur("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ya)(this.zba, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ya)(this.j0,
            this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ya)(this.taa, this);
        chrome.cast.initialize(c, (0, g.Ya)(function() {
            this.Ma() || (chrome.cast.addReceiverActionListener(this.G), Csb(), this.B.subscribe("onlineScreenChange", (0, g.Ya)(this.fV, this)), this.C = stb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Ya)(function(f) {
                this.dg("Failed to set initial custom receivers: " + g.Mi(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", y8(this)), b(!0))
        }, this), (0, g.Ya)(function(f) {
            this.dg("Failed to initialize API: " +
                g.Mi(f));
            b(!1)
        }, this))
    };
    g.k.Lda = function(a, b) {
        x8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) x8("Unsetting old screen status: " + this.j.B.friendlyName), z8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = m7(this.B.yl(), a);
                if (!a) {
                    x8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    x8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = qtb(this, a);
                c || (x8("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Ya)(function(d) {
                    this.dg("Failed to set initial custom receivers: " + g.Mi(d))
                }, this)));
                x8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                z8(this, new v8(this.B, c), !0)
            }
            this.j.kT(b)
        } else x8("setConnectedScreenStatus: no screen.")
    };
    g.k.Oda = function(a) {
        this.Ma() ? this.dg("Setting connection data on disposed cast v2") : this.j ? this.j.TA(a) : this.dg("Setting connection data without a session")
    };
    g.k.Y4 = function() {
        this.Ma() ? this.dg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), z8(this, null)) : x8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Ya)(this.j0, this), (0, g.Ya)(this.Uba, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.Ya)(this.fV, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = zsb,
            b = g.Pa("yt.mdx.remote.debug.handlers_");
        g.ub(b || [], a);
        g.gb(this.j);
        g.Qx.prototype.xa.call(this)
    };
    g.k.dg = function(a) {
        c8("Controller", a)
    };
    g.k.l0 = function(a, b) {
        this.j == a && (b || z8(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.wba = function(a, b) {
        if (!this.Ma())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), x8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) x8("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            x8("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            z8(this,
                                new v8(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            z8(this, new s8(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            z8(this, new r8(this.B, a, this.config_));
                            break;
                        default:
                            this.dg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.dg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.dg("onReceiverAction_ called without receiver.")
    };
    g.k.taa = function(a) {
        if (this.Ma()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.dg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.dg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return x8("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.dg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            z8(this, new s8(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, t8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = mtb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.xr(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = ntb(b, c)) : a = ntb(b, c)) : a = ktb(b);
        return a
    };
    g.k.j0 = function(a) {
        var b = this;
        if (!this.Ma() && !this.K) {
            x8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) x8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), z8(this, new r8(this.B, c, this.config_), !0);
                    else {
                        this.dg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = m7(this.B.yl(),
                        d.label);
                e && k7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.gb(this.j), this.j = new r8(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Ya)(this.l0, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return rtb(b, b.j)
                }), this.j.TA(null));
                this.j.iT(a)
            }
        }
    };
    g.k.X4 = function() {
        return this.j ? this.j.eV() : null
    };
    g.k.Uba = function(a) {
        this.Ma() || (this.dg("Failed to estabilish a session: " + g.Mi(a)), a.code != chrome.cast.ErrorCode.CANCEL && z8(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.zba = function(a) {
        x8("Receiver availability updated: " + a);
        if (!this.Ma()) {
            var b = y8(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            y8(this) != b && this.publish("yt-remote-cast2-availability-change", y8(this))
        }
    };
    g.k.fV = function() {
        this.Ma() || (this.C = stb(this), x8("Updating custom receivers: " + g.Mi(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Ya)(function() {
            this.dg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", y8(this)))
    };
    w8.prototype.setLaunchParams = w8.prototype.Oda;
    w8.prototype.setConnectedScreenStatus = w8.prototype.Lda;
    w8.prototype.stopSession = w8.prototype.Y4;
    w8.prototype.getCastSession = w8.prototype.X4;
    w8.prototype.requestSession = w8.prototype.requestSession;
    w8.prototype.init = w8.prototype.init;
    w8.prototype.dispose = w8.prototype.dispose;
    var Btb = [];
    g.k = G8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Htb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Up = a.hasPrevious, this.Bl = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return this.playerState == 1
    };
    g.k.isBuffering = function() {
        return this.playerState == 3
    };
    g.k.Cl = function() {
        return this.playerState == 1081
    };
    g.k.Vo = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + H8(this) : this.G
    };
    g.k.clone = function() {
        return new G8(Itb(this))
    };
    g.z(M8, g.Qx);
    g.k = M8.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Xt = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.vy = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        O8(this) ? (this.j ? this.j.play(null, g.dd, S8(this, "play")) : R8(this, "play"), Ltb(this, 1, J8(N8(this))), this.publish("remotePlayerChange")) : P8(this, this.play)
    };
    g.k.pause = function() {
        O8(this) ? (this.j ? this.j.pause(null, g.dd, S8(this, "pause")) : R8(this, "pause"), Ltb(this, 2, J8(N8(this))), this.publish("remotePlayerChange")) : P8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (O8(this)) {
            if (this.j) {
                var b = N8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.dd, S8(this, "seekTo", {
                    newTime: a
                }))
            } else R8(this, "seekTo", {
                newTime: a
            });
            Ltb(this, 3, a);
            this.publish("remotePlayerChange")
        } else P8(this, g.Za(this.seekTo, a))
    };
    g.k.stop = function() {
        if (O8(this)) {
            this.j ? this.j.stop(null, g.dd, S8(this, "stopVideo")) : R8(this, "stopVideo");
            var a = N8(this);
            a.index = -1;
            a.videoId = "";
            Htb(a);
            Q8(this, a);
            this.publish("remotePlayerChange")
        } else P8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (O8(this)) {
            var c = N8(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.Ya)(function() {
                        d8("set receiver volume: " + d)
                    }, this), (0, g.Ya)(function() {
                        this.dg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.Ya)(function() {
                    d8("set receiver muted: " + b)
                }, this), (0, g.Ya)(function() {
                    this.dg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                R8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            Q8(this, c)
        } else P8(this, g.Za(this.setVolume, a, b))
    };
    g.k.gV = function(a, b) {
        if (O8(this)) {
            var c = N8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Mi(b.style), g.Mc(a, c.trackData));
            R8(this, "setSubtitlesTrack", a);
            Q8(this, c)
        } else P8(this, g.Za(this.gV, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        O8(this) ? (b = b.getLanguageInfo().getId(), R8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = N8(this), a.audioTrackId = b, Q8(this, a)) : P8(this, g.Za(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = N8(this),
            m = {
                videoId: a
            };
        c !== void 0 && (m.currentIndex = c);
        K8(l, a, c || 0);
        b !== void 0 && (I8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Mi(h));
        R8(this, "setPlaylist", m);
        d || Q8(this, l)
    };
    g.k.PL = function(a, b) {
        if (O8(this)) {
            if (a && b) {
                var c = N8(this);
                K8(c, a, b);
                Q8(this, c)
            }
            R8(this, "previous")
        } else P8(this, g.Za(this.PL, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (O8(this)) {
            if (a && b) {
                var c = N8(this);
                K8(c, a, b);
                Q8(this, c)
            }
            R8(this, "next")
        } else P8(this, g.Za(this.nextVideo, a, b))
    };
    g.k.EO = function() {
        if (O8(this)) {
            R8(this, "clearPlaylist");
            var a = N8(this);
            a.reset();
            Q8(this, a);
            this.publish("remotePlayerChange")
        } else P8(this, this.EO)
    };
    g.k.zX = function() {
        O8(this) ? R8(this, "dismissAutoplay") : P8(this, this.zX)
    };
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.Qx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        Ktb(this);
        this.D = null;
        this.G.clear();
        L8(this, null);
        g.Qx.prototype.xa.call(this)
    };
    g.k.oT = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty();) b = a = this.G, b.j.length === 0 && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else a == 3 && this.dispose()
        }
    };
    g.k.uba = function(a, b) {
        this.publish(a, b)
    };
    g.k.iaa = function(a) {
        if (!a) this.lG(null), L8(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = N8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) d8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, Q8(this, b)
        }
    };
    g.k.lG = function(a) {
        d8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), Mtb(this), this.publish("remotePlayerChange")
    };
    g.k.haa = function(a) {
        a ? (Mtb(this), this.publish("remotePlayerChange")) : this.lG(null)
    };
    g.k.RT = function() {
        R8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.maa = function() {
        var a = Etb();
        a && L8(this, a)
    };
    g.k.dg = function(a) {
        c8("CP", a)
    };
    g.z(V8, g.Qx);
    g.k = V8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            I8(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ka ? "setInitialState" : "setPlaylist";
            T8("Connecting with " + c + " and params: " + g.Mi(m));
            this.B.connect({
                method: c,
                params: g.Mi(m)
            }, a, nqb())
        } else T8("Connecting without params"), this.B.connect({}, a, nqb());
        Qtb(this)
    };
    g.k.Js = function(a) {
        this.B.Js(a)
    };
    g.k.dispose = function() {
        this.Ma() || (g.Oa("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), U8(this, 3));
        g.Qx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        Rtb(this);
        Ttb(this);
        Stb(this);
        g.Rr(this.Z);
        this.Z = NaN;
        g.Rr(this.Y);
        this.Y = NaN;
        this.D = null;
        g.Xs(this.qa);
        this.qa.length = 0;
        this.B.dispose();
        g.Qx.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.rZ = function(a) {
        if (!this.C || this.C.length === 0) return !1;
        for (var b = g.v(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.P8 = function() {
        var a = 3;
        this.Ma() || (a = 0, isNaN(this.gF()) ? this.B.EA() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.Tz = function(a) {
        T8("Disconnecting with " + a);
        g.Oa("yt.mdx.remote.remoteClient_", null);
        Rtb(this);
        this.publish("beforeDisconnect", a);
        a == 1 && p7();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.J8 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), K8(a, this.D, a.index));
        return Itb(a)
    };
    g.k.Rda = function(a) {
        var b = this,
            c = new G8(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.Rr(this.Z), this.Z = g.Pr(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && W8(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J8(this.j) == J8(c) && g.Mi(this.j.trackData) == g.Mi(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Mb(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.nY = function() {
        var a = this.B.getDeviceId(),
            b = g.qb(this.C, function(c) {
                return c.type == "REMOTE_CONTROL" && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.gF = function() {
        return this.B.Xt()
    };
    g.k.t8 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.u8 = function() {
        return this.N || ""
    };
    g.k.Z4 = function() {
        !isNaN(this.gF()) && this.B.vy()
    };
    g.k.Ida = function(a, b) {
        W8(this, a, b);
        Vtb(this)
    };
    g.k.hV = function() {
        var a = g.js("SAPISID", "") || g.js("__Secure-1PAPISID") || "",
            b = g.js("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.Xe(g.We(a), 2);
        b = g.Xe(g.We(b), 2);
        return g.Xe(g.We("," + a + "," + b), 2)
    };
    V8.prototype.subscribe = V8.prototype.subscribe;
    V8.prototype.unsubscribeByKey = V8.prototype.Ph;
    V8.prototype.getProxyState = V8.prototype.P8;
    V8.prototype.disconnect = V8.prototype.Tz;
    V8.prototype.getPlayerContextData = V8.prototype.J8;
    V8.prototype.setPlayerContextData = V8.prototype.Rda;
    V8.prototype.getOtherConnectedRemoteId = V8.prototype.nY;
    V8.prototype.getReconnectTimeout = V8.prototype.gF;
    V8.prototype.getAutoplayMode = V8.prototype.t8;
    V8.prototype.getAutoplayVideoId = V8.prototype.u8;
    V8.prototype.reconnect = V8.prototype.Z4;
    V8.prototype.sendMessage = V8.prototype.Ida;
    V8.prototype.getXsrfToken = V8.prototype.hV;
    V8.prototype.isCapabilitySupportedOnConnectedDevices = V8.prototype.rZ;
    g.z(gub, h8);
    g.k = gub.prototype;
    g.k.yl = function(a) {
        return this.fh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.fh.$_c(a)
    };
    g.k.get = function(a) {
        return this.fh.$_g(a)
    };
    g.k.start = function() {
        this.fh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.fh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.fh.$_r(a, b, c)
    };
    g.k.PM = function(a, b, c, d) {
        this.fh.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.fh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.fh = null;
        h8.prototype.xa.call(this)
    };
    g.k.a5 = function() {
        this.publish("screenChange")
    };
    g.k.aba = function() {
        this.publish("onlineScreenChange")
    };
    m8.prototype.$_st = m8.prototype.start;
    m8.prototype.$_gspc = m8.prototype.U4;
    m8.prototype.$_gsppc = m8.prototype.dV;
    m8.prototype.$_c = m8.prototype.contains;
    m8.prototype.$_g = m8.prototype.get;
    m8.prototype.$_a = m8.prototype.add;
    m8.prototype.$_un = m8.prototype.PM;
    m8.prototype.$_r = m8.prototype.remove;
    m8.prototype.$_gs = m8.prototype.yl;
    m8.prototype.$_gos = m8.prototype.cV;
    m8.prototype.$_s = m8.prototype.subscribe;
    m8.prototype.$_ubk = m8.prototype.Ph;
    var g9 = null,
        j9 = !1,
        X8 = null,
        Y8 = null,
        rub = null,
        b9 = [];
    g.z(wub, g.P);
    g.k = wub.prototype;
    g.k.xa = function() {
        g.P.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Ic;
        a.unsubscribe("proxyStateChange", this.g0, this);
        a.unsubscribe("remotePlayerChange", this.vG, this);
        a.unsubscribe("remoteQueueChange", this.wL, this);
        a.unsubscribe("previousNextChange", this.d0, this);
        a.unsubscribe("nowAutoplaying", this.X_, this);
        a.unsubscribe("autoplayDismissed", this.G_, this);
        this.Ic = this.module = null
    };
    g.k.Al = function(a) {
        var b = g.Fa.apply(1, arguments);
        if (this.Ic.C != 2)
            if (k9(this)) {
                if (!N8(this.Ic).Cl() || a !== "control_seek") switch (a) {
                    case "control_toggle_play_pause":
                        N8(this.Ic).isPlaying() ? this.Ic.pause() : this.Ic.play();
                        break;
                    case "control_play":
                        this.Ic.play();
                        break;
                    case "control_pause":
                        this.Ic.pause();
                        break;
                    case "control_seek":
                        this.K.cN(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        yub(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    l9(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    l9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    yub(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.eaa = function(a) {
        this.N.E4(a)
    };
    g.k.Rea = function(a) {
        this.Al("control_subtitles_set_track", g.Gc(a) ? null : a)
    };
    g.k.t2 = function() {
        var a = this.J.getOption("captions", "track");
        g.Gc(a) || yub(this, a)
    };
    g.k.Sc = function(a) {
        this.module.Sc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.Laa = function() {
        g.Gc(this.C) || zub(this, this.C);
        this.D = !1
    };
    g.k.g0 = function(a, b) {
        this.B.stop();
        b === 2 && this.j2()
    };
    g.k.vG = function() {
        if (k9(this)) {
            this.j.stop();
            var a = N8(this.Ic);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.gi = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.gi = 0;
                    break;
                default:
                    this.module.gi = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Fc(new g.UF(8));
                    this.f2();
                    break;
                case 1085:
                case 3:
                    this.Fc(new g.UF(9));
                    break;
                case 1083:
                case 0:
                    this.Fc(new g.UF(2));
                    this.K.stop();
                    this.Sc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Fc(new g.UF(4));
                    break;
                case 2:
                    this.Fc(new g.UF(4));
                    this.Sc(J8(a));
                    break;
                case -1:
                    this.Fc(new g.UF(64));
                    break;
                case -1E3:
                    this.Fc(new g.UF(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        FE: 2
                    }))
            }
            a = N8(this.Ic).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, zub(this, a));
            a = N8(this.Ic);
            a.volume === -1 || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.l3()
        } else xub(this)
    };
    g.k.d0 = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.k.wL = function() {
        k9(this) || xub(this)
    };
    g.k.X_ = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    };
    g.k.G_ = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        k9(this) && this.Ic.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        N8(this.Ic).playerState === -1 ? l9(this, a) : b && this.Ic.seekTo(a)
    };
    g.k.l3 = function() {
        var a = this;
        if (k9(this)) {
            var b = N8(this.Ic);
            this.events.Nc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                uub(a, c)
            })
        }
    };
    g.k.f2 = function() {
        this.j.stop();
        if (!this.Ic.Ma()) {
            var a = N8(this.Ic);
            a.isPlaying() && this.Fc(new g.UF(8));
            this.Sc(J8(a));
            this.j.start()
        }
    };
    g.k.j2 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Ic.Xt();
        this.Ic.C == 2 && !isNaN(a) && this.B.start()
    };
    g.k.Fc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.$F(b, a)) {
            var c = g.Y(a, 2);
            c !== g.Y(this.G, 2) && this.J.lC(c);
            this.G = a;
            Bub(this.module, b, a)
        }
    };
    g.z(m9, g.U);
    m9.prototype.md = function() {
        this.j.show()
    };
    m9.prototype.Mb = function() {
        this.j.hide()
    };
    m9.prototype.B = function() {
        r7("mdx-privacy-popup-cancel");
        this.Mb()
    };
    m9.prototype.C = function() {
        r7("mdx-privacy-popup-confirm");
        this.Mb()
    };
    g.z(n9, g.U);
    n9.prototype.onStateChange = function(a) {
        this.wd(a.state)
    };
    n9.prototype.wd = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.Y(a, 128) ? g.MD("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.MD("Playing on $RECEIVER_NAME", b) : g.MD("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.z(m$, g.AT);
    m$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && a.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.Yu = g.Nb(a, this.j, this), g.BT(this, g.Gl(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Qi(a), this.enable(!0)) : this.enable(!1)
    };
    m$.prototype.j = function(a) {
        return a.key
    };
    m$.prototype.Zk = function(a) {
        return a === "cast-selector-receiver" ? "Cast..." : this.Yu[a].name
    };
    m$.prototype.Fg = function(a) {
        g.AT.prototype.Fg.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Yu[a]);
        this.Fb.Mb()
    };
    g.z(Aub, g.gU);
    g.k = Aub.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.$O(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        lub(b, a);
        this.subscriptions.push(g.Mv("yt-remote-before-disconnect", this.caa, this));
        this.subscriptions.push(g.Mv("yt-remote-connection-change", this.Aba, this));
        this.subscriptions.push(g.Mv("yt-remote-receiver-availability-change", this.f0,
            this));
        this.subscriptions.push(g.Mv("yt-remote-auto-connect", this.yba, this));
        this.subscriptions.push(g.Mv("yt-remote-receiver-resumed", this.xba, this));
        this.subscriptions.push(g.Mv("mdx-privacy-popup-confirm", this.Uca, this));
        this.subscriptions.push(g.Mv("mdx-privacy-popup-cancel", this.Tca, this));
        this.f0()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.gU.prototype.load.call(this);
        this.tm = new wub(this, this.player, this.Ic);
        var a = (a = tub()) ? a.currentTime : 0;
        var b = qub() ? new M8(f9(), void 0) : null;
        a == 0 && b && (a = J8(N8(b)));
        a !== 0 && this.Sc(a);
        Bub(this, this.Ee, this.Ee);
        this.player.Iq(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Jt = this.iq;
        g.ib(this.tm, this.Ic);
        this.Ic = this.tm = null;
        g.gU.prototype.unload.call(this);
        this.player.Iq(5);
        o$(this)
    };
    g.k.xa = function() {
        g.Nv(this.subscriptions);
        g.gU.prototype.xa.call(this)
    };
    g.k.qG = function(a) {
        var b = g.Fa.apply(1, arguments);
        this.loaded && this.tm.Al.apply(this.tm, [a].concat(g.w(b)))
    };
    g.k.getAdState = function() {
        return this.gi
    };
    g.k.Up = function() {
        return this.Ic ? N8(this.Ic).Up : !1
    };
    g.k.Bl = function() {
        return this.Ic ? N8(this.Ic).Bl : !1
    };
    g.k.Sc = function(a, b) {
        this.FZ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.Ac("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.FZ
    };
    g.k.getProgressState = function() {
        var a = N8(this.Ic),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.Cl() && this.player.ai(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + H8(a) : a.C,
            isAtLiveHead: (a.B ? a.j + H8(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.Z,
            seekableEnd: a.B ? a.j + H8(a) : a.j,
            seekableStart: a.D > 0 ? a.D + H8(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Ic && this.Ic.nextVideo()
    };
    g.k.PL = function() {
        this.Ic && this.Ic.PL()
    };
    g.k.caa = function(a) {
        a === 1 && (this.xS = this.Ic ? N8(this.Ic) : null)
    };
    g.k.Aba = function() {
        var a = qub() ? new M8(f9(), void 0) : null;
        if (a) {
            var b = this.Jt;
            this.loaded && this.unload();
            this.Ic = a;
            this.xS = null;
            b.key !== this.iq.key && (this.Jt = b, this.load())
        } else g.gb(this.Ic), this.Ic = null, this.loaded && (this.unload(), (a = this.xS) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J8(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.f0 = function() {
        var a = [this.iq],
            b = a.concat,
            c = mub();
        D8() && g.jt("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Yu = b.call(a, c);
        a = oub() || this.iq;
        p$(this, a);
        this.player.Ac("onMdxReceiversChange")
    };
    g.k.yba = function() {
        var a = oub();
        p$(this, a)
    };
    g.k.xba = function() {
        this.Jt = oub()
    };
    g.k.Uca = function() {
        this.MG = !0;
        o$(this);
        j9 = !1;
        g9 && i9(g9, 1);
        g9 = null
    };
    g.k.Tca = function() {
        this.MG = !1;
        o$(this);
        p$(this, this.iq);
        this.Jt = this.iq;
        j9 = !1;
        g9 = null;
        this.player.playVideo()
    };
    g.k.Sh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Yu;
            case "currentReceiver":
                return b && (b.key === "cast-selector-receiver" ? Ftb() : p$(this, b)), this.loaded ? this.Jt : this.iq;
            case "quickCast":
                return this.Yu.length === 2 && this.Yu[1].key === "cast-selector-receiver" ? (b && Ftb(), !0) : !1
        }
    };
    g.k.RT = function() {
        this.Ic.RT()
    };
    g.k.hn = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.ur("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.ur("SESSION_INDEX") && !g.ur("LOGGED_IN"))
    };
    g.fU("remote", Aub);
})(_yt_player);