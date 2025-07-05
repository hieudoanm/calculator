(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [495],
  {
    2635: (e, a, l) => {
      'use strict';
      l.d(a, { C: () => r });
      let r = 'Calculator';
    },
    6303: (e, a, l) => {
      'use strict';
      (l.r(a), l.d(a, { default: () => m }));
      var r = l(5640),
        t = l(8258);
      let n = (e) => {
          let a = '';
          for (let { value: l, numeral: r } of [
            { value: 1e3, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' },
          ])
            for (; e >= l; ) ((a += r), (e -= l));
          return a;
        },
        s = (e) => {
          let a = { M: 1e3, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 },
            l = 0,
            r = 0;
          for (let t = e.length - 1; t >= 0; t--) {
            let n = a[e[t]];
            (n < r ? (l -= n) : (l += n), (r = n));
          }
          return l.toString();
        };
      var u = l(148);
      let m = () => {
        let [{ arabicNumber: e = '10', romanNumber: a = n(10) }, l] = (0, u.useState)({
          arabicNumber: '10',
          romanNumber: n(10),
        });
        return (0, r.jsxs)('div', {
          className: 'flex h-screen w-screen flex-col',
          children: [
            (0, r.jsx)(t.F, {}),
            (0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            (0, r.jsx)('div', {
              className: 'flex w-full grow items-center justify-center',
              children: (0, r.jsx)('div', {
                className:
                  'flex w-full max-w-sm flex-col gap-y-2 divide-y divide-neutral-800 rounded-xl border border-neutral-800',
                children: [
                  { type: 'arabic', value: e },
                  { type: 'roman', value: a },
                ].map((e) => {
                  let { type: a, value: t } = e;
                  return (0, r.jsxs)(
                    'div',
                    {
                      className: 'flex items-center justify-center gap-x-2 px-4 py-2',
                      children: [
                        (0, r.jsx)('span', { className: 'capitalize', children: a }),
                        (0, r.jsx)('input', {
                          type: 'text',
                          id: a,
                          placeholder: a,
                          value: t,
                          onChange: (e) => {
                            let r = e.target.value,
                              t = 'arabic' === a ? r : s(r),
                              u = 'roman' === a ? r : n(parseInt(r, 10));
                            l((e) => ({ ...e, arabicNumber: t, romanNumber: u }));
                          },
                          className: 'grow text-right focus:outline-none',
                        }),
                      ],
                    },
                    a
                  );
                }),
              }),
            }),
          ],
        });
      };
    },
    8258: (e, a, l) => {
      'use strict';
      l.d(a, { F: () => u });
      var r = l(5640),
        t = l(2635),
        n = l(7864),
        s = l.n(n);
      let u = () =>
        (0, r.jsx)('header', {
          className: 'w-full',
          children: (0, r.jsxs)('div', {
            className: 'container mx-auto flex items-center justify-between gap-x-2 px-4 py-2 md:px-8 md:py-4',
            children: [
              (0, r.jsx)(s(), {
                href: '/',
                children: (0, r.jsx)('h1', { className: 'text-xl font-bold', children: t.C }),
              }),
              (0, r.jsx)('nav', {
                className: 'space-x-4 font-medium text-neutral-500',
                children: [
                  { id: 'base', href: '/base', label: 'Base' },
                  { id: 'crypto', href: '/crypto', label: 'Crypto' },
                  { id: 'forex', href: '/forex', label: 'Forex' },
                  { id: 'roman', href: '/roman', label: 'Roman' },
                ].map((e) => {
                  let { id: a, href: l, label: t } = e;
                  return (0, r.jsx)(s(), { href: l, className: 'text-sm md:text-base', children: t }, a);
                }),
              }),
            ],
          }),
        });
    },
    8791: (e, a, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/roman',
        function () {
          return l(6303);
        },
      ]);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [864, 636, 593, 792], () => a(8791)), (_N_E = e.O()));
  },
]);
