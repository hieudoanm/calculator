(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    0: (t, e, s) => {
      'use strict';
      s.d(e, { II: () => l, v_: () => u, wm: () => c });
      var i = s(8416),
        r = s(1951),
        n = s(904),
        a = s(6028);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function u(t) {
        return (t ?? 'online') !== 'online' || r.t.isOnline();
      }
      var h = class extends Error {
        constructor(t) {
          (super('CancelledError'), (this.revert = t?.revert), (this.silent = t?.silent));
        }
      };
      function c(t) {
        return t instanceof h;
      }
      function l(t) {
        let e,
          s = !1,
          c = 0,
          l = !1,
          d = (0, n.T)(),
          f = () => i.m.isFocused() && ('always' === t.networkMode || r.t.isOnline()) && t.canRun(),
          p = () => u(t.networkMode) && t.canRun(),
          y = (s) => {
            l || ((l = !0), t.onSuccess?.(s), e?.(), d.resolve(s));
          },
          m = (s) => {
            l || ((l = !0), t.onError?.(s), e?.(), d.reject(s));
          },
          v = () =>
            new Promise((s) => {
              ((e = (t) => {
                (l || f()) && s(t);
              }),
                t.onPause?.());
            }).then(() => {
              ((e = void 0), l || t.onContinue?.());
            }),
          b = () => {
            let e;
            if (l) return;
            let i = 0 === c ? t.initialPromise : void 0;
            try {
              e = i ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(y)
              .catch((e) => {
                if (l) return;
                let i = t.retry ?? 3 * !a.S$,
                  r = t.retryDelay ?? o,
                  n = 'function' == typeof r ? r(c, e) : r,
                  u = !0 === i || ('number' == typeof i && c < i) || ('function' == typeof i && i(c, e));
                if (s || !u) return void m(e);
                (c++,
                  t.onFail?.(c, e),
                  (0, a.yy)(n)
                    .then(() => (f() ? void 0 : v()))
                    .then(() => {
                      s ? m(e) : b();
                    }));
              });
          };
        return {
          promise: d,
          cancel: (e) => {
            l || (m(new h(e)), t.abort?.());
          },
          continue: () => (e?.(), d),
          cancelRetry: () => {
            s = !0;
          },
          continueRetry: () => {
            s = !1;
          },
          canStart: p,
          start: () => (p() ? b() : v().then(b), d),
        };
      }
    },
    904: (t, e, s) => {
      'use strict';
      function i() {
        let t,
          e,
          s = new Promise((s, i) => {
            ((t = s), (e = i));
          });
        function i(t) {
          (Object.assign(s, t), delete s.resolve, delete s.reject);
        }
        return (
          (s.status = 'pending'),
          s.catch(() => {}),
          (s.resolve = (e) => {
            (i({ status: 'fulfilled', value: e }), t(e));
          }),
          (s.reject = (t) => {
            (i({ status: 'rejected', reason: t }), e(t));
          }),
          s
        );
      }
      s.d(e, { T: () => i });
    },
    1169: (t, e, s) => {
      'use strict';
      s.d(e, { jG: () => r });
      var i = (t) => setTimeout(t, 0),
        r = (function () {
          let t = [],
            e = 0,
            s = (t) => {
              t();
            },
            r = (t) => {
              t();
            },
            n = i,
            a = (i) => {
              e
                ? t.push(i)
                : n(() => {
                    s(i);
                  });
            },
            o = () => {
              let e = t;
              ((t = []),
                e.length &&
                  n(() => {
                    r(() => {
                      e.forEach((t) => {
                        s(t);
                      });
                    });
                  }));
            };
          return {
            batch: (t) => {
              let s;
              e++;
              try {
                s = t();
              } finally {
                --e || o();
              }
              return s;
            },
            batchCalls:
              (t) =>
              (...e) => {
                a(() => {
                  t(...e);
                });
              },
            schedule: a,
            setNotifyFunction: (t) => {
              s = t;
            },
            setBatchNotifyFunction: (t) => {
              r = t;
            },
            setScheduler: (t) => {
              n = t;
            },
          };
        })();
    },
    1951: (t, e, s) => {
      'use strict';
      s.d(e, { t: () => n });
      var i = s(5090),
        r = s(6028),
        n = new (class extends i.Q {
          #t = !0;
          #e;
          #s;
          constructor() {
            (super(),
              (this.#s = (t) => {
                if (!r.S$ && window.addEventListener) {
                  let e = () => t(!0),
                    s = () => t(!1);
                  return (
                    window.addEventListener('online', e, !1),
                    window.addEventListener('offline', s, !1),
                    () => {
                      (window.removeEventListener('online', e), window.removeEventListener('offline', s));
                    }
                  );
                }
              }));
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#s);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            ((this.#s = t), this.#e?.(), (this.#e = t(this.setOnline.bind(this))));
          }
          setOnline(t) {
            this.#t !== t &&
              ((this.#t = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#t;
          }
        })();
    },
    2147: () => {},
    3441: (t, e, s) => {
      'use strict';
      s.d(e, { X: () => o, k: () => u });
      var i = s(6028),
        r = s(1169),
        n = s(0),
        a = s(8092),
        o = class extends a.k {
          #i;
          #r;
          #n;
          #a;
          #o;
          #u;
          #h;
          constructor(t) {
            (super(),
              (this.#h = !1),
              (this.#u = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#a = t.client),
              (this.#n = this.#a.getQueryCache()),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#i = (function (t) {
                let e = 'function' == typeof t.initialData ? t.initialData() : t.initialData,
                  s = void 0 !== e,
                  i = s
                    ? 'function' == typeof t.initialDataUpdatedAt
                      ? t.initialDataUpdatedAt()
                      : t.initialDataUpdatedAt
                    : 0;
                return {
                  data: e,
                  dataUpdateCount: 0,
                  dataUpdatedAt: s ? (i ?? Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: s ? 'success' : 'pending',
                  fetchStatus: 'idle',
                };
              })(this.options)),
              (this.state = t.state ?? this.#i),
              this.scheduleGc());
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#o?.promise;
          }
          setOptions(t) {
            ((this.options = { ...this.#u, ...t }), this.updateGcTime(this.options.gcTime));
          }
          optionalRemove() {
            this.observers.length || 'idle' !== this.state.fetchStatus || this.#n.remove(this);
          }
          setData(t, e) {
            let s = (0, i.pl)(this.state.data, t, this.options);
            return (this.#c({ data: s, type: 'success', dataUpdatedAt: e?.updatedAt, manual: e?.manual }), s);
          }
          setState(t, e) {
            this.#c({ type: 'setState', state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#o?.promise;
            return (this.#o?.cancel(t), e ? e.then(i.lQ).catch(i.lQ) : Promise.resolve());
          }
          destroy() {
            (super.destroy(), this.cancel({ silent: !0 }));
          }
          reset() {
            (this.destroy(), this.setState(this.#i));
          }
          isActive() {
            return this.observers.some((t) => !1 !== (0, i.Eh)(t.options.enabled, this));
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === i.hT || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some((t) => 'static' === (0, i.d2)(t.options.staleTime, this))
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((t) => t.getCurrentResult().isStale)
              : void 0 === this.state.data || this.state.isInvalidated;
          }
          isStaleByTime(t = 0) {
            return (
              void 0 === this.state.data ||
              ('static' !== t && (!!this.state.isInvalidated || !(0, i.j3)(this.state.dataUpdatedAt, t)))
            );
          }
          onFocus() {
            let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            (t?.refetch({ cancelRefetch: !1 }), this.#o?.continue());
          }
          onOnline() {
            let t = this.observers.find((t) => t.shouldFetchOnReconnect());
            (t?.refetch({ cancelRefetch: !1 }), this.#o?.continue());
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#n.notify({ type: 'observerAdded', query: this, observer: t }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((e) => e !== t)),
              this.observers.length ||
                (this.#o && (this.#h ? this.#o.cancel({ revert: !0 }) : this.#o.cancelRetry()), this.scheduleGc()),
              this.#n.notify({ type: 'observerRemoved', query: this, observer: t }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#c({ type: 'invalidate' });
          }
          fetch(t, e) {
            if ('idle' !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && e?.cancelRefetch) this.cancel({ silent: !0 });
              else if (this.#o) return (this.#o.continueRetry(), this.#o.promise);
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let s = new AbortController(),
              r = (t) => {
                Object.defineProperty(t, 'signal', { enumerable: !0, get: () => ((this.#h = !0), s.signal) });
              },
              a = () => {
                let t = (0, i.ZM)(this.options, e),
                  s = (() => {
                    let t = { client: this.#a, queryKey: this.queryKey, meta: this.meta };
                    return (r(t), t);
                  })();
                return ((this.#h = !1), this.options.persister) ? this.options.persister(t, s, this) : t(s);
              },
              o = (() => {
                let t = {
                  fetchOptions: e,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#a,
                  state: this.state,
                  fetchFn: a,
                };
                return (r(t), t);
              })();
            (this.options.behavior?.onFetch(o, this),
              (this.#r = this.state),
              ('idle' === this.state.fetchStatus || this.state.fetchMeta !== o.fetchOptions?.meta) &&
                this.#c({ type: 'fetch', meta: o.fetchOptions?.meta }));
            let u = (t) => {
              (((0, n.wm)(t) && t.silent) || this.#c({ type: 'error', error: t }),
                (0, n.wm)(t) ||
                  (this.#n.config.onError?.(t, this), this.#n.config.onSettled?.(this.state.data, t, this)),
                this.scheduleGc());
            };
            return (
              (this.#o = (0, n.II)({
                initialPromise: e?.initialPromise,
                fn: o.fetchFn,
                abort: s.abort.bind(s),
                onSuccess: (t) => {
                  if (void 0 === t) return void u(Error(`${this.queryHash} data is undefined`));
                  try {
                    this.setData(t);
                  } catch (t) {
                    u(t);
                    return;
                  }
                  (this.#n.config.onSuccess?.(t, this),
                    this.#n.config.onSettled?.(t, this.state.error, this),
                    this.scheduleGc());
                },
                onError: u,
                onFail: (t, e) => {
                  this.#c({ type: 'failed', failureCount: t, error: e });
                },
                onPause: () => {
                  this.#c({ type: 'pause' });
                },
                onContinue: () => {
                  this.#c({ type: 'continue' });
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0,
              })),
              this.#o.start()
            );
          }
          #c(t) {
            ((this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return { ...e, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                case 'pause':
                  return { ...e, fetchStatus: 'paused' };
                case 'continue':
                  return { ...e, fetchStatus: 'fetching' };
                case 'fetch':
                  return { ...e, ...u(e.data, this.options), fetchMeta: t.meta ?? null };
                case 'success':
                  return (
                    (this.#r = void 0),
                    {
                      ...e,
                      data: t.data,
                      dataUpdateCount: e.dataUpdateCount + 1,
                      dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                      error: null,
                      isInvalidated: !1,
                      status: 'success',
                      ...(!t.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
                    }
                  );
                case 'error':
                  let s = t.error;
                  if ((0, n.wm)(s) && s.revert && this.#r) return { ...this.#r, fetchStatus: 'idle' };
                  return {
                    ...e,
                    error: s,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return { ...e, isInvalidated: !0 };
                case 'setState':
                  return { ...e, ...t.state };
              }
            })(this.state)),
              r.jG.batch(() => {
                (this.observers.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#n.notify({ query: this, type: 'updated', action: t }));
              }));
          }
        };
      function u(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, n.v_)(e.networkMode) ? 'fetching' : 'paused',
          ...(void 0 === t && { error: null, status: 'pending' }),
        };
      }
    },
    4626: (t, e, s) => {
      t.exports = s(5274);
    },
    5090: (t, e, s) => {
      'use strict';
      s.d(e, { Q: () => i });
      var i = class {
        constructor() {
          ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              (this.listeners.delete(t), this.onUnsubscribe());
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    5906: (t, e, s) => {
      'use strict';
      s.d(e, { Ht: () => o, jE: () => a });
      var i = s(148),
        r = s(5640),
        n = i.createContext(void 0),
        a = (t) => {
          let e = i.useContext(n);
          if (t) return t;
          if (!e) throw Error('No QueryClient set, use QueryClientProvider to set one');
          return e;
        },
        o = ({ client: t, children: e }) => (
          i.useEffect(
            () => (
              t.mount(),
              () => {
                t.unmount();
              }
            ),
            [t]
          ),
          (0, r.jsx)(n.Provider, { value: t, children: e })
        );
    },
    6028: (t, e, s) => {
      'use strict';
      s.d(e, {
        Cp: () => p,
        EN: () => f,
        Eh: () => h,
        F$: () => d,
        GU: () => P,
        MK: () => c,
        S$: () => i,
        ZM: () => S,
        ZZ: () => O,
        Zw: () => n,
        d2: () => u,
        f8: () => y,
        gn: () => a,
        hT: () => q,
        j3: () => o,
        lQ: () => r,
        nJ: () => l,
        pl: () => C,
        y9: () => w,
        yy: () => g,
      });
      var i = 'undefined' == typeof window || 'Deno' in globalThis;
      function r() {}
      function n(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function a(t) {
        return 'number' == typeof t && t >= 0 && t !== 1 / 0;
      }
      function o(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function h(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function c(t, e) {
        let { type: s = 'all', exact: i, fetchStatus: r, predicate: n, queryKey: a, stale: o } = t;
        if (a) {
          if (i) {
            if (e.queryHash !== d(a, e.options)) return !1;
          } else if (!p(e.queryKey, a)) return !1;
        }
        if ('all' !== s) {
          let t = e.isActive();
          if (('active' === s && !t) || ('inactive' === s && t)) return !1;
        }
        return ('boolean' != typeof o || e.isStale() === o) && (!r || r === e.state.fetchStatus) && (!n || !!n(e));
      }
      function l(t, e) {
        let { exact: s, status: i, predicate: r, mutationKey: n } = t;
        if (n) {
          if (!e.options.mutationKey) return !1;
          if (s) {
            if (f(e.options.mutationKey) !== f(n)) return !1;
          } else if (!p(e.options.mutationKey, n)) return !1;
        }
        return (!i || e.state.status === i) && (!r || !!r(e));
      }
      function d(t, e) {
        return (e?.queryKeyHashFn || f)(t);
      }
      function f(t) {
        return JSON.stringify(t, (t, e) =>
          v(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, s) => ((t[s] = e[s]), t), {})
            : e
        );
      }
      function p(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            'object' == typeof t &&
            'object' == typeof e &&
            Object.keys(e).every((s) => p(t[s], e[s])))
        );
      }
      function y(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let s in t) if (t[s] !== e[s]) return !1;
        return !0;
      }
      function m(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function v(t) {
        if (!b(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let s = e.prototype;
        return !!b(s) && !!s.hasOwnProperty('isPrototypeOf') && Object.getPrototypeOf(t) === Object.prototype;
      }
      function b(t) {
        return '[object Object]' === Object.prototype.toString.call(t);
      }
      function g(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function C(t, e, s) {
        return 'function' == typeof s.structuralSharing
          ? s.structuralSharing(t, e)
          : !1 !== s.structuralSharing
            ? (function t(e, s) {
                if (e === s) return e;
                let i = m(e) && m(s);
                if (i || (v(e) && v(s))) {
                  let r = i ? e : Object.keys(e),
                    n = r.length,
                    a = i ? s : Object.keys(s),
                    o = a.length,
                    u = i ? [] : {},
                    h = new Set(r),
                    c = 0;
                  for (let r = 0; r < o; r++) {
                    let n = i ? r : a[r];
                    ((!i && h.has(n)) || i) && void 0 === e[n] && void 0 === s[n]
                      ? ((u[n] = void 0), c++)
                      : ((u[n] = t(e[n], s[n])), u[n] === e[n] && void 0 !== e[n] && c++);
                  }
                  return n === o && c === n ? e : u;
                }
                return s;
              })(t, e)
            : e;
      }
      function w(t, e, s = 0) {
        let i = [...t, e];
        return s && i.length > s ? i.slice(1) : i;
      }
      function O(t, e, s = 0) {
        let i = [e, ...t];
        return s && i.length > s ? i.slice(0, -1) : i;
      }
      var q = Symbol();
      function S(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== q
            ? t.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
      function P(t, e) {
        return 'function' == typeof t ? t(...e) : !!t;
      }
    },
    7332: (t) => {
      t.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_17e5db',
        variable: '__variable_17e5db',
      };
    },
    8092: (t, e, s) => {
      'use strict';
      s.d(e, { k: () => r });
      var i = s(6028),
        r = class {
          #l;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            (this.clearGcTimeout(),
              (0, i.gn)(this.gcTime) &&
                (this.#l = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime)));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (i.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#l && (clearTimeout(this.#l), (this.#l = void 0));
          }
        };
    },
    8416: (t, e, s) => {
      'use strict';
      s.d(e, { m: () => n });
      var i = s(5090),
        r = s(6028),
        n = new (class extends i.Q {
          #d;
          #e;
          #s;
          constructor() {
            (super(),
              (this.#s = (t) => {
                if (!r.S$ && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener('visibilitychange', e, !1),
                    () => {
                      window.removeEventListener('visibilitychange', e);
                    }
                  );
                }
              }));
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#s);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            ((this.#s = t),
              this.#e?.(),
              (this.#e = t((t) => {
                'boolean' == typeof t ? this.setFocused(t) : this.onFocus();
              })));
          }
          setFocused(t) {
            this.#d !== t && ((this.#d = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return 'boolean' == typeof this.#d ? this.#d : globalThis.document?.visibilityState !== 'hidden';
          }
        })();
    },
    8462: (t, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return s(8670);
        },
      ]);
    },
    8580: (t) => {
      t.exports = {
        style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
        className: '__className_0b052a',
        variable: '__variable_0b052a',
      };
    },
    8670: (t, e, s) => {
      'use strict';
      (s.r(e), s.d(e, { default: () => F }));
      var i = s(5640);
      s(2147);
      var r = s(5906),
        n = s(6028),
        a = s(3441),
        o = s(1169),
        u = s(5090),
        h = class extends u.Q {
          constructor(t = {}) {
            (super(), (this.config = t), (this.#f = new Map()));
          }
          #f;
          build(t, e, s) {
            let i = e.queryKey,
              r = e.queryHash ?? (0, n.F$)(i, e),
              o = this.get(r);
            return (
              o ||
                ((o = new a.X({
                  client: t,
                  queryKey: i,
                  queryHash: r,
                  options: t.defaultQueryOptions(e),
                  state: s,
                  defaultOptions: t.getQueryDefaults(i),
                })),
                this.add(o)),
              o
            );
          }
          add(t) {
            this.#f.has(t.queryHash) || (this.#f.set(t.queryHash, t), this.notify({ type: 'added', query: t }));
          }
          remove(t) {
            let e = this.#f.get(t.queryHash);
            e && (t.destroy(), e === t && this.#f.delete(t.queryHash), this.notify({ type: 'removed', query: t }));
          }
          clear() {
            o.jG.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return this.#f.get(t);
          }
          getAll() {
            return [...this.#f.values()];
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, n.MK)(e, t));
          }
          findAll(t = {}) {
            let e = this.getAll();
            return Object.keys(t).length > 0 ? e.filter((e) => (0, n.MK)(t, e)) : e;
          }
          notify(t) {
            o.jG.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          onFocus() {
            o.jG.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            o.jG.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        },
        c = s(8092),
        l = s(0),
        d = class extends c.k {
          #p;
          #y;
          #o;
          constructor(t) {
            (super(),
              (this.mutationId = t.mutationId),
              (this.#y = t.mutationCache),
              (this.#p = []),
              (this.state = t.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: 'idle',
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(t.options),
              this.scheduleGc());
          }
          setOptions(t) {
            ((this.options = t), this.updateGcTime(this.options.gcTime));
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#p.includes(t) ||
              (this.#p.push(t),
              this.clearGcTimeout(),
              this.#y.notify({ type: 'observerAdded', mutation: this, observer: t }));
          }
          removeObserver(t) {
            ((this.#p = this.#p.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#y.notify({ type: 'observerRemoved', mutation: this, observer: t }));
          }
          optionalRemove() {
            this.#p.length || ('pending' === this.state.status ? this.scheduleGc() : this.#y.remove(this));
          }
          continue() {
            return this.#o?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = () => {
              this.#c({ type: 'continue' });
            };
            this.#o = (0, l.II)({
              fn: () =>
                this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(Error('No mutationFn found')),
              onFail: (t, e) => {
                this.#c({ type: 'failed', failureCount: t, error: e });
              },
              onPause: () => {
                this.#c({ type: 'pause' });
              },
              onContinue: e,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#y.canRun(this),
            });
            let s = 'pending' === this.state.status,
              i = !this.#o.canStart();
            try {
              if (s) e();
              else {
                (this.#c({ type: 'pending', variables: t, isPaused: i }), await this.#y.config.onMutate?.(t, this));
                let e = await this.options.onMutate?.(t);
                e !== this.state.context && this.#c({ type: 'pending', context: e, variables: t, isPaused: i });
              }
              let r = await this.#o.start();
              return (
                await this.#y.config.onSuccess?.(r, t, this.state.context, this),
                await this.options.onSuccess?.(r, t, this.state.context),
                await this.#y.config.onSettled?.(r, null, this.state.variables, this.state.context, this),
                await this.options.onSettled?.(r, null, t, this.state.context),
                this.#c({ type: 'success', data: r }),
                r
              );
            } catch (e) {
              try {
                throw (
                  await this.#y.config.onError?.(e, t, this.state.context, this),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#y.config.onSettled?.(void 0, e, this.state.variables, this.state.context, this),
                  await this.options.onSettled?.(void 0, e, t, this.state.context),
                  e
                );
              } finally {
                this.#c({ type: 'error', error: e });
              }
            } finally {
              this.#y.runNext(this);
            }
          }
          #c(t) {
            ((this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return { ...e, failureCount: t.failureCount, failureReason: t.error };
                case 'pause':
                  return { ...e, isPaused: !0 };
                case 'continue':
                  return { ...e, isPaused: !1 };
                case 'pending':
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: 'pending',
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case 'success':
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: 'success',
                    isPaused: !1,
                  };
                case 'error':
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: 'error',
                  };
              }
            })(this.state)),
              o.jG.batch(() => {
                (this.#p.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#y.notify({ mutation: this, type: 'updated', action: t }));
              }));
          }
        },
        f = class extends u.Q {
          constructor(t = {}) {
            (super(), (this.config = t), (this.#m = new Set()), (this.#v = new Map()), (this.#b = 0));
          }
          #m;
          #v;
          #b;
          build(t, e, s) {
            let i = new d({
              mutationCache: this,
              mutationId: ++this.#b,
              options: t.defaultMutationOptions(e),
              state: s,
            });
            return (this.add(i), i);
          }
          add(t) {
            this.#m.add(t);
            let e = p(t);
            if ('string' == typeof e) {
              let s = this.#v.get(e);
              s ? s.push(t) : this.#v.set(e, [t]);
            }
            this.notify({ type: 'added', mutation: t });
          }
          remove(t) {
            if (this.#m.delete(t)) {
              let e = p(t);
              if ('string' == typeof e) {
                let s = this.#v.get(e);
                if (s)
                  if (s.length > 1) {
                    let e = s.indexOf(t);
                    -1 !== e && s.splice(e, 1);
                  } else s[0] === t && this.#v.delete(e);
              }
            }
            this.notify({ type: 'removed', mutation: t });
          }
          canRun(t) {
            let e = p(t);
            if ('string' != typeof e) return !0;
            {
              let s = this.#v.get(e),
                i = s?.find((t) => 'pending' === t.state.status);
              return !i || i === t;
            }
          }
          runNext(t) {
            let e = p(t);
            if ('string' != typeof e) return Promise.resolve();
            {
              let s = this.#v.get(e)?.find((e) => e !== t && e.state.isPaused);
              return s?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            o.jG.batch(() => {
              (this.#m.forEach((t) => {
                this.notify({ type: 'removed', mutation: t });
              }),
                this.#m.clear(),
                this.#v.clear());
            });
          }
          getAll() {
            return Array.from(this.#m);
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, n.nJ)(e, t));
          }
          findAll(t = {}) {
            return this.getAll().filter((e) => (0, n.nJ)(t, e));
          }
          notify(t) {
            o.jG.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          resumePausedMutations() {
            let t = this.getAll().filter((t) => t.state.isPaused);
            return o.jG.batch(() => Promise.all(t.map((t) => t.continue().catch(n.lQ))));
          }
        };
      function p(t) {
        return t.options.scope?.id;
      }
      var y = s(8416),
        m = s(1951);
      function v(t) {
        return {
          onFetch: (e, s) => {
            let i = e.options,
              r = e.fetchOptions?.meta?.fetchMore?.direction,
              a = e.state.data?.pages || [],
              o = e.state.data?.pageParams || [],
              u = { pages: [], pageParams: [] },
              h = 0,
              c = async () => {
                let s = !1,
                  c = (t) => {
                    Object.defineProperty(t, 'signal', {
                      enumerable: !0,
                      get: () => (
                        e.signal.aborted
                          ? (s = !0)
                          : e.signal.addEventListener('abort', () => {
                              s = !0;
                            }),
                        e.signal
                      ),
                    });
                  },
                  l = (0, n.ZM)(e.options, e.fetchOptions),
                  d = async (t, i, r) => {
                    if (s) return Promise.reject();
                    if (null == i && t.pages.length) return Promise.resolve(t);
                    let a = (() => {
                        let t = {
                          client: e.client,
                          queryKey: e.queryKey,
                          pageParam: i,
                          direction: r ? 'backward' : 'forward',
                          meta: e.options.meta,
                        };
                        return (c(t), t);
                      })(),
                      o = await l(a),
                      { maxPages: u } = e.options,
                      h = r ? n.ZZ : n.y9;
                    return { pages: h(t.pages, o, u), pageParams: h(t.pageParams, i, u) };
                  };
                if (r && a.length) {
                  let t = 'backward' === r,
                    e = { pages: a, pageParams: o },
                    s = (
                      t
                        ? function (t, { pages: e, pageParams: s }) {
                            return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, s[0], s) : void 0;
                          }
                        : b
                    )(i, e);
                  u = await d(e, s, t);
                } else {
                  let e = t ?? a.length;
                  do {
                    let t = 0 === h ? (o[0] ?? i.initialPageParam) : b(i, u);
                    if (h > 0 && null == t) break;
                    ((u = await d(u, t)), h++);
                  } while (h < e);
                }
                return u;
              };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    c,
                    { client: e.client, queryKey: e.queryKey, meta: e.options.meta, signal: e.signal },
                    s
                  ))
              : (e.fetchFn = c);
          },
        };
      }
      function b(t, { pages: e, pageParams: s }) {
        let i = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[i], e, s[i], s) : void 0;
      }
      var g = class {
          #g;
          #y;
          #u;
          #C;
          #w;
          #O;
          #q;
          #S;
          constructor(t = {}) {
            ((this.#g = t.queryCache || new h()),
              (this.#y = t.mutationCache || new f()),
              (this.#u = t.defaultOptions || {}),
              (this.#C = new Map()),
              (this.#w = new Map()),
              (this.#O = 0));
          }
          mount() {
            (this.#O++,
              1 === this.#O &&
                ((this.#q = y.m.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#g.onFocus());
                })),
                (this.#S = m.t.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#g.onOnline());
                }))));
          }
          unmount() {
            (this.#O--, 0 === this.#O && (this.#q?.(), (this.#q = void 0), this.#S?.(), (this.#S = void 0)));
          }
          isFetching(t) {
            return this.#g.findAll({ ...t, fetchStatus: 'fetching' }).length;
          }
          isMutating(t) {
            return this.#y.findAll({ ...t, status: 'pending' }).length;
          }
          getQueryData(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#g.get(e.queryHash)?.state.data;
          }
          ensureQueryData(t) {
            let e = this.defaultQueryOptions(t),
              s = this.#g.build(this, e),
              i = s.state.data;
            return void 0 === i
              ? this.fetchQuery(t)
              : (t.revalidateIfStale && s.isStaleByTime((0, n.d2)(e.staleTime, s)) && this.prefetchQuery(e),
                Promise.resolve(i));
          }
          getQueriesData(t) {
            return this.#g.findAll(t).map(({ queryKey: t, state: e }) => [t, e.data]);
          }
          setQueryData(t, e, s) {
            let i = this.defaultQueryOptions({ queryKey: t }),
              r = this.#g.get(i.queryHash),
              a = r?.state.data,
              o = (0, n.Zw)(e, a);
            if (void 0 !== o) return this.#g.build(this, i).setData(o, { ...s, manual: !0 });
          }
          setQueriesData(t, e, s) {
            return o.jG.batch(() => this.#g.findAll(t).map(({ queryKey: t }) => [t, this.setQueryData(t, e, s)]));
          }
          getQueryState(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#g.get(e.queryHash)?.state;
          }
          removeQueries(t) {
            let e = this.#g;
            o.jG.batch(() => {
              e.findAll(t).forEach((t) => {
                e.remove(t);
              });
            });
          }
          resetQueries(t, e) {
            let s = this.#g;
            return o.jG.batch(
              () => (
                s.findAll(t).forEach((t) => {
                  t.reset();
                }),
                this.refetchQueries({ type: 'active', ...t }, e)
              )
            );
          }
          cancelQueries(t, e = {}) {
            let s = { revert: !0, ...e };
            return Promise.all(o.jG.batch(() => this.#g.findAll(t).map((t) => t.cancel(s))))
              .then(n.lQ)
              .catch(n.lQ);
          }
          invalidateQueries(t, e = {}) {
            return o.jG.batch(() =>
              (this.#g.findAll(t).forEach((t) => {
                t.invalidate();
              }),
              t?.refetchType === 'none')
                ? Promise.resolve()
                : this.refetchQueries({ ...t, type: t?.refetchType ?? t?.type ?? 'active' }, e)
            );
          }
          refetchQueries(t, e = {}) {
            let s = { ...e, cancelRefetch: e.cancelRefetch ?? !0 };
            return Promise.all(
              o.jG.batch(() =>
                this.#g
                  .findAll(t)
                  .filter((t) => !t.isDisabled() && !t.isStatic())
                  .map((t) => {
                    let e = t.fetch(void 0, s);
                    return (
                      s.throwOnError || (e = e.catch(n.lQ)),
                      'paused' === t.state.fetchStatus ? Promise.resolve() : e
                    );
                  })
              )
            ).then(n.lQ);
          }
          fetchQuery(t) {
            let e = this.defaultQueryOptions(t);
            void 0 === e.retry && (e.retry = !1);
            let s = this.#g.build(this, e);
            return s.isStaleByTime((0, n.d2)(e.staleTime, s)) ? s.fetch(e) : Promise.resolve(s.state.data);
          }
          prefetchQuery(t) {
            return this.fetchQuery(t).then(n.lQ).catch(n.lQ);
          }
          fetchInfiniteQuery(t) {
            return ((t.behavior = v(t.pages)), this.fetchQuery(t));
          }
          prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(n.lQ).catch(n.lQ);
          }
          ensureInfiniteQueryData(t) {
            return ((t.behavior = v(t.pages)), this.ensureQueryData(t));
          }
          resumePausedMutations() {
            return m.t.isOnline() ? this.#y.resumePausedMutations() : Promise.resolve();
          }
          getQueryCache() {
            return this.#g;
          }
          getMutationCache() {
            return this.#y;
          }
          getDefaultOptions() {
            return this.#u;
          }
          setDefaultOptions(t) {
            this.#u = t;
          }
          setQueryDefaults(t, e) {
            this.#C.set((0, n.EN)(t), { queryKey: t, defaultOptions: e });
          }
          getQueryDefaults(t) {
            let e = [...this.#C.values()],
              s = {};
            return (
              e.forEach((e) => {
                (0, n.Cp)(t, e.queryKey) && Object.assign(s, e.defaultOptions);
              }),
              s
            );
          }
          setMutationDefaults(t, e) {
            this.#w.set((0, n.EN)(t), { mutationKey: t, defaultOptions: e });
          }
          getMutationDefaults(t) {
            let e = [...this.#w.values()],
              s = {};
            return (
              e.forEach((e) => {
                (0, n.Cp)(t, e.mutationKey) && Object.assign(s, e.defaultOptions);
              }),
              s
            );
          }
          defaultQueryOptions(t) {
            if (t._defaulted) return t;
            let e = { ...this.#u.queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: !0 };
            return (
              e.queryHash || (e.queryHash = (0, n.F$)(e.queryKey, e)),
              void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = 'always' !== e.networkMode),
              void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
              !e.networkMode && e.persister && (e.networkMode = 'offlineFirst'),
              e.queryFn === n.hT && (e.enabled = !1),
              e
            );
          }
          defaultMutationOptions(t) {
            return t?._defaulted
              ? t
              : {
                  ...this.#u.mutations,
                  ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
                  ...t,
                  _defaulted: !0,
                };
          }
          clear() {
            (this.#g.clear(), this.#y.clear());
          }
        },
        C = s(7332),
        w = s.n(C),
        O = s(8580),
        q = s.n(O),
        S = s(4626),
        P = s.n(S);
      let F = (t) => {
        let { Component: e, pageProps: s } = t;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(P(), { children: (0, i.jsx)('title', { children: 'Numbers' }) }),
            (0, i.jsx)(r.Ht, {
              client: new g(),
              children: (0, i.jsx)('div', {
                className: ''.concat(w().className, ' ').concat(q().className, ' bg-neutral-900 text-neutral-100'),
                children: (0, i.jsx)(e, { ...s }),
              }),
            }),
          ],
        });
      };
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    (t.O(0, [593, 792], () => (e(8462), e(8231))), (_N_E = t.O()));
  },
]);
