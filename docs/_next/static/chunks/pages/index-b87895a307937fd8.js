(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    1863: (e, s, l) => {
      'use strict';
      (l.r(s), l.d(s, { default: () => m }));
      var t = l(5640);
      let a = () =>
          (0, t.jsx)('section', {
            className: 'w-full py-16',
            children: (0, t.jsxs)('div', {
              className: 'mx-auto max-w-3xl px-6 text-center',
              children: [
                (0, t.jsx)('h3', {
                  className: 'text-2xl font-bold sm:text-3xl',
                  children: 'Need fast and reliable calculations?',
                }),
                (0, t.jsx)('p', {
                  className: 'mt-4 text-neutral-500',
                  children:
                    'Use our powerful calculator right in your browser — no downloads, no sign-up, just results.',
                }),
              ],
            }),
          }),
        r = () =>
          (0, t.jsx)('section', {
            className: 'py-16',
            children: (0, t.jsxs)('div', {
              className: 'mx-auto max-w-6xl px-6 text-center',
              children: [
                (0, t.jsx)('h3', {
                  className: 'text-3xl font-semibold sm:text-4xl',
                  children: 'Why Use Our Calculator?',
                }),
                (0, t.jsx)('p', {
                  className: 'mx-auto mt-4 max-w-2xl text-neutral-500',
                  children:
                    'Perform quick, accurate calculations right in your browser. No sign-up. No distractions. Just results.',
                }),
                (0, t.jsxs)('div', {
                  className: 'mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
                  children: [
                    (0, t.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, t.jsx)('h4', { className: 'text-lg font-semibold', children: '⚡ Instant Results' }),
                        (0, t.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children: 'Get answers as you type — no delays, no loading screens.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, t.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83D\uDD12 100% Local' }),
                        (0, t.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children: 'All calculations happen in your browser. No data is sent anywhere.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, t.jsx)('h4', {
                          className: 'text-lg font-semibold',
                          children: '\uD83E\uDDEE Versatile Functions',
                        }),
                        (0, t.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children: 'From basic arithmetic to advanced functions — it’s all built in and easy to use.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
      var n = l(2635),
        c = l(7864),
        x = l.n(c);
      let d = () =>
          (0, t.jsx)('footer', {
            className: 'w-full py-8',
            children: (0, t.jsxs)('div', {
              className:
                'mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-neutral-500 sm:flex-row',
              children: [
                (0, t.jsxs)('p', { children: ['\xa9 ', new Date().getFullYear(), ' ', n.C, '. All rights reserved.'] }),
                (0, t.jsx)('div', {
                  className: 'space-x-4',
                  children: (0, t.jsx)(x(), {
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
          (0, t.jsx)('section', {
            className: 'w-full py-20',
            children: (0, t.jsxs)('div', {
              className: 'mx-auto max-w-3xl px-4 text-center sm:px-6',
              children: [
                (0, t.jsx)('h2', { className: 'text-4xl font-extrabold text-neutral-100 sm:text-5xl', children: n.C }),
                (0, t.jsx)('p', {
                  className: 'mt-6 text-lg text-neutral-500',
                  children: 'A fast, clean, and reliable calculator — right in your browser.',
                }),
              ],
            }),
          });
      var o = l(8258);
      let m = () =>
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o.F, {}),
            (0, t.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            (0, t.jsx)(i, {}),
            (0, t.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            (0, t.jsx)(r, {}),
            (0, t.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            (0, t.jsx)(a, {}),
            (0, t.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            (0, t.jsx)(d, {}),
          ],
        });
    },
    2635: (e, s, l) => {
      'use strict';
      l.d(s, { C: () => t });
      let t = 'Calculator';
    },
    8258: (e, s, l) => {
      'use strict';
      l.d(s, { F: () => c });
      var t = l(5640),
        a = l(2635),
        r = l(7864),
        n = l.n(r);
      let c = () =>
        (0, t.jsx)('header', {
          className: 'w-full',
          children: (0, t.jsxs)('div', {
            className: 'container mx-auto flex items-center justify-between gap-x-2 px-4 py-2 md:px-8 md:py-4',
            children: [
              (0, t.jsx)(n(), {
                href: '/',
                children: (0, t.jsx)('h1', { className: 'text-xl font-bold', children: a.C }),
              }),
              (0, t.jsx)('nav', {
                className: 'space-x-4 font-medium text-neutral-500',
                children: [
                  { id: 'base', href: '/base', label: 'Base' },
                  { id: 'crypto', href: '/crypto', label: 'Crypto' },
                  { id: 'forex', href: '/forex', label: 'Forex' },
                  { id: 'roman', href: '/roman', label: 'Roman' },
                ].map((e) => {
                  let { id: s, href: l, label: a } = e;
                  return (0, t.jsx)(n(), { href: l, className: 'text-sm md:text-base', children: a }, s);
                }),
              }),
            ],
          }),
        });
    },
    8898: (e, s, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return l(1863);
        },
      ]);
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    (e.O(0, [864, 636, 593, 792], () => s(8898)), (_N_E = e.O()));
  },
]);
