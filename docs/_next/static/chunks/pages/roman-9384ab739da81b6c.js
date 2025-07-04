(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [495],
  {
    6303: (e, a, r) => {
      'use strict';
      (r.r(a), r.d(a, { default: () => s }));
      var l = r(5640);
      let u = (e) => {
          let a = '';
          for (let { value: r, numeral: l } of [
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
            for (; e >= r; ) ((a += l), (e -= r));
          return a;
        },
        n = (e) => {
          let a = { M: 1e3, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 },
            r = 0,
            l = 0;
          for (let u = e.length - 1; u >= 0; u--) {
            let n = a[e[u]];
            (n < l ? (r -= n) : (r += n), (l = n));
          }
          return r.toString();
        };
      var t = r(148);
      let s = () => {
        let [{ arabicNumber: e = '10', romanNumber: a = u(10) }, r] = (0, t.useState)({
          arabicNumber: '10',
          romanNumber: u(10),
        });
        return (0, l.jsx)('div', {
          className: 'flex h-screen w-screen items-center justify-center',
          children: (0, l.jsx)('div', {
            className:
              'flex w-full max-w-sm flex-col gap-y-2 divide-y divide-neutral-800 rounded-xl border border-neutral-800',
            children: [
              { type: 'arabic', value: e },
              { type: 'roman', value: a },
            ].map((e) => {
              let { type: a, value: t } = e;
              return (0, l.jsxs)(
                'div',
                {
                  className: 'flex items-center justify-center gap-x-2 px-4 py-2',
                  children: [
                    (0, l.jsx)('span', { children: a }),
                    (0, l.jsx)('input', {
                      type: 'text',
                      id: a,
                      placeholder: a,
                      value: t,
                      onChange: (e) => {
                        let l = e.target.value,
                          t = 'arabic' === a ? l : n(l),
                          s = 'roman' === a ? l : u(parseInt(l, 10));
                        r((e) => ({ ...e, arabicNumber: t, romanNumber: s }));
                      },
                      className: 'grow text-right focus:outline-none',
                    }),
                  ],
                },
                a
              );
            }),
          }),
        });
      };
    },
    8791: (e, a, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/roman',
        function () {
          return r(6303);
        },
      ]);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [636, 593, 792], () => a(8791)), (_N_E = e.O()));
  },
]);
