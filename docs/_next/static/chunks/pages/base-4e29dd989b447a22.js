(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [79],
  {
    1948: (e, r, a) => {
      'use strict';
      (a.r(r), a.d(r, { default: () => n }));
      var s = a(5640),
        t = a(8258);
      let l = (e) => ({
        from: (r) => {
          let a = parseInt(e.toString(), r);
          return { to: (e) => (isNaN(a) ? 'Invalid number or base' : a.toString(e).toUpperCase()) };
        },
      });
      var o = a(148);
      let n = () => {
        let [
          {
            base2: e = l(10).from(10).to(2),
            base8: r = l(10).from(10).to(8),
            base10: a = '10',
            base16: n = l(10).from(10).to(16),
          },
          c,
        ] = (0, o.useState)({
          base2: l(10).from(10).to(2),
          base8: l(10).from(10).to(8),
          base10: '10',
          base16: l(10).from(10).to(16),
        });
        return (0, s.jsxs)('div', {
          className: 'flex h-screen w-screen flex-col',
          children: [
            (0, s.jsx)(t.F, {}),
            (0, s.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            (0, s.jsx)('div', {
              className: 'flex w-full grow items-center justify-center',
              children: (0, s.jsx)('div', {
                className:
                  'flex w-full max-w-sm flex-col gap-y-2 divide-y divide-neutral-800 rounded-xl border border-neutral-800',
                children: [
                  { fromBase: 2, value: e },
                  { fromBase: 8, value: r },
                  { fromBase: 10, value: a },
                  { fromBase: 16, value: n },
                ].map((e) => {
                  let { fromBase: r, value: a } = e;
                  return (0, s.jsxs)(
                    'div',
                    {
                      className: 'flex items-center justify-center gap-x-2 px-4 py-2',
                      children: [
                        (0, s.jsxs)('span', { children: ['Base ', r] }),
                        (0, s.jsx)('input', {
                          type: 'text',
                          id: 'base'.concat(r),
                          placeholder: 'Base '.concat(r),
                          value: a,
                          onChange: (e) => {
                            let a = parseInt(e.target.value);
                            c((e) => ({
                              ...e,
                              base2: l(a).from(r).to(2),
                              base8: l(a).from(r).to(8),
                              base10: l(a).from(r).to(10),
                              base16: l(a).from(r).to(16),
                            }));
                          },
                          className: 'grow text-right focus:outline-none',
                        }),
                      ],
                    },
                    r
                  );
                }),
              }),
            }),
          ],
        });
      };
    },
    2635: (e, r, a) => {
      'use strict';
      a.d(r, { C: () => s });
      let s = 'Calculator';
    },
    8258: (e, r, a) => {
      'use strict';
      a.d(r, { F: () => n });
      var s = a(5640),
        t = a(2635),
        l = a(7864),
        o = a.n(l);
      let n = () =>
        (0, s.jsx)('header', {
          className: 'w-full',
          children: (0, s.jsxs)('div', {
            className: 'container mx-auto flex items-center justify-between gap-x-2 px-4 py-2 md:px-8 md:py-4',
            children: [
              (0, s.jsx)(o(), {
                href: '/',
                children: (0, s.jsx)('h1', { className: 'text-xl font-bold', children: t.C }),
              }),
              (0, s.jsx)('nav', {
                className: 'space-x-4 font-medium text-neutral-500',
                children: [
                  { id: 'base', href: '/base', label: 'Base' },
                  { id: 'crypto', href: '/crypto', label: 'Crypto' },
                  { id: 'forex', href: '/forex', label: 'Forex' },
                  { id: 'roman', href: '/roman', label: 'Roman' },
                ].map((e) => {
                  let { id: r, href: a, label: t } = e;
                  return (0, s.jsx)(o(), { href: a, className: 'text-sm md:text-base', children: t }, r);
                }),
              }),
            ],
          }),
        });
    },
    8535: (e, r, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/base',
        function () {
          return a(1948);
        },
      ]);
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    (e.O(0, [864, 636, 593, 792], () => r(8535)), (_N_E = e.O()));
  },
]);
