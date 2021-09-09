function hideInfoCookies(a) {
    null !== a && a.preventDefault(), createCookie("infoPBIcookie", 1), TweenLite.to("#cookiesInfo", .5, {
        autoAlpha: 0,
        overwrite: "all"
    });
}

function showInfoCookies() {
    TweenLite.to("#cookiesInfo", 1, {
        autoAlpha: 1,
        overwrite: "all"
    });
}

function createCookie(a, b, c) {
    var d;
    if (c) {
        var e = new Date;
        e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), d = "; expires=" + e.toGMTString();
    } else
        d = "";
    document.cookie = escape(a) + "=" + escape(b) + d + "; path=/";
}

function readCookie(a) {
    for (var b = escape(a) + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];
                " " === e.charAt(0); )
            e = e.substring(1, e.length);
        if (0 === e.indexOf(b))
            return unescape(e.substring(b.length, e.length));
    }
    return null;
}

function eraseCookie(a) {
    createCookie(a, "", -1);
}

function revArrow() {
    TweenLite.to("#arrowD", .5, {
        y: 0,
        ease: Sine.easeInOut,
        onComplete: ffArrow
    });
}

function ffArrow() {
    TweenLite.to("#arrowD", .5, {
        y: 10,
        ease: Sine.easeOut,
        onComplete: revArrow
    });
}

function handleHashChange() {
    if (!PBISite.triggerHistory)
        return PBISite.triggerHistory = !0, void 0;
    var b, a = History.getState();
    void 0 !== a.data.state ? b = parseAddressSpec(a.data.state) : (setHashSilently($(location).attr("href")), b = parseAddressSpec($(location).attr("href"))), PBISite.historyActive = !0;
    var c = 0,
            d = -1;
    for (c; c < PBISite.naviSiteAdd.length; c++)
        PBISite.naviSiteAdd[c].mainsite === b.mainSiteAdr && (d = c);
    var e = 0;
    if ("" !== b.subSiteAdr) {
        var f = 0;
        for (f; f < PBISite.naviSiteAdd[d].sites.length; f++)
            PBISite.naviSiteAdd[d].sites[f] === b.subSiteAdr && (e = f);
    }
    -1 !== d ? void 0 !== a.data.state ? b.mainSiteAdr != PBISite.mainSiteAdr ? changeMainSite(d, e, a.data.state) : changeSubSite(e, a.data.state) : (clearAll(), setUpMenuLeft(d), PBISite.selectedTemplate != PBISite.HOME_PAGE ? siteStart(!0) : siteStart(!1)) : (clearAll(), PBISite.currentSite = -1, PBISite.selectedTemplate = PBISite.HOME_PAGE, PBISite.currentSiteSub = 0, updateValues(), TweenLite.to("#content", 0, {
        z: .01
    }), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        onComplete: hideContent
    }), showDiamond(!0))
}

function changeSubSite(a, b) {
    if (PBISite.currentSiteSub = a, parseAddress(b, !0), PBISite.naviSiteTemplates[PBISite.currentSite][PBISite.currentSiteSub] != PBISite.OFERTA_TMP)
        clearSub(), findSub(a), TweenLite.to("#mainArticle", .2, {
            autoAlpha: 0,
            ease: Power4.easeOut,
            overwrite: "all",
            onComplete: changeSiteSub,
            onCompleteParams: [b + " #mainArticle"]
        });
    else if (0 != a)
        changeSiteOferta(b + " #ofertaDsc");
    else {
        if (PBISite.browser_width > 500 && PBISite.browser_height > 500) {
            var c = document.getElementById("content");
            c.style.zIndex = 2
        } else {
            var c = document.getElementById("content");
            c.style.zIndex = 200
        }
        TweenLite.to("#productDescription", .5, {
            autoAlpha: 0,
            overwrite: "all",
            ease: Power4.easeIn
        }), TweenLite.to("#ofertaFull", .5, {
            rotationX: -45,
            rotationY: -45,
            rotationZ: 90,
            y: 700,
            scale: 0,
            transformPerspective: 1e3,
            ease: Power4.easeIn,
            overwrite: "all"
        })
    }
}

function changeMainSite(a, b, c) {
    clearAll(), 8 > a && setUpMenuLeft(a);
    var d = document.getElementById("menuTop").offsetHeight + 33;
    TweenLite.to("#tickOut", .1, {
        css: {
            opacity: 0,
            transform: "translateY(" + parseInt(a * 75 * PBISite.scaleY + d) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to("#tickOver", .1, {
        css: {
            opacity: 1,
            transform: "translateY(" + parseInt(a * 75 * PBISite.scaleY + d) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }), showDiamond(!1), PBISite.currentSite = a, PBISite.currentSiteSub = b, parseAddress(c, !0), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: changeSite,
        onCompleteParams: [c + " #content"],
        overwrite: "all"
    }), PBISite.naviSiteTemplates[PBISite.currentSite][PBISite.currentSiteSub] == PBISite.OFERTA_TMP && 0 != b && TweenLite.delayedCall(PBISite.delayMainAnimation + 1, changeSiteOferta, [c + " #ofertaDsc"])
}

function setHashSilently(a) {
    if (!PBISite.historyActive) {
        "undefined" == typeof a && (a = "");
        var b = parseAddressSpec(a),
                c = 0,
                d = -1;
        for (c; c < PBISite.naviSiteAdd.length; c++)
            PBISite.naviSiteAdd[c].mainsite == b.mainSiteAdr && (d = c);
        var e = 0;
        if ("" != b.subSiteAdr) {
            var f = 0;
            for (f; f < PBISite.naviSiteAdd[d].sites.length; f++)
                PBISite.naviSiteAdd[d].sites[f] == b.subSiteAdr && (e = f)
        }
        var g = "";
        -1 != d && (g = PBISite.naviSiteTitles[d][e] + " - "), PBISite.triggerHistory = !1, PBISite.oldSite = History.getState().data.state, History.pushState({
            state: a
        }, g + "Next tech", a)
    }
}

function mouseMove(a) {
    PBISite.mouseX = a.clientX, PBISite.mouseY = a.clientY, PBISite.mouseX < 0 && (PBISite.mouseX = 0), PBISite.mouseY < 0 && (PBISite.mouseY = 0)
}

function touchMove(a) {
    PBISite.mouseX = a.changedTouches[0].pageX, PBISite.mouseY = a.changedTouches[0].pageY, PBISite.mouseX < 0 && (PBISite.mouseX = 0), PBISite.mouseY < 0 && (PBISite.mouseY = 0)
}

function siteMainEnter() {
    homeReflov(), DetectIt.isMobile ? (activateBg(!1, !0), DetectIt.isIpad ? PBISite.diamond = new Diamond(!1, !1) : (PBISite.diamond = new Diamond(!0, !0), TweenLite.to("#canvasPIXI", 0, {
        autoAlpha: 0,
        overwrite: "all"
    }), PBISite.selectedTemplate == PBISite.HOME_PAGE ? TweenLite.to("#canvasPIXI", 6, {
        autoAlpha: 1,
        overwrite: "all"
    }) : TweenLite.to("#canvasPIXI", 1.5, {
        autoAlpha: .1,
        overwrite: "all"
    })), PBISite.renderer.render(PBISite.stage)) : (activateBg(!0, !1), PBISite.diamond = new Diamond(!1, !1), PBISite.renderer.render(PBISite.stage)), updateValues(), addSpecialEvents();
    var a = document.getElementById("menuRight");
    a.style.display = "block", TweenLite.to("#menuRight", 0, {
        x: -a.offsetWidth,
        overwrite: "all"
    }), TweenLite.to("#logoPBI", 0, {
        x: -a.offsetWidth,
        overwrite: "all"
    }), TweenLite.to("#logoTypo", 0, {
        x: -300,
        overwrite: "all"
    }), TweenLite.to("#logoTypo2", 0, {
        y: -100,
        overwrite: "all"
    });
    var b = document.getElementById("logoPBI");
    b.style.display = "block";
    var c = document.getElementById("logoTypo"),
            d = document.getElementById("logoTypo2");
    c.style.visibility = "visible", d.style.visibility = "visible", PBISite.selectedTemplate == PBISite.HOME_PAGE ? (TweenLite.to("#menuRight", 2, {
        x: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 2
    }), TweenLite.to("#footerPBI", 2, {
        y: -80,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 2
    }), PBISite.bgFlov && TweenLite.to("#bg", 6, {
        alpha: 1,
        ease: Sine.easeIn,
        overwrite: "all",
        delay: 3
    }), TweenLite.to(PBISite.bg, 6, {
        alpha: 1,
        ease: Sine.easeIn,
        overwrite: "all",
        delay: 3
    }), TweenLite.to("#logoPBI", 2, {
        x: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 2
    }), TweenLite.to("#logoTypo", 2.5, {
        x: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 2
    }), TweenLite.to("#logoTypo2", 2.5, {
        y: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 2
    })) : (PBISite.bgFlov && TweenLite.to("#bg", 2, {
        alpha: 1,
        ease: Sine.easeIn,
        overwrite: "all",
        delay: 0
    }), TweenLite.to("#menuRight", 2, {
        x: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 1
    }), TweenLite.to("#footerPBI", 2, {
        y: -80,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 2
    }), TweenLite.to(PBISite.bg, 2, {
        alpha: 1,
        ease: Sine.easeIn,
        overwrite: "all",
        delay: 0
    }), TweenLite.to("#logoPBI", 2, {
        x: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 1
    }), TweenLite.to("#logoTypo", 2.5, {
        x: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 1
    }), TweenLite.to("#logoTypo2", 2.5, {
        y: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 1
    }), TweenLite.to("#bgHider", 2, {
        y: -139,
        ease: Power4.easeOut,
        overwrite: "all",
        delay: 2
    }), TweenLite.to("#mainQuoteAll", 0, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    }), PBISite.delayMainAnimation = 2, PBISite.triggerHistory = !0, handleHashChange(), PBISite.delayMainAnimation = 0), naviReflov(), PBISite.selectedTemplate == PBISite.HOME_PAGE && siteStart(!1)
}

function siteLoaded() {
    if (PBISite.siteLoaded = !0, DetectIt.isMobile) {
        PBISite.scrollElement = document.getElementById("mainArticle"), PBISite.scrollElement2 = document.getElementById("menuMobile");
        var a = document.getElementById("overflowClosed");
        a.style.display = "block", PBISite.myScroll = PBISite.selectedTemplate == PBISite.CONTACT_TMP ? new IScroll(PBISite.scrollElement, {
            scrollX: !1
        }) : new IScroll(PBISite.scrollElement, {
            scrollX: !1,
            click: !0
        }), null == PBISite.menuMobileScroll && (PBISite.menuMobileScroll = new IScroll(PBISite.scrollElement2, {
            scrollX: !1,
            click: !0
        })), document.addEventListener("touchmove", function (a) {
            a.preventDefault()
        }, !1)
    } else {
        PBISite.scrollElement = document.getElementById("scrollingSection"), PBISite.scrollElement2 = document.getElementById("menuMobile"), null == PBISite.menuMobileScroll && (PBISite.menuMobileScroll = new IScroll(PBISite.scrollElement2, {
            scrollX: !1,
            click: !0
        }));
        var a = document.getElementById("overflowClosed");
        a.style.overflow = "visible"
    }
}

function siteStart(a) {
    switch (PBISite.selectedTemplate) {
        case PBISite.QUOTETEXT_TMP:
            animationQuoteText();
            break;
        case PBISite.TEXT_TMP:
            animationText();
            break;
        case PBISite.PHOTOTEXT_TMP:
            animationQuoteText();
            break;
        case PBISite.PUBLICTEXT_TMP:
            animationQuoteText();
            break;
        case PBISite.CONTACT_TMP:
            animationContact();
            break;
        case PBISite.OFERTA_TMP:
            animationOferta();
            break;
        case PBISite.ACHIEV_TMP:
            animationText(), animationAchiev();
            break;
        case PBISite.NEWS_TMP:
            animationNews();
            break;
        case PBISite.HOME_PAGE:
            animationHome();
            break;
        case PBISite.REFER_TMP:
            animationRefer();
            break;
        case PBISite.PARTNER_TMP:
            animationPartner()
    }
    PBISite.selectedTemplate != PBISite.HOME_PAGE && TweenLite.to("#content", 0, {
        autoAlpha: 1,
        ease: Power4.easeOut,
        overwrite: "all"
    }), a && animateHeader()
}

function animateHeader() {
    TweenLite.to("#titleHeader", 0, {
        opacity: 0,
        x: -200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader", .5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation
    }), TweenLite.to("#lineHeader", 0, {
        scaleX: 0,
        ease: Power4.easeOut
    }), TweenLite.to("#lineHeader", .5, {
        scaleX: 1,
        transformOrigin: "0% 0% 0",
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    });
    var a = $("#subNaviItems").children("li");
    a.each(function (a, b) {
        TweenLite.to(b, 0, {
            opacity: 0,
            y: -30,
            ease: Power4.easeOut,
            delay: 0
        }), TweenLite.to(b, .5, {
            opacity: 1,
            y: 0,
            ease: Power4.easeOut,
            delay: PBISite.delayMainAnimation + .1 * a + .3
        })
    }), a.length > 0 && setUpSubNavi()
}

function animationAchiev() {
    var a = $("#achievItems").children("li"),
            b = 0,
            c = a.length;
    for (b; c > b; b++) {
        var d = $(a[b]).find(".achievePoints")[0],
                e = parseInt(d.innerHTML);
        d.innerHTML = 1, TweenLite.to(d, 0, {
            autoAlpha: 0
        }), TweenLite.to(d, .5, {
            autoAlpha: 1,
            delay: PBISite.delayMainAnimation + .6 + .1 * b,
            ease: Sine.easeOut
        }), TweenLite.to(d, 1, {
            innerHTML: e,
            onUpdate: changeCount,
            roundProps: ["innerHTML"],
            delay: PBISite.delayMainAnimation + .6 + .1 * b,
            ease: Power1.easeOut
        });
        var f = $(a[b]).find(".achieveText")[0];
        TweenLite.to(f, 0, {
            y: -50
        }), TweenLite.to(f, .8, {
            y: 0,
            delay: PBISite.delayMainAnimation + .6 + .1 * b,
            ease: Sine.easeOut
        });
        var g = $(a[b]).find(".bgIconAchiev")[0];
        TweenLite.to(g, 0, {
            y: 50
        }), TweenLite.to(g, .5, {
            y: 0,
            delay: PBISite.delayMainAnimation + .6 + .1 * b,
            ease: Sine.easeOut
        });
        var h = $(a[b]).find(".lineAch")[0];
        TweenLite.to(h, 0, {
            scaleX: 0
        }), TweenLite.to(h, .3, {
            scaleX: 1,
            delay: PBISite.delayMainAnimation + 1.2 + .1 * b,
            ease: Sine.easeOut
        })
    }
}

function changeCount() {}

function animationQuoteText() {
    TweenLite.to("#spaceHeaderM", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#spaceHeaderM", .7, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#titleHeader2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader2", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation
    }), TweenLite.to("#quoteHeader", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#quoteHeader", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .6
    }), TweenLite.to("#mainText", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainText", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    })
}

function animationContact() {
    TweenLite.to("#spaceHeaderM", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#spaceHeaderM", .7, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#titleHeader2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader2", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation
    }), TweenLite.to("#mainText", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainText", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#spaceHeaderM2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#spaceHeaderM2", .7, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .6
    }), TweenLite.to("#titleHeader3", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader3", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#fullText2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#fullText2", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .6
    })
}

function animationNews() {
    TweenLite.to("#mainText", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainText", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    })
}

function animationHome() {
    document.getElementById("mainQuoteAll").style.visibility = "visible", TweenLite.to("#lineQuote2", 0, {
        scaleX: 0,
        transformOrigin: "left",
        ease: Power4.easeIn
    }), TweenLite.to("#lineQuote1", 0, {
        scaleX: 0,
        transformOrigin: "right",
        ease: Power4.easeIn
    }), TweenLite.to("#mainQuote", 0, {
        y: 70,
        autoAlpha: 0,
        ease: Power1.easeIn
    }), TweenLite.to("#secondQuote", 0, {
        y: 30,
        ease: Power1.easeIn
    }), PBISite.selectedTemplate == PBISite.HOME_PAGE ? TweenLite.delayedCall(2, showQuote) : TweenLite.killDelayedCallsTo(showQuote)
}

function showQuote(a) {
    PBISite.selectedTemplate == PBISite.HOME_PAGE && (null == a ? (TweenLite.to("#lineQuote2", .3, {
        scaleX: 0,
        transformOrigin: "left",
        ease: Power4.easeIn
    }), TweenLite.to("#lineQuote1", .3, {
        scaleX: 0,
        transformOrigin: "right",
        ease: Power4.easeIn
    }), TweenLite.to("#mainQuote", .5, {
        y: 70,
        autoAlpha: 0,
        ease: Power1.easeIn,
        onComplete: changeMainQuote,
        onCompleteParams: [a]
    }), TweenLite.to("#secondQuote", .5, {
        y: 30,
        ease: Power1.easeIn,
        onComplete: changeSecondQuote,
        onCompleteParams: [a]
    }), TweenLite.to("#lineQuote2", 1, {
        scaleX: 1,
        transformOrigin: "left",
        ease: Power4.easeOut,
        delay: .7
    }), TweenLite.to("#lineQuote1", 1, {
        scaleX: 1,
        transformOrigin: "right",
        ease: Power4.easeOut,
        delay: .7
    }), TweenLite.to("#mainQuote", 2, {
        y: 0,
        autoAlpha: 1,
        ease: Power4.easeOut,
        delay: 1
    }), TweenLite.to("#secondQuote", 1, {
        y: 0,
        ease: Power1.easeOut,
        delay: .5
    }), TweenLite.to("#lineQuote3", 1, {
        autoAlpha: 0,
        scaleX: 0,
        ease: Power4.easeOut,
        delay: 0
    })) : (TweenLite.to("#lineQuote2", .1, {
        scaleX: 0,
        transformOrigin: "left",
        ease: Power4.easeIn,
        overwrite: "all"
    }), TweenLite.to("#lineQuote1", .1, {
        scaleX: 0,
        transformOrigin: "right",
        ease: Power4.easeIn,
        overwrite: "all"
    }), TweenLite.to("#lineQuote3", .1, {
        scaleX: 0,
        transformOrigin: "center",
        ease: Power4.easeIn,
        overwrite: "all"
    }), TweenLite.to("#mainQuote", .3, {
        y: 70,
        autoAlpha: 0,
        ease: Power1.easeIn,
        onComplete: changeMainQuote,
        onCompleteParams: [a]
    }), TweenLite.to("#secondQuote", .3, {
        y: 30,
        ease: Power1.easeIn,
        onComplete: changeSecondQuote,
        onCompleteParams: [a]
    }), TweenLite.to("#lineQuote3", 1, {
        autoAlpha: 1,
        scaleX: 1,
        transformOrigin: "center",
        ease: Power4.easeOut,
        delay: .2
    }), TweenLite.to("#mainQuote", 1.5, {
        y: 0,
        autoAlpha: 1,
        ease: Power4.easeOut,
        delay: .5
    })), PBISite.quotesInt += 1, PBISite.quotesInt == PBISite.quotesArr.length && (PBISite.quotesInt = 0), document.getElementById("lineQuote1"), document.getElementById("lineQuote2"), null == a ? PBISite.selectedTemplate == PBISite.HOME_PAGE ? TweenLite.delayedCall(PBISite.quotesArr[PBISite.quotesInt][2], showQuote) : TweenLite.killDelayedCallsTo(showQuote) : TweenLite.killDelayedCallsTo(showQuote))
}

function changeMainQuote(a) {
    var b = 1;
    PBISite.browser_width < 400 && (b = PBISite.browser_width / 400), document.getElementById("mainQuote").innerHTML = a ? "<span style='font-size:" + parseInt(27 * b) + "px; line-height:" + parseInt((PBISite.quotesArr[0][3] + 3) * b) + "px'>" + a + "</span>" : "<span style='font-size:" + parseInt(PBISite.quotesArr[PBISite.quotesInt][3] * b) + "px; line-height:" + parseInt((PBISite.quotesArr[PBISite.quotesInt][3] + 3) * b) + "px'>" + PBISite.quotesArr[PBISite.quotesInt][0] + "</span>"
}

function changeSecondQuote(a) {
    var b = 1;
    PBISite.browser_width < 350 && (b = PBISite.browser_width / 350), document.getElementById("secondQuote").innerHTML = a ? "<span style='font-size:" + parseInt(11 * b) + "px'></span>" : "<span style='font-size:" + parseInt(11 * b) + "px'>" + PBISite.quotesArr[PBISite.quotesInt][1] + "</span>"
}

function animationText() {
    TweenLite.to("#spaceHeaderM", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#spaceHeaderM", .7, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#titleHeader2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader2", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation
    }), TweenLite.to("#mainTextT1", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainTextT1", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#mainTextT2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainTextT2", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    })
}

function animationOferta() {
    TweenLite.to("#spaceHeaderM", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#spaceHeaderM", .7, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#titleHeader2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader2", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation
    }), TweenLite.to("#mainText", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainText", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), setUpOferta()
}

function animationRefer() {
    TweenLite.to("#spaceHeaderM", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#spaceHeaderM", .7, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#titleHeader2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader2", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation
    }), TweenLite.to("#mainText", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainText", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), setUpRefer()
}

function animationPartner() {
    TweenLite.to("#spaceHeaderM", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#spaceHeaderM", .7, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), TweenLite.to("#titleHeader2", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#titleHeader2", 1, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation
    }), TweenLite.to("#mainText", 0, {
        opacity: 0,
        x: -1200,
        ease: Power4.easeOut
    }), TweenLite.to("#mainText", 1.5, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: PBISite.delayMainAnimation + .3
    }), setUpPartner()
}

function updateValues() {
    PBISite.browser_width = window.innerWidth, PBISite.browser_height = window.innerHeight, PBISite.scaleX = PBISite.widthMax > PBISite.browser_width ? PBISite.browser_width / PBISite.widthMax : 1, PBISite.scaleY = PBISite.heightMax > PBISite.browser_height ? PBISite.browser_height / PBISite.heightMax : 1, PBISite.scaleTextY = PBISite.heighTextMax > PBISite.browser_height ? PBISite.browser_height / PBISite.heighTextMax : 1;
    var b = document.getElementById("menuMobile"),
            c = document.getElementById("menuHolder"),
            d = document.getElementById("menuMobileShow"),
            e = document.getElementById("footerPBI"),
            f = document.getElementById("bgHider"),
            g = document.getElementById("dots2"),
            h = document.getElementById("dots");
    switch (PBISite.browser_width < 1e3 || PBISite.browser_height < 570 ? (PBISite.menuMobileVisible = !0, PBISite.menuMobileOpened || (b.style.visibility = "hidden"), h.style.display = "none", g.style.display = "none", c.style.display = "none", e.style.display = "none", d.style.visibility = "visible", f.style.display = "none") : (PBISite.menuMobileVisible = !1, PBISite.menuMobileOpened = !1, b.style.visibility = "hidden", h.style.display = "block", g.style.display = "block", c.style.display = "block", e.style.display = "block", d.style.visibility = "hidden", f.style.display = "block"), naviReflov(), subNaviReflov(), PBISite.selectedTemplate) {
        case PBISite.QUOTETEXT_TMP:
            quoteTextReflov();
            break;
        case PBISite.TEXT_TMP:
            textReflov();
            break;
        case PBISite.PUBLICTEXT_TMP:
            publicTextReflov();
            break;
        case PBISite.PHOTOTEXT_TMP:
            photoTextReflov();
            break;
        case PBISite.CONTACT_TMP:
            contactReflov();
            break;
        case PBISite.OFERTA_TMP:
            ofertaReflov();
            break;
        case PBISite.ACHIEV_TMP:
            achievReflov();
            break;
        case PBISite.NEWS_TMP:
            newsReflov();
            break;
        case PBISite.HOME_PAGE:
            homeReflov();
            break;
        case PBISite.REFER_TMP:
            referReflov();
            break;
        case PBISite.PARTNER_TMP:
            referReflov()
    }
    reflovDiamond()
}

function addSpecialEvents() {
    window.addEventListener && (DetectIt.isMobile || window.addEventListener("scroll", scrollScrolling, !1))
}

function getScrollPosition() {
    return 0 == document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
}

function mouseWheelHandler(a) {
    PBISite.siteLoaded && (TweenLite.killTweensOf(PBISite.scrollElement), parallaxScroll(a), a.preventDefault ? a.preventDefault() : a.returnValue = !1)
}

function scrollScrolling(a) {
    PBISite.siteLoaded && (TweenLite.killTweensOf(PBISite.scrollElement), parallaxScroll(a), $(window).scrollTop() + $(window).height() > $(document).height() - 20 ? TweenLite.to("#arrowD", 0, {
        autoAlpha: 0
    }) : $(window).height() < $(document).height() && (PBISite.browser_width > 800 ? TweenLite.to("#arrowD", 1, {
        autoAlpha: 1
    }) : TweenLite.to("#arrowD", 0, {
        autoAlpha: 0
    })), a.preventDefault ? a.preventDefault() : a.returnValue = !1)
}

function parallaxScroll() {
    PBISite.currentScrollY = getScrollPosition(), TweenLite.to(PBISite.scrollElement, .5, {
        y: -PBISite.currentScrollY,
        z: .01,
        overwrite: "all",
        ease: Power4.easeOut
    })
}

function ie_ver() {
    var a = 0,
            b = /MSIE (\d+\.\d+);/.test(navigator.userAgent),
            c = !!navigator.userAgent.match(/Trident\/7.0/),
            d = navigator.userAgent.indexOf("rv:11.0");
    return b && (a = new Number(RegExp.$1)), -1 != navigator.appVersion.indexOf("MSIE 10") && (a = 10), c && -1 != d && (a = 11), a
}

function detectmob() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}

function naviReflov() {
    var a = document.getElementById("logoPBI"),
            b = document.getElementById("logoTypo"),
            c = document.getElementById("logoTypo2"),
            d = document.getElementById("menuRight"),
            e = document.getElementById("menuTop"),
            f = document.getElementById("bgHider"),
            h = 1;
    PBISite.menuItemHeight = 80, marginLeftDiamond = 50 * PBISite.scaleX, h = PBISite.heightMax > PBISite.browser_height ? PBISite.browser_height / PBISite.heightMax : 1, PBISite.scaleLogoX = PBISite.scaleX < PBISite.scaleY ? PBISite.scaleX : PBISite.scaleY, PBISite.scaleLogoX < .42 && (PBISite.scaleLogoX = .42), a.style.width = parseInt(72 * PBISite.scaleLogoX) + "px", a.style.height = parseInt(72 * PBISite.scaleLogoX) + "px", a.style.left = parseInt(24 * PBISite.scaleLogoX) + "px", a.style.top = parseInt(24 * PBISite.scaleLogoX) + "px", b.style.width = parseInt(140 * PBISite.scaleLogoX) + "px", b.style.height = parseInt(37 * PBISite.scaleLogoX) + "px", b.style.left = parseInt(140 * PBISite.scaleLogoX) + "px", b.style.top = parseInt(40 * PBISite.scaleLogoX) + "px", c.style.width = parseInt(140 * PBISite.scaleLogoX) + "px", c.style.height = parseInt(37 * PBISite.scaleLogoX) + "px", c.style.left = parseInt(140 * PBISite.scaleLogoX) + "px", c.style.top = parseInt(40 * PBISite.scaleLogoX) + "px", d.style.width = parseInt(120 * PBISite.scaleLogoX) + "px", f.style.width = parseInt(PBISite.browser_width) + "px";
    var j = parseInt((PBISite.browser_height - 6 * PBISite.menuItemHeight) / 2);
    e.style.height = j > parseInt(a.offsetHeight + 60) ? j + "px" : parseInt(a.offsetHeight + 60) + "px";
    var k = $("#menuHolder").children("li"),
            l = 0,
            m = k.length;
    for (l; m > l; l++) {
        var n = $(k[l]).find(".menuItem");
        if ($(n).length) {
            var o = $(n).find(".menuOver"),
                    p = $(n).find(".menuOut"),
                    q = $(n).find(".mOver");
            o[0].style.backgroundPosition = "49% " + (10 + 20 * (PBISite.scaleY - 1)) + "px", p[0].style.backgroundPosition = "49% " + (10 + 20 * (PBISite.scaleY - 1)) + "px", o[0].style.paddingTop = parseInt(60 * PBISite.scaleY) + "px", p[0].style.paddingTop = parseInt(60 * PBISite.scaleY) + "px", p[0].style.height = parseInt(80 * PBISite.scaleY) - parseInt(60 * PBISite.scaleY) + "px", q[0].style.height = parseInt(80 * PBISite.scaleY) + "px", n[0].style.height = parseInt(80 * PBISite.scaleY) + "px"
        }
    }
    var r = document.getElementById("menuMobile"),
            s = document.getElementById("menuMobileShow"),
            t = document.getElementById("instytutItemOutM"),
            u = document.getElementById("ofertaItemOutM"),
            v = document.getElementById("ofertaItemOut2M"),
            w = document.getElementById("inicjatywyItemOutM"),
            x = document.getElementById("wydarzeniaItemOutM"),
            y = document.getElementById("zalozycielkaItemOutM"),
            z = document.getElementById("kontaktItemOutM"),
            A = PBISite.browser_width / PBISite.browser_height;
    A > 1.2 ? (r.style.left = "0px", s.style.height = parseInt(120 * PBISite.scaleLogoX) + "px", s.style.width = parseInt(120 * PBISite.scaleLogoX) + "px", d.style.height = "100%", e.style.width = "100%", s.style.left = "0px", s.style.top = parseInt((PBISite.browser_height - 120 * PBISite.scaleLogoX) / 2) + "px", t.style.backgroundPosition = "70% 50%", u.style.backgroundPosition = "70% 50%", v.style.backgroundPosition = "70% 50%", w.style.backgroundPosition = "70% 50%", x.style.backgroundPosition = "70% 50%", y.style.backgroundPosition = "70% 50%", z.style.backgroundPosition = "70% 50%", b.style.display = "block", c.style.display = "none") : (r.style.left = "", s.style.height = parseInt(120 * PBISite.scaleLogoX) + "px", s.style.width = parseInt(120 * PBISite.scaleLogoX) + "px", s.style.width = parseInt(120 * PBISite.scaleLogoX) + "px", s.style.top = "0px", s.style.right = "0px", s.style.left = "", d.style.height = parseInt(120 * PBISite.scaleLogoX) + "px", d.style.width = "100%", e.style.width = "0px", e.style.height = "0px", PBISite.menuMobileVisible ? (c.style.display = "block", b.style.display = "none") : (b.style.display = "block", c.style.display = "none"), t.style.backgroundPosition = "8px 50%", u.style.backgroundPosition = "8px 50%", v.style.backgroundPosition = "8px 50%", w.style.backgroundPosition = "8px 50%", x.style.backgroundPosition = "8px 50%", y.style.backgroundPosition = "8px 50%", z.style.backgroundPosition = "8px 50%");
    var B = document.getElementById("tickOver");
    PBISite.menuMobileVisible ? (PBISite.browser_width < PBISite.browser_height && (marginLeftDiamond = 0), B.style.visibility = "hidden") : B.style.visibility = "visible";
    var C = document.getElementById("mainQuoteAll"),
            D = document.getElementById("mainQuoteHidden"),
            E = document.getElementById("lineQuote1"),
            F = document.getElementById("lineQuote2");
    if (PBISite.browser_width < 400) {
        var G = PBISite.browser_width / 400;
        C.style.width = parseInt(360 * G) + "px", E.style.width = parseInt(70 * G) + "px", F.style.width = parseInt(70 * G) + "px", D.style.width = parseInt(360 * G) + "px"
    } else
        C.style.width = "360px", D.style.width = "360px", E.style.width = parseInt(60) + "px", F.style.width = parseInt(60) + "px";
    C.style.top = (PBISite.browser_height - C.offsetHeight) / 2 + "px", C.style.left = (PBISite.browser_width - C.offsetWidth) / 2 + marginLeftDiamond + "px"
}

function subNaviReflov() {
    var a = document.getElementById("copy");
    if (marginLeft = 400, marginRight = PBISite.selectedTemplate != PBISite.CONTACT_TMP ? 300 : 100, marginInsLeft = 47, marginInsLeft2 = 44, PBISite.browser_width > 1200 ? (a.style.display = "", marginRight = PBISite.selectedTemplate == PBISite.CONTACT_TMP ? parseInt(100 * PBISite.scaleX) : PBISite.selectedTemplate == PBISite.OFERTA_TMP ? parseInt(200 * PBISite.scaleX) : PBISite.selectedTemplate == PBISite.NEWS_TMP ? parseInt(200 * PBISite.scaleX) : parseInt(300 * PBISite.scaleX), marginLeft = parseInt(300 * PBISite.scaleX), marginInsLeft = parseInt(47 * PBISite.scaleX), marginInsLeft2 = parseInt(44 * PBISite.scaleX)) : PBISite.browser_width > 800 ? (a.style.display = "", marginRight = PBISite.selectedTemplate == PBISite.CONTACT_TMP ? parseInt(100 * PBISite.scaleX) : PBISite.selectedTemplate == PBISite.OFERTA_TMP ? parseInt(100 * PBISite.scaleX) : PBISite.selectedTemplate == PBISite.NEWS_TMP ? parseInt(100 * PBISite.scaleX) : parseInt(200 * PBISite.scaleX), marginLeft = parseInt(250 * PBISite.scaleX), marginInsLeft = parseInt(47 * PBISite.scaleX), marginInsLeft2 = parseInt(44 * PBISite.scaleX)) : (a.style.display = "none", marginRight = parseInt(100 * PBISite.scaleX), marginLeft = parseInt(18 + 62 * PBISite.scaleLogoX + 44 * PBISite.scaleLogoX), marginInsLeft2 = 0, marginInsLeft = 2), PBISite.menuMobileVisible && PBISite.browser_width < PBISite.browser_height && (marginLeft = 10), PBISite.browser_width > 800 ? (document.getElementById("spaceHeaderM") && (document.getElementById("spaceHeaderM").style.display = "block"), document.getElementById("titleHeader") && (document.getElementById("titleHeader").style.display = "block"), document.getElementById("lineHeader") && (document.getElementById("lineHeader").style.display = "block")) : (TweenLite.to("#arrowD", 0, {
        autoAlpha: 0
    }), document.getElementById("spaceHeaderM") && (document.getElementById("spaceHeaderM").style.display = "none"), document.getElementById("titleHeader") && (document.getElementById("titleHeader").style.display = "none"), document.getElementById("lineHeader") && (document.getElementById("lineHeader").style.display = "none")), document.getElementById("mainHeader")) {
        var b = document.getElementById("mainHeader");
        b.style.left = marginLeft + "px", b.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px";
        var c = parseInt(90 * PBISite.scaleTextY);
        40 > c && (c = 40), b.style.top = c + "px"
    }
    if (document.getElementById("subNavi")) {
        var d = document.getElementById("subNavi");
        d.style.top = PBISite.browser_width > 800 ? parseInt(34 * PBISite.scaleTextY) + "px" : parseInt(0 * PBISite.scaleTextY) + "px", d.style.left = marginInsLeft + "px", d.style.display = PBISite.browser_width < 500 ? "none" : PBISite.browser_height > 500 ? "block" : "none"
    }
    if (document.getElementById("lineHeader")) {
        var e = document.getElementById("lineHeader");
        e.style.left = marginInsLeft + "px";
        var f = document.getElementById("titleHeader");
        f.style.left = parseInt(marginInsLeft + 30 + 30 * PBISite.scaleX) + "px"
    }
}

function homeReflov() {
    reflovBenefit()
}

function headerReflov() {
    var a = document.getElementById("headerSection");
    60 * PBISite.scaleX > 30 ? (a.style.fontSize = 60 * PBISite.scaleX + "px", a.style.lineHeight = 64 * PBISite.scaleX + "px") : (a.style.fontSize = "30px", a.style.lineHeight = "34px"), a.style.top = parseInt(24 * PBISite.scaleTextY) + "px"
}

function quoteTextReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("mainHeader"),
            d = document.getElementById("scrollingSection");
    d.style.left = marginLeft + "px", d.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + c.offsetTop + b.offsetHeight + 5 * PBISite.scaleTextY) + "px", headerReflov();
    var e = document.getElementById("titleHeader2");
    e.style.paddingLeft = marginInsLeft2 + "px";
    var f = document.getElementById("fullText");
    f.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", f.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", f.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var g = document.getElementById("quoteHeader"),
            h = document.getElementById("mainText");
    if (26 * PBISite.scaleX > 18 ? (g.style.fontSize = 26 * PBISite.scaleX + "px", g.style.lineHeight = 30 * PBISite.scaleX + "px") : (g.style.fontSize = "18px", g.style.lineHeight = "20px"), 16 * PBISite.scaleX > 15 ? (h.style.fontSize = 16 * PBISite.scaleX + "px", h.style.lineHeight = 24 * PBISite.scaleX + "px") : (h.style.fontSize = "15px", h.style.lineHeight = "25px"), PBISite.browser_width > 800) {
        var i = parseInt(parseInt(PBISite.browser_width - marginLeft - marginRight) - 476 * PBISite.scaleX);
        g.style.width = 400 * PBISite.scaleX + "px", g.style.left = marginInsLeft + "px", h.style.width = 450 >= i ? i + "px" : "450px", h.style.left = 476 * PBISite.scaleX + "px", h.style.top = "4px";
    } else {
        var g = document.getElementById("quoteHeader");
        g.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", g.style.left = marginInsLeft + "px";
        var h = document.getElementById("mainText");
        h.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", h.style.left = marginInsLeft + "px", h.style.top = parseInt(g.offsetHeight + 30) + "px";
    }
    overflowScrollReflov(h.offsetHeight + getPosition(h).y);
}

function publicTextReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("mainHeader"),
            d = document.getElementById("scrollingSection");
    d.style.left = marginLeft + "px", d.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + c.offsetTop + b.offsetHeight + 5 * PBISite.scaleTextY) + "px", headerReflov();
    var e = document.getElementById("titleHeader2");
    e.style.paddingLeft = marginInsLeft2 + "px";
    var f = document.getElementById("fullText");
    f.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", f.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", f.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var g = document.getElementById("quoteHeader"),
            h = document.getElementById("mainText");
    if (26 * PBISite.scaleX > 18 ? (g.style.fontSize = 26 * PBISite.scaleX + "px", g.style.lineHeight = 30 * PBISite.scaleX + "px") : (g.style.fontSize = "18px", g.style.lineHeight = "20px"), 16 * PBISite.scaleX > 15 ? (h.style.fontSize = 16 * PBISite.scaleX + "px", h.style.lineHeight = 24 * PBISite.scaleX + "px") : (h.style.fontSize = "15px", h.style.lineHeight = "25px"), PBISite.browser_width > 1200)
        g.style.width = 250 * PBISite.scaleX + "px", g.style.left = marginInsLeft + "px", h.style.width = parseInt(parseInt(PBISite.browser_width - marginLeft - marginRight) - 326 * PBISite.scaleX) + "px", h.style.left = 326 * PBISite.scaleX + "px", h.style.top = "4px";
    else {
        var g = document.getElementById("quoteHeader");
        g.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", g.style.left = marginInsLeft + "px";
        var h = document.getElementById("mainText");
        h.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", h.style.left = marginInsLeft + "px", h.style.top = parseInt(g.offsetHeight + 30) + "px"
    }
    var i = $("#publList").children("li"),
            j = 0,
            k = i.length;
    for (j; k > j; j++) {
        var l = $(i[j]).find(".pubListDiv");
        if ($(l).length) {
            var m = $(l).find(".publiT1"),
                    n = $(l).find(".publiT2"),
                    o = $(l).find(".iconPub");
            PBISite.browser_width < 500 ? (m[0].style.fontSize = "9px", m[0].style.lineHeight = "12px", n[0].style.fontSize = "13px", n[0].style.lineHeight = "16px", o[0].style.display = "none") : (m[0].style.fontSize = "10px", m[0].style.lineHeight = "12px", n[0].style.fontSize = "16px", n[0].style.lineHeight = "20px", o[0].style.display = "block")
        }
    }
    overflowScrollReflov(h.offsetHeight + getPosition(h).y)
}

function photoTextReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("mainHeader"),
            d = document.getElementById("scrollingSection");
    d.style.left = marginLeft + "px", d.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + c.offsetTop + b.offsetHeight) + "px", headerReflov();
    var e = document.getElementById("titleHeader2");
    e.style.paddingLeft = marginInsLeft2 + "px";
    var f = document.getElementById("fullText");
    f.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", f.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", f.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var g = document.getElementById("quoteHeader"),
            h = document.getElementById("mainText");
    if (26 * PBISite.scaleX > 18 ? (g.style.fontSize = 26 * PBISite.scaleX + "px", g.style.lineHeight = 30 * PBISite.scaleX + "px") : (g.style.fontSize = "18px", g.style.lineHeight = "20px"), 16 * PBISite.scaleX > 15 ? (h.style.fontSize = 16 * PBISite.scaleX + "px", h.style.lineHeight = 24 * PBISite.scaleX + "px") : (h.style.fontSize = "15px", h.style.lineHeight = "25px"), PBISite.browser_width > 800) {
        var i = parseInt(parseInt(PBISite.browser_width - marginLeft - marginRight) - 476 * PBISite.scaleX);
        g.style.width = 400 * PBISite.scaleX + "px", g.style.left = marginInsLeft + "px", h.style.width = 450 >= i ? i + "px" : "450px", h.style.left = 476 * PBISite.scaleX + "px", h.style.top = "0px"
    } else
        g.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", g.style.left = marginInsLeft + "px", h.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", h.style.left = marginInsLeft + "px", h.style.top = parseInt(g.offsetHeight + 30) + "px";
    overflowScrollReflov(h.offsetHeight + getPosition(h).y)
}

function overflowScrollReflov(a) {
    var b = document.getElementById("scrollerDiv");
    document.getElementById("mainArticle");
    var d = document.getElementById("subNavi"),
            e = document.getElementById("mainHeader"),
            f = document.getElementById("scrollingSection");
    b.style.width = parseInt(PBISite.browser_width - 20) + "px", b.style.height = parseInt(a) + "px", b.style.top = parseInt(d.offsetTop + e.offsetTop + d.offsetHeight) + "px", f.style.height = parseInt(a) + "px";
    var g = document.getElementById("overflowClosed");
    g.style.width = parseInt(PBISite.browser_width - 20) + "px", g.style.height = parseInt(PBISite.browser_height) + "px", $(window).height() < $(document).height() ? PBISite.browser_width > 800 ? TweenLite.to("#arrowD", 1, {
        autoAlpha: 1
    }) : TweenLite.to("#arrowD", 0, {
        autoAlpha: 0
    }) : TweenLite.to("#arrowD", 0, {
        autoAlpha: 0
    }), null != PBISite.myScroll && PBISite.myScroll.refresh()
}

function contactReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("scrollingSection");
    c.style.left = marginLeft + "px", c.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + mainHeader.offsetTop + b.offsetHeight) + "px", headerReflov();
    var d = document.getElementById("headerSection2");
    60 * PBISite.scaleX > 30 ? (d.style.fontSize = 60 * PBISite.scaleX + "px", d.style.lineHeight = 56 * PBISite.scaleX + "px") : (d.style.fontSize = "30px", d.style.lineHeight = "28px"), d.style.top = parseInt(24 * PBISite.scaleTextY) + "px";
    var e = document.getElementById("titleHeader2");
    e.style.paddingLeft = marginInsLeft2 + "px";
    var f = document.getElementById("titleHeader3");
    f.style.paddingLeft = marginInsLeft2 + "px";
    var g = document.getElementById("fullText2");
    g.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", g.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var h = document.getElementById("fullText");
    if (PBISite.browser_width > 1e3) {
        var i = parseInt(PBISite.browser_width - marginInsLeft - marginLeft - marginRight - 350 - 100 * PBISite.scaleX);
        i > 670 - marginInsLeft && (i = 670 - marginInsLeft), h.style.width = i + "px", g.style.width = parseInt(350) + "px"
    } else
        h.style.width = "100%", g.style.width = "100%";
    var j = document.getElementById("mainText");
    if (16 * PBISite.scaleX > 15 ? (j.style.fontSize = 16 * PBISite.scaleX + "px", j.style.lineHeight = 24 * PBISite.scaleX + "px") : (j.style.fontSize = "15px", j.style.lineHeight = "25px"), PBISite.browser_width > 1200) {
        var i = parseInt(PBISite.browser_width - marginLeft - marginRight - 350 - 100 * PBISite.scaleX);
        i > 670 && (i = 670)
    } else
        var i = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight);
    var k = document.getElementById("contact1"),
            l = document.getElementById("contact2");
    if (PBISite.browser_width > 500) {
        j.style.width = i + "px", j.style.left = marginInsLeft + "px", l.style.styleFloat = "left", l.style.cssFloat = "left", l.style.left = "0px", k.style.width = parseInt(i + marginInsLeft) + "px", l.style.width = parseInt(350) + "px", l.style.top = "0px";
        var m = document.getElementById("contactForm");
        m.style.width = i - marginInsLeft + "px";
        var n = document.getElementById("firstname"),
                o = document.getElementById("surname"),
                p = document.getElementById("emailPBI"),
                q = document.getElementById("position"),
                r = document.getElementById("company"),
                s = document.getElementById("selectWrapper"),
                t = document.getElementById("inputFieldBig"),
                u = document.getElementById("btnSend");
        document.getElementById("check1"), document.getElementById("check2");
        var x = parseInt((i - marginInsLeft - 40) / 2);
        t.style.width = parseInt(i - marginInsLeft) + "px", u.style.width = parseInt(i - marginInsLeft) + "px", s.style.clear = "", s.style.styleFloat = "right", s.style.cssFloat = "right", s.style.right = "0px", n.className = "inputField inputClear", o.className = "inputField", p.className = "inputField inputClear", q.className = "inputField", r.className = "inputField inputClear", n.style.width = x + "px", o.style.width = x + "px", p.style.width = x + "px", q.style.width = x + "px", r.style.width = x + "px", s.style.width = x + "px"
    } else {
        j.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", j.style.left = marginInsLeft + "px";
        var m = document.getElementById("contactForm");
        m.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px";
        var n = document.getElementById("firstname"),
                o = document.getElementById("surname"),
                p = document.getElementById("emailPBI"),
                q = document.getElementById("position"),
                r = document.getElementById("company"),
                s = document.getElementById("selectWrapper"),
                t = document.getElementById("inputFieldBig"),
                u = document.getElementById("btnSend"),
                x = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight);
        t.style.width = x + "px", u.style.width = x + "px", n.className = "inputField inputClear", o.className = "inputField inputClear", p.className = "inputField inputClear", q.className = "inputField inputClear", r.className = "inputField inputClear", s.style.clear = "both", s.style.marginRight = "0px", s.style.marginLeft = "0px", s.style.styleFloat = "left", s.style.cssFloat = "left", s.style.left = "0px", n.style.width = x + "px", o.style.width = x + "px", p.style.width = x + "px", q.style.width = x + "px", r.style.width = x + "px", s.style.width = x + "px"
    }
    h.style.height = parseInt(j.clientHeight) + "px", h.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var y = document.getElementById("headerMini2");
    y.style.left = marginInsLeft + "px", y.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px";
    var z = document.getElementById("mainText2"),
            A = document.getElementById("titleHeader4");
    A.style.left = parseInt(30 + 20 * PBISite.scaleX) + "px", PBISite.browser_width > 500 ? (z.style.width = parseInt(350 - marginInsLeft) + "px", z.style.left = marginInsLeft + "px", y.style.width = parseInt(350 - marginInsLeft) + "px", l.style.styleFloat = "left", l.style.cssFloat = "left", l.style.left = "0px", k.style.width = parseInt(i + marginInsLeft) + "px", l.style.width = parseInt(350) + "px", document.getElementById("lineW1").style.display = "block", document.getElementById("spaceHeaderM2").style.display = "block") : (z.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", z.style.left = marginInsLeft + "px", y.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", k.style.width = parseInt(x) + "px", l.style.width = parseInt(x) + "px", y.style.width = "100%", l.style.styleFloat = "left", l.style.cssFloat = "left", l.style.left = "0px", document.getElementById("lineW1").style.display = "none", document.getElementById("spaceHeaderM2").style.display = "none"), PBISite.browser_width > 1200 ? (l.style.top = "0px", overflowScrollReflov(j.offsetHeight + getPosition(j).y + 50)) : (l.style.top = "80px", overflowScrollReflov(k.offsetHeight + l.offsetHeight + getPosition(j).y + 50)), reflovInfo()
}

function textReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("mainHeader"),
            d = document.getElementById("scrollingSection");
    d.style.left = marginLeft + "px", d.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + c.offsetTop + b.offsetHeight + 5 * PBISite.scaleTextY) + "px", headerReflov();
    var e = document.getElementById("titleHeader2");
    e.style.paddingLeft = marginInsLeft2 + "px";
    var f = document.getElementById("fullText");
    f.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", f.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", f.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var g = document.getElementById("mainTextT1"),
            h = document.getElementById("mainTextT2");
    16 * PBISite.scaleX > 15 ? (g.style.fontSize = 16 * PBISite.scaleX + "px", g.style.lineHeight = 24 * PBISite.scaleX + "px") : (g.style.fontSize = "15px", g.style.lineHeight = "25px"), 16 * PBISite.scaleX > 15 ? (h.style.fontSize = 16 * PBISite.scaleX + "px", h.style.lineHeight = 24 * PBISite.scaleX + "px") : (h.style.fontSize = "15px", h.style.lineHeight = "25px");
    var i = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft - 40) / 2;
    if (PBISite.browser_width > 800)
        i >= 450 && (i = 450), g.style.left = marginInsLeft + "px", g.style.width = i + "px", h.style.width = i + "px", h.style.left = marginInsLeft + i + 40 + "px", h.style.top = "0px";
    else {
        var g = document.getElementById("mainTextT1");
        g.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", g.style.left = marginInsLeft + "px";
        var h = document.getElementById("mainTextT2");
        h.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight - marginInsLeft) + "px", h.style.left = marginInsLeft + "px", h.style.top = parseInt(g.offsetHeight + 30) + "px"
    }
    overflowScrollReflov(h.offsetHeight + getPosition(h).y)
}

function ofertaReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("scrollingSection");
    c.style.left = marginLeft + "px", c.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + mainHeader.offsetTop + b.offsetHeight) + "px", headerReflov();
    var d = document.getElementById("titleHeader2");
    d.style.paddingLeft = marginInsLeft2 + "px";
    var e = document.getElementById("fullText");
    e.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", e.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", e.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var f = document.getElementById("mainText");
    if (16 * PBISite.scaleX > 15 ? (f.style.fontSize = 16 * PBISite.scaleX + "px", f.style.lineHeight = 24 * PBISite.scaleX + "px") : (f.style.fontSize = "15px", f.style.lineHeight = "25px"), PBISite.browser_width > 1200)
        f.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", f.style.left = marginInsLeft + "px";
    else {
        var f = document.getElementById("mainText");
        f.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", f.style.left = marginInsLeft + "px"
    }
    var g = $("#productsItems").children("li");
    f.style.paddingTop = parseInt(40 * PBISite.scaleY) + "px";
    var h = 0,
            i = g.length,
            j = 3,
            k = parseInt((f.offsetWidth - 50) / 3);
    for (250 > k && (j = 2, k = parseInt((f.offsetWidth - 25) / 2)), 200 > k && (j = 1, k = parseInt((f.offsetWidth - 25) / 1)), reflovProduct(), h; i > h; h++) {
        g[h].style.marginRight = 0 == (h + 1) % j ? "0px" : "20px";
        var l = parseInt(160 * PBISite.scaleY);
        140 > l && (l = 140);
        var m = parseInt(60 * PBISite.scaleY);
        50 > m && (m = 50);
        var n = parseInt(70 * PBISite.scaleY);
        60 > n && (n = 60);
        var o = parseInt(75 * PBISite.scaleY);
        if (65 > o && (o = 65), "A" == g[h].children[0].tagName) {
            var p = $(g[h].children[0]).find(".crystal")[0];
            p.style.top = l + "px";
            var q;
            $(g[h].children[0]).find(".fixHeight")[0] ? (q = $(g[h].children[0]).find(".fixHeight")[0], q.style.top = m + "px") : $(g[h].children[0]).find(".fixLogo")[0] ? (q = $(g[h].children[0]).find(".fixLogo")[0], q.style.top = "0px") : $(g[h].children[0]).find(".fixHeight2")[0] ? (q = $(g[h].children[0]).find(".fixHeight2")[0], q.style.top = o + "px") : (q = $(g[h].children[0]).find(".mainProdText")[0], q.style.top = n + "px")
        }
        g[h].style.height = l + "px", g[h].style.width = k + "px"
    }
    overflowScrollReflov(f.offsetHeight + getPosition(f).y)
}

function referReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("scrollingSection");
    c.style.left = marginLeft + "px", c.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + mainHeader.offsetTop + b.offsetHeight) + "px", headerReflov();
    var d = document.getElementById("titleHeader2");
    d.style.paddingLeft = marginInsLeft2 + "px";
    var e = document.getElementById("fullText");
    e.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", e.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", e.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var f = document.getElementById("mainText");
    if (16 * PBISite.scaleX > 15 ? (f.style.fontSize = 16 * PBISite.scaleX + "px", f.style.lineHeight = 24 * PBISite.scaleX + "px") : (f.style.fontSize = "15px", f.style.lineHeight = "25px"), PBISite.browser_width > 1200)
        f.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", f.style.left = marginInsLeft + "px";
    else {
        var f = document.getElementById("mainText");
        f.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", f.style.left = marginInsLeft + "px"
    }
    var g = $("#productsItems").children("li"),
            h = 0,
            i = g.length,
            j = 3,
            k = parseInt((f.offsetWidth - 50) / 3);
    for (250 > k && (j = 2, k = parseInt((f.offsetWidth - 25) / 2)), 200 > k && (j = 1, k = parseInt((f.offsetWidth - 25) / 1)), reflovBenefit(), h; i > h; h++) {
        g[h].style.marginRight = 0 == (h + 1) % j ? "0px" : "20px";
        var l = parseInt(160 * PBISite.scaleY);
        140 > l && (l = 140);
        var m = parseInt(60 * PBISite.scaleY);
        50 > m && (m = 50);
        var n = parseInt(70 * PBISite.scaleY);
        if (60 > n && (n = 60), "A" == g[h].children[0].tagName) {
            var o = $(g[h].children[0]).find(".crystal")[0];
            o.style.top = l + "px";
            var p;
            $(g[h].children[0]).find(".fixHeight")[0] ? (p = $(g[h].children[0]).find(".fixHeight")[0], p.style.top = m + "px") : $(g[h].children[0]).find(".fixLogo")[0] ? (p = $(g[h].children[0]).find(".fixLogo")[0], p.style.top = "0px") : (p = $(g[h].children[0]).find(".mainProdText")[0], p.style.top = n + "px")
        }
        g[h].style.height = l + "px", g[h].style.width = k + "px"
    }
    overflowScrollReflov(f.offsetHeight + getPosition(f).y)
}

function achievReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("subNavi"),
            c = document.getElementById("scrollingSection");
    c.style.left = marginLeft + "px", c.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(b.offsetTop + mainHeader.offsetTop + b.offsetHeight) + "px", headerReflov();
    var d = document.getElementById("titleHeader2");
    d.style.paddingLeft = marginInsLeft2 + "px";
    var e = document.getElementById("fullText");
    e.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", e.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", e.style.top = parseInt(54 * PBISite.scaleY) + "px";
    var f = document.getElementById("mainText");
    if (16 * PBISite.scaleX > 15 ? (f.style.fontSize = 16 * PBISite.scaleX + "px", f.style.lineHeight = 24 * PBISite.scaleX + "px") : (f.style.fontSize = "15px", f.style.lineHeight = "25px"), PBISite.browser_width > 1200)
        f.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", f.style.left = marginInsLeft + "px";
    else {
        var f = document.getElementById("mainText");
        f.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", f.style.left = marginInsLeft + "px"
    }
    var g = $("#achievItems").children("li"),
            h = 0,
            i = g.length,
            j = 3,
            k = parseInt((f.offsetWidth - 54) / 3);
    for (250 > k && (j = 2, k = parseInt((f.offsetWidth - 27) / 2)), h; i > h; h++) {
        g[h].style.marginRight = 0 == (h + 1) % j ? "0px" : "20px";
        var l = $(g[h]).find(".achieveOver"),
                m = $(l).find(".achieveText"),
                n = $(g[h]).find(".achievePoints");
        PBISite.browser_width < 510 ? (l[0].style.top = "80px", n[0].style.fontSize = "40px", m[0].style.fontSize = "8px", m[0].style.lineHeight = "12px") : (l[0].style.top = "90px", n[0].style.fontSize = "50px", m[0].style.fontSize = "10px", m[0].style.lineHeight = "14px"), g[h].style.width = k + "px"
    }
    overflowScrollReflov(f.offsetHeight + getPosition(f).y)
}

function newsReflov() {
    var a = document.getElementById("mainArticle"),
            b = document.getElementById("scrollingSection");
    b.style.left = marginLeft + "px", b.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", a.style.width = parseInt(PBISite.browser_width) + "px", a.style.top = parseInt(mainHeader.offsetTop) + "px";
    var c = document.getElementById("fullText");
    c.style.width = parseInt(PBISite.browser_width - marginLeft - marginRight) + "px", c.style.height = parseInt(PBISite.browser_height - a.offsetTop) + "px", c.style.top = parseInt(0 * PBISite.scaleY) + "px";
    var d = document.getElementById("mainText");
    if (16 * PBISite.scaleX > 15 ? (d.style.fontSize = 16 * PBISite.scaleX + "px", d.style.lineHeight = 24 * PBISite.scaleX + "px") : (d.style.fontSize = "15px", d.style.lineHeight = "25px"), PBISite.browser_width > 1200)
        d.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", d.style.left = marginInsLeft + "px";
    else {
        var d = document.getElementById("mainText");
        d.style.width = parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) + "px", d.style.left = marginInsLeft + "px"
    }
    var e = $("#newsItems").children("li"),
            f = 0,
            g = e.length,
            h = 5,
            i = parseInt((d.offsetWidth - 42 * (h - 1)) / h);
    for (260 > i && (h = 4, i = parseInt((d.offsetWidth - 42 * (h - 1)) / h)), 260 > i && (h = 3, i = parseInt((d.offsetWidth - 42 * (h - 1)) / h)), 260 > i && (h = 2, i = parseInt((d.offsetWidth - 42 * (h - 1)) / h)), 200 > i && (h = 1, i = parseInt((d.offsetWidth - 42 * (h - 1)) / h)), f; g > f; f++) {
        e[f].style.marginRight = 0 == (f + 1) % h ? "0px" : "40px";
        var j = $(e[f]).find(".newsTitle");
        if ($(j).length) {
            var j = $(e[f]).find(".newsTitle");
            $(e[f]).find(".titleNews2"), 20 * PBISite.scaleX > 17 ? (j[0].style.fontSize = 20 * PBISite.scaleX + "px", j[0].style.fontSize = 20 * PBISite.scaleX + "px") : j[0].style.fontSize = "17px"
        }
        e[f].style.width = i + "px"
    }
    overflowScrollReflov(d.offsetHeight + getPosition(d).y)
}

function reflovProduct() {
    var a = document.getElementById("ofertaFull");
    if (a)
        if (PBISite.browser_width > 500 && PBISite.browser_height > 500) {
            var b = document.getElementById("content");
            b.style.zIndex = 2;
            var c = 700,
                    d = document.getElementById("mainText"),
                    e = parseInt((d.offsetWidth - c - 88) / 2),
                    f = c;
            0 > e && (e = 0, f = parseInt(d.offsetWidth) - 88);
            var a = document.getElementById("ofertaFull");
            a.style.width = f + "px", document.getElementById("ofertaFull").offsetTop;
            var h = document.getElementById("mainDescProduct").offsetTop;
            a.style.paddingLeft = "44px", a.style.paddingRight = "44px", a.style.paddingTop = "41px", a.style.height = parseInt(10 + document.getElementById("mainDescProduct").offsetHeight + h + 81) + "px", a.style.marginLeft = parseInt(e + marginInsLeft + marginLeft) + "px", a.style.marginTop = parseInt((PBISite.browser_height - (10 + document.getElementById("mainDescProduct").offsetHeight + h + 81)) / 2) + "px";
            var i = document.getElementById("productText1"),
                    j = document.getElementById("productText2");
            if (i)
                if (mainDescProduct.offsetWidth > 550) {
                    var k = parseInt(mainDescProduct.offsetWidth / 2) - 30;
                    i.style.width = k + "px", i.style.float = "left", j.style.width = k + "px", j.style.marginLeft = "30px", j.style.float = "left"
                } else {
                    var k = mainDescProduct.offsetWidth;
                    i.style.width = k + "px", i.style.float = "", j.style.width = k + "px", j.style.marginLeft = "", j.style.float = ""
                }
        } else {
            if (0 != document.getElementById("productDescription").style.opacity) {
                var b = document.getElementById("content");
                b.style.zIndex = 200
            }
            var h = document.getElementById("mainDescProduct").offsetTop;
            a.style.paddingLeft = "20px", a.style.paddingRight = "30px", a.style.paddingTop = "41px", a.style.width = parseInt(PBISite.browser_width - 50) + "px";
            var l = document.getElementById("scrollProd");
            l.style.height = parseInt(PBISite.browser_height - 41 - l.offsetTop) + "px", a.style.height = parseInt(PBISite.browser_height) + "px", a.style.marginLeft = "", a.style.marginTop = "";
            var l = document.getElementById("scrollProd");
            PBISite.menuOfertaScroll = new IScroll(l, {
                scrollX: !1,
                click: !0
            })
        }
}

function reflovInfo() {
    if (document.getElementById("ofertaFull")) {
        var a = 400,
                b = document.getElementById("contact1"),
                c = document.getElementById("contact2"),
                d = parseInt((b.offsetWidth + c.offsetWidth - a - 88) / 2);
        PBISite.browser_width < 1200 && (d = parseInt((b.offsetWidth - a - 88) / 2));
        var e = a;
        0 > d && (d = 0, e = PBISite.browser_width >= 1200 ? parseInt(b.offsetWidth + c.offsetWidth) - 88 : parseInt(b.offsetWidth) - 88), document.getElementById("ofertaFull").style.width = e + "px", document.getElementById("ofertaFull").offsetTop, document.getElementById("ofertaFull").style.height = parseInt(10 + document.getElementById("descIntro").offsetHeight + 88) + "px", document.getElementById("ofertaFull").style.marginLeft = parseInt(d + marginInsLeft + marginLeft) + "px", document.getElementById("ofertaFull").style.marginTop = parseInt((PBISite.browser_height - (44 + document.getElementById("descIntro").offsetHeight + 88)) / 2) + "px"
    }
}

function reflovBenefit() {
    var a = document.getElementById("infoFull");
    if (a)
        if (PBISite.browser_width > 500 && PBISite.browser_height > 500) {
            var b = document.getElementById("content");
            b.style.zIndex = 2;
            var c = 500,
                    d = document.getElementById("mainText"),
                    e = 0;
            e = d ? parseInt((d.offsetWidth - c - 88) / 2) : parseInt((parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight) - c - 88) / 2);
            var f = c;
            0 > e && (e = 0, f = d ? parseInt(d.offsetWidth) - 88 : parseInt(parseInt(PBISite.browser_width - marginLeft - marginInsLeft - marginRight)) - 88);
            var a = document.getElementById("infoFull");
            a.style.width = f + "px", document.getElementById("infoFull").offsetTop;
            var h = document.getElementById("mainDescInfo").offsetTop;
            a.style.paddingLeft = "44px", a.style.paddingRight = "44px", a.style.paddingTop = "41px", a.style.height = parseInt(10 + document.getElementById("mainDescInfo").offsetHeight + h + 81) + "px", a.style.marginLeft = parseInt(e + marginInsLeft + marginLeft) + "px", a.style.marginTop = parseInt((PBISite.browser_height - (10 + document.getElementById("mainDescInfo").offsetHeight + h + 81)) / 2) + "px"
        } else {
            if (0 != document.getElementById("infoDescription").style.opacity) {
                var i = document.getElementById("infoDescription");
                i.style.zIndex = 200
            }
            var h = document.getElementById("mainDescInfo").offsetTop;
            a.style.paddingLeft = "20px", a.style.paddingRight = "30px", a.style.paddingTop = "41px", a.style.width = parseInt(PBISite.browser_width - 50) + "px";
            var j = document.getElementById("scrollProd");
            j.style.height = parseInt(PBISite.browser_height - 41 - j.offsetTop) + "px", a.style.height = parseInt(PBISite.browser_height) + "px", a.style.marginLeft = "", a.style.marginTop = "";
            var j = document.getElementById("scrollProd");
            PBISite.menuOfertaScroll = new IScroll(j, {
                scrollX: !1,
                click: !0
            })
        }
}

function reflovDiamond() {
    if (PBISite.renderer) {
        if (PBISite.renderer.view.width == PBISite.browser_width && PBISite.renderer.view.height == PBISite.browser_height)
            return;
        PBISite.renderer.resize(PBISite.browser_width, PBISite.browser_height), PBISite.renderer.view.style.width = PBISite.browser_width + "px", PBISite.renderer.view.style.height = PBISite.browser_height + "px", PBISite.renderer.view.width = PBISite.browser_width, PBISite.renderer.view.height = PBISite.browser_height, PBISite.dotsLayer.view.scale.x = PBISite.dotsLayer.view.scale.y = PBISite.scaleY, null != PBISite.bgTexture && (PBISite.bgTexture.scale.x = PBISite.browser_width / 1920, PBISite.bgTexture.scale.y = PBISite.browser_height / 1068), PBISite.deactivePoints || (PBISite.dotsContainer.scale.x = PBISite.dotsContainer.scale.y = PBISite.scaleY, PBISite.dotsContainer.x = PBISite.browser_width / 2 + marginLeftDiamond, PBISite.dotsContainer.y = PBISite.browser_height / 2), PBISite.blockDiamond ? (PBISite.diamondContainer.x = PBISite.browser_width / 2 + marginLeftDiamond, PBISite.diamondContainer.y = PBISite.browser_height / 2, PBISite.dotsLayer.view.x = -400 * PBISite.scaleY, PBISite.dotsLayer.view.y = -400 * PBISite.scaleY) : (PBISite.diamondContainer.x = PBISite.browser_width / 2 + marginLeftDiamond, PBISite.diamondContainer.y = PBISite.browser_height / 2)
    }
}

function getPosition(a) {
    for (var b = 0, c = 0; a; )
        b += a.offsetLeft - a.scrollLeft + a.clientLeft, c += a.offsetTop - a.scrollTop + a.clientTop, a = a.offsetParent;
    return {
        x: b,
        y: c
    }
}

function setMenu() {
    var a = document.getElementById("fbIcoB"),
            b = document.getElementById("linkedIcoB"),
            c = document.getElementById("sndBtn"),
            d = document.getElementById("logoPBI"),
            e = document.getElementById("logoTypo"),
            f = document.getElementById("logoTypo2"),
            g = document.getElementById("instytutItem"),
            h = document.getElementById("ofertaItem"),
            i = document.getElementById("ofertaItem2"),
            j = document.getElementById("inicjatywyItem"),
            k = document.getElementById("wydarzeniaItem"),
            l = document.getElementById("zalozycielkaItem"),
            m = document.getElementById("kontaktItem"),
            n = document.getElementById("instytutItemM"),
            o = document.getElementById("ofertaItemM"),
            p = document.getElementById("ofertaItem2M"),
            q = document.getElementById("inicjatywyItemM"),
            r = document.getElementById("wydarzeniaItemM"),
            s = document.getElementById("zalozycielkaItemM"),
            t = document.getElementById("kontaktItemM"),
            u = document.getElementById("instytutItemOut"),
            v = document.getElementById("ofertaItemOut"),
            w = document.getElementById("ofertaItemOut2"),
            x = document.getElementById("inicjatywyItemOut"),
            y = document.getElementById("wydarzeniaItemOut"),
            z = document.getElementById("zalozycielkaItemOut"),
            A = document.getElementById("kontaktItemOut"),
            B = document.getElementById("instytutItemOver"),
            C = document.getElementById("ofertaItemOver"),
            D = document.getElementById("ofertaItemOver2"),
            E = document.getElementById("inicjatywyItemOver"),
            F = document.getElementById("wydarzeniaItemOver"),
            G = document.getElementById("zalozycielkaItemOver"),
            H = document.getElementById("kontaktItemOver"),
            I = document.getElementById("partnerzy"),
            J = document.getElementById("dlamediow"),
            K = document.getElementById("jestesmarka"),
            L = document.getElementById("kontakt"),
            M = document.getElementById("menuMobileShow");
    g.setAttribute("data-id", 0), h.setAttribute("data-id", 1), i.setAttribute("data-id", 2), j.setAttribute("data-id", 3), k.setAttribute("data-id", 4), l.setAttribute("data-id", 5), m.setAttribute("data-id", 6);
    var N = document.getElementById("instytutItem1M"),
            O = document.getElementById("instytutItem2M"),
            P = document.getElementById("instytutItem3M"),
            Q = document.getElementById("instytutItem4M"),
            R = document.getElementById("instytutItem5M"),
            S = document.getElementById("inicjatywyItem1M"),
            T = document.getElementById("inicjatywyItem2M"),
            U = document.getElementById("inicjatywyItem3M"),
            V = document.getElementById("inicjatywyItem4M"),
            W = document.getElementById("inicjatywyItem5M"),
            X = document.getElementById("zalozycielkaItem1M"),
            Y = document.getElementById("zalozycielkaItem2M"),
            Z = document.getElementById("zalozycielkaItem3M");
    N.setAttribute("data-id", 0), O.setAttribute("data-id", 0), P.setAttribute("data-id", 0), Q.setAttribute("data-id", 0), R.setAttribute("data-id", 0), S.setAttribute("data-id", 3), T.setAttribute("data-id", 3), U.setAttribute("data-id", 3), V.setAttribute("data-id", 3), W.setAttribute("data-id", 3), X.setAttribute("data-id", 5), Y.setAttribute("data-id", 5), Z.setAttribute("data-id", 5), N.setAttribute("data-sub", 0), O.setAttribute("data-sub", 1), P.setAttribute("data-sub", 2), Q.setAttribute("data-sub", 3), R.setAttribute("data-sub", 4), S.setAttribute("data-sub", 0), T.setAttribute("data-sub", 1), U.setAttribute("data-sub", 2), V.setAttribute("data-sub", 3), W.setAttribute("data-sub", 4), X.setAttribute("data-sub", 0), Y.setAttribute("data-sub", 1), Z.setAttribute("data-sub", 2), n.setAttribute("data-id", 0), o.setAttribute("data-id", 1), p.setAttribute("data-id", 2), q.setAttribute("data-id", 3), r.setAttribute("data-id", 4), s.setAttribute("data-id", 5), t.setAttribute("data-id", 6);
    for (var _ = 1; 7 > _; _++)
        document.getElementById("sub" + _).setAttribute("data-opened", 0);
    PBISite.navi = [document.getElementById("item1"),
                    document.getElementById("item2"),
                    document.getElementById("item3"), 
                    document.getElementById("item4"), 
                    document.getElementById("item6"),
                    document.getElementById("item7"), 
                    document.getElementById("item8")], 
    PBISite.naviArr = [u, v, w, x, y, z, A],
    PBISite.naviArr3 = [B, C, D, E, F, G, H], 
    PBISite.naviArr2 = [document.getElementById("itemOver1"), 
                       document.getElementById("itemOver2"), 
                       document.getElementById("itemOver3"), 
                       document.getElementById("itemOver4"), 
                       document.getElementById("itemOver6"), 
                       document.getElementById("itemOver7"), 
                       document.getElementById("itemOver8")], 
    $("#rozumiem").on("click", hideInfoCookies);
                   
                           DetectIt.isMobile ? 
                           ($(d).on("click", clickLogo), 
                           $(e).on("click", clickLogo), 
                           $(f).on("click", clickLogo), 
                           $(M).on("touchstart", clickNaviM), 
                           $(M).on("touchend", mouseOverM), 
                           $(M).on("click", mouseOverM), 
                           $(I).on("click", mouseOverF),
                           $(J).on("click", mouseOverF), 
                           $(K).on("click", mouseOverF), 
                           $(L).on("click", mouseOverF), 
                           $(g).on("click", mouseOver), 
                           $(h).on("click", mouseOver), 
                           $(i).on("click", mouseOver), 
                           $(j).on("click", mouseOver), 
                           $(k).on("click", mouseOver), 
                           $(l).on("click", mouseOver), 
                           $(m).on("click", mouseOver), 
                           $(I).on("touchend", clickFPartnerzy), 
                           $(J).on("touchend", clickFDlaMediow), 
                           $(K).on("touchend", clickFMarka), 
                           $(L).on("touchend", clickFKontakt), 
                           $(c).on("touchend", clickSnd), 
                           $(g).on("touchend", clickIt),
                           $(h).on("touchend", clickIt), 
                           $(i).on("touchend", clickIt), 
                           $(j).on("touchend", clickIt), 
                           $(k).on("touchend", clickIt), 
                           $(l).on("touchend", clickIt), 
                           $(m).on("touchend", clickIt), 
                           $(n).on("click", clickMIt), 
                           $(o).on("click", clickMIt), 
                           $(p).on("click", clickMIt), 
                           $(q).on("click", clickMIt), 
                           $(r).on("click", clickMIt), 
                           $(s).on("click", clickMIt), 
                           $(t).on("click", clickMIt), 
                           $(N).on("click", clickMItS), 
                           $(O).on("click", clickMItS), 
                           $(P).on("click", clickMItS), 
                           $(Q).on("click", clickMItS), 
                           $(R).on("click", clickMItS), 
                           $(S).on("click", clickMItS), 
                           $(T).on("click", clickMItS), 
                           $(U).on("click", clickMItS), 
                           $(V).on("click", clickMItS), 
                           $(W).on("click", clickMItS), 
                           $(X).on("click", clickMItS), 
                           $(Y).on("click", clickMItS),
                           $(Z).on("click", clickMItS), 
                           $(n).on("touchstart", mouseOverM), 
                           $(o).on("touchstart", mouseOverM), 
                           $(p).on("touchstart", mouseOverM), 
                           $(q).on("touchstart", mouseOverM), 
                           $(r).on("touchstart", mouseOverM), 
                           $(s).on("touchstart", mouseOverM), 
                           $(t).on("touchstart", mouseOverM), 
                           $(N).on("touchstart", mouseOverM),
                           $(O).on("touchstart", mouseOverM),
                           $(P).on("touchstart", mouseOverM), 
                           $(Q).on("touchstart", mouseOverM), 
                           $(R).on("touchstart", mouseOverM), 
                           $(S).on("touchstart", mouseOverM), 
                           $(T).on("touchstart", mouseOverM),
                           $(U).on("touchstart", mouseOverM), 
                           $(V).on("touchstart", mouseOverM), 
                           $(W).on("touchstart", mouseOverM), 
                           $(X).on("touchstart", mouseOverM), 
                           $(Y).on("touchstart", mouseOverM), 
                           $(Z).on("touchstart", mouseOverM), 
                           $(n).on("touchend", mouseOverM), 
                           $(o).on("touchend", mouseOverM), 
                           $(p).on("touchend", mouseOverM),
                           $(q).on("touchend", mouseOverM), 
                           $(r).on("touchend", mouseOverM), 
                           $(s).on("touchend", mouseOverM), 
                           $(t).on("touchend", mouseOverM), 
                           $(N).on("touchend", mouseOverM), 
                           $(O).on("touchend", mouseOverM), 
                           $(P).on("touchend", mouseOverM),
                           $(Q).on("touchend", mouseOverM),
                           $(R).on("touchend", mouseOverM),
                           $(S).on("touchend", mouseOverM), 
                           $(T).on("touchend", mouseOverM), 
                           $(U).on("touchend", mouseOverM), 
                           $(V).on("touchend", mouseOverM), 
                           $(W).on("touchend", mouseOverM), 
                           $(X).on("touchend", mouseOverM), 
                           $(Y).on("touchend", mouseOverM), 
                           $(Z).on("touchend", mouseOverM)) : 
                                   
                           ($(M).on("mouseover", mouseOverNaviM)
//                           ,$(M).on("mouseout", mouseOutNaviM), 
//                           $(M).on("click", clickNaviM), 
//                           $(d).on("click", clickLogo), 
//                           $(e).on("click", clickLogo), 
//                           $(f).on("click", clickLogo), 
//                           $(I).on("mouseover", mouseOverF), 
//                           $(I).on("mouseout", mouseOutF), 
//                           $(I).on("click", clickFPartnerzy), 
//                           $(J).on("mouseover", mouseOverF), 
//                           $(J).on("mouseout", mouseOutF), 
//                           $(J).on("click", clickFDlaMediow),
//                           $(K).on("mouseover", mouseOverF), 
//                           $(K).on("mouseout", mouseOutF), 
//                           $(K).on("click", clickFMarka), 
//                           $(L).on("mouseover", mouseOverF),
//                           $(L).on("mouseout", mouseOutF), 
//                           $(L).on("click", clickFKontakt), 
//                           $(a).on("mouseover", mouseOverFB),
//                           $(a).on("mouseout", mouseOutFB), 
//                           $(b).on("mouseover", mouseOverLinked),
//                           $(b).on("mouseout", mouseOutLinked), 
//                           $(c).on("mouseover", mouseOverSnd), 
//                           $(c).on("mouseout", mouseOutSnd), 
//                           $(c).on("click", clickSnd), 
//                           $(g).on("mouseover", mouseOver), 
//                           $(g).on("mouseout", mouseOut),
//                           $(g).on("click", clickIt), 
//                           $(h).on("mouseover", mouseOver), 
//                           $(h).on("mouseout", mouseOut), 
//                           $(h).on("click", clickIt), 
//                           $(i).on("mouseover", mouseOver), 
//                           $(i).on("mouseout", mouseOut), 
//                           $(i).on("click", clickIt),
//                           $(j).on("mouseover", mouseOver), 
//                           $(j).on("mouseout", mouseOut), 
//                           $(j).on("click", clickIt),
//                           $(k).on("mouseover", mouseOver), 
//                           $(k).on("mouseout", mouseOut), 
//                           $(k).on("click", clickIt), 
//                           $(l).on("mouseover", mouseOver),
//                           $(l).on("mouseout", mouseOut),
//                           $(l).on("click", clickIt), 
//                           $(m).on("mouseover", mouseOver), 
//                           $(m).on("mouseout", mouseOut),
//                           $(m).on("click", clickIt),
//                           $(n).on("click", clickMIt), 
//                           $(o).on("click", clickMIt), 
//                           $(p).on("click", clickMIt), 
//                           $(q).on("click", clickMIt), 
//                           $(r).on("click", clickMIt), 
//                           $(s).on("click", clickMIt), 
//                           $(t).on("click", clickMIt),
//                           $(N).on("click", clickMItS),
//                           $(O).on("click", clickMItS), 
//                           $(P).on("click", clickMItS), 
//                           $(Q).on("click", clickMItS), 
//                           $(R).on("click", clickMItS), 
//                           $(S).on("click", clickMItS), 
//                           $(T).on("click", clickMItS),
//                           $(U).on("click", clickMItS),
//                           $(V).on("click", clickMItS),
//                           $(W).on("click", clickMItS),
//                           $(X).on("click", clickMItS),
//                           $(Y).on("click", clickMItS), 
//                           $(Z).on("click", clickMItS)
                                   )
}

function mouseOverM(a) {
    null != a && a.preventDefault()
}

function mouseOverNaviM(a) {
    null != a && a.preventDefault(), PBISite.menuMobileOpened ? (TweenLite.to("#menuMobileShowIcon1", .1, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to("#menuMobileShowIcon2", .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    })) : (TweenLite.to("#menuMobileShowIcon1", .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to("#menuMobileShowIcon2", .1, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    }))
}

function mouseOutNaviM(a) {
    null != a && a.preventDefault(), PBISite.menuMobileOpened ? (TweenLite.to("#menuMobileShowIcon1", .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to("#menuMobileShowIcon2", .1, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    })) : (TweenLite.to("#menuMobileShowIcon1", .1, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to("#menuMobileShowIcon2", .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }))
}

function clickNaviM(a) {
    if (null != a && a.preventDefault(), PBISite.menuMobileOpened = !PBISite.menuMobileOpened, PBISite.menuMobileOpened) {
        var b = document.getElementById("menuMobile");
        b.style.visibility = "visible", PBISite.browser_width > PBISite.browser_height ? (TweenLite.to("#menuMobile", 0, {
            x: -1e3,
            y: 0,
            overwrite: "all"
        }), TweenLite.to("#menuMobile", 1, {
            autoAlpha: 1,
            x: 0,
            ease: Power4.easeOut
        })) : (TweenLite.to("#menuMobile", 0, {
            y: -1e3,
            x: 0,
            overwrite: "all"
        }), TweenLite.to("#menuMobile", 1, {
            autoAlpha: 1,
            y: 0,
            ease: Power4.easeOut
        })), TweenLite.to("#menuMobileShowIcon1", .2, {
            autoAlpha: 1,
            ease: Power1.easeOut,
            overwrite: "all"
        }), TweenLite.to("#menuMobileShowIcon2", .1, {
            autoAlpha: 0,
            ease: Power1.easeOut,
            overwrite: "all"
        }), null == PBISite.menuMobileScroll ? PBISite.menuMobileScroll = new IScroll(PBISite.scrollElement2, {
            scrollX: !0,
            click: !0
        }) : (PBISite.menuMobileScroll.scrollTo(0, 0, 0), setTimeout(function () {
            PBISite.menuMobileScroll.refresh()
        }, 0))
    } else
        closeMenuMobile()
}

function closeMenuMobile() {
    PBISite.menuMobileOpened = !1, TweenLite.to("#menuMobileShowIcon1", .1, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to("#menuMobileShowIcon2", .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }), PBISite.browser_width > PBISite.browser_height ? TweenLite.to("#menuMobile", .5, {
        autoAlpha: 0,
        x: -1e3,
        ease: Power4.easeIn,
        overwrite: "all"
    }) : TweenLite.to("#menuMobile", .5, {
        autoAlpha: 0,
        y: -1e3,
        ease: Power4.easeIn,
        overwrite: "all"
    })
}

function setUpSubNavi() {
    PBISite.subKids = $("#subNaviItems").children("li");
    var a = 0,
            b = PBISite.subKids.length,
            c = 0;
    for (a; b > a; a++)
        "A" == PBISite.subKids[a].children[0].tagName && (c == PBISite.currentSiteSub ? TweenLite.to(PBISite.subKids[a].children[0], .3, {
            css: {
                color: "#FFFFFF"
            },
            ease: Sine.easeOut
        }) : TweenLite.to(PBISite.subKids[a].children[0], 0, {
            css: {
                color: "#a69382"
            },
            ease: Sine.easeOut
        }), PBISite.subKids[a].children[0].setAttribute("data-id", c), setUpSubNaviAction(PBISite.subKids[a].children[0]), c += 1)
}

function setUpPartner() {
    PBISite.ofertaKids = $("#productsItems").children("li");
    var a = 0,
            b = PBISite.ofertaKids.length;
    for (a; b > a; a++)
        if (TweenLite.to(PBISite.ofertaKids[a], 0, {
            autoAlpha: 0,
            ease: Power1.easeOut,
            overwrite: "all"
        }), TweenLite.to(PBISite.ofertaKids[a], .5, {
            autoAlpha: 1,
            ease: Power1.easeOut,
            overwrite: "all",
            delay: 1 + .1 * a
        }), "A" == PBISite.ofertaKids[a].children[0].tagName) {
            var c = $(PBISite.ofertaKids[a].children[0]).find(".mainProdText");
            TweenLite.to(c, 0, {
                y: 120,
                ease: Power1.easeOut,
                overwrite: "all"
            }), TweenLite.to(c, 1, {
                y: 0,
                ease: Power1.easeOut,
                overwrite: "all",
                delay: 1 + .1 * a
            }), setUpPartAction(PBISite.ofertaKids[a].children[0])
        }
}

function setUpRefer() {
    PBISite.ofertaKids = $("#productsItems").children("li");
    var a = 0,
            b = PBISite.ofertaKids.length,
            c = 0;
    for (a; b > a; a++)
        if (TweenLite.to(PBISite.ofertaKids[a], 0, {
            autoAlpha: 0,
            ease: Power1.easeOut,
            overwrite: "all"
        }), TweenLite.to(PBISite.ofertaKids[a], .5, {
            autoAlpha: 1,
            ease: Power1.easeOut,
            overwrite: "all",
            delay: 1 + .1 * a
        }), "A" == PBISite.ofertaKids[a].children[0].tagName) {
            var d = $(PBISite.ofertaKids[a].children[0]).find(".mainProdText");
            TweenLite.to(d, 0, {
                y: 120,
                ease: Power1.easeOut,
                overwrite: "all"
            }), TweenLite.to(d, 1, {
                y: 0,
                ease: Power1.easeOut,
                overwrite: "all",
                delay: 1 + .1 * a
            }), setUpRefAction(PBISite.ofertaKids[a].children[0], c), c += 1
        }
}

function setUpOferta() {
    PBISite.ofertaKids = $("#productsItems").children("li");
    var a = 0,
            b = PBISite.ofertaKids.length;
    for (a; b > a; a++)
        if (TweenLite.to(PBISite.ofertaKids[a], 0, {
            autoAlpha: 0,
            ease: Power1.easeOut,
            overwrite: "all"
        }), TweenLite.to(PBISite.ofertaKids[a], .5, {
            autoAlpha: 1,
            ease: Power1.easeOut,
            overwrite: "all",
            delay: 1 + .1 * a
        }), "A" == PBISite.ofertaKids[a].children[0].tagName) {
            var c = $(PBISite.ofertaKids[a].children[0]).find(".mainProdText");
            TweenLite.to(c, 0, {
                y: 120,
                ease: Power1.easeOut,
                overwrite: "all"
            }), TweenLite.to(c, 1, {
                y: 0,
                ease: Power1.easeOut,
                overwrite: "all",
                delay: 1 + .1 * a
            }), setUpOfertaAction(PBISite.ofertaKids[a].children[0])
        }
}

function setUpPartAction(a) {
    DetectIt.isMobile ? $(a).click(function (a) {
        a.preventDefault();
        var b = $(this).attr("href"),
                c = $('<a href="' + b + '" />');
        c.attr("target", "_blank"), window.open(c.attr("href"))
    }) : ($(a).on("mouseover", mouseOverOferta), $(a).on("mouseout", mouseOutOferta), $(a).click(function (a) {
        a.preventDefault();
        var b = $(this).attr("href"),
                c = $('<a href="' + b + '" />');
        c.attr("target", "_blank"), window.open(c.attr("href"))
    }))
}

function setUpRefAction(a, b) {
    DetectIt.isMobile ? $(a).click(function (a) {
        a.preventDefault(), "" != PBISite.refArr[b][1] && animationProductRef(b)
    }) : ($(a).on("mouseover", mouseOverOferta), $(a).on("mouseout", mouseOutOferta), $(a).click(function (a) {
        a.preventDefault(), "" != PBISite.refArr[b][1] && animationProductRef(b)
    }))
}

function setUpOfertaAction(a) {
    DetectIt.isMobile ? $(a).click(function (a) {
        a.preventDefault(), parseAddress($(this).attr("href"), !1), changeSiteOferta($(this).attr("href") + " #ofertaDsc")
    }) : ($(a).on("mouseover", mouseOverOferta), $(a).on("mouseout", mouseOutOferta), $(a).click(function (a) {
        a.preventDefault(), parseAddress($(this).attr("href"), !1), changeSiteOferta($(this).attr("href") + " #ofertaDsc")
    }))
}

function changeSiteOferta(a) {
    $("#productDescription").load(a, getResponseOferta)
}

function getResponseOferta(a, b) {
    if ("success" == b) {
        if ($("#productDescription")[0].style.zIndex = 3, $("#productDescription")[0].style.display = "block", setHashSilently(PBISite.newAddress), PBISite.browser_width > 500 && PBISite.browser_height > 500) {
            var d = document.getElementById("content");
            d.style.zIndex = 2
        } else {
            var d = document.getElementById("content");
            d.style.zIndex = 200
        }
        animationProduct(), reflovProduct()
    }
}

function animationProductRef(a) {
    $("#infoDescription")[0].style.zIndex = 200, $("#infoDescription")[0].style.display = "block", document.getElementById("headerInfo").innerHTML = PBISite.refArr[a][0].toUpperCase(), document.getElementById("infoIntro").innerHTML = PBISite.refArr[a][1], document.getElementById("mainDescInfo").innerHTML = PBISite.refArr[a][2], TweenLite.to("#infoDescription", 0, {
        autoAlpha: 0,
        overwrite: "all"
    }), TweenLite.to("#infoDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    });
    var b = $("#infoFull").find(".closeBtnIns");
    TweenLite.to(b, 0, {
        rotation: 45,
        transformOrigin: "top left",
        overwrite: "all"
    }), TweenLite.to("#infoDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    }), TweenLite.to("#infoFull", 0, {
        rotationX: 90,
        rotationY: 90,
        rotationZ: 90,
        y: 700,
        scale: .1,
        transformPerspective: 1e3,
        overwrite: "all"
    }), TweenLite.to("#infoFull", 1, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        y: 0,
        transformPerspective: 1e3,
        ease: Power3.easeOut
    });
    var c = $("#infoFull").find(".closeBtn");
    $(c).on("mouseover", closeOverOferta), $(c).on("mouseout", closeOutOferta), $(c).on("click", clickCloseBenefit), reflovBenefit()
}

function animationProduct() {
    TweenLite.to("#productDescription", 0, {
        autoAlpha: 0,
        overwrite: "all"
    }), TweenLite.to("#productDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    });
    var a = $("#ofertaFull").find(".closeBtnIns");
    TweenLite.to(a, 0, {
        rotation: 45,
        transformOrigin: "top left",
        overwrite: "all"
    }), TweenLite.to("#productDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    }), TweenLite.to("#ofertaFull", 0, {
        rotationX: 90,
        rotationY: 90,
        rotationZ: 90,
        y: 700,
        scale: .1,
        transformPerspective: 1e3,
        overwrite: "all"
    }), TweenLite.to("#ofertaFull", 1, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        y: 0,
        transformPerspective: 1e3,
        ease: Power3.easeOut
    });
    var b = $("#ofertaFull").find(".closeBtn");
    $(b).on("mouseover", closeOverOferta), $(b).on("mouseout", closeOutOferta), $(b).on("click", clickCloseOferta)
}

function animationBenefit(a) {
    document.getElementById("headerInfo").innerHTML = "", document.getElementById("infoIntro").innerHTML = PBISite.benefitsArr[a][0], document.getElementById("mainDescInfo").innerHTML = PBISite.benefitsArr[a][1], TweenLite.to("#infoDescription", 0, {
        autoAlpha: 0,
        overwrite: "all"
    }), TweenLite.to("#infoDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    });
    var b = $("#infoFull").find(".closeBtnIns");
    TweenLite.to(b, 0, {
        rotation: 45,
        transformOrigin: "top left",
        overwrite: "all"
    }), TweenLite.to("#infoDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    }), TweenLite.to("#infoFull", 0, {
        rotationX: 90,
        rotationY: 90,
        rotationZ: 90,
        y: 700,
        scale: .1,
        transformPerspective: 1e3,
        overwrite: "all"
    }), TweenLite.to("#infoFull", 1, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        y: 0,
        transformPerspective: 1e3,
        ease: Power3.easeOut
    });
    var c = $("#infoFull").find(".closeBtn");
    $(c).on("mouseover", closeOverOferta), $(c).on("mouseout", closeOutOferta), $(c).on("click", clickCloseBenefit), reflovBenefit()
}

function closeOverOferta(a) {
    null != a && a.preventDefault();
    var b = $(this);
    TweenLite.to(b, .3, {
        css: {
            backgroundColor: "#4d4d4d"
        },
        overwrite: "all"
    })
}

function closeOutOferta(a) {
    null != a && a.preventDefault();
    var b = $(this);
    TweenLite.to(b, .2, {
        css: {
            backgroundColor: "#bead80"
        },
        overwrite: "all"
    })
}

function clickCloseBenefit(a) {
    null != a && a.preventDefault(), TweenLite.to("#infoDescription", .5, {
        autoAlpha: 0,
        overwrite: "all",
        ease: Power4.easeIn
    }), TweenLite.to("#infoFull", .5, {
        rotationX: -45,
        rotationY: -45,
        rotationZ: 90,
        y: 700,
        scale: 0,
        transformPerspective: 1e3,
        ease: Power4.easeIn,
        overwrite: "all"
    })
}

function clickCloseOferta(a) {
    null != a && a.preventDefault();
    var b = parseAddressSpec(PBISite.newAddress);
    b.address.splice(parseInt(b.address.length - 1), 1);
    var c = b.address.join("/");
    setHashSilently(c), TweenLite.to("#productDescription", .3, {
        autoAlpha: 0,
        overwrite: "all",
        ease: Power4.easeIn,
        onComplete: function () {
            $("#content")[0].style.zIndex = 2
        }
    }), TweenLite.to("#ofertaFull", .3, {
        rotationX: -45,
        rotationY: -45,
        rotationZ: 90,
        y: 700,
        scale: 0,
        transformPerspective: 1e3,
        ease: Power4.easeIn,
        overwrite: "all"
    })
}

function clickCloseInfo(a) {
    null != a && a.preventDefault(), TweenLite.to("#productDescription", .5, {
        autoAlpha: 0,
        overwrite: "all",
        ease: Power4.easeIn
    }), TweenLite.to("#ofertaFull", .5, {
        rotationX: -45,
        rotationY: -45,
        rotationZ: 90,
        y: 700,
        scale: 0,
        transformPerspective: 1e3,
        ease: Power4.easeIn,
        overwrite: "all"
    })
}

function mouseOverOferta(a) {
    null != a && a.preventDefault();
    var b = $(this).find(".mainProdText"),
            c = $(this).find(".logoRefOver");
    if (c[0]) {
        var d = $(this).find(".logoRef");
        if (TweenLite.to(d, .5, {
            autoAlpha: 0,
            ease: Power1.easeOut,
            overwrite: "all"
        }), "1" == $(this).attr("data-open")) {
            TweenLite.to(c, .7, {
                autoAlpha: 1,
                y: -24,
                ease: Power1.easeOut,
                overwrite: "all"
            });
            var e = $(this).find(".crystal");
            TweenLite.to(e, .5, {
                y: -64,
                ease: Sine.easeOut,
                overwrite: "all"
            })
        } else
            TweenLite.to(c, .7, {
                autoAlpha: 1,
                ease: Power1.easeOut,
                overwrite: "all"
            });
        TweenLite.to(b, .3, {
            css: {
                backgroundColor: "rgba(255,255,255,1);",
                transform: "translateY(0px)"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        })
    } else {
        var e = $(this).find(".crystal");
        TweenLite.to(e, .5, {
            y: -64,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to(b, .5, {
            css: {
                color: "#FFFFFF",
                transform: "translateY(-20px)"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        })
    }
    var f = $(this).find(".lineProd2");
    TweenLite.to(f, .3, {
        css: {
            backgroundColor: "#FFFFFF"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var g = $(this).find(".lineProd1");
    TweenLite.to(g, .3, {
        css: {
            backgroundColor: "#FFFFFF",
            opacity: 1
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOutOferta(a) {
    null != a && a.preventDefault();
    var b = $(this).find(".mainProdText"),
            c = $(this).find(".logoRefOver");
    if (c[0]) {
        var d = $(this).find(".logoRef"),
                e = $(this).find(".crystal");
        TweenLite.to(e, .4, {
            y: 0,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to(d, .2, {
            autoAlpha: 1,
            ease: Power1.easeOut,
            overwrite: "all"
        }), TweenLite.to(c, .2, {
            autoAlpha: 0,
            y: 0,
            ease: Power1.easeOut,
            overwrite: "all"
        }), TweenLite.to(b, .2, {
            css: {
                backgroundColor: "rgba(255,255,255,0);"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        })
    } else {
        var e = $(this).find(".crystal");
        TweenLite.to(e, .4, {
            y: 0,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to(b, .2, {
            css: {
                color: "#a69382",
                transform: "translateY(0px)"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        })
    }
    var f = $(this).find(".lineProd2");
    TweenLite.to(f, 1, {
        css: {
            backgroundColor: "#a69382"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var g = $(this).find(".lineProd1");
    TweenLite.to(g, .3, {
        css: {
            backgroundColor: "#a69382",
            opacity: .3
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function setUpPublikacje() {
    PBISite.subKidsPub = $("#publList").children("li");
    var a = 0,
            b = PBISite.subKidsPub.length;
    for (a; b > a; a++)
        "A" == PBISite.subKidsPub[a].children[0].tagName && setUpPublikacjeAction(PBISite.subKidsPub[a].children[0])
}

function setUpPublikacjeAction(a) {
    DetectIt.isMobile ? $(a).click(function (a) {
        var b = $(this).find(".publiRectIco");
        TweenLite.to(b, 0, {
            css: {
                backgroundColor: "rgba (255, 255, 255, 0)",
                color: "#a69382"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        });
        var c = $(this).attr("href"),
                d = $('<a href="' + c + '" />');
        d.attr("target", "_blank"), window.open(d.attr("href")), null != a && a.preventDefault()
    }) : ($(a).on("mouseover", mouseOverPub), $(a).on("mouseout", mouseOutPub), $(a).click(function (a) {
        var b = $(this).find(".publiRectIco");
        TweenLite.to(b, 0, {
            css: {
                backgroundColor: "rgba (255, 255, 255, 0)",
                color: "#a69382"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        });
        var c = $(this).attr("href"),
                d = $('<a href="' + c + '" />');
        d.attr("target", "_blank"), window.open(d.attr("href")), null != a && a.preventDefault()
    }))
}

function mouseOverPub(a) {
    null != a && a.preventDefault();
    var b = $(this).find(".publiRectIco");
    TweenLite.to(b, .3, {
        css: {
            backgroundColor: "#FFFFFF",
            color: "#4c4c4c"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var c = $(this).find(".publiT2");
    TweenLite.to(c, .2, {
        y: -18,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var d = $(this).find(".publiT1");
    TweenLite.to(d, .2, {
        css: {
            color: "#FFFFFF",
            transform: "translateY(" + parseInt(c[0].offsetHeight + 2) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var e = $(this).find(".iconPubl1");
    TweenLite.to(e, .3, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var f = $(this).find(".iconPubl2");
    TweenLite.to(f, .3, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var g = $(this).find(".iconPublOver1");
    TweenLite.to(g, .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var h = $(this).find(".iconPublOver2");
    TweenLite.to(h, .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOutPub(a) {
    null != a && a.preventDefault();
    var b = $(this).find(".publiRectIco");
    TweenLite.to(b, .3, {
        css: {
            backgroundColor: "rgba (255, 255, 255, 0)",
            color: "#a69382"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var c = $(this).find(".publiT1");
    TweenLite.to(c, .2, {
        css: {
            color: "#a69382",
            transform: "translateY(0px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var d = $(this).find(".iconPubl1");
    TweenLite.to(d, .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var e = $(this).find(".iconPubl2");
    TweenLite.to(e, .2, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var f = $(this).find(".iconPublOver1");
    TweenLite.to(f, .3, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var g = $(this).find(".iconPublOver2");
    TweenLite.to(g, .3, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    });
    var h = $(this).find(".publiT2");
    TweenLite.to(h, .2, {
        y: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function clearSub(a) {
    if (void 0 !== PBISite.subKids) {
        var b = 0,
                c = PBISite.subKids.length,
                d = 0;
        for (b; c > b; b++)
            "A" == PBISite.subKids[b].children[0].tagName && (parseInt(a) == d ? TweenLite.to(PBISite.subKids[b].children[0], .2, {
                css: {
                    color: "#FFFFFF"
                },
                ease: Sine.easeOut,
                overwrite: "all"
            }) : TweenLite.to(PBISite.subKids[b].children[0], .2, {
                css: {
                    color: "#a69382"
                },
                ease: Sine.easeOut,
                overwrite: "all"
            }), d += 1)
    }
}

function findSub(a) {
    if (void 0 !== PBISite.subKids) {
        var b = 0,
                c = PBISite.subKids.length;
        for (b; c > b; b++)
            "A" == PBISite.subKids[b].children[0].tagName && parseInt(PBISite.subKids[b].children[0].getAttribute("data-id")) == a && TweenLite.to(PBISite.subKids[b].children[0], .3, {
                css: {
                    color: "#FFFFFF"
                },
                ease: Sine.easeOut,
                overwrite: "all"
            })
    }
}

function setUpSubNaviAction(a) {
    DetectIt.isMobile ? $(a).click(function (a) {
        if ("http://jestesmarka.pl/" == $(this).attr("href")) {
            var b = $(this).attr("href"),
                    c = $('<a href="' + b + '" />');
            return c.attr("target", "_blank"), window.open(c.attr("href")), null != a && a.preventDefault(), void 0
        }
        a.preventDefault(), clearSub(), PBISite.currentSiteSub = parseInt($(this).attr("data-id")), TweenLite.to($(this), .5, {
            css: {
                color: "#FFFFFF"
            },
            ease: Sine.easeOut,
            overwrite: "all"
        }), parseAddress($(this).attr("href"), !1), TweenLite.to("#mainArticle", .2, {
            autoAlpha: 0,
            ease: Power4.easeOut,
            overwrite: "all",
            onComplete: changeSiteSub,
            onCompleteParams: [$(this).attr("href") + " #mainArticle"]
        })
    }) : $(a).click(function (a) {
        if ("http://jestesmarka.pl/" == $(this).attr("href")) {
            var b = $(this).attr("href"),
                    c = $('<a href="' + b + '" />');
            return c.attr("target", "_blank"), window.open(c.attr("href")), null != a && a.preventDefault(), void 0
        }
        a.preventDefault(), clearSub(), PBISite.currentSiteSub = parseInt($(this).attr("data-id")), TweenLite.to($(this), .3, {
            css: {
                color: "#FFFFFF"
            },
            ease: Sine.easeOut,
            overwrite: "all"
        }), parseAddress($(this).attr("href"), !1), TweenLite.to("#mainArticle", .2, {
            autoAlpha: 0,
            ease: Power4.easeOut,
            overwrite: "all",
            onComplete: changeSiteSub,
            onCompleteParams: [$(this).attr("href") + " #mainArticle"]
        })
    })
}

function changeSiteSub(a) {
    $("#mainArticle").load(a, getResponseSub)
}

function clearAllM(a) {
    var b = 1,
            c = "";
    for (b; 7 > b; b++) {
        var d = $("#sub" + b).find(".subHidden");
        TweenLite.to(d, .5, {
            height: 0,
            ease: Sine.easeOut,
            overwrite: "all"
        });
        var e = document.getElementById("sub" + b);
        a != b && e.setAttribute("data-opened", 0), c += e.getAttribute("data-opened") + " ", TweenLite.to("#sub" + b, .5, {
            css: {
                height: 20,
                backgroundColor: 16777215
            },
            ease: Sine.easeOut
        })
    }
    document.getElementById("menuHolderM").style.height = "700px"
}

function clearAll() {
    var a = 0,
            b = PBISite.naviArr.length;
    for (a; b > a; a++)
        PBISite.naviArr2[a].style.zIndex = a, PBISite.currentSite == a ? (PBISite.gradOpacity2 = PBISite.gradOpacity, TweenLite.to(PBISite, .4, {
            gradOpacity2: 0,
            ease: Sine.easeOut
        }), TweenLite.to(PBISite.naviArr2[a], 1, {
            rotationY: 0,
            transformOrigin: "left",
            transformPerspective: 250,
            ease: Elastic.easeOut,
            onUpdate: doGrad2,
            onUpdateParams: [PBISite.naviArr2[a], PBISite.naviArr[a]],
            overwrite: "all"
        }), TweenLite.to(PBISite.naviArr3[a], 0, {
            autoAlpha: 0,
            overwrite: "all",
            delay: .1
        }), TweenLite.to(PBISite.naviArr[a], 1, {
            rotationY: 0,
            transformOrigin: "left",
            transformPerspective: 250,
            ease: Elastic.easeOut,
            overwrite: "all"
        })) : (TweenLite.to(PBISite.naviArr3[a], 0, {
            autoAlpha: 0,
            overwrite: "all"
        }), TweenLite.to(PBISite.naviArr2[a], 0, {
            rotationY: 0,
            transformOrigin: "left",
            opacity: 0,
            transformPerspective: 250,
            ease: Elastic.easeOut,
            overwrite: "all"
        }), TweenLite.to(PBISite.naviArr[a], 0, {
            rotationY: 0,
            transformOrigin: "left",
            transformPerspective: 250,
            ease: Elastic.easeOut,
            overwrite: "all"
        }))
}

function clickIt(a) {
    null != a && a.preventDefault();
    var b = parseInt(a.target.parentNode.getAttribute("data-id"));
    clearAll(), a.target.parentNode.style.zIndex = 1e3, setUpMenuLeft(b), showDiamond(!1), PBISite.currentSite - b > 0 ? 1 : -1, PBISite.currentSite = b, PBISite.currentSiteSub = 0, parseAddress($(this).attr("href"), !1), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: changeSite,
        onCompleteParams: [$(this).attr("href") + " #content"],
        overwrite: "all"
    })
}

function setUpMenuLeft(a) {
    var b = PBISite.naviArr[a];
    if (b) {
        TweenLite.to(PBISite.naviArr3[a], 0, {
            autoAlpha: 1,
            overwrite: "all"
        }), TweenLite.to(PBISite.naviArr2[a], 0, {
            rotationY: 0,
            transformOrigin: "left",
            transformPerspective: 250,
            overwrite: "all"
        }), TweenLite.to(b, 0, {
            rotationY: 0,
            transformOrigin: "left",
            transformPerspective: 250,
            overwrite: "all"
        }), TweenLite.to(PBISite, 0, {
            gradOpacity: 0,
            ease: Back.easeIn
        }), TweenLite.to(PBISite, .4, {
            gradOpacity: 1,
            ease: Back.easeIn
        }), TweenLite.to(PBISite.naviArr2[a], .4, {
            rotationY: 90,
            transformOrigin: "left",
            transformPerspective: 250,
            ease: Back.easeIn,
            onUpdate: doGrad,
            onUpdateParams: [PBISite.naviArr2[a]],
            overwrite: "all"
        }), TweenLite.to(b, .4, {
            rotationY: 90,
            transformOrigin: "left",
            transformPerspective: 250,
            ease: Back.easeIn,
            overwrite: "all"
        });
        var c = parseInt(document.getElementById("menuTop").offsetHeight + PBISite.menuItemHeight / 2 * PBISite.scaleY - 4);
        TweenLite.to("#tickOut", .1, {
            css: {
                opacity: 0,
                transform: "translateY(" + parseInt(a * PBISite.menuItemHeight * PBISite.scaleY + c) + "px)"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        }), TweenLite.to("#tickOver", .3, {
            css: {
                opacity: 1,
                transform: "translateY(" + parseInt(a * PBISite.menuItemHeight * PBISite.scaleY + c) + "px)"
            },
            ease: Power1.easeOut,
            overwrite: "all"
        })
    }
}

function clickMIt(a) {
    null != a && a.preventDefault();
    var b = parseInt(a.target.parentNode.getAttribute("data-id"));
    clearAllM(parseInt(b + 1));
    var c = $("#sub" + parseInt(b + 1)).find(".subHidden"),
            d = document.getElementById("sub" + parseInt(b + 1));
    if (0 == b) {
        var e = d.getAttribute("data-opened");
        0 == e ? (d.setAttribute("data-opened", 1), TweenLite.to(c, .5, {
            height: 330,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to("#sub" + parseInt(b + 1), .5, {
            height: 330,
            ease: Sine.easeOut,
            overwrite: "all"
        }), document.getElementById("menuHolderM").style.height = "1030px") : (TweenLite.to(c, .5, {
            height: 0,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to("#sub" + parseInt(b + 1), .5, {
            css: {
                height: 20,
                backgroundColor: 16777215
            },
            ease: Sine.easeOut
        }), d.setAttribute("data-opened", 0), document.getElementById("menuHolderM").style.height = "700px"), setTimeout(function () {
            PBISite.menuMobileScroll.refresh()
        }, .6)
    } else if (3 == b) {
        var e = d.getAttribute("data-opened");
        0 == e ? (d.setAttribute("data-opened", 1), TweenLite.to(c, .5, {
            height: 330,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to("#sub" + parseInt(b + 1), .5, {
            height: 330,
            ease: Sine.easeOut,
            overwrite: "all"
        }), document.getElementById("menuHolderM").style.height = "1030px") : (TweenLite.to(c, .5, {
            height: 0,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to("#sub" + parseInt(b + 1), .5, {
            css: {
                height: 20,
                backgroundColor: 16777215
            },
            ease: Sine.easeOut
        }), d.setAttribute("data-opened", 0), document.getElementById("menuHolderM").style.height = "700px"), setTimeout(function () {
            PBISite.menuMobileScroll.refresh()
        }, .6)
    } else if (5 == b) {
        var e = d.getAttribute("data-opened");
        0 == e ? (d.setAttribute("data-opened", 1), TweenLite.to(c, .5, {
            height: 190,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to("#sub" + parseInt(b + 1), .5, {
            height: 190,
            ease: Sine.easeOut
        }), document.getElementById("menuHolderM").style.height = "890px") : (TweenLite.to(c, .5, {
            height: 0,
            ease: Sine.easeOut,
            overwrite: "all"
        }), TweenLite.to("#sub" + parseInt(b + 1), .5, {
            css: {
                height: 20,
                backgroundColor: 16777215
            },
            ease: Sine.easeOut
        }), d.setAttribute("data-opened", 0), document.getElementById("menuHolderM").style.height = "700px"), setTimeout(function () {
            PBISite.menuMobileScroll.refresh()
        }, .6)
    } else
        clearAll(), setUpMenuLefQ(b), showDiamond(!1), PBISite.currentSite = b, PBISite.currentSiteSub = 0, parseAddress($(this).attr("href"), !1), TweenLite.to("#content", 1, {
            autoAlpha: 0,
            ease: Power4.easeOut,
            onComplete: changeSite,
            onCompleteParams: [$(this).attr("href") + " #content"],
            overwrite: "all"
        }), closeMenuMobile()
}

function setUpMenuLefQ(a) {
    var b = PBISite.naviArr[a];
    TweenLite.to(PBISite.naviArr3[a], 0, {
        autoAlpha: 1,
        overwrite: "all"
    }), TweenLite.to(PBISite.naviArr2[a], 0, {
        rotationY: 0,
        transformOrigin: "left",
        transformPerspective: 250,
        overwrite: "all"
    }), TweenLite.to(b, 0, {
        rotationY: 0,
        transformOrigin: "left",
        transformPerspective: 250,
        overwrite: "all"
    }), TweenLite.to(PBISite, 0, {
        gradOpacity: 1,
        ease: Back.easeIn
    }), TweenLite.to(PBISite.naviArr2[a], .4, {
        rotationY: 90,
        transformOrigin: "left",
        transformPerspective: 250,
        ease: Back.easeIn,
        onUpdate: doGrad,
        onUpdateParams: [PBISite.naviArr2[a]],
        overwrite: "all"
    }), TweenLite.to(b, 0, {
        rotationY: 90,
        transformOrigin: "left",
        transformPerspective: 250,
        ease: Back.easeIn,
        overwrite: "all"
    });
    var c = parseInt(document.getElementById("menuTop").offsetHeight + PBISite.menuItemHeight / 2 * PBISite.scaleY - 4);
    TweenLite.to("#tickOut", 0, {
        css: {
            opacity: 0,
            transform: "translateY(" + parseInt(a * PBISite.menuItemHeight * PBISite.scaleY + c) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to("#tickOver", 0, {
        css: {
            opacity: 1,
            transform: "translateY(" + parseInt(a * PBISite.menuItemHeight * PBISite.scaleY + c) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function clickMItS(a) {
    null != a && a.preventDefault(), clearAllM(-1), clearAll();
    var b = parseInt(a.target.parentNode.getAttribute("data-id")),
            c = parseInt(a.target.parentNode.getAttribute("data-sub"));
    setUpMenuLefQ(b), showDiamond(!1), PBISite.currentSite = b, PBISite.currentSiteSub = c, parseAddress($(this).attr("href"), !1), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: changeSite,
        onCompleteParams: [$(this).attr("href") + " #content"],
        overwrite: "all"
    }), closeMenuMobile()
}

function showDiamond(a) {
    a ? (TweenLite.delayedCall(6, showQuote), TweenLite.to("#bgHider", 2, {
        y: 0,
        ease: Power4.easeOut,
        overwrite: "all"
    }), TweenLite.to("#mainQuoteAll", 1, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }), clickCloseBenefit(null), PBISite.blockDiamond ? TweenLite.to("#canvasPIXI", 1.5, {
        autoAlpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }) : PBISite.dotsLayer && (TweenLite.to(PBISite.dotsLayer.view, 1.5, {
        alpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }), PBISite.deactivePoints || (addDots(), TweenLite.to(PBISite.dotsContainer, 1, {
        alpha: 1,
        ease: Power1.easeOut,
        overwrite: "all"
    }))), overflowScrollReflov(0)) : (TweenLite.killDelayedCallsTo(showQuote), TweenLite.to("#bgHider", 2, {
        y: -139,
        ease: Power4.easeOut,
        overwrite: "all"
    }), TweenLite.to("#mainQuoteAll", 1, {
        autoAlpha: 0,
        ease: Power1.easeOut,
        overwrite: "all"
    }), clickCloseBenefit(null), PBISite.blockDiamond ? TweenLite.to("#canvasPIXI", 1.5, {
        autoAlpha: .1,
        ease: Power1.easeOut,
        overwrite: "all"
    }) : PBISite.dotsLayer && (TweenLite.to(PBISite.dotsLayer.view, 1.5, {
        alpha: .1,
        ease: Power1.easeOut,
        overwrite: "all"
    }), PBISite.deactivePoints || TweenLite.to(PBISite.dotsContainer, 1, {
        alpha: 0,
        ease: Power1.easeOut,
        overwrite: "all",
        onComplete: removeDots
    })))
}

function changeSite(a) {
    $("#content").load(a, getResponse)
}

function getResponseSub(a, b) {
    "success" == b && ($("#mainArticle").children().unwrap(), TweenLite.to(window, 0, {
        scrollTo: 0,
        overwrite: "all",
        delay: 0
    }), setUpSiteLinks(), setHashSilently(PBISite.newAddress), PBISite.selectedTemplate = PBISite.naviSiteTemplates[PBISite.currentSite][PBISite.currentSiteSub], PBISite.selectedTemplate == PBISite.CONTACT_TMP && setUpKontakt(), PBISite.selectedTemplate == PBISite.PUBLICTEXT_TMP && setUpPublikacje(), PBISite.selectedTemplate == PBISite.NEWS_TMP && setUpNews(), updateValues(), siteLoaded(), siteStart(!1))
}

function setUpSiteLinks() {
    var a = 0,
            b = $("#mainArticle").find(".linkPBI"),
            c = b.length;
    for (a; c > a; a++) {
        var d = b[a];
        $(d).click(function (a) {
            if ("http://jestesmarka.pl/" == $(this).attr("href")) {
                var b = $(this).attr("href"),
                        c = $('<a href="' + b + '" />');
                return c.attr("target", "_blank"), window.open(c.attr("href")), null != a && a.preventDefault(), void 0
            }
            a.preventDefault(), PBISite.currentSiteOld = PBISite.currentSite, parseAddress($(this).attr("href"), !1), PBISite.currentSiteOld != PBISite.currentSite ? (clearAll(), setUpMenuLeft(PBISite.currentSite), PBISite.selectedTemplate = PBISite.naviSiteTemplates[PBISite.currentSite][PBISite.currentSiteSub], TweenLite.to("#content", .2, {
                autoAlpha: 0,
                ease: Power4.easeOut,
                overwrite: "all",
                onComplete: changeSite,
                onCompleteParams: [$(this).attr("href") + "  #content"]
            })) : (clearSub(PBISite.currentSiteSub), TweenLite.to("#mainArticle", .2, {
                autoAlpha: 0,
                ease: Power4.easeOut,
                overwrite: "all",
                onComplete: changeSiteSub,
                onCompleteParams: [$(this).attr("href") + "  #mainArticle"]
            }))
        })
    }
}

function getResponse(a, b) {
    "success" == b && ($("#content").children().unwrap(), TweenLite.to(window, 0, {
        scrollTo: 0,
        overwrite: "all",
        delay: 0
    }), setUpSiteLinks(), setHashSilently(PBISite.newAddress), PBISite.selectedTemplate = -1 != PBISite.currentSite ? PBISite.naviSiteTemplates[PBISite.currentSite][PBISite.currentSiteSub] : PBISite.HOME_PAGE, PBISite.selectedTemplate == PBISite.CONTACT_TMP && setUpKontakt(), PBISite.selectedTemplate == PBISite.PUBLICTEXT_TMP && setUpPublikacje(), PBISite.selectedTemplate == PBISite.NEWS_TMP && setUpNews(), updateValues(), siteLoaded(), siteStart(!0))
}

function setUpNews() {
    function c() {
        PBISite.subNews = $("#newsItems").children("li");
        var a = 0,
                b = PBISite.subNews.length,
                e = $("#" + PBISite.positionNewsYStart + "_" + PBISite.positionNewsMStart).offset().top - $("#mainArticle").offset().top;
        for (TweenLite.to(window, 1, {
        scrollTo: e,
                overwrite: "all",
                delay: 0
        }), a; b > a; a++)
            TweenLite.to($(PBISite.subNews[a])[0], 0, {
                autoAlpha: 0,
                overwrite: "all",
                delay: 0
            }), TweenLite.to($(PBISite.subNews[a])[0], 4, {
                autoAlpha: 2,
                ease: Sine.easeOut,
                overwrite: "all",
                delay: .15 * a + .5
            }), $(PBISite.subNews[a]).hasClass("newItem") && d($(PBISite.subNews[a]).find(".newsClick"))
    }

    function d(a) {
        DetectIt.isMobile || 0 == parseInt($(a).parent().attr("data-closed")) && ($(a).on("mouseover", e), $(a).on("mouseout", f), $(a).click(function (a) {
            if (a.preventDefault(), "" != $(this).parent().attr("data-link")) {
                var b = $(this).parent().attr("data-link"),
                        c = $('<a href="' + b + '" />');
                return c.attr("target", "_blank"), window.open(c.attr("href")), null != a && a.preventDefault(), void 0
            }
            PBISite.whatToSend = "PYTANIE O WYDARZENIE: " + $(this).parent().attr("data-info");
            var d = 6;
            clearAll(), setUpMenuLeft(d), PBISite.currentSite = d, PBISite.selectedTemplate = PBISite.naviSiteTemplates[PBISite.currentSite][0], PBISite.currentSiteSub = 0, parseAddress(base_url + "kontakt", !1), TweenLite.to("#content", .2, {
                autoAlpha: 0,
                ease: Power4.easeOut,
                overwrite: "all",
                onComplete: changeSite,
                onCompleteParams: [base_url + "kontakt #content"]
            })
        }))
    }

    function e(a) {
        a.preventDefault();
        var b = $(event.target).parent().find(".titleNews4"),
                c = $(event.target).parent().find(".titleNews3"),
                d = $(event.target).parent();
        TweenLite.to(d, .5, {
            css: {
                backgroundColor: "rgba(166,147,130,0.05)",
                opacity: 1
            },
            overwrite: "all",
            ease: Power4.easeOut
        }), TweenLite.to(c, .1, {
            autoAlpha: 0,
            overwrite: "all",
            ease: Power4.easeOut
        }), TweenLite.to(b, .5, {
            autoAlpha: 1,
            overwrite: "all",
            ease: Power4.easeOut
        })
    }

    function f(a) {
        a.preventDefault();
        var b = $(event.target).parent().find(".titleNews4"),
                c = $(event.target).parent().find(".titleNews3"),
                d = $(event.target).parent();
        TweenLite.to(d, .1, {
            css: {
                backgroundColor: "rgba(166,147,130,0)"
            },
            overwrite: "all",
            ease: Power4.easeOut
        }), TweenLite.to(c, .5, {
            autoAlpha: 1,
            overwrite: "all",
            ease: Power4.easeOut
        }), TweenLite.to(b, .1, {
            autoAlpha: 0,
            overwrite: "all",
            ease: Power4.easeOut
        })
    }
    var a = ["STYCZE\u0143", "LUTY", "MARZEC", "KWIECIE\u0143", "MAJ", "CZERWIEC", "LIPIEC", "SIERPIE\u0143", "WRZESIE\u0143", "PA\u0179DZIERNIK", "LISTOPAD", "GRUDZIE\u0143"],
            b = ["Stycze\u0144", "Luty", "Marzec", "Kwiecie\u0144", "Maj", "Czerwiec", "Lipiec", "Sierpie\u0144", "Wrzesie\u0144", "Pa\u017adziernik", "Listopad", "Grudzie\u0144"];
    $.getJSON(base_url + "/index/events").done(function (d) {
        var e = [],
                g = 0,
                h = 0,
                i = new Date,
                j = i.getMonth(),
                k = i.getFullYear();
        PBISite.positionNewsMStart = 0, PBISite.positionNewsYStart = 0;
        var l = 24;
        $.each(d.data, function (c, d) {
            if (g != d.month1) {
                g = d.month1;
                var f = j - (g - 1);
                l > f && f >= 0 && k == parseInt(d.year1) && (l = f, PBISite.positionNewsMStart = g - 1, PBISite.positionNewsYStart = d.year1), h += 1, e.push('<li class="newMonth" id="' + d.year1 + "_" + parseInt(g - 1) + '"><div class="monthDesc"><span class="monthSpace">/</span><br>' + b[g - 1] + "</div></li>")
            }
            var i = d.day1;
            "" != d.day2 && (i = d.day1 != d.day2 ? d.day1 + "-" + d.day2 : d.day1), e.push('<li class="newItem" data-closed="' + d.closed + '" data-link="' + d.url + '" data-info="' + d.name + " W DNIU: " + i + " " + a[d.month1 - 1] + " " + d.year1 + '"><div class="lineNews1"></div><div class="titleHeader newsHeader">' + i + " " + a[d.month1 - 1] + " " + d.year1 + '</div><div class="newsCenter"><div class="newsOut"><div class="newsTitle">' + d.name + '<p class="titleNews2"><br>' + d.desc.toUpperCase() + '</p></div></div></div><div class="titleNews3">' + d.where.toUpperCase() + '</div><div class="titleNews4">DOWIEDZ SI\u0118 WI\u0118CEJ</div><div class="newsClick"></div></li>')
        }), $("#newsItems").append(e.join(""));
        for (var m = parseInt(d.data.length + h), n = 1; m >= n; n++)
            $("#newsItems").append('<div class="lineNews1" style="top:' + parseInt(272 * n - 30) + 'px"></div>');
        updateValues(), c()
    }).fail(function (a, b, c) {
        var d = b + ", " + c;
        console.log("Request Failed: " + d)
    })
}

function setUpKontakt() {
    var a = document.getElementById("btnSubmit");
    if (!DetectIt.isMobile) {
        var a = document.getElementById("btnSubmit");
        $(a).on("mouseover", mouseOverSubmit), $(a).on("mouseout", mouseOutSubmit)
    }
    var b = document.getElementById("one");
    b.addEventListener("touchstart", function (a) {
        a.stopPropagation()
    }, !1);
    var c = document.getElementById("comp");
    c.addEventListener("touchstart", function (a) {
        a.stopPropagation()
    }, !1);
    var c = document.getElementById("comp");
    c.addEventListener("touchstart", function (a) {
        a.stopPropagation()
    }, !1), $(a).submit(function (a) {
        a.preventDefault()
    }), null != PBISite.whatToSend && ($("#inputFieldBig").val(PBISite.whatToSend), document.getElementById("contactTarg").value = "WYDARZENIA", PBISite.whatToSend = null), null != $("select") && $("select").selectric({
        disableOnMobile: !1
    });
    var d = document.getElementById("selectWrapper");
    d.addEventListener("touchstart", function (a) {
        a.stopPropagation()
    }, !1), $(a).click(function () {
        var a = !0,
                b = !0;
        "" === $("#firstname").val() && (a = !1), "" === $("#surname").val() && (a = !1), "" === $("#inputFieldBig").val() && (a = !1), b = validateEmail($("#emailPBI").val());
        var d = 0;
        if ($("#contactTarg option").each(function () {
            this.selected && (d = this.id)
        }), 1 == a && 1 == b && 0 != d) {
            var e = $("form").serialize();
            e += "&contactTarg2=" + d + "&emailPBI=" + $("#emailPBI").val(), $.post(base_url + "/index/form", e, sendedDataShowInfo)
        } else
            showInfoContact(a, b, 0 == d ? !1 : !0)
    })
}

function sendedDataShowInfo(a) {
    var b = document.getElementById("productDescription"),
            c = jQuery.parseJSON(a);
    if (1 == parseInt(c.status)) {
        var d = '<div id="ofertaDsc"><div id="ofertaFull"><div class="closeBtn"><div class="closeBtnIns"></div></div><div id="descIntro" class="descIntroFix">Dzi\u0119kujemy, Twoje zapytanie trafi\u0142o do odpowiedniej osoby. Wkr\xf3tce skontaktujemy si\u0119 z Tob\u0105.</div></div></div>';
        return b.innerHTML = d, $("#firstname").val(""), $("#surname").val(""), $("#inputFieldBig").val(""), $("#emailPBI").val(""), $("#position").val(""), $("#company").val(""), animationInfo(), void 0
    }
    var d = '<div id="ofertaDsc"><div id="ofertaFull"><div class="closeBtn"><div class="closeBtnIns"></div></div><div id="descIntro" class="descIntroFix">Wyst\u0105pi\u0142 problem na serwerze, spr\xf3buj ponownie.</div></div></div>';
    return b.innerHTML = d, animationInfo(), void 0
}

function showInfoContact(a, b, c) {
    var d = document.getElementById("productDescription");
    if (!a) {
        var e = '<div id="ofertaDsc"><div id="ofertaFull"><div class="closeBtn"><div class="closeBtnIns"></div></div><div id="descIntro" class="descIntroFix">Wype\u0142nij wszystkie wymagane pola.</div></div></div>';
        return d.innerHTML = e, animationInfo(), void 0
    }
    if (!b) {
        var e = '<div id="ofertaDsc"><div id="ofertaFull"><div class="closeBtn"><div class="closeBtnIns"></div></div><div id="descIntro" class="descIntroFix">Podany adres email jest niepoprawny.</div></div></div>';
        return d.innerHTML = e, animationInfo(), void 0
    }
    if (!c) {
        var e = '<div id="ofertaDsc"><div id="ofertaFull"><div class="closeBtn"><div class="closeBtnIns"></div></div><div id="descIntro" class="descIntroFix">Wybierz cel kontaktu.</div></div></div>';
        return d.innerHTML = e, animationInfo(), void 0
    }
}

function animationInfoC() {
    $("#productDescription")[0].style.zIndex = 3, reflovInfo(), TweenLite.to("#productDescription", 0, {
        autoAlpha: 0,
        overwrite: "all"
    }), TweenLite.to("#productDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    });
    var a = $("#ofertaFull").find(".closeBtnIns");
    TweenLite.to(a, 0, {
        rotation: 45,
        transformOrigin: "top left",
        overwrite: "all"
    }), TweenLite.to("#productDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    }), TweenLite.to("#ofertaFull", 0, {
        rotationX: 90,
        rotationY: 90,
        rotationZ: 90,
        y: 700,
        scale: .1,
        transformPerspective: 1e3,
        overwrite: "all"
    }), TweenLite.to("#ofertaFull", 1, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        y: 0,
        transformPerspective: 1e3,
        ease: Power3.easeOut
    });
    var b = $("#ofertaFull").find(".closeBtn");
    $(b).on("mouseover", closeOverOferta), $(b).on("mouseout", closeOutOferta), $(b).on("click", clickCloseContact)
}

function animationInfo() {
    $("#productDescription")[0].style.zIndex = 3, reflovInfo(), TweenLite.to("#productDescription", 0, {
        autoAlpha: 0,
        overwrite: "all"
    }), TweenLite.to("#productDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    });
    var a = $("#ofertaFull").find(".closeBtnIns");
    TweenLite.to(a, 0, {
        rotation: 45,
        transformOrigin: "top left",
        overwrite: "all"
    }), TweenLite.to("#productDescription", .5, {
        autoAlpha: 1,
        overwrite: "all"
    }), TweenLite.to("#ofertaFull", 0, {
        rotationX: 90,
        rotationY: 90,
        rotationZ: 90,
        y: 700,
        scale: .1,
        transformPerspective: 1e3,
        overwrite: "all"
    }), TweenLite.to("#ofertaFull", 1, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        y: 0,
        transformPerspective: 1e3,
        ease: Power3.easeOut
    });
    var b = $("#ofertaFull").find(".closeBtn");
    $(b).on("mouseover", closeOverOferta), $(b).on("mouseout", closeOutOferta), $(b).on("click", clickCloseInfo)
}

function validateEmail(a) {
    var b = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    return b.test(a)
}

function mouseOverSubmit(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("btnSubmit");
    TweenLite.to(b, .3, {
        css: {
            backgroundColor: "#FFFFFF",
            color: "#4c4c4c"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOutSubmit(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("btnSubmit");
    TweenLite.to(b, .3, {
        css: {
            backgroundColor: "rgba (255, 255, 255, 0)",
            color: "#FFFFFF"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function doGrad(a) {
    a.style.opacity = Math.abs(PBISite.gradOpacity)
}

function doGrad2(a) {
    a.style.opacity = Math.abs(PBISite.gradOpacity2)
}

function mouseOut(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("tickOver"),
            c = document.getElementById("tickOut"),
            d = parseInt(document.getElementById("menuTop").offsetHeight + PBISite.menuItemHeight / 2 * PBISite.scaleY - 4);
    -1 != PBISite.currentSite ? (TweenLite.to(b, .3, {
        css: {
            opacity: 1,
            transform: "translateY(" + parseInt(PBISite.currentSite * PBISite.menuItemHeight * PBISite.scaleY + d) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to(c, .3, {
        css: {
            opacity: 0,
            transform: "translateY(" + parseInt(PBISite.currentSite * PBISite.menuItemHeight * PBISite.scaleY + d) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })) : (TweenLite.to(b, .3, {
        css: {
            opacity: 0,
            transform: "translateY(" + parseInt(PBISite.currentSite * PBISite.menuItemHeight * PBISite.scaleY + d) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }), TweenLite.to(c, .3, {
        css: {
            opacity: 0,
            transform: "translateY(" + parseInt(PBISite.currentSite * PBISite.menuItemHeight * PBISite.scaleY + d) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }))
}

function mouseOver(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("tickOver"),
            c = document.getElementById("tickOut"),
            d = parseInt(a.target.parentNode.getAttribute("data-id")),
            e = parseInt(document.getElementById("menuTop").offsetHeight + PBISite.menuItemHeight / 2 * PBISite.scaleY - 4);
    TweenLite.to(b, .3, {
        css: {
            transform: "translateY(" + parseInt(d * PBISite.menuItemHeight * PBISite.scaleY + e) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }), PBISite.currentSite != d ? TweenLite.to(c, .3, {
        css: {
            opacity: 1,
            transform: "translateY(" + parseInt(d * PBISite.menuItemHeight * PBISite.scaleY + e) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    }) : TweenLite.to(c, .3, {
        css: {
            opacity: 0,
            transform: "translateY(" + parseInt(d * PBISite.menuItemHeight * PBISite.scaleY + e) + "px)"
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function clickFPartnerzy(a) {
    null != a && a.preventDefault(), clearAll();
    var b = 7;
    PBISite.currentSite = b, PBISite.selectedTemplate = PBISite.naviSiteTemplates[PBISite.currentSite][0], PBISite.currentSiteSub = 0, parseAddress($(this).attr("href"), !1), TweenLite.to("#content", 0, {
        z: .01
    }), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        onComplete: changeSite,
        onCompleteParams: [$(this).attr("href") + " #content"]
    }), showDiamond(!1)
}

function clickFDlaMediow(a) {
    null != a && a.preventDefault(), clearAll();
    var b = 8;
    PBISite.currentSite - b > 0 ? 1 : -1, PBISite.currentSite = b, PBISite.selectedTemplate = PBISite.naviSiteTemplates[PBISite.currentSite][0], PBISite.currentSiteSub = 0, parseAddress($(this).attr("href"), !1), TweenLite.to("#content", 0, {
        z: .01
    }), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        onComplete: changeSite,
        onCompleteParams: [$(this).attr("href") + " #content"]
    }), showDiamond(!1)
}

function parseAddress(a, b) {
    if ("" != a) {
        var c = a.substring(base_url.length).split("/");
        PBISite.newAddress = a, PBISite.subSiteAdr = "", PBISite.historyActive = b, PBISite.mainSiteAdr = c[0];
        var d = 0,
                e = PBISite.naviSiteAdd.length;
        for (PBISite.currentSite = - 1, PBISite.currentSiteSub = 0, d; e > d; d++)
            if (PBISite.mainSiteAdr == PBISite.naviSiteAdd[d].mainsite) {
                PBISite.currentSite = d;
                break
            }
        if (PBISite.subSiteAdr = void 0 != c[1] ? c[1] : "", -1 != PBISite.currentSite) {
            var f = 0,
                    g = PBISite.naviSiteAdd[PBISite.currentSite].sites.length;
            for (f; g > f; f++)
                if (PBISite.subSiteAdr == PBISite.naviSiteAdd[PBISite.currentSite].sites[f]) {
                    PBISite.currentSiteSub = f;
                    break
                }
        }
    } else
        PBISite.currentSite = -1, PBISite.selectedTemplate = PBISite.HOME_PAGE, PBISite.currentSiteSub = 0, PBISite.mainSiteAdr = "", PBISite.subSiteAdr = ""
}

function parseAddressSpec(a) {
    var b = {};
    void 0 === a && (a = "");
    var c = a.substring(base_url.length).split("/");
    return b.newAddress = a, b.address = c, b.mainSiteAdr = b.address[0], b.subSiteAdr = "", b.address.length > 1 && (b.subSiteAdr = b.address[1]), b
}

function clickFMarka(a) {
    null != a && a.preventDefault();
    var b = $(this).attr("href"),
            c = $('<a href="' + b + '" />');
    c.attr("target", "_blank"), window.open(c.attr("href"))
}

function clickFKontakt(a) {
    null != a && a.preventDefault();
    var b = 6;
    setUpMenuLeft(b), PBISite.currentSite = b, PBISite.selectedTemplate = PBISite.naviSiteTemplates[PBISite.currentSite][0], PBISite.currentSiteSub = 0, parseAddress($(this).attr("href"), !1), TweenLite.to("#content", 0, {
        z: .01
    }), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        onComplete: changeSite,
        onCompleteParams: [$(this).attr("href") + " #content"]
    }), showDiamond(!1)
}

function clickLogo(a) {
    null != a && a.preventDefault(), clearAll(), parseAddress("", !1), setHashSilently(base_url), TweenLite.to("#content", 0, {
        z: .01
    }), TweenLite.to("#content", 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        overwrite: "all",
        onComplete: hideContent
    }), showDiamond(!0)
}

function hideContent() {
    var a = document.getElementById("content");
    a.style.display = "none", a.innerHTML = ""
}

function mouseOutF(a) {
    null != a && a.preventDefault();
    var b = a.target;
    TweenLite.to(b, .3, {
        css: {
            opacity: .5
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOverF(a) {
    null != a && a.preventDefault();
    var b = a.target;
    TweenLite.to(b, .3, {
        css: {
            opacity: 1
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOutFB(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("fbIco");
    TweenLite.to(b, .3, {
        css: {
            opacity: .5
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOverFB(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("fbIco");
    TweenLite.to(b, .3, {
        css: {
            opacity: 1
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOutLinked(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("linkedIco");
    TweenLite.to(b, .3, {
        css: {
            opacity: .5
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOverLinked(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("linkedIco");
    TweenLite.to(b, .3, {
        css: {
            opacity: 1
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOutSnd(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("sndBtn");
    TweenLite.to(b, .3, {
        css: {
            opacity: .5
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function mouseOverSnd(a) {
    null != a && a.preventDefault();
    var b = document.getElementById("sndBtn");
    TweenLite.to(b, .3, {
        css: {
            opacity: 1
        },
        ease: Power1.easeOut,
        overwrite: "all"
    })
}

function clickSnd(a) {
    if (null != a && a.preventDefault(), 1 == PBISite.musicLoaded)
        if (PBISite.musicPlaying) {
            var b = document.getElementById("soundIconOn"),
                    c = document.getElementById("soundIconOff");
            PBISite.musicOn ? (PBISite.musicOn = !1, disableMusic(), TweenLite.to(b, .3, {
                autoAlpha: 0,
                ease: Power1.easeOut,
                overwrite: "all"
            }), TweenLite.to(c, .3, {
                autoAlpha: 1,
                ease: Power1.easeOut,
                overwrite: "all"
            })) : (PBISite.musicOn = !0, enableMusic(), TweenLite.to(b, .3, {
                autoAlpha: 1,
                ease: Power1.easeOut,
                overwrite: "all"
            }), TweenLite.to(c, .3, {
                autoAlpha: 0,
                ease: Power1.easeOut,
                overwrite: "all"
            }))
        } else {
            PBISite.soundLoop = createjs.Sound.play("loop", "none", 0, 0, 0, 0), PBISite.musicPlaying = !0;
            var b = document.getElementById("soundIconOn"),
                    c = document.getElementById("soundIconOff");
            PBISite.musicOn = !0, enableMusic(), TweenLite.to(b, .3, {
                autoAlpha: 1,
                ease: Power1.easeOut,
                overwrite: "all"
            }), TweenLite.to(c, .3, {
                autoAlpha: 0,
                ease: Power1.easeOut,
                overwrite: "all"
            })
        }
}

function loadSounds() {
    if (PBISite.musicLoaded = !1, PBISite.assets = [], document.getElementById("soundIconOn").style.opacity = 0, document.getElementById("soundIconOff").style.opacity = 1, DetectIt.isMobile) {
        if (loadMusic = createjs.Sound.initializeDefaultPlugins(), 0 == loadMusic)
            document.getElementById("sndBtn").style.display = "none", document.getElementById("sndBtn").style.width = "0px";
        else {
            var b = [];
            b = [{
                    src: "./music/music.ogg",
                    
                    id: "loop"
                }], createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", handleLoadM), createjs.Sound.registerManifest(b)
        }
        siteMainEnter()
    } else {
        loadMusic = createjs.Sound.initializeDefaultPlugins();
        var a = [];
        loader = new createjs.LoadQueue(!1, "music/"), loadMusic && (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]), loader.installPlugin(createjs.Sound), a.push({
            src: "./music/music.ogg",
            id: "loop"
        })), loader.on("fileload", handleFileLoad, this), loader.on("complete", handleComplete, this), loader.loadManifest(a)
    }
}

function handleFileLoad(a) {
    PBISite.assets.push(a)
}

function handleLoadM() {
    PBISite.musicLoaded = !0, PBISite.musicOn = !1
}

function handleComplete() {
    var c = PBISite.assets.length,
            d = 0;
    for (d; c > d; d++) {
        var e = PBISite.assets[d],
                f = e.item.id;
        switch (e.item.src, e.result, f) {
            case "loop":
                PBISite.soundLoop = createjs.Sound.play("loop", "none", 0, 0, -1, 0), PBISite.soundLoop.playState == createjs.Sound.PLAY_FAILED && (PBISite.soundLoop = createjs.Sound.play(base_url + "/music/music.mp3", "none", 0, 0, -1, 0)), PBISite.soundLoop.playState == createjs.Sound.PLAY_FAILED && (PBISite.soundLoop = createjs.Sound.play(base_url + "/music/music.ogg", "none", 0, 0, -1, 0)), PBISite.soundLoop.playState == createjs.Sound.PLAY_SUCCEEDED && (PBISite.musicOn = !0, PBISite.musicLoaded = !0, PBISite.musicPlaying = !0, TweenLite.delayedCall(.5, enableMusic), TweenLite.to(document.getElementById("soundIconOn"), .3, {
                    autoAlpha: 1,
                    ease: Power1.easeOut,
                    overwrite: "all"
                }), TweenLite.to(document.getElementById("soundIconOff"), .3, {
                    autoAlpha: 0,
                    ease: Power1.easeOut,
                    overwrite: "all"
                }), window.addEventListener && (window.addEventListener("blur", disableMusic, !1), window.addEventListener("focus", enableMusic, !1)))
        }
    }
    siteMainEnter()
}

function changeVolume() {
    PBISite.soundLoop.setVolume(PBISite.soundLoop.volume)
}

function disableMusic() {
    TweenLite.to(PBISite.soundLoop, 2, {
        volume: 0,
        onUpdate: changeVolume,
        overwrite: "all"
    })
}

function enableMusic() {
    1 == PBISite.musicOn && TweenLite.to(PBISite.soundLoop, 6, {
        volume: .2,
        onUpdate: changeVolume,
        overwrite: "all"
    })
}

function activateBg(a, b) {
    function g() {
        PBISite.diamond && (PBISite.diamond.animateDiamond(), PBISite.spritePoint.x = PBISite.mouseX, PBISite.spritePoint.y = PBISite.mouseY), PBISite.bgFlov, PBISite.renderer.render(PBISite.stage), requestAnimFrame(g)
    }
    PBISite.bgFlov = a, 11 != DetectIt.ieVersion ? PBISite.renderer = 0 == b ? PIXI.autoDetectRenderer(PBISite.browser_width, PBISite.browser_height, null, !0, !0) : new PIXI.CanvasRenderer(PBISite.browser_width, PBISite.browser_height, null, !0) : (PBISite.renderer = new PIXI.CanvasRenderer(PBISite.browser_width, PBISite.browser_height, null, !0), PBISite.roundPixels = !0), PBISite.renderer.view.style.position = "fixed", PBISite.renderer.view.style.top = "0px", PBISite.renderer.view.style.left = "0px", PBISite.renderer.view.style.width = PBISite.browser_width + "px", PBISite.renderer.view.style.height = PBISite.browser_height + "px", PBISite.renderer.view.style.display = "block", PBISite.renderer.view.width = PBISite.browser_width, PBISite.renderer.view.height = PBISite.browser_height, PBISite.renderer.antialias = !0, PBISite.renderer.transparent = !0, PBISite.stage = new PIXI.Stage(0, !0);
    var e = new PIXI.DisplayObjectContainer;
    if (PBISite.stage.addChild(e), PBISite.bgFlov) {
        var f = PIXI.Sprite.fromImage(base_url + "");
        f.scale.x = PBISite.browser_width / 1920, f.scale.y = PBISite.browser_height / 1068, PBISite.bgTexture = f, PBISite.bg = e, e.addChild(f), e.alpha = 0, document.getElementById("bg").className = "bgNo"
    } else
        PBISite.bg = document.getElementById("bg"), document.getElementById("bg").className = "bgYes";
    PBISite.bgFlov, requestAnimFrame(g), document.getElementById("canvasPIXI").appendChild(PBISite.renderer.view)
}

function FastClick(a) {
    "use strict";
    var b, c = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, !a || !a.nodeType)
        throw new TypeError("Layer must be a document node");
    this.onClick = function () {
        return FastClick.prototype.onClick.apply(c, arguments)
    }, this.onMouse = function () {
        return FastClick.prototype.onMouse.apply(c, arguments)
    }, this.onTouchStart = function () {
        return FastClick.prototype.onTouchStart.apply(c, arguments)
    }, this.onTouchEnd = function () {
        return FastClick.prototype.onTouchEnd.apply(c, arguments)
    }, this.onTouchCancel = function () {
        return FastClick.prototype.onTouchCancel.apply(c, arguments)
    }, FastClick.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function (b, c, d) {
        var e = Node.prototype.removeEventListener;
        "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
    }, a.addEventListener = function (b, c, d) {
        var e = Node.prototype.addEventListener;
        "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function (a) {
            a.propagationStopped || c(a)
        }), d) : e.call(a, b, c, d)
    }), "function" == typeof a.onclick && (b = a.onclick, a.addEventListener("click", function (a) {
        b(a)
    }, !1), a.onclick = null))
}

function findPos(a) {
    var b = curtop = 0,
            c = new Object;
    if (a.offsetParent) {
        do
            b += a.offsetLeft, curtop += a.offsetTop;
        while (a = a.offsetParent);
        return c.X = b, c.Y = curtop, c
    }
}

function randRange(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function BlockMove(a) {
    a.preventDefault()
}

function set2dTranslate(a, b, c) {
    var d = "translate(" + b + "," + c + ")";
    a.style.transform = d, a.style.WebkitTransform = d, a.style.msTransform = d, a.style.MozTransform = d
}

function set3dTranslate(a, b, c) {
    var d = "translate3d(" + b + "," + c + ", 0px)";
    a.style.transform = d, a.style.WebkitTransform = d
}

function set2dRotate(a, b) {
    var c = "rotate(" + b + "deg)";
    a.style.transform = c, a.style.WebkitTransform = c, a.style.msTransform = c, a.style.MozTransform = c
}

function set3dRotate(a, b) {
    var c = "rotate3d(0,0,0," + b + "deg)";
    a.style.transform = c, a.style.WebkitTransform = c
}

function set3dScale(a, b, c) {
    var d = "scale3d(" + b + "," + c + "0)";
    a.style.transform = d, a.style.WebkitTransform = d, a.style.msTransform = d, a.style.MozTransform = d
}

function set2dScale(a, b, c) {
    var d = "scale(" + b + "," + c + ")";
    a.style.transform = d, a.style.WebkitTransform = d, a.style.msTransform = d, a.style.MozTransform = d
}

function set2dScaleTranslate(a, b, c, d, e) {
    var f = "scale(" + d + "," + e + ") translate(" + b + "," + c + ")";
    a.style.transform = f, a.style.WebkitTransform = f, a.style.msTransform = f, a.style.MozTransform = f
}

function set3dScaleTranslate(a, b, c, d, e) {
    var f = "scale3d(" + d + "," + e + "0) translate(" + b + "," + c + "0)";
    a.style.transform = f, a.style.WebkitTransform = f, a.style.msTransform = f, a.style.MozTransform = f
}
var PBISite = new function () {
    this.supportsTransforms = Modernizr.csstransforms3d,
            this.browser_width = 0,
            this.browser_height = 0,
            this.isTouch = !1,
            this.currentSite = -1,
            this.naviArr,
            this.naviArr2,
            this.naviArr3,
            this.navi,
            this.gradOpacity = 0,
            this.gradOpacity2 = 0,
            this.musicOn = !1,
            this.musicLoaded = !1,
            this.siteVersion = 0,
            this.soundLoop,
            this.siteLoaded = !1,
            this.selectedTemplate = "",
            this.subNaviItemsLen = [5, 4, 5, 5, 5, 5],
            this.naviSiteTemplates = [],
            this.naviSiteAdd = [],
            this.naviSiteTitles = [],
            this.menuItemHeight = 80,
            this.HOME_PAGE = "homePageTMP",
            this.QUOTETEXT_TMP = "quoteTextTMP",
            this.PHOTOTEXT_TMP = "photoTextTMP",
            this.PUBLICTEXT_TMP = "publicTextTMP",
            this.TEXT_TMP = "textTMP",
            this.LINK = "link",
            this.CONTACT_TMP = "contactTMP",
            this.OFERTA_TMP = "ofertaTMP",
            this.REFER_TMP = "referTMP",
            this.PARTNER_TMP = "partnerTMP",
            this.ACHIEV_TMP = "achievTMP",
            this.NEWS_TMP = "newsTMP",
            this.naviSiteTemplates.push([this.QUOTETEXT_TMP, this.ACHIEV_TMP, this.QUOTETEXT_TMP, this.QUOTETEXT_TMP, this.REFER_TMP]),
            this.naviSiteTemplates.push([this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP]),
            this.naviSiteTemplates.push([this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP, this.OFERTA_TMP]),
            this.naviSiteTemplates.push([this.TEXT_TMP, this.TEXT_TMP, this.TEXT_TMP, this.TEXT_TMP, this.TEXT_TMP]),
            this.naviSiteTemplates.push([this.NEWS_TMP]),
            this.naviSiteTemplates.push([this.PHOTOTEXT_TMP, this.PUBLICTEXT_TMP, this.LINK]),
            this.naviSiteTemplates.push([this.CONTACT_TMP]),
            this.naviSiteTemplates.push([this.PARTNER_TMP]),
            this.naviSiteTemplates.push([this.PUBLICTEXT_TMP]),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: ["", "", "", "", ""]
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: ["", "", "", "", "", ""]
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: ["", "", "", "", "", "", "", ""]
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: ["", "", "", "", ""]
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: []
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: ["", ""]
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: []
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: []
            }),
            this.naviSiteAdd.push({
                mainsite: "",
                sites: []
            }),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.naviSiteTitles.push([]),
            this.currentSiteSub = 0,
            this.scaleX = 1,
            this.scaleY = 1,
            this.renderer = null,
            this.browser_height = 1e3,
            this.browser_width = 1e3,
            this.widthMax = 1600,
            this.heightMax = 800,
            this.heighTextMax = 800,
            this.scrollElement,
            this.scrollElement2,
            this.mouseX = 0,
            this.mouseY = 0,
            this.grid = null,
            this.bg = null,
            this.quotesArr = [],
            this.quotesArr.push(["<br>A NEW BEGINING", 6, 10]),
            this.quotesArr.push(["<br>START ", 6, 10]),
            this.quotesArr.push(["<br>SETTING UP THE FUTURE ", 6, 10]),
            this.quotesInt = -1,
            this.benefitsArr = [],
            this.benefitsArr.push(["", "", ""]),
            this.benefitsArr.push(["", "", ""]),
            this.benefitsArr.push(["", "", ""]),
            this.benefitsArr.push(["", "", ""]),
            this.benefitsArr.push(["", "", ""]),
            this.benefitsArr.push(["", "", ""]),
            this.benefitsArr.push(["", "", ""]),
            this.refArr = [],
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.refArr.push(["", "", ""]),
            this.triggerHistory = !1,
            this.historyActive = !1,
            this.mainSiteAdr = "",
            this.newAddress = "",
            this.benefitDotsAdded = !1,
            this.delayMainAnimation = 0,
            this.menuMobileVisible = !1,
            this.menuMobileOpened = !1,
            this.blockDiamond = !1, this.txtChapter
};
$(function () {
    PBISite.scrollElement2 = document.getElementById("menuMobile"),
            PBISite.selectedTemplate = selectedTemplate,
            PBISite.selectedTemplate == PBISite.CONTACT_TMP && setUpKontakt(),
            PBISite.selectedTemplate == PBISite.PUBLICTEXT_TMP && setUpPublikacje(),
            PBISite.selectedTemplate == PBISite.NEWS_TMP && setUpNews(), setUpSiteLinks(), setMenu(), loadSounds(), TweenLite.to("#arrowD", 0, {
        autoAlpha: 0
    }), window.addEventListener && (window.addEventListener("resize", updateValues, !1), window.addEventListener("DOMContentLoaded", updateValues, !1), window.addEventListener("load", updateValues, !1), DetectIt.isMobile ? window.addEventListener("touchmove", touchMove, !1) : window.addEventListener("mousemove", mouseMove, !1)), ffArrow();
    var a = readCookie("infoPBIcookie");
    1 != a && TweenLite.delayedCall(10, showInfoCookies), History.Adapter.bind(window, "statechange", handleHashChange)
});
var DetectIt = new function () {
    this.msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            this.isTouch = "ontouchstart" in window || this.msGesture || window.DocumentTouch && document instanceof DocumentTouch,
            this.isMouse = !!("onmousemove" in window),
            this.isMobile = detectmob(),
            this.landscapeOrientation = window.innerWidth / window.innerHeight > 1;
    var a = navigator.userAgent.toLowerCase();
    new RegExp("msie ([0-9]{1,}[.0-9]{0,})"),
            this.isTablet = device.tablet(),
            this.isIpad = device.ipad(),
            this.isOpera = !!window.opera || a.indexOf("opera") >= 0,
            this.isFirefox = "undefined" != typeof InstallTrigger,
            this.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
            this.isChrome = !!window.chrome,
            this.isIE = !1,
            this.isTriangle = !0,
            this.ieVersion = ie_ver();
},
        marginLeft = 400,
        marginLeftDiamond = 50,
        marginRight = 300,
        marginInsLeft = 47,
        marginInsLeft2 = 44,
        footerHeight = 75,
        loader, soundLoop, loadMusic;
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function (a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (a.disabled)
                return !0;
            break;
        case "input":
            if (this.deviceIsIOS && "file" === a.type || a.disabled)
                return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(a.className)
}, FastClick.prototype.needsFocus = function (a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case "textarea":
        case "select":
            return !0;
        case "input":
            switch (a.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !a.disabled && !a.readOnly;
        default:
            return /\bneedsfocus\b/.test(a.className)
    }
}, FastClick.prototype.sendClick = function (a, b) {
    "use strict";
    var c, d;
    document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
}, FastClick.prototype.focus = function (a) {
    "use strict";
    var b;
    this.deviceIsIOS && a.setSelectionRange ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
}, FastClick.prototype.updateScrollParent = function (a) {
    "use strict";
    var b, c;
    if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
        c = a;
        do {
            if (c.scrollHeight > c.offsetHeight) {
                b = c, a.fastClickScrollParent = c;
                break
            }
            c = c.parentElement
        } while (c)
    }
    b && (b.fastClickLastScrollTop = b.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function (a) {
    "use strict";
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
}, FastClick.prototype.onTouchStart = function (a) {
    "use strict";
    var b, c, d;
    if (a.targetTouches.length > 1)
        return !0;
    if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], this.deviceIsIOS) {
        if (d = window.getSelection(), d.rangeCount && !d.isCollapsed)
            return !0;
        if (!this.deviceIsIOS4) {
            if (c.identifier === this.lastTouchIdentifier)
                return a.preventDefault(), !1;
            this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function (a) {
    "use strict";
    var b = a.changedTouches[0],
            c = this.touchBoundary;
    return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
}, FastClick.prototype.findControl = function (a) {
    "use strict";
    return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function (a) {
    "use strict";
    var b, c, d, e, f, g = this.targetElement;
    if (this.touchHasMoved(a) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick)
        return !0;
    if (a.timeStamp - this.lastClickTime < 200)
        return this.cancelNextClick = !0, !0;
    if (this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
        if (b = this.findControl(g)) {
            if (this.focus(g), this.deviceIsAndroid)
                return !1;
            g = b
        }
    } else if (this.needsFocus(g))
        return a.timeStamp - c > 100 || this.deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.deviceIsIOS4 && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
    return this.deviceIsIOS && !this.deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
}, FastClick.prototype.onTouchCancel = function () {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function (a) {
    "use strict";
    return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0 : !0
}, FastClick.prototype.onClick = function (a) {
    "use strict";
    var b;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
}, FastClick.prototype.destroy = function () {
    "use strict";
    var a = this.layer;
    this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function (a) {
    "use strict";
    var b;
    if ("undefined" == typeof window.ontouchstart)
        return !0;
    if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
        if (!FastClick.prototype.deviceIsAndroid)
            return !0;
        if (b = document.querySelector("meta[name=viewport]"), b && -1 !== b.content.indexOf("user-scalable=no"))
            return !0
    }
    return "none" === a.style.msTouchAction ? !0 : !1
}, FastClick.attach = function (a) {
    "use strict";
    return new FastClick(a)
}, "undefined" != typeof define && define.amd ? define(function () {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
var Scroller = new function () {
    this.scroller = null, this.offsetX, this.offsetY, this.targetX = 0, this.targetY = 0, this.targetYTmp = 0;
    var d, e, x, D, G, H, J, a = !1,
            b = 0,
            c = 0,
            h = 0,
            i = 0,
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 3e-14,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            w = 0,
            y = !1,
            z = !1,
            A = 0,
            B = 0,
            C = 0,
            E = !1,
            F = this,
            I = "A",
            K = Modernizr.csstransforms3d;
    this.init = function (a, b, c) {
        console.log("okEJ"), this.scroller = a, G = b, H = c ? "touch" : "mouse", B = this.scroller.clientHeight, A = this.scroller.clientWidth, this.addEventHandlers(H), $(this.scroller).bind(this._dragStartEvt, this._dragStartCB), this.setElementTransform(this.scroller, "1px", "0px"), this.animate()
    }, this.changeOrientation = function () {
        B = this.scroller.clientHeight, A = this.scroller.clientWidth
    }, this.PreventSelection = function (a) {
        a.preventDefault()
    }, this.OnMouseLost = function (a) {
        this.OnMouseUp(a)
    }, this.OnMouseDown = function (f, g, h) {
        TweenLite.killTweensOf(Scroller), J = null, f.target.nodeName === I && (J = f.target), b = g, c = h, t = 0, u = 0, r = 0, s = 0, D = (new Date).getTime(), d = l, e = m, a = !0, E = !1, this.enableTracking(), f.preventDefault()
    }, this.OnMouseMove = function (f, g, h) {
        if (a) {
            var i = (new Date).getTime(),
                    j = g,
                    k = h,
                    n = j - b,
                    o = k - c;
            if (b = j, c = k, D = i, "y" == G) {
                m -= m > 0 && m < B - PBISite.browser_height ? o : o / 3;
                var p = m - e;
                e = m;
                var q = Math.abs(p);
                s += .3 * (q - s), x = 0 > p ? -1 : 1
            } else {
                l -= l > 0 && l < A - PBISite.browser_width ? n : n / 3;
                var t = l - d;
                d = l;
                var u = Math.abs(t);
                r += .3 * (u - r), w = 0 > t ? -1 : 1
            }
            E = !0
        }
    }, this.OnMouseUp = function () {
        if (a) {
            a = !1, t = Math.abs(r), u = Math.abs(s), y = !0, z = !0;
            var e = (new Date).getTime(),
                    f = e - D;
            f = Math.max(10, f), D = 0, r *= 1 - Math.min(1, Math.max(0, f / 100)), s *= 1 - Math.min(1, Math.max(0, f / 100))
        }
        return b = 0, c = 0, this.disableTracking(), E || null == J || F.onItemClicked(J), E ? !1 : void 0
    }, this.onItemClicked = function () {}, this.getX = function () {
        return h
    }, this.getY = function () {
        return i
    }, this.draw = function () {
        this.update()
    }, this.update = function () {
        l = this.targetX;
        var a = .1,
                b = (l - o) * a;
        o += b, h = Math.round(-o), z && (m += s * x, s *= .9, m || (m = 0), C > m ? (s = 0, m = C, z = !1) : m > B - PBISite.browser_height && (s = 0, m = B - PBISite.browser_height, z = !1), .01 > s && (z = !1, s = 0)), n = this.targetY;
        var a = .1,
                c = (n - q) * a;
        q += c, j = Math.round(-q / 30);
        var a = .6,
                d = (m - p) * a;
        p += d, i = Math.round(-p) + j, this.targetYTmp = m, K ? (this.setElementTransform(this.scroller, Math.round(h / 30) + "px", i + "px"), this.setElementTransform(PBISite.scrollElement, Math.round(h / 30) + "px", i + "px"), this.setElementTransform(PBISite.scrollElement2, Math.round(h / 30) + "px", i + "px")) : (this.set2dTransform(this.scroller, h / 30 + "px", i + "px"), this.set2dTransform(PBISite.scrollElement, Math.round(h / 30) + "px", i + "px"), this.set2dTransform(PBISite.scrollElement2, Math.round(h / 30) + "px", i + "px")), scrollClicked = !1, this.offsetX = h, this.offsetY = i
    }, this.set2dTransform = function (a, b, c) {
        var d = "translate(" + b + "," + c + ")";
        a.style.transform = d, a.style.WebkitTransform = d, a.style.msTransform = d, a.style.MozTransform = d
    }, this.setElementTransform = function (a, b, c) {
        var d = "translate3d(" + b + "," + c + ", 0px)";
        a.style.transform = d, a.style.WebkitTransform = d
    }, this.animate = function () {
        Scroller.draw(), requestAnimFrame(Scroller.animate)
    }, this.enableTracking = function () {
        $(this.scroller).bind(this._dragMoveEvt, this._dragMoveCB), $(this.scroller).bind(this._dragStopEvt, this._dragStopCB)
    }, this.disableTracking = function () {
        $(this.scroller).unbind(this._dragMoveEvt, this._dragMoveCB), $(this.scroller).unbind(this._dragStopEvt, this._dragStopCB)
    }, this.addEventHandlers = function (a) {
        "mouse" === a ? (console.log("ADD MOUSE"), this._dragStartEvt = "mousedown", this._dragStartCB = function (a) {
            return F.OnMouseDown(a, a.clientX, a.clientY)
        }, this._dragMoveEvt = "mousemove", this._dragMoveCB = function (a) {
            return console.log("asdasdasd"), F.OnMouseMove(a, a.clientX, a.clientY)
        }, this._dragStopEvt = "mouseup", this._dragStopCB = function (a) {
            return F.OnMouseUp(a)
        }, this._dragOutEvt = "mouseout", this._dragOutCB = function (a) {
            return F.OnMouseUp(a)
        }, $(window).bind(this._dragOutEvt, this._dragOutCB, !0), $("body").bind(this._dragOutEvt, this._dragOutCB, !0), $("document").bind("mousedown", this.PreventSelection)) : (this._dragStartEvt = "touchstart", this._dragStartCB = function (a) {
            var b = a.touches[0];
            return F.OnMouseDown(a, b.pageX, b.pageY)
        }, this._dragMoveEvt = "touchmove", this._dragMoveCB = function (a) {
            var b = a.touches[0];
            return F.OnMouseMove(a, b.pageX, b.pageY)
        }, this._dragStopEvt = "touchend", this._dragStopCB = function (a) {
            return F.OnMouseUp(a)
        })
    }, this.resize = function () {
        this.scroller && (B = this.scroller.clientHeight, A = this.scroller.clientWidth, console.log(this.scroller.clientHeight))
    }, this.targetYUpdate = function () {
        m = this.targetYTmp
    }, this.targetYUpdateTmp = function () {
        this.targetYTmp = m
    }
};
!function (a) {
    a.viewportSize = {}, a.viewportSize.getHeight = function () {
        return b("Height")
    }, a.viewportSize.getWidth = function () {
        return b("Width")
    };
    var b = function (b) {
        var c, d = b.toLowerCase(),
                e = a.document,
                f = e.documentElement;
        if (void 0 === a["inner" + b])
            c = f["client" + b];
        else if (a["inner" + b] != f["client" + b]) {
            var g = e.createElement("body");
            g.id = "vpw-test-b", g.style.cssText = "overflow:scroll";
            var h = e.createElement("div");
            h.id = "vpw-test-d", h.style.cssText = "position:absolute;top:-1000px", h.innerHTML = "<style>@media(" + d + ":" + f["client" + b] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>", g.appendChild(h), f.insertBefore(g, e.head), c = 7 == h["offset" + b] ? f["client" + b] : a["inner" + b], f.removeChild(g)
        } else
            c = a["inner" + b];
        return c
    }
}(this), window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        return window.setTimeout(a, 1e3 / 60)
    }
}(), window.log = function () {
    log.history = log.history || [], log.history.push(arguments), arguments.callee = arguments.callee.caller, this.console && console.log(Array.prototype.slice.call(arguments))
},
        function (a) {
            function b() {}
            for (var d, c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","); d = c.pop(); )
                a[d] = a[d] || b
        }(window.console = window.console || {});