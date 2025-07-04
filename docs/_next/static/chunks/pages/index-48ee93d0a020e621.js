(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    386: (e, t, r) => {
      'use strict';
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return N;
          },
          useLinkStatus: function () {
            return g;
          },
        }));
      let l = r(8781),
        n = r(5640),
        s = l._(r(148)),
        a = r(2480),
        o = r(2402),
        u = r(6939),
        c = r(9925),
        i = r(5686),
        d = r(3295),
        f = r(7233),
        x = r(4434),
        p = r(5767),
        m = r(6492);
      r(5446);
      let h = new Set();
      function b(e, t, r, l) {
        if ((0, o.isLocalURL)(t)) {
          if (!l.bypassPrefetchedCheck) {
            let n = t + '%' + r + '%' + (void 0 !== l.locale ? l.locale : 'locale' in e ? e.locale : void 0);
            if (h.has(n)) return;
            h.add(n);
          }
          e.prefetch(t, r, l).catch((e) => {});
        }
      }
      function j(e) {
        return 'string' == typeof e ? e : (0, u.formatUrl)(e);
      }
      let y = s.default.forwardRef(function (e, t) {
          let r,
            l,
            {
              href: u,
              as: h,
              children: y,
              prefetch: v = null,
              passHref: g,
              replace: N,
              shallow: w,
              scroll: _,
              locale: M,
              onClick: O,
              onNavigate: P,
              onMouseEnter: C,
              onTouchStart: k,
              legacyBehavior: E = !1,
              ...D
            } = e;
          ((r = y), E && ('string' == typeof r || 'number' == typeof r) && (r = (0, n.jsx)('a', { children: r })));
          let R = s.default.useContext(d.RouterContext),
            L = !1 !== v,
            { href: I, as: T } = s.default.useMemo(() => {
              if (!R) {
                let e = j(u);
                return { href: e, as: h ? j(h) : e };
              }
              let [e, t] = (0, a.resolveHref)(R, u, !0);
              return { href: e, as: h ? (0, a.resolveHref)(R, h) : t || e };
            }, [R, u, h]),
            S = s.default.useRef(I),
            A = s.default.useRef(T);
          E && (l = s.default.Children.only(r));
          let U = E ? l && 'object' == typeof l && l.ref : t,
            [F, H, K] = (0, f.useIntersection)({ rootMargin: '200px' }),
            G = s.default.useCallback(
              (e) => {
                ((A.current !== T || S.current !== I) && (K(), (A.current = T), (S.current = I)), F(e));
              },
              [T, I, K, F]
            ),
            q = (0, m.useMergedRef)(G, U);
          s.default.useEffect(() => {
            R && H && L && b(R, I, T, { locale: M });
          }, [T, I, H, M, L, null == R ? void 0 : R.locale, R]);
          let B = {
            ref: q,
            onClick(e) {
              (E || 'function' != typeof O || O(e),
                E && l.props && 'function' == typeof l.props.onClick && l.props.onClick(e),
                R &&
                  (e.defaultPrevented ||
                    (function (e, t, r, l, n, s, a, u, c) {
                      let { nodeName: i } = e.currentTarget;
                      if (
                        !(
                          ('A' === i.toUpperCase() &&
                            (function (e) {
                              let t = e.currentTarget.getAttribute('target');
                              return (
                                (t && '_self' !== t) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              );
                            })(e)) ||
                          e.currentTarget.hasAttribute('download')
                        )
                      ) {
                        if (!(0, o.isLocalURL)(r)) {
                          n && (e.preventDefault(), location.replace(r));
                          return;
                        }
                        (e.preventDefault(),
                          (() => {
                            if (c) {
                              let e = !1;
                              if (
                                (c({
                                  preventDefault: () => {
                                    e = !0;
                                  },
                                }),
                                e)
                              )
                                return;
                            }
                            let e = null == a || a;
                            'beforePopState' in t
                              ? t[n ? 'replace' : 'push'](r, l, { shallow: s, locale: u, scroll: e })
                              : t[n ? 'replace' : 'push'](l || r, { scroll: e });
                          })());
                      }
                    })(e, R, I, T, N, w, _, M, P)));
            },
            onMouseEnter(e) {
              (E || 'function' != typeof C || C(e),
                E && l.props && 'function' == typeof l.props.onMouseEnter && l.props.onMouseEnter(e),
                R && b(R, I, T, { locale: M, priority: !0, bypassPrefetchedCheck: !0 }));
            },
            onTouchStart: function (e) {
              (E || 'function' != typeof k || k(e),
                E && l.props && 'function' == typeof l.props.onTouchStart && l.props.onTouchStart(e),
                R && b(R, I, T, { locale: M, priority: !0, bypassPrefetchedCheck: !0 }));
            },
          };
          if ((0, c.isAbsoluteUrl)(T)) B.href = T;
          else if (!E || g || ('a' === l.type && !('href' in l.props))) {
            let e = void 0 !== M ? M : null == R ? void 0 : R.locale;
            B.href =
              ((null == R ? void 0 : R.isLocaleDomain) &&
                (0, x.getDomainLocale)(T, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales)) ||
              (0, p.addBasePath)((0, i.addLocale)(T, e, null == R ? void 0 : R.defaultLocale));
          }
          return E ? s.default.cloneElement(l, B) : (0, n.jsx)('a', { ...D, ...B, children: r });
        }),
        v = (0, s.createContext)({ pending: !1 }),
        g = () => (0, s.useContext)(v),
        N = y;
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4434: (e, t, r) => {
      'use strict';
      function l(e, t, r, l) {
        return !1;
      }
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        r(1092),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    5446: (e, t) => {
      'use strict';
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'errorOnce', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let r = (e) => {};
    },
    5739: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => f }));
      var l = r(5640);
      let n = () =>
          (0, l.jsx)('section', {
            className: 'w-full py-16',
            children: (0, l.jsxs)('div', {
              className: 'mx-auto max-w-3xl px-6 text-center',
              children: [
                (0, l.jsx)('h3', {
                  className: 'text-2xl font-bold sm:text-3xl',
                  children: 'Need fast and reliable calculations?',
                }),
                (0, l.jsx)('p', {
                  className: 'mt-4 text-neutral-500',
                  children:
                    'Use our powerful calculator right in your browser — no downloads, no sign-up, just results.',
                }),
              ],
            }),
          }),
        s = () =>
          (0, l.jsx)('section', {
            className: 'py-16',
            children: (0, l.jsxs)('div', {
              className: 'mx-auto max-w-6xl px-6 text-center',
              children: [
                (0, l.jsx)('h3', {
                  className: 'text-3xl font-semibold sm:text-4xl',
                  children: 'Why Use Our Calculator?',
                }),
                (0, l.jsx)('p', {
                  className: 'mx-auto mt-4 max-w-2xl text-neutral-500',
                  children:
                    'Perform quick, accurate calculations right in your browser. No sign-up. No distractions. Just results.',
                }),
                (0, l.jsxs)('div', {
                  className: 'mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, l.jsx)('h4', { className: 'text-lg font-semibold', children: '⚡ Instant Results' }),
                        (0, l.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children: 'Get answers as you type — no delays, no loading screens.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, l.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83D\uDD12 100% Local' }),
                        (0, l.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children: 'All calculations happen in your browser. No data is sent anywhere.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, l.jsx)('h4', {
                          className: 'text-lg font-semibold',
                          children: '\uD83E\uDDEE Versatile Functions',
                        }),
                        (0, l.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children: 'From basic arithmetic to advanced functions — it’s all built in and easy to use.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        a = 'Calculator';
      var o = r(7864),
        u = r.n(o);
      let c = () =>
          (0, l.jsx)('footer', {
            className: 'w-full py-8',
            children: (0, l.jsxs)('div', {
              className:
                'mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-neutral-500 sm:flex-row',
              children: [
                (0, l.jsxs)('p', { children: ['\xa9 ', new Date().getFullYear(), ' ', a, '. All rights reserved.'] }),
                (0, l.jsx)('div', {
                  className: 'space-x-4',
                  children: (0, l.jsx)(u(), {
                    href: 'https://github.com/hieudoanm/numbers',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'hover:underline',
                    children: 'GitHub',
                  }),
                }),
              ],
            }),
          }),
        i = () =>
          (0, l.jsx)('section', {
            className: 'w-full py-20',
            children: (0, l.jsxs)('div', {
              className: 'mx-auto max-w-3xl px-4 text-center sm:px-6',
              children: [
                (0, l.jsx)('h2', { className: 'text-4xl font-extrabold text-neutral-100 sm:text-5xl', children: a }),
                (0, l.jsx)('p', {
                  className: 'mt-6 text-lg text-neutral-500',
                  children: 'A fast, clean, and reliable calculator — right in your browser.',
                }),
              ],
            }),
          }),
        d = () =>
          (0, l.jsx)('header', {
            className: 'w-full',
            children: (0, l.jsxs)('div', {
              className: 'mx-auto flex max-w-7xl items-center justify-between px-6 py-4',
              children: [
                (0, l.jsx)('h1', { className: 'text-xl font-bold', children: a }),
                (0, l.jsxs)('nav', {
                  className: 'space-x-4 font-medium text-neutral-500',
                  children: [
                    (0, l.jsx)(u(), { href: '/base', children: 'Base' }),
                    (0, l.jsx)(u(), { href: '/roman', children: 'Roman' }),
                    (0, l.jsx)(u(), {
                      href: 'https://github.com/hieudoanm/numbers',
                      target: '_blank',
                      className: 'hover:text-black',
                      children: 'GitHub',
                    }),
                  ],
                }),
              ],
            }),
          }),
        f = () =>
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(d, {}),
              (0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
              (0, l.jsx)(i, {}),
              (0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
              (0, l.jsx)(s, {}),
              (0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
              (0, l.jsx)(n, {}),
              (0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
              (0, l.jsx)(c, {}),
            ],
          });
    },
    6492: (e, t, r) => {
      'use strict';
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useMergedRef', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let l = r(148);
      function n(e, t) {
        let r = (0, l.useRef)(null),
          n = (0, l.useRef)(null);
        return (0, l.useCallback)(
          (l) => {
            if (null === l) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = n.current;
              t && ((n.current = null), t());
            } else (e && (r.current = s(e, l)), t && (n.current = s(t, l)));
          },
          [e, t]
        );
      }
      function s(e, t) {
        if ('function' != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return 'function' == typeof r ? r : () => e(null);
        }
      }
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7233: (e, t, r) => {
      'use strict';
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let l = r(148),
        n = r(9780),
        s = 'function' == typeof IntersectionObserver,
        a = new Map(),
        o = [];
      function u(e) {
        let { rootRef: t, rootMargin: r, disabled: u } = e,
          c = u || !s,
          [i, d] = (0, l.useState)(!1),
          f = (0, l.useRef)(null),
          x = (0, l.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, l.useEffect)(() => {
            if (s) {
              if (c || i) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: l,
                    observer: n,
                    elements: s,
                  } = (function (e) {
                    let t,
                      r = { root: e.root || null, margin: e.rootMargin || '' },
                      l = o.find((e) => e.root === r.root && e.margin === r.margin);
                    if (l && (t = a.get(l))) return t;
                    let n = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = n.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: n,
                      }),
                      o.push(r),
                      a.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    s.set(e, t),
                    n.observe(e),
                    function () {
                      if ((s.delete(e), n.unobserve(e), 0 === s.size)) {
                        (n.disconnect(), a.delete(l));
                        let e = o.findIndex((e) => e.root === l.root && e.margin === l.margin);
                        e > -1 && o.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), { root: null == t ? void 0 : t.current, rootMargin: r });
            } else if (!i) {
              let e = (0, n.requestIdleCallback)(() => d(!0));
              return () => (0, n.cancelIdleCallback)(e);
            }
          }, [c, r, t, i, f.current]),
          [
            x,
            i,
            (0, l.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7864: (e, t, r) => {
      e.exports = r(386);
    },
    8898: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(5739);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [636, 593, 792], () => t(8898)), (_N_E = e.O()));
  },
]);
