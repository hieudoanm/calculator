(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    4713: (e, r, t) => {
      'use strict';
      (t.r(r), t.d(r, { default: () => n }));
      var a = t(5640);
      let s = (e) => ({
        from: (r) => {
          let t = parseInt(e.toString(), r);
          return { to: (e) => (isNaN(t) ? 'Invalid number or base' : t.toString(e).toUpperCase()) };
        },
      });
      var o = t(148);
      let n = () => {
        let [
          {
            base2: e = s(10).from(10).to(2),
            base8: r = s(10).from(10).to(8),
            base10: t = '10',
            base16: n = s(10).from(10).to(16),
          },
          l,
        ] = (0, o.useState)({
          base2: s(10).from(10).to(2),
          base8: s(10).from(10).to(8),
          base10: '10',
          base16: s(10).from(10).to(16),
        });
        return (0, a.jsx)('div', {
          className: 'flex h-screen w-screen items-center justify-center',
          children: (0, a.jsx)('div', {
            className:
              'flex w-full max-w-sm flex-col gap-y-2 divide-y divide-neutral-200 rounded border border-neutral-200 shadow-sm',
            children: [
              { fromBase: 2, value: e },
              { fromBase: 8, value: r },
              { fromBase: 10, value: t },
              { fromBase: 16, value: n },
            ].map((e) => {
              let { fromBase: r, value: t } = e;
              return (0, a.jsxs)(
                'div',
                {
                  className: 'flex items-center justify-center gap-x-2 px-4 py-2',
                  children: [
                    (0, a.jsxs)('span', { children: ['Base ', r] }),
                    (0, a.jsx)('input', {
                      type: 'text',
                      id: 'base'.concat(r),
                      placeholder: 'Base '.concat(r),
                      value: t,
                      onChange: (e) => {
                        let t = parseInt(e.target.value);
                        l((e) => ({
                          ...e,
                          base2: s(t).from(r).to(2),
                          base8: s(t).from(r).to(8),
                          base10: s(t).from(r).to(10),
                          base16: s(t).from(r).to(16),
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
        });
      };
    },
    8898: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(4713);
        },
      ]);
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    (e.O(0, [636, 593, 792], () => r(8898)), (_N_E = e.O()));
  },
]);
