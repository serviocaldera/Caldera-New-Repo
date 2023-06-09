!(function (e) {
  function t(t) {
    for (
      var o, n, r = t[0], l = t[1], d = t[2], u = 0, p = [];
      u < r.length;
      u++
    )
      (n = r[u]),
        Object.prototype.hasOwnProperty.call(a, n) && a[n] && p.push(a[n][0]),
        (a[n] = 0);
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    for (c && c(t); p.length; ) p.shift()();
    return s.push.apply(s, d || []), i();
  }
  function i() {
    for (var e, t = 0; t < s.length; t++) {
      for (var i = s[t], o = !0, r = 1; r < i.length; r++) {
        var l = i[r];
        0 !== a[l] && (o = !1);
      }
      o && (s.splice(t--, 1), (e = n((n.s = i[0]))));
    }
    return e;
  }
  var o = {},
    a = { 2: 0 },
    s = [];
  function n(t) {
    if (o[t]) return o[t].exports;
    var i = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = o),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "");
  var r = (window.shopifySlateJsonp = window.shopifySlateJsonp || []),
    l = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var d = 0; d < r.length; d++) t(r[d]);
  var c = l;
  s.push([51, 0]), i();
})(
  Array(51).concat([
    function (e, t, i) {
      "use strict";
      i(52), i(53), i(54), i(55), i(7), i(56), i(57);
      var o = i(30),
        a = (i(166), O(i(58))),
        s = O(i(59)),
        n = O(i(60)),
        r = O(i(61)),
        l = O(i(62)),
        d = O(i(63)),
        c = O(i(64)),
        u = O(i(65)),
        p = O(i(66)),
        f = O(i(67)),
        m = O(i(68)),
        w = O(i(107)),
        _ = O(i(108)),
        v = O(i(109)),
        h = O(i(110)),
        g = O(i(111)),
        q = O(i(113)),
        S = O(i(114)),
        z = O(i(115)),
        C = O(i(116)),
        k = O(i(117)),
        b = O(i(118)),
        T = O(i(119)),
        y = O(i(120)),
        x = O(i(121)),
        P = O(i(122)),
        F = O(i(124)),
        M = O(i(125)),
        I = O(i(126)),
        A = O(i(127)),
        B = O(i(128)),
        E = O(i(129)),
        L = O(i(130));
      function O(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (0, o.focusHash)(),
        (0, o.bindInPageLinks)(),
        (0, a.default)(),
        (0, s.default)(),
        (0, n.default)(),
        (0, r.default)(),
        (0, l.default)(),
        (0, d.default)(),
        (0, c.default)(),
        (0, u.default)(),
        (0, p.default)(),
        (0, f.default)(),
        (0, m.default)(),
        (0, w.default)(),
        (0, _.default)(),
        (0, v.default)(),
        (0, h.default)(),
        (0, g.default)(),
        (0, q.default)(),
        (0, S.default)(),
        (0, z.default)(),
        (0, C.default)(),
        (0, k.default)(),
        (0, b.default)(),
        (0, T.default)(),
        (0, y.default)(),
        (0, x.default)(),
        (0, P.default)(),
        (0, F.default)(),
        (0, M.default)(),
        (0, I.default)(),
        (0, A.default)(),
        (0, B.default)(),
        (0, E.default)(),
        (0, L.default)(),
        window.Accordions.init(),
        window.AOS.init(),
        window.Cart.init(),
        window.ColourBlockParallax.init(),
        window.Customer.init(),
        window.Dropdown.init(),
        window.ErrorPage.init(),
        window.FAQAccordion.init(),
        window.FAQMobileContact.init(),
        window.FreeSampleSale.init(),
        window.IngredientsAccordion.init(),
        window.InlineCart.init(),
        window.Instagram.init(),
        window.MagnificPopup.init(),
        window.MobileImageCheck.init(),
        window.Modal.init(),
        window.Navigation.init(),
        window.Overlay.init(),
        window.ProductDetailParallax.init(),
        window.ProductImages.init(),
        window.ProductSubscription.init(),
        window.RetinaImages.init(),
        window.Scroll.init(),
        window.Sliders.init(),
        window.StickyContent.init(),
        window.StoryPage.init(),
        window.SubscriptionPage.init(),
        window.TestimonialSwitcher.init(),
        window.TextParallax.init(),
        window.YotpoReviews.init(),
        window.Quiz.init();
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, i) {},
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {},
            o = function () {
              i.toggle.removeClass("is-open"), i.content.removeClass("is-open");
            };
          e.init = function () {
            (i.toggle = t("[data-accordion-toggle]")),
              (i.content = t("[data-accordion-content]")),
              (i.togglePDP = t("[data-pdp-accordion-toggle]")),
              (i.contentPDP = t("[data-pdp-accordion-content]")),
              i.toggle.on("click", function (e) {
                t(window).width() < 992 &&
                  (e.preventDefault(),
                  (function (e) {
                    e.hasClass("is-open")
                      ? o()
                      : (function (e) {
                          i.toggle.removeClass("is-open"),
                            i.content.removeClass("is-open"),
                            e.addClass("is-open"),
                            e.next(i.content).addClass("is-open");
                        })(e);
                  })(t(this)));
              }),
              t(window).on("resize", function () {
                o();
              }),
              i.togglePDP.on("click", function (e) {
                e.preventDefault(), t(this).parent().toggleClass("is-open");
              });
          };
        })((window.Accordions = window.Accordions || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          e.init = function () {
            t(document).on("click", "[data-animate-scroll]", function (e) {
              e.preventDefault(),
                t("html, body").animate(
                  { scrollTop: t(t.attr(this, "href")).offset().top },
                  500
                );
            });
          };
        })((window.AnimateToScroll = window.AnimateToScroll || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {},
            o = function (e) {
              return (parseFloat(e) != parseInt(e) || isNaN(e)) && (e = 1), e;
            };
          e.init = function () {
            (i.cartQtyButton = t("[data-item-quantity-change]")),
              (i.cartQty = t("[data-item-quantity]")),
              (i.cartForm = t("[data-cart-form]")),
              i.cartQtyButton.on("click", function () {
                var e = t(this).siblings("[data-item-quantity]"),
                  a = o(parseInt(e.val().replace(/\D/g, "")));
                t(this).is("[data-item-quantity-plus]")
                  ? (a += 1)
                  : (a -= 1) <= 0 && (a = 0),
                  e.val(a),
                  i.cartForm.attr("action", "cart/update").submit();
              }),
              i.cartQty.on("blur", function () {
                var e = o(parseInt(t(this).val().replace(/\D/g, "")));
                t(this).val(e),
                  i.cartForm.attr("action", "cart/update").submit();
              });
          };
        })((window.Cart = window.Cart || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.ColourBlockParallax = t("[data-colour-block-parallax]")),
              (function () {
                var e = function (e) {
                  var i = e.parent().offset().top - 350,
                    o = 10;
                  if (
                    (null != e.attr("data-parallax-speed") &&
                      (o = e.attr("data-parallax-speed")),
                    t(window).scrollTop() > i &&
                      t(window).scrollTop() < i + t(window).height())
                  ) {
                    var a = (t(window).scrollTop() - i) / o;
                    a < 0 && (a = 0),
                      "up" == e.attr("data-parallax-direction")
                        ? e.css("margin-bottom", a)
                        : e.css("margin-bottom", -1 * a);
                  }
                };
                i.ColourBlockParallax.each(function () {
                  e(t(this));
                }),
                  t(window).on("scroll", function () {
                    i.ColourBlockParallax.each(function () {
                      e(t(this));
                    });
                  });
              })();
          };
        })(
          (window.ColourBlockParallax = window.ColourBlockParallax || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {},
            o = function (e) {
              "show" == e
                ? i.addressNewForm.addClass("active").slideDown(500)
                : i.addressNewForm.removeClass("active").slideUp(500);
            },
            a = function (e, i) {
              "show" == i
                ? t('[data-address-edit-form][data-address-id="' + e + '"]')
                    .addClass("active")
                    .slideDown(500)
                : t('[data-address-edit-form][data-address-id="' + e + '"]')
                    .removeClass("active")
                    .slideUp(500);
            };
          e.init = function () {
            (i.recoverPasswordLink = t("[data-recover-password-trigger]")),
              (i.hideRecoverPasswordLink = t("[data-recover-password-hide]")),
              (i.recoverPasswordForm = t("[data-recover-password]")),
              (i.customerLoginForm = t("[data-customer-login]")),
              (i.addressNew = t("[data-address-new]")),
              (i.addressNewForm = t("[data-address-new-form]")),
              (i.addressNewCancel = t("[data-address-new-cancel]")),
              (i.addressEdit = t("[data-address-edit]")),
              (i.addressEditForm = t("[data-address-edit-form]")),
              (i.addressEditCancel = t("[data-address-edit-cancel]")),
              (i.mobileNavigation = t("[data-account-mobile-navigation]")),
              (i.accountError = t(".accountError")),
              (i.togglePassword = t(".togglePassword")),
              "#recover" == window.location.hash &&
                (i.customerLoginForm.hide(0), i.recoverPasswordForm.show(0)),
              i.recoverPasswordLink.on("click", function (e) {
                e.preventDefault(),
                  i.recoverPasswordForm.show(),
                  i.customerLoginForm.hide(),
                  i.accountError.hide(),
                  t("html, body").animate(
                    { scrollTop: t(".accountForgot").offset().top - 250 },
                    10
                  );
              }),
              i.hideRecoverPasswordLink.on("click", function (e) {
                i.recoverPasswordForm.hide(),
                  i.customerLoginForm.show(),
                  i.accountError.hide();
              }),
              i.addressNew.on("click", function () {
                o("show");
              }),
              i.addressNewCancel.on("click", function () {
                o("hide");
              }),
              i.addressEdit.on("click", function () {
                var e = t(this).attr("data-address-id");
                a(e, "show");
              }),
              i.addressEditCancel.on("click", function () {
                var e = t(this).attr("data-address-id");
                a(e, "hide");
              }),
              i.mobileNavigation.on("change", function () {
                window.location.href = t(this).val();
              }),
              setTimeout(function () {
                t("input:-internal-autofill-selected").addClass("focus"),
                  t("input:-internal-autofill-selected")
                    .parents(".accountForm__fieldMain")
                    .find("label")
                    .addClass("focus");
              }, 1e3),
              t(".accountForm__fieldMain input").blur(function () {
                t(this).val()
                  ? (t(this).addClass("focus"),
                    t(this)
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .addClass("focus"))
                  : (t(this).removeClass("focus"),
                    t(this)
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .removeClass("focus"));
              }),
              t(".accountForm__fieldMain input").focus(function () {
                t(this).addClass("focus"),
                  t(this)
                    .parents(".accountForm__fieldMain")
                    .find("label")
                    .addClass("focus");
              }),
              t(".accountForm__fieldMain input").each(function () {
                t(this).val()
                  ? (t(this).addClass("focus"),
                    t(this)
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .addClass("focus"))
                  : (t(this).removeClass("focus"),
                    t(this)
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .removeClass("focus"));
              }),
              t(".accountForm__fields input").on("click", function () {
                t(this).addClass("focus"),
                  t(this)
                    .parents(".accountForm__fieldMain")
                    .find("label")
                    .addClass("focus");
              }),
              t(".accountForgot .errors").length > 0 &&
                (t("#RecoverEmail")
                  .parents(".accountForm__fields")
                  .addClass("error"),
                t("#RecoverEmail")
                  .parents(".accountForm__fieldMain")
                  .find(".accountError__message")
                  .addClass("is-show"),
                t("#RecoverEmail")
                  .parents(".accountForm__fieldMain")
                  .find(".accountError__message")
                  .text("Invalid Email Address."),
                t("#RecoverEmail")
                  .parents(".accountForm__fieldMain")
                  .find("label")
                  .addClass("focus"),
                t("#RecoverEmail")
                  .parents(".accountForm__fieldMain")
                  .find("input")
                  .addClass("focus")),
              t(".togglePassword").click(function () {
                t(this).toggleClass("is-show");
                var e = t(this)
                  .parents(".accountForm__fields")
                  .find(".password");
                "password" == e.attr("type")
                  ? e.attr("type", "text")
                  : e.attr("type", "password");
              }),
              t("#signin-btn").on("click", function () {
                var e = document.getElementById("CustomerEmail"),
                  i = document.getElementById("CustomerPassword");
                return "" == e.value
                  ? (e.focus(),
                    t("#CustomerEmail")
                      .parents(".accountForm__fields")
                      .addClass("error"),
                    t("#CustomerEmail")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .addClass("is-show"),
                    t("#CustomerEmail")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .text("Invalid Email Address."),
                    t("#CustomerEmail")
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .addClass("focus"),
                    t("#CustomerEmail")
                      .parents(".accountForm__fieldMain")
                      .find("input")
                      .addClass("focus"),
                    !1)
                  : (t("#CustomerEmail")
                      .parents(".accountForm__fields")
                      .removeClass("error"),
                    t("#CustomerEmail")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .removeClass("is-show"),
                    e.value.indexOf("@", 0) < 0
                      ? (e.focus(),
                        t("#CustomerEmail")
                          .parents(".accountForm__fields")
                          .addClass("error"),
                        t("#CustomerEmail")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .addClass("is-show"),
                        t("#CustomerEmail")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .text("Invalid Email Address."),
                        t("#CustomerEmail")
                          .parents(".accountForm__fieldMain")
                          .find("label")
                          .addClass("focus"),
                        t("#CustomerEmail")
                          .parents(".accountForm__fieldMain")
                          .find("input")
                          .addClass("focus"),
                        !1)
                      : (t("#CustomerEmail")
                          .parents(".accountForm__fields")
                          .removeClass("error"),
                        t("#CustomerEmail")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .removeClass("is-show"),
                        e.value.indexOf(".", 0) < 0
                          ? (e.focus(),
                            t("#CustomerEmail")
                              .parents(".accountForm__fields")
                              .addClass("error"),
                            t("#CustomerEmail")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .addClass("is-show"),
                            t("#CustomerEmail")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .text("Invalid Email Address."),
                            t("#CustomerEmail")
                              .parents(".accountForm__fieldMain")
                              .find("label")
                              .addClass("focus"),
                            t("#CustomerEmail")
                              .parents(".accountForm__fieldMain")
                              .find("input")
                              .addClass("focus"),
                            !1)
                          : (t("#CustomerEmail")
                              .parents(".accountForm__fields")
                              .removeClass("error"),
                            t("#CustomerEmail")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .removeClass("is-show"),
                            "" == i.value
                              ? (i.focus(),
                                t("#CustomerPassword")
                                  .parents(".accountForm__fields")
                                  .addClass("error"),
                                t("#CustomerPassword")
                                  .parents(".accountForm__fieldMain")
                                  .find(".accountError__message")
                                  .addClass("is-show"),
                                t("#CustomerPassword")
                                  .parents(".accountForm__fieldMain")
                                  .find(".accountError__message")
                                  .text("Enter a Password."),
                                t("#CustomerPassword")
                                  .parents(".accountForm__fieldMain")
                                  .find("label")
                                  .addClass("focus"),
                                t("#CustomerPassword")
                                  .parents(".accountForm__fieldMain")
                                  .find("input")
                                  .addClass("focus"),
                                !1)
                              : (t("#CustomerPassword")
                                  .parents(".accountForm__fields")
                                  .removeClass("error"),
                                t("#CustomerPassword")
                                  .parents(".accountForm__fieldMain")
                                  .find(".accountError__message")
                                  .removeClass("is-show"),
                                !0))));
              }),
              t("#forgot-btn").on("click", function () {
                var e = document.getElementById("RecoverEmail");
                return "" == e.value
                  ? (e.focus(),
                    t("#RecoverEmail")
                      .parents(".accountForm__fields")
                      .addClass("error"),
                    t("#RecoverEmail")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .addClass("is-show"),
                    t("#RecoverEmail")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .text("Invalid Email Address."),
                    t("#RecoverEmail")
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .addClass("focus"),
                    t("#RecoverEmail")
                      .parents(".accountForm__fieldMain")
                      .find("input")
                      .addClass("focus"),
                    !1)
                  : (t("#RecoverEmail")
                      .parents(".accountForm__fields")
                      .removeClass("error"),
                    t("#RecoverEmail")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .removeClass("is-show"),
                    e.value.indexOf("@", 0) < 0
                      ? (e.focus(),
                        t("#RecoverEmail")
                          .parents(".accountForm__fields")
                          .addClass("error"),
                        t("#RecoverEmail")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .addClass("is-show"),
                        t("#RecoverEmail")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .text("Invalid Email Address."),
                        t("#RecoverEmail")
                          .parents(".accountForm__fieldMain")
                          .find("label")
                          .addClass("focus"),
                        t("#RecoverEmail")
                          .parents(".accountForm__fieldMain")
                          .find("input")
                          .addClass("focus"),
                        !1)
                      : (t("#RecoverEmail")
                          .parents(".accountForm__fields")
                          .removeClass("error"),
                        t("#RecoverEmail")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .removeClass("is-show"),
                        e.value.indexOf(".", 0) < 0
                          ? (e.focus(),
                            t("#RecoverEmail")
                              .parents(".accountForm__fields")
                              .addClass("error"),
                            t("#RecoverEmail")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .addClass("is-show"),
                            t("#RecoverEmail")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .text("Invalid Email Address."),
                            t("#RecoverEmail")
                              .parents(".accountForm__fieldMain")
                              .find("label")
                              .addClass("focus"),
                            t("#RecoverEmail")
                              .parents(".accountForm__fieldMain")
                              .find("input")
                              .addClass("focus"),
                            !1)
                          : (t("#RecoverEmail")
                              .parents(".accountForm__fields")
                              .removeClass("error"),
                            t("#RecoverEmail")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .removeClass("is-show"),
                            !0)));
              }),
              t("#signup-btn").on("click", function () {
                var e = document.getElementById("FirstName"),
                  i = document.getElementById("LastName"),
                  o = document.getElementById("Email"),
                  a = document.getElementById("CreatePassword");
                return "" == e.value
                  ? (e.focus(),
                    t("#FirstName")
                      .parents(".accountForm__fields")
                      .addClass("error"),
                    t("#FirstName")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .addClass("is-show"),
                    t("#FirstName")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .text("Enter your First Name."),
                    t("#FirstName")
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .addClass("focus"),
                    t("#FirstName")
                      .parents(".accountForm__fieldMain")
                      .find("input")
                      .addClass("focus"),
                    !1)
                  : (t("#FirstName")
                      .parents(".accountForm__fields")
                      .removeClass("error"),
                    t("#FirstName")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .removeClass("is-show"),
                    "" == i.value
                      ? (i.focus(),
                        t("#LastName")
                          .parents(".accountForm__fields")
                          .addClass("error"),
                        t("#LastName")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .addClass("is-show"),
                        t("#LastName")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .text("Enter your Last Name."),
                        t("#LastName")
                          .parents(".accountForm__fieldMain")
                          .find("label")
                          .addClass("focus"),
                        t("#LastName")
                          .parents(".accountForm__fieldMain")
                          .find("input")
                          .addClass("focus"),
                        !1)
                      : (t("#LastName")
                          .parents(".accountForm__fields")
                          .removeClass("error"),
                        t("#LastName")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .removeClass("is-show"),
                        "" == o.value
                          ? (o.focus(),
                            t("#Email")
                              .parents(".accountForm__fields")
                              .addClass("error"),
                            t("#Email")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .addClass("is-show"),
                            t("#Email")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .text("Invalid Email Address."),
                            t("#Email")
                              .parents(".accountForm__fieldMain")
                              .find("label")
                              .addClass("focus"),
                            t("#Email")
                              .parents(".accountForm__fieldMain")
                              .find("input")
                              .addClass("focus"),
                            !1)
                          : (t("#Email")
                              .parents(".accountForm__fields")
                              .removeClass("error"),
                            t("#Email")
                              .parents(".accountForm__fieldMain")
                              .find(".accountError__message")
                              .removeClass("is-show"),
                            o.value.indexOf("@", 0) < 0
                              ? (o.focus(),
                                t("#Email")
                                  .parents(".accountForm__fields")
                                  .addClass("error"),
                                t("#Email")
                                  .parents(".accountForm__fieldMain")
                                  .find(".accountError__message")
                                  .addClass("is-show"),
                                t("#Email")
                                  .parents(".accountForm__fieldMain")
                                  .find(".accountError__message")
                                  .text("Invalid Email Address."),
                                t("#Email")
                                  .parents(".accountForm__fieldMain")
                                  .find("label")
                                  .addClass("focus"),
                                t("#Email")
                                  .parents(".accountForm__fieldMain")
                                  .find("input")
                                  .addClass("focus"),
                                !1)
                              : (t("#Email")
                                  .parents(".accountForm__fields")
                                  .removeClass("error"),
                                t("#Email")
                                  .parents(".accountForm__fieldMain")
                                  .find(".accountError__message")
                                  .removeClass("is-show"),
                                o.value.indexOf(".", 0) < 0
                                  ? (o.focus(),
                                    t("#Email")
                                      .parents(".accountForm__fields")
                                      .addClass("error"),
                                    t("#Email")
                                      .parents(".accountForm__fieldMain")
                                      .find(".accountError__message")
                                      .addClass("is-show"),
                                    t("#Email")
                                      .parents(".accountForm__fieldMain")
                                      .find(".accountError__message")
                                      .text("Invalid Email Address."),
                                    t("#Email")
                                      .parents(".accountForm__fieldMain")
                                      .find("label")
                                      .addClass("focus"),
                                    t("#Email")
                                      .parents(".accountForm__fieldMain")
                                      .find("input")
                                      .addClass("focus"),
                                    !1)
                                  : (t("#Email")
                                      .parents(".accountForm__fields")
                                      .removeClass("error"),
                                    t("#Email")
                                      .parents(".accountForm__fieldMain")
                                      .find(".accountError__message")
                                      .removeClass("is-show"),
                                    "" == a.value
                                      ? (a.focus(),
                                        t("#CreatePassword")
                                          .parents(".accountForm__fields")
                                          .addClass("error"),
                                        t("#CreatePassword")
                                          .parents(".accountForm__fieldMain")
                                          .find(".accountError__message")
                                          .addClass("is-show"),
                                        t("#CreatePassword")
                                          .parents(".accountForm__fieldMain")
                                          .find(".accountError__message")
                                          .text("Enter a Password."),
                                        t("#CreatePassword")
                                          .parents(".accountForm__fieldMain")
                                          .find("label")
                                          .addClass("focus"),
                                        t("#CreatePassword")
                                          .parents(".accountForm__fieldMain")
                                          .find("input")
                                          .addClass("focus"),
                                        !1)
                                      : (t("#CreatePassword")
                                          .parents(".accountForm__fields")
                                          .removeClass("error"),
                                        t("#CreatePassword")
                                          .parents(".accountForm__fieldMain")
                                          .find(".accountError__message")
                                          .removeClass("is-show"),
                                        !0))))));
              }),
              t("#reset-btn").on("click", function () {
                var e = document.getElementById("ResetPassword"),
                  i = document.getElementById("PasswordConfirmation");
                return "" == e.value
                  ? (e.focus(),
                    t("#ResetPassword")
                      .parents(".accountForm__fields")
                      .addClass("error"),
                    t("#ResetPassword")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .addClass("is-show"),
                    t("#ResetPassword")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .text("Enter your Password."),
                    t("#ResetPassword")
                      .parents(".accountForm__fieldMain")
                      .find("label")
                      .addClass("focus"),
                    t("#ResetPassword")
                      .parents(".accountForm__fieldMain")
                      .find("input")
                      .addClass("focus"),
                    !1)
                  : (t("#ResetPassword")
                      .parents(".accountForm__fields")
                      .removeClass("error"),
                    t("#ResetPassword")
                      .parents(".accountForm__fieldMain")
                      .find(".accountError__message")
                      .removeClass("is-show"),
                    "" == i.value
                      ? (i.focus(),
                        t("#PasswordConfirmation")
                          .parents(".accountForm__fields")
                          .addClass("error"),
                        t("#PasswordConfirmation")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .addClass("is-show"),
                        t("#PasswordConfirmation")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .text("Enter your Confirm Password."),
                        t("#PasswordConfirmation")
                          .parents(".accountForm__fieldMain")
                          .find("label")
                          .addClass("focus"),
                        t("#PasswordConfirmation")
                          .parents(".accountForm__fieldMain")
                          .find("input")
                          .addClass("focus"),
                        !1)
                      : (t("#PasswordConfirmation")
                          .parents(".accountForm__fields")
                          .removeClass("error"),
                        t("#PasswordConfirmation")
                          .parents(".accountForm__fieldMain")
                          .find(".accountError__message")
                          .removeClass("is-show"),
                        !0));
              }),
              t(".zoomCall__close").on("click", function () {
                return (
                  t("[data-zoom-call]").hide(), t("[data-book-call]").show(), !1
                );
              }),
              t(".zoomCallBook__btn").on("click", function () {
                return (
                  t("[data-zoom-call]").show(), t("[data-book-call]").hide(), !1
                );
              });
          };
        })((window.Customer = window.Customer || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          e && e.__esModule;
        })(i(0)),
        (t.default = function () {
          !(function (e, t) {
            var i = {};
            e.init = function () {
              (i.Dropdown = t("[data-dropdown]")),
                i.Dropdown.on("click", function () {
                  t(this).hasClass("active")
                    ? t(this).removeClass("active").find("ul").slideUp(300)
                    : t(this).addClass("active").find("ul").slideDown(300);
                }),
                i.Dropdown.on("click", "li", function () {
                  var e = t(this).parents(".dropdown").find("span").text(),
                    i = t(this)
                      .parents(".dropdown")
                      .find("span")
                      .attr("data-handle"),
                    o = t(this).text(),
                    a = t(this).attr("data-handle");
                  t(this)
                    .parents(".dropdown")
                    .find("span")
                    .text(o)
                    .attr("data-handle", a),
                    t(this).text(e).attr("data-handle", i);
                });
            };
          })((window.Dropdown = window.Dropdown || {}), jQuery);
        });
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.Error404 = t("[data-404-back]")),
              i.Error404.on("click", function (e) {
                e.preventDefault(),
                  1 == history.length || 0 == history.length
                    ? (document.location.href = "/")
                    : window.history.back();
              }),
              i.Error404.length > 0 &&
                (console.log(history.length),
                (1 != history.length && 0 != history.length) ||
                  i.Error404.html("Go Home"));
          };
        })((window.ErrorPage = window.ErrorPage || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.FAQAccordion = t("[data-faq-question]")),
              i.FAQAccordion.on("click", function () {
                !(function (e) {
                  e.parent().hasClass("active")
                    ? (e.parent().removeClass("active"), e.next().slideUp(200))
                    : (i.FAQAccordion.parent().removeClass("active"),
                      e
                        .parent()
                        .addClass("active")
                        .siblings()
                        .removeClass("active"),
                      i.FAQAccordion.next().slideUp(200),
                      e.next().slideDown(200));
                })(t(this));
              });
          };
        })((window.FAQAccordion = window.FAQAccordion || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.FAQMobileContact = t("[data-faq-mobile-contact]")),
              (i.FAQContent = t("[data-faq-content]")),
              (function () {
                var e = function () {
                  if (
                    i.FAQMobileContact.length > 0 &&
                    t(window).width() < 992
                  ) {
                    var e = i.FAQContent.outerHeight(),
                      o = i.FAQContent.offset().top - t(window).height() + e;
                    t(window).scrollTop() > o
                      ? i.FAQMobileContact.is(":visible") &&
                        i.FAQMobileContact.fadeOut(300)
                      : i.FAQMobileContact.is(":visible") ||
                        i.FAQMobileContact.fadeIn(300);
                  }
                };
                e(),
                  t(window).on("scroll", function () {
                    e();
                  });
              })();
          };
        })(
          (window.FAQMobileContact = window.FAQMobileContact || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e) {
          var t;
          function i(i) {
            i.clientY > 0 ||
              (t && clearTimeout(t),
              e.exitIntent.settings.sensitivity <= 0
                ? e.event.trigger("exitintent")
                : (t = setTimeout(function () {
                    (t = null), e.event.trigger("exitintent");
                  }, e.exitIntent.settings.sensitivity)));
          }
          function o() {
            t && (clearTimeout(t), (t = null));
          }
          (e.exitIntent = function (t, a) {
            if (
              ((e.exitIntent.settings = e.extend(e.exitIntent.settings, a)),
              "enable" == t)
            )
              e(window).mouseleave(i), e(window).mouseenter(o);
            else {
              if ("disable" != t)
                throw "Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
              o(),
                e(window).unbind("mouseleave", i),
                e(window).unbind("mouseenter", o);
            }
          }),
            (e.exitIntent.settings = { sensitivity: 300 });
        })(o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(i(31)),
        a = n(i(32)),
        s = n(i(0));
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function () {
        !(function (e, t) {
          var i = {},
            s = {},
            n = (function () {
              var e = (0, a.default)(
                o.default.mark(function e(t) {
                  return o.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              t.preventDefault(),
                              i.button.attr("disabled", !0),
                              (e.next = 5),
                              c()
                            );
                          case 5:
                            return (e.next = 7), l();
                          case 7:
                            setTimeout(function () {
                              r();
                            }, 1500),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              i.button.attr("disabled", !1);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    void 0,
                    [[0, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            r =
              ((0, a.default)(
                o.default.mark(function e() {
                  return o.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    void 0
                  );
                })
              ),
              function () {
                window.location =
                  "/cart/" +
                  s.variantId +
                  ":1?discount=" +
                  s.discountCode +
                  "&email=" +
                  encodeURIComponent(i.emailInput.val()) +
                  "&checkout";
              }),
            l = (function () {
              var e = (0, a.default)(
                o.default.mark(function e() {
                  return o.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (s.variantId && "" !== s.variantId) {
                              e.next = 2;
                              break;
                            }
                            throw new Error("Product data missing");
                          case 2:
                            if (s.discountCode && "" !== s.discountCode) {
                              e.next = 4;
                              break;
                            }
                            throw new Error("Discount data missing");
                          case 4:
                            return e.abrupt("return", s);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    void 0
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            d = function (e) {
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                String(e).toLowerCase()
              );
            },
            c = (function () {
              var e = (0, a.default)(
                o.default.mark(function e() {
                  var a;
                  return o.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              0 !=
                              (a = i.emailInput.val()).trim().split("").length
                            ) {
                              e.next = 3;
                              break;
                            }
                            throw new Error("Email is required");
                          case 3:
                            if (d(a)) {
                              e.next = 5;
                              break;
                            }
                            throw new Error("Invalid Email");
                          case 5:
                            return e.abrupt(
                              "return",
                              t
                                .post(
                                  "https://a.klaviyo.com/ajax/subscriptions/subscribe",
                                  { g: s.listId, $email: a }
                                )
                                .done(function (e) {
                                  console.log(e);
                                })
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    void 0
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = function () {
              return "true" === Cookies.get("free-sample-exit-intent");
            };
          e.init = function () {
            (i.container = t("#free-sample-sale")),
              (i.form = i.container.find("form")),
              (i.emailInput = i.container.find("form .email-address input")),
              (i.button = i.container.find('[name="checkout"]')),
              (s.variantId = i.form.find('[name="id"]').val()),
              (s.discountCode = i.form.find('[name="discount"]').val()),
              (s.listId = i.form.find('[name="klavio_id"]').val()),
              i.form.on("submit", n),
              t.exitIntent("enable"),
              t(document).on("MODAL_SHOW", function (e, t) {
                var i = t.name;
                if (u()) return null;
                "free-sample-modal" !== i ||
                  Cookies.set("free-sample-exit-intent", "true", {
                    expires: 1,
                  });
              }),
              t(document).one("exitintent", function () {
                t.exitIntent("disable"),
                  (function () {
                    if (u()) return null;
                    t("[free-sample-modal-exit]").length > 0 &&
                      window.Modal.show("free-sample-modal");
                  })();
              });
          };
        })((window.FreeSampleSale = window.FreeSampleSale || {}), s.default);
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          e.debounce = function (e, t, i) {
            var o = void 0;
            return function () {
              var a = this,
                s = arguments,
                n = i && !o;
              clearTimeout(o),
                (o = setTimeout(function () {
                  (o = null), i || e.apply(a, s);
                }, t)),
                n && e.apply(a, s);
            };
          };
        })((window.Helpers = window.Helpers || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.IngredientsAccordion = t("[data-ingredient-toggle]")),
              i.IngredientsAccordion.on("click", function () {
                t(window).width() < 992 &&
                  (function (e) {
                    e.parent().hasClass("active")
                      ? (e.parent().removeClass("active"),
                        e.next().slideUp(200))
                      : (i.IngredientsAccordion.parent().removeClass("active"),
                        e.parent().addClass("active"),
                        i.IngredientsAccordion.next().slideUp(200),
                        e.next().slideDown(200));
                  })(t(this));
              });
          };
        })(
          (window.IngredientsAccordion = window.IngredientsAccordion || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          (e.update = function (e) {
            t.get("/cart?view=contents", function (e) {
              i.inlineCart.html(e);
            });
          }),
            (e.show = function () {
              i.inlineCart.addClass("is-active");
            }),
            (e.hide = function () {
              i.inlineCart.removeClass("is-active");
            }),
            (e.init = function () {
              (i.inlineCart = t("[data-inline-cart]")),
                (i.lineItemEntryPoint = t("[data-cart-contents]"));
            });
        })((window.InlineCart = window.InlineCart || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          e.init = function () {
            t("body").on(
              "mouseenter",
              ".fs-entry-container:nth-of-type(5n)",
              function () {
                t(".fs-slider-next-button").addClass("active");
              }
            ),
              t("body").on(
                "mouseleave",
                ".fs-entry-container:nth-of-type(5n)",
                function () {
                  t(".fs-slider-next-button").removeClass("active");
                }
              ),
              t("body").on(
                "mouseenter",
                ".fs-entry-container:nth-of-type(5n+1)",
                function () {
                  t(".fs-slider-prev-button").addClass("active");
                }
              ),
              t("body").on(
                "mouseleave",
                ".fs-entry-container:nth-of-type(5n+1)",
                function () {
                  t(".fs-slider-prev-button").removeClass("active");
                }
              );
          };
        })((window.Instagram = window.Instagram || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(i(0));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      a(i(112)),
        (t.default = function () {
          !(function (e, t) {
            var i = {};
            e.init = function () {
              (i.popup = t("[data-popup-trigger]")),
                i.popup.magnificPopup({
                  type: "inline",
                  preloader: !1,
                  removalDelay: 500,
                  focus: "#name",
                  callbacks: {
                    open: function () {
                      this.ev.find("video").trigger("pause"),
                        this.content.find("video").trigger("play");
                    },
                    close: function () {
                      this.content.find("video").trigger("pause"),
                        this.ev.find("video").trigger("play");
                    },
                  },
                });
            };
          })((window.MagnificPopup = window.MagnificPopup || {}), o.default);
        });
    },
    ,
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {},
            o = function (e) {
              var i = e.attr("data-mobile-image"),
                o = e.attr("data-desktop-image");
              -1 === o.indexOf("https:") && (o = "https:" + o),
                -1 === i.indexOf("https:") && (i = "https:" + i),
                t(window).width() < 768
                  ? e.css("background-image") != "url(" + i + ")" &&
                    "https:" != i &&
                    e.css("background-image", "url(" + i + ")")
                  : e.css("background-image") != "url(" + o + ")" &&
                    e.css("background-image", "url(" + o + ")");
            };
          e.init = function () {
            (i.MobileImageCheck = t("[data-mobile-image-check]")),
              i.MobileImageCheck.each(function () {
                var e = t(this);
                o(e),
                  t(window).on("resize", function () {
                    o(e);
                  });
              });
          };
        })(
          (window.MobileImageCheck = window.MobileImageCheck || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          (e.show = function (e) {
            window.Scroll.lock(), i.body.attr("data-active-modal", e);
            var o = t('[data-modal="' + e + '"]');
            o.fadeIn(300, function () {
              o.addClass("modal--active");
            }),
              t(document).trigger("MODAL_SHOW", { name: e });
          }),
            (e.hide = function () {
              return (
                window.Scroll.unlock(),
                i.body.removeAttr("data-active-modal"),
                i.modal.removeClass("modal--active"),
                i.modal.fadeOut(300)
              );
            }),
            (e.init = function () {
              (i.body = t("body")),
                (i.modal = t("[data-modal]")),
                (i.modalShow = t("[data-modal-show]")),
                (i.modalHide = t("[data-modal-hide]")),
                i.modalShow.on("click", function (e) {
                  e.preventDefault(),
                    window.Modal.show(t(this).attr("data-modal-show"));
                }),
                i.modalHide.on("click", function (e) {
                  e.preventDefault(), window.Modal.hide();
                });
            });
        })((window.Modal = window.Modal || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {},
            o = function () {
              t(window).scrollTop() > 100
                ? (i.navigation.addClass("is-opaque"),
                  i.promoBar.addClass("is-opaque"),
                  i.navigation.addClass("is-subnav"))
                : t("body").hasClass("template__product") ||
                  t("body").hasClass("template__page--charity") ||
                  t("body").hasClass("template__product--pdp-combo")
                ? i.navigation.removeClass("is-subnav")
                : (i.navigation.removeClass("is-opaque"),
                  i.promoBar.removeClass("is-opaque"));
            },
            a = function () {
              t("body").hasClass("template__product") ||
                t("body").hasClass("template__product--pdp-combo") ||
                i.promoBar.removeClass("is-opaque"),
                i.navigation.removeClass("is-open"),
                window.Scroll.unlock();
            };
          e.init = function () {
            console.log("init"),
              (i.promoBar = t("[data-promo-bar]")),
              (i.closePromo = t("[data-close-promo]")),
              (i.mobileTrigger = t("[data-mobile-trigger]")),
              (i.mobileDrawer = t("[data-mobile-drawer]")),
              (i.navigation = t("[data-navigation]")),
              (i.header = t("[data-header]")),
              (i.mobileSubnavlink = t("[data-mobile-subnav-link]")),
              (i.mobileSubnav = t("[data-mobile-subnav]")),
              i.mobileTrigger.on("click", function (e) {
                e.preventDefault(),
                  i.navigation.hasClass("is-open")
                    ? a()
                    : (function () {
                        var e = i.header.outerHeight();
                        i.navigation.addClass("is-open"),
                          i.promoBar.addClass("is-opaque"),
                          window.Scroll.lock(),
                          i.mobileDrawer.css("top", e);
                      })();
              }),
              i.closePromo.on("click", function (e) {
                i.promoBar.hide();
                var t = i.header.outerHeight();
                i.mobileDrawer.css("top", t);
              }),
              i.mobileSubnavlink.on("click", function (e) {
                return (
                  t(this).toggleClass("is-open"),
                  t(this)
                    .closest(".nav-mobile__menu-item")
                    .find(".nav-mobileChild")
                    .slideToggle(),
                  !1
                );
              }),
              t(window).on("resize", function () {
                t(window).width() >= 1024 && a();
              }),
              t(window).on("scroll", function () {
                o();
              }),
              t(window).on("resize", function () {
                o();
              }),
              t(document).on(
                "click",
                ".nav-desktopChild__link , .nav-mobileChild__link ",
                function (e) {
                  var o = i.header.outerHeight();
                  if (
                    "" !== this.hash &&
                    window.location.href.indexOf("the-good") > -1
                  ) {
                    a(), e.preventDefault();
                    var s = this.hash;
                    document.documentElement.clientWidth < 768
                      ? t("html, body").animate(
                          { scrollTop: t(s).offset().top + 150 },
                          500
                        )
                      : t("html, body").animate(
                          { scrollTop: t(s).offset().top - o },
                          500
                        );
                  }
                }
              ),
              o();
          };
        })((window.Navigation = window.Navigation || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          (e.show = function () {
            return i.overlay.fadeIn(300);
          }),
            (e.hide = function () {
              return i.overlay.fadeOut(300);
            }),
            (e.toggle = function () {
              return i.overlay.fadeToggle(300);
            }),
            (e.init = function () {
              (i.overlay = t("[data-overlay]")),
                i.overlay.on("click", window.Overlay.hide);
            });
        })((window.Overlay = window.Overlay || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.ProductParallaxContainer = t(
              "[data-product-parallax-container]"
            )),
              (i.ProductParallax = t("[data-product-parallax]")),
              (i.ContentBlock = t("[data-content-block]")),
              (i.ProductParallaxEnd = t("[data-product-parallax-end]")),
              (i.BottleParallax = t("[data-bottle-parallax]")),
              (i.DropletParallax = t("[data-droplet-parallax]")),
              t(window).on("load", function () {
                i.ProductParallax.length > 0 &&
                  (function () {
                    var e = i.ProductParallax.outerHeight(),
                      o = i.ProductParallaxContainer.outerHeight(),
                      a = i.ProductParallaxContainer.offset().top - 350,
                      s = i.ProductParallaxContainer.offset().top + o;
                    if (t(window).width() > 992)
                      var n = s - i.ProductParallaxEnd.height() - 350 - e + 30;
                    else n = s - i.ProductParallaxEnd.height() - 350 - e - 160;
                    var r = i.ContentBlock.first().outerHeight(),
                      l = i.ContentBlock.first().offset().top - 350,
                      d = r + l,
                      c = i.ContentBlock.last().outerHeight(),
                      u = i.ContentBlock.last().offset().top - 350,
                      p = function () {
                        if (t(window).width() > 992) {
                          if (
                            t(window).scrollTop() > a &&
                            t(window).scrollTop() < n
                          )
                            (o = t(window).scrollTop() - l) < 0 && (o = 0),
                              i.ProductParallax.css("top", o);
                          else if (t(window).scrollTop() >= n) {
                            var o = n - l;
                            i.ProductParallax.css("top", o);
                          }
                        } else if (
                          t(window).scrollTop() > d + 450 &&
                          t(window).scrollTop() < n
                        )
                          (o = t(window).scrollTop() - l - 150) < 0 && (o = 0),
                            i.ProductParallax.css("top", o);
                        else if (t(window).scrollTop() >= n) {
                          o = n - l - 150;
                          i.ProductParallax.css("top", o);
                        }
                        if (
                          (t(window).width() > 992
                            ? t(window).scrollTop() > l / 2 &&
                              ((s = (t(window).scrollTop() - l) / (r / 4)) <=
                                1 && s >= 0
                                ? i.ProductParallax.css("opacity", s)
                                : s < 0
                                ? i.ProductParallax.css("opacity", 0)
                                : i.ProductParallax.css("opacity", 1))
                            : t(window).scrollTop() > d + 250 &&
                              ((s =
                                (t(window).scrollTop() - d - 250) / (r / 5)) <=
                                1 && s >= 0
                                ? i.ProductParallax.css("opacity", s)
                                : s < 0
                                ? i.ProductParallax.css("opacity", 0)
                                : i.ProductParallax.css("opacity", 1)),
                          t(window).width() > 992)
                        )
                          t(window).scrollTop() > d && t(window).scrollTop() < n
                            ? ((o = (t(window).scrollTop() - l - e) / 2) < 0 &&
                                (o = 0),
                              i.BottleParallax.css("top", o),
                              i.BottleParallax.css("opacity", 1))
                            : t(window).scrollTop() > d
                            ? ((o = (t(window).scrollTop() - l - e) / 2),
                              (s = 1 - (t(window).scrollTop() - u) / (c / 2)) <=
                                1 && s >= 0
                                ? (i.BottleParallax.css("opacity", s),
                                  i.BottleParallax.show())
                                : s < 0
                                ? (i.BottleParallax.css("opacity", 0),
                                  i.BottleParallax.hide())
                                : (i.BottleParallax.css("opacity", 1),
                                  i.BottleParallax.show()),
                              i.BottleParallax.css("top", o))
                            : i.BottleParallax.css("top", 0);
                        else if (
                          t(window).scrollTop() > d &&
                          t(window).scrollTop() < n
                        )
                          (o = (t(window).scrollTop() - d - e) / 2) < 0 &&
                            (o = 0),
                            i.BottleParallax.css("top", o),
                            i.BottleParallax.css("opacity", 1);
                        else if (t(window).scrollTop() > d) {
                          var s;
                          (o = (t(window).scrollTop() - d - e) / 2),
                            (s = 1 - (t(window).scrollTop() - u) / (c / 2)) <=
                              1 && s >= 0
                              ? (i.BottleParallax.css("opacity", s),
                                i.BottleParallax.show())
                              : s < 0
                              ? (i.BottleParallax.css("opacity", 0),
                                i.BottleParallax.hide())
                              : (i.BottleParallax.css("opacity", 1),
                                i.BottleParallax.show()),
                            i.BottleParallax.css("top", o);
                        } else i.BottleParallax.css("top", 0);
                        t(window).scrollTop() > n
                          ? (s = (t(window).scrollTop() - u) / (c / 3)) <= 1 &&
                            s >= 0
                            ? i.DropletParallax.css("opacity", s)
                            : s < 0
                            ? i.DropletParallax.css("opacity", 0)
                            : i.DropletParallax.css("opacity", 1)
                          : t(window).scrollTop() < n &&
                            i.DropletParallax.css("opacity", 0);
                      };
                    p(),
                      t(window).on("scroll", function () {
                        p();
                      });
                  })();
              });
          };
        })(
          (window.ProductDetailParallax = window.ProductDetailParallax || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.ProductImages = t("[data-product-images]")),
              (i.ProductHero = t("[data-product-hero-image]")),
              t(window).on("load", function () {
                i.ProductImages.on("click", "li", function () {
                  !(function (e) {
                    var t = e.attr("data-image-src");
                    e.hasClass("active") ||
                      (i.ProductImages.find("li").removeClass("active"),
                      e.addClass("active"),
                      i.ProductHero.css(
                        "background-image",
                        'url("' + t + '")'
                      ));
                  })(t(this));
                });
              });
          };
        })((window.ProductImages = window.ProductImages || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.ProductDropdown = t("[data-product-dropdown]")),
              (i.ProductSelect = t("[data-subscription-select]")),
              (i.frequencySelect = t("[data-frequency-selecter]")),
              t("body").on("click", "[data-product-dropdown] li", function () {
                var e = t(this)
                  .parents(".dropdown")
                  .find("span")
                  .attr("data-handle");
                t("[data-subscription-select]").val(e);
              }),
              t("body").on(
                "click",
                "[data-frequency-selecter] .rc_frequencySelecter__item",
                function () {
                  t(this)
                    .parents(".rc_frequencySelecter")
                    .find(".rc_frequencySelecter__item")
                    .removeClass("is-active"),
                    t(this).addClass("is-active");
                  var e = t(this).attr("data-handle");
                  t(".cu-optionsGrid .cu-option").each(function () {
                    t(this)
                      .find(".cu-option__mainText span")
                      .text()
                      .replace(/\D/g, "") == e && t(this).trigger("click");
                  }),
                    t("[data-subscription-select]").val(e);
                }
              );
          };
        })(
          (window.ProductSubscription = window.ProductSubscription || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, i) {
          e.init = function () {
            i(window).on("load", function () {
              !(function () {
                function e(e) {
                  return Array.prototype.slice.call(e);
                }
                function i(e, t) {
                  var i = e.nodeName.toLowerCase(),
                    o = document.createElement("img");
                  o.addEventListener("load", function () {
                    "img" === i
                      ? (function (e) {
                          return (
                            e.hasAttribute("data-no-resize") ||
                              (0 === e.offsetWidth && 0 === e.offsetHeight
                                ? (e.setAttribute("width", e.naturalWidth),
                                  e.setAttribute("height", e.naturalHeight))
                                : (e.setAttribute("width", e.offsetWidth),
                                  e.setAttribute("height", e.offsetHeight))),
                            e
                          );
                        })(e).setAttribute("src", t)
                      : (e.style.backgroundImage = "url(" + t + ")");
                  }),
                    o.setAttribute("src", t),
                    e.setAttribute(p, !0);
                }
                function o(e, t) {
                  var o = (function (e) {
                    var t = parseInt(e, 10);
                    return t > l ? l : t;
                  })(
                    arguments.length <= 2 || void 0 === arguments[2]
                      ? 1
                      : arguments[2]
                  );
                  t && o > 1 && i(e, t.replace(d, "@" + o + "x$1"));
                }
                function a(e, t, o) {
                  l > 1 && i(e, o);
                }
                function s(t) {
                  return t
                    ? "function" == typeof t.forEach
                      ? t
                      : e(t)
                    : "undefined" != typeof document
                    ? e(document.querySelectorAll(u))
                    : [];
                }
                function n(e) {
                  s(e).forEach(function (e) {
                    if (!e.getAttribute(p)) {
                      var t =
                          "img" === e.nodeName.toLowerCase()
                            ? e.getAttribute("src")
                            : (function (e) {
                                return e.style.backgroundImage.replace(c, "$2");
                              })(e),
                        i = e.getAttribute("data-rjs");
                      isNaN(parseInt(i, 10)) ? a(e, 0, i) : o(e, t, i);
                    }
                  });
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = "undefined" != typeof window,
                  l = (r && window.devicePixelRatio) || 1,
                  d = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
                  c = /url\(('|")?([^\)'"]+)('|")?\)/i,
                  u = "[data-rjs]",
                  p = "data-rjs-processed";
                r &&
                  (window.addEventListener("load", n), (window.retinajs = n)),
                  (t.default = n);
              })(),
                retinajs();
            });
          };
        })((window.RetinaImages = window.RetinaImages || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          (e.lock = function (e) {
            t("html, body").addClass("no-scroll");
          }),
            (e.unlock = function (e) {
              t("html, body").removeClass("no-scroll");
            }),
            (e.toggle = function (e) {
              t("html, body").toggleClass("no-scroll");
            }),
            (e.init = function () {});
        })((window.Scroll = window.Scroll || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(i(0));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      a(i(123)),
        (t.default = function () {
          !(function (e, t) {
            var i = {},
              o =
                '<svg viewBox="0 0 15 27" fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icon-arrow-left-reviews"><path d="M12.0018397,13.2302866 L0.84526814,2.08500706 C0.366674393,1.60689772 0.366674393,0.836481724 0.84526814,0.358372383 C1.32358211,-0.119457461 2.09390539,-0.119457461 2.57221936,0.358372383 L14.5956536,12.3696372 C15.0708721,12.8443747 15.0680492,13.6227191 14.5903122,14.0909359 L2.57348823,26.0954714 C2.34378713,26.3337657 2.02915963,26.4619071 1.70607306,26.4619071 C1.38832273,26.4619071 1.07532417,26.3320239 0.84526814,26.1022007 C0.366674393,25.6240914 0.366674393,24.8536754 0.84526814,24.3755661 L12.0018397,13.2302866 Z"></path></g></svg>',
              a =
                '<svg viewBox="0 0 15 27" fill="#3D3D38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icon-arrow-left-reviews"><path d="M12.0018397,13.2302866 L0.84526814,2.08500706 C0.366674393,1.60689772 0.366674393,0.836481724 0.84526814,0.358372383 C1.32358211,-0.119457461 2.09390539,-0.119457461 2.57221936,0.358372383 L14.5956536,12.3696372 C15.0708721,12.8443747 15.0680492,13.6227191 14.5903122,14.0909359 L2.57348823,26.0954714 C2.34378713,26.3337657 2.02915963,26.4619071 1.70607306,26.4619071 C1.38832273,26.4619071 1.07532417,26.3320239 0.84526814,26.1022007 C0.366674393,25.6240914 0.366674393,24.8536754 0.84526814,24.3755661 L12.0018397,13.2302866 Z"></path></g></svg>',
              s = !1,
              n = function () {
                t(window).width() < 640
                  ? 0 == s &&
                    (i.productMobileSlider.length > 0 &&
                      i.productMobileSlider.slick({
                        dots: !0,
                        arrows: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !0,
                        adaptiveHeight: !0,
                      }),
                    i.pressLogoSlider.length > 0 &&
                      i.pressLogoSlider.slick({
                        dots: !0,
                        arrows: !1,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: !0,
                        autoplay: !0,
                        autoplaySpeed: 3500,
                        mobileFirst: !0,
                        pauseOnChange: !0,
                        responsive: [{ breakpoint: 640, settings: "unslick" }],
                      }),
                    (s = !0),
                    i.pressLogoSlider.on("swipe", function (e, t, o) {
                      i.pressLogoSlider.slick("slickSetOption", "autoplay", !1);
                    }))
                  : (1 == s &&
                      (i.productMobileSlider.length > 0 &&
                        i.productMobileSlider.slick("destroy"),
                      i.pressLogoSlider.length > 0 &&
                        i.pressLogoSlider.slick("destroy")),
                    (s = !1));
              };
            e.init = function () {
              (i.testimonialSlider = t("[data-testimonial-slider]")),
                (i.testimonialSliderQuotes = t(
                  "[data-testimonials-slider-quotes]"
                )),
                (i.testimonialSliderLogos = t(
                  "[data-testimonials-slider-logos]"
                )),
                (i.testimonialStorySlider = t(
                  "[data-story-testimonial-slider]"
                )),
                (i.productMobileSlider = t("[data-mobile-product-slider]")),
                (i.pressPageSlider = t("[data-mention-slider-quotes]")),
                (i.pressPageSliderLogos = t("[data-mentions-slider-logos]")),
                (i.mediaPageSlider = t("[data-media-mention-slider-quotes]")),
                (i.mediaPageSliderLogos = t(
                  "[data-media-mentions-slider-logos]"
                )),
                (i.pressLogoSlider = t("[data-press-logo-slider]")),
                (i.pdpPageResult = t("[data-pdp-result-slider]")),
                (i.pdpPageImageSlider = t("[data-pdp-image-slider]")),

                (i.pdpPageImageSliderTest = t("[data-pdp-image-slider-test]")),

                (i.pdpPageSliderThumb = t("[data-pdp-sliderthumb-slider]")),
                (i.pressPopupSlider = t("[data-press-popup-slider]")),
                (i.pdpSkinSliderThumb = t("[data-pdp-skin-slider-thumb]")),
                (i.pdpSkinSlider = t("[data-pdp-skin-slider]")),
                (i.resultReportSlider = t("[data-result-report-slider]")),
                (i.howToQuoteSlider = t("[data-how-to-quote-slider]")),
                (i.scienceManSlider = t("[data-science-man-slider]")),
                (i.scienceManSliderNav = t("[data-science-man-slide-nav]")),
                (i.pdpLinkSlider = t("[data-pdpLinkSlider]")),
                (i.reviewSlider = t("[data-reviewSlider]")),
                (i.reviewHighlightSlider = t("[data-reviewHighlightSlider]")),
                (function () {
                  i.pdpLinkSlider.slick({
                    mobileFirst: !0,
                    dots: !1,
                    slidesToShow: 1,
                    centerMode: !0,
                    centerPadding: "30px",
                    infinite: !0,
                    autoplay: !0,
                    responsive: [{ breakpoint: 640, settings: "unslick" }],
                  }),
                    i.pdpLinkSlider.click(function () {
                      i.pdpLinkSlider.slick("slickPause");
                    });
                  var e = {
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !0,
                    autoplay: !0,
                    autoplaySpeed: 7e3,
                    prevArrow:
                      '<span class="slick-arrow slick-prev">' + o + "</span>",
                    nextArrow:
                      '<span class="slick-arrow slick-next">' + o + "</span>",
                  };
                  i.reviewSlider.slick(e);
                  var s = {
                    mobileFirst: !0,
                    dots: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 7e3,
                    arrows: !0,
                    prevArrow:
                      '<span class="slick-arrows slick-arrows--prev">' +
                      o +
                      "</span>",
                    nextArrow:
                      '<span class="slick-arrows slick-arrows--next">' +
                      o +
                      "</span>",
                    responsive: [{ breakpoint: 1023, settings: "unslick" }],
                  };
                  i.reviewHighlightSlider.slick(s);
                  var n = {
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !1,
                    fade: !0,
                    speed: 0,
                    prevArrow:
                      '<span class="slick-arrow slick-prev">' + o + "</span>",
                    nextArrow:
                      '<span class="slick-arrow slick-next">' + o + "</span>",
                    adaptiveHeight: !0,
                    responsive: [
                      { breakpoint: 768, settings: { dots: !0, arrows: !1 } },
                    ],
                  };
                  i.testimonialSlider.slick(n),
                    i.testimonialStorySlider.slick(n);
                  var r = {
                      dots: !1,
                      arrows: !0,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      asNavFor: i.pressPageSliderLogos,
                      infinite: !0,
                      autoplay: !0,
                      adaptiveHeight: !0,
                      autoplaySpeed: 3500,
                      prevArrow:
                        '<span class="slick-arrow slick-prev slick-prev--press">' +
                        o +
                        "</span>",
                      nextArrow:
                        '<span class="slick-arrow slick-next slick-next--press">' +
                        o +
                        "</span>",
                      pauseOnHover: !0,
                    },
                    l = {
                      dots: !1,
                      arrows: !0,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      asNavFor: i.mediaPageSliderLogos,
                      infinite: !0,
                      autoplay: !0,
                      adaptiveHeight: !1,
                      autoplaySpeed: 3500,
                      prevArrow:
                        '<span class="slick-arrow slick-prev slick-prev--press">' +
                        o +
                        "</span>",
                      nextArrow:
                        '<span class="slick-arrow slick-next slick-next--press">' +
                        o +
                        "</span>",
                      pauseOnHover: !0,
                    },
                    d = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow:
                        document.querySelectorAll("[data-press-mention-logo]")
                          .length || 2,
                      slidesToScroll: 1,
                      focusOnSelect: !0,
                      asNavFor: i.pressPageSlider,
                      infinite: !0,
                      fade: !1,
                      autoplay: !0,
                      autoplaySpeed: 3500,
                      pauseOnHover: !0,
                    },
                    c = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow: 4,
                      slidesToScroll: 4,
                      focusOnSelect: !0,
                      asNavFor: i.mediaPageSlider,
                      infinite: !1,
                      fade: !1,
                      autoplay: !0,
                      autoplaySpeed: 3500,
                      pauseOnHover: !0,
                    };
                  i.pressPageSlider.slick(r),
                    i.pressPageSliderLogos.slick(d),
                    i.mediaPageSlider.slick(l),
                    i.mediaPageSliderLogos.slick(c);
                  var u = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      asNavFor: i.testimonialSliderLogos,
                      infinite: !1,
                      fade: !0,
                      adaptiveHeight: !1,
                      autoplay: !0,
                      autoplaySpeed: 3500,
                      pauseOnHover: !0,
                      prevArrow:
                        '<span class="slick-arrow slick-prev">' + o + "</span>",
                      nextArrow:
                        '<span class="slick-arrow slick-next">' + o + "</span>",
                      responsive: [
                        { breakpoint: 768, settings: { dots: !1, arrows: !0 } },
                      ],
                    },
                    p = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      focusOnSelect: !0,
                      asNavFor: i.testimonialSliderQuotes,
                      infinite: !1,
                      fade: !1,
                      autoplay: !0,
                      autoplaySpeed: 3500,
                      pauseOnHover: !0,
                    };
                  i.testimonialSliderQuotes.slick(u),
                    i.testimonialSliderLogos.slick(p),
                    i.pdpPageResult.slick({
                      dots: !0,
                      arrows: !1,
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            dots: !0,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "60px",
                            infinite: !0,
                          },
                        },
                        {
                          breakpoint: 950,
                          settings: {
                            dots: !0,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "30px",
                            infinite: !0,
                          },
                        },
                        {
                          breakpoint: 850,
                          settings: {
                            dots: !0,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "60px",
                            infinite: !0,
                          },
                        },
                        {
                          breakpoint: 767,
                          settings: {
                            dots: !0,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "30px",
                            infinite: !0,
                          },
                        },
                        {
                          breakpoint: 640,
                          settings: {
                            dots: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "28px",
                            infinite: !1,
                          },
                        },
                      ],
                    });
                  var f = {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: !1,
                      infinite: !0,
                      asNavFor: i.pdpPageSliderThumb,
                      prevArrow:
                        '<span class="slick-arrow slick-prev">' + a + "</span>",
                      nextArrow:
                        '<span class="slick-arrow slick-next">' + a + "</span>",
                    },
                    m = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow: 6,
                      slidesToScroll: 6,
                      infinite: !1,
                      autoplay: !1,
                      asNavFor: i.pdpPageImageSlider,
                      focusOnSelect: !0,
                    },
                    ilic ={
                        dots: true,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 1,
                        centerMode: true,
                        variableWidth: true
                    };
                  i.pdpPageImageSlider.slick(f), i.pdpPageSliderThumb.slick(m),i.pdpPageImageSliderTest.slick(ilic);
                  var w = {
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !0,
                    autoplay: !0,
                    autoplaySpeed: 3500,
                    prevArrow:
                      '<span class="slick-arrow slick-prev slick-prev--press">' +
                      o +
                      "</span>",
                    nextArrow:
                      '<span class="slick-arrow slick-next slick-next--press">' +
                      o +
                      "</span>",
                  };
                  i.pressPopupSlider.slick(w);
                  var _ = {
                      dots: !1,
                      asNavFor: i.pdpSkinSliderThumb,
                      infinite: !1,
                      speed: 100,
                      fade: !0,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      touchMove: !1,
                      swipe: !1,
                      swipeToSlide: !1,
                      draggable: !1,
                      accessibility: !1,
                    },
                    v = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      focusOnSelect: !0,
                      asNavFor: i.pdpSkinSlider,
                      infinite: !1,
                      fade: !1,
                      responsive: [
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "180px",
                            dots: !1,
                            arrows: !1,
                            infinite: !1,
                          },
                        },
                        {
                          breakpoint: 580,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "130px",
                            dots: !1,
                            arrows: !1,
                            infinite: !1,
                          },
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "100px",
                            dots: !1,
                            arrows: !1,
                            infinite: !1,
                          },
                        },
                        {
                          breakpoint: 400,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0,
                            centerPadding: "80px",
                            dots: !1,
                            arrows: !1,
                            infinite: !1,
                          },
                        },
                      ],
                    };
                  i.resultReportSlider.slick({
                    dots: !1,
                    arrows: !1,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !0,
                    adaptiveHeight: !0,
                    responsive: [
                      {
                        breakpoint: 1023,
                        settings: {
                          dots: !1,
                          arrows: !1,
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: !0,
                          adaptiveHeight: !0,
                        },
                      },
                      {
                        breakpoint: 767,
                        settings: {
                          dots: !1,
                          arrows: !1,
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: !0,
                          adaptiveHeight: !0,
                        },
                      },
                      {
                        breakpoint: 640,
                        settings: {
                          dots: !1,
                          arrows: !1,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: !1,
                          adaptiveHeight: !0,
                          centerMode: !0,
                          centerPadding: "30px",
                        },
                      },
                    ],
                  }),
                    t(".c-storyCol__item").click(function () {
                      i.resultReportSlider.slick("slickNext");
                    }),
                    t(".c-storyReport__colChart").length > 0 &&
                      t(window).width() < 1023 &&
                      t(window).on("scroll", function () {
                        var e = t(".c-storyReport__colChart").offset().top - 50;
                        t(window).scrollTop() > e &&
                          (i.resultReportSlider.slick("slickNext"),
                          t(window).off("scroll"));
                      }),
                    i.pdpSkinSlider.slick(_),
                    i.pdpSkinSliderThumb.slick(v);
                  var h = {
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    focusOnSelect: !0,
                    infinite: !0,
                    prevArrow:
                      '<span class="slick-arrow slick-prev">' + o + "</span>",
                    nextArrow:
                      '<span class="slick-arrow slick-next">' + o + "</span>",
                    responsive: [
                      {
                        breakpoint: 1180,
                        settings: { slidesToShow: 2, slidesToScroll: 2 },
                      },
                      {
                        breakpoint: 767,
                        settings: { slidesToShow: 1, slidesToScroll: 1 },
                      },
                    ],
                  };
                  i.howToQuoteSlider.slick(h);
                  var g = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      asNavFor: i.scienceManSliderNav,
                      infinite: !1,
                      speed: 100,
                      fade: !0,
                      responsive: [
                        {
                          breakpoint: 1023,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: !0,
                            arrows: !1,
                            infinite: !0,
                            fade: !1,
                            adaptiveHeight: !0,
                          },
                        },
                        {
                          breakpoint: 767,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: !0,
                            arrows: !1,
                            infinite: !0,
                            fade: !1,
                            adaptiveHeight: !0,
                          },
                        },
                      ],
                    },
                    q = {
                      dots: !1,
                      arrows: !1,
                      slidesToShow: 5,
                      slidesToScroll: 5,
                      focusOnSelect: !0,
                      asNavFor: i.scienceManSlider,
                      infinite: !1,
                      fade: !1,
                    };
                  i.scienceManSlider.on("init", function (e, i) {
                    t(this).append(
                      '<div class="slider-count"><p><span id="current">1</span>/<span id="total">' +
                        i.slideCount +
                        "</span></p></div>"
                    );
                  }),
                    i.scienceManSlider.slick(g),
                    i.scienceManSlider.on("afterChange", function (e, i, o, a) {
                      t(".slider-count #current").html(o + 1),
                        t(".c-scienceManVcol__video iframe").each(function () {
                          t(this)[0].contentWindow.postMessage(
                            '{"event":"command","func":"stopVideo","args":""}',
                            "*"
                          );
                        });
                    }),
                    i.scienceManSliderNav.slick(q);
                })(),
                t(window).on("load", function () {
                  n();
                }),
                t(window).resize(function () {
                  n();
                }),
                i.testimonialSliderLogos.hover(
                  function () {
                    i.testimonialSliderQuotes.slick("slickPause"),
                      i.testimonialSliderLogos.slick("slickPause");
                  },
                  function () {
                    i.testimonialSliderQuotes.slick("slickPlay"),
                      i.testimonialSliderLogos.slick("slickPlay");
                  }
                );
            };
          })((window.Sliders = window.Sliders || {}), o.default);
        });
    },
    ,
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.StickyContent = t("[data-sticky-content]")),
              (i.StickyContentContainer = t("[data-sticky-content-container]")),
              t(window).on("load", function () {
                !(function () {
                  if (
                    i.StickyContent.length > 0 &&
                    i.StickyContentContainer.length > 0
                  ) {
                    var e = i.StickyContentContainer.outerHeight(),
                      o = i.StickyContentContainer.offset().top - 110,
                      a = i.StickyContentContainer.offset().top + e,
                      s = i.StickyContent.outerHeight(),
                      n = i.StickyContent.offset().top - 110,
                      r = a - s - 110 - 130,
                      l = function () {
                        if (t(window).width() > 640)
                          if (
                            t(window).scrollTop() > o &&
                            t(window).scrollTop() < r
                          )
                            (e = t(window).scrollTop() - n) < 0 && (e = 0),
                              i.StickyContent.css("top", e);
                          else if (t(window).scrollTop() >= r) {
                            var e = r - n;
                            i.StickyContent.css("top", e);
                          } else i.StickyContent.css("top", 0);
                      };
                    l(),
                      t(window).on("scroll", function () {
                        l();
                      });
                  }
                })();
              });
          };
        })((window.StickyContent = window.StickyContent || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {},
            o = function () {
              var e =
                i.FounderLetter.data("linesVisible") *
                parseInt(i.FounderLetter.css("lineHeight"), 10);
              i.FounderLetter.css("maxHeight", e + "px"),
                i.FounderLetter.css("paddintTop", "50%");
            },
            a = function () {
              var e = i.FoundersWrapper.offset(),
                o = t(document).scrollTop(),
                a = t(window).height(),
                s = i.FoundersWrapper.data("basePadding"),
                n = a + o - e.top;
              if ((i.FoundersWrapper.data("baseColor"), !(n < 0))) {
                var r = (100 * (n + 5)) / a,
                  l = s - r,
                  d = 2 * r;
                r > s
                  ? (i.FoundersWrapper.addClass("clean-background"),
                    i.HeadlineElement.addClass("clean-background"))
                  : (i.FoundersWrapper.removeClass("clean-background"),
                    i.HeadlineElement.removeClass("clean-background")),
                  r > 100 ||
                    (i.FoundersWrapper.css("marginTop", "-" + d + "px"),
                    i.FoundersWrapper.css("paddingTop", l + "%"));
              }
            };
          e.init = function () {
            (i.statisticsTrigger = t("[data-statistics-trigger]")),
              (i.statisticsContainer = t("[data-statistics]")),
              (i.resultsType = t("[data-result-type]")),
              (i.resultsImages = t("[data-result-images]")),
              (i.storyMenuTrigger = t("[data-story-menu-trigger]")),
              (i.Ingredient = t("[data-how-ingredient]")),
              (i.FoundersWrapper = t("#js-founders-wrapper")),
              (i.HeadlineElement = t("#js-why-headline")),
              (i.FounderExpandTrigger = t("#js-mobile-expander")),
              (i.FounderLetter = t("#js-founder-letter-content")),
              (function () {
                var e;
                function i() {
                  e = setTimeout(function () {
                    t(".c-skinSliderImage__before").removeClass("is-drag"),
                      t(".c-skinSliderImage__after").removeClass("is-drag"),
                      t(".c-skinSliderImage__resizeImg").removeAttr("style"),
                      t(".c-skinSlider__bar").removeAttr("style");
                  }, 3e3);
                }
                function o() {
                  clearTimeout(e);
                }
                t(".results__images.active").addClass("is-animate"),
                  t(".results__images.active").click(function () {
                    t(".results__images.active").removeClass("is-animate");
                  }),
                  t(".c-skinSliderImage__before").click(function () {
                    o(),
                      t(this).toggleClass("is-drag"),
                      t(this).hasClass("is-drag")
                        ? (t(this)
                            .parents(".c-skinSliderImage")
                            .find(".c-skinSliderImage__resizeImg")
                            .css("width", "94.4444%"),
                          t(this)
                            .parents(".c-skinSliderImage")
                            .find(".c-skinSlider__bar")
                            .css("left", "94.4444%"),
                          i())
                        : (t(".c-skinSliderImage__resizeImg").removeAttr(
                            "style"
                          ),
                          t(".c-skinSlider__bar").removeAttr("style"));
                  }),
                  t(".c-skinSliderImage__after").click(function () {
                    o(),
                      t(this).toggleClass("is-drag"),
                      t(this).hasClass("is-drag")
                        ? (t(this)
                            .parents(".c-skinSliderImage")
                            .find(".c-skinSliderImage__resizeImg")
                            .css("width", "5.55556%"),
                          t(this)
                            .parents(".c-skinSliderImage")
                            .find(".c-skinSlider__bar")
                            .css("left", "5.55556%"),
                          i())
                        : (t(".c-skinSliderImage__resizeImg").removeAttr(
                            "style"
                          ),
                          t(".c-skinSlider__bar").removeAttr("style"));
                  }),
                  t(document).on(
                    "mouseover touchend",
                    ".results__images.active",
                    function () {
                      t(".results__images.active").removeClass("is-animate");
                    }
                  ),
                  t(document).on(
                    "mouseleave",
                    ".c-skinSliderImage__main",
                    function () {
                      o(), i();
                    }
                  ),
                  t(document).on(
                    "mouseup touchend",
                    ".c-skinSlider__bar",
                    function () {
                      o(),
                        t(this).hasClass("draggable") ||
                          (t(this).css("left") && i());
                    }
                  );
              })(),
              i.statisticsTrigger.on("click", function () {
                i.statisticsContainer.hasClass("active")
                  ? i.statisticsContainer.removeClass("active").slideUp(500)
                  : i.statisticsContainer.addClass("active").slideDown(500);
              }),
              t(document).on("click", "[data-result-type]", function () {
                if (!t(this).hasClass("active")) {
                  i.resultsType.removeClass("active"),
                    t(this).addClass("active");
                  var e = t(this).attr("data-handle");
                  i.resultsImages.removeClass("active"),
                    t('[data-result-images][data-handle="' + e + '"]').addClass(
                      "active"
                    );
                }
              }),
              i.storyMenuTrigger.on("click", function () {
                t(this).next("[data-story-menu]").hasClass("active")
                  ? (t(this)
                      .next("[data-story-menu]")
                      .removeClass("active")
                      .fadeOut(500),
                    t(this).removeClass("active"))
                  : (t(this)
                      .next("[data-story-menu]")
                      .addClass("active")
                      .fadeIn(500),
                    t(this).addClass("active"));
              }),
              i.Ingredient.on("click", function () {
                t(window).width() < 992 &&
                  (t(this).hasClass("active")
                    ? t(this)
                        .removeClass("active")
                        .find(".ingredients__item-details")
                        .slideUp(500)
                    : (i.Ingredient.removeClass("active")
                        .find(".ingredients__item-details")
                        .slideUp(500),
                      t(this)
                        .addClass("active")
                        .find(".ingredients__item-details")
                        .slideDown(500)));
              }),
              i.FoundersWrapper.length &&
                (t(document).on("scroll", function (e) {
                  a();
                }),
                t(document).ready(function (e) {
                  o(), a();
                })),
              i.FounderExpandTrigger.on("click", function (e) {
                var o = t("#js-founder-letter-content")[0].scrollHeight;
                i.FounderLetter.css("maxHeight", o + "px"),
                  i.FounderLetter.removeClass("mobile-collapsed"),
                  i.FounderExpandTrigger.hide(),
                  setTimeout(function () {
                    i.FounderLetter.css("maxHeight", "");
                  }, 500);
              }),
              t("[data-result-tab] div:first-child").addClass("is-active"),
              t(
                ".c-storyReportContent .c-storyReportContent__box:first-child"
              ).addClass("is-active"),
              t("[data-result-tab] div").click(function () {
                var e = t(this).attr("data-tab"),
                  i = t(this).text();
                t(".c-storyReportTab__mobile span").text(i),
                  t("[data-result-tab] div").removeClass("is-active"),
                  t(".c-storyReportContent__box").removeClass("is-active"),
                  t(this).addClass("is-active"),
                  t(this)
                    .closest(".c-storyReport")
                    .find("#" + e)
                    .addClass("is-active"),
                  t(window).width() < 1023 &&
                    (t(".c-storyReportTab__mobile").removeClass("is-active"),
                    t(".c-storyReportTab__row").slideUp(),
                    t(".c-storyReportContent__box").removeClass("is-tab-open"));
              }),
              t(".c-storyReportTab__mobile").click(function () {
                t(this).toggleClass("is-active"),
                  t(".c-storyReportTab__row").slideToggle(),
                  t(".c-storyReportContent__box").toggleClass("is-tab-open");
              }),
              t(window).resize(function () {
                t(".c-storyReportTab__row").removeAttr("style"),
                  t(".c-storyReportContent__box").removeClass("is-tab-open");
              });
          };
        })((window.StoryPage = window.StoryPage || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          e.init = function () {
            t(window).on("load", function () {
              t("#customer_tab_nav").prepend(
                '<a href="/account" class="account-link"><svg viewBox="0 0 15 27" fill="#777770" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icon-arrow-left-reviews"><path d="M12.0018397,13.2302866 L0.84526814,2.08500706 C0.366674393,1.60689772 0.366674393,0.836481724 0.84526814,0.358372383 C1.32358211,-0.119457461 2.09390539,-0.119457461 2.57221936,0.358372383 L14.5956536,12.3696372 C15.0708721,12.8443747 15.0680492,13.6227191 14.5903122,14.0909359 L2.57348823,26.0954714 C2.34378713,26.3337657 2.02915963,26.4619071 1.70607306,26.4619071 C1.38832273,26.4619071 1.07532417,26.3320239 0.84526814,26.1022007 C0.366674393,25.6240914 0.366674393,24.8536754 0.84526814,24.3755661 L12.0018397,13.2302866 Z"></path></g></svg>Back to Account</a>'
              );
            });
          };
        })(
          (window.SubscriptionPage = window.SubscriptionPage || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.testimonialSwitcher = t("[data-testimonial-options]")),
              (i.testimonialSlider = t("[data-testimonial-slider]")),
              i.testimonialSwitcher.on("click", "li", function () {
                !(function (e) {
                  var o = e.attr("data-handle");
                  e.addClass("active").siblings().removeClass("active"),
                    i.testimonialSlider.removeClass("active"),
                    i.testimonialSlider.each(function () {
                      t(this).attr("data-handle") == o &&
                        (t(this).addClass("active"), t(this).slick("refresh"));
                    });
                })(t(this));
              });
          };
        })(
          (window.TestimonialSwitcher = window.TestimonialSwitcher || {}),
          o.default
        );
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {};
          e.init = function () {
            (i.TextParallax = t("[data-text-parallax]")),
              (i.TextParallaxFlipped = t("[data-text-parallax-flipped]")),
              (function () {
                var e = function (e) {
                  var i = e.parent().offset().top - 350;
                  if (
                    t(window).scrollTop() > i &&
                    t(window).scrollTop() < i + t(window).height()
                  ) {
                    var o = (t(window).scrollTop() - i) / 4;
                    t(window).width() < 480 &&
                      (o = (t(window).scrollTop() - i) / 6.5),
                      o < 0 && (o = 0),
                      e.css("margin-top", o);
                  }
                };
                i.TextParallax.each(function () {
                  e(t(this));
                }),
                  t(window).on("scroll", function () {
                    i.TextParallax.each(function () {
                      e(t(this));
                    });
                  });
              })(),
              (function () {
                var e = function (e) {
                  var i = e.parent().offset().top - 350;
                  if (
                    t(window).scrollTop() > i &&
                    t(window).scrollTop() < i + t(window).height()
                  ) {
                    var o = (t(window).scrollTop() - i) / 4;
                    t(window).width() < 480 &&
                      (o = (t(window).scrollTop() - i) / 6.5),
                      o < 0 && (o = 0),
                      e.css("margin-bottom", -1 * o);
                  }
                };
                i.TextParallaxFlipped.each(function () {
                  e(t(this));
                }),
                  t(window).on("scroll", function () {
                    i.TextParallaxFlipped.each(function () {
                      e(t(this));
                    });
                  });
              })();
          };
        })((window.TextParallax = window.TextParallax || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          e.init = function () {
            t("body").on("click", ".yotpo-nav-tab", function () {
              "reviews" == t(".yotpo-nav-tab.yotpo-active").attr("data-type")
                ? (t(".write-question-button").hide(),
                  t(".write-review-button").show())
                : "questions" ==
                    t(".yotpo-nav-tab.yotpo-active").attr("data-type") &&
                  (t(".write-review-button").hide(),
                  t(".write-question-button").show());
            });
          };
        })((window.YotpoReviews = window.YotpoReviews || {}), o.default);
      };
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0));
      t.default = function () {
        !(function (e, t) {
          var i = {},
            o = Array.from(document.querySelectorAll(".c-quizResult__product")),
            a = document.querySelector(".c-productInfo__btnText"),
            s = function () {
              var e = [],
                s = [];
              if (null !== localStorage.getItem("quizAnswerTwo")) {
                var n = localStorage
                  .getItem("quizAnswerTwo", e)
                  .replace(/["]/g, "")
                  .split(",");
                JSON.stringify(e).replace(/]|[[]/g, "");
                for (var r = 0; r < n.length; r++)
                  (n[r] = n[r].replace(/^\s*/, "").replace(/\s*$/, "")),
                    e.push(n[r]);
              }
              function l() {
                t("html, body").addClass("quiz-scroll-hidden"),
                  i.quizModal.removeClass("is-down"),
                  i.quizModal.addClass("is-open"),
                  i.quizMainDiv.addClass("quiz-step-one"),
                  i.quizStepOne.addClass("is-active"),
                  i.quizStepBarText.text("Step 1 of 4"),
                  i.quizModal.removeClass("is-hide-desktop");
              }
              function d() {
                i.quizBackStepOne.show(),
                  i.quizBackStepTwo.hide(),
                  i.quizBackStepThree.hide(),
                  i.quizMainDiv.removeClass("quiz-step-one"),
                  i.quizMainDiv.addClass("quiz-step-two"),
                  i.quizStepOne.removeClass("is-active"),
                  i.quizStepOne.addClass("is-done"),
                  i.quizStepTwo.addClass("is-active"),
                  i.quizStepBarText.text("Step 2 of 4");
              }
              function c() {
                i.quizBackStepOne.hide(),
                  i.quizBackStepTwo.show(),
                  i.quizBackStepThree.hide(),
                  i.quizMainDiv.removeClass("quiz-step-two"),
                  i.quizMainDiv.addClass("quiz-step-three"),
                  i.quizStepTwo.removeClass("is-active"),
                  i.quizStepTwo.addClass("is-done"),
                  i.quizStepThree.addClass("is-active"),
                  i.quizStepBarText.text("Step 3 of 4");
              }
              function u() {
                i.quizBackStepOne.hide(),
                  i.quizBackStepTwo.hide(),
                  i.quizBackStepThree.show(),
                  i.quizMainDiv.removeClass("quiz-step-two"),
                  i.quizMainDiv.removeClass("quiz-step-three"),
                  i.quizMainDiv.addClass("quiz-step-four"),
                  i.quizStepTwo.removeClass("is-active"),
                  i.quizStepTwo.addClass("is-done"),
                  i.quizStepThree.removeClass("is-active"),
                  i.quizStepThree.addClass("is-done"),
                  i.quizStepFour.addClass("is-active"),
                  i.quizStepBarText.text("Step 4 of 4");
              }
              function p() {
                var e = _learnq.identify().$email,
                  t = _learnq.identify().$first_name;
                "" !== customerEmail
                  ? (localStorage.setItem("quizuseremail", customerEmail),
                    localStorage.setItem("quizusername", customerName))
                  : void 0 !== e &&
                    (localStorage.setItem("quizuseremail", e),
                    void 0 !== t && localStorage.setItem("quizusername", t));
              }
              function f() {
                document.cookie.indexOf("quizToken=") >= 0 ||
                  localStorage.removeItem("quiztoken"),
                  null === localStorage.getItem("quiztoken")
                    ? t.ajax({
                        type: "POST",
                        url: "https://api.calderalab.com/api/user",
                        data: {
                          email: localStorage.getItem("quizuseremail"),
                          name: localStorage.getItem("quizusername"),
                        },
                        success: function (e) {
                          var t = e.data.token,
                            i = e.data.id;
                          document.cookie.indexOf("quizToken=") >= 0 ||
                            (localStorage.setItem("quiztoken", t),
                            (function (e, t) {
                              var i = new Date();
                              i.setTime(i.getTime() + 72e5);
                              var o = "; expires=" + i.toGMTString();
                              document.cookie =
                                "quizToken=true" + o + "; path=/";
                            })()),
                            null === localStorage.getItem("quizuseremail") &&
                              localStorage.setItem("quizuserid", i),
                            setTimeout(function () {
                              null === localStorage.getItem("quizuseremail") &&
                                h(),
                                g();
                            }, 1e3);
                        },
                        error: function (e, t) {},
                      })
                    : (null !== localStorage.getItem("quizuseremail") &&
                        null !== localStorage.getItem("quizuserid") &&
                        setTimeout(function () {
                          h();
                        }, 1e3),
                      g());
              }
              function m() {
                var e = localStorage.getItem("quizAnswerOne");
                i.quizStepOne
                  .find(".c-quizBlockList__row .c-quizBlockList__item")
                  .each(function () {
                    var o = t(this)
                      .find(".c-quizBlockList__name")
                      .attr("data-id");
                    e === o &&
                      (t(this)
                        .find(".c-quizBlockList__box")
                        .addClass("is-active"),
                      i.quizStepBar.css("width", "25%"),
                      i.quizContinueBar.css("width", "25%"),
                      i.quizBtnStepOne.removeClass("disabled"));
                  });
              }
              function w() {
                i.quizStepTwo
                  .find(".c-quizList__row .c-quizList__item")
                  .each(function () {
                    for (
                      var o = t(this).find(".c-quizList__name").attr("data-id"),
                        a = 0;
                      a < e.length;
                      a++
                    )
                      e[a] == o &&
                        (t(this)
                          .find(".c-quizList__name")
                          .addClass("is-active"),
                        i.quizStepBar.css("width", "50%"),
                        i.quizContinueBar.css("width", "50%"),
                        i.quizBtnStepTwo.removeClass("disabled"),
                        i.quizStepOne.addClass("is-done"),
                        i.quizStepOne.removeClass("is-active"));
                  });
              }
              function _() {
                var e = localStorage.getItem("quizAnswerThree");
                i.quizStepThree
                  .find(".c-quizBlockList__row .c-quizBlockList__item")
                  .each(function () {
                    var o = t(this)
                      .find(".c-quizBlockList__name")
                      .attr("data-id");
                    e === o &&
                      (t(this)
                        .find(".c-quizBlockList__box")
                        .addClass("is-active"),
                      i.quizBtnStepOne.removeClass("disabled"),
                      i.quizBtnStepTwo.removeClass("disabled"),
                      i.quizBtnStepThree.removeClass("disabled"),
                      i.quizStepBar.css("width", "75%"),
                      i.quizContinueBar.css("width", "75%"),
                      i.quizStepOne.addClass("is-done"),
                      i.quizStepOne.removeClass("is-active"));
                  });
              }
              function v() {
                "one" === localStorage.getItem("quizStep")
                  ? m()
                  : "two" === localStorage.getItem("quizStep")
                  ? (m(), w(), d())
                  : "three" === localStorage.getItem("quizStep")
                  ? (m(), w(), _(), c())
                  : "four" === localStorage.getItem("quizStep") &&
                    (m(),
                    w(),
                    _(),
                    (function () {
                      var e = localStorage.getItem("quizAnswerFour");
                      i.quizStepFour
                        .find(".c-quizListAge__row .c-quizListAge__item")
                        .each(function () {
                          var o = t(this)
                            .find(".c-quizListAge__name")
                            .attr("data-id");
                          e === o &&
                            (t(this)
                              .find(".c-quizListAge__name")
                              .addClass("is-active"),
                            i.quizBtnStepOne.removeClass("disabled"),
                            i.quizBtnStepTwo.removeClass("disabled"),
                            i.quizBtnStepThree.removeClass("disabled"),
                            i.quizBtnStepFour.removeClass("disabled"),
                            i.quizStepBar.css("width", "100%"),
                            i.quizContinueBar.css("width", "100%"),
                            i.quizStepOne.addClass("is-done"),
                            i.quizStepOne.removeClass("is-active"));
                        });
                    })(),
                    u());
              }
              function h() {
                var e = localStorage.getItem("quizuserid");
                t.ajax({
                  type: "PATCH",
                  url: "https://api.calderalab.com/api/user/" + e,
                  data: {
                    email: localStorage.getItem("quizuseremail"),
                    name: localStorage.getItem("quizusername"),
                  },
                  success: function (e) {},
                  error: function (e, t) {},
                });
              }
              function g() {
                var e = localStorage.getItem("quiztoken");
                t.ajax({
                  type: "GET",
                  url: "https://api.calderalab.com/api/quiz",
                  beforeSend: function (t) {
                    t.setRequestHeader("Authorization", "Bearer " + e),
                      i.quizLoader.addClass("is-active");
                  },
                  success: function (e) {
                    var t = e.data.quizId;
                    localStorage.setItem("quizId", t),
                      e.data.questions,
                      i.quizLoader.removeClass("is-active"),
                      i.quizInner.removeClass("is-hide"),
                      i.quizStepOne.attr(
                        "data-question-id",
                        e.data.questions[0].id
                      ),
                      i.quizStepOne
                        .find(".c-quizStep__heading")
                        .text(e.data.questions[0].description),
                      i.quizStepOneAnswer
                        .find(".c-quizBlockList__item:nth-child(3) span")
                        .text(e.data.questions[0].options[0].description),
                      i.quizStepOneAnswer
                        .find(".c-quizBlockList__item:nth-child(3) span")
                        .attr("data-id", e.data.questions[0].options[0].id),
                      i.quizStepOneAnswer
                        .find(".c-quizBlockList__item:nth-child(1) span")
                        .text(e.data.questions[0].options[1].description),
                      i.quizStepOneAnswer
                        .find(".c-quizBlockList__item:nth-child(1) span")
                        .attr("data-id", e.data.questions[0].options[1].id),
                      i.quizStepOneAnswer
                        .find(".c-quizBlockList__item:nth-child(2) span")
                        .text(e.data.questions[0].options[2].description),
                      i.quizStepOneAnswer
                        .find(".c-quizBlockList__item:nth-child(2) span")
                        .attr("data-id", e.data.questions[0].options[2].id),
                      i.quizStepTwo.attr(
                        "data-question-id",
                        e.data.questions[1].id
                      ),
                      i.quizStepTwo
                        .find(".c-quizStep__heading")
                        .text(e.data.questions[1].description),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(1) span")
                        .text(e.data.questions[1].options[0].description),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(1) span")
                        .attr("data-id", e.data.questions[1].options[0].id),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(2) span")
                        .text(e.data.questions[1].options[1].description),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(2) span")
                        .attr("data-id", e.data.questions[1].options[1].id),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(3) span")
                        .text(e.data.questions[1].options[2].description),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(3) span")
                        .attr("data-id", e.data.questions[1].options[2].id),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(4) span")
                        .text(e.data.questions[1].options[3].description),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(4) span")
                        .attr("data-id", e.data.questions[1].options[3].id),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(5) span")
                        .text(e.data.questions[1].options[4].description),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(5) span")
                        .attr("data-id", e.data.questions[1].options[4].id),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(6) span")
                        .text(e.data.questions[1].options[5].description),
                      i.quizStepTwoAnswer
                        .find(".c-quizList__item:nth-child(6) span")
                        .attr("data-id", e.data.questions[1].options[5].id),
                      i.quizStepThree.attr(
                        "data-question-id",
                        e.data.questions[2].id
                      ),
                      i.quizStepThree
                        .find(".c-quizStep__heading")
                        .text(e.data.questions[2].description),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(1) span")
                        .text(e.data.questions[2].options[0].description),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(1) span")
                        .attr("data-id", e.data.questions[2].options[0].id),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(2) span")
                        .text(e.data.questions[2].options[1].description),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(2) span")
                        .attr("data-id", e.data.questions[2].options[1].id),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(3) span")
                        .text(e.data.questions[2].options[2].description),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(3) span")
                        .attr("data-id", e.data.questions[2].options[2].id),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(4) span")
                        .text(e.data.questions[2].options[3].description),
                      i.quizStepThreeAnswer
                        .find(".c-quizBlockList__item:nth-child(4) span")
                        .attr("data-id", e.data.questions[2].options[3].id),
                      i.quizStepFour.attr(
                        "data-question-id",
                        e.data.questions[3].id
                      ),
                      i.quizStepFour
                        .find(".c-quizStep__heading")
                        .text(e.data.questions[3].description),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(1) span")
                        .text(e.data.questions[3].options[0].description),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(1) span")
                        .attr("data-id", e.data.questions[3].options[0].id),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(2) span")
                        .text(e.data.questions[3].options[1].description),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(2) span")
                        .attr("data-id", e.data.questions[3].options[1].id),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(3) span")
                        .text(e.data.questions[3].options[2].description),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(3) span")
                        .attr("data-id", e.data.questions[3].options[2].id),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(4) span")
                        .text(e.data.questions[3].options[3].description),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(4) span")
                        .attr("data-id", e.data.questions[3].options[3].id),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(5) span")
                        .text(e.data.questions[3].options[4].description),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(5) span")
                        .attr("data-id", e.data.questions[3].options[4].id),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(6) span")
                        .text(e.data.questions[3].options[5].description),
                      i.quizStepFourAnswer
                        .find(".c-quizListAge__item:nth-child(6) span")
                        .attr("data-id", e.data.questions[3].options[5].id),
                      v();
                  },
                  error: function (e, t) {},
                });
              }
              function q() {
                var e = localStorage.getItem("quizuseremail");
                t(".c-quizKlaviyo input[type=email]").attr("value", e),
                  setTimeout(function () {
                    document.getElementById("js-quiz-submit-btn").click();
                  }, 1500),
                  KlaviyoSubscribe.attachToForms("#quiz_signup", {
                    hide_form_on_success: !0,
                    extra_properties: {
                      $first_name: localStorage.getItem("quizusername"),
                      "Quiz Answer One": localStorage.getItem(
                        "quizAnswerOneText"
                      ),
                      "Quiz Answer Two": localStorage.getItem(
                        "quizAnswerTwoText"
                      ),
                      "Quiz Answer Three": localStorage.getItem(
                        "quizAnswerThreeText"
                      ),
                      "Quiz Answer Four": localStorage.getItem(
                        "quizAnswerFourText"
                      ),
                    },
                    success: function (e) {
                      _learnq.push([
                        "identify",
                        { $first_name: localStorage.getItem("quizusername") },
                      ]);
                    },
                  });
              }
              window.location.href.indexOf("the-regimen") > -1 &&
                "done" == localStorage.getItem("quizSubmission") &&
                (null !== localStorage.getItem("quizuseremail") && q(),
                i.quizResult.slideDown(),
                i.quizResult.addClass("is-open"),
                i.quizResult.addClass("c-quizSubmitted"),
                localStorage.removeItem("quizSubmission"),
                i.quizResultDays.text(
                  "Ships Every " + localStorage.getItem("quizDays") + " Days"
                ),
                i.quizRecurringDays.text(localStorage.getItem("quizDays")),
                i.quizResultCopy.text(localStorage.getItem("quizDescription")),
                i.quizResultRow.append(
                  "<div class='c-quizResult__item'>" +
                    localStorage.getItem("quizAnswerOneIcon") +
                    "</div>"
                ),
                i.quizResultRow.append(
                  "<div class='c-quizResult__item'>" +
                    localStorage.getItem("quizAnswerThreeIcon") +
                    "</div>"
                ),
                t(".c-quizResult__answerTwo").text(
                  localStorage.getItem("quizAnswerTwoText")
                ),
                setTimeout(function () {
                  t(
                    ".rc_frequencySelecter .rc_frequencySelecter__item[data-handle=" +
                      localStorage.getItem("quizDays") +
                      "]"
                  ).click(),
                    localStorage.removeItem("quizSubmission"),
                    localStorage.removeItem("quizDrops"),
                    localStorage.removeItem("quizDescription"),
                    localStorage.removeItem("quizAnswerOneIcon"),
                    localStorage.removeItem("quizAnswerThreeIcon");
                }, 2e3),
                setTimeout(function () {}, 8e3)),
                window.location.href.indexOf("?quiz") > -1 &&
                  setTimeout(function () {
                    l(), p(), f();
                  }, 3e3),
                t(document).on("click", "[data-quiz-click]", function () {
                  return l(), p(), f(), !1;
                }),
                i.quizOverlay.on("click", function () {
                  return (
                    i.quizModal.addClass("is-down"),
                    t("html, body").removeClass("quiz-scroll-hidden"),
                    !1
                  );
                }),
                i.quizOutter.on("click", function () {
                  return (
                    t(i.quizModal).hasClass("is-down") &&
                      (i.quizModal.removeClass("is-down"),
                      t("html, body").addClass("quiz-scroll-hidden")),
                    !1
                  );
                }),
                i.quizClose.on("click", function () {
                  return (
                    i.quizModal.removeClass("is-open"),
                    i.quizModal.removeClass("is-hide-desktop"),
                    t("html, body").removeClass("quiz-scroll-hidden"),
                    !1
                  );
                }),
                i.quizClickDesktop.on("click", function () {
                  return (
                    i.quizModal.addClass("is-hide-desktop"),
                    t("html, body").removeClass("quiz-scroll-hidden"),
                    !1
                  );
                }),
                i.quizClickContinue.on("click", function () {
                  return (
                    i.quizModal.removeClass("is-hide-desktop"),
                    t("html, body").addClass("quiz-scroll-hidden"),
                    !1
                  );
                }),
                i.quizBlockListType.on("click", function () {
                  i.quizBlockListType.removeClass("is-active"),
                    t(this).addClass("is-active"),
                    i.quizBtnStepOne.removeClass("disabled");
                  var e = t(this)
                      .find(".c-quizBlockList__name")
                      .attr("data-id"),
                    o = t(this).find(".c-quizBlockList__name").text();
                  return (
                    localStorage.setItem("quizAnswerOne", e),
                    localStorage.setItem("quizAnswerOneText", o),
                    localStorage.setItem("quizStep", "one"),
                    !1
                  );
                }),
                i.quizListEvent.on("click", function () {
                  t(this).toggleClass("is-active");
                  var o = t(this).attr("data-id");
                  if (t(this).hasClass("is-active")) e.push(o);
                  else
                    for (
                      var a = t(this).attr("data-id"), s = e.length - 1;
                      s >= 0;
                      s--
                    )
                      e[s] === a && e.splice(s, 1);
                  return (
                    localStorage.setItem("quizAnswerTwo", e.join(",")),
                    e.length <= 0
                      ? i.quizBtnStepTwo.addClass("disabled")
                      : i.quizBtnStepTwo.removeClass("disabled"),
                    !1
                  );
                }),
                i.quizBlockListClimate.on("click", function () {
                  i.quizBlockListClimate.removeClass("is-active"),
                    t(this).addClass("is-active"),
                    i.quizBtnStepThree.removeClass("disabled");
                  var e = t(this)
                      .find(".c-quizBlockList__name")
                      .attr("data-id"),
                    o = t(this).find(".c-quizBlockList__name").text();
                  return (
                    localStorage.setItem("quizAnswerThree", e),
                    localStorage.setItem("quizAnswerThreeText", o),
                    !1
                  );
                }),
                i.quizBlockListAge.on("click", function () {
                  i.quizBlockListAge.removeClass("is-active"),
                    t(this).addClass("is-active"),
                    i.quizBtnStepFour.removeClass("disabled");
                  var e = t(this).attr("data-id"),
                    o = t(this).text();
                  return (
                    localStorage.setItem("quizAnswerFour", e),
                    localStorage.setItem("quizAnswerFourText", o),
                    !1
                  );
                }),
                i.quizBackStepOne.on("click", function () {
                  i.quizBackStepOne.hide(),
                    i.quizBackStepTwo.hide(),
                    i.quizBackStepThree.hide(),
                    i.quizMainDiv.removeClass("quiz-step-two"),
                    i.quizMainDiv.addClass("quiz-step-one"),
                    i.quizStepTwo.removeClass("is-active"),
                    i.quizStepOne.removeClass("is-done"),
                    i.quizStepOne.addClass("is-active"),
                    i.quizStepBarText.text("Step 1 of 4"),
                    i.quizStepBar.css("width", "0px"),
                    i.quizContinueBar.css("width", "0px");
                }),
                i.quizBackStepTwo.on("click", function () {
                  i.quizBackStepOne.show(),
                    i.quizBackStepTwo.hide(),
                    i.quizBackStepThree.hide(),
                    i.quizMainDiv.removeClass("quiz-step-three"),
                    i.quizMainDiv.addClass("quiz-step-two"),
                    i.quizStepThree.removeClass("is-active"),
                    i.quizStepTwo.removeClass("is-done"),
                    i.quizStepTwo.addClass("is-active"),
                    i.quizStepBarText.text("Step 2 of 4"),
                    i.quizStepBar.css("width", "50%"),
                    i.quizContinueBar.css("width", "50%");
                }),
                i.quizBackStepThree.on("click", function () {
                  i.quizBackStepOne.hide(),
                    i.quizBackStepTwo.show(),
                    i.quizBackStepThree.hide(),
                    i.quizMainDiv.removeClass("quiz-step-four"),
                    i.quizMainDiv.addClass("quiz-step-three"),
                    i.quizStepFour.removeClass("is-active"),
                    i.quizStepThree.removeClass("is-done"),
                    i.quizStepThree.addClass("is-active"),
                    i.quizStepBarText.text("Step 3 of 4"),
                    i.quizStepBar.css("width", "75%"),
                    i.quizContinueBar.css("width", "75%");
                }),
                i.quizBtnStepOne.on("click", function () {
                  return (
                    t(i.quizBtnStepOne).hasClass("disabled") ||
                      (d(),
                      localStorage.setItem("quizStep", "two"),
                      i.quizStepBar.css("width", "50px"),
                      i.quizContinueBar.css("width", "50px")),
                    !1
                  );
                }),
                i.quizBtnStepTwo.on("click", function () {
                  return (
                    t(i.quizBtnStepTwo).hasClass("disabled") ||
                      (c(),
                      localStorage.setItem("quizStep", "three"),
                      i.quizStepBar.css("width", "80px"),
                      i.quizContinueBar.css("width", "80px")),
                    !1
                  );
                }),
                i.quizBtnStepThree.on("click", function () {
                  return (
                    t(i.quizBtnStepThree).hasClass("disabled") ||
                      (localStorage.setItem("quizStep", "four"),
                      i.quizStepBar.css("width", "100%"),
                      i.quizContinueBar.css("width", "100%"),
                      u()),
                    !1
                  );
                }),
                i.quizBtnStepFour.on("click", function () {
                  return (
                    t(i.quizBtnStepFour).hasClass("disabled") ||
                      (i.quizStepBar.css("width", "100%"),
                      i.quizContinueBar.css("width", "100%"),
                      i.quizStepFour.removeClass("is-active"),
                      i.quizStepFour.addClass("is-done"),
                      i.quizBackStepOne.hide(),
                      i.quizBackStepTwo.hide(),
                      i.quizBackStepThree.hide(),
                      t(".c-quizStepBar__main ").hide(),
                      setTimeout(function () {
                        i.quizMainDiv.removeClass("quiz-step-four"),
                          i.quizMainDiv.addClass("quiz-step-result"),
                          i.quizStepResult.addClass("is-active");
                        var e = i.quizStepOneAnswer
                            .find(".c-quizBlockList__box.is-active")
                            .html(),
                          t = i.quizStepThreeAnswer
                            .find(".c-quizBlockList__box.is-active")
                            .html();
                        localStorage.setItem("quizAnswerOneIcon", e),
                          localStorage.setItem("quizAnswerThreeIcon", t),
                          i.quizResultRow.empty(),
                          i.quizResultRow.append(
                            "<div class='c-quizResult__item'>" + e + "</div>"
                          ),
                          i.quizResultRow.append(
                            "<div class='c-quizResult__item'>" + t + "</div>"
                          );
                      }, 500),
                      (function () {
                        var o = localStorage.getItem("quiztoken");
                        localStorage.getItem("quizId"),
                          t.ajax({
                            type: "POST",
                            url:
                              "https://api.calderalab.com/api/submission/quiz",
                            beforeSend: function (e) {
                              e.setRequestHeader(
                                "Authorization",
                                "Bearer " + o
                              );
                            },
                            data: {
                              submission: {
                                quizId: localStorage.getItem("quizId"),
                                questionOptions: [
                                  {
                                    questionId: i.quizStepOne.attr(
                                      "data-question-id"
                                    ),
                                    optionIds: [
                                      localStorage.getItem("quizAnswerOne"),
                                    ],
                                  },
                                  {
                                    questionId: i.quizStepTwo.attr(
                                      "data-question-id"
                                    ),
                                    optionIds: localStorage
                                      .getItem("quizAnswerTwo")
                                      .split(","),
                                  },
                                  {
                                    questionId: i.quizStepThree.attr(
                                      "data-question-id"
                                    ),
                                    optionIds: [
                                      localStorage.getItem("quizAnswerThree"),
                                    ],
                                  },
                                  {
                                    questionId: i.quizStepFour.attr(
                                      "data-question-id"
                                    ),
                                    optionIds: [
                                      localStorage.getItem("quizAnswerFour"),
                                    ],
                                  },
                                ],
                              },
                            },
                            success: function (o) {
                              if (
                                (i.quizStepTwo
                                  .find(".c-quizList__row .c-quizList__item")
                                  .each(function () {
                                    if (
                                      t(this)
                                        .find(".c-quizList__name")
                                        .hasClass("is-active")
                                    ) {
                                      var e = t(this)
                                        .find(".c-quizList__name")
                                        .text();
                                      s.push(e);
                                    }
                                  }),
                                localStorage.setItem(
                                  "quizAnswerTwoText",
                                  s.join(", ")
                                ),
                                i.quizResultCopy.text(o.data.resultDescription),
                                i.quizResultDays.text(
                                  "Ships Every " +
                                    o.data.metaData.days +
                                    " Days"
                                ),
                                i.quizRecurringDays.text(o.data.metaData.days),
                                localStorage.setItem(
                                  "quizDrops",
                                  o.data.metaData.noOfDrops
                                ),
                                localStorage.setItem(
                                  "quizDays",
                                  o.data.metaData.days
                                ),
                                localStorage.setItem(
                                  "quizDescription",
                                  o.data.resultDescription
                                ),
                                window.location.href.indexOf("the-regimen") >
                                  -1)
                              ) {
                                null !==
                                  localStorage.getItem("quizuseremail") && q(),
                                  setTimeout(function () {
                                    t("html, body").removeClass(
                                      "quiz-scroll-hidden"
                                    ),
                                      i.quizModal.removeClass("is-open"),
                                      i.quizBackStepOne.removeAttr("style"),
                                      i.quizBackStepTwo.removeAttr("style"),
                                      i.quizStepFront.addClass(
                                        "is-active-front"
                                      ),
                                      i.quizStepFront.removeClass(
                                        "is-done-front"
                                      ),
                                      i.quizStepOne.removeClass("is-done"),
                                      i.quizStepTwo.removeClass("is-done"),
                                      i.quizStepThree.removeClass("is-done"),
                                      i.quizStepFour.removeClass("is-done"),
                                      i.quizMainDiv.removeClass(
                                        "quiz-step-result"
                                      ),
                                      i.quizStepResult.removeClass("is-active"),
                                      i.quizBlockListType.removeClass(
                                        "is-active"
                                      ),
                                      i.quizListEvent.removeClass("is-active"),
                                      i.quizBlockListClimate.removeClass(
                                        "is-active"
                                      ),
                                      i.quizBlockListAge.removeClass(
                                        "is-active"
                                      ),
                                      t(".c-quizResult__bar").removeClass(
                                        "is-open"
                                      ),
                                      t("body").removeClass("is-reco-open"),
                                      i.quizStepBarText.text("Step 1 of 4"),
                                      i.quizStepBar.css("width", "0"),
                                      i.quizContinueBar.css("width", "0");
                                  }, 1200),
                                  setTimeout(function () {
                                    i.quizBtnStepOne.addClass("disabled"),
                                      i.quizBtnStepTwo.addClass("disabled"),
                                      i.quizBtnStepThree.addClass("disabled"),
                                      i.quizBtnStepFour.addClass("disabled"),
                                      t(window).scrollTop(0),
                                      i.quizResult.slideDown(),
                                      0 == t(window).scrollTop() &&
                                        (i.quizResult.addClass("is-open"),
                                        i.quizResult.addClass(
                                          "c-quizSubmitted"
                                        )),
                                      t(".c-quizStepBar__main ").removeAttr(
                                        "style"
                                      );
                                  }, 1500);
                                var a = {};
                                localStorage
                                  .getItem("quizAnswerTwoText")
                                  .split(",")
                                  .forEach(function (e) {
                                    var t = e.split(":"),
                                      i = e.replace(/\s+/g, "").split(":");
                                    a[i[0]] = t[0];
                                  }),
                                  (dataLayer = window.dataLayer || []),
                                  dataLayer.push({
                                    quizAnswerOne: localStorage.getItem(
                                      "quizAnswerOneText"
                                    ),
                                    quizAnswerTwo: [a],
                                    quizAnswerThree: localStorage.getItem(
                                      "quizAnswerThreeText"
                                    ),
                                    quizAnswerFour: localStorage.getItem(
                                      "quizAnswerFourText"
                                    ),
                                  });
                                var n = localStorage.getItem("quizDays");
                                t(
                                  ".rc_frequencySelecter .rc_frequencySelecter__item[data-handle=" +
                                    n +
                                    "]"
                                ).click(),
                                  t(".c-quizResult__answerTwo").text(
                                    localStorage.getItem("quizAnswerTwoText")
                                  ),
                                  setTimeout(function () {
                                    localStorage.removeItem("quizId"),
                                      localStorage.removeItem("quizAnswerOne"),
                                      localStorage.removeItem("quizAnswerTwo"),
                                      localStorage.removeItem(
                                        "quizAnswerThree"
                                      ),
                                      localStorage.removeItem("quizAnswerFour"),
                                      localStorage.removeItem("quizStep"),
                                      localStorage.removeItem("quizDrops"),
                                      localStorage.removeItem(
                                        "quizDescription"
                                      ),
                                      localStorage.removeItem(
                                        "quizAnswerOneIcon"
                                      ),
                                      localStorage.removeItem(
                                        "quizAnswerThreeIcon"
                                      ),
                                      (e = []),
                                      (s = []);
                                  }, 3e3);
                              } else
                                localStorage.removeItem("quizId"),
                                  localStorage.removeItem("quizAnswerOne"),
                                  localStorage.removeItem("quizAnswerTwo"),
                                  localStorage.removeItem("quizAnswerThree"),
                                  localStorage.removeItem("quizAnswerFour"),
                                  localStorage.removeItem("quizStep"),
                                  (e = []),
                                  (s = []),
                                  localStorage.setItem(
                                    "quizSubmission",
                                    "done"
                                  ),
                                  setTimeout(function () {
                                    window.location.href =
                                      "/products/the-regimen";
                                  }, 3500);
                            },
                            error: function (e, t) {},
                          });
                      })()),
                    !1
                  );
                }),
                i.quizAddToCart.on("click", function () {
                  a.textContent = "Adding to cart..";
                  var e = localStorage.getItem("quizDays"),
                    t = [];
                  o.map(function (i) {
                    if (!i.classList.contains("c-quizResult__product--oos")) {
                      var o = parseFloat(i.dataset.discountPercentage),
                        a = parseFloat(i.dataset.regularPrice) / 100,
                        s = Math.round(a - (a * o) / 100);
                      t.push({
                        id: i.dataset.varientId,
                        quantity: 1,
                        properties: {
                          "Discount Amount": i.dataset.discountPercentage,
                          "Interval Frequency": "30,45,60",
                          "Interval Unit": "day",
                          Subscription: e + " days",
                          "Subscription Amount": s + ".00",
                          "Subscription Product Title":
                            i.dataset.subscriptionTitle,
                          QuizAnswerOne: localStorage.getItem(
                            "quizAnswerOneText"
                          ),
                          QuizAnswerTwo: localStorage.getItem(
                            "quizAnswerTwoText"
                          ),
                          QuizAnswerThree: localStorage.getItem(
                            "quizAnswerThreeText"
                          ),
                        },
                      });
                    }
                  }),
                    (function (e) {
                      CartJS.addItems(e);
                    })(t);
                }),
                t(window).scroll(function () {
                  var e = t(".c-quizResult").outerHeight();
                  t(window).scrollTop() > e &&
                    t(i.quizResult).hasClass("is-open") &&
                    (i.quizResult.slideUp(),
                    t(".c-quizResult__bar").addClass("is-open"),
                    t("body").addClass("is-reco-open"));
                }),
                t(".c-quizResult__bar").on("click", function () {
                  t(window).scrollTop(0),
                    0 == t(window).scrollTop() &&
                      (i.quizResult.slideDown(),
                      t(".c-quizResult__bar").removeClass("is-open"),
                      t("body").removeClass("is-reco-open"));
                }),
                window.location.href.indexOf("our-story-results") > -1 &&
                  ("Dry" == localStorage.getItem("quizAnswerOneText")
                    ? t(
                        '.c-storyReportTab__row [data-tab="drycombination"]'
                      ).click()
                    : "Oily" == localStorage.getItem("quizAnswerOneText")
                    ? t(
                        '.c-storyReportTab__row [data-tab="oilycombination"]'
                      ).click()
                    : "Normal" == localStorage.getItem("quizAnswerOneText") &&
                      t('.c-storyReportTab__row [data-tab="normal"]').click());
            };
          e.init = function () {
            (i.quizLoader = t("[data-quiz-loader]")),
              (i.quizInner = t(".c-quiz__inner")),
              (i.quizClick = t("[data-quiz-click]")),
              (i.quizClickDesktop = t("[data-quiz-desktop]")),
              (i.quizClickContinue = t("[data-quiz-continue]")),
              (i.quizModal = t("[data-quiz-modal]")),
              (i.quizClose = t("[data-quiz-close]")),
              (i.quizStepFront = t("[data-step-front]")),
              (i.quizStepOne = t("[data-step-one]")),
              (i.quizStepTwo = t("[data-step-two]")),
              (i.quizStepThree = t("[data-step-three]")),
              (i.quizStepFour = t("[data-step-four]")),
              (i.quizStepResult = t("[data-step-result]")),
              (i.quizBackStepOne = t("[data-back-stepone]")),
              (i.quizBackStepTwo = t("[data-back-steptwo]")),
              (i.quizBackStepThree = t("[data-back-stepthree]")),
              (i.quizBtnStepOne = t("[data-button-stepone]")),
              (i.quizBtnStepTwo = t("[data-button-steptwo]")),
              (i.quizBtnStepThree = t("[data-button-stepthree]")),
              (i.quizBtnStepFour = t("[data-button-stepfour]")),
              (i.quizOutter = t(".c-quiz__outter")),
              (i.quizOverlay = t(".c-quiz__overlay")),
              (i.quizStepBarText = t(".c-quizStepBar__text")),
              (i.quizStepBar = t(".c-quizStepBar__bar span")),
              (i.quizContinueBar = t(".c-quiz__continueBar span")),
              (i.quizMainDiv = t(".c-quiz__main")),
              (i.quizBlockListType = t(
                "[data-step-one] .c-quizBlockList__row .c-quizBlockList__box"
              )),
              (i.quizListEvent = t(".c-quizList__row .c-quizList__name")),
              (i.quizBlockListClimate = t(
                "[data-step-three] .c-quizBlockList__row .c-quizBlockList__box"
              )),
              (i.quizBlockListAge = t(
                ".c-quizListAge__row .c-quizListAge__name"
              )),
              (i.quizResult = t(".c-quizResult")),
              (i.quizStepOneAnswer = t("[data-step-one-answer]")),
              (i.quizStepTwoAnswer = t("[data-step-two-answer]")),
              (i.quizStepThreeAnswer = t("[data-step-three-answer]")),
              (i.quizStepFourAnswer = t("[data-step-four-answer]")),
              (i.quizResultCopy = t(".c-quizResult__copy")),
              (i.quizResultRow = t(".c-quizResult__row")),
              (i.quizResultDays = t(".c-quizResult__title")),
              (i.quizRecurringDays = t(".c-quizResult__recurring-days")),
              (i.quizAddToCart = t(".js-quiz-result-atc")),
              s();
          };
        })((window.Quiz = window.Quiz || {}), o.default);
      };
    },
  ])
);
