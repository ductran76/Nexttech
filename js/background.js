function IEdge(e, t) {
    var n, r;
    if (n === -1) this.p1 = this.p2 = -1;
    else {
        this.p1 = e;
        this.p2 = t;
    }
}

function ITriangle() {
    this.p1;
    this.p2;
    this.p3;
    this.isValid = true;
    this.brightness = .03;
    this.circle = new Dot;
    this.rotation;
    this.randRotation;
    this.color;
    this.blinkColor;
}

function Blink() {
    this.lastBlinkPass = 0;
    this.lastBlinkLife = 0;
    this.lastBlinkArm = 0;
    this.lastBlinkAngle = 0;
    this.lastBlinkAngleDir = 0;
    this.lastBlinkX = 0;
    this.lastBlinkY = 0;
    this.lastBlinkR = 40;
    this.speed = .1;
    this.sprite = new Object;
    this.mirroredSprite = new Object;
    this.sprite.x = 0;
    this.sprite.y = 0;
    this.mirroredSprite.x = 0;
    this.mirroredSprite.y = 0;
    this.lastRadius;
}

function ClickTag() {
    this.anchorX = 0;
    this.anchorY = 0;
    this.view;
    this.view2;
    this.textIt;
    this.gfx;
    this.isRolledOver = false;
    this.crossMc;
    this.x = 0;
    this.y = 0;
}

function Dot() {
    this.colors = [1261943, 1261943, 1261943];
    this.blinkColors = [1261943, 1261943, 1261943];
    this.maxConnections = 25;
    this.startX;
    this.startY;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.Vx = 0;
    this.Vy = 0;
    this.view;
    this.blobFactor = 1;
    this.connectionCount;
    this.color;
    this.blinkColor;
    this.baseBrightness = 0;
    this.brightness = 0;
    this.brightnessFadeSpeed = 0;
    this.aX = 0;
    this.aY = 0;
    this.aD = 0;
    this.nextChange = 0;
    this.tx;
    this.ty;
    this.td;
    this.ta;
    this.tdFromStart;
    this.inRingOddPlace = false;
    this.inCenter = false;
    this.showInfo = true;
    this.showInfo1 = true;
}

function Diamond(e, t) {
    PBISite.deactivePoints = e;
    PBISite.blockDiamond = t;
    PBISite.t = new Timer;
    this.dt = 0;
    this.lastTime = 0;
    PBISite.spritePoint = new PIXI.DisplayObjectContainer;
    PBISite.diamondContainer = new PIXI.DisplayObjectContainer;
    if (!PBISite.deactivePoints) PBISite.dotsContainer = new PIXI.DisplayObjectContainer;
    Globals.SW = SW = PBISite.browser_width;
    Globals.SH = SH = PBISite.browser_height;
    Globals.pointTL = new PIXI.Point(0, 0);
    Globals.pointTR = new PIXI.Point(SW, 0);
    Globals.pointBL = new PIXI.Point(0, SH);
    Globals.pointBR = new PIXI.Point(SW, SH);
    PBISite.dotsLayer = new DotsLayer(0, 0);
    PBISite.dotsLayer.init();
    if (PBISite.bgFlov) {
        PBISite.dotsLayerBG = new DotsLayer(PBISite.browser_width >> 1, PBISite.browser_height >> 1);
        PBISite.dotsLayerBG.init_bgDots()
    }
    PBISite.stage.addChild(PBISite.spritePoint);
    if (PBISite.bgFlov) PBISite.stage.addChild(PBISite.dotsLayerBG.view);
    PBISite.stage.addChild(PBISite.diamondContainer);
    if (!PBISite.deactivePoints) PBISite.stage.addChild(PBISite.dotsContainer);
    PBISite.diamondContainer.x = PBISite.browser_width / 2 + 50;
    PBISite.diamondContainer.y = PBISite.browser_height / 2;
    PBISite.diamondContainer.addChild(PBISite.dotsLayer.view);
    if (!PBISite.deactivePoints) PBISite.dotsContainer.x = PBISite.browser_width / 2 + 50;
    if (!PBISite.deactivePoints) PBISite.dotsContainer.y = PBISite.browser_height / 2;
    this.textureButton = PIXI.Texture.fromImage(base_url + " ");
    this.textureButton2 = PIXI.Texture.fromImage(base_url + " ");
//    this.textureButton = PIXI.Texture.fromImage(base_url + "images/rollover2.png");
//    this.textureButton2 = PIXI.Texture.fromImage(base_url + "images/rollover1.png");
    PBISite.dotsLayer.view.scale.x = PBISite.dotsLayer.view.scale.y = PBISite.scaleY;
    if (!PBISite.blockDiamond) {
        this.bl = new Blink;
    }
    this.clickTags = [];
    var n;
    var r = Math.PI * .2;
    var i = Math.PI * 2 / 7;
    var s;
    var o;
    var u;
    var a;
    var f;
    var l;
    if (!PBISite.deactivePoints) {
        for (o = 0; o < 7; o++) {
            n = new ClickTag;
            u = 480 * .65;
            s = Math.random() * .1 * i;
            a = Math.cos(Math.PI + i * (o + 1) + s + i / 1.5) * u;
            f = Math.sin(Math.PI + i * (o + 1) + s + i / 1.5) * u;
            n.addView(this.textureButton, this.textureButton2, PBISite.benefitsArr[o][2]);
            n.setPosition(parseInt(a) - 25, parseInt(f) - 25);
            n.x = parseInt(a);
            n.y = parseInt(f);
            n.textIt.alpha = 0;
            n.view.setInteractive(true);
            n.view.buttonMode = true;
            n.view.alpha = 0;
            TweenLite.to(n.view, 1, {
                alpha: 1,
                ease: Sine.easeOut,
                overwrite: "all",
                delay: 7 + o * .5
            });
            n.view.id = o;
            n.view.view2 = n.view2;
            n.view.textIt = n.textIt;
            n.view.mouseover = function(e) {
                showQuote(this.textIt);
                TweenLite.to(this.view2, .4, {
                    alpha: 1,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
                TweenLite.to(this, .2, {
                    alpha: 0,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
            };
            n.view.mouseout = function(e) {
                TweenLite.delayedCall(2, showQuote);
                TweenLite.to(this.view2, .2, {
                    alpha: 0,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
                TweenLite.to(this, .4, {
                    alpha: 1,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
            };
            n.view.click = function(e) {
                animationBenefit(this.id);
            };
            n.view.touchend = function(e) {
                TweenLite.to(this.view2, .2, {
                    alpha: 0,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
                TweenLite.to(this, .4, {
                    alpha: 1,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
            };
            n.view.touchendoutside = function(e) {
                TweenLite.to(this.view2, .2, {
                    alpha: 0,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
                TweenLite.to(this, .4, {
                    alpha: 1,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
            };
            n.view.touchstart = function(e) {
                TweenLite.to(this.view2, .4, {
                    alpha: 1,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
                TweenLite.to(this, .2, {
                    alpha: 0,
                    ease: Sine.easeOut,
                    overwrite: "all"
                });
            };
            n.view.tap = function(e) {
                animationBenefit(this.id);
            };
            PBISite.dotsContainer.addChild(n.view2);
            PBISite.dotsContainer.addChild(n.view);
            this.clickTags.push(n);
        }
    }
    PBISite.dotsLayer.updateView();
    if (PBISite.bgFlov) PBISite.dotsLayerBG.view.alpha = 0;
    if (!PBISite.blockDiamond) {
        PBISite.dotsLayer.view.alpha = 0;
        if (PBISite.selectedTemplate == PBISite.HOME_PAGE) {
            if (PBISite.bgFlov) TweenLite.to(PBISite.dotsLayerBG.view, 1, {
                alpha: 1,
                ease: Sine.easeOut,
                overwrite: "all",
                delay: 0
            });
            TweenLite.to(PBISite.dotsLayer.view, 6, {
                alpha: 1,
                ease: Sine.easeOut,
                overwrite: "all",
                delay: 1
            });
            PBISite.benefitDotsAdded = true
        } else {
            if (PBISite.bgFlov) TweenLite.to(PBISite.dotsLayerBG.view, 1.5, {
                alpha: 1,
                ease: Sine.easeOut,
                overwrite: "all",
                delay: 0
            });
            TweenLite.to(PBISite.dotsLayer.view, 1.5, {
                alpha: .1,
                ease: Power1.easeOut,
                overwrite: "all"
            });
            PBISite.benefitDotsAdded = false;
            if (!PBISite.deactivePoints) PBISite.stage.removeChild(PBISite.dotsContainer)
        }
    } else {
        PBISite.benefitDotsAdded = false
    }
    lastTime = Date.now();
    var c = PBISite.stage.getMousePosition();
    if (PBISite.blockDiamond) {
        PBISite.dotsLayer.view.cacheAsBitmap = true;
        PBISite.dotsLayer.view.x = -400;
        PBISite.dotsLayer.view.y = -400
    }
}

function removeDots() {
    if (PBISite.benefitDotsAdded) {
        PBISite.benefitDotsAdded = false;
        if (!PBISite.deactivePoints) PBISite.stage.removeChild(PBISite.dotsContainer)
    }
}

function addDots() {
    if (PBISite.benefitDotsAdded == false) {
        PBISite.benefitDotsAdded = true;
        if (!PBISite.deactivePoints) PBISite.stage.addChild(PBISite.dotsContainer)
    }
}

function Timer(e, t) {
    var n = time = (new Date(e || null)).valueOf(),
        t = t || 10;
    setInterval(function() {
        time += t;
    }, t);
    this.elapsed = function() {
        return time - n;
    };
    this.getDate = function() {
        return new Date(time);
    };
}

function DotsLayer(e, t) {
    this.view;
    this.MAX_DOTS = 256;
    this.MAX_TRI = 0;
    this.dots = [];
    this.tris = [];
    this.edges = [];
    this.lineCanvasSpr;
    this.lineCanvas;
    this.lines = [];
    this.linesLength;
    this.cx = e;
    this.cy = t;
    this.colors = [0, 0];
    this.alphas = [1, 1];
    this.fType = "linear";
    this.ratios = [0, 255];
    this.matr;
    this.inRingOddPlace = false;
    this.dot;
    this.dot1;
    this.dot2;
    this.dot3;
    this.view = new PIXI.DisplayObjectContainer;
    this.lineCanvasSpr = new PIXI.DisplayObjectContainer;
    this.lineCanvas = new PIXI.Graphics;
    this.lineCanvasSpr.addChild(this.lineCanvas);
    this.view.addChild(this.lineCanvasSpr);
}
var Delaunay = new function() {
    this.EPSILON = 1e-6;
    this.edges = [];
    this.CircumCircle = function(e, t, n, r, i, s, o, u, a) {
        var f, l, c, h, p, d;
        var v, m, g, y;
        var b, w, E;
        if (Math.abs(r - s) < this.EPSILON && Math.abs(s - u) < this.EPSILON) {
            trace("CircumCircle: Points are coincident.");
            return false;
        }
        if (Math.abs(s - r) < this.EPSILON) {
            l = -(o - i) / (u - s);
            h = (i + o) / 2;
            d = (s + u) / 2;
            b = (i + n) / 2;
            w = l * (b - h) + d;
        } else if (Math.abs(u - s) < this.EPSILON) {
            f = -(i - n) / (s - r);
            c = (n + i) / 2;
            p = (r + s) / 2;
            b = (o + i) / 2;
            w = f * (b - c) + p;
        } else {
            f = -(i - n) / (s - r);
            l = -(o - i) / (u - s);
            c = (n + i) / 2;
            h = (i + o) / 2;
            p = (r + s) / 2;
            d = (s + u) / 2;
            b = (f * c - l * h + d - p) / (f - l);
            w = f * (b - c) + p;
        }
        v = i - b;
        m = s - w;
        g = v * v + m * m;
        E = Math.sqrt(g);
        v = e - b;
        m = t - w;
        y = v * v + m * m;
        a.x = b;
        a.y = w;
        a.z = E;
        return y <= g ? true : false;
    };
    this.sortOn = function(e) {
        return function(t, n) {
            if (t[e] < n[e]) return -1;
            else if (t[e] > n[e]) return 1;
            else return 0;
        };
    };
    this.triangulate = function(e) {
        var t = [];
        var n = e.length;
        for (_ = 0; _ < n * 3; _++) t[_] = new ITriangle;
        e.sort(this.sortOn("x"));
        var r = null;
        edges = null;
        var i = 0;
        var s, o = 200;
        var u = 0;
        var a;
        var f, l, c, h, p, d, v, m, g, y, b;
        var w, E, S, x, T, N;
        var C, k, L;
        var A = 0;
        s = 4 * n;
        r = [];
        for (var O = 0; O < s; O++) r[O] = false;
        edges = [];
        for (var M = 0; M < o; M++) edges[M] = new IEdge;
        w = e[0].x;
        S = e[0].y;
        E = w;
        x = S;
        for (var _ = 1; _ < n; _++) {
            if (e[_].x < w) w = e[_].x;
            if (e[_].x > E) E = e[_].x;
            if (e[_].y < S) S = e[_].y;
            if (e[_].y > x) x = e[_].y;
        }
        C = E - w;
        k = x - S;
        L = C > k ? C : k;
        T = (E + w) / 2;
        N = (x + S) / 2;
        e[n] = new Dot;
        e[n + 1] = new Dot;
        e[n + 2] = new Dot;
        e[n + 0].x = T - 2 * L;
        e[n + 0].y = N - L;
        e[n + 1].x = T;
        e[n + 1].y = N + 2 * L;
        e[n + 2].x = T + 2 * L;
        e[n + 2].y = N - L;
        t[0].p1 = n;
        t[0].p2 = n + 1;
        t[0].p3 = n + 2;
        r[0] = false;
        A = 1;
        for (_ = 0; _ < n; _++) {
            f = e[_].x;
            l = e[_].y;
            i = 0;
            var D = new Dot;
            for (var P = 0; P < A; P++) {
                if (r[P]) continue;
                c = e[t[P].p1].x;
                h = e[t[P].p1].y;
                p = e[t[P].p2].x;
                d = e[t[P].p2].y;
                v = e[t[P].p3].x;
                m = e[t[P].p3].y;
                a = this.CircumCircle(f, l, c, h, p, d, v, m, D);
                g = D.x;
                y = D.y;
                b = D.z;
                if (g + b < f) r[P] = true;
                if (a) {
                    if (i + 3 >= o) {
                        trace("crazy if statement");
                        o += 100;
                        var H = new Array;
                        for (M = 0; M < o; M++) H[M] = new IEdge;
                        for (var B = 0; B < edges.length; B++) H[B] = edges[B];
                        edges = H;
                    }
                    edges[i + 0].p1 = t[P].p1;
                    edges[i + 0].p2 = t[P].p2;
                    edges[i + 1].p1 = t[P].p2;
                    edges[i + 1].p2 = t[P].p3;
                    edges[i + 2].p1 = t[P].p3;
                    edges[i + 2].p2 = t[P].p1;
                    i += 3;
                    t[P].p1 = t[A - 1].p1;
                    t[P].p2 = t[A - 1].p2;
                    t[P].p3 = t[A - 1].p3;
                    r[P] = r[A - 1];
                    A--;
                    P--;
                }
            }
            var j;
            var F;
            var I;
            var q;
            var R;
            for (P = 0; P < i - 1; P++)
                for (var U = P + 1; U < i; U++) {
                    if (edges[P].p1 === edges[U].p2 && edges[P].p2 === edges[U].p1) {
                        edges[P].p1 = -1;
                        edges[P].p2 = -1;
                        edges[U].p1 = -1;
                        edges[U].p2 = -1;
                    }
                    if (edges[P].p1 === edges[U].p1 && edges[P].p2 === edges[U].p2) {
                        edges[P].p1 = -1;
                        edges[P].p2 = -1;
                        edges[U].p1 = -1;
                        edges[U].p2 = -1;
                    }
                }
            for (P = 0; P < i; P++) {
                if (edges[P].p1 === -1 || edges[P].p2 === -1) continue;
                if (A >= s) return null;
                t[A].p1 = edges[P].p1;
                t[A].p2 = edges[P].p2;
                t[A].p3 = _;
                r[A] = false;
                A++;
            }
        }
        for (_ = 0; _ < A; _++)
            if (t[_].p1 >= n || t[_].p2 >= n || t[_].p3 >= n) {
                t[_] = t[A - 1];
                A--;
                _--;
            }
        var z;
        for (_ = 0; _ < A; _++) {
            z = t[_];
            this.CircumCircle(e[z.p1].x, e[z.p1].y, e[z.p1].x, e[z.p1].y, e[z.p2].x, e[z.p2].y, e[z.p3].x, e[z.p3].y, z.circle);
        }
        t.length = A;
        e.length -= 3;
        return t;
    };
    this.drawDelaunay = function(tris, points, clip, toLabel) {
        var p = new Sprite;
        var t = new Sprite;
        clip.addChild(t);
        clip.addChild(p);
        if (toLabel) {
            var l = new Sprite;
            clip.addChild(l);
        }
        var i = 0;
        for (i; i < points.length; i++) {
            var point = points[i];
            if (point === null) continue;
            var circ = new Shape;
            circ.graphics.beginFill(14606046);
            circ.graphics.drawCircle(0, 0, 1);
            circ.x = point.x;
            circ.y = point.y;
            p.addChild(circ);
        }
        t.graphics.lineStyle(1, 15855074);
        t.graphics.beginFill(15855074, .1);
        var j = 0;
        for (j; j < tris.length; j++) {
            var tri = tris[j];
            with(t.graphics) {
                moveTo(points[tri.p1].x, points[tri.p1].y);
                lineTo(points[tri.p2].x, points[tri.p2].y);
                lineTo(points[tri.p3].x, points[tri.p3].y);
                lineTo(points[tri.p1].x, points[tri.p1].y);
            }
        }
        t.graphics.endFill();
    };
};
var Utils = new function() {
    this.s;
    this.ready;
    this.cache;
    this.interpolateColor = function(e, t, n) {
        var r = 1 - n;
        var i = e >> 24 & 255;
        var s = e >> 16 & 255;
        var o = e >> 8 & 255;
        var u = e & 255;
        var a = t >> 24 & 255;
        var f = t >> 16 & 255;
        var l = t >> 8 & 255;
        var c = t & 255;
        var h = i * r + a * n;
        var p = s * r + f * n;
        var d = o * r + l * n;
        var v = u * r + c * n;
        var m = h << 24 | p << 16 | d << 8 | v;
        return m;
    };
    this.standardNormal = function() {
        if (this.ready) {
            this.ready = false;
            return this.cache;
        }
        var e, t, n;
        do {
            e = (s = s * 16807 % 2147483647) / 1073741823.5 - 1;
            t = (s = s * 16807 % 2147483647) / 1073741823.5 - 1;
            n = e * e + t * t;
        } while (n >= 1 || !n);
        n = Math.sqrt(-2 * Math.log(n) / n);
        this.ready = true;
        this.cache = e * n;
        return t * n;
    };
    this.seed = function(e) {
        this.s = this.seed > 1 ? this.seed % 2147483647 : 1;
    };
    this.uniform = function() {
        return (this.s = this.s * 16807 % 2147483647) / 2147483647;
    };
};
Blink.prototype.setVisibility = function(e) {
    this.sprite.visible = this.mirroredSprite.visible = e;
};
Blink.prototype.update = function(e) {
    this.lastBlinkPass -= e;
    if (this.lastBlinkPass < 0) {
        this.lastBlinkPass = 1 + Math.random() * 1;
        this.reinit();
    }
    if (this.lastBlinkLife > 0) {
        this.lastBlinkLife -= e;
        this.lastBlinkAngle += this.lastBlinkAngleDir * Math.PI * e * this.speed;
        this.sprite.x = this.lastBlinkX + Math.cos(this.lastBlinkAngle) * this.lastBlinkArm;
        this.sprite.y = this.lastBlinkY + Math.sin(this.lastBlinkAngle) * this.lastBlinkArm;
        this.lastRadius = this.lastBlinkR + Math.sin(this.lastBlinkLife * Math.PI + Math.PI * .6) * this.lastBlinkR;
        this.mirroredSprite.x = this.lastBlinkX + -Math.cos(this.lastBlinkAngle) * this.lastBlinkArm;
        this.mirroredSprite.y = this.lastBlinkY + -Math.sin(this.lastBlinkAngle) * this.lastBlinkArm;
        return true;
    }
    return false;
};
Blink.prototype.reinit = function() {
    this.lastBlinkArm = 400;
    this.lastBlinkX = (Globals.SW >> 1) + Math.random() * 400;
    this.lastBlinkY = Globals.SH >> 1;
    this.lastBlinkR = Globals.blinkRadius + Math.random() * Globals.blinkRadius;
    this.lastBlinkAngleDir = 1;
    this.lastBlinkAngle = Math.PI / 2;
    if (Math.random() > .5) {
        this.lastBlinkAngleDir = -1;
        this.lastBlinkAngle = -Math.PI / 2;
    }
    this.speed = Globals.blinkSpeed;
    this.lastBlinkArm = 300 + Math.random() * 100;
    this.lastBlinkLife = Globals.blinkLife;
};
ClickTag.prototype.addView = function(e, t, n) {
    this.view = new PIXI.Sprite(e);
    this.view.setInteractive(true);
    this.view.buttonMode = true;
    this.view2 = new PIXI.Sprite(t);
    this.view2.setInteractive(true);
    this.view2.buttonMode = true;
    this.textIt = n;
    this.view2.alpha = 0;
    this.updateView();
};
ClickTag.prototype.updateView = function() {
    this.view.x = this.x;
    this.view.y = this.y;
    this.view2.x = this.x;
    this.view2.y = this.y;
    this.textIt.x = this.x;
    this.textIt.y = this.y - 30;
};
ClickTag.prototype.update = function(e, t, n, r) {
    if (isNaN(e)) return;
    var i;
    var s;
    var o;
    var u;
    var a;
    var f;
    i = n - this.anchorX;
    s = r - this.anchorY;
    o = Math.sqrt(i * i + s * s);
    u = this.anchorX;
    a = this.anchorY;
    f = 1;
    if (o < 400) {
        i /= o + 1;
        s /= o + 1;
        o /= 400;
        f = 1 - o;
        u = this.anchorX + i * 100 * o;
        a = this.anchorY + s * 100 * o;
    }
    if (this.x === 0) {
        this.x = u;
        this.y = a;
    }
    this.x += (u - this.x) * e * 3 * f;
    this.y += (a - this.y) * e * 3 * f;
    this.updateView();
};
ClickTag.prototype.setPosition = function(e, t) {
    this.anchorX = e;
    this.anchorY = t;
    this.update(0, 0, PBISite.browser_width / 2, PBISite.browser_height / 2);
};
Dot.prototype.Init = function(e, t) {
    this.startX = this.x = e;
    this.startY = this.y = t;
    this.createView();
    this.updateView();
    this.color = this.colors[Math.random() * this.colors.length >> 0];
    this.blinkColor = this.blinkColors[Math.random() * this.blinkColors.length >> 0];
    this.brightnessFadeSpeed = 5;
};
Dot.prototype.createView = function() {
    this.view = new PIXI.DisplayObjectContainer;
    var e = new PIXI.Graphics;
    e.beginFill(15790320);
    e.drawCircle(.5, .5, 2, 2);
    e.endFill();
    this.view.addChild(e);
};
Dot.prototype.inBBox = function(e, t) {
    if (this.x + t < e.x) return false;
    if (this.x - t > e.x) return false;
    if (this.y + t < e.y) return false;
    if (this.y - t > e.y) return false;
    return true;
};
Dot.prototype.dist2From = function(e) {
    this.tx = this.x - e.x;
    this.ty = this.y - e.y;
    return Math.sqrt(this.tx * this.tx + this.ty * this.ty);
};
Dot.prototype.stop = function() {
    this.x = this.startX;
    this.y = this.startY;
    this.Vx = this.aX = 0;
    this.Vy = this.aY = 0;
};
Dot.prototype.update = function(e) {
    if (e > 1) return;
    if (this.brightness > 0) {
        this.brightness -= this.brightnessFadeSpeed * e;
    }
    if (this.brightness < 0) {
        this.brightness = 0;
    }
};
Dot.prototype.blobForce = function(e, t, n, r, i) {
    if (r > 1) return;
    this.tx = this.view.worldTransform.tx - e;
    this.ty = this.view.worldTransform.ty - t;
    this.ta = Math.atan2(this.ty, this.tx);
    this.td = Math.sqrt(this.tx * this.tx + this.ty * this.ty);
    this.blobFactor = 1;
    if (this.td > n) return;
    this.blobFactor = 0;
    this.brightness = 1;
};
Dot.prototype.updateView = function() {
    this.view.x = this.x;
    this.view.y = this.y;
};
Dot.prototype.update_asBgDot = function(e) {
    if (e > 1) return;
    this.x += this.Vx * e;
    this.y += this.Vy * e;
    if (this.x < -Globals.bgDotsMaxLine) {
        this.x = Globals.SW + Globals.bgDotsMaxLine;
    }
    if (this.x > Globals.SW + Globals.bgDotsMaxLine) {
        this.x = -Globals.bgDotsMaxLine;
    }
    if (this.y < -Globals.bgDotsMaxLine) {
        this.y = Globals.SH + Globals.bgDotsMaxLine;
    }
    if (this.y > Globals.SH + Globals.bgDotsMaxLine) {
        this.y = -Globals.bgDotsMaxLine;
    }
};
Dot.prototype.update_asClicktagDots = function(e, t) {
    if (e > 1) return;
    this.tx = this.startX - this.x;
    this.ty = this.startY - this.y;
    this.Vx += this.tx * e;
    this.Vy += this.ty * e;
    this.Vx += -this.Vx * .05;
    this.Vy += -this.Vy * .05;
    this.x += this.Vx * e * 10;
    this.y += this.Vy * e * 10;
    this.nextChange -= e;
    if (this.nextChange < 0) {
        this.nextChange = .1 + Math.random() * 2;
        this.td = Math.random() * Math.PI * 2;
        this.aD = Math.random() * Globals.clicktagsDotsWobble;
        this.aX = Math.cos(this.td) * this.aD;
        this.aY = Math.sin(this.td) * this.aD;
    }
    this.Vx += this.aX * e;
    this.Vy += this.aY * e;
};
Dot.prototype.do_baseBrightness = function() {};
Dot.prototype.redoSpeed = function() {
    var e = Globals.bgDotsSpeed * (1 + Math.random());
    var t = Math.random() * Math.PI * 2;
    this.Vx = Math.cos(t) * e;
    this.Vy = Math.sin(t) * e;
};
Dot.prototype.redoAlpha = function() {
    this.view.alpha = Globals.bgDotsAlpha;
};
var Globals = new function() {
    this.instance = null;
    this.SW;
    this.SH;
    this.pointTL;
    this.pointTR;
    this.pointBL;
    this.pointBR;
    this.perfectCrystal = false;
    this.maxDots = 130;
    this.maxBgDots = 40;
    this.bgDotsSpeed = 15;
    this.bgDotsMaxLine = 160;
    this.bgDotsAlpha = .5;
    this.minDotsDist2 = 10 * 10;
    this.brightnessFadeSpeed = 50;
    this.baseBrightness = 5e-4;
    this.centerRadius = 160;
    this.centerRingDots = 0;
    this.centerRingRadius = 0;
    this.minBlinkRadius = 40;
    this.maxBlinkRadius = 80;
    this.minBlinkLife = 1;
    this.maxBlinkLife = 5;
    this.minBlinkSpeed = 1;
    this.maxBlinkSpeed = 5;
    this.linesBlinkPower = 3;
    this.blinkRadius = 60;
    this.blinkSpeed = .2;
    this.blinkLife = 7;
    this.lightRot = 100;
    this.faceRandRotation = .75;
    this.allowDisplacement = true;
    this.shadowDeep = 5;
    this.gradientAlphaBump = 5;
    this.gradientRadiusBump = 0;
    this.clicktagsDotsWobble = 10.14;
    this.ofertaDetalNumPoints = 5;
    this.blinkBump = 0;
    this.getInstance = function() {
        if (this.instance === null) {
            this.instance = new Globals;
        }
        return this.instance;
    };
};
Diamond.prototype.animateDiamond = function() {
    this.dt = (Date.now() - this.lastTime) * 5e-4;
    this.lastTime = Date.now();
    if (PBISite.bgFlov) PBISite.dotsLayerBG.update_asBgDots(this.dt);
    if (!PBISite.blockDiamond) {
        PBISite.dotsLayer.update(this.dt);
        this.mouseRadius = Globals.blinkRadius;
        if (PBISite.spritePoint.worldTransform.tx > 0 && PBISite.spritePoint.worldTransform.ty > 0) {
            PBISite.dotsLayer.addBlobForce(PBISite.spritePoint.worldTransform.tx, PBISite.spritePoint.worldTransform.ty, this.mouseRadius, this.dt, true)
        }
    }
    if (!PBISite.blockDiamond) {
        if (this.bl.update(this.dt)) {
            PBISite.dotsLayer.addBlobForce(this.bl.sprite.x, this.bl.sprite.y, this.bl.lastRadius, this.dt, true);
            if (Globals.blinkHasMirror) {
                PBISite.dotsLayer.addBlobForce(this.bl.mirroredSprite.x, this.bl.mirroredSprite.y, this.bl.lastRadius, this.dt, true)
            }
        }
    }
    if (!PBISite.deactivePoints) {
        if (PBISite.spritePoint.worldTransform.tx != 0) {
            for (i = 0; i < this.clickTags.length; i++) {
                clickTag = this.clickTags[i];
                clickTag.update(this.dt, i, PBISite.spritePoint.worldTransform.tx - PBISite.browser_width / 2 - 50, PBISite.spritePoint.worldTransform.ty - PBISite.browser_height / 2)
            }
        }
    }
    PBISite.dotsLayer.updateView();
    if (PBISite.bgFlov) {
        PBISite.dotsLayerBG.updateView_asBgDots()
    }
    PBISite.diamondContainer.rotation += .001
};
DotsLayer.prototype.init_bgDots = function(e) {
    this.clean();
    this.view.addChild(this.lineCanvasSpr);
    this.dots = [];
    var t;
    var n;
    var r;
    var i;
    var s;
    var o;
    var u;
    var a;
    var f;
    Utils.seed(1);
    this.MAX_DOTS = Globals.maxBgDots;
    for (t = 0; t < this.MAX_DOTS; t++) {
        i = Math.random() * Math.PI * 2;
        r = Globals.bgDotsSpeed + Math.random() * Globals.bgDotsSpeed;
        o = Globals.SW * Math.random();
        u = Globals.SH * Math.random();
        n = new Dot;
        n.Init(o, u);
        n.redoAlpha();
        n.Vx = Math.cos(i) * r;
        n.Vy = Math.sin(i) * r;
        this.dots.push(n);
        this.view.addChild(n.view);
    }
};
DotsLayer.prototype.init = function() {
    this.clean();
    this.view.addChild(this.lineCanvasSpr);
    this.dots = [];
    var e;
    var t;
    var n;
    var r;
    var i;
    var s;
    var o;
    var u;
    var a;
    Utils.seed(1);
    var f = 0;
    var l = 0;
    this.MAX_DOTS = Globals.maxDots;
    for (e = 0; e < this.MAX_DOTS; e++) {
        for (f = 0; f < 10; f++) {
            n = Math.random() * Math.random() * Math.random();
            n /= 3;
            if (n > 1) n = 1;
            n = 1 - n;
            n = Math.pow(n, 2);
            n = n * 800 - 400;
            r = Math.random() * Math.PI * 2;
            s = this.cx + Math.cos(r) * n;
            o = this.cy + Math.sin(r) * n;
            if (this.isNotTooCloseFromOthers(s, o)) {
                break
            }
        }
        t = new Dot;
        t.Init(s >> 0, o >> 0);
        this.dots.push(t);
        this.view.addChild(t.view);
    }
    this.lines = [];
    this.linesLength = this.lines.length;
    var c = Globals.centerRadius;
    this.tris = Delaunay.triangulate(this.dots);
    this.edges = Delaunay.edges;
    var h;
    var p;
    var d;
    var v;
    var m;
    for (e = 0; e < this.tris.length; e++) {
        h = this.tris[e];
        p = this.dots[h.p1];
        s = this.cx - p.x;
        o = this.cy - p.y;
        u = Math.sqrt(s * s + o * o);
        if (u < c) {
            h.isValid = false;
            continue
        }
        p = this.dots[h.p2];
        s = this.cx - p.x;
        o = this.cy - p.y;
        u = Math.sqrt(s * s + o * o);
        if (u < c) {
            h.isValid = false;
            continue
        }
        p = this.dots[h.p3];
        s = this.cx - p.x;
        o = this.cy - p.y;
        u = Math.sqrt(s * s + o * o);
        if (u < c) {
            h.isValid = false;
            continue
        }
    }
    var g = 112;
    var y;
    var b = true;
    for (e = 0; e < this.tris.length; e++) {
        h = this.tris[e];
        d = this.dots[h.p1];
        v = this.dots[h.p2];
        m = this.dots[h.p3];
        h.brightness = Globals.baseBrightness * 2;
        b = !b;
        if (b) {
            h.brightness += Globals.baseBrightness * .3;
        }
        s = this.cx + Math.cos(Globals.lightRot) * 400 - h.circle.x;
        o = this.cy + Math.sin(Globals.lightRot) * 400 - h.circle.y;
        y = Math.atan2(o, s);
        h.rotation = y;
        h.randRotation = Math.random() * Math.PI * 2 * Globals.faceRandRotation;
        h.color = Utils.interpolateColor(d.color, v.color, .5);
        h.color = Utils.interpolateColor(m.color, h.color, .5);
        h.blinkColor = Utils.interpolateColor(d.blinkColor, v.blinkColor, .5);
        h.blinkColor = Utils.interpolateColor(m.blinkColor, h.blinkColor, .5);
    }
    var w = 16;
    for (e = 0; e < this.MAX_DOTS; e++) {
        t = this.dots[e];
        s = this.cx - t.x;
        o = this.cy - t.y;
        y = Math.atan2(o, s);
        if (y < 0) y += 2 * Math.PI;
        y += Math.PI * 2 / w * .25;
        y /= Math.PI * 2;
        y *= w;
        y = Math.round(y);
        u = Math.sqrt(s * s + o * o);
        if (u < Globals.centerRadius) {
            t.inCenter = true;
            t.view.visible = false;
        }
        u = u / Globals.centerRadius;
        u *= u;
        u *= 2;
        u = Math.round(u);
        u /= 2;
        t.baseBrightness = u * Globals.baseBrightness;
        if (Globals.perfectCrystal) {
            if (y % 2 === 0) {
                t.baseBrightness *= 5;
            }
        } else {
            t.baseBrightness *= 3;
        }
    }
    this.MAX_TRI = this.tris.length;
};
DotsLayer.prototype.isNotTooCloseFromOthers = function(e, t) {
    var n;
    var r;
    var i;
    var s = Globals.minDotsDist2;
    var o;
    var u = this.dots.length;
    for (o = 0; o < u; o++) {
        dot = this.dots[o];
        n = e - dot.x;
        r = t - dot.y;
        i = n * n + r * r;
        if (i < s) {
            return false;
        }
    }
    return true;
};
DotsLayer.prototype.init_asClicktagDots = function() {
    this.clean();
    this.view.addChild(this.lineCanvasSpr);
    this.dots = [];
};
DotsLayer.prototype.addDot = function() {
    var e = new Dot;
    this.dots.push(e);
    this.MAX_DOTS = this.dots.length;
    return e;
};
DotsLayer.prototype.clean = function() {
    while (this.view.numChildren) {
        this.view.removeChildAt(0);
    }
};
DotsLayer.prototype.addRing = function(e, t) {
    var n;
    var r;
    var i;
    var s;
    var o;
    var u;
    s = Math.PI * 2 / t;
    for (n = 0; n < t; n++) {
        i = n * s;
        o = cx + Math.cos(i) * e;
        u = cy + Math.sin(i) * e;
        r = new Dot;
        r.Init(o, u);
        r.inRingOddPlace = !inRingOddPlace;
        this.dots.push(r);
        this.view.addChild(r.view);
    }
};
DotsLayer.prototype.update = function(e) {
    var t;
    for (t = 0; t < this.MAX_DOTS; t++) {
        dot = this.dots[t];
        dot.update(e);
    }
};
DotsLayer.prototype.update_asBgDots = function(e) {
    if (isNaN(e)) return;
    var t;
    var n;
    for (n = 0; n < this.MAX_DOTS; n++) {
        t = this.dots[n];
        t.update_asBgDot(e);
    }
};
DotsLayer.prototype.update_asClicktagDots = function(e) {
    if (isNaN(e)) return;
    var t;
    var n;
    for (n = 0; n < this.MAX_DOTS; n++) {
        t = this.dots[n];
        t.update_asClicktagDots(e, n);
    }
};
DotsLayer.prototype.addBlobForce = function(e, t, n, r, i) {
    var s;
    var o = 0;
    for (o = 0; o < this.MAX_DOTS; o++) {
        s = this.dots[o];
        s.blobForce(e, t, n, r, i);
    }
};
DotsLayer.prototype.updateView = function() {
    var e = 0;
    for (e; e < this.MAX_DOTS; e++) {
        dot = this.dots[e];
        dot.updateView();
        dot.view.alpha = dot.baseBrightness * .5 + .2 + .5 * dot.brightness;
    }
    var t;
    var n;
    var r;
    var i;
    this.lineCanvas.clear();
    this.lineCanvas.lineStyle(0, 15654599, .2);
    var s;
    var o;
    var e = 0;
    for (e; e < this.MAX_TRI; e++) {
        o = this.tris[e];
        dot1 = this.dots[o.p1];
        dot2 = this.dots[o.p2];
        dot3 = this.dots[o.p3];
        r = o.blinkColor;
        t = (dot1.baseBrightness + dot2.baseBrightness + dot3.baseBrightness) * .33;
        n = (dot1.brightness + dot2.brightness + dot3.brightness) * .22 * .1;
        if (n < .1 * .22 * .5) {
            n = 0;
        }
        t += n;
        t += o.brightness * 2;
        r = Utils.interpolateColor(o.color, r, n * 3);
        if (n > 0) {
            t += Globals.blinkBump;
            if (t > 1) t = 1;
            r = Utils.interpolateColor(r, 16777215, t);
        }
        this.colors[0] = r;
        this.colors[1] = s;
        this.alphas[0] = t * Globals.gradientAlphaBump;
        i = .2 + (dot1.brightness + dot2.brightness) * .5 * Globals.linesBlinkPower;
        i += (dot1.baseBrightness + dot2.baseBrightness) * .5;
        if (dot1.inCenter || dot2.inCenter) {
            i = 0;
        }
        if (this.alphas[0] > 1) {
            this.alphas[0] = 1;
        }
        this.lineCanvas.beginFill(this.colors[0], this.alphas[0]);
        this.lineCanvas.lineStyle(0, 16777215, 1);
        this.lineCanvas.moveTo(dot1.x, dot1.y);
        this.lineCanvas.lineTo(dot2.x, dot2.y);
        this.lineCanvas.lineTo(dot3.x, dot3.y);
        this.lineCanvas.lineTo(dot1.x, dot1.y);
        this.lineCanvas.endFill();
        if (i > 1) {
            i = 1;
        }
        this.lineCanvas.lineStyle(1, r, i);
        this.lineCanvas.moveTo(dot1.x, dot1.y);
        this.lineCanvas.lineTo(dot2.x, dot2.y);
        i = .2 + (dot3.brightness + dot2.brightness) * .5 * Globals.linesBlinkPower;
        i += (dot3.baseBrightness + dot2.baseBrightness) * .5;
        if (dot3.inCenter || dot2.inCenter) {
            i = 0;
        }
        if (i > 1) {
            i = 1;
        }
        this.lineCanvas.lineStyle(1, r, i);
        this.lineCanvas.moveTo(dot2.x, dot2.y);
        this.lineCanvas.lineTo(dot3.x, dot3.y);
        i = .2 + (dot3.brightness + dot1.brightness) * .5 * Globals.linesBlinkPower;
        i += (dot3.baseBrightness + dot1.baseBrightness) * .5;
        if (dot1.inCenter || dot3.inCenter) {
            i = 0;
        }
        if (i > 1) {
            i = 1;
        }
        this.lineCanvas.lineStyle(1, r, i);
        this.lineCanvas.moveTo(dot3.x, dot3.y);
        this.lineCanvas.lineTo(dot1.x, dot1.y);
    }
};
DotsLayer.prototype.updateView_asBgDots = function() {
    var e;
    var t;
    var n;
    var r = true;
    var i = true;
    for (e = 0; e < this.MAX_DOTS; e++) {
        this.dot1 = this.dots[e];
        this.dot1.updateView();
    }
    this.lineCanvas.clear();
    var s;
    for (e = 0; e < this.MAX_DOTS; e++) {
        this.dot1 = this.dots[e];
        r = true;
        if (this.dot1.x < -2) r = false;
        if (this.dot1.y < -2) r = false;
        if (this.dot1.x > Globals.SW + 2) r = false;
        if (this.dot1.y > Globals.SH + 2) r = false;
        for (t = e; t < this.MAX_DOTS; t++) {
            this.dot2 = this.dots[t];
            i = true;
            if (this.dot2.x < -2) i = false;
            if (this.dot2.y < -2) i = false;
            if (this.dot2.x > Globals.SW + 2) i = false;
            if (this.dot2.y > Globals.SH + 2) i = false;
            if (!r && !i) continue;
            n = this.dot1.dist2From(this.dot2);
            if (n < Globals.bgDotsMaxLine) {
                s = Utils.interpolateColor(this.dot1.color, this.dot2.color, .5);
                this.lineCanvas.lineStyle(1, s, (1 - n / Globals.bgDotsMaxLine) * Globals.bgDotsAlpha);
                this.lineCanvas.moveTo(this.dot1.x, this.dot1.y);
                this.lineCanvas.lineTo(this.dot2.x, this.dot2.y);
                this.lineCanvas.endFill();
            }
        }
    }
};
DotsLayer.prototype.updateView_asClicktagDots = function() {
    var e = 0;
    for (e; e < this.MAX_DOTS; e++) {
        dot = this.dots[e];
        dot.updateView();
    }
};
DotsLayer.prototype.redo_brightnessFadeSpeed = function() {
    var e;
    var t = 0;
    for (t = 0; t < this.MAX_DOTS; t++) {
        e = this.dots[t];
        e.brightnessFadeSpeed = Globals.brightnessFadeSpeed;
    }
};
DotsLayer.prototype.redo_baseBrightness = function() {
    var e;
    var t = 0;
    for (t; t < this.MAX_DOTS; t++) {
        e = this.dots[t];
        e.do_baseBrightness();
    }
};
DotsLayer.prototype.redo_dotsSpeed = function() {
    var e;
    var t = 0;
    for (t; t < this.MAX_DOTS; t++) {
        e = this.dots[t];
        e.redoSpeed();
    }
};
DotsLayer.prototype.redo_dotsAlpha = function() {
    var e;
    var t = 0;
    for (t; t < this.MAX_DOTS; t++) {
        e = this.dots[t];
        e.redoAlpha();
    }
};
DotsLayer.prototype.stopDots = function() {
    var e;
    var t = 0;
    for (t; t < this.MAX_DOTS; t++) {
        e = this.dots[t];
        e.stop();
    };    
};