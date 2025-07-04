(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    2147: () => {},
    4626: (a, e, s) => {
      a.exports = s(5274);
    },
    6404: (a, e, s) => {
      'use strict';
      (s.r(e), s.d(e, { default: () => o }));
      var l = s(5640);
      s(2147);
      var t = s(7332),
        n = s.n(t),
        r = s(8580),
        _ = s.n(r),
        c = s(4626),
        i = s.n(c);
      let o = (a) => {
        let { Component: e, pageProps: s } = a;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(i(), { children: (0, l.jsx)('title', { children: 'Numbers' }) }),
            (0, l.jsx)('div', {
              className: ''.concat(n().className, ' ').concat(_().className),
              children: (0, l.jsx)('div', {
                className: 'bg-neutral-900 text-neutral-100',
                children: (0, l.jsx)(e, { ...s }),
              }),
            }),
          ],
        });
      };
    },
    7332: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_17e5db',
        variable: '__variable_17e5db',
      };
    },
    8462: (a, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return s(6404);
        },
      ]);
    },
    8580: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
        className: '__className_0b052a',
        variable: '__variable_0b052a',
      };
    },
  },
  (a) => {
    var e = (e) => a((a.s = e));
    (a.O(0, [593, 792], () => (e(8462), e(8231))), (_N_E = a.O()));
  },
]);
