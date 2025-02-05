(function () {
  const I = document.createElement("link").relList;
  if (I && I.supports && I.supports("modulepreload")) return;
  for (const F of document.querySelectorAll('link[rel="modulepreload"]')) he(F);
  new MutationObserver((F) => {
    for (const K of F)
      if (K.type === "childList")
        for (const ce of K.addedNodes)
          ce.tagName === "LINK" && ce.rel === "modulepreload" && he(ce);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(F) {
    const K = {};
    return (
      F.integrity && (K.integrity = F.integrity),
      F.referrerPolicy && (K.referrerPolicy = F.referrerPolicy),
      F.crossOrigin === "use-credentials"
        ? (K.credentials = "include")
        : F.crossOrigin === "anonymous"
        ? (K.credentials = "omit")
        : (K.credentials = "same-origin"),
      K
    );
  }
  function he(F) {
    if (F.ep) return;
    F.ep = !0;
    const K = m(F);
    fetch(F.href, K);
  }
})();
var _i = { exports: {} },
  gr = {},
  Ci = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function Tf() {
  if (_a) return D;
  _a = 1;
  var T = Symbol.for("react.element"),
    I = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    he = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    K = Symbol.for("react.provider"),
    ce = Symbol.for("react.context"),
    fe = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    ve = Symbol.for("react.memo"),
    ye = Symbol.for("react.lazy"),
    Y = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (Y && c[Y]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var Le = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Oe = Object.assign,
    G = {};
  function O(c, v, j) {
    (this.props = c),
      (this.context = v),
      (this.refs = G),
      (this.updater = j || Le);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (O.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function _e() {}
  _e.prototype = O.prototype;
  function ee(c, v, j) {
    (this.props = c),
      (this.context = v),
      (this.refs = G),
      (this.updater = j || Le);
  }
  var He = (ee.prototype = new _e());
  (He.constructor = ee), Oe(He, O.prototype), (He.isPureReactComponent = !0);
  var ue = Array.isArray,
    Se = Object.prototype.hasOwnProperty,
    Te = { current: null },
    De = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ge(c, v, j) {
    var M,
      A = {},
      V = null,
      Z = null;
    if (v != null)
      for (M in (v.ref !== void 0 && (Z = v.ref),
      v.key !== void 0 && (V = "" + v.key),
      v))
        Se.call(v, M) && !De.hasOwnProperty(M) && (A[M] = v[M]);
    var $ = arguments.length - 2;
    if ($ === 1) A.children = j;
    else if (1 < $) {
      for (var ne = Array($), We = 0; We < $; We++) ne[We] = arguments[We + 2];
      A.children = ne;
    }
    if (c && c.defaultProps)
      for (M in (($ = c.defaultProps), $)) A[M] === void 0 && (A[M] = $[M]);
    return {
      $$typeof: T,
      type: c,
      key: V,
      ref: Z,
      props: A,
      _owner: Te.current,
    };
  }
  function zn(c, v) {
    return {
      $$typeof: T,
      type: c.type,
      key: v,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === T;
  }
  function Xn(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (j) {
        return v[j];
      })
    );
  }
  var fn = /\/+/g;
  function $e(c, v) {
    return typeof c == "object" && c !== null && c.key != null
      ? Xn("" + c.key)
      : v.toString(36);
  }
  function tn(c, v, j, M, A) {
    var V = typeof c;
    (V === "undefined" || V === "boolean") && (c = null);
    var Z = !1;
    if (c === null) Z = !0;
    else
      switch (V) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case T:
            case I:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = c),
        (A = A(Z)),
        (c = M === "" ? "." + $e(Z, 0) : M),
        ue(A)
          ? ((j = ""),
            c != null && (j = c.replace(fn, "$&/") + "/"),
            tn(A, v, j, "", function (We) {
              return We;
            }))
          : A != null &&
            (gn(A) &&
              (A = zn(
                A,
                j +
                  (!A.key || (Z && Z.key === A.key)
                    ? ""
                    : ("" + A.key).replace(fn, "$&/") + "/") +
                  c
              )),
            v.push(A)),
        1
      );
    if (((Z = 0), (M = M === "" ? "." : M + ":"), ue(c)))
      for (var $ = 0; $ < c.length; $++) {
        V = c[$];
        var ne = M + $e(V, $);
        Z += tn(V, v, j, ne, A);
      }
    else if (((ne = X(c)), typeof ne == "function"))
      for (c = ne.call(c), $ = 0; !(V = c.next()).done; )
        (V = V.value), (ne = M + $e(V, $++)), (Z += tn(V, v, j, ne, A));
    else if (V === "object")
      throw (
        ((v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : v) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Z;
  }
  function dn(c, v, j) {
    if (c == null) return c;
    var M = [],
      A = 0;
    return (
      tn(c, M, "", "", function (V) {
        return v.call(j, V, A++);
      }),
      M
    );
  }
  function Me(c) {
    if (c._status === -1) {
      var v = c._result;
      (v = v()),
        v.then(
          function (j) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = j));
          },
          function (j) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = j));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = v));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var oe = { current: null },
    k = { transition: null },
    L = {
      ReactCurrentDispatcher: oe,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: Te,
    };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (D.Children = {
      map: dn,
      forEach: function (c, v, j) {
        dn(
          c,
          function () {
            v.apply(this, arguments);
          },
          j
        );
      },
      count: function (c) {
        var v = 0;
        return (
          dn(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          dn(c, function (v) {
            return v;
          }) || []
        );
      },
      only: function (c) {
        if (!gn(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (D.Component = O),
    (D.Fragment = m),
    (D.Profiler = F),
    (D.PureComponent = ee),
    (D.StrictMode = he),
    (D.Suspense = H),
    (D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
    (D.act = x),
    (D.cloneElement = function (c, v, j) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var M = Oe({}, c.props),
        A = c.key,
        V = c.ref,
        Z = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((V = v.ref), (Z = Te.current)),
          v.key !== void 0 && (A = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var $ = c.type.defaultProps;
        for (ne in v)
          Se.call(v, ne) &&
            !De.hasOwnProperty(ne) &&
            (M[ne] = v[ne] === void 0 && $ !== void 0 ? $[ne] : v[ne]);
      }
      var ne = arguments.length - 2;
      if (ne === 1) M.children = j;
      else if (1 < ne) {
        $ = Array(ne);
        for (var We = 0; We < ne; We++) $[We] = arguments[We + 2];
        M.children = $;
      }
      return { $$typeof: T, type: c.type, key: A, ref: V, props: M, _owner: Z };
    }),
    (D.createContext = function (c) {
      return (
        (c = {
          $$typeof: ce,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: K, _context: c }),
        (c.Consumer = c)
      );
    }),
    (D.createElement = Ge),
    (D.createFactory = function (c) {
      var v = Ge.bind(null, c);
      return (v.type = c), v;
    }),
    (D.createRef = function () {
      return { current: null };
    }),
    (D.forwardRef = function (c) {
      return { $$typeof: fe, render: c };
    }),
    (D.isValidElement = gn),
    (D.lazy = function (c) {
      return { $$typeof: ye, _payload: { _status: -1, _result: c }, _init: Me };
    }),
    (D.memo = function (c, v) {
      return { $$typeof: ve, type: c, compare: v === void 0 ? null : v };
    }),
    (D.startTransition = function (c) {
      var v = k.transition;
      k.transition = {};
      try {
        c();
      } finally {
        k.transition = v;
      }
    }),
    (D.unstable_act = x),
    (D.useCallback = function (c, v) {
      return oe.current.useCallback(c, v);
    }),
    (D.useContext = function (c) {
      return oe.current.useContext(c);
    }),
    (D.useDebugValue = function () {}),
    (D.useDeferredValue = function (c) {
      return oe.current.useDeferredValue(c);
    }),
    (D.useEffect = function (c, v) {
      return oe.current.useEffect(c, v);
    }),
    (D.useId = function () {
      return oe.current.useId();
    }),
    (D.useImperativeHandle = function (c, v, j) {
      return oe.current.useImperativeHandle(c, v, j);
    }),
    (D.useInsertionEffect = function (c, v) {
      return oe.current.useInsertionEffect(c, v);
    }),
    (D.useLayoutEffect = function (c, v) {
      return oe.current.useLayoutEffect(c, v);
    }),
    (D.useMemo = function (c, v) {
      return oe.current.useMemo(c, v);
    }),
    (D.useReducer = function (c, v, j) {
      return oe.current.useReducer(c, v, j);
    }),
    (D.useRef = function (c) {
      return oe.current.useRef(c);
    }),
    (D.useState = function (c) {
      return oe.current.useState(c);
    }),
    (D.useSyncExternalStore = function (c, v, j) {
      return oe.current.useSyncExternalStore(c, v, j);
    }),
    (D.useTransition = function () {
      return oe.current.useTransition();
    }),
    (D.version = "18.3.1"),
    D
  );
}
var Ca;
function Li() {
  return Ca || ((Ca = 1), (Ci.exports = Tf())), Ci.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Rf() {
  if (Pa) return gr;
  Pa = 1;
  var T = Li(),
    I = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    he = Object.prototype.hasOwnProperty,
    F = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(fe, H, ve) {
    var ye,
      Y = {},
      X = null,
      Le = null;
    ve !== void 0 && (X = "" + ve),
      H.key !== void 0 && (X = "" + H.key),
      H.ref !== void 0 && (Le = H.ref);
    for (ye in H) he.call(H, ye) && !K.hasOwnProperty(ye) && (Y[ye] = H[ye]);
    if (fe && fe.defaultProps)
      for (ye in ((H = fe.defaultProps), H))
        Y[ye] === void 0 && (Y[ye] = H[ye]);
    return {
      $$typeof: I,
      type: fe,
      key: X,
      ref: Le,
      props: Y,
      _owner: F.current,
    };
  }
  return (gr.Fragment = m), (gr.jsx = ce), (gr.jsxs = ce), gr;
}
var Na;
function jf() {
  return Na || ((Na = 1), (_i.exports = Rf())), _i.exports;
}
var Q = jf(),
  Nn = Li(),
  Ll = {},
  Pi = { exports: {} },
  Be = {},
  Ni = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Of() {
  return (
    za ||
      ((za = 1),
      (function (T) {
        function I(k, L) {
          var x = k.length;
          k.push(L);
          e: for (; 0 < x; ) {
            var c = (x - 1) >>> 1,
              v = k[c];
            if (0 < F(v, L)) (k[c] = L), (k[x] = v), (x = c);
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function he(k) {
          if (k.length === 0) return null;
          var L = k[0],
            x = k.pop();
          if (x !== L) {
            k[0] = x;
            e: for (var c = 0, v = k.length, j = v >>> 1; c < j; ) {
              var M = 2 * (c + 1) - 1,
                A = k[M],
                V = M + 1,
                Z = k[V];
              if (0 > F(A, x))
                V < v && 0 > F(Z, A)
                  ? ((k[c] = Z), (k[V] = x), (c = V))
                  : ((k[c] = A), (k[M] = x), (c = M));
              else if (V < v && 0 > F(Z, x)) (k[c] = Z), (k[V] = x), (c = V);
              else break e;
            }
          }
          return L;
        }
        function F(k, L) {
          var x = k.sortIndex - L.sortIndex;
          return x !== 0 ? x : k.id - L.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var K = performance;
          T.unstable_now = function () {
            return K.now();
          };
        } else {
          var ce = Date,
            fe = ce.now();
          T.unstable_now = function () {
            return ce.now() - fe;
          };
        }
        var H = [],
          ve = [],
          ye = 1,
          Y = null,
          X = 3,
          Le = !1,
          Oe = !1,
          G = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          _e = typeof clearTimeout == "function" ? clearTimeout : null,
          ee = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function He(k) {
          for (var L = m(ve); L !== null; ) {
            if (L.callback === null) he(ve);
            else if (L.startTime <= k)
              he(ve), (L.sortIndex = L.expirationTime), I(H, L);
            else break;
            L = m(ve);
          }
        }
        function ue(k) {
          if (((G = !1), He(k), !Oe))
            if (m(H) !== null) (Oe = !0), Me(Se);
            else {
              var L = m(ve);
              L !== null && oe(ue, L.startTime - k);
            }
        }
        function Se(k, L) {
          (Oe = !1), G && ((G = !1), _e(Ge), (Ge = -1)), (Le = !0);
          var x = X;
          try {
            for (
              He(L), Y = m(H);
              Y !== null && (!(Y.expirationTime > L) || (k && !Xn()));

            ) {
              var c = Y.callback;
              if (typeof c == "function") {
                (Y.callback = null), (X = Y.priorityLevel);
                var v = c(Y.expirationTime <= L);
                (L = T.unstable_now()),
                  typeof v == "function"
                    ? (Y.callback = v)
                    : Y === m(H) && he(H),
                  He(L);
              } else he(H);
              Y = m(H);
            }
            if (Y !== null) var j = !0;
            else {
              var M = m(ve);
              M !== null && oe(ue, M.startTime - L), (j = !1);
            }
            return j;
          } finally {
            (Y = null), (X = x), (Le = !1);
          }
        }
        var Te = !1,
          De = null,
          Ge = -1,
          zn = 5,
          gn = -1;
        function Xn() {
          return !(T.unstable_now() - gn < zn);
        }
        function fn() {
          if (De !== null) {
            var k = T.unstable_now();
            gn = k;
            var L = !0;
            try {
              L = De(!0, k);
            } finally {
              L ? $e() : ((Te = !1), (De = null));
            }
          } else Te = !1;
        }
        var $e;
        if (typeof ee == "function")
          $e = function () {
            ee(fn);
          };
        else if (typeof MessageChannel < "u") {
          var tn = new MessageChannel(),
            dn = tn.port2;
          (tn.port1.onmessage = fn),
            ($e = function () {
              dn.postMessage(null);
            });
        } else
          $e = function () {
            O(fn, 0);
          };
        function Me(k) {
          (De = k), Te || ((Te = !0), $e());
        }
        function oe(k, L) {
          Ge = O(function () {
            k(T.unstable_now());
          }, L);
        }
        (T.unstable_IdlePriority = 5),
          (T.unstable_ImmediatePriority = 1),
          (T.unstable_LowPriority = 4),
          (T.unstable_NormalPriority = 3),
          (T.unstable_Profiling = null),
          (T.unstable_UserBlockingPriority = 2),
          (T.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (T.unstable_continueExecution = function () {
            Oe || Le || ((Oe = !0), Me(Se));
          }),
          (T.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (zn = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (T.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (T.unstable_getFirstCallbackNode = function () {
            return m(H);
          }),
          (T.unstable_next = function (k) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = X;
            }
            var x = X;
            X = L;
            try {
              return k();
            } finally {
              X = x;
            }
          }),
          (T.unstable_pauseExecution = function () {}),
          (T.unstable_requestPaint = function () {}),
          (T.unstable_runWithPriority = function (k, L) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var x = X;
            X = k;
            try {
              return L();
            } finally {
              X = x;
            }
          }),
          (T.unstable_scheduleCallback = function (k, L, x) {
            var c = T.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay),
                  (x = typeof x == "number" && 0 < x ? c + x : c))
                : (x = c),
              k)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = x + v),
              (k = {
                id: ye++,
                callback: L,
                priorityLevel: k,
                startTime: x,
                expirationTime: v,
                sortIndex: -1,
              }),
              x > c
                ? ((k.sortIndex = x),
                  I(ve, k),
                  m(H) === null &&
                    k === m(ve) &&
                    (G ? (_e(Ge), (Ge = -1)) : (G = !0), oe(ue, x - c)))
                : ((k.sortIndex = v), I(H, k), Oe || Le || ((Oe = !0), Me(Se))),
              k
            );
          }),
          (T.unstable_shouldYield = Xn),
          (T.unstable_wrapCallback = function (k) {
            var L = X;
            return function () {
              var x = X;
              X = L;
              try {
                return k.apply(this, arguments);
              } finally {
                X = x;
              }
            };
          });
      })(zi)),
    zi
  );
}
var La;
function Df() {
  return La || ((La = 1), (Ni.exports = Of())), Ni.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Mf() {
  if (Ta) return Be;
  Ta = 1;
  var T = Li(),
    I = Df();
  function m(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var he = new Set(),
    F = {};
  function K(e, n) {
    ce(e, n), ce(e + "Capture", n);
  }
  function ce(e, n) {
    for (F[e] = n, e = 0; e < n.length; e++) he.add(n[e]);
  }
  var fe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    H = Object.prototype.hasOwnProperty,
    ve =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ye = {},
    Y = {};
  function X(e) {
    return H.call(Y, e)
      ? !0
      : H.call(ye, e)
      ? !1
      : ve.test(e)
      ? (Y[e] = !0)
      : ((ye[e] = !0), !1);
  }
  function Le(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Oe(e, n, t, r) {
    if (n === null || typeof n > "u" || Le(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function G(e, n, t, r, l, o, i) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new G(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      O[n] = new G(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      O[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new G(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new G(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new G(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new G(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var _e = /[\-:]([a-z])/g;
  function ee(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(_e, ee);
      O[n] = new G(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(_e, ee);
        O[n] = new G(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(_e, ee);
      O[n] = new G(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new G(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function He(e, n, t, r) {
    var l = O.hasOwnProperty(n) ? O[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (Oe(n, t, l, r) && (t = null),
      r || l === null
        ? X(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ue = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Se = Symbol.for("react.element"),
    Te = Symbol.for("react.portal"),
    De = Symbol.for("react.fragment"),
    Ge = Symbol.for("react.strict_mode"),
    zn = Symbol.for("react.profiler"),
    gn = Symbol.for("react.provider"),
    Xn = Symbol.for("react.context"),
    fn = Symbol.for("react.forward_ref"),
    $e = Symbol.for("react.suspense"),
    tn = Symbol.for("react.suspense_list"),
    dn = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var x = Object.assign,
    c;
  function v(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        c = (n && n[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var j = !1;
  function M(e, n) {
    if (!e || j) return "";
    j = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];

        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      (j = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = M(e.type, !1)), e;
      case 11:
        return (e = M(e.type.render, !1)), e;
      case 1:
        return (e = M(e.type, !0)), e;
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case De:
        return "Fragment";
      case Te:
        return "Portal";
      case zn:
        return "Profiler";
      case Ge:
        return "StrictMode";
      case $e:
        return "Suspense";
      case tn:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xn:
          return (e.displayName || "Context") + ".Consumer";
        case gn:
          return (e._context.displayName || "Context") + ".Provider";
        case fn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dn:
          return (
            (n = e.displayName || null), n !== null ? n : V(e.type) || "Memo"
          );
        case Me:
          (n = e._payload), (e = e._init);
          try {
            return V(e(n));
          } catch {}
      }
    return null;
  }
  function Z(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return V(n);
      case 8:
        return n === Ge ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function $(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ne(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function We(e) {
    var n = ne(e) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var l = t.get,
        o = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), o.call(this, i);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function Ti(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = ne(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return x({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function Ri(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = $(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function ji(e, n) {
    (n = n.checked), n != null && He(e, "checked", n, !1);
  }
  function Rl(e, n) {
    ji(e, n);
    var t = $(n.value),
      r = n.type;
    if (t != null)
      r === "number"
        ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
        : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? jl(e, n.type, t)
      : n.hasOwnProperty("defaultValue") && jl(e, n.type, $(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Oi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (t = e.name),
      t !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== "" && (e.name = t);
  }
  function jl(e, n, t) {
    (n !== "number" || kr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function st(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + $(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return x({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Di(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: $(t) };
  }
  function Mi(e, n) {
    var t = $(n.value),
      r = $(n.defaultValue);
    t != null &&
      ((t = "" + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = "" + r);
  }
  function Ii(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Fi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Fi(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Sr,
    Ui = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          Sr = Sr || document.createElement("div"),
            Sr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = Sr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Mt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Oa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mt).forEach(function (e) {
    Oa.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Mt[n] = Mt[e]);
    });
  });
  function Ai(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : t || typeof n != "number" || n === 0 || (Mt.hasOwnProperty(e) && Mt[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function Vi(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0,
          l = Ai(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var Da = x(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ml(e, n) {
    if (n) {
      if (Da[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Il(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fl = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    at = null,
    ct = null;
  function Bi(e) {
    if ((e = rr(e))) {
      if (typeof Al != "function") throw Error(m(280));
      var n = e.stateNode;
      n && ((n = Wr(n)), Al(e.stateNode, e.type, n));
    }
  }
  function Hi(e) {
    at ? (ct ? ct.push(e) : (ct = [e])) : (at = e);
  }
  function $i() {
    if (at) {
      var e = at,
        n = ct;
      if (((ct = at = null), Bi(e), n)) for (e = 0; e < n.length; e++) Bi(n[e]);
    }
  }
  function Wi(e, n) {
    return e(n);
  }
  function Qi() {}
  var Vl = !1;
  function Ki(e, n, t) {
    if (Vl) return e(n, t);
    Vl = !0;
    try {
      return Wi(e, n, t);
    } finally {
      (Vl = !1), (at !== null || ct !== null) && (Qi(), $i());
    }
  }
  function It(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Wr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Bl = !1;
  if (fe)
    try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", Ft, Ft),
        window.removeEventListener("test", Ft, Ft);
    } catch {
      Bl = !1;
    }
  function Ma(e, n, t, r, l, o, i, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ut = !1,
    Er = null,
    xr = !1,
    Hl = null,
    Ia = {
      onError: function (e) {
        (Ut = !0), (Er = e);
      },
    };
  function Fa(e, n, t, r, l, o, i, u, s) {
    (Ut = !1), (Er = null), Ma.apply(Ia, arguments);
  }
  function Ua(e, n, t, r, l, o, i, u, s) {
    if ((Fa.apply(this, arguments), Ut)) {
      if (Ut) {
        var p = Er;
        (Ut = !1), (Er = null);
      } else throw Error(m(198));
      xr || ((xr = !0), (Hl = p));
    }
  }
  function Gn(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Yi(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Xi(e) {
    if (Gn(e) !== e) throw Error(m(188));
  }
  function Aa(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Gn(e)), n === null)) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === t) return Xi(l), e;
          if (o === r) return Xi(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) (t = l), (r = o);
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === t) {
            (i = !0), (t = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (t = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === t) {
              (i = !0), (t = o), (r = l);
              break;
            }
            if (u === r) {
              (i = !0), (r = o), (t = l);
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Gi(e) {
    return (e = Aa(e)), e !== null ? Zi(e) : null;
  }
  function Zi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Zi(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Ji = I.unstable_scheduleCallback,
    qi = I.unstable_cancelCallback,
    Va = I.unstable_shouldYield,
    Ba = I.unstable_requestPaint,
    se = I.unstable_now,
    Ha = I.unstable_getCurrentPriorityLevel,
    $l = I.unstable_ImmediatePriority,
    bi = I.unstable_UserBlockingPriority,
    _r = I.unstable_NormalPriority,
    $a = I.unstable_LowPriority,
    eu = I.unstable_IdlePriority,
    Cr = null,
    pn = null;
  function Wa(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function")
      try {
        pn.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rn = Math.clz32 ? Math.clz32 : Ya,
    Qa = Math.log,
    Ka = Math.LN2;
  function Ya(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Qa(e) / Ka) | 0)) | 0;
  }
  var Pr = 64,
    Nr = 4194304;
  function At(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = t & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = At(u)) : ((o &= i), o !== 0 && (r = At(o)));
    } else (i = t & ~l), i !== 0 ? (r = At(i)) : o !== 0 && (r = At(o));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - rn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function Xa(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ga(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - rn(o),
        u = 1 << i,
        s = l[i];
      s === -1
        ? (!(u & t) || u & r) && (l[i] = Xa(u, n))
        : s <= n && (e.expiredLanes |= u),
        (o &= ~u);
    }
  }
  function Wl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function nu() {
    var e = Pr;
    return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e;
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - rn(n)),
      (e[n] = t);
  }
  function Za(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - rn(t),
        o = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
    }
  }
  function Kl(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - rn(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var W = 0;
  function tu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ru,
    Yl,
    lu,
    ou,
    iu,
    Xl = !1,
    Lr = [],
    Ln = null,
    Tn = null,
    Rn = null,
    Bt = new Map(),
    Ht = new Map(),
    jn = [],
    Ja =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function uu(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ln = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Bt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ht.delete(n.pointerId);
    }
  }
  function $t(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        n !== null && ((n = rr(n)), n !== null && Yl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function qa(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return (Ln = $t(Ln, e, n, t, r, l)), !0;
      case "dragenter":
        return (Tn = $t(Tn, e, n, t, r, l)), !0;
      case "mouseover":
        return (Rn = $t(Rn, e, n, t, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return Bt.set(o, $t(Bt.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), Ht.set(o, $t(Ht.get(o) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function su(e) {
    var n = Zn(e.target);
    if (n !== null) {
      var t = Gn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Yi(t)), n !== null)) {
            (e.blockedOn = n),
              iu(e.priority, function () {
                lu(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (Fl = r), t.target.dispatchEvent(r), (Fl = null);
      } else return (n = rr(t)), n !== null && Yl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function au(e, n, t) {
    Tr(e) && t.delete(n);
  }
  function ba() {
    (Xl = !1),
      Ln !== null && Tr(Ln) && (Ln = null),
      Tn !== null && Tr(Tn) && (Tn = null),
      Rn !== null && Tr(Rn) && (Rn = null),
      Bt.forEach(au),
      Ht.forEach(au);
  }
  function Wt(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        I.unstable_scheduleCallback(I.unstable_NormalPriority, ba)));
  }
  function Qt(e) {
    function n(l) {
      return Wt(l, e);
    }
    if (0 < Lr.length) {
      Wt(Lr[0], e);
      for (var t = 1; t < Lr.length; t++) {
        var r = Lr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ln !== null && Wt(Ln, e),
        Tn !== null && Wt(Tn, e),
        Rn !== null && Wt(Rn, e),
        Bt.forEach(n),
        Ht.forEach(n),
        t = 0;
      t < jn.length;
      t++
    )
      (r = jn[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jn.length && ((t = jn[0]), t.blockedOn === null); )
      su(t), t.blockedOn === null && jn.shift();
  }
  var ft = ue.ReactCurrentBatchConfig,
    Rr = !0;
  function ec(e, n, t, r) {
    var l = W,
      o = ft.transition;
    ft.transition = null;
    try {
      (W = 1), Gl(e, n, t, r);
    } finally {
      (W = l), (ft.transition = o);
    }
  }
  function nc(e, n, t, r) {
    var l = W,
      o = ft.transition;
    ft.transition = null;
    try {
      (W = 4), Gl(e, n, t, r);
    } finally {
      (W = l), (ft.transition = o);
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) mo(e, n, r, jr, t), uu(e, r);
      else if (qa(l, e, n, t, r)) r.stopPropagation();
      else if ((uu(e, r), n & 4 && -1 < Ja.indexOf(e))) {
        for (; l !== null; ) {
          var o = rr(l);
          if (
            (o !== null && ru(o),
            (o = Zl(e, n, t, r)),
            o === null && mo(e, n, r, jr, t),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else mo(e, n, r, null, t);
    }
  }
  var jr = null;
  function Zl(e, n, t, r) {
    if (((jr = null), (e = Ul(r)), (e = Zn(e)), e !== null))
      if (((n = Gn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Yi(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (jr = e), null;
  }
  function cu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ha()) {
          case $l:
            return 1;
          case bi:
            return 4;
          case _r:
          case $a:
            return 16;
          case eu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null,
    Jl = null,
    Or = null;
  function fu() {
    if (Or) return Or;
    var e,
      n = Jl,
      t = n.length,
      r,
      l = "value" in On ? On.value : On.textContent,
      o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mr() {
    return !0;
  }
  function du() {
    return !1;
  }
  function Qe(e) {
    function n(t, r, l, o, i) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Mr
          : du),
        (this.isPropagationStopped = du),
        this
      );
    }
    return (
      x(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Mr));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Mr));
        },
        persist: function () {},
        isPersistent: Mr,
      }),
      n
    );
  }
  var dt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Qe(dt),
    Kt = x({}, dt, { view: 0, detail: 0 }),
    tc = Qe(Kt),
    bl,
    eo,
    Yt,
    Ir = x({}, Kt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: to,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yt &&
              (Yt && e.type === "mousemove"
                ? ((bl = e.screenX - Yt.screenX), (eo = e.screenY - Yt.screenY))
                : (eo = bl = 0),
              (Yt = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : eo;
      },
    }),
    pu = Qe(Ir),
    rc = x({}, Ir, { dataTransfer: 0 }),
    lc = Qe(rc),
    oc = x({}, Kt, { relatedTarget: 0 }),
    no = Qe(oc),
    ic = x({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uc = Qe(ic),
    sc = x({}, dt, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ac = Qe(sc),
    cc = x({}, dt, { data: 0 }),
    mu = Qe(cc),
    fc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    pc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function mc(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = pc[e])
      ? !!n[e]
      : !1;
  }
  function to() {
    return mc;
  }
  var hc = x({}, Kt, {
      key: function (e) {
        if (e.key) {
          var n = fc[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? dc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: to,
      charCode: function (e) {
        return e.type === "keypress" ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Dr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    vc = Qe(hc),
    yc = x({}, Ir, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    hu = Qe(yc),
    gc = x({}, Kt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: to,
    }),
    wc = Qe(gc),
    kc = x({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sc = Qe(kc),
    Ec = x({}, Ir, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    xc = Qe(Ec),
    _c = [9, 13, 27, 32],
    ro = fe && "CompositionEvent" in window,
    Xt = null;
  fe && "documentMode" in document && (Xt = document.documentMode);
  var Cc = fe && "TextEvent" in window && !Xt,
    vu = fe && (!ro || (Xt && 8 < Xt && 11 >= Xt)),
    yu = " ",
    gu = !1;
  function wu(e, n) {
    switch (e) {
      case "keyup":
        return _c.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ku(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var pt = !1;
  function Pc(e, n) {
    switch (e) {
      case "compositionend":
        return ku(n);
      case "keypress":
        return n.which !== 32 ? null : ((gu = !0), yu);
      case "textInput":
        return (e = n.data), e === yu && gu ? null : e;
      default:
        return null;
    }
  }
  function Nc(e, n) {
    if (pt)
      return e === "compositionend" || (!ro && wu(e, n))
        ? ((e = fu()), (Or = Jl = On = null), (pt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return vu && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Su(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!zc[e.type] : n === "textarea";
  }
  function Eu(e, n, t, r) {
    Hi(r),
      (n = Br(n, "onChange")),
      0 < n.length &&
        ((t = new ql("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Gt = null,
    Zt = null;
  function Lc(e) {
    Vu(e, 0);
  }
  function Fr(e) {
    var n = gt(e);
    if (Ti(n)) return e;
  }
  function Tc(e, n) {
    if (e === "change") return n;
  }
  var xu = !1;
  if (fe) {
    var lo;
    if (fe) {
      var oo = "oninput" in document;
      if (!oo) {
        var _u = document.createElement("div");
        _u.setAttribute("oninput", "return;"),
          (oo = typeof _u.oninput == "function");
      }
      lo = oo;
    } else lo = !1;
    xu = lo && (!document.documentMode || 9 < document.documentMode);
  }
  function Cu() {
    Gt && (Gt.detachEvent("onpropertychange", Pu), (Zt = Gt = null));
  }
  function Pu(e) {
    if (e.propertyName === "value" && Fr(Zt)) {
      var n = [];
      Eu(n, Zt, e, Ul(e)), Ki(Lc, n);
    }
  }
  function Rc(e, n, t) {
    e === "focusin"
      ? (Cu(), (Gt = n), (Zt = t), Gt.attachEvent("onpropertychange", Pu))
      : e === "focusout" && Cu();
  }
  function jc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fr(Zt);
  }
  function Oc(e, n) {
    if (e === "click") return Fr(n);
  }
  function Dc(e, n) {
    if (e === "input" || e === "change") return Fr(n);
  }
  function Mc(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var ln = typeof Object.is == "function" ? Object.is : Mc;
  function Jt(e, n) {
    if (ln(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!H.call(n, l) || !ln(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Nu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zu(e, n) {
    var t = Nu(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Nu(t);
    }
  }
  function Lu(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Lu(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Tu() {
    for (var e = window, n = kr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = kr(e.document);
    }
    return n;
  }
  function io(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ic(e) {
    var n = Tu(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Lu(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && io(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          "selectionStart" in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = zu(t, o));
          var i = zu(t, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(n), e.extend(i.node, i.offset))
              : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Fc = fe && "documentMode" in document && 11 >= document.documentMode,
    mt = null,
    uo = null,
    qt = null,
    so = !1;
  function Ru(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    so ||
      mt == null ||
      mt !== kr(r) ||
      ((r = mt),
      "selectionStart" in r && io(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qt && Jt(qt, r)) ||
        ((qt = r),
        (r = Br(uo, "onSelect")),
        0 < r.length &&
          ((n = new ql("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = mt))));
  }
  function Ur(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var ht = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    ao = {},
    ju = {};
  fe &&
    ((ju = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ht.animationend.animation,
      delete ht.animationiteration.animation,
      delete ht.animationstart.animation),
    "TransitionEvent" in window || delete ht.transitionend.transition);
  function Ar(e) {
    if (ao[e]) return ao[e];
    if (!ht[e]) return e;
    var n = ht[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in ju) return (ao[e] = n[t]);
    return e;
  }
  var Ou = Ar("animationend"),
    Du = Ar("animationiteration"),
    Mu = Ar("animationstart"),
    Iu = Ar("transitionend"),
    Fu = new Map(),
    Uu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Dn(e, n) {
    Fu.set(e, n), K(n, [e]);
  }
  for (var co = 0; co < Uu.length; co++) {
    var fo = Uu[co],
      Uc = fo.toLowerCase(),
      Ac = fo[0].toUpperCase() + fo.slice(1);
    Dn(Uc, "on" + Ac);
  }
  Dn(Ou, "onAnimationEnd"),
    Dn(Du, "onAnimationIteration"),
    Dn(Mu, "onAnimationStart"),
    Dn("dblclick", "onDoubleClick"),
    Dn("focusin", "onFocus"),
    Dn("focusout", "onBlur"),
    Dn(Iu, "onTransitionEnd"),
    ce("onMouseEnter", ["mouseout", "mouseover"]),
    ce("onMouseLeave", ["mouseout", "mouseover"]),
    ce("onPointerEnter", ["pointerout", "pointerover"]),
    ce("onPointerLeave", ["pointerout", "pointerover"]),
    K(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    K(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    K("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    K(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    K(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    K(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bt =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Vc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(bt)
    );
  function Au(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Ua(r, n, void 0, e), (e.currentTarget = null);
  }
  function Vu(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              s = u.instance,
              p = u.currentTarget;
            if (((u = u.listener), s !== o && l.isPropagationStopped()))
              break e;
            Au(l, u, p), (o = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (s = u.instance),
              (p = u.currentTarget),
              (u = u.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            Au(l, u, p), (o = s);
          }
      }
    }
    if (xr) throw ((e = Hl), (xr = !1), (Hl = null), e);
  }
  function q(e, n) {
    var t = n[ko];
    t === void 0 && (t = n[ko] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Bu(n, e, 2, !1), t.add(r));
  }
  function po(e, n, t) {
    var r = 0;
    n && (r |= 4), Bu(t, e, r, n);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      (e[Vr] = !0),
        he.forEach(function (t) {
          t !== "selectionchange" && (Vc.has(t) || po(t, !1, e), po(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Vr] || ((n[Vr] = !0), po("selectionchange", !1, n));
    }
  }
  function Bu(e, n, t, r) {
    switch (cu(n)) {
      case 1:
        var l = ec;
        break;
      case 4:
        l = nc;
        break;
      default:
        l = Gl;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Bl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
  }
  function mo(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = Zn(u)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Ki(function () {
      var p = o,
        y = Ul(t),
        g = [];
      e: {
        var h = Fu.get(e);
        if (h !== void 0) {
          var S = ql,
            _ = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              S = vc;
              break;
            case "focusin":
              (_ = "focus"), (S = no);
              break;
            case "focusout":
              (_ = "blur"), (S = no);
              break;
            case "beforeblur":
            case "afterblur":
              S = no;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = pu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = lc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = wc;
              break;
            case Ou:
            case Du:
            case Mu:
              S = uc;
              break;
            case Iu:
              S = Sc;
              break;
            case "scroll":
              S = tc;
              break;
            case "wheel":
              S = xc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = ac;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = hu;
          }
          var C = (n & 4) !== 0,
            ae = !C && e === "scroll",
            f = C ? (h !== null ? h + "Capture" : null) : h;
          C = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                f !== null &&
                  ((w = It(a, f)), w != null && C.push(nr(a, w, d)))),
              ae)
            )
              break;
            a = a.return;
          }
          0 < C.length &&
            ((h = new S(h, _, null, t, y)), g.push({ event: h, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            h &&
              t !== Fl &&
              (_ = t.relatedTarget || t.fromElement) &&
              (Zn(_) || _[wn]))
          )
            break e;
          if (
            (S || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            S
              ? ((_ = t.relatedTarget || t.toElement),
                (S = p),
                (_ = _ ? Zn(_) : null),
                _ !== null &&
                  ((ae = Gn(_)), _ !== ae || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((S = null), (_ = p)),
            S !== _)
          ) {
            if (
              ((C = pu),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((C = hu),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (ae = S == null ? h : gt(S)),
              (d = _ == null ? h : gt(_)),
              (h = new C(w, a + "leave", S, t, y)),
              (h.target = ae),
              (h.relatedTarget = d),
              (w = null),
              Zn(y) === p &&
                ((C = new C(f, a + "enter", _, t, y)),
                (C.target = d),
                (C.relatedTarget = ae),
                (w = C)),
              (ae = w),
              S && _)
            )
              n: {
                for (C = S, f = _, a = 0, d = C; d; d = vt(d)) a++;
                for (d = 0, w = f; w; w = vt(w)) d++;
                for (; 0 < a - d; ) (C = vt(C)), a--;
                for (; 0 < d - a; ) (f = vt(f)), d--;
                for (; a--; ) {
                  if (C === f || (f !== null && C === f.alternate)) break n;
                  (C = vt(C)), (f = vt(f));
                }
                C = null;
              }
            else C = null;
            S !== null && Hu(g, h, S, C, !1),
              _ !== null && ae !== null && Hu(g, ae, _, C, !0);
          }
        }
        e: {
          if (
            ((h = p ? gt(p) : window),
            (S = h.nodeName && h.nodeName.toLowerCase()),
            S === "select" || (S === "input" && h.type === "file"))
          )
            var P = Tc;
          else if (Su(h))
            if (xu) P = Dc;
            else {
              P = jc;
              var N = Rc;
            }
          else
            (S = h.nodeName) &&
              S.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (P = Oc);
          if (P && (P = P(e, p))) {
            Eu(g, P, t, y);
            break e;
          }
          N && N(e, h, p),
            e === "focusout" &&
              (N = h._wrapperState) &&
              N.controlled &&
              h.type === "number" &&
              jl(h, "number", h.value);
        }
        switch (((N = p ? gt(p) : window), e)) {
          case "focusin":
            (Su(N) || N.contentEditable === "true") &&
              ((mt = N), (uo = p), (qt = null));
            break;
          case "focusout":
            qt = uo = mt = null;
            break;
          case "mousedown":
            so = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (so = !1), Ru(g, t, y);
            break;
          case "selectionchange":
            if (Fc) break;
          case "keydown":
          case "keyup":
            Ru(g, t, y);
        }
        var z;
        if (ro)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart";
                break e;
              case "compositionend":
                R = "onCompositionEnd";
                break e;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break e;
            }
            R = void 0;
          }
        else
          pt
            ? wu(e, t) && (R = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (R = "onCompositionStart");
        R &&
          (vu &&
            t.locale !== "ko" &&
            (pt || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && pt && (z = fu())
              : ((On = y),
                (Jl = "value" in On ? On.value : On.textContent),
                (pt = !0))),
          (N = Br(p, R)),
          0 < N.length &&
            ((R = new mu(R, e, null, t, y)),
            g.push({ event: R, listeners: N }),
            z ? (R.data = z) : ((z = ku(t)), z !== null && (R.data = z)))),
          (z = Cc ? Pc(e, t) : Nc(e, t)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new mu("onBeforeInput", "beforeinput", null, t, y)),
              g.push({ event: y, listeners: p }),
              (y.data = z)));
      }
      Vu(g, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = It(e, t)),
        o != null && r.unshift(nr(e, o, l)),
        (o = It(e, n)),
        o != null && r.push(nr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function vt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Hu(e, n, t, r, l) {
    for (var o = n._reactName, i = []; t !== null && t !== r; ) {
      var u = t,
        s = u.alternate,
        p = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        p !== null &&
        ((u = p),
        l
          ? ((s = It(t, o)), s != null && i.unshift(nr(t, s, u)))
          : l || ((s = It(t, o)), s != null && i.push(nr(t, s, u)))),
        (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Bc = /\r\n?/g,
    Hc = /\u0000|\uFFFD/g;
  function $u(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Bc,
        `
`
      )
      .replace(Hc, "");
  }
  function Hr(e, n, t) {
    if (((n = $u(n)), $u(e) !== n && t)) throw Error(m(425));
  }
  function $r() {}
  var ho = null,
    vo = null;
  function yo(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0,
    $c = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wu = typeof Promise == "function" ? Promise : void 0,
    Wc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wu < "u"
        ? function (e) {
            return Wu.resolve(null).then(e).catch(Qc);
          }
        : go;
  function Qc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wo(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === "/$")) {
          if (r === 0) {
            e.removeChild(l), Qt(n);
            return;
          }
          r--;
        } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
      t = l;
    } while (t);
    Qt(n);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Qu(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yt = Math.random().toString(36).slice(2),
    mn = "__reactFiber$" + yt,
    tr = "__reactProps$" + yt,
    wn = "__reactContainer$" + yt,
    ko = "__reactEvents$" + yt,
    Kc = "__reactListeners$" + yt,
    Yc = "__reactHandles$" + yt;
  function Zn(e) {
    var n = e[mn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[wn] || t[mn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Qu(e); e !== null; ) {
            if ((t = e[mn])) return t;
            e = Qu(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[mn] || e[wn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[tr] || null;
  }
  var So = [],
    wt = -1;
  function In(e) {
    return { current: e };
  }
  function b(e) {
    0 > wt || ((e.current = So[wt]), (So[wt] = null), wt--);
  }
  function J(e, n) {
    wt++, (So[wt] = e.current), (e.current = n);
  }
  var Fn = {},
    Ce = In(Fn),
    Ie = In(!1),
    Jn = Fn;
  function kt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in t) l[o] = n[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Fe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Qr() {
    b(Ie), b(Ce);
  }
  function Ku(e, n, t) {
    if (Ce.current !== Fn) throw Error(m(168));
    J(Ce, n), J(Ie, t);
  }
  function Yu(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, Z(e) || "Unknown", l));
    return x({}, t, r);
  }
  function Kr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Fn),
      (Jn = Ce.current),
      J(Ce, e),
      J(Ie, Ie.current),
      !0
    );
  }
  function Xu(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t
      ? ((e = Yu(e, n, Jn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        b(Ie),
        b(Ce),
        J(Ce, e))
      : b(Ie),
      J(Ie, t);
  }
  var kn = null,
    Yr = !1,
    Eo = !1;
  function Gu(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Xc(e) {
    (Yr = !0), Gu(e);
  }
  function Un() {
    if (!Eo && kn !== null) {
      Eo = !0;
      var e = 0,
        n = W;
      try {
        var t = kn;
        for (W = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (kn = null), (Yr = !1);
      } catch (l) {
        throw (kn !== null && (kn = kn.slice(e + 1)), Ji($l, Un), l);
      } finally {
        (W = n), (Eo = !1);
      }
    }
    return null;
  }
  var St = [],
    Et = 0,
    Xr = null,
    Gr = 0,
    Ze = [],
    Je = 0,
    qn = null,
    Sn = 1,
    En = "";
  function bn(e, n) {
    (St[Et++] = Gr), (St[Et++] = Xr), (Xr = e), (Gr = n);
  }
  function Zu(e, n, t) {
    (Ze[Je++] = Sn), (Ze[Je++] = En), (Ze[Je++] = qn), (qn = e);
    var r = Sn;
    e = En;
    var l = 32 - rn(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var o = 32 - rn(n) + l;
    if (30 < o) {
      var i = l - (l % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Sn = (1 << (32 - rn(n) + l)) | (t << l) | r),
        (En = o + e);
    } else (Sn = (1 << o) | (t << l) | r), (En = e);
  }
  function xo(e) {
    e.return !== null && (bn(e, 1), Zu(e, 1, 0));
  }
  function _o(e) {
    for (; e === Xr; )
      (Xr = St[--Et]), (St[Et] = null), (Gr = St[--Et]), (St[Et] = null);
    for (; e === qn; )
      (qn = Ze[--Je]),
        (Ze[Je] = null),
        (En = Ze[--Je]),
        (Ze[Je] = null),
        (Sn = Ze[--Je]),
        (Ze[Je] = null);
  }
  var Ke = null,
    Ye = null,
    te = !1,
    on = null;
  function Ju(e, n) {
    var t = nn(5, null, null, 0);
    (t.elementType = "DELETED"),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function qu(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Ke = e), (Ye = Mn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Ke = e), (Ye = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = qn !== null ? { id: Sn, overflow: En } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = nn(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (Ke = e),
              (Ye = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Po(e) {
    if (te) {
      var n = Ye;
      if (n) {
        var t = n;
        if (!qu(e, n)) {
          if (Co(e)) throw Error(m(418));
          n = Mn(t.nextSibling);
          var r = Ke;
          n && qu(e, n)
            ? Ju(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ke = e));
        }
      } else {
        if (Co(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (te = !1), (Ke = e);
      }
    }
  }
  function bu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ke = e;
  }
  function Zr(e) {
    if (e !== Ke) return !1;
    if (!te) return bu(e), (te = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps))),
      n && (n = Ye))
    ) {
      if (Co(e)) throw (es(), Error(m(418)));
      for (; n; ) Ju(e, n), (n = Mn(n.nextSibling));
    }
    if ((bu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ye = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else Ye = Ke ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = Ye; e; ) e = Mn(e.nextSibling);
  }
  function xt() {
    (Ye = Ke = null), (te = !1);
  }
  function No(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  var Gc = ue.ReactCurrentBatchConfig;
  function lr(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          o = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === o
          ? n.ref
          : ((n = function (i) {
              var u = l.refs;
              i === null ? delete u[o] : (u[o] = i);
            }),
            (n._stringRef = o),
            n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ns(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ts(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Kn(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = gi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === De
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
          (a.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === Me &&
              ns(P) === a.type))
        ? ((w = l(a, d.props)), (w.ref = lr(f, a, d)), (w.return = f), w)
        : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
          (w.ref = lr(f, a, d)),
          (w.return = f),
          w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = wi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7
        ? ((a = ut(d, f.mode, w, P)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = gi("" + a, f.mode, d)), (a.return = f), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Se:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case Te:
            return (a = wi(a, f.mode, d)), (a.return = f), a;
          case Me:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Ot(a) || L(a))
          return (a = ut(a, f.mode, d, null)), (a.return = f), a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return P !== null ? null : u(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Se:
            return d.key === P ? s(f, a, d, w) : null;
          case Te:
            return d.key === P ? p(f, a, d, w) : null;
          case Me:
            return (P = d._init), h(f, a, P(d._payload), w);
        }
        if (Ot(d) || L(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function S(f, a, d, w, P) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(d) || null), u(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Se:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, P)
            );
          case Te:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, P)
            );
          case Me:
            var N = w._init;
            return S(f, a, d, N(w._payload), P);
        }
        if (Ot(w) || L(w)) return (f = f.get(d) || null), y(a, f, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function _(f, a, d, w) {
      for (
        var P = null, N = null, z = a, R = (a = 0), ke = null;
        z !== null && R < d.length;
        R++
      ) {
        z.index > R ? ((ke = z), (z = null)) : (ke = z.sibling);
        var B = h(f, z, d[R], w);
        if (B === null) {
          z === null && (z = ke);
          break;
        }
        e && z && B.alternate === null && n(f, z),
          (a = o(B, a, R)),
          N === null ? (P = B) : (N.sibling = B),
          (N = B),
          (z = ke);
      }
      if (R === d.length) return t(f, z), te && bn(f, R), P;
      if (z === null) {
        for (; R < d.length; R++)
          (z = g(f, d[R], w)),
            z !== null &&
              ((a = o(z, a, R)),
              N === null ? (P = z) : (N.sibling = z),
              (N = z));
        return te && bn(f, R), P;
      }
      for (z = r(f, z); R < d.length; R++)
        (ke = S(z, f, R, d[R], w)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              z.delete(ke.key === null ? R : ke.key),
            (a = o(ke, a, R)),
            N === null ? (P = ke) : (N.sibling = ke),
            (N = ke));
      return (
        e &&
          z.forEach(function (Yn) {
            return n(f, Yn);
          }),
        te && bn(f, R),
        P
      );
    }
    function C(f, a, d, w) {
      var P = L(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var N = (P = null), z = a, R = (a = 0), ke = null, B = d.next();
        z !== null && !B.done;
        R++, B = d.next()
      ) {
        z.index > R ? ((ke = z), (z = null)) : (ke = z.sibling);
        var Yn = h(f, z, B.value, w);
        if (Yn === null) {
          z === null && (z = ke);
          break;
        }
        e && z && Yn.alternate === null && n(f, z),
          (a = o(Yn, a, R)),
          N === null ? (P = Yn) : (N.sibling = Yn),
          (N = Yn),
          (z = ke);
      }
      if (B.done) return t(f, z), te && bn(f, R), P;
      if (z === null) {
        for (; !B.done; R++, B = d.next())
          (B = g(f, B.value, w)),
            B !== null &&
              ((a = o(B, a, R)),
              N === null ? (P = B) : (N.sibling = B),
              (N = B));
        return te && bn(f, R), P;
      }
      for (z = r(f, z); !B.done; R++, B = d.next())
        (B = S(z, f, R, B.value, w)),
          B !== null &&
            (e && B.alternate !== null && z.delete(B.key === null ? R : B.key),
            (a = o(B, a, R)),
            N === null ? (P = B) : (N.sibling = B),
            (N = B));
      return (
        e &&
          z.forEach(function (Lf) {
            return n(f, Lf);
          }),
        te && bn(f, R),
        P
      );
    }
    function ae(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === De &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case Se:
            e: {
              for (var P = d.key, N = a; N !== null; ) {
                if (N.key === P) {
                  if (((P = d.type), P === De)) {
                    if (N.tag === 7) {
                      t(f, N.sibling),
                        (a = l(N, d.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    N.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === Me &&
                      ns(P) === N.type)
                  ) {
                    t(f, N.sibling),
                      (a = l(N, d.props)),
                      (a.ref = lr(f, N, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  t(f, N);
                  break;
                } else n(f, N);
                N = N.sibling;
              }
              d.type === De
                ? ((a = ut(d.props.children, f.mode, w, d.key)),
                  (a.return = f),
                  (f = a))
                : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = lr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case Te:
            e: {
              for (N = d.key; a !== null; ) {
                if (a.key === N)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    t(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    t(f, a);
                    break;
                  }
                else n(f, a);
                a = a.sibling;
              }
              (a = wi(d, f.mode, w)), (a.return = f), (f = a);
            }
            return i(f);
          case Me:
            return (N = d._init), ae(f, a, N(d._payload), w);
        }
        if (Ot(d)) return _(f, a, d, w);
        if (L(d)) return C(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (t(f, a), (a = gi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : t(f, a);
    }
    return ae;
  }
  var _t = ts(!0),
    rs = ts(!1),
    qr = In(null),
    br = null,
    Ct = null,
    zo = null;
  function Lo() {
    zo = Ct = br = null;
  }
  function To(e) {
    var n = qr.current;
    b(qr), (e._currentValue = n);
  }
  function Ro(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function Pt(e, n) {
    (br = e),
      (zo = Ct = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (Ue = !0), (e.firstContext = null));
  }
  function qe(e) {
    var n = e._currentValue;
    if (zo !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Ct === null)) {
        if (br === null) throw Error(m(308));
        (Ct = e), (br.dependencies = { lanes: 0, firstContext: e });
      } else Ct = Ct.next = e;
    return n;
  }
  var et = null;
  function jo(e) {
    et === null ? (et = [e]) : et.push(e);
  }
  function ls(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), jo(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      xn(e, r)
    );
  }
  function xn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var An = !1;
  function Oo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function os(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function _n(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), U & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        xn(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), jo(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      xn(e, t)
    );
  }
  function el(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  function is(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        o = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
        } while (t !== null);
        o === null ? (l = o = n) : (o = o.next = n);
      } else l = o = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    An = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        p = s.next;
      (s.next = null), i === null ? (o = p) : (i.next = p), (i = s);
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (u = y.lastBaseUpdate),
        u !== i &&
          (u === null ? (y.firstBaseUpdate = p) : (u.next = p),
          (y.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var g = l.baseState;
      (i = 0), (y = p = s = null), (u = o);
      do {
        var h = u.lane,
          S = u.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: S,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var _ = e,
              C = u;
            switch (((h = n), (S = t), C.tag)) {
              case 1:
                if (((_ = C.payload), typeof _ == "function")) {
                  g = _.call(S, g, h);
                  break e;
                }
                g = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = C.payload),
                  (h = typeof _ == "function" ? _.call(S, g, h) : _),
                  h == null)
                )
                  break e;
                g = x({}, g, h);
                break e;
              case 2:
                An = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (h = l.effects),
            h === null ? (l.effects = [u]) : h.push(u));
        } else
          (S = {
            eventTime: S,
            lane: h,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            y === null ? ((p = y = S), (s = g)) : (y = y.next = S),
            (i |= h);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (h = u),
            (u = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (i |= l.lane), (l = l.next);
        while (l !== n);
      } else o === null && (l.shared.lanes = 0);
      (rt |= i), (e.lanes = i), (e.memoizedState = g);
    }
  }
  function us(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    hn = In(or),
    ir = In(or),
    ur = In(or);
  function nt(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Do(e, n) {
    switch ((J(ur, n), J(ir, e), J(hn, or), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Dl(n, e));
    }
    b(hn), J(hn, n);
  }
  function Nt() {
    b(hn), b(ir), b(ur);
  }
  function ss(e) {
    nt(ur.current);
    var n = nt(hn.current),
      t = Dl(n, e.type);
    n !== t && (J(ir, e), J(hn, t));
  }
  function Mo(e) {
    ir.current === e && (b(hn), b(ir));
  }
  var re = In(0);
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Io = [];
  function Fo() {
    for (var e = 0; e < Io.length; e++)
      Io[e]._workInProgressVersionPrimary = null;
    Io.length = 0;
  }
  var rl = ue.ReactCurrentDispatcher,
    Uo = ue.ReactCurrentBatchConfig,
    tt = 0,
    le = null,
    pe = null,
    ge = null,
    ll = !1,
    sr = !1,
    ar = 0,
    Zc = 0;
  function Pe() {
    throw Error(m(321));
  }
  function Ao(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!ln(e[t], n[t])) return !1;
    return !0;
  }
  function Vo(e, n, t, r, l, o) {
    if (
      ((tt = o),
      (le = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? ef : nf),
      (e = t(r, l)),
      sr)
    ) {
      o = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= o)) throw Error(m(301));
        (o += 1),
          (ge = pe = null),
          (n.updateQueue = null),
          (rl.current = tf),
          (e = t(r, l));
      } while (sr);
    }
    if (
      ((rl.current = ul),
      (n = pe !== null && pe.next !== null),
      (tt = 0),
      (ge = pe = le = null),
      (ll = !1),
      n)
    )
      throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = ar !== 0;
    return (ar = 0), e;
  }
  function vn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e), ge;
  }
  function be() {
    if (pe === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var n = ge === null ? le.memoizedState : ge.next;
    if (n !== null) (ge = n), (pe = e);
    else {
      if (e === null) throw Error(m(310));
      (pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e);
    }
    return ge;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = be(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = pe,
      l = r.baseQueue,
      o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = o.next), (o.next = i);
      }
      (r.baseQueue = l = o), (t.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var u = (i = null),
        s = null,
        p = o;
      do {
        var y = p.lane;
        if ((tt & y) === y)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((u = s = g), (i = r)) : (s = s.next = g),
            (le.lanes |= y),
            (rt |= y);
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? (i = r) : (s.next = u),
        ln(r, n.memoizedState) || (Ue = !0),
        (n.memoizedState = r),
        (n.baseState = i),
        (n.baseQueue = s),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (le.lanes |= o), (rt |= o), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function $o(e) {
    var n = be(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = (l = l.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== l);
      ln(o, n.memoizedState) || (Ue = !0),
        (n.memoizedState = o),
        n.baseQueue === null && (n.baseState = o),
        (t.lastRenderedState = o);
    }
    return [o, r];
  }
  function as() {}
  function cs(e, n) {
    var t = le,
      r = be(),
      l = n(),
      o = !ln(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ue = !0)),
      (r = r.queue),
      Wo(ps.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || o || (ge !== null && ge.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        fr(9, ds.bind(null, t, r, l, n), void 0, null),
        we === null)
      )
        throw Error(m(349));
      tt & 30 || fs(t, n, l);
    }
    return l;
  }
  function fs(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = le.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (le.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function ds(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ms(n) && hs(e);
  }
  function ps(e, n, t) {
    return t(function () {
      ms(n) && hs(e);
    });
  }
  function ms(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !ln(e, t);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var n = xn(e, 1);
    n !== null && cn(n, e, 1, -1);
  }
  function vs(e) {
    var n = vn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = bc.bind(null, le, e)),
      [n.memoizedState, e]
    );
  }
  function fr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = le.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (le.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function ys() {
    return be().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = vn();
    (le.flags |= e),
      (l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function il(e, n, t, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (pe !== null) {
      var i = pe.memoizedState;
      if (((o = i.destroy), r !== null && Ao(r, i.deps))) {
        l.memoizedState = fr(n, t, o, r);
        return;
      }
    }
    (le.flags |= e), (l.memoizedState = fr(1 | n, t, o, r));
  }
  function gs(e, n) {
    return ol(8390656, 8, e, n);
  }
  function Wo(e, n) {
    return il(2048, 8, e, n);
  }
  function ws(e, n) {
    return il(4, 2, e, n);
  }
  function ks(e, n) {
    return il(4, 4, e, n);
  }
  function Ss(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Es(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), il(4, 4, Ss.bind(null, n, e), t)
    );
  }
  function Qo() {}
  function xs(e, n) {
    var t = be();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Ao(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function _s(e, n) {
    var t = be();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Ao(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function Cs(e, n, t) {
    return tt & 21
      ? (ln(t, n) ||
          ((t = nu()), (le.lanes |= t), (rt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = t));
  }
  function Jc(e, n) {
    var t = W;
    (W = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Uo.transition;
    Uo.transition = {};
    try {
      e(!1), n();
    } finally {
      (W = t), (Uo.transition = r);
    }
  }
  function Ps() {
    return be().memoizedState;
  }
  function qc(e, n, t) {
    var r = Wn(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ns(e))
    )
      zs(n, t);
    else if (((t = ls(e, n, t, r)), t !== null)) {
      var l = je();
      cn(t, e, r, l), Ls(t, n, r);
    }
  }
  function bc(e, n, t) {
    var r = Wn(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ns(e)) zs(n, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = n.lastRenderedReducer), o !== null)
      )
        try {
          var i = n.lastRenderedState,
            u = o(i, t);
          if (((l.hasEagerState = !0), (l.eagerState = u), ln(u, i))) {
            var s = n.interleaved;
            s === null
              ? ((l.next = l), jo(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = ls(e, n, l, r)),
        t !== null && ((l = je()), cn(t, e, r, l), Ls(t, n, r));
    }
  }
  function Ns(e) {
    var n = e.alternate;
    return e === le || (n !== null && n === le);
  }
  function zs(e, n) {
    sr = ll = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Ls(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  var ul = {
      readContext: qe,
      useCallback: Pe,
      useContext: Pe,
      useEffect: Pe,
      useImperativeHandle: Pe,
      useInsertionEffect: Pe,
      useLayoutEffect: Pe,
      useMemo: Pe,
      useReducer: Pe,
      useRef: Pe,
      useState: Pe,
      useDebugValue: Pe,
      useDeferredValue: Pe,
      useTransition: Pe,
      useMutableSource: Pe,
      useSyncExternalStore: Pe,
      useId: Pe,
      unstable_isNewReconciler: !1,
    },
    ef = {
      readContext: qe,
      useCallback: function (e, n) {
        return (vn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: qe,
      useEffect: gs,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ol(4194308, 4, Ss.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return ol(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return ol(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = vn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = vn();
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = qc.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = vn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: vs,
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        return (vn().memoizedState = e);
      },
      useTransition: function () {
        var e = vs(!1),
          n = e[0];
        return (e = Jc.bind(null, e[1])), (vn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = le,
          l = vn();
        if (te) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = n()), we === null)) throw Error(m(349));
          tt & 30 || fs(r, n, t);
        }
        l.memoizedState = t;
        var o = { value: t, getSnapshot: n };
        return (
          (l.queue = o),
          gs(ps.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          fr(9, ds.bind(null, r, o, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = vn(),
          n = we.identifierPrefix;
        if (te) {
          var t = En,
            r = Sn;
          (t = (r & ~(1 << (32 - rn(r) - 1))).toString(32) + t),
            (n = ":" + n + "R" + t),
            (t = ar++),
            0 < t && (n += "H" + t.toString(32)),
            (n += ":");
        } else (t = Zc++), (n = ":" + n + "r" + t.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: qe,
      useCallback: xs,
      useContext: qe,
      useEffect: Wo,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: _s,
      useReducer: Ho,
      useRef: ys,
      useState: function () {
        return Ho(cr);
      },
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        var n = be();
        return Cs(n, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ho(cr)[0],
          n = be().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: qe,
      useCallback: xs,
      useContext: qe,
      useEffect: Wo,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: _s,
      useReducer: $o,
      useRef: ys,
      useState: function () {
        return $o(cr);
      },
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        var n = be();
        return pe === null ? (n.memoizedState = e) : Cs(n, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = $o(cr)[0],
          n = be().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function un(e, n) {
    if (e && e.defaultProps) {
      (n = x({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Ko(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : x({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = je(),
        l = Wn(e),
        o = _n(r, l);
      (o.payload = n),
        t != null && (o.callback = t),
        (n = Vn(e, o, l)),
        n !== null && (cn(n, e, l, r), el(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = je(),
        l = Wn(e),
        o = _n(r, l);
      (o.tag = 1),
        (o.payload = n),
        t != null && (o.callback = t),
        (n = Vn(e, o, l)),
        n !== null && (cn(n, e, l, r), el(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = je(),
        r = Wn(e),
        l = _n(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = Vn(e, l, r)),
        n !== null && (cn(n, e, r, t), el(n, e, r));
    },
  };
  function Ts(e, n, t, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Jt(t, r) || !Jt(l, o)
        : !0
    );
  }
  function Rs(e, n, t) {
    var r = !1,
      l = Fn,
      o = n.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = qe(o))
        : ((l = Fe(n) ? Jn : Ce.current),
          (r = n.contextTypes),
          (o = (r = r != null) ? kt(e, l) : Fn)),
      (n = new n(t, o)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = sl),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      n
    );
  }
  function js(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Yo(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Oo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null
      ? (l.context = qe(o))
      : ((o = Fe(n) ? Jn : Ce.current), (l.context = kt(e, o))),
      (l.state = e.memoizedState),
      (o = n.getDerivedStateFromProps),
      typeof o == "function" && (Ko(e, n, o, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((n = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && sl.enqueueReplaceState(l, l.state, null),
        nl(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "",
        r = n;
      do (t += A(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Xo(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Go(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Os(e, n, t) {
    (t = _n(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        hl || ((hl = !0), (ci = r)), Go(e, n);
      }),
      t
    );
  }
  function Ds(e, n, t) {
    (t = _n(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Go(e, n);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (t.callback = function () {
          Go(e, n),
            typeof r != "function" &&
              (Hn === null ? (Hn = new Set([this])) : Hn.add(this));
          var i = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      t
    );
  }
  function Ms(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new rf();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = gf.bind(null, e, n, t)), n.then(e, e));
  }
  function Is(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fs(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = _n(-1, 1)), (n.tag = 2), Vn(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var lf = ue.ReactCurrentOwner,
    Ue = !1;
  function Re(e, n, t, r) {
    n.child = e === null ? rs(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Us(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return (
      Pt(n, l),
      (r = Vo(e, n, t, r, o, l)),
      (t = Bo()),
      e !== null && !Ue
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Cn(e, n, l))
        : (te && t && xo(n), (n.flags |= 1), Re(e, n, r, l), n.child)
    );
  }
  function As(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" &&
        !yi(o) &&
        o.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = o), Vs(e, n, o, r, l))
        : ((e = Sl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var i = o.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Jt), t(i, r) && e.ref === n.ref)
      )
        return Cn(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Kn(o, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Vs(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Jt(o, r) && e.ref === n.ref)
        if (((Ue = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ue = !0);
        else return (n.lanes = e.lanes), Cn(e, n, l);
    }
    return Zo(e, n, t, r, l);
  }
  function Bs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          J(Tt, Xe),
          (Xe |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            J(Tt, Xe),
            (Xe |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : t),
          J(Tt, Xe),
          (Xe |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
        J(Tt, Xe),
        (Xe |= r);
    return Re(e, n, l, t), n.child;
  }
  function Hs(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Zo(e, n, t, r, l) {
    var o = Fe(t) ? Jn : Ce.current;
    return (
      (o = kt(n, o)),
      Pt(n, l),
      (t = Vo(e, n, t, r, o, l)),
      (r = Bo()),
      e !== null && !Ue
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Cn(e, n, l))
        : (te && r && xo(n), (n.flags |= 1), Re(e, n, t, l), n.child)
    );
  }
  function $s(e, n, t, r, l) {
    if (Fe(t)) {
      var o = !0;
      Kr(n);
    } else o = !1;
    if ((Pt(n, l), n.stateNode === null))
      cl(e, n), Rs(n, t, r), Yo(n, t, r, l), (r = !0);
    else if (e === null) {
      var i = n.stateNode,
        u = n.memoizedProps;
      i.props = u;
      var s = i.context,
        p = t.contextType;
      typeof p == "object" && p !== null
        ? (p = qe(p))
        : ((p = Fe(t) ? Jn : Ce.current), (p = kt(n, p)));
      var y = t.getDerivedStateFromProps,
        g =
          typeof y == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== r || s !== p) && js(n, i, r, p)),
        (An = !1);
      var h = n.memoizedState;
      (i.state = h),
        nl(n, r, i, l),
        (s = n.memoizedState),
        u !== r || h !== s || Ie.current || An
          ? (typeof y == "function" && (Ko(n, t, y, r), (s = n.memoizedState)),
            (u = An || Ts(n, t, u, r, h, s, p))
              ? (g ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = u))
          : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (i = n.stateNode),
        os(e, n),
        (u = n.memoizedProps),
        (p = n.type === n.elementType ? u : un(n.type, u)),
        (i.props = p),
        (g = n.pendingProps),
        (h = i.context),
        (s = t.contextType),
        typeof s == "object" && s !== null
          ? (s = qe(s))
          : ((s = Fe(t) ? Jn : Ce.current), (s = kt(n, s)));
      var S = t.getDerivedStateFromProps;
      (y =
        typeof S == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== g || h !== s) && js(n, i, r, s)),
        (An = !1),
        (h = n.memoizedState),
        (i.state = h),
        nl(n, r, i, l);
      var _ = n.memoizedState;
      u !== g || h !== _ || Ie.current || An
        ? (typeof S == "function" && (Ko(n, t, S, r), (_ = n.memoizedState)),
          (p = An || Ts(n, t, p, r, h, _, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, _, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, _, s)),
              typeof i.componentDidUpdate == "function" && (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = _)),
          (i.props = r),
          (i.state = _),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return Jo(e, n, t, r, o, l);
  }
  function Jo(e, n, t, r, l, o) {
    Hs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Xu(n, t, !1), Cn(e, n, o);
    (r = n.stateNode), (lf.current = n);
    var u =
      i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && i
        ? ((n.child = _t(n, e.child, null, o)), (n.child = _t(n, null, u, o)))
        : Re(e, n, u, o),
      (n.memoizedState = r.state),
      l && Xu(n, t, !0),
      n.child
    );
  }
  function Ws(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Ku(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Ku(e, n.context, !1),
      Do(e, n.containerInfo);
  }
  function Qs(e, n, t, r, l) {
    return xt(), No(l), (n.flags |= 256), Re(e, n, t, r), n.child;
  }
  var qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ks(e, n, t) {
    var r = n.pendingProps,
      l = re.current,
      o = !1,
      i = (n.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((o = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      J(re, l & 1),
      e === null)
    )
      return (
        Po(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = n.mode),
                (o = n.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = El(i, r, 0, null)),
                (e = ut(e, r, t, null)),
                (o.return = n),
                (e.return = n),
                (o.sibling = e),
                (n.child = o),
                (n.child.memoizedState = bo(t)),
                (n.memoizedState = qo),
                e)
              : ei(n, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return of(e, n, i, r, u, l, t);
    if (o) {
      (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = Kn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = Kn(u, o)) : ((o = ut(o, i, t, null)), (o.flags |= 2)),
        (o.return = n),
        (r.return = n),
        (r.sibling = o),
        (n.child = r),
        (r = o),
        (o = n.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? bo(t)
            : {
                baseLanes: i.baseLanes | t,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~t),
        (n.memoizedState = qo),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Kn(o, { mode: "visible", children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function ei(e, n) {
    return (
      (n = El({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function al(e, n, t, r) {
    return (
      r !== null && No(r),
      _t(n, e.child, null, t),
      (e = ei(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function of(e, n, t, r, l, o, i) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Xo(Error(m(422)))), al(e, n, i, r))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((o = r.fallback),
          (l = n.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (o = ut(o, l, i, null)),
          (o.flags |= 2),
          (r.return = n),
          (o.return = n),
          (r.sibling = o),
          (n.child = r),
          n.mode & 1 && _t(n, e.child, null, i),
          (n.child.memoizedState = bo(i)),
          (n.memoizedState = qo),
          o);
    if (!(n.mode & 1)) return al(e, n, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (o = Error(m(419))), (r = Xo(o, r, void 0)), al(e, n, i, r)
      );
    }
    if (((u = (i & e.childLanes) !== 0), Ue || u)) {
      if (((r = we), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), xn(e, l), cn(r, e, l, -1));
      }
      return vi(), (r = Xo(Error(m(421)))), al(e, n, i, r);
    }
    return l.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = wf.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = o.treeContext),
        (Ye = Mn(l.nextSibling)),
        (Ke = n),
        (te = !0),
        (on = null),
        e !== null &&
          ((Ze[Je++] = Sn),
          (Ze[Je++] = En),
          (Ze[Je++] = qn),
          (Sn = e.id),
          (En = e.overflow),
          (qn = n)),
        (n = ei(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Ys(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Ro(e.return, n, t);
  }
  function ni(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((o.isBackwards = n),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = t),
        (o.tailMode = l));
  }
  function Xs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Re(e, n, r.children, t), (r = re.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ys(e, t, n);
          else if (e.tag === 19) Ys(e, t, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((J(re, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && tl(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            ni(n, !1, l, t, o);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && tl(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          ni(n, !0, t, null, o);
          break;
        case "together":
          ni(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Cn(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (rt |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Kn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Kn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function uf(e, n, t) {
    switch (n.tag) {
      case 3:
        Ws(n), xt();
        break;
      case 5:
        ss(n);
        break;
      case 1:
        Fe(n.type) && Kr(n);
        break;
      case 4:
        Do(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        J(qr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (J(re, re.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
            ? Ks(e, n, t)
            : (J(re, re.current & 1),
              (e = Cn(e, n, t)),
              e !== null ? e.sibling : null);
        J(re, re.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Xs(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          J(re, re.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Bs(e, n, t);
    }
    return Cn(e, n, t);
  }
  var Gs, ti, Zs, Js;
  (Gs = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }),
    (ti = function () {}),
    (Zs = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), nt(hn.current);
        var o = null;
        switch (t) {
          case "input":
            (l = Tl(e, l)), (r = Tl(e, r)), (o = []);
            break;
          case "select":
            (l = x({}, l, { value: void 0 })),
              (r = x({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = Ol(e, l)), (r = Ol(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = $r);
        }
        Ml(t, r);
        var i;
        t = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var u = l[p];
              for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (F.hasOwnProperty(p)
                  ? o || (o = [])
                  : (o = o || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((u = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== u && (s != null || u != null))
          )
            if (p === "style")
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (t || (t = {}), (t[i] = ""));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    u[i] !== s[i] &&
                    (t || (t = {}), (t[i] = s[i]));
              } else t || (o || (o = []), o.push(p, t)), (t = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (o = o || []).push(p, s))
                : p === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (o = o || []).push(p, "" + s)
                : p !== "suppressContentEditableWarning" &&
                  p !== "suppressHydrationWarning" &&
                  (F.hasOwnProperty(p)
                    ? (s != null && p === "onScroll" && q("scroll", e),
                      o || u === s || (o = []))
                    : (o = o || []).push(p, s));
        }
        t && (o = o || []).push("style", t);
        var p = o;
        (n.updateQueue = p) && (n.flags |= 4);
      }
    }),
    (Js = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function dr(e, n) {
    if (!te)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ne(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function sf(e, n, t) {
    var r = n.pendingProps;
    switch ((_o(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ne(n), null;
      case 1:
        return Fe(n.type) && Qr(), Ne(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Nt(),
          b(Ie),
          b(Ce),
          Fo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), on !== null && (pi(on), (on = null)))),
          ti(e, n),
          Ne(n),
          null
        );
      case 5:
        Mo(n);
        var l = nt(ur.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          Zs(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Ne(n), null;
          }
          if (((e = nt(hn.current)), Zr(n))) {
            (r = n.stateNode), (t = n.type);
            var o = n.memoizedProps;
            switch (((r[mn] = n), (r[tr] = o), (e = (n.mode & 1) !== 0), t)) {
              case "dialog":
                q("cancel", r), q("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++) q(bt[l], r);
                break;
              case "source":
                q("error", r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", r), q("load", r);
                break;
              case "details":
                q("toggle", r);
                break;
              case "input":
                Ri(r, o), q("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  q("invalid", r);
                break;
              case "textarea":
                Di(r, o), q("invalid", r);
            }
            Ml(t, o), (l = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (o.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : F.hasOwnProperty(i) &&
                    u != null &&
                    i === "onScroll" &&
                    q("scroll", r);
              }
            switch (t) {
              case "input":
                wr(r), Oi(r, o, !0);
                break;
              case "textarea":
                wr(r), Ii(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = $r);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Fi(t)),
              e === "http://www.w3.org/1999/xhtml"
                ? t === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = i.createElement(t, { is: r.is }))
                  : ((e = i.createElement(t)),
                    t === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, t)),
              (e[mn] = n),
              (e[tr] = r),
              Gs(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((i = Il(t, r)), t)) {
                case "dialog":
                  q("cancel", e), q("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  q("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++) q(bt[l], e);
                  l = r;
                  break;
                case "source":
                  q("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  q("error", e), q("load", e), (l = r);
                  break;
                case "details":
                  q("toggle", e), (l = r);
                  break;
                case "input":
                  Ri(e, r), (l = Tl(e, r)), q("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = x({}, r, { value: void 0 })),
                    q("invalid", e);
                  break;
                case "textarea":
                  Di(e, r), (l = Ol(e, r)), q("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), (u = l);
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === "style"
                    ? Vi(e, s)
                    : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Ui(e, s))
                    : o === "children"
                    ? typeof s == "string"
                      ? (t !== "textarea" || s !== "") && Dt(e, s)
                      : typeof s == "number" && Dt(e, "" + s)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (F.hasOwnProperty(o)
                        ? s != null && o === "onScroll" && q("scroll", e)
                        : s != null && He(e, o, s, i));
                }
              switch (t) {
                case "input":
                  wr(e), Oi(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Ii(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? st(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        st(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Ne(n), null;
      case 6:
        if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (((t = nt(ur.current)), nt(hn.current), Zr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[mn] = n),
              (o = r.nodeValue !== t) && ((e = Ke), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            o && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[mn] = n),
              (n.stateNode = r);
        }
        return Ne(n), null;
      case 13:
        if (
          (b(re),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Ye !== null && n.mode & 1 && !(n.flags & 128))
            es(), xt(), (n.flags |= 98560), (o = !1);
          else if (((o = Zr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (
                ((o = n.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(m(317));
              o[mn] = n;
            } else
              xt(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Ne(n), (o = !1);
          } else on !== null && (pi(on), (on = null)), (o = !0);
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || re.current & 1 ? me === 0 && (me = 3) : vi())),
            n.updateQueue !== null && (n.flags |= 4),
            Ne(n),
            null);
      case 4:
        return (
          Nt(),
          ti(e, n),
          e === null && er(n.stateNode.containerInfo),
          Ne(n),
          null
        );
      case 10:
        return To(n.type._context), Ne(n), null;
      case 17:
        return Fe(n.type) && Qr(), Ne(n), null;
      case 19:
        if ((b(re), (o = n.memoizedState), o === null)) return Ne(n), null;
        if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) dr(o, !1);
          else {
            if (me !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((i = tl(e)), i !== null)) {
                  for (
                    n.flags |= 128,
                      dr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (o = t),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return J(re, (re.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              se() > Rt &&
              ((n.flags |= 128), (r = !0), dr(o, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = tl(i)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                dr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !te)
              )
                return Ne(n), null;
            } else
              2 * se() - o.renderingStartTime > Rt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), dr(o, !1), (n.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = n.child), (n.child = i))
            : ((t = o.last),
              t !== null ? (t.sibling = i) : (n.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((n = o.tail),
            (o.rendering = n),
            (o.tail = n.sibling),
            (o.renderingStartTime = se()),
            (n.sibling = null),
            (t = re.current),
            J(re, r ? (t & 1) | 2 : t & 1),
            n)
          : (Ne(n), null);
      case 22:
      case 23:
        return (
          hi(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? Xe & 1073741824 &&
              (Ne(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ne(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function af(e, n) {
    switch ((_o(n), n.tag)) {
      case 1:
        return (
          Fe(n.type) && Qr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Nt(),
          b(Ie),
          b(Ce),
          Fo(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Mo(n), null;
      case 13:
        if (
          (b(re), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(m(340));
          xt();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return b(re), null;
      case 4:
        return Nt(), null;
      case 10:
        return To(n.type._context), null;
      case 22:
      case 23:
        return hi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    ze = !1,
    cf = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function Lt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          ie(e, n, r);
        }
      else t.current = null;
  }
  function ri(e, n, t) {
    try {
      t();
    } catch (r) {
      ie(e, n, r);
    }
  }
  var qs = !1;
  function ff(e, n) {
    if (((ho = Rr), (e = Tu()), io(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, o.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0,
              u = -1,
              s = -1,
              p = 0,
              y = 0,
              g = e,
              h = null;
            n: for (;;) {
              for (
                var S;
                g !== t || (l !== 0 && g.nodeType !== 3) || (u = i + l),
                  g !== o || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (S = g.firstChild) !== null;

              )
                (h = g), (g = S);
              for (;;) {
                if (g === e) break n;
                if (
                  (h === t && ++p === l && (u = i),
                  h === o && ++y === r && (s = i),
                  (S = g.nextSibling) !== null)
                )
                  break;
                (g = h), (h = g.parentNode);
              }
              g = S;
            }
            t = u === -1 || s === -1 ? null : { start: u, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      vo = { focusedElem: e, selectionRange: t }, Rr = !1, E = n;
      E !== null;

    )
      if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (E = e);
      else
        for (; E !== null; ) {
          n = E;
          try {
            var _ = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var C = _.memoizedProps,
                      ae = _.memoizedState,
                      f = n.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? C : un(n.type, C),
                        ae
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            ie(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (E = e);
            break;
          }
          E = n.return;
        }
    return (_ = qs), (qs = !1), _;
  }
  function pr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && ri(n, t, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next);
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function li(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function bs(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), bs(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[mn],
          delete n[tr],
          delete n[ko],
          delete n[Kc],
          delete n[Yc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ea(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function oi(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = $r));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oi(e, n, t), e = e.sibling; e !== null; )
        oi(e, n, t), (e = e.sibling);
  }
  function ii(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, n, t), e = e.sibling; e !== null; )
        ii(e, n, t), (e = e.sibling);
  }
  var Ee = null,
    sn = !1;
  function Bn(e, n, t) {
    for (t = t.child; t !== null; ) ta(e, n, t), (t = t.sibling);
  }
  function ta(e, n, t) {
    if (pn && typeof pn.onCommitFiberUnmount == "function")
      try {
        pn.onCommitFiberUnmount(Cr, t);
      } catch {}
    switch (t.tag) {
      case 5:
        ze || Lt(t, n);
      case 6:
        var r = Ee,
          l = sn;
        (Ee = null),
          Bn(e, n, t),
          (Ee = r),
          (sn = l),
          Ee !== null &&
            (sn
              ? ((e = Ee),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : Ee.removeChild(t.stateNode));
        break;
      case 18:
        Ee !== null &&
          (sn
            ? ((e = Ee),
              (t = t.stateNode),
              e.nodeType === 8
                ? wo(e.parentNode, t)
                : e.nodeType === 1 && wo(e, t),
              Qt(e))
            : wo(Ee, t.stateNode));
        break;
      case 4:
        (r = Ee),
          (l = sn),
          (Ee = t.stateNode.containerInfo),
          (sn = !0),
          Bn(e, n, t),
          (Ee = r),
          (sn = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ze &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && (o & 2 || o & 4) && ri(t, n, i),
              (l = l.next);
          } while (l !== r);
        }
        Bn(e, n, t);
        break;
      case 1:
        if (
          !ze &&
          (Lt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            ie(t, n, u);
          }
        Bn(e, n, t);
        break;
      case 21:
        Bn(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((ze = (r = ze) || t.memoizedState !== null), Bn(e, n, t), (ze = r))
          : Bn(e, n, t);
        break;
      default:
        Bn(e, n, t);
    }
  }
  function ra(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new cf()),
        n.forEach(function (r) {
          var l = kf.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function an(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var o = e,
            i = n,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (Ee = u.stateNode), (sn = !1);
                break e;
              case 3:
                (Ee = u.stateNode.containerInfo), (sn = !0);
                break e;
              case 4:
                (Ee = u.stateNode.containerInfo), (sn = !0);
                break e;
            }
            u = u.return;
          }
          if (Ee === null) throw Error(m(160));
          ta(o, i, l), (Ee = null), (sn = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          ie(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) la(n, e), (n = n.sibling);
  }
  function la(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((an(n, e), yn(e), r & 4)) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (C) {
            ie(e, e.return, C);
          }
          try {
            pr(5, e, e.return);
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        break;
      case 1:
        an(n, e), yn(e), r & 512 && t !== null && Lt(t, t.return);
        break;
      case 5:
        if (
          (an(n, e),
          yn(e),
          r & 512 && t !== null && Lt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = t !== null ? t.memoizedProps : o,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === "input" && o.type === "radio" && o.name != null && ji(l, o),
                Il(u, i);
              var p = Il(u, o);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === "style"
                  ? Vi(l, g)
                  : y === "dangerouslySetInnerHTML"
                  ? Ui(l, g)
                  : y === "children"
                  ? Dt(l, g)
                  : He(l, y, g, p);
              }
              switch (u) {
                case "input":
                  Rl(l, o);
                  break;
                case "textarea":
                  Mi(l, o);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var S = o.value;
                  S != null
                    ? st(l, !!o.multiple, S, !1)
                    : h !== !!o.multiple &&
                      (o.defaultValue != null
                        ? st(l, !!o.multiple, o.defaultValue, !0)
                        : st(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[tr] = o;
            } catch (C) {
              ie(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((an(n, e), yn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (C) {
            ie(e, e.return, C);
          }
        }
        break;
      case 3:
        if (
          (an(n, e), yn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Qt(n.containerInfo);
          } catch (C) {
            ie(e, e.return, C);
          }
        break;
      case 4:
        an(n, e), yn(e);
        break;
      case 13:
        an(n, e),
          yn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ai = se())),
          r & 4 && ra(e);
        break;
      case 22:
        if (
          ((y = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((ze = (p = ze) || y), an(n, e), (ze = p)) : an(n, e),
          yn(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !y && e.mode & 1)
          )
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (((h = E), (S = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    Lt(h, h.return);
                    var _ = h.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      (r = h), (t = h.return);
                      try {
                        (n = r),
                          (_.props = n.memoizedProps),
                          (_.state = n.memoizedState),
                          _.componentWillUnmount();
                      } catch (C) {
                        ie(r, t, C);
                      }
                    }
                    break;
                  case 5:
                    Lt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      ua(g);
                      continue;
                    }
                }
                S !== null ? ((S.return = h), (E = S)) : ua(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  (l = g.stateNode),
                    p
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((u = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (u.style.display = Ai("display", i)));
                } catch (C) {
                  ie(e, e.return, C);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (C) {
                  ie(e, e.return, C);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              (g.child.return = g), (g = g.child);
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), (g = g.return);
            }
            y === g && (y = null),
              (g.sibling.return = g.return),
              (g = g.sibling);
          }
        }
        break;
      case 19:
        an(n, e), yn(e), r & 4 && ra(e);
        break;
      case 21:
        break;
      default:
        an(n, e), yn(e);
    }
  }
  function yn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), (r.flags &= -33));
            var o = na(e);
            ii(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = na(e);
            oi(e, u, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ie(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function df(e, n, t) {
    (E = e), oa(e);
  }
  function oa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || ze;
          u = fl;
          var p = ze;
          if (((fl = i), (ze = s) && !p))
            for (E = l; E !== null; )
              (i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? sa(l)
                  : s !== null
                  ? ((s.return = i), (E = s))
                  : sa(l);
          for (; o !== null; ) (E = o), oa(o), (o = o.sibling);
          (E = l), (fl = u), (ze = p);
        }
        ia(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : ia(e);
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ze || dl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !ze)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : un(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = n.updateQueue;
                o !== null && us(n, o, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  us(n, i, t);
                }
                break;
              case 5:
                var u = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = u;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Qt(g);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          ze || (n.flags & 512 && li(n));
        } catch (h) {
          ie(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function ua(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              ie(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ie(n, l, s);
              }
            }
            var o = n.return;
            try {
              li(n);
            } catch (s) {
              ie(n, o, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              li(n);
            } catch (s) {
              ie(n, i, s);
            }
        }
      } catch (s) {
        ie(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var u = n.sibling;
      if (u !== null) {
        (u.return = n.return), (E = u);
        break;
      }
      E = n.return;
    }
  }
  var pf = Math.ceil,
    pl = ue.ReactCurrentDispatcher,
    ui = ue.ReactCurrentOwner,
    en = ue.ReactCurrentBatchConfig,
    U = 0,
    we = null,
    de = null,
    xe = 0,
    Xe = 0,
    Tt = In(0),
    me = 0,
    mr = null,
    rt = 0,
    ml = 0,
    si = 0,
    hr = null,
    Ae = null,
    ai = 0,
    Rt = 1 / 0,
    Pn = null,
    hl = !1,
    ci = null,
    Hn = null,
    vl = !1,
    $n = null,
    yl = 0,
    vr = 0,
    fi = null,
    gl = -1,
    wl = 0;
  function je() {
    return U & 6 ? se() : gl !== -1 ? gl : (gl = se());
  }
  function Wn(e) {
    return e.mode & 1
      ? U & 2 && xe !== 0
        ? xe & -xe
        : Gc.transition !== null
        ? (wl === 0 && (wl = nu()), wl)
        : ((e = W),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cu(e.type))),
          e)
      : 1;
  }
  function cn(e, n, t, r) {
    if (50 < vr) throw ((vr = 0), (fi = null), Error(m(185)));
    Vt(e, t, r),
      (!(U & 2) || e !== we) &&
        (e === we && (!(U & 2) && (ml |= t), me === 4 && Qn(e, xe)),
        Ve(e, r),
        t === 1 && U === 0 && !(n.mode & 1) && ((Rt = se() + 500), Yr && Un()));
  }
  function Ve(e, n) {
    var t = e.callbackNode;
    Ga(e, n);
    var r = zr(e, e === we ? xe : 0);
    if (r === 0)
      t !== null && qi(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && qi(t), n === 1))
        e.tag === 0 ? Xc(ca.bind(null, e)) : Gu(ca.bind(null, e)),
          Wc(function () {
            !(U & 6) && Un();
          }),
          (t = null);
      else {
        switch (tu(r)) {
          case 1:
            t = $l;
            break;
          case 4:
            t = bi;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = eu;
            break;
          default:
            t = _r;
        }
        t = ga(t, aa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function aa(e, n) {
    if (((gl = -1), (wl = 0), U & 6)) throw Error(m(327));
    var t = e.callbackNode;
    if (jt() && e.callbackNode !== t) return null;
    var r = zr(e, e === we ? xe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = kl(e, r);
    else {
      n = r;
      var l = U;
      U |= 2;
      var o = da();
      (we !== e || xe !== n) && ((Pn = null), (Rt = se() + 500), ot(e, n));
      do
        try {
          vf();
          break;
        } catch (u) {
          fa(e, u);
        }
      while (!0);
      Lo(),
        (pl.current = o),
        (U = l),
        de !== null ? (n = 0) : ((we = null), (xe = 0), (n = me));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = Wl(e)), l !== 0 && ((r = l), (n = di(e, l)))),
        n === 1)
      )
        throw ((t = mr), ot(e, 0), Qn(e, r), Ve(e, se()), t);
      if (n === 6) Qn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !mf(l) &&
            ((n = kl(e, r)),
            n === 2 && ((o = Wl(e)), o !== 0 && ((r = o), (n = di(e, o)))),
            n === 1))
        )
          throw ((t = mr), ot(e, 0), Qn(e, r), Ve(e, se()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            it(e, Ae, Pn);
            break;
          case 3:
            if (
              (Qn(e, r),
              (r & 130023424) === r && ((n = ai + 500 - se()), 10 < n))
            ) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                je(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = go(it.bind(null, e, Ae, Pn), n);
              break;
            }
            it(e, Ae, Pn);
            break;
          case 4:
            if ((Qn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - rn(r);
              (o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
            }
            if (
              ((r = l),
              (r = se() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * pf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = go(it.bind(null, e, Ae, Pn), r);
              break;
            }
            it(e, Ae, Pn);
            break;
          case 5:
            it(e, Ae, Pn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ve(e, se()), e.callbackNode === t ? aa.bind(null, e) : null;
  }
  function di(e, n) {
    var t = hr;
    return (
      e.current.memoizedState.isDehydrated && (ot(e, n).flags |= 256),
      (e = kl(e, n)),
      e !== 2 && ((n = Ae), (Ae = t), n !== null && pi(n)),
      e
    );
  }
  function pi(e) {
    Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
  }
  function mf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!ln(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Qn(e, n) {
    for (
      n &= ~si,
        n &= ~ml,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - rn(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function ca(e) {
    if (U & 6) throw Error(m(327));
    jt();
    var n = zr(e, 0);
    if (!(n & 1)) return Ve(e, se()), null;
    var t = kl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && ((n = r), (t = di(e, r)));
    }
    if (t === 1) throw ((t = mr), ot(e, 0), Qn(e, n), Ve(e, se()), t);
    if (t === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      it(e, Ae, Pn),
      Ve(e, se()),
      null
    );
  }
  function mi(e, n) {
    var t = U;
    U |= 1;
    try {
      return e(n);
    } finally {
      (U = t), U === 0 && ((Rt = se() + 500), Yr && Un());
    }
  }
  function lt(e) {
    $n !== null && $n.tag === 0 && !(U & 6) && jt();
    var n = U;
    U |= 1;
    var t = en.transition,
      r = W;
    try {
      if (((en.transition = null), (W = 1), e)) return e();
    } finally {
      (W = r), (en.transition = t), (U = n), !(U & 6) && Un();
    }
  }
  function hi() {
    (Xe = Tt.current), b(Tt);
  }
  function ot(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), $c(t)), de !== null))
      for (t = de.return; t !== null; ) {
        var r = t;
        switch ((_o(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Qr();
            break;
          case 3:
            Nt(), b(Ie), b(Ce), Fo();
            break;
          case 5:
            Mo(r);
            break;
          case 4:
            Nt();
            break;
          case 13:
            b(re);
            break;
          case 19:
            b(re);
            break;
          case 10:
            To(r.type._context);
            break;
          case 22:
          case 23:
            hi();
        }
        t = t.return;
      }
    if (
      ((we = e),
      (de = e = Kn(e.current, null)),
      (xe = Xe = n),
      (me = 0),
      (mr = null),
      (si = ml = rt = 0),
      (Ae = hr = null),
      et !== null)
    ) {
      for (n = 0; n < et.length; n++)
        if (((t = et[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            o = t.pending;
          if (o !== null) {
            var i = o.next;
            (o.next = l), (r.next = i);
          }
          t.pending = r;
        }
      et = null;
    }
    return e;
  }
  function fa(e, n) {
    do {
      var t = de;
      try {
        if ((Lo(), (rl.current = ul), ll)) {
          for (var r = le.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ll = !1;
        }
        if (
          ((tt = 0),
          (ge = pe = le = null),
          (sr = !1),
          (ar = 0),
          (ui.current = null),
          t === null || t.return === null)
        ) {
          (me = 1), (mr = n), (de = null);
          break;
        }
        e: {
          var o = e,
            i = t.return,
            u = t,
            s = n;
          if (
            ((n = xe),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = u,
              g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var S = Is(i);
            if (S !== null) {
              (S.flags &= -257),
                Fs(S, i, u, o, n),
                S.mode & 1 && Ms(o, p, n),
                (n = S),
                (s = p);
              var _ = n.updateQueue;
              if (_ === null) {
                var C = new Set();
                C.add(s), (n.updateQueue = C);
              } else _.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Ms(o, p, n), vi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && u.mode & 1) {
            var ae = Is(i);
            if (ae !== null) {
              !(ae.flags & 65536) && (ae.flags |= 256),
                Fs(ae, i, u, o, n),
                No(zt(s, u));
              break e;
            }
          }
          (o = s = zt(s, u)),
            me !== 4 && (me = 2),
            hr === null ? (hr = [o]) : hr.push(o),
            (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var f = Os(o, s, n);
                is(o, f);
                break e;
              case 1:
                u = s;
                var a = o.type,
                  d = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Hn === null || !Hn.has(d))))
                ) {
                  (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                  var w = Ds(o, u, n);
                  is(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ma(t);
      } catch (P) {
        (n = P), de === t && t !== null && (de = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = pl.current;
    return (pl.current = ul), e === null ? ul : e;
  }
  function vi() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
      we === null || (!(rt & 268435455) && !(ml & 268435455)) || Qn(we, xe);
  }
  function kl(e, n) {
    var t = U;
    U |= 2;
    var r = da();
    (we !== e || xe !== n) && ((Pn = null), ot(e, n));
    do
      try {
        hf();
        break;
      } catch (l) {
        fa(e, l);
      }
    while (!0);
    if ((Lo(), (U = t), (pl.current = r), de !== null)) throw Error(m(261));
    return (we = null), (xe = 0), me;
  }
  function hf() {
    for (; de !== null; ) pa(de);
  }
  function vf() {
    for (; de !== null && !Va(); ) pa(de);
  }
  function pa(e) {
    var n = ya(e.alternate, e, Xe);
    (e.memoizedProps = e.pendingProps),
      n === null ? ma(e) : (de = n),
      (ui.current = null);
  }
  function ma(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = af(t, n)), t !== null)) {
          (t.flags &= 32767), (de = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (me = 6), (de = null);
          return;
        }
      } else if (((t = sf(t, n, Xe)), t !== null)) {
        de = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        de = n;
        return;
      }
      de = n = e;
    } while (n !== null);
    me === 0 && (me = 5);
  }
  function it(e, n, t) {
    var r = W,
      l = en.transition;
    try {
      (en.transition = null), (W = 1), yf(e, n, t, r);
    } finally {
      (en.transition = l), (W = r);
    }
    return null;
  }
  function yf(e, n, t, r) {
    do jt();
    while ($n !== null);
    if (U & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = t.lanes | t.childLanes;
    if (
      (Za(e, o),
      e === we && ((de = we = null), (xe = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        vl ||
        ((vl = !0),
        ga(_r, function () {
          return jt(), null;
        })),
      (o = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || o)
    ) {
      (o = en.transition), (en.transition = null);
      var i = W;
      W = 1;
      var u = U;
      (U |= 4),
        (ui.current = null),
        ff(e, t),
        la(t, e),
        Ic(vo),
        (Rr = !!ho),
        (vo = ho = null),
        (e.current = t),
        df(t),
        Ba(),
        (U = u),
        (W = i),
        (en.transition = o);
    } else e.current = t;
    if (
      (vl && ((vl = !1), ($n = e), (yl = l)),
      (o = e.pendingLanes),
      o === 0 && (Hn = null),
      Wa(t.stateNode),
      Ve(e, se()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw ((hl = !1), (e = ci), (ci = null), e);
    return (
      yl & 1 && e.tag !== 0 && jt(),
      (o = e.pendingLanes),
      o & 1 ? (e === fi ? vr++ : ((vr = 0), (fi = e))) : (vr = 0),
      Un(),
      null
    );
  }
  function jt() {
    if ($n !== null) {
      var e = tu(yl),
        n = en.transition,
        t = W;
      try {
        if (((en.transition = null), (W = 16 > e ? 16 : e), $n === null))
          var r = !1;
        else {
          if (((e = $n), ($n = null), (yl = 0), U & 6)) throw Error(m(331));
          var l = U;
          for (U |= 4, E = e.current; E !== null; ) {
            var o = E,
              i = o.child;
            if (E.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, o);
                    }
                    var g = y.child;
                    if (g !== null) (g.return = y), (E = g);
                    else
                      for (; E !== null; ) {
                        y = E;
                        var h = y.sibling,
                          S = y.return;
                        if ((bs(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = S), (E = h);
                          break;
                        }
                        E = S;
                      }
                  }
                }
                var _ = o.alternate;
                if (_ !== null) {
                  var C = _.child;
                  if (C !== null) {
                    _.child = null;
                    do {
                      var ae = C.sibling;
                      (C.sibling = null), (C = ae);
                    } while (C !== null);
                  }
                }
                E = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
            else
              e: for (; E !== null; ) {
                if (((o = E), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  (f.return = o.return), (E = f);
                  break e;
                }
                E = o.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
            else
              e: for (i = a; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, u);
                    }
                  } catch (P) {
                    ie(u, u.return, P);
                  }
                if (u === i) {
                  E = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  (w.return = u.return), (E = w);
                  break e;
                }
                E = u.return;
              }
          }
          if (
            ((U = l), Un(), pn && typeof pn.onPostCommitFiberRoot == "function")
          )
            try {
              pn.onPostCommitFiberRoot(Cr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (W = t), (en.transition = n);
      }
    }
    return !1;
  }
  function ha(e, n, t) {
    (n = zt(t, n)),
      (n = Os(e, n, 1)),
      (e = Vn(e, n, 1)),
      (n = je()),
      e !== null && (Vt(e, 1, n), Ve(e, n));
  }
  function ie(e, n, t) {
    if (e.tag === 3) ha(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ha(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Hn === null || !Hn.has(r)))
          ) {
            (e = zt(t, e)),
              (e = Ds(n, e, 1)),
              (n = Vn(n, e, 1)),
              (e = je()),
              n !== null && (Vt(n, 1, e), Ve(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function gf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = je()),
      (e.pingedLanes |= e.suspendedLanes & t),
      we === e &&
        (xe & t) === t &&
        (me === 4 || (me === 3 && (xe & 130023424) === xe && 500 > se() - ai)
          ? ot(e, 0)
          : (si |= t)),
      Ve(e, n);
  }
  function va(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
        : (n = 1));
    var t = je();
    (e = xn(e, n)), e !== null && (Vt(e, n, t), Ve(e, t));
  }
  function wf(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), va(e, t);
  }
  function kf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), va(e, t);
  }
  var ya;
  ya = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Ie.current) Ue = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (Ue = !1), uf(e, n, t);
        Ue = !!(e.flags & 131072);
      }
    else (Ue = !1), te && n.flags & 1048576 && Zu(n, Gr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        cl(e, n), (e = n.pendingProps);
        var l = kt(n, Ce.current);
        Pt(n, t), (l = Vo(null, n, r, e, l, t));
        var o = Bo();
        return (
          (n.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Fe(r) ? ((o = !0), Kr(n)) : (o = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Oo(n),
              (l.updater = sl),
              (n.stateNode = l),
              (l._reactInternals = n),
              Yo(n, r, e, t),
              (n = Jo(null, n, r, !0, o, t)))
            : ((n.tag = 0), te && o && xo(n), Re(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (cl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = Ef(r)),
            (e = un(r, e)),
            l)
          ) {
            case 0:
              n = Zo(null, n, r, e, t);
              break e;
            case 1:
              n = $s(null, n, r, e, t);
              break e;
            case 11:
              n = Us(null, n, r, e, t);
              break e;
            case 14:
              n = As(null, n, r, un(r.type, e), t);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          Zo(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          $s(e, n, r, l, t)
        );
      case 3:
        e: {
          if ((Ws(n), e === null)) throw Error(m(387));
          (r = n.pendingProps),
            (o = n.memoizedState),
            (l = o.element),
            os(e, n),
            nl(n, r, null, t);
          var i = n.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (n.updateQueue.baseState = o),
              (n.memoizedState = o),
              n.flags & 256)
            ) {
              (l = zt(Error(m(423)), n)), (n = Qs(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = zt(Error(m(424)), n)), (n = Qs(e, n, r, t, l));
              break e;
            } else
              for (
                Ye = Mn(n.stateNode.containerInfo.firstChild),
                  Ke = n,
                  te = !0,
                  on = null,
                  t = rs(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((xt(), r === l)) {
              n = Cn(e, n, t);
              break e;
            }
            Re(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          ss(n),
          e === null && Po(n),
          (r = n.type),
          (l = n.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          yo(r, l) ? (i = null) : o !== null && yo(r, o) && (n.flags |= 32),
          Hs(e, n),
          Re(e, n, i, t),
          n.child
        );
      case 6:
        return e === null && Po(n), null;
      case 13:
        return Ks(e, n, t);
      case 4:
        return (
          Do(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = _t(n, null, r, t)) : Re(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          Us(e, n, r, l, t)
        );
      case 7:
        return Re(e, n, n.pendingProps, t), n.child;
      case 8:
        return Re(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Re(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (o = n.memoizedProps),
            (i = l.value),
            J(qr, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (ln(o.value, i)) {
              if (o.children === l.children && !Ie.current) {
                n = Cn(e, n, t);
                break e;
              }
            } else
              for (o = n.child, o !== null && (o.return = n); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        (s = _n(-1, t & -t)), (s.tag = 2);
                        var p = o.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null
                            ? (s.next = s)
                            : ((s.next = y.next), (y.next = s)),
                            (p.pending = s);
                        }
                      }
                      (o.lanes |= t),
                        (s = o.alternate),
                        s !== null && (s.lanes |= t),
                        Ro(o.return, t, n),
                        (u.lanes |= t);
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(m(341));
                  (i.lanes |= t),
                    (u = i.alternate),
                    u !== null && (u.lanes |= t),
                    Ro(i, t, n),
                    (i = o.sibling);
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      (o.return = i.return), (i = o);
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          Re(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          Pt(n, t),
          (l = qe(l)),
          (r = r(l)),
          (n.flags |= 1),
          Re(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = un(r, n.pendingProps)),
          (l = un(r.type, l)),
          As(e, n, r, l, t)
        );
      case 15:
        return Vs(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          cl(e, n),
          (n.tag = 1),
          Fe(r) ? ((e = !0), Kr(n)) : (e = !1),
          Pt(n, t),
          Rs(n, r, l),
          Yo(n, r, l, t),
          Jo(null, n, r, !0, e, t)
        );
      case 19:
        return Xs(e, n, t);
      case 22:
        return Bs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ga(e, n) {
    return Ji(e, n);
  }
  function Sf(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function nn(e, n, t, r) {
    return new Sf(e, n, t, r);
  }
  function yi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ef(e) {
    if (typeof e == "function") return yi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === fn)) return 11;
      if (e === dn) return 14;
    }
    return 2;
  }
  function Kn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = nn(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    );
  }
  function Sl(e, n, t, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) yi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case De:
          return ut(t.children, l, o, n);
        case Ge:
          (i = 8), (l |= 8);
          break;
        case zn:
          return (
            (e = nn(12, t, n, l | 2)), (e.elementType = zn), (e.lanes = o), e
          );
        case $e:
          return (e = nn(13, t, n, l)), (e.elementType = $e), (e.lanes = o), e;
        case tn:
          return (e = nn(19, t, n, l)), (e.elementType = tn), (e.lanes = o), e;
        case oe:
          return El(t, l, o, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gn:
                i = 10;
                break e;
              case Xn:
                i = 9;
                break e;
              case fn:
                i = 11;
                break e;
              case dn:
                i = 14;
                break e;
              case Me:
                (i = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = nn(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
    );
  }
  function ut(e, n, t, r) {
    return (e = nn(7, e, r, n)), (e.lanes = t), e;
  }
  function El(e, n, t, r) {
    return (
      (e = nn(22, e, r, n)),
      (e.elementType = oe),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function gi(e, n, t) {
    return (e = nn(6, e, null, n)), (e.lanes = t), e;
  }
  function wi(e, n, t) {
    return (
      (n = nn(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function xf(e, n, t, r, l) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ql(0)),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ki(e, n, t, r, l, o, i, u, s) {
    return (
      (e = new xf(e, n, t, u, s)),
      n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
      (o = nn(3, null, null, n)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Oo(o),
      e
    );
  }
  function _f(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Te,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function wa(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Gn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Fe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Fe(t)) return Yu(e, t, n);
    }
    return n;
  }
  function ka(e, n, t, r, l, o, i, u, s) {
    return (
      (e = ki(t, r, !0, e, l, o, i, u, s)),
      (e.context = wa(null)),
      (t = e.current),
      (r = je()),
      (l = Wn(t)),
      (o = _n(r, l)),
      (o.callback = n ?? null),
      Vn(t, o, l),
      (e.current.lanes = l),
      Vt(e, l, r),
      Ve(e, r),
      e
    );
  }
  function xl(e, n, t, r) {
    var l = n.current,
      o = je(),
      i = Wn(l);
    return (
      (t = wa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = _n(o, i)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = Vn(l, n, i)),
      e !== null && (cn(e, l, i, o), el(e, l, i)),
      i
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Sa(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Si(e, n) {
    Sa(e, n), (e = e.alternate) && Sa(e, n);
  }
  function Cf() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ei(e) {
    this._internalRoot = e;
  }
  (Cl.prototype.render = Ei.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(m(409));
      xl(e, n, null, null);
    }),
    (Cl.prototype.unmount = Ei.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          lt(function () {
            xl(null, e, null, null);
          }),
            (n[wn] = null);
        }
      });
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = ou();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < jn.length && n !== 0 && n < jn[t].priority; t++);
      jn.splice(t, 0, e), t === 0 && su(e);
    }
  };
  function xi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function xa() {}
  function Pf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var p = _l(i);
          o.call(p);
        };
      }
      var i = ka(n, r, e, 0, null, !1, !1, "", xa);
      return (
        (e._reactRootContainer = i),
        (e[wn] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        lt(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var p = _l(s);
        u.call(p);
      };
    }
    var s = ki(e, 0, !1, null, null, !1, !1, "", xa);
    return (
      (e._reactRootContainer = s),
      (e[wn] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      lt(function () {
        xl(n, s, t, r);
      }),
      s
    );
  }
  function Nl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = _l(i);
          u.call(s);
        };
      }
      xl(n, i, e, l);
    } else i = Pf(t, n, e, l, r);
    return _l(i);
  }
  (ru = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = At(n.pendingLanes);
          t !== 0 &&
            (Kl(n, t | 1), Ve(n, se()), !(U & 6) && ((Rt = se() + 500), Un()));
        }
        break;
      case 13:
        lt(function () {
          var r = xn(e, 1);
          if (r !== null) {
            var l = je();
            cn(r, e, 1, l);
          }
        }),
          Si(e, 1);
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var n = xn(e, 134217728);
        if (n !== null) {
          var t = je();
          cn(n, e, 134217728, t);
        }
        Si(e, 134217728);
      }
    }),
    (lu = function (e) {
      if (e.tag === 13) {
        var n = Wn(e),
          t = xn(e, n);
        if (t !== null) {
          var r = je();
          cn(t, e, n, r);
        }
        Si(e, n);
      }
    }),
    (ou = function () {
      return W;
    }),
    (iu = function (e, n) {
      var t = W;
      try {
        return (W = e), n();
      } finally {
        W = t;
      }
    }),
    (Al = function (e, n, t) {
      switch (n) {
        case "input":
          if ((Rl(e, t), (n = t.name), t.type === "radio" && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = Wr(r);
                if (!l) throw Error(m(90));
                Ti(r), Rl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Mi(e, t);
          break;
        case "select":
          (n = t.value), n != null && st(e, !!t.multiple, n, !1);
      }
    }),
    (Wi = mi),
    (Qi = lt);
  var Nf = { usingClientEntryPoint: !1, Events: [rr, gt, Wr, Hi, $i, mi] },
    yr = {
      findFiberByHostInstance: Zn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    zf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ue.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Gi(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Cf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        (Cr = zl.inject(zf)), (pn = zl);
      } catch {}
  }
  return (
    (Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf),
    (Be.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xi(n)) throw Error(m(200));
      return _f(e, n, null, t);
    }),
    (Be.createRoot = function (e, n) {
      if (!xi(e)) throw Error(m(299));
      var t = !1,
        r = "",
        l = Ea;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = ki(e, 1, !1, null, null, t, !1, r, l)),
        (e[wn] = n.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new Ei(n)
      );
    }),
    (Be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = Gi(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (Be.flushSync = function (e) {
      return lt(e);
    }),
    (Be.hydrate = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return Nl(null, e, n, !0, t);
    }),
    (Be.hydrateRoot = function (e, n, t) {
      if (!xi(e)) throw Error(m(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        o = "",
        i = Ea;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = ka(n, null, e, 1, t ?? null, l, !1, o, i)),
        (e[wn] = n.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new Cl(n);
    }),
    (Be.render = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return Nl(null, e, n, !1, t);
    }),
    (Be.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (lt(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[wn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Be.unstable_batchedUpdates = mi),
    (Be.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!Pl(t)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Nl(e, n, t, !1, r);
    }),
    (Be.version = "18.3.1-next-f1338f8080-20240426"),
    Be
  );
}
var Ra;
function If() {
  if (Ra) return Pi.exports;
  Ra = 1;
  function T() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (I) {
        console.error(I);
      }
  }
  return T(), (Pi.exports = Mf()), Pi.exports;
}
var ja;
function Ff() {
  if (ja) return Ll;
  ja = 1;
  var T = If();
  return (Ll.createRoot = T.createRoot), (Ll.hydrateRoot = T.hydrateRoot), Ll;
}
var Uf = Ff();
const Af =
  "./assets/app-logo-DPZvMUVJ.png";
function Vf() {
  return Q.jsxs("div", {
    className: "grid place-items-center py-4 bg-gray-100",
    children: [
      Q.jsx("a", {
        href: "",
        children: Q.jsx("img", {
          className: "h-[50px]  drop-shadow-md",
          src: Af,
          alt: "PokeAPP logo",
        }),
      }),
      Q.jsx("p", { className: "absolute top-2 right-2", children: "v1.0.0" }),
    ],
  });
}
function Bf({ pokemon: T }) {
  return Q.jsx("div", {
    className: "w-[56%] md:w-[66%] lg:max-w-[1000px] mx-auto my-8",
    children: Q.jsx("ul", {
      className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
      children: T.map((I) =>
        Q.jsxs(
          "li",
          {
            className:
              "relative flex items-center justify-center bg-background-2 bg-center bg-cover rounded-lg overflow-hidden aspect-square",
            children: [
              Q.jsx("img", {
                src: I.sprite,
                alt: I.name,
                className: "absolute  w-full h-full object-cover",
              }),
              Q.jsx("span", {
                className:
                  "absolute bottom-0 w-full text-white text-[0.65rem] capitalize md:text-[1rem] bg-gray-800 bg-opacity-50 px-2 py-1",
                children: I.name,
              }),
            ],
          },
          I.name
        )
      ),
    }),
  });
}
function Hf({ gotoNextPage: T, gotoPrevPage: I, prevPageAvailable: m }) {
  return Q.jsxs("div", {
    className:
      "flex absolute top-[calc(50%-28px)] justify-between w-full px-2 sm:px-4 lg:justify-end lg:top-6 lg:right-20 lg:gap-4",
    children: [
      Q.jsx("button", {
        className: "btn",
        onClick: I,
        disabled: !m,
        children: "Prev",
      }),
      Q.jsx("button", { className: "btn", onClick: T, children: "Next" }),
    ],
  });
}
const $f =
    "./assets/pokeapi-logo-DdjDHDHt.png",
  Wf =
    "./assets/github-mark-B3LxWxcL.png";
function Qf() {
  return Q.jsxs("div", {
    className: "grid place-items-center text-sm w-full",
    children: [
      Q.jsx("p", { children: "Created by" }),
      Q.jsxs("a", {
        className:
          "flex justify-between align-center text-xl leading-[1.25rem] font-bold py-2",
        href: "https://github.com/CarrotStrong",
        target: "_blank",
        children: [
          Q.jsx("p", { children: "CarrotStrong" }),
          Q.jsx("img", {
            className: "w-[1.25rem] h-[1.25rem] ml-1",
            src: Wf,
            alt: "GitHub logo",
          }),
        ],
      }),
      Q.jsx("p", { children: "using" }),
      Q.jsx("a", {
        href: "https://pokeapi.co/",
        target: "_blank",
        children: Q.jsx("img", {
          className: "w-20 my-[-20px]",
          src: $f,
          alt: "PokeAPI logo",
        }),
      }),
    ],
  });
}
function Kf() {
  const [T, I] = Nn.useState([]),
    [m, he] = Nn.useState(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
    ),
    [F, K] = Nn.useState(),
    [ce, fe] = Nn.useState(),
    [H, ve] = Nn.useState(!0),
    [ye, Y] = Nn.useState(!0),
    X = (O) => (O >= 1440 ? 16 : O >= 768 ? 12 : 10),
    Le = () => {
      const O = window.innerWidth,
        _e = X(O);
      he(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${_e}`);
    };
  Nn.useEffect(() => {
    Le();
    const O = () => {
      Le();
    };
    return (
      window.addEventListener("resize", O),
      () => {
        window.removeEventListener("resize", O);
      }
    );
  }, []),
    Nn.useEffect(() => {
      let O = new AbortController(),
        _e = !0;
      return (
        ve(!0),
        fetch(m, { signal: O.signal })
          .then((ee) => {
            if (!ee.ok) throw new Error(`HTTP error! status: ${ee.status}`);
            return ee.json();
          })
          .then((ee) => {
            if ((console.log(ee), _e)) {
              ve(!1),
                K(ee.next),
                fe(ee.previous),
                ee.previous === null && Y(!1);
              const He = ee.results.map((ue) =>
                fetch(ue.url)
                  .then((Se) => {
                    if (!Se.ok)
                      throw new Error(`HTTP error! status: ${Se.status}`);
                    return Se.json();
                  })
                  .then((Se) => ({
                    name: ue.name,
                    sprite: Se.sprites.front_default,
                  }))
              );
              Promise.all(He).then((ue) => {
                _e && I(ue);
              });
            }
          })
          .catch((ee) => {
            _e &&
              (ee.name === "AbortError"
                ? console.log("Request canceled", ee.message)
                : console.error("Fetch error:", ee));
          }),
        () => {
          (_e = !1), O.abort();
        }
      );
    }, [m]);
  function Oe() {
    he(F), Y(!0);
  }
  function G() {
    he(ce);
  }
  return H
    ? Q.jsx("div", {
        className:
          "w-full h-dvh grid place-items-center select-none text-3xl text-white text-shadow-lg",
        children: "Loading...",
      })
    : Q.jsxs("div", {
        children: [
          Q.jsx(Vf, {}),
          Q.jsx(Hf, {
            gotoNextPage: F ? Oe : null,
            gotoPrevPage: G,
            prevPageAvailable: ye,
          }),
          Q.jsx(Bf, { pokemon: T }),
          Q.jsx(Qf, {}),
        ],
      });
}
Uf.createRoot(document.getElementById("root")).render(
  Q.jsx(Nn.StrictMode, { children: Q.jsx(Kf, {}) })
);
