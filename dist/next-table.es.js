import { Slot as Rd } from "@radix-ui/react-slot";
import { cva as _M } from "class-variance-authority";
import { clsx as kM } from "clsx";
import { twMerge as DM } from "tailwind-merge";
import { CaretSortIcon as OM, ChevronUpIcon as NM, ChevronDownIcon as MM, CheckIcon as AM, ChevronLeftIcon as LM, ChevronRightIcon as PM } from "@radix-ui/react-icons";
import { useReactTable as jM, getCoreRowModel as zM, getPaginationRowModel as UM, getFilteredRowModel as FM, flexRender as i1 } from "@tanstack/react-table";
import { format as Hy } from "date-fns";
import { DayPicker as HM } from "react-day-picker";
function VM(u, f) {
  for (var d = 0; d < f.length; d++) {
    const g = f[d];
    if (typeof g != "string" && !Array.isArray(g)) {
      for (const E in g)
        if (E !== "default" && !(E in u)) {
          const w = Object.getOwnPropertyDescriptor(g, E);
          w && Object.defineProperty(u, E, w.get ? w : {
            enumerable: !0,
            get: () => g[E]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
function B1(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Ix = { exports: {} }, Pv = {}, Bx = { exports: {} }, Ft = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o1;
function IM() {
  if (o1) return Ft;
  o1 = 1;
  var u = Symbol.for("react.element"), f = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), m = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), A = Symbol.iterator;
  function z(H) {
    return H === null || typeof H != "object" ? null : (H = A && H[A] || H["@@iterator"], typeof H == "function" ? H : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = Object.assign, F = {};
  function G(H, ue, Je) {
    this.props = H, this.context = ue, this.refs = F, this.updater = Je || P;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(H, ue) {
    if (typeof H != "object" && typeof H != "function" && H != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, H, ue, "setState");
  }, G.prototype.forceUpdate = function(H) {
    this.updater.enqueueForceUpdate(this, H, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = G.prototype;
  function K(H, ue, Je) {
    this.props = H, this.context = ue, this.refs = F, this.updater = Je || P;
  }
  var ne = K.prototype = new Z();
  ne.constructor = K, $(ne, G.prototype), ne.isPureReactComponent = !0;
  var ce = Array.isArray, re = Object.prototype.hasOwnProperty, we = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(H, ue, Je) {
    var et, yt = {}, vt = null, Te = null;
    if (ue != null) for (et in ue.ref !== void 0 && (Te = ue.ref), ue.key !== void 0 && (vt = "" + ue.key), ue) re.call(ue, et) && !pe.hasOwnProperty(et) && (yt[et] = ue[et]);
    var Ie = arguments.length - 2;
    if (Ie === 1) yt.children = Je;
    else if (1 < Ie) {
      for (var tt = Array(Ie), lt = 0; lt < Ie; lt++) tt[lt] = arguments[lt + 2];
      yt.children = tt;
    }
    if (H && H.defaultProps) for (et in Ie = H.defaultProps, Ie) yt[et] === void 0 && (yt[et] = Ie[et]);
    return { $$typeof: u, type: H, key: vt, ref: Te, props: yt, _owner: we.current };
  }
  function st(H, ue) {
    return { $$typeof: u, type: H.type, key: ue, ref: H.ref, props: H.props, _owner: H._owner };
  }
  function Qe(H) {
    return typeof H == "object" && H !== null && H.$$typeof === u;
  }
  function De(H) {
    var ue = { "=": "=0", ":": "=2" };
    return "$" + H.replace(/[=:]/g, function(Je) {
      return ue[Je];
    });
  }
  var ot = /\/+/g;
  function ke(H, ue) {
    return typeof H == "object" && H !== null && H.key != null ? De("" + H.key) : ue.toString(36);
  }
  function Ae(H, ue, Je, et, yt) {
    var vt = typeof H;
    (vt === "undefined" || vt === "boolean") && (H = null);
    var Te = !1;
    if (H === null) Te = !0;
    else switch (vt) {
      case "string":
      case "number":
        Te = !0;
        break;
      case "object":
        switch (H.$$typeof) {
          case u:
          case f:
            Te = !0;
        }
    }
    if (Te) return Te = H, yt = yt(Te), H = et === "" ? "." + ke(Te, 0) : et, ce(yt) ? (Je = "", H != null && (Je = H.replace(ot, "$&/") + "/"), Ae(yt, ue, Je, "", function(lt) {
      return lt;
    })) : yt != null && (Qe(yt) && (yt = st(yt, Je + (!yt.key || Te && Te.key === yt.key ? "" : ("" + yt.key).replace(ot, "$&/") + "/") + H)), ue.push(yt)), 1;
    if (Te = 0, et = et === "" ? "." : et + ":", ce(H)) for (var Ie = 0; Ie < H.length; Ie++) {
      vt = H[Ie];
      var tt = et + ke(vt, Ie);
      Te += Ae(vt, ue, Je, tt, yt);
    }
    else if (tt = z(H), typeof tt == "function") for (H = tt.call(H), Ie = 0; !(vt = H.next()).done; ) vt = vt.value, tt = et + ke(vt, Ie++), Te += Ae(vt, ue, Je, tt, yt);
    else if (vt === "object") throw ue = String(H), Error("Objects are not valid as a React child (found: " + (ue === "[object Object]" ? "object with keys {" + Object.keys(H).join(", ") + "}" : ue) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function de(H, ue, Je) {
    if (H == null) return H;
    var et = [], yt = 0;
    return Ae(H, et, "", "", function(vt) {
      return ue.call(Je, vt, yt++);
    }), et;
  }
  function Le(H) {
    if (H._status === -1) {
      var ue = H._result;
      ue = ue(), ue.then(function(Je) {
        (H._status === 0 || H._status === -1) && (H._status = 1, H._result = Je);
      }, function(Je) {
        (H._status === 0 || H._status === -1) && (H._status = 2, H._result = Je);
      }), H._status === -1 && (H._status = 0, H._result = ue);
    }
    if (H._status === 1) return H._result.default;
    throw H._result;
  }
  var se = { current: null }, le = { transition: null }, ge = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: le, ReactCurrentOwner: we };
  function be() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ft.Children = { map: de, forEach: function(H, ue, Je) {
    de(H, function() {
      ue.apply(this, arguments);
    }, Je);
  }, count: function(H) {
    var ue = 0;
    return de(H, function() {
      ue++;
    }), ue;
  }, toArray: function(H) {
    return de(H, function(ue) {
      return ue;
    }) || [];
  }, only: function(H) {
    if (!Qe(H)) throw Error("React.Children.only expected to receive a single React element child.");
    return H;
  } }, Ft.Component = G, Ft.Fragment = d, Ft.Profiler = E, Ft.PureComponent = K, Ft.StrictMode = g, Ft.Suspense = T, Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, Ft.act = be, Ft.cloneElement = function(H, ue, Je) {
    if (H == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + H + ".");
    var et = $({}, H.props), yt = H.key, vt = H.ref, Te = H._owner;
    if (ue != null) {
      if (ue.ref !== void 0 && (vt = ue.ref, Te = we.current), ue.key !== void 0 && (yt = "" + ue.key), H.type && H.type.defaultProps) var Ie = H.type.defaultProps;
      for (tt in ue) re.call(ue, tt) && !pe.hasOwnProperty(tt) && (et[tt] = ue[tt] === void 0 && Ie !== void 0 ? Ie[tt] : ue[tt]);
    }
    var tt = arguments.length - 2;
    if (tt === 1) et.children = Je;
    else if (1 < tt) {
      Ie = Array(tt);
      for (var lt = 0; lt < tt; lt++) Ie[lt] = arguments[lt + 2];
      et.children = Ie;
    }
    return { $$typeof: u, type: H.type, key: yt, ref: vt, props: et, _owner: Te };
  }, Ft.createContext = function(H) {
    return H = { $$typeof: m, _currentValue: H, _currentValue2: H, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, H.Provider = { $$typeof: w, _context: H }, H.Consumer = H;
  }, Ft.createElement = He, Ft.createFactory = function(H) {
    var ue = He.bind(null, H);
    return ue.type = H, ue;
  }, Ft.createRef = function() {
    return { current: null };
  }, Ft.forwardRef = function(H) {
    return { $$typeof: R, render: H };
  }, Ft.isValidElement = Qe, Ft.lazy = function(H) {
    return { $$typeof: B, _payload: { _status: -1, _result: H }, _init: Le };
  }, Ft.memo = function(H, ue) {
    return { $$typeof: k, type: H, compare: ue === void 0 ? null : ue };
  }, Ft.startTransition = function(H) {
    var ue = le.transition;
    le.transition = {};
    try {
      H();
    } finally {
      le.transition = ue;
    }
  }, Ft.unstable_act = be, Ft.useCallback = function(H, ue) {
    return se.current.useCallback(H, ue);
  }, Ft.useContext = function(H) {
    return se.current.useContext(H);
  }, Ft.useDebugValue = function() {
  }, Ft.useDeferredValue = function(H) {
    return se.current.useDeferredValue(H);
  }, Ft.useEffect = function(H, ue) {
    return se.current.useEffect(H, ue);
  }, Ft.useId = function() {
    return se.current.useId();
  }, Ft.useImperativeHandle = function(H, ue, Je) {
    return se.current.useImperativeHandle(H, ue, Je);
  }, Ft.useInsertionEffect = function(H, ue) {
    return se.current.useInsertionEffect(H, ue);
  }, Ft.useLayoutEffect = function(H, ue) {
    return se.current.useLayoutEffect(H, ue);
  }, Ft.useMemo = function(H, ue) {
    return se.current.useMemo(H, ue);
  }, Ft.useReducer = function(H, ue, Je) {
    return se.current.useReducer(H, ue, Je);
  }, Ft.useRef = function(H) {
    return se.current.useRef(H);
  }, Ft.useState = function(H) {
    return se.current.useState(H);
  }, Ft.useSyncExternalStore = function(H, ue, Je) {
    return se.current.useSyncExternalStore(H, ue, Je);
  }, Ft.useTransition = function() {
    return se.current.useTransition();
  }, Ft.version = "18.3.1", Ft;
}
var zv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
zv.exports;
var l1;
function BM() {
  return l1 || (l1 = 1, function(u, f) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", g = Symbol.for("react.element"), E = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), k = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Z = "@@iterator";
      function K(x) {
        if (x === null || typeof x != "object")
          return null;
        var M = G && x[G] || x[Z];
        return typeof M == "function" ? M : null;
      }
      var ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {
        transition: null
      }, re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, we = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {}, He = null;
      function st(x) {
        He = x;
      }
      pe.setExtraStackFrame = function(x) {
        He = x;
      }, pe.getCurrentStack = null, pe.getStackAddendum = function() {
        var x = "";
        He && (x += He);
        var M = pe.getCurrentStack;
        return M && (x += M() || ""), x;
      };
      var Qe = !1, De = !1, ot = !1, ke = !1, Ae = !1, de = {
        ReactCurrentDispatcher: ne,
        ReactCurrentBatchConfig: ce,
        ReactCurrentOwner: we
      };
      de.ReactDebugCurrentFrame = pe, de.ReactCurrentActQueue = re;
      function Le(x) {
        {
          for (var M = arguments.length, J = new Array(M > 1 ? M - 1 : 0), ae = 1; ae < M; ae++)
            J[ae - 1] = arguments[ae];
          le("warn", x, J);
        }
      }
      function se(x) {
        {
          for (var M = arguments.length, J = new Array(M > 1 ? M - 1 : 0), ae = 1; ae < M; ae++)
            J[ae - 1] = arguments[ae];
          le("error", x, J);
        }
      }
      function le(x, M, J) {
        {
          var ae = de.ReactDebugCurrentFrame, Ce = ae.getStackAddendum();
          Ce !== "" && (M += "%s", J = J.concat([Ce]));
          var ft = J.map(function(Me) {
            return String(Me);
          });
          ft.unshift("Warning: " + M), Function.prototype.apply.call(console[x], console, ft);
        }
      }
      var ge = {};
      function be(x, M) {
        {
          var J = x.constructor, ae = J && (J.displayName || J.name) || "ReactClass", Ce = ae + "." + M;
          if (ge[Ce])
            return;
          se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", M, ae), ge[Ce] = !0;
        }
      }
      var H = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(x) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(x, M, J) {
          be(x, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(x, M, J, ae) {
          be(x, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(x, M, J, ae) {
          be(x, "setState");
        }
      }, ue = Object.assign, Je = {};
      Object.freeze(Je);
      function et(x, M, J) {
        this.props = x, this.context = M, this.refs = Je, this.updater = J || H;
      }
      et.prototype.isReactComponent = {}, et.prototype.setState = function(x, M) {
        if (typeof x != "object" && typeof x != "function" && x != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, x, M, "setState");
      }, et.prototype.forceUpdate = function(x) {
        this.updater.enqueueForceUpdate(this, x, "forceUpdate");
      };
      {
        var yt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, vt = function(x, M) {
          Object.defineProperty(et.prototype, x, {
            get: function() {
              Le("%s(...) is deprecated in plain JavaScript React classes. %s", M[0], M[1]);
            }
          });
        };
        for (var Te in yt)
          yt.hasOwnProperty(Te) && vt(Te, yt[Te]);
      }
      function Ie() {
      }
      Ie.prototype = et.prototype;
      function tt(x, M, J) {
        this.props = x, this.context = M, this.refs = Je, this.updater = J || H;
      }
      var lt = tt.prototype = new Ie();
      lt.constructor = tt, ue(lt, et.prototype), lt.isPureReactComponent = !0;
      function Ct() {
        var x = {
          current: null
        };
        return Object.seal(x), x;
      }
      var Rt = Array.isArray;
      function At(x) {
        return Rt(x);
      }
      function rn(x) {
        {
          var M = typeof Symbol == "function" && Symbol.toStringTag, J = M && x[Symbol.toStringTag] || x.constructor.name || "Object";
          return J;
        }
      }
      function yn(x) {
        try {
          return vn(x), !1;
        } catch {
          return !0;
        }
      }
      function vn(x) {
        return "" + x;
      }
      function sn(x) {
        if (yn(x))
          return se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(x)), vn(x);
      }
      function Rr(x, M, J) {
        var ae = x.displayName;
        if (ae)
          return ae;
        var Ce = M.displayName || M.name || "";
        return Ce !== "" ? J + "(" + Ce + ")" : J;
      }
      function Xn(x) {
        return x.displayName || "Context";
      }
      function rr(x) {
        if (x == null)
          return null;
        if (typeof x.tag == "number" && se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
          return x.displayName || x.name || null;
        if (typeof x == "string")
          return x;
        switch (x) {
          case w:
            return "Fragment";
          case E:
            return "Portal";
          case R:
            return "Profiler";
          case m:
            return "StrictMode";
          case A:
            return "Suspense";
          case z:
            return "SuspenseList";
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case k:
              var M = x;
              return Xn(M) + ".Consumer";
            case T:
              var J = x;
              return Xn(J._context) + ".Provider";
            case B:
              return Rr(x, x.render, "ForwardRef");
            case P:
              var ae = x.displayName || null;
              return ae !== null ? ae : rr(x.type) || "Memo";
            case $: {
              var Ce = x, ft = Ce._payload, Me = Ce._init;
              try {
                return rr(Me(ft));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tr = Object.prototype.hasOwnProperty, Zr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, _r, Sa, pr;
      pr = {};
      function Jr(x) {
        if (Tr.call(x, "ref")) {
          var M = Object.getOwnPropertyDescriptor(x, "ref").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return x.ref !== void 0;
      }
      function Tn(x) {
        if (Tr.call(x, "key")) {
          var M = Object.getOwnPropertyDescriptor(x, "key").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return x.key !== void 0;
      }
      function Pr(x, M) {
        var J = function() {
          _r || (_r = !0, se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: J,
          configurable: !0
        });
      }
      function Ci(x, M) {
        var J = function() {
          Sa || (Sa = !0, se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: J,
          configurable: !0
        });
      }
      function xa(x) {
        if (typeof x.ref == "string" && we.current && x.__self && we.current.stateNode !== x.__self) {
          var M = rr(we.current.type);
          pr[M] || (se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M, x.ref), pr[M] = !0);
        }
      }
      var _e = function(x, M, J, ae, Ce, ft, Me) {
        var ut = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: x,
          key: M,
          ref: J,
          props: Me,
          // Record the component responsible for creating this element.
          _owner: ft
        };
        return ut._store = {}, Object.defineProperty(ut._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ut, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ae
        }), Object.defineProperty(ut, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ce
        }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
      };
      function nt(x, M, J) {
        var ae, Ce = {}, ft = null, Me = null, ut = null, Ot = null;
        if (M != null) {
          Jr(M) && (Me = M.ref, xa(M)), Tn(M) && (sn(M.key), ft = "" + M.key), ut = M.__self === void 0 ? null : M.__self, Ot = M.__source === void 0 ? null : M.__source;
          for (ae in M)
            Tr.call(M, ae) && !Zr.hasOwnProperty(ae) && (Ce[ae] = M[ae]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          Ce.children = J;
        else if (It > 1) {
          for (var fn = Array(It), on = 0; on < It; on++)
            fn[on] = arguments[on + 2];
          Object.freeze && Object.freeze(fn), Ce.children = fn;
        }
        if (x && x.defaultProps) {
          var dn = x.defaultProps;
          for (ae in dn)
            Ce[ae] === void 0 && (Ce[ae] = dn[ae]);
        }
        if (ft || Me) {
          var hn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ft && Pr(Ce, hn), Me && Ci(Ce, hn);
        }
        return _e(x, ft, Me, ut, Ot, we.current, Ce);
      }
      function _t(x, M) {
        var J = _e(x.type, M, x.ref, x._self, x._source, x._owner, x.props);
        return J;
      }
      function Kt(x, M, J) {
        if (x == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
        var ae, Ce = ue({}, x.props), ft = x.key, Me = x.ref, ut = x._self, Ot = x._source, It = x._owner;
        if (M != null) {
          Jr(M) && (Me = M.ref, It = we.current), Tn(M) && (sn(M.key), ft = "" + M.key);
          var fn;
          x.type && x.type.defaultProps && (fn = x.type.defaultProps);
          for (ae in M)
            Tr.call(M, ae) && !Zr.hasOwnProperty(ae) && (M[ae] === void 0 && fn !== void 0 ? Ce[ae] = fn[ae] : Ce[ae] = M[ae]);
        }
        var on = arguments.length - 2;
        if (on === 1)
          Ce.children = J;
        else if (on > 1) {
          for (var dn = Array(on), hn = 0; hn < on; hn++)
            dn[hn] = arguments[hn + 2];
          Ce.children = dn;
        }
        return _e(x.type, ft, Me, ut, Ot, It, Ce);
      }
      function qt(x) {
        return typeof x == "object" && x !== null && x.$$typeof === g;
      }
      var Un = ".", _n = ":";
      function kr(x) {
        var M = /[=:]/g, J = {
          "=": "=0",
          ":": "=2"
        }, ae = x.replace(M, function(Ce) {
          return J[Ce];
        });
        return "$" + ae;
      }
      var an = !1, jr = /\/+/g;
      function Zt(x) {
        return x.replace(jr, "$&/");
      }
      function Jt(x, M) {
        return typeof x == "object" && x !== null && x.key != null ? (sn(x.key), kr("" + x.key)) : M.toString(36);
      }
      function ui(x, M, J, ae, Ce) {
        var ft = typeof x;
        (ft === "undefined" || ft === "boolean") && (x = null);
        var Me = !1;
        if (x === null)
          Me = !0;
        else
          switch (ft) {
            case "string":
            case "number":
              Me = !0;
              break;
            case "object":
              switch (x.$$typeof) {
                case g:
                case E:
                  Me = !0;
              }
          }
        if (Me) {
          var ut = x, Ot = Ce(ut), It = ae === "" ? Un + Jt(ut, 0) : ae;
          if (At(Ot)) {
            var fn = "";
            It != null && (fn = Zt(It) + "/"), ui(Ot, M, fn, "", function(Ld) {
              return Ld;
            });
          } else Ot != null && (qt(Ot) && (Ot.key && (!ut || ut.key !== Ot.key) && sn(Ot.key), Ot = _t(
            Ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            J + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ot.key && (!ut || ut.key !== Ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Zt("" + Ot.key) + "/"
            ) : "") + It
          )), M.push(Ot));
          return 1;
        }
        var on, dn, hn = 0, Ut = ae === "" ? Un : ae + _n;
        if (At(x))
          for (var Qi = 0; Qi < x.length; Qi++)
            on = x[Qi], dn = Ut + Jt(on, Qi), hn += ui(on, M, J, dn, Ce);
        else {
          var fu = K(x);
          if (typeof fu == "function") {
            var ws = x;
            fu === ws.entries && (an || Le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), an = !0);
            for (var Ad = fu.call(ws), di, bs = 0; !(di = Ad.next()).done; )
              on = di.value, dn = Ut + Jt(on, bs++), hn += ui(on, M, J, dn, Ce);
          } else if (ft === "object") {
            var Rs = String(x);
            throw new Error("Objects are not valid as a React child (found: " + (Rs === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : Rs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return hn;
      }
      function za(x, M, J) {
        if (x == null)
          return x;
        var ae = [], Ce = 0;
        return ui(x, ae, "", "", function(ft) {
          return M.call(J, ft, Ce++);
        }), ae;
      }
      function Co(x) {
        var M = 0;
        return za(x, function() {
          M++;
        }), M;
      }
      function sl(x, M, J) {
        za(x, function() {
          M.apply(this, arguments);
        }, J);
      }
      function eu(x) {
        return za(x, function(M) {
          return M;
        }) || [];
      }
      function Bi(x) {
        if (!qt(x))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return x;
      }
      function wo(x) {
        var M = {
          $$typeof: k,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: x,
          _currentValue2: x,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        M.Provider = {
          $$typeof: T,
          _context: M
        };
        var J = !1, ae = !1, Ce = !1;
        {
          var ft = {
            $$typeof: k,
            _context: M
          };
          Object.defineProperties(ft, {
            Provider: {
              get: function() {
                return ae || (ae = !0, se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), M.Provider;
              },
              set: function(Me) {
                M.Provider = Me;
              }
            },
            _currentValue: {
              get: function() {
                return M._currentValue;
              },
              set: function(Me) {
                M._currentValue = Me;
              }
            },
            _currentValue2: {
              get: function() {
                return M._currentValue2;
              },
              set: function(Me) {
                M._currentValue2 = Me;
              }
            },
            _threadCount: {
              get: function() {
                return M._threadCount;
              },
              set: function(Me) {
                M._threadCount = Me;
              }
            },
            Consumer: {
              get: function() {
                return J || (J = !0, se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), M.Consumer;
              }
            },
            displayName: {
              get: function() {
                return M.displayName;
              },
              set: function(Me) {
                Ce || (Le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Me), Ce = !0);
              }
            }
          }), M.Consumer = ft;
        }
        return M._currentRenderer = null, M._currentRenderer2 = null, M;
      }
      var Ea = -1, wi = 0, Ca = 1, si = 2;
      function zr(x) {
        if (x._status === Ea) {
          var M = x._result, J = M();
          if (J.then(function(ft) {
            if (x._status === wi || x._status === Ea) {
              var Me = x;
              Me._status = Ca, Me._result = ft;
            }
          }, function(ft) {
            if (x._status === wi || x._status === Ea) {
              var Me = x;
              Me._status = si, Me._result = ft;
            }
          }), x._status === Ea) {
            var ae = x;
            ae._status = wi, ae._result = J;
          }
        }
        if (x._status === Ca) {
          var Ce = x._result;
          return Ce === void 0 && se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ce), "default" in Ce || se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ce), Ce.default;
        } else
          throw x._result;
      }
      function wa(x) {
        var M = {
          // We use these fields to store the result.
          _status: Ea,
          _result: x
        }, J = {
          $$typeof: $,
          _payload: M,
          _init: zr
        };
        {
          var ae, Ce;
          Object.defineProperties(J, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ae;
              },
              set: function(ft) {
                se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ae = ft, Object.defineProperty(J, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ce;
              },
              set: function(ft) {
                se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ce = ft, Object.defineProperty(J, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return J;
      }
      function bi(x) {
        x != null && x.$$typeof === P ? se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof x != "function" ? se("forwardRef requires a render function but was given %s.", x === null ? "null" : typeof x) : x.length !== 0 && x.length !== 2 && se("forwardRef render functions accept exactly two parameters: props and ref. %s", x.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), x != null && (x.defaultProps != null || x.propTypes != null) && se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var M = {
          $$typeof: B,
          render: x
        };
        {
          var J;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(ae) {
              J = ae, !x.name && !x.displayName && (x.displayName = ae);
            }
          });
        }
        return M;
      }
      var Ri;
      Ri = Symbol.for("react.module.reference");
      function L(x) {
        return !!(typeof x == "string" || typeof x == "function" || x === w || x === R || Ae || x === m || x === A || x === z || ke || x === F || Qe || De || ot || typeof x == "object" && x !== null && (x.$$typeof === $ || x.$$typeof === P || x.$$typeof === T || x.$$typeof === k || x.$$typeof === B || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        x.$$typeof === Ri || x.getModuleId !== void 0));
      }
      function me(x, M) {
        L(x) || se("memo: The first argument must be a component. Instead received: %s", x === null ? "null" : typeof x);
        var J = {
          $$typeof: P,
          type: x,
          compare: M === void 0 ? null : M
        };
        {
          var ae;
          Object.defineProperty(J, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ae;
            },
            set: function(Ce) {
              ae = Ce, !x.name && !x.displayName && (x.displayName = Ce);
            }
          });
        }
        return J;
      }
      function Ee() {
        var x = ne.current;
        return x === null && se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), x;
      }
      function Xe(x) {
        var M = Ee();
        if (x._context !== void 0) {
          var J = x._context;
          J.Consumer === x ? se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : J.Provider === x && se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return M.useContext(x);
      }
      function Mt(x) {
        var M = Ee();
        return M.useState(x);
      }
      function jt(x, M, J) {
        var ae = Ee();
        return ae.useReducer(x, M, J);
      }
      function ct(x) {
        var M = Ee();
        return M.useRef(x);
      }
      function kt(x, M) {
        var J = Ee();
        return J.useEffect(x, M);
      }
      function Wn(x, M) {
        var J = Ee();
        return J.useInsertionEffect(x, M);
      }
      function cn(x, M) {
        var J = Ee();
        return J.useLayoutEffect(x, M);
      }
      function gn(x, M) {
        var J = Ee();
        return J.useCallback(x, M);
      }
      function Dr(x, M) {
        var J = Ee();
        return J.useMemo(x, M);
      }
      function Ti(x, M, J) {
        var ae = Ee();
        return ae.useImperativeHandle(x, M, J);
      }
      function $t(x, M) {
        {
          var J = Ee();
          return J.useDebugValue(x, M);
        }
      }
      function ar() {
        var x = Ee();
        return x.useTransition();
      }
      function Ur(x) {
        var M = Ee();
        return M.useDeferredValue(x);
      }
      function Dt() {
        var x = Ee();
        return x.useId();
      }
      function Ua(x, M, J) {
        var ae = Ee();
        return ae.useSyncExternalStore(x, M, J);
      }
      var bo = 0, tu, Ro, ea, Ss, Fr, xs, Es;
      function _c() {
      }
      _c.__reactDisabledLog = !0;
      function nu() {
        {
          if (bo === 0) {
            tu = console.log, Ro = console.info, ea = console.warn, Ss = console.error, Fr = console.group, xs = console.groupCollapsed, Es = console.groupEnd;
            var x = {
              configurable: !0,
              enumerable: !0,
              value: _c,
              writable: !0
            };
            Object.defineProperties(console, {
              info: x,
              log: x,
              warn: x,
              error: x,
              group: x,
              groupCollapsed: x,
              groupEnd: x
            });
          }
          bo++;
        }
      }
      function To() {
        {
          if (bo--, bo === 0) {
            var x = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ue({}, x, {
                value: tu
              }),
              info: ue({}, x, {
                value: Ro
              }),
              warn: ue({}, x, {
                value: ea
              }),
              error: ue({}, x, {
                value: Ss
              }),
              group: ue({}, x, {
                value: Fr
              }),
              groupCollapsed: ue({}, x, {
                value: xs
              }),
              groupEnd: ue({}, x, {
                value: Es
              })
            });
          }
          bo < 0 && se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ci = de.ReactCurrentDispatcher, Hr;
      function _o(x, M, J) {
        {
          if (Hr === void 0)
            try {
              throw Error();
            } catch (Ce) {
              var ae = Ce.stack.trim().match(/\n( *(at )?)/);
              Hr = ae && ae[1] || "";
            }
          return `
` + Hr + x;
        }
      }
      var ko = !1, Do;
      {
        var ru = typeof WeakMap == "function" ? WeakMap : Map;
        Do = new ru();
      }
      function au(x, M) {
        if (!x || ko)
          return "";
        {
          var J = Do.get(x);
          if (J !== void 0)
            return J;
        }
        var ae;
        ko = !0;
        var Ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ft;
        ft = ci.current, ci.current = null, nu();
        try {
          if (M) {
            var Me = function() {
              throw Error();
            };
            if (Object.defineProperty(Me.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Me, []);
              } catch (Ut) {
                ae = Ut;
              }
              Reflect.construct(x, [], Me);
            } else {
              try {
                Me.call();
              } catch (Ut) {
                ae = Ut;
              }
              x.call(Me.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ut) {
              ae = Ut;
            }
            x();
          }
        } catch (Ut) {
          if (Ut && ae && typeof Ut.stack == "string") {
            for (var ut = Ut.stack.split(`
`), Ot = ae.stack.split(`
`), It = ut.length - 1, fn = Ot.length - 1; It >= 1 && fn >= 0 && ut[It] !== Ot[fn]; )
              fn--;
            for (; It >= 1 && fn >= 0; It--, fn--)
              if (ut[It] !== Ot[fn]) {
                if (It !== 1 || fn !== 1)
                  do
                    if (It--, fn--, fn < 0 || ut[It] !== Ot[fn]) {
                      var on = `
` + ut[It].replace(" at new ", " at ");
                      return x.displayName && on.includes("<anonymous>") && (on = on.replace("<anonymous>", x.displayName)), typeof x == "function" && Do.set(x, on), on;
                    }
                  while (It >= 1 && fn >= 0);
                break;
              }
          }
        } finally {
          ko = !1, ci.current = ft, To(), Error.prepareStackTrace = Ce;
        }
        var dn = x ? x.displayName || x.name : "", hn = dn ? _o(dn) : "";
        return typeof x == "function" && Do.set(x, hn), hn;
      }
      function $i(x, M, J) {
        return au(x, !1);
      }
      function Md(x) {
        var M = x.prototype;
        return !!(M && M.isReactComponent);
      }
      function _i(x, M, J) {
        if (x == null)
          return "";
        if (typeof x == "function")
          return au(x, Md(x));
        if (typeof x == "string")
          return _o(x);
        switch (x) {
          case A:
            return _o("Suspense");
          case z:
            return _o("SuspenseList");
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case B:
              return $i(x.render);
            case P:
              return _i(x.type, M, J);
            case $: {
              var ae = x, Ce = ae._payload, ft = ae._init;
              try {
                return _i(ft(Ce), M, J);
              } catch {
              }
            }
          }
        return "";
      }
      var Wt = {}, iu = de.ReactDebugCurrentFrame;
      function cl(x) {
        if (x) {
          var M = x._owner, J = _i(x.type, x._source, M ? M.type : null);
          iu.setExtraStackFrame(J);
        } else
          iu.setExtraStackFrame(null);
      }
      function ou(x, M, J, ae, Ce) {
        {
          var ft = Function.call.bind(Tr);
          for (var Me in x)
            if (ft(x, Me)) {
              var ut = void 0;
              try {
                if (typeof x[Me] != "function") {
                  var Ot = Error((ae || "React class") + ": " + J + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                ut = x[Me](M, Me, ae, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (It) {
                ut = It;
              }
              ut && !(ut instanceof Error) && (cl(Ce), se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", J, Me, typeof ut), cl(null)), ut instanceof Error && !(ut.message in Wt) && (Wt[ut.message] = !0, cl(Ce), se("Failed %s type: %s", J, ut.message), cl(null));
            }
        }
      }
      function zt(x) {
        if (x) {
          var M = x._owner, J = _i(x.type, x._source, M ? M.type : null);
          st(J);
        } else
          st(null);
      }
      var lu;
      lu = !1;
      function uu() {
        if (we.current) {
          var x = rr(we.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
      function xt(x) {
        if (x !== void 0) {
          var M = x.fileName.replace(/^.*[\\\/]/, ""), J = x.lineNumber;
          return `

Check your code at ` + M + ":" + J + ".";
        }
        return "";
      }
      function fl(x) {
        return x != null ? xt(x.__source) : "";
      }
      var kn = {};
      function ta(x) {
        var M = uu();
        if (!M) {
          var J = typeof x == "string" ? x : x.displayName || x.name;
          J && (M = `

Check the top-level render call using <` + J + ">.");
        }
        return M;
      }
      function Vr(x, M) {
        if (!(!x._store || x._store.validated || x.key != null)) {
          x._store.validated = !0;
          var J = ta(M);
          if (!kn[J]) {
            kn[J] = !0;
            var ae = "";
            x && x._owner && x._owner !== we.current && (ae = " It was passed a child from " + rr(x._owner.type) + "."), zt(x), se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, ae), zt(null);
          }
        }
      }
      function Oo(x, M) {
        if (typeof x == "object") {
          if (At(x))
            for (var J = 0; J < x.length; J++) {
              var ae = x[J];
              qt(ae) && Vr(ae, M);
            }
          else if (qt(x))
            x._store && (x._store.validated = !0);
          else if (x) {
            var Ce = K(x);
            if (typeof Ce == "function" && Ce !== x.entries)
              for (var ft = Ce.call(x), Me; !(Me = ft.next()).done; )
                qt(Me.value) && Vr(Me.value, M);
          }
        }
      }
      function An(x) {
        {
          var M = x.type;
          if (M == null || typeof M == "string")
            return;
          var J;
          if (typeof M == "function")
            J = M.propTypes;
          else if (typeof M == "object" && (M.$$typeof === B || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          M.$$typeof === P))
            J = M.propTypes;
          else
            return;
          if (J) {
            var ae = rr(M);
            ou(J, x.props, "prop", ae, x);
          } else if (M.PropTypes !== void 0 && !lu) {
            lu = !0;
            var Ce = rr(M);
            se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
          }
          typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function en(x) {
        {
          for (var M = Object.keys(x.props), J = 0; J < M.length; J++) {
            var ae = M[J];
            if (ae !== "children" && ae !== "key") {
              zt(x), se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), zt(null);
              break;
            }
          }
          x.ref !== null && (zt(x), se("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
        }
      }
      function kc(x, M, J) {
        var ae = L(x);
        if (!ae) {
          var Ce = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = fl(M);
          ft ? Ce += ft : Ce += uu();
          var Me;
          x === null ? Me = "null" : At(x) ? Me = "array" : x !== void 0 && x.$$typeof === g ? (Me = "<" + (rr(x.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : Me = typeof x, se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Me, Ce);
        }
        var ut = nt.apply(this, arguments);
        if (ut == null)
          return ut;
        if (ae)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            Oo(arguments[Ot], x);
        return x === w ? en(ut) : An(ut), ut;
      }
      var na = !1;
      function ir(x) {
        var M = kc.bind(null, x);
        return M.type = x, na || (na = !0, Le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(M, "type", {
          enumerable: !1,
          get: function() {
            return Le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: x
            }), x;
          }
        }), M;
      }
      function ki(x, M, J) {
        for (var ae = Kt.apply(this, arguments), Ce = 2; Ce < arguments.length; Ce++)
          Oo(arguments[Ce], ae.type);
        return An(ae), ae;
      }
      function Dc(x, M) {
        var J = ce.transition;
        ce.transition = {};
        var ae = ce.transition;
        ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          x();
        } finally {
          if (ce.transition = J, J === null && ae._updatedFibers) {
            var Ce = ae._updatedFibers.size;
            Ce > 10 && Le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ae._updatedFibers.clear();
          }
        }
      }
      var Wi = !1, No = null;
      function Oc(x) {
        if (No === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7), J = u && u[M];
            No = J.call(u, "timers").setImmediate;
          } catch {
            No = function(Ce) {
              Wi === !1 && (Wi = !0, typeof MessageChannel > "u" && se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ft = new MessageChannel();
              ft.port1.onmessage = Ce, ft.port2.postMessage(void 0);
            };
          }
        return No(x);
      }
      var Fa = 0, Mo = !1;
      function Yi(x) {
        {
          var M = Fa;
          Fa++, re.current === null && (re.current = []);
          var J = re.isBatchingLegacy, ae;
          try {
            if (re.isBatchingLegacy = !0, ae = x(), !J && re.didScheduleLegacyUpdate) {
              var Ce = re.current;
              Ce !== null && (re.didScheduleLegacyUpdate = !1, Lo(Ce));
            }
          } catch (dn) {
            throw Ha(M), dn;
          } finally {
            re.isBatchingLegacy = J;
          }
          if (ae !== null && typeof ae == "object" && typeof ae.then == "function") {
            var ft = ae, Me = !1, ut = {
              then: function(dn, hn) {
                Me = !0, ft.then(function(Ut) {
                  Ha(M), Fa === 0 ? su(Ut, dn, hn) : dn(Ut);
                }, function(Ut) {
                  Ha(M), hn(Ut);
                });
              }
            };
            return !Mo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Me || (Mo = !0, se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ut;
          } else {
            var Ot = ae;
            if (Ha(M), Fa === 0) {
              var It = re.current;
              It !== null && (Lo(It), re.current = null);
              var fn = {
                then: function(dn, hn) {
                  re.current === null ? (re.current = [], su(Ot, dn, hn)) : dn(Ot);
                }
              };
              return fn;
            } else {
              var on = {
                then: function(dn, hn) {
                  dn(Ot);
                }
              };
              return on;
            }
          }
        }
      }
      function Ha(x) {
        x !== Fa - 1 && se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Fa = x;
      }
      function su(x, M, J) {
        {
          var ae = re.current;
          if (ae !== null)
            try {
              Lo(ae), Oc(function() {
                ae.length === 0 ? (re.current = null, M(x)) : su(x, M, J);
              });
            } catch (Ce) {
              J(Ce);
            }
          else
            M(x);
        }
      }
      var Ao = !1;
      function Lo(x) {
        if (!Ao) {
          Ao = !0;
          var M = 0;
          try {
            for (; M < x.length; M++) {
              var J = x[M];
              do
                J = J(!0);
              while (J !== null);
            }
            x.length = 0;
          } catch (ae) {
            throw x = x.slice(M + 1), ae;
          } finally {
            Ao = !1;
          }
        }
      }
      var dl = kc, cu = ki, Cs = ir, fi = {
        map: za,
        forEach: sl,
        count: Co,
        toArray: eu,
        only: Bi
      };
      f.Children = fi, f.Component = et, f.Fragment = w, f.Profiler = R, f.PureComponent = tt, f.StrictMode = m, f.Suspense = A, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = de, f.act = Yi, f.cloneElement = cu, f.createContext = wo, f.createElement = dl, f.createFactory = Cs, f.createRef = Ct, f.forwardRef = bi, f.isValidElement = qt, f.lazy = wa, f.memo = me, f.startTransition = Dc, f.unstable_act = Yi, f.useCallback = gn, f.useContext = Xe, f.useDebugValue = $t, f.useDeferredValue = Ur, f.useEffect = kt, f.useId = Dt, f.useImperativeHandle = Ti, f.useInsertionEffect = Wn, f.useLayoutEffect = cn, f.useMemo = Dr, f.useReducer = jt, f.useRef = ct, f.useState = Mt, f.useSyncExternalStore = Ua, f.useTransition = ar, f.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(zv, zv.exports)), zv.exports;
}
process.env.NODE_ENV === "production" ? Bx.exports = IM() : Bx.exports = BM();
var N = Bx.exports;
const Mn = /* @__PURE__ */ B1(N), $M = /* @__PURE__ */ VM({
  __proto__: null,
  default: Mn
}, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1;
function WM() {
  if (u1) return Pv;
  u1 = 1;
  var u = N, f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, E = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(R, T, k) {
    var B, A = {}, z = null, P = null;
    k !== void 0 && (z = "" + k), T.key !== void 0 && (z = "" + T.key), T.ref !== void 0 && (P = T.ref);
    for (B in T) g.call(T, B) && !w.hasOwnProperty(B) && (A[B] = T[B]);
    if (R && R.defaultProps) for (B in T = R.defaultProps, T) A[B] === void 0 && (A[B] = T[B]);
    return { $$typeof: f, type: R, key: z, ref: P, props: A, _owner: E.current };
  }
  return Pv.Fragment = d, Pv.jsx = m, Pv.jsxs = m, Pv;
}
var jv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s1;
function YM() {
  return s1 || (s1 = 1, process.env.NODE_ENV !== "production" && function() {
    var u = N, f = Symbol.for("react.element"), d = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), R = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), $ = Symbol.iterator, F = "@@iterator";
    function G(L) {
      if (L === null || typeof L != "object")
        return null;
      var me = $ && L[$] || L[F];
      return typeof me == "function" ? me : null;
    }
    var Z = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(L) {
      {
        for (var me = arguments.length, Ee = new Array(me > 1 ? me - 1 : 0), Xe = 1; Xe < me; Xe++)
          Ee[Xe - 1] = arguments[Xe];
        ne("error", L, Ee);
      }
    }
    function ne(L, me, Ee) {
      {
        var Xe = Z.ReactDebugCurrentFrame, Mt = Xe.getStackAddendum();
        Mt !== "" && (me += "%s", Ee = Ee.concat([Mt]));
        var jt = Ee.map(function(ct) {
          return String(ct);
        });
        jt.unshift("Warning: " + me), Function.prototype.apply.call(console[L], console, jt);
      }
    }
    var ce = !1, re = !1, we = !1, pe = !1, He = !1, st;
    st = Symbol.for("react.module.reference");
    function Qe(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === g || L === w || He || L === E || L === k || L === B || pe || L === P || ce || re || we || typeof L == "object" && L !== null && (L.$$typeof === z || L.$$typeof === A || L.$$typeof === m || L.$$typeof === R || L.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === st || L.getModuleId !== void 0));
    }
    function De(L, me, Ee) {
      var Xe = L.displayName;
      if (Xe)
        return Xe;
      var Mt = me.displayName || me.name || "";
      return Mt !== "" ? Ee + "(" + Mt + ")" : Ee;
    }
    function ot(L) {
      return L.displayName || "Context";
    }
    function ke(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case g:
          return "Fragment";
        case d:
          return "Portal";
        case w:
          return "Profiler";
        case E:
          return "StrictMode";
        case k:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case R:
            var me = L;
            return ot(me) + ".Consumer";
          case m:
            var Ee = L;
            return ot(Ee._context) + ".Provider";
          case T:
            return De(L, L.render, "ForwardRef");
          case A:
            var Xe = L.displayName || null;
            return Xe !== null ? Xe : ke(L.type) || "Memo";
          case z: {
            var Mt = L, jt = Mt._payload, ct = Mt._init;
            try {
              return ke(ct(jt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ae = Object.assign, de = 0, Le, se, le, ge, be, H, ue;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function et() {
      {
        if (de === 0) {
          Le = console.log, se = console.info, le = console.warn, ge = console.error, be = console.group, H = console.groupCollapsed, ue = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: Je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        de++;
      }
    }
    function yt() {
      {
        if (de--, de === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ae({}, L, {
              value: Le
            }),
            info: Ae({}, L, {
              value: se
            }),
            warn: Ae({}, L, {
              value: le
            }),
            error: Ae({}, L, {
              value: ge
            }),
            group: Ae({}, L, {
              value: be
            }),
            groupCollapsed: Ae({}, L, {
              value: H
            }),
            groupEnd: Ae({}, L, {
              value: ue
            })
          });
        }
        de < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vt = Z.ReactCurrentDispatcher, Te;
    function Ie(L, me, Ee) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (Mt) {
            var Xe = Mt.stack.trim().match(/\n( *(at )?)/);
            Te = Xe && Xe[1] || "";
          }
        return `
` + Te + L;
      }
    }
    var tt = !1, lt;
    {
      var Ct = typeof WeakMap == "function" ? WeakMap : Map;
      lt = new Ct();
    }
    function Rt(L, me) {
      if (!L || tt)
        return "";
      {
        var Ee = lt.get(L);
        if (Ee !== void 0)
          return Ee;
      }
      var Xe;
      tt = !0;
      var Mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var jt;
      jt = vt.current, vt.current = null, et();
      try {
        if (me) {
          var ct = function() {
            throw Error();
          };
          if (Object.defineProperty(ct.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ct, []);
            } catch (ar) {
              Xe = ar;
            }
            Reflect.construct(L, [], ct);
          } else {
            try {
              ct.call();
            } catch (ar) {
              Xe = ar;
            }
            L.call(ct.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ar) {
            Xe = ar;
          }
          L();
        }
      } catch (ar) {
        if (ar && Xe && typeof ar.stack == "string") {
          for (var kt = ar.stack.split(`
`), Wn = Xe.stack.split(`
`), cn = kt.length - 1, gn = Wn.length - 1; cn >= 1 && gn >= 0 && kt[cn] !== Wn[gn]; )
            gn--;
          for (; cn >= 1 && gn >= 0; cn--, gn--)
            if (kt[cn] !== Wn[gn]) {
              if (cn !== 1 || gn !== 1)
                do
                  if (cn--, gn--, gn < 0 || kt[cn] !== Wn[gn]) {
                    var Dr = `
` + kt[cn].replace(" at new ", " at ");
                    return L.displayName && Dr.includes("<anonymous>") && (Dr = Dr.replace("<anonymous>", L.displayName)), typeof L == "function" && lt.set(L, Dr), Dr;
                  }
                while (cn >= 1 && gn >= 0);
              break;
            }
        }
      } finally {
        tt = !1, vt.current = jt, yt(), Error.prepareStackTrace = Mt;
      }
      var Ti = L ? L.displayName || L.name : "", $t = Ti ? Ie(Ti) : "";
      return typeof L == "function" && lt.set(L, $t), $t;
    }
    function At(L, me, Ee) {
      return Rt(L, !1);
    }
    function rn(L) {
      var me = L.prototype;
      return !!(me && me.isReactComponent);
    }
    function yn(L, me, Ee) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return Rt(L, rn(L));
      if (typeof L == "string")
        return Ie(L);
      switch (L) {
        case k:
          return Ie("Suspense");
        case B:
          return Ie("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case T:
            return At(L.render);
          case A:
            return yn(L.type, me, Ee);
          case z: {
            var Xe = L, Mt = Xe._payload, jt = Xe._init;
            try {
              return yn(jt(Mt), me, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var vn = Object.prototype.hasOwnProperty, sn = {}, Rr = Z.ReactDebugCurrentFrame;
    function Xn(L) {
      if (L) {
        var me = L._owner, Ee = yn(L.type, L._source, me ? me.type : null);
        Rr.setExtraStackFrame(Ee);
      } else
        Rr.setExtraStackFrame(null);
    }
    function rr(L, me, Ee, Xe, Mt) {
      {
        var jt = Function.call.bind(vn);
        for (var ct in L)
          if (jt(L, ct)) {
            var kt = void 0;
            try {
              if (typeof L[ct] != "function") {
                var Wn = Error((Xe || "React class") + ": " + Ee + " type `" + ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Wn.name = "Invariant Violation", Wn;
              }
              kt = L[ct](me, ct, Xe, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              kt = cn;
            }
            kt && !(kt instanceof Error) && (Xn(Mt), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Xe || "React class", Ee, ct, typeof kt), Xn(null)), kt instanceof Error && !(kt.message in sn) && (sn[kt.message] = !0, Xn(Mt), K("Failed %s type: %s", Ee, kt.message), Xn(null));
          }
      }
    }
    var Tr = Array.isArray;
    function Zr(L) {
      return Tr(L);
    }
    function _r(L) {
      {
        var me = typeof Symbol == "function" && Symbol.toStringTag, Ee = me && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return Ee;
      }
    }
    function Sa(L) {
      try {
        return pr(L), !1;
      } catch {
        return !0;
      }
    }
    function pr(L) {
      return "" + L;
    }
    function Jr(L) {
      if (Sa(L))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(L)), pr(L);
    }
    var Tn = Z.ReactCurrentOwner, Pr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ci, xa, _e;
    _e = {};
    function nt(L) {
      if (vn.call(L, "ref")) {
        var me = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (me && me.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function _t(L) {
      if (vn.call(L, "key")) {
        var me = Object.getOwnPropertyDescriptor(L, "key").get;
        if (me && me.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Kt(L, me) {
      if (typeof L.ref == "string" && Tn.current && me && Tn.current.stateNode !== me) {
        var Ee = ke(Tn.current.type);
        _e[Ee] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ke(Tn.current.type), L.ref), _e[Ee] = !0);
      }
    }
    function qt(L, me) {
      {
        var Ee = function() {
          Ci || (Ci = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
        };
        Ee.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function Un(L, me) {
      {
        var Ee = function() {
          xa || (xa = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
        };
        Ee.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var _n = function(L, me, Ee, Xe, Mt, jt, ct) {
      var kt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: L,
        key: me,
        ref: Ee,
        props: ct,
        // Record the component responsible for creating this element.
        _owner: jt
      };
      return kt._store = {}, Object.defineProperty(kt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(kt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.defineProperty(kt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Mt
      }), Object.freeze && (Object.freeze(kt.props), Object.freeze(kt)), kt;
    };
    function kr(L, me, Ee, Xe, Mt) {
      {
        var jt, ct = {}, kt = null, Wn = null;
        Ee !== void 0 && (Jr(Ee), kt = "" + Ee), _t(me) && (Jr(me.key), kt = "" + me.key), nt(me) && (Wn = me.ref, Kt(me, Mt));
        for (jt in me)
          vn.call(me, jt) && !Pr.hasOwnProperty(jt) && (ct[jt] = me[jt]);
        if (L && L.defaultProps) {
          var cn = L.defaultProps;
          for (jt in cn)
            ct[jt] === void 0 && (ct[jt] = cn[jt]);
        }
        if (kt || Wn) {
          var gn = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          kt && qt(ct, gn), Wn && Un(ct, gn);
        }
        return _n(L, kt, Wn, Mt, Xe, Tn.current, ct);
      }
    }
    var an = Z.ReactCurrentOwner, jr = Z.ReactDebugCurrentFrame;
    function Zt(L) {
      if (L) {
        var me = L._owner, Ee = yn(L.type, L._source, me ? me.type : null);
        jr.setExtraStackFrame(Ee);
      } else
        jr.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function ui(L) {
      return typeof L == "object" && L !== null && L.$$typeof === f;
    }
    function za() {
      {
        if (an.current) {
          var L = ke(an.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Co(L) {
      return "";
    }
    var sl = {};
    function eu(L) {
      {
        var me = za();
        if (!me) {
          var Ee = typeof L == "string" ? L : L.displayName || L.name;
          Ee && (me = `

Check the top-level render call using <` + Ee + ">.");
        }
        return me;
      }
    }
    function Bi(L, me) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var Ee = eu(me);
        if (sl[Ee])
          return;
        sl[Ee] = !0;
        var Xe = "";
        L && L._owner && L._owner !== an.current && (Xe = " It was passed a child from " + ke(L._owner.type) + "."), Zt(L), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Xe), Zt(null);
      }
    }
    function wo(L, me) {
      {
        if (typeof L != "object")
          return;
        if (Zr(L))
          for (var Ee = 0; Ee < L.length; Ee++) {
            var Xe = L[Ee];
            ui(Xe) && Bi(Xe, me);
          }
        else if (ui(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Mt = G(L);
          if (typeof Mt == "function" && Mt !== L.entries)
            for (var jt = Mt.call(L), ct; !(ct = jt.next()).done; )
              ui(ct.value) && Bi(ct.value, me);
        }
      }
    }
    function Ea(L) {
      {
        var me = L.type;
        if (me == null || typeof me == "string")
          return;
        var Ee;
        if (typeof me == "function")
          Ee = me.propTypes;
        else if (typeof me == "object" && (me.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        me.$$typeof === A))
          Ee = me.propTypes;
        else
          return;
        if (Ee) {
          var Xe = ke(me);
          rr(Ee, L.props, "prop", Xe, L);
        } else if (me.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var Mt = ke(me);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Mt || "Unknown");
        }
        typeof me.getDefaultProps == "function" && !me.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wi(L) {
      {
        for (var me = Object.keys(L.props), Ee = 0; Ee < me.length; Ee++) {
          var Xe = me[Ee];
          if (Xe !== "children" && Xe !== "key") {
            Zt(L), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Xe), Zt(null);
            break;
          }
        }
        L.ref !== null && (Zt(L), K("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
      }
    }
    var Ca = {};
    function si(L, me, Ee, Xe, Mt, jt) {
      {
        var ct = Qe(L);
        if (!ct) {
          var kt = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (kt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Wn = Co();
          Wn ? kt += Wn : kt += za();
          var cn;
          L === null ? cn = "null" : Zr(L) ? cn = "array" : L !== void 0 && L.$$typeof === f ? (cn = "<" + (ke(L.type) || "Unknown") + " />", kt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof L, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, kt);
        }
        var gn = kr(L, me, Ee, Mt, jt);
        if (gn == null)
          return gn;
        if (ct) {
          var Dr = me.children;
          if (Dr !== void 0)
            if (Xe)
              if (Zr(Dr)) {
                for (var Ti = 0; Ti < Dr.length; Ti++)
                  wo(Dr[Ti], L);
                Object.freeze && Object.freeze(Dr);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wo(Dr, L);
        }
        if (vn.call(me, "key")) {
          var $t = ke(L), ar = Object.keys(me).filter(function(Ua) {
            return Ua !== "key";
          }), Ur = ar.length > 0 ? "{key: someKey, " + ar.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ca[$t + Ur]) {
            var Dt = ar.length > 0 ? "{" + ar.join(": ..., ") + ": ...}" : "{}";
            K(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ur, $t, Dt, $t), Ca[$t + Ur] = !0;
          }
        }
        return L === g ? wi(gn) : Ea(gn), gn;
      }
    }
    function zr(L, me, Ee) {
      return si(L, me, Ee, !0);
    }
    function wa(L, me, Ee) {
      return si(L, me, Ee, !1);
    }
    var bi = wa, Ri = zr;
    jv.Fragment = g, jv.jsx = bi, jv.jsxs = Ri;
  }()), jv;
}
process.env.NODE_ENV === "production" ? Ix.exports = WM() : Ix.exports = YM();
var D = Ix.exports;
function ht(...u) {
  return DM(kM(u));
}
const c1 = (u) => {
  if (u) {
    if (u === "contact")
      return "Contact Number";
    if (u === "imei")
      return "Serial/IMEI No.";
    if (u === "sno" || u === "product" || u === "plan_type" || u === "purchase_date")
      return null;
  } else return "";
  return u.split("_").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
}, Yy = _M(
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
), Ed = N.forwardRef(
  ({ className: u, variant: f, size: d, asChild: g = !1, ...E }, w) => {
    const m = g ? Rd : "button";
    return /* @__PURE__ */ D.jsx(m, { className: ht(Yy({ variant: f, size: d, className: u })), ref: w, ...E });
  }
);
Ed.displayName = "Button";
const $1 = N.forwardRef(
  ({ className: u, type: f, ...d }, g) => /* @__PURE__ */ D.jsx(
    "input",
    {
      type: f,
      className: ht(
        "flex h-12 md:h-9 w-full rounded-md  border border-[##ADADAD] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        u
      ),
      ref: g,
      ...d
    }
  )
);
$1.displayName = "Input";
const W1 = ({ className: u, ...f }) => /* @__PURE__ */ D.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: ht("mx-auto flex w-full justify-center", u),
    ...f
  }
);
W1.displayName = "Pagination";
const Y1 = N.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("ul", { ref: d, className: ht("flex flex-row items-center gap-1", u), ...f })
);
Y1.displayName = "PaginationContent";
const Vy = N.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("li", { ref: d, className: ht("", u), ...f })
);
Vy.displayName = "PaginationItem";
const Q1 = ({ className: u, isActive: f, size: d = "icon", ...g }) => /* @__PURE__ */ D.jsx(
  "a",
  {
    "aria-current": f ? "page" : void 0,
    className: ht(
      Yy({
        variant: f ? "outline" : "ghost",
        size: d
      }),
      u
    ),
    ...g
  }
);
Q1.displayName = "PaginationLink";
var $x = { exports: {} }, oi = {}, Ay = { exports: {} }, Mx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f1;
function QM() {
  return f1 || (f1 = 1, function(u) {
    function f(le, ge) {
      var be = le.length;
      le.push(ge);
      e: for (; 0 < be; ) {
        var H = be - 1 >>> 1, ue = le[H];
        if (0 < E(ue, ge)) le[H] = ge, le[be] = ue, be = H;
        else break e;
      }
    }
    function d(le) {
      return le.length === 0 ? null : le[0];
    }
    function g(le) {
      if (le.length === 0) return null;
      var ge = le[0], be = le.pop();
      if (be !== ge) {
        le[0] = be;
        e: for (var H = 0, ue = le.length, Je = ue >>> 1; H < Je; ) {
          var et = 2 * (H + 1) - 1, yt = le[et], vt = et + 1, Te = le[vt];
          if (0 > E(yt, be)) vt < ue && 0 > E(Te, yt) ? (le[H] = Te, le[vt] = be, H = vt) : (le[H] = yt, le[et] = be, H = et);
          else if (vt < ue && 0 > E(Te, be)) le[H] = Te, le[vt] = be, H = vt;
          else break e;
        }
      }
      return ge;
    }
    function E(le, ge) {
      var be = le.sortIndex - ge.sortIndex;
      return be !== 0 ? be : le.id - ge.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      u.unstable_now = function() {
        return w.now();
      };
    } else {
      var m = Date, R = m.now();
      u.unstable_now = function() {
        return m.now() - R;
      };
    }
    var T = [], k = [], B = 1, A = null, z = 3, P = !1, $ = !1, F = !1, G = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ne(le) {
      for (var ge = d(k); ge !== null; ) {
        if (ge.callback === null) g(k);
        else if (ge.startTime <= le) g(k), ge.sortIndex = ge.expirationTime, f(T, ge);
        else break;
        ge = d(k);
      }
    }
    function ce(le) {
      if (F = !1, ne(le), !$) if (d(T) !== null) $ = !0, Le(re);
      else {
        var ge = d(k);
        ge !== null && se(ce, ge.startTime - le);
      }
    }
    function re(le, ge) {
      $ = !1, F && (F = !1, Z(He), He = -1), P = !0;
      var be = z;
      try {
        for (ne(ge), A = d(T); A !== null && (!(A.expirationTime > ge) || le && !De()); ) {
          var H = A.callback;
          if (typeof H == "function") {
            A.callback = null, z = A.priorityLevel;
            var ue = H(A.expirationTime <= ge);
            ge = u.unstable_now(), typeof ue == "function" ? A.callback = ue : A === d(T) && g(T), ne(ge);
          } else g(T);
          A = d(T);
        }
        if (A !== null) var Je = !0;
        else {
          var et = d(k);
          et !== null && se(ce, et.startTime - ge), Je = !1;
        }
        return Je;
      } finally {
        A = null, z = be, P = !1;
      }
    }
    var we = !1, pe = null, He = -1, st = 5, Qe = -1;
    function De() {
      return !(u.unstable_now() - Qe < st);
    }
    function ot() {
      if (pe !== null) {
        var le = u.unstable_now();
        Qe = le;
        var ge = !0;
        try {
          ge = pe(!0, le);
        } finally {
          ge ? ke() : (we = !1, pe = null);
        }
      } else we = !1;
    }
    var ke;
    if (typeof K == "function") ke = function() {
      K(ot);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), de = Ae.port2;
      Ae.port1.onmessage = ot, ke = function() {
        de.postMessage(null);
      };
    } else ke = function() {
      G(ot, 0);
    };
    function Le(le) {
      pe = le, we || (we = !0, ke());
    }
    function se(le, ge) {
      He = G(function() {
        le(u.unstable_now());
      }, ge);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(le) {
      le.callback = null;
    }, u.unstable_continueExecution = function() {
      $ || P || ($ = !0, Le(re));
    }, u.unstable_forceFrameRate = function(le) {
      0 > le || 125 < le ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : st = 0 < le ? Math.floor(1e3 / le) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, u.unstable_getFirstCallbackNode = function() {
      return d(T);
    }, u.unstable_next = function(le) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var ge = 3;
          break;
        default:
          ge = z;
      }
      var be = z;
      z = ge;
      try {
        return le();
      } finally {
        z = be;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(le, ge) {
      switch (le) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          le = 3;
      }
      var be = z;
      z = le;
      try {
        return ge();
      } finally {
        z = be;
      }
    }, u.unstable_scheduleCallback = function(le, ge, be) {
      var H = u.unstable_now();
      switch (typeof be == "object" && be !== null ? (be = be.delay, be = typeof be == "number" && 0 < be ? H + be : H) : be = H, le) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = be + ue, le = { id: B++, callback: ge, priorityLevel: le, startTime: be, expirationTime: ue, sortIndex: -1 }, be > H ? (le.sortIndex = be, f(k, le), d(T) === null && le === d(k) && (F ? (Z(He), He = -1) : F = !0, se(ce, be - H))) : (le.sortIndex = ue, f(T, le), $ || P || ($ = !0, Le(re))), le;
    }, u.unstable_shouldYield = De, u.unstable_wrapCallback = function(le) {
      var ge = z;
      return function() {
        var be = z;
        z = ge;
        try {
          return le.apply(this, arguments);
        } finally {
          z = be;
        }
      };
    };
  }(Mx)), Mx;
}
var Ax = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d1;
function GM() {
  return d1 || (d1 = 1, function(u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, d = !1, g = 5;
      function E(_e, nt) {
        var _t = _e.length;
        _e.push(nt), R(_e, nt, _t);
      }
      function w(_e) {
        return _e.length === 0 ? null : _e[0];
      }
      function m(_e) {
        if (_e.length === 0)
          return null;
        var nt = _e[0], _t = _e.pop();
        return _t !== nt && (_e[0] = _t, T(_e, _t, 0)), nt;
      }
      function R(_e, nt, _t) {
        for (var Kt = _t; Kt > 0; ) {
          var qt = Kt - 1 >>> 1, Un = _e[qt];
          if (k(Un, nt) > 0)
            _e[qt] = nt, _e[Kt] = Un, Kt = qt;
          else
            return;
        }
      }
      function T(_e, nt, _t) {
        for (var Kt = _t, qt = _e.length, Un = qt >>> 1; Kt < Un; ) {
          var _n = (Kt + 1) * 2 - 1, kr = _e[_n], an = _n + 1, jr = _e[an];
          if (k(kr, nt) < 0)
            an < qt && k(jr, kr) < 0 ? (_e[Kt] = jr, _e[an] = nt, Kt = an) : (_e[Kt] = kr, _e[_n] = nt, Kt = _n);
          else if (an < qt && k(jr, nt) < 0)
            _e[Kt] = jr, _e[an] = nt, Kt = an;
          else
            return;
        }
      }
      function k(_e, nt) {
        var _t = _e.sortIndex - nt.sortIndex;
        return _t !== 0 ? _t : _e.id - nt.id;
      }
      var B = 1, A = 2, z = 3, P = 4, $ = 5;
      function F(_e, nt) {
      }
      var G = typeof performance == "object" && typeof performance.now == "function";
      if (G) {
        var Z = performance;
        u.unstable_now = function() {
          return Z.now();
        };
      } else {
        var K = Date, ne = K.now();
        u.unstable_now = function() {
          return K.now() - ne;
        };
      }
      var ce = 1073741823, re = -1, we = 250, pe = 5e3, He = 1e4, st = ce, Qe = [], De = [], ot = 1, ke = null, Ae = z, de = !1, Le = !1, se = !1, le = typeof setTimeout == "function" ? setTimeout : null, ge = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function H(_e) {
        for (var nt = w(De); nt !== null; ) {
          if (nt.callback === null)
            m(De);
          else if (nt.startTime <= _e)
            m(De), nt.sortIndex = nt.expirationTime, E(Qe, nt);
          else
            return;
          nt = w(De);
        }
      }
      function ue(_e) {
        if (se = !1, H(_e), !Le)
          if (w(Qe) !== null)
            Le = !0, Jr(Je);
          else {
            var nt = w(De);
            nt !== null && Tn(ue, nt.startTime - _e);
          }
      }
      function Je(_e, nt) {
        Le = !1, se && (se = !1, Pr()), de = !0;
        var _t = Ae;
        try {
          var Kt;
          if (!d) return et(_e, nt);
        } finally {
          ke = null, Ae = _t, de = !1;
        }
      }
      function et(_e, nt) {
        var _t = nt;
        for (H(_t), ke = w(Qe); ke !== null && !f && !(ke.expirationTime > _t && (!_e || Xn())); ) {
          var Kt = ke.callback;
          if (typeof Kt == "function") {
            ke.callback = null, Ae = ke.priorityLevel;
            var qt = ke.expirationTime <= _t, Un = Kt(qt);
            _t = u.unstable_now(), typeof Un == "function" ? ke.callback = Un : ke === w(Qe) && m(Qe), H(_t);
          } else
            m(Qe);
          ke = w(Qe);
        }
        if (ke !== null)
          return !0;
        var _n = w(De);
        return _n !== null && Tn(ue, _n.startTime - _t), !1;
      }
      function yt(_e, nt) {
        switch (_e) {
          case B:
          case A:
          case z:
          case P:
          case $:
            break;
          default:
            _e = z;
        }
        var _t = Ae;
        Ae = _e;
        try {
          return nt();
        } finally {
          Ae = _t;
        }
      }
      function vt(_e) {
        var nt;
        switch (Ae) {
          case B:
          case A:
          case z:
            nt = z;
            break;
          default:
            nt = Ae;
            break;
        }
        var _t = Ae;
        Ae = nt;
        try {
          return _e();
        } finally {
          Ae = _t;
        }
      }
      function Te(_e) {
        var nt = Ae;
        return function() {
          var _t = Ae;
          Ae = nt;
          try {
            return _e.apply(this, arguments);
          } finally {
            Ae = _t;
          }
        };
      }
      function Ie(_e, nt, _t) {
        var Kt = u.unstable_now(), qt;
        if (typeof _t == "object" && _t !== null) {
          var Un = _t.delay;
          typeof Un == "number" && Un > 0 ? qt = Kt + Un : qt = Kt;
        } else
          qt = Kt;
        var _n;
        switch (_e) {
          case B:
            _n = re;
            break;
          case A:
            _n = we;
            break;
          case $:
            _n = st;
            break;
          case P:
            _n = He;
            break;
          case z:
          default:
            _n = pe;
            break;
        }
        var kr = qt + _n, an = {
          id: ot++,
          callback: nt,
          priorityLevel: _e,
          startTime: qt,
          expirationTime: kr,
          sortIndex: -1
        };
        return qt > Kt ? (an.sortIndex = qt, E(De, an), w(Qe) === null && an === w(De) && (se ? Pr() : se = !0, Tn(ue, qt - Kt))) : (an.sortIndex = kr, E(Qe, an), !Le && !de && (Le = !0, Jr(Je))), an;
      }
      function tt() {
      }
      function lt() {
        !Le && !de && (Le = !0, Jr(Je));
      }
      function Ct() {
        return w(Qe);
      }
      function Rt(_e) {
        _e.callback = null;
      }
      function At() {
        return Ae;
      }
      var rn = !1, yn = null, vn = -1, sn = g, Rr = -1;
      function Xn() {
        var _e = u.unstable_now() - Rr;
        return !(_e < sn);
      }
      function rr() {
      }
      function Tr(_e) {
        if (_e < 0 || _e > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        _e > 0 ? sn = Math.floor(1e3 / _e) : sn = g;
      }
      var Zr = function() {
        if (yn !== null) {
          var _e = u.unstable_now();
          Rr = _e;
          var nt = !0, _t = !0;
          try {
            _t = yn(nt, _e);
          } finally {
            _t ? _r() : (rn = !1, yn = null);
          }
        } else
          rn = !1;
      }, _r;
      if (typeof be == "function")
        _r = function() {
          be(Zr);
        };
      else if (typeof MessageChannel < "u") {
        var Sa = new MessageChannel(), pr = Sa.port2;
        Sa.port1.onmessage = Zr, _r = function() {
          pr.postMessage(null);
        };
      } else
        _r = function() {
          le(Zr, 0);
        };
      function Jr(_e) {
        yn = _e, rn || (rn = !0, _r());
      }
      function Tn(_e, nt) {
        vn = le(function() {
          _e(u.unstable_now());
        }, nt);
      }
      function Pr() {
        ge(vn), vn = -1;
      }
      var Ci = rr, xa = null;
      u.unstable_IdlePriority = $, u.unstable_ImmediatePriority = B, u.unstable_LowPriority = P, u.unstable_NormalPriority = z, u.unstable_Profiling = xa, u.unstable_UserBlockingPriority = A, u.unstable_cancelCallback = Rt, u.unstable_continueExecution = lt, u.unstable_forceFrameRate = Tr, u.unstable_getCurrentPriorityLevel = At, u.unstable_getFirstCallbackNode = Ct, u.unstable_next = vt, u.unstable_pauseExecution = tt, u.unstable_requestPaint = Ci, u.unstable_runWithPriority = yt, u.unstable_scheduleCallback = Ie, u.unstable_shouldYield = Xn, u.unstable_wrapCallback = Te, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ax)), Ax;
}
var p1;
function G1() {
  return p1 || (p1 = 1, process.env.NODE_ENV === "production" ? Ay.exports = QM() : Ay.exports = GM()), Ay.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1;
function KM() {
  if (v1) return oi;
  v1 = 1;
  var u = N, f = G1();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = /* @__PURE__ */ new Set(), E = {};
  function w(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (E[n] = r, n = 0; n < r.length; n++) g.add(r[n]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, A = {};
  function z(n) {
    return T.call(A, n) ? !0 : T.call(B, n) ? !1 : k.test(n) ? A[n] = !0 : (B[n] = !0, !1);
  }
  function P(n, r, o, s) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function $(n, r, o, s) {
    if (r === null || typeof r > "u" || P(n, r, o, s)) return !0;
    if (s) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function F(n, r, o, s, p, h, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    G[n] = new F(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    G[r] = new F(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    G[n] = new F(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    G[n] = new F(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    G[n] = new F(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    G[n] = new F(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    G[n] = new F(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    G[n] = new F(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    G[n] = new F(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Z = /[\-:]([a-z])/g;
  function K(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Z,
      K
    );
    G[r] = new F(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Z, K);
    G[r] = new F(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Z, K);
    G[r] = new F(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    G[n] = new F(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    G[n] = new F(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ne(n, r, o, s) {
    var p = G.hasOwnProperty(r) ? G[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && ($(r, o, p, s) && (o = null), s || p === null ? z(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var ce = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, re = Symbol.for("react.element"), we = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), Qe = Symbol.for("react.provider"), De = Symbol.for("react.context"), ot = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), le = Symbol.iterator;
  function ge(n) {
    return n === null || typeof n != "object" ? null : (n = le && n[le] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var be = Object.assign, H;
  function ue(n) {
    if (H === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      H = r && r[1] || "";
    }
    return `
` + H + n;
  }
  var Je = !1;
  function et(n, r) {
    if (!n || Je) return "";
    Je = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (ee) {
          var s = ee;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (ee) {
          s = ee;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (ee) {
          s = ee;
        }
        n();
      }
    } catch (ee) {
      if (ee && s && typeof ee.stack == "string") {
        for (var p = ee.stack.split(`
`), h = s.stack.split(`
`), C = p.length - 1, O = h.length - 1; 1 <= C && 0 <= O && p[C] !== h[O]; ) O--;
        for (; 1 <= C && 0 <= O; C--, O--) if (p[C] !== h[O]) {
          if (C !== 1 || O !== 1)
            do
              if (C--, O--, 0 > O || p[C] !== h[O]) {
                var j = `
` + p[C].replace(" at new ", " at ");
                return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
              }
            while (1 <= C && 0 <= O);
          break;
        }
      }
    } finally {
      Je = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ue(n) : "";
  }
  function yt(n) {
    switch (n.tag) {
      case 5:
        return ue(n.type);
      case 16:
        return ue("Lazy");
      case 13:
        return ue("Suspense");
      case 19:
        return ue("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = et(n.type, !1), n;
      case 11:
        return n = et(n.type.render, !1), n;
      case 1:
        return n = et(n.type, !0), n;
      default:
        return "";
    }
  }
  function vt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case pe:
        return "Fragment";
      case we:
        return "Portal";
      case st:
        return "Profiler";
      case He:
        return "StrictMode";
      case ke:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case De:
        return (n.displayName || "Context") + ".Consumer";
      case Qe:
        return (n._context.displayName || "Context") + ".Provider";
      case ot:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case de:
        return r = n.displayName || null, r !== null ? r : vt(n.type) || "Memo";
      case Le:
        r = n._payload, n = n._init;
        try {
          return vt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Te(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return vt(r);
      case 8:
        return r === He ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ie(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function tt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function lt(n) {
    var r = tt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(C) {
        s = "" + C, h.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(C) {
        s = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ct(n) {
    n._valueTracker || (n._valueTracker = lt(n));
  }
  function Rt(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), s = "";
    return n && (s = tt(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function At(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rn(n, r) {
    var o = r.checked;
    return be({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function yn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = Ie(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function vn(n, r) {
    r = r.checked, r != null && ne(n, "checked", r, !1);
  }
  function sn(n, r) {
    vn(n, r);
    var o = Ie(r.value), s = r.type;
    if (o != null) s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Xn(n, r.type, o) : r.hasOwnProperty("defaultValue") && Xn(n, r.type, Ie(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Rr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Xn(n, r, o) {
    (r !== "number" || At(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var rr = Array.isArray;
  function Tr(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++) r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++) p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Ie(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Zr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return be({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function _r(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(d(92));
        if (rr(o)) {
          if (1 < o.length) throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Ie(o) };
  }
  function Sa(n, r) {
    var o = Ie(r.value), s = Ie(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function pr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Jr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Tn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Jr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Pr, Ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Pr = Pr || document.createElement("div"), Pr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Pr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function xa(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var _e = {
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
    strokeWidth: !0
  }, nt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_e).forEach(function(n) {
    nt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), _e[r] = _e[n];
    });
  });
  function _t(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || _e.hasOwnProperty(n) && _e[n] ? ("" + r).trim() : r + "px";
  }
  function Kt(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var s = o.indexOf("--") === 0, p = _t(o, r[o], s);
      o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
    }
  }
  var qt = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Un(n, r) {
    if (r) {
      if (qt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var kr = null;
  function an(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var jr = null, Zt = null, Jt = null;
  function ui(n) {
    if (n = js(n)) {
      if (typeof jr != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = at(r), jr(n.stateNode, n.type, r));
    }
  }
  function za(n) {
    Zt ? Jt ? Jt.push(n) : Jt = [n] : Zt = n;
  }
  function Co() {
    if (Zt) {
      var n = Zt, r = Jt;
      if (Jt = Zt = null, ui(n), r) for (n = 0; n < r.length; n++) ui(r[n]);
    }
  }
  function sl(n, r) {
    return n(r);
  }
  function eu() {
  }
  var Bi = !1;
  function wo(n, r, o) {
    if (Bi) return n(r, o);
    Bi = !0;
    try {
      return sl(n, r, o);
    } finally {
      Bi = !1, (Zt !== null || Jt !== null) && (eu(), Co());
    }
  }
  function Ea(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var s = at(o);
    if (s === null) return null;
    o = s[r];
    e: switch (r) {
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
        (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(d(231, r, typeof o));
    return o;
  }
  var wi = !1;
  if (R) try {
    var Ca = {};
    Object.defineProperty(Ca, "passive", { get: function() {
      wi = !0;
    } }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
  } catch {
    wi = !1;
  }
  function si(n, r, o, s, p, h, C, O, j) {
    var ee = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, ee);
    } catch (ye) {
      this.onError(ye);
    }
  }
  var zr = !1, wa = null, bi = !1, Ri = null, L = { onError: function(n) {
    zr = !0, wa = n;
  } };
  function me(n, r, o, s, p, h, C, O, j) {
    zr = !1, wa = null, si.apply(L, arguments);
  }
  function Ee(n, r, o, s, p, h, C, O, j) {
    if (me.apply(this, arguments), zr) {
      if (zr) {
        var ee = wa;
        zr = !1, wa = null;
      } else throw Error(d(198));
      bi || (bi = !0, Ri = ee);
    }
  }
  function Xe(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function jt(n) {
    if (Xe(n) !== n) throw Error(d(188));
  }
  function ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Xe(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null) break;
      var h = p.alternate;
      if (h === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === h.child) {
        for (h = p.child; h; ) {
          if (h === o) return jt(p), n;
          if (h === s) return jt(p), r;
          h = h.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== s.return) o = p, s = h;
      else {
        for (var C = !1, O = p.child; O; ) {
          if (O === o) {
            C = !0, o = p, s = h;
            break;
          }
          if (O === s) {
            C = !0, s = p, o = h;
            break;
          }
          O = O.sibling;
        }
        if (!C) {
          for (O = h.child; O; ) {
            if (O === o) {
              C = !0, o = h, s = p;
              break;
            }
            if (O === s) {
              C = !0, s = h, o = p;
              break;
            }
            O = O.sibling;
          }
          if (!C) throw Error(d(189));
        }
      }
      if (o.alternate !== s) throw Error(d(190));
    }
    if (o.tag !== 3) throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function kt(n) {
    return n = ct(n), n !== null ? Wn(n) : null;
  }
  function Wn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Wn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var cn = f.unstable_scheduleCallback, gn = f.unstable_cancelCallback, Dr = f.unstable_shouldYield, Ti = f.unstable_requestPaint, $t = f.unstable_now, ar = f.unstable_getCurrentPriorityLevel, Ur = f.unstable_ImmediatePriority, Dt = f.unstable_UserBlockingPriority, Ua = f.unstable_NormalPriority, bo = f.unstable_LowPriority, tu = f.unstable_IdlePriority, Ro = null, ea = null;
  function Ss(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function") try {
      ea.onCommitFiberRoot(Ro, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Fr = Math.clz32 ? Math.clz32 : _c, xs = Math.log, Es = Math.LN2;
  function _c(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (xs(n) / Es | 0) | 0;
  }
  var nu = 64, To = 4194304;
  function ci(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Hr(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var s = 0, p = n.suspendedLanes, h = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var O = C & ~p;
      O !== 0 ? s = ci(O) : (h &= C, h !== 0 && (s = ci(h)));
    } else C = o & ~p, C !== 0 ? s = ci(C) : h !== 0 && (s = ci(h));
    if (s === 0) return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, h = r & -r, p >= h || p === 16 && (h & 4194240) !== 0)) return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= s; 0 < r; ) o = 31 - Fr(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function _o(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function ko(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - Fr(h), O = 1 << C, j = p[C];
      j === -1 ? (!(O & o) || O & s) && (p[C] = _o(O, r)) : j <= r && (n.expiredLanes |= O), h &= ~O;
    }
  }
  function Do(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ru() {
    var n = nu;
    return nu <<= 1, !(nu & 4194240) && (nu = 64), n;
  }
  function au(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function $i(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Fr(r), n[r] = o;
  }
  function Md(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - Fr(o), h = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~h;
    }
  }
  function _i(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Fr(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var Wt = 0;
  function iu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cl, ou, zt, lu, uu, xt = !1, fl = [], kn = null, ta = null, Vr = null, Oo = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), en = [], kc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        Vr = null;
        break;
      case "pointerover":
      case "pointerout":
        Oo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        An.delete(r.pointerId);
    }
  }
  function ir(n, r, o, s, p, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: h, targetContainers: [p] }, r !== null && (r = js(r), r !== null && ou(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function ki(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return kn = ir(kn, n, r, o, s, p), !0;
      case "dragenter":
        return ta = ir(ta, n, r, o, s, p), !0;
      case "mouseover":
        return Vr = ir(Vr, n, r, o, s, p), !0;
      case "pointerover":
        var h = p.pointerId;
        return Oo.set(h, ir(Oo.get(h) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return h = p.pointerId, An.set(h, ir(An.get(h) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function Dc(n) {
    var r = Ia(n.target);
    if (r !== null) {
      var o = Xe(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Mt(o), r !== null) {
            n.blockedOn = r, uu(n.priority, function() {
              zt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Wi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = cu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        kr = s, o.target.dispatchEvent(s), kr = null;
      } else return r = js(o), r !== null && ou(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function No(n, r, o) {
    Wi(n) && o.delete(r);
  }
  function Oc() {
    xt = !1, kn !== null && Wi(kn) && (kn = null), ta !== null && Wi(ta) && (ta = null), Vr !== null && Wi(Vr) && (Vr = null), Oo.forEach(No), An.forEach(No);
  }
  function Fa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, xt || (xt = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Oc)));
  }
  function Mo(n) {
    function r(p) {
      return Fa(p, n);
    }
    if (0 < fl.length) {
      Fa(fl[0], n);
      for (var o = 1; o < fl.length; o++) {
        var s = fl[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (kn !== null && Fa(kn, n), ta !== null && Fa(ta, n), Vr !== null && Fa(Vr, n), Oo.forEach(r), An.forEach(r), o = 0; o < en.length; o++) s = en[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < en.length && (o = en[0], o.blockedOn === null); ) Dc(o), o.blockedOn === null && en.shift();
  }
  var Yi = ce.ReactCurrentBatchConfig, Ha = !0;
  function su(n, r, o, s) {
    var p = Wt, h = Yi.transition;
    Yi.transition = null;
    try {
      Wt = 1, Lo(n, r, o, s);
    } finally {
      Wt = p, Yi.transition = h;
    }
  }
  function Ao(n, r, o, s) {
    var p = Wt, h = Yi.transition;
    Yi.transition = null;
    try {
      Wt = 4, Lo(n, r, o, s);
    } finally {
      Wt = p, Yi.transition = h;
    }
  }
  function Lo(n, r, o, s) {
    if (Ha) {
      var p = cu(n, r, o, s);
      if (p === null) Fc(n, r, s, dl, o), na(n, s);
      else if (ki(p, n, r, o, s)) s.stopPropagation();
      else if (na(n, s), r & 4 && -1 < kc.indexOf(n)) {
        for (; p !== null; ) {
          var h = js(p);
          if (h !== null && cl(h), h = cu(n, r, o, s), h === null && Fc(n, r, s, dl, o), h === p) break;
          p = h;
        }
        p !== null && s.stopPropagation();
      } else Fc(n, r, s, null, o);
    }
  }
  var dl = null;
  function cu(n, r, o, s) {
    if (dl = null, n = an(s), n = Ia(n), n !== null) if (r = Xe(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Mt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return dl = n, null;
  }
  function Cs(n) {
    switch (n) {
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
        switch (ar()) {
          case Ur:
            return 1;
          case Dt:
            return 4;
          case Ua:
          case bo:
            return 16;
          case tu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fi = null, x = null, M = null;
  function J() {
    if (M) return M;
    var n, r = x, o = r.length, s, p = "value" in fi ? fi.value : fi.textContent, h = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++) ;
    var C = o - n;
    for (s = 1; s <= C && r[o - s] === p[h - s]; s++) ;
    return M = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function ae(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ce() {
    return !0;
  }
  function ft() {
    return !1;
  }
  function Me(n) {
    function r(o, s, p, h, C) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var O in n) n.hasOwnProperty(O) && (o = n[O], this[O] = o ? o(h) : h[O]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Ce : ft, this.isPropagationStopped = ft, this;
    }
    return be(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Ce);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Ce);
    }, persist: function() {
    }, isPersistent: Ce }), r;
  }
  var ut = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ot = Me(ut), It = be({}, ut, { view: 0, detail: 0 }), fn = Me(It), on, dn, hn, Ut = be({}, It, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== hn && (hn && n.type === "mousemove" ? (on = n.screenX - hn.screenX, dn = n.screenY - hn.screenY) : dn = on = 0, hn = n), on);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : dn;
  } }), Qi = Me(Ut), fu = be({}, Ut, { dataTransfer: 0 }), ws = Me(fu), Ad = be({}, It, { relatedTarget: 0 }), di = Me(Ad), bs = be({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Rs = Me(bs), Ld = be({}, ut, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), sg = Me(Ld), cg = be({}, ut, { data: 0 }), Pd = Me(cg), jd = {
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
    MozPrintableKey: "Unidentified"
  }, $v = {
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
    224: "Meta"
  }, Wv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Wv[n]) ? !!r[n] : !1;
  }
  function zd() {
    return Yv;
  }
  var Gi = be({}, It, { key: function(n) {
    if (n.key) {
      var r = jd[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = ae(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? $v[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(n) {
    return n.type === "keypress" ? ae(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ae(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), fg = Me(Gi), Ud = be({}, Ut, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nc = Me(Ud), Fd = be({}, It, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), dg = Me(Fd), Mc = be({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qv = Me(Mc), ra = be({}, Ut, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ki = Me(ra), Yn = [9, 13, 27, 32], pi = R && "CompositionEvent" in window, pl = null;
  R && "documentMode" in document && (pl = document.documentMode);
  var Ac = R && "TextEvent" in window && !pl, Gv = R && (!pi || pl && 8 < pl && 11 >= pl), du = " ", Kv = !1;
  function Xv(n, r) {
    switch (n) {
      case "keyup":
        return Yn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Lc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var pu = !1;
  function pg(n, r) {
    switch (n) {
      case "compositionend":
        return Lc(r);
      case "keypress":
        return r.which !== 32 ? null : (Kv = !0, du);
      case "textInput":
        return n = r.data, n === du && Kv ? null : n;
      default:
        return null;
    }
  }
  function vg(n, r) {
    if (pu) return n === "compositionend" || !pi && Xv(n, r) ? (n = J(), M = x = fi = null, pu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Gv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var qv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qv[n.type] : r === "textarea";
  }
  function Jv(n, r, o, s) {
    za(s), r = As(r, "onChange"), 0 < r.length && (o = new Ot("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var Ts = null, vu = null;
  function hu(n) {
    Uc(n, 0);
  }
  function mu(n) {
    var r = gu(n);
    if (Rt(r)) return n;
  }
  function eh(n, r) {
    if (n === "change") return r;
  }
  var Hd = !1;
  if (R) {
    var Vd;
    if (R) {
      var Id = "oninput" in document;
      if (!Id) {
        var th = document.createElement("div");
        th.setAttribute("oninput", "return;"), Id = typeof th.oninput == "function";
      }
      Vd = Id;
    } else Vd = !1;
    Hd = Vd && (!document.documentMode || 9 < document.documentMode);
  }
  function nh() {
    Ts && (Ts.detachEvent("onpropertychange", rh), vu = Ts = null);
  }
  function rh(n) {
    if (n.propertyName === "value" && mu(vu)) {
      var r = [];
      Jv(r, vu, n, an(n)), wo(hu, r);
    }
  }
  function hg(n, r, o) {
    n === "focusin" ? (nh(), Ts = r, vu = o, Ts.attachEvent("onpropertychange", rh)) : n === "focusout" && nh();
  }
  function mg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return mu(vu);
  }
  function yg(n, r) {
    if (n === "click") return mu(r);
  }
  function ah(n, r) {
    if (n === "input" || n === "change") return mu(r);
  }
  function gg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Va = typeof Object.is == "function" ? Object.is : gg;
  function _s(n, r) {
    if (Va(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length) return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!T.call(r, p) || !Va(n[p], r[p])) return !1;
    }
    return !0;
  }
  function ih(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function oh(n, r) {
    var o = ih(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r) return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = ih(o);
    }
  }
  function lh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? lh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Pc() {
    for (var n = window, r = At(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = At(n.document);
    }
    return r;
  }
  function Xi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function jc(n) {
    var r = Pc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && lh(o.ownerDocument.documentElement, o)) {
      if (s !== null && Xi(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, h = Math.min(s.start, p);
          s = s.end === void 0 ? h : Math.min(s.end, p), !n.extend && h > s && (p = s, s = h, h = p), p = oh(o, h);
          var C = oh(
            o,
            s
          );
          p && C && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), h > s ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var uh = R && "documentMode" in document && 11 >= document.documentMode, vi = null, Bd = null, ks = null, $d = !1;
  function sh(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    $d || vi == null || vi !== At(s) || (s = vi, "selectionStart" in s && Xi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ks && _s(ks, s) || (ks = s, s = As(Bd, "onSelect"), 0 < s.length && (r = new Ot("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = vi)));
  }
  function zc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var vl = { animationend: zc("Animation", "AnimationEnd"), animationiteration: zc("Animation", "AnimationIteration"), animationstart: zc("Animation", "AnimationStart"), transitionend: zc("Transition", "TransitionEnd") }, Wd = {}, Yd = {};
  R && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete vl.animationend.animation, delete vl.animationiteration.animation, delete vl.animationstart.animation), "TransitionEvent" in window || delete vl.transitionend.transition);
  function or(n) {
    if (Wd[n]) return Wd[n];
    if (!vl[n]) return n;
    var r = vl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Yd) return Wd[n] = r[o];
    return n;
  }
  var Qd = or("animationend"), ch = or("animationiteration"), fh = or("animationstart"), dh = or("transitionend"), ph = /* @__PURE__ */ new Map(), vh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function qi(n, r) {
    ph.set(n, r), w(r, [n]);
  }
  for (var Ds = 0; Ds < vh.length; Ds++) {
    var hl = vh[Ds], Sg = hl.toLowerCase(), Os = hl[0].toUpperCase() + hl.slice(1);
    qi(Sg, "on" + Os);
  }
  qi(Qd, "onAnimationEnd"), qi(ch, "onAnimationIteration"), qi(fh, "onAnimationStart"), qi("dblclick", "onDoubleClick"), qi("focusin", "onFocus"), qi("focusout", "onBlur"), qi(dh, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));
  function hh(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, Ee(s, r, void 0, n), n.currentTarget = null;
  }
  function Uc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r) for (var C = s.length - 1; 0 <= C; C--) {
          var O = s[C], j = O.instance, ee = O.currentTarget;
          if (O = O.listener, j !== h && p.isPropagationStopped()) break e;
          hh(p, O, ee), h = j;
        }
        else for (C = 0; C < s.length; C++) {
          if (O = s[C], j = O.instance, ee = O.currentTarget, O = O.listener, j !== h && p.isPropagationStopped()) break e;
          hh(p, O, ee), h = j;
        }
      }
    }
    if (bi) throw n = Ri, bi = !1, Ri = null, n;
  }
  function pn(n, r) {
    var o = r[ep];
    o === void 0 && (o = r[ep] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (mh(r, n, 2, !1), o.add(s));
  }
  function Po(n, r, o) {
    var s = 0;
    r && (s |= 4), mh(o, n, s, r);
  }
  var Zi = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[Zi]) {
      n[Zi] = !0, g.forEach(function(o) {
        o !== "selectionchange" && (xg.has(o) || Po(o, !1, n), Po(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Zi] || (r[Zi] = !0, Po("selectionchange", !1, r));
    }
  }
  function mh(n, r, o, s) {
    switch (Cs(r)) {
      case 1:
        var p = su;
        break;
      case 4:
        p = Ao;
        break;
      default:
        p = Lo;
    }
    o = p.bind(null, r, o, n), p = void 0, !wi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function Fc(n, r, o, s, p) {
    var h = s;
    if (!(r & 1) && !(r & 2) && s !== null) e: for (; ; ) {
      if (s === null) return;
      var C = s.tag;
      if (C === 3 || C === 4) {
        var O = s.stateNode.containerInfo;
        if (O === p || O.nodeType === 8 && O.parentNode === p) break;
        if (C === 4) for (C = s.return; C !== null; ) {
          var j = C.tag;
          if ((j === 3 || j === 4) && (j = C.stateNode.containerInfo, j === p || j.nodeType === 8 && j.parentNode === p)) return;
          C = C.return;
        }
        for (; O !== null; ) {
          if (C = Ia(O), C === null) return;
          if (j = C.tag, j === 5 || j === 6) {
            s = h = C;
            continue e;
          }
          O = O.parentNode;
        }
      }
      s = s.return;
    }
    wo(function() {
      var ee = h, ye = an(o), Se = [];
      e: {
        var he = ph.get(n);
        if (he !== void 0) {
          var ze = Ot, Be = n;
          switch (n) {
            case "keypress":
              if (ae(o) === 0) break e;
            case "keydown":
            case "keyup":
              ze = fg;
              break;
            case "focusin":
              Be = "focus", ze = di;
              break;
            case "focusout":
              Be = "blur", ze = di;
              break;
            case "beforeblur":
            case "afterblur":
              ze = di;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ze = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ze = ws;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ze = dg;
              break;
            case Qd:
            case ch:
            case fh:
              ze = Rs;
              break;
            case dh:
              ze = Qv;
              break;
            case "scroll":
              ze = fn;
              break;
            case "wheel":
              ze = Ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              ze = sg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ze = Nc;
          }
          var Ye = (r & 4) !== 0, Vn = !Ye && n === "scroll", W = Ye ? he !== null ? he + "Capture" : null : he;
          Ye = [];
          for (var V = ee, X; V !== null; ) {
            X = V;
            var Re = X.stateNode;
            if (X.tag === 5 && Re !== null && (X = Re, W !== null && (Re = Ea(V, W), Re != null && Ye.push(Ms(V, Re, X)))), Vn) break;
            V = V.return;
          }
          0 < Ye.length && (he = new ze(he, Be, null, o, ye), Se.push({ event: he, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (he = n === "mouseover" || n === "pointerover", ze = n === "mouseout" || n === "pointerout", he && o !== kr && (Be = o.relatedTarget || o.fromElement) && (Ia(Be) || Be[Ji])) break e;
          if ((ze || he) && (he = ye.window === ye ? ye : (he = ye.ownerDocument) ? he.defaultView || he.parentWindow : window, ze ? (Be = o.relatedTarget || o.toElement, ze = ee, Be = Be ? Ia(Be) : null, Be !== null && (Vn = Xe(Be), Be !== Vn || Be.tag !== 5 && Be.tag !== 6) && (Be = null)) : (ze = null, Be = ee), ze !== Be)) {
            if (Ye = Qi, Re = "onMouseLeave", W = "onMouseEnter", V = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = Nc, Re = "onPointerLeave", W = "onPointerEnter", V = "pointer"), Vn = ze == null ? he : gu(ze), X = Be == null ? he : gu(Be), he = new Ye(Re, V + "leave", ze, o, ye), he.target = Vn, he.relatedTarget = X, Re = null, Ia(ye) === ee && (Ye = new Ye(W, V + "enter", Be, o, ye), Ye.target = X, Ye.relatedTarget = Vn, Re = Ye), Vn = Re, ze && Be) t: {
              for (Ye = ze, W = Be, V = 0, X = Ye; X; X = ml(X)) V++;
              for (X = 0, Re = W; Re; Re = ml(Re)) X++;
              for (; 0 < V - X; ) Ye = ml(Ye), V--;
              for (; 0 < X - V; ) W = ml(W), X--;
              for (; V--; ) {
                if (Ye === W || W !== null && Ye === W.alternate) break t;
                Ye = ml(Ye), W = ml(W);
              }
              Ye = null;
            }
            else Ye = null;
            ze !== null && Gd(Se, he, ze, Ye, !1), Be !== null && Vn !== null && Gd(Se, Vn, Be, Ye, !0);
          }
        }
        e: {
          if (he = ee ? gu(ee) : window, ze = he.nodeName && he.nodeName.toLowerCase(), ze === "select" || ze === "input" && he.type === "file") var Ke = eh;
          else if (Zv(he)) if (Hd) Ke = ah;
          else {
            Ke = mg;
            var dt = hg;
          }
          else (ze = he.nodeName) && ze.toLowerCase() === "input" && (he.type === "checkbox" || he.type === "radio") && (Ke = yg);
          if (Ke && (Ke = Ke(n, ee))) {
            Jv(Se, Ke, o, ye);
            break e;
          }
          dt && dt(n, he, ee), n === "focusout" && (dt = he._wrapperState) && dt.controlled && he.type === "number" && Xn(he, "number", he.value);
        }
        switch (dt = ee ? gu(ee) : window, n) {
          case "focusin":
            (Zv(dt) || dt.contentEditable === "true") && (vi = dt, Bd = ee, ks = null);
            break;
          case "focusout":
            ks = Bd = vi = null;
            break;
          case "mousedown":
            $d = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $d = !1, sh(Se, o, ye);
            break;
          case "selectionchange":
            if (uh) break;
          case "keydown":
          case "keyup":
            sh(Se, o, ye);
        }
        var $e;
        if (pi) e: {
          switch (n) {
            case "compositionstart":
              var pt = "onCompositionStart";
              break e;
            case "compositionend":
              pt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              pt = "onCompositionUpdate";
              break e;
          }
          pt = void 0;
        }
        else pu ? Xv(n, o) && (pt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (pt = "onCompositionStart");
        pt && (Gv && o.locale !== "ko" && (pu || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && pu && ($e = J()) : (fi = ye, x = "value" in fi ? fi.value : fi.textContent, pu = !0)), dt = As(ee, pt), 0 < dt.length && (pt = new Pd(pt, n, null, o, ye), Se.push({ event: pt, listeners: dt }), $e ? pt.data = $e : ($e = Lc(o), $e !== null && (pt.data = $e)))), ($e = Ac ? pg(n, o) : vg(n, o)) && (ee = As(ee, "onBeforeInput"), 0 < ee.length && (ye = new Pd("onBeforeInput", "beforeinput", null, o, ye), Se.push({ event: ye, listeners: ee }), ye.data = $e));
      }
      Uc(Se, r);
    });
  }
  function Ms(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function As(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, h = p.stateNode;
      p.tag === 5 && h !== null && (p = h, h = Ea(n, o), h != null && s.unshift(Ms(n, h, p)), h = Ea(n, r), h != null && s.push(Ms(n, h, p))), n = n.return;
    }
    return s;
  }
  function ml(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Gd(n, r, o, s, p) {
    for (var h = r._reactName, C = []; o !== null && o !== s; ) {
      var O = o, j = O.alternate, ee = O.stateNode;
      if (j !== null && j === s) break;
      O.tag === 5 && ee !== null && (O = ee, p ? (j = Ea(o, h), j != null && C.unshift(Ms(o, j, O))) : p || (j = Ea(o, h), j != null && C.push(Ms(o, j, O)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Kd = /\r\n?/g, Eg = /\u0000|\uFFFD/g;
  function Xd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Kd, `
`).replace(Eg, "");
  }
  function Hc(n, r, o) {
    if (r = Xd(r), Xd(n) !== r && o) throw Error(d(425));
  }
  function Vc() {
  }
  var qd = null, yl = null;
  function Ls(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var gl = typeof setTimeout == "function" ? setTimeout : void 0, yh = typeof clearTimeout == "function" ? clearTimeout : void 0, Zd = typeof Promise == "function" ? Promise : void 0, Jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zd < "u" ? function(n) {
    return Zd.resolve(null).then(n).catch(Cg);
  } : gl;
  function Cg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function jo(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8) if (o = p.data, o === "/$") {
        if (s === 0) {
          n.removeChild(p), Mo(r);
          return;
        }
        s--;
      } else o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    Mo(r);
  }
  function hi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ps(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var zo = Math.random().toString(36).slice(2), Di = "__reactFiber$" + zo, Sl = "__reactProps$" + zo, Ji = "__reactContainer$" + zo, ep = "__reactEvents$" + zo, wg = "__reactListeners$" + zo, tp = "__reactHandles$" + zo;
  function Ia(n) {
    var r = n[Di];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ji] || o[Di]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Ps(n); n !== null; ) {
          if (o = n[Di]) return o;
          n = Ps(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function js(n) {
    return n = n[Di] || n[Ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function at(n) {
    return n[Sl] || null;
  }
  var Uo = [], Sn = -1;
  function Tt(n) {
    return { current: n };
  }
  function Xt(n) {
    0 > Sn || (n.current = Uo[Sn], Uo[Sn] = null, Sn--);
  }
  function tn(n, r) {
    Sn++, Uo[Sn] = n.current, n.current = r;
  }
  var Oi = {}, gt = Tt(Oi), Ln = Tt(!1), aa = Oi;
  function Ba(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Oi;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r) return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, h;
    for (h in o) p[h] = r[h];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function wn(n) {
    return n = n.childContextTypes, n != null;
  }
  function $a() {
    Xt(Ln), Xt(gt);
  }
  function Fo(n, r, o) {
    if (gt.current !== Oi) throw Error(d(168));
    tn(gt, r), tn(Ln, o);
  }
  function zs(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function") return o;
    s = s.getChildContext();
    for (var p in s) if (!(p in r)) throw Error(d(108, Te(n) || "Unknown", p));
    return be({}, o, s);
  }
  function Ic(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Oi, aa = gt.current, tn(gt, n), tn(Ln, Ln.current), !0;
  }
  function gh(n, r, o) {
    var s = n.stateNode;
    if (!s) throw Error(d(169));
    o ? (n = zs(n, r, aa), s.__reactInternalMemoizedMergedChildContext = n, Xt(Ln), Xt(gt), tn(gt, n)) : Xt(Ln), tn(Ln, o);
  }
  var ba = null, lr = !1, Us = !1;
  function np(n) {
    ba === null ? ba = [n] : ba.push(n);
  }
  function rp(n) {
    lr = !0, np(n);
  }
  function ia() {
    if (!Us && ba !== null) {
      Us = !0;
      var n = 0, r = Wt;
      try {
        var o = ba;
        for (Wt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        ba = null, lr = !1;
      } catch (p) {
        throw ba !== null && (ba = ba.slice(n + 1)), cn(Ur, ia), p;
      } finally {
        Wt = r, Us = !1;
      }
    }
    return null;
  }
  var Ho = [], oa = 0, xl = null, Su = 0, la = [], Or = 0, Wa = null, vr = 1, eo = "";
  function Ra(n, r) {
    Ho[oa++] = Su, Ho[oa++] = xl, xl = n, Su = r;
  }
  function ap(n, r, o) {
    la[Or++] = vr, la[Or++] = eo, la[Or++] = Wa, Wa = n;
    var s = vr;
    n = eo;
    var p = 32 - Fr(s) - 1;
    s &= ~(1 << p), o += 1;
    var h = 32 - Fr(r) + p;
    if (30 < h) {
      var C = p - p % 5;
      h = (s & (1 << C) - 1).toString(32), s >>= C, p -= C, vr = 1 << 32 - Fr(r) + p | o << p | s, eo = h + n;
    } else vr = 1 << h | o << p | s, eo = n;
  }
  function Bc(n) {
    n.return !== null && (Ra(n, 1), ap(n, 1, 0));
  }
  function ip(n) {
    for (; n === xl; ) xl = Ho[--oa], Ho[oa] = null, Su = Ho[--oa], Ho[oa] = null;
    for (; n === Wa; ) Wa = la[--Or], la[Or] = null, eo = la[--Or], la[Or] = null, vr = la[--Or], la[Or] = null;
  }
  var Ta = null, ua = null, xn = !1, Ya = null;
  function op(n, r) {
    var o = ei(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Sh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ta = n, ua = hi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ta = n, ua = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Wa !== null ? { id: vr, overflow: eo } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ei(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Ta = n, ua = null, !0) : !1;
      default:
        return !1;
    }
  }
  function $c(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Wc(n) {
    if (xn) {
      var r = ua;
      if (r) {
        var o = r;
        if (!Sh(n, r)) {
          if ($c(n)) throw Error(d(418));
          r = hi(o.nextSibling);
          var s = Ta;
          r && Sh(n, r) ? op(s, o) : (n.flags = n.flags & -4097 | 2, xn = !1, Ta = n);
        }
      } else {
        if ($c(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, xn = !1, Ta = n;
      }
    }
  }
  function xh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ta = n;
  }
  function Yc(n) {
    if (n !== Ta) return !1;
    if (!xn) return xh(n), xn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ls(n.type, n.memoizedProps)), r && (r = ua)) {
      if ($c(n)) throw Eh(), Error(d(418));
      for (; r; ) op(n, r), r = hi(r.nextSibling);
    }
    if (xh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ua = hi(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ua = null;
      }
    } else ua = Ta ? hi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Eh() {
    for (var n = ua; n; ) n = hi(n.nextSibling);
  }
  function Dn() {
    ua = Ta = null, xn = !1;
  }
  function lp(n) {
    Ya === null ? Ya = [n] : Ya.push(n);
  }
  var Qc = ce.ReactCurrentBatchConfig;
  function El(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(d(309));
          var s = o.stateNode;
        }
        if (!s) throw Error(d(147, n));
        var p = s, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var O = p.refs;
          C === null ? delete O[h] : O[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!o._owner) throw Error(d(290, n));
    }
    return n;
  }
  function Ni(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ch(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Gc(n) {
    function r(W, V) {
      if (n) {
        var X = W.deletions;
        X === null ? (W.deletions = [V], W.flags |= 16) : X.push(V);
      }
    }
    function o(W, V) {
      if (!n) return null;
      for (; V !== null; ) r(W, V), V = V.sibling;
      return null;
    }
    function s(W, V) {
      for (W = /* @__PURE__ */ new Map(); V !== null; ) V.key !== null ? W.set(V.key, V) : W.set(V.index, V), V = V.sibling;
      return W;
    }
    function p(W, V) {
      return W = Go(W, V), W.index = 0, W.sibling = null, W;
    }
    function h(W, V, X) {
      return W.index = X, n ? (X = W.alternate, X !== null ? (X = X.index, X < V ? (W.flags |= 2, V) : X) : (W.flags |= 2, V)) : (W.flags |= 1048576, V);
    }
    function C(W) {
      return n && W.alternate === null && (W.flags |= 2), W;
    }
    function O(W, V, X, Re) {
      return V === null || V.tag !== 6 ? (V = jf(X, W.mode, Re), V.return = W, V) : (V = p(V, X), V.return = W, V);
    }
    function j(W, V, X, Re) {
      var Ke = X.type;
      return Ke === pe ? ye(W, V, X.props.children, Re, X.key) : V !== null && (V.elementType === Ke || typeof Ke == "object" && Ke !== null && Ke.$$typeof === Le && Ch(Ke) === V.type) ? (Re = p(V, X.props), Re.ref = El(W, V, X), Re.return = W, Re) : (Re = Lf(X.type, X.key, X.props, null, W.mode, Re), Re.ref = El(W, V, X), Re.return = W, Re);
    }
    function ee(W, V, X, Re) {
      return V === null || V.tag !== 4 || V.stateNode.containerInfo !== X.containerInfo || V.stateNode.implementation !== X.implementation ? (V = nc(X, W.mode, Re), V.return = W, V) : (V = p(V, X.children || []), V.return = W, V);
    }
    function ye(W, V, X, Re, Ke) {
      return V === null || V.tag !== 7 ? (V = jl(X, W.mode, Re, Ke), V.return = W, V) : (V = p(V, X), V.return = W, V);
    }
    function Se(W, V, X) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return V = jf("" + V, W.mode, X), V.return = W, V;
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case re:
            return X = Lf(V.type, V.key, V.props, null, W.mode, X), X.ref = El(W, null, V), X.return = W, X;
          case we:
            return V = nc(V, W.mode, X), V.return = W, V;
          case Le:
            var Re = V._init;
            return Se(W, Re(V._payload), X);
        }
        if (rr(V) || ge(V)) return V = jl(V, W.mode, X, null), V.return = W, V;
        Ni(W, V);
      }
      return null;
    }
    function he(W, V, X, Re) {
      var Ke = V !== null ? V.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number") return Ke !== null ? null : O(W, V, "" + X, Re);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case re:
            return X.key === Ke ? j(W, V, X, Re) : null;
          case we:
            return X.key === Ke ? ee(W, V, X, Re) : null;
          case Le:
            return Ke = X._init, he(
              W,
              V,
              Ke(X._payload),
              Re
            );
        }
        if (rr(X) || ge(X)) return Ke !== null ? null : ye(W, V, X, Re, null);
        Ni(W, X);
      }
      return null;
    }
    function ze(W, V, X, Re, Ke) {
      if (typeof Re == "string" && Re !== "" || typeof Re == "number") return W = W.get(X) || null, O(V, W, "" + Re, Ke);
      if (typeof Re == "object" && Re !== null) {
        switch (Re.$$typeof) {
          case re:
            return W = W.get(Re.key === null ? X : Re.key) || null, j(V, W, Re, Ke);
          case we:
            return W = W.get(Re.key === null ? X : Re.key) || null, ee(V, W, Re, Ke);
          case Le:
            var dt = Re._init;
            return ze(W, V, X, dt(Re._payload), Ke);
        }
        if (rr(Re) || ge(Re)) return W = W.get(X) || null, ye(V, W, Re, Ke, null);
        Ni(V, Re);
      }
      return null;
    }
    function Be(W, V, X, Re) {
      for (var Ke = null, dt = null, $e = V, pt = V = 0, tr = null; $e !== null && pt < X.length; pt++) {
        $e.index > pt ? (tr = $e, $e = null) : tr = $e.sibling;
        var Yt = he(W, $e, X[pt], Re);
        if (Yt === null) {
          $e === null && ($e = tr);
          break;
        }
        n && $e && Yt.alternate === null && r(W, $e), V = h(Yt, V, pt), dt === null ? Ke = Yt : dt.sibling = Yt, dt = Yt, $e = tr;
      }
      if (pt === X.length) return o(W, $e), xn && Ra(W, pt), Ke;
      if ($e === null) {
        for (; pt < X.length; pt++) $e = Se(W, X[pt], Re), $e !== null && (V = h($e, V, pt), dt === null ? Ke = $e : dt.sibling = $e, dt = $e);
        return xn && Ra(W, pt), Ke;
      }
      for ($e = s(W, $e); pt < X.length; pt++) tr = ze($e, W, pt, X[pt], Re), tr !== null && (n && tr.alternate !== null && $e.delete(tr.key === null ? pt : tr.key), V = h(tr, V, pt), dt === null ? Ke = tr : dt.sibling = tr, dt = tr);
      return n && $e.forEach(function(lo) {
        return r(W, lo);
      }), xn && Ra(W, pt), Ke;
    }
    function Ye(W, V, X, Re) {
      var Ke = ge(X);
      if (typeof Ke != "function") throw Error(d(150));
      if (X = Ke.call(X), X == null) throw Error(d(151));
      for (var dt = Ke = null, $e = V, pt = V = 0, tr = null, Yt = X.next(); $e !== null && !Yt.done; pt++, Yt = X.next()) {
        $e.index > pt ? (tr = $e, $e = null) : tr = $e.sibling;
        var lo = he(W, $e, Yt.value, Re);
        if (lo === null) {
          $e === null && ($e = tr);
          break;
        }
        n && $e && lo.alternate === null && r(W, $e), V = h(lo, V, pt), dt === null ? Ke = lo : dt.sibling = lo, dt = lo, $e = tr;
      }
      if (Yt.done) return o(
        W,
        $e
      ), xn && Ra(W, pt), Ke;
      if ($e === null) {
        for (; !Yt.done; pt++, Yt = X.next()) Yt = Se(W, Yt.value, Re), Yt !== null && (V = h(Yt, V, pt), dt === null ? Ke = Yt : dt.sibling = Yt, dt = Yt);
        return xn && Ra(W, pt), Ke;
      }
      for ($e = s(W, $e); !Yt.done; pt++, Yt = X.next()) Yt = ze($e, W, pt, Yt.value, Re), Yt !== null && (n && Yt.alternate !== null && $e.delete(Yt.key === null ? pt : Yt.key), V = h(Yt, V, pt), dt === null ? Ke = Yt : dt.sibling = Yt, dt = Yt);
      return n && $e.forEach(function(Vg) {
        return r(W, Vg);
      }), xn && Ra(W, pt), Ke;
    }
    function Vn(W, V, X, Re) {
      if (typeof X == "object" && X !== null && X.type === pe && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case re:
            e: {
              for (var Ke = X.key, dt = V; dt !== null; ) {
                if (dt.key === Ke) {
                  if (Ke = X.type, Ke === pe) {
                    if (dt.tag === 7) {
                      o(W, dt.sibling), V = p(dt, X.props.children), V.return = W, W = V;
                      break e;
                    }
                  } else if (dt.elementType === Ke || typeof Ke == "object" && Ke !== null && Ke.$$typeof === Le && Ch(Ke) === dt.type) {
                    o(W, dt.sibling), V = p(dt, X.props), V.ref = El(W, dt, X), V.return = W, W = V;
                    break e;
                  }
                  o(W, dt);
                  break;
                } else r(W, dt);
                dt = dt.sibling;
              }
              X.type === pe ? (V = jl(X.props.children, W.mode, Re, X.key), V.return = W, W = V) : (Re = Lf(X.type, X.key, X.props, null, W.mode, Re), Re.ref = El(W, V, X), Re.return = W, W = Re);
            }
            return C(W);
          case we:
            e: {
              for (dt = X.key; V !== null; ) {
                if (V.key === dt) if (V.tag === 4 && V.stateNode.containerInfo === X.containerInfo && V.stateNode.implementation === X.implementation) {
                  o(W, V.sibling), V = p(V, X.children || []), V.return = W, W = V;
                  break e;
                } else {
                  o(W, V);
                  break;
                }
                else r(W, V);
                V = V.sibling;
              }
              V = nc(X, W.mode, Re), V.return = W, W = V;
            }
            return C(W);
          case Le:
            return dt = X._init, Vn(W, V, dt(X._payload), Re);
        }
        if (rr(X)) return Be(W, V, X, Re);
        if (ge(X)) return Ye(W, V, X, Re);
        Ni(W, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" ? (X = "" + X, V !== null && V.tag === 6 ? (o(W, V.sibling), V = p(V, X), V.return = W, W = V) : (o(W, V), V = jf(X, W.mode, Re), V.return = W, W = V), C(W)) : o(W, V);
    }
    return Vn;
  }
  var xu = Gc(!0), wh = Gc(!1), to = Tt(null), qn = null, Oe = null, Qa = null;
  function _a() {
    Qa = Oe = qn = null;
  }
  function up(n) {
    var r = to.current;
    Xt(to), n._currentValue = r;
  }
  function sp(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function Eu(n, r) {
    qn = n, Qa = Oe = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (fa = !0), n.firstContext = null);
  }
  function Ga(n) {
    var r = n._currentValue;
    if (Qa !== n) if (n = { context: n, memoizedValue: r, next: null }, Oe === null) {
      if (qn === null) throw Error(d(308));
      Oe = n, qn.dependencies = { lanes: 0, firstContext: n };
    } else Oe = Oe.next = n;
    return r;
  }
  var Cl = null;
  function Qn(n) {
    Cl === null ? Cl = [n] : Cl.push(n);
  }
  function bh(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Qn(r)) : (o.next = p.next, p.next = o), r.interleaved = o, no(n, s);
  }
  function no(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Vo = !1;
  function Kc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function sa(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Io(n, r, o) {
    var s = n.updateQueue;
    if (s === null) return null;
    if (s = s.shared, Lt & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, no(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, Qn(s)) : (r.next = p.next, p.next = r), s.interleaved = r, no(n, o);
  }
  function Xc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, _i(n, o);
    }
  }
  function Rh(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? p = h = C : h = h.next = C, o = o.next;
        } while (o !== null);
        h === null ? p = h = r : h = h.next = r;
      } else p = h = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: h, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function qc(n, r, o, s) {
    var p = n.updateQueue;
    Vo = !1;
    var h = p.firstBaseUpdate, C = p.lastBaseUpdate, O = p.shared.pending;
    if (O !== null) {
      p.shared.pending = null;
      var j = O, ee = j.next;
      j.next = null, C === null ? h = ee : C.next = ee, C = j;
      var ye = n.alternate;
      ye !== null && (ye = ye.updateQueue, O = ye.lastBaseUpdate, O !== C && (O === null ? ye.firstBaseUpdate = ee : O.next = ee, ye.lastBaseUpdate = j));
    }
    if (h !== null) {
      var Se = p.baseState;
      C = 0, ye = ee = j = null, O = h;
      do {
        var he = O.lane, ze = O.eventTime;
        if ((s & he) === he) {
          ye !== null && (ye = ye.next = {
            eventTime: ze,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Be = n, Ye = O;
            switch (he = r, ze = o, Ye.tag) {
              case 1:
                if (Be = Ye.payload, typeof Be == "function") {
                  Se = Be.call(ze, Se, he);
                  break e;
                }
                Se = Be;
                break e;
              case 3:
                Be.flags = Be.flags & -65537 | 128;
              case 0:
                if (Be = Ye.payload, he = typeof Be == "function" ? Be.call(ze, Se, he) : Be, he == null) break e;
                Se = be({}, Se, he);
                break e;
              case 2:
                Vo = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, he = p.effects, he === null ? p.effects = [O] : he.push(O));
        } else ze = { eventTime: ze, lane: he, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, ye === null ? (ee = ye = ze, j = Se) : ye = ye.next = ze, C |= he;
        if (O = O.next, O === null) {
          if (O = p.shared.pending, O === null) break;
          he = O, O = he.next, he.next = null, p.lastBaseUpdate = he, p.shared.pending = null;
        }
      } while (!0);
      if (ye === null && (j = Se), p.baseState = j, p.firstBaseUpdate = ee, p.lastBaseUpdate = ye, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          C |= p.lane, p = p.next;
        while (p !== r);
      } else h === null && (p.shared.lanes = 0);
      Ml |= C, n.lanes = C, n.memoizedState = Se;
    }
  }
  function Th(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var s = n[r], p = s.callback;
      if (p !== null) {
        if (s.callback = null, s = o, typeof p != "function") throw Error(d(191, p));
        p.call(s);
      }
    }
  }
  var Fs = {}, mi = Tt(Fs), wu = Tt(Fs), Hs = Tt(Fs);
  function wl(n) {
    if (n === Fs) throw Error(d(174));
    return n;
  }
  function cp(n, r) {
    switch (tn(Hs, r), tn(wu, n), tn(mi, Fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Tn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Tn(r, n);
    }
    Xt(mi), tn(mi, r);
  }
  function bu() {
    Xt(mi), Xt(wu), Xt(Hs);
  }
  function _h(n) {
    wl(Hs.current);
    var r = wl(mi.current), o = Tn(r, n.type);
    r !== o && (tn(wu, n), tn(mi, o));
  }
  function fp(n) {
    wu.current === n && (Xt(mi), Xt(wu));
  }
  var bn = Tt(0);
  function Zc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Jc = [];
  function dp() {
    for (var n = 0; n < Jc.length; n++) Jc[n]._workInProgressVersionPrimary = null;
    Jc.length = 0;
  }
  var ef = ce.ReactCurrentDispatcher, Vs = ce.ReactCurrentBatchConfig, Ge = 0, qe = null, St = null, Nt = null, ka = !1, Ru = !1, Is = 0, bg = 0;
  function Nr() {
    throw Error(d(321));
  }
  function Bs(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!Va(n[o], r[o])) return !1;
    return !0;
  }
  function ve(n, r, o, s, p, h) {
    if (Ge = h, qe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ef.current = n === null || n.memoizedState === null ? Rg : mn, n = o(s, p), Ru) {
      h = 0;
      do {
        if (Ru = !1, Is = 0, 25 <= h) throw Error(d(301));
        h += 1, Nt = St = null, r.updateQueue = null, ef.current = mf, n = o(s, p);
      } while (Ru);
    }
    if (ef.current = Mr, r = St !== null && St.next !== null, Ge = 0, Nt = St = qe = null, ka = !1, r) throw Error(d(300));
    return n;
  }
  function Gn() {
    var n = Is !== 0;
    return Is = 0, n;
  }
  function rt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nt === null ? qe.memoizedState = Nt = n : Nt = Nt.next = n, Nt;
  }
  function hr() {
    if (St === null) {
      var n = qe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = St.next;
    var r = Nt === null ? qe.memoizedState : Nt.next;
    if (r !== null) Nt = r, St = n;
    else {
      if (n === null) throw Error(d(310));
      St = n, n = { memoizedState: St.memoizedState, baseState: St.baseState, baseQueue: St.baseQueue, queue: St.queue, next: null }, Nt === null ? qe.memoizedState = Nt = n : Nt = Nt.next = n;
    }
    return Nt;
  }
  function Da(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ro(n) {
    var r = hr(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = St, p = s.baseQueue, h = o.pending;
    if (h !== null) {
      if (p !== null) {
        var C = p.next;
        p.next = h.next, h.next = C;
      }
      s.baseQueue = p = h, o.pending = null;
    }
    if (p !== null) {
      h = p.next, s = s.baseState;
      var O = C = null, j = null, ee = h;
      do {
        var ye = ee.lane;
        if ((Ge & ye) === ye) j !== null && (j = j.next = { lane: 0, action: ee.action, hasEagerState: ee.hasEagerState, eagerState: ee.eagerState, next: null }), s = ee.hasEagerState ? ee.eagerState : n(s, ee.action);
        else {
          var Se = {
            lane: ye,
            action: ee.action,
            hasEagerState: ee.hasEagerState,
            eagerState: ee.eagerState,
            next: null
          };
          j === null ? (O = j = Se, C = s) : j = j.next = Se, qe.lanes |= ye, Ml |= ye;
        }
        ee = ee.next;
      } while (ee !== null && ee !== h);
      j === null ? C = s : j.next = O, Va(s, r.memoizedState) || (fa = !0), r.memoizedState = s, r.baseState = C, r.baseQueue = j, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        h = p.lane, qe.lanes |= h, Ml |= h, p = p.next;
      while (p !== n);
    } else p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ka(n) {
    var r = hr(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, h = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var C = p = p.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== p);
      Va(h, r.memoizedState) || (fa = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, s];
  }
  function Tu() {
  }
  function bl(n, r) {
    var o = qe, s = hr(), p = r(), h = !Va(s.memoizedState, p);
    if (h && (s.memoizedState = p, fa = !0), s = s.queue, $s(nf.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || Nt !== null && Nt.memoizedState.tag & 1) {
      if (o.flags |= 2048, Rl(9, tf.bind(null, o, s, p, r), void 0, null), jn === null) throw Error(d(349));
      Ge & 30 || _u(o, r, p);
    }
    return p;
  }
  function _u(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function tf(n, r, o, s) {
    r.value = o, r.getSnapshot = s, rf(r) && af(n);
  }
  function nf(n, r, o) {
    return o(function() {
      rf(r) && af(n);
    });
  }
  function rf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Va(n, o);
    } catch {
      return !0;
    }
  }
  function af(n) {
    var r = no(n, 1);
    r !== null && On(r, n, 1, -1);
  }
  function of(n) {
    var r = rt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Da, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ws.bind(null, qe, n), [r.memoizedState, n];
  }
  function Rl(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function lf() {
    return hr().memoizedState;
  }
  function ku(n, r, o, s) {
    var p = rt();
    qe.flags |= n, p.memoizedState = Rl(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Du(n, r, o, s) {
    var p = hr();
    s = s === void 0 ? null : s;
    var h = void 0;
    if (St !== null) {
      var C = St.memoizedState;
      if (h = C.destroy, s !== null && Bs(s, C.deps)) {
        p.memoizedState = Rl(r, o, h, s);
        return;
      }
    }
    qe.flags |= n, p.memoizedState = Rl(1 | r, o, h, s);
  }
  function uf(n, r) {
    return ku(8390656, 8, n, r);
  }
  function $s(n, r) {
    return Du(2048, 8, n, r);
  }
  function sf(n, r) {
    return Du(4, 2, n, r);
  }
  function cf(n, r) {
    return Du(4, 4, n, r);
  }
  function ff(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function df(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Du(4, 4, ff.bind(null, r, n), o);
  }
  function Ou() {
  }
  function Tl(n, r) {
    var o = hr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Bs(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function pf(n, r) {
    var o = hr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Bs(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function vf(n, r, o) {
    return Ge & 21 ? (Va(o, r) || (o = ru(), qe.lanes |= o, Ml |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, fa = !0), n.memoizedState = o);
  }
  function pp(n, r) {
    var o = Wt;
    Wt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Vs.transition;
    Vs.transition = {};
    try {
      n(!1), r();
    } finally {
      Wt = o, Vs.transition = s;
    }
  }
  function hf() {
    return hr().memoizedState;
  }
  function kh(n, r, o) {
    var s = oo(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, vp(n)) Nu(r, o);
    else if (o = bh(n, r, o, s), o !== null) {
      var p = cr();
      On(o, n, s, p), Bo(o, r, s);
    }
  }
  function Ws(n, r, o) {
    var s = oo(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (vp(n)) Nu(r, p);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null)) try {
        var C = r.lastRenderedState, O = h(C, o);
        if (p.hasEagerState = !0, p.eagerState = O, Va(O, C)) {
          var j = r.interleaved;
          j === null ? (p.next = p, Qn(r)) : (p.next = j.next, j.next = p), r.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      o = bh(n, r, p, s), o !== null && (p = cr(), On(o, n, s, p), Bo(o, r, s));
    }
  }
  function vp(n) {
    var r = n.alternate;
    return n === qe || r !== null && r === qe;
  }
  function Nu(n, r) {
    Ru = ka = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Bo(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, _i(n, o);
    }
  }
  var Mr = { readContext: Ga, useCallback: Nr, useContext: Nr, useEffect: Nr, useImperativeHandle: Nr, useInsertionEffect: Nr, useLayoutEffect: Nr, useMemo: Nr, useReducer: Nr, useRef: Nr, useState: Nr, useDebugValue: Nr, useDeferredValue: Nr, useTransition: Nr, useMutableSource: Nr, useSyncExternalStore: Nr, useId: Nr, unstable_isNewReconciler: !1 }, Rg = { readContext: Ga, useCallback: function(n, r) {
    return rt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ga, useEffect: uf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, ku(
      4194308,
      4,
      ff.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return ku(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ku(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = rt();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = rt();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = kh.bind(null, qe, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = rt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: of, useDebugValue: Ou, useDeferredValue: function(n) {
    return rt().memoizedState = n;
  }, useTransition: function() {
    var n = of(!1), r = n[0];
    return n = pp.bind(null, n[1]), rt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = qe, p = rt();
    if (xn) {
      if (o === void 0) throw Error(d(407));
      o = o();
    } else {
      if (o = r(), jn === null) throw Error(d(349));
      Ge & 30 || _u(s, r, o);
    }
    p.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return p.queue = h, uf(nf.bind(
      null,
      s,
      h,
      n
    ), [n]), s.flags |= 2048, Rl(9, tf.bind(null, s, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = rt(), r = jn.identifierPrefix;
    if (xn) {
      var o = eo, s = vr;
      o = (s & ~(1 << 32 - Fr(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Is++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = bg++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, mn = {
    readContext: Ga,
    useCallback: Tl,
    useContext: Ga,
    useEffect: $s,
    useImperativeHandle: df,
    useInsertionEffect: sf,
    useLayoutEffect: cf,
    useMemo: pf,
    useReducer: ro,
    useRef: lf,
    useState: function() {
      return ro(Da);
    },
    useDebugValue: Ou,
    useDeferredValue: function(n) {
      var r = hr();
      return vf(r, St.memoizedState, n);
    },
    useTransition: function() {
      var n = ro(Da)[0], r = hr().memoizedState;
      return [n, r];
    },
    useMutableSource: Tu,
    useSyncExternalStore: bl,
    useId: hf,
    unstable_isNewReconciler: !1
  }, mf = { readContext: Ga, useCallback: Tl, useContext: Ga, useEffect: $s, useImperativeHandle: df, useInsertionEffect: sf, useLayoutEffect: cf, useMemo: pf, useReducer: Ka, useRef: lf, useState: function() {
    return Ka(Da);
  }, useDebugValue: Ou, useDeferredValue: function(n) {
    var r = hr();
    return St === null ? r.memoizedState = n : vf(r, St.memoizedState, n);
  }, useTransition: function() {
    var n = Ka(Da)[0], r = hr().memoizedState;
    return [n, r];
  }, useMutableSource: Tu, useSyncExternalStore: bl, useId: hf, unstable_isNewReconciler: !1 };
  function ca(n, r) {
    if (n && n.defaultProps) {
      r = be({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function _l(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : be({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var kl = { isMounted: function(n) {
    return (n = n._reactInternals) ? Xe(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = cr(), p = oo(n), h = sa(s, p);
    h.payload = r, o != null && (h.callback = o), r = Io(n, h, p), r !== null && (On(r, n, p, s), Xc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = cr(), p = oo(n), h = sa(s, p);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = Io(n, h, p), r !== null && (On(r, n, p, s), Xc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = cr(), s = oo(n), p = sa(o, s);
    p.tag = 2, r != null && (p.callback = r), r = Io(n, p, s), r !== null && (On(r, n, s, o), Xc(r, n, s));
  } };
  function Dh(n, r, o, s, p, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, C) : r.prototype && r.prototype.isPureReactComponent ? !_s(o, s) || !_s(p, h) : !0;
  }
  function Oh(n, r, o) {
    var s = !1, p = Oi, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Ga(h) : (p = wn(r) ? aa : gt.current, s = r.contextTypes, h = (s = s != null) ? Ba(n, p) : Oi), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = kl, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function Nh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && kl.enqueueReplaceState(r, r.state, null);
  }
  function hp(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = {}, Kc(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? p.context = Ga(h) : (h = wn(r) ? aa : gt.current, p.context = Ba(n, h)), p.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (_l(n, r, h, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && kl.enqueueReplaceState(p, p.state, null), qc(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function $o(n, r) {
    try {
      var o = "", s = r;
      do
        o += yt(s), s = s.return;
      while (s);
      var p = o;
    } catch (h) {
      p = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function mp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Ys(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Mh = typeof WeakMap == "function" ? WeakMap : Map;
  function Ah(n, r, o) {
    o = sa(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      kf || (kf = !0, Rp = s), Ys(n, r);
    }, o;
  }
  function Lh(n, r, o) {
    o = sa(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        Ys(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      Ys(n, r), typeof s != "function" && (Za === null ? Za = /* @__PURE__ */ new Set([this]) : Za.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function Qs(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new Mh();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = Pg.bind(null, n, r, o), r.then(n, n));
  }
  function Ph(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function yp(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = sa(-1, 1), r.tag = 2, Io(o, r, 1))), o.lanes |= 1), n);
  }
  var jh = ce.ReactCurrentOwner, fa = !1;
  function Fn(n, r, o, s) {
    r.child = n === null ? wh(r, null, o, s) : xu(r, n.child, o, s);
  }
  function Mu(n, r, o, s, p) {
    o = o.render;
    var h = r.ref;
    return Eu(r, p), s = ve(n, r, o, s, h, p), o = Gn(), n !== null && !fa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Hn(n, r, p)) : (xn && o && Bc(r), r.flags |= 1, Fn(n, r, s, p), r.child);
  }
  function Wo(n, r, o, s, p) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !Op(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, yf(n, r, h, s, p)) : (n = Lf(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & p)) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : _s, o(C, s) && n.ref === r.ref) return Hn(n, r, p);
    }
    return r.flags |= 1, n = Go(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function yf(n, r, o, s, p) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (_s(h, s) && n.ref === r.ref) if (fa = !1, r.pendingProps = s = h, (n.lanes & p) !== 0) n.flags & 131072 && (fa = !0);
      else return r.lanes = n.lanes, Hn(n, r, p);
    }
    return bt(n, r, o, s, p);
  }
  function da(n, r, o) {
    var s = r.pendingProps, p = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tn(Iu, pa), pa |= o;
    else {
      if (!(o & 1073741824)) return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tn(Iu, pa), pa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, tn(Iu, pa), pa |= s;
    }
    else h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, tn(Iu, pa), pa |= s;
    return Fn(n, r, p, o), r.child;
  }
  function Dl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bt(n, r, o, s, p) {
    var h = wn(o) ? aa : gt.current;
    return h = Ba(r, h), Eu(r, p), o = ve(n, r, o, s, h, p), s = Gn(), n !== null && !fa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Hn(n, r, p)) : (xn && s && Bc(r), r.flags |= 1, Fn(n, r, o, p), r.child);
  }
  function Gs(n, r, o, s, p) {
    if (wn(o)) {
      var h = !0;
      Ic(r);
    } else h = !1;
    if (Eu(r, p), r.stateNode === null) Xs(n, r), Oh(r, o, s), hp(r, o, s, p), s = !0;
    else if (n === null) {
      var C = r.stateNode, O = r.memoizedProps;
      C.props = O;
      var j = C.context, ee = o.contextType;
      typeof ee == "object" && ee !== null ? ee = Ga(ee) : (ee = wn(o) ? aa : gt.current, ee = Ba(r, ee));
      var ye = o.getDerivedStateFromProps, Se = typeof ye == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      Se || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== s || j !== ee) && Nh(r, C, s, ee), Vo = !1;
      var he = r.memoizedState;
      C.state = he, qc(r, s, C, p), j = r.memoizedState, O !== s || he !== j || Ln.current || Vo ? (typeof ye == "function" && (_l(r, o, ye, s), j = r.memoizedState), (O = Vo || Dh(r, o, O, s, he, j, ee)) ? (Se || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = j), C.props = s, C.state = j, C.context = ee, s = O) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      C = r.stateNode, Cu(n, r), O = r.memoizedProps, ee = r.type === r.elementType ? O : ca(r.type, O), C.props = ee, Se = r.pendingProps, he = C.context, j = o.contextType, typeof j == "object" && j !== null ? j = Ga(j) : (j = wn(o) ? aa : gt.current, j = Ba(r, j));
      var ze = o.getDerivedStateFromProps;
      (ye = typeof ze == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== Se || he !== j) && Nh(r, C, s, j), Vo = !1, he = r.memoizedState, C.state = he, qc(r, s, C, p);
      var Be = r.memoizedState;
      O !== Se || he !== Be || Ln.current || Vo ? (typeof ze == "function" && (_l(r, o, ze, s), Be = r.memoizedState), (ee = Vo || Dh(r, o, ee, s, he, Be, j) || !1) ? (ye || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(s, Be, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(s, Be, j)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && he === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && he === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Be), C.props = s, C.state = Be, C.context = j, s = ee) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && he === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && he === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return gf(n, r, o, s, h, p);
  }
  function gf(n, r, o, s, p, h) {
    Dl(n, r);
    var C = (r.flags & 128) !== 0;
    if (!s && !C) return p && gh(r, o, !1), Hn(n, r, h);
    s = r.stateNode, jh.current = r;
    var O = C && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && C ? (r.child = xu(r, n.child, null, h), r.child = xu(r, null, O, h)) : Fn(n, r, O, h), r.memoizedState = s.state, p && gh(r, o, !0), r.child;
  }
  function Tg(n) {
    var r = n.stateNode;
    r.pendingContext ? Fo(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fo(n, r.context, !1), cp(n, r.containerInfo);
  }
  function zh(n, r, o, s, p) {
    return Dn(), lp(p), r.flags |= 256, Fn(n, r, o, s), r.child;
  }
  var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ol(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Uh(n, r, o) {
    var s = r.pendingProps, p = bn.current, h = !1, C = (r.flags & 128) !== 0, O;
    if ((O = C) || (O = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), O ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), tn(bn, p & 1), n === null)
      return Wc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, C = { mode: "hidden", children: C }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Pf(C, s, 0, null), n = jl(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Ol(o), r.memoizedState = Ks, n) : Sf(r, C));
    if (p = n.memoizedState, p !== null && (O = p.dehydrated, O !== null)) return gp(n, r, C, s, O, p, o);
    if (h) {
      h = s.fallback, C = r.mode, p = n.child, O = p.sibling;
      var j = { mode: "hidden", children: s.children };
      return !(C & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = j, r.deletions = null) : (s = Go(p, j), s.subtreeFlags = p.subtreeFlags & 14680064), O !== null ? h = Go(O, h) : (h = jl(h, C, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, C = n.child.memoizedState, C = C === null ? Ol(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, r.memoizedState = Ks, s;
    }
    return h = n.child, n = h.sibling, s = Go(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Sf(n, r) {
    return r = Pf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xf(n, r, o, s) {
    return s !== null && lp(s), xu(r, n.child, null, o), n = Sf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function gp(n, r, o, s, p, h, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = mp(Error(d(422))), xf(n, r, C, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, p = r.mode, s = Pf({ mode: "visible", children: s.children }, p, 0, null), h = jl(h, p, C, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && xu(r, n.child, null, C), r.child.memoizedState = Ol(C), r.memoizedState = Ks, h);
    if (!(r.mode & 1)) return xf(n, r, C, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s) var O = s.dgst;
      return s = O, h = Error(d(419)), s = mp(h, s, void 0), xf(n, r, C, s);
    }
    if (O = (C & n.childLanes) !== 0, fa || O) {
      if (s = jn, s !== null) {
        switch (C & -C) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (s.suspendedLanes | C) ? 0 : p, p !== 0 && p !== h.retryLane && (h.retryLane = p, no(n, p), On(s, n, p, -1));
      }
      return tc(), s = mp(Error(d(421))), xf(n, r, C, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Dp.bind(null, n), p._reactRetry = r, null) : (n = h.treeContext, ua = hi(p.nextSibling), Ta = r, xn = !0, Ya = null, n !== null && (la[Or++] = vr, la[Or++] = eo, la[Or++] = Wa, vr = n.id, eo = n.overflow, Wa = r), r = Sf(r, s.children), r.flags |= 4096, r);
  }
  function Fh(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), sp(n.return, r, o);
  }
  function Ef(n, r, o, s, p) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = o, h.tailMode = p);
  }
  function Sp(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, h = s.tail;
    if (Fn(n, r, s.children, o), s = bn.current, s & 2) s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fh(n, o, r);
        else if (n.tag === 19) Fh(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      s &= 1;
    }
    if (tn(bn, s), !(r.mode & 1)) r.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (o = r.child, p = null; o !== null; ) n = o.alternate, n !== null && Zc(n) === null && (p = o), o = o.sibling;
        o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), Ef(r, !1, p, o, h);
        break;
      case "backwards":
        for (o = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && Zc(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = o, o = p, p = n;
        }
        Ef(r, !0, o, null, h);
        break;
      case "together":
        Ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Xs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Hn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ml |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = Go(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Go(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function ao(n, r, o) {
    switch (r.tag) {
      case 3:
        Tg(r), Dn();
        break;
      case 5:
        _h(r);
        break;
      case 1:
        wn(r.type) && Ic(r);
        break;
      case 4:
        cp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        tn(to, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (tn(bn, bn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Uh(n, r, o) : (tn(bn, bn.current & 1), n = Hn(n, r, o), n !== null ? n.sibling : null);
        tn(bn, bn.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s) return Sp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), tn(bn, bn.current), s) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, da(n, r, o);
    }
    return Hn(n, r, o);
  }
  var Mi, Au, Lu, Xa;
  Mi = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Au = function() {
  }, Lu = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, wl(mi.current);
      var h = null;
      switch (o) {
        case "input":
          p = rn(n, p), s = rn(n, s), h = [];
          break;
        case "select":
          p = be({}, p, { value: void 0 }), s = be({}, s, { value: void 0 }), h = [];
          break;
        case "textarea":
          p = Zr(n, p), s = Zr(n, s), h = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Vc);
      }
      Un(o, s);
      var C;
      o = null;
      for (ee in p) if (!s.hasOwnProperty(ee) && p.hasOwnProperty(ee) && p[ee] != null) if (ee === "style") {
        var O = p[ee];
        for (C in O) O.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else ee !== "dangerouslySetInnerHTML" && ee !== "children" && ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && ee !== "autoFocus" && (E.hasOwnProperty(ee) ? h || (h = []) : (h = h || []).push(ee, null));
      for (ee in s) {
        var j = s[ee];
        if (O = p != null ? p[ee] : void 0, s.hasOwnProperty(ee) && j !== O && (j != null || O != null)) if (ee === "style") if (O) {
          for (C in O) !O.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in j) j.hasOwnProperty(C) && O[C] !== j[C] && (o || (o = {}), o[C] = j[C]);
        } else o || (h || (h = []), h.push(
          ee,
          o
        )), o = j;
        else ee === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, O = O ? O.__html : void 0, j != null && O !== j && (h = h || []).push(ee, j)) : ee === "children" ? typeof j != "string" && typeof j != "number" || (h = h || []).push(ee, "" + j) : ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && (E.hasOwnProperty(ee) ? (j != null && ee === "onScroll" && pn("scroll", n), h || O === j || (h = [])) : (h = h || []).push(ee, j));
      }
      o && (h = h || []).push("style", o);
      var ee = h;
      (r.updateQueue = ee) && (r.flags |= 4);
    }
  }, Xa = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function Pn(n, r) {
    if (!xn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var s = null; o !== null; ) o.alternate !== null && (s = o), o = o.sibling;
        s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
    }
  }
  function Ar(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r) for (var p = n.child; p !== null; ) o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else for (p = n.child; p !== null; ) o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function _g(n, r, o) {
    var s = r.pendingProps;
    switch (ip(r), r.tag) {
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
        return Ar(r), null;
      case 1:
        return wn(r.type) && $a(), Ar(r), null;
      case 3:
        return s = r.stateNode, bu(), Xt(Ln), Xt(gt), dp(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (Yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ya !== null && (Tp(Ya), Ya = null))), Au(n, r), Ar(r), null;
      case 5:
        fp(r);
        var p = wl(Hs.current);
        if (o = r.type, n !== null && r.stateNode != null) Lu(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(d(166));
            return Ar(r), null;
          }
          if (n = wl(mi.current), Yc(r)) {
            s = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (s[Di] = r, s[Sl] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                pn("cancel", s), pn("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                pn("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Ns.length; p++) pn(Ns[p], s);
                break;
              case "source":
                pn("error", s);
                break;
              case "img":
              case "image":
              case "link":
                pn(
                  "error",
                  s
                ), pn("load", s);
                break;
              case "details":
                pn("toggle", s);
                break;
              case "input":
                yn(s, h), pn("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!h.multiple }, pn("invalid", s);
                break;
              case "textarea":
                _r(s, h), pn("invalid", s);
            }
            Un(o, h), p = null;
            for (var C in h) if (h.hasOwnProperty(C)) {
              var O = h[C];
              C === "children" ? typeof O == "string" ? s.textContent !== O && (h.suppressHydrationWarning !== !0 && Hc(s.textContent, O, n), p = ["children", O]) : typeof O == "number" && s.textContent !== "" + O && (h.suppressHydrationWarning !== !0 && Hc(
                s.textContent,
                O,
                n
              ), p = ["children", "" + O]) : E.hasOwnProperty(C) && O != null && C === "onScroll" && pn("scroll", s);
            }
            switch (o) {
              case "input":
                Ct(s), Rr(s, h, !0);
                break;
              case "textarea":
                Ct(s), pr(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (s.onclick = Vc);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            C = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = C.createElement(o, { is: s.is }) : (n = C.createElement(o), o === "select" && (C = n, s.multiple ? C.multiple = !0 : s.size && (C.size = s.size))) : n = C.createElementNS(n, o), n[Di] = r, n[Sl] = s, Mi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = _n(o, s), o) {
                case "dialog":
                  pn("cancel", n), pn("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  pn("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Ns.length; p++) pn(Ns[p], n);
                  p = s;
                  break;
                case "source":
                  pn("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  pn(
                    "error",
                    n
                  ), pn("load", n), p = s;
                  break;
                case "details":
                  pn("toggle", n), p = s;
                  break;
                case "input":
                  yn(n, s), p = rn(n, s), pn("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = be({}, s, { value: void 0 }), pn("invalid", n);
                  break;
                case "textarea":
                  _r(n, s), p = Zr(n, s), pn("invalid", n);
                  break;
                default:
                  p = s;
              }
              Un(o, p), O = p;
              for (h in O) if (O.hasOwnProperty(h)) {
                var j = O[h];
                h === "style" ? Kt(n, j) : h === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Ci(n, j)) : h === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && xa(n, j) : typeof j == "number" && xa(n, "" + j) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (E.hasOwnProperty(h) ? j != null && h === "onScroll" && pn("scroll", n) : j != null && ne(n, h, j, C));
              }
              switch (o) {
                case "input":
                  Ct(n), Rr(n, s, !1);
                  break;
                case "textarea":
                  Ct(n), pr(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + Ie(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, h = s.value, h != null ? Tr(n, !!s.multiple, h, !1) : s.defaultValue != null && Tr(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Vc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Ar(r), null;
      case 6:
        if (n && r.stateNode != null) Xa(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null) throw Error(d(166));
          if (o = wl(Hs.current), wl(mi.current), Yc(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[Di] = r, (h = s.nodeValue !== o) && (n = Ta, n !== null)) switch (n.tag) {
              case 3:
                Hc(s.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Hc(s.nodeValue, o, (n.mode & 1) !== 0);
            }
            h && (r.flags |= 4);
          } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Di] = r, r.stateNode = s;
        }
        return Ar(r), null;
      case 13:
        if (Xt(bn), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (xn && ua !== null && r.mode & 1 && !(r.flags & 128)) Eh(), Dn(), r.flags |= 98560, h = !1;
          else if (h = Yc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(d(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(d(317));
              h[Di] = r;
            } else Dn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Ar(r), h = !1;
          } else Ya !== null && (Tp(Ya), Ya = null), h = !0;
          if (!h) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || bn.current & 1 ? Jn === 0 && (Jn = 3) : tc())), r.updateQueue !== null && (r.flags |= 4), Ar(r), null);
      case 4:
        return bu(), Au(n, r), n === null && yu(r.stateNode.containerInfo), Ar(r), null;
      case 10:
        return up(r.type._context), Ar(r), null;
      case 17:
        return wn(r.type) && $a(), Ar(r), null;
      case 19:
        if (Xt(bn), h = r.memoizedState, h === null) return Ar(r), null;
        if (s = (r.flags & 128) !== 0, C = h.rendering, C === null) if (s) Pn(h, !1);
        else {
          if (Jn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = Zc(n), C !== null) {
              for (r.flags |= 128, Pn(h, !1), s = C.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; ) h = o, n = s, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return tn(bn, bn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && $t() > $u && (r.flags |= 128, s = !0, Pn(h, !1), r.lanes = 4194304);
        }
        else {
          if (!s) if (n = Zc(C), n !== null) {
            if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Pn(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !xn) return Ar(r), null;
          } else 2 * $t() - h.renderingStartTime > $u && o !== 1073741824 && (r.flags |= 128, s = !0, Pn(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (o = h.last, o !== null ? o.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = $t(), r.sibling = null, o = bn.current, tn(bn, s ? o & 1 | 2 : o & 1), r) : (Ar(r), null);
      case 22:
      case 23:
        return Mf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? pa & 1073741824 && (Ar(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Ar(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function kg(n, r) {
    switch (ip(r), r.tag) {
      case 1:
        return wn(r.type) && $a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return bu(), Xt(Ln), Xt(gt), dp(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return fp(r), null;
      case 13:
        if (Xt(bn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          Dn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Xt(bn), null;
      case 4:
        return bu(), null;
      case 10:
        return up(r.type._context), null;
      case 22:
      case 23:
        return Mf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pu = !1, mr = !1, Cf = typeof WeakSet == "function" ? WeakSet : Set, Ve = null;
  function ju(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (s) {
      zn(n, r, s);
    }
    else o.current = null;
  }
  function xp(n, r, o) {
    try {
      o();
    } catch (s) {
      zn(n, r, s);
    }
  }
  var wf = !1;
  function Dg(n, r) {
    if (qd = Ha, n = Pc(), Xi(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var s = o.getSelection && o.getSelection();
        if (s && s.rangeCount !== 0) {
          o = s.anchorNode;
          var p = s.anchorOffset, h = s.focusNode;
          s = s.focusOffset;
          try {
            o.nodeType, h.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, O = -1, j = -1, ee = 0, ye = 0, Se = n, he = null;
          t: for (; ; ) {
            for (var ze; Se !== o || p !== 0 && Se.nodeType !== 3 || (O = C + p), Se !== h || s !== 0 && Se.nodeType !== 3 || (j = C + s), Se.nodeType === 3 && (C += Se.nodeValue.length), (ze = Se.firstChild) !== null; )
              he = Se, Se = ze;
            for (; ; ) {
              if (Se === n) break t;
              if (he === o && ++ee === p && (O = C), he === h && ++ye === s && (j = C), (ze = Se.nextSibling) !== null) break;
              Se = he, he = Se.parentNode;
            }
            Se = ze;
          }
          o = O === -1 || j === -1 ? null : { start: O, end: j };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (yl = { focusedElem: n, selectionRange: o }, Ha = !1, Ve = r; Ve !== null; ) if (r = Ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ve = n;
    else for (; Ve !== null; ) {
      r = Ve;
      try {
        var Be = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Be !== null) {
              var Ye = Be.memoizedProps, Vn = Be.memoizedState, W = r.stateNode, V = W.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : ca(r.type, Ye), Vn);
              W.__reactInternalSnapshotBeforeUpdate = V;
            }
            break;
          case 3:
            var X = r.stateNode.containerInfo;
            X.nodeType === 1 ? X.textContent = "" : X.nodeType === 9 && X.documentElement && X.removeChild(X.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (Re) {
        zn(r, r.return, Re);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ve = n;
        break;
      }
      Ve = r.return;
    }
    return Be = wf, wf = !1, Be;
  }
  function zu(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var h = p.destroy;
          p.destroy = void 0, h !== void 0 && xp(r, o, h);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function bf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Rf(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Hh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Hh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Di], delete r[Sl], delete r[ep], delete r[wg], delete r[tp])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ep(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Vh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ep(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function qs(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Vc));
    else if (s !== 4 && (n = n.child, n !== null)) for (qs(n, r, o), n = n.sibling; n !== null; ) qs(n, r, o), n = n.sibling;
  }
  function Uu(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null)) for (Uu(n, r, o), n = n.sibling; n !== null; ) Uu(n, r, o), n = n.sibling;
  }
  var Rn = null, ur = !1;
  function Ir(n, r, o) {
    for (o = o.child; o !== null; ) Fu(n, r, o), o = o.sibling;
  }
  function Fu(n, r, o) {
    if (ea && typeof ea.onCommitFiberUnmount == "function") try {
      ea.onCommitFiberUnmount(Ro, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        mr || ju(o, r);
      case 6:
        var s = Rn, p = ur;
        Rn = null, Ir(n, r, o), Rn = s, ur = p, Rn !== null && (ur ? (n = Rn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Rn.removeChild(o.stateNode));
        break;
      case 18:
        Rn !== null && (ur ? (n = Rn, o = o.stateNode, n.nodeType === 8 ? jo(n.parentNode, o) : n.nodeType === 1 && jo(n, o), Mo(n)) : jo(Rn, o.stateNode));
        break;
      case 4:
        s = Rn, p = ur, Rn = o.stateNode.containerInfo, ur = !0, Ir(n, r, o), Rn = s, ur = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!mr && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var h = p, C = h.destroy;
            h = h.tag, C !== void 0 && (h & 2 || h & 4) && xp(o, r, C), p = p.next;
          } while (p !== s);
        }
        Ir(n, r, o);
        break;
      case 1:
        if (!mr && (ju(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
        } catch (O) {
          zn(o, r, O);
        }
        Ir(n, r, o);
        break;
      case 21:
        Ir(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (mr = (s = mr) || o.memoizedState !== null, Ir(n, r, o), mr = s) : Ir(n, r, o);
        break;
      default:
        Ir(n, r, o);
    }
  }
  function Hu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Cf()), r.forEach(function(s) {
        var p = jg.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function sr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var s = 0; s < o.length; s++) {
      var p = o[s];
      try {
        var h = n, C = r, O = C;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              Rn = O.stateNode, ur = !1;
              break e;
            case 3:
              Rn = O.stateNode.containerInfo, ur = !0;
              break e;
            case 4:
              Rn = O.stateNode.containerInfo, ur = !0;
              break e;
          }
          O = O.return;
        }
        if (Rn === null) throw Error(d(160));
        Fu(h, C, p), Rn = null, ur = !1;
        var j = p.alternate;
        j !== null && (j.return = null), p.return = null;
      } catch (ee) {
        zn(p, r, ee);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Ih(r, n), r = r.sibling;
  }
  function Ih(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (sr(r, n), Ai(n), s & 4) {
          try {
            zu(3, n, n.return), bf(3, n);
          } catch (Ye) {
            zn(n, n.return, Ye);
          }
          try {
            zu(5, n, n.return);
          } catch (Ye) {
            zn(n, n.return, Ye);
          }
        }
        break;
      case 1:
        sr(r, n), Ai(n), s & 512 && o !== null && ju(o, o.return);
        break;
      case 5:
        if (sr(r, n), Ai(n), s & 512 && o !== null && ju(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            xa(p, "");
          } catch (Ye) {
            zn(n, n.return, Ye);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var h = n.memoizedProps, C = o !== null ? o.memoizedProps : h, O = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            O === "input" && h.type === "radio" && h.name != null && vn(p, h), _n(O, C);
            var ee = _n(O, h);
            for (C = 0; C < j.length; C += 2) {
              var ye = j[C], Se = j[C + 1];
              ye === "style" ? Kt(p, Se) : ye === "dangerouslySetInnerHTML" ? Ci(p, Se) : ye === "children" ? xa(p, Se) : ne(p, ye, Se, ee);
            }
            switch (O) {
              case "input":
                sn(p, h);
                break;
              case "textarea":
                Sa(p, h);
                break;
              case "select":
                var he = p._wrapperState.wasMultiple;
                p._wrapperState.wasMultiple = !!h.multiple;
                var ze = h.value;
                ze != null ? Tr(p, !!h.multiple, ze, !1) : he !== !!h.multiple && (h.defaultValue != null ? Tr(
                  p,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : Tr(p, !!h.multiple, h.multiple ? [] : "", !1));
            }
            p[Sl] = h;
          } catch (Ye) {
            zn(n, n.return, Ye);
          }
        }
        break;
      case 6:
        if (sr(r, n), Ai(n), s & 4) {
          if (n.stateNode === null) throw Error(d(162));
          p = n.stateNode, h = n.memoizedProps;
          try {
            p.nodeValue = h;
          } catch (Ye) {
            zn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (sr(r, n), Ai(n), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Mo(r.containerInfo);
        } catch (Ye) {
          zn(n, n.return, Ye);
        }
        break;
      case 4:
        sr(r, n), Ai(n);
        break;
      case 13:
        sr(r, n), Ai(n), p = n.child, p.flags & 8192 && (h = p.memoizedState !== null, p.stateNode.isHidden = h, !h || p.alternate !== null && p.alternate.memoizedState !== null || (_f = $t())), s & 4 && Hu(n);
        break;
      case 22:
        if (ye = o !== null && o.memoizedState !== null, n.mode & 1 ? (mr = (ee = mr) || ye, sr(r, n), mr = ee) : sr(r, n), Ai(n), s & 8192) {
          if (ee = n.memoizedState !== null, (n.stateNode.isHidden = ee) && !ye && n.mode & 1) for (Ve = n, ye = n.child; ye !== null; ) {
            for (Se = Ve = ye; Ve !== null; ) {
              switch (he = Ve, ze = he.child, he.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zu(4, he, he.return);
                  break;
                case 1:
                  ju(he, he.return);
                  var Be = he.stateNode;
                  if (typeof Be.componentWillUnmount == "function") {
                    s = he, o = he.return;
                    try {
                      r = s, Be.props = r.memoizedProps, Be.state = r.memoizedState, Be.componentWillUnmount();
                    } catch (Ye) {
                      zn(s, o, Ye);
                    }
                  }
                  break;
                case 5:
                  ju(he, he.return);
                  break;
                case 22:
                  if (he.memoizedState !== null) {
                    Bh(Se);
                    continue;
                  }
              }
              ze !== null ? (ze.return = he, Ve = ze) : Bh(Se);
            }
            ye = ye.sibling;
          }
          e: for (ye = null, Se = n; ; ) {
            if (Se.tag === 5) {
              if (ye === null) {
                ye = Se;
                try {
                  p = Se.stateNode, ee ? (h = p.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (O = Se.stateNode, j = Se.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, O.style.display = _t("display", C));
                } catch (Ye) {
                  zn(n, n.return, Ye);
                }
              }
            } else if (Se.tag === 6) {
              if (ye === null) try {
                Se.stateNode.nodeValue = ee ? "" : Se.memoizedProps;
              } catch (Ye) {
                zn(n, n.return, Ye);
              }
            } else if ((Se.tag !== 22 && Se.tag !== 23 || Se.memoizedState === null || Se === n) && Se.child !== null) {
              Se.child.return = Se, Se = Se.child;
              continue;
            }
            if (Se === n) break e;
            for (; Se.sibling === null; ) {
              if (Se.return === null || Se.return === n) break e;
              ye === Se && (ye = null), Se = Se.return;
            }
            ye === Se && (ye = null), Se.sibling.return = Se.return, Se = Se.sibling;
          }
        }
        break;
      case 19:
        sr(r, n), Ai(n), s & 4 && Hu(n);
        break;
      case 21:
        break;
      default:
        sr(
          r,
          n
        ), Ai(n);
    }
  }
  function Ai(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Ep(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (xa(p, ""), s.flags &= -33);
            var h = Vh(n);
            Uu(n, h, p);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo, O = Vh(n);
            qs(n, O, C);
            break;
          default:
            throw Error(d(161));
        }
      } catch (j) {
        zn(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Og(n, r, o) {
    Ve = n, Cp(n);
  }
  function Cp(n, r, o) {
    for (var s = (n.mode & 1) !== 0; Ve !== null; ) {
      var p = Ve, h = p.child;
      if (p.tag === 22 && s) {
        var C = p.memoizedState !== null || Pu;
        if (!C) {
          var O = p.alternate, j = O !== null && O.memoizedState !== null || mr;
          O = Pu;
          var ee = mr;
          if (Pu = C, (mr = j) && !ee) for (Ve = p; Ve !== null; ) C = Ve, j = C.child, C.tag === 22 && C.memoizedState !== null ? wp(p) : j !== null ? (j.return = C, Ve = j) : wp(p);
          for (; h !== null; ) Ve = h, Cp(h), h = h.sibling;
          Ve = p, Pu = O, mr = ee;
        }
        Vu(n);
      } else p.subtreeFlags & 8772 && h !== null ? (h.return = p, Ve = h) : Vu(n);
    }
  }
  function Vu(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              mr || bf(5, r);
              break;
            case 1:
              var s = r.stateNode;
              if (r.flags & 4 && !mr) if (o === null) s.componentDidMount();
              else {
                var p = r.elementType === r.type ? o.memoizedProps : ca(r.type, o.memoizedProps);
                s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var h = r.updateQueue;
              h !== null && Th(r, h, s);
              break;
            case 3:
              var C = r.updateQueue;
              if (C !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Th(r, C, o);
              }
              break;
            case 5:
              var O = r.stateNode;
              if (o === null && r.flags & 4) {
                o = O;
                var j = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && o.focus();
                    break;
                  case "img":
                    j.src && (o.src = j.src);
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
              if (r.memoizedState === null) {
                var ee = r.alternate;
                if (ee !== null) {
                  var ye = ee.memoizedState;
                  if (ye !== null) {
                    var Se = ye.dehydrated;
                    Se !== null && Mo(Se);
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
              throw Error(d(163));
          }
          mr || r.flags & 512 && Rf(r);
        } catch (he) {
          zn(r, r.return, he);
        }
      }
      if (r === n) {
        Ve = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function Bh(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if (r === n) {
        Ve = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function wp(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              bf(4, r);
            } catch (j) {
              zn(r, o, j);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (j) {
                zn(r, p, j);
              }
            }
            var h = r.return;
            try {
              Rf(r);
            } catch (j) {
              zn(r, h, j);
            }
            break;
          case 5:
            var C = r.return;
            try {
              Rf(r);
            } catch (j) {
              zn(r, C, j);
            }
        }
      } catch (j) {
        zn(r, r.return, j);
      }
      if (r === n) {
        Ve = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Ve = O;
        break;
      }
      Ve = r.return;
    }
  }
  var Ng = Math.ceil, Nl = ce.ReactCurrentDispatcher, Tf = ce.ReactCurrentOwner, qa = ce.ReactCurrentBatchConfig, Lt = 0, jn = null, En = null, Zn = 0, pa = 0, Iu = Tt(0), Jn = 0, Zs = null, Ml = 0, Bu = 0, bp = 0, Yo = null, Lr = null, _f = 0, $u = 1 / 0, io = null, kf = !1, Rp = null, Za = null, Wu = !1, Ja = null, Df = 0, Js = 0, Of = null, ec = -1, Al = 0;
  function cr() {
    return Lt & 6 ? $t() : ec !== -1 ? ec : ec = $t();
  }
  function oo(n) {
    return n.mode & 1 ? Lt & 2 && Zn !== 0 ? Zn & -Zn : Qc.transition !== null ? (Al === 0 && (Al = ru()), Al) : (n = Wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Cs(n.type)), n) : 1;
  }
  function On(n, r, o, s) {
    if (50 < Js) throw Js = 0, Of = null, Error(d(185));
    $i(n, o, s), (!(Lt & 2) || n !== jn) && (n === jn && (!(Lt & 2) && (Bu |= o), Jn === 4 && Li(n, Zn)), er(n, s), o === 1 && Lt === 0 && !(r.mode & 1) && ($u = $t() + 500, lr && ia()));
  }
  function er(n, r) {
    var o = n.callbackNode;
    ko(n, r);
    var s = Hr(n, n === jn ? Zn : 0);
    if (s === 0) o !== null && gn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && gn(o), r === 1) n.tag === 0 ? rp(Yu.bind(null, n)) : np(Yu.bind(null, n)), Jd(function() {
        !(Lt & 6) && ia();
      }), o = null;
      else {
        switch (iu(s)) {
          case 1:
            o = Ur;
            break;
          case 4:
            o = Dt;
            break;
          case 16:
            o = Ua;
            break;
          case 536870912:
            o = tu;
            break;
          default:
            o = Ua;
        }
        o = qh(o, Nf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Nf(n, r) {
    if (ec = -1, Al = 0, Lt & 6) throw Error(d(327));
    var o = n.callbackNode;
    if (Qu() && n.callbackNode !== o) return null;
    var s = Hr(n, n === jn ? Zn : 0);
    if (s === 0) return null;
    if (s & 30 || s & n.expiredLanes || r) r = Af(n, s);
    else {
      r = s;
      var p = Lt;
      Lt |= 2;
      var h = Wh();
      (jn !== n || Zn !== r) && (io = null, $u = $t() + 500, Pl(n, r));
      do
        try {
          Ag();
          break;
        } catch (O) {
          $h(n, O);
        }
      while (!0);
      _a(), Nl.current = h, Lt = p, En !== null ? r = 0 : (jn = null, Zn = 0, r = Jn);
    }
    if (r !== 0) {
      if (r === 2 && (p = Do(n), p !== 0 && (s = p, r = Ll(n, p))), r === 1) throw o = Zs, Pl(n, 0), Li(n, s), er(n, $t()), o;
      if (r === 6) Li(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !_p(p) && (r = Af(n, s), r === 2 && (h = Do(n), h !== 0 && (s = h, r = Ll(n, h))), r === 1)) throw o = Zs, Pl(n, 0), Li(n, s), er(n, $t()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Qo(n, Lr, io);
            break;
          case 3:
            if (Li(n, s), (s & 130023424) === s && (r = _f + 500 - $t(), 10 < r)) {
              if (Hr(n, 0) !== 0) break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                cr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = gl(Qo.bind(null, n, Lr, io), r);
              break;
            }
            Qo(n, Lr, io);
            break;
          case 4:
            if (Li(n, s), (s & 4194240) === s) break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var C = 31 - Fr(s);
              h = 1 << C, C = r[C], C > p && (p = C), s &= ~h;
            }
            if (s = p, s = $t() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Ng(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = gl(Qo.bind(null, n, Lr, io), s);
              break;
            }
            Qo(n, Lr, io);
            break;
          case 5:
            Qo(n, Lr, io);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return er(n, $t()), n.callbackNode === o ? Nf.bind(null, n) : null;
  }
  function Ll(n, r) {
    var o = Yo;
    return n.current.memoizedState.isDehydrated && (Pl(n, r).flags |= 256), n = Af(n, r), n !== 2 && (r = Lr, Lr = o, r !== null && Tp(r)), n;
  }
  function Tp(n) {
    Lr === null ? Lr = n : Lr.push.apply(Lr, n);
  }
  function _p(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
          var p = o[s], h = p.getSnapshot;
          p = p.value;
          try {
            if (!Va(h(), p)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Li(n, r) {
    for (r &= ~bp, r &= ~Bu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Fr(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Yu(n) {
    if (Lt & 6) throw Error(d(327));
    Qu();
    var r = Hr(n, 0);
    if (!(r & 1)) return er(n, $t()), null;
    var o = Af(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Do(n);
      s !== 0 && (r = s, o = Ll(n, s));
    }
    if (o === 1) throw o = Zs, Pl(n, 0), Li(n, r), er(n, $t()), o;
    if (o === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Qo(n, Lr, io), er(n, $t()), null;
  }
  function kp(n, r) {
    var o = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = o, Lt === 0 && ($u = $t() + 500, lr && ia());
    }
  }
  function Pi(n) {
    Ja !== null && Ja.tag === 0 && !(Lt & 6) && Qu();
    var r = Lt;
    Lt |= 1;
    var o = qa.transition, s = Wt;
    try {
      if (qa.transition = null, Wt = 1, n) return n();
    } finally {
      Wt = s, qa.transition = o, Lt = r, !(Lt & 6) && ia();
    }
  }
  function Mf() {
    pa = Iu.current, Xt(Iu);
  }
  function Pl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, yh(o)), En !== null) for (o = En.return; o !== null; ) {
      var s = o;
      switch (ip(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && $a();
          break;
        case 3:
          bu(), Xt(Ln), Xt(gt), dp();
          break;
        case 5:
          fp(s);
          break;
        case 4:
          bu();
          break;
        case 13:
          Xt(bn);
          break;
        case 19:
          Xt(bn);
          break;
        case 10:
          up(s.type._context);
          break;
        case 22:
        case 23:
          Mf();
      }
      o = o.return;
    }
    if (jn = n, En = n = Go(n.current, null), Zn = pa = r, Jn = 0, Zs = null, bp = Bu = Ml = 0, Lr = Yo = null, Cl !== null) {
      for (r = 0; r < Cl.length; r++) if (o = Cl[r], s = o.interleaved, s !== null) {
        o.interleaved = null;
        var p = s.next, h = o.pending;
        if (h !== null) {
          var C = h.next;
          h.next = p, s.next = C;
        }
        o.pending = s;
      }
      Cl = null;
    }
    return n;
  }
  function $h(n, r) {
    do {
      var o = En;
      try {
        if (_a(), ef.current = Mr, ka) {
          for (var s = qe.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          ka = !1;
        }
        if (Ge = 0, Nt = St = qe = null, Ru = !1, Is = 0, Tf.current = null, o === null || o.return === null) {
          Jn = 1, Zs = r, En = null;
          break;
        }
        e: {
          var h = n, C = o.return, O = o, j = r;
          if (r = Zn, O.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var ee = j, ye = O, Se = ye.tag;
            if (!(ye.mode & 1) && (Se === 0 || Se === 11 || Se === 15)) {
              var he = ye.alternate;
              he ? (ye.updateQueue = he.updateQueue, ye.memoizedState = he.memoizedState, ye.lanes = he.lanes) : (ye.updateQueue = null, ye.memoizedState = null);
            }
            var ze = Ph(C);
            if (ze !== null) {
              ze.flags &= -257, yp(ze, C, O, h, r), ze.mode & 1 && Qs(h, ee, r), r = ze, j = ee;
              var Be = r.updateQueue;
              if (Be === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(j), r.updateQueue = Ye;
              } else Be.add(j);
              break e;
            } else {
              if (!(r & 1)) {
                Qs(h, ee, r), tc();
                break e;
              }
              j = Error(d(426));
            }
          } else if (xn && O.mode & 1) {
            var Vn = Ph(C);
            if (Vn !== null) {
              !(Vn.flags & 65536) && (Vn.flags |= 256), yp(Vn, C, O, h, r), lp($o(j, O));
              break e;
            }
          }
          h = j = $o(j, O), Jn !== 4 && (Jn = 2), Yo === null ? Yo = [h] : Yo.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var W = Ah(h, j, r);
                Rh(h, W);
                break e;
              case 1:
                O = j;
                var V = h.type, X = h.stateNode;
                if (!(h.flags & 128) && (typeof V.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && (Za === null || !Za.has(X)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var Re = Lh(h, O, r);
                  Rh(h, Re);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Qh(o);
      } catch (Ke) {
        r = Ke, En === o && o !== null && (En = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Wh() {
    var n = Nl.current;
    return Nl.current = Mr, n === null ? Mr : n;
  }
  function tc() {
    (Jn === 0 || Jn === 3 || Jn === 2) && (Jn = 4), jn === null || !(Ml & 268435455) && !(Bu & 268435455) || Li(jn, Zn);
  }
  function Af(n, r) {
    var o = Lt;
    Lt |= 2;
    var s = Wh();
    (jn !== n || Zn !== r) && (io = null, Pl(n, r));
    do
      try {
        Mg();
        break;
      } catch (p) {
        $h(n, p);
      }
    while (!0);
    if (_a(), Lt = o, Nl.current = s, En !== null) throw Error(d(261));
    return jn = null, Zn = 0, Jn;
  }
  function Mg() {
    for (; En !== null; ) Yh(En);
  }
  function Ag() {
    for (; En !== null && !Dr(); ) Yh(En);
  }
  function Yh(n) {
    var r = Xh(n.alternate, n, pa);
    n.memoizedProps = n.pendingProps, r === null ? Qh(n) : En = r, Tf.current = null;
  }
  function Qh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = kg(o, r), o !== null) {
          o.flags &= 32767, En = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Jn = 6, En = null;
          return;
        }
      } else if (o = _g(o, r, pa), o !== null) {
        En = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        En = r;
        return;
      }
      En = r = n;
    } while (r !== null);
    Jn === 0 && (Jn = 5);
  }
  function Qo(n, r, o) {
    var s = Wt, p = qa.transition;
    try {
      qa.transition = null, Wt = 1, Lg(n, r, o, s);
    } finally {
      qa.transition = p, Wt = s;
    }
    return null;
  }
  function Lg(n, r, o, s) {
    do
      Qu();
    while (Ja !== null);
    if (Lt & 6) throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (Md(n, h), n === jn && (En = jn = null, Zn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Wu || (Wu = !0, qh(Ua, function() {
      return Qu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = qa.transition, qa.transition = null;
      var C = Wt;
      Wt = 1;
      var O = Lt;
      Lt |= 4, Tf.current = null, Dg(n, o), Ih(o, n), jc(yl), Ha = !!qd, yl = qd = null, n.current = o, Og(o), Ti(), Lt = O, Wt = C, qa.transition = h;
    } else n.current = o;
    if (Wu && (Wu = !1, Ja = n, Df = p), h = n.pendingLanes, h === 0 && (Za = null), Ss(o.stateNode), er(n, $t()), r !== null) for (s = n.onRecoverableError, o = 0; o < r.length; o++) p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (kf) throw kf = !1, n = Rp, Rp = null, n;
    return Df & 1 && n.tag !== 0 && Qu(), h = n.pendingLanes, h & 1 ? n === Of ? Js++ : (Js = 0, Of = n) : Js = 0, ia(), null;
  }
  function Qu() {
    if (Ja !== null) {
      var n = iu(Df), r = qa.transition, o = Wt;
      try {
        if (qa.transition = null, Wt = 16 > n ? 16 : n, Ja === null) var s = !1;
        else {
          if (n = Ja, Ja = null, Df = 0, Lt & 6) throw Error(d(331));
          var p = Lt;
          for (Lt |= 4, Ve = n.current; Ve !== null; ) {
            var h = Ve, C = h.child;
            if (Ve.flags & 16) {
              var O = h.deletions;
              if (O !== null) {
                for (var j = 0; j < O.length; j++) {
                  var ee = O[j];
                  for (Ve = ee; Ve !== null; ) {
                    var ye = Ve;
                    switch (ye.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zu(8, ye, h);
                    }
                    var Se = ye.child;
                    if (Se !== null) Se.return = ye, Ve = Se;
                    else for (; Ve !== null; ) {
                      ye = Ve;
                      var he = ye.sibling, ze = ye.return;
                      if (Hh(ye), ye === ee) {
                        Ve = null;
                        break;
                      }
                      if (he !== null) {
                        he.return = ze, Ve = he;
                        break;
                      }
                      Ve = ze;
                    }
                  }
                }
                var Be = h.alternate;
                if (Be !== null) {
                  var Ye = Be.child;
                  if (Ye !== null) {
                    Be.child = null;
                    do {
                      var Vn = Ye.sibling;
                      Ye.sibling = null, Ye = Vn;
                    } while (Ye !== null);
                  }
                }
                Ve = h;
              }
            }
            if (h.subtreeFlags & 2064 && C !== null) C.return = h, Ve = C;
            else e: for (; Ve !== null; ) {
              if (h = Ve, h.flags & 2048) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  zu(9, h, h.return);
              }
              var W = h.sibling;
              if (W !== null) {
                W.return = h.return, Ve = W;
                break e;
              }
              Ve = h.return;
            }
          }
          var V = n.current;
          for (Ve = V; Ve !== null; ) {
            C = Ve;
            var X = C.child;
            if (C.subtreeFlags & 2064 && X !== null) X.return = C, Ve = X;
            else e: for (C = V; Ve !== null; ) {
              if (O = Ve, O.flags & 2048) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bf(9, O);
                }
              } catch (Ke) {
                zn(O, O.return, Ke);
              }
              if (O === C) {
                Ve = null;
                break e;
              }
              var Re = O.sibling;
              if (Re !== null) {
                Re.return = O.return, Ve = Re;
                break e;
              }
              Ve = O.return;
            }
          }
          if (Lt = p, ia(), ea && typeof ea.onPostCommitFiberRoot == "function") try {
            ea.onPostCommitFiberRoot(Ro, n);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Wt = o, qa.transition = r;
      }
    }
    return !1;
  }
  function Gh(n, r, o) {
    r = $o(o, r), r = Ah(n, r, 1), n = Io(n, r, 1), r = cr(), n !== null && ($i(n, 1, r), er(n, r));
  }
  function zn(n, r, o) {
    if (n.tag === 3) Gh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Gh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var s = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Za === null || !Za.has(s))) {
          n = $o(o, n), n = Lh(r, n, 1), r = Io(r, n, 1), n = cr(), r !== null && ($i(r, 1, n), er(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Pg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = cr(), n.pingedLanes |= n.suspendedLanes & o, jn === n && (Zn & o) === o && (Jn === 4 || Jn === 3 && (Zn & 130023424) === Zn && 500 > $t() - _f ? Pl(n, 0) : bp |= o), er(n, r);
  }
  function Kh(n, r) {
    r === 0 && (n.mode & 1 ? (r = To, To <<= 1, !(To & 130023424) && (To = 4194304)) : r = 1);
    var o = cr();
    n = no(n, r), n !== null && ($i(n, r, o), er(n, o));
  }
  function Dp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Kh(n, o);
  }
  function jg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    s !== null && s.delete(r), Kh(n, o);
  }
  var Xh;
  Xh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Ln.current) fa = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return fa = !1, ao(n, r, o);
      fa = !!(n.flags & 131072);
    }
    else fa = !1, xn && r.flags & 1048576 && ap(r, Su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Xs(n, r), n = r.pendingProps;
        var p = Ba(r, gt.current);
        Eu(r, o), p = ve(null, r, s, n, p, o);
        var h = Gn();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, wn(s) ? (h = !0, Ic(r)) : h = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Kc(r), p.updater = kl, r.stateNode = p, p._reactInternals = r, hp(r, s, n, o), r = gf(null, r, s, !0, h, o)) : (r.tag = 0, xn && h && Bc(r), Fn(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Xs(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = zg(s), n = ca(s, n), p) {
            case 0:
              r = bt(null, r, s, n, o);
              break e;
            case 1:
              r = Gs(null, r, s, n, o);
              break e;
            case 11:
              r = Mu(null, r, s, n, o);
              break e;
            case 14:
              r = Wo(null, r, s, ca(s.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : ca(s, p), bt(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : ca(s, p), Gs(n, r, s, p, o);
      case 3:
        e: {
          if (Tg(r), n === null) throw Error(d(387));
          s = r.pendingProps, h = r.memoizedState, p = h.element, Cu(n, r), qc(r, s, null, o);
          var C = r.memoizedState;
          if (s = C.element, h.isDehydrated) if (h = { element: s, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            p = $o(Error(d(423)), r), r = zh(n, r, s, o, p);
            break e;
          } else if (s !== p) {
            p = $o(Error(d(424)), r), r = zh(n, r, s, o, p);
            break e;
          } else for (ua = hi(r.stateNode.containerInfo.firstChild), Ta = r, xn = !0, Ya = null, o = wh(r, null, s, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Dn(), s === p) {
              r = Hn(n, r, o);
              break e;
            }
            Fn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return _h(r), n === null && Wc(r), s = r.type, p = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = p.children, Ls(s, p) ? C = null : h !== null && Ls(s, h) && (r.flags |= 32), Dl(n, r), Fn(n, r, C, o), r.child;
      case 6:
        return n === null && Wc(r), null;
      case 13:
        return Uh(n, r, o);
      case 4:
        return cp(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = xu(r, null, s, o) : Fn(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : ca(s, p), Mu(n, r, s, p, o);
      case 7:
        return Fn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Fn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Fn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, h = r.memoizedProps, C = p.value, tn(to, s._currentValue), s._currentValue = C, h !== null) if (Va(h.value, C)) {
            if (h.children === p.children && !Ln.current) {
              r = Hn(n, r, o);
              break e;
            }
          } else for (h = r.child, h !== null && (h.return = r); h !== null; ) {
            var O = h.dependencies;
            if (O !== null) {
              C = h.child;
              for (var j = O.firstContext; j !== null; ) {
                if (j.context === s) {
                  if (h.tag === 1) {
                    j = sa(-1, o & -o), j.tag = 2;
                    var ee = h.updateQueue;
                    if (ee !== null) {
                      ee = ee.shared;
                      var ye = ee.pending;
                      ye === null ? j.next = j : (j.next = ye.next, ye.next = j), ee.pending = j;
                    }
                  }
                  h.lanes |= o, j = h.alternate, j !== null && (j.lanes |= o), sp(
                    h.return,
                    o,
                    r
                  ), O.lanes |= o;
                  break;
                }
                j = j.next;
              }
            } else if (h.tag === 10) C = h.type === r.type ? null : h.child;
            else if (h.tag === 18) {
              if (C = h.return, C === null) throw Error(d(341));
              C.lanes |= o, O = C.alternate, O !== null && (O.lanes |= o), sp(C, o, r), C = h.sibling;
            } else C = h.child;
            if (C !== null) C.return = h;
            else for (C = h; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (h = C.sibling, h !== null) {
                h.return = C.return, C = h;
                break;
              }
              C = C.return;
            }
            h = C;
          }
          Fn(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, Eu(r, o), p = Ga(p), s = s(p), r.flags |= 1, Fn(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = ca(s, r.pendingProps), p = ca(s.type, p), Wo(n, r, s, p, o);
      case 15:
        return yf(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : ca(s, p), Xs(n, r), r.tag = 1, wn(s) ? (n = !0, Ic(r)) : n = !1, Eu(r, o), Oh(r, s, p), hp(r, s, p, o), gf(null, r, s, !0, n, o);
      case 19:
        return Sp(n, r, o);
      case 22:
        return da(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function qh(n, r) {
    return cn(n, r);
  }
  function Zh(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ei(n, r, o, s) {
    return new Zh(n, r, o, s);
  }
  function Op(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function zg(n) {
    if (typeof n == "function") return Op(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ot) return 11;
      if (n === de) return 14;
    }
    return 2;
  }
  function Go(n, r) {
    var o = n.alternate;
    return o === null ? (o = ei(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Lf(n, r, o, s, p, h) {
    var C = 2;
    if (s = n, typeof n == "function") Op(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case pe:
        return jl(o.children, p, h, r);
      case He:
        C = 8, p |= 8;
        break;
      case st:
        return n = ei(12, o, r, p | 2), n.elementType = st, n.lanes = h, n;
      case ke:
        return n = ei(13, o, r, p), n.elementType = ke, n.lanes = h, n;
      case Ae:
        return n = ei(19, o, r, p), n.elementType = Ae, n.lanes = h, n;
      case se:
        return Pf(o, p, h, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Qe:
            C = 10;
            break e;
          case De:
            C = 9;
            break e;
          case ot:
            C = 11;
            break e;
          case de:
            C = 14;
            break e;
          case Le:
            C = 16, s = null;
            break e;
        }
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = ei(C, o, r, p), r.elementType = n, r.type = s, r.lanes = h, r;
  }
  function jl(n, r, o, s) {
    return n = ei(7, n, s, r), n.lanes = o, n;
  }
  function Pf(n, r, o, s) {
    return n = ei(22, n, s, r), n.elementType = se, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function jf(n, r, o) {
    return n = ei(6, n, null, r), n.lanes = o, n;
  }
  function nc(n, r, o) {
    return r = ei(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function rc(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = au(0), this.expirationTimes = au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = au(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Np(n, r, o, s, p, h, C, O, j) {
    return n = new rc(n, r, o, O, j), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = ei(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Kc(h), n;
  }
  function Jh(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: we, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function Mp(n) {
    if (!n) return Oi;
    n = n._reactInternals;
    e: {
      if (Xe(n) !== n || n.tag !== 1) throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (wn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (wn(o)) return zs(n, o, r);
    }
    return r;
  }
  function Ap(n, r, o, s, p, h, C, O, j) {
    return n = Np(o, s, !0, n, p, h, C, O, j), n.context = Mp(null), o = n.current, s = cr(), p = oo(o), h = sa(s, p), h.callback = r ?? null, Io(o, h, p), n.current.lanes = p, $i(n, p, s), er(n, s), n;
  }
  function zf(n, r, o, s) {
    var p = r.current, h = cr(), C = oo(p);
    return o = Mp(o), r.context === null ? r.context = o : r.pendingContext = o, r = sa(h, C), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Io(p, r, C), n !== null && (On(n, p, C, h), Xc(n, p, C)), C;
  }
  function ac(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function em(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Lp(n, r) {
    em(n, r), (n = n.alternate) && em(n, r);
  }
  function Ug() {
    return null;
  }
  var Pp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Uf(n) {
    this._internalRoot = n;
  }
  ic.prototype.render = Uf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    zf(n, r, null, null);
  }, ic.prototype.unmount = Uf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Pi(function() {
        zf(null, n, null, null);
      }), r[Ji] = null;
    }
  };
  function ic(n) {
    this._internalRoot = n;
  }
  ic.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = lu();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < en.length && r !== 0 && r < en[o].priority; o++) ;
      en.splice(o, 0, n), o === 0 && Dc(n);
    }
  };
  function Ko(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ff(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function tm() {
  }
  function Fg(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var ee = ac(C);
          h.call(ee);
        };
      }
      var C = Ap(r, s, n, 0, null, !1, !1, "", tm);
      return n._reactRootContainer = C, n[Ji] = C.current, yu(n.nodeType === 8 ? n.parentNode : n), Pi(), C;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof s == "function") {
      var O = s;
      s = function() {
        var ee = ac(j);
        O.call(ee);
      };
    }
    var j = Np(n, 0, !1, null, null, !1, !1, "", tm);
    return n._reactRootContainer = j, n[Ji] = j.current, yu(n.nodeType === 8 ? n.parentNode : n), Pi(function() {
      zf(r, j, o, s);
    }), j;
  }
  function Hf(n, r, o, s, p) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof p == "function") {
        var O = p;
        p = function() {
          var j = ac(C);
          O.call(j);
        };
      }
      zf(r, C, n, p);
    } else C = Fg(o, r, n, p, s);
    return ac(C);
  }
  cl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ci(r.pendingLanes);
          o !== 0 && (_i(r, o | 1), er(r, $t()), !(Lt & 6) && ($u = $t() + 500, ia()));
        }
        break;
      case 13:
        Pi(function() {
          var s = no(n, 1);
          if (s !== null) {
            var p = cr();
            On(s, n, 1, p);
          }
        }), Lp(n, 1);
    }
  }, ou = function(n) {
    if (n.tag === 13) {
      var r = no(n, 134217728);
      if (r !== null) {
        var o = cr();
        On(r, n, 134217728, o);
      }
      Lp(n, 134217728);
    }
  }, zt = function(n) {
    if (n.tag === 13) {
      var r = oo(n), o = no(n, r);
      if (o !== null) {
        var s = cr();
        On(o, n, r, s);
      }
      Lp(n, r);
    }
  }, lu = function() {
    return Wt;
  }, uu = function(n, r) {
    var o = Wt;
    try {
      return Wt = n, r();
    } finally {
      Wt = o;
    }
  }, jr = function(n, r, o) {
    switch (r) {
      case "input":
        if (sn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = at(s);
              if (!p) throw Error(d(90));
              Rt(s), sn(s, p);
            }
          }
        }
        break;
      case "textarea":
        Sa(n, o);
        break;
      case "select":
        r = o.value, r != null && Tr(n, !!o.multiple, r, !1);
    }
  }, sl = kp, eu = Pi;
  var Hg = { usingClientEntryPoint: !1, Events: [js, gu, at, za, Co, kp] }, oc = { findFiberByHostInstance: Ia, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, nm = { bundleType: oc.bundleType, version: oc.version, rendererPackageName: oc.rendererPackageName, rendererConfig: oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = kt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: oc.findFiberByHostInstance || Ug, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vf.isDisabled && Vf.supportsFiber) try {
      Ro = Vf.inject(nm), ea = Vf;
    } catch {
    }
  }
  return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hg, oi.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ko(r)) throw Error(d(200));
    return Jh(n, r, null, o);
  }, oi.createRoot = function(n, r) {
    if (!Ko(n)) throw Error(d(299));
    var o = !1, s = "", p = Pp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Np(n, 1, !1, null, null, o, !1, s, p), n[Ji] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new Uf(r);
  }, oi.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = kt(r), n = n === null ? null : n.stateNode, n;
  }, oi.flushSync = function(n) {
    return Pi(n);
  }, oi.hydrate = function(n, r, o) {
    if (!Ff(r)) throw Error(d(200));
    return Hf(null, n, r, !0, o);
  }, oi.hydrateRoot = function(n, r, o) {
    if (!Ko(n)) throw Error(d(405));
    var s = o != null && o.hydratedSources || null, p = !1, h = "", C = Pp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = Ap(r, null, n, 1, o ?? null, p, !1, h, C), n[Ji] = r.current, yu(n), s) for (n = 0; n < s.length; n++) o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
      o,
      p
    );
    return new ic(r);
  }, oi.render = function(n, r, o) {
    if (!Ff(r)) throw Error(d(200));
    return Hf(null, n, r, !1, o);
  }, oi.unmountComponentAtNode = function(n) {
    if (!Ff(n)) throw Error(d(40));
    return n._reactRootContainer ? (Pi(function() {
      Hf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, oi.unstable_batchedUpdates = kp, oi.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!Ff(o)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return Hf(n, r, o, !1, s);
  }, oi.version = "18.3.1-next-f1338f8080-20240426", oi;
}
var li = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h1;
function XM() {
  return h1 || (h1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var u = N, f = G1(), d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function E(e) {
      g = e;
    }
    function w(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("warn", e, a);
      }
    }
    function m(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("error", e, a);
      }
    }
    function R(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var c = a.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var T = 0, k = 1, B = 2, A = 3, z = 4, P = 5, $ = 6, F = 7, G = 8, Z = 9, K = 10, ne = 11, ce = 12, re = 13, we = 14, pe = 15, He = 16, st = 17, Qe = 18, De = 19, ot = 21, ke = 22, Ae = 23, de = 24, Le = 25, se = !0, le = !1, ge = !1, be = !1, H = !1, ue = !0, Je = !1, et = !0, yt = !0, vt = !0, Te = !0, Ie = /* @__PURE__ */ new Set(), tt = {}, lt = {};
    function Ct(e, t) {
      Rt(e, t), Rt(e + "Capture", t);
    }
    function Rt(e, t) {
      tt[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), tt[e] = t;
      {
        var a = e.toLowerCase();
        lt[a] = e, e === "onDoubleClick" && (lt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ie.add(t[i]);
    }
    var At = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rn = Object.prototype.hasOwnProperty;
    function yn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function vn(e) {
      try {
        return sn(e), !1;
      } catch {
        return !0;
      }
    }
    function sn(e) {
      return "" + e;
    }
    function Rr(e, t) {
      if (vn(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yn(e)), sn(e);
    }
    function Xn(e) {
      if (vn(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(e)), sn(e);
    }
    function rr(e, t) {
      if (vn(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yn(e)), sn(e);
    }
    function Tr(e, t) {
      if (vn(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yn(e)), sn(e);
    }
    function Zr(e) {
      if (vn(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", yn(e)), sn(e);
    }
    function _r(e) {
      if (vn(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", yn(e)), sn(e);
    }
    var Sa = 0, pr = 1, Jr = 2, Tn = 3, Pr = 4, Ci = 5, xa = 6, _e = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", nt = _e + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _t = new RegExp("^[" + _e + "][" + nt + "]*$"), Kt = {}, qt = {};
    function Un(e) {
      return rn.call(qt, e) ? !0 : rn.call(Kt, e) ? !1 : _t.test(e) ? (qt[e] = !0, !0) : (Kt[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
      return t !== null ? t.type === Sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function kr(e, t, a, i) {
      if (a !== null && a.type === Sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function an(e, t, a, i) {
      if (t === null || typeof t > "u" || kr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Tn:
            return !t;
          case Pr:
            return t === !1;
          case Ci:
            return isNaN(t);
          case xa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function jr(e) {
      return Jt.hasOwnProperty(e) ? Jt[e] : null;
    }
    function Zt(e, t, a, i, l, c, v) {
      this.acceptsBooleans = t === Jr || t === Tn || t === Pr, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var Jt = {}, ui = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ui.forEach(function(e) {
      Jt[e] = new Zt(
        e,
        Sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Jt[t] = new Zt(
        t,
        pr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        Jr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        Jr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        Tn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        Tn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        Pr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        xa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        Ci,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var za = /[\-\:]([a-z])/g, Co = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(za, Co);
      Jt[t] = new Zt(
        t,
        pr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(za, Co);
      Jt[t] = new Zt(
        t,
        pr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(za, Co);
      Jt[t] = new Zt(
        t,
        pr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        pr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var sl = "xlinkHref";
    Jt[sl] = new Zt(
      "xlinkHref",
      pr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Jt[e] = new Zt(
        e,
        pr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var eu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Bi = !1;
    function wo(e) {
      !Bi && eu.test(e) && (Bi = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ea(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Rr(a, t), i.sanitizeURL && wo("" + a);
        var c = i.attributeName, v = null;
        if (i.type === Pr) {
          if (e.hasAttribute(c)) {
            var y = e.getAttribute(c);
            return y === "" ? !0 : an(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(c)) {
          if (an(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === Tn)
            return a;
          v = e.getAttribute(c);
        }
        return an(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function wi(e, t, a, i) {
      {
        if (!Un(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Rr(a, t), l === "" + a ? a : l;
      }
    }
    function Ca(e, t, a, i) {
      var l = jr(t);
      if (!_n(t, l, i)) {
        if (an(t, a, l, i) && (a = null), i || l === null) {
          if (Un(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : (Rr(a, t), e.setAttribute(c, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var y = l.propertyName;
          if (a === null) {
            var S = l.type;
            e[y] = S === Tn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var b = l.attributeName, _ = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var I = l.type, U;
          I === Tn || I === Pr && a === !0 ? U = "" : (Rr(a, b), U = "" + a, l.sanitizeURL && wo(U.toString())), _ ? e.setAttributeNS(_, b, U) : e.setAttribute(b, U);
        }
      }
    }
    var si = Symbol.for("react.element"), zr = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), Ri = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), me = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), kt = Symbol.for("react.scope"), Wn = Symbol.for("react.debug_trace_mode"), cn = Symbol.for("react.offscreen"), gn = Symbol.for("react.legacy_hidden"), Dr = Symbol.for("react.cache"), Ti = Symbol.for("react.tracing_marker"), $t = Symbol.iterator, ar = "@@iterator";
    function Ur(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = $t && e[$t] || e[ar];
      return typeof t == "function" ? t : null;
    }
    var Dt = Object.assign, Ua = 0, bo, tu, Ro, ea, Ss, Fr, xs;
    function Es() {
    }
    Es.__reactDisabledLog = !0;
    function _c() {
      {
        if (Ua === 0) {
          bo = console.log, tu = console.info, Ro = console.warn, ea = console.error, Ss = console.group, Fr = console.groupCollapsed, xs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Es,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ua++;
      }
    }
    function nu() {
      {
        if (Ua--, Ua === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Dt({}, e, {
              value: bo
            }),
            info: Dt({}, e, {
              value: tu
            }),
            warn: Dt({}, e, {
              value: Ro
            }),
            error: Dt({}, e, {
              value: ea
            }),
            group: Dt({}, e, {
              value: Ss
            }),
            groupCollapsed: Dt({}, e, {
              value: Fr
            }),
            groupEnd: Dt({}, e, {
              value: xs
            })
          });
        }
        Ua < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var To = d.ReactCurrentDispatcher, ci;
    function Hr(e, t, a) {
      {
        if (ci === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            ci = i && i[1] || "";
          }
        return `
` + ci + e;
      }
    }
    var _o = !1, ko;
    {
      var Do = typeof WeakMap == "function" ? WeakMap : Map;
      ko = new Do();
    }
    function ru(e, t) {
      if (!e || _o)
        return "";
      {
        var a = ko.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      _o = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = To.current, To.current = null, _c();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (te) {
              i = te;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (te) {
              i = te;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            i = te;
          }
          e();
        }
      } catch (te) {
        if (te && i && typeof te.stack == "string") {
          for (var y = te.stack.split(`
`), S = i.stack.split(`
`), b = y.length - 1, _ = S.length - 1; b >= 1 && _ >= 0 && y[b] !== S[_]; )
            _--;
          for (; b >= 1 && _ >= 0; b--, _--)
            if (y[b] !== S[_]) {
              if (b !== 1 || _ !== 1)
                do
                  if (b--, _--, _ < 0 || y[b] !== S[_]) {
                    var I = `
` + y[b].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && ko.set(e, I), I;
                  }
                while (b >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        _o = !1, To.current = c, nu(), Error.prepareStackTrace = l;
      }
      var U = e ? e.displayName || e.name : "", q = U ? Hr(U) : "";
      return typeof e == "function" && ko.set(e, q), q;
    }
    function au(e, t, a) {
      return ru(e, !0);
    }
    function $i(e, t, a) {
      return ru(e, !1);
    }
    function Md(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function _i(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ru(e, Md(e));
      if (typeof e == "string")
        return Hr(e);
      switch (e) {
        case Xe:
          return Hr("Suspense");
        case Mt:
          return Hr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ee:
            return $i(e.render);
          case jt:
            return _i(e.type, t, a);
          case ct: {
            var i = e, l = i._payload, c = i._init;
            try {
              return _i(c(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case P:
          return Hr(e.type);
        case He:
          return Hr("Lazy");
        case re:
          return Hr("Suspense");
        case De:
          return Hr("SuspenseList");
        case T:
        case B:
        case pe:
          return $i(e.type);
        case ne:
          return $i(e.type.render);
        case k:
          return au(e.type);
        default:
          return "";
      }
    }
    function iu(e) {
      try {
        var t = "", a = e;
        do
          t += Wt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function cl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case wa:
          return "Fragment";
        case zr:
          return "Portal";
        case Ri:
          return "Profiler";
        case bi:
          return "StrictMode";
        case Xe:
          return "Suspense";
        case Mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            var t = e;
            return ou(t) + ".Consumer";
          case L:
            var a = e;
            return ou(a._context) + ".Provider";
          case Ee:
            return cl(e, e.render, "ForwardRef");
          case jt:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case ct: {
            var l = e, c = l._payload, v = l._init;
            try {
              return zt(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function lu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function uu(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case de:
          return "Cache";
        case Z:
          var i = a;
          return uu(i) + ".Consumer";
        case K:
          var l = a;
          return uu(l._context) + ".Provider";
        case Qe:
          return "DehydratedFragment";
        case ne:
          return lu(a, a.render, "ForwardRef");
        case F:
          return "Fragment";
        case P:
          return a;
        case z:
          return "Portal";
        case A:
          return "Root";
        case $:
          return "Text";
        case He:
          return zt(a);
        case G:
          return a === bi ? "StrictMode" : "Mode";
        case ke:
          return "Offscreen";
        case ce:
          return "Profiler";
        case ot:
          return "Scope";
        case re:
          return "Suspense";
        case De:
          return "SuspenseList";
        case Le:
          return "TracingMarker";
        case k:
        case T:
        case st:
        case B:
        case we:
        case pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var fl = d.ReactDebugCurrentFrame, kn = null, ta = !1;
    function Vr() {
      {
        if (kn === null)
          return null;
        var e = kn._debugOwner;
        if (e !== null && typeof e < "u")
          return xt(e);
      }
      return null;
    }
    function Oo() {
      return kn === null ? "" : iu(kn);
    }
    function An() {
      fl.getCurrentStack = null, kn = null, ta = !1;
    }
    function en(e) {
      fl.getCurrentStack = e === null ? null : Oo, kn = e, ta = !1;
    }
    function kc() {
      return kn;
    }
    function na(e) {
      ta = e;
    }
    function ir(e) {
      return "" + e;
    }
    function ki(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return _r(e), e;
        default:
          return "";
      }
    }
    var Dc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wi(e, t) {
      Dc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function No(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Oc(e) {
      return e._valueTracker;
    }
    function Fa(e) {
      e._valueTracker = null;
    }
    function Mo(e) {
      var t = "";
      return e && (No(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Yi(e) {
      var t = No(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      _r(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            _r(y), i = "" + y, c.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            _r(y), i = "" + y;
          },
          stopTracking: function() {
            Fa(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Ha(e) {
      Oc(e) || (e._valueTracker = Yi(e));
    }
    function su(e) {
      if (!e)
        return !1;
      var t = Oc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Mo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ao(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Lo = !1, dl = !1, cu = !1, Cs = !1;
    function fi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function x(e, t) {
      var a = e, i = t.checked, l = Dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function M(e, t) {
      Wi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !dl && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), dl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Lo && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), Lo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ki(t.value != null ? t.value : i),
        controlled: fi(t)
      };
    }
    function J(e, t) {
      var a = e, i = t.checked;
      i != null && Ca(a, "checked", i, !1);
    }
    function ae(e, t) {
      var a = e;
      {
        var i = fi(t);
        !a._wrapperState.controlled && i && !Cs && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cs = !0), a._wrapperState.controlled && !i && !cu && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cu = !0);
      }
      J(e, t);
      var l = ki(t.value), c = t.type;
      if (l != null)
        c === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = ir(l)) : a.value !== ir(l) && (a.value = ir(l));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ut(a, t.type, l) : t.hasOwnProperty("defaultValue") && ut(a, t.type, ki(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ce(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, c = l === "submit" || l === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = ir(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function ft(e, t) {
      var a = e;
      ae(a, t), Me(a, t);
    }
    function Me(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Rr(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < l.length; c++) {
          var v = l[c];
          if (!(v === e || v.form !== e.form)) {
            var y = Sm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            su(v), ae(v, y);
          }
        }
      }
    }
    function ut(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ao(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ir(e._wrapperState.initialValue) : e.defaultValue !== ir(a) && (e.defaultValue = ir(a)));
    }
    var Ot = !1, It = !1, fn = !1;
    function on(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || It || (It = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (fn || (fn = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ot && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ot = !0);
    }
    function dn(e, t) {
      t.value != null && e.setAttribute("value", ir(ki(t.value)));
    }
    var hn = Array.isArray;
    function Ut(e) {
      return hn(e);
    }
    var Qi;
    Qi = !1;
    function fu() {
      var e = Vr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ws = ["value", "defaultValue"];
    function Ad(e) {
      {
        Wi("select", e);
        for (var t = 0; t < ws.length; t++) {
          var a = ws[t];
          if (e[a] != null) {
            var i = Ut(e[a]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, fu()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, fu());
          }
        }
      }
    }
    function di(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var c = a, v = {}, y = 0; y < c.length; y++)
          v["$" + c[y]] = !0;
        for (var S = 0; S < l.length; S++) {
          var b = v.hasOwnProperty("$" + l[S].value);
          l[S].selected !== b && (l[S].selected = b), b && i && (l[S].defaultSelected = !0);
        }
      } else {
        for (var _ = ir(ki(a)), I = null, U = 0; U < l.length; U++) {
          if (l[U].value === _) {
            l[U].selected = !0, i && (l[U].defaultSelected = !0);
            return;
          }
          I === null && !l[U].disabled && (I = l[U]);
        }
        I !== null && (I.selected = !0);
      }
    }
    function bs(e, t) {
      return Dt({}, t, {
        value: void 0
      });
    }
    function Rs(e, t) {
      var a = e;
      Ad(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qi && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qi = !0);
    }
    function Ld(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? di(a, !!t.multiple, i, !1) : t.defaultValue != null && di(a, !!t.multiple, t.defaultValue, !0);
    }
    function sg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? di(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? di(a, !!t.multiple, t.defaultValue, !0) : di(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function cg(e, t) {
      var a = e, i = t.value;
      i != null && di(a, !!t.multiple, i, !1);
    }
    var Pd = !1;
    function jd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ir(a._wrapperState.initialValue)
      });
      return i;
    }
    function $v(e, t) {
      var a = e;
      Wi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Pd && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component"), Pd = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, c = t.defaultValue;
        if (l != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ut(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            c = l;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: ki(i)
      };
    }
    function Wv(e, t) {
      var a = e, i = ki(t.value), l = ki(t.defaultValue);
      if (i != null) {
        var c = ir(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      l != null && (a.defaultValue = ir(l));
    }
    function Yv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function zd(e, t) {
      Wv(e, t);
    }
    var Gi = "http://www.w3.org/1999/xhtml", fg = "http://www.w3.org/1998/Math/MathML", Ud = "http://www.w3.org/2000/svg";
    function Nc(e) {
      switch (e) {
        case "svg":
          return Ud;
        case "math":
          return fg;
        default:
          return Gi;
      }
    }
    function Fd(e, t) {
      return e == null || e === Gi ? Nc(t) : e === Ud && t === "foreignObject" ? Gi : e;
    }
    var dg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Mc, Qv = dg(function(e, t) {
      if (e.namespaceURI === Ud && !("innerHTML" in e)) {
        Mc = Mc || document.createElement("div"), Mc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Mc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ra = 1, Ki = 3, Yn = 8, pi = 9, pl = 11, Ac = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Gv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, du = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Kv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(du).forEach(function(e) {
      Xv.forEach(function(t) {
        du[Kv(t, e)] = du[e];
      });
    });
    function Lc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(du.hasOwnProperty(e) && du[e]) ? t + "px" : (Tr(t, e), ("" + t).trim());
    }
    var pu = /([A-Z])/g, pg = /^ms-/;
    function vg(e) {
      return e.replace(pu, "-$1").toLowerCase().replace(pg, "-ms-");
    }
    var qv = function() {
    };
    {
      var Zv = /^(?:webkit|moz|o)[A-Z]/, Jv = /^-ms-/, Ts = /-(.)/g, vu = /;\s*$/, hu = {}, mu = {}, eh = !1, Hd = !1, Vd = function(e) {
        return e.replace(Ts, function(t, a) {
          return a.toUpperCase();
        });
      }, Id = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Vd(e.replace(Jv, "ms-"))
        ));
      }, th = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, nh = function(e, t) {
        mu.hasOwnProperty(t) && mu[t] || (mu[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vu, "")));
      }, rh = function(e, t) {
        eh || (eh = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hg = function(e, t) {
        Hd || (Hd = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      qv = function(e, t) {
        e.indexOf("-") > -1 ? Id(e) : Zv.test(e) ? th(e) : vu.test(t) && nh(e, t), typeof t == "number" && (isNaN(t) ? rh(e, t) : isFinite(t) || hg(e, t));
      };
    }
    var mg = qv;
    function yg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : vg(i)) + ":", t += Lc(i, l, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function ah(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || mg(i, t[i]);
          var c = Lc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function gg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Va(e) {
      var t = {};
      for (var a in e)
        for (var i = Gv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function _s(e, t) {
      {
        if (!t)
          return;
        var a = Va(e), i = Va(t), l = {};
        for (var c in a) {
          var v = a[c], y = i[c];
          if (y && v !== y) {
            var S = v + "," + y;
            if (l[S])
              continue;
            l[S] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", gg(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var ih = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, oh = Dt({
      menuitem: !0
    }, ih), lh = "__html";
    function Pc(e, t) {
      if (t) {
        if (oh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(lh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Xi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var jc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, uh = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, vi = {}, Bd = new RegExp("^(aria)-[" + nt + "]*$"), ks = new RegExp("^(aria)[A-Z][" + nt + "]*$");
    function $d(e, t) {
      {
        if (rn.call(vi, t) && vi[t])
          return !0;
        if (ks.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = uh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), vi[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), vi[t] = !0, !0;
        }
        if (Bd.test(t)) {
          var l = t.toLowerCase(), c = uh.hasOwnProperty(l) ? l : null;
          if (c == null)
            return vi[t] = !0, !1;
          if (t !== c)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), vi[t] = !0, !0;
        }
      }
      return !0;
    }
    function sh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = $d(e, i);
          l || a.push(i);
        }
        var c = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function zc(e, t) {
      Xi(e, t) || sh(e, t);
    }
    var vl = !1;
    function Wd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vl && (vl = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Yd = function() {
    };
    {
      var or = {}, Qd = /^on./, ch = /^on[^A-Z]/, fh = new RegExp("^(aria)-[" + nt + "]*$"), dh = new RegExp("^(aria)[A-Z][" + nt + "]*$");
      Yd = function(e, t, a, i) {
        if (rn.call(or, t) && or[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), or[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(l) ? v[l] : null;
          if (y != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, y), or[t] = !0, !0;
          if (Qd.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), or[t] = !0, !0;
        } else if (Qd.test(t))
          return ch.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), or[t] = !0, !0;
        if (fh.test(t) || dh.test(t))
          return !0;
        if (l === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), or[t] = !0, !0;
        if (l === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), or[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), or[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), or[t] = !0, !0;
        var S = jr(t), b = S !== null && S.type === Sa;
        if (jc.hasOwnProperty(l)) {
          var _ = jc[l];
          if (_ !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, _), or[t] = !0, !0;
        } else if (!b && t !== l)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), or[t] = !0, !0;
        return typeof a == "boolean" && kr(t, a, S, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), or[t] = !0, !0) : b ? !0 : kr(t, a, S, !1) ? (or[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === Tn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), or[t] = !0), !0);
      };
    }
    var ph = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var c = Yd(e, l, t[l], a);
          c || i.push(l);
        }
        var v = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function vh(e, t, a) {
      Xi(e, t) || ph(e, t, a);
    }
    var qi = 1, Ds = 2, hl = 4, Sg = qi | Ds | hl, Os = null;
    function Ns(e) {
      Os !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Os = e;
    }
    function xg() {
      Os === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Os = null;
    }
    function hh(e) {
      return e === Os;
    }
    function Uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var pn = null, Po = null, Zi = null;
    function yu(e) {
      var t = Xu(e);
      if (t) {
        if (typeof pn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Sm(a);
          pn(t.stateNode, t.type, i);
        }
      }
    }
    function mh(e) {
      pn = e;
    }
    function Fc(e) {
      Po ? Zi ? Zi.push(e) : Zi = [e] : Po = e;
    }
    function Ms() {
      return Po !== null || Zi !== null;
    }
    function As() {
      if (Po) {
        var e = Po, t = Zi;
        if (Po = null, Zi = null, yu(e), t)
          for (var a = 0; a < t.length; a++)
            yu(t[a]);
      }
    }
    var ml = function(e, t) {
      return e(t);
    }, Gd = function() {
    }, Kd = !1;
    function Eg() {
      var e = Ms();
      e && (Gd(), As());
    }
    function Xd(e, t, a) {
      if (Kd)
        return e(t, a);
      Kd = !0;
      try {
        return ml(e, t, a);
      } finally {
        Kd = !1, Eg();
      }
    }
    function Hc(e, t, a) {
      ml = e, Gd = a;
    }
    function Vc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function qd(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Vc(t));
        default:
          return !1;
      }
    }
    function yl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Sm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (qd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Ls = !1;
    if (At)
      try {
        var gl = {};
        Object.defineProperty(gl, "passive", {
          get: function() {
            Ls = !0;
          }
        }), window.addEventListener("test", gl, gl), window.removeEventListener("test", gl, gl);
      } catch {
        Ls = !1;
      }
    function yh(e, t, a, i, l, c, v, y, S) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (_) {
        this.onError(_);
      }
    }
    var Zd = yh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Jd = document.createElement("react");
      Zd = function(t, a, i, l, c, v, y, S, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), I = !1, U = !0, q = window.event, te = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          Jd.removeEventListener(oe, it, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = q);
        }
        var Pe = Array.prototype.slice.call(arguments, 3);
        function it() {
          I = !0, ie(), a.apply(i, Pe), U = !1;
        }
        var Ze, Vt = !1, Pt = !1;
        function Y(Q) {
          if (Ze = Q.error, Vt = !0, Ze === null && Q.colno === 0 && Q.lineno === 0 && (Pt = !0), Q.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var oe = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Y), Jd.addEventListener(oe, it, !1), _.initEvent(oe, !1, !1), Jd.dispatchEvent(_), te && Object.defineProperty(window, "event", te), I && U && (Vt ? Pt && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", Y), !I)
          return ie(), yh.apply(this, arguments);
      };
    }
    var Cg = Zd, jo = !1, hi = null, Ps = !1, zo = null, Di = {
      onError: function(e) {
        jo = !0, hi = e;
      }
    };
    function Sl(e, t, a, i, l, c, v, y, S) {
      jo = !1, hi = null, Cg.apply(Di, arguments);
    }
    function Ji(e, t, a, i, l, c, v, y, S) {
      if (Sl.apply(this, arguments), jo) {
        var b = tp();
        Ps || (Ps = !0, zo = b);
      }
    }
    function ep() {
      if (Ps) {
        var e = zo;
        throw Ps = !1, zo = null, e;
      }
    }
    function wg() {
      return jo;
    }
    function tp() {
      if (jo) {
        var e = hi;
        return jo = !1, hi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ia(e) {
      return e._reactInternals;
    }
    function js(e) {
      return e._reactInternals !== void 0;
    }
    function gu(e, t) {
      e._reactInternals = t;
    }
    var at = (
      /*                      */
      0
    ), Uo = (
      /*                */
      1
    ), Sn = (
      /*                    */
      2
    ), Tt = (
      /*                       */
      4
    ), Xt = (
      /*                */
      16
    ), tn = (
      /*                 */
      32
    ), Oi = (
      /*                     */
      64
    ), gt = (
      /*                   */
      128
    ), Ln = (
      /*            */
      256
    ), aa = (
      /*                          */
      512
    ), Ba = (
      /*                     */
      1024
    ), wn = (
      /*                      */
      2048
    ), $a = (
      /*                    */
      4096
    ), Fo = (
      /*                   */
      8192
    ), zs = (
      /*             */
      16384
    ), Ic = wn | Tt | Oi | aa | Ba | zs, gh = (
      /*               */
      32767
    ), ba = (
      /*                   */
      32768
    ), lr = (
      /*                */
      65536
    ), Us = (
      /* */
      131072
    ), np = (
      /*                       */
      1048576
    ), rp = (
      /*                    */
      2097152
    ), ia = (
      /*                 */
      4194304
    ), Ho = (
      /*                */
      8388608
    ), oa = (
      /*               */
      16777216
    ), xl = (
      /*              */
      33554432
    ), Su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Tt | Ba | 0
    ), la = Sn | Tt | Xt | tn | aa | $a | Fo, Or = Tt | Oi | aa | Fo, Wa = wn | Xt, vr = ia | Ho | rp, eo = d.ReactCurrentOwner;
    function Ra(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Sn | $a)) !== at && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === A ? a : null;
    }
    function ap(e) {
      if (e.tag === re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Bc(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function ip(e) {
      return Ra(e) === e;
    }
    function Ta(e) {
      {
        var t = eo.current;
        if (t !== null && t.tag === k) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ia(e);
      return l ? Ra(l) === l : !1;
    }
    function ua(e) {
      if (Ra(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function xn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ra(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var y = c.return;
          if (y !== null) {
            i = l = y;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var S = c.child; S; ) {
            if (S === i)
              return ua(c), e;
            if (S === l)
              return ua(c), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = c, l = v;
        else {
          for (var b = !1, _ = c.child; _; ) {
            if (_ === i) {
              b = !0, i = c, l = v;
              break;
            }
            if (_ === l) {
              b = !0, l = c, i = v;
              break;
            }
            _ = _.sibling;
          }
          if (!b) {
            for (_ = v.child; _; ) {
              if (_ === i) {
                b = !0, i = v, l = c;
                break;
              }
              if (_ === l) {
                b = !0, l = v, i = c;
                break;
              }
              _ = _.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== A)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ya(e) {
      var t = xn(e);
      return t !== null ? op(t) : null;
    }
    function op(e) {
      if (e.tag === P || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = op(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Sh(e) {
      var t = xn(e);
      return t !== null ? $c(t) : null;
    }
    function $c(e) {
      if (e.tag === P || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== z) {
          var a = $c(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Wc = f.unstable_scheduleCallback, xh = f.unstable_cancelCallback, Yc = f.unstable_shouldYield, Eh = f.unstable_requestPaint, Dn = f.unstable_now, lp = f.unstable_getCurrentPriorityLevel, Qc = f.unstable_ImmediatePriority, El = f.unstable_UserBlockingPriority, Ni = f.unstable_NormalPriority, Ch = f.unstable_LowPriority, Gc = f.unstable_IdlePriority, xu = f.unstable_yieldValue, wh = f.unstable_setDisableYieldValue, to = null, qn = null, Oe = null, Qa = !1, _a = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function up(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        yt && (e = Dt({}, e, {
          getLaneLabelMap: no,
          injectProfilingHooks: bh
        })), to = t.inject(e), qn = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function sp(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(to, e, t);
        } catch (a) {
          Qa || (Qa = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function Eu(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & gt) === gt;
          if (vt) {
            var i;
            switch (t) {
              case Hn:
                i = Qc;
                break;
              case ao:
                i = El;
                break;
              case Mi:
                i = Ni;
                break;
              case Au:
                i = Gc;
                break;
              default:
                i = Ni;
                break;
            }
            qn.onCommitFiberRoot(to, e, i, a);
          }
        } catch (l) {
          Qa || (Qa = !0, m("React instrumentation encountered an error: %s", l));
        }
    }
    function Ga(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(to, e);
        } catch (t) {
          Qa || (Qa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Cl(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(to, e);
        } catch (t) {
          Qa || (Qa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Qn(e) {
      if (typeof xu == "function" && (wh(e), E(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(to, e);
        } catch (t) {
          Qa || (Qa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function bh(e) {
      Oe = e;
    }
    function no() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Bs; a++) {
          var i = Rg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Vo(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function Kc() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function Cu(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function sa() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function Io(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function Xc() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function Rh(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function qc() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function Th(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function Fs() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function mi(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function wu() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function Hs(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function wl(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function cp(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function bu() {
      Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped();
    }
    function _h(e) {
      Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(e);
    }
    function fp() {
      Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped();
    }
    function bn(e) {
      Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
    }
    function Zc() {
      Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded();
    }
    function Jc() {
      Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
    }
    function dp(e) {
      Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(e);
    }
    function ef(e, t) {
      Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, t);
    }
    function Vs(e, t) {
      Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), qe = (
      /*                 */
      1
    ), St = (
      /*                    */
      2
    ), Nt = (
      /*               */
      8
    ), ka = (
      /*              */
      16
    ), Ru = Math.clz32 ? Math.clz32 : Nr, Is = Math.log, bg = Math.LN2;
    function Nr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Is(t) / bg | 0) | 0;
    }
    var Bs = 31, ve = (
      /*                        */
      0
    ), Gn = (
      /*                          */
      0
    ), rt = (
      /*                        */
      1
    ), hr = (
      /*    */
      2
    ), Da = (
      /*             */
      4
    ), ro = (
      /*            */
      8
    ), Ka = (
      /*                     */
      16
    ), Tu = (
      /*                */
      32
    ), bl = (
      /*                       */
      4194240
    ), _u = (
      /*                        */
      64
    ), tf = (
      /*                        */
      128
    ), nf = (
      /*                        */
      256
    ), rf = (
      /*                        */
      512
    ), af = (
      /*                        */
      1024
    ), of = (
      /*                        */
      2048
    ), Rl = (
      /*                        */
      4096
    ), lf = (
      /*                        */
      8192
    ), ku = (
      /*                        */
      16384
    ), Du = (
      /*                       */
      32768
    ), uf = (
      /*                       */
      65536
    ), $s = (
      /*                       */
      131072
    ), sf = (
      /*                       */
      262144
    ), cf = (
      /*                       */
      524288
    ), ff = (
      /*                       */
      1048576
    ), df = (
      /*                       */
      2097152
    ), Ou = (
      /*                            */
      130023424
    ), Tl = (
      /*                             */
      4194304
    ), pf = (
      /*                             */
      8388608
    ), vf = (
      /*                             */
      16777216
    ), pp = (
      /*                             */
      33554432
    ), hf = (
      /*                             */
      67108864
    ), kh = Tl, Ws = (
      /*          */
      134217728
    ), vp = (
      /*                          */
      268435455
    ), Nu = (
      /*               */
      268435456
    ), Bo = (
      /*                        */
      536870912
    ), Mr = (
      /*                   */
      1073741824
    );
    function Rg(e) {
      {
        if (e & rt)
          return "Sync";
        if (e & hr)
          return "InputContinuousHydration";
        if (e & Da)
          return "InputContinuous";
        if (e & ro)
          return "DefaultHydration";
        if (e & Ka)
          return "Default";
        if (e & Tu)
          return "TransitionHydration";
        if (e & bl)
          return "Transition";
        if (e & Ou)
          return "Retry";
        if (e & Ws)
          return "SelectiveHydration";
        if (e & Nu)
          return "IdleHydration";
        if (e & Bo)
          return "Idle";
        if (e & Mr)
          return "Offscreen";
      }
    }
    var mn = -1, mf = _u, ca = Tl;
    function _l(e) {
      switch (Fn(e)) {
        case rt:
          return rt;
        case hr:
          return hr;
        case Da:
          return Da;
        case ro:
          return ro;
        case Ka:
          return Ka;
        case Tu:
          return Tu;
        case _u:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case Rl:
        case lf:
        case ku:
        case Du:
        case uf:
        case $s:
        case sf:
        case cf:
        case ff:
        case df:
          return e & bl;
        case Tl:
        case pf:
        case vf:
        case pp:
        case hf:
          return e & Ou;
        case Ws:
          return Ws;
        case Nu:
          return Nu;
        case Bo:
          return Bo;
        case Mr:
          return Mr;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function kl(e, t) {
      var a = e.pendingLanes;
      if (a === ve)
        return ve;
      var i = ve, l = e.suspendedLanes, c = e.pingedLanes, v = a & vp;
      if (v !== ve) {
        var y = v & ~l;
        if (y !== ve)
          i = _l(y);
        else {
          var S = v & c;
          S !== ve && (i = _l(S));
        }
      } else {
        var b = a & ~l;
        b !== ve ? i = _l(b) : c !== ve && (i = _l(c));
      }
      if (i === ve)
        return ve;
      if (t !== ve && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ve) {
        var _ = Fn(i), I = Fn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === Ka && (I & bl) !== ve
        )
          return t;
      }
      (i & Da) !== ve && (i |= a & Ka);
      var U = e.entangledLanes;
      if (U !== ve)
        for (var q = e.entanglements, te = i & U; te > 0; ) {
          var ie = Wo(te), Pe = 1 << ie;
          i |= q[ie], te &= ~Pe;
        }
      return i;
    }
    function Dh(e, t) {
      for (var a = e.eventTimes, i = mn; t > 0; ) {
        var l = Wo(t), c = 1 << l, v = a[l];
        v > i && (i = v), t &= ~c;
      }
      return i;
    }
    function Oh(e, t) {
      switch (e) {
        case rt:
        case hr:
        case Da:
          return t + 250;
        case ro:
        case Ka:
        case Tu:
        case _u:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case Rl:
        case lf:
        case ku:
        case Du:
        case uf:
        case $s:
        case sf:
        case cf:
        case ff:
        case df:
          return t + 5e3;
        case Tl:
        case pf:
        case vf:
        case pp:
        case hf:
          return mn;
        case Ws:
        case Nu:
        case Bo:
        case Mr:
          return mn;
        default:
          return m("Should have found matching lanes. This is a bug in React."), mn;
      }
    }
    function Nh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, v = a; v > 0; ) {
        var y = Wo(v), S = 1 << y, b = c[y];
        b === mn ? ((S & i) === ve || (S & l) !== ve) && (c[y] = Oh(S, t)) : b <= t && (e.expiredLanes |= S), v &= ~S;
      }
    }
    function hp(e) {
      return _l(e.pendingLanes);
    }
    function $o(e) {
      var t = e.pendingLanes & ~Mr;
      return t !== ve ? t : t & Mr ? Mr : ve;
    }
    function mp(e) {
      return (e & rt) !== ve;
    }
    function Ys(e) {
      return (e & vp) !== ve;
    }
    function Mh(e) {
      return (e & Ou) === e;
    }
    function Ah(e) {
      var t = rt | Da | Ka;
      return (e & t) === ve;
    }
    function Lh(e) {
      return (e & bl) === e;
    }
    function Qs(e, t) {
      var a = hr | Da | ro | Ka;
      return (t & a) !== ve;
    }
    function Ph(e, t) {
      return (t & e.expiredLanes) !== ve;
    }
    function yp(e) {
      return (e & bl) !== ve;
    }
    function jh() {
      var e = mf;
      return mf <<= 1, (mf & bl) === ve && (mf = _u), e;
    }
    function fa() {
      var e = ca;
      return ca <<= 1, (ca & Ou) === ve && (ca = Tl), e;
    }
    function Fn(e) {
      return e & -e;
    }
    function Mu(e) {
      return Fn(e);
    }
    function Wo(e) {
      return 31 - Ru(e);
    }
    function yf(e) {
      return Wo(e);
    }
    function da(e, t) {
      return (e & t) !== ve;
    }
    function Dl(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function Gs(e, t) {
      return e & ~t;
    }
    function gf(e, t) {
      return e & t;
    }
    function Tg(e) {
      return e;
    }
    function zh(e, t) {
      return e !== Gn && e < t ? e : t;
    }
    function Ks(e) {
      for (var t = [], a = 0; a < Bs; a++)
        t.push(e);
      return t;
    }
    function Ol(e, t, a) {
      e.pendingLanes |= t, t !== Bo && (e.suspendedLanes = ve, e.pingedLanes = ve);
      var i = e.eventTimes, l = yf(t);
      i[l] = a;
    }
    function Uh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Wo(i), c = 1 << l;
        a[l] = mn, i &= ~c;
      }
    }
    function Sf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function xf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ve, e.pingedLanes = ve, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, c = e.expirationTimes, v = a; v > 0; ) {
        var y = Wo(v), S = 1 << y;
        i[y] = ve, l[y] = mn, c[y] = mn, v &= ~S;
      }
    }
    function gp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var c = Wo(l), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), l &= ~v;
      }
    }
    function Fh(e, t) {
      var a = Fn(t), i;
      switch (a) {
        case Da:
          i = hr;
          break;
        case Ka:
          i = ro;
          break;
        case _u:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case Rl:
        case lf:
        case ku:
        case Du:
        case uf:
        case $s:
        case sf:
        case cf:
        case ff:
        case df:
        case Tl:
        case pf:
        case vf:
        case pp:
        case hf:
          i = Tu;
          break;
        case Bo:
          i = Nu;
          break;
        default:
          i = Gn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Gn ? Gn : i;
    }
    function Ef(e, t, a) {
      if (_a)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = yf(a), c = 1 << l, v = i[l];
          v.add(t), a &= ~c;
        }
    }
    function Sp(e, t) {
      if (_a)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = yf(t), c = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(y) {
            var S = y.alternate;
            (S === null || !i.has(S)) && i.add(y);
          }), v.clear()), t &= ~c;
        }
    }
    function Xs(e, t) {
      return null;
    }
    var Hn = rt, ao = Da, Mi = Ka, Au = Bo, Lu = Gn;
    function Xa() {
      return Lu;
    }
    function Pn(e) {
      Lu = e;
    }
    function Ar(e, t) {
      var a = Lu;
      try {
        return Lu = e, t();
      } finally {
        Lu = a;
      }
    }
    function _g(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function kg(e, t) {
      return e > t ? e : t;
    }
    function Pu(e, t) {
      return e !== 0 && e < t;
    }
    function mr(e) {
      var t = Fn(e);
      return Pu(Hn, t) ? Pu(ao, t) ? Ys(t) ? Mi : Au : ao : Hn;
    }
    function Cf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ve;
    function ju(e) {
      Ve = e;
    }
    function xp(e) {
      Ve(e);
    }
    var wf;
    function Dg(e) {
      wf = e;
    }
    var zu;
    function bf(e) {
      zu = e;
    }
    var Rf;
    function Hh(e) {
      Rf = e;
    }
    var Ep;
    function Vh(e) {
      Ep = e;
    }
    var qs = !1, Uu = [], Rn = null, ur = null, Ir = null, Fu = /* @__PURE__ */ new Map(), Hu = /* @__PURE__ */ new Map(), sr = [], Ih = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ai(e) {
      return Ih.indexOf(e) > -1;
    }
    function Og(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Cp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Rn = null;
          break;
        case "dragenter":
        case "dragleave":
          ur = null;
          break;
        case "mouseover":
        case "mouseout":
          Ir = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Hu.delete(i);
          break;
        }
      }
    }
    function Vu(e, t, a, i, l, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = Og(t, a, i, l, c);
        if (t !== null) {
          var y = Xu(t);
          y !== null && wf(y);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var S = e.targetContainers;
      return l !== null && S.indexOf(l) === -1 && S.push(l), e;
    }
    function Bh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var c = l;
          return Rn = Vu(Rn, e, t, a, i, c), !0;
        }
        case "dragenter": {
          var v = l;
          return ur = Vu(ur, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var y = l;
          return Ir = Vu(Ir, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var S = l, b = S.pointerId;
          return Fu.set(b, Vu(Fu.get(b) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var _ = l, I = _.pointerId;
          return Hu.set(I, Vu(Hu.get(I) || null, e, t, a, i, _)), !0;
        }
      }
      return !1;
    }
    function wp(e) {
      var t = sc(e.target);
      if (t !== null) {
        var a = Ra(t);
        if (a !== null) {
          var i = a.tag;
          if (i === re) {
            var l = ap(a);
            if (l !== null) {
              e.blockedOn = l, Ep(e.priority, function() {
                zu(a);
              });
              return;
            }
          } else if (i === A) {
            var c = a.stateNode;
            if (Cf(c)) {
              e.blockedOn = Bc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ng(e) {
      for (var t = Rf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < sr.length && Pu(t, sr[i].priority); i++)
        ;
      sr.splice(i, 0, a), i === 0 && wp(a);
    }
    function Nl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Lr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, c = new l.constructor(l.type, l);
          Ns(c), l.target.dispatchEvent(c), xg();
        } else {
          var v = Xu(i);
          return v !== null && wf(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Tf(e, t, a) {
      Nl(e) && a.delete(t);
    }
    function qa() {
      qs = !1, Rn !== null && Nl(Rn) && (Rn = null), ur !== null && Nl(ur) && (ur = null), Ir !== null && Nl(Ir) && (Ir = null), Fu.forEach(Tf), Hu.forEach(Tf);
    }
    function Lt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, qs || (qs = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, qa)));
    }
    function jn(e) {
      if (Uu.length > 0) {
        Lt(Uu[0], e);
        for (var t = 1; t < Uu.length; t++) {
          var a = Uu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Rn !== null && Lt(Rn, e), ur !== null && Lt(ur, e), Ir !== null && Lt(Ir, e);
      var i = function(y) {
        return Lt(y, e);
      };
      Fu.forEach(i), Hu.forEach(i);
      for (var l = 0; l < sr.length; l++) {
        var c = sr[l];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; sr.length > 0; ) {
        var v = sr[0];
        if (v.blockedOn !== null)
          break;
        wp(v), v.blockedOn === null && sr.shift();
      }
    }
    var En = d.ReactCurrentBatchConfig, Zn = !0;
    function pa(e) {
      Zn = !!e;
    }
    function Iu() {
      return Zn;
    }
    function Jn(e, t, a) {
      var i = _f(t), l;
      switch (i) {
        case Hn:
          l = Zs;
          break;
        case ao:
          l = Ml;
          break;
        case Mi:
        default:
          l = Bu;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Zs(e, t, a, i) {
      var l = Xa(), c = En.transition;
      En.transition = null;
      try {
        Pn(Hn), Bu(e, t, a, i);
      } finally {
        Pn(l), En.transition = c;
      }
    }
    function Ml(e, t, a, i) {
      var l = Xa(), c = En.transition;
      En.transition = null;
      try {
        Pn(ao), Bu(e, t, a, i);
      } finally {
        Pn(l), En.transition = c;
      }
    }
    function Bu(e, t, a, i) {
      Zn && bp(e, t, a, i);
    }
    function bp(e, t, a, i) {
      var l = Lr(e, t, a, i);
      if (l === null) {
        Gg(e, t, i, Yo, a), Cp(e, i);
        return;
      }
      if (Bh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Cp(e, i), t & hl && Ai(e)) {
        for (; l !== null; ) {
          var c = Xu(l);
          c !== null && xp(c);
          var v = Lr(e, t, a, i);
          if (v === null && Gg(e, t, i, Yo, a), v === l)
            break;
          l = v;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Gg(e, t, i, null, a);
    }
    var Yo = null;
    function Lr(e, t, a, i) {
      Yo = null;
      var l = Uc(i), c = sc(l);
      if (c !== null) {
        var v = Ra(c);
        if (v === null)
          c = null;
        else {
          var y = v.tag;
          if (y === re) {
            var S = ap(v);
            if (S !== null)
              return S;
            c = null;
          } else if (y === A) {
            var b = v.stateNode;
            if (Cf(b))
              return Bc(v);
            c = null;
          } else v !== c && (c = null);
        }
      }
      return Yo = c, null;
    }
    function _f(e) {
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
          return Hn;
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
          return ao;
        case "message": {
          var t = lp();
          switch (t) {
            case Qc:
              return Hn;
            case El:
              return ao;
            case Ni:
            case Ch:
              return Mi;
            case Gc:
              return Au;
            default:
              return Mi;
          }
        }
        default:
          return Mi;
      }
    }
    function $u(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function io(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function kf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Rp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Za = null, Wu = null, Ja = null;
    function Df(e) {
      return Za = e, Wu = ec(), !0;
    }
    function Js() {
      Za = null, Wu = null, Ja = null;
    }
    function Of() {
      if (Ja)
        return Ja;
      var e, t = Wu, a = t.length, i, l = ec(), c = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[c - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Ja = l.slice(e, y), Ja;
    }
    function ec() {
      return "value" in Za ? Za.value : Za.textContent;
    }
    function Al(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function cr() {
      return !0;
    }
    function oo() {
      return !1;
    }
    function On(e) {
      function t(a, i, l, c, v) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var S = e[y];
            S ? this[y] = S(c) : this[y] = c[y];
          }
        var b = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return b ? this.isDefaultPrevented = cr : this.isDefaultPrevented = oo, this.isPropagationStopped = oo, this;
      }
      return Dt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = cr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = cr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: cr
      }), t;
    }
    var er = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Nf = On(er), Ll = Dt({}, er, {
      view: 0,
      detail: 0
    }), Tp = On(Ll), _p, Li, Yu;
    function kp(e) {
      e !== Yu && (Yu && e.type === "mousemove" ? (_p = e.screenX - Yu.screenX, Li = e.screenY - Yu.screenY) : (_p = 0, Li = 0), Yu = e);
    }
    var Pi = Dt({}, Ll, {
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
      getModifierState: Dp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (kp(e), _p);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Li;
      }
    }), Mf = On(Pi), Pl = Dt({}, Pi, {
      dataTransfer: 0
    }), $h = On(Pl), Wh = Dt({}, Ll, {
      relatedTarget: 0
    }), tc = On(Wh), Af = Dt({}, er, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mg = On(Af), Ag = Dt({}, er, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yh = On(Ag), Qh = Dt({}, er, {
      data: 0
    }), Qo = On(Qh), Lg = Qo, Qu = {
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
      MozPrintableKey: "Unidentified"
    }, Gh = {
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
      224: "Meta"
    };
    function zn(e) {
      if (e.key) {
        var t = Qu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Al(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Gh[e.keyCode] || "Unidentified" : "";
    }
    var Pg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Kh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Pg[e];
      return i ? !!a[i] : !1;
    }
    function Dp(e) {
      return Kh;
    }
    var jg = Dt({}, Ll, {
      key: zn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Dp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Al(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Xh = On(jg), qh = Dt({}, Pi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Zh = On(qh), ei = Dt({}, Ll, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Dp
    }), Op = On(ei), zg = Dt({}, er, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Go = On(zg), Lf = Dt({}, Pi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), jl = On(Lf), Pf = [9, 13, 27, 32], jf = 229, nc = At && "CompositionEvent" in window, rc = null;
    At && "documentMode" in document && (rc = document.documentMode);
    var Np = At && "TextEvent" in window && !rc, Jh = At && (!nc || rc && rc > 8 && rc <= 11), Mp = 32, Ap = String.fromCharCode(Mp);
    function zf() {
      Ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ct("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ct("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ct("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ac = !1;
    function em(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Lp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ug(e, t) {
      return e === "keydown" && t.keyCode === jf;
    }
    function Pp(e, t) {
      switch (e) {
        case "keyup":
          return Pf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== jf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Uf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ic(e) {
      return e.locale === "ko";
    }
    var Ko = !1;
    function Ff(e, t, a, i, l) {
      var c, v;
      if (nc ? c = Lp(t) : Ko ? Pp(t, i) && (c = "onCompositionEnd") : Ug(t, i) && (c = "onCompositionStart"), !c)
        return null;
      Jh && !ic(i) && (!Ko && c === "onCompositionStart" ? Ko = Df(l) : c === "onCompositionEnd" && Ko && (v = Of()));
      var y = om(a, c);
      if (y.length > 0) {
        var S = new Qo(c, t, null, i, l);
        if (e.push({
          event: S,
          listeners: y
        }), v)
          S.data = v;
        else {
          var b = Uf(i);
          b !== null && (S.data = b);
        }
      }
    }
    function tm(e, t) {
      switch (e) {
        case "compositionend":
          return Uf(t);
        case "keypress":
          var a = t.which;
          return a !== Mp ? null : (ac = !0, Ap);
        case "textInput":
          var i = t.data;
          return i === Ap && ac ? null : i;
        default:
          return null;
      }
    }
    function Fg(e, t) {
      if (Ko) {
        if (e === "compositionend" || !nc && Pp(e, t)) {
          var a = Of();
          return Js(), Ko = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!em(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Jh && !ic(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Hf(e, t, a, i, l) {
      var c;
      if (Np ? c = tm(t, i) : c = Fg(t, i), !c)
        return null;
      var v = om(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new Lg("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: v
        }), y.data = c;
      }
    }
    function Hg(e, t, a, i, l, c, v) {
      Ff(e, t, a, i, l), Hf(e, t, a, i, l);
    }
    var oc = {
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
      week: !0
    };
    function nm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!oc[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Vf(e) {
      if (!At)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Ct("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Fc(i);
      var l = om(t, "onChange");
      if (l.length > 0) {
        var c = new Nf("onChange", "change", null, a, i);
        e.push({
          event: c,
          listeners: l
        });
      }
    }
    var o = null, s = null;
    function p(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function h(e) {
      var t = [];
      r(t, s, e, Uc(e)), Xd(C, t);
    }
    function C(e) {
      jE(e, 0);
    }
    function O(e) {
      var t = Qf(e);
      if (su(t))
        return e;
    }
    function j(e, t) {
      if (e === "change")
        return t;
    }
    var ee = !1;
    At && (ee = Vf("input") && (!document.documentMode || document.documentMode > 9));
    function ye(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", he);
    }
    function Se() {
      o && (o.detachEvent("onpropertychange", he), o = null, s = null);
    }
    function he(e) {
      e.propertyName === "value" && O(s) && h(e);
    }
    function ze(e, t, a) {
      e === "focusin" ? (Se(), ye(t, a)) : e === "focusout" && Se();
    }
    function Be(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return O(s);
    }
    function Ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Vn(e, t) {
      if (e === "click")
        return O(t);
    }
    function W(e, t) {
      if (e === "input" || e === "change")
        return O(t);
    }
    function V(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ut(e, "number", e.value);
    }
    function X(e, t, a, i, l, c, v) {
      var y = a ? Qf(a) : window, S, b;
      if (p(y) ? S = j : nm(y) ? ee ? S = W : (S = Be, b = ze) : Ye(y) && (S = Vn), S) {
        var _ = S(t, a);
        if (_) {
          r(e, _, i, l);
          return;
        }
      }
      b && b(t, y, a), t === "focusout" && V(y);
    }
    function Re() {
      Rt("onMouseEnter", ["mouseout", "mouseover"]), Rt("onMouseLeave", ["mouseout", "mouseover"]), Rt("onPointerEnter", ["pointerout", "pointerover"]), Rt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ke(e, t, a, i, l, c, v) {
      var y = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (y && !hh(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (sc(b) || Kp(b)))
          return;
      }
      if (!(!S && !y)) {
        var _;
        if (l.window === l)
          _ = l;
        else {
          var I = l.ownerDocument;
          I ? _ = I.defaultView || I.parentWindow : _ = window;
        }
        var U, q;
        if (S) {
          var te = i.relatedTarget || i.toElement;
          if (U = a, q = te ? sc(te) : null, q !== null) {
            var ie = Ra(q);
            (q !== ie || q.tag !== P && q.tag !== $) && (q = null);
          }
        } else
          U = null, q = a;
        if (U !== q) {
          var Pe = Mf, it = "onMouseLeave", Ze = "onMouseEnter", Vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Pe = Zh, it = "onPointerLeave", Ze = "onPointerEnter", Vt = "pointer");
          var Pt = U == null ? _ : Qf(U), Y = q == null ? _ : Qf(q), oe = new Pe(it, Vt + "leave", U, i, l);
          oe.target = Pt, oe.relatedTarget = Y;
          var Q = null, xe = sc(l);
          if (xe === a) {
            var Fe = new Pe(Ze, Vt + "enter", q, i, l);
            Fe.target = Y, Fe.relatedTarget = Pt, Q = Fe;
          }
          i_(e, oe, Q, U, q);
        }
      }
    }
    function dt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var $e = typeof Object.is == "function" ? Object.is : dt;
    function pt(e, t) {
      if ($e(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (!rn.call(t, c) || !$e(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function tr(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Yt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function lo(e, t) {
      for (var a = tr(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Ki) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = tr(Yt(a));
      }
    }
    function Vg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, c = i.anchorOffset, v = i.focusNode, y = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return FT(e, l, c, v, y);
    }
    function FT(e, t, a, i, l) {
      var c = 0, v = -1, y = -1, S = 0, b = 0, _ = e, I = null;
      e: for (; ; ) {
        for (var U = null; _ === t && (a === 0 || _.nodeType === Ki) && (v = c + a), _ === i && (l === 0 || _.nodeType === Ki) && (y = c + l), _.nodeType === Ki && (c += _.nodeValue.length), (U = _.firstChild) !== null; )
          I = _, _ = U;
        for (; ; ) {
          if (_ === e)
            break e;
          if (I === t && ++S === a && (v = c), I === i && ++b === l && (y = c), (U = _.nextSibling) !== null)
            break;
          _ = I, I = _.parentNode;
        }
        _ = U;
      }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function HT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), y = t.end === void 0 ? v : Math.min(t.end, c);
        if (!l.extend && v > y) {
          var S = y;
          y = v, v = S;
        }
        var b = lo(e, v), _ = lo(e, y);
        if (b && _) {
          if (l.rangeCount === 1 && l.anchorNode === b.node && l.anchorOffset === b.offset && l.focusNode === _.node && l.focusOffset === _.offset)
            return;
          var I = a.createRange();
          I.setStart(b.node, b.offset), l.removeAllRanges(), v > y ? (l.addRange(I), l.extend(_.node, _.offset)) : (I.setEnd(_.node, _.offset), l.addRange(I));
        }
      }
    }
    function bE(e) {
      return e && e.nodeType === Ki;
    }
    function RE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : bE(e) ? !1 : bE(t) ? RE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function VT(e) {
      return e && e.ownerDocument && RE(e.ownerDocument.documentElement, e);
    }
    function IT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function TE() {
      for (var e = window, t = Ao(); t instanceof e.HTMLIFrameElement; ) {
        if (IT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ao(e.document);
      }
      return t;
    }
    function Ig(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function BT() {
      var e = TE();
      return {
        focusedElem: e,
        selectionRange: Ig(e) ? WT(e) : null
      };
    }
    function $T(e) {
      var t = TE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && VT(a)) {
        i !== null && Ig(a) && YT(a, i);
        for (var l = [], c = a; c = c.parentNode; )
          c.nodeType === ra && l.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var y = l[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function WT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Vg(e), t || {
        start: 0,
        end: 0
      };
    }
    function YT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : HT(e, t);
    }
    var QT = At && "documentMode" in document && document.documentMode <= 11;
    function GT() {
      Ct("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var If = null, Bg = null, jp = null, $g = !1;
    function KT(e) {
      if ("selectionStart" in e && Ig(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function XT(e) {
      return e.window === e ? e.document : e.nodeType === pi ? e : e.ownerDocument;
    }
    function _E(e, t, a) {
      var i = XT(a);
      if (!($g || If == null || If !== Ao(i))) {
        var l = KT(If);
        if (!jp || !pt(jp, l)) {
          jp = l;
          var c = om(Bg, "onSelect");
          if (c.length > 0) {
            var v = new Nf("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: c
            }), v.target = If;
          }
        }
      }
    }
    function qT(e, t, a, i, l, c, v) {
      var y = a ? Qf(a) : window;
      switch (t) {
        case "focusin":
          (nm(y) || y.contentEditable === "true") && (If = y, Bg = a, jp = null);
          break;
        case "focusout":
          If = null, Bg = null, jp = null;
          break;
        case "mousedown":
          $g = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $g = !1, _E(e, i, l);
          break;
        case "selectionchange":
          if (QT)
            break;
        case "keydown":
        case "keyup":
          _E(e, i, l);
      }
    }
    function rm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Bf = {
      animationend: rm("Animation", "AnimationEnd"),
      animationiteration: rm("Animation", "AnimationIteration"),
      animationstart: rm("Animation", "AnimationStart"),
      transitionend: rm("Transition", "TransitionEnd")
    }, Wg = {}, kE = {};
    At && (kE = document.createElement("div").style, "AnimationEvent" in window || (delete Bf.animationend.animation, delete Bf.animationiteration.animation, delete Bf.animationstart.animation), "TransitionEvent" in window || delete Bf.transitionend.transition);
    function am(e) {
      if (Wg[e])
        return Wg[e];
      if (!Bf[e])
        return e;
      var t = Bf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in kE)
          return Wg[e] = t[a];
      return e;
    }
    var DE = am("animationend"), OE = am("animationiteration"), NE = am("animationstart"), ME = am("transitionend"), AE = /* @__PURE__ */ new Map(), LE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Gu(e, t) {
      AE.set(e, t), Ct(t, [e]);
    }
    function ZT() {
      for (var e = 0; e < LE.length; e++) {
        var t = LE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Gu(a, "on" + i);
      }
      Gu(DE, "onAnimationEnd"), Gu(OE, "onAnimationIteration"), Gu(NE, "onAnimationStart"), Gu("dblclick", "onDoubleClick"), Gu("focusin", "onFocus"), Gu("focusout", "onBlur"), Gu(ME, "onTransitionEnd");
    }
    function JT(e, t, a, i, l, c, v) {
      var y = AE.get(t);
      if (y !== void 0) {
        var S = Nf, b = t;
        switch (t) {
          case "keypress":
            if (Al(i) === 0)
              return;
          case "keydown":
          case "keyup":
            S = Xh;
            break;
          case "focusin":
            b = "focus", S = tc;
            break;
          case "focusout":
            b = "blur", S = tc;
            break;
          case "beforeblur":
          case "afterblur":
            S = tc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Mf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = $h;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Op;
            break;
          case DE:
          case OE:
          case NE:
            S = Mg;
            break;
          case ME:
            S = Go;
            break;
          case "scroll":
            S = Tp;
            break;
          case "wheel":
            S = jl;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Yh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Zh;
            break;
        }
        var _ = (c & hl) !== 0;
        {
          var I = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = r_(a, y, i.type, _, I);
          if (U.length > 0) {
            var q = new S(y, b, null, i, l);
            e.push({
              event: q,
              listeners: U
            });
          }
        }
      }
    }
    ZT(), Re(), n(), GT(), zf();
    function e_(e, t, a, i, l, c, v) {
      JT(e, t, a, i, l, c);
      var y = (c & Sg) === 0;
      y && (Ke(e, t, a, i, l), X(e, t, a, i, l), qT(e, t, a, i, l), Hg(e, t, a, i, l));
    }
    var zp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Yg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(zp));
    function PE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ji(i, t, void 0, e), e.currentTarget = null;
    }
    function t_(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var c = t[l], v = c.instance, y = c.currentTarget, S = c.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          PE(e, S, y), i = v;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var _ = t[b], I = _.instance, U = _.currentTarget, q = _.listener;
          if (I !== i && e.isPropagationStopped())
            return;
          PE(e, q, U), i = I;
        }
    }
    function jE(e, t) {
      for (var a = (t & hl) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], c = l.event, v = l.listeners;
        t_(c, v, a);
      }
      ep();
    }
    function n_(e, t, a, i, l) {
      var c = Uc(a), v = [];
      e_(v, e, i, a, c, t), jE(v, t);
    }
    function Nn(e, t) {
      Yg.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Mk(t), l = o_(e);
      i.has(l) || (zE(t, e, Ds, a), i.add(l));
    }
    function Qg(e, t, a) {
      Yg.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= hl), zE(a, e, i, t);
    }
    var im = "_reactListening" + Math.random().toString(36).slice(2);
    function Up(e) {
      if (!e[im]) {
        e[im] = !0, Ie.forEach(function(a) {
          a !== "selectionchange" && (Yg.has(a) || Qg(a, !1, e), Qg(a, !0, e));
        });
        var t = e.nodeType === pi ? e : e.ownerDocument;
        t !== null && (t[im] || (t[im] = !0, Qg("selectionchange", !1, t)));
      }
    }
    function zE(e, t, a, i, l) {
      var c = Jn(e, t, a), v = void 0;
      Ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? kf(e, t, c, v) : io(e, t, c) : v !== void 0 ? Rp(e, t, c, v) : $u(e, t, c);
    }
    function UE(e, t) {
      return e === t || e.nodeType === Yn && e.parentNode === t;
    }
    function Gg(e, t, a, i, l) {
      var c = i;
      if (!(t & qi) && !(t & Ds)) {
        var v = l;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var S = y.tag;
            if (S === A || S === z) {
              var b = y.stateNode.containerInfo;
              if (UE(b, v))
                break;
              if (S === z)
                for (var _ = y.return; _ !== null; ) {
                  var I = _.tag;
                  if (I === A || I === z) {
                    var U = _.stateNode.containerInfo;
                    if (UE(U, v))
                      return;
                  }
                  _ = _.return;
                }
              for (; b !== null; ) {
                var q = sc(b);
                if (q === null)
                  return;
                var te = q.tag;
                if (te === P || te === $) {
                  y = c = q;
                  continue e;
                }
                b = b.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Xd(function() {
        return n_(e, t, a, c);
      });
    }
    function Fp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function r_(e, t, a, i, l, c) {
      for (var v = t !== null ? t + "Capture" : null, y = i ? v : t, S = [], b = e, _ = null; b !== null; ) {
        var I = b, U = I.stateNode, q = I.tag;
        if (q === P && U !== null && (_ = U, y !== null)) {
          var te = yl(b, y);
          te != null && S.push(Fp(b, te, _));
        }
        if (l)
          break;
        b = b.return;
      }
      return S;
    }
    function om(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var c = l, v = c.stateNode, y = c.tag;
        if (y === P && v !== null) {
          var S = v, b = yl(l, a);
          b != null && i.unshift(Fp(l, b, S));
          var _ = yl(l, t);
          _ != null && i.push(Fp(l, _, S));
        }
        l = l.return;
      }
      return i;
    }
    function $f(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== P);
      return e || null;
    }
    function a_(e, t) {
      for (var a = e, i = t, l = 0, c = a; c; c = $f(c))
        l++;
      for (var v = 0, y = i; y; y = $f(y))
        v++;
      for (; l - v > 0; )
        a = $f(a), l--;
      for (; v - l > 0; )
        i = $f(i), v--;
      for (var S = l; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = $f(a), i = $f(i);
      }
      return null;
    }
    function FE(e, t, a, i, l) {
      for (var c = t._reactName, v = [], y = a; y !== null && y !== i; ) {
        var S = y, b = S.alternate, _ = S.stateNode, I = S.tag;
        if (b !== null && b === i)
          break;
        if (I === P && _ !== null) {
          var U = _;
          if (l) {
            var q = yl(y, c);
            q != null && v.unshift(Fp(y, q, U));
          } else if (!l) {
            var te = yl(y, c);
            te != null && v.push(Fp(y, te, U));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function i_(e, t, a, i, l) {
      var c = i && l ? a_(i, l) : null;
      i !== null && FE(e, t, i, c, !1), l !== null && a !== null && FE(e, a, l, c, !0);
    }
    function o_(e, t) {
      return e + "__bubble";
    }
    var ti = !1, Hp = "dangerouslySetInnerHTML", lm = "suppressContentEditableWarning", Ku = "suppressHydrationWarning", HE = "autoFocus", lc = "children", uc = "style", um = "__html", Kg, sm, Vp, VE, cm, IE, BE;
    Kg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, sm = function(e, t) {
      zc(e, t), Wd(e, t), vh(e, t, {
        registrationNameDependencies: tt,
        possibleRegistrationNames: lt
      });
    }, IE = At && !document.documentMode, Vp = function(e, t, a) {
      if (!ti) {
        var i = fm(a), l = fm(t);
        l !== i && (ti = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, VE = function(e) {
      if (!ti) {
        ti = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, cm = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, BE = function(e, t) {
      var a = e.namespaceURI === Gi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var l_ = /\r\n?/g, u_ = /\u0000|\uFFFD/g;
    function fm(e) {
      Zr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(l_, `
`).replace(u_, "");
    }
    function dm(e, t, a, i) {
      var l = fm(t), c = fm(e);
      if (c !== l && (i && (ti || (ti = !0, m('Text content did not match. Server: "%s" Client: "%s"', c, l))), a && se))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function $E(e) {
      return e.nodeType === pi ? e : e.ownerDocument;
    }
    function s_() {
    }
    function pm(e) {
      e.onclick = s_;
    }
    function c_(e, t, a, i, l) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var v = i[c];
          if (c === uc)
            v && Object.freeze(v), ah(t, v);
          else if (c === Hp) {
            var y = v ? v[um] : void 0;
            y != null && Qv(t, y);
          } else if (c === lc)
            if (typeof v == "string") {
              var S = e !== "textarea" || v !== "";
              S && Ac(t, v);
            } else typeof v == "number" && Ac(t, "" + v);
          else c === lm || c === Ku || c === HE || (tt.hasOwnProperty(c) ? v != null && (typeof v != "function" && cm(c, v), c === "onScroll" && Nn("scroll", t)) : v != null && Ca(t, c, v, l));
        }
    }
    function f_(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var c = t[l], v = t[l + 1];
        c === uc ? ah(e, v) : c === Hp ? Qv(e, v) : c === lc ? Ac(e, v) : Ca(e, c, v, i);
      }
    }
    function d_(e, t, a, i) {
      var l, c = $E(a), v, y = i;
      if (y === Gi && (y = Nc(e)), y === Gi) {
        if (l = Xi(e, t), !l && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = c.createElement("div");
          S.innerHTML = "<script><\/script>";
          var b = S.firstChild;
          v = S.removeChild(b);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var _ = v;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        v = c.createElementNS(y, e);
      return y === Gi && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !rn.call(Kg, e) && (Kg[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function p_(e, t) {
      return $E(t).createTextNode(e);
    }
    function v_(e, t, a, i) {
      var l = Xi(t, a);
      sm(t, a);
      var c;
      switch (t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e), c = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e), c = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < zp.length; v++)
            Nn(zp[v], e);
          c = a;
          break;
        case "source":
          Nn("error", e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e), c = a;
          break;
        case "details":
          Nn("toggle", e), c = a;
          break;
        case "input":
          M(e, a), c = x(e, a), Nn("invalid", e);
          break;
        case "option":
          on(e, a), c = a;
          break;
        case "select":
          Rs(e, a), c = bs(e, a), Nn("invalid", e);
          break;
        case "textarea":
          $v(e, a), c = jd(e, a), Nn("invalid", e);
          break;
        default:
          c = a;
      }
      switch (Pc(t, c), c_(t, e, i, c, l), t) {
        case "input":
          Ha(e), Ce(e, a, !1);
          break;
        case "textarea":
          Ha(e), Yv(e);
          break;
        case "option":
          dn(e, a);
          break;
        case "select":
          Ld(e, a);
          break;
        default:
          typeof c.onClick == "function" && pm(e);
          break;
      }
    }
    function h_(e, t, a, i, l) {
      sm(t, i);
      var c = null, v, y;
      switch (t) {
        case "input":
          v = x(e, a), y = x(e, i), c = [];
          break;
        case "select":
          v = bs(e, a), y = bs(e, i), c = [];
          break;
        case "textarea":
          v = jd(e, a), y = jd(e, i), c = [];
          break;
        default:
          v = a, y = i, typeof v.onClick != "function" && typeof y.onClick == "function" && pm(e);
          break;
      }
      Pc(t, y);
      var S, b, _ = null;
      for (S in v)
        if (!(y.hasOwnProperty(S) || !v.hasOwnProperty(S) || v[S] == null))
          if (S === uc) {
            var I = v[S];
            for (b in I)
              I.hasOwnProperty(b) && (_ || (_ = {}), _[b] = "");
          } else S === Hp || S === lc || S === lm || S === Ku || S === HE || (tt.hasOwnProperty(S) ? c || (c = []) : (c = c || []).push(S, null));
      for (S in y) {
        var U = y[S], q = v != null ? v[S] : void 0;
        if (!(!y.hasOwnProperty(S) || U === q || U == null && q == null))
          if (S === uc)
            if (U && Object.freeze(U), q) {
              for (b in q)
                q.hasOwnProperty(b) && (!U || !U.hasOwnProperty(b)) && (_ || (_ = {}), _[b] = "");
              for (b in U)
                U.hasOwnProperty(b) && q[b] !== U[b] && (_ || (_ = {}), _[b] = U[b]);
            } else
              _ || (c || (c = []), c.push(S, _)), _ = U;
          else if (S === Hp) {
            var te = U ? U[um] : void 0, ie = q ? q[um] : void 0;
            te != null && ie !== te && (c = c || []).push(S, te);
          } else S === lc ? (typeof U == "string" || typeof U == "number") && (c = c || []).push(S, "" + U) : S === lm || S === Ku || (tt.hasOwnProperty(S) ? (U != null && (typeof U != "function" && cm(S, U), S === "onScroll" && Nn("scroll", e)), !c && q !== U && (c = [])) : (c = c || []).push(S, U));
      }
      return _ && (_s(_, y[uc]), (c = c || []).push(uc, _)), c;
    }
    function m_(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && J(e, l);
      var c = Xi(a, i), v = Xi(a, l);
      switch (f_(e, t, c, v), a) {
        case "input":
          ae(e, l);
          break;
        case "textarea":
          Wv(e, l);
          break;
        case "select":
          sg(e, l);
          break;
      }
    }
    function y_(e) {
      {
        var t = e.toLowerCase();
        return jc.hasOwnProperty(t) && jc[t] || null;
      }
    }
    function g_(e, t, a, i, l, c, v) {
      var y, S;
      switch (y = Xi(t, a), sm(t, a), t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < zp.length; b++)
            Nn(zp[b], e);
          break;
        case "source":
          Nn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e);
          break;
        case "details":
          Nn("toggle", e);
          break;
        case "input":
          M(e, a), Nn("invalid", e);
          break;
        case "option":
          on(e, a);
          break;
        case "select":
          Rs(e, a), Nn("invalid", e);
          break;
        case "textarea":
          $v(e, a), Nn("invalid", e);
          break;
      }
      Pc(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, I = 0; I < _.length; I++) {
          var U = _[I].name.toLowerCase();
          switch (U) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(_[I].name);
          }
        }
      }
      var q = null;
      for (var te in a)
        if (a.hasOwnProperty(te)) {
          var ie = a[te];
          if (te === lc)
            typeof ie == "string" ? e.textContent !== ie && (a[Ku] !== !0 && dm(e.textContent, ie, c, v), q = [lc, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (a[Ku] !== !0 && dm(e.textContent, ie, c, v), q = [lc, "" + ie]);
          else if (tt.hasOwnProperty(te))
            ie != null && (typeof ie != "function" && cm(te, ie), te === "onScroll" && Nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Pe = void 0, it = y && Je ? null : jr(te);
            if (a[Ku] !== !0) {
              if (!(te === lm || te === Ku || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              te === "value" || te === "checked" || te === "selected")) {
                if (te === Hp) {
                  var Ze = e.innerHTML, Vt = ie ? ie[um] : void 0;
                  if (Vt != null) {
                    var Pt = BE(e, Vt);
                    Pt !== Ze && Vp(te, Ze, Pt);
                  }
                } else if (te === uc) {
                  if (S.delete(te), IE) {
                    var Y = yg(ie);
                    Pe = e.getAttribute("style"), Y !== Pe && Vp(te, Pe, Y);
                  }
                } else if (y && !Je)
                  S.delete(te.toLowerCase()), Pe = wi(e, te, ie), ie !== Pe && Vp(te, Pe, ie);
                else if (!_n(te, it, y) && !an(te, ie, it, y)) {
                  var oe = !1;
                  if (it !== null)
                    S.delete(it.attributeName), Pe = Ea(e, te, ie, it);
                  else {
                    var Q = i;
                    if (Q === Gi && (Q = Nc(t)), Q === Gi)
                      S.delete(te.toLowerCase());
                    else {
                      var xe = y_(te);
                      xe !== null && xe !== te && (oe = !0, S.delete(xe)), S.delete(te);
                    }
                    Pe = wi(e, te, ie);
                  }
                  var Fe = Je;
                  !Fe && ie !== Pe && !oe && Vp(te, Pe, ie);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Ku] !== !0 && VE(S), t) {
        case "input":
          Ha(e), Ce(e, a, !0);
          break;
        case "textarea":
          Ha(e), Yv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && pm(e);
          break;
      }
      return q;
    }
    function S_(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Xg(e, t) {
      {
        if (ti)
          return;
        ti = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function qg(e, t) {
      {
        if (ti)
          return;
        ti = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Zg(e, t, a) {
      {
        if (ti)
          return;
        ti = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Jg(e, t) {
      {
        if (t === "" || ti)
          return;
        ti = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function x_(e, t, a) {
      switch (t) {
        case "input":
          ft(e, a);
          return;
        case "textarea":
          zd(e, a);
          return;
        case "select":
          cg(e, a);
          return;
      }
    }
    var Ip = function() {
    }, Bp = function() {
    };
    {
      var E_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], WE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], C_ = WE.concat(["button"]), w_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], YE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Bp = function(e, t) {
        var a = Dt({}, e || YE), i = {
          tag: t
        };
        return WE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), C_.indexOf(t) !== -1 && (a.pTagInButtonScope = null), E_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var b_ = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return w_.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, R_ = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, QE = {};
      Ip = function(e, t, a) {
        a = a || YE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = b_(e, l) ? null : i, v = c ? null : R_(e, a), y = c || v;
        if (y) {
          var S = y.tag, b = !!c + "|" + e + "|" + S;
          if (!QE[b]) {
            QE[b] = !0;
            var _ = e, I = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", I = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", c) {
              var U = "";
              S === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, S, I, U);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, S);
          }
        }
      };
    }
    var vm = "suppressHydrationWarning", hm = "$", mm = "/$", $p = "$?", Wp = "$!", T_ = "style", eS = null, tS = null;
    function __(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case pi:
        case pl: {
          t = i === pi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Fd(null, "");
          break;
        }
        default: {
          var c = i === Yn ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, a = Fd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), S = Bp(null, y);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function k_(e, t, a) {
      {
        var i = e, l = Fd(i.namespace, t), c = Bp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: c
        };
      }
    }
    function AP(e) {
      return e;
    }
    function D_(e) {
      eS = Iu(), tS = BT();
      var t = null;
      return pa(!1), t;
    }
    function O_(e) {
      $T(tS), pa(eS), eS = null, tS = null;
    }
    function N_(e, t, a, i, l) {
      var c;
      {
        var v = i;
        if (Ip(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, S = Bp(v.ancestorInfo, e);
          Ip(null, y, S);
        }
        c = v.namespace;
      }
      var b = d_(e, t, a, c);
      return Gp(l, b), sS(b, t), b;
    }
    function M_(e, t) {
      e.appendChild(t);
    }
    function A_(e, t, a, i, l) {
      switch (v_(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function L_(e, t, a, i, l, c) {
      {
        var v = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, S = Bp(v.ancestorInfo, t);
          Ip(null, y, S);
        }
      }
      return h_(e, t, a, i);
    }
    function nS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function P_(e, t, a, i) {
      {
        var l = a;
        Ip(null, e, l.ancestorInfo);
      }
      var c = p_(e, t);
      return Gp(i, c), c;
    }
    function j_() {
      var e = window.event;
      return e === void 0 ? Mi : _f(e.type);
    }
    var rS = typeof setTimeout == "function" ? setTimeout : void 0, z_ = typeof clearTimeout == "function" ? clearTimeout : void 0, aS = -1, GE = typeof Promise == "function" ? Promise : void 0, U_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof GE < "u" ? function(e) {
      return GE.resolve(null).then(e).catch(F_);
    } : rS;
    function F_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function H_(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function V_(e, t, a, i, l, c) {
      m_(e, t, a, i, l), sS(e, l);
    }
    function KE(e) {
      Ac(e, "");
    }
    function I_(e, t, a) {
      e.nodeValue = a;
    }
    function B_(e, t) {
      e.appendChild(t);
    }
    function $_(e, t) {
      var a;
      e.nodeType === Yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && pm(a);
    }
    function W_(e, t, a) {
      e.insertBefore(t, a);
    }
    function Y_(e, t, a) {
      e.nodeType === Yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Q_(e, t) {
      e.removeChild(t);
    }
    function G_(e, t) {
      e.nodeType === Yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function iS(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Yn) {
          var c = l.data;
          if (c === mm)
            if (i === 0) {
              e.removeChild(l), jn(t);
              return;
            } else
              i--;
          else (c === hm || c === $p || c === Wp) && i++;
        }
        a = l;
      } while (a);
      jn(t);
    }
    function K_(e, t) {
      e.nodeType === Yn ? iS(e.parentNode, t) : e.nodeType === ra && iS(e, t), jn(e);
    }
    function X_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function q_(e) {
      e.nodeValue = "";
    }
    function Z_(e, t) {
      e = e;
      var a = t[T_], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Lc("display", i);
    }
    function J_(e, t) {
      e.nodeValue = t;
    }
    function ek(e) {
      e.nodeType === ra ? e.textContent = "" : e.nodeType === pi && e.documentElement && e.removeChild(e.documentElement);
    }
    function tk(e, t, a) {
      return e.nodeType !== ra || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function nk(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function rk(e) {
      return e.nodeType !== Yn ? null : e;
    }
    function XE(e) {
      return e.data === $p;
    }
    function oS(e) {
      return e.data === Wp;
    }
    function ak(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function ik(e, t) {
      e._reactRetry = t;
    }
    function ym(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ra || t === Ki)
          break;
        if (t === Yn) {
          var a = e.data;
          if (a === hm || a === Wp || a === $p)
            break;
          if (a === mm)
            return null;
        }
      }
      return e;
    }
    function Yp(e) {
      return ym(e.nextSibling);
    }
    function ok(e) {
      return ym(e.firstChild);
    }
    function lk(e) {
      return ym(e.firstChild);
    }
    function uk(e) {
      return ym(e.nextSibling);
    }
    function sk(e, t, a, i, l, c, v) {
      Gp(c, e), sS(e, a);
      var y;
      {
        var S = l;
        y = S.namespace;
      }
      var b = (c.mode & qe) !== Ge;
      return g_(e, t, a, y, i, b, v);
    }
    function ck(e, t, a, i) {
      return Gp(a, e), a.mode & qe, S_(e, t);
    }
    function fk(e, t) {
      Gp(t, e);
    }
    function dk(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === mm) {
            if (a === 0)
              return Yp(t);
            a--;
          } else (i === hm || i === Wp || i === $p) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function qE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === hm || i === Wp || i === $p) {
            if (a === 0)
              return t;
            a--;
          } else i === mm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function pk(e) {
      jn(e);
    }
    function vk(e) {
      jn(e);
    }
    function hk(e) {
      return e !== "head" && e !== "body";
    }
    function mk(e, t, a, i) {
      var l = !0;
      dm(t.nodeValue, a, i, l);
    }
    function yk(e, t, a, i, l, c) {
      if (t[vm] !== !0) {
        var v = !0;
        dm(i.nodeValue, l, c, v);
      }
    }
    function gk(e, t) {
      t.nodeType === ra ? Xg(e, t) : t.nodeType === Yn || qg(e, t);
    }
    function Sk(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ra ? Xg(a, t) : t.nodeType === Yn || qg(a, t));
      }
    }
    function xk(e, t, a, i, l) {
      (l || t[vm] !== !0) && (i.nodeType === ra ? Xg(a, i) : i.nodeType === Yn || qg(a, i));
    }
    function Ek(e, t, a) {
      Zg(e, t);
    }
    function Ck(e, t) {
      Jg(e, t);
    }
    function wk(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Zg(i, t);
      }
    }
    function bk(e, t) {
      {
        var a = e.parentNode;
        a !== null && Jg(a, t);
      }
    }
    function Rk(e, t, a, i, l, c) {
      (c || t[vm] !== !0) && Zg(a, i);
    }
    function Tk(e, t, a, i, l) {
      (l || t[vm] !== !0) && Jg(a, i);
    }
    function _k(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function kk(e) {
      Up(e);
    }
    var Wf = Math.random().toString(36).slice(2), Yf = "__reactFiber$" + Wf, lS = "__reactProps$" + Wf, Qp = "__reactContainer$" + Wf, uS = "__reactEvents$" + Wf, Dk = "__reactListeners$" + Wf, Ok = "__reactHandles$" + Wf;
    function Nk(e) {
      delete e[Yf], delete e[lS], delete e[uS], delete e[Dk], delete e[Ok];
    }
    function Gp(e, t) {
      t[Yf] = e;
    }
    function gm(e, t) {
      t[Qp] = e;
    }
    function ZE(e) {
      e[Qp] = null;
    }
    function Kp(e) {
      return !!e[Qp];
    }
    function sc(e) {
      var t = e[Yf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Qp] || a[Yf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = qE(e); l !== null; ) {
              var c = l[Yf];
              if (c)
                return c;
              l = qE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Xu(e) {
      var t = e[Yf] || e[Qp];
      return t && (t.tag === P || t.tag === $ || t.tag === re || t.tag === A) ? t : null;
    }
    function Qf(e) {
      if (e.tag === P || e.tag === $)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Sm(e) {
      return e[lS] || null;
    }
    function sS(e, t) {
      e[lS] = t;
    }
    function Mk(e) {
      var t = e[uS];
      return t === void 0 && (t = e[uS] = /* @__PURE__ */ new Set()), t;
    }
    var JE = {}, eC = d.ReactDebugCurrentFrame;
    function xm(e) {
      if (e) {
        var t = e._owner, a = _i(e.type, e._source, t ? t.type : null);
        eC.setExtraStackFrame(a);
      } else
        eC.setExtraStackFrame(null);
    }
    function uo(e, t, a, i, l) {
      {
        var c = Function.call.bind(rn);
        for (var v in e)
          if (c(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var S = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              y = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              y = b;
            }
            y && !(y instanceof Error) && (xm(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof y), xm(null)), y instanceof Error && !(y.message in JE) && (JE[y.message] = !0, xm(l), m("Failed %s type: %s", a, y.message), xm(null));
          }
      }
    }
    var cS = [], Em;
    Em = [];
    var zl = -1;
    function qu(e) {
      return {
        current: e
      };
    }
    function va(e, t) {
      if (zl < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Em[zl] && m("Unexpected Fiber popped."), e.current = cS[zl], cS[zl] = null, Em[zl] = null, zl--;
    }
    function ha(e, t, a) {
      zl++, cS[zl] = e.current, Em[zl] = a, e.current = t;
    }
    var fS;
    fS = {};
    var yi = {};
    Object.freeze(yi);
    var Ul = qu(yi), Xo = qu(!1), dS = yi;
    function Gf(e, t, a) {
      return a && qo(t) ? dS : Ul.current;
    }
    function tC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Kf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return yi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in i)
          c[v] = t[v];
        {
          var y = xt(e) || "Unknown";
          uo(i, c, "context", y);
        }
        return l && tC(e, t, c), c;
      }
    }
    function Cm() {
      return Xo.current;
    }
    function qo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function wm(e) {
      va(Xo, e), va(Ul, e);
    }
    function pS(e) {
      va(Xo, e), va(Ul, e);
    }
    function nC(e, t, a) {
      {
        if (Ul.current !== yi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ha(Ul, t, e), ha(Xo, a, e);
      }
    }
    function rC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = xt(e) || "Unknown";
            fS[c] || (fS[c] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var y in v)
          if (!(y in l))
            throw new Error((xt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var S = xt(e) || "Unknown";
          uo(l, v, "child context", S);
        }
        return Dt({}, a, v);
      }
    }
    function bm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || yi;
        return dS = Ul.current, ha(Ul, a, e), ha(Xo, Xo.current, e), !0;
      }
    }
    function aC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = rC(e, t, dS);
          i.__reactInternalMemoizedMergedChildContext = l, va(Xo, e), va(Ul, e), ha(Ul, l, e), ha(Xo, a, e);
        } else
          va(Xo, e), ha(Xo, a, e);
      }
    }
    function Ak(e) {
      {
        if (!ip(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case k: {
              var a = t.type;
              if (qo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Zu = 0, Rm = 1, Fl = null, vS = !1, hS = !1;
    function iC(e) {
      Fl === null ? Fl = [e] : Fl.push(e);
    }
    function Lk(e) {
      vS = !0, iC(e);
    }
    function oC() {
      vS && Ju();
    }
    function Ju() {
      if (!hS && Fl !== null) {
        hS = !0;
        var e = 0, t = Xa();
        try {
          var a = !0, i = Fl;
          for (Pn(Hn); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Fl = null, vS = !1;
        } catch (c) {
          throw Fl !== null && (Fl = Fl.slice(e + 1)), Wc(Qc, Ju), c;
        } finally {
          Pn(t), hS = !1;
        }
      }
      return null;
    }
    var Xf = [], qf = 0, Tm = null, _m = 0, ji = [], zi = 0, cc = null, Hl = 1, Vl = "";
    function Pk(e) {
      return dc(), (e.flags & np) !== at;
    }
    function jk(e) {
      return dc(), _m;
    }
    function zk() {
      var e = Vl, t = Hl, a = t & ~Uk(t);
      return a.toString(32) + e;
    }
    function fc(e, t) {
      dc(), Xf[qf++] = _m, Xf[qf++] = Tm, Tm = e, _m = t;
    }
    function lC(e, t, a) {
      dc(), ji[zi++] = Hl, ji[zi++] = Vl, ji[zi++] = cc, cc = e;
      var i = Hl, l = Vl, c = km(i) - 1, v = i & ~(1 << c), y = a + 1, S = km(t) + c;
      if (S > 30) {
        var b = c - c % 5, _ = (1 << b) - 1, I = (v & _).toString(32), U = v >> b, q = c - b, te = km(t) + q, ie = y << q, Pe = ie | U, it = I + l;
        Hl = 1 << te | Pe, Vl = it;
      } else {
        var Ze = y << c, Vt = Ze | v, Pt = l;
        Hl = 1 << S | Vt, Vl = Pt;
      }
    }
    function mS(e) {
      dc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        fc(e, a), lC(e, a, i);
      }
    }
    function km(e) {
      return 32 - Ru(e);
    }
    function Uk(e) {
      return 1 << km(e) - 1;
    }
    function yS(e) {
      for (; e === Tm; )
        Tm = Xf[--qf], Xf[qf] = null, _m = Xf[--qf], Xf[qf] = null;
      for (; e === cc; )
        cc = ji[--zi], ji[zi] = null, Vl = ji[--zi], ji[zi] = null, Hl = ji[--zi], ji[zi] = null;
    }
    function Fk() {
      return dc(), cc !== null ? {
        id: Hl,
        overflow: Vl
      } : null;
    }
    function Hk(e, t) {
      dc(), ji[zi++] = Hl, ji[zi++] = Vl, ji[zi++] = cc, Hl = t.id, Vl = t.overflow, cc = e;
    }
    function dc() {
      $r() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Br = null, Ui = null, so = !1, pc = !1, es = null;
    function Vk() {
      so && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function uC() {
      pc = !0;
    }
    function Ik() {
      return pc;
    }
    function Bk(e) {
      var t = e.stateNode.containerInfo;
      return Ui = lk(t), Br = e, so = !0, es = null, pc = !1, !0;
    }
    function $k(e, t, a) {
      return Ui = uk(t), Br = e, so = !0, es = null, pc = !1, a !== null && Hk(e, a), !0;
    }
    function sC(e, t) {
      switch (e.tag) {
        case A: {
          gk(e.stateNode.containerInfo, t);
          break;
        }
        case P: {
          var a = (e.mode & qe) !== Ge;
          xk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case re: {
          var i = e.memoizedState;
          i.dehydrated !== null && Sk(i.dehydrated, t);
          break;
        }
      }
    }
    function cC(e, t) {
      sC(e, t);
      var a = GN();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xt) : i.push(a);
    }
    function gS(e, t) {
      {
        if (pc)
          return;
        switch (e.tag) {
          case A: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case P:
                var i = t.type;
                t.pendingProps, Ek(a, i);
                break;
              case $:
                var l = t.pendingProps;
                Ck(a, l);
                break;
            }
            break;
          }
          case P: {
            var c = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case P: {
                var S = t.type, b = t.pendingProps, _ = (e.mode & qe) !== Ge;
                Rk(
                  c,
                  v,
                  y,
                  S,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case $: {
                var I = t.pendingProps, U = (e.mode & qe) !== Ge;
                Tk(
                  c,
                  v,
                  y,
                  I,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case re: {
            var q = e.memoizedState, te = q.dehydrated;
            if (te !== null) switch (t.tag) {
              case P:
                var ie = t.type;
                t.pendingProps, wk(te, ie);
                break;
              case $:
                var Pe = t.pendingProps;
                bk(te, Pe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function fC(e, t) {
      t.flags = t.flags & ~$a | Sn, gS(e, t);
    }
    function dC(e, t) {
      switch (e.tag) {
        case P: {
          var a = e.type;
          e.pendingProps;
          var i = tk(t, a);
          return i !== null ? (e.stateNode = i, Br = e, Ui = ok(i), !0) : !1;
        }
        case $: {
          var l = e.pendingProps, c = nk(t, l);
          return c !== null ? (e.stateNode = c, Br = e, Ui = null, !0) : !1;
        }
        case re: {
          var v = rk(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: Fk(),
              retryLane: Mr
            };
            e.memoizedState = y;
            var S = KN(v);
            return S.return = e, e.child = S, Br = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function SS(e) {
      return (e.mode & qe) !== Ge && (e.flags & gt) === at;
    }
    function xS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ES(e) {
      if (so) {
        var t = Ui;
        if (!t) {
          SS(e) && (gS(Br, e), xS()), fC(Br, e), so = !1, Br = e;
          return;
        }
        var a = t;
        if (!dC(e, t)) {
          SS(e) && (gS(Br, e), xS()), t = Yp(a);
          var i = Br;
          if (!t || !dC(e, t)) {
            fC(Br, e), so = !1, Br = e;
            return;
          }
          cC(i, a);
        }
      }
    }
    function Wk(e, t, a) {
      var i = e.stateNode, l = !pc, c = sk(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = c, c !== null;
    }
    function Yk(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ck(t, a, e);
      if (i) {
        var l = Br;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var c = l.stateNode.containerInfo, v = (l.mode & qe) !== Ge;
              mk(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case P: {
              var y = l.type, S = l.memoizedProps, b = l.stateNode, _ = (l.mode & qe) !== Ge;
              yk(
                y,
                S,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return i;
    }
    function Qk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      fk(a, e);
    }
    function Gk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return dk(a);
    }
    function pC(e) {
      for (var t = e.return; t !== null && t.tag !== P && t.tag !== A && t.tag !== re; )
        t = t.return;
      Br = t;
    }
    function Dm(e) {
      if (e !== Br)
        return !1;
      if (!so)
        return pC(e), so = !0, !1;
      if (e.tag !== A && (e.tag !== P || hk(e.type) && !nS(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (SS(e))
            vC(e), xS();
          else
            for (; t; )
              cC(e, t), t = Yp(t);
      }
      return pC(e), e.tag === re ? Ui = Gk(e) : Ui = Br ? Yp(e.stateNode) : null, !0;
    }
    function Kk() {
      return so && Ui !== null;
    }
    function vC(e) {
      for (var t = Ui; t; )
        sC(e, t), t = Yp(t);
    }
    function Zf() {
      Br = null, Ui = null, so = !1, pc = !1;
    }
    function hC() {
      es !== null && (ub(es), es = null);
    }
    function $r() {
      return so;
    }
    function CS(e) {
      es === null ? es = [e] : es.push(e);
    }
    var Xk = d.ReactCurrentBatchConfig, qk = null;
    function Zk() {
      return Xk.transition;
    }
    var co = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Jk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Nt && (t = a), a = a.return;
        return t;
      }, vc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Xp = [], qp = [], Zp = [], Jp = [], ev = [], tv = [], hc = /* @__PURE__ */ new Set();
      co.recordUnsafeLifecycleWarnings = function(e, t) {
        hc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillMount == "function" && qp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Jp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ev.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillUpdate == "function" && tv.push(e));
      }, co.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(U) {
          e.add(xt(U) || "Component"), hc.add(U.type);
        }), Xp = []);
        var t = /* @__PURE__ */ new Set();
        qp.length > 0 && (qp.forEach(function(U) {
          t.add(xt(U) || "Component"), hc.add(U.type);
        }), qp = []);
        var a = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(U) {
          a.add(xt(U) || "Component"), hc.add(U.type);
        }), Zp = []);
        var i = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(U) {
          i.add(xt(U) || "Component"), hc.add(U.type);
        }), Jp = []);
        var l = /* @__PURE__ */ new Set();
        ev.length > 0 && (ev.forEach(function(U) {
          l.add(xt(U) || "Component"), hc.add(U.type);
        }), ev = []);
        var c = /* @__PURE__ */ new Set();
        if (tv.length > 0 && (tv.forEach(function(U) {
          c.add(xt(U) || "Component"), hc.add(U.type);
        }), tv = []), t.size > 0) {
          var v = vc(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var y = vc(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (c.size > 0) {
          var S = vc(c);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var b = vc(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var _ = vc(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (l.size > 0) {
          var I = vc(l);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var Om = /* @__PURE__ */ new Map(), mC = /* @__PURE__ */ new Set();
      co.recordLegacyContextWarning = function(e, t) {
        var a = Jk(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!mC.has(e.type)) {
          var i = Om.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Om.set(a, i)), i.push(e));
        }
      }, co.flushLegacyContextWarning = function() {
        Om.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(xt(c) || "Component"), mC.add(c.type);
            });
            var l = vc(i);
            try {
              en(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              An();
            }
          }
        });
      }, co.discardPendingWarnings = function() {
        Xp = [], qp = [], Zp = [], Jp = [], ev = [], tv = [], Om = /* @__PURE__ */ new Map();
      };
    }
    var wS, bS, RS, TS, _S, yC = function(e, t) {
    };
    wS = !1, bS = !1, RS = {}, TS = {}, _S = {}, yC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = xt(t) || "Component";
        TS[a] || (TS[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function eD(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function nv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Nt || et) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== k) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !eD(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = xt(e) || "Component";
          RS[l] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), RS[l] = !0);
        }
        if (a._owner) {
          var c = a._owner, v;
          if (c) {
            var y = c;
            if (y.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = v;
          rr(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var _ = function(I) {
            var U = S.refs;
            I === null ? delete U[b] : U[b] = I;
          };
          return _._stringRef = b, _;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Nm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Mm(e) {
      {
        var t = xt(e) || "Component";
        if (_S[t])
          return;
        _S[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function gC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function SC(e) {
      function t(Y, oe) {
        if (e) {
          var Q = Y.deletions;
          Q === null ? (Y.deletions = [oe], Y.flags |= Xt) : Q.push(oe);
        }
      }
      function a(Y, oe) {
        if (!e)
          return null;
        for (var Q = oe; Q !== null; )
          t(Y, Q), Q = Q.sibling;
        return null;
      }
      function i(Y, oe) {
        for (var Q = /* @__PURE__ */ new Map(), xe = oe; xe !== null; )
          xe.key !== null ? Q.set(xe.key, xe) : Q.set(xe.index, xe), xe = xe.sibling;
        return Q;
      }
      function l(Y, oe) {
        var Q = bc(Y, oe);
        return Q.index = 0, Q.sibling = null, Q;
      }
      function c(Y, oe, Q) {
        if (Y.index = Q, !e)
          return Y.flags |= np, oe;
        var xe = Y.alternate;
        if (xe !== null) {
          var Fe = xe.index;
          return Fe < oe ? (Y.flags |= Sn, oe) : Fe;
        } else
          return Y.flags |= Sn, oe;
      }
      function v(Y) {
        return e && Y.alternate === null && (Y.flags |= Sn), Y;
      }
      function y(Y, oe, Q, xe) {
        if (oe === null || oe.tag !== $) {
          var Fe = Cx(Q, Y.mode, xe);
          return Fe.return = Y, Fe;
        } else {
          var je = l(oe, Q);
          return je.return = Y, je;
        }
      }
      function S(Y, oe, Q, xe) {
        var Fe = Q.type;
        if (Fe === wa)
          return _(Y, oe, Q.props.children, xe, Q.key);
        if (oe !== null && (oe.elementType === Fe || // Keep this check inline so it only runs on the false path:
        bb(oe, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Fe == "object" && Fe !== null && Fe.$$typeof === ct && gC(Fe) === oe.type)) {
          var je = l(oe, Q.props);
          return je.ref = nv(Y, oe, Q), je.return = Y, je._debugSource = Q._source, je._debugOwner = Q._owner, je;
        }
        var mt = Ex(Q, Y.mode, xe);
        return mt.ref = nv(Y, oe, Q), mt.return = Y, mt;
      }
      function b(Y, oe, Q, xe) {
        if (oe === null || oe.tag !== z || oe.stateNode.containerInfo !== Q.containerInfo || oe.stateNode.implementation !== Q.implementation) {
          var Fe = wx(Q, Y.mode, xe);
          return Fe.return = Y, Fe;
        } else {
          var je = l(oe, Q.children || []);
          return je.return = Y, je;
        }
      }
      function _(Y, oe, Q, xe, Fe) {
        if (oe === null || oe.tag !== F) {
          var je = fs(Q, Y.mode, xe, Fe);
          return je.return = Y, je;
        } else {
          var mt = l(oe, Q);
          return mt.return = Y, mt;
        }
      }
      function I(Y, oe, Q) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var xe = Cx("" + oe, Y.mode, Q);
          return xe.return = Y, xe;
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case si: {
              var Fe = Ex(oe, Y.mode, Q);
              return Fe.ref = nv(Y, null, oe), Fe.return = Y, Fe;
            }
            case zr: {
              var je = wx(oe, Y.mode, Q);
              return je.return = Y, je;
            }
            case ct: {
              var mt = oe._payload, wt = oe._init;
              return I(Y, wt(mt), Q);
            }
          }
          if (Ut(oe) || Ur(oe)) {
            var un = fs(oe, Y.mode, Q, null);
            return un.return = Y, un;
          }
          Nm(Y, oe);
        }
        return typeof oe == "function" && Mm(Y), null;
      }
      function U(Y, oe, Q, xe) {
        var Fe = oe !== null ? oe.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return Fe !== null ? null : y(Y, oe, "" + Q, xe);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case si:
              return Q.key === Fe ? S(Y, oe, Q, xe) : null;
            case zr:
              return Q.key === Fe ? b(Y, oe, Q, xe) : null;
            case ct: {
              var je = Q._payload, mt = Q._init;
              return U(Y, oe, mt(je), xe);
            }
          }
          if (Ut(Q) || Ur(Q))
            return Fe !== null ? null : _(Y, oe, Q, xe, null);
          Nm(Y, Q);
        }
        return typeof Q == "function" && Mm(Y), null;
      }
      function q(Y, oe, Q, xe, Fe) {
        if (typeof xe == "string" && xe !== "" || typeof xe == "number") {
          var je = Y.get(Q) || null;
          return y(oe, je, "" + xe, Fe);
        }
        if (typeof xe == "object" && xe !== null) {
          switch (xe.$$typeof) {
            case si: {
              var mt = Y.get(xe.key === null ? Q : xe.key) || null;
              return S(oe, mt, xe, Fe);
            }
            case zr: {
              var wt = Y.get(xe.key === null ? Q : xe.key) || null;
              return b(oe, wt, xe, Fe);
            }
            case ct:
              var un = xe._payload, Qt = xe._init;
              return q(Y, oe, Q, Qt(un), Fe);
          }
          if (Ut(xe) || Ur(xe)) {
            var nr = Y.get(Q) || null;
            return _(oe, nr, xe, Fe, null);
          }
          Nm(oe, xe);
        }
        return typeof xe == "function" && Mm(oe), null;
      }
      function te(Y, oe, Q) {
        {
          if (typeof Y != "object" || Y === null)
            return oe;
          switch (Y.$$typeof) {
            case si:
            case zr:
              yC(Y, Q);
              var xe = Y.key;
              if (typeof xe != "string")
                break;
              if (oe === null) {
                oe = /* @__PURE__ */ new Set(), oe.add(xe);
                break;
              }
              if (!oe.has(xe)) {
                oe.add(xe);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", xe);
              break;
            case ct:
              var Fe = Y._payload, je = Y._init;
              te(je(Fe), oe, Q);
              break;
          }
        }
        return oe;
      }
      function ie(Y, oe, Q, xe) {
        for (var Fe = null, je = 0; je < Q.length; je++) {
          var mt = Q[je];
          Fe = te(mt, Fe, Y);
        }
        for (var wt = null, un = null, Qt = oe, nr = 0, Gt = 0, Kn = null; Qt !== null && Gt < Q.length; Gt++) {
          Qt.index > Gt ? (Kn = Qt, Qt = null) : Kn = Qt.sibling;
          var ya = U(Y, Qt, Q[Gt], xe);
          if (ya === null) {
            Qt === null && (Qt = Kn);
            break;
          }
          e && Qt && ya.alternate === null && t(Y, Qt), nr = c(ya, nr, Gt), un === null ? wt = ya : un.sibling = ya, un = ya, Qt = Kn;
        }
        if (Gt === Q.length) {
          if (a(Y, Qt), $r()) {
            var qr = Gt;
            fc(Y, qr);
          }
          return wt;
        }
        if (Qt === null) {
          for (; Gt < Q.length; Gt++) {
            var Si = I(Y, Q[Gt], xe);
            Si !== null && (nr = c(Si, nr, Gt), un === null ? wt = Si : un.sibling = Si, un = Si);
          }
          if ($r()) {
            var Aa = Gt;
            fc(Y, Aa);
          }
          return wt;
        }
        for (var La = i(Y, Qt); Gt < Q.length; Gt++) {
          var ga = q(La, Y, Gt, Q[Gt], xe);
          ga !== null && (e && ga.alternate !== null && La.delete(ga.key === null ? Gt : ga.key), nr = c(ga, nr, Gt), un === null ? wt = ga : un.sibling = ga, un = ga);
        }
        if (e && La.forEach(function(yd) {
          return t(Y, yd);
        }), $r()) {
          var Gl = Gt;
          fc(Y, Gl);
        }
        return wt;
      }
      function Pe(Y, oe, Q, xe) {
        var Fe = Ur(Q);
        if (typeof Fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (bS || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), bS = !0), Q.entries === Fe && (wS || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wS = !0);
          var je = Fe.call(Q);
          if (je)
            for (var mt = null, wt = je.next(); !wt.done; wt = je.next()) {
              var un = wt.value;
              mt = te(un, mt, Y);
            }
        }
        var Qt = Fe.call(Q);
        if (Qt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var nr = null, Gt = null, Kn = oe, ya = 0, qr = 0, Si = null, Aa = Qt.next(); Kn !== null && !Aa.done; qr++, Aa = Qt.next()) {
          Kn.index > qr ? (Si = Kn, Kn = null) : Si = Kn.sibling;
          var La = U(Y, Kn, Aa.value, xe);
          if (La === null) {
            Kn === null && (Kn = Si);
            break;
          }
          e && Kn && La.alternate === null && t(Y, Kn), ya = c(La, ya, qr), Gt === null ? nr = La : Gt.sibling = La, Gt = La, Kn = Si;
        }
        if (Aa.done) {
          if (a(Y, Kn), $r()) {
            var ga = qr;
            fc(Y, ga);
          }
          return nr;
        }
        if (Kn === null) {
          for (; !Aa.done; qr++, Aa = Qt.next()) {
            var Gl = I(Y, Aa.value, xe);
            Gl !== null && (ya = c(Gl, ya, qr), Gt === null ? nr = Gl : Gt.sibling = Gl, Gt = Gl);
          }
          if ($r()) {
            var yd = qr;
            fc(Y, yd);
          }
          return nr;
        }
        for (var Lv = i(Y, Kn); !Aa.done; qr++, Aa = Qt.next()) {
          var il = q(Lv, Y, qr, Aa.value, xe);
          il !== null && (e && il.alternate !== null && Lv.delete(il.key === null ? qr : il.key), ya = c(il, ya, qr), Gt === null ? nr = il : Gt.sibling = il, Gt = il);
        }
        if (e && Lv.forEach(function(TM) {
          return t(Y, TM);
        }), $r()) {
          var RM = qr;
          fc(Y, RM);
        }
        return nr;
      }
      function it(Y, oe, Q, xe) {
        if (oe !== null && oe.tag === $) {
          a(Y, oe.sibling);
          var Fe = l(oe, Q);
          return Fe.return = Y, Fe;
        }
        a(Y, oe);
        var je = Cx(Q, Y.mode, xe);
        return je.return = Y, je;
      }
      function Ze(Y, oe, Q, xe) {
        for (var Fe = Q.key, je = oe; je !== null; ) {
          if (je.key === Fe) {
            var mt = Q.type;
            if (mt === wa) {
              if (je.tag === F) {
                a(Y, je.sibling);
                var wt = l(je, Q.props.children);
                return wt.return = Y, wt._debugSource = Q._source, wt._debugOwner = Q._owner, wt;
              }
            } else if (je.elementType === mt || // Keep this check inline so it only runs on the false path:
            bb(je, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof mt == "object" && mt !== null && mt.$$typeof === ct && gC(mt) === je.type) {
              a(Y, je.sibling);
              var un = l(je, Q.props);
              return un.ref = nv(Y, je, Q), un.return = Y, un._debugSource = Q._source, un._debugOwner = Q._owner, un;
            }
            a(Y, je);
            break;
          } else
            t(Y, je);
          je = je.sibling;
        }
        if (Q.type === wa) {
          var Qt = fs(Q.props.children, Y.mode, xe, Q.key);
          return Qt.return = Y, Qt;
        } else {
          var nr = Ex(Q, Y.mode, xe);
          return nr.ref = nv(Y, oe, Q), nr.return = Y, nr;
        }
      }
      function Vt(Y, oe, Q, xe) {
        for (var Fe = Q.key, je = oe; je !== null; ) {
          if (je.key === Fe)
            if (je.tag === z && je.stateNode.containerInfo === Q.containerInfo && je.stateNode.implementation === Q.implementation) {
              a(Y, je.sibling);
              var mt = l(je, Q.children || []);
              return mt.return = Y, mt;
            } else {
              a(Y, je);
              break;
            }
          else
            t(Y, je);
          je = je.sibling;
        }
        var wt = wx(Q, Y.mode, xe);
        return wt.return = Y, wt;
      }
      function Pt(Y, oe, Q, xe) {
        var Fe = typeof Q == "object" && Q !== null && Q.type === wa && Q.key === null;
        if (Fe && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case si:
              return v(Ze(Y, oe, Q, xe));
            case zr:
              return v(Vt(Y, oe, Q, xe));
            case ct:
              var je = Q._payload, mt = Q._init;
              return Pt(Y, oe, mt(je), xe);
          }
          if (Ut(Q))
            return ie(Y, oe, Q, xe);
          if (Ur(Q))
            return Pe(Y, oe, Q, xe);
          Nm(Y, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? v(it(Y, oe, "" + Q, xe)) : (typeof Q == "function" && Mm(Y), a(Y, oe));
      }
      return Pt;
    }
    var Jf = SC(!0), xC = SC(!1);
    function tD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = bc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = bc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function nD(e, t) {
      for (var a = e.child; a !== null; )
        BN(a, t), a = a.sibling;
    }
    var kS = qu(null), DS;
    DS = {};
    var Am = null, ed = null, OS = null, Lm = !1;
    function Pm() {
      Am = null, ed = null, OS = null, Lm = !1;
    }
    function EC() {
      Lm = !0;
    }
    function CC() {
      Lm = !1;
    }
    function wC(e, t, a) {
      ha(kS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== DS && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = DS;
    }
    function NS(e, t) {
      var a = kS.current;
      va(kS, t), e._currentValue = a;
    }
    function MS(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Dl(i.childLanes, t) ? l !== null && !Dl(l.childLanes, t) && (l.childLanes = bt(l.childLanes, t)) : (i.childLanes = bt(i.childLanes, t), l !== null && (l.childLanes = bt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function rD(e, t, a) {
      aD(e, t, a);
    }
    function aD(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, c = i.dependencies;
        if (c !== null) {
          l = i.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === k) {
                var y = Mu(a), S = Il(mn, y);
                S.tag = zm;
                var b = i.updateQueue;
                if (b !== null) {
                  var _ = b.shared, I = _.pending;
                  I === null ? S.next = S : (S.next = I.next, I.next = S), _.pending = S;
                }
              }
              i.lanes = bt(i.lanes, a);
              var U = i.alternate;
              U !== null && (U.lanes = bt(U.lanes, a)), MS(i.return, a, e), c.lanes = bt(c.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === K)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Qe) {
          var q = i.return;
          if (q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          q.lanes = bt(q.lanes, a);
          var te = q.alternate;
          te !== null && (te.lanes = bt(te.lanes, a)), MS(q, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var ie = l.sibling;
            if (ie !== null) {
              ie.return = l.return, l = ie;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function td(e, t) {
      Am = e, ed = null, OS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (da(a.lanes, t) && yv(), a.firstContext = null);
      }
    }
    function fr(e) {
      Lm && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (OS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (ed === null) {
          if (Am === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          ed = a, Am.dependencies = {
            lanes: ve,
            firstContext: a
          };
        } else
          ed = ed.next = a;
      }
      return t;
    }
    var mc = null;
    function AS(e) {
      mc === null ? mc = [e] : mc.push(e);
    }
    function iD() {
      if (mc !== null) {
        for (var e = 0; e < mc.length; e++) {
          var t = mc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var c = l.next;
              l.next = i, a.next = c;
            }
            t.pending = a;
          }
        }
        mc = null;
      }
    }
    function bC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, AS(t)) : (a.next = l.next, l.next = a), t.interleaved = a, jm(e, i);
    }
    function oD(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, AS(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function lD(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, AS(t)) : (a.next = l.next, l.next = a), t.interleaved = a, jm(e, i);
    }
    function ni(e, t) {
      return jm(e, t);
    }
    var uD = jm;
    function jm(e, t) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), a === null && (e.flags & (Sn | $a)) !== at && xb(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = bt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = bt(a.childLanes, t) : (l.flags & (Sn | $a)) !== at && xb(e), i = l, l = l.return;
      if (i.tag === A) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var RC = 0, TC = 1, zm = 2, LS = 3, Um = !1, PS, Fm;
    PS = !1, Fm = null;
    function jS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ve
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function _C(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Il(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: RC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function ts(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Fm === l && !PS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), PS = !0), oN()) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, uD(e, a);
      } else
        return lD(e, l, t, a);
    }
    function Hm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (yp(a)) {
          var c = l.lanes;
          c = gf(c, e.pendingLanes);
          var v = bt(c, a);
          l.lanes = v, gp(e, v);
        }
      }
    }
    function zS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var c = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var S = y;
            do {
              var b = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              v === null ? c = v = b : (v.next = b, v = b), S = S.next;
            } while (S !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var _ = a.lastBaseUpdate;
      _ === null ? a.firstBaseUpdate = t : _.next = t, a.lastBaseUpdate = t;
    }
    function sD(e, t, a, i, l, c) {
      switch (a.tag) {
        case TC: {
          var v = a.payload;
          if (typeof v == "function") {
            EC();
            var y = v.call(c, i, l);
            {
              if (e.mode & Nt) {
                Qn(!0);
                try {
                  v.call(c, i, l);
                } finally {
                  Qn(!1);
                }
              }
              CC();
            }
            return y;
          }
          return v;
        }
        case LS:
          e.flags = e.flags & ~lr | gt;
        case RC: {
          var S = a.payload, b;
          if (typeof S == "function") {
            EC(), b = S.call(c, i, l);
            {
              if (e.mode & Nt) {
                Qn(!0);
                try {
                  S.call(c, i, l);
                } finally {
                  Qn(!1);
                }
              }
              CC();
            }
          } else
            b = S;
          return b == null ? i : Dt({}, i, b);
        }
        case zm:
          return Um = !0, i;
      }
      return i;
    }
    function Vm(e, t, a, i) {
      var l = e.updateQueue;
      Um = !1, Fm = l.shared;
      var c = l.firstBaseUpdate, v = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var S = y, b = S.next;
        S.next = null, v === null ? c = b : v.next = b, v = S;
        var _ = e.alternate;
        if (_ !== null) {
          var I = _.updateQueue, U = I.lastBaseUpdate;
          U !== v && (U === null ? I.firstBaseUpdate = b : U.next = b, I.lastBaseUpdate = S);
        }
      }
      if (c !== null) {
        var q = l.baseState, te = ve, ie = null, Pe = null, it = null, Ze = c;
        do {
          var Vt = Ze.lane, Pt = Ze.eventTime;
          if (Dl(i, Vt)) {
            if (it !== null) {
              var oe = {
                eventTime: Pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Gn,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              it = it.next = oe;
            }
            q = sD(e, l, Ze, q, t, a);
            var Q = Ze.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ze.lane !== Gn) {
              e.flags |= Oi;
              var xe = l.effects;
              xe === null ? l.effects = [Ze] : xe.push(Ze);
            }
          } else {
            var Y = {
              eventTime: Pt,
              lane: Vt,
              tag: Ze.tag,
              payload: Ze.payload,
              callback: Ze.callback,
              next: null
            };
            it === null ? (Pe = it = Y, ie = q) : it = it.next = Y, te = bt(te, Vt);
          }
          if (Ze = Ze.next, Ze === null) {
            if (y = l.shared.pending, y === null)
              break;
            var Fe = y, je = Fe.next;
            Fe.next = null, Ze = je, l.lastBaseUpdate = Fe, l.shared.pending = null;
          }
        } while (!0);
        it === null && (ie = q), l.baseState = ie, l.firstBaseUpdate = Pe, l.lastBaseUpdate = it;
        var mt = l.shared.interleaved;
        if (mt !== null) {
          var wt = mt;
          do
            te = bt(te, wt.lane), wt = wt.next;
          while (wt !== mt);
        } else c === null && (l.shared.lanes = ve);
        Dv(te), e.lanes = te, e.memoizedState = q;
      }
      Fm = null;
    }
    function cD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function kC() {
      Um = !1;
    }
    function Im() {
      return Um;
    }
    function DC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l], v = c.callback;
          v !== null && (c.callback = null, cD(v, a));
        }
    }
    var rv = {}, ns = qu(rv), av = qu(rv), Bm = qu(rv);
    function $m(e) {
      if (e === rv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OC() {
      var e = $m(Bm.current);
      return e;
    }
    function US(e, t) {
      ha(Bm, t, e), ha(av, e, e), ha(ns, rv, e);
      var a = __(t);
      va(ns, e), ha(ns, a, e);
    }
    function nd(e) {
      va(ns, e), va(av, e), va(Bm, e);
    }
    function FS() {
      var e = $m(ns.current);
      return e;
    }
    function NC(e) {
      $m(Bm.current);
      var t = $m(ns.current), a = k_(t, e.type);
      t !== a && (ha(av, e, e), ha(ns, a, e));
    }
    function HS(e) {
      av.current === e && (va(ns, e), va(av, e));
    }
    var fD = 0, MC = 1, AC = 1, iv = 2, fo = qu(fD);
    function VS(e, t) {
      return (e & t) !== 0;
    }
    function rd(e) {
      return e & MC;
    }
    function IS(e, t) {
      return e & MC | t;
    }
    function dD(e, t) {
      return e | t;
    }
    function rs(e, t) {
      ha(fo, t, e);
    }
    function ad(e) {
      va(fo, e);
    }
    function pD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Wm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || XE(i) || oS(i))
              return t;
          }
        } else if (t.tag === De && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & gt) !== at;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ri = (
      /*   */
      0
    ), yr = (
      /* */
      1
    ), Zo = (
      /*  */
      2
    ), gr = (
      /*    */
      4
    ), Wr = (
      /*   */
      8
    ), BS = [];
    function $S() {
      for (var e = 0; e < BS.length; e++) {
        var t = BS[e];
        t._workInProgressVersionPrimary = null;
      }
      BS.length = 0;
    }
    function vD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ue = d.ReactCurrentDispatcher, ov = d.ReactCurrentBatchConfig, WS, id;
    WS = /* @__PURE__ */ new Set();
    var yc = ve, ln = null, Sr = null, xr = null, Ym = !1, lv = !1, uv = 0, hD = 0, mD = 25, fe = null, Fi = null, as = -1, YS = !1;
    function nn() {
      {
        var e = fe;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function Ne() {
      {
        var e = fe;
        Fi !== null && (as++, Fi[as] !== e && yD(e));
      }
    }
    function od(e) {
      e != null && !Ut(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", fe, typeof e);
    }
    function yD(e) {
      {
        var t = xt(ln);
        if (!WS.has(t) && (WS.add(t), Fi !== null)) {
          for (var a = "", i = 30, l = 0; l <= as; l++) {
            for (var c = Fi[l], v = l === as ? e : c, y = l + 1 + ". " + c; y.length < i; )
              y += " ";
            y += v + `
`, a += y;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ma() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function QS(e, t) {
      if (YS)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", fe), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, fe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!$e(e[a], t[a]))
          return !1;
      return !0;
    }
    function ld(e, t, a, i, l, c) {
      yc = c, ln = t, Fi = e !== null ? e._debugHookTypes : null, as = -1, YS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ve, e !== null && e.memoizedState !== null ? Ue.current = tw : Fi !== null ? Ue.current = ew : Ue.current = JC;
      var v = a(i, l);
      if (lv) {
        var y = 0;
        do {
          if (lv = !1, uv = 0, y >= mD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, YS = !1, Sr = null, xr = null, t.updateQueue = null, as = -1, Ue.current = nw, v = a(i, l);
        } while (lv);
      }
      Ue.current = iy, t._debugHookTypes = Fi;
      var S = Sr !== null && Sr.next !== null;
      if (yc = ve, ln = null, Sr = null, xr = null, fe = null, Fi = null, as = -1, e !== null && (e.flags & vr) !== (t.flags & vr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & qe) !== Ge && m("Internal React error: Expected static flag was missing. Please notify the React team."), Ym = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function ud() {
      var e = uv !== 0;
      return uv = 0, e;
    }
    function LC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ka) !== Ge ? t.flags &= ~(xl | oa | wn | Tt) : t.flags &= ~(wn | Tt), e.lanes = Gs(e.lanes, a);
    }
    function PC() {
      if (Ue.current = iy, Ym) {
        for (var e = ln.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ym = !1;
      }
      yc = ve, ln = null, Sr = null, xr = null, Fi = null, as = -1, fe = null, GC = !1, lv = !1, uv = 0;
    }
    function Jo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return xr === null ? ln.memoizedState = xr = e : xr = xr.next = e, xr;
    }
    function Hi() {
      var e;
      if (Sr === null) {
        var t = ln.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Sr.next;
      var a;
      if (xr === null ? a = ln.memoizedState : a = xr.next, a !== null)
        xr = a, a = xr.next, Sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Sr = e;
        var i = {
          memoizedState: Sr.memoizedState,
          baseState: Sr.baseState,
          baseQueue: Sr.baseQueue,
          queue: Sr.queue,
          next: null
        };
        xr === null ? ln.memoizedState = xr = i : xr = xr.next = i;
      }
      return xr;
    }
    function jC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function GS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function KS(e, t, a) {
      var i = Jo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var c = {
        pending: null,
        interleaved: null,
        lanes: ve,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = c;
      var v = c.dispatch = ED.bind(null, ln, c);
      return [i.memoizedState, v];
    }
    function XS(e, t, a) {
      var i = Hi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = Sr, v = c.baseQueue, y = l.pending;
      if (y !== null) {
        if (v !== null) {
          var S = v.next, b = y.next;
          v.next = b, y.next = S;
        }
        c.baseQueue !== v && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = y, l.pending = null;
      }
      if (v !== null) {
        var _ = v.next, I = c.baseState, U = null, q = null, te = null, ie = _;
        do {
          var Pe = ie.lane;
          if (Dl(yc, Pe)) {
            if (te !== null) {
              var Ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Gn,
                action: ie.action,
                hasEagerState: ie.hasEagerState,
                eagerState: ie.eagerState,
                next: null
              };
              te = te.next = Ze;
            }
            if (ie.hasEagerState)
              I = ie.eagerState;
            else {
              var Vt = ie.action;
              I = e(I, Vt);
            }
          } else {
            var it = {
              lane: Pe,
              action: ie.action,
              hasEagerState: ie.hasEagerState,
              eagerState: ie.eagerState,
              next: null
            };
            te === null ? (q = te = it, U = I) : te = te.next = it, ln.lanes = bt(ln.lanes, Pe), Dv(Pe);
          }
          ie = ie.next;
        } while (ie !== null && ie !== _);
        te === null ? U = I : te.next = q, $e(I, i.memoizedState) || yv(), i.memoizedState = I, i.baseState = U, i.baseQueue = te, l.lastRenderedState = I;
      }
      var Pt = l.interleaved;
      if (Pt !== null) {
        var Y = Pt;
        do {
          var oe = Y.lane;
          ln.lanes = bt(ln.lanes, oe), Dv(oe), Y = Y.next;
        } while (Y !== Pt);
      } else v === null && (l.lanes = ve);
      var Q = l.dispatch;
      return [i.memoizedState, Q];
    }
    function qS(e, t, a) {
      var i = Hi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = l.dispatch, v = l.pending, y = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var S = v.next, b = S;
        do {
          var _ = b.action;
          y = e(y, _), b = b.next;
        } while (b !== S);
        $e(y, i.memoizedState) || yv(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, c];
    }
    function LP(e, t, a) {
    }
    function PP(e, t, a) {
    }
    function ZS(e, t, a) {
      var i = ln, l = Jo(), c, v = $r();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), id || c !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), id = !0);
      } else {
        if (c = t(), !id) {
          var y = t();
          $e(c, y) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), id = !0);
        }
        var S = by();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Qs(S, yc) || zC(i, t, c);
      }
      l.memoizedState = c;
      var b = {
        value: c,
        getSnapshot: t
      };
      return l.queue = b, qm(FC.bind(null, i, b, e), [e]), i.flags |= wn, sv(yr | Wr, UC.bind(null, i, b, c, t), void 0, null), c;
    }
    function Qm(e, t, a) {
      var i = ln, l = Hi(), c = t();
      if (!id) {
        var v = t();
        $e(c, v) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), id = !0);
      }
      var y = l.memoizedState, S = !$e(y, c);
      S && (l.memoizedState = c, yv());
      var b = l.queue;
      if (fv(FC.bind(null, i, b, e), [e]), b.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      xr !== null && xr.memoizedState.tag & yr) {
        i.flags |= wn, sv(yr | Wr, UC.bind(null, i, b, c, t), void 0, null);
        var _ = by();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Qs(_, yc) || zC(i, t, c);
      }
      return c;
    }
    function zC(e, t, a) {
      e.flags |= zs;
      var i = {
        getSnapshot: t,
        value: a
      }, l = ln.updateQueue;
      if (l === null)
        l = jC(), ln.updateQueue = l, l.stores = [i];
      else {
        var c = l.stores;
        c === null ? l.stores = [i] : c.push(i);
      }
    }
    function UC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, HC(t) && VC(e);
    }
    function FC(e, t, a) {
      var i = function() {
        HC(t) && VC(e);
      };
      return a(i);
    }
    function HC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !$e(a, i);
      } catch {
        return !0;
      }
    }
    function VC(e) {
      var t = ni(e, rt);
      t !== null && br(t, e, rt, mn);
    }
    function Gm(e) {
      var t = Jo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ve,
        dispatch: null,
        lastRenderedReducer: GS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = CD.bind(null, ln, a);
      return [t.memoizedState, i];
    }
    function JS(e) {
      return XS(GS);
    }
    function e0(e) {
      return qS(GS);
    }
    function sv(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = ln.updateQueue;
      if (c === null)
        c = jC(), ln.updateQueue = c, c.lastEffect = l.next = l;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = l.next = l;
        else {
          var y = v.next;
          v.next = l, l.next = y, c.lastEffect = l;
        }
      }
      return l;
    }
    function t0(e) {
      var t = Jo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Km(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function cv(e, t, a, i) {
      var l = Jo(), c = i === void 0 ? null : i;
      ln.flags |= e, l.memoizedState = sv(yr | t, a, void 0, c);
    }
    function Xm(e, t, a, i) {
      var l = Hi(), c = i === void 0 ? null : i, v = void 0;
      if (Sr !== null) {
        var y = Sr.memoizedState;
        if (v = y.destroy, c !== null) {
          var S = y.deps;
          if (QS(c, S)) {
            l.memoizedState = sv(t, a, v, c);
            return;
          }
        }
      }
      ln.flags |= e, l.memoizedState = sv(yr | t, a, v, c);
    }
    function qm(e, t) {
      return (ln.mode & ka) !== Ge ? cv(xl | wn | Ho, Wr, e, t) : cv(wn | Ho, Wr, e, t);
    }
    function fv(e, t) {
      return Xm(wn, Wr, e, t);
    }
    function n0(e, t) {
      return cv(Tt, Zo, e, t);
    }
    function Zm(e, t) {
      return Xm(Tt, Zo, e, t);
    }
    function r0(e, t) {
      var a = Tt;
      return a |= ia, (ln.mode & ka) !== Ge && (a |= oa), cv(a, gr, e, t);
    }
    function Jm(e, t) {
      return Xm(Tt, gr, e, t);
    }
    function IC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var c = e();
        return l.current = c, function() {
          l.current = null;
        };
      }
    }
    function a0(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Tt;
      return l |= ia, (ln.mode & ka) !== Ge && (l |= oa), cv(l, gr, IC.bind(null, t, e), i);
    }
    function ey(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Xm(Tt, gr, IC.bind(null, t, e), i);
    }
    function gD(e, t) {
    }
    var ty = gD;
    function i0(e, t) {
      var a = Jo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function ny(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (QS(i, c))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function o0(e, t) {
      var a = Jo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function ry(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (QS(i, c))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function l0(e) {
      var t = Jo();
      return t.memoizedState = e, e;
    }
    function BC(e) {
      var t = Hi(), a = Sr, i = a.memoizedState;
      return WC(t, i, e);
    }
    function $C(e) {
      var t = Hi();
      if (Sr === null)
        return t.memoizedState = e, e;
      var a = Sr.memoizedState;
      return WC(t, a, e);
    }
    function WC(e, t, a) {
      var i = !Ah(yc);
      if (i) {
        if (!$e(a, t)) {
          var l = jh();
          ln.lanes = bt(ln.lanes, l), Dv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, yv()), e.memoizedState = a, a;
    }
    function SD(e, t, a) {
      var i = Xa();
      Pn(_g(i, ao)), e(!0);
      var l = ov.transition;
      ov.transition = {};
      var c = ov.transition;
      ov.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(i), ov.transition = l, l === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function u0() {
      var e = Gm(!1), t = e[0], a = e[1], i = SD.bind(null, a), l = Jo();
      return l.memoizedState = i, [t, i];
    }
    function YC() {
      var e = JS(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function QC() {
      var e = e0(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var GC = !1;
    function xD() {
      return GC;
    }
    function s0() {
      var e = Jo(), t = by(), a = t.identifierPrefix, i;
      if ($r()) {
        var l = zk();
        i = ":" + a + "R" + l;
        var c = uv++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var v = hD++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ay() {
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function ED(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ss(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KC(e))
        XC(t, l);
      else {
        var c = bC(e, t, l, i);
        if (c !== null) {
          var v = Ma();
          br(c, e, i, v), qC(c, t, i);
        }
      }
      ZC(e, i);
    }
    function CD(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ss(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KC(e))
        XC(t, l);
      else {
        var c = e.alternate;
        if (e.lanes === ve && (c === null || c.lanes === ve)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = Ue.current, Ue.current = po;
            try {
              var S = t.lastRenderedState, b = v(S, a);
              if (l.hasEagerState = !0, l.eagerState = b, $e(b, S)) {
                oD(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Ue.current = y;
            }
          }
        }
        var _ = bC(e, t, l, i);
        if (_ !== null) {
          var I = Ma();
          br(_, e, i, I), qC(_, t, i);
        }
      }
      ZC(e, i);
    }
    function KC(e) {
      var t = e.alternate;
      return e === ln || t !== null && t === ln;
    }
    function XC(e, t) {
      lv = Ym = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function qC(e, t, a) {
      if (yp(a)) {
        var i = t.lanes;
        i = gf(i, e.pendingLanes);
        var l = bt(i, a);
        t.lanes = l, gp(e, l);
      }
    }
    function ZC(e, t, a) {
      Vs(e, t);
    }
    var iy = {
      readContext: fr,
      useCallback: ma,
      useContext: ma,
      useEffect: ma,
      useImperativeHandle: ma,
      useInsertionEffect: ma,
      useLayoutEffect: ma,
      useMemo: ma,
      useReducer: ma,
      useRef: ma,
      useState: ma,
      useDebugValue: ma,
      useDeferredValue: ma,
      useTransition: ma,
      useMutableSource: ma,
      useSyncExternalStore: ma,
      useId: ma,
      unstable_isNewReconciler: le
    }, JC = null, ew = null, tw = null, nw = null, el = null, po = null, oy = null;
    {
      var c0 = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Et = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JC = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", nn(), od(t), i0(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", nn(), fr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", nn(), od(t), qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", nn(), od(a), a0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", nn(), od(t), n0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", nn(), od(t), r0(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", nn(), od(t);
          var a = Ue.current;
          Ue.current = el;
          try {
            return o0(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", nn();
          var i = Ue.current;
          Ue.current = el;
          try {
            return KS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", nn(), t0(e);
        },
        useState: function(e) {
          fe = "useState", nn();
          var t = Ue.current;
          Ue.current = el;
          try {
            return Gm(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", nn(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", nn(), l0(e);
        },
        useTransition: function() {
          return fe = "useTransition", nn(), u0();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", nn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", nn(), ZS(e, t, a);
        },
        useId: function() {
          return fe = "useId", nn(), s0();
        },
        unstable_isNewReconciler: le
      }, ew = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Ne(), i0(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Ne(), fr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Ne(), qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Ne(), a0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Ne(), n0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Ne(), r0(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Ne();
          var a = Ue.current;
          Ue.current = el;
          try {
            return o0(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Ne();
          var i = Ue.current;
          Ue.current = el;
          try {
            return KS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Ne(), t0(e);
        },
        useState: function(e) {
          fe = "useState", Ne();
          var t = Ue.current;
          Ue.current = el;
          try {
            return Gm(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Ne(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Ne(), l0(e);
        },
        useTransition: function() {
          return fe = "useTransition", Ne(), u0();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Ne(), ZS(e, t, a);
        },
        useId: function() {
          return fe = "useId", Ne(), s0();
        },
        unstable_isNewReconciler: le
      }, tw = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Ne(), ny(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Ne(), fr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Ne(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Ne(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Ne(), Zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Ne(), Jm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Ne();
          var a = Ue.current;
          Ue.current = po;
          try {
            return ry(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Ne();
          var i = Ue.current;
          Ue.current = po;
          try {
            return XS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Ne(), Km();
        },
        useState: function(e) {
          fe = "useState", Ne();
          var t = Ue.current;
          Ue.current = po;
          try {
            return JS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Ne(), ty();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Ne(), BC(e);
        },
        useTransition: function() {
          return fe = "useTransition", Ne(), YC();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Ne(), Qm(e, t);
        },
        useId: function() {
          return fe = "useId", Ne(), ay();
        },
        unstable_isNewReconciler: le
      }, nw = {
        readContext: function(e) {
          return fr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Ne(), ny(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Ne(), fr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Ne(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Ne(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Ne(), Zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Ne(), Jm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Ne();
          var a = Ue.current;
          Ue.current = oy;
          try {
            return ry(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Ne();
          var i = Ue.current;
          Ue.current = oy;
          try {
            return qS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Ne(), Km();
        },
        useState: function(e) {
          fe = "useState", Ne();
          var t = Ue.current;
          Ue.current = oy;
          try {
            return e0(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Ne(), ty();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Ne(), $C(e);
        },
        useTransition: function() {
          return fe = "useTransition", Ne(), QC();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Ne(), Qm(e, t);
        },
        useId: function() {
          return fe = "useId", Ne(), ay();
        },
        unstable_isNewReconciler: le
      }, el = {
        readContext: function(e) {
          return c0(), fr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Et(), nn(), i0(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Et(), nn(), fr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Et(), nn(), qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Et(), nn(), a0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Et(), nn(), n0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Et(), nn(), r0(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Et(), nn();
          var a = Ue.current;
          Ue.current = el;
          try {
            return o0(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Et(), nn();
          var i = Ue.current;
          Ue.current = el;
          try {
            return KS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Et(), nn(), t0(e);
        },
        useState: function(e) {
          fe = "useState", Et(), nn();
          var t = Ue.current;
          Ue.current = el;
          try {
            return Gm(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Et(), nn(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Et(), nn(), l0(e);
        },
        useTransition: function() {
          return fe = "useTransition", Et(), nn(), u0();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Et(), nn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Et(), nn(), ZS(e, t, a);
        },
        useId: function() {
          return fe = "useId", Et(), nn(), s0();
        },
        unstable_isNewReconciler: le
      }, po = {
        readContext: function(e) {
          return c0(), fr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Et(), Ne(), ny(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Et(), Ne(), fr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Et(), Ne(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Et(), Ne(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Et(), Ne(), Zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Et(), Ne(), Jm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Et(), Ne();
          var a = Ue.current;
          Ue.current = po;
          try {
            return ry(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Et(), Ne();
          var i = Ue.current;
          Ue.current = po;
          try {
            return XS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Et(), Ne(), Km();
        },
        useState: function(e) {
          fe = "useState", Et(), Ne();
          var t = Ue.current;
          Ue.current = po;
          try {
            return JS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Et(), Ne(), ty();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Et(), Ne(), BC(e);
        },
        useTransition: function() {
          return fe = "useTransition", Et(), Ne(), YC();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Et(), Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Et(), Ne(), Qm(e, t);
        },
        useId: function() {
          return fe = "useId", Et(), Ne(), ay();
        },
        unstable_isNewReconciler: le
      }, oy = {
        readContext: function(e) {
          return c0(), fr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Et(), Ne(), ny(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Et(), Ne(), fr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Et(), Ne(), fv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Et(), Ne(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Et(), Ne(), Zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Et(), Ne(), Jm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Et(), Ne();
          var a = Ue.current;
          Ue.current = po;
          try {
            return ry(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Et(), Ne();
          var i = Ue.current;
          Ue.current = po;
          try {
            return qS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Et(), Ne(), Km();
        },
        useState: function(e) {
          fe = "useState", Et(), Ne();
          var t = Ue.current;
          Ue.current = po;
          try {
            return e0(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Et(), Ne(), ty();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Et(), Ne(), $C(e);
        },
        useTransition: function() {
          return fe = "useTransition", Et(), Ne(), QC();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Et(), Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Et(), Ne(), Qm(e, t);
        },
        useId: function() {
          return fe = "useId", Et(), Ne(), ay();
        },
        unstable_isNewReconciler: le
      };
    }
    var is = f.unstable_now, rw = 0, ly = -1, dv = -1, uy = -1, f0 = !1, sy = !1;
    function aw() {
      return f0;
    }
    function wD() {
      sy = !0;
    }
    function bD() {
      f0 = !1, sy = !1;
    }
    function RD() {
      f0 = sy, sy = !1;
    }
    function iw() {
      return rw;
    }
    function ow() {
      rw = is();
    }
    function d0(e) {
      dv = is(), e.actualStartTime < 0 && (e.actualStartTime = is());
    }
    function lw(e) {
      dv = -1;
    }
    function cy(e, t) {
      if (dv >= 0) {
        var a = is() - dv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), dv = -1;
      }
    }
    function tl(e) {
      if (ly >= 0) {
        var t = is() - ly;
        ly = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ce:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function p0(e) {
      if (uy >= 0) {
        var t = is() - uy;
        uy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ce:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function nl() {
      ly = is();
    }
    function v0() {
      uy = is();
    }
    function h0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vo(e, t) {
      if (e && e.defaultProps) {
        var a = Dt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var m0 = {}, y0, g0, S0, x0, E0, uw, fy, C0, w0, b0, pv;
    {
      y0 = /* @__PURE__ */ new Set(), g0 = /* @__PURE__ */ new Set(), S0 = /* @__PURE__ */ new Set(), x0 = /* @__PURE__ */ new Set(), C0 = /* @__PURE__ */ new Set(), E0 = /* @__PURE__ */ new Set(), w0 = /* @__PURE__ */ new Set(), b0 = /* @__PURE__ */ new Set(), pv = /* @__PURE__ */ new Set();
      var sw = /* @__PURE__ */ new Set();
      fy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          sw.has(a) || (sw.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, uw = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          E0.has(a) || (E0.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(m0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(m0);
    }
    function R0(e, t, a, i) {
      var l = e.memoizedState, c = a(i, l);
      {
        if (e.mode & Nt) {
          Qn(!0);
          try {
            c = a(i, l);
          } finally {
            Qn(!1);
          }
        }
        uw(t, c);
      }
      var v = c == null ? l : Dt({}, l, c);
      if (e.memoizedState = v, e.lanes === ve) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var T0 = {
      isMounted: Ta,
      enqueueSetState: function(e, t, a) {
        var i = Ia(e), l = Ma(), c = ss(i), v = Il(l, c);
        v.payload = t, a != null && (fy(a, "setState"), v.callback = a);
        var y = ts(i, v, c);
        y !== null && (br(y, i, c, l), Hm(y, i, c)), Vs(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ia(e), l = Ma(), c = ss(i), v = Il(l, c);
        v.tag = TC, v.payload = t, a != null && (fy(a, "replaceState"), v.callback = a);
        var y = ts(i, v, c);
        y !== null && (br(y, i, c, l), Hm(y, i, c)), Vs(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ia(e), i = Ma(), l = ss(a), c = Il(i, l);
        c.tag = zm, t != null && (fy(t, "forceUpdate"), c.callback = t);
        var v = ts(a, c, l);
        v !== null && (br(v, a, l, i), Hm(v, a, l)), ef(a, l);
      }
    };
    function cw(e, t, a, i, l, c, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var S = y.shouldComponentUpdate(i, c, v);
        {
          if (e.mode & Nt) {
            Qn(!0);
            try {
              S = y.shouldComponentUpdate(i, c, v);
            } finally {
              Qn(!1);
            }
          }
          S === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !pt(a, i) || !pt(l, c) : !0;
    }
    function TD(e, t, a) {
      var i = e.stateNode;
      {
        var l = zt(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !pv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Nt) === Ge && (pv.add(t), m(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !pv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Nt) === Ge && (pv.add(t), m(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !w0.has(t) && (w0.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !S0.has(t) && (S0.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || Ut(y)) && m("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function fw(e, t) {
      t.updater = T0, e.stateNode = t, gu(t, e), t._reactInternalInstance = m0;
    }
    function dw(e, t, a) {
      var i = !1, l = yi, c = yi, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === me && v._context === void 0
        );
        if (!y && !b0.has(t)) {
          b0.add(t);
          var S = "";
          v === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? S = " However, it is set to a " + typeof v + "." : v.$$typeof === L ? S = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", S);
        }
      }
      if (typeof v == "object" && v !== null)
        c = fr(v);
      else {
        l = Gf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, c = i ? Kf(e, l) : yi;
      }
      var _ = new t(a, c);
      if (e.mode & Nt) {
        Qn(!0);
        try {
          _ = new t(a, c);
        } finally {
          Qn(!1);
        }
      }
      var I = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      fw(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && I === null) {
          var U = zt(t) || "Component";
          g0.has(U) || (g0.add(U), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, _.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var q = null, te = null, ie = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? te = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (te = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), q !== null || te !== null || ie !== null) {
            var Pe = zt(t) || "Component", it = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            x0.has(Pe) || (x0.add(Pe), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Pe, it, q !== null ? `
  ` + q : "", te !== null ? `
  ` + te : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return i && tC(e, l, c), _;
    }
    function _D(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", xt(e) || "Component"), T0.enqueueReplaceState(t, t.state, null));
    }
    function pw(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var c = xt(e) || "Component";
          y0.has(c) || (y0.add(c), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        T0.enqueueReplaceState(t, t.state, null);
      }
    }
    function _0(e, t, a, i) {
      TD(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, jS(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        l.context = fr(c);
      else {
        var v = Gf(e, t, !0);
        l.context = Kf(e, v);
      }
      {
        if (l.state === a) {
          var y = zt(t) || "Component";
          C0.has(y) || (C0.add(y), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & Nt && co.recordLegacyContextWarning(e, l), co.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (R0(e, t, S, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (_D(e, l), Vm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = Tt;
        b |= ia, (e.mode & ka) !== Ge && (b |= oa), e.flags |= b;
      }
    }
    function kD(e, t, a, i) {
      var l = e.stateNode, c = e.memoizedProps;
      l.props = c;
      var v = l.context, y = t.contextType, S = yi;
      if (typeof y == "object" && y !== null)
        S = fr(y);
      else {
        var b = Gf(e, t, !0);
        S = Kf(e, b);
      }
      var _ = t.getDerivedStateFromProps, I = typeof _ == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !I && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (c !== a || v !== S) && pw(e, l, a, S), kC();
      var U = e.memoizedState, q = l.state = U;
      if (Vm(e, a, l, i), q = e.memoizedState, c === a && U === q && !Cm() && !Im()) {
        if (typeof l.componentDidMount == "function") {
          var te = Tt;
          te |= ia, (e.mode & ka) !== Ge && (te |= oa), e.flags |= te;
        }
        return !1;
      }
      typeof _ == "function" && (R0(e, t, _, a), q = e.memoizedState);
      var ie = Im() || cw(e, t, c, a, U, q, S);
      if (ie) {
        if (!I && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Pe = Tt;
          Pe |= ia, (e.mode & ka) !== Ge && (Pe |= oa), e.flags |= Pe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var it = Tt;
          it |= ia, (e.mode & ka) !== Ge && (it |= oa), e.flags |= it;
        }
        e.memoizedProps = a, e.memoizedState = q;
      }
      return l.props = a, l.state = q, l.context = S, ie;
    }
    function DD(e, t, a, i, l) {
      var c = t.stateNode;
      _C(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : vo(t.type, v);
      c.props = y;
      var S = t.pendingProps, b = c.context, _ = a.contextType, I = yi;
      if (typeof _ == "object" && _ !== null)
        I = fr(_);
      else {
        var U = Gf(t, a, !0);
        I = Kf(t, U);
      }
      var q = a.getDerivedStateFromProps, te = typeof q == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !te && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== S || b !== I) && pw(t, c, i, I), kC();
      var ie = t.memoizedState, Pe = c.state = ie;
      if (Vm(t, i, c, l), Pe = t.memoizedState, v === S && ie === Pe && !Cm() && !Im() && !ge)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Tt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Ba), !1;
      typeof q == "function" && (R0(t, a, q, i), Pe = t.memoizedState);
      var it = Im() || cw(t, a, y, i, ie, Pe, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ge;
      return it ? (!te && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, Pe, I), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, Pe, I)), typeof c.componentDidUpdate == "function" && (t.flags |= Tt), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Ba)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Tt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Ba), t.memoizedProps = i, t.memoizedState = Pe), c.props = i, c.state = Pe, c.context = I, it;
    }
    function gc(e, t) {
      return {
        value: e,
        source: t,
        stack: iu(t),
        digest: null
      };
    }
    function k0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function OD(e, t) {
      return !0;
    }
    function D0(e, t) {
      try {
        var a = OD(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, c = t.stack, v = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(i);
        }
        var y = l ? xt(l) : null, S = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === A)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = xt(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var I = S + `
` + v + `

` + ("" + b);
        console.error(I);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var ND = typeof WeakMap == "function" ? WeakMap : Map;
    function vw(e, t, a) {
      var i = Il(mn, a);
      i.tag = LS, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        wN(l), D0(e, t);
      }, i;
    }
    function O0(e, t, a) {
      var i = Il(mn, a);
      i.tag = LS;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        i.payload = function() {
          return l(c);
        }, i.callback = function() {
          Rb(e), D0(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        Rb(e), D0(e, t), typeof l != "function" && EN(this);
        var S = t.value, b = t.stack;
        this.componentDidCatch(S, {
          componentStack: b !== null ? b : ""
        }), typeof l != "function" && (da(e.lanes, rt) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", xt(e) || "Unknown"));
      }), i;
    }
    function hw(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new ND(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var c = bN.bind(null, e, t, a);
        _a && Ov(e, a), t.then(c, c);
      }
    }
    function MD(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        l.add(a);
    }
    function AD(e, t) {
      var a = e.tag;
      if ((e.mode & qe) === Ge && (a === T || a === ne || a === pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function mw(e) {
      var t = e;
      do {
        if (t.tag === re && pD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function yw(e, t, a, i, l) {
      if ((e.mode & qe) === Ge) {
        if (e === t)
          e.flags |= lr;
        else {
          if (e.flags |= gt, a.flags |= Us, a.flags &= ~(Ic | ba), a.tag === k) {
            var c = a.alternate;
            if (c === null)
              a.tag = st;
            else {
              var v = Il(mn, rt);
              v.tag = zm, ts(a, v, rt);
            }
          }
          a.lanes = bt(a.lanes, rt);
        }
        return e;
      }
      return e.flags |= lr, e.lanes = l, e;
    }
    function LD(e, t, a, i, l) {
      if (a.flags |= ba, _a && Ov(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        AD(a), $r() && a.mode & qe && uC();
        var v = mw(t);
        if (v !== null) {
          v.flags &= ~Ln, yw(v, t, a, e, l), v.mode & qe && hw(e, c, l), MD(v, e, c);
          return;
        } else {
          if (!mp(l)) {
            hw(e, c, l), sx();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if ($r() && a.mode & qe) {
        uC();
        var S = mw(t);
        if (S !== null) {
          (S.flags & lr) === at && (S.flags |= Ln), yw(S, t, a, e, l), CS(gc(i, a));
          return;
        }
      }
      i = gc(i, a), pN(i);
      var b = t;
      do {
        switch (b.tag) {
          case A: {
            var _ = i;
            b.flags |= lr;
            var I = Mu(l);
            b.lanes = bt(b.lanes, I);
            var U = vw(b, _, I);
            zS(b, U);
            return;
          }
          case k:
            var q = i, te = b.type, ie = b.stateNode;
            if ((b.flags & gt) === at && (typeof te.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !mb(ie))) {
              b.flags |= lr;
              var Pe = Mu(l);
              b.lanes = bt(b.lanes, Pe);
              var it = O0(b, q, Pe);
              zS(b, it);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function PD() {
      return null;
    }
    var vv = d.ReactCurrentOwner, ho = !1, N0, hv, M0, A0, L0, Sc, P0, dy, mv;
    N0 = {}, hv = {}, M0 = {}, A0 = {}, L0 = {}, Sc = !1, P0 = {}, dy = {}, mv = {};
    function Oa(e, t, a, i) {
      e === null ? t.child = xC(t, null, a, i) : t.child = Jf(t, e.child, a, i);
    }
    function jD(e, t, a, i) {
      t.child = Jf(t, e.child, null, i), t.child = Jf(t, null, a, i);
    }
    function gw(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && uo(
          c,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var v = a.render, y = t.ref, S, b;
      td(t, l), Cu(t);
      {
        if (vv.current = t, na(!0), S = ld(e, t, v, i, y, l), b = ud(), t.mode & Nt) {
          Qn(!0);
          try {
            S = ld(e, t, v, i, y, l), b = ud();
          } finally {
            Qn(!1);
          }
        }
        na(!1);
      }
      return sa(), e !== null && !ho ? (LC(e, t, l), Bl(e, t, l)) : ($r() && b && mS(t), t.flags |= Uo, Oa(e, t, S, l), t.child);
    }
    function Sw(e, t, a, i, l) {
      if (e === null) {
        var c = a.type;
        if (VN(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = c;
          return v = md(c), t.tag = pe, t.type = v, U0(t, c), xw(e, t, v, i, l);
        }
        {
          var y = c.propTypes;
          if (y && uo(
            y,
            i,
            // Resolved props
            "prop",
            zt(c)
          ), a.defaultProps !== void 0) {
            var S = zt(c) || "Unknown";
            mv[S] || (m("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", S), mv[S] = !0);
          }
        }
        var b = xx(a.type, null, i, t, t.mode, l);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var _ = a.type, I = _.propTypes;
        I && uo(
          I,
          i,
          // Resolved props
          "prop",
          zt(_)
        );
      }
      var U = e.child, q = $0(e, l);
      if (!q) {
        var te = U.memoizedProps, ie = a.compare;
        if (ie = ie !== null ? ie : pt, ie(te, i) && e.ref === t.ref)
          return Bl(e, t, l);
      }
      t.flags |= Uo;
      var Pe = bc(U, i);
      return Pe.ref = t.ref, Pe.return = t, t.child = Pe, Pe;
    }
    function xw(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === ct) {
          var v = c, y = v._payload, S = v._init;
          try {
            c = S(y);
          } catch {
            c = null;
          }
          var b = c && c.propTypes;
          b && uo(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(c)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (pt(_, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ho = !1, t.pendingProps = i = _, $0(e, l))
            (e.flags & Us) !== at && (ho = !0);
          else return t.lanes = e.lanes, Bl(e, t, l);
      }
      return j0(e, t, a, i, l);
    }
    function Ew(e, t, a) {
      var i = t.pendingProps, l = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || be)
        if ((t.mode & qe) === Ge) {
          var v = {
            baseLanes: ve,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Ry(t, a);
        } else if (da(a, Mr)) {
          var I = {
            baseLanes: ve,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = I;
          var U = c !== null ? c.baseLanes : a;
          Ry(t, U);
        } else {
          var y = null, S;
          if (c !== null) {
            var b = c.baseLanes;
            S = bt(b, a);
          } else
            S = a;
          t.lanes = t.childLanes = Mr;
          var _ = {
            baseLanes: S,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, Ry(t, S), null;
        }
      else {
        var q;
        c !== null ? (q = bt(c.baseLanes, a), t.memoizedState = null) : q = a, Ry(t, q);
      }
      return Oa(e, t, l, a), t.child;
    }
    function zD(e, t, a) {
      var i = t.pendingProps;
      return Oa(e, t, i, a), t.child;
    }
    function UD(e, t, a) {
      var i = t.pendingProps.children;
      return Oa(e, t, i, a), t.child;
    }
    function FD(e, t, a) {
      {
        t.flags |= Tt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, c = l.children;
      return Oa(e, t, c, a), t.child;
    }
    function Cw(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= aa, t.flags |= rp);
    }
    function j0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && uo(
          c,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var v;
      {
        var y = Gf(t, a, !0);
        v = Kf(t, y);
      }
      var S, b;
      td(t, l), Cu(t);
      {
        if (vv.current = t, na(!0), S = ld(e, t, a, i, v, l), b = ud(), t.mode & Nt) {
          Qn(!0);
          try {
            S = ld(e, t, a, i, v, l), b = ud();
          } finally {
            Qn(!1);
          }
        }
        na(!1);
      }
      return sa(), e !== null && !ho ? (LC(e, t, l), Bl(e, t, l)) : ($r() && b && mS(t), t.flags |= Uo, Oa(e, t, S, l), t.child);
    }
    function ww(e, t, a, i, l) {
      {
        switch (nM(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, y = new v(t.memoizedProps, c.context), S = y.state;
            c.updater.enqueueSetState(c, S, null);
            break;
          }
          case !0: {
            t.flags |= gt, t.flags |= lr;
            var b = new Error("Simulated error coming from DevTools"), _ = Mu(l);
            t.lanes = bt(t.lanes, _);
            var I = O0(t, gc(b, t), _);
            zS(t, I);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = a.propTypes;
          U && uo(
            U,
            i,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var q;
      qo(a) ? (q = !0, bm(t)) : q = !1, td(t, l);
      var te = t.stateNode, ie;
      te === null ? (vy(e, t), dw(t, a, i), _0(t, a, i, l), ie = !0) : e === null ? ie = kD(t, a, i, l) : ie = DD(e, t, a, i, l);
      var Pe = z0(e, t, a, ie, q, l);
      {
        var it = t.stateNode;
        ie && it.props !== i && (Sc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", xt(t) || "a component"), Sc = !0);
      }
      return Pe;
    }
    function z0(e, t, a, i, l, c) {
      Cw(e, t);
      var v = (t.flags & gt) !== at;
      if (!i && !v)
        return l && aC(t, a, !1), Bl(e, t, c);
      var y = t.stateNode;
      vv.current = t;
      var S;
      if (v && typeof a.getDerivedStateFromError != "function")
        S = null, lw();
      else {
        Cu(t);
        {
          if (na(!0), S = y.render(), t.mode & Nt) {
            Qn(!0);
            try {
              y.render();
            } finally {
              Qn(!1);
            }
          }
          na(!1);
        }
        sa();
      }
      return t.flags |= Uo, e !== null && v ? jD(e, t, S, c) : Oa(e, t, S, c), t.memoizedState = y.state, l && aC(t, a, !0), t.child;
    }
    function bw(e) {
      var t = e.stateNode;
      t.pendingContext ? nC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nC(e, t.context, !1), US(e, t.containerInfo);
    }
    function HD(e, t, a) {
      if (bw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, c = l.element;
      _C(e, t), Vm(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (l.isDehydrated) {
        var S = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, b = t.updateQueue;
        if (b.baseState = S, t.memoizedState = S, t.flags & Ln) {
          var _ = gc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Rw(e, t, y, a, _);
        } else if (y !== c) {
          var I = gc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Rw(e, t, y, a, I);
        } else {
          Bk(t);
          var U = xC(t, null, y, a);
          t.child = U;
          for (var q = U; q; )
            q.flags = q.flags & ~Sn | $a, q = q.sibling;
        }
      } else {
        if (Zf(), y === c)
          return Bl(e, t, a);
        Oa(e, t, y, a);
      }
      return t.child;
    }
    function Rw(e, t, a, i, l) {
      return Zf(), CS(l), t.flags |= Ln, Oa(e, t, a, i), t.child;
    }
    function VD(e, t, a) {
      NC(t), e === null && ES(t);
      var i = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = l.children, y = nS(i, l);
      return y ? v = null : c !== null && nS(i, c) && (t.flags |= tn), Cw(e, t), Oa(e, t, v, a), t.child;
    }
    function ID(e, t) {
      return e === null && ES(t), null;
    }
    function BD(e, t, a, i) {
      vy(e, t);
      var l = t.pendingProps, c = a, v = c._payload, y = c._init, S = y(v);
      t.type = S;
      var b = t.tag = IN(S), _ = vo(S, l), I;
      switch (b) {
        case T:
          return U0(t, S), t.type = S = md(S), I = j0(null, t, S, _, i), I;
        case k:
          return t.type = S = vx(S), I = ww(null, t, S, _, i), I;
        case ne:
          return t.type = S = hx(S), I = gw(null, t, S, _, i), I;
        case we: {
          if (t.type !== t.elementType) {
            var U = S.propTypes;
            U && uo(
              U,
              _,
              // Resolved for outer only
              "prop",
              zt(S)
            );
          }
          return I = Sw(
            null,
            t,
            S,
            vo(S.type, _),
            // The inner type can have defaults too
            i
          ), I;
        }
      }
      var q = "";
      throw S !== null && typeof S == "object" && S.$$typeof === ct && (q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + q));
    }
    function $D(e, t, a, i, l) {
      vy(e, t), t.tag = k;
      var c;
      return qo(a) ? (c = !0, bm(t)) : c = !1, td(t, l), dw(t, a, i), _0(t, a, i, l), z0(null, t, a, !0, c, l);
    }
    function WD(e, t, a, i) {
      vy(e, t);
      var l = t.pendingProps, c;
      {
        var v = Gf(t, a, !1);
        c = Kf(t, v);
      }
      td(t, i);
      var y, S;
      Cu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = zt(a) || "Unknown";
          N0[b] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), N0[b] = !0);
        }
        t.mode & Nt && co.recordLegacyContextWarning(t, null), na(!0), vv.current = t, y = ld(null, t, a, l, c, i), S = ud(), na(!1);
      }
      if (sa(), t.flags |= Uo, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var _ = zt(a) || "Unknown";
        hv[_] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), hv[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var I = zt(a) || "Unknown";
          hv[I] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), hv[I] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return qo(a) ? (U = !0, bm(t)) : U = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, jS(t), fw(t, y), _0(t, a, l, i), z0(null, t, a, !0, U, i);
      } else {
        if (t.tag = T, t.mode & Nt) {
          Qn(!0);
          try {
            y = ld(null, t, a, l, c, i), S = ud();
          } finally {
            Qn(!1);
          }
        }
        return $r() && S && mS(t), Oa(null, t, y, i), U0(t, a), t.child;
      }
    }
    function U0(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Vr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", c = e._debugSource;
          c && (l = c.fileName + ":" + c.lineNumber), L0[l] || (L0[l] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var v = zt(t) || "Unknown";
          mv[v] || (m("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), mv[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = zt(t) || "Unknown";
          A0[y] || (m("%s: Function components do not support getDerivedStateFromProps.", y), A0[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var S = zt(t) || "Unknown";
          M0[S] || (m("%s: Function components do not support contextType.", S), M0[S] = !0);
        }
      }
    }
    var F0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Gn
    };
    function H0(e) {
      return {
        baseLanes: e,
        cachePool: PD(),
        transitions: null
      };
    }
    function YD(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function QD(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return VS(e, iv);
    }
    function GD(e, t) {
      return Gs(e.childLanes, t);
    }
    function Tw(e, t, a) {
      var i = t.pendingProps;
      rM(t) && (t.flags |= gt);
      var l = fo.current, c = !1, v = (t.flags & gt) !== at;
      if (v || QD(l, e) ? (c = !0, t.flags &= ~gt) : (e === null || e.memoizedState !== null) && (l = dD(l, AC)), l = rd(l), rs(t, l), e === null) {
        ES(t);
        var y = t.memoizedState;
        if (y !== null) {
          var S = y.dehydrated;
          if (S !== null)
            return JD(t, S);
        }
        var b = i.children, _ = i.fallback;
        if (c) {
          var I = KD(t, b, _, a), U = t.child;
          return U.memoizedState = H0(a), t.memoizedState = F0, I;
        } else
          return V0(t, b);
      } else {
        var q = e.memoizedState;
        if (q !== null) {
          var te = q.dehydrated;
          if (te !== null)
            return eO(e, t, v, i, te, q, a);
        }
        if (c) {
          var ie = i.fallback, Pe = i.children, it = qD(e, t, Pe, ie, a), Ze = t.child, Vt = e.child.memoizedState;
          return Ze.memoizedState = Vt === null ? H0(a) : YD(Vt, a), Ze.childLanes = GD(e, a), t.memoizedState = F0, it;
        } else {
          var Pt = i.children, Y = XD(e, t, Pt, a);
          return t.memoizedState = null, Y;
        }
      }
    }
    function V0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, c = I0(l, i);
      return c.return = e, e.child = c, c;
    }
    function KD(e, t, a, i) {
      var l = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, y, S;
      return (l & qe) === Ge && c !== null ? (y = c, y.childLanes = ve, y.pendingProps = v, e.mode & St && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), S = fs(a, l, i, null)) : (y = I0(v, l), S = fs(a, l, i, null)), y.return = e, S.return = e, y.sibling = S, e.child = y, S;
    }
    function I0(e, t, a) {
      return _b(e, t, ve, null);
    }
    function _w(e, t) {
      return bc(e, t);
    }
    function XD(e, t, a, i) {
      var l = e.child, c = l.sibling, v = _w(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & qe) === Ge && (v.lanes = i), v.return = t, v.sibling = null, c !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [c], t.flags |= Xt) : y.push(c);
      }
      return t.child = v, v;
    }
    function qD(e, t, a, i, l) {
      var c = t.mode, v = e.child, y = v.sibling, S = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & qe) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var _ = t.child;
        b = _, b.childLanes = ve, b.pendingProps = S, t.mode & St && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = v.selfBaseDuration, b.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        b = _w(v, S), b.subtreeFlags = v.subtreeFlags & vr;
      var I;
      return y !== null ? I = bc(y, i) : (I = fs(i, c, l, null), I.flags |= Sn), I.return = t, b.return = t, b.sibling = I, t.child = b, I;
    }
    function py(e, t, a, i) {
      i !== null && CS(i), Jf(t, e.child, null, a);
      var l = t.pendingProps, c = l.children, v = V0(t, c);
      return v.flags |= Sn, t.memoizedState = null, v;
    }
    function ZD(e, t, a, i, l) {
      var c = t.mode, v = {
        mode: "visible",
        children: a
      }, y = I0(v, c), S = fs(i, c, l, null);
      return S.flags |= Sn, y.return = t, S.return = t, y.sibling = S, t.child = y, (t.mode & qe) !== Ge && Jf(t, e.child, null, l), S;
    }
    function JD(e, t, a) {
      return (e.mode & qe) === Ge ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = rt) : oS(t) ? e.lanes = ro : e.lanes = Mr, null;
    }
    function eO(e, t, a, i, l, c, v) {
      if (a)
        if (t.flags & Ln) {
          t.flags &= ~Ln;
          var Y = k0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return py(e, t, v, Y);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= gt, null;
          var oe = i.children, Q = i.fallback, xe = ZD(e, t, oe, Q, v), Fe = t.child;
          return Fe.memoizedState = H0(v), t.memoizedState = F0, xe;
        }
      else {
        if (Vk(), (t.mode & qe) === Ge)
          return py(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (oS(l)) {
          var y, S, b;
          {
            var _ = ak(l);
            y = _.digest, S = _.message, b = _.stack;
          }
          var I;
          S ? I = new Error(S) : I = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = k0(I, y, b);
          return py(e, t, v, U);
        }
        var q = da(v, e.childLanes);
        if (ho || q) {
          var te = by();
          if (te !== null) {
            var ie = Fh(te, v);
            if (ie !== Gn && ie !== c.retryLane) {
              c.retryLane = ie;
              var Pe = mn;
              ni(e, ie), br(te, e, ie, Pe);
            }
          }
          sx();
          var it = k0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return py(e, t, v, it);
        } else if (XE(l)) {
          t.flags |= gt, t.child = e.child;
          var Ze = RN.bind(null, e);
          return ik(l, Ze), null;
        } else {
          $k(t, l, c.treeContext);
          var Vt = i.children, Pt = V0(t, Vt);
          return Pt.flags |= $a, Pt;
        }
      }
    }
    function kw(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), MS(e.return, t, a);
    }
    function tO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === re) {
          var l = i.memoizedState;
          l !== null && kw(i, a, e);
        } else if (i.tag === De)
          kw(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function nO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Wm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function rO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !P0[e])
        if (P0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function aO(e, t) {
      e !== void 0 && !dy[e] && (e !== "collapsed" && e !== "hidden" ? (dy[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (dy[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Dw(e, t) {
      {
        var a = Ut(e), i = !a && typeof Ur(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function iO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ut(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Dw(e[a], a))
              return;
        } else {
          var i = Ur(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var c = l.next(), v = 0; !c.done; c = l.next()) {
                if (!Dw(c.value, v))
                  return;
                v++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function B0(e, t, a, i, l) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = a, c.tailMode = l);
    }
    function Ow(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, c = i.tail, v = i.children;
      rO(l), aO(c, l), iO(v, l), Oa(e, t, v, a);
      var y = fo.current, S = VS(y, iv);
      if (S)
        y = IS(y, iv), t.flags |= gt;
      else {
        var b = e !== null && (e.flags & gt) !== at;
        b && tO(t, t.child, a), y = rd(y);
      }
      if (rs(t, y), (t.mode & qe) === Ge)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var _ = nO(t.child), I;
            _ === null ? (I = t.child, t.child = null) : (I = _.sibling, _.sibling = null), B0(
              t,
              !1,
              // isBackwards
              I,
              _,
              c
            );
            break;
          }
          case "backwards": {
            var U = null, q = t.child;
            for (t.child = null; q !== null; ) {
              var te = q.alternate;
              if (te !== null && Wm(te) === null) {
                t.child = q;
                break;
              }
              var ie = q.sibling;
              q.sibling = U, U = q, q = ie;
            }
            B0(
              t,
              !0,
              // isBackwards
              U,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            B0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function oO(e, t, a) {
      US(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Jf(t, null, i, a) : Oa(e, t, i, a), t.child;
    }
    var Nw = !1;
    function lO(e, t, a) {
      var i = t.type, l = i._context, c = t.pendingProps, v = t.memoizedProps, y = c.value;
      {
        "value" in c || Nw || (Nw = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && uo(S, c, "prop", "Context.Provider");
      }
      if (wC(t, l, y), v !== null) {
        var b = v.value;
        if ($e(b, y)) {
          if (v.children === c.children && !Cm())
            return Bl(e, t, a);
        } else
          rD(t, l, a);
      }
      var _ = c.children;
      return Oa(e, t, _, a), t.child;
    }
    var Mw = !1;
    function uO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Mw || (Mw = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, c = l.children;
      typeof c != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), td(t, a);
      var v = fr(i);
      Cu(t);
      var y;
      return vv.current = t, na(!0), y = c(v), na(!1), sa(), t.flags |= Uo, Oa(e, t, y, a), t.child;
    }
    function yv() {
      ho = !0;
    }
    function vy(e, t) {
      (t.mode & qe) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Sn);
    }
    function Bl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), lw(), Dv(t.lanes), da(a, t.childLanes) ? (tD(e, t), t.child) : null;
    }
    function sO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= Xt) : c.push(e), a.flags |= Sn, a;
      }
    }
    function $0(e, t) {
      var a = e.lanes;
      return !!da(a, t);
    }
    function cO(e, t, a) {
      switch (t.tag) {
        case A:
          bw(t), t.stateNode, Zf();
          break;
        case P:
          NC(t);
          break;
        case k: {
          var i = t.type;
          qo(i) && bm(t);
          break;
        }
        case z:
          US(t, t.stateNode.containerInfo);
          break;
        case K: {
          var l = t.memoizedProps.value, c = t.type._context;
          wC(t, c, l);
          break;
        }
        case ce:
          {
            var v = da(a, t.childLanes);
            v && (t.flags |= Tt);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case re: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return rs(t, rd(fo.current)), t.flags |= gt, null;
            var b = t.child, _ = b.childLanes;
            if (da(a, _))
              return Tw(e, t, a);
            rs(t, rd(fo.current));
            var I = Bl(e, t, a);
            return I !== null ? I.sibling : null;
          } else
            rs(t, rd(fo.current));
          break;
        }
        case De: {
          var U = (e.flags & gt) !== at, q = da(a, t.childLanes);
          if (U) {
            if (q)
              return Ow(e, t, a);
            t.flags |= gt;
          }
          var te = t.memoizedState;
          if (te !== null && (te.rendering = null, te.tail = null, te.lastEffect = null), rs(t, fo.current), q)
            break;
          return null;
        }
        case ke:
        case Ae:
          return t.lanes = ve, Ew(e, t, a);
      }
      return Bl(e, t, a);
    }
    function Aw(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return sO(e, t, xx(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Cm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ho = !0;
        else {
          var c = $0(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & gt) === at)
            return ho = !1, cO(e, t, a);
          (e.flags & Us) !== at ? ho = !0 : ho = !1;
        }
      } else if (ho = !1, $r() && Pk(t)) {
        var v = t.index, y = jk();
        lC(t, y, v);
      }
      switch (t.lanes = ve, t.tag) {
        case B:
          return WD(e, t, t.type, a);
        case He: {
          var S = t.elementType;
          return BD(e, t, S, a);
        }
        case T: {
          var b = t.type, _ = t.pendingProps, I = t.elementType === b ? _ : vo(b, _);
          return j0(e, t, b, I, a);
        }
        case k: {
          var U = t.type, q = t.pendingProps, te = t.elementType === U ? q : vo(U, q);
          return ww(e, t, U, te, a);
        }
        case A:
          return HD(e, t, a);
        case P:
          return VD(e, t, a);
        case $:
          return ID(e, t);
        case re:
          return Tw(e, t, a);
        case z:
          return oO(e, t, a);
        case ne: {
          var ie = t.type, Pe = t.pendingProps, it = t.elementType === ie ? Pe : vo(ie, Pe);
          return gw(e, t, ie, it, a);
        }
        case F:
          return zD(e, t, a);
        case G:
          return UD(e, t, a);
        case ce:
          return FD(e, t, a);
        case K:
          return lO(e, t, a);
        case Z:
          return uO(e, t, a);
        case we: {
          var Ze = t.type, Vt = t.pendingProps, Pt = vo(Ze, Vt);
          if (t.type !== t.elementType) {
            var Y = Ze.propTypes;
            Y && uo(
              Y,
              Pt,
              // Resolved for outer only
              "prop",
              zt(Ze)
            );
          }
          return Pt = vo(Ze.type, Pt), Sw(e, t, Ze, Pt, a);
        }
        case pe:
          return xw(e, t, t.type, t.pendingProps, a);
        case st: {
          var oe = t.type, Q = t.pendingProps, xe = t.elementType === oe ? Q : vo(oe, Q);
          return $D(e, t, oe, xe, a);
        }
        case De:
          return Ow(e, t, a);
        case ot:
          break;
        case ke:
          return Ew(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function sd(e) {
      e.flags |= Tt;
    }
    function Lw(e) {
      e.flags |= aa, e.flags |= rp;
    }
    var Pw, W0, jw, zw;
    Pw = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === P || l.tag === $)
          M_(e, l.stateNode);
        else if (l.tag !== z) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, W0 = function(e, t) {
    }, jw = function(e, t, a, i, l) {
      var c = e.memoizedProps;
      if (c !== i) {
        var v = t.stateNode, y = FS(), S = L_(v, a, c, i, l, y);
        t.updateQueue = S, S && sd(t);
      }
    }, zw = function(e, t, a, i) {
      a !== i && sd(t);
    };
    function gv(e, t) {
      if (!$r())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, c = null; l !== null; )
              l.alternate !== null && (c = l), l = l.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ve, i = at;
      if (t) {
        if ((e.mode & St) !== Ge) {
          for (var S = e.selfBaseDuration, b = e.child; b !== null; )
            a = bt(a, bt(b.lanes, b.childLanes)), i |= b.subtreeFlags & vr, i |= b.flags & vr, S += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = S;
        } else
          for (var _ = e.child; _ !== null; )
            a = bt(a, bt(_.lanes, _.childLanes)), i |= _.subtreeFlags & vr, i |= _.flags & vr, _.return = e, _ = _.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & St) !== Ge) {
          for (var l = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            a = bt(a, bt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, l += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = c;
        } else
          for (var y = e.child; y !== null; )
            a = bt(a, bt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function fO(e, t, a) {
      if (Kk() && (t.mode & qe) !== Ge && (t.flags & gt) === at)
        return vC(t), Zf(), t.flags |= Ln | ba | lr, !1;
      var i = Dm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Qk(t), Yr(t), (t.mode & St) !== Ge) {
            var l = a !== null;
            if (l) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Zf(), (t.flags & gt) === at && (t.memoizedState = null), t.flags |= Tt, Yr(t), (t.mode & St) !== Ge) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return hC(), !0;
    }
    function Uw(e, t, a) {
      var i = t.pendingProps;
      switch (yS(t), t.tag) {
        case B:
        case He:
        case pe:
        case T:
        case ne:
        case F:
        case G:
        case ce:
        case Z:
        case we:
          return Yr(t), null;
        case k: {
          var l = t.type;
          return qo(l) && wm(t), Yr(t), null;
        }
        case A: {
          var c = t.stateNode;
          if (nd(t), pS(t), $S(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = Dm(t);
            if (v)
              sd(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ln) !== at) && (t.flags |= Ba, hC());
            }
          }
          return W0(e, t), Yr(t), null;
        }
        case P: {
          HS(t);
          var S = OC(), b = t.type;
          if (e !== null && t.stateNode != null)
            jw(e, t, b, i, S), e.ref !== t.ref && Lw(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var _ = FS(), I = Dm(t);
            if (I)
              Wk(t, S, _) && sd(t);
            else {
              var U = N_(b, i, S, _, t);
              Pw(U, t, !1, !1), t.stateNode = U, A_(U, b, i, S) && sd(t);
            }
            t.ref !== null && Lw(t);
          }
          return Yr(t), null;
        }
        case $: {
          var q = i;
          if (e && t.stateNode != null) {
            var te = e.memoizedProps;
            zw(e, t, te, q);
          } else {
            if (typeof q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = OC(), Pe = FS(), it = Dm(t);
            it ? Yk(t) && sd(t) : t.stateNode = P_(q, ie, Pe, t);
          }
          return Yr(t), null;
        }
        case re: {
          ad(t);
          var Ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Vt = fO(e, t, Ze);
            if (!Vt)
              return t.flags & lr ? t : null;
          }
          if ((t.flags & gt) !== at)
            return t.lanes = a, (t.mode & St) !== Ge && h0(t), t;
          var Pt = Ze !== null, Y = e !== null && e.memoizedState !== null;
          if (Pt !== Y && Pt) {
            var oe = t.child;
            if (oe.flags |= Fo, (t.mode & qe) !== Ge) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !H);
              Q || VS(fo.current, AC) ? dN() : sx();
            }
          }
          var xe = t.updateQueue;
          if (xe !== null && (t.flags |= Tt), Yr(t), (t.mode & St) !== Ge && Pt) {
            var Fe = t.child;
            Fe !== null && (t.treeBaseDuration -= Fe.treeBaseDuration);
          }
          return null;
        }
        case z:
          return nd(t), W0(e, t), e === null && kk(t.stateNode.containerInfo), Yr(t), null;
        case K:
          var je = t.type._context;
          return NS(je, t), Yr(t), null;
        case st: {
          var mt = t.type;
          return qo(mt) && wm(t), Yr(t), null;
        }
        case De: {
          ad(t);
          var wt = t.memoizedState;
          if (wt === null)
            return Yr(t), null;
          var un = (t.flags & gt) !== at, Qt = wt.rendering;
          if (Qt === null)
            if (un)
              gv(wt, !1);
            else {
              var nr = vN() && (e === null || (e.flags & gt) === at);
              if (!nr)
                for (var Gt = t.child; Gt !== null; ) {
                  var Kn = Wm(Gt);
                  if (Kn !== null) {
                    un = !0, t.flags |= gt, gv(wt, !1);
                    var ya = Kn.updateQueue;
                    return ya !== null && (t.updateQueue = ya, t.flags |= Tt), t.subtreeFlags = at, nD(t, a), rs(t, IS(fo.current, iv)), t.child;
                  }
                  Gt = Gt.sibling;
                }
              wt.tail !== null && Dn() > ib() && (t.flags |= gt, un = !0, gv(wt, !1), t.lanes = kh);
            }
          else {
            if (!un) {
              var qr = Wm(Qt);
              if (qr !== null) {
                t.flags |= gt, un = !0;
                var Si = qr.updateQueue;
                if (Si !== null && (t.updateQueue = Si, t.flags |= Tt), gv(wt, !0), wt.tail === null && wt.tailMode === "hidden" && !Qt.alternate && !$r())
                  return Yr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Dn() * 2 - wt.renderingStartTime > ib() && a !== Mr && (t.flags |= gt, un = !0, gv(wt, !1), t.lanes = kh);
            }
            if (wt.isBackwards)
              Qt.sibling = t.child, t.child = Qt;
            else {
              var Aa = wt.last;
              Aa !== null ? Aa.sibling = Qt : t.child = Qt, wt.last = Qt;
            }
          }
          if (wt.tail !== null) {
            var La = wt.tail;
            wt.rendering = La, wt.tail = La.sibling, wt.renderingStartTime = Dn(), La.sibling = null;
            var ga = fo.current;
            return un ? ga = IS(ga, iv) : ga = rd(ga), rs(t, ga), La;
          }
          return Yr(t), null;
        }
        case ot:
          break;
        case ke:
        case Ae: {
          ux(t);
          var Gl = t.memoizedState, yd = Gl !== null;
          if (e !== null) {
            var Lv = e.memoizedState, il = Lv !== null;
            il !== yd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !be && (t.flags |= Fo);
          }
          return !yd || (t.mode & qe) === Ge ? Yr(t) : da(al, Mr) && (Yr(t), t.subtreeFlags & (Sn | Tt) && (t.flags |= Fo)), null;
        }
        case de:
          return null;
        case Le:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function dO(e, t, a) {
      switch (yS(t), t.tag) {
        case k: {
          var i = t.type;
          qo(i) && wm(t);
          var l = t.flags;
          return l & lr ? (t.flags = l & ~lr | gt, (t.mode & St) !== Ge && h0(t), t) : null;
        }
        case A: {
          t.stateNode, nd(t), pS(t), $S();
          var c = t.flags;
          return (c & lr) !== at && (c & gt) === at ? (t.flags = c & ~lr | gt, t) : null;
        }
        case P:
          return HS(t), null;
        case re: {
          ad(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Zf();
          }
          var y = t.flags;
          return y & lr ? (t.flags = y & ~lr | gt, (t.mode & St) !== Ge && h0(t), t) : null;
        }
        case De:
          return ad(t), null;
        case z:
          return nd(t), null;
        case K:
          var S = t.type._context;
          return NS(S, t), null;
        case ke:
        case Ae:
          return ux(t), null;
        case de:
          return null;
        default:
          return null;
      }
    }
    function Fw(e, t, a) {
      switch (yS(t), t.tag) {
        case k: {
          var i = t.type.childContextTypes;
          i != null && wm(t);
          break;
        }
        case A: {
          t.stateNode, nd(t), pS(t), $S();
          break;
        }
        case P: {
          HS(t);
          break;
        }
        case z:
          nd(t);
          break;
        case re:
          ad(t);
          break;
        case De:
          ad(t);
          break;
        case K:
          var l = t.type._context;
          NS(l, t);
          break;
        case ke:
        case Ae:
          ux(t);
          break;
      }
    }
    var Hw = null;
    Hw = /* @__PURE__ */ new Set();
    var hy = !1, Qr = !1, pO = typeof WeakSet == "function" ? WeakSet : Set, We = null, cd = null, fd = null;
    function vO(e) {
      Sl(null, function() {
        throw e;
      }), tp();
    }
    var hO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & St)
        try {
          nl(), t.componentWillUnmount();
        } finally {
          tl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Vw(e, t) {
      try {
        os(gr, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function Y0(e, t, a) {
      try {
        hO(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function mO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function Iw(e, t) {
      try {
        $w(e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function dd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (vt && Te && e.mode & St)
              try {
                nl(), i = a(null);
              } finally {
                tl(e);
              }
            else
              i = a(null);
          } catch (l) {
            Cn(e, t, l);
          }
          typeof i == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", xt(e));
        } else
          a.current = null;
    }
    function my(e, t, a) {
      try {
        a();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    var Bw = !1;
    function yO(e, t) {
      D_(e.containerInfo), We = t, gO();
      var a = Bw;
      return Bw = !1, a;
    }
    function gO() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        (e.subtreeFlags & Su) !== at && t !== null ? (t.return = e, We = t) : SO();
      }
    }
    function SO() {
      for (; We !== null; ) {
        var e = We;
        en(e);
        try {
          xO(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        An();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function xO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ba) !== at) {
        switch (en(e), e.tag) {
          case T:
          case ne:
          case pe:
            break;
          case k: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !Sc && (c.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(e) || "instance"), c.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vo(e.type, i), l);
              {
                var y = Hw;
                v === void 0 && !y.has(e.type) && (y.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", xt(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case A: {
            {
              var S = e.stateNode;
              ek(S.containerInfo);
            }
            break;
          }
          case P:
          case $:
          case z:
          case st:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        An();
      }
    }
    function mo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & Wr) !== ri ? Rh(t) : (e & gr) !== ri && mi(t), (e & Zo) !== ri && Nv(!0), my(t, a, y), (e & Zo) !== ri && Nv(!1), (e & Wr) !== ri ? qc() : (e & gr) !== ri && wu());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function os(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, c = l;
        do {
          if ((c.tag & e) === e) {
            (e & Wr) !== ri ? Io(t) : (e & gr) !== ri && Th(t);
            var v = c.create;
            (e & Zo) !== ri && Nv(!0), c.destroy = v(), (e & Zo) !== ri && Nv(!1), (e & Wr) !== ri ? Xc() : (e & gr) !== ri && Fs();
            {
              var y = c.destroy;
              if (y !== void 0 && typeof y != "function") {
                var S = void 0;
                (c.tag & gr) !== at ? S = "useLayoutEffect" : (c.tag & Zo) !== at ? S = "useInsertionEffect" : S = "useEffect";
                var b = void 0;
                y === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? b = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + y, m("%s must not return anything besides a function, which is used for clean-up.%s", S, b);
              }
            }
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function EO(e, t) {
      if ((t.flags & Tt) !== at)
        switch (t.tag) {
          case ce: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, c = i.onPostCommit, v = iw(), y = t.alternate === null ? "mount" : "update";
            aw() && (y = "nested-update"), typeof c == "function" && c(l, y, a, v);
            var S = t.return;
            e: for (; S !== null; ) {
              switch (S.tag) {
                case A:
                  var b = S.stateNode;
                  b.passiveEffectDuration += a;
                  break e;
                case ce:
                  var _ = S.stateNode;
                  _.passiveEffectDuration += a;
                  break e;
              }
              S = S.return;
            }
            break;
          }
        }
    }
    function CO(e, t, a, i) {
      if ((a.flags & Or) !== at)
        switch (a.tag) {
          case T:
          case ne:
          case pe: {
            if (!Qr)
              if (a.mode & St)
                try {
                  nl(), os(gr | yr, a);
                } finally {
                  tl(a);
                }
              else
                os(gr | yr, a);
            break;
          }
          case k: {
            var l = a.stateNode;
            if (a.flags & Tt && !Qr)
              if (t === null)
                if (a.type === a.elementType && !Sc && (l.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(a) || "instance"), l.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(a) || "instance")), a.mode & St)
                  try {
                    nl(), l.componentDidMount();
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : vo(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Sc && (l.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(a) || "instance"), l.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(a) || "instance")), a.mode & St)
                  try {
                    nl(), l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Sc && (l.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(a) || "instance"), l.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(a) || "instance")), DC(a, y, l));
            break;
          }
          case A: {
            var S = a.updateQueue;
            if (S !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case P:
                    b = a.child.stateNode;
                    break;
                  case k:
                    b = a.child.stateNode;
                    break;
                }
              DC(a, S, b);
            }
            break;
          }
          case P: {
            var _ = a.stateNode;
            if (t === null && a.flags & Tt) {
              var I = a.type, U = a.memoizedProps;
              H_(_, I, U);
            }
            break;
          }
          case $:
            break;
          case z:
            break;
          case ce: {
            {
              var q = a.memoizedProps, te = q.onCommit, ie = q.onRender, Pe = a.stateNode.effectDuration, it = iw(), Ze = t === null ? "mount" : "update";
              aw() && (Ze = "nested-update"), typeof ie == "function" && ie(a.memoizedProps.id, Ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, it);
              {
                typeof te == "function" && te(a.memoizedProps.id, Ze, Pe, it), SN(a);
                var Vt = a.return;
                e: for (; Vt !== null; ) {
                  switch (Vt.tag) {
                    case A:
                      var Pt = Vt.stateNode;
                      Pt.effectDuration += Pe;
                      break e;
                    case ce:
                      var Y = Vt.stateNode;
                      Y.effectDuration += Pe;
                      break e;
                  }
                  Vt = Vt.return;
                }
              }
            }
            break;
          }
          case re: {
            OO(e, a);
            break;
          }
          case De:
          case st:
          case ot:
          case ke:
          case Ae:
          case Le:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Qr || a.flags & aa && $w(a);
    }
    function wO(e) {
      switch (e.tag) {
        case T:
        case ne:
        case pe: {
          if (e.mode & St)
            try {
              nl(), Vw(e, e.return);
            } finally {
              tl(e);
            }
          else
            Vw(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && mO(e, e.return, t), Iw(e, e.return);
          break;
        }
        case P: {
          Iw(e, e.return);
          break;
        }
      }
    }
    function bO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === P) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? X_(l) : Z_(i.stateNode, i.memoizedProps);
            } catch (v) {
              Cn(e, e.return, v);
            }
          }
        } else if (i.tag === $) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? q_(c) : J_(c, i.memoizedProps);
            } catch (v) {
              Cn(e, e.return, v);
            }
        } else if (!((i.tag === ke || i.tag === Ae) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function $w(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case P:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & St)
            try {
              nl(), l = t(i);
            } finally {
              tl(e);
            }
          else
            l = t(i);
          typeof l == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", xt(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", xt(e)), t.current = i;
      }
    }
    function RO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Ww(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ww(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === P) {
          var a = e.stateNode;
          a !== null && Nk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function TO(e) {
      for (var t = e.return; t !== null; ) {
        if (Yw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Yw(e) {
      return e.tag === P || e.tag === A || e.tag === z;
    }
    function Qw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Yw(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== P && t.tag !== $ && t.tag !== Qe; ) {
          if (t.flags & Sn || t.child === null || t.tag === z)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Sn))
          return t.stateNode;
      }
    }
    function _O(e) {
      var t = TO(e);
      switch (t.tag) {
        case P: {
          var a = t.stateNode;
          t.flags & tn && (KE(a), t.flags &= ~tn);
          var i = Qw(e);
          G0(e, i, a);
          break;
        }
        case A:
        case z: {
          var l = t.stateNode.containerInfo, c = Qw(e);
          Q0(e, c, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Q0(e, t, a) {
      var i = e.tag, l = i === P || i === $;
      if (l) {
        var c = e.stateNode;
        t ? Y_(a, c, t) : $_(a, c);
      } else if (i !== z) {
        var v = e.child;
        if (v !== null) {
          Q0(v, t, a);
          for (var y = v.sibling; y !== null; )
            Q0(y, t, a), y = y.sibling;
        }
      }
    }
    function G0(e, t, a) {
      var i = e.tag, l = i === P || i === $;
      if (l) {
        var c = e.stateNode;
        t ? W_(a, c, t) : B_(a, c);
      } else if (i !== z) {
        var v = e.child;
        if (v !== null) {
          G0(v, t, a);
          for (var y = v.sibling; y !== null; )
            G0(y, t, a), y = y.sibling;
        }
      }
    }
    var Gr = null, yo = !1;
    function kO(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case P: {
              Gr = i.stateNode, yo = !1;
              break e;
            }
            case A: {
              Gr = i.stateNode.containerInfo, yo = !0;
              break e;
            }
            case z: {
              Gr = i.stateNode.containerInfo, yo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Gr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Gw(e, t, a), Gr = null, yo = !1;
      }
      RO(a);
    }
    function ls(e, t, a) {
      for (var i = a.child; i !== null; )
        Gw(e, t, i), i = i.sibling;
    }
    function Gw(e, t, a) {
      switch (Cl(a), a.tag) {
        case P:
          Qr || dd(a, t);
        case $: {
          {
            var i = Gr, l = yo;
            Gr = null, ls(e, t, a), Gr = i, yo = l, Gr !== null && (yo ? G_(Gr, a.stateNode) : Q_(Gr, a.stateNode));
          }
          return;
        }
        case Qe: {
          Gr !== null && (yo ? K_(Gr, a.stateNode) : iS(Gr, a.stateNode));
          return;
        }
        case z: {
          {
            var c = Gr, v = yo;
            Gr = a.stateNode.containerInfo, yo = !0, ls(e, t, a), Gr = c, yo = v;
          }
          return;
        }
        case T:
        case ne:
        case we:
        case pe: {
          if (!Qr) {
            var y = a.updateQueue;
            if (y !== null) {
              var S = y.lastEffect;
              if (S !== null) {
                var b = S.next, _ = b;
                do {
                  var I = _, U = I.destroy, q = I.tag;
                  U !== void 0 && ((q & Zo) !== ri ? my(a, t, U) : (q & gr) !== ri && (mi(a), a.mode & St ? (nl(), my(a, t, U), tl(a)) : my(a, t, U), wu())), _ = _.next;
                } while (_ !== b);
              }
            }
          }
          ls(e, t, a);
          return;
        }
        case k: {
          if (!Qr) {
            dd(a, t);
            var te = a.stateNode;
            typeof te.componentWillUnmount == "function" && Y0(a, t, te);
          }
          ls(e, t, a);
          return;
        }
        case ot: {
          ls(e, t, a);
          return;
        }
        case ke: {
          if (
            // TODO: Remove this dead flag
            a.mode & qe
          ) {
            var ie = Qr;
            Qr = ie || a.memoizedState !== null, ls(e, t, a), Qr = ie;
          } else
            ls(e, t, a);
          break;
        }
        default: {
          ls(e, t, a);
          return;
        }
      }
    }
    function DO(e) {
      e.memoizedState;
    }
    function OO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            c !== null && vk(c);
          }
        }
      }
    }
    function Kw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new pO()), t.forEach(function(i) {
          var l = TN.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _a)
              if (cd !== null && fd !== null)
                Ov(fd, cd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function NO(e, t, a) {
      cd = a, fd = e, en(t), Xw(t, e), en(t), cd = null, fd = null;
    }
    function go(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l];
          try {
            kO(e, t, c);
          } catch (S) {
            Cn(c, t, S);
          }
        }
      var v = kc();
      if (t.subtreeFlags & la)
        for (var y = t.child; y !== null; )
          en(y), Xw(y, e), y = y.sibling;
      en(v);
    }
    function Xw(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case T:
        case ne:
        case we:
        case pe: {
          if (go(t, e), rl(e), l & Tt) {
            try {
              mo(Zo | yr, e, e.return), os(Zo | yr, e);
            } catch (mt) {
              Cn(e, e.return, mt);
            }
            if (e.mode & St) {
              try {
                nl(), mo(gr | yr, e, e.return);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
              tl(e);
            } else
              try {
                mo(gr | yr, e, e.return);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
          }
          return;
        }
        case k: {
          go(t, e), rl(e), l & aa && i !== null && dd(i, i.return);
          return;
        }
        case P: {
          go(t, e), rl(e), l & aa && i !== null && dd(i, i.return);
          {
            if (e.flags & tn) {
              var c = e.stateNode;
              try {
                KE(c);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
            }
            if (l & Tt) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, S = i !== null ? i.memoizedProps : y, b = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    V_(v, _, b, S, y, e);
                  } catch (mt) {
                    Cn(e, e.return, mt);
                  }
              }
            }
          }
          return;
        }
        case $: {
          if (go(t, e), rl(e), l & Tt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var I = e.stateNode, U = e.memoizedProps, q = i !== null ? i.memoizedProps : U;
            try {
              I_(I, q, U);
            } catch (mt) {
              Cn(e, e.return, mt);
            }
          }
          return;
        }
        case A: {
          if (go(t, e), rl(e), l & Tt && i !== null) {
            var te = i.memoizedState;
            if (te.isDehydrated)
              try {
                pk(t.containerInfo);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
          }
          return;
        }
        case z: {
          go(t, e), rl(e);
          return;
        }
        case re: {
          go(t, e), rl(e);
          var ie = e.child;
          if (ie.flags & Fo) {
            var Pe = ie.stateNode, it = ie.memoizedState, Ze = it !== null;
            if (Pe.isHidden = Ze, Ze) {
              var Vt = ie.alternate !== null && ie.alternate.memoizedState !== null;
              Vt || fN();
            }
          }
          if (l & Tt) {
            try {
              DO(e);
            } catch (mt) {
              Cn(e, e.return, mt);
            }
            Kw(e);
          }
          return;
        }
        case ke: {
          var Pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & qe
          ) {
            var Y = Qr;
            Qr = Y || Pt, go(t, e), Qr = Y;
          } else
            go(t, e);
          if (rl(e), l & Fo) {
            var oe = e.stateNode, Q = e.memoizedState, xe = Q !== null, Fe = e;
            if (oe.isHidden = xe, xe && !Pt && (Fe.mode & qe) !== Ge) {
              We = Fe;
              for (var je = Fe.child; je !== null; )
                We = je, AO(je), je = je.sibling;
            }
            bO(Fe, xe);
          }
          return;
        }
        case De: {
          go(t, e), rl(e), l & Tt && Kw(e);
          return;
        }
        case ot:
          return;
        default: {
          go(t, e), rl(e);
          return;
        }
      }
    }
    function rl(e) {
      var t = e.flags;
      if (t & Sn) {
        try {
          _O(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= ~Sn;
      }
      t & $a && (e.flags &= ~$a);
    }
    function MO(e, t, a) {
      cd = a, fd = t, We = e, qw(e, t, a), cd = null, fd = null;
    }
    function qw(e, t, a) {
      for (var i = (e.mode & qe) !== Ge; We !== null; ) {
        var l = We, c = l.child;
        if (l.tag === ke && i) {
          var v = l.memoizedState !== null, y = v || hy;
          if (y) {
            K0(e, t, a);
            continue;
          } else {
            var S = l.alternate, b = S !== null && S.memoizedState !== null, _ = b || Qr, I = hy, U = Qr;
            hy = y, Qr = _, Qr && !U && (We = l, LO(l));
            for (var q = c; q !== null; )
              We = q, qw(
                q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), q = q.sibling;
            We = l, hy = I, Qr = U, K0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Or) !== at && c !== null ? (c.return = l, We = c) : K0(e, t, a);
      }
    }
    function K0(e, t, a) {
      for (; We !== null; ) {
        var i = We;
        if ((i.flags & Or) !== at) {
          var l = i.alternate;
          en(i);
          try {
            CO(t, l, i, a);
          } catch (v) {
            Cn(i, i.return, v);
          }
          An();
        }
        if (i === e) {
          We = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, We = c;
          return;
        }
        We = i.return;
      }
    }
    function AO(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        switch (t.tag) {
          case T:
          case ne:
          case we:
          case pe: {
            if (t.mode & St)
              try {
                nl(), mo(gr, t, t.return);
              } finally {
                tl(t);
              }
            else
              mo(gr, t, t.return);
            break;
          }
          case k: {
            dd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Y0(t, t.return, i);
            break;
          }
          case P: {
            dd(t, t.return);
            break;
          }
          case ke: {
            var l = t.memoizedState !== null;
            if (l) {
              Zw(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, We = a) : Zw(e);
      }
    }
    function Zw(e) {
      for (; We !== null; ) {
        var t = We;
        if (t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function LO(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        if (t.tag === ke) {
          var i = t.memoizedState !== null;
          if (i) {
            Jw(e);
            continue;
          }
        }
        a !== null ? (a.return = t, We = a) : Jw(e);
      }
    }
    function Jw(e) {
      for (; We !== null; ) {
        var t = We;
        en(t);
        try {
          wO(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (An(), t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function PO(e, t, a, i) {
      We = t, jO(t, e, a, i);
    }
    function jO(e, t, a, i) {
      for (; We !== null; ) {
        var l = We, c = l.child;
        (l.subtreeFlags & Wa) !== at && c !== null ? (c.return = l, We = c) : zO(e, t, a, i);
      }
    }
    function zO(e, t, a, i) {
      for (; We !== null; ) {
        var l = We;
        if ((l.flags & wn) !== at) {
          en(l);
          try {
            UO(t, l, a, i);
          } catch (v) {
            Cn(l, l.return, v);
          }
          An();
        }
        if (l === e) {
          We = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, We = c;
          return;
        }
        We = l.return;
      }
    }
    function UO(e, t, a, i) {
      switch (t.tag) {
        case T:
        case ne:
        case pe: {
          if (t.mode & St) {
            v0();
            try {
              os(Wr | yr, t);
            } finally {
              p0(t);
            }
          } else
            os(Wr | yr, t);
          break;
        }
      }
    }
    function FO(e) {
      We = e, HO();
    }
    function HO() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        if ((We.flags & Xt) !== at) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              We = l, BO(l, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            We = e;
          }
        }
        (e.subtreeFlags & Wa) !== at && t !== null ? (t.return = e, We = t) : VO();
      }
    }
    function VO() {
      for (; We !== null; ) {
        var e = We;
        (e.flags & wn) !== at && (en(e), IO(e), An());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function IO(e) {
      switch (e.tag) {
        case T:
        case ne:
        case pe: {
          e.mode & St ? (v0(), mo(Wr | yr, e, e.return), p0(e)) : mo(Wr | yr, e, e.return);
          break;
        }
      }
    }
    function BO(e, t) {
      for (; We !== null; ) {
        var a = We;
        en(a), WO(a, t), An();
        var i = a.child;
        i !== null ? (i.return = a, We = i) : $O(e);
      }
    }
    function $O(e) {
      for (; We !== null; ) {
        var t = We, a = t.sibling, i = t.return;
        if (Ww(t), t === e) {
          We = null;
          return;
        }
        if (a !== null) {
          a.return = i, We = a;
          return;
        }
        We = i;
      }
    }
    function WO(e, t) {
      switch (e.tag) {
        case T:
        case ne:
        case pe: {
          e.mode & St ? (v0(), mo(Wr, e, t), p0(e)) : mo(Wr, e, t);
          break;
        }
      }
    }
    function YO(e) {
      switch (e.tag) {
        case T:
        case ne:
        case pe: {
          try {
            os(gr | yr, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function QO(e) {
      switch (e.tag) {
        case T:
        case ne:
        case pe: {
          try {
            os(Wr | yr, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function GO(e) {
      switch (e.tag) {
        case T:
        case ne:
        case pe: {
          try {
            mo(gr | yr, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Y0(e, e.return, t);
          break;
        }
      }
    }
    function KO(e) {
      switch (e.tag) {
        case T:
        case ne:
        case pe:
          try {
            mo(Wr | yr, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Sv = Symbol.for;
      Sv("selector.component"), Sv("selector.has_pseudo_class"), Sv("selector.role"), Sv("selector.test_id"), Sv("selector.text");
    }
    var XO = [];
    function qO() {
      XO.forEach(function(e) {
        return e();
      });
    }
    var ZO = d.ReactCurrentActQueue;
    function JO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function eb() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && ZO.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var eN = Math.ceil, X0 = d.ReactCurrentDispatcher, q0 = d.ReactCurrentOwner, Kr = d.ReactCurrentBatchConfig, So = d.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), tb = (
      /*               */
      1
    ), Xr = (
      /*                */
      2
    ), Vi = (
      /*                */
      4
    ), $l = 0, xv = 1, xc = 2, yy = 3, Ev = 4, nb = 5, Z0 = 6, Ht = Er, Na = null, In = null, Cr = ve, al = ve, J0 = qu(ve), wr = $l, Cv = null, gy = ve, wv = ve, Sy = ve, bv = null, ai = null, ex = 0, rb = 500, ab = 1 / 0, tN = 500, Wl = null;
    function Rv() {
      ab = Dn() + tN;
    }
    function ib() {
      return ab;
    }
    var xy = !1, tx = null, pd = null, Ec = !1, us = null, Tv = ve, nx = [], rx = null, nN = 50, _v = 0, ax = null, ix = !1, Ey = !1, rN = 50, vd = 0, Cy = null, kv = mn, wy = ve, ob = !1;
    function by() {
      return Na;
    }
    function Ma() {
      return (Ht & (Xr | Vi)) !== Er ? Dn() : (kv !== mn || (kv = Dn()), kv);
    }
    function ss(e) {
      var t = e.mode;
      if ((t & qe) === Ge)
        return rt;
      if ((Ht & Xr) !== Er && Cr !== ve)
        return Mu(Cr);
      var a = Zk() !== qk;
      if (a) {
        if (Kr.transition !== null) {
          var i = Kr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return wy === Gn && (wy = jh()), wy;
      }
      var l = Xa();
      if (l !== Gn)
        return l;
      var c = j_();
      return c;
    }
    function aN(e) {
      var t = e.mode;
      return (t & qe) === Ge ? rt : fa();
    }
    function br(e, t, a, i) {
      kN(), ob && m("useInsertionEffect must not schedule updates."), ix && (Ey = !0), Ol(e, a, i), (Ht & Xr) !== ve && e === Na ? NN(t) : (_a && Ef(e, t, a), MN(t), e === Na && ((Ht & Xr) === Er && (wv = bt(wv, a)), wr === Ev && cs(e, Cr)), ii(e, i), a === rt && Ht === Er && (t.mode & qe) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !So.isBatchingLegacy && (Rv(), oC()));
    }
    function iN(e, t, a) {
      var i = e.current;
      i.lanes = t, Ol(e, t, a), ii(e, a);
    }
    function oN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ht & Xr) !== Er
      );
    }
    function ii(e, t) {
      var a = e.callbackNode;
      Nh(e, t);
      var i = kl(e, e === Na ? Cr : ve);
      if (i === ve) {
        a !== null && Cb(a), e.callbackNode = null, e.callbackPriority = Gn;
        return;
      }
      var l = Fn(i), c = e.callbackPriority;
      if (c === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(So.current !== null && a !== dx)) {
        a == null && c !== rt && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Cb(a);
      var v;
      if (l === rt)
        e.tag === Zu ? (So.isBatchingLegacy !== null && (So.didScheduleLegacyUpdate = !0), Lk(sb.bind(null, e))) : iC(sb.bind(null, e)), So.current !== null ? So.current.push(Ju) : U_(function() {
          (Ht & (Xr | Vi)) === Er && Ju();
        }), v = null;
      else {
        var y;
        switch (mr(i)) {
          case Hn:
            y = Qc;
            break;
          case ao:
            y = El;
            break;
          case Mi:
            y = Ni;
            break;
          case Au:
            y = Gc;
            break;
          default:
            y = Ni;
            break;
        }
        v = px(y, lb.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function lb(e, t) {
      if (bD(), kv = mn, wy = ve, (Ht & (Xr | Vi)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ql();
      if (i && e.callbackNode !== a)
        return null;
      var l = kl(e, e === Na ? Cr : ve);
      if (l === ve)
        return null;
      var c = !Qs(e, l) && !Ph(e, l) && !t, v = c ? mN(e, l) : Ty(e, l);
      if (v !== $l) {
        if (v === xc) {
          var y = $o(e);
          y !== ve && (l = y, v = ox(e, y));
        }
        if (v === xv) {
          var S = Cv;
          throw Cc(e, ve), cs(e, l), ii(e, Dn()), S;
        }
        if (v === Z0)
          cs(e, l);
        else {
          var b = !Qs(e, l), _ = e.current.alternate;
          if (b && !uN(_)) {
            if (v = Ty(e, l), v === xc) {
              var I = $o(e);
              I !== ve && (l = I, v = ox(e, I));
            }
            if (v === xv) {
              var U = Cv;
              throw Cc(e, ve), cs(e, l), ii(e, Dn()), U;
            }
          }
          e.finishedWork = _, e.finishedLanes = l, lN(e, v, l);
        }
      }
      return ii(e, Dn()), e.callbackNode === a ? lb.bind(null, e) : null;
    }
    function ox(e, t) {
      var a = bv;
      if (Cf(e)) {
        var i = Cc(e, t);
        i.flags |= Ln, _k(e.containerInfo);
      }
      var l = Ty(e, t);
      if (l !== xc) {
        var c = ai;
        ai = a, c !== null && ub(c);
      }
      return l;
    }
    function ub(e) {
      ai === null ? ai = e : ai.push.apply(ai, e);
    }
    function lN(e, t, a) {
      switch (t) {
        case $l:
        case xv:
          throw new Error("Root did not complete. This is a bug in React.");
        case xc: {
          wc(e, ai, Wl);
          break;
        }
        case yy: {
          if (cs(e, a), Mh(a) && // do not delay if we're inside an act() scope
          !wb()) {
            var i = ex + rb - Dn();
            if (i > 10) {
              var l = kl(e, ve);
              if (l !== ve)
                break;
              var c = e.suspendedLanes;
              if (!Dl(c, a)) {
                Ma(), Sf(e, c);
                break;
              }
              e.timeoutHandle = rS(wc.bind(null, e, ai, Wl), i);
              break;
            }
          }
          wc(e, ai, Wl);
          break;
        }
        case Ev: {
          if (cs(e, a), Lh(a))
            break;
          if (!wb()) {
            var v = Dh(e, a), y = v, S = Dn() - y, b = _N(S) - S;
            if (b > 10) {
              e.timeoutHandle = rS(wc.bind(null, e, ai, Wl), b);
              break;
            }
          }
          wc(e, ai, Wl);
          break;
        }
        case nb: {
          wc(e, ai, Wl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function uN(e) {
      for (var t = e; ; ) {
        if (t.flags & zs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var c = i[l], v = c.getSnapshot, y = c.value;
                try {
                  if (!$e(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & zs && S !== null) {
          S.return = t, t = S;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function cs(e, t) {
      t = Gs(t, Sy), t = Gs(t, wv), Uh(e, t);
    }
    function sb(e) {
      if (RD(), (Ht & (Xr | Vi)) !== Er)
        throw new Error("Should not already be working.");
      Ql();
      var t = kl(e, ve);
      if (!da(t, rt))
        return ii(e, Dn()), null;
      var a = Ty(e, t);
      if (e.tag !== Zu && a === xc) {
        var i = $o(e);
        i !== ve && (t = i, a = ox(e, i));
      }
      if (a === xv) {
        var l = Cv;
        throw Cc(e, ve), cs(e, t), ii(e, Dn()), l;
      }
      if (a === Z0)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, wc(e, ai, Wl), ii(e, Dn()), null;
    }
    function sN(e, t) {
      t !== ve && (gp(e, bt(t, rt)), ii(e, Dn()), (Ht & (Xr | Vi)) === Er && (Rv(), Ju()));
    }
    function lx(e, t) {
      var a = Ht;
      Ht |= tb;
      try {
        return e(t);
      } finally {
        Ht = a, Ht === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !So.isBatchingLegacy && (Rv(), oC());
      }
    }
    function cN(e, t, a, i, l) {
      var c = Xa(), v = Kr.transition;
      try {
        return Kr.transition = null, Pn(Hn), e(t, a, i, l);
      } finally {
        Pn(c), Kr.transition = v, Ht === Er && Rv();
      }
    }
    function Yl(e) {
      us !== null && us.tag === Zu && (Ht & (Xr | Vi)) === Er && Ql();
      var t = Ht;
      Ht |= tb;
      var a = Kr.transition, i = Xa();
      try {
        return Kr.transition = null, Pn(Hn), e ? e() : void 0;
      } finally {
        Pn(i), Kr.transition = a, Ht = t, (Ht & (Xr | Vi)) === Er && Ju();
      }
    }
    function cb() {
      return (Ht & (Xr | Vi)) !== Er;
    }
    function Ry(e, t) {
      ha(J0, al, e), al = bt(al, t);
    }
    function ux(e) {
      al = J0.current, va(J0, e);
    }
    function Cc(e, t) {
      e.finishedWork = null, e.finishedLanes = ve;
      var a = e.timeoutHandle;
      if (a !== aS && (e.timeoutHandle = aS, z_(a)), In !== null)
        for (var i = In.return; i !== null; ) {
          var l = i.alternate;
          Fw(l, i), i = i.return;
        }
      Na = e;
      var c = bc(e.current, null);
      return In = c, Cr = al = t, wr = $l, Cv = null, gy = ve, wv = ve, Sy = ve, bv = null, ai = null, iD(), co.discardPendingWarnings(), c;
    }
    function fb(e, t) {
      do {
        var a = In;
        try {
          if (Pm(), PC(), An(), q0.current = null, a === null || a.return === null) {
            wr = xv, Cv = t, In = null;
            return;
          }
          if (vt && a.mode & St && cy(a, !0), yt)
            if (sa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wl(a, i, Cr);
            } else
              Hs(a, t, Cr);
          LD(e, a.return, a, t, Cr), hb(a);
        } catch (l) {
          t = l, In === a && a !== null ? (a = a.return, In = a) : a = In;
          continue;
        }
        return;
      } while (!0);
    }
    function db() {
      var e = X0.current;
      return X0.current = iy, e === null ? iy : e;
    }
    function pb(e) {
      X0.current = e;
    }
    function fN() {
      ex = Dn();
    }
    function Dv(e) {
      gy = bt(e, gy);
    }
    function dN() {
      wr === $l && (wr = yy);
    }
    function sx() {
      (wr === $l || wr === yy || wr === xc) && (wr = Ev), Na !== null && (Ys(gy) || Ys(wv)) && cs(Na, Cr);
    }
    function pN(e) {
      wr !== Ev && (wr = xc), bv === null ? bv = [e] : bv.push(e);
    }
    function vN() {
      return wr === $l;
    }
    function Ty(e, t) {
      var a = Ht;
      Ht |= Xr;
      var i = db();
      if (Na !== e || Cr !== t) {
        if (_a) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Ov(e, Cr), l.clear()), Sp(e, t);
        }
        Wl = Xs(), Cc(e, t);
      }
      bn(t);
      do
        try {
          hN();
          break;
        } catch (c) {
          fb(e, c);
        }
      while (!0);
      if (Pm(), Ht = a, pb(i), In !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Jc(), Na = null, Cr = ve, wr;
    }
    function hN() {
      for (; In !== null; )
        vb(In);
    }
    function mN(e, t) {
      var a = Ht;
      Ht |= Xr;
      var i = db();
      if (Na !== e || Cr !== t) {
        if (_a) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Ov(e, Cr), l.clear()), Sp(e, t);
        }
        Wl = Xs(), Rv(), Cc(e, t);
      }
      bn(t);
      do
        try {
          yN();
          break;
        } catch (c) {
          fb(e, c);
        }
      while (!0);
      return Pm(), pb(i), Ht = a, In !== null ? (Zc(), $l) : (Jc(), Na = null, Cr = ve, wr);
    }
    function yN() {
      for (; In !== null && !Yc(); )
        vb(In);
    }
    function vb(e) {
      var t = e.alternate;
      en(e);
      var a;
      (e.mode & St) !== Ge ? (d0(e), a = cx(t, e, al), cy(e, !0)) : a = cx(t, e, al), An(), e.memoizedProps = e.pendingProps, a === null ? hb(e) : In = a, q0.current = null;
    }
    function hb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ba) === at) {
          en(t);
          var l = void 0;
          if ((t.mode & St) === Ge ? l = Uw(a, t, al) : (d0(t), l = Uw(a, t, al), cy(t, !1)), An(), l !== null) {
            In = l;
            return;
          }
        } else {
          var c = dO(a, t);
          if (c !== null) {
            c.flags &= gh, In = c;
            return;
          }
          if ((t.mode & St) !== Ge) {
            cy(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= ba, i.subtreeFlags = at, i.deletions = null;
          else {
            wr = Z0, In = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          In = S;
          return;
        }
        t = i, In = t;
      } while (t !== null);
      wr === $l && (wr = nb);
    }
    function wc(e, t, a) {
      var i = Xa(), l = Kr.transition;
      try {
        Kr.transition = null, Pn(Hn), gN(e, t, a, i);
      } finally {
        Kr.transition = l, Pn(i);
      }
      return null;
    }
    function gN(e, t, a, i) {
      do
        Ql();
      while (us !== null);
      if (DN(), (Ht & (Xr | Vi)) !== Er)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (Vo(c), l === null)
        return Kc(), null;
      if (c === ve && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ve, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Gn;
      var v = bt(l.lanes, l.childLanes);
      xf(e, v), e === Na && (Na = null, In = null, Cr = ve), ((l.subtreeFlags & Wa) !== at || (l.flags & Wa) !== at) && (Ec || (Ec = !0, rx = a, px(Ni, function() {
        return Ql(), null;
      })));
      var y = (l.subtreeFlags & (Su | la | Or | Wa)) !== at, S = (l.flags & (Su | la | Or | Wa)) !== at;
      if (y || S) {
        var b = Kr.transition;
        Kr.transition = null;
        var _ = Xa();
        Pn(Hn);
        var I = Ht;
        Ht |= Vi, q0.current = null, yO(e, l), ow(), NO(e, l, c), O_(e.containerInfo), e.current = l, cp(c), MO(l, e, c), bu(), Eh(), Ht = I, Pn(_), Kr.transition = b;
      } else
        e.current = l, ow();
      var U = Ec;
      if (Ec ? (Ec = !1, us = e, Tv = c) : (vd = 0, Cy = null), v = e.pendingLanes, v === ve && (pd = null), U || Sb(e.current, !1), Eu(l.stateNode, i), _a && e.memoizedUpdaters.clear(), qO(), ii(e, Dn()), t !== null)
        for (var q = e.onRecoverableError, te = 0; te < t.length; te++) {
          var ie = t[te], Pe = ie.stack, it = ie.digest;
          q(ie.value, {
            componentStack: Pe,
            digest: it
          });
        }
      if (xy) {
        xy = !1;
        var Ze = tx;
        throw tx = null, Ze;
      }
      return da(Tv, rt) && e.tag !== Zu && Ql(), v = e.pendingLanes, da(v, rt) ? (wD(), e === ax ? _v++ : (_v = 0, ax = e)) : _v = 0, Ju(), Kc(), null;
    }
    function Ql() {
      if (us !== null) {
        var e = mr(Tv), t = kg(Mi, e), a = Kr.transition, i = Xa();
        try {
          return Kr.transition = null, Pn(t), xN();
        } finally {
          Pn(i), Kr.transition = a;
        }
      }
      return !1;
    }
    function SN(e) {
      nx.push(e), Ec || (Ec = !0, px(Ni, function() {
        return Ql(), null;
      }));
    }
    function xN() {
      if (us === null)
        return !1;
      var e = rx;
      rx = null;
      var t = us, a = Tv;
      if (us = null, Tv = ve, (Ht & (Xr | Vi)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      ix = !0, Ey = !1, _h(a);
      var i = Ht;
      Ht |= Vi, FO(t.current), PO(t, t.current, a, e);
      {
        var l = nx;
        nx = [];
        for (var c = 0; c < l.length; c++) {
          var v = l[c];
          EO(t, v);
        }
      }
      fp(), Sb(t.current, !0), Ht = i, Ju(), Ey ? t === Cy ? vd++ : (vd = 0, Cy = t) : vd = 0, ix = !1, Ey = !1, Ga(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function mb(e) {
      return pd !== null && pd.has(e);
    }
    function EN(e) {
      pd === null ? pd = /* @__PURE__ */ new Set([e]) : pd.add(e);
    }
    function CN(e) {
      xy || (xy = !0, tx = e);
    }
    var wN = CN;
    function yb(e, t, a) {
      var i = gc(a, t), l = vw(e, i, rt), c = ts(e, l, rt), v = Ma();
      c !== null && (Ol(c, rt, v), ii(c, v));
    }
    function Cn(e, t, a) {
      if (vO(a), Nv(!1), e.tag === A) {
        yb(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === A) {
          yb(i, e, a);
          return;
        } else if (i.tag === k) {
          var l = i.type, c = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !mb(c)) {
            var v = gc(a, e), y = O0(i, v, rt), S = ts(i, y, rt), b = Ma();
            S !== null && (Ol(S, rt, b), ii(S, b));
            return;
          }
        }
        i = i.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function bN(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ma();
      Sf(e, a), AN(e), Na === e && Dl(Cr, a) && (wr === Ev || wr === yy && Mh(Cr) && Dn() - ex < rb ? Cc(e, ve) : Sy = bt(Sy, a)), ii(e, l);
    }
    function gb(e, t) {
      t === Gn && (t = aN(e));
      var a = Ma(), i = ni(e, t);
      i !== null && (Ol(i, t, a), ii(i, a));
    }
    function RN(e) {
      var t = e.memoizedState, a = Gn;
      t !== null && (a = t.retryLane), gb(e, a);
    }
    function TN(e, t) {
      var a = Gn, i;
      switch (e.tag) {
        case re:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case De:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), gb(e, a);
    }
    function _N(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : eN(e / 1960) * 1960;
    }
    function kN() {
      if (_v > nN)
        throw _v = 0, ax = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      vd > rN && (vd = 0, Cy = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function DN() {
      co.flushLegacyContextWarning(), co.flushPendingUnsafeLifecycleWarnings();
    }
    function Sb(e, t) {
      en(e), _y(e, oa, GO), t && _y(e, xl, KO), _y(e, oa, YO), t && _y(e, xl, QO), An();
    }
    function _y(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== l && i.child !== null && c !== at ? i = i.child : ((i.flags & t) !== at && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ky = null;
    function xb(e) {
      {
        if ((Ht & Xr) !== Er || !(e.mode & qe))
          return;
        var t = e.tag;
        if (t !== B && t !== A && t !== k && t !== T && t !== ne && t !== we && t !== pe)
          return;
        var a = xt(e) || "ReactComponent";
        if (ky !== null) {
          if (ky.has(a))
            return;
          ky.add(a);
        } else
          ky = /* @__PURE__ */ new Set([a]);
        var i = kn;
        try {
          en(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? en(e) : An();
        }
      }
    }
    var cx;
    {
      var ON = null;
      cx = function(e, t, a) {
        var i = kb(ON, t);
        try {
          return Aw(e, t, a);
        } catch (c) {
          if (Ik() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (Pm(), PC(), Fw(e, t), kb(t, i), t.mode & St && d0(t), Sl(null, Aw, null, e, t, a), wg()) {
            var l = tp();
            typeof l == "object" && l !== null && l._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var Eb = !1, fx;
    fx = /* @__PURE__ */ new Set();
    function NN(e) {
      if (ta && !xD())
        switch (e.tag) {
          case T:
          case ne:
          case pe: {
            var t = In && xt(In) || "Unknown", a = t;
            if (!fx.has(a)) {
              fx.add(a);
              var i = xt(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case k: {
            Eb || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Eb = !0);
            break;
          }
        }
    }
    function Ov(e, t) {
      if (_a) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ef(e, i, t);
        });
      }
    }
    var dx = {};
    function px(e, t) {
      {
        var a = So.current;
        return a !== null ? (a.push(t), dx) : Wc(e, t);
      }
    }
    function Cb(e) {
      if (e !== dx)
        return xh(e);
    }
    function wb() {
      return So.current !== null;
    }
    function MN(e) {
      {
        if (e.mode & qe) {
          if (!eb())
            return;
        } else if (!JO() || Ht !== Er || e.tag !== T && e.tag !== ne && e.tag !== pe)
          return;
        if (So.current === null) {
          var t = kn;
          try {
            en(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, xt(e));
          } finally {
            t ? en(e) : An();
          }
        }
      }
    }
    function AN(e) {
      e.tag !== Zu && eb() && So.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Nv(e) {
      ob = e;
    }
    var Ii = null, hd = null, LN = function(e) {
      Ii = e;
    };
    function md(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        return t === void 0 ? e : t.current;
      }
    }
    function vx(e) {
      return md(e);
    }
    function hx(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = md(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ee,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function bb(e, t) {
      {
        if (Ii === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof i == "function" && (l = !0);
            break;
          }
          case T: {
            (typeof i == "function" || c === ct) && (l = !0);
            break;
          }
          case ne: {
            (c === Ee || c === ct) && (l = !0);
            break;
          }
          case we:
          case pe: {
            (c === jt || c === ct) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = Ii(a);
          if (v !== void 0 && v === Ii(i))
            return !0;
        }
        return !1;
      }
    }
    function Rb(e) {
      {
        if (Ii === null || typeof WeakSet != "function")
          return;
        hd === null && (hd = /* @__PURE__ */ new WeakSet()), hd.add(e);
      }
    }
    var PN = function(e, t) {
      {
        if (Ii === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ql(), Yl(function() {
          mx(e.current, i, a);
        });
      }
    }, jN = function(e, t) {
      {
        if (e.context !== yi)
          return;
        Ql(), Yl(function() {
          Mv(t, e, null, null);
        });
      }
    };
    function mx(e, t, a) {
      {
        var i = e.alternate, l = e.child, c = e.sibling, v = e.tag, y = e.type, S = null;
        switch (v) {
          case T:
          case pe:
          case k:
            S = y;
            break;
          case ne:
            S = y.render;
            break;
        }
        if (Ii === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, _ = !1;
        if (S !== null) {
          var I = Ii(S);
          I !== void 0 && (a.has(I) ? _ = !0 : t.has(I) && (v === k ? _ = !0 : b = !0));
        }
        if (hd !== null && (hd.has(e) || i !== null && hd.has(i)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || b) {
          var U = ni(e, rt);
          U !== null && br(U, e, rt, mn);
        }
        l !== null && !_ && mx(l, t, a), c !== null && mx(c, t, a);
      }
    }
    var zN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return yx(e.current, i, a), a;
      }
    };
    function yx(e, t, a) {
      {
        var i = e.child, l = e.sibling, c = e.tag, v = e.type, y = null;
        switch (c) {
          case T:
          case pe:
          case k:
            y = v;
            break;
          case ne:
            y = v.render;
            break;
        }
        var S = !1;
        y !== null && t.has(y) && (S = !0), S ? UN(e, a) : i !== null && yx(i, t, a), l !== null && yx(l, t, a);
      }
    }
    function UN(e, t) {
      {
        var a = FN(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case P:
              t.add(i.stateNode);
              return;
            case z:
              t.add(i.stateNode.containerInfo);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function FN(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === P)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var gx;
    {
      gx = !1;
      try {
        var Tb = Object.preventExtensions({});
      } catch {
        gx = !0;
      }
    }
    function HN(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = at, this.subtreeFlags = at, this.deletions = null, this.lanes = ve, this.childLanes = ve, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !gx && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var gi = function(e, t, a, i) {
      return new HN(e, t, a, i);
    };
    function Sx(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function VN(e) {
      return typeof e == "function" && !Sx(e) && e.defaultProps === void 0;
    }
    function IN(e) {
      if (typeof e == "function")
        return Sx(e) ? k : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ee)
          return ne;
        if (t === jt)
          return we;
      }
      return B;
    }
    function bc(e, t) {
      var a = e.alternate;
      a === null ? (a = gi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = at, a.subtreeFlags = at, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & vr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case B:
        case T:
        case pe:
          a.type = md(e.type);
          break;
        case k:
          a.type = vx(e.type);
          break;
        case ne:
          a.type = hx(e.type);
          break;
      }
      return a;
    }
    function BN(e, t) {
      e.flags &= vr | Sn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ve, e.lanes = t, e.child = null, e.subtreeFlags = at, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = at, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function $N(e, t, a) {
      var i;
      return e === Rm ? (i = qe, t === !0 && (i |= Nt, i |= ka)) : i = Ge, _a && (i |= St), gi(A, null, null, i);
    }
    function xx(e, t, a, i, l, c) {
      var v = B, y = e;
      if (typeof e == "function")
        Sx(e) ? (v = k, y = vx(y)) : y = md(y);
      else if (typeof e == "string")
        v = P;
      else
        e: switch (e) {
          case wa:
            return fs(a.children, l, c, t);
          case bi:
            v = G, l |= Nt, (l & qe) !== Ge && (l |= ka);
            break;
          case Ri:
            return WN(a, l, c, t);
          case Xe:
            return YN(a, l, c, t);
          case Mt:
            return QN(a, l, c, t);
          case cn:
            return _b(a, l, c, t);
          case gn:
          case kt:
          case Dr:
          case Ti:
          case Wn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case L:
                  v = K;
                  break e;
                case me:
                  v = Z;
                  break e;
                case Ee:
                  v = ne, y = hx(y);
                  break e;
                case jt:
                  v = we;
                  break e;
                case ct:
                  v = He, y = null;
                  break e;
              }
            var S = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var b = i ? xt(i) : null;
              b && (S += `

Check the render method of \`` + b + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
          }
        }
      var _ = gi(v, a, t, l);
      return _.elementType = e, _.type = y, _.lanes = c, _._debugOwner = i, _;
    }
    function Ex(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, c = e.key, v = e.props, y = xx(l, c, v, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function fs(e, t, a, i) {
      var l = gi(F, e, i, t);
      return l.lanes = a, l;
    }
    function WN(e, t, a, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = gi(ce, e, i, t | St);
      return l.elementType = Ri, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function YN(e, t, a, i) {
      var l = gi(re, e, i, t);
      return l.elementType = Xe, l.lanes = a, l;
    }
    function QN(e, t, a, i) {
      var l = gi(De, e, i, t);
      return l.elementType = Mt, l.lanes = a, l;
    }
    function _b(e, t, a, i) {
      var l = gi(ke, e, i, t);
      l.elementType = cn, l.lanes = a;
      var c = {
        isHidden: !1
      };
      return l.stateNode = c, l;
    }
    function Cx(e, t, a) {
      var i = gi($, e, null, t);
      return i.lanes = a, i;
    }
    function GN() {
      var e = gi(P, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function KN(e) {
      var t = gi(Qe, null, null, Ge);
      return t.stateNode = e, t;
    }
    function wx(e, t, a) {
      var i = e.children !== null ? e.children : [], l = gi(z, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function kb(e, t) {
      return e === null && (e = gi(B, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function XN(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = aS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Gn, this.eventTimes = Ks(ve), this.expirationTimes = Ks(mn), this.pendingLanes = ve, this.suspendedLanes = ve, this.pingedLanes = ve, this.expiredLanes = ve, this.mutableReadLanes = ve, this.finishedLanes = ve, this.entangledLanes = ve, this.entanglements = Ks(ve), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < Bs; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Zu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Db(e, t, a, i, l, c, v, y, S, b) {
      var _ = new XN(e, t, a, y, S), I = $N(t, c);
      _.current = I, I.stateNode = _;
      {
        var U = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        I.memoizedState = U;
      }
      return jS(I), _;
    }
    var bx = "18.3.1";
    function qN(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Xn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: zr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Rx, Tx;
    Rx = !1, Tx = {};
    function Ob(e) {
      if (!e)
        return yi;
      var t = Ia(e), a = Ak(t);
      if (t.tag === k) {
        var i = t.type;
        if (qo(i))
          return rC(t, i, a);
      }
      return a;
    }
    function ZN(e, t) {
      {
        var a = Ia(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Ya(a);
        if (l === null)
          return null;
        if (l.mode & Nt) {
          var c = xt(a) || "Component";
          if (!Tx[c]) {
            Tx[c] = !0;
            var v = kn;
            try {
              en(l), a.mode & Nt ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? en(v) : An();
            }
          }
        }
        return l.stateNode;
      }
    }
    function Nb(e, t, a, i, l, c, v, y) {
      var S = !1, b = null;
      return Db(e, t, S, b, a, i, l, c, v);
    }
    function Mb(e, t, a, i, l, c, v, y, S, b) {
      var _ = !0, I = Db(a, i, _, e, l, c, v, y, S);
      I.context = Ob(null);
      var U = I.current, q = Ma(), te = ss(U), ie = Il(q, te);
      return ie.callback = t ?? null, ts(U, ie, te), iN(I, te, q), I;
    }
    function Mv(e, t, a, i) {
      sp(t, e);
      var l = t.current, c = Ma(), v = ss(l);
      dp(v);
      var y = Ob(a);
      t.context === null ? t.context = y : t.pendingContext = y, ta && kn !== null && !Rx && (Rx = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, xt(kn) || "Unknown"));
      var S = Il(c, v);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var b = ts(l, S, v);
      return b !== null && (br(b, l, v, c), Hm(b, l, v)), v;
    }
    function Dy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case P:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function JN(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (Cf(t)) {
            var a = hp(t);
            sN(t, a);
          }
          break;
        }
        case re: {
          Yl(function() {
            var l = ni(e, rt);
            if (l !== null) {
              var c = Ma();
              br(l, e, rt, c);
            }
          });
          var i = rt;
          _x(e, i);
          break;
        }
      }
    }
    function Ab(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = zh(a.retryLane, t));
    }
    function _x(e, t) {
      Ab(e, t);
      var a = e.alternate;
      a && Ab(a, t);
    }
    function eM(e) {
      if (e.tag === re) {
        var t = Ws, a = ni(e, t);
        if (a !== null) {
          var i = Ma();
          br(a, e, t, i);
        }
        _x(e, t);
      }
    }
    function tM(e) {
      if (e.tag === re) {
        var t = ss(e), a = ni(e, t);
        if (a !== null) {
          var i = Ma();
          br(a, e, t, i);
        }
        _x(e, t);
      }
    }
    function Lb(e) {
      var t = Sh(e);
      return t === null ? null : t.stateNode;
    }
    var Pb = function(e) {
      return null;
    };
    function nM(e) {
      return Pb(e);
    }
    var jb = function(e) {
      return !1;
    };
    function rM(e) {
      return jb(e);
    }
    var zb = null, Ub = null, Fb = null, Hb = null, Vb = null, Ib = null, Bb = null, $b = null, Wb = null;
    {
      var Yb = function(e, t, a) {
        var i = t[a], l = Ut(e) ? e.slice() : Dt({}, e);
        return a + 1 === t.length ? (Ut(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Yb(e[i], t, a + 1), l);
      }, Qb = function(e, t) {
        return Yb(e, t, 0);
      }, Gb = function(e, t, a, i) {
        var l = t[i], c = Ut(e) ? e.slice() : Dt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          c[v] = c[l], Ut(c) ? c.splice(l, 1) : delete c[l];
        } else
          c[l] = Gb(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return c;
      }, Kb = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Gb(e, t, a, 0);
      }, Xb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], c = Ut(e) ? e.slice() : Dt({}, e);
        return c[l] = Xb(e[l], t, a + 1, i), c;
      }, qb = function(e, t, a) {
        return Xb(e, t, 0, a);
      }, kx = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      zb = function(e, t, a, i) {
        var l = kx(e, t);
        if (l !== null) {
          var c = qb(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = Dt({}, e.memoizedProps);
          var v = ni(e, rt);
          v !== null && br(v, e, rt, mn);
        }
      }, Ub = function(e, t, a) {
        var i = kx(e, t);
        if (i !== null) {
          var l = Qb(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Dt({}, e.memoizedProps);
          var c = ni(e, rt);
          c !== null && br(c, e, rt, mn);
        }
      }, Fb = function(e, t, a, i) {
        var l = kx(e, t);
        if (l !== null) {
          var c = Kb(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = Dt({}, e.memoizedProps);
          var v = ni(e, rt);
          v !== null && br(v, e, rt, mn);
        }
      }, Hb = function(e, t, a) {
        e.pendingProps = qb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ni(e, rt);
        i !== null && br(i, e, rt, mn);
      }, Vb = function(e, t) {
        e.pendingProps = Qb(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ni(e, rt);
        a !== null && br(a, e, rt, mn);
      }, Ib = function(e, t, a) {
        e.pendingProps = Kb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ni(e, rt);
        i !== null && br(i, e, rt, mn);
      }, Bb = function(e) {
        var t = ni(e, rt);
        t !== null && br(t, e, rt, mn);
      }, $b = function(e) {
        Pb = e;
      }, Wb = function(e) {
        jb = e;
      };
    }
    function aM(e) {
      var t = Ya(e);
      return t === null ? null : t.stateNode;
    }
    function iM(e) {
      return null;
    }
    function oM() {
      return kn;
    }
    function lM(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return up({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: zb,
        overrideHookStateDeletePath: Ub,
        overrideHookStateRenamePath: Fb,
        overrideProps: Hb,
        overridePropsDeletePath: Vb,
        overridePropsRenamePath: Ib,
        setErrorHandler: $b,
        setSuspenseHandler: Wb,
        scheduleUpdate: Bb,
        currentDispatcherRef: a,
        findHostInstanceByFiber: aM,
        findFiberByHostInstance: t || iM,
        // React Refresh
        findHostInstancesForRefresh: zN,
        scheduleRefresh: PN,
        scheduleRoot: jN,
        setRefreshHandler: LN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: oM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: bx
      });
    }
    var Zb = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Dx(e) {
      this._internalRoot = e;
    }
    Oy.prototype.render = Dx.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ny(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Yn) {
          var i = Lb(t.current);
          i && i.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Mv(e, t, null, null);
    }, Oy.prototype.unmount = Dx.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cb() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yl(function() {
          Mv(null, e, null, null);
        }), ZE(t);
      }
    };
    function uM(e, t) {
      if (!Ny(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Jb(e);
      var a = !1, i = !1, l = "", c = Zb;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === si && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = Nb(e, Rm, null, a, i, l, c);
      gm(v.current, e);
      var y = e.nodeType === Yn ? e.parentNode : e;
      return Up(y), new Dx(v);
    }
    function Oy(e) {
      this._internalRoot = e;
    }
    function sM(e) {
      e && Ng(e);
    }
    Oy.prototype.unstable_scheduleHydration = sM;
    function cM(e, t, a) {
      if (!Ny(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Jb(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, c = !1, v = !1, y = "", S = Zb;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var b = Mb(t, null, e, Rm, i, c, v, y, S);
      if (gm(b.current, e), Up(e), l)
        for (var _ = 0; _ < l.length; _++) {
          var I = l[_];
          vD(b, I);
        }
      return new Oy(b);
    }
    function Ny(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === pi || e.nodeType === pl || !ue));
    }
    function Av(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === pi || e.nodeType === pl || e.nodeType === Yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Jb(e) {
      e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Kp(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var fM = d.ReactCurrentOwner, e1;
    e1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Yn) {
        var t = Lb(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Ox(e), l = !!(i && Xu(i));
      l && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Ox(e) {
      return e ? e.nodeType === pi ? e.documentElement : e.firstChild : null;
    }
    function t1() {
    }
    function dM(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var U = Dy(v);
            c.call(U);
          };
        }
        var v = Mb(
          t,
          i,
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          t1
        );
        e._reactRootContainer = v, gm(v.current, e);
        var y = e.nodeType === Yn ? e.parentNode : e;
        return Up(y), Yl(), v;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var U = Dy(_);
            b.call(U);
          };
        }
        var _ = Nb(
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          t1
        );
        e._reactRootContainer = _, gm(_.current, e);
        var I = e.nodeType === Yn ? e.parentNode : e;
        return Up(I), Yl(function() {
          Mv(t, _, a, i);
        }), _;
      }
    }
    function pM(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function My(e, t, a, i, l) {
      e1(a), pM(l === void 0 ? null : l, "render");
      var c = a._reactRootContainer, v;
      if (!c)
        v = dM(a, t, e, l, i);
      else {
        if (v = c, typeof l == "function") {
          var y = l;
          l = function() {
            var S = Dy(v);
            y.call(S);
          };
        }
        Mv(t, v, e, l);
      }
      return Dy(v);
    }
    var n1 = !1;
    function vM(e) {
      {
        n1 || (n1 = !0, m("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = fM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ra ? e : ZN(e, "findDOMNode");
    }
    function hM(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Av(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Kp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return My(null, e, t, !0, a);
    }
    function mM(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Av(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Kp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return My(null, e, t, !1, a);
    }
    function yM(e, t, a, i) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Av(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !js(e))
        throw new Error("parentComponent must be a valid React Component");
      return My(e, t, a, !1, i);
    }
    var r1 = !1;
    function gM(e) {
      if (r1 || (r1 = !0, m("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Av(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Kp(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Ox(e), i = a && !Xu(a);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yl(function() {
          My(null, null, e, !1, function() {
            e._reactRootContainer = null, ZE(e);
          });
        }), !0;
      } else {
        {
          var l = Ox(e), c = !!(l && Xu(l)), v = e.nodeType === ra && Av(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ju(JN), Dg(eM), bf(tM), Hh(Xa), Vh(Ar), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), mh(x_), Hc(lx, cN, Yl);
    function SM(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ny(t))
        throw new Error("Target container is not a DOM element.");
      return qN(e, t, null, a);
    }
    function xM(e, t, a, i) {
      return yM(e, t, a, i);
    }
    var Nx = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Xu, Qf, Sm, Fc, As, lx]
    };
    function EM(e, t) {
      return Nx.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uM(e, t);
    }
    function CM(e, t, a) {
      return Nx.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), cM(e, t, a);
    }
    function wM(e) {
      return cb() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yl(e);
    }
    var bM = lM({
      findFiberByHostInstance: sc,
      bundleType: 1,
      version: bx,
      rendererPackageName: "react-dom"
    });
    if (!bM && At && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var a1 = window.location.protocol;
      /^(https?|file):$/.test(a1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (a1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nx, li.createPortal = SM, li.createRoot = EM, li.findDOMNode = vM, li.flushSync = wM, li.hydrate = hM, li.hydrateRoot = CM, li.render = mM, li.unmountComponentAtNode = gM, li.unstable_batchedUpdates = lx, li.unstable_renderSubtreeIntoContainer = xM, li.version = bx, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), li;
}
function K1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K1);
    } catch (u) {
      console.error(u);
    }
  }
}
process.env.NODE_ENV === "production" ? (K1(), $x.exports = KM()) : $x.exports = XM();
var kd = $x.exports;
const qM = /* @__PURE__ */ B1(kd);
function m1(u, [f, d]) {
  return Math.min(d, Math.max(f, u));
}
function Bn(u, f, { checkForDefaultPrevented: d = !0 } = {}) {
  return function(E) {
    if (u == null || u(E), d === !1 || !E.defaultPrevented)
      return f == null ? void 0 : f(E);
  };
}
function eg(u, f = []) {
  let d = [];
  function g(w, m) {
    const R = N.createContext(m), T = d.length;
    d = [...d, m];
    function k(A) {
      const { scope: z, children: P, ...$ } = A, F = (z == null ? void 0 : z[u][T]) || R, G = N.useMemo(() => $, Object.values($));
      return /* @__PURE__ */ D.jsx(F.Provider, { value: G, children: P });
    }
    function B(A, z) {
      const P = (z == null ? void 0 : z[u][T]) || R, $ = N.useContext(P);
      if ($) return $;
      if (m !== void 0) return m;
      throw new Error(`\`${A}\` must be used within \`${w}\``);
    }
    return k.displayName = w + "Provider", [k, B];
  }
  const E = () => {
    const w = d.map((m) => N.createContext(m));
    return function(R) {
      const T = (R == null ? void 0 : R[u]) || w;
      return N.useMemo(
        () => ({ [`__scope${u}`]: { ...R, [u]: T } }),
        [R, T]
      );
    };
  };
  return E.scopeName = u, [g, ZM(E, ...f)];
}
function ZM(...u) {
  const f = u[0];
  if (u.length === 1) return f;
  const d = () => {
    const g = u.map((E) => ({
      useScope: E(),
      scopeName: E.scopeName
    }));
    return function(w) {
      const m = g.reduce((R, { useScope: T, scopeName: k }) => {
        const A = T(w)[`__scope${k}`];
        return { ...R, ...A };
      }, {});
      return N.useMemo(() => ({ [`__scope${f.scopeName}`]: m }), [m]);
    };
  };
  return d.scopeName = f.scopeName, d;
}
function JM(u, f) {
  typeof u == "function" ? u(f) : u != null && (u.current = f);
}
function eA(...u) {
  return (f) => u.forEach((d) => JM(d, f));
}
function dr(...u) {
  return N.useCallback(eA(...u), u);
}
function tA(u) {
  const f = u + "CollectionProvider", [d, g] = eg(f), [E, w] = d(
    f,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), m = (P) => {
    const { scope: $, children: F } = P, G = Mn.useRef(null), Z = Mn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ D.jsx(E, { scope: $, itemMap: Z, collectionRef: G, children: F });
  };
  m.displayName = f;
  const R = u + "CollectionSlot", T = Mn.forwardRef(
    (P, $) => {
      const { scope: F, children: G } = P, Z = w(R, F), K = dr($, Z.collectionRef);
      return /* @__PURE__ */ D.jsx(Rd, { ref: K, children: G });
    }
  );
  T.displayName = R;
  const k = u + "CollectionItemSlot", B = "data-radix-collection-item", A = Mn.forwardRef(
    (P, $) => {
      const { scope: F, children: G, ...Z } = P, K = Mn.useRef(null), ne = dr($, K), ce = w(k, F);
      return Mn.useEffect(() => (ce.itemMap.set(K, { ref: K, ...Z }), () => void ce.itemMap.delete(K))), /* @__PURE__ */ D.jsx(Rd, { [B]: "", ref: ne, children: G });
    }
  );
  A.displayName = k;
  function z(P) {
    const $ = w(u + "CollectionConsumer", P);
    return Mn.useCallback(() => {
      const G = $.collectionRef.current;
      if (!G) return [];
      const Z = Array.from(G.querySelectorAll(`[${B}]`));
      return Array.from($.itemMap.values()).sort(
        (ce, re) => Z.indexOf(ce.ref.current) - Z.indexOf(re.ref.current)
      );
    }, [$.collectionRef, $.itemMap]);
  }
  return [
    { Provider: m, Slot: T, ItemSlot: A },
    z,
    g
  ];
}
var nA = N.createContext(void 0);
function rA(u) {
  const f = N.useContext(nA);
  return u || f || "ltr";
}
var aA = [
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
], $n = aA.reduce((u, f) => {
  const d = N.forwardRef((g, E) => {
    const { asChild: w, ...m } = g, R = w ? Rd : f;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ D.jsx(R, { ...m, ref: E });
  });
  return d.displayName = `Primitive.${f}`, { ...u, [f]: d };
}, {});
function iA(u, f) {
  u && kd.flushSync(() => u.dispatchEvent(f));
}
function Xl(u) {
  const f = N.useRef(u);
  return N.useEffect(() => {
    f.current = u;
  }), N.useMemo(() => (...d) => {
    var g;
    return (g = f.current) == null ? void 0 : g.call(f, ...d);
  }, []);
}
function oA(u, f = globalThis == null ? void 0 : globalThis.document) {
  const d = Xl(u);
  N.useEffect(() => {
    const g = (E) => {
      E.key === "Escape" && d(E);
    };
    return f.addEventListener("keydown", g, { capture: !0 }), () => f.removeEventListener("keydown", g, { capture: !0 });
  }, [d, f]);
}
var lA = "DismissableLayer", Wx = "dismissableLayer.update", uA = "dismissableLayer.pointerDownOutside", sA = "dismissableLayer.focusOutside", y1, X1 = N.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), oE = N.forwardRef(
  (u, f) => {
    const {
      disableOutsidePointerEvents: d = !1,
      onEscapeKeyDown: g,
      onPointerDownOutside: E,
      onFocusOutside: w,
      onInteractOutside: m,
      onDismiss: R,
      ...T
    } = u, k = N.useContext(X1), [B, A] = N.useState(null), z = (B == null ? void 0 : B.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, P] = N.useState({}), $ = dr(f, (pe) => A(pe)), F = Array.from(k.layers), [G] = [...k.layersWithOutsidePointerEventsDisabled].slice(-1), Z = F.indexOf(G), K = B ? F.indexOf(B) : -1, ne = k.layersWithOutsidePointerEventsDisabled.size > 0, ce = K >= Z, re = dA((pe) => {
      const He = pe.target, st = [...k.branches].some((Qe) => Qe.contains(He));
      !ce || st || (E == null || E(pe), m == null || m(pe), pe.defaultPrevented || R == null || R());
    }, z), we = pA((pe) => {
      const He = pe.target;
      [...k.branches].some((Qe) => Qe.contains(He)) || (w == null || w(pe), m == null || m(pe), pe.defaultPrevented || R == null || R());
    }, z);
    return oA((pe) => {
      K === k.layers.size - 1 && (g == null || g(pe), !pe.defaultPrevented && R && (pe.preventDefault(), R()));
    }, z), N.useEffect(() => {
      if (B)
        return d && (k.layersWithOutsidePointerEventsDisabled.size === 0 && (y1 = z.body.style.pointerEvents, z.body.style.pointerEvents = "none"), k.layersWithOutsidePointerEventsDisabled.add(B)), k.layers.add(B), g1(), () => {
          d && k.layersWithOutsidePointerEventsDisabled.size === 1 && (z.body.style.pointerEvents = y1);
        };
    }, [B, z, d, k]), N.useEffect(() => () => {
      B && (k.layers.delete(B), k.layersWithOutsidePointerEventsDisabled.delete(B), g1());
    }, [B, k]), N.useEffect(() => {
      const pe = () => P({});
      return document.addEventListener(Wx, pe), () => document.removeEventListener(Wx, pe);
    }, []), /* @__PURE__ */ D.jsx(
      $n.div,
      {
        ...T,
        ref: $,
        style: {
          pointerEvents: ne ? ce ? "auto" : "none" : void 0,
          ...u.style
        },
        onFocusCapture: Bn(u.onFocusCapture, we.onFocusCapture),
        onBlurCapture: Bn(u.onBlurCapture, we.onBlurCapture),
        onPointerDownCapture: Bn(
          u.onPointerDownCapture,
          re.onPointerDownCapture
        )
      }
    );
  }
);
oE.displayName = lA;
var cA = "DismissableLayerBranch", fA = N.forwardRef((u, f) => {
  const d = N.useContext(X1), g = N.useRef(null), E = dr(f, g);
  return N.useEffect(() => {
    const w = g.current;
    if (w)
      return d.branches.add(w), () => {
        d.branches.delete(w);
      };
  }, [d.branches]), /* @__PURE__ */ D.jsx($n.div, { ...u, ref: E });
});
fA.displayName = cA;
function dA(u, f = globalThis == null ? void 0 : globalThis.document) {
  const d = Xl(u), g = N.useRef(!1), E = N.useRef(() => {
  });
  return N.useEffect(() => {
    const w = (R) => {
      if (R.target && !g.current) {
        let T = function() {
          q1(
            uA,
            d,
            k,
            { discrete: !0 }
          );
        };
        const k = { originalEvent: R };
        R.pointerType === "touch" ? (f.removeEventListener("click", E.current), E.current = T, f.addEventListener("click", E.current, { once: !0 })) : T();
      } else
        f.removeEventListener("click", E.current);
      g.current = !1;
    }, m = window.setTimeout(() => {
      f.addEventListener("pointerdown", w);
    }, 0);
    return () => {
      window.clearTimeout(m), f.removeEventListener("pointerdown", w), f.removeEventListener("click", E.current);
    };
  }, [f, d]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => g.current = !0
  };
}
function pA(u, f = globalThis == null ? void 0 : globalThis.document) {
  const d = Xl(u), g = N.useRef(!1);
  return N.useEffect(() => {
    const E = (w) => {
      w.target && !g.current && q1(sA, d, { originalEvent: w }, {
        discrete: !1
      });
    };
    return f.addEventListener("focusin", E), () => f.removeEventListener("focusin", E);
  }, [f, d]), {
    onFocusCapture: () => g.current = !0,
    onBlurCapture: () => g.current = !1
  };
}
function g1() {
  const u = new CustomEvent(Wx);
  document.dispatchEvent(u);
}
function q1(u, f, d, { discrete: g }) {
  const E = d.originalEvent.target, w = new CustomEvent(u, { bubbles: !1, cancelable: !0, detail: d });
  f && E.addEventListener(u, f, { once: !0 }), g ? iA(E, w) : E.dispatchEvent(w);
}
var Lx = 0;
function Z1() {
  N.useEffect(() => {
    const u = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", u[0] ?? S1()), document.body.insertAdjacentElement("beforeend", u[1] ?? S1()), Lx++, () => {
      Lx === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((f) => f.remove()), Lx--;
    };
  }, []);
}
function S1() {
  const u = document.createElement("span");
  return u.setAttribute("data-radix-focus-guard", ""), u.tabIndex = 0, u.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", u;
}
var Px = "focusScope.autoFocusOnMount", jx = "focusScope.autoFocusOnUnmount", x1 = { bubbles: !1, cancelable: !0 }, vA = "FocusScope", lE = N.forwardRef((u, f) => {
  const {
    loop: d = !1,
    trapped: g = !1,
    onMountAutoFocus: E,
    onUnmountAutoFocus: w,
    ...m
  } = u, [R, T] = N.useState(null), k = Xl(E), B = Xl(w), A = N.useRef(null), z = dr(f, (F) => T(F)), P = N.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  N.useEffect(() => {
    if (g) {
      let F = function(ne) {
        if (P.paused || !R) return;
        const ce = ne.target;
        R.contains(ce) ? A.current = ce : ds(A.current, { select: !0 });
      }, G = function(ne) {
        if (P.paused || !R) return;
        const ce = ne.relatedTarget;
        ce !== null && (R.contains(ce) || ds(A.current, { select: !0 }));
      }, Z = function(ne) {
        if (document.activeElement === document.body)
          for (const re of ne)
            re.removedNodes.length > 0 && ds(R);
      };
      document.addEventListener("focusin", F), document.addEventListener("focusout", G);
      const K = new MutationObserver(Z);
      return R && K.observe(R, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", F), document.removeEventListener("focusout", G), K.disconnect();
      };
    }
  }, [g, R, P.paused]), N.useEffect(() => {
    if (R) {
      C1.add(P);
      const F = document.activeElement;
      if (!R.contains(F)) {
        const Z = new CustomEvent(Px, x1);
        R.addEventListener(Px, k), R.dispatchEvent(Z), Z.defaultPrevented || (hA(xA(J1(R)), { select: !0 }), document.activeElement === F && ds(R));
      }
      return () => {
        R.removeEventListener(Px, k), setTimeout(() => {
          const Z = new CustomEvent(jx, x1);
          R.addEventListener(jx, B), R.dispatchEvent(Z), Z.defaultPrevented || ds(F ?? document.body, { select: !0 }), R.removeEventListener(jx, B), C1.remove(P);
        }, 0);
      };
    }
  }, [R, k, B, P]);
  const $ = N.useCallback(
    (F) => {
      if (!d && !g || P.paused) return;
      const G = F.key === "Tab" && !F.altKey && !F.ctrlKey && !F.metaKey, Z = document.activeElement;
      if (G && Z) {
        const K = F.currentTarget, [ne, ce] = mA(K);
        ne && ce ? !F.shiftKey && Z === ce ? (F.preventDefault(), d && ds(ne, { select: !0 })) : F.shiftKey && Z === ne && (F.preventDefault(), d && ds(ce, { select: !0 })) : Z === K && F.preventDefault();
      }
    },
    [d, g, P.paused]
  );
  return /* @__PURE__ */ D.jsx($n.div, { tabIndex: -1, ...m, ref: z, onKeyDown: $ });
});
lE.displayName = vA;
function hA(u, { select: f = !1 } = {}) {
  const d = document.activeElement;
  for (const g of u)
    if (ds(g, { select: f }), document.activeElement !== d) return;
}
function mA(u) {
  const f = J1(u), d = E1(f, u), g = E1(f.reverse(), u);
  return [d, g];
}
function J1(u) {
  const f = [], d = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (g) => {
      const E = g.tagName === "INPUT" && g.type === "hidden";
      return g.disabled || g.hidden || E ? NodeFilter.FILTER_SKIP : g.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; d.nextNode(); ) f.push(d.currentNode);
  return f;
}
function E1(u, f) {
  for (const d of u)
    if (!yA(d, { upTo: f })) return d;
}
function yA(u, { upTo: f }) {
  if (getComputedStyle(u).visibility === "hidden") return !0;
  for (; u; ) {
    if (f !== void 0 && u === f) return !1;
    if (getComputedStyle(u).display === "none") return !0;
    u = u.parentElement;
  }
  return !1;
}
function gA(u) {
  return u instanceof HTMLInputElement && "select" in u;
}
function ds(u, { select: f = !1 } = {}) {
  if (u && u.focus) {
    const d = document.activeElement;
    u.focus({ preventScroll: !0 }), u !== d && gA(u) && f && u.select();
  }
}
var C1 = SA();
function SA() {
  let u = [];
  return {
    add(f) {
      const d = u[0];
      f !== d && (d == null || d.pause()), u = w1(u, f), u.unshift(f);
    },
    remove(f) {
      var d;
      u = w1(u, f), (d = u[0]) == null || d.resume();
    }
  };
}
function w1(u, f) {
  const d = [...u], g = d.indexOf(f);
  return g !== -1 && d.splice(g, 1), d;
}
function xA(u) {
  return u.filter((f) => f.tagName !== "A");
}
var ja = globalThis != null && globalThis.document ? N.useLayoutEffect : () => {
}, EA = $M.useId || (() => {
}), CA = 0;
function tg(u) {
  const [f, d] = N.useState(EA());
  return ja(() => {
    d((g) => g ?? String(CA++));
  }, [u]), f ? `radix-${f}` : "";
}
const wA = ["top", "right", "bottom", "left"], ll = Math.min, xi = Math.max, Qy = Math.round, Ly = Math.floor, ps = (u) => ({
  x: u,
  y: u
}), bA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, RA = {
  start: "end",
  end: "start"
};
function Yx(u, f, d) {
  return xi(u, ll(f, d));
}
function ql(u, f) {
  return typeof u == "function" ? u(f) : u;
}
function Zl(u) {
  return u.split("-")[0];
}
function Dd(u) {
  return u.split("-")[1];
}
function uE(u) {
  return u === "x" ? "y" : "x";
}
function sE(u) {
  return u === "y" ? "height" : "width";
}
function vs(u) {
  return ["top", "bottom"].includes(Zl(u)) ? "y" : "x";
}
function cE(u) {
  return uE(vs(u));
}
function TA(u, f, d) {
  d === void 0 && (d = !1);
  const g = Dd(u), E = cE(u), w = sE(E);
  let m = E === "x" ? g === (d ? "end" : "start") ? "right" : "left" : g === "start" ? "bottom" : "top";
  return f.reference[w] > f.floating[w] && (m = Gy(m)), [m, Gy(m)];
}
function _A(u) {
  const f = Gy(u);
  return [Qx(u), f, Qx(f)];
}
function Qx(u) {
  return u.replace(/start|end/g, (f) => RA[f]);
}
function kA(u, f, d) {
  const g = ["left", "right"], E = ["right", "left"], w = ["top", "bottom"], m = ["bottom", "top"];
  switch (u) {
    case "top":
    case "bottom":
      return d ? f ? E : g : f ? g : E;
    case "left":
    case "right":
      return f ? w : m;
    default:
      return [];
  }
}
function DA(u, f, d, g) {
  const E = Dd(u);
  let w = kA(Zl(u), d === "start", g);
  return E && (w = w.map((m) => m + "-" + E), f && (w = w.concat(w.map(Qx)))), w;
}
function Gy(u) {
  return u.replace(/left|right|bottom|top/g, (f) => bA[f]);
}
function OA(u) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...u
  };
}
function eR(u) {
  return typeof u != "number" ? OA(u) : {
    top: u,
    right: u,
    bottom: u,
    left: u
  };
}
function Ky(u) {
  const {
    x: f,
    y: d,
    width: g,
    height: E
  } = u;
  return {
    width: g,
    height: E,
    top: d,
    left: f,
    right: f + g,
    bottom: d + E,
    x: f,
    y: d
  };
}
function b1(u, f, d) {
  let {
    reference: g,
    floating: E
  } = u;
  const w = vs(f), m = cE(f), R = sE(m), T = Zl(f), k = w === "y", B = g.x + g.width / 2 - E.width / 2, A = g.y + g.height / 2 - E.height / 2, z = g[R] / 2 - E[R] / 2;
  let P;
  switch (T) {
    case "top":
      P = {
        x: B,
        y: g.y - E.height
      };
      break;
    case "bottom":
      P = {
        x: B,
        y: g.y + g.height
      };
      break;
    case "right":
      P = {
        x: g.x + g.width,
        y: A
      };
      break;
    case "left":
      P = {
        x: g.x - E.width,
        y: A
      };
      break;
    default:
      P = {
        x: g.x,
        y: g.y
      };
  }
  switch (Dd(f)) {
    case "start":
      P[m] -= z * (d && k ? -1 : 1);
      break;
    case "end":
      P[m] += z * (d && k ? -1 : 1);
      break;
  }
  return P;
}
const NA = async (u, f, d) => {
  const {
    placement: g = "bottom",
    strategy: E = "absolute",
    middleware: w = [],
    platform: m
  } = d, R = w.filter(Boolean), T = await (m.isRTL == null ? void 0 : m.isRTL(f));
  let k = await m.getElementRects({
    reference: u,
    floating: f,
    strategy: E
  }), {
    x: B,
    y: A
  } = b1(k, g, T), z = g, P = {}, $ = 0;
  for (let F = 0; F < R.length; F++) {
    const {
      name: G,
      fn: Z
    } = R[F], {
      x: K,
      y: ne,
      data: ce,
      reset: re
    } = await Z({
      x: B,
      y: A,
      initialPlacement: g,
      placement: z,
      strategy: E,
      middlewareData: P,
      rects: k,
      platform: m,
      elements: {
        reference: u,
        floating: f
      }
    });
    B = K ?? B, A = ne ?? A, P = {
      ...P,
      [G]: {
        ...P[G],
        ...ce
      }
    }, re && $ <= 50 && ($++, typeof re == "object" && (re.placement && (z = re.placement), re.rects && (k = re.rects === !0 ? await m.getElementRects({
      reference: u,
      floating: f,
      strategy: E
    }) : re.rects), {
      x: B,
      y: A
    } = b1(k, z, T)), F = -1);
  }
  return {
    x: B,
    y: A,
    placement: z,
    strategy: E,
    middlewareData: P
  };
};
async function Fv(u, f) {
  var d;
  f === void 0 && (f = {});
  const {
    x: g,
    y: E,
    platform: w,
    rects: m,
    elements: R,
    strategy: T
  } = u, {
    boundary: k = "clippingAncestors",
    rootBoundary: B = "viewport",
    elementContext: A = "floating",
    altBoundary: z = !1,
    padding: P = 0
  } = ql(f, u), $ = eR(P), G = R[z ? A === "floating" ? "reference" : "floating" : A], Z = Ky(await w.getClippingRect({
    element: (d = await (w.isElement == null ? void 0 : w.isElement(G))) == null || d ? G : G.contextElement || await (w.getDocumentElement == null ? void 0 : w.getDocumentElement(R.floating)),
    boundary: k,
    rootBoundary: B,
    strategy: T
  })), K = A === "floating" ? {
    x: g,
    y: E,
    width: m.floating.width,
    height: m.floating.height
  } : m.reference, ne = await (w.getOffsetParent == null ? void 0 : w.getOffsetParent(R.floating)), ce = await (w.isElement == null ? void 0 : w.isElement(ne)) ? await (w.getScale == null ? void 0 : w.getScale(ne)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, re = Ky(w.convertOffsetParentRelativeRectToViewportRelativeRect ? await w.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: R,
    rect: K,
    offsetParent: ne,
    strategy: T
  }) : K);
  return {
    top: (Z.top - re.top + $.top) / ce.y,
    bottom: (re.bottom - Z.bottom + $.bottom) / ce.y,
    left: (Z.left - re.left + $.left) / ce.x,
    right: (re.right - Z.right + $.right) / ce.x
  };
}
const MA = (u) => ({
  name: "arrow",
  options: u,
  async fn(f) {
    const {
      x: d,
      y: g,
      placement: E,
      rects: w,
      platform: m,
      elements: R,
      middlewareData: T
    } = f, {
      element: k,
      padding: B = 0
    } = ql(u, f) || {};
    if (k == null)
      return {};
    const A = eR(B), z = {
      x: d,
      y: g
    }, P = cE(E), $ = sE(P), F = await m.getDimensions(k), G = P === "y", Z = G ? "top" : "left", K = G ? "bottom" : "right", ne = G ? "clientHeight" : "clientWidth", ce = w.reference[$] + w.reference[P] - z[P] - w.floating[$], re = z[P] - w.reference[P], we = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(k));
    let pe = we ? we[ne] : 0;
    (!pe || !await (m.isElement == null ? void 0 : m.isElement(we))) && (pe = R.floating[ne] || w.floating[$]);
    const He = ce / 2 - re / 2, st = pe / 2 - F[$] / 2 - 1, Qe = ll(A[Z], st), De = ll(A[K], st), ot = Qe, ke = pe - F[$] - De, Ae = pe / 2 - F[$] / 2 + He, de = Yx(ot, Ae, ke), Le = !T.arrow && Dd(E) != null && Ae !== de && w.reference[$] / 2 - (Ae < ot ? Qe : De) - F[$] / 2 < 0, se = Le ? Ae < ot ? Ae - ot : Ae - ke : 0;
    return {
      [P]: z[P] + se,
      data: {
        [P]: de,
        centerOffset: Ae - de - se,
        ...Le && {
          alignmentOffset: se
        }
      },
      reset: Le
    };
  }
}), AA = function(u) {
  return u === void 0 && (u = {}), {
    name: "flip",
    options: u,
    async fn(f) {
      var d, g;
      const {
        placement: E,
        middlewareData: w,
        rects: m,
        initialPlacement: R,
        platform: T,
        elements: k
      } = f, {
        mainAxis: B = !0,
        crossAxis: A = !0,
        fallbackPlacements: z,
        fallbackStrategy: P = "bestFit",
        fallbackAxisSideDirection: $ = "none",
        flipAlignment: F = !0,
        ...G
      } = ql(u, f);
      if ((d = w.arrow) != null && d.alignmentOffset)
        return {};
      const Z = Zl(E), K = vs(R), ne = Zl(R) === R, ce = await (T.isRTL == null ? void 0 : T.isRTL(k.floating)), re = z || (ne || !F ? [Gy(R)] : _A(R)), we = $ !== "none";
      !z && we && re.push(...DA(R, F, $, ce));
      const pe = [R, ...re], He = await Fv(f, G), st = [];
      let Qe = ((g = w.flip) == null ? void 0 : g.overflows) || [];
      if (B && st.push(He[Z]), A) {
        const Ae = TA(E, m, ce);
        st.push(He[Ae[0]], He[Ae[1]]);
      }
      if (Qe = [...Qe, {
        placement: E,
        overflows: st
      }], !st.every((Ae) => Ae <= 0)) {
        var De, ot;
        const Ae = (((De = w.flip) == null ? void 0 : De.index) || 0) + 1, de = pe[Ae];
        if (de)
          return {
            data: {
              index: Ae,
              overflows: Qe
            },
            reset: {
              placement: de
            }
          };
        let Le = (ot = Qe.filter((se) => se.overflows[0] <= 0).sort((se, le) => se.overflows[1] - le.overflows[1])[0]) == null ? void 0 : ot.placement;
        if (!Le)
          switch (P) {
            case "bestFit": {
              var ke;
              const se = (ke = Qe.filter((le) => {
                if (we) {
                  const ge = vs(le.placement);
                  return ge === K || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ge === "y";
                }
                return !0;
              }).map((le) => [le.placement, le.overflows.filter((ge) => ge > 0).reduce((ge, be) => ge + be, 0)]).sort((le, ge) => le[1] - ge[1])[0]) == null ? void 0 : ke[0];
              se && (Le = se);
              break;
            }
            case "initialPlacement":
              Le = R;
              break;
          }
        if (E !== Le)
          return {
            reset: {
              placement: Le
            }
          };
      }
      return {};
    }
  };
};
function R1(u, f) {
  return {
    top: u.top - f.height,
    right: u.right - f.width,
    bottom: u.bottom - f.height,
    left: u.left - f.width
  };
}
function T1(u) {
  return wA.some((f) => u[f] >= 0);
}
const LA = function(u) {
  return u === void 0 && (u = {}), {
    name: "hide",
    options: u,
    async fn(f) {
      const {
        rects: d
      } = f, {
        strategy: g = "referenceHidden",
        ...E
      } = ql(u, f);
      switch (g) {
        case "referenceHidden": {
          const w = await Fv(f, {
            ...E,
            elementContext: "reference"
          }), m = R1(w, d.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: T1(m)
            }
          };
        }
        case "escaped": {
          const w = await Fv(f, {
            ...E,
            altBoundary: !0
          }), m = R1(w, d.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: T1(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function PA(u, f) {
  const {
    placement: d,
    platform: g,
    elements: E
  } = u, w = await (g.isRTL == null ? void 0 : g.isRTL(E.floating)), m = Zl(d), R = Dd(d), T = vs(d) === "y", k = ["left", "top"].includes(m) ? -1 : 1, B = w && T ? -1 : 1, A = ql(f, u);
  let {
    mainAxis: z,
    crossAxis: P,
    alignmentAxis: $
  } = typeof A == "number" ? {
    mainAxis: A,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...A
  };
  return R && typeof $ == "number" && (P = R === "end" ? $ * -1 : $), T ? {
    x: P * B,
    y: z * k
  } : {
    x: z * k,
    y: P * B
  };
}
const jA = function(u) {
  return u === void 0 && (u = 0), {
    name: "offset",
    options: u,
    async fn(f) {
      var d, g;
      const {
        x: E,
        y: w,
        placement: m,
        middlewareData: R
      } = f, T = await PA(f, u);
      return m === ((d = R.offset) == null ? void 0 : d.placement) && (g = R.arrow) != null && g.alignmentOffset ? {} : {
        x: E + T.x,
        y: w + T.y,
        data: {
          ...T,
          placement: m
        }
      };
    }
  };
}, zA = function(u) {
  return u === void 0 && (u = {}), {
    name: "shift",
    options: u,
    async fn(f) {
      const {
        x: d,
        y: g,
        placement: E
      } = f, {
        mainAxis: w = !0,
        crossAxis: m = !1,
        limiter: R = {
          fn: (G) => {
            let {
              x: Z,
              y: K
            } = G;
            return {
              x: Z,
              y: K
            };
          }
        },
        ...T
      } = ql(u, f), k = {
        x: d,
        y: g
      }, B = await Fv(f, T), A = vs(Zl(E)), z = uE(A);
      let P = k[z], $ = k[A];
      if (w) {
        const G = z === "y" ? "top" : "left", Z = z === "y" ? "bottom" : "right", K = P + B[G], ne = P - B[Z];
        P = Yx(K, P, ne);
      }
      if (m) {
        const G = A === "y" ? "top" : "left", Z = A === "y" ? "bottom" : "right", K = $ + B[G], ne = $ - B[Z];
        $ = Yx(K, $, ne);
      }
      const F = R.fn({
        ...f,
        [z]: P,
        [A]: $
      });
      return {
        ...F,
        data: {
          x: F.x - d,
          y: F.y - g
        }
      };
    }
  };
}, UA = function(u) {
  return u === void 0 && (u = {}), {
    options: u,
    fn(f) {
      const {
        x: d,
        y: g,
        placement: E,
        rects: w,
        middlewareData: m
      } = f, {
        offset: R = 0,
        mainAxis: T = !0,
        crossAxis: k = !0
      } = ql(u, f), B = {
        x: d,
        y: g
      }, A = vs(E), z = uE(A);
      let P = B[z], $ = B[A];
      const F = ql(R, f), G = typeof F == "number" ? {
        mainAxis: F,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...F
      };
      if (T) {
        const ne = z === "y" ? "height" : "width", ce = w.reference[z] - w.floating[ne] + G.mainAxis, re = w.reference[z] + w.reference[ne] - G.mainAxis;
        P < ce ? P = ce : P > re && (P = re);
      }
      if (k) {
        var Z, K;
        const ne = z === "y" ? "width" : "height", ce = ["top", "left"].includes(Zl(E)), re = w.reference[A] - w.floating[ne] + (ce && ((Z = m.offset) == null ? void 0 : Z[A]) || 0) + (ce ? 0 : G.crossAxis), we = w.reference[A] + w.reference[ne] + (ce ? 0 : ((K = m.offset) == null ? void 0 : K[A]) || 0) - (ce ? G.crossAxis : 0);
        $ < re ? $ = re : $ > we && ($ = we);
      }
      return {
        [z]: P,
        [A]: $
      };
    }
  };
}, FA = function(u) {
  return u === void 0 && (u = {}), {
    name: "size",
    options: u,
    async fn(f) {
      const {
        placement: d,
        rects: g,
        platform: E,
        elements: w
      } = f, {
        apply: m = () => {
        },
        ...R
      } = ql(u, f), T = await Fv(f, R), k = Zl(d), B = Dd(d), A = vs(d) === "y", {
        width: z,
        height: P
      } = g.floating;
      let $, F;
      k === "top" || k === "bottom" ? ($ = k, F = B === (await (E.isRTL == null ? void 0 : E.isRTL(w.floating)) ? "start" : "end") ? "left" : "right") : (F = k, $ = B === "end" ? "top" : "bottom");
      const G = P - T.top - T.bottom, Z = z - T.left - T.right, K = ll(P - T[$], G), ne = ll(z - T[F], Z), ce = !f.middlewareData.shift;
      let re = K, we = ne;
      if (A ? we = B || ce ? ll(ne, Z) : Z : re = B || ce ? ll(K, G) : G, ce && !B) {
        const He = xi(T.left, 0), st = xi(T.right, 0), Qe = xi(T.top, 0), De = xi(T.bottom, 0);
        A ? we = z - 2 * (He !== 0 || st !== 0 ? He + st : xi(T.left, T.right)) : re = P - 2 * (Qe !== 0 || De !== 0 ? Qe + De : xi(T.top, T.bottom));
      }
      await m({
        ...f,
        availableWidth: we,
        availableHeight: re
      });
      const pe = await E.getDimensions(w.floating);
      return z !== pe.width || P !== pe.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Od(u) {
  return tR(u) ? (u.nodeName || "").toLowerCase() : "#document";
}
function Ei(u) {
  var f;
  return (u == null || (f = u.ownerDocument) == null ? void 0 : f.defaultView) || window;
}
function Jl(u) {
  var f;
  return (f = (tR(u) ? u.ownerDocument : u.document) || window.document) == null ? void 0 : f.documentElement;
}
function tR(u) {
  return u instanceof Node || u instanceof Ei(u).Node;
}
function xo(u) {
  return u instanceof Element || u instanceof Ei(u).Element;
}
function ul(u) {
  return u instanceof HTMLElement || u instanceof Ei(u).HTMLElement;
}
function _1(u) {
  return typeof ShadowRoot > "u" ? !1 : u instanceof ShadowRoot || u instanceof Ei(u).ShadowRoot;
}
function Vv(u) {
  const {
    overflow: f,
    overflowX: d,
    overflowY: g,
    display: E
  } = Eo(u);
  return /auto|scroll|overlay|hidden|clip/.test(f + g + d) && !["inline", "contents"].includes(E);
}
function HA(u) {
  return ["table", "td", "th"].includes(Od(u));
}
function ng(u) {
  return [":popover-open", ":modal"].some((f) => {
    try {
      return u.matches(f);
    } catch {
      return !1;
    }
  });
}
function fE(u) {
  const f = dE(), d = xo(u) ? Eo(u) : u;
  return d.transform !== "none" || d.perspective !== "none" || (d.containerType ? d.containerType !== "normal" : !1) || !f && (d.backdropFilter ? d.backdropFilter !== "none" : !1) || !f && (d.filter ? d.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((g) => (d.willChange || "").includes(g)) || ["paint", "layout", "strict", "content"].some((g) => (d.contain || "").includes(g));
}
function VA(u) {
  let f = hs(u);
  for (; ul(f) && !Td(f); ) {
    if (fE(f))
      return f;
    if (ng(f))
      return null;
    f = hs(f);
  }
  return null;
}
function dE() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Td(u) {
  return ["html", "body", "#document"].includes(Od(u));
}
function Eo(u) {
  return Ei(u).getComputedStyle(u);
}
function rg(u) {
  return xo(u) ? {
    scrollLeft: u.scrollLeft,
    scrollTop: u.scrollTop
  } : {
    scrollLeft: u.scrollX,
    scrollTop: u.scrollY
  };
}
function hs(u) {
  if (Od(u) === "html")
    return u;
  const f = (
    // Step into the shadow DOM of the parent of a slotted node.
    u.assignedSlot || // DOM Element detected.
    u.parentNode || // ShadowRoot detected.
    _1(u) && u.host || // Fallback.
    Jl(u)
  );
  return _1(f) ? f.host : f;
}
function nR(u) {
  const f = hs(u);
  return Td(f) ? u.ownerDocument ? u.ownerDocument.body : u.body : ul(f) && Vv(f) ? f : nR(f);
}
function Hv(u, f, d) {
  var g;
  f === void 0 && (f = []), d === void 0 && (d = !0);
  const E = nR(u), w = E === ((g = u.ownerDocument) == null ? void 0 : g.body), m = Ei(E);
  if (w) {
    const R = Gx(m);
    return f.concat(m, m.visualViewport || [], Vv(E) ? E : [], R && d ? Hv(R) : []);
  }
  return f.concat(E, Hv(E, [], d));
}
function Gx(u) {
  return u.parent && Object.getPrototypeOf(u.parent) ? u.frameElement : null;
}
function rR(u) {
  const f = Eo(u);
  let d = parseFloat(f.width) || 0, g = parseFloat(f.height) || 0;
  const E = ul(u), w = E ? u.offsetWidth : d, m = E ? u.offsetHeight : g, R = Qy(d) !== w || Qy(g) !== m;
  return R && (d = w, g = m), {
    width: d,
    height: g,
    $: R
  };
}
function pE(u) {
  return xo(u) ? u : u.contextElement;
}
function Cd(u) {
  const f = pE(u);
  if (!ul(f))
    return ps(1);
  const d = f.getBoundingClientRect(), {
    width: g,
    height: E,
    $: w
  } = rR(f);
  let m = (w ? Qy(d.width) : d.width) / g, R = (w ? Qy(d.height) : d.height) / E;
  return (!m || !Number.isFinite(m)) && (m = 1), (!R || !Number.isFinite(R)) && (R = 1), {
    x: m,
    y: R
  };
}
const IA = /* @__PURE__ */ ps(0);
function aR(u) {
  const f = Ei(u);
  return !dE() || !f.visualViewport ? IA : {
    x: f.visualViewport.offsetLeft,
    y: f.visualViewport.offsetTop
  };
}
function BA(u, f, d) {
  return f === void 0 && (f = !1), !d || f && d !== Ei(u) ? !1 : f;
}
function Rc(u, f, d, g) {
  f === void 0 && (f = !1), d === void 0 && (d = !1);
  const E = u.getBoundingClientRect(), w = pE(u);
  let m = ps(1);
  f && (g ? xo(g) && (m = Cd(g)) : m = Cd(u));
  const R = BA(w, d, g) ? aR(w) : ps(0);
  let T = (E.left + R.x) / m.x, k = (E.top + R.y) / m.y, B = E.width / m.x, A = E.height / m.y;
  if (w) {
    const z = Ei(w), P = g && xo(g) ? Ei(g) : g;
    let $ = z, F = Gx($);
    for (; F && g && P !== $; ) {
      const G = Cd(F), Z = F.getBoundingClientRect(), K = Eo(F), ne = Z.left + (F.clientLeft + parseFloat(K.paddingLeft)) * G.x, ce = Z.top + (F.clientTop + parseFloat(K.paddingTop)) * G.y;
      T *= G.x, k *= G.y, B *= G.x, A *= G.y, T += ne, k += ce, $ = Ei(F), F = Gx($);
    }
  }
  return Ky({
    width: B,
    height: A,
    x: T,
    y: k
  });
}
function $A(u) {
  let {
    elements: f,
    rect: d,
    offsetParent: g,
    strategy: E
  } = u;
  const w = E === "fixed", m = Jl(g), R = f ? ng(f.floating) : !1;
  if (g === m || R && w)
    return d;
  let T = {
    scrollLeft: 0,
    scrollTop: 0
  }, k = ps(1);
  const B = ps(0), A = ul(g);
  if ((A || !A && !w) && ((Od(g) !== "body" || Vv(m)) && (T = rg(g)), ul(g))) {
    const z = Rc(g);
    k = Cd(g), B.x = z.x + g.clientLeft, B.y = z.y + g.clientTop;
  }
  return {
    width: d.width * k.x,
    height: d.height * k.y,
    x: d.x * k.x - T.scrollLeft * k.x + B.x,
    y: d.y * k.y - T.scrollTop * k.y + B.y
  };
}
function WA(u) {
  return Array.from(u.getClientRects());
}
function iR(u) {
  return Rc(Jl(u)).left + rg(u).scrollLeft;
}
function YA(u) {
  const f = Jl(u), d = rg(u), g = u.ownerDocument.body, E = xi(f.scrollWidth, f.clientWidth, g.scrollWidth, g.clientWidth), w = xi(f.scrollHeight, f.clientHeight, g.scrollHeight, g.clientHeight);
  let m = -d.scrollLeft + iR(u);
  const R = -d.scrollTop;
  return Eo(g).direction === "rtl" && (m += xi(f.clientWidth, g.clientWidth) - E), {
    width: E,
    height: w,
    x: m,
    y: R
  };
}
function QA(u, f) {
  const d = Ei(u), g = Jl(u), E = d.visualViewport;
  let w = g.clientWidth, m = g.clientHeight, R = 0, T = 0;
  if (E) {
    w = E.width, m = E.height;
    const k = dE();
    (!k || k && f === "fixed") && (R = E.offsetLeft, T = E.offsetTop);
  }
  return {
    width: w,
    height: m,
    x: R,
    y: T
  };
}
function GA(u, f) {
  const d = Rc(u, !0, f === "fixed"), g = d.top + u.clientTop, E = d.left + u.clientLeft, w = ul(u) ? Cd(u) : ps(1), m = u.clientWidth * w.x, R = u.clientHeight * w.y, T = E * w.x, k = g * w.y;
  return {
    width: m,
    height: R,
    x: T,
    y: k
  };
}
function k1(u, f, d) {
  let g;
  if (f === "viewport")
    g = QA(u, d);
  else if (f === "document")
    g = YA(Jl(u));
  else if (xo(f))
    g = GA(f, d);
  else {
    const E = aR(u);
    g = {
      ...f,
      x: f.x - E.x,
      y: f.y - E.y
    };
  }
  return Ky(g);
}
function oR(u, f) {
  const d = hs(u);
  return d === f || !xo(d) || Td(d) ? !1 : Eo(d).position === "fixed" || oR(d, f);
}
function KA(u, f) {
  const d = f.get(u);
  if (d)
    return d;
  let g = Hv(u, [], !1).filter((R) => xo(R) && Od(R) !== "body"), E = null;
  const w = Eo(u).position === "fixed";
  let m = w ? hs(u) : u;
  for (; xo(m) && !Td(m); ) {
    const R = Eo(m), T = fE(m);
    !T && R.position === "fixed" && (E = null), (w ? !T && !E : !T && R.position === "static" && !!E && ["absolute", "fixed"].includes(E.position) || Vv(m) && !T && oR(u, m)) ? g = g.filter((B) => B !== m) : E = R, m = hs(m);
  }
  return f.set(u, g), g;
}
function XA(u) {
  let {
    element: f,
    boundary: d,
    rootBoundary: g,
    strategy: E
  } = u;
  const m = [...d === "clippingAncestors" ? ng(f) ? [] : KA(f, this._c) : [].concat(d), g], R = m[0], T = m.reduce((k, B) => {
    const A = k1(f, B, E);
    return k.top = xi(A.top, k.top), k.right = ll(A.right, k.right), k.bottom = ll(A.bottom, k.bottom), k.left = xi(A.left, k.left), k;
  }, k1(f, R, E));
  return {
    width: T.right - T.left,
    height: T.bottom - T.top,
    x: T.left,
    y: T.top
  };
}
function qA(u) {
  const {
    width: f,
    height: d
  } = rR(u);
  return {
    width: f,
    height: d
  };
}
function ZA(u, f, d) {
  const g = ul(f), E = Jl(f), w = d === "fixed", m = Rc(u, !0, w, f);
  let R = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const T = ps(0);
  if (g || !g && !w)
    if ((Od(f) !== "body" || Vv(E)) && (R = rg(f)), g) {
      const A = Rc(f, !0, w, f);
      T.x = A.x + f.clientLeft, T.y = A.y + f.clientTop;
    } else E && (T.x = iR(E));
  const k = m.left + R.scrollLeft - T.x, B = m.top + R.scrollTop - T.y;
  return {
    x: k,
    y: B,
    width: m.width,
    height: m.height
  };
}
function zx(u) {
  return Eo(u).position === "static";
}
function D1(u, f) {
  return !ul(u) || Eo(u).position === "fixed" ? null : f ? f(u) : u.offsetParent;
}
function lR(u, f) {
  const d = Ei(u);
  if (ng(u))
    return d;
  if (!ul(u)) {
    let E = hs(u);
    for (; E && !Td(E); ) {
      if (xo(E) && !zx(E))
        return E;
      E = hs(E);
    }
    return d;
  }
  let g = D1(u, f);
  for (; g && HA(g) && zx(g); )
    g = D1(g, f);
  return g && Td(g) && zx(g) && !fE(g) ? d : g || VA(u) || d;
}
const JA = async function(u) {
  const f = this.getOffsetParent || lR, d = this.getDimensions, g = await d(u.floating);
  return {
    reference: ZA(u.reference, await f(u.floating), u.strategy),
    floating: {
      x: 0,
      y: 0,
      width: g.width,
      height: g.height
    }
  };
};
function eL(u) {
  return Eo(u).direction === "rtl";
}
const tL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $A,
  getDocumentElement: Jl,
  getClippingRect: XA,
  getOffsetParent: lR,
  getElementRects: JA,
  getClientRects: WA,
  getDimensions: qA,
  getScale: Cd,
  isElement: xo,
  isRTL: eL
};
function nL(u, f) {
  let d = null, g;
  const E = Jl(u);
  function w() {
    var R;
    clearTimeout(g), (R = d) == null || R.disconnect(), d = null;
  }
  function m(R, T) {
    R === void 0 && (R = !1), T === void 0 && (T = 1), w();
    const {
      left: k,
      top: B,
      width: A,
      height: z
    } = u.getBoundingClientRect();
    if (R || f(), !A || !z)
      return;
    const P = Ly(B), $ = Ly(E.clientWidth - (k + A)), F = Ly(E.clientHeight - (B + z)), G = Ly(k), K = {
      rootMargin: -P + "px " + -$ + "px " + -F + "px " + -G + "px",
      threshold: xi(0, ll(1, T)) || 1
    };
    let ne = !0;
    function ce(re) {
      const we = re[0].intersectionRatio;
      if (we !== T) {
        if (!ne)
          return m();
        we ? m(!1, we) : g = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      ne = !1;
    }
    try {
      d = new IntersectionObserver(ce, {
        ...K,
        // Handle <iframe>s
        root: E.ownerDocument
      });
    } catch {
      d = new IntersectionObserver(ce, K);
    }
    d.observe(u);
  }
  return m(!0), w;
}
function rL(u, f, d, g) {
  g === void 0 && (g = {});
  const {
    ancestorScroll: E = !0,
    ancestorResize: w = !0,
    elementResize: m = typeof ResizeObserver == "function",
    layoutShift: R = typeof IntersectionObserver == "function",
    animationFrame: T = !1
  } = g, k = pE(u), B = E || w ? [...k ? Hv(k) : [], ...Hv(f)] : [];
  B.forEach((Z) => {
    E && Z.addEventListener("scroll", d, {
      passive: !0
    }), w && Z.addEventListener("resize", d);
  });
  const A = k && R ? nL(k, d) : null;
  let z = -1, P = null;
  m && (P = new ResizeObserver((Z) => {
    let [K] = Z;
    K && K.target === k && P && (P.unobserve(f), cancelAnimationFrame(z), z = requestAnimationFrame(() => {
      var ne;
      (ne = P) == null || ne.observe(f);
    })), d();
  }), k && !T && P.observe(k), P.observe(f));
  let $, F = T ? Rc(u) : null;
  T && G();
  function G() {
    const Z = Rc(u);
    F && (Z.x !== F.x || Z.y !== F.y || Z.width !== F.width || Z.height !== F.height) && d(), F = Z, $ = requestAnimationFrame(G);
  }
  return d(), () => {
    var Z;
    B.forEach((K) => {
      E && K.removeEventListener("scroll", d), w && K.removeEventListener("resize", d);
    }), A == null || A(), (Z = P) == null || Z.disconnect(), P = null, T && cancelAnimationFrame($);
  };
}
const aL = jA, iL = zA, oL = AA, lL = FA, uL = LA, O1 = MA, sL = UA, cL = (u, f, d) => {
  const g = /* @__PURE__ */ new Map(), E = {
    platform: tL,
    ...d
  }, w = {
    ...E.platform,
    _c: g
  };
  return NA(u, f, {
    ...E,
    platform: w
  });
};
var Iy = typeof document < "u" ? N.useLayoutEffect : N.useEffect;
function Xy(u, f) {
  if (u === f)
    return !0;
  if (typeof u != typeof f)
    return !1;
  if (typeof u == "function" && u.toString() === f.toString())
    return !0;
  let d, g, E;
  if (u && f && typeof u == "object") {
    if (Array.isArray(u)) {
      if (d = u.length, d !== f.length) return !1;
      for (g = d; g-- !== 0; )
        if (!Xy(u[g], f[g]))
          return !1;
      return !0;
    }
    if (E = Object.keys(u), d = E.length, d !== Object.keys(f).length)
      return !1;
    for (g = d; g-- !== 0; )
      if (!{}.hasOwnProperty.call(f, E[g]))
        return !1;
    for (g = d; g-- !== 0; ) {
      const w = E[g];
      if (!(w === "_owner" && u.$$typeof) && !Xy(u[w], f[w]))
        return !1;
    }
    return !0;
  }
  return u !== u && f !== f;
}
function uR(u) {
  return typeof window > "u" ? 1 : (u.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function N1(u, f) {
  const d = uR(u);
  return Math.round(f * d) / d;
}
function M1(u) {
  const f = N.useRef(u);
  return Iy(() => {
    f.current = u;
  }), f;
}
function fL(u) {
  u === void 0 && (u = {});
  const {
    placement: f = "bottom",
    strategy: d = "absolute",
    middleware: g = [],
    platform: E,
    elements: {
      reference: w,
      floating: m
    } = {},
    transform: R = !0,
    whileElementsMounted: T,
    open: k
  } = u, [B, A] = N.useState({
    x: 0,
    y: 0,
    strategy: d,
    placement: f,
    middlewareData: {},
    isPositioned: !1
  }), [z, P] = N.useState(g);
  Xy(z, g) || P(g);
  const [$, F] = N.useState(null), [G, Z] = N.useState(null), K = N.useCallback((se) => {
    se !== we.current && (we.current = se, F(se));
  }, []), ne = N.useCallback((se) => {
    se !== pe.current && (pe.current = se, Z(se));
  }, []), ce = w || $, re = m || G, we = N.useRef(null), pe = N.useRef(null), He = N.useRef(B), st = T != null, Qe = M1(T), De = M1(E), ot = N.useCallback(() => {
    if (!we.current || !pe.current)
      return;
    const se = {
      placement: f,
      strategy: d,
      middleware: z
    };
    De.current && (se.platform = De.current), cL(we.current, pe.current, se).then((le) => {
      const ge = {
        ...le,
        isPositioned: !0
      };
      ke.current && !Xy(He.current, ge) && (He.current = ge, kd.flushSync(() => {
        A(ge);
      }));
    });
  }, [z, f, d, De]);
  Iy(() => {
    k === !1 && He.current.isPositioned && (He.current.isPositioned = !1, A((se) => ({
      ...se,
      isPositioned: !1
    })));
  }, [k]);
  const ke = N.useRef(!1);
  Iy(() => (ke.current = !0, () => {
    ke.current = !1;
  }), []), Iy(() => {
    if (ce && (we.current = ce), re && (pe.current = re), ce && re) {
      if (Qe.current)
        return Qe.current(ce, re, ot);
      ot();
    }
  }, [ce, re, ot, Qe, st]);
  const Ae = N.useMemo(() => ({
    reference: we,
    floating: pe,
    setReference: K,
    setFloating: ne
  }), [K, ne]), de = N.useMemo(() => ({
    reference: ce,
    floating: re
  }), [ce, re]), Le = N.useMemo(() => {
    const se = {
      position: d,
      left: 0,
      top: 0
    };
    if (!de.floating)
      return se;
    const le = N1(de.floating, B.x), ge = N1(de.floating, B.y);
    return R ? {
      ...se,
      transform: "translate(" + le + "px, " + ge + "px)",
      ...uR(de.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: d,
      left: le,
      top: ge
    };
  }, [d, R, de.floating, B.x, B.y]);
  return N.useMemo(() => ({
    ...B,
    update: ot,
    refs: Ae,
    elements: de,
    floatingStyles: Le
  }), [B, ot, Ae, de, Le]);
}
const dL = (u) => {
  function f(d) {
    return {}.hasOwnProperty.call(d, "current");
  }
  return {
    name: "arrow",
    options: u,
    fn(d) {
      const {
        element: g,
        padding: E
      } = typeof u == "function" ? u(d) : u;
      return g && f(g) ? g.current != null ? O1({
        element: g.current,
        padding: E
      }).fn(d) : {} : g ? O1({
        element: g,
        padding: E
      }).fn(d) : {};
    }
  };
}, pL = (u, f) => ({
  ...aL(u),
  options: [u, f]
}), vL = (u, f) => ({
  ...iL(u),
  options: [u, f]
}), hL = (u, f) => ({
  ...sL(u),
  options: [u, f]
}), mL = (u, f) => ({
  ...oL(u),
  options: [u, f]
}), yL = (u, f) => ({
  ...lL(u),
  options: [u, f]
}), gL = (u, f) => ({
  ...uL(u),
  options: [u, f]
}), SL = (u, f) => ({
  ...dL(u),
  options: [u, f]
});
var xL = "Arrow", sR = N.forwardRef((u, f) => {
  const { children: d, width: g = 10, height: E = 5, ...w } = u;
  return /* @__PURE__ */ D.jsx(
    $n.svg,
    {
      ...w,
      ref: f,
      width: g,
      height: E,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: u.asChild ? d : /* @__PURE__ */ D.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
sR.displayName = xL;
var EL = sR;
function CL(u) {
  const [f, d] = N.useState(void 0);
  return ja(() => {
    if (u) {
      d({ width: u.offsetWidth, height: u.offsetHeight });
      const g = new ResizeObserver((E) => {
        if (!Array.isArray(E) || !E.length)
          return;
        const w = E[0];
        let m, R;
        if ("borderBoxSize" in w) {
          const T = w.borderBoxSize, k = Array.isArray(T) ? T[0] : T;
          m = k.inlineSize, R = k.blockSize;
        } else
          m = u.offsetWidth, R = u.offsetHeight;
        d({ width: m, height: R });
      });
      return g.observe(u, { box: "border-box" }), () => g.unobserve(u);
    } else
      d(void 0);
  }, [u]), f;
}
var vE = "Popper", [cR, ag] = eg(vE), [wL, fR] = cR(vE), dR = (u) => {
  const { __scopePopper: f, children: d } = u, [g, E] = N.useState(null);
  return /* @__PURE__ */ D.jsx(wL, { scope: f, anchor: g, onAnchorChange: E, children: d });
};
dR.displayName = vE;
var pR = "PopperAnchor", vR = N.forwardRef(
  (u, f) => {
    const { __scopePopper: d, virtualRef: g, ...E } = u, w = fR(pR, d), m = N.useRef(null), R = dr(f, m);
    return N.useEffect(() => {
      w.onAnchorChange((g == null ? void 0 : g.current) || m.current);
    }), g ? null : /* @__PURE__ */ D.jsx($n.div, { ...E, ref: R });
  }
);
vR.displayName = pR;
var hE = "PopperContent", [bL, RL] = cR(hE), hR = N.forwardRef(
  (u, f) => {
    var Te, Ie, tt, lt, Ct, Rt;
    const {
      __scopePopper: d,
      side: g = "bottom",
      sideOffset: E = 0,
      align: w = "center",
      alignOffset: m = 0,
      arrowPadding: R = 0,
      avoidCollisions: T = !0,
      collisionBoundary: k = [],
      collisionPadding: B = 0,
      sticky: A = "partial",
      hideWhenDetached: z = !1,
      updatePositionStrategy: P = "optimized",
      onPlaced: $,
      ...F
    } = u, G = fR(hE, d), [Z, K] = N.useState(null), ne = dr(f, (At) => K(At)), [ce, re] = N.useState(null), we = CL(ce), pe = (we == null ? void 0 : we.width) ?? 0, He = (we == null ? void 0 : we.height) ?? 0, st = g + (w !== "center" ? "-" + w : ""), Qe = typeof B == "number" ? B : { top: 0, right: 0, bottom: 0, left: 0, ...B }, De = Array.isArray(k) ? k : [k], ot = De.length > 0, ke = {
      padding: Qe,
      boundary: De.filter(_L),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ot
    }, { refs: Ae, floatingStyles: de, placement: Le, isPositioned: se, middlewareData: le } = fL({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: st,
      whileElementsMounted: (...At) => rL(...At, {
        animationFrame: P === "always"
      }),
      elements: {
        reference: G.anchor
      },
      middleware: [
        pL({ mainAxis: E + He, alignmentAxis: m }),
        T && vL({
          mainAxis: !0,
          crossAxis: !1,
          limiter: A === "partial" ? hL() : void 0,
          ...ke
        }),
        T && mL({ ...ke }),
        yL({
          ...ke,
          apply: ({ elements: At, rects: rn, availableWidth: yn, availableHeight: vn }) => {
            const { width: sn, height: Rr } = rn.reference, Xn = At.floating.style;
            Xn.setProperty("--radix-popper-available-width", `${yn}px`), Xn.setProperty("--radix-popper-available-height", `${vn}px`), Xn.setProperty("--radix-popper-anchor-width", `${sn}px`), Xn.setProperty("--radix-popper-anchor-height", `${Rr}px`);
          }
        }),
        ce && SL({ element: ce, padding: R }),
        kL({ arrowWidth: pe, arrowHeight: He }),
        z && gL({ strategy: "referenceHidden", ...ke })
      ]
    }), [ge, be] = gR(Le), H = Xl($);
    ja(() => {
      se && (H == null || H());
    }, [se, H]);
    const ue = (Te = le.arrow) == null ? void 0 : Te.x, Je = (Ie = le.arrow) == null ? void 0 : Ie.y, et = ((tt = le.arrow) == null ? void 0 : tt.centerOffset) !== 0, [yt, vt] = N.useState();
    return ja(() => {
      Z && vt(window.getComputedStyle(Z).zIndex);
    }, [Z]), /* @__PURE__ */ D.jsx(
      "div",
      {
        ref: Ae.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...de,
          transform: se ? de.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: yt,
          "--radix-popper-transform-origin": [
            (lt = le.transformOrigin) == null ? void 0 : lt.x,
            (Ct = le.transformOrigin) == null ? void 0 : Ct.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Rt = le.hide) == null ? void 0 : Rt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: u.dir,
        children: /* @__PURE__ */ D.jsx(
          bL,
          {
            scope: d,
            placedSide: ge,
            onArrowChange: re,
            arrowX: ue,
            arrowY: Je,
            shouldHideArrow: et,
            children: /* @__PURE__ */ D.jsx(
              $n.div,
              {
                "data-side": ge,
                "data-align": be,
                ...F,
                ref: ne,
                style: {
                  ...F.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: se ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
hR.displayName = hE;
var mR = "PopperArrow", TL = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, yR = N.forwardRef(function(f, d) {
  const { __scopePopper: g, ...E } = f, w = RL(mR, g), m = TL[w.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ D.jsx(
      "span",
      {
        ref: w.onArrowChange,
        style: {
          position: "absolute",
          left: w.arrowX,
          top: w.arrowY,
          [m]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[w.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[w.placedSide],
          visibility: w.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ D.jsx(
          EL,
          {
            ...E,
            ref: d,
            style: {
              ...E.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
yR.displayName = mR;
function _L(u) {
  return u !== null;
}
var kL = (u) => ({
  name: "transformOrigin",
  options: u,
  fn(f) {
    var G, Z, K;
    const { placement: d, rects: g, middlewareData: E } = f, m = ((G = E.arrow) == null ? void 0 : G.centerOffset) !== 0, R = m ? 0 : u.arrowWidth, T = m ? 0 : u.arrowHeight, [k, B] = gR(d), A = { start: "0%", center: "50%", end: "100%" }[B], z = (((Z = E.arrow) == null ? void 0 : Z.x) ?? 0) + R / 2, P = (((K = E.arrow) == null ? void 0 : K.y) ?? 0) + T / 2;
    let $ = "", F = "";
    return k === "bottom" ? ($ = m ? A : `${z}px`, F = `${-T}px`) : k === "top" ? ($ = m ? A : `${z}px`, F = `${g.floating.height + T}px`) : k === "right" ? ($ = `${-T}px`, F = m ? A : `${P}px`) : k === "left" && ($ = `${g.floating.width + T}px`, F = m ? A : `${P}px`), { data: { x: $, y: F } };
  }
});
function gR(u) {
  const [f, d = "center"] = u.split("-");
  return [f, d];
}
var SR = dR, mE = vR, xR = hR, ER = yR, DL = "Portal", yE = N.forwardRef((u, f) => {
  var R;
  const { container: d, ...g } = u, [E, w] = N.useState(!1);
  ja(() => w(!0), []);
  const m = d || E && ((R = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : R.body);
  return m ? qM.createPortal(/* @__PURE__ */ D.jsx($n.div, { ...g, ref: f }), m) : null;
});
yE.displayName = DL;
function Kx({
  prop: u,
  defaultProp: f,
  onChange: d = () => {
  }
}) {
  const [g, E] = OL({ defaultProp: f, onChange: d }), w = u !== void 0, m = w ? u : g, R = Xl(d), T = N.useCallback(
    (k) => {
      if (w) {
        const A = typeof k == "function" ? k(u) : k;
        A !== u && R(A);
      } else
        E(k);
    },
    [w, u, E, R]
  );
  return [m, T];
}
function OL({
  defaultProp: u,
  onChange: f
}) {
  const d = N.useState(u), [g] = d, E = N.useRef(g), w = Xl(f);
  return N.useEffect(() => {
    E.current !== g && (w(g), E.current = g);
  }, [g, E, w]), d;
}
function NL(u) {
  const f = N.useRef({ value: u, previous: u });
  return N.useMemo(() => (f.current.value !== u && (f.current.previous = f.current.value, f.current.value = u), f.current.previous), [u]);
}
var ML = "VisuallyHidden", CR = N.forwardRef(
  (u, f) => /* @__PURE__ */ D.jsx(
    $n.span,
    {
      ...u,
      ref: f,
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
        ...u.style
      }
    }
  )
);
CR.displayName = ML;
var AL = function(u) {
  if (typeof document > "u")
    return null;
  var f = Array.isArray(u) ? u[0] : u;
  return f.ownerDocument.body;
}, gd = /* @__PURE__ */ new WeakMap(), Py = /* @__PURE__ */ new WeakMap(), jy = {}, Ux = 0, wR = function(u) {
  return u && (u.host || wR(u.parentNode));
}, LL = function(u, f) {
  return f.map(function(d) {
    if (u.contains(d))
      return d;
    var g = wR(d);
    return g && u.contains(g) ? g : (console.error("aria-hidden", d, "in not contained inside", u, ". Doing nothing"), null);
  }).filter(function(d) {
    return !!d;
  });
}, PL = function(u, f, d, g) {
  var E = LL(f, Array.isArray(u) ? u : [u]);
  jy[d] || (jy[d] = /* @__PURE__ */ new WeakMap());
  var w = jy[d], m = [], R = /* @__PURE__ */ new Set(), T = new Set(E), k = function(A) {
    !A || R.has(A) || (R.add(A), k(A.parentNode));
  };
  E.forEach(k);
  var B = function(A) {
    !A || T.has(A) || Array.prototype.forEach.call(A.children, function(z) {
      if (R.has(z))
        B(z);
      else
        try {
          var P = z.getAttribute(g), $ = P !== null && P !== "false", F = (gd.get(z) || 0) + 1, G = (w.get(z) || 0) + 1;
          gd.set(z, F), w.set(z, G), m.push(z), F === 1 && $ && Py.set(z, !0), G === 1 && z.setAttribute(d, "true"), $ || z.setAttribute(g, "true");
        } catch (Z) {
          console.error("aria-hidden: cannot operate on ", z, Z);
        }
    });
  };
  return B(f), R.clear(), Ux++, function() {
    m.forEach(function(A) {
      var z = gd.get(A) - 1, P = w.get(A) - 1;
      gd.set(A, z), w.set(A, P), z || (Py.has(A) || A.removeAttribute(g), Py.delete(A)), P || A.removeAttribute(d);
    }), Ux--, Ux || (gd = /* @__PURE__ */ new WeakMap(), gd = /* @__PURE__ */ new WeakMap(), Py = /* @__PURE__ */ new WeakMap(), jy = {});
  };
}, bR = function(u, f, d) {
  d === void 0 && (d = "data-aria-hidden");
  var g = Array.from(Array.isArray(u) ? u : [u]), E = AL(u);
  return E ? (g.push.apply(g, Array.from(E.querySelectorAll("[aria-live]"))), PL(g, E, d, "aria-hidden")) : function() {
    return null;
  };
}, ol = function() {
  return ol = Object.assign || function(f) {
    for (var d, g = 1, E = arguments.length; g < E; g++) {
      d = arguments[g];
      for (var w in d) Object.prototype.hasOwnProperty.call(d, w) && (f[w] = d[w]);
    }
    return f;
  }, ol.apply(this, arguments);
};
function RR(u, f) {
  var d = {};
  for (var g in u) Object.prototype.hasOwnProperty.call(u, g) && f.indexOf(g) < 0 && (d[g] = u[g]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function")
    for (var E = 0, g = Object.getOwnPropertySymbols(u); E < g.length; E++)
      f.indexOf(g[E]) < 0 && Object.prototype.propertyIsEnumerable.call(u, g[E]) && (d[g[E]] = u[g[E]]);
  return d;
}
function jL(u, f, d) {
  if (d || arguments.length === 2) for (var g = 0, E = f.length, w; g < E; g++)
    (w || !(g in f)) && (w || (w = Array.prototype.slice.call(f, 0, g)), w[g] = f[g]);
  return u.concat(w || Array.prototype.slice.call(f));
}
var By = "right-scroll-bar-position", $y = "width-before-scroll-bar", zL = "with-scroll-bars-hidden", UL = "--removed-body-scroll-bar-size";
function Fx(u, f) {
  return typeof u == "function" ? u(f) : u && (u.current = f), u;
}
function FL(u, f) {
  var d = N.useState(function() {
    return {
      // value
      value: u,
      // last callback
      callback: f,
      // "memoized" public interface
      facade: {
        get current() {
          return d.value;
        },
        set current(g) {
          var E = d.value;
          E !== g && (d.value = g, d.callback(g, E));
        }
      }
    };
  })[0];
  return d.callback = f, d.facade;
}
var HL = typeof window < "u" ? N.useLayoutEffect : N.useEffect, A1 = /* @__PURE__ */ new WeakMap();
function VL(u, f) {
  var d = FL(null, function(g) {
    return u.forEach(function(E) {
      return Fx(E, g);
    });
  });
  return HL(function() {
    var g = A1.get(d);
    if (g) {
      var E = new Set(g), w = new Set(u), m = d.current;
      E.forEach(function(R) {
        w.has(R) || Fx(R, null);
      }), w.forEach(function(R) {
        E.has(R) || Fx(R, m);
      });
    }
    A1.set(d, u);
  }, [u]), d;
}
function IL(u) {
  return u;
}
function BL(u, f) {
  f === void 0 && (f = IL);
  var d = [], g = !1, E = {
    read: function() {
      if (g)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return d.length ? d[d.length - 1] : u;
    },
    useMedium: function(w) {
      var m = f(w, g);
      return d.push(m), function() {
        d = d.filter(function(R) {
          return R !== m;
        });
      };
    },
    assignSyncMedium: function(w) {
      for (g = !0; d.length; ) {
        var m = d;
        d = [], m.forEach(w);
      }
      d = {
        push: function(R) {
          return w(R);
        },
        filter: function() {
          return d;
        }
      };
    },
    assignMedium: function(w) {
      g = !0;
      var m = [];
      if (d.length) {
        var R = d;
        d = [], R.forEach(w), m = d;
      }
      var T = function() {
        var B = m;
        m = [], B.forEach(w);
      }, k = function() {
        return Promise.resolve().then(T);
      };
      k(), d = {
        push: function(B) {
          m.push(B), k();
        },
        filter: function(B) {
          return m = m.filter(B), d;
        }
      };
    }
  };
  return E;
}
function $L(u) {
  u === void 0 && (u = {});
  var f = BL(null);
  return f.options = ol({ async: !0, ssr: !1 }, u), f;
}
var TR = function(u) {
  var f = u.sideCar, d = RR(u, ["sideCar"]);
  if (!f)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var g = f.read();
  if (!g)
    throw new Error("Sidecar medium not found");
  return N.createElement(g, ol({}, d));
};
TR.isSideCarExport = !0;
function WL(u, f) {
  return u.useMedium(f), TR;
}
var _R = $L(), Hx = function() {
}, ig = N.forwardRef(function(u, f) {
  var d = N.useRef(null), g = N.useState({
    onScrollCapture: Hx,
    onWheelCapture: Hx,
    onTouchMoveCapture: Hx
  }), E = g[0], w = g[1], m = u.forwardProps, R = u.children, T = u.className, k = u.removeScrollBar, B = u.enabled, A = u.shards, z = u.sideCar, P = u.noIsolation, $ = u.inert, F = u.allowPinchZoom, G = u.as, Z = G === void 0 ? "div" : G, K = u.gapMode, ne = RR(u, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), ce = z, re = VL([d, f]), we = ol(ol({}, ne), E);
  return N.createElement(
    N.Fragment,
    null,
    B && N.createElement(ce, { sideCar: _R, removeScrollBar: k, shards: A, noIsolation: P, inert: $, setCallbacks: w, allowPinchZoom: !!F, lockRef: d, gapMode: K }),
    m ? N.cloneElement(N.Children.only(R), ol(ol({}, we), { ref: re })) : N.createElement(Z, ol({}, we, { className: T, ref: re }), R)
  );
});
ig.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ig.classNames = {
  fullWidth: $y,
  zeroRight: By
};
var YL = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function QL() {
  if (!document)
    return null;
  var u = document.createElement("style");
  u.type = "text/css";
  var f = YL();
  return f && u.setAttribute("nonce", f), u;
}
function GL(u, f) {
  u.styleSheet ? u.styleSheet.cssText = f : u.appendChild(document.createTextNode(f));
}
function KL(u) {
  var f = document.head || document.getElementsByTagName("head")[0];
  f.appendChild(u);
}
var XL = function() {
  var u = 0, f = null;
  return {
    add: function(d) {
      u == 0 && (f = QL()) && (GL(f, d), KL(f)), u++;
    },
    remove: function() {
      u--, !u && f && (f.parentNode && f.parentNode.removeChild(f), f = null);
    }
  };
}, qL = function() {
  var u = XL();
  return function(f, d) {
    N.useEffect(function() {
      return u.add(f), function() {
        u.remove();
      };
    }, [f && d]);
  };
}, kR = function() {
  var u = qL(), f = function(d) {
    var g = d.styles, E = d.dynamic;
    return u(g, E), null;
  };
  return f;
}, ZL = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vx = function(u) {
  return parseInt(u || "", 10) || 0;
}, JL = function(u) {
  var f = window.getComputedStyle(document.body), d = f[u === "padding" ? "paddingLeft" : "marginLeft"], g = f[u === "padding" ? "paddingTop" : "marginTop"], E = f[u === "padding" ? "paddingRight" : "marginRight"];
  return [Vx(d), Vx(g), Vx(E)];
}, e2 = function(u) {
  if (u === void 0 && (u = "margin"), typeof window > "u")
    return ZL;
  var f = JL(u), d = document.documentElement.clientWidth, g = window.innerWidth;
  return {
    left: f[0],
    top: f[1],
    right: f[2],
    gap: Math.max(0, g - d + f[2] - f[0])
  };
}, t2 = kR(), wd = "data-scroll-locked", n2 = function(u, f, d, g) {
  var E = u.left, w = u.top, m = u.right, R = u.gap;
  return d === void 0 && (d = "margin"), `
  .`.concat(zL, ` {
   overflow: hidden `).concat(g, `;
   padding-right: `).concat(R, "px ").concat(g, `;
  }
  body[`).concat(wd, `] {
    overflow: hidden `).concat(g, `;
    overscroll-behavior: contain;
    `).concat([
    f && "position: relative ".concat(g, ";"),
    d === "margin" && `
    padding-left: `.concat(E, `px;
    padding-top: `).concat(w, `px;
    padding-right: `).concat(m, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(R, "px ").concat(g, `;
    `),
    d === "padding" && "padding-right: ".concat(R, "px ").concat(g, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(By, ` {
    right: `).concat(R, "px ").concat(g, `;
  }
  
  .`).concat($y, ` {
    margin-right: `).concat(R, "px ").concat(g, `;
  }
  
  .`).concat(By, " .").concat(By, ` {
    right: 0 `).concat(g, `;
  }
  
  .`).concat($y, " .").concat($y, ` {
    margin-right: 0 `).concat(g, `;
  }
  
  body[`).concat(wd, `] {
    `).concat(UL, ": ").concat(R, `px;
  }
`);
}, L1 = function() {
  var u = parseInt(document.body.getAttribute(wd) || "0", 10);
  return isFinite(u) ? u : 0;
}, r2 = function() {
  N.useEffect(function() {
    return document.body.setAttribute(wd, (L1() + 1).toString()), function() {
      var u = L1() - 1;
      u <= 0 ? document.body.removeAttribute(wd) : document.body.setAttribute(wd, u.toString());
    };
  }, []);
}, a2 = function(u) {
  var f = u.noRelative, d = u.noImportant, g = u.gapMode, E = g === void 0 ? "margin" : g;
  r2();
  var w = N.useMemo(function() {
    return e2(E);
  }, [E]);
  return N.createElement(t2, { styles: n2(w, !f, E, d ? "" : "!important") });
}, Xx = !1;
if (typeof window < "u")
  try {
    var zy = Object.defineProperty({}, "passive", {
      get: function() {
        return Xx = !0, !0;
      }
    });
    window.addEventListener("test", zy, zy), window.removeEventListener("test", zy, zy);
  } catch {
    Xx = !1;
  }
var Sd = Xx ? { passive: !1 } : !1, i2 = function(u) {
  return u.tagName === "TEXTAREA";
}, DR = function(u, f) {
  var d = window.getComputedStyle(u);
  return (
    // not-not-scrollable
    d[f] !== "hidden" && // contains scroll inside self
    !(d.overflowY === d.overflowX && !i2(u) && d[f] === "visible")
  );
}, o2 = function(u) {
  return DR(u, "overflowY");
}, l2 = function(u) {
  return DR(u, "overflowX");
}, P1 = function(u, f) {
  var d = f.ownerDocument, g = f;
  do {
    typeof ShadowRoot < "u" && g instanceof ShadowRoot && (g = g.host);
    var E = OR(u, g);
    if (E) {
      var w = NR(u, g), m = w[1], R = w[2];
      if (m > R)
        return !0;
    }
    g = g.parentNode;
  } while (g && g !== d.body);
  return !1;
}, u2 = function(u) {
  var f = u.scrollTop, d = u.scrollHeight, g = u.clientHeight;
  return [
    f,
    d,
    g
  ];
}, s2 = function(u) {
  var f = u.scrollLeft, d = u.scrollWidth, g = u.clientWidth;
  return [
    f,
    d,
    g
  ];
}, OR = function(u, f) {
  return u === "v" ? o2(f) : l2(f);
}, NR = function(u, f) {
  return u === "v" ? u2(f) : s2(f);
}, c2 = function(u, f) {
  return u === "h" && f === "rtl" ? -1 : 1;
}, f2 = function(u, f, d, g, E) {
  var w = c2(u, window.getComputedStyle(f).direction), m = w * g, R = d.target, T = f.contains(R), k = !1, B = m > 0, A = 0, z = 0;
  do {
    var P = NR(u, R), $ = P[0], F = P[1], G = P[2], Z = F - G - w * $;
    ($ || Z) && OR(u, R) && (A += Z, z += $), R instanceof ShadowRoot ? R = R.host : R = R.parentNode;
  } while (
    // portaled content
    !T && R !== document.body || // self content
    T && (f.contains(R) || f === R)
  );
  return (B && (Math.abs(A) < 1 || !E) || !B && (Math.abs(z) < 1 || !E)) && (k = !0), k;
}, Uy = function(u) {
  return "changedTouches" in u ? [u.changedTouches[0].clientX, u.changedTouches[0].clientY] : [0, 0];
}, j1 = function(u) {
  return [u.deltaX, u.deltaY];
}, z1 = function(u) {
  return u && "current" in u ? u.current : u;
}, d2 = function(u, f) {
  return u[0] === f[0] && u[1] === f[1];
}, p2 = function(u) {
  return `
  .block-interactivity-`.concat(u, ` {pointer-events: none;}
  .allow-interactivity-`).concat(u, ` {pointer-events: all;}
`);
}, v2 = 0, xd = [];
function h2(u) {
  var f = N.useRef([]), d = N.useRef([0, 0]), g = N.useRef(), E = N.useState(v2++)[0], w = N.useState(kR)[0], m = N.useRef(u);
  N.useEffect(function() {
    m.current = u;
  }, [u]), N.useEffect(function() {
    if (u.inert) {
      document.body.classList.add("block-interactivity-".concat(E));
      var F = jL([u.lockRef.current], (u.shards || []).map(z1), !0).filter(Boolean);
      return F.forEach(function(G) {
        return G.classList.add("allow-interactivity-".concat(E));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(E)), F.forEach(function(G) {
          return G.classList.remove("allow-interactivity-".concat(E));
        });
      };
    }
  }, [u.inert, u.lockRef.current, u.shards]);
  var R = N.useCallback(function(F, G) {
    if ("touches" in F && F.touches.length === 2)
      return !m.current.allowPinchZoom;
    var Z = Uy(F), K = d.current, ne = "deltaX" in F ? F.deltaX : K[0] - Z[0], ce = "deltaY" in F ? F.deltaY : K[1] - Z[1], re, we = F.target, pe = Math.abs(ne) > Math.abs(ce) ? "h" : "v";
    if ("touches" in F && pe === "h" && we.type === "range")
      return !1;
    var He = P1(pe, we);
    if (!He)
      return !0;
    if (He ? re = pe : (re = pe === "v" ? "h" : "v", He = P1(pe, we)), !He)
      return !1;
    if (!g.current && "changedTouches" in F && (ne || ce) && (g.current = re), !re)
      return !0;
    var st = g.current || re;
    return f2(st, G, F, st === "h" ? ne : ce, !0);
  }, []), T = N.useCallback(function(F) {
    var G = F;
    if (!(!xd.length || xd[xd.length - 1] !== w)) {
      var Z = "deltaY" in G ? j1(G) : Uy(G), K = f.current.filter(function(re) {
        return re.name === G.type && (re.target === G.target || G.target === re.shadowParent) && d2(re.delta, Z);
      })[0];
      if (K && K.should) {
        G.cancelable && G.preventDefault();
        return;
      }
      if (!K) {
        var ne = (m.current.shards || []).map(z1).filter(Boolean).filter(function(re) {
          return re.contains(G.target);
        }), ce = ne.length > 0 ? R(G, ne[0]) : !m.current.noIsolation;
        ce && G.cancelable && G.preventDefault();
      }
    }
  }, []), k = N.useCallback(function(F, G, Z, K) {
    var ne = { name: F, delta: G, target: Z, should: K, shadowParent: m2(Z) };
    f.current.push(ne), setTimeout(function() {
      f.current = f.current.filter(function(ce) {
        return ce !== ne;
      });
    }, 1);
  }, []), B = N.useCallback(function(F) {
    d.current = Uy(F), g.current = void 0;
  }, []), A = N.useCallback(function(F) {
    k(F.type, j1(F), F.target, R(F, u.lockRef.current));
  }, []), z = N.useCallback(function(F) {
    k(F.type, Uy(F), F.target, R(F, u.lockRef.current));
  }, []);
  N.useEffect(function() {
    return xd.push(w), u.setCallbacks({
      onScrollCapture: A,
      onWheelCapture: A,
      onTouchMoveCapture: z
    }), document.addEventListener("wheel", T, Sd), document.addEventListener("touchmove", T, Sd), document.addEventListener("touchstart", B, Sd), function() {
      xd = xd.filter(function(F) {
        return F !== w;
      }), document.removeEventListener("wheel", T, Sd), document.removeEventListener("touchmove", T, Sd), document.removeEventListener("touchstart", B, Sd);
    };
  }, []);
  var P = u.removeScrollBar, $ = u.inert;
  return N.createElement(
    N.Fragment,
    null,
    $ ? N.createElement(w, { styles: p2(E) }) : null,
    P ? N.createElement(a2, { gapMode: u.gapMode }) : null
  );
}
function m2(u) {
  for (var f = null; u !== null; )
    u instanceof ShadowRoot && (f = u.host, u = u.host), u = u.parentNode;
  return f;
}
const y2 = WL(_R, h2);
var gE = N.forwardRef(function(u, f) {
  return N.createElement(ig, ol({}, u, { ref: f, sideCar: y2 }));
});
gE.classNames = ig.classNames;
var g2 = [" ", "Enter", "ArrowUp", "ArrowDown"], S2 = [" ", "Enter"], Iv = "Select", [og, lg, x2] = tA(Iv), [Nd, $P] = eg(Iv, [
  x2,
  ag
]), ug = ag(), [E2, ms] = Nd(Iv), [C2, w2] = Nd(Iv), MR = (u) => {
  const {
    __scopeSelect: f,
    children: d,
    open: g,
    defaultOpen: E,
    onOpenChange: w,
    value: m,
    defaultValue: R,
    onValueChange: T,
    dir: k,
    name: B,
    autoComplete: A,
    disabled: z,
    required: P
  } = u, $ = ug(f), [F, G] = N.useState(null), [Z, K] = N.useState(null), [ne, ce] = N.useState(!1), re = rA(k), [we = !1, pe] = Kx({
    prop: g,
    defaultProp: E,
    onChange: w
  }), [He, st] = Kx({
    prop: m,
    defaultProp: R,
    onChange: T
  }), Qe = N.useRef(null), De = F ? !!F.closest("form") : !0, [ot, ke] = N.useState(/* @__PURE__ */ new Set()), Ae = Array.from(ot).map((de) => de.props.value).join(";");
  return /* @__PURE__ */ D.jsx(SR, { ...$, children: /* @__PURE__ */ D.jsxs(
    E2,
    {
      required: P,
      scope: f,
      trigger: F,
      onTriggerChange: G,
      valueNode: Z,
      onValueNodeChange: K,
      valueNodeHasChildren: ne,
      onValueNodeHasChildrenChange: ce,
      contentId: tg(),
      value: He,
      onValueChange: st,
      open: we,
      onOpenChange: pe,
      dir: re,
      triggerPointerDownPosRef: Qe,
      disabled: z,
      children: [
        /* @__PURE__ */ D.jsx(og.Provider, { scope: f, children: /* @__PURE__ */ D.jsx(
          C2,
          {
            scope: u.__scopeSelect,
            onNativeOptionAdd: N.useCallback((de) => {
              ke((Le) => new Set(Le).add(de));
            }, []),
            onNativeOptionRemove: N.useCallback((de) => {
              ke((Le) => {
                const se = new Set(Le);
                return se.delete(de), se;
              });
            }, []),
            children: d
          }
        ) }),
        De ? /* @__PURE__ */ D.jsxs(
          rT,
          {
            "aria-hidden": !0,
            required: P,
            tabIndex: -1,
            name: B,
            autoComplete: A,
            value: He,
            onChange: (de) => st(de.target.value),
            disabled: z,
            children: [
              He === void 0 ? /* @__PURE__ */ D.jsx("option", { value: "" }) : null,
              Array.from(ot)
            ]
          },
          Ae
        ) : null
      ]
    }
  ) });
};
MR.displayName = Iv;
var AR = "SelectTrigger", LR = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, disabled: g = !1, ...E } = u, w = ug(d), m = ms(AR, d), R = m.disabled || g, T = dr(f, m.onTriggerChange), k = lg(d), [B, A, z] = aT(($) => {
      const F = k().filter((K) => !K.disabled), G = F.find((K) => K.value === m.value), Z = iT(F, $, G);
      Z !== void 0 && m.onValueChange(Z.value);
    }), P = () => {
      R || (m.onOpenChange(!0), z());
    };
    return /* @__PURE__ */ D.jsx(mE, { asChild: !0, ...w, children: /* @__PURE__ */ D.jsx(
      $n.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": m.contentId,
        "aria-expanded": m.open,
        "aria-required": m.required,
        "aria-autocomplete": "none",
        dir: m.dir,
        "data-state": m.open ? "open" : "closed",
        disabled: R,
        "data-disabled": R ? "" : void 0,
        "data-placeholder": nT(m.value) ? "" : void 0,
        ...E,
        ref: T,
        onClick: Bn(E.onClick, ($) => {
          $.currentTarget.focus();
        }),
        onPointerDown: Bn(E.onPointerDown, ($) => {
          const F = $.target;
          F.hasPointerCapture($.pointerId) && F.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (P(), m.triggerPointerDownPosRef.current = {
            x: Math.round($.pageX),
            y: Math.round($.pageY)
          }, $.preventDefault());
        }),
        onKeyDown: Bn(E.onKeyDown, ($) => {
          const F = B.current !== "";
          !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && A($.key), !(F && $.key === " ") && g2.includes($.key) && (P(), $.preventDefault());
        })
      }
    ) });
  }
);
LR.displayName = AR;
var PR = "SelectValue", jR = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, className: g, style: E, children: w, placeholder: m = "", ...R } = u, T = ms(PR, d), { onValueNodeHasChildrenChange: k } = T, B = w !== void 0, A = dr(f, T.onValueNodeChange);
    return ja(() => {
      k(B);
    }, [k, B]), /* @__PURE__ */ D.jsx(
      $n.span,
      {
        ...R,
        ref: A,
        style: { pointerEvents: "none" },
        children: nT(T.value) ? /* @__PURE__ */ D.jsx(D.Fragment, { children: m }) : w
      }
    );
  }
);
jR.displayName = PR;
var b2 = "SelectIcon", zR = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, children: g, ...E } = u;
    return /* @__PURE__ */ D.jsx($n.span, { "aria-hidden": !0, ...E, ref: f, children: g || "▼" });
  }
);
zR.displayName = b2;
var R2 = "SelectPortal", UR = (u) => /* @__PURE__ */ D.jsx(yE, { asChild: !0, ...u });
UR.displayName = R2;
var Tc = "SelectContent", FR = N.forwardRef(
  (u, f) => {
    const d = ms(Tc, u.__scopeSelect), [g, E] = N.useState();
    if (ja(() => {
      E(new DocumentFragment());
    }, []), !d.open) {
      const w = g;
      return w ? kd.createPortal(
        /* @__PURE__ */ D.jsx(HR, { scope: u.__scopeSelect, children: /* @__PURE__ */ D.jsx(og.Slot, { scope: u.__scopeSelect, children: /* @__PURE__ */ D.jsx("div", { children: u.children }) }) }),
        w
      ) : null;
    }
    return /* @__PURE__ */ D.jsx(VR, { ...u, ref: f });
  }
);
FR.displayName = Tc;
var Kl = 10, [HR, ys] = Nd(Tc), T2 = "SelectContentImpl", VR = N.forwardRef(
  (u, f) => {
    const {
      __scopeSelect: d,
      position: g = "item-aligned",
      onCloseAutoFocus: E,
      onEscapeKeyDown: w,
      onPointerDownOutside: m,
      //
      // PopperContent props
      side: R,
      sideOffset: T,
      align: k,
      alignOffset: B,
      arrowPadding: A,
      collisionBoundary: z,
      collisionPadding: P,
      sticky: $,
      hideWhenDetached: F,
      avoidCollisions: G,
      //
      ...Z
    } = u, K = ms(Tc, d), [ne, ce] = N.useState(null), [re, we] = N.useState(null), pe = dr(f, (Te) => ce(Te)), [He, st] = N.useState(null), [Qe, De] = N.useState(
      null
    ), ot = lg(d), [ke, Ae] = N.useState(!1), de = N.useRef(!1);
    N.useEffect(() => {
      if (ne) return bR(ne);
    }, [ne]), Z1();
    const Le = N.useCallback(
      (Te) => {
        const [Ie, ...tt] = ot().map((Rt) => Rt.ref.current), [lt] = tt.slice(-1), Ct = document.activeElement;
        for (const Rt of Te)
          if (Rt === Ct || (Rt == null || Rt.scrollIntoView({ block: "nearest" }), Rt === Ie && re && (re.scrollTop = 0), Rt === lt && re && (re.scrollTop = re.scrollHeight), Rt == null || Rt.focus(), document.activeElement !== Ct)) return;
      },
      [ot, re]
    ), se = N.useCallback(
      () => Le([He, ne]),
      [Le, He, ne]
    );
    N.useEffect(() => {
      ke && se();
    }, [ke, se]);
    const { onOpenChange: le, triggerPointerDownPosRef: ge } = K;
    N.useEffect(() => {
      if (ne) {
        let Te = { x: 0, y: 0 };
        const Ie = (lt) => {
          var Ct, Rt;
          Te = {
            x: Math.abs(Math.round(lt.pageX) - (((Ct = ge.current) == null ? void 0 : Ct.x) ?? 0)),
            y: Math.abs(Math.round(lt.pageY) - (((Rt = ge.current) == null ? void 0 : Rt.y) ?? 0))
          };
        }, tt = (lt) => {
          Te.x <= 10 && Te.y <= 10 ? lt.preventDefault() : ne.contains(lt.target) || le(!1), document.removeEventListener("pointermove", Ie), ge.current = null;
        };
        return ge.current !== null && (document.addEventListener("pointermove", Ie), document.addEventListener("pointerup", tt, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Ie), document.removeEventListener("pointerup", tt, { capture: !0 });
        };
      }
    }, [ne, le, ge]), N.useEffect(() => {
      const Te = () => le(!1);
      return window.addEventListener("blur", Te), window.addEventListener("resize", Te), () => {
        window.removeEventListener("blur", Te), window.removeEventListener("resize", Te);
      };
    }, [le]);
    const [be, H] = aT((Te) => {
      const Ie = ot().filter((Ct) => !Ct.disabled), tt = Ie.find((Ct) => Ct.ref.current === document.activeElement), lt = iT(Ie, Te, tt);
      lt && setTimeout(() => lt.ref.current.focus());
    }), ue = N.useCallback(
      (Te, Ie, tt) => {
        const lt = !de.current && !tt;
        (K.value !== void 0 && K.value === Ie || lt) && (st(Te), lt && (de.current = !0));
      },
      [K.value]
    ), Je = N.useCallback(() => ne == null ? void 0 : ne.focus(), [ne]), et = N.useCallback(
      (Te, Ie, tt) => {
        const lt = !de.current && !tt;
        (K.value !== void 0 && K.value === Ie || lt) && De(Te);
      },
      [K.value]
    ), yt = g === "popper" ? qx : IR, vt = yt === qx ? {
      side: R,
      sideOffset: T,
      align: k,
      alignOffset: B,
      arrowPadding: A,
      collisionBoundary: z,
      collisionPadding: P,
      sticky: $,
      hideWhenDetached: F,
      avoidCollisions: G
    } : {};
    return /* @__PURE__ */ D.jsx(
      HR,
      {
        scope: d,
        content: ne,
        viewport: re,
        onViewportChange: we,
        itemRefCallback: ue,
        selectedItem: He,
        onItemLeave: Je,
        itemTextRefCallback: et,
        focusSelectedItem: se,
        selectedItemText: Qe,
        position: g,
        isPositioned: ke,
        searchRef: be,
        children: /* @__PURE__ */ D.jsx(gE, { as: Rd, allowPinchZoom: !0, children: /* @__PURE__ */ D.jsx(
          lE,
          {
            asChild: !0,
            trapped: K.open,
            onMountAutoFocus: (Te) => {
              Te.preventDefault();
            },
            onUnmountAutoFocus: Bn(E, (Te) => {
              var Ie;
              (Ie = K.trigger) == null || Ie.focus({ preventScroll: !0 }), Te.preventDefault();
            }),
            children: /* @__PURE__ */ D.jsx(
              oE,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: w,
                onPointerDownOutside: m,
                onFocusOutside: (Te) => Te.preventDefault(),
                onDismiss: () => K.onOpenChange(!1),
                children: /* @__PURE__ */ D.jsx(
                  yt,
                  {
                    role: "listbox",
                    id: K.contentId,
                    "data-state": K.open ? "open" : "closed",
                    dir: K.dir,
                    onContextMenu: (Te) => Te.preventDefault(),
                    ...Z,
                    ...vt,
                    onPlaced: () => Ae(!0),
                    ref: pe,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...Z.style
                    },
                    onKeyDown: Bn(Z.onKeyDown, (Te) => {
                      const Ie = Te.ctrlKey || Te.altKey || Te.metaKey;
                      if (Te.key === "Tab" && Te.preventDefault(), !Ie && Te.key.length === 1 && H(Te.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Te.key)) {
                        let lt = ot().filter((Ct) => !Ct.disabled).map((Ct) => Ct.ref.current);
                        if (["ArrowUp", "End"].includes(Te.key) && (lt = lt.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(Te.key)) {
                          const Ct = Te.target, Rt = lt.indexOf(Ct);
                          lt = lt.slice(Rt + 1);
                        }
                        setTimeout(() => Le(lt)), Te.preventDefault();
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
VR.displayName = T2;
var _2 = "SelectItemAlignedPosition", IR = N.forwardRef((u, f) => {
  const { __scopeSelect: d, onPlaced: g, ...E } = u, w = ms(Tc, d), m = ys(Tc, d), [R, T] = N.useState(null), [k, B] = N.useState(null), A = dr(f, (pe) => B(pe)), z = lg(d), P = N.useRef(!1), $ = N.useRef(!0), { viewport: F, selectedItem: G, selectedItemText: Z, focusSelectedItem: K } = m, ne = N.useCallback(() => {
    if (w.trigger && w.valueNode && R && k && F && G && Z) {
      const pe = w.trigger.getBoundingClientRect(), He = k.getBoundingClientRect(), st = w.valueNode.getBoundingClientRect(), Qe = Z.getBoundingClientRect();
      if (w.dir !== "rtl") {
        const Ct = Qe.left - He.left, Rt = st.left - Ct, At = pe.left - Rt, rn = pe.width + At, yn = Math.max(rn, He.width), vn = window.innerWidth - Kl, sn = m1(Rt, [Kl, vn - yn]);
        R.style.minWidth = rn + "px", R.style.left = sn + "px";
      } else {
        const Ct = He.right - Qe.right, Rt = window.innerWidth - st.right - Ct, At = window.innerWidth - pe.right - Rt, rn = pe.width + At, yn = Math.max(rn, He.width), vn = window.innerWidth - Kl, sn = m1(Rt, [Kl, vn - yn]);
        R.style.minWidth = rn + "px", R.style.right = sn + "px";
      }
      const De = z(), ot = window.innerHeight - Kl * 2, ke = F.scrollHeight, Ae = window.getComputedStyle(k), de = parseInt(Ae.borderTopWidth, 10), Le = parseInt(Ae.paddingTop, 10), se = parseInt(Ae.borderBottomWidth, 10), le = parseInt(Ae.paddingBottom, 10), ge = de + Le + ke + le + se, be = Math.min(G.offsetHeight * 5, ge), H = window.getComputedStyle(F), ue = parseInt(H.paddingTop, 10), Je = parseInt(H.paddingBottom, 10), et = pe.top + pe.height / 2 - Kl, yt = ot - et, vt = G.offsetHeight / 2, Te = G.offsetTop + vt, Ie = de + Le + Te, tt = ge - Ie;
      if (Ie <= et) {
        const Ct = G === De[De.length - 1].ref.current;
        R.style.bottom = "0px";
        const Rt = k.clientHeight - F.offsetTop - F.offsetHeight, At = Math.max(
          yt,
          vt + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Ct ? Je : 0) + Rt + se
        ), rn = Ie + At;
        R.style.height = rn + "px";
      } else {
        const Ct = G === De[0].ref.current;
        R.style.top = "0px";
        const At = Math.max(
          et,
          de + F.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Ct ? ue : 0) + vt
        ) + tt;
        R.style.height = At + "px", F.scrollTop = Ie - et + F.offsetTop;
      }
      R.style.margin = `${Kl}px 0`, R.style.minHeight = be + "px", R.style.maxHeight = ot + "px", g == null || g(), requestAnimationFrame(() => P.current = !0);
    }
  }, [
    z,
    w.trigger,
    w.valueNode,
    R,
    k,
    F,
    G,
    Z,
    w.dir,
    g
  ]);
  ja(() => ne(), [ne]);
  const [ce, re] = N.useState();
  ja(() => {
    k && re(window.getComputedStyle(k).zIndex);
  }, [k]);
  const we = N.useCallback(
    (pe) => {
      pe && $.current === !0 && (ne(), K == null || K(), $.current = !1);
    },
    [ne, K]
  );
  return /* @__PURE__ */ D.jsx(
    D2,
    {
      scope: d,
      contentWrapper: R,
      shouldExpandOnScrollRef: P,
      onScrollButtonChange: we,
      children: /* @__PURE__ */ D.jsx(
        "div",
        {
          ref: T,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: ce
          },
          children: /* @__PURE__ */ D.jsx(
            $n.div,
            {
              ...E,
              ref: A,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...E.style
              }
            }
          )
        }
      )
    }
  );
});
IR.displayName = _2;
var k2 = "SelectPopperPosition", qx = N.forwardRef((u, f) => {
  const {
    __scopeSelect: d,
    align: g = "start",
    collisionPadding: E = Kl,
    ...w
  } = u, m = ug(d);
  return /* @__PURE__ */ D.jsx(
    xR,
    {
      ...m,
      ...w,
      ref: f,
      align: g,
      collisionPadding: E,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...w.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
qx.displayName = k2;
var [D2, SE] = Nd(Tc, {}), Zx = "SelectViewport", BR = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, nonce: g, ...E } = u, w = ys(Zx, d), m = SE(Zx, d), R = dr(f, w.onViewportChange), T = N.useRef(0);
    return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
      /* @__PURE__ */ D.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: g
        }
      ),
      /* @__PURE__ */ D.jsx(og.Slot, { scope: d, children: /* @__PURE__ */ D.jsx(
        $n.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...E,
          ref: R,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...E.style
          },
          onScroll: Bn(E.onScroll, (k) => {
            const B = k.currentTarget, { contentWrapper: A, shouldExpandOnScrollRef: z } = m;
            if (z != null && z.current && A) {
              const P = Math.abs(T.current - B.scrollTop);
              if (P > 0) {
                const $ = window.innerHeight - Kl * 2, F = parseFloat(A.style.minHeight), G = parseFloat(A.style.height), Z = Math.max(F, G);
                if (Z < $) {
                  const K = Z + P, ne = Math.min($, K), ce = K - ne;
                  A.style.height = ne + "px", A.style.bottom === "0px" && (B.scrollTop = ce > 0 ? ce : 0, A.style.justifyContent = "flex-end");
                }
              }
            }
            T.current = B.scrollTop;
          })
        }
      ) })
    ] });
  }
);
BR.displayName = Zx;
var $R = "SelectGroup", [O2, N2] = Nd($R), M2 = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, ...g } = u, E = tg();
    return /* @__PURE__ */ D.jsx(O2, { scope: d, id: E, children: /* @__PURE__ */ D.jsx($n.div, { role: "group", "aria-labelledby": E, ...g, ref: f }) });
  }
);
M2.displayName = $R;
var WR = "SelectLabel", YR = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, ...g } = u, E = N2(WR, d);
    return /* @__PURE__ */ D.jsx($n.div, { id: E.id, ...g, ref: f });
  }
);
YR.displayName = WR;
var qy = "SelectItem", [A2, QR] = Nd(qy), GR = N.forwardRef(
  (u, f) => {
    const {
      __scopeSelect: d,
      value: g,
      disabled: E = !1,
      textValue: w,
      ...m
    } = u, R = ms(qy, d), T = ys(qy, d), k = R.value === g, [B, A] = N.useState(w ?? ""), [z, P] = N.useState(!1), $ = dr(
      f,
      (Z) => {
        var K;
        return (K = T.itemRefCallback) == null ? void 0 : K.call(T, Z, g, E);
      }
    ), F = tg(), G = () => {
      E || (R.onValueChange(g), R.onOpenChange(!1));
    };
    if (g === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ D.jsx(
      A2,
      {
        scope: d,
        value: g,
        disabled: E,
        textId: F,
        isSelected: k,
        onItemTextChange: N.useCallback((Z) => {
          A((K) => K || ((Z == null ? void 0 : Z.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ D.jsx(
          og.ItemSlot,
          {
            scope: d,
            value: g,
            disabled: E,
            textValue: B,
            children: /* @__PURE__ */ D.jsx(
              $n.div,
              {
                role: "option",
                "aria-labelledby": F,
                "data-highlighted": z ? "" : void 0,
                "aria-selected": k && z,
                "data-state": k ? "checked" : "unchecked",
                "aria-disabled": E || void 0,
                "data-disabled": E ? "" : void 0,
                tabIndex: E ? void 0 : -1,
                ...m,
                ref: $,
                onFocus: Bn(m.onFocus, () => P(!0)),
                onBlur: Bn(m.onBlur, () => P(!1)),
                onPointerUp: Bn(m.onPointerUp, G),
                onPointerMove: Bn(m.onPointerMove, (Z) => {
                  var K;
                  E ? (K = T.onItemLeave) == null || K.call(T) : Z.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Bn(m.onPointerLeave, (Z) => {
                  var K;
                  Z.currentTarget === document.activeElement && ((K = T.onItemLeave) == null || K.call(T));
                }),
                onKeyDown: Bn(m.onKeyDown, (Z) => {
                  var ne;
                  ((ne = T.searchRef) == null ? void 0 : ne.current) !== "" && Z.key === " " || (S2.includes(Z.key) && G(), Z.key === " " && Z.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
GR.displayName = qy;
var Uv = "SelectItemText", KR = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, className: g, style: E, ...w } = u, m = ms(Uv, d), R = ys(Uv, d), T = QR(Uv, d), k = w2(Uv, d), [B, A] = N.useState(null), z = dr(
      f,
      (Z) => A(Z),
      T.onItemTextChange,
      (Z) => {
        var K;
        return (K = R.itemTextRefCallback) == null ? void 0 : K.call(R, Z, T.value, T.disabled);
      }
    ), P = B == null ? void 0 : B.textContent, $ = N.useMemo(
      () => /* @__PURE__ */ D.jsx("option", { value: T.value, disabled: T.disabled, children: P }, T.value),
      [T.disabled, T.value, P]
    ), { onNativeOptionAdd: F, onNativeOptionRemove: G } = k;
    return ja(() => (F($), () => G($)), [F, G, $]), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
      /* @__PURE__ */ D.jsx($n.span, { id: T.textId, ...w, ref: z }),
      T.isSelected && m.valueNode && !m.valueNodeHasChildren ? kd.createPortal(w.children, m.valueNode) : null
    ] });
  }
);
KR.displayName = Uv;
var XR = "SelectItemIndicator", qR = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, ...g } = u;
    return QR(XR, d).isSelected ? /* @__PURE__ */ D.jsx($n.span, { "aria-hidden": !0, ...g, ref: f }) : null;
  }
);
qR.displayName = XR;
var Jx = "SelectScrollUpButton", ZR = N.forwardRef((u, f) => {
  const d = ys(Jx, u.__scopeSelect), g = SE(Jx, u.__scopeSelect), [E, w] = N.useState(!1), m = dr(f, g.onScrollButtonChange);
  return ja(() => {
    if (d.viewport && d.isPositioned) {
      let R = function() {
        const k = T.scrollTop > 0;
        w(k);
      };
      const T = d.viewport;
      return R(), T.addEventListener("scroll", R), () => T.removeEventListener("scroll", R);
    }
  }, [d.viewport, d.isPositioned]), E ? /* @__PURE__ */ D.jsx(
    eT,
    {
      ...u,
      ref: m,
      onAutoScroll: () => {
        const { viewport: R, selectedItem: T } = d;
        R && T && (R.scrollTop = R.scrollTop - T.offsetHeight);
      }
    }
  ) : null;
});
ZR.displayName = Jx;
var eE = "SelectScrollDownButton", JR = N.forwardRef((u, f) => {
  const d = ys(eE, u.__scopeSelect), g = SE(eE, u.__scopeSelect), [E, w] = N.useState(!1), m = dr(f, g.onScrollButtonChange);
  return ja(() => {
    if (d.viewport && d.isPositioned) {
      let R = function() {
        const k = T.scrollHeight - T.clientHeight, B = Math.ceil(T.scrollTop) < k;
        w(B);
      };
      const T = d.viewport;
      return R(), T.addEventListener("scroll", R), () => T.removeEventListener("scroll", R);
    }
  }, [d.viewport, d.isPositioned]), E ? /* @__PURE__ */ D.jsx(
    eT,
    {
      ...u,
      ref: m,
      onAutoScroll: () => {
        const { viewport: R, selectedItem: T } = d;
        R && T && (R.scrollTop = R.scrollTop + T.offsetHeight);
      }
    }
  ) : null;
});
JR.displayName = eE;
var eT = N.forwardRef((u, f) => {
  const { __scopeSelect: d, onAutoScroll: g, ...E } = u, w = ys("SelectScrollButton", d), m = N.useRef(null), R = lg(d), T = N.useCallback(() => {
    m.current !== null && (window.clearInterval(m.current), m.current = null);
  }, []);
  return N.useEffect(() => () => T(), [T]), ja(() => {
    var B;
    const k = R().find((A) => A.ref.current === document.activeElement);
    (B = k == null ? void 0 : k.ref.current) == null || B.scrollIntoView({ block: "nearest" });
  }, [R]), /* @__PURE__ */ D.jsx(
    $n.div,
    {
      "aria-hidden": !0,
      ...E,
      ref: f,
      style: { flexShrink: 0, ...E.style },
      onPointerDown: Bn(E.onPointerDown, () => {
        m.current === null && (m.current = window.setInterval(g, 50));
      }),
      onPointerMove: Bn(E.onPointerMove, () => {
        var k;
        (k = w.onItemLeave) == null || k.call(w), m.current === null && (m.current = window.setInterval(g, 50));
      }),
      onPointerLeave: Bn(E.onPointerLeave, () => {
        T();
      })
    }
  );
}), L2 = "SelectSeparator", tT = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, ...g } = u;
    return /* @__PURE__ */ D.jsx($n.div, { "aria-hidden": !0, ...g, ref: f });
  }
);
tT.displayName = L2;
var tE = "SelectArrow", P2 = N.forwardRef(
  (u, f) => {
    const { __scopeSelect: d, ...g } = u, E = ug(d), w = ms(tE, d), m = ys(tE, d);
    return w.open && m.position === "popper" ? /* @__PURE__ */ D.jsx(ER, { ...E, ...g, ref: f }) : null;
  }
);
P2.displayName = tE;
function nT(u) {
  return u === "" || u === void 0;
}
var rT = N.forwardRef(
  (u, f) => {
    const { value: d, ...g } = u, E = N.useRef(null), w = dr(f, E), m = NL(d);
    return N.useEffect(() => {
      const R = E.current, T = window.HTMLSelectElement.prototype, B = Object.getOwnPropertyDescriptor(
        T,
        "value"
      ).set;
      if (m !== d && B) {
        const A = new Event("change", { bubbles: !0 });
        B.call(R, d), R.dispatchEvent(A);
      }
    }, [m, d]), /* @__PURE__ */ D.jsx(CR, { asChild: !0, children: /* @__PURE__ */ D.jsx("select", { ...g, ref: w, defaultValue: d }) });
  }
);
rT.displayName = "BubbleSelect";
function aT(u) {
  const f = Xl(u), d = N.useRef(""), g = N.useRef(0), E = N.useCallback(
    (m) => {
      const R = d.current + m;
      f(R), function T(k) {
        d.current = k, window.clearTimeout(g.current), k !== "" && (g.current = window.setTimeout(() => T(""), 1e3));
      }(R);
    },
    [f]
  ), w = N.useCallback(() => {
    d.current = "", window.clearTimeout(g.current);
  }, []);
  return N.useEffect(() => () => window.clearTimeout(g.current), []), [d, E, w];
}
function iT(u, f, d) {
  const E = f.length > 1 && Array.from(f).every((k) => k === f[0]) ? f[0] : f, w = d ? u.indexOf(d) : -1;
  let m = j2(u, Math.max(w, 0));
  E.length === 1 && (m = m.filter((k) => k !== d));
  const T = m.find(
    (k) => k.textValue.toLowerCase().startsWith(E.toLowerCase())
  );
  return T !== d ? T : void 0;
}
function j2(u, f) {
  return u.map((d, g) => u[(f + g) % u.length]);
}
var z2 = MR, oT = LR, U2 = jR, F2 = zR, H2 = UR, lT = FR, V2 = BR, uT = YR, sT = GR, I2 = KR, B2 = qR, cT = ZR, fT = JR, dT = tT;
const U1 = z2, F1 = U2, nE = N.forwardRef(({ className: u, children: f, ...d }, g) => /* @__PURE__ */ D.jsxs(
  oT,
  {
    ref: g,
    className: ht(
      "flex h-12 md:h-9 w-full  border-[##ADADAD] items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",
      u
    ),
    ...d,
    children: [
      f,
      /* @__PURE__ */ D.jsx(F2, { asChild: !0, children: /* @__PURE__ */ D.jsx(OM, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
nE.displayName = oT.displayName;
const pT = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  cT,
  {
    ref: d,
    className: ht("flex cursor-default items-center justify-center py-1", u),
    ...f,
    children: /* @__PURE__ */ D.jsx(NM, {})
  }
));
pT.displayName = cT.displayName;
const vT = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  fT,
  {
    ref: d,
    className: ht("flex cursor-default items-center justify-center py-1", u),
    ...f,
    children: /* @__PURE__ */ D.jsx(MM, {})
  }
));
vT.displayName = fT.displayName;
const rE = N.forwardRef(({ className: u, children: f, position: d = "popper", ...g }, E) => /* @__PURE__ */ D.jsx(H2, { children: /* @__PURE__ */ D.jsxs(
  lT,
  {
    ref: E,
    className: ht(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      d === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      u
    ),
    position: d,
    ...g,
    children: [
      /* @__PURE__ */ D.jsx(pT, {}),
      /* @__PURE__ */ D.jsx(
        V2,
        {
          className: ht(
            "p-1",
            d === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: f
        }
      ),
      /* @__PURE__ */ D.jsx(vT, {})
    ]
  }
) }));
rE.displayName = lT.displayName;
const $2 = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  uT,
  {
    ref: d,
    className: ht("px-2 py-1.5 text-sm font-semibold", u),
    ...f
  }
));
$2.displayName = uT.displayName;
const aE = N.forwardRef(({ className: u, children: f, ...d }, g) => /* @__PURE__ */ D.jsxs(
  sT,
  {
    ref: g,
    className: ht(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      u
    ),
    ...d,
    children: [
      /* @__PURE__ */ D.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ D.jsx(B2, { children: /* @__PURE__ */ D.jsx(AM, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ D.jsx(I2, { children: f })
    ]
  }
));
aE.displayName = sT.displayName;
const W2 = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  dT,
  {
    ref: d,
    className: ht("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", u),
    ...f
  }
));
W2.displayName = dT.displayName;
var Y2 = "Separator", H1 = "horizontal", Q2 = ["horizontal", "vertical"], hT = N.forwardRef((u, f) => {
  const { decorative: d, orientation: g = H1, ...E } = u, w = G2(g) ? g : H1, R = d ? { role: "none" } : { "aria-orientation": w === "vertical" ? w : void 0, role: "separator" };
  return /* @__PURE__ */ D.jsx(
    $n.div,
    {
      "data-orientation": w,
      ...R,
      ...E,
      ref: f
    }
  );
});
hT.displayName = Y2;
function G2(u) {
  return Q2.includes(u);
}
var mT = hT;
const bd = N.forwardRef(({ className: u, orientation: f = "horizontal", decorative: d = !0, ...g }, E) => /* @__PURE__ */ D.jsx(
  mT,
  {
    ref: E,
    decorative: d,
    orientation: f,
    className: ht(
      "shrink-0 bg-neutral-200 dark:bg-neutral-800",
      f === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      u
    ),
    ...g
  }
));
bd.displayName = mT.displayName;
const yT = N.forwardRef(
  ({ className: u, ...f }, d) => (
    // <div className="relative w-full overflow-auto">
    /* @__PURE__ */ D.jsx("table", { ref: d, className: ht("w-full caption-bottom text-sm", u), ...f })
  )
);
yT.displayName = "Table";
const gT = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("thead", { ref: d, className: ht("[&_tr]:border-b", u), ...f }));
gT.displayName = "TableHeader";
const ST = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("tbody", { ref: d, className: ht("[&_tr:last-child]:border-0", u), ...f }));
ST.displayName = "TableBody";
const K2 = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  "tfoot",
  {
    ref: d,
    className: ht(
      "border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50",
      u
    ),
    ...f
  }
));
K2.displayName = "TableFooter";
const Wy = N.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
    "tr",
    {
      ref: d,
      className: ht(
        "border-b p-2 transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800",
        u
      ),
      ...f
    }
  )
);
Wy.displayName = "TableRow";
const xT = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  "th",
  {
    ref: d,
    className: ht(
      "h-10 px-2 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-neutral-400",
      u
    ),
    ...f
  }
));
xT.displayName = "TableHead";
const iE = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  "td",
  {
    ref: d,
    className: ht(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      u
    ),
    ...f
  }
));
iE.displayName = "TableCell";
const X2 = N.forwardRef(({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
  "caption",
  {
    ref: d,
    className: ht("mt-4 text-sm text-neutral-500 dark:text-neutral-400", u),
    ...f
  }
));
X2.displayName = "TableCaption";
var ET = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, V1 = Mn.createContext && /* @__PURE__ */ Mn.createContext(ET), q2 = ["attr", "size", "title"];
function Z2(u, f) {
  if (u == null) return {};
  var d = J2(u, f), g, E;
  if (Object.getOwnPropertySymbols) {
    var w = Object.getOwnPropertySymbols(u);
    for (E = 0; E < w.length; E++)
      g = w[E], !(f.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(u, g) && (d[g] = u[g]);
  }
  return d;
}
function J2(u, f) {
  if (u == null) return {};
  var d = {};
  for (var g in u)
    if (Object.prototype.hasOwnProperty.call(u, g)) {
      if (f.indexOf(g) >= 0) continue;
      d[g] = u[g];
    }
  return d;
}
function Zy() {
  return Zy = Object.assign ? Object.assign.bind() : function(u) {
    for (var f = 1; f < arguments.length; f++) {
      var d = arguments[f];
      for (var g in d)
        Object.prototype.hasOwnProperty.call(d, g) && (u[g] = d[g]);
    }
    return u;
  }, Zy.apply(this, arguments);
}
function I1(u, f) {
  var d = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(u);
    f && (g = g.filter(function(E) {
      return Object.getOwnPropertyDescriptor(u, E).enumerable;
    })), d.push.apply(d, g);
  }
  return d;
}
function Jy(u) {
  for (var f = 1; f < arguments.length; f++) {
    var d = arguments[f] != null ? arguments[f] : {};
    f % 2 ? I1(Object(d), !0).forEach(function(g) {
      eP(u, g, d[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(d)) : I1(Object(d)).forEach(function(g) {
      Object.defineProperty(u, g, Object.getOwnPropertyDescriptor(d, g));
    });
  }
  return u;
}
function eP(u, f, d) {
  return f = tP(f), f in u ? Object.defineProperty(u, f, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : u[f] = d, u;
}
function tP(u) {
  var f = nP(u, "string");
  return typeof f == "symbol" ? f : f + "";
}
function nP(u, f) {
  if (typeof u != "object" || !u) return u;
  var d = u[Symbol.toPrimitive];
  if (d !== void 0) {
    var g = d.call(u, f || "default");
    if (typeof g != "object") return g;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (f === "string" ? String : Number)(u);
}
function CT(u) {
  return u && u.map((f, d) => /* @__PURE__ */ Mn.createElement(f.tag, Jy({
    key: d
  }, f.attr), CT(f.child)));
}
function xE(u) {
  return (f) => /* @__PURE__ */ Mn.createElement(rP, Zy({
    attr: Jy({}, u.attr)
  }, f), CT(u.child));
}
function rP(u) {
  var f = (d) => {
    var {
      attr: g,
      size: E,
      title: w
    } = u, m = Z2(u, q2), R = E || d.size || "1em", T;
    return d.className && (T = d.className), u.className && (T = (T ? T + " " : "") + u.className), /* @__PURE__ */ Mn.createElement("svg", Zy({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, d.attr, g, m, {
      className: T,
      style: Jy(Jy({
        color: u.color || d.color
      }, d.style), u.style),
      height: R,
      width: R,
      xmlns: "http://www.w3.org/2000/svg"
    }), w && /* @__PURE__ */ Mn.createElement("title", null, w), u.children);
  };
  return V1 !== void 0 ? /* @__PURE__ */ Mn.createElement(V1.Consumer, null, (d) => f(d)) : f(ET);
}
function aP(u) {
  return xE({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" }, child: [] }] })(u);
}
function Pa({ className: u, ...f }) {
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      className: ht("animate-pulse rounded-md bg-neutral-900/10 dark:bg-neutral-50/10", u),
      ...f
    }
  );
}
const iP = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
    "h1",
    {
      ref: d,
      className: ht("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", u),
      ...f
    }
  )
);
iP.displayName = "H1";
const oP = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
    "h2",
    {
      ref: d,
      className: ht(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        u
      ),
      ...f
    }
  )
);
oP.displayName = "H2";
const lP = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
    "h2",
    {
      ref: d,
      className: ht("scroll-m-20 text-2xl font-semibold tracking-tight", u),
      ...f
    }
  )
);
lP.displayName = "H3";
const wT = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx(
    "h4",
    {
      ref: d,
      className: ht("scroll-m-20 text-xl font-semibold tracking-tight", u),
      ...f
    }
  )
);
wT.displayName = "H4";
const uP = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("p", { ref: d, className: ht("leading-7 [&:not(:first-child)]:mt-6", u), ...f })
);
uP.displayName = "P";
const sP = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("div", { ref: d, className: ht("text-lg font-semibold", u), ...f })
);
sP.displayName = "TextLarge";
const bT = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("div", { ref: d, className: ht("text-md font-semibold", u), ...f })
);
bT.displayName = "TextMedium";
const Bt = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("div", { ref: d, className: ht("text-sm font-light leading-none", u), ...f })
);
Bt.displayName = "TextSmall";
function cP(u) {
  return xE({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" }, child: [] }] })(u);
}
const fP = ({ data: u, isLoading: f }) => {
  var d, g, E, w, m, R, T, k;
  return /* @__PURE__ */ D.jsxs("div", { className: (ht("h-full "), u ? "" : "grayscale"), children: [
    f && /* @__PURE__ */ D.jsxs("div", { className: "ml-4 mt-8 h-[75dvh] flex flex-col justify-between", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "flex justify-start gap-24", children: [
        /* @__PURE__ */ D.jsx(Pa, { className: "h-[2dvh] w-[20%]" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-[2dvh] w-[20%]" })
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: "flex flex-col gap-2 pt-8", children: [
        /* @__PURE__ */ D.jsx(Pa, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-72" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-72" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-40" })
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: "flex flex-col gap-2 pt-8", children: [
        /* @__PURE__ */ D.jsx(Pa, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-60" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-84" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-32" })
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: "flex flex-col gap-2 py-8 ", children: [
        /* @__PURE__ */ D.jsx(Pa, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-72" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-72" }),
        /* @__PURE__ */ D.jsx(Pa, { className: "h-4 w-24" })
      ] }),
      /* @__PURE__ */ D.jsx(Pa, { className: "h-[12dvh] w-[100%]" })
    ] }),
    !f && /* @__PURE__ */ D.jsxs("div", { className: ht("md:bg-[#F3F5FD] flex flex-col relative h-[74dvh] "), children: [
      /* @__PURE__ */ D.jsxs("div", { className: "flex justify-between p-4 items-center relative top-1", children: [
        /* @__PURE__ */ D.jsx(wT, { className: "text-[#297FFF]", children: "Summary" }),
        /* @__PURE__ */ D.jsxs(
          "div",
          {
            className: ht(
              "font-bold flex items-center gap-2 absolute right-16",
              (u == null ? void 0 : u.status) === 1 ? "text-green-500" : (u == null ? void 0 : u.status) === 4 ? "text-yellow-500" : ""
            ),
            children: [
              /* @__PURE__ */ D.jsx(cP, { size: "8px" }),
              /* @__PURE__ */ D.jsx(Bt, { className: "inline", children: (u == null ? void 0 : u.status) === 4 ? "Pending" : "Active" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ D.jsx(bd, { className: "mt-[1vh] w-full" }),
      /* @__PURE__ */ D.jsxs("div", { className: "p-4 flex flex-col gap-2 ", children: [
        /* @__PURE__ */ D.jsx(Bt, { className: "inline font-bold text-sm ", children: "Contact Information" }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Name:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: (d = u == null ? void 0 : u.customer) == null ? void 0 : d.name })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Phone Number:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: (g = u == null ? void 0 : u.customer) == null ? void 0 : g.phone })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Email ID:",
          " ",
          /* @__PURE__ */ D.jsxs(Bt, { className: "inline text-black text-xs", children: [
            " ",
            ((E = u == null ? void 0 : u.customer) == null ? void 0 : E.email) ?? "karan@samsung.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ D.jsx(bd, {}),
      /* @__PURE__ */ D.jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ D.jsx(Bt, { className: "inline font-bold text-sm color-[#7E7E7E]", children: "Plan Details" }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Plan Name:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: u == null ? void 0 : u.display_plan_name })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Plan Serial Number:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: (u && (u == null ? void 0 : u.id)) ?? "" })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Warranty Start Date:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: (u == null ? void 0 : u.warranty_start_date) ?? "N/A" })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Warranty End Date:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: (u == null ? void 0 : u.warranty_end_date) ?? "N/A" })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#297FFF] font-bold", children: [
          "Plan MRP:",
          " ",
          /* @__PURE__ */ D.jsxs(Bt, { className: "inline", children: [
            " ",
            ((w = u == null ? void 0 : u.kitprice) == null ? void 0 : w.customer_price) ?? 1999
          ] })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#297FFF] font-bold", children: [
          "Retailer Landing Cost:",
          " ",
          /* @__PURE__ */ D.jsxs(Bt, { className: "inline", children: [
            " ",
            ((m = u == null ? void 0 : u.kitprice) == null ? void 0 : m.retailer_price) ?? 1099
          ] })
        ] })
      ] }),
      /* @__PURE__ */ D.jsx(bd, {}),
      /* @__PURE__ */ D.jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ D.jsx(Bt, { className: "inline font-bold text-sm ", children: "Product Details" }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "IMEI Number:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: (R = u == null ? void 0 : u.items[0]) == null ? void 0 : R.imeinumber })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Model:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: (T = u == null ? void 0 : u.items[0]) == null ? void 0 : T.model })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Product Purchase Date:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: u != null && u.items[0].purchasedate ? Hy(new Date(u == null ? void 0 : u.items[0].purchasedate), "dd-MM-yyyy") : "" })
        ] }),
        /* @__PURE__ */ D.jsxs(Bt, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Product Price:",
          " ",
          /* @__PURE__ */ D.jsx(Bt, { className: "inline text-black text-xs", children: ((k = u == null ? void 0 : u.items[0]) == null ? void 0 : k.price) ?? "0" })
        ] })
      ] })
    ] })
  ] });
}, dP = ({ className: u, size: f = "md", ...d }) => {
  const g = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-6"
  };
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      className: ht(
        "inline-block border-current border-t-transparent rounded-full animate-spin text-[#297FFF]",
        g[f],
        u
      ),
      ...d
    }
  );
}, RT = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("div", { ref: d, className: ht("flex", u), ...f })
);
RT.displayName = "Flex";
const pP = Mn.forwardRef(
  ({ className: u, ...f }, d) => /* @__PURE__ */ D.jsx("div", { ref: d, className: ht("block", u), ...f })
);
pP.displayName = "Box";
function vP(u) {
  return xE({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z" }, child: [] }] })(u);
}
function TT({ className: u, classNames: f, showOutsideDays: d = !0, ...g }) {
  return /* @__PURE__ */ D.jsx(
    HM,
    {
      showOutsideDays: d,
      className: ht("p-3", u),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: ht(
          Yy({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-neutral-400",
        row: "flex w-full mt-2",
        cell: ht(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-100 [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md dark:[&:has([aria-selected])]:bg-neutral-800 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50",
          g.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: ht(
          Yy({ variant: "ghost" }),
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
        ...f
      },
      ...g
    }
  );
}
TT.displayName = "Calendar";
function hP(u, f) {
  return N.useReducer((d, g) => f[d][g] ?? d, u);
}
var EE = (u) => {
  const { present: f, children: d } = u, g = mP(f), E = typeof d == "function" ? d({ present: g.isPresent }) : N.Children.only(d), w = dr(g.ref, yP(E));
  return typeof d == "function" || g.isPresent ? N.cloneElement(E, { ref: w }) : null;
};
EE.displayName = "Presence";
function mP(u) {
  const [f, d] = N.useState(), g = N.useRef({}), E = N.useRef(u), w = N.useRef("none"), m = u ? "mounted" : "unmounted", [R, T] = hP(m, {
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
  return N.useEffect(() => {
    const k = Fy(g.current);
    w.current = R === "mounted" ? k : "none";
  }, [R]), ja(() => {
    const k = g.current, B = E.current;
    if (B !== u) {
      const z = w.current, P = Fy(k);
      u ? T("MOUNT") : P === "none" || (k == null ? void 0 : k.display) === "none" ? T("UNMOUNT") : T(B && z !== P ? "ANIMATION_OUT" : "UNMOUNT"), E.current = u;
    }
  }, [u, T]), ja(() => {
    if (f) {
      const k = (A) => {
        const P = Fy(g.current).includes(A.animationName);
        A.target === f && P && kd.flushSync(() => T("ANIMATION_END"));
      }, B = (A) => {
        A.target === f && (w.current = Fy(g.current));
      };
      return f.addEventListener("animationstart", B), f.addEventListener("animationcancel", k), f.addEventListener("animationend", k), () => {
        f.removeEventListener("animationstart", B), f.removeEventListener("animationcancel", k), f.removeEventListener("animationend", k);
      };
    } else
      T("ANIMATION_END");
  }, [f, T]), {
    isPresent: ["mounted", "unmountSuspended"].includes(R),
    ref: N.useCallback((k) => {
      k && (g.current = getComputedStyle(k)), d(k);
    }, [])
  };
}
function Fy(u) {
  return (u == null ? void 0 : u.animationName) || "none";
}
function yP(u) {
  var g, E;
  let f = (g = Object.getOwnPropertyDescriptor(u.props, "ref")) == null ? void 0 : g.get, d = f && "isReactWarning" in f && f.isReactWarning;
  return d ? u.ref : (f = (E = Object.getOwnPropertyDescriptor(u, "ref")) == null ? void 0 : E.get, d = f && "isReactWarning" in f && f.isReactWarning, d ? u.props.ref : u.props.ref || u.ref);
}
var CE = "Popover", [_T, WP] = eg(CE, [
  ag
]), Bv = ag(), [gP, gs] = _T(CE), kT = (u) => {
  const {
    __scopePopover: f,
    children: d,
    open: g,
    defaultOpen: E,
    onOpenChange: w,
    modal: m = !1
  } = u, R = Bv(f), T = N.useRef(null), [k, B] = N.useState(!1), [A = !1, z] = Kx({
    prop: g,
    defaultProp: E,
    onChange: w
  });
  return /* @__PURE__ */ D.jsx(SR, { ...R, children: /* @__PURE__ */ D.jsx(
    gP,
    {
      scope: f,
      contentId: tg(),
      triggerRef: T,
      open: A,
      onOpenChange: z,
      onOpenToggle: N.useCallback(() => z((P) => !P), [z]),
      hasCustomAnchor: k,
      onCustomAnchorAdd: N.useCallback(() => B(!0), []),
      onCustomAnchorRemove: N.useCallback(() => B(!1), []),
      modal: m,
      children: d
    }
  ) });
};
kT.displayName = CE;
var DT = "PopoverAnchor", SP = N.forwardRef(
  (u, f) => {
    const { __scopePopover: d, ...g } = u, E = gs(DT, d), w = Bv(d), { onCustomAnchorAdd: m, onCustomAnchorRemove: R } = E;
    return N.useEffect(() => (m(), () => R()), [m, R]), /* @__PURE__ */ D.jsx(mE, { ...w, ...g, ref: f });
  }
);
SP.displayName = DT;
var OT = "PopoverTrigger", NT = N.forwardRef(
  (u, f) => {
    const { __scopePopover: d, ...g } = u, E = gs(OT, d), w = Bv(d), m = dr(f, E.triggerRef), R = /* @__PURE__ */ D.jsx(
      $n.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": E.open,
        "aria-controls": E.contentId,
        "data-state": jT(E.open),
        ...g,
        ref: m,
        onClick: Bn(u.onClick, E.onOpenToggle)
      }
    );
    return E.hasCustomAnchor ? R : /* @__PURE__ */ D.jsx(mE, { asChild: !0, ...w, children: R });
  }
);
NT.displayName = OT;
var wE = "PopoverPortal", [xP, EP] = _T(wE, {
  forceMount: void 0
}), MT = (u) => {
  const { __scopePopover: f, forceMount: d, children: g, container: E } = u, w = gs(wE, f);
  return /* @__PURE__ */ D.jsx(xP, { scope: f, forceMount: d, children: /* @__PURE__ */ D.jsx(EE, { present: d || w.open, children: /* @__PURE__ */ D.jsx(yE, { asChild: !0, container: E, children: g }) }) });
};
MT.displayName = wE;
var _d = "PopoverContent", AT = N.forwardRef(
  (u, f) => {
    const d = EP(_d, u.__scopePopover), { forceMount: g = d.forceMount, ...E } = u, w = gs(_d, u.__scopePopover);
    return /* @__PURE__ */ D.jsx(EE, { present: g || w.open, children: w.modal ? /* @__PURE__ */ D.jsx(CP, { ...E, ref: f }) : /* @__PURE__ */ D.jsx(wP, { ...E, ref: f }) });
  }
);
AT.displayName = _d;
var CP = N.forwardRef(
  (u, f) => {
    const d = gs(_d, u.__scopePopover), g = N.useRef(null), E = dr(f, g), w = N.useRef(!1);
    return N.useEffect(() => {
      const m = g.current;
      if (m) return bR(m);
    }, []), /* @__PURE__ */ D.jsx(gE, { as: Rd, allowPinchZoom: !0, children: /* @__PURE__ */ D.jsx(
      LT,
      {
        ...u,
        ref: E,
        trapFocus: d.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Bn(u.onCloseAutoFocus, (m) => {
          var R;
          m.preventDefault(), w.current || (R = d.triggerRef.current) == null || R.focus();
        }),
        onPointerDownOutside: Bn(
          u.onPointerDownOutside,
          (m) => {
            const R = m.detail.originalEvent, T = R.button === 0 && R.ctrlKey === !0, k = R.button === 2 || T;
            w.current = k;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Bn(
          u.onFocusOutside,
          (m) => m.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), wP = N.forwardRef(
  (u, f) => {
    const d = gs(_d, u.__scopePopover), g = N.useRef(!1), E = N.useRef(!1);
    return /* @__PURE__ */ D.jsx(
      LT,
      {
        ...u,
        ref: f,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (w) => {
          var m, R;
          (m = u.onCloseAutoFocus) == null || m.call(u, w), w.defaultPrevented || (g.current || (R = d.triggerRef.current) == null || R.focus(), w.preventDefault()), g.current = !1, E.current = !1;
        },
        onInteractOutside: (w) => {
          var T, k;
          (T = u.onInteractOutside) == null || T.call(u, w), w.defaultPrevented || (g.current = !0, w.detail.originalEvent.type === "pointerdown" && (E.current = !0));
          const m = w.target;
          ((k = d.triggerRef.current) == null ? void 0 : k.contains(m)) && w.preventDefault(), w.detail.originalEvent.type === "focusin" && E.current && w.preventDefault();
        }
      }
    );
  }
), LT = N.forwardRef(
  (u, f) => {
    const {
      __scopePopover: d,
      trapFocus: g,
      onOpenAutoFocus: E,
      onCloseAutoFocus: w,
      disableOutsidePointerEvents: m,
      onEscapeKeyDown: R,
      onPointerDownOutside: T,
      onFocusOutside: k,
      onInteractOutside: B,
      ...A
    } = u, z = gs(_d, d), P = Bv(d);
    return Z1(), /* @__PURE__ */ D.jsx(
      lE,
      {
        asChild: !0,
        loop: !0,
        trapped: g,
        onMountAutoFocus: E,
        onUnmountAutoFocus: w,
        children: /* @__PURE__ */ D.jsx(
          oE,
          {
            asChild: !0,
            disableOutsidePointerEvents: m,
            onInteractOutside: B,
            onEscapeKeyDown: R,
            onPointerDownOutside: T,
            onFocusOutside: k,
            onDismiss: () => z.onOpenChange(!1),
            children: /* @__PURE__ */ D.jsx(
              xR,
              {
                "data-state": jT(z.open),
                role: "dialog",
                id: z.contentId,
                ...P,
                ...A,
                ref: f,
                style: {
                  ...A.style,
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
), PT = "PopoverClose", bP = N.forwardRef(
  (u, f) => {
    const { __scopePopover: d, ...g } = u, E = gs(PT, d);
    return /* @__PURE__ */ D.jsx(
      $n.button,
      {
        type: "button",
        ...g,
        ref: f,
        onClick: Bn(u.onClick, () => E.onOpenChange(!1))
      }
    );
  }
);
bP.displayName = PT;
var RP = "PopoverArrow", TP = N.forwardRef(
  (u, f) => {
    const { __scopePopover: d, ...g } = u, E = Bv(d);
    return /* @__PURE__ */ D.jsx(ER, { ...E, ...g, ref: f });
  }
);
TP.displayName = RP;
function jT(u) {
  return u ? "open" : "closed";
}
var _P = kT, kP = NT, DP = MT, zT = AT;
const OP = _P, NP = kP, UT = N.forwardRef(({ className: u, align: f = "center", sideOffset: d = 4, ...g }, E) => /* @__PURE__ */ D.jsx(DP, { children: /* @__PURE__ */ D.jsx(
  zT,
  {
    ref: E,
    align: f,
    sideOffset: d,
    className: ht(
      "z-50 w-72 rounded-md border border-neutral-200 bg-white p-4 text-neutral-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      u
    ),
    ...g
  }
) }));
UT.displayName = zT.displayName;
function MP({
  className: u,
  setDateRange: f
}) {
  const [d, g] = N.useState({
    from: void 0,
    to: void 0
  }), [E, w] = N.useState(!1), m = (T) => {
    f({
      from_date: T.from,
      to_date: T.to
    });
  }, R = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ D.jsx("div", { className: ht("grid gap-2", u), children: /* @__PURE__ */ D.jsxs(OP, { open: E, onOpenChange: w, children: [
    /* @__PURE__ */ D.jsx(NP, { asChild: !0, children: /* @__PURE__ */ D.jsxs(
      Ed,
      {
        id: "date",
        variant: "outline",
        className: ht(
          "w-fit justify-start text-left font-normal",
          !d && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ D.jsx(vP, { className: "mr-2 h-4 w-4" }),
          d != null && d.from ? d.to ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
            Hy(d.from, "LLL dd, y"),
            " - ",
            Hy(d.to, "LLL dd, y")
          ] }) : Hy(d.from, "LLL dd, y") : /* @__PURE__ */ D.jsx("span", { children: "Pick a date range" })
        ]
      }
    ) }),
    /* @__PURE__ */ D.jsxs(UT, { className: "w-auto p-0", align: "start", children: [
      /* @__PURE__ */ D.jsx(
        TT,
        {
          initialFocus: !0,
          mode: "range",
          defaultMonth: d == null ? void 0 : d.from,
          selected: d,
          onSelect: g,
          numberOfMonths: 2,
          disabled: (T) => T > R
        }
      ),
      /* @__PURE__ */ D.jsx(
        Ed,
        {
          className: "ml-[40%] mb-4",
          onClick: () => {
            m(d), w(!1);
          },
          children: "Set Range"
        }
      )
    ] })
  ] }) });
}
function YP({
  columns: u,
  isBorder: f,
  data: d,
  totalCount: g,
  isDataLoading: E,
  showFilter: w,
  pagination: m,
  setPagination: R,
  filterField: T,
  setFilterField: k,
  filterInput: B,
  setFilterinput: A,
  showDownloadButton: z,
  isSideSheet: P,
  showPagination: $,
  filterFields: F,
  tableHeight: G = "75vh",
  onIndividualFilterFieldChange: Z,
  addItemToTablist: K,
  dateRange: ne,
  setDateRange: ce
}) {
  const [re, we] = N.useState([]), [pe, He] = N.useState("");
  N.useRef();
  const [st, Qe] = N.useState(), De = jM({
    data: d,
    columns: u,
    getCoreRowModel: zM(),
    getPaginationRowModel: UM(),
    onColumnFiltersChange: we,
    getFilteredRowModel: FM(),
    manualPagination: !0,
    onPaginationChange: R,
    rowCount: g,
    state: {
      columnFilters: re,
      pagination: m
    }
  }), ot = () => {
    const de = [], Le = Math.floor(2.5), se = Math.ceil(De.getRowCount() / Number(De.getState().pagination.pageSize)), le = De.getState().pagination.pageIndex;
    if (se <= 5)
      for (let ge = 0; ge < se; ge++)
        de.push(ge);
    else {
      de.push(0);
      let ge = Math.max(le - Le, 1), be = Math.min(le + Le, se - 2);
      le <= Le && (ge = 1, be = 3), le >= se - Le && (ge = se - 5 + 1, be = se - 2), ge > 1 && de.push("...");
      for (let H = ge; H <= be; H++)
        de.push(H);
      be < se - 2 && de.push("..."), de.push(se - 1);
    }
    return de;
  };
  let ke = [];
  ke = u.map((de) => de.accessorKey);
  const Ae = (de) => {
    k(de);
  };
  return N.useEffect(() => {
    var de;
    d.length && (Qe(De.getRowModel().rows[0].original), He((de = De.getRowModel().rows[0]) == null ? void 0 : de.id));
  }, [d]), /* @__PURE__ */ D.jsxs(
    "div",
    {
      style: {
        height: G
      },
      className: ht("rounded-lg relative z-0 flex w-full h-full ", f ? "border" : ""),
      children: [
        /* @__PURE__ */ D.jsxs("div", { className: ht("flex flex-col h-full", P ? "w-[75%]" : "w-[100%]"), children: [
          (w || z) && /* @__PURE__ */ D.jsxs("div", { className: "flex items-left p-4 space-x-4 relative w-full", children: [
            w && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
              /* @__PURE__ */ D.jsx(
                $1,
                {
                  className: "width-[20%] max-w-[20%]",
                  placeholder: T ? `Filter by ${T}` : "Select Filter Field",
                  value: B,
                  disabled: !T,
                  onChange: (de) => {
                    R((Le) => ({
                      pageIndex: 0,
                      pageSize: m.pageSize
                    })), A(de.target.value);
                  }
                }
              ),
              /* @__PURE__ */ D.jsxs(
                U1,
                {
                  className: "absolute",
                  onValueChange: (de) => Ae(de),
                  children: [
                    /* @__PURE__ */ D.jsx(nE, { className: "w-[180px]", children: /* @__PURE__ */ D.jsx(F1, { placeholder: "Select Filter Field" }) }),
                    /* @__PURE__ */ D.jsx(rE, { className: "z-[100]", children: ke && ke.map((de) => {
                      if (c1(de) !== null)
                        return /* @__PURE__ */ D.jsx(aE, { value: de, children: c1(de) }, de);
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ D.jsx(MP, { dateRange: ne, setDateRange: ce })
            ] }),
            z && /* @__PURE__ */ D.jsx(
              Ed,
              {
                className: "rounded-full absolute top-4 right-4 hover:scale-105 transition-transform duration-300 ease-in-out transform",
                variant: "outline",
                children: /* @__PURE__ */ D.jsxs("div", { className: "flex gap-2 items-center ", children: [
                  /* @__PURE__ */ D.jsx(aP, { size: "20px" }),
                  " ",
                  /* @__PURE__ */ D.jsx(Bt, { children: "Report" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ D.jsx(bd, { className: "bg-[#EAEAEA]" }),
          /* @__PURE__ */ D.jsxs("div", { className: " max-h-[65vh] overflow-scroll w-full", children: [
            /* @__PURE__ */ D.jsxs(yT, { className: "w-full h-fit relative", children: [
              /* @__PURE__ */ D.jsxs(gT, { className: "sticky w-full top-0 z-0 bg-white p-2", children: [
                De.getHeaderGroups().map((de) => /* @__PURE__ */ D.jsx(Wy, { className: "border-[#F1F1F1]", children: de.headers.map((Le) => /* @__PURE__ */ D.jsx(xT, { className: "p-2", children: Le.isPlaceholder ? null : i1(Le.column.columnDef.header, Le.getContext()) }, Le.id)) }, de.id)),
                /* @__PURE__ */ D.jsx(Wy, { className: "border-[#F1F1F1]", children: De.getAllColumns().map((de) => /* @__PURE__ */ D.jsx(iE, {}, de.id)) })
              ] }),
              d ? /* @__PURE__ */ D.jsx(ST, { className: "w-full h-full", children: E ? /* @__PURE__ */ D.jsx(D.Fragment, {}) : (
                //ts-expect-error
                De.getRowModel().rows.map((de, Le) => /* @__PURE__ */ D.jsx(
                  Wy,
                  {
                    className: ht(
                      "border-[#F1F1F1]",
                      pe === de.id ? "bg-[#F3F5FD] hover:bg-[#F3F5FD]" : ""
                    ),
                    "data-state": de.getIsSelected() && "selected",
                    onClick: () => {
                      Qe(de.original), He(de.id);
                    },
                    children: de.getVisibleCells().map((se) => /* @__PURE__ */ D.jsx(
                      iE,
                      {
                        className: ht(
                          "d-table-cell py-4",
                          se.column.id === "claim_id" ? "cursor-pointer" : ""
                        ),
                        onClick: K ? () => {
                          if (se.column.id === "claim_id") {
                            const le = de.getVisibleCells().find((ge) => ge.column.id === "imei_no");
                            K({
                              label: se.getValue(),
                              value: se.getValue(),
                              imei_number: le ? le.getValue() : void 0
                            });
                          }
                        } : void 0,
                        children: i1(se.column.columnDef.cell, se.getContext())
                      },
                      se.id
                    ))
                  },
                  de.id
                ))
              ) }) : /* @__PURE__ */ D.jsx(RT, { className: "h-[45dvh] w-[800%] justify-center items-center", children: /* @__PURE__ */ D.jsx(bT, { children: "No Data Found..." }) })
            ] }),
            E && /* @__PURE__ */ D.jsx("div", { className: "", children: /* @__PURE__ */ D.jsx(dP, { size: "md", className: "mt-[28vh] ml-[30vw]" }) })
          ] }),
          !E && $ && /* @__PURE__ */ D.jsxs("div", { className: "mt-auto mr-2 p-2 bottom-0 flex justify-between space-x-2 w-[100%] border-t-gray-200", children: [
            /* @__PURE__ */ D.jsx("div", { className: "flex items-center gap-2 ", children: /* @__PURE__ */ D.jsx(W1, { className: "cursor-pointer", children: /* @__PURE__ */ D.jsxs(Y1, { children: [
              /* @__PURE__ */ D.jsx(Vy, { children: /* @__PURE__ */ D.jsxs(
                Ed,
                {
                  onClick: () => {
                    De.previousPage();
                  },
                  className: ht(
                    " rounded p-1 text-gray-400 bg-gray-100 w-auto ",
                    De.getState().pagination.pageIndex === 0 ? "pointer-events-none opacity-50" : void 0
                  ),
                  disabled: !De.getCanPreviousPage(),
                  children: [
                    " ",
                    /* @__PURE__ */ D.jsx(LM, { className: "size-4", "aria-hidden": "true" })
                  ]
                }
              ) }),
              /* @__PURE__ */ D.jsx("div", { className: "w-fit max-w-[310px] flex overflow-hidden gap-1", children: ot().map((de, Le) => /* @__PURE__ */ D.jsx("span", { className: "flex items-center gap-2 overflow ", children: /* @__PURE__ */ D.jsx(
                Vy,
                {
                  className: ht(
                    " text-[#7E84A3]  rounded-md hover:scale-110 hover:transition-transform hover:duration-400",
                    de === De.getState().pagination.pageIndex ? "bg-[#E6E6E6]" : "bg-white"
                  ),
                  children: /* @__PURE__ */ D.jsx(
                    Q1,
                    {
                      onClick: () => {
                        de !== "..." ? De.setPageIndex(de) : De.setPageIndex(
                          Math.ceil(
                            //@ts-expect-error
                            (ot()[Le - 1] + ot()[Le + 1]) / 2
                          )
                        );
                      },
                      children: de === "..." ? "..." : de + 1
                    }
                  )
                }
              ) }, de)) }),
              /* @__PURE__ */ D.jsx(Vy, { children: /* @__PURE__ */ D.jsx(
                Ed,
                {
                  onClick: () => {
                    De.nextPage();
                  },
                  className: ht(
                    " rounded p-1 text-gray-400 bg-gray-100 w-auto",
                    De.getState().pagination.pageIndex === Math.ceil(
                      De.getRowCount() / Number(De.getState().pagination.pageSize)
                    ) - 1 ? "pointer-events-none opacity-50" : void 0
                  ),
                  children: /* @__PURE__ */ D.jsx(PM, {})
                }
              ) })
            ] }) }) }),
            /* @__PURE__ */ D.jsxs("div", { className: "w-fit flex items-center space-x-2", children: [
              /* @__PURE__ */ D.jsxs(Bt, { className: "flex items-center gap-1 text-sm", children: [
                "Showing",
                " ",
                /* @__PURE__ */ D.jsx(Bt, { className: "font-bold", children: De.getRowModel().rows.length.toLocaleString() }),
                " ",
                "of",
                " ",
                /* @__PURE__ */ D.jsx(Bt, { className: "font-bold", children: De.getRowCount().toLocaleString() }),
                " ",
                "Items"
              ] }),
              /* @__PURE__ */ D.jsx(bd, { orientation: "vertical" }),
              /* @__PURE__ */ D.jsx(Bt, { className: "text-sm mr-2", children: "Items per page: " }),
              /* @__PURE__ */ D.jsxs(
                U1,
                {
                  onValueChange: (de) => {
                    De.setPageSize(Number(de));
                  },
                  children: [
                    /* @__PURE__ */ D.jsx(nE, { className: "w-[100px]", children: /* @__PURE__ */ D.jsx(F1, { placeholder: De.getState().pagination.pageSize }) }),
                    /* @__PURE__ */ D.jsx(rE, { children: [10, 20, 30, 40, 50].map((de) => (
                      //@ts-expect-error
                      /* @__PURE__ */ D.jsx(aE, { value: de, children: de }, de)
                    )) })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        P && /* @__PURE__ */ D.jsx("div", { className: "w-[25%] h-full overflow-scroll", children: /* @__PURE__ */ D.jsx(fP, { isLoading: E, data: st }) })
      ]
    }
  );
}
export {
  YP as DataTable
};
