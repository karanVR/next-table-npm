import * as u from "react";
import Q, { useLayoutEffect as Xs, useEffect as Tr, useState as Ct, useRef as Gs } from "react";
import { Slot as tt } from "@radix-ui/react-slot";
import { cva as qs } from "class-variance-authority";
import { clsx as Zs } from "clsx";
import { twMerge as Js } from "tailwind-merge";
import { CaretSortIcon as Qs, ChevronUpIcon as ei, ChevronDownIcon as ti, CheckIcon as ni, ChevronLeftIcon as ri, ChevronRightIcon as oi } from "@radix-ui/react-icons";
import * as pt from "react-dom";
import si from "react-dom";
import { useReactTable as ii, getCoreRowModel as ai, getPaginationRowModel as ci, getFilteredRowModel as li, flexRender as er } from "@tanstack/react-table";
import { format as Pt } from "date-fns";
import { DayPicker as ui } from "react-day-picker";
var ln = { exports: {} }, ct = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function di() {
  if (tr) return ct;
  tr = 1;
  var e = Q, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, l, f) {
    var p, h = {}, g = null, v = null;
    f !== void 0 && (g = "" + f), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (p in l) r.call(l, p) && !s.hasOwnProperty(p) && (h[p] = l[p]);
    if (i && i.defaultProps) for (p in l = i.defaultProps, l) h[p] === void 0 && (h[p] = l[p]);
    return { $$typeof: t, type: i, key: g, ref: v, props: h, _owner: o.current };
  }
  return ct.Fragment = n, ct.jsx = a, ct.jsxs = a, ct;
}
var lt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function fi() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), x = Symbol.iterator, m = "@@iterator";
    function b(d) {
      if (d === null || typeof d != "object")
        return null;
      var S = x && d[x] || d[m];
      return typeof S == "function" ? S : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(d) {
      {
        for (var S = arguments.length, N = new Array(S > 1 ? S - 1 : 0), I = 1; I < S; I++)
          N[I - 1] = arguments[I];
        E("error", d, N);
      }
    }
    function E(d, S, N) {
      {
        var I = y.ReactDebugCurrentFrame, Z = I.getStackAddendum();
        Z !== "" && (S += "%s", N = N.concat([Z]));
        var J = N.map(function(V) {
          return String(V);
        });
        J.unshift("Warning: " + S), Function.prototype.apply.call(console[d], console, J);
      }
    }
    var P = !1, R = !1, T = !1, j = !1, M = !1, z;
    z = Symbol.for("react.module.reference");
    function U(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === s || M || d === o || d === f || d === p || j || d === v || P || R || T || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === h || d.$$typeof === a || d.$$typeof === i || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === z || d.getModuleId !== void 0));
    }
    function _(d, S, N) {
      var I = d.displayName;
      if (I)
        return I;
      var Z = S.displayName || S.name || "";
      return Z !== "" ? N + "(" + Z + ")" : N;
    }
    function Y(d) {
      return d.displayName || "Context";
    }
    function W(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case i:
            var S = d;
            return Y(S) + ".Consumer";
          case a:
            var N = d;
            return Y(N._context) + ".Provider";
          case l:
            return _(d, d.render, "ForwardRef");
          case h:
            var I = d.displayName || null;
            return I !== null ? I : W(d.type) || "Memo";
          case g: {
            var Z = d, J = Z._payload, V = Z._init;
            try {
              return W(V(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, C = 0, D, O, B, F, ae, ie, _e;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function be() {
      {
        if (C === 0) {
          D = console.log, O = console.info, B = console.warn, F = console.error, ae = console.group, ie = console.groupCollapsed, _e = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        C++;
      }
    }
    function Ie() {
      {
        if (C--, C === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, d, {
              value: D
            }),
            info: L({}, d, {
              value: O
            }),
            warn: L({}, d, {
              value: B
            }),
            error: L({}, d, {
              value: F
            }),
            group: L({}, d, {
              value: ae
            }),
            groupCollapsed: L({}, d, {
              value: ie
            }),
            groupEnd: L({}, d, {
              value: _e
            })
          });
        }
        C < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = y.ReactCurrentDispatcher, k;
    function G(d, S, N) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (Z) {
            var I = Z.stack.trim().match(/\n( *(at )?)/);
            k = I && I[1] || "";
          }
        return `
` + k + d;
      }
    }
    var re = !1, K;
    {
      var q = typeof WeakMap == "function" ? WeakMap : Map;
      K = new q();
    }
    function X(d, S) {
      if (!d || re)
        return "";
      {
        var N = K.get(d);
        if (N !== void 0)
          return N;
      }
      var I;
      re = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = ge.current, ge.current = null, be();
      try {
        if (S) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (fe) {
              I = fe;
            }
            Reflect.construct(d, [], V);
          } else {
            try {
              V.call();
            } catch (fe) {
              I = fe;
            }
            d.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            I = fe;
          }
          d();
        }
      } catch (fe) {
        if (fe && I && typeof fe.stack == "string") {
          for (var $ = fe.stack.split(`
`), le = I.stack.split(`
`), ne = $.length - 1, oe = le.length - 1; ne >= 1 && oe >= 0 && $[ne] !== le[oe]; )
            oe--;
          for (; ne >= 1 && oe >= 0; ne--, oe--)
            if ($[ne] !== le[oe]) {
              if (ne !== 1 || oe !== 1)
                do
                  if (ne--, oe--, oe < 0 || $[ne] !== le[oe]) {
                    var ve = `
` + $[ne].replace(" at new ", " at ");
                    return d.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", d.displayName)), typeof d == "function" && K.set(d, ve), ve;
                  }
                while (ne >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        re = !1, ge.current = J, Ie(), Error.prepareStackTrace = Z;
      }
      var Ke = d ? d.displayName || d.name : "", Ve = Ke ? G(Ke) : "";
      return typeof d == "function" && K.set(d, Ve), Ve;
    }
    function ce(d, S, N) {
      return X(d, !1);
    }
    function he(d) {
      var S = d.prototype;
      return !!(S && S.isReactComponent);
    }
    function Se(d, S, N) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return X(d, he(d));
      if (typeof d == "string")
        return G(d);
      switch (d) {
        case f:
          return G("Suspense");
        case p:
          return G("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return ce(d.render);
          case h:
            return Se(d.type, S, N);
          case g: {
            var I = d, Z = I._payload, J = I._init;
            try {
              return Se(J(Z), S, N);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, Me = {}, gt = y.ReactDebugCurrentFrame;
    function Re(d) {
      if (d) {
        var S = d._owner, N = Se(d.type, d._source, S ? S.type : null);
        gt.setExtraStackFrame(N);
      } else
        gt.setExtraStackFrame(null);
    }
    function Rs(d, S, N, I, Z) {
      {
        var J = Function.call.bind(xe);
        for (var V in d)
          if (J(d, V)) {
            var $ = void 0;
            try {
              if (typeof d[V] != "function") {
                var le = Error((I || "React class") + ": " + N + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              $ = d[V](S, V, I, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              $ = ne;
            }
            $ && !($ instanceof Error) && (Re(Z), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", N, V, typeof $), Re(null)), $ instanceof Error && !($.message in Me) && (Me[$.message] = !0, Re(Z), w("Failed %s type: %s", N, $.message), Re(null));
          }
      }
    }
    var Ns = Array.isArray;
    function Xt(d) {
      return Ns(d);
    }
    function js(d) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, N = S && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return N;
      }
    }
    function Os(d) {
      try {
        return Vn(d), !1;
      } catch {
        return !0;
      }
    }
    function Vn(d) {
      return "" + d;
    }
    function zn(d) {
      if (Os(d))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", js(d)), Vn(d);
    }
    var at = y.ReactCurrentOwner, As = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Un, Yn, Gt;
    Gt = {};
    function Ts(d) {
      if (xe.call(d, "ref")) {
        var S = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function _s(d) {
      if (xe.call(d, "key")) {
        var S = Object.getOwnPropertyDescriptor(d, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function ks(d, S) {
      if (typeof d.ref == "string" && at.current && S && at.current.stateNode !== S) {
        var N = W(at.current.type);
        Gt[N] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(at.current.type), d.ref), Gt[N] = !0);
      }
    }
    function Is(d, S) {
      {
        var N = function() {
          Un || (Un = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        N.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function Ms(d, S) {
      {
        var N = function() {
          Yn || (Yn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        N.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var Ds = function(d, S, N, I, Z, J, V) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: S,
        ref: N,
        props: V,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Fs(d, S, N, I, Z) {
      {
        var J, V = {}, $ = null, le = null;
        N !== void 0 && (zn(N), $ = "" + N), _s(S) && (zn(S.key), $ = "" + S.key), Ts(S) && (le = S.ref, ks(S, Z));
        for (J in S)
          xe.call(S, J) && !As.hasOwnProperty(J) && (V[J] = S[J]);
        if (d && d.defaultProps) {
          var ne = d.defaultProps;
          for (J in ne)
            V[J] === void 0 && (V[J] = ne[J]);
        }
        if ($ || le) {
          var oe = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          $ && Is(V, oe), le && Ms(V, oe);
        }
        return Ds(d, $, le, Z, I, at.current, V);
      }
    }
    var qt = y.ReactCurrentOwner, Kn = y.ReactDebugCurrentFrame;
    function Ye(d) {
      if (d) {
        var S = d._owner, N = Se(d.type, d._source, S ? S.type : null);
        Kn.setExtraStackFrame(N);
      } else
        Kn.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function Jt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Xn() {
      {
        if (qt.current) {
          var d = W(qt.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Ls(d) {
      return "";
    }
    var Gn = {};
    function Ws(d) {
      {
        var S = Xn();
        if (!S) {
          var N = typeof d == "string" ? d : d.displayName || d.name;
          N && (S = `

Check the top-level render call using <` + N + ">.");
        }
        return S;
      }
    }
    function qn(d, S) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var N = Ws(S);
        if (Gn[N])
          return;
        Gn[N] = !0;
        var I = "";
        d && d._owner && d._owner !== qt.current && (I = " It was passed a child from " + W(d._owner.type) + "."), Ye(d), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, I), Ye(null);
      }
    }
    function Zn(d, S) {
      {
        if (typeof d != "object")
          return;
        if (Xt(d))
          for (var N = 0; N < d.length; N++) {
            var I = d[N];
            Jt(I) && qn(I, S);
          }
        else if (Jt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var Z = b(d);
          if (typeof Z == "function" && Z !== d.entries)
            for (var J = Z.call(d), V; !(V = J.next()).done; )
              Jt(V.value) && qn(V.value, S);
        }
      }
    }
    function Bs(d) {
      {
        var S = d.type;
        if (S == null || typeof S == "string")
          return;
        var N;
        if (typeof S == "function")
          N = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === h))
          N = S.propTypes;
        else
          return;
        if (N) {
          var I = W(S);
          Rs(N, d.props, "prop", I, d);
        } else if (S.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var Z = W(S);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $s(d) {
      {
        for (var S = Object.keys(d.props), N = 0; N < S.length; N++) {
          var I = S[N];
          if (I !== "children" && I !== "key") {
            Ye(d), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), Ye(null);
            break;
          }
        }
        d.ref !== null && (Ye(d), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    var Jn = {};
    function Qn(d, S, N, I, Z, J) {
      {
        var V = U(d);
        if (!V) {
          var $ = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Ls();
          le ? $ += le : $ += Xn();
          var ne;
          d === null ? ne = "null" : Xt(d) ? ne = "array" : d !== void 0 && d.$$typeof === t ? (ne = "<" + (W(d.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof d, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, $);
        }
        var oe = Fs(d, S, N, Z, J);
        if (oe == null)
          return oe;
        if (V) {
          var ve = S.children;
          if (ve !== void 0)
            if (I)
              if (Xt(ve)) {
                for (var Ke = 0; Ke < ve.length; Ke++)
                  Zn(ve[Ke], d);
                Object.freeze && Object.freeze(ve);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zn(ve, d);
        }
        if (xe.call(S, "key")) {
          var Ve = W(d), fe = Object.keys(S).filter(function(Ks) {
            return Ks !== "key";
          }), Qt = fe.length > 0 ? "{key: someKey, " + fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jn[Ve + Qt]) {
            var Ys = fe.length > 0 ? "{" + fe.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qt, Ve, Ys, Ve), Jn[Ve + Qt] = !0;
          }
        }
        return d === r ? $s(oe) : Bs(oe), oe;
      }
    }
    function Hs(d, S, N) {
      return Qn(d, S, N, !0);
    }
    function Vs(d, S, N) {
      return Qn(d, S, N, !1);
    }
    var zs = Vs, Us = Hs;
    lt.Fragment = r, lt.jsx = zs, lt.jsxs = Us;
  }()), lt;
}
process.env.NODE_ENV === "production" ? ln.exports = di() : ln.exports = fi();
var c = ln.exports;
function A(...e) {
  return Js(Zs(e));
}
const rr = (e) => {
  if (e) {
    if (e === "contact")
      return "Contact Number";
    if (e === "imei")
      return "Serial/IMEI No.";
    if (e === "sno" || e === "product" || e === "plan_type" || e === "purchase_date")
      return null;
  } else return "";
  return e.split("_").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}, Tt = qs(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive: "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline: "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary: "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ze = u.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
    const a = r ? tt : "button";
    return /* @__PURE__ */ c.jsx(a, { className: A(Tt({ variant: t, size: n, className: e })), ref: s, ...o });
  }
);
Ze.displayName = "Button";
const _r = u.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ c.jsx(
    "input",
    {
      type: t,
      className: A(
        "flex h-12 md:h-9 w-full rounded-md  border border-[##ADADAD] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
_r.displayName = "Input";
const kr = ({ className: e, ...t }) => /* @__PURE__ */ c.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: A("mx-auto flex w-full justify-center", e),
    ...t
  }
);
kr.displayName = "Pagination";
const Ir = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("ul", { ref: n, className: A("flex flex-row items-center gap-1", e), ...t })
);
Ir.displayName = "PaginationContent";
const Rt = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("li", { ref: n, className: A("", e), ...t })
);
Rt.displayName = "PaginationItem";
const Mr = ({ className: e, isActive: t, size: n = "icon", ...r }) => /* @__PURE__ */ c.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: A(
      Tt({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
Mr.displayName = "PaginationLink";
function or(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Wt(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = u.createContext(a), l = n.length;
    n = [...n, a];
    function f(h) {
      const { scope: g, children: v, ...x } = h, m = (g == null ? void 0 : g[e][l]) || i, b = u.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(m.Provider, { value: b, children: v });
    }
    function p(h, g) {
      const v = (g == null ? void 0 : g[e][l]) || i, x = u.useContext(v);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${h}\` must be used within \`${s}\``);
    }
    return f.displayName = s + "Provider", [f, p];
  }
  const o = () => {
    const s = n.map((a) => u.createContext(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, pi(o, ...t)];
}
function pi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: l, scopeName: f }) => {
        const h = l(s)[`__scope${f}`];
        return { ...i, ...h };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function mi(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function hi(...e) {
  return (t) => e.forEach((n) => mi(n, t));
}
function se(...e) {
  return u.useCallback(hi(...e), e);
}
function vi(e) {
  const t = e + "CollectionProvider", [n, r] = Wt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (v) => {
    const { scope: x, children: m } = v, b = Q.useRef(null), y = Q.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: x, itemMap: y, collectionRef: b, children: m });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", l = Q.forwardRef(
    (v, x) => {
      const { scope: m, children: b } = v, y = s(i, m), w = se(x, y.collectionRef);
      return /* @__PURE__ */ c.jsx(tt, { ref: w, children: b });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", h = Q.forwardRef(
    (v, x) => {
      const { scope: m, children: b, ...y } = v, w = Q.useRef(null), E = se(x, w), P = s(f, m);
      return Q.useEffect(() => (P.itemMap.set(w, { ref: w, ...y }), () => void P.itemMap.delete(w))), /* @__PURE__ */ c.jsx(tt, { [p]: "", ref: E, children: b });
    }
  );
  h.displayName = f;
  function g(v) {
    const x = s(e + "CollectionConsumer", v);
    return Q.useCallback(() => {
      const b = x.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (P, R) => y.indexOf(P.ref.current) - y.indexOf(R.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: h },
    g,
    r
  ];
}
var gi = u.createContext(void 0);
function xi(e) {
  const t = u.useContext(gi);
  return e || t || "ltr";
}
var yi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], te = yi.reduce((e, t) => {
  const n = u.forwardRef((r, o) => {
    const { asChild: s, ...a } = r, i = s ? tt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(i, { ...a, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function wi(e, t) {
  e && pt.flushSync(() => e.dispatchEvent(t));
}
function je(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function bi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Si = "DismissableLayer", un = "dismissableLayer.update", Ei = "dismissableLayer.pointerDownOutside", Ci = "dismissableLayer.focusOutside", sr, Dr = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Pn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...l
    } = e, f = u.useContext(Dr), [p, h] = u.useState(null), g = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), x = se(t, (j) => h(j)), m = Array.from(f.layers), [b] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(b), w = p ? m.indexOf(p) : -1, E = f.layersWithOutsidePointerEventsDisabled.size > 0, P = w >= y, R = Ni((j) => {
      const M = j.target, z = [...f.branches].some((U) => U.contains(M));
      !P || z || (o == null || o(j), a == null || a(j), j.defaultPrevented || i == null || i());
    }, g), T = ji((j) => {
      const M = j.target;
      [...f.branches].some((U) => U.contains(M)) || (s == null || s(j), a == null || a(j), j.defaultPrevented || i == null || i());
    }, g);
    return bi((j) => {
      w === f.layers.size - 1 && (r == null || r(j), !j.defaultPrevented && i && (j.preventDefault(), i()));
    }, g), u.useEffect(() => {
      if (p)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (sr = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), ir(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = sr);
        };
    }, [p, g, n, f]), u.useEffect(() => () => {
      p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), ir());
    }, [p, f]), u.useEffect(() => {
      const j = () => v({});
      return document.addEventListener(un, j), () => document.removeEventListener(un, j);
    }, []), /* @__PURE__ */ c.jsx(
      te.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: E ? P ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ee(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: ee(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: ee(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Pn.displayName = Si;
var Pi = "DismissableLayerBranch", Ri = u.forwardRef((e, t) => {
  const n = u.useContext(Dr), r = u.useRef(null), o = se(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(te.div, { ...e, ref: o });
});
Ri.displayName = Pi;
function Ni(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Fr(
            Ei,
            n,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function ji(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Fr(Ci, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ir() {
  const e = new CustomEvent(un);
  document.dispatchEvent(e);
}
function Fr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? wi(o, s) : o.dispatchEvent(s);
}
var en = 0;
function Lr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ar()), document.body.insertAdjacentElement("beforeend", e[1] ?? ar()), en++, () => {
      en === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), en--;
    };
  }, []);
}
function ar() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var tn = "focusScope.autoFocusOnMount", nn = "focusScope.autoFocusOnUnmount", cr = { bubbles: !1, cancelable: !0 }, Oi = "FocusScope", Rn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, l] = u.useState(null), f = je(o), p = je(s), h = u.useRef(null), g = se(t, (m) => l(m)), v = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let m = function(E) {
        if (v.paused || !i) return;
        const P = E.target;
        i.contains(P) ? h.current = P : De(h.current, { select: !0 });
      }, b = function(E) {
        if (v.paused || !i) return;
        const P = E.relatedTarget;
        P !== null && (i.contains(P) || De(h.current, { select: !0 }));
      }, y = function(E) {
        if (document.activeElement === document.body)
          for (const R of E)
            R.removedNodes.length > 0 && De(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return i && w.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, i, v.paused]), u.useEffect(() => {
    if (i) {
      ur.add(v);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const y = new CustomEvent(tn, cr);
        i.addEventListener(tn, f), i.dispatchEvent(y), y.defaultPrevented || (Ai(Mi(Wr(i)), { select: !0 }), document.activeElement === m && De(i));
      }
      return () => {
        i.removeEventListener(tn, f), setTimeout(() => {
          const y = new CustomEvent(nn, cr);
          i.addEventListener(nn, p), i.dispatchEvent(y), y.defaultPrevented || De(m ?? document.body, { select: !0 }), i.removeEventListener(nn, p), ur.remove(v);
        }, 0);
      };
    }
  }, [i, f, p, v]);
  const x = u.useCallback(
    (m) => {
      if (!n && !r || v.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (b && y) {
        const w = m.currentTarget, [E, P] = Ti(w);
        E && P ? !m.shiftKey && y === P ? (m.preventDefault(), n && De(E, { select: !0 })) : m.shiftKey && y === E && (m.preventDefault(), n && De(P, { select: !0 })) : y === w && m.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ c.jsx(te.div, { tabIndex: -1, ...a, ref: g, onKeyDown: x });
});
Rn.displayName = Oi;
function Ai(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (De(r, { select: t }), document.activeElement !== n) return;
}
function Ti(e) {
  const t = Wr(e), n = lr(t, e), r = lr(t.reverse(), e);
  return [n, r];
}
function Wr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function lr(e, t) {
  for (const n of e)
    if (!_i(n, { upTo: t })) return n;
}
function _i(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ki(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function De(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ki(e) && t && e.select();
  }
}
var ur = Ii();
function Ii() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = dr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = dr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function dr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Mi(e) {
  return e.filter((t) => t.tagName !== "A");
}
var de = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Di = u.useId || (() => {
}), Fi = 0;
function Bt(e) {
  const [t, n] = u.useState(Di());
  return de(() => {
    n((r) => r ?? String(Fi++));
  }, [e]), t ? `radix-${t}` : "";
}
const Li = ["top", "right", "bottom", "left"], Ce = Math.min, pe = Math.max, _t = Math.round, xt = Math.floor, Fe = (e) => ({
  x: e,
  y: e
}), Wi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bi = {
  start: "end",
  end: "start"
};
function dn(e, t, n) {
  return pe(e, Ce(t, n));
}
function Oe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ae(e) {
  return e.split("-")[0];
}
function ot(e) {
  return e.split("-")[1];
}
function Nn(e) {
  return e === "x" ? "y" : "x";
}
function jn(e) {
  return e === "y" ? "height" : "width";
}
function Le(e) {
  return ["top", "bottom"].includes(Ae(e)) ? "y" : "x";
}
function On(e) {
  return Nn(Le(e));
}
function $i(e, t, n) {
  n === void 0 && (n = !1);
  const r = ot(e), o = On(e), s = jn(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = kt(a)), [a, kt(a)];
}
function Hi(e) {
  const t = kt(e);
  return [fn(e), t, fn(t)];
}
function fn(e) {
  return e.replace(/start|end/g, (t) => Bi[t]);
}
function Vi(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function zi(e, t, n, r) {
  const o = ot(e);
  let s = Vi(Ae(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(fn)))), s;
}
function kt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Wi[t]);
}
function Ui(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Br(e) {
  return typeof e != "number" ? Ui(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function It(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function fr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Le(t), a = On(t), i = jn(a), l = Ae(t), f = s === "y", p = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, g = r[i] / 2 - o[i] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (ot(t)) {
    case "start":
      v[a] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      v[a] += g * (n && f ? -1 : 1);
      break;
  }
  return v;
}
const Yi = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let f = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: h
  } = fr(f, r, l), g = r, v = {}, x = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: b,
      fn: y
    } = i[m], {
      x: w,
      y: E,
      data: P,
      reset: R
    } = await y({
      x: p,
      y: h,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: v,
      rects: f,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = w ?? p, h = E ?? h, v = {
      ...v,
      [b]: {
        ...v[b],
        ...P
      }
    }, R && x <= 50 && (x++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (f = R.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: p,
      y: h
    } = fr(f, g, l)), m = -1);
  }
  return {
    x: p,
    y: h,
    placement: g,
    strategy: o,
    middlewareData: v
  };
};
async function dt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: h = "floating",
    altBoundary: g = !1,
    padding: v = 0
  } = Oe(t, e), x = Br(v), b = i[g ? h === "floating" ? "reference" : "floating" : h], y = It(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: f,
    rootBoundary: p,
    strategy: l
  })), w = h === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), P = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = It(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (y.top - R.top + x.top) / P.y,
    bottom: (R.bottom - y.bottom + x.bottom) / P.y,
    left: (y.left - R.left + x.left) / P.x,
    right: (R.right - y.right + x.right) / P.x
  };
}
const Ki = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: l
    } = t, {
      element: f,
      padding: p = 0
    } = Oe(e, t) || {};
    if (f == null)
      return {};
    const h = Br(p), g = {
      x: n,
      y: r
    }, v = On(o), x = jn(v), m = await a.getDimensions(f), b = v === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", P = s.reference[x] + s.reference[v] - g[v] - s.floating[x], R = g[v] - s.reference[v], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(f));
    let j = T ? T[E] : 0;
    (!j || !await (a.isElement == null ? void 0 : a.isElement(T))) && (j = i.floating[E] || s.floating[x]);
    const M = P / 2 - R / 2, z = j / 2 - m[x] / 2 - 1, U = Ce(h[y], z), _ = Ce(h[w], z), Y = U, W = j - m[x] - _, L = j / 2 - m[x] / 2 + M, C = dn(Y, L, W), D = !l.arrow && ot(o) != null && L !== C && s.reference[x] / 2 - (L < Y ? U : _) - m[x] / 2 < 0, O = D ? L < Y ? L - Y : L - W : 0;
    return {
      [v]: g[v] + O,
      data: {
        [v]: C,
        centerOffset: L - C - O,
        ...D && {
          alignmentOffset: O
        }
      },
      reset: D
    };
  }
}), Xi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: l,
        elements: f
      } = t, {
        mainAxis: p = !0,
        crossAxis: h = !0,
        fallbackPlacements: g,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: m = !0,
        ...b
      } = Oe(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Ae(o), w = Le(i), E = Ae(i) === i, P = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), R = g || (E || !m ? [kt(i)] : Hi(i)), T = x !== "none";
      !g && T && R.push(...zi(i, m, x, P));
      const j = [i, ...R], M = await dt(t, b), z = [];
      let U = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (p && z.push(M[y]), h) {
        const L = $i(o, a, P);
        z.push(M[L[0]], M[L[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: z
      }], !z.every((L) => L <= 0)) {
        var _, Y;
        const L = (((_ = s.flip) == null ? void 0 : _.index) || 0) + 1, C = j[L];
        if (C)
          return {
            data: {
              index: L,
              overflows: U
            },
            reset: {
              placement: C
            }
          };
        let D = (Y = U.filter((O) => O.overflows[0] <= 0).sort((O, B) => O.overflows[1] - B.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!D)
          switch (v) {
            case "bestFit": {
              var W;
              const O = (W = U.filter((B) => {
                if (T) {
                  const F = Le(B.placement);
                  return F === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((F) => F > 0).reduce((F, ae) => F + ae, 0)]).sort((B, F) => B[1] - F[1])[0]) == null ? void 0 : W[0];
              O && (D = O);
              break;
            }
            case "initialPlacement":
              D = i;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function pr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function mr(e) {
  return Li.some((t) => e[t] >= 0);
}
const Gi = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Oe(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await dt(t, {
            ...o,
            elementContext: "reference"
          }), a = pr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: mr(a)
            }
          };
        }
        case "escaped": {
          const s = await dt(t, {
            ...o,
            altBoundary: !0
          }), a = pr(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: mr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function qi(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Ae(n), i = ot(n), l = Le(n) === "y", f = ["left", "top"].includes(a) ? -1 : 1, p = s && l ? -1 : 1, h = Oe(t, e);
  let {
    mainAxis: g,
    crossAxis: v,
    alignmentAxis: x
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return i && typeof x == "number" && (v = i === "end" ? x * -1 : x), l ? {
    x: v * p,
    y: g * f
  } : {
    x: g * f,
    y: v * p
  };
}
const Zi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, l = await qi(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, Ji = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: y,
              y: w
            } = b;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = Oe(e, t), f = {
        x: n,
        y: r
      }, p = await dt(t, l), h = Le(Ae(o)), g = Nn(h);
      let v = f[g], x = f[h];
      if (s) {
        const b = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", w = v + p[b], E = v - p[y];
        v = dn(w, v, E);
      }
      if (a) {
        const b = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", w = x + p[b], E = x - p[y];
        x = dn(w, x, E);
      }
      const m = i.fn({
        ...t,
        [g]: v,
        [h]: x
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r
        }
      };
    }
  };
}, Qi = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Oe(e, t), p = {
        x: n,
        y: r
      }, h = Le(o), g = Nn(h);
      let v = p[g], x = p[h];
      const m = Oe(i, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const E = g === "y" ? "height" : "width", P = s.reference[g] - s.floating[E] + b.mainAxis, R = s.reference[g] + s.reference[E] - b.mainAxis;
        v < P ? v = P : v > R && (v = R);
      }
      if (f) {
        var y, w;
        const E = g === "y" ? "width" : "height", P = ["top", "left"].includes(Ae(o)), R = s.reference[h] - s.floating[E] + (P && ((y = a.offset) == null ? void 0 : y[h]) || 0) + (P ? 0 : b.crossAxis), T = s.reference[h] + s.reference[E] + (P ? 0 : ((w = a.offset) == null ? void 0 : w[h]) || 0) - (P ? b.crossAxis : 0);
        x < R ? x = R : x > T && (x = T);
      }
      return {
        [g]: v,
        [h]: x
      };
    }
  };
}, ea = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...i
      } = Oe(e, t), l = await dt(t, i), f = Ae(n), p = ot(n), h = Le(n) === "y", {
        width: g,
        height: v
      } = r.floating;
      let x, m;
      f === "top" || f === "bottom" ? (x = f, m = p === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = f, x = p === "end" ? "top" : "bottom");
      const b = v - l.top - l.bottom, y = g - l.left - l.right, w = Ce(v - l[x], b), E = Ce(g - l[m], y), P = !t.middlewareData.shift;
      let R = w, T = E;
      if (h ? T = p || P ? Ce(E, y) : y : R = p || P ? Ce(w, b) : b, P && !p) {
        const M = pe(l.left, 0), z = pe(l.right, 0), U = pe(l.top, 0), _ = pe(l.bottom, 0);
        h ? T = g - 2 * (M !== 0 || z !== 0 ? M + z : pe(l.left, l.right)) : R = v - 2 * (U !== 0 || _ !== 0 ? U + _ : pe(l.top, l.bottom));
      }
      await a({
        ...t,
        availableWidth: T,
        availableHeight: R
      });
      const j = await o.getDimensions(s.floating);
      return g !== j.width || v !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function st(e) {
  return $r(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Te(e) {
  var t;
  return (t = ($r(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $r(e) {
  return e instanceof Node || e instanceof me(e).Node;
}
function ye(e) {
  return e instanceof Element || e instanceof me(e).Element;
}
function Pe(e) {
  return e instanceof HTMLElement || e instanceof me(e).HTMLElement;
}
function hr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof me(e).ShadowRoot;
}
function mt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = we(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ta(e) {
  return ["table", "td", "th"].includes(st(e));
}
function $t(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function An(e) {
  const t = Tn(), n = ye(e) ? we(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function na(e) {
  let t = We(e);
  for (; Pe(t) && !nt(t); ) {
    if (An(t))
      return t;
    if ($t(t))
      return null;
    t = We(t);
  }
  return null;
}
function Tn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function nt(e) {
  return ["html", "body", "#document"].includes(st(e));
}
function we(e) {
  return me(e).getComputedStyle(e);
}
function Ht(e) {
  return ye(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function We(e) {
  if (st(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    hr(e) && e.host || // Fallback.
    Te(e)
  );
  return hr(t) ? t.host : t;
}
function Hr(e) {
  const t = We(e);
  return nt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pe(t) && mt(t) ? t : Hr(t);
}
function ft(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Hr(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = me(o);
  if (s) {
    const i = pn(a);
    return t.concat(a, a.visualViewport || [], mt(o) ? o : [], i && n ? ft(i) : []);
  }
  return t.concat(o, ft(o, [], n));
}
function pn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vr(e) {
  const t = we(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Pe(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = _t(n) !== s || _t(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function _n(e) {
  return ye(e) ? e : e.contextElement;
}
function Je(e) {
  const t = _n(e);
  if (!Pe(t))
    return Fe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Vr(t);
  let a = (s ? _t(n.width) : n.width) / r, i = (s ? _t(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const ra = /* @__PURE__ */ Fe(0);
function zr(e) {
  const t = me(e);
  return !Tn() || !t.visualViewport ? ra : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function oa(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== me(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = _n(e);
  let a = Fe(1);
  t && (r ? ye(r) && (a = Je(r)) : a = Je(e));
  const i = oa(s, n, r) ? zr(s) : Fe(0);
  let l = (o.left + i.x) / a.x, f = (o.top + i.y) / a.y, p = o.width / a.x, h = o.height / a.y;
  if (s) {
    const g = me(s), v = r && ye(r) ? me(r) : r;
    let x = g, m = pn(x);
    for (; m && r && v !== x; ) {
      const b = Je(m), y = m.getBoundingClientRect(), w = we(m), E = y.left + (m.clientLeft + parseFloat(w.paddingLeft)) * b.x, P = y.top + (m.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, f *= b.y, p *= b.x, h *= b.y, l += E, f += P, x = me(m), m = pn(x);
    }
  }
  return It({
    width: p,
    height: h,
    x: l,
    y: f
  });
}
function sa(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = Te(r), i = t ? $t(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Fe(1);
  const p = Fe(0), h = Pe(r);
  if ((h || !h && !s) && ((st(r) !== "body" || mt(a)) && (l = Ht(r)), Pe(r))) {
    const g = ze(r);
    f = Je(r), p.x = g.x + r.clientLeft, p.y = g.y + r.clientTop;
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - l.scrollLeft * f.x + p.x,
    y: n.y * f.y - l.scrollTop * f.y + p.y
  };
}
function ia(e) {
  return Array.from(e.getClientRects());
}
function Ur(e) {
  return ze(Te(e)).left + Ht(e).scrollLeft;
}
function aa(e) {
  const t = Te(e), n = Ht(e), r = e.ownerDocument.body, o = pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ur(e);
  const i = -n.scrollTop;
  return we(r).direction === "rtl" && (a += pe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
function ca(e, t) {
  const n = me(e), r = Te(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, l = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = Tn();
    (!f || f && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: l
  };
}
function la(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Pe(e) ? Je(e) : Fe(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, l = o * s.x, f = r * s.y;
  return {
    width: a,
    height: i,
    x: l,
    y: f
  };
}
function vr(e, t, n) {
  let r;
  if (t === "viewport")
    r = ca(e, n);
  else if (t === "document")
    r = aa(Te(e));
  else if (ye(t))
    r = la(t, n);
  else {
    const o = zr(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return It(r);
}
function Yr(e, t) {
  const n = We(e);
  return n === t || !ye(n) || nt(n) ? !1 : we(n).position === "fixed" || Yr(n, t);
}
function ua(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ft(e, [], !1).filter((i) => ye(i) && st(i) !== "body"), o = null;
  const s = we(e).position === "fixed";
  let a = s ? We(e) : e;
  for (; ye(a) && !nt(a); ) {
    const i = we(a), l = An(a);
    !l && i.position === "fixed" && (o = null), (s ? !l && !o : !l && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || mt(a) && !l && Yr(e, a)) ? r = r.filter((p) => p !== a) : o = i, a = We(a);
  }
  return t.set(e, r), r;
}
function da(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? $t(t) ? [] : ua(t, this._c) : [].concat(n), r], i = a[0], l = a.reduce((f, p) => {
    const h = vr(t, p, o);
    return f.top = pe(h.top, f.top), f.right = Ce(h.right, f.right), f.bottom = Ce(h.bottom, f.bottom), f.left = pe(h.left, f.left), f;
  }, vr(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function fa(e) {
  const {
    width: t,
    height: n
  } = Vr(e);
  return {
    width: t,
    height: n
  };
}
function pa(e, t, n) {
  const r = Pe(t), o = Te(t), s = n === "fixed", a = ze(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Fe(0);
  if (r || !r && !s)
    if ((st(t) !== "body" || mt(o)) && (i = Ht(t)), r) {
      const h = ze(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && (l.x = Ur(o));
  const f = a.left + i.scrollLeft - l.x, p = a.top + i.scrollTop - l.y;
  return {
    x: f,
    y: p,
    width: a.width,
    height: a.height
  };
}
function rn(e) {
  return we(e).position === "static";
}
function gr(e, t) {
  return !Pe(e) || we(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Kr(e, t) {
  const n = me(e);
  if ($t(e))
    return n;
  if (!Pe(e)) {
    let o = We(e);
    for (; o && !nt(o); ) {
      if (ye(o) && !rn(o))
        return o;
      o = We(o);
    }
    return n;
  }
  let r = gr(e, t);
  for (; r && ta(r) && rn(r); )
    r = gr(r, t);
  return r && nt(r) && rn(r) && !An(r) ? n : r || na(e) || n;
}
const ma = async function(e) {
  const t = this.getOffsetParent || Kr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: pa(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ha(e) {
  return we(e).direction === "rtl";
}
const va = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sa,
  getDocumentElement: Te,
  getClippingRect: da,
  getOffsetParent: Kr,
  getElementRects: ma,
  getClientRects: ia,
  getDimensions: fa,
  getScale: Je,
  isElement: ye,
  isRTL: ha
};
function ga(e, t) {
  let n = null, r;
  const o = Te(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), s();
    const {
      left: f,
      top: p,
      width: h,
      height: g
    } = e.getBoundingClientRect();
    if (i || t(), !h || !g)
      return;
    const v = xt(p), x = xt(o.clientWidth - (f + h)), m = xt(o.clientHeight - (p + g)), b = xt(f), w = {
      rootMargin: -v + "px " + -x + "px " + -m + "px " + -b + "px",
      threshold: pe(0, Ce(1, l)) || 1
    };
    let E = !0;
    function P(R) {
      const T = R[0].intersectionRatio;
      if (T !== l) {
        if (!E)
          return a();
        T ? a(!1, T) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, w);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function xa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, f = _n(e), p = o || s ? [...f ? ft(f) : [], ...ft(t)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const h = f && i ? ga(f, n) : null;
  let g = -1, v = null;
  a && (v = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === f && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = v) == null || E.observe(t);
    })), n();
  }), f && !l && v.observe(f), v.observe(t));
  let x, m = l ? ze(e) : null;
  l && b();
  function b() {
    const y = ze(e);
    m && (y.x !== m.x || y.y !== m.y || y.width !== m.width || y.height !== m.height) && n(), m = y, x = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    p.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), h == null || h(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const ya = Zi, wa = Ji, ba = Xi, Sa = ea, Ea = Gi, xr = Ki, Ca = Qi, Pa = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: va,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Yi(e, t, {
    ...o,
    platform: s
  });
};
var Nt = typeof document < "u" ? Xs : Tr;
function Mt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Mt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Mt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Xr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yr(e, t) {
  const n = Xr(e);
  return Math.round(t * n) / n;
}
function wr(e) {
  const t = u.useRef(e);
  return Nt(() => {
    t.current = e;
  }), t;
}
function Ra(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: l,
    open: f
  } = e, [p, h] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, v] = u.useState(r);
  Mt(g, r) || v(r);
  const [x, m] = u.useState(null), [b, y] = u.useState(null), w = u.useCallback((O) => {
    O !== T.current && (T.current = O, m(O));
  }, []), E = u.useCallback((O) => {
    O !== j.current && (j.current = O, y(O));
  }, []), P = s || x, R = a || b, T = u.useRef(null), j = u.useRef(null), M = u.useRef(p), z = l != null, U = wr(l), _ = wr(o), Y = u.useCallback(() => {
    if (!T.current || !j.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: g
    };
    _.current && (O.platform = _.current), Pa(T.current, j.current, O).then((B) => {
      const F = {
        ...B,
        isPositioned: !0
      };
      W.current && !Mt(M.current, F) && (M.current = F, pt.flushSync(() => {
        h(F);
      }));
    });
  }, [g, t, n, _]);
  Nt(() => {
    f === !1 && M.current.isPositioned && (M.current.isPositioned = !1, h((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [f]);
  const W = u.useRef(!1);
  Nt(() => (W.current = !0, () => {
    W.current = !1;
  }), []), Nt(() => {
    if (P && (T.current = P), R && (j.current = R), P && R) {
      if (U.current)
        return U.current(P, R, Y);
      Y();
    }
  }, [P, R, Y, U, z]);
  const L = u.useMemo(() => ({
    reference: T,
    floating: j,
    setReference: w,
    setFloating: E
  }), [w, E]), C = u.useMemo(() => ({
    reference: P,
    floating: R
  }), [P, R]), D = u.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!C.floating)
      return O;
    const B = yr(C.floating, p.x), F = yr(C.floating, p.y);
    return i ? {
      ...O,
      transform: "translate(" + B + "px, " + F + "px)",
      ...Xr(C.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: B,
      top: F
    };
  }, [n, i, C.floating, p.x, p.y]);
  return u.useMemo(() => ({
    ...p,
    update: Y,
    refs: L,
    elements: C,
    floatingStyles: D
  }), [p, Y, L, C, D]);
}
const Na = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? xr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? xr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, ja = (e, t) => ({
  ...ya(e),
  options: [e, t]
}), Oa = (e, t) => ({
  ...wa(e),
  options: [e, t]
}), Aa = (e, t) => ({
  ...Ca(e),
  options: [e, t]
}), Ta = (e, t) => ({
  ...ba(e),
  options: [e, t]
}), _a = (e, t) => ({
  ...Sa(e),
  options: [e, t]
}), ka = (e, t) => ({
  ...Ea(e),
  options: [e, t]
}), Ia = (e, t) => ({
  ...Na(e),
  options: [e, t]
});
var Ma = "Arrow", Gr = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ c.jsx(
    te.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ c.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Gr.displayName = Ma;
var Da = Gr;
function Fa(e) {
  const [t, n] = u.useState(void 0);
  return de(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          a = f.inlineSize, i = f.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var kn = "Popper", [qr, Vt] = Wt(kn), [La, Zr] = qr(kn), Jr = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(La, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Jr.displayName = kn;
var Qr = "PopperAnchor", eo = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Zr(Qr, n), a = u.useRef(null), i = se(t, a);
    return u.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ c.jsx(te.div, { ...o, ref: i });
  }
);
eo.displayName = Qr;
var In = "PopperContent", [Wa, Ba] = qr(In), to = u.forwardRef(
  (e, t) => {
    var k, G, re, K, q, X;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: p = 0,
      sticky: h = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: x,
      ...m
    } = e, b = Zr(In, n), [y, w] = u.useState(null), E = se(t, (ce) => w(ce)), [P, R] = u.useState(null), T = Fa(P), j = (T == null ? void 0 : T.width) ?? 0, M = (T == null ? void 0 : T.height) ?? 0, z = r + (s !== "center" ? "-" + s : ""), U = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, _ = Array.isArray(f) ? f : [f], Y = _.length > 0, W = {
      padding: U,
      boundary: _.filter(Ha),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: L, floatingStyles: C, placement: D, isPositioned: O, middlewareData: B } = Ra({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: z,
      whileElementsMounted: (...ce) => xa(...ce, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        ja({ mainAxis: o + M, alignmentAxis: a }),
        l && Oa({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? Aa() : void 0,
          ...W
        }),
        l && Ta({ ...W }),
        _a({
          ...W,
          apply: ({ elements: ce, rects: he, availableWidth: Se, availableHeight: xe }) => {
            const { width: Me, height: gt } = he.reference, Re = ce.floating.style;
            Re.setProperty("--radix-popper-available-width", `${Se}px`), Re.setProperty("--radix-popper-available-height", `${xe}px`), Re.setProperty("--radix-popper-anchor-width", `${Me}px`), Re.setProperty("--radix-popper-anchor-height", `${gt}px`);
          }
        }),
        P && Ia({ element: P, padding: i }),
        Va({ arrowWidth: j, arrowHeight: M }),
        g && ka({ strategy: "referenceHidden", ...W })
      ]
    }), [F, ae] = oo(D), ie = je(x);
    de(() => {
      O && (ie == null || ie());
    }, [O, ie]);
    const _e = (k = B.arrow) == null ? void 0 : k.x, ke = (G = B.arrow) == null ? void 0 : G.y, be = ((re = B.arrow) == null ? void 0 : re.centerOffset) !== 0, [Ie, ge] = u.useState();
    return de(() => {
      y && ge(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...C,
          transform: O ? C.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ie,
          "--radix-popper-transform-origin": [
            (K = B.transformOrigin) == null ? void 0 : K.x,
            (q = B.transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = B.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          Wa,
          {
            scope: n,
            placedSide: F,
            onArrowChange: R,
            arrowX: _e,
            arrowY: ke,
            shouldHideArrow: be,
            children: /* @__PURE__ */ c.jsx(
              te.div,
              {
                "data-side": F,
                "data-align": ae,
                ...m,
                ref: E,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: O ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
to.displayName = In;
var no = "PopperArrow", $a = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ro = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Ba(no, r), a = $a[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ c.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ c.jsx(
          Da,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ro.displayName = no;
function Ha(e) {
  return e !== null;
}
var Va = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, w;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [f, p] = oo(n), h = { start: "0%", center: "50%", end: "100%" }[p], g = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, v = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let x = "", m = "";
    return f === "bottom" ? (x = a ? h : `${g}px`, m = `${-l}px`) : f === "top" ? (x = a ? h : `${g}px`, m = `${r.floating.height + l}px`) : f === "right" ? (x = `${-l}px`, m = a ? h : `${v}px`) : f === "left" && (x = `${r.floating.width + l}px`, m = a ? h : `${v}px`), { data: { x, y: m } };
  }
});
function oo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var so = Jr, Mn = eo, io = to, ao = ro, za = "Portal", Dn = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  de(() => s(!0), []);
  const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? si.createPortal(/* @__PURE__ */ c.jsx(te.div, { ...r, ref: t }), a) : null;
});
Dn.displayName = za;
function mn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = Ua({ defaultProp: t, onChange: n }), s = e !== void 0, a = s ? e : r, i = je(n), l = u.useCallback(
    (f) => {
      if (s) {
        const h = typeof f == "function" ? f(e) : f;
        h !== e && i(h);
      } else
        o(f);
    },
    [s, e, o, i]
  );
  return [a, l];
}
function Ua({
  defaultProp: e,
  onChange: t
}) {
  const n = u.useState(e), [r] = n, o = u.useRef(r), s = je(t);
  return u.useEffect(() => {
    o.current !== r && (s(r), o.current = r);
  }, [r, o, s]), n;
}
function Ya(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ka = "VisuallyHidden", co = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    te.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
co.displayName = Ka;
var Xa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xe = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), wt = {}, on = 0, lo = function(e) {
  return e && (e.host || lo(e.parentNode));
}, Ga = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = lo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qa = function(e, t, n, r) {
  var o = Ga(t, Array.isArray(e) ? e : [e]);
  wt[n] || (wt[n] = /* @__PURE__ */ new WeakMap());
  var s = wt[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(o), f = function(h) {
    !h || i.has(h) || (i.add(h), f(h.parentNode));
  };
  o.forEach(f);
  var p = function(h) {
    !h || l.has(h) || Array.prototype.forEach.call(h.children, function(g) {
      if (i.has(g))
        p(g);
      else
        try {
          var v = g.getAttribute(r), x = v !== null && v !== "false", m = (Xe.get(g) || 0) + 1, b = (s.get(g) || 0) + 1;
          Xe.set(g, m), s.set(g, b), a.push(g), m === 1 && x && yt.set(g, !0), b === 1 && g.setAttribute(n, "true"), x || g.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", g, y);
        }
    });
  };
  return p(t), i.clear(), on++, function() {
    a.forEach(function(h) {
      var g = Xe.get(h) - 1, v = s.get(h) - 1;
      Xe.set(h, g), s.set(h, v), g || (yt.has(h) || h.removeAttribute(r), yt.delete(h)), v || h.removeAttribute(n);
    }), on--, on || (Xe = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), wt = {});
  };
}, uo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Xa(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), qa(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function fo(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Za(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var jt = "right-scroll-bar-position", Ot = "width-before-scroll-bar", Ja = "with-scroll-bars-hidden", Qa = "--removed-body-scroll-bar-size";
function sn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ec(e, t) {
  var n = Ct(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var tc = typeof window < "u" ? u.useLayoutEffect : u.useEffect, br = /* @__PURE__ */ new WeakMap();
function nc(e, t) {
  var n = ec(null, function(r) {
    return e.forEach(function(o) {
      return sn(o, r);
    });
  });
  return tc(function() {
    var r = br.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || sn(i, null);
      }), s.forEach(function(i) {
        o.has(i) || sn(i, a);
      });
    }
    br.set(n, e);
  }, [e]), n;
}
function rc(e) {
  return e;
}
function oc(e, t) {
  t === void 0 && (t = rc);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, r);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var l = function() {
        var p = a;
        a = [], p.forEach(s);
      }, f = function() {
        return Promise.resolve().then(l);
      };
      f(), n = {
        push: function(p) {
          a.push(p), f();
        },
        filter: function(p) {
          return a = a.filter(p), n;
        }
      };
    }
  };
  return o;
}
function sc(e) {
  e === void 0 && (e = {});
  var t = oc(null);
  return t.options = Ee({ async: !0, ssr: !1 }, e), t;
}
var po = function(e) {
  var t = e.sideCar, n = fo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Ee({}, n));
};
po.isSideCarExport = !0;
function ic(e, t) {
  return e.useMedium(t), po;
}
var mo = sc(), an = function() {
}, zt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: an,
    onWheelCapture: an,
    onTouchMoveCapture: an
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, l = e.className, f = e.removeScrollBar, p = e.enabled, h = e.shards, g = e.sideCar, v = e.noIsolation, x = e.inert, m = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = e.gapMode, E = fo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = g, R = nc([n, t]), T = Ee(Ee({}, E), o);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(P, { sideCar: mo, removeScrollBar: f, shards: h, noIsolation: v, inert: x, setCallbacks: s, allowPinchZoom: !!m, lockRef: n, gapMode: w }),
    a ? u.cloneElement(u.Children.only(i), Ee(Ee({}, T), { ref: R })) : u.createElement(y, Ee({}, T, { className: l, ref: R }), i)
  );
});
zt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zt.classNames = {
  fullWidth: Ot,
  zeroRight: jt
};
var ac = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function cc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ac();
  return t && e.setAttribute("nonce", t), e;
}
function lc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function uc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var dc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = cc()) && (lc(t, n), uc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fc = function() {
  var e = dc();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ho = function() {
  var e = fc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, pc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cn = function(e) {
  return parseInt(e || "", 10) || 0;
}, mc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cn(n), cn(r), cn(o)];
}, hc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return pc;
  var t = mc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, vc = ho(), Qe = "data-scroll-locked", gc = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ja, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Qe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(jt, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Ot, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(jt, " .").concat(jt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ot, " .").concat(Ot, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Qe, `] {
    `).concat(Qa, ": ").concat(i, `px;
  }
`);
}, Sr = function() {
  var e = parseInt(document.body.getAttribute(Qe) || "0", 10);
  return isFinite(e) ? e : 0;
}, xc = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Qe, (Sr() + 1).toString()), function() {
      var e = Sr() - 1;
      e <= 0 ? document.body.removeAttribute(Qe) : document.body.setAttribute(Qe, e.toString());
    };
  }, []);
}, yc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  xc();
  var s = u.useMemo(function() {
    return hc(o);
  }, [o]);
  return u.createElement(vc, { styles: gc(s, !t, o, n ? "" : "!important") });
}, hn = !1;
if (typeof window < "u")
  try {
    var bt = Object.defineProperty({}, "passive", {
      get: function() {
        return hn = !0, !0;
      }
    });
    window.addEventListener("test", bt, bt), window.removeEventListener("test", bt, bt);
  } catch {
    hn = !1;
  }
var Ge = hn ? { passive: !1 } : !1, wc = function(e) {
  return e.tagName === "TEXTAREA";
}, vo = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !wc(e) && n[t] === "visible")
  );
}, bc = function(e) {
  return vo(e, "overflowY");
}, Sc = function(e) {
  return vo(e, "overflowX");
}, Er = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = go(e, r);
    if (o) {
      var s = xo(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ec = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Cc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, go = function(e, t) {
  return e === "v" ? bc(t) : Sc(t);
}, xo = function(e, t) {
  return e === "v" ? Ec(t) : Cc(t);
}, Pc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Rc = function(e, t, n, r, o) {
  var s = Pc(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, l = t.contains(i), f = !1, p = a > 0, h = 0, g = 0;
  do {
    var v = xo(e, i), x = v[0], m = v[1], b = v[2], y = m - b - s * x;
    (x || y) && go(e, i) && (h += y, g += x), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (p && (Math.abs(h) < 1 || !o) || !p && (Math.abs(g) < 1 || !o)) && (f = !0), f;
}, St = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Cr = function(e) {
  return [e.deltaX, e.deltaY];
}, Pr = function(e) {
  return e && "current" in e ? e.current : e;
}, Nc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, jc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Oc = 0, qe = [];
function Ac(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Oc++)[0], s = u.useState(ho)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Za([e.lockRef.current], (e.shards || []).map(Pr), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2)
      return !a.current.allowPinchZoom;
    var y = St(m), w = n.current, E = "deltaX" in m ? m.deltaX : w[0] - y[0], P = "deltaY" in m ? m.deltaY : w[1] - y[1], R, T = m.target, j = Math.abs(E) > Math.abs(P) ? "h" : "v";
    if ("touches" in m && j === "h" && T.type === "range")
      return !1;
    var M = Er(j, T);
    if (!M)
      return !0;
    if (M ? R = j : (R = j === "v" ? "h" : "v", M = Er(j, T)), !M)
      return !1;
    if (!r.current && "changedTouches" in m && (E || P) && (r.current = R), !R)
      return !0;
    var z = r.current || R;
    return Rc(z, b, m, z === "h" ? E : P, !0);
  }, []), l = u.useCallback(function(m) {
    var b = m;
    if (!(!qe.length || qe[qe.length - 1] !== s)) {
      var y = "deltaY" in b ? Cr(b) : St(b), w = t.current.filter(function(R) {
        return R.name === b.type && (R.target === b.target || b.target === R.shadowParent) && Nc(R.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var E = (a.current.shards || []).map(Pr).filter(Boolean).filter(function(R) {
          return R.contains(b.target);
        }), P = E.length > 0 ? i(b, E[0]) : !a.current.noIsolation;
        P && b.cancelable && b.preventDefault();
      }
    }
  }, []), f = u.useCallback(function(m, b, y, w) {
    var E = { name: m, delta: b, target: y, should: w, shadowParent: Tc(y) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(P) {
        return P !== E;
      });
    }, 1);
  }, []), p = u.useCallback(function(m) {
    n.current = St(m), r.current = void 0;
  }, []), h = u.useCallback(function(m) {
    f(m.type, Cr(m), m.target, i(m, e.lockRef.current));
  }, []), g = u.useCallback(function(m) {
    f(m.type, St(m), m.target, i(m, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return qe.push(s), e.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Ge), document.addEventListener("touchmove", l, Ge), document.addEventListener("touchstart", p, Ge), function() {
      qe = qe.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Ge), document.removeEventListener("touchmove", l, Ge), document.removeEventListener("touchstart", p, Ge);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(s, { styles: jc(o) }) : null,
    v ? u.createElement(yc, { gapMode: e.gapMode }) : null
  );
}
function Tc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const _c = ic(mo, Ac);
var Fn = u.forwardRef(function(e, t) {
  return u.createElement(zt, Ee({}, e, { ref: t, sideCar: _c }));
});
Fn.classNames = zt.classNames;
var kc = [" ", "Enter", "ArrowUp", "ArrowDown"], Ic = [" ", "Enter"], ht = "Select", [Ut, Yt, Mc] = vi(ht), [it, ou] = Wt(ht, [
  Mc,
  Vt
]), Kt = Vt(), [Dc, Be] = it(ht), [Fc, Lc] = it(ht), yo = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: l,
    dir: f,
    name: p,
    autoComplete: h,
    disabled: g,
    required: v
  } = e, x = Kt(t), [m, b] = u.useState(null), [y, w] = u.useState(null), [E, P] = u.useState(!1), R = xi(f), [T = !1, j] = mn({
    prop: r,
    defaultProp: o,
    onChange: s
  }), [M, z] = mn({
    prop: a,
    defaultProp: i,
    onChange: l
  }), U = u.useRef(null), _ = m ? !!m.closest("form") : !0, [Y, W] = u.useState(/* @__PURE__ */ new Set()), L = Array.from(Y).map((C) => C.props.value).join(";");
  return /* @__PURE__ */ c.jsx(so, { ...x, children: /* @__PURE__ */ c.jsxs(
    Dc,
    {
      required: v,
      scope: t,
      trigger: m,
      onTriggerChange: b,
      valueNode: y,
      onValueNodeChange: w,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: P,
      contentId: Bt(),
      value: M,
      onValueChange: z,
      open: T,
      onOpenChange: j,
      dir: R,
      triggerPointerDownPosRef: U,
      disabled: g,
      children: [
        /* @__PURE__ */ c.jsx(Ut.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          Fc,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((C) => {
              W((D) => new Set(D).add(C));
            }, []),
            onNativeOptionRemove: u.useCallback((C) => {
              W((D) => {
                const O = new Set(D);
                return O.delete(C), O;
              });
            }, []),
            children: n
          }
        ) }),
        _ ? /* @__PURE__ */ c.jsxs(
          zo,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: p,
            autoComplete: h,
            value: M,
            onChange: (C) => z(C.target.value),
            disabled: g,
            children: [
              M === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(Y)
            ]
          },
          L
        ) : null
      ]
    }
  ) });
};
yo.displayName = ht;
var wo = "SelectTrigger", bo = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Kt(n), a = Be(wo, n), i = a.disabled || r, l = se(t, a.onTriggerChange), f = Yt(n), [p, h, g] = Uo((x) => {
      const m = f().filter((w) => !w.disabled), b = m.find((w) => w.value === a.value), y = Yo(m, x, b);
      y !== void 0 && a.onValueChange(y.value);
    }), v = () => {
      i || (a.onOpenChange(!0), g());
    };
    return /* @__PURE__ */ c.jsx(Mn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      te.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Vo(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ee(o.onClick, (x) => {
          x.currentTarget.focus();
        }),
        onPointerDown: ee(o.onPointerDown, (x) => {
          const m = x.target;
          m.hasPointerCapture(x.pointerId) && m.releasePointerCapture(x.pointerId), x.button === 0 && x.ctrlKey === !1 && (v(), a.triggerPointerDownPosRef.current = {
            x: Math.round(x.pageX),
            y: Math.round(x.pageY)
          }, x.preventDefault());
        }),
        onKeyDown: ee(o.onKeyDown, (x) => {
          const m = p.current !== "";
          !(x.ctrlKey || x.altKey || x.metaKey) && x.key.length === 1 && h(x.key), !(m && x.key === " ") && kc.includes(x.key) && (v(), x.preventDefault());
        })
      }
    ) });
  }
);
bo.displayName = wo;
var So = "SelectValue", Eo = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, l = Be(So, n), { onValueNodeHasChildrenChange: f } = l, p = s !== void 0, h = se(t, l.onValueNodeChange);
    return de(() => {
      f(p);
    }, [f, p]), /* @__PURE__ */ c.jsx(
      te.span,
      {
        ...i,
        ref: h,
        style: { pointerEvents: "none" },
        children: Vo(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: a }) : s
      }
    );
  }
);
Eo.displayName = So;
var Wc = "SelectIcon", Co = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(te.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Co.displayName = Wc;
var Bc = "SelectPortal", Po = (e) => /* @__PURE__ */ c.jsx(Dn, { asChild: !0, ...e });
Po.displayName = Bc;
var Ue = "SelectContent", Ro = u.forwardRef(
  (e, t) => {
    const n = Be(Ue, e.__scopeSelect), [r, o] = u.useState();
    if (de(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? pt.createPortal(
        /* @__PURE__ */ c.jsx(No, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(Ut.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(jo, { ...e, ref: t });
  }
);
Ro.displayName = Ue;
var Ne = 10, [No, $e] = it(Ue), $c = "SelectContentImpl", jo = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: l,
      align: f,
      alignOffset: p,
      arrowPadding: h,
      collisionBoundary: g,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: b,
      //
      ...y
    } = e, w = Be(Ue, n), [E, P] = u.useState(null), [R, T] = u.useState(null), j = se(t, (k) => P(k)), [M, z] = u.useState(null), [U, _] = u.useState(
      null
    ), Y = Yt(n), [W, L] = u.useState(!1), C = u.useRef(!1);
    u.useEffect(() => {
      if (E) return uo(E);
    }, [E]), Lr();
    const D = u.useCallback(
      (k) => {
        const [G, ...re] = Y().map((X) => X.ref.current), [K] = re.slice(-1), q = document.activeElement;
        for (const X of k)
          if (X === q || (X == null || X.scrollIntoView({ block: "nearest" }), X === G && R && (R.scrollTop = 0), X === K && R && (R.scrollTop = R.scrollHeight), X == null || X.focus(), document.activeElement !== q)) return;
      },
      [Y, R]
    ), O = u.useCallback(
      () => D([M, E]),
      [D, M, E]
    );
    u.useEffect(() => {
      W && O();
    }, [W, O]);
    const { onOpenChange: B, triggerPointerDownPosRef: F } = w;
    u.useEffect(() => {
      if (E) {
        let k = { x: 0, y: 0 };
        const G = (K) => {
          var q, X;
          k = {
            x: Math.abs(Math.round(K.pageX) - (((q = F.current) == null ? void 0 : q.x) ?? 0)),
            y: Math.abs(Math.round(K.pageY) - (((X = F.current) == null ? void 0 : X.y) ?? 0))
          };
        }, re = (K) => {
          k.x <= 10 && k.y <= 10 ? K.preventDefault() : E.contains(K.target) || B(!1), document.removeEventListener("pointermove", G), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", G), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", G), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [E, B, F]), u.useEffect(() => {
      const k = () => B(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [B]);
    const [ae, ie] = Uo((k) => {
      const G = Y().filter((q) => !q.disabled), re = G.find((q) => q.ref.current === document.activeElement), K = Yo(G, k, re);
      K && setTimeout(() => K.ref.current.focus());
    }), _e = u.useCallback(
      (k, G, re) => {
        const K = !C.current && !re;
        (w.value !== void 0 && w.value === G || K) && (z(k), K && (C.current = !0));
      },
      [w.value]
    ), ke = u.useCallback(() => E == null ? void 0 : E.focus(), [E]), be = u.useCallback(
      (k, G, re) => {
        const K = !C.current && !re;
        (w.value !== void 0 && w.value === G || K) && _(k);
      },
      [w.value]
    ), Ie = r === "popper" ? vn : Oo, ge = Ie === vn ? {
      side: i,
      sideOffset: l,
      align: f,
      alignOffset: p,
      arrowPadding: h,
      collisionBoundary: g,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ c.jsx(
      No,
      {
        scope: n,
        content: E,
        viewport: R,
        onViewportChange: T,
        itemRefCallback: _e,
        selectedItem: M,
        onItemLeave: ke,
        itemTextRefCallback: be,
        focusSelectedItem: O,
        selectedItemText: U,
        position: r,
        isPositioned: W,
        searchRef: ae,
        children: /* @__PURE__ */ c.jsx(Fn, { as: tt, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Rn,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: ee(o, (k) => {
              var G;
              (G = w.trigger) == null || G.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Pn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  Ie,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...y,
                    ...ge,
                    onPlaced: () => L(!0),
                    ref: j,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: ee(y.onKeyDown, (k) => {
                      const G = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !G && k.key.length === 1 && ie(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let K = Y().filter((q) => !q.disabled).map((q) => q.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (K = K.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const q = k.target, X = K.indexOf(q);
                          K = K.slice(X + 1);
                        }
                        setTimeout(() => D(K)), k.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
jo.displayName = $c;
var Hc = "SelectItemAlignedPosition", Oo = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Be(Ue, n), a = $e(Ue, n), [i, l] = u.useState(null), [f, p] = u.useState(null), h = se(t, (j) => p(j)), g = Yt(n), v = u.useRef(!1), x = u.useRef(!0), { viewport: m, selectedItem: b, selectedItemText: y, focusSelectedItem: w } = a, E = u.useCallback(() => {
    if (s.trigger && s.valueNode && i && f && m && b && y) {
      const j = s.trigger.getBoundingClientRect(), M = f.getBoundingClientRect(), z = s.valueNode.getBoundingClientRect(), U = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const q = U.left - M.left, X = z.left - q, ce = j.left - X, he = j.width + ce, Se = Math.max(he, M.width), xe = window.innerWidth - Ne, Me = or(X, [Ne, xe - Se]);
        i.style.minWidth = he + "px", i.style.left = Me + "px";
      } else {
        const q = M.right - U.right, X = window.innerWidth - z.right - q, ce = window.innerWidth - j.right - X, he = j.width + ce, Se = Math.max(he, M.width), xe = window.innerWidth - Ne, Me = or(X, [Ne, xe - Se]);
        i.style.minWidth = he + "px", i.style.right = Me + "px";
      }
      const _ = g(), Y = window.innerHeight - Ne * 2, W = m.scrollHeight, L = window.getComputedStyle(f), C = parseInt(L.borderTopWidth, 10), D = parseInt(L.paddingTop, 10), O = parseInt(L.borderBottomWidth, 10), B = parseInt(L.paddingBottom, 10), F = C + D + W + B + O, ae = Math.min(b.offsetHeight * 5, F), ie = window.getComputedStyle(m), _e = parseInt(ie.paddingTop, 10), ke = parseInt(ie.paddingBottom, 10), be = j.top + j.height / 2 - Ne, Ie = Y - be, ge = b.offsetHeight / 2, k = b.offsetTop + ge, G = C + D + k, re = F - G;
      if (G <= be) {
        const q = b === _[_.length - 1].ref.current;
        i.style.bottom = "0px";
        const X = f.clientHeight - m.offsetTop - m.offsetHeight, ce = Math.max(
          Ie,
          ge + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (q ? ke : 0) + X + O
        ), he = G + ce;
        i.style.height = he + "px";
      } else {
        const q = b === _[0].ref.current;
        i.style.top = "0px";
        const ce = Math.max(
          be,
          C + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (q ? _e : 0) + ge
        ) + re;
        i.style.height = ce + "px", m.scrollTop = G - be + m.offsetTop;
      }
      i.style.margin = `${Ne}px 0`, i.style.minHeight = ae + "px", i.style.maxHeight = Y + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    i,
    f,
    m,
    b,
    y,
    s.dir,
    r
  ]);
  de(() => E(), [E]);
  const [P, R] = u.useState();
  de(() => {
    f && R(window.getComputedStyle(f).zIndex);
  }, [f]);
  const T = u.useCallback(
    (j) => {
      j && x.current === !0 && (E(), w == null || w(), x.current = !1);
    },
    [E, w]
  );
  return /* @__PURE__ */ c.jsx(
    zc,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: T,
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P
          },
          children: /* @__PURE__ */ c.jsx(
            te.div,
            {
              ...o,
              ref: h,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Oo.displayName = Hc;
var Vc = "SelectPopperPosition", vn = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ne,
    ...s
  } = e, a = Kt(n);
  return /* @__PURE__ */ c.jsx(
    io,
    {
      ...a,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
vn.displayName = Vc;
var [zc, Ln] = it(Ue, {}), gn = "SelectViewport", Ao = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = $e(gn, n), a = Ln(gn, n), i = se(t, s.onViewportChange), l = u.useRef(0);
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ c.jsx(Ut.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        te.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: ee(o.onScroll, (f) => {
            const p = f.currentTarget, { contentWrapper: h, shouldExpandOnScrollRef: g } = a;
            if (g != null && g.current && h) {
              const v = Math.abs(l.current - p.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Ne * 2, m = parseFloat(h.style.minHeight), b = parseFloat(h.style.height), y = Math.max(m, b);
                if (y < x) {
                  const w = y + v, E = Math.min(x, w), P = w - E;
                  h.style.height = E + "px", h.style.bottom === "0px" && (p.scrollTop = P > 0 ? P : 0, h.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ao.displayName = gn;
var To = "SelectGroup", [Uc, Yc] = it(To), Kc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Bt();
    return /* @__PURE__ */ c.jsx(Uc, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(te.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Kc.displayName = To;
var _o = "SelectLabel", ko = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Yc(_o, n);
    return /* @__PURE__ */ c.jsx(te.div, { id: o.id, ...r, ref: t });
  }
);
ko.displayName = _o;
var Dt = "SelectItem", [Xc, Io] = it(Dt), Mo = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = Be(Dt, n), l = $e(Dt, n), f = i.value === r, [p, h] = u.useState(s ?? ""), [g, v] = u.useState(!1), x = se(
      t,
      (y) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, y, r, o);
      }
    ), m = Bt(), b = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      Xc,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: f,
        onItemTextChange: u.useCallback((y) => {
          h((w) => w || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          Ut.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ c.jsx(
              te.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": f && g,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: ee(a.onFocus, () => v(!0)),
                onBlur: ee(a.onBlur, () => v(!1)),
                onPointerUp: ee(a.onPointerUp, b),
                onPointerMove: ee(a.onPointerMove, (y) => {
                  var w;
                  o ? (w = l.onItemLeave) == null || w.call(l) : y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ee(a.onPointerLeave, (y) => {
                  var w;
                  y.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: ee(a.onKeyDown, (y) => {
                  var E;
                  ((E = l.searchRef) == null ? void 0 : E.current) !== "" && y.key === " " || (Ic.includes(y.key) && b(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Mo.displayName = Dt;
var ut = "SelectItemText", Do = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = Be(ut, n), i = $e(ut, n), l = Io(ut, n), f = Lc(ut, n), [p, h] = u.useState(null), g = se(
      t,
      (y) => h(y),
      l.onItemTextChange,
      (y) => {
        var w;
        return (w = i.itemTextRefCallback) == null ? void 0 : w.call(i, y, l.value, l.disabled);
      }
    ), v = p == null ? void 0 : p.textContent, x = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: b } = f;
    return de(() => (m(x), () => b(x)), [m, b, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(te.span, { id: l.textId, ...s, ref: g }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? pt.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Do.displayName = ut;
var Fo = "SelectItemIndicator", Lo = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Io(Fo, n).isSelected ? /* @__PURE__ */ c.jsx(te.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Lo.displayName = Fo;
var xn = "SelectScrollUpButton", Wo = u.forwardRef((e, t) => {
  const n = $e(xn, e.__scopeSelect), r = Ln(xn, e.__scopeSelect), [o, s] = u.useState(!1), a = se(t, r.onScrollButtonChange);
  return de(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const f = l.scrollTop > 0;
        s(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    $o,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Wo.displayName = xn;
var yn = "SelectScrollDownButton", Bo = u.forwardRef((e, t) => {
  const n = $e(yn, e.__scopeSelect), r = Ln(yn, e.__scopeSelect), [o, s] = u.useState(!1), a = se(t, r.onScrollButtonChange);
  return de(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const f = l.scrollHeight - l.clientHeight, p = Math.ceil(l.scrollTop) < f;
        s(p);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    $o,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Bo.displayName = yn;
var $o = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = $e("SelectScrollButton", n), a = u.useRef(null), i = Yt(n), l = u.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), de(() => {
    var p;
    const f = i().find((h) => h.ref.current === document.activeElement);
    (p = f == null ? void 0 : f.ref.current) == null || p.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    te.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ee(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: ee(o.onPointerMove, () => {
        var f;
        (f = s.onItemLeave) == null || f.call(s), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ee(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Gc = "SelectSeparator", Ho = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(te.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ho.displayName = Gc;
var wn = "SelectArrow", qc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Kt(n), s = Be(wn, n), a = $e(wn, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ c.jsx(ao, { ...o, ...r, ref: t }) : null;
  }
);
qc.displayName = wn;
function Vo(e) {
  return e === "" || e === void 0;
}
var zo = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = u.useRef(null), s = se(t, o), a = Ya(n);
    return u.useEffect(() => {
      const i = o.current, l = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== n && p) {
        const h = new Event("change", { bubbles: !0 });
        p.call(i, n), i.dispatchEvent(h);
      }
    }, [a, n]), /* @__PURE__ */ c.jsx(co, { asChild: !0, children: /* @__PURE__ */ c.jsx("select", { ...r, ref: s, defaultValue: n }) });
  }
);
zo.displayName = "BubbleSelect";
function Uo(e) {
  const t = je(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), function l(f) {
        n.current = f, window.clearTimeout(r.current), f !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(i);
    },
    [t]
  ), s = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Yo(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Zc(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((f) => f !== n));
  const l = a.find(
    (f) => f.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Zc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Jc = yo, Ko = bo, Qc = Eo, el = Co, tl = Po, Xo = Ro, nl = Ao, Go = ko, qo = Mo, rl = Do, ol = Lo, Zo = Wo, Jo = Bo, Qo = Ho;
const Rr = Jc, Nr = Qc, bn = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  Ko,
  {
    ref: r,
    className: A(
      "flex h-12 md:h-9 w-full  border-[##ADADAD] items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ c.jsx(el, { asChild: !0, children: /* @__PURE__ */ c.jsx(Qs, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
bn.displayName = Ko.displayName;
const es = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Zo,
  {
    ref: n,
    className: A("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ c.jsx(ei, {})
  }
));
es.displayName = Zo.displayName;
const ts = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Jo,
  {
    ref: n,
    className: A("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ c.jsx(ti, {})
  }
));
ts.displayName = Jo.displayName;
const Sn = u.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ c.jsx(tl, { children: /* @__PURE__ */ c.jsxs(
  Xo,
  {
    ref: o,
    className: A(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ c.jsx(es, {}),
      /* @__PURE__ */ c.jsx(
        nl,
        {
          className: A(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ c.jsx(ts, {})
    ]
  }
) }));
Sn.displayName = Xo.displayName;
const sl = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Go,
  {
    ref: n,
    className: A("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
sl.displayName = Go.displayName;
const En = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  qo,
  {
    ref: r,
    className: A(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(ol, { children: /* @__PURE__ */ c.jsx(ni, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ c.jsx(rl, { children: t })
    ]
  }
));
En.displayName = qo.displayName;
const il = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Qo,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", e),
    ...t
  }
));
il.displayName = Qo.displayName;
var al = "Separator", jr = "horizontal", cl = ["horizontal", "vertical"], ns = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = jr, ...o } = e, s = ll(r) ? r : jr, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ c.jsx(
    te.div,
    {
      "data-orientation": s,
      ...i,
      ...o,
      ref: t
    }
  );
});
ns.displayName = al;
function ll(e) {
  return cl.includes(e);
}
var rs = ns;
const et = u.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ c.jsx(
  rs,
  {
    ref: o,
    decorative: n,
    orientation: t,
    className: A(
      "shrink-0 bg-neutral-200 dark:bg-neutral-800",
      t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      e
    ),
    ...r
  }
));
et.displayName = rs.displayName;
const os = u.forwardRef(
  ({ className: e, ...t }, n) => (
    // <div className="relative w-full overflow-auto">
    /* @__PURE__ */ c.jsx("table", { ref: n, className: A("w-full caption-bottom text-sm", e), ...t })
  )
);
os.displayName = "Table";
const ss = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("thead", { ref: n, className: A("[&_tr]:border-b", e), ...t }));
ss.displayName = "TableHeader";
const is = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("tbody", { ref: n, className: A("[&_tr:last-child]:border-0", e), ...t }));
is.displayName = "TableBody";
const ul = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: A(
      "border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50",
      e
    ),
    ...t
  }
));
ul.displayName = "TableFooter";
const At = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    "tr",
    {
      ref: n,
      className: A(
        "border-b p-2 transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800",
        e
      ),
      ...t
    }
  )
);
At.displayName = "TableRow";
const as = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: n,
    className: A(
      "h-10 px-2 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-neutral-400",
      e
    ),
    ...t
  }
));
as.displayName = "TableHead";
const Cn = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: n,
    className: A(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Cn.displayName = "TableCell";
const dl = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: A("mt-4 text-sm text-neutral-500 dark:text-neutral-400", e),
    ...t
  }
));
dl.displayName = "TableCaption";
var cs = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Or = Q.createContext && /* @__PURE__ */ Q.createContext(cs), fl = ["attr", "size", "title"];
function pl(e, t) {
  if (e == null) return {};
  var n = ml(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      r = s[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ml(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function Ar(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ar(Object(n), !0).forEach(function(r) {
      hl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ar(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hl(e, t, n) {
  return t = vl(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vl(e) {
  var t = gl(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gl(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ls(e) {
  return e && e.map((t, n) => /* @__PURE__ */ Q.createElement(t.tag, Lt({
    key: n
  }, t.attr), ls(t.child)));
}
function Wn(e) {
  return (t) => /* @__PURE__ */ Q.createElement(xl, Ft({
    attr: Lt({}, e.attr)
  }, t), ls(e.child));
}
function xl(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: s
    } = e, a = pl(e, fl), i = o || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ Q.createElement("svg", Ft({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, a, {
      className: l,
      style: Lt(Lt({
        color: e.color || n.color
      }, n.style), e.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ Q.createElement("title", null, s), e.children);
  };
  return Or !== void 0 ? /* @__PURE__ */ Q.createElement(Or.Consumer, null, (n) => t(n)) : t(cs);
}
function yl(e) {
  return Wn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" }, child: [] }] })(e);
}
function ue({ className: e, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: A("animate-pulse rounded-md bg-neutral-900/10 dark:bg-neutral-50/10", e),
      ...t
    }
  );
}
const wl = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    "h1",
    {
      ref: n,
      className: A("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", e),
      ...t
    }
  )
);
wl.displayName = "H1";
const bl = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    "h2",
    {
      ref: n,
      className: A(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        e
      ),
      ...t
    }
  )
);
bl.displayName = "H2";
const Sl = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    "h2",
    {
      ref: n,
      className: A("scroll-m-20 text-2xl font-semibold tracking-tight", e),
      ...t
    }
  )
);
Sl.displayName = "H3";
const us = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    "h4",
    {
      ref: n,
      className: A("scroll-m-20 text-xl font-semibold tracking-tight", e),
      ...t
    }
  )
);
us.displayName = "H4";
const El = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("p", { ref: n, className: A("leading-7 [&:not(:first-child)]:mt-6", e), ...t })
);
El.displayName = "P";
const Cl = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: A("text-lg font-semibold", e), ...t })
);
Cl.displayName = "TextLarge";
const ds = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: A("text-md font-semibold", e), ...t })
);
ds.displayName = "TextMedium";
const H = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: A("text-sm font-light leading-none", e), ...t })
);
H.displayName = "TextSmall";
function Pl(e) {
  return Wn({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" }, child: [] }] })(e);
}
const Rl = ({ data: e, isLoading: t }) => {
  var n, r, o, s, a, i, l, f;
  return /* @__PURE__ */ c.jsxs("div", { className: (A("h-full "), e ? "" : "grayscale"), children: [
    t && /* @__PURE__ */ c.jsxs("div", { className: "ml-4 mt-8 h-[75dvh] flex flex-col justify-between", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-start gap-24", children: [
        /* @__PURE__ */ c.jsx(ue, { className: "h-[2dvh] w-[20%]" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-[2dvh] w-[20%]" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-2 pt-8", children: [
        /* @__PURE__ */ c.jsx(ue, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-72" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-72" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-40" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-2 pt-8", children: [
        /* @__PURE__ */ c.jsx(ue, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-60" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-84" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-32" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-2 py-8 ", children: [
        /* @__PURE__ */ c.jsx(ue, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-72" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-72" }),
        /* @__PURE__ */ c.jsx(ue, { className: "h-4 w-24" })
      ] }),
      /* @__PURE__ */ c.jsx(ue, { className: "h-[12dvh] w-[100%]" })
    ] }),
    !t && /* @__PURE__ */ c.jsxs("div", { className: A("md:bg-[#F3F5FD] flex flex-col relative h-[74dvh] "), children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between p-4 items-center relative top-1", children: [
        /* @__PURE__ */ c.jsx(us, { className: "text-[#297FFF]", children: "Summary" }),
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: A(
              "font-bold flex items-center gap-2 absolute right-16",
              (e == null ? void 0 : e.status) === 1 ? "text-green-500" : (e == null ? void 0 : e.status) === 4 ? "text-yellow-500" : ""
            ),
            children: [
              /* @__PURE__ */ c.jsx(Pl, { size: "8px" }),
              /* @__PURE__ */ c.jsx(H, { className: "inline", children: (e == null ? void 0 : e.status) === 4 ? "Pending" : "Active" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ c.jsx(et, { className: "mt-[1vh] w-full" }),
      /* @__PURE__ */ c.jsxs("div", { className: "p-4 flex flex-col gap-2 ", children: [
        /* @__PURE__ */ c.jsx(H, { className: "inline font-bold text-sm ", children: "Contact Information" }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Name:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: (n = e == null ? void 0 : e.customer) == null ? void 0 : n.name })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Phone Number:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: (r = e == null ? void 0 : e.customer) == null ? void 0 : r.phone })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Email ID:",
          " ",
          /* @__PURE__ */ c.jsxs(H, { className: "inline text-black text-xs", children: [
            " ",
            ((o = e == null ? void 0 : e.customer) == null ? void 0 : o.email) ?? "karan@samsung.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(et, {}),
      /* @__PURE__ */ c.jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ c.jsx(H, { className: "inline font-bold text-sm color-[#7E7E7E]", children: "Plan Details" }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Plan Name:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: e == null ? void 0 : e.display_plan_name })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Plan Serial Number:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: (e && (e == null ? void 0 : e.id)) ?? "" })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Warranty Start Date:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: (e == null ? void 0 : e.warranty_start_date) ?? "N/A" })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Warranty End Date:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: (e == null ? void 0 : e.warranty_end_date) ?? "N/A" })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#297FFF] font-bold", children: [
          "Plan MRP:",
          " ",
          /* @__PURE__ */ c.jsxs(H, { className: "inline", children: [
            " ",
            ((s = e == null ? void 0 : e.kitprice) == null ? void 0 : s.customer_price) ?? 1999
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#297FFF] font-bold", children: [
          "Retailer Landing Cost:",
          " ",
          /* @__PURE__ */ c.jsxs(H, { className: "inline", children: [
            " ",
            ((a = e == null ? void 0 : e.kitprice) == null ? void 0 : a.retailer_price) ?? 1099
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(et, {}),
      /* @__PURE__ */ c.jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ c.jsx(H, { className: "inline font-bold text-sm ", children: "Product Details" }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "IMEI Number:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: (i = e == null ? void 0 : e.items[0]) == null ? void 0 : i.imeinumber })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Model:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: (l = e == null ? void 0 : e.items[0]) == null ? void 0 : l.model })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Product Purchase Date:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: e != null && e.items[0].purchasedate ? Pt(new Date(e == null ? void 0 : e.items[0].purchasedate), "dd-MM-yyyy") : "" })
        ] }),
        /* @__PURE__ */ c.jsxs(H, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Product Price:",
          " ",
          /* @__PURE__ */ c.jsx(H, { className: "inline text-black text-xs", children: ((f = e == null ? void 0 : e.items[0]) == null ? void 0 : f.price) ?? "0" })
        ] })
      ] })
    ] })
  ] });
}, Nl = ({ className: e, size: t = "md", ...n }) => {
  const r = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-6"
  };
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: A(
        "inline-block border-current border-t-transparent rounded-full animate-spin text-[#297FFF]",
        r[t],
        e
      ),
      ...n
    }
  );
}, fs = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: A("flex", e), ...t })
);
fs.displayName = "Flex";
const jl = Q.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: A("block", e), ...t })
);
jl.displayName = "Box";
function Ol(e) {
  return Wn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z" }, child: [] }] })(e);
}
function ps({ className: e, classNames: t, showOutsideDays: n = !0, ...r }) {
  return /* @__PURE__ */ c.jsx(
    ui,
    {
      showOutsideDays: n,
      className: A("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: A(
          Tt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-neutral-400",
        row: "flex w-full mt-2",
        cell: A(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-100 [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md dark:[&:has([aria-selected])]:bg-neutral-800 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50",
          r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: A(
          Tt({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 focus:bg-neutral-900 focus:text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 dark:focus:bg-neutral-50 dark:focus:text-neutral-900",
        day_today: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50",
        day_outside: "day-outside text-neutral-500 opacity-50  aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 aria-selected:opacity-30 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400",
        day_disabled: "text-neutral-500 opacity-50 dark:text-neutral-400",
        day_range_middle: "aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
        day_hidden: "invisible",
        ...t
      },
      ...r
    }
  );
}
ps.displayName = "Calendar";
function Al(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bn = (e) => {
  const { present: t, children: n } = e, r = Tl(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = se(r.ref, _l(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
Bn.displayName = "Presence";
function Tl(e) {
  const [t, n] = u.useState(), r = u.useRef({}), o = u.useRef(e), s = u.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = Al(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const f = Et(r.current);
    s.current = i === "mounted" ? f : "none";
  }, [i]), de(() => {
    const f = r.current, p = o.current;
    if (p !== e) {
      const g = s.current, v = Et(f);
      e ? l("MOUNT") : v === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(p && g !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), de(() => {
    if (t) {
      const f = (h) => {
        const v = Et(r.current).includes(h.animationName);
        h.target === t && v && pt.flushSync(() => l("ANIMATION_END"));
      }, p = (h) => {
        h.target === t && (s.current = Et(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((f) => {
      f && (r.current = getComputedStyle(f)), n(f);
    }, [])
  };
}
function Et(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function _l(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var $n = "Popover", [ms, su] = Wt($n, [
  Vt
]), vt = Vt(), [kl, He] = ms($n), hs = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = vt(t), l = u.useRef(null), [f, p] = u.useState(!1), [h = !1, g] = mn({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ c.jsx(so, { ...i, children: /* @__PURE__ */ c.jsx(
    kl,
    {
      scope: t,
      contentId: Bt(),
      triggerRef: l,
      open: h,
      onOpenChange: g,
      onOpenToggle: u.useCallback(() => g((v) => !v), [g]),
      hasCustomAnchor: f,
      onCustomAnchorAdd: u.useCallback(() => p(!0), []),
      onCustomAnchorRemove: u.useCallback(() => p(!1), []),
      modal: a,
      children: n
    }
  ) });
};
hs.displayName = $n;
var vs = "PopoverAnchor", Il = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = He(vs, n), s = vt(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ c.jsx(Mn, { ...s, ...r, ref: t });
  }
);
Il.displayName = vs;
var gs = "PopoverTrigger", xs = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = He(gs, n), s = vt(n), a = se(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      te.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Es(o.open),
        ...r,
        ref: a,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Mn, { asChild: !0, ...s, children: i });
  }
);
xs.displayName = gs;
var Hn = "PopoverPortal", [Ml, Dl] = ms(Hn, {
  forceMount: void 0
}), ys = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = He(Hn, t);
  return /* @__PURE__ */ c.jsx(Ml, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Bn, { present: n || s.open, children: /* @__PURE__ */ c.jsx(Dn, { asChild: !0, container: o, children: r }) }) });
};
ys.displayName = Hn;
var rt = "PopoverContent", ws = u.forwardRef(
  (e, t) => {
    const n = Dl(rt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = He(rt, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Bn, { present: r || s.open, children: s.modal ? /* @__PURE__ */ c.jsx(Fl, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Ll, { ...o, ref: t }) });
  }
);
ws.displayName = rt;
var Fl = u.forwardRef(
  (e, t) => {
    const n = He(rt, e.__scopePopover), r = u.useRef(null), o = se(t, r), s = u.useRef(!1);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return uo(a);
    }, []), /* @__PURE__ */ c.jsx(Fn, { as: tt, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      bs,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: ee(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, f = i.button === 2 || l;
            s.current = f;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: ee(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Ll = u.forwardRef(
  (e, t) => {
    const n = He(rt, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      bs,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var l, f;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((f = n.triggerRef.current) == null ? void 0 : f.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), bs = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      onFocusOutside: f,
      onInteractOutside: p,
      ...h
    } = e, g = He(rt, n), v = vt(n);
    return Lr(), /* @__PURE__ */ c.jsx(
      Rn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ c.jsx(
          Pn,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: p,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: f,
            onDismiss: () => g.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              io,
              {
                "data-state": Es(g.open),
                role: "dialog",
                id: g.contentId,
                ...v,
                ...h,
                ref: t,
                style: {
                  ...h.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Ss = "PopoverClose", Wl = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = He(Ss, n);
    return /* @__PURE__ */ c.jsx(
      te.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ee(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Wl.displayName = Ss;
var Bl = "PopoverArrow", $l = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = vt(n);
    return /* @__PURE__ */ c.jsx(ao, { ...o, ...r, ref: t });
  }
);
$l.displayName = Bl;
function Es(e) {
  return e ? "open" : "closed";
}
var Hl = hs, Vl = xs, zl = ys, Cs = ws;
const Ul = Hl, Yl = Vl, Ps = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(zl, { children: /* @__PURE__ */ c.jsx(
  Cs,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: A(
      "z-50 w-72 rounded-md border border-neutral-200 bg-white p-4 text-neutral-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      e
    ),
    ...r
  }
) }));
Ps.displayName = Cs.displayName;
function Kl({
  className: e,
  setDateRange: t
}) {
  const [n, r] = u.useState({
    from: void 0,
    to: void 0
  }), [o, s] = u.useState(!1), a = (l) => {
    t({
      from_date: l.from,
      to_date: l.to
    });
  }, i = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ c.jsx("div", { className: A("grid gap-2", e), children: /* @__PURE__ */ c.jsxs(Ul, { open: o, onOpenChange: s, children: [
    /* @__PURE__ */ c.jsx(Yl, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
      Ze,
      {
        id: "date",
        variant: "outline",
        className: A(
          "w-fit justify-start text-left font-normal",
          !n && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ c.jsx(Ol, { className: "mr-2 h-4 w-4" }),
          n != null && n.from ? n.to ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            Pt(n.from, "LLL dd, y"),
            " - ",
            Pt(n.to, "LLL dd, y")
          ] }) : Pt(n.from, "LLL dd, y") : /* @__PURE__ */ c.jsx("span", { children: "Pick a date range" })
        ]
      }
    ) }),
    /* @__PURE__ */ c.jsxs(Ps, { className: "w-auto p-0", align: "start", children: [
      /* @__PURE__ */ c.jsx(
        ps,
        {
          initialFocus: !0,
          mode: "range",
          defaultMonth: n == null ? void 0 : n.from,
          selected: n,
          onSelect: r,
          numberOfMonths: 2,
          disabled: (l) => l > i
        }
      ),
      /* @__PURE__ */ c.jsx(
        Ze,
        {
          className: "ml-[40%] mb-4",
          onClick: () => {
            a(n), s(!1);
          },
          children: "Set Range"
        }
      )
    ] })
  ] }) });
}
function iu({
  columns: e,
  isBorder: t,
  data: n,
  totalCount: r,
  isDataLoading: o,
  showFilter: s,
  pagination: a,
  setPagination: i,
  filterField: l,
  setFilterField: f,
  filterInput: p,
  setFilterinput: h,
  showDownloadButton: g,
  isSideSheet: v,
  showPagination: x,
  filterFields: m,
  tableHeight: b = "75vh",
  onIndividualFilterFieldChange: y,
  addItemToTablist: w,
  dateRange: E,
  setDateRange: P
}) {
  const [R, T] = Ct([]), [j, M] = Ct("");
  Gs();
  const [z, U] = Ct(), _ = ii({
    data: n,
    columns: e,
    getCoreRowModel: ai(),
    getPaginationRowModel: ci(),
    onColumnFiltersChange: T,
    getFilteredRowModel: li(),
    manualPagination: !0,
    onPaginationChange: i,
    rowCount: r,
    state: {
      columnFilters: R,
      pagination: a
    }
  }), Y = () => {
    const C = [], D = Math.floor(2.5), O = Math.ceil(_.getRowCount() / Number(_.getState().pagination.pageSize)), B = _.getState().pagination.pageIndex;
    if (O <= 5)
      for (let F = 0; F < O; F++)
        C.push(F);
    else {
      C.push(0);
      let F = Math.max(B - D, 1), ae = Math.min(B + D, O - 2);
      B <= D && (F = 1, ae = 3), B >= O - D && (F = O - 5 + 1, ae = O - 2), F > 1 && C.push("...");
      for (let ie = F; ie <= ae; ie++)
        C.push(ie);
      ae < O - 2 && C.push("..."), C.push(O - 1);
    }
    return C;
  };
  let W = [];
  W = e.map((C) => C.accessorKey);
  const L = (C) => {
    f(C);
  };
  return Tr(() => {
    var C;
    n.length && (U(_.getRowModel().rows[0].original), M((C = _.getRowModel().rows[0]) == null ? void 0 : C.id));
  }, [n]), /* @__PURE__ */ c.jsxs(
    "div",
    {
      style: {
        height: b
      },
      className: A("rounded-lg relative z-0 flex w-full h-full ", t ? "border" : ""),
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: A("flex flex-col h-full", v ? "w-[75%]" : "w-[100%]"), children: [
          (s || g) && /* @__PURE__ */ c.jsxs("div", { className: "flex items-left p-4 space-x-4 relative w-full", children: [
            s && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(
                _r,
                {
                  className: "width-[20%] max-w-[20%]",
                  placeholder: l ? `Filter by ${l}` : "Select Filter Field",
                  value: p,
                  disabled: !l,
                  onChange: (C) => {
                    i((D) => ({
                      pageIndex: 0,
                      pageSize: a.pageSize
                    })), h(C.target.value);
                  }
                }
              ),
              /* @__PURE__ */ c.jsxs(
                Rr,
                {
                  className: "absolute",
                  onValueChange: (C) => L(C),
                  children: [
                    /* @__PURE__ */ c.jsx(bn, { className: "w-[180px]", children: /* @__PURE__ */ c.jsx(Nr, { placeholder: "Select Filter Field" }) }),
                    /* @__PURE__ */ c.jsx(Sn, { className: "z-[100]", children: W && W.map((C) => {
                      if (rr(C) !== null)
                        return /* @__PURE__ */ c.jsx(En, { value: C, children: rr(C) }, C);
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ c.jsx(Kl, { dateRange: E, setDateRange: P })
            ] }),
            g && /* @__PURE__ */ c.jsx(
              Ze,
              {
                className: "rounded-full absolute top-4 right-4 hover:scale-105 transition-transform duration-300 ease-in-out transform",
                variant: "outline",
                children: /* @__PURE__ */ c.jsxs("div", { className: "flex gap-2 items-center ", children: [
                  /* @__PURE__ */ c.jsx(yl, { size: "20px" }),
                  " ",
                  /* @__PURE__ */ c.jsx(H, { children: "Report" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(et, { className: "bg-[#EAEAEA]" }),
          /* @__PURE__ */ c.jsxs("div", { className: " max-h-[65vh] overflow-scroll w-full", children: [
            /* @__PURE__ */ c.jsxs(os, { className: "w-full h-fit relative", children: [
              /* @__PURE__ */ c.jsxs(ss, { className: "sticky w-full top-0 z-0 bg-white p-2", children: [
                _.getHeaderGroups().map((C) => /* @__PURE__ */ c.jsx(At, { className: "border-[#F1F1F1]", children: C.headers.map((D) => /* @__PURE__ */ c.jsx(as, { className: "p-2", children: D.isPlaceholder ? null : er(D.column.columnDef.header, D.getContext()) }, D.id)) }, C.id)),
                /* @__PURE__ */ c.jsx(At, { className: "border-[#F1F1F1]", children: _.getAllColumns().map((C) => /* @__PURE__ */ c.jsx(Cn, {}, C.id)) })
              ] }),
              n ? /* @__PURE__ */ c.jsx(is, { className: "w-full h-full", children: o ? /* @__PURE__ */ c.jsx(c.Fragment, {}) : (
                //ts-expect-error
                _.getRowModel().rows.map((C, D) => /* @__PURE__ */ c.jsx(
                  At,
                  {
                    className: A(
                      "border-[#F1F1F1]",
                      j === C.id ? "bg-[#F3F5FD] hover:bg-[#F3F5FD]" : ""
                    ),
                    "data-state": C.getIsSelected() && "selected",
                    onClick: () => {
                      U(C.original), M(C.id);
                    },
                    children: C.getVisibleCells().map((O) => /* @__PURE__ */ c.jsx(
                      Cn,
                      {
                        className: A(
                          "d-table-cell py-4",
                          O.column.id === "claim_id" ? "cursor-pointer" : ""
                        ),
                        onClick: w ? () => {
                          if (O.column.id === "claim_id") {
                            const B = C.getVisibleCells().find((F) => F.column.id === "imei_no");
                            w({
                              label: O.getValue(),
                              value: O.getValue(),
                              imei_number: B ? B.getValue() : void 0
                            });
                          }
                        } : void 0,
                        children: er(O.column.columnDef.cell, O.getContext())
                      },
                      O.id
                    ))
                  },
                  C.id
                ))
              ) }) : /* @__PURE__ */ c.jsx(fs, { className: "h-[45dvh] w-[800%] justify-center items-center", children: /* @__PURE__ */ c.jsx(ds, { children: "No Data Found..." }) })
            ] }),
            o && /* @__PURE__ */ c.jsx("div", { className: "", children: /* @__PURE__ */ c.jsx(Nl, { size: "md", className: "mt-[28vh] ml-[30vw]" }) })
          ] }),
          !o && x && /* @__PURE__ */ c.jsxs("div", { className: "mt-auto mr-2 p-2 bottom-0 flex justify-between space-x-2 w-[100%] border-t-gray-200", children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex items-center gap-2 ", children: /* @__PURE__ */ c.jsx(kr, { className: "cursor-pointer", children: /* @__PURE__ */ c.jsxs(Ir, { children: [
              /* @__PURE__ */ c.jsx(Rt, { children: /* @__PURE__ */ c.jsxs(
                Ze,
                {
                  onClick: () => {
                    _.previousPage();
                  },
                  className: A(
                    " rounded p-1 text-gray-400 bg-gray-100 w-auto ",
                    _.getState().pagination.pageIndex === 0 ? "pointer-events-none opacity-50" : void 0
                  ),
                  disabled: !_.getCanPreviousPage(),
                  children: [
                    " ",
                    /* @__PURE__ */ c.jsx(ri, { className: "size-4", "aria-hidden": "true" })
                  ]
                }
              ) }),
              /* @__PURE__ */ c.jsx("div", { className: "w-fit max-w-[310px] flex overflow-hidden gap-1", children: Y().map((C, D) => /* @__PURE__ */ c.jsx("span", { className: "flex items-center gap-2 overflow ", children: /* @__PURE__ */ c.jsx(
                Rt,
                {
                  className: A(
                    " text-[#7E84A3]  rounded-md hover:scale-110 hover:transition-transform hover:duration-400",
                    C === _.getState().pagination.pageIndex ? "bg-[#E6E6E6]" : "bg-white"
                  ),
                  children: /* @__PURE__ */ c.jsx(
                    Mr,
                    {
                      onClick: () => {
                        C !== "..." ? _.setPageIndex(C) : _.setPageIndex(
                          Math.ceil(
                            //@ts-expect-error
                            (Y()[D - 1] + Y()[D + 1]) / 2
                          )
                        );
                      },
                      children: C === "..." ? "..." : C + 1
                    }
                  )
                }
              ) }, C)) }),
              /* @__PURE__ */ c.jsx(Rt, { children: /* @__PURE__ */ c.jsx(
                Ze,
                {
                  onClick: () => {
                    _.nextPage();
                  },
                  className: A(
                    " rounded p-1 text-gray-400 bg-gray-100 w-auto",
                    _.getState().pagination.pageIndex === Math.ceil(
                      _.getRowCount() / Number(_.getState().pagination.pageSize)
                    ) - 1 ? "pointer-events-none opacity-50" : void 0
                  ),
                  children: /* @__PURE__ */ c.jsx(oi, {})
                }
              ) })
            ] }) }) }),
            /* @__PURE__ */ c.jsxs("div", { className: "w-fit flex items-center space-x-2", children: [
              /* @__PURE__ */ c.jsxs(H, { className: "flex items-center gap-1 text-sm", children: [
                "Showing",
                " ",
                /* @__PURE__ */ c.jsx(H, { className: "font-bold", children: _.getRowModel().rows.length.toLocaleString() }),
                " ",
                "of",
                " ",
                /* @__PURE__ */ c.jsx(H, { className: "font-bold", children: _.getRowCount().toLocaleString() }),
                " ",
                "Items"
              ] }),
              /* @__PURE__ */ c.jsx(et, { orientation: "vertical" }),
              /* @__PURE__ */ c.jsx(H, { className: "text-sm mr-2", children: "Items per page: " }),
              /* @__PURE__ */ c.jsxs(
                Rr,
                {
                  onValueChange: (C) => {
                    _.setPageSize(Number(C));
                  },
                  children: [
                    /* @__PURE__ */ c.jsx(bn, { className: "w-[100px]", children: /* @__PURE__ */ c.jsx(Nr, { placeholder: _.getState().pagination.pageSize }) }),
                    /* @__PURE__ */ c.jsx(Sn, { children: [10, 20, 30, 40, 50].map((C) => (
                      //@ts-expect-error
                      /* @__PURE__ */ c.jsx(En, { value: C, children: C }, C)
                    )) })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        v && /* @__PURE__ */ c.jsx("div", { className: "w-[25%] h-full overflow-scroll", children: /* @__PURE__ */ c.jsx(Rl, { isLoading: o, data: z }) })
      ]
    }
  );
}
export {
  iu as DataTable
};
