import { jsx as d, Fragment as _e, jsxs as R } from "react/jsx-runtime";
import * as c from "react";
import K, { useLayoutEffect as zo, useEffect as Yn, useState as at, useRef as jo } from "react";
import { Slot as De } from "@radix-ui/react-slot";
import { cva as Uo } from "class-variance-authority";
import { clsx as Ko } from "clsx";
import { twMerge as Yo } from "tailwind-merge";
import { CaretSortIcon as Xo, ChevronUpIcon as Go, ChevronDownIcon as qo, CheckIcon as Zo, ChevronLeftIcon as Qo, ChevronRightIcon as Jo } from "@radix-ui/react-icons";
import * as Ge from "react-dom";
import ei from "react-dom";
import { useReactTable as ti, getCoreRowModel as ni, getPaginationRowModel as ri, getFilteredRowModel as oi, flexRender as wn } from "@tanstack/react-table";
import { format as st } from "date-fns";
import { DayPicker as ii } from "react-day-picker";
function A(...e) {
  return Yo(Ko(e));
}
const xn = (e) => {
  if (e) {
    if (e === "contact")
      return "Contact Number";
    if (e === "imei")
      return "Serial/IMEI No.";
    if (e === "sno" || e === "product" || e === "plan_type" || e === "purchase_date")
      return null;
  } else return "";
  return e.split("_").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}, pt = Uo(
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
), Te = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ d(r ? De : "button", { className: A(pt({ variant: t, size: n, className: e })), ref: i, ...o })
);
Te.displayName = "Button";
const Xn = c.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ d(
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
Xn.displayName = "Input";
const Gn = ({ className: e, ...t }) => /* @__PURE__ */ d(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: A("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Gn.displayName = "Pagination";
const qn = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("ul", { ref: n, className: A("flex flex-row items-center gap-1", e), ...t })
);
qn.displayName = "PaginationContent";
const ct = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("li", { ref: n, className: A("", e), ...t })
);
ct.displayName = "PaginationItem";
const Zn = ({ className: e, isActive: t, size: n = "icon", ...r }) => /* @__PURE__ */ d(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: A(
      pt({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
Zn.displayName = "PaginationLink";
function yn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function bt(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = c.createContext(s), l = n.length;
    n = [...n, s];
    function u(p) {
      const { scope: v, children: h, ...g } = p, f = (v == null ? void 0 : v[e][l]) || a, x = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ d(f.Provider, { value: x, children: h });
    }
    function m(p, v) {
      const h = (v == null ? void 0 : v[e][l]) || a, g = c.useContext(h);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [u, m];
  }
  const o = () => {
    const i = n.map((s) => c.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, ai(o, ...t)];
}
function ai(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const p = l(i)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function si(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ci(...e) {
  return (t) => e.forEach((n) => si(n, t));
}
function G(...e) {
  return c.useCallback(ci(...e), e);
}
function li(e) {
  const t = e + "CollectionProvider", [n, r] = bt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: g, children: f } = h, x = K.useRef(null), w = K.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(o, { scope: g, itemMap: w, collectionRef: x, children: f });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = K.forwardRef(
    (h, g) => {
      const { scope: f, children: x } = h, w = i(a, f), y = G(g, w.collectionRef);
      return /* @__PURE__ */ d(De, { ref: y, children: x });
    }
  );
  l.displayName = a;
  const u = e + "CollectionItemSlot", m = "data-radix-collection-item", p = K.forwardRef(
    (h, g) => {
      const { scope: f, children: x, ...w } = h, y = K.useRef(null), b = G(g, y), C = i(u, f);
      return K.useEffect(() => (C.itemMap.set(y, { ref: y, ...w }), () => void C.itemMap.delete(y))), /* @__PURE__ */ d(De, { [m]: "", ref: b, children: x });
    }
  );
  p.displayName = u;
  function v(h) {
    const g = i(e + "CollectionConsumer", h);
    return K.useCallback(() => {
      const x = g.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (C, N) => w.indexOf(C.ref.current) - w.indexOf(N.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: l, ItemSlot: p },
    v,
    r
  ];
}
var ui = c.createContext(void 0);
function di(e) {
  const t = c.useContext(ui);
  return e || t || "ltr";
}
var fi = [
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
], X = fi.reduce((e, t) => {
  const n = c.forwardRef((r, o) => {
    const { asChild: i, ...s } = r, a = i ? De : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(a, { ...s, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function pi(e, t) {
  e && Ge.flushSync(() => e.dispatchEvent(t));
}
function de(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function mi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var hi = "DismissableLayer", Bt = "dismissableLayer.update", vi = "dismissableLayer.pointerDownOutside", gi = "dismissableLayer.focusOutside", bn, Qn = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Jt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(Qn), [m, p] = c.useState(null), v = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = c.useState({}), g = G(t, (E) => p(E)), f = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(x), y = m ? f.indexOf(m) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= w, N = yi((E) => {
      const k = E.target, W = [...u.branches].some((F) => F.contains(k));
      !C || W || (o == null || o(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, v), O = bi((E) => {
      const k = E.target;
      [...u.branches].some((F) => F.contains(k)) || (i == null || i(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, v);
    return mi((E) => {
      y === u.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, v), c.useEffect(() => {
      if (m)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (bn = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(m)), u.layers.add(m), Sn(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = bn);
        };
    }, [m, v, n, u]), c.useEffect(() => () => {
      m && (u.layers.delete(m), u.layersWithOutsidePointerEventsDisabled.delete(m), Sn());
    }, [m, u]), c.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(Bt, E), () => document.removeEventListener(Bt, E);
    }, []), /* @__PURE__ */ d(
      X.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: b ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
Jt.displayName = hi;
var wi = "DismissableLayerBranch", xi = c.forwardRef((e, t) => {
  const n = c.useContext(Qn), r = c.useRef(null), o = G(t, r);
  return c.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ d(X.div, { ...e, ref: o });
});
xi.displayName = wi;
function yi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Jn(
            vi,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function bi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Jn(gi, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Sn() {
  const e = new CustomEvent(Bt);
  document.dispatchEvent(e);
}
function Jn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pi(o, i) : o.dispatchEvent(i);
}
var Tt = 0;
function er() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Cn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Cn()), Tt++, () => {
      Tt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Tt--;
    };
  }, []);
}
function Cn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var It = "focusScope.autoFocusOnMount", kt = "focusScope.autoFocusOnUnmount", Nn = { bubbles: !1, cancelable: !0 }, Si = "FocusScope", en = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = c.useState(null), u = de(o), m = de(i), p = c.useRef(null), v = G(t, (f) => l(f)), h = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let f = function(b) {
        if (h.paused || !a) return;
        const C = b.target;
        a.contains(C) ? p.current = C : ve(p.current, { select: !0 });
      }, x = function(b) {
        if (h.paused || !a) return;
        const C = b.relatedTarget;
        C !== null && (a.contains(C) || ve(p.current, { select: !0 }));
      }, w = function(b) {
        if (document.activeElement === document.body)
          for (const N of b)
            N.removedNodes.length > 0 && ve(a);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", x);
      const y = new MutationObserver(w);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, a, h.paused]), c.useEffect(() => {
    if (a) {
      Pn.add(h);
      const f = document.activeElement;
      if (!a.contains(f)) {
        const w = new CustomEvent(It, Nn);
        a.addEventListener(It, u), a.dispatchEvent(w), w.defaultPrevented || (Ci(Ai(tr(a)), { select: !0 }), document.activeElement === f && ve(a));
      }
      return () => {
        a.removeEventListener(It, u), setTimeout(() => {
          const w = new CustomEvent(kt, Nn);
          a.addEventListener(kt, m), a.dispatchEvent(w), w.defaultPrevented || ve(f ?? document.body, { select: !0 }), a.removeEventListener(kt, m), Pn.remove(h);
        }, 0);
      };
    }
  }, [a, u, m, h]);
  const g = c.useCallback(
    (f) => {
      if (!n && !r || h.paused) return;
      const x = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, w = document.activeElement;
      if (x && w) {
        const y = f.currentTarget, [b, C] = Ni(y);
        b && C ? !f.shiftKey && w === C ? (f.preventDefault(), n && ve(b, { select: !0 })) : f.shiftKey && w === b && (f.preventDefault(), n && ve(C, { select: !0 })) : w === y && f.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ d(X.div, { tabIndex: -1, ...s, ref: v, onKeyDown: g });
});
en.displayName = Si;
function Ci(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ve(r, { select: t }), document.activeElement !== n) return;
}
function Ni(e) {
  const t = tr(e), n = En(t, e), r = En(t.reverse(), e);
  return [n, r];
}
function tr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function En(e, t) {
  for (const n of e)
    if (!Ei(n, { upTo: t })) return n;
}
function Ei(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Pi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Pi(e) && t && e.select();
  }
}
var Pn = Ri();
function Ri() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Rn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Rn(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Rn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ai(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Q = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, Oi = c.useId || (() => {
}), Ti = 0;
function St(e) {
  const [t, n] = c.useState(Oi());
  return Q(() => {
    n((r) => r ?? String(Ti++));
  }, [e]), t ? `radix-${t}` : "";
}
const Ii = ["top", "right", "bottom", "left"], ce = Math.min, te = Math.max, mt = Math.round, et = Math.floor, ge = (e) => ({
  x: e,
  y: e
}), ki = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mi = {
  start: "end",
  end: "start"
};
function Wt(e, t, n) {
  return te(e, ce(t, n));
}
function fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pe(e) {
  return e.split("-")[0];
}
function Be(e) {
  return e.split("-")[1];
}
function tn(e) {
  return e === "x" ? "y" : "x";
}
function nn(e) {
  return e === "y" ? "height" : "width";
}
function we(e) {
  return ["top", "bottom"].includes(pe(e)) ? "y" : "x";
}
function rn(e) {
  return tn(we(e));
}
function _i(e, t, n) {
  n === void 0 && (n = !1);
  const r = Be(e), o = rn(e), i = nn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ht(s)), [s, ht(s)];
}
function Di(e) {
  const t = ht(e);
  return [Ht(e), t, Ht(t)];
}
function Ht(e) {
  return e.replace(/start|end/g, (t) => Mi[t]);
}
function Li(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Fi(e, t, n, r) {
  const o = Be(e);
  let i = Li(pe(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ht)))), i;
}
function ht(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ki[t]);
}
function Bi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function nr(e) {
  return typeof e != "number" ? Bi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vt(e) {
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
function An(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = we(t), s = rn(t), a = nn(s), l = pe(t), u = i === "y", m = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, v = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: m,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: m,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Be(t)) {
    case "start":
      h[s] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += v * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Wi = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: p
  } = An(u, r, l), v = r, h = {}, g = 0;
  for (let f = 0; f < a.length; f++) {
    const {
      name: x,
      fn: w
    } = a[f], {
      x: y,
      y: b,
      data: C,
      reset: N
    } = await w({
      x: m,
      y: p,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = y ?? m, p = b ?? p, h = {
      ...h,
      [x]: {
        ...h[x],
        ...C
      }
    }, N && g <= 50 && (g++, typeof N == "object" && (N.placement && (v = N.placement), N.rects && (u = N.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: m,
      y: p
    } = An(u, v, l)), f = -1);
  }
  return {
    x: m,
    y: p,
    placement: v,
    strategy: o,
    middlewareData: h
  };
};
async function Ye(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: p = "floating",
    altBoundary: v = !1,
    padding: h = 0
  } = fe(t, e), g = nr(h), x = a[v ? p === "floating" ? "reference" : "floating" : p], w = vt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: m,
    strategy: l
  })), y = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = vt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: b,
    strategy: l
  }) : y);
  return {
    top: (w.top - N.top + g.top) / C.y,
    bottom: (N.bottom - w.bottom + g.bottom) / C.y,
    left: (w.left - N.left + g.left) / C.x,
    right: (N.right - w.right + g.right) / C.x
  };
}
const Hi = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: m = 0
    } = fe(e, t) || {};
    if (u == null)
      return {};
    const p = nr(m), v = {
      x: n,
      y: r
    }, h = rn(o), g = nn(h), f = await s.getDimensions(u), x = h === "y", w = x ? "top" : "left", y = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", C = i.reference[g] + i.reference[h] - v[h] - i.floating[g], N = v[h] - i.reference[h], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let E = O ? O[b] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(O))) && (E = a.floating[b] || i.floating[g]);
    const k = C / 2 - N / 2, W = E / 2 - f[g] / 2 - 1, F = ce(p[w], W), T = ce(p[y], W), H = F, z = E - f[g] - T, B = E / 2 - f[g] / 2 + k, S = Wt(H, B, z), M = !l.arrow && Be(o) != null && B !== S && i.reference[g] / 2 - (B < H ? F : T) - f[g] / 2 < 0, P = M ? B < H ? B - H : B - z : 0;
    return {
      [h]: v[h] + P,
      data: {
        [h]: S,
        centerOffset: B - S - P,
        ...M && {
          alignmentOffset: P
        }
      },
      reset: M
    };
  }
}), Vi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: m = !0,
        crossAxis: p = !0,
        fallbackPlacements: v,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: f = !0,
        ...x
      } = fe(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = pe(o), y = we(a), b = pe(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), N = v || (b || !f ? [ht(a)] : Di(a)), O = g !== "none";
      !v && O && N.push(...Fi(a, f, g, C));
      const E = [a, ...N], k = await Ye(t, x), W = [];
      let F = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (m && W.push(k[w]), p) {
        const B = _i(o, s, C);
        W.push(k[B[0]], k[B[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: W
      }], !W.every((B) => B <= 0)) {
        var T, H;
        const B = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, S = E[B];
        if (S)
          return {
            data: {
              index: B,
              overflows: F
            },
            reset: {
              placement: S
            }
          };
        let M = (H = F.filter((P) => P.overflows[0] <= 0).sort((P, L) => P.overflows[1] - L.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var z;
              const P = (z = F.filter((L) => {
                if (O) {
                  const _ = we(L.placement);
                  return _ === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((_) => _ > 0).reduce((_, re) => _ + re, 0)]).sort((L, _) => L[1] - _[1])[0]) == null ? void 0 : z[0];
              P && (M = P);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function On(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Tn(e) {
  return Ii.some((t) => e[t] >= 0);
}
const $i = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = fe(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Ye(t, {
            ...o,
            elementContext: "reference"
          }), s = On(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Tn(s)
            }
          };
        }
        case "escaped": {
          const i = await Ye(t, {
            ...o,
            altBoundary: !0
          }), s = On(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Tn(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function zi(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = pe(n), a = Be(n), l = we(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, m = i && l ? -1 : 1, p = fe(t, e);
  let {
    mainAxis: v,
    crossAxis: h,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * m,
    y: v * u
  } : {
    x: v * u,
    y: h * m
  };
}
const ji = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await zi(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Ui = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (x) => {
            let {
              x: w,
              y
            } = x;
            return {
              x: w,
              y
            };
          }
        },
        ...l
      } = fe(e, t), u = {
        x: n,
        y: r
      }, m = await Ye(t, l), p = we(pe(o)), v = tn(p);
      let h = u[v], g = u[p];
      if (i) {
        const x = v === "y" ? "top" : "left", w = v === "y" ? "bottom" : "right", y = h + m[x], b = h - m[w];
        h = Wt(y, h, b);
      }
      if (s) {
        const x = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = g + m[x], b = g - m[w];
        g = Wt(y, g, b);
      }
      const f = a.fn({
        ...t,
        [v]: h,
        [p]: g
      });
      return {
        ...f,
        data: {
          x: f.x - n,
          y: f.y - r
        }
      };
    }
  };
}, Ki = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = fe(e, t), m = {
        x: n,
        y: r
      }, p = we(o), v = tn(p);
      let h = m[v], g = m[p];
      const f = fe(a, t), x = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...f
      };
      if (l) {
        const b = v === "y" ? "height" : "width", C = i.reference[v] - i.floating[b] + x.mainAxis, N = i.reference[v] + i.reference[b] - x.mainAxis;
        h < C ? h = C : h > N && (h = N);
      }
      if (u) {
        var w, y;
        const b = v === "y" ? "width" : "height", C = ["top", "left"].includes(pe(o)), N = i.reference[p] - i.floating[b] + (C && ((w = s.offset) == null ? void 0 : w[p]) || 0) + (C ? 0 : x.crossAxis), O = i.reference[p] + i.reference[b] + (C ? 0 : ((y = s.offset) == null ? void 0 : y[p]) || 0) - (C ? x.crossAxis : 0);
        g < N ? g = N : g > O && (g = O);
      }
      return {
        [v]: h,
        [p]: g
      };
    }
  };
}, Yi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = fe(e, t), l = await Ye(t, a), u = pe(n), m = Be(n), p = we(n) === "y", {
        width: v,
        height: h
      } = r.floating;
      let g, f;
      u === "top" || u === "bottom" ? (g = u, f = m === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (f = u, g = m === "end" ? "top" : "bottom");
      const x = h - l.top - l.bottom, w = v - l.left - l.right, y = ce(h - l[g], x), b = ce(v - l[f], w), C = !t.middlewareData.shift;
      let N = y, O = b;
      if (p ? O = m || C ? ce(b, w) : w : N = m || C ? ce(y, x) : x, C && !m) {
        const k = te(l.left, 0), W = te(l.right, 0), F = te(l.top, 0), T = te(l.bottom, 0);
        p ? O = v - 2 * (k !== 0 || W !== 0 ? k + W : te(l.left, l.right)) : N = h - 2 * (F !== 0 || T !== 0 ? F + T : te(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: O,
        availableHeight: N
      });
      const E = await o.getDimensions(i.floating);
      return v !== E.width || h !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function We(e) {
  return rr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function me(e) {
  var t;
  return (t = (rr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function rr(e) {
  return e instanceof Node || e instanceof ne(e).Node;
}
function oe(e) {
  return e instanceof Element || e instanceof ne(e).Element;
}
function le(e) {
  return e instanceof HTMLElement || e instanceof ne(e).HTMLElement;
}
function In(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ne(e).ShadowRoot;
}
function qe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Xi(e) {
  return ["table", "td", "th"].includes(We(e));
}
function Ct(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function on(e) {
  const t = an(), n = oe(e) ? ie(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Gi(e) {
  let t = xe(e);
  for (; le(t) && !Le(t); ) {
    if (on(t))
      return t;
    if (Ct(t))
      return null;
    t = xe(t);
  }
  return null;
}
function an() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Le(e) {
  return ["html", "body", "#document"].includes(We(e));
}
function ie(e) {
  return ne(e).getComputedStyle(e);
}
function Nt(e) {
  return oe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function xe(e) {
  if (We(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    In(e) && e.host || // Fallback.
    me(e)
  );
  return In(t) ? t.host : t;
}
function or(e) {
  const t = xe(e);
  return Le(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && qe(t) ? t : or(t);
}
function Xe(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = or(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ne(o);
  if (i) {
    const a = Vt(s);
    return t.concat(s, s.visualViewport || [], qe(o) ? o : [], a && n ? Xe(a) : []);
  }
  return t.concat(o, Xe(o, [], n));
}
function Vt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ir(e) {
  const t = ie(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = le(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = mt(n) !== i || mt(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function sn(e) {
  return oe(e) ? e : e.contextElement;
}
function Ie(e) {
  const t = sn(e);
  if (!le(t))
    return ge(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ir(t);
  let s = (i ? mt(n.width) : n.width) / r, a = (i ? mt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const qi = /* @__PURE__ */ ge(0);
function ar(e) {
  const t = ne(e);
  return !an() || !t.visualViewport ? qi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Zi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ne(e) ? !1 : t;
}
function Ne(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = sn(e);
  let s = ge(1);
  t && (r ? oe(r) && (s = Ie(r)) : s = Ie(e));
  const a = Zi(i, n, r) ? ar(i) : ge(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, m = o.width / s.x, p = o.height / s.y;
  if (i) {
    const v = ne(i), h = r && oe(r) ? ne(r) : r;
    let g = v, f = Vt(g);
    for (; f && r && h !== g; ) {
      const x = Ie(f), w = f.getBoundingClientRect(), y = ie(f), b = w.left + (f.clientLeft + parseFloat(y.paddingLeft)) * x.x, C = w.top + (f.clientTop + parseFloat(y.paddingTop)) * x.y;
      l *= x.x, u *= x.y, m *= x.x, p *= x.y, l += b, u += C, g = ne(f), f = Vt(g);
    }
  }
  return vt({
    width: m,
    height: p,
    x: l,
    y: u
  });
}
function Qi(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = me(r), a = t ? Ct(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ge(1);
  const m = ge(0), p = le(r);
  if ((p || !p && !i) && ((We(r) !== "body" || qe(s)) && (l = Nt(r)), le(r))) {
    const v = Ne(r);
    u = Ie(r), m.x = v.x + r.clientLeft, m.y = v.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + m.x,
    y: n.y * u.y - l.scrollTop * u.y + m.y
  };
}
function Ji(e) {
  return Array.from(e.getClientRects());
}
function sr(e) {
  return Ne(me(e)).left + Nt(e).scrollLeft;
}
function ea(e) {
  const t = me(e), n = Nt(e), r = e.ownerDocument.body, o = te(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = te(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + sr(e);
  const a = -n.scrollTop;
  return ie(r).direction === "rtl" && (s += te(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ta(e, t) {
  const n = ne(e), r = me(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = an();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function na(e, t) {
  const n = Ne(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = le(e) ? Ie(e) : ge(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function kn(e, t, n) {
  let r;
  if (t === "viewport")
    r = ta(e, n);
  else if (t === "document")
    r = ea(me(e));
  else if (oe(t))
    r = na(t, n);
  else {
    const o = ar(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return vt(r);
}
function cr(e, t) {
  const n = xe(e);
  return n === t || !oe(n) || Le(n) ? !1 : ie(n).position === "fixed" || cr(n, t);
}
function ra(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Xe(e, [], !1).filter((a) => oe(a) && We(a) !== "body"), o = null;
  const i = ie(e).position === "fixed";
  let s = i ? xe(e) : e;
  for (; oe(s) && !Le(s); ) {
    const a = ie(s), l = on(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || qe(s) && !l && cr(e, s)) ? r = r.filter((m) => m !== s) : o = a, s = xe(s);
  }
  return t.set(e, r), r;
}
function oa(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ct(t) ? [] : ra(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, m) => {
    const p = kn(t, m, o);
    return u.top = te(p.top, u.top), u.right = ce(p.right, u.right), u.bottom = ce(p.bottom, u.bottom), u.left = te(p.left, u.left), u;
  }, kn(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ia(e) {
  const {
    width: t,
    height: n
  } = ir(e);
  return {
    width: t,
    height: n
  };
}
function aa(e, t, n) {
  const r = le(t), o = me(t), i = n === "fixed", s = Ne(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ge(0);
  if (r || !r && !i)
    if ((We(t) !== "body" || qe(o)) && (a = Nt(t)), r) {
      const p = Ne(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && (l.x = sr(o));
  const u = s.left + a.scrollLeft - l.x, m = s.top + a.scrollTop - l.y;
  return {
    x: u,
    y: m,
    width: s.width,
    height: s.height
  };
}
function Mt(e) {
  return ie(e).position === "static";
}
function Mn(e, t) {
  return !le(e) || ie(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function lr(e, t) {
  const n = ne(e);
  if (Ct(e))
    return n;
  if (!le(e)) {
    let o = xe(e);
    for (; o && !Le(o); ) {
      if (oe(o) && !Mt(o))
        return o;
      o = xe(o);
    }
    return n;
  }
  let r = Mn(e, t);
  for (; r && Xi(r) && Mt(r); )
    r = Mn(r, t);
  return r && Le(r) && Mt(r) && !on(r) ? n : r || Gi(e) || n;
}
const sa = async function(e) {
  const t = this.getOffsetParent || lr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: aa(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ca(e) {
  return ie(e).direction === "rtl";
}
const la = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qi,
  getDocumentElement: me,
  getClippingRect: oa,
  getOffsetParent: lr,
  getElementRects: sa,
  getClientRects: Ji,
  getDimensions: ia,
  getScale: Ie,
  isElement: oe,
  isRTL: ca
};
function ua(e, t) {
  let n = null, r;
  const o = me(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: m,
      width: p,
      height: v
    } = e.getBoundingClientRect();
    if (a || t(), !p || !v)
      return;
    const h = et(m), g = et(o.clientWidth - (u + p)), f = et(o.clientHeight - (m + v)), x = et(u), y = {
      rootMargin: -h + "px " + -g + "px " + -f + "px " + -x + "px",
      threshold: te(0, ce(1, l)) || 1
    };
    let b = !0;
    function C(N) {
      const O = N[0].intersectionRatio;
      if (O !== l) {
        if (!b)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function da(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = sn(e), m = o || i ? [...u ? Xe(u) : [], ...Xe(t)] : [];
  m.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const p = u && a ? ua(u, n) : null;
  let v = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === u && h && (h.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let g, f = l ? Ne(e) : null;
  l && x();
  function x() {
    const w = Ne(e);
    f && (w.x !== f.x || w.y !== f.y || w.width !== f.width || w.height !== f.height) && n(), f = w, g = requestAnimationFrame(x);
  }
  return n(), () => {
    var w;
    m.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), p == null || p(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(g);
  };
}
const fa = ji, pa = Ui, ma = Vi, ha = Yi, va = $i, _n = Hi, ga = Ki, wa = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: la,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Wi(e, t, {
    ...o,
    platform: i
  });
};
var lt = typeof document < "u" ? zo : Yn;
function gt(e, t) {
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
        if (!gt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !gt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ur(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dn(e, t) {
  const n = ur(e);
  return Math.round(t * n) / n;
}
function Ln(e) {
  const t = c.useRef(e);
  return lt(() => {
    t.current = e;
  }), t;
}
function xa(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [m, p] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, h] = c.useState(r);
  gt(v, r) || h(r);
  const [g, f] = c.useState(null), [x, w] = c.useState(null), y = c.useCallback((P) => {
    P !== O.current && (O.current = P, f(P));
  }, []), b = c.useCallback((P) => {
    P !== E.current && (E.current = P, w(P));
  }, []), C = i || g, N = s || x, O = c.useRef(null), E = c.useRef(null), k = c.useRef(m), W = l != null, F = Ln(l), T = Ln(o), H = c.useCallback(() => {
    if (!O.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: v
    };
    T.current && (P.platform = T.current), wa(O.current, E.current, P).then((L) => {
      const _ = {
        ...L,
        isPositioned: !0
      };
      z.current && !gt(k.current, _) && (k.current = _, Ge.flushSync(() => {
        p(_);
      }));
    });
  }, [v, t, n, T]);
  lt(() => {
    u === !1 && k.current.isPositioned && (k.current.isPositioned = !1, p((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [u]);
  const z = c.useRef(!1);
  lt(() => (z.current = !0, () => {
    z.current = !1;
  }), []), lt(() => {
    if (C && (O.current = C), N && (E.current = N), C && N) {
      if (F.current)
        return F.current(C, N, H);
      H();
    }
  }, [C, N, H, F, W]);
  const B = c.useMemo(() => ({
    reference: O,
    floating: E,
    setReference: y,
    setFloating: b
  }), [y, b]), S = c.useMemo(() => ({
    reference: C,
    floating: N
  }), [C, N]), M = c.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!S.floating)
      return P;
    const L = Dn(S.floating, m.x), _ = Dn(S.floating, m.y);
    return a ? {
      ...P,
      transform: "translate(" + L + "px, " + _ + "px)",
      ...ur(S.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: _
    };
  }, [n, a, S.floating, m.x, m.y]);
  return c.useMemo(() => ({
    ...m,
    update: H,
    refs: B,
    elements: S,
    floatingStyles: M
  }), [m, H, B, S, M]);
}
const ya = (e) => {
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
      return r && t(r) ? r.current != null ? _n({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? _n({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, ba = (e, t) => ({
  ...fa(e),
  options: [e, t]
}), Sa = (e, t) => ({
  ...pa(e),
  options: [e, t]
}), Ca = (e, t) => ({
  ...ga(e),
  options: [e, t]
}), Na = (e, t) => ({
  ...ma(e),
  options: [e, t]
}), Ea = (e, t) => ({
  ...ha(e),
  options: [e, t]
}), Pa = (e, t) => ({
  ...va(e),
  options: [e, t]
}), Ra = (e, t) => ({
  ...ya(e),
  options: [e, t]
});
var Aa = "Arrow", dr = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ d(
    X.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
dr.displayName = Aa;
var Oa = dr;
function Ta(e) {
  const [t, n] = c.useState(void 0);
  return Q(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, a = u.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var cn = "Popper", [fr, Et] = bt(cn), [Ia, pr] = fr(cn), mr = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ d(Ia, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
mr.displayName = cn;
var hr = "PopperAnchor", vr = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = pr(hr, n), s = c.useRef(null), a = G(t, s);
    return c.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ d(X.div, { ...o, ref: a });
  }
);
vr.displayName = hr;
var ln = "PopperContent", [ka, Ma] = fr(ln), gr = c.forwardRef(
  (e, t) => {
    var I, U, q, j, V, $;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: m = 0,
      sticky: p = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: g,
      ...f
    } = e, x = pr(ln, n), [w, y] = c.useState(null), b = G(t, (ee) => y(ee)), [C, N] = c.useState(null), O = Ta(C), E = (O == null ? void 0 : O.width) ?? 0, k = (O == null ? void 0 : O.height) ?? 0, W = r + (i !== "center" ? "-" + i : ""), F = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, T = Array.isArray(u) ? u : [u], H = T.length > 0, z = {
      padding: F,
      boundary: T.filter(Da),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: B, floatingStyles: S, placement: M, isPositioned: P, middlewareData: L } = xa({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: W,
      whileElementsMounted: (...ee) => da(...ee, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        ba({ mainAxis: o + k, alignmentAxis: s }),
        l && Sa({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Ca() : void 0,
          ...z
        }),
        l && Na({ ...z }),
        Ea({
          ...z,
          apply: ({ elements: ee, rects: ae, availableWidth: ze, availableHeight: je }) => {
            const { width: Ue, height: $o } = ae.reference, Je = ee.floating.style;
            Je.setProperty("--radix-popper-available-width", `${ze}px`), Je.setProperty("--radix-popper-available-height", `${je}px`), Je.setProperty("--radix-popper-anchor-width", `${Ue}px`), Je.setProperty("--radix-popper-anchor-height", `${$o}px`);
          }
        }),
        C && Ra({ element: C, padding: a }),
        La({ arrowWidth: E, arrowHeight: k }),
        v && Pa({ strategy: "referenceHidden", ...z })
      ]
    }), [_, re] = yr(M), J = de(g);
    Q(() => {
      P && (J == null || J());
    }, [P, J]);
    const Ve = (I = L.arrow) == null ? void 0 : I.x, $e = (U = L.arrow) == null ? void 0 : U.y, he = ((q = L.arrow) == null ? void 0 : q.centerOffset) !== 0, [Pe, Ce] = c.useState();
    return Q(() => {
      w && Ce(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ d(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...S,
          transform: P ? S.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Pe,
          "--radix-popper-transform-origin": [
            (j = L.transformOrigin) == null ? void 0 : j.x,
            (V = L.transformOrigin) == null ? void 0 : V.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...(($ = L.hide) == null ? void 0 : $.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d(
          ka,
          {
            scope: n,
            placedSide: _,
            onArrowChange: N,
            arrowX: Ve,
            arrowY: $e,
            shouldHideArrow: he,
            children: /* @__PURE__ */ d(
              X.div,
              {
                "data-side": _,
                "data-align": re,
                ...f,
                ref: b,
                style: {
                  ...f.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: P ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
gr.displayName = ln;
var wr = "PopperArrow", _a = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, xr = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Ma(wr, r), s = _a[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d(
          Oa,
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
xr.displayName = wr;
function Da(e) {
  return e !== null;
}
var La = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, w, y;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, m] = yr(n), p = { start: "0%", center: "50%", end: "100%" }[m], v = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, h = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let g = "", f = "";
    return u === "bottom" ? (g = s ? p : `${v}px`, f = `${-l}px`) : u === "top" ? (g = s ? p : `${v}px`, f = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, f = s ? p : `${h}px`) : u === "left" && (g = `${r.floating.width + l}px`, f = s ? p : `${h}px`), { data: { x: g, y: f } };
  }
});
function yr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var br = mr, un = vr, Sr = gr, Cr = xr, Fa = "Portal", dn = c.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = c.useState(!1);
  Q(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? ei.createPortal(/* @__PURE__ */ d(X.div, { ...r, ref: t }), s) : null;
});
dn.displayName = Fa;
function $t({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = Ba({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, a = de(n), l = c.useCallback(
    (u) => {
      if (i) {
        const p = typeof u == "function" ? u(e) : u;
        p !== e && a(p);
      } else
        o(u);
    },
    [i, e, o, a]
  );
  return [s, l];
}
function Ba({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e), [r] = n, o = c.useRef(r), i = de(t);
  return c.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
function Wa(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ha = "VisuallyHidden", Nr = c.forwardRef(
  (e, t) => /* @__PURE__ */ d(
    X.span,
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
Nr.displayName = Ha;
var Va = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Re = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), nt = {}, _t = 0, Er = function(e) {
  return e && (e.host || Er(e.parentNode));
}, $a = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Er(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, za = function(e, t, n, r) {
  var o = $a(t, Array.isArray(e) ? e : [e]);
  nt[n] || (nt[n] = /* @__PURE__ */ new WeakMap());
  var i = nt[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(p) {
    !p || a.has(p) || (a.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var m = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(v) {
      if (a.has(v))
        m(v);
      else
        try {
          var h = v.getAttribute(r), g = h !== null && h !== "false", f = (Re.get(v) || 0) + 1, x = (i.get(v) || 0) + 1;
          Re.set(v, f), i.set(v, x), s.push(v), f === 1 && g && tt.set(v, !0), x === 1 && v.setAttribute(n, "true"), g || v.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", v, w);
        }
    });
  };
  return m(t), a.clear(), _t++, function() {
    s.forEach(function(p) {
      var v = Re.get(p) - 1, h = i.get(p) - 1;
      Re.set(p, v), i.set(p, h), v || (tt.has(p) || p.removeAttribute(r), tt.delete(p)), h || p.removeAttribute(n);
    }), _t--, _t || (Re = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), nt = {});
  };
}, Pr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Va(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), za(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, se = function() {
  return se = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, se.apply(this, arguments);
};
function Rr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ja(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ut = "right-scroll-bar-position", dt = "width-before-scroll-bar", Ua = "with-scroll-bars-hidden", Ka = "--removed-body-scroll-bar-size";
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ya(e, t) {
  var n = at(function() {
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
var Xa = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Fn = /* @__PURE__ */ new WeakMap();
function Ga(e, t) {
  var n = Ya(null, function(r) {
    return e.forEach(function(o) {
      return Dt(o, r);
    });
  });
  return Xa(function() {
    var r = Fn.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Dt(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Dt(a, s);
      });
    }
    Fn.set(n, e);
  }, [e]), n;
}
function qa(e) {
  return e;
}
function Za(e, t) {
  t === void 0 && (t = qa);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var l = function() {
        var m = s;
        s = [], m.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(m) {
          s.push(m), u();
        },
        filter: function(m) {
          return s = s.filter(m), n;
        }
      };
    }
  };
  return o;
}
function Qa(e) {
  e === void 0 && (e = {});
  var t = Za(null);
  return t.options = se({ async: !0, ssr: !1 }, e), t;
}
var Ar = function(e) {
  var t = e.sideCar, n = Rr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, se({}, n));
};
Ar.isSideCarExport = !0;
function Ja(e, t) {
  return e.useMedium(t), Ar;
}
var Or = Qa(), Lt = function() {
}, Pt = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Lt,
    onWheelCapture: Lt,
    onTouchMoveCapture: Lt
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, m = e.enabled, p = e.shards, v = e.sideCar, h = e.noIsolation, g = e.inert, f = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, y = e.gapMode, b = Rr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = v, N = Ga([n, t]), O = se(se({}, b), o);
  return c.createElement(
    c.Fragment,
    null,
    m && c.createElement(C, { sideCar: Or, removeScrollBar: u, shards: p, noIsolation: h, inert: g, setCallbacks: i, allowPinchZoom: !!f, lockRef: n, gapMode: y }),
    s ? c.cloneElement(c.Children.only(a), se(se({}, O), { ref: N })) : c.createElement(w, se({}, O, { className: l, ref: N }), a)
  );
});
Pt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pt.classNames = {
  fullWidth: dt,
  zeroRight: ut
};
var es = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ts() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = es();
  return t && e.setAttribute("nonce", t), e;
}
function ns(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function rs(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var os = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ts()) && (ns(t, n), rs(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, is = function() {
  var e = os();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Tr = function() {
  var e = is(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, as = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ft = function(e) {
  return parseInt(e || "", 10) || 0;
}, ss = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ft(n), Ft(r), Ft(o)];
}, cs = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return as;
  var t = ss(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ls = Tr(), ke = "data-scroll-locked", us = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ua, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ke, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ut, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(dt, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ut, " .").concat(ut, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(dt, " .").concat(dt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ke, `] {
    `).concat(Ka, ": ").concat(a, `px;
  }
`);
}, Bn = function() {
  var e = parseInt(document.body.getAttribute(ke) || "0", 10);
  return isFinite(e) ? e : 0;
}, ds = function() {
  c.useEffect(function() {
    return document.body.setAttribute(ke, (Bn() + 1).toString()), function() {
      var e = Bn() - 1;
      e <= 0 ? document.body.removeAttribute(ke) : document.body.setAttribute(ke, e.toString());
    };
  }, []);
}, fs = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  ds();
  var i = c.useMemo(function() {
    return cs(o);
  }, [o]);
  return c.createElement(ls, { styles: us(i, !t, o, n ? "" : "!important") });
}, zt = !1;
if (typeof window < "u")
  try {
    var rt = Object.defineProperty({}, "passive", {
      get: function() {
        return zt = !0, !0;
      }
    });
    window.addEventListener("test", rt, rt), window.removeEventListener("test", rt, rt);
  } catch {
    zt = !1;
  }
var Ae = zt ? { passive: !1 } : !1, ps = function(e) {
  return e.tagName === "TEXTAREA";
}, Ir = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ps(e) && n[t] === "visible")
  );
}, ms = function(e) {
  return Ir(e, "overflowY");
}, hs = function(e) {
  return Ir(e, "overflowX");
}, Wn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = kr(e, r);
    if (o) {
      var i = Mr(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, vs = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, gs = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, kr = function(e, t) {
  return e === "v" ? ms(t) : hs(t);
}, Mr = function(e, t) {
  return e === "v" ? vs(t) : gs(t);
}, ws = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, xs = function(e, t, n, r, o) {
  var i = ws(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), u = !1, m = s > 0, p = 0, v = 0;
  do {
    var h = Mr(e, a), g = h[0], f = h[1], x = h[2], w = f - x - i * g;
    (g || w) && kr(e, a) && (p += w, v += g), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (m && (Math.abs(p) < 1 || !o) || !m && (Math.abs(v) < 1 || !o)) && (u = !0), u;
}, ot = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hn = function(e) {
  return [e.deltaX, e.deltaY];
}, Vn = function(e) {
  return e && "current" in e ? e.current : e;
}, ys = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, bs = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ss = 0, Oe = [];
function Cs(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(Ss++)[0], i = c.useState(Tr)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = ja([e.lockRef.current], (e.shards || []).map(Vn), !0).filter(Boolean);
      return f.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(f, x) {
    if ("touches" in f && f.touches.length === 2)
      return !s.current.allowPinchZoom;
    var w = ot(f), y = n.current, b = "deltaX" in f ? f.deltaX : y[0] - w[0], C = "deltaY" in f ? f.deltaY : y[1] - w[1], N, O = f.target, E = Math.abs(b) > Math.abs(C) ? "h" : "v";
    if ("touches" in f && E === "h" && O.type === "range")
      return !1;
    var k = Wn(E, O);
    if (!k)
      return !0;
    if (k ? N = E : (N = E === "v" ? "h" : "v", k = Wn(E, O)), !k)
      return !1;
    if (!r.current && "changedTouches" in f && (b || C) && (r.current = N), !N)
      return !0;
    var W = r.current || N;
    return xs(W, x, f, W === "h" ? b : C, !0);
  }, []), l = c.useCallback(function(f) {
    var x = f;
    if (!(!Oe.length || Oe[Oe.length - 1] !== i)) {
      var w = "deltaY" in x ? Hn(x) : ot(x), y = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && ys(N.delta, w);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var b = (s.current.shards || []).map(Vn).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), C = b.length > 0 ? a(x, b[0]) : !s.current.noIsolation;
        C && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(f, x, w, y) {
    var b = { name: f, delta: x, target: w, should: y, shadowParent: Ns(w) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== b;
      });
    }, 1);
  }, []), m = c.useCallback(function(f) {
    n.current = ot(f), r.current = void 0;
  }, []), p = c.useCallback(function(f) {
    u(f.type, Hn(f), f.target, a(f, e.lockRef.current));
  }, []), v = c.useCallback(function(f) {
    u(f.type, ot(f), f.target, a(f, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Oe.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", l, Ae), document.addEventListener("touchmove", l, Ae), document.addEventListener("touchstart", m, Ae), function() {
      Oe = Oe.filter(function(f) {
        return f !== i;
      }), document.removeEventListener("wheel", l, Ae), document.removeEventListener("touchmove", l, Ae), document.removeEventListener("touchstart", m, Ae);
    };
  }, []);
  var h = e.removeScrollBar, g = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    g ? c.createElement(i, { styles: bs(o) }) : null,
    h ? c.createElement(fs, { gapMode: e.gapMode }) : null
  );
}
function Ns(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Es = Ja(Or, Cs);
var fn = c.forwardRef(function(e, t) {
  return c.createElement(Pt, se({}, e, { ref: t, sideCar: Es }));
});
fn.classNames = Pt.classNames;
var Ps = [" ", "Enter", "ArrowUp", "ArrowDown"], Rs = [" ", "Enter"], Ze = "Select", [Rt, At, As] = li(Ze), [He, Qc] = bt(Ze, [
  As,
  Et
]), Ot = Et(), [Os, ye] = He(Ze), [Ts, Is] = He(Ze), _r = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: l,
    dir: u,
    name: m,
    autoComplete: p,
    disabled: v,
    required: h
  } = e, g = Ot(t), [f, x] = c.useState(null), [w, y] = c.useState(null), [b, C] = c.useState(!1), N = di(u), [O = !1, E] = $t({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [k, W] = $t({
    prop: s,
    defaultProp: a,
    onChange: l
  }), F = c.useRef(null), T = f ? !!f.closest("form") : !0, [H, z] = c.useState(/* @__PURE__ */ new Set()), B = Array.from(H).map((S) => S.props.value).join(";");
  return /* @__PURE__ */ d(br, { ...g, children: /* @__PURE__ */ R(
    Os,
    {
      required: h,
      scope: t,
      trigger: f,
      onTriggerChange: x,
      valueNode: w,
      onValueNodeChange: y,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: C,
      contentId: St(),
      value: k,
      onValueChange: W,
      open: O,
      onOpenChange: E,
      dir: N,
      triggerPointerDownPosRef: F,
      disabled: v,
      children: [
        /* @__PURE__ */ d(Rt.Provider, { scope: t, children: /* @__PURE__ */ d(
          Ts,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((S) => {
              z((M) => new Set(M).add(S));
            }, []),
            onNativeOptionRemove: c.useCallback((S) => {
              z((M) => {
                const P = new Set(M);
                return P.delete(S), P;
              });
            }, []),
            children: n
          }
        ) }),
        T ? /* @__PURE__ */ R(
          io,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: m,
            autoComplete: p,
            value: k,
            onChange: (S) => W(S.target.value),
            disabled: v,
            children: [
              k === void 0 ? /* @__PURE__ */ d("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
_r.displayName = Ze;
var Dr = "SelectTrigger", Lr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Ot(n), s = ye(Dr, n), a = s.disabled || r, l = G(t, s.onTriggerChange), u = At(n), [m, p, v] = ao((g) => {
      const f = u().filter((y) => !y.disabled), x = f.find((y) => y.value === s.value), w = so(f, g, x);
      w !== void 0 && s.onValueChange(w.value);
    }), h = () => {
      a || (s.onOpenChange(!0), v());
    };
    return /* @__PURE__ */ d(un, { asChild: !0, ...i, children: /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": oo(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: Y(o.onClick, (g) => {
          g.currentTarget.focus();
        }),
        onPointerDown: Y(o.onPointerDown, (g) => {
          const f = g.target;
          f.hasPointerCapture(g.pointerId) && f.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && (h(), s.triggerPointerDownPosRef.current = {
            x: Math.round(g.pageX),
            y: Math.round(g.pageY)
          }, g.preventDefault());
        }),
        onKeyDown: Y(o.onKeyDown, (g) => {
          const f = m.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && p(g.key), !(f && g.key === " ") && Ps.includes(g.key) && (h(), g.preventDefault());
        })
      }
    ) });
  }
);
Lr.displayName = Dr;
var Fr = "SelectValue", Br = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...a } = e, l = ye(Fr, n), { onValueNodeHasChildrenChange: u } = l, m = i !== void 0, p = G(t, l.onValueNodeChange);
    return Q(() => {
      u(m);
    }, [u, m]), /* @__PURE__ */ d(
      X.span,
      {
        ...a,
        ref: p,
        style: { pointerEvents: "none" },
        children: oo(l.value) ? /* @__PURE__ */ d(_e, { children: s }) : i
      }
    );
  }
);
Br.displayName = Fr;
var ks = "SelectIcon", Wr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Wr.displayName = ks;
var Ms = "SelectPortal", Hr = (e) => /* @__PURE__ */ d(dn, { asChild: !0, ...e });
Hr.displayName = Ms;
var Ee = "SelectContent", Vr = c.forwardRef(
  (e, t) => {
    const n = ye(Ee, e.__scopeSelect), [r, o] = c.useState();
    if (Q(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Ge.createPortal(
        /* @__PURE__ */ d($r, { scope: e.__scopeSelect, children: /* @__PURE__ */ d(Rt.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ d(zr, { ...e, ref: t });
  }
);
Vr.displayName = Ee;
var ue = 10, [$r, be] = He(Ee), _s = "SelectContentImpl", zr = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: m,
      arrowPadding: p,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: f,
      avoidCollisions: x,
      //
      ...w
    } = e, y = ye(Ee, n), [b, C] = c.useState(null), [N, O] = c.useState(null), E = G(t, (I) => C(I)), [k, W] = c.useState(null), [F, T] = c.useState(
      null
    ), H = At(n), [z, B] = c.useState(!1), S = c.useRef(!1);
    c.useEffect(() => {
      if (b) return Pr(b);
    }, [b]), er();
    const M = c.useCallback(
      (I) => {
        const [U, ...q] = H().map(($) => $.ref.current), [j] = q.slice(-1), V = document.activeElement;
        for (const $ of I)
          if ($ === V || ($ == null || $.scrollIntoView({ block: "nearest" }), $ === U && N && (N.scrollTop = 0), $ === j && N && (N.scrollTop = N.scrollHeight), $ == null || $.focus(), document.activeElement !== V)) return;
      },
      [H, N]
    ), P = c.useCallback(
      () => M([k, b]),
      [M, k, b]
    );
    c.useEffect(() => {
      z && P();
    }, [z, P]);
    const { onOpenChange: L, triggerPointerDownPosRef: _ } = y;
    c.useEffect(() => {
      if (b) {
        let I = { x: 0, y: 0 };
        const U = (j) => {
          var V, $;
          I = {
            x: Math.abs(Math.round(j.pageX) - (((V = _.current) == null ? void 0 : V.x) ?? 0)),
            y: Math.abs(Math.round(j.pageY) - ((($ = _.current) == null ? void 0 : $.y) ?? 0))
          };
        }, q = (j) => {
          I.x <= 10 && I.y <= 10 ? j.preventDefault() : b.contains(j.target) || L(!1), document.removeEventListener("pointermove", U), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", q, { capture: !0 });
        };
      }
    }, [b, L, _]), c.useEffect(() => {
      const I = () => L(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [L]);
    const [re, J] = ao((I) => {
      const U = H().filter((V) => !V.disabled), q = U.find((V) => V.ref.current === document.activeElement), j = so(U, I, q);
      j && setTimeout(() => j.ref.current.focus());
    }), Ve = c.useCallback(
      (I, U, q) => {
        const j = !S.current && !q;
        (y.value !== void 0 && y.value === U || j) && (W(I), j && (S.current = !0));
      },
      [y.value]
    ), $e = c.useCallback(() => b == null ? void 0 : b.focus(), [b]), he = c.useCallback(
      (I, U, q) => {
        const j = !S.current && !q;
        (y.value !== void 0 && y.value === U || j) && T(I);
      },
      [y.value]
    ), Pe = r === "popper" ? jt : jr, Ce = Pe === jt ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: m,
      arrowPadding: p,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: f,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ d(
      $r,
      {
        scope: n,
        content: b,
        viewport: N,
        onViewportChange: O,
        itemRefCallback: Ve,
        selectedItem: k,
        onItemLeave: $e,
        itemTextRefCallback: he,
        focusSelectedItem: P,
        selectedItemText: F,
        position: r,
        isPositioned: z,
        searchRef: re,
        children: /* @__PURE__ */ d(fn, { as: De, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          en,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: Y(o, (I) => {
              var U;
              (U = y.trigger) == null || U.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              Jt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  Pe,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...w,
                    ...Ce,
                    onPlaced: () => B(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: Y(w.onKeyDown, (I) => {
                      const U = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !U && I.key.length === 1 && J(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let j = H().filter((V) => !V.disabled).map((V) => V.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (j = j.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const V = I.target, $ = j.indexOf(V);
                          j = j.slice($ + 1);
                        }
                        setTimeout(() => M(j)), I.preventDefault();
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
zr.displayName = _s;
var Ds = "SelectItemAlignedPosition", jr = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = ye(Ee, n), s = be(Ee, n), [a, l] = c.useState(null), [u, m] = c.useState(null), p = G(t, (E) => m(E)), v = At(n), h = c.useRef(!1), g = c.useRef(!0), { viewport: f, selectedItem: x, selectedItemText: w, focusSelectedItem: y } = s, b = c.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && f && x && w) {
      const E = i.trigger.getBoundingClientRect(), k = u.getBoundingClientRect(), W = i.valueNode.getBoundingClientRect(), F = w.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const V = F.left - k.left, $ = W.left - V, ee = E.left - $, ae = E.width + ee, ze = Math.max(ae, k.width), je = window.innerWidth - ue, Ue = yn($, [ue, je - ze]);
        a.style.minWidth = ae + "px", a.style.left = Ue + "px";
      } else {
        const V = k.right - F.right, $ = window.innerWidth - W.right - V, ee = window.innerWidth - E.right - $, ae = E.width + ee, ze = Math.max(ae, k.width), je = window.innerWidth - ue, Ue = yn($, [ue, je - ze]);
        a.style.minWidth = ae + "px", a.style.right = Ue + "px";
      }
      const T = v(), H = window.innerHeight - ue * 2, z = f.scrollHeight, B = window.getComputedStyle(u), S = parseInt(B.borderTopWidth, 10), M = parseInt(B.paddingTop, 10), P = parseInt(B.borderBottomWidth, 10), L = parseInt(B.paddingBottom, 10), _ = S + M + z + L + P, re = Math.min(x.offsetHeight * 5, _), J = window.getComputedStyle(f), Ve = parseInt(J.paddingTop, 10), $e = parseInt(J.paddingBottom, 10), he = E.top + E.height / 2 - ue, Pe = H - he, Ce = x.offsetHeight / 2, I = x.offsetTop + Ce, U = S + M + I, q = _ - U;
      if (U <= he) {
        const V = x === T[T.length - 1].ref.current;
        a.style.bottom = "0px";
        const $ = u.clientHeight - f.offsetTop - f.offsetHeight, ee = Math.max(
          Pe,
          Ce + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (V ? $e : 0) + $ + P
        ), ae = U + ee;
        a.style.height = ae + "px";
      } else {
        const V = x === T[0].ref.current;
        a.style.top = "0px";
        const ee = Math.max(
          he,
          S + f.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (V ? Ve : 0) + Ce
        ) + q;
        a.style.height = ee + "px", f.scrollTop = U - he + f.offsetTop;
      }
      a.style.margin = `${ue}px 0`, a.style.minHeight = re + "px", a.style.maxHeight = H + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    v,
    i.trigger,
    i.valueNode,
    a,
    u,
    f,
    x,
    w,
    i.dir,
    r
  ]);
  Q(() => b(), [b]);
  const [C, N] = c.useState();
  Q(() => {
    u && N(window.getComputedStyle(u).zIndex);
  }, [u]);
  const O = c.useCallback(
    (E) => {
      E && g.current === !0 && (b(), y == null || y(), g.current = !1);
    },
    [b, y]
  );
  return /* @__PURE__ */ d(
    Fs,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: O,
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ d(
            X.div,
            {
              ...o,
              ref: p,
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
jr.displayName = Ds;
var Ls = "SelectPopperPosition", jt = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ue,
    ...i
  } = e, s = Ot(n);
  return /* @__PURE__ */ d(
    Sr,
    {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
jt.displayName = Ls;
var [Fs, pn] = He(Ee, {}), Ut = "SelectViewport", Ur = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = be(Ut, n), s = pn(Ut, n), a = G(t, i.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ R(_e, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d(Rt.Slot, { scope: n, children: /* @__PURE__ */ d(
        X.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: Y(o.onScroll, (u) => {
            const m = u.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: v } = s;
            if (v != null && v.current && p) {
              const h = Math.abs(l.current - m.scrollTop);
              if (h > 0) {
                const g = window.innerHeight - ue * 2, f = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), w = Math.max(f, x);
                if (w < g) {
                  const y = w + h, b = Math.min(g, y), C = y - b;
                  p.style.height = b + "px", p.style.bottom === "0px" && (m.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ur.displayName = Ut;
var Kr = "SelectGroup", [Bs, Ws] = He(Kr), Hs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = St();
    return /* @__PURE__ */ d(Bs, { scope: n, id: o, children: /* @__PURE__ */ d(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Hs.displayName = Kr;
var Yr = "SelectLabel", Xr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ws(Yr, n);
    return /* @__PURE__ */ d(X.div, { id: o.id, ...r, ref: t });
  }
);
Xr.displayName = Yr;
var wt = "SelectItem", [Vs, Gr] = He(wt), qr = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, a = ye(wt, n), l = be(wt, n), u = a.value === r, [m, p] = c.useState(i ?? ""), [v, h] = c.useState(!1), g = G(
      t,
      (w) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, w, r, o);
      }
    ), f = St(), x = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d(
      Vs,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: f,
        isSelected: u,
        onItemTextChange: c.useCallback((w) => {
          p((y) => y || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d(
          Rt.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: m,
            children: /* @__PURE__ */ d(
              X.div,
              {
                role: "option",
                "aria-labelledby": f,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": u && v,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: g,
                onFocus: Y(s.onFocus, () => h(!0)),
                onBlur: Y(s.onBlur, () => h(!1)),
                onPointerUp: Y(s.onPointerUp, x),
                onPointerMove: Y(s.onPointerMove, (w) => {
                  var y;
                  o ? (y = l.onItemLeave) == null || y.call(l) : w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Y(s.onPointerLeave, (w) => {
                  var y;
                  w.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: Y(s.onKeyDown, (w) => {
                  var b;
                  ((b = l.searchRef) == null ? void 0 : b.current) !== "" && w.key === " " || (Rs.includes(w.key) && x(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
qr.displayName = wt;
var Ke = "SelectItemText", Zr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = ye(Ke, n), a = be(Ke, n), l = Gr(Ke, n), u = Is(Ke, n), [m, p] = c.useState(null), v = G(
      t,
      (w) => p(w),
      l.onItemTextChange,
      (w) => {
        var y;
        return (y = a.itemTextRefCallback) == null ? void 0 : y.call(a, w, l.value, l.disabled);
      }
    ), h = m == null ? void 0 : m.textContent, g = c.useMemo(
      () => /* @__PURE__ */ d("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: f, onNativeOptionRemove: x } = u;
    return Q(() => (f(g), () => x(g)), [f, x, g]), /* @__PURE__ */ R(_e, { children: [
      /* @__PURE__ */ d(X.span, { id: l.textId, ...i, ref: v }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Ge.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
Zr.displayName = Ke;
var Qr = "SelectItemIndicator", Jr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Gr(Qr, n).isSelected ? /* @__PURE__ */ d(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Jr.displayName = Qr;
var Kt = "SelectScrollUpButton", eo = c.forwardRef((e, t) => {
  const n = be(Kt, e.__scopeSelect), r = pn(Kt, e.__scopeSelect), [o, i] = c.useState(!1), s = G(t, r.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        i(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    no,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
eo.displayName = Kt;
var Yt = "SelectScrollDownButton", to = c.forwardRef((e, t) => {
  const n = be(Yt, e.__scopeSelect), r = pn(Yt, e.__scopeSelect), [o, i] = c.useState(!1), s = G(t, r.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, m = Math.ceil(l.scrollTop) < u;
        i(m);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    no,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
to.displayName = Yt;
var no = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = be("SelectScrollButton", n), s = c.useRef(null), a = At(n), l = c.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), Q(() => {
    var m;
    const u = a().find((p) => p.ref.current === document.activeElement);
    (m = u == null ? void 0 : u.ref.current) == null || m.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ d(
    X.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Y(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: Y(o.onPointerMove, () => {
        var u;
        (u = i.onItemLeave) == null || u.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Y(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), $s = "SelectSeparator", ro = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d(X.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
ro.displayName = $s;
var Xt = "SelectArrow", zs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ot(n), i = ye(Xt, n), s = be(Xt, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ d(Cr, { ...o, ...r, ref: t }) : null;
  }
);
zs.displayName = Xt;
function oo(e) {
  return e === "" || e === void 0;
}
var io = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = c.useRef(null), i = G(t, o), s = Wa(n);
    return c.useEffect(() => {
      const a = o.current, l = window.HTMLSelectElement.prototype, m = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== n && m) {
        const p = new Event("change", { bubbles: !0 });
        m.call(a, n), a.dispatchEvent(p);
      }
    }, [s, n]), /* @__PURE__ */ d(Nr, { asChild: !0, children: /* @__PURE__ */ d("select", { ...r, ref: i, defaultValue: n }) });
  }
);
io.displayName = "BubbleSelect";
function ao(e) {
  const t = de(e), n = c.useRef(""), r = c.useRef(0), o = c.useCallback(
    (s) => {
      const a = n.current + s;
      t(a), function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), i = c.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function so(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = js(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function js(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Us = _r, co = Lr, Ks = Br, Ys = Wr, Xs = Hr, lo = Vr, Gs = Ur, uo = Xr, fo = qr, qs = Zr, Zs = Jr, po = eo, mo = to, ho = ro;
const $n = Us, zn = Ks, Gt = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ R(
  co,
  {
    ref: r,
    className: A(
      "flex h-12 md:h-9 w-full  border-[##ADADAD] items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d(Ys, { asChild: !0, children: /* @__PURE__ */ d(Xo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Gt.displayName = co.displayName;
const vo = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  po,
  {
    ref: n,
    className: A("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d(Go, {})
  }
));
vo.displayName = po.displayName;
const go = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  mo,
  {
    ref: n,
    className: A("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d(qo, {})
  }
));
go.displayName = mo.displayName;
const qt = c.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ d(Xs, { children: /* @__PURE__ */ R(
  lo,
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
      /* @__PURE__ */ d(vo, {}),
      /* @__PURE__ */ d(
        Gs,
        {
          className: A(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ d(go, {})
    ]
  }
) }));
qt.displayName = lo.displayName;
const Qs = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  uo,
  {
    ref: n,
    className: A("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
Qs.displayName = uo.displayName;
const Zt = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ R(
  fo,
  {
    ref: r,
    className: A(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(Zs, { children: /* @__PURE__ */ d(Zo, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d(qs, { children: t })
    ]
  }
));
Zt.displayName = fo.displayName;
const Js = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  ho,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", e),
    ...t
  }
));
Js.displayName = ho.displayName;
var ec = "Separator", jn = "horizontal", tc = ["horizontal", "vertical"], wo = c.forwardRef((e, t) => {
  const { decorative: n, orientation: r = jn, ...o } = e, i = nc(r) ? r : jn, a = n ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ d(
    X.div,
    {
      "data-orientation": i,
      ...a,
      ...o,
      ref: t
    }
  );
});
wo.displayName = ec;
function nc(e) {
  return tc.includes(e);
}
var xo = wo;
const Me = c.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ d(
  xo,
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
Me.displayName = xo.displayName;
const yo = c.forwardRef(
  ({ className: e, ...t }, n) => (
    // <div className="relative w-full overflow-auto">
    /* @__PURE__ */ d("table", { ref: n, className: A("w-full caption-bottom text-sm", e), ...t })
  )
);
yo.displayName = "Table";
const bo = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("thead", { ref: n, className: A("[&_tr]:border-b", e), ...t }));
bo.displayName = "TableHeader";
const So = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("tbody", { ref: n, className: A("[&_tr:last-child]:border-0", e), ...t }));
So.displayName = "TableBody";
const rc = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
rc.displayName = "TableFooter";
const ft = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
ft.displayName = "TableRow";
const Co = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
Co.displayName = "TableHead";
const Qt = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
Qt.displayName = "TableCell";
const oc = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "caption",
  {
    ref: n,
    className: A("mt-4 text-sm text-neutral-500 dark:text-neutral-400", e),
    ...t
  }
));
oc.displayName = "TableCaption";
var No = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Un = K.createContext && /* @__PURE__ */ K.createContext(No), ic = ["attr", "size", "title"];
function ac(e, t) {
  if (e == null) return {};
  var n = sc(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xt.apply(this, arguments);
}
function Kn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kn(Object(n), !0).forEach(function(r) {
      cc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cc(e, t, n) {
  return t = lc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function lc(e) {
  var t = uc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Eo(e) {
  return e && e.map((t, n) => /* @__PURE__ */ K.createElement(t.tag, yt({
    key: n
  }, t.attr), Eo(t.child)));
}
function mn(e) {
  return (t) => /* @__PURE__ */ K.createElement(dc, xt({
    attr: yt({}, e.attr)
  }, t), Eo(e.child));
}
function dc(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = ac(e, ic), a = o || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ K.createElement("svg", xt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: l,
      style: yt(yt({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ K.createElement("title", null, i), e.children);
  };
  return Un !== void 0 ? /* @__PURE__ */ K.createElement(Un.Consumer, null, (n) => t(n)) : t(No);
}
function fc(e) {
  return mn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" }, child: [] }] })(e);
}
function Z({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: A("animate-pulse rounded-md bg-neutral-900/10 dark:bg-neutral-50/10", e),
      ...t
    }
  );
}
const pc = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "h1",
    {
      ref: n,
      className: A("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", e),
      ...t
    }
  )
);
pc.displayName = "H1";
const mc = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
mc.displayName = "H2";
const hc = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "h2",
    {
      ref: n,
      className: A("scroll-m-20 text-2xl font-semibold tracking-tight", e),
      ...t
    }
  )
);
hc.displayName = "H3";
const Po = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "h4",
    {
      ref: n,
      className: A("scroll-m-20 text-xl font-semibold tracking-tight", e),
      ...t
    }
  )
);
Po.displayName = "H4";
const vc = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("p", { ref: n, className: A("leading-7 [&:not(:first-child)]:mt-6", e), ...t })
);
vc.displayName = "P";
const gc = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: A("text-lg font-semibold", e), ...t })
);
gc.displayName = "TextLarge";
const Ro = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: A("text-md font-semibold", e), ...t })
);
Ro.displayName = "TextMedium";
const D = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: A("text-sm font-light leading-none", e), ...t })
);
D.displayName = "TextSmall";
function wc(e) {
  return mn({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" }, child: [] }] })(e);
}
const xc = ({ data: e, isLoading: t }) => {
  var n, r, o, i, s, a, l, u;
  return /* @__PURE__ */ R("div", { className: (A("h-full "), e ? "" : "grayscale"), children: [
    t && /* @__PURE__ */ R("div", { className: "ml-4 mt-8 h-[75dvh] flex flex-col justify-between", children: [
      /* @__PURE__ */ R("div", { className: "flex justify-start gap-24", children: [
        /* @__PURE__ */ d(Z, { className: "h-[2dvh] w-[20%]" }),
        /* @__PURE__ */ d(Z, { className: "h-[2dvh] w-[20%]" })
      ] }),
      /* @__PURE__ */ R("div", { className: "flex flex-col gap-2 pt-8", children: [
        /* @__PURE__ */ d(Z, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-72" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-72" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-40" })
      ] }),
      /* @__PURE__ */ R("div", { className: "flex flex-col gap-2 pt-8", children: [
        /* @__PURE__ */ d(Z, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-60" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-84" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-32" })
      ] }),
      /* @__PURE__ */ R("div", { className: "flex flex-col gap-2 py-8 ", children: [
        /* @__PURE__ */ d(Z, { className: "h-6 w-[150px]" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-72" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-72" }),
        /* @__PURE__ */ d(Z, { className: "h-4 w-24" })
      ] }),
      /* @__PURE__ */ d(Z, { className: "h-[12dvh] w-[100%]" })
    ] }),
    !t && /* @__PURE__ */ R("div", { className: A("md:bg-[#F3F5FD] flex flex-col relative h-[74dvh] "), children: [
      /* @__PURE__ */ R("div", { className: "flex justify-between p-4 items-center relative top-1", children: [
        /* @__PURE__ */ d(Po, { className: "text-[#297FFF]", children: "Summary" }),
        /* @__PURE__ */ R(
          "div",
          {
            className: A(
              "font-bold flex items-center gap-2 absolute right-16",
              (e == null ? void 0 : e.status) === 1 ? "text-green-500" : (e == null ? void 0 : e.status) === 4 ? "text-yellow-500" : ""
            ),
            children: [
              /* @__PURE__ */ d(wc, { size: "8px" }),
              /* @__PURE__ */ d(D, { className: "inline", children: (e == null ? void 0 : e.status) === 4 ? "Pending" : "Active" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ d(Me, { className: "mt-[1vh] w-full" }),
      /* @__PURE__ */ R("div", { className: "p-4 flex flex-col gap-2 ", children: [
        /* @__PURE__ */ d(D, { className: "inline font-bold text-sm ", children: "Contact Information" }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Name:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: (n = e == null ? void 0 : e.customer) == null ? void 0 : n.name })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Phone Number:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: (r = e == null ? void 0 : e.customer) == null ? void 0 : r.phone })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Email ID:",
          " ",
          /* @__PURE__ */ R(D, { className: "inline text-black text-xs", children: [
            " ",
            ((o = e == null ? void 0 : e.customer) == null ? void 0 : o.email) ?? "karan@samsung.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ d(Me, {}),
      /* @__PURE__ */ R("div", { className: "p-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ d(D, { className: "inline font-bold text-sm color-[#7E7E7E]", children: "Plan Details" }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Plan Name:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: e == null ? void 0 : e.display_plan_name })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Plan Serial Number:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: (e && (e == null ? void 0 : e.id)) ?? "" })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Warranty Start Date:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: (e == null ? void 0 : e.warranty_start_date) ?? "N/A" })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Warranty End Date:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: (e == null ? void 0 : e.warranty_end_date) ?? "N/A" })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#297FFF] font-bold", children: [
          "Plan MRP:",
          " ",
          /* @__PURE__ */ R(D, { className: "inline", children: [
            " ",
            ((i = e == null ? void 0 : e.kitprice) == null ? void 0 : i.customer_price) ?? 1999
          ] })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#297FFF] font-bold", children: [
          "Retailer Landing Cost:",
          " ",
          /* @__PURE__ */ R(D, { className: "inline", children: [
            " ",
            ((s = e == null ? void 0 : e.kitprice) == null ? void 0 : s.retailer_price) ?? 1099
          ] })
        ] })
      ] }),
      /* @__PURE__ */ d(Me, {}),
      /* @__PURE__ */ R("div", { className: "p-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ d(D, { className: "inline font-bold text-sm ", children: "Product Details" }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "IMEI Number:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: (a = e == null ? void 0 : e.items[0]) == null ? void 0 : a.imeinumber })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline text-[10px] text-[#7E7E7E]", children: [
          "Model:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: (l = e == null ? void 0 : e.items[0]) == null ? void 0 : l.model })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Product Purchase Date:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: e != null && e.items[0].purchasedate ? st(new Date(e == null ? void 0 : e.items[0].purchasedate), "dd-MM-yyyy") : "" })
        ] }),
        /* @__PURE__ */ R(D, { className: "inline  text-[10px] text-[#7E7E7E]", children: [
          "Product Price:",
          " ",
          /* @__PURE__ */ d(D, { className: "inline text-black text-xs", children: ((u = e == null ? void 0 : e.items[0]) == null ? void 0 : u.price) ?? "0" })
        ] })
      ] })
    ] })
  ] });
}, yc = ({ className: e, size: t = "md", ...n }) => /* @__PURE__ */ d(
  "div",
  {
    className: A(
      "inline-block border-current border-t-transparent rounded-full animate-spin text-[#297FFF]",
      {
        sm: "w-4 h-4 border-2",
        md: "w-8 h-8 border-4",
        lg: "w-12 h-12 border-6"
      }[t],
      e
    ),
    ...n
  }
), Ao = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: A("flex", e), ...t })
);
Ao.displayName = "Flex";
const bc = K.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: A("block", e), ...t })
);
bc.displayName = "Box";
function Sc(e) {
  return mn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z" }, child: [] }] })(e);
}
function Oo({ className: e, classNames: t, showOutsideDays: n = !0, ...r }) {
  return /* @__PURE__ */ d(
    ii,
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
          pt({ variant: "outline" }),
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
          pt({ variant: "ghost" }),
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
Oo.displayName = "Calendar";
function Cc(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var hn = (e) => {
  const { present: t, children: n } = e, r = Nc(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), i = G(r.ref, Ec(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: i }) : null;
};
hn.displayName = "Presence";
function Nc(e) {
  const [t, n] = c.useState(), r = c.useRef({}), o = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = Cc(s, {
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
  return c.useEffect(() => {
    const u = it(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), Q(() => {
    const u = r.current, m = o.current;
    if (m !== e) {
      const v = i.current, h = it(u);
      e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(m && v !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Q(() => {
    if (t) {
      const u = (p) => {
        const h = it(r.current).includes(p.animationName);
        p.target === t && h && Ge.flushSync(() => l("ANIMATION_END"));
      }, m = (p) => {
        p.target === t && (i.current = it(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function it(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ec(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var vn = "Popover", [To, Jc] = bt(vn, [
  Et
]), Qe = Et(), [Pc, Se] = To(vn), Io = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = Qe(t), l = c.useRef(null), [u, m] = c.useState(!1), [p = !1, v] = $t({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ d(br, { ...a, children: /* @__PURE__ */ d(
    Pc,
    {
      scope: t,
      contentId: St(),
      triggerRef: l,
      open: p,
      onOpenChange: v,
      onOpenToggle: c.useCallback(() => v((h) => !h), [v]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: c.useCallback(() => m(!0), []),
      onCustomAnchorRemove: c.useCallback(() => m(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Io.displayName = vn;
var ko = "PopoverAnchor", Rc = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Se(ko, n), i = Qe(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return c.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ d(un, { ...i, ...r, ref: t });
  }
);
Rc.displayName = ko;
var Mo = "PopoverTrigger", _o = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Se(Mo, n), i = Qe(n), s = G(t, o.triggerRef), a = /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Wo(o.open),
        ...r,
        ref: s,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ d(un, { asChild: !0, ...i, children: a });
  }
);
_o.displayName = Mo;
var gn = "PopoverPortal", [Ac, Oc] = To(gn, {
  forceMount: void 0
}), Do = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Se(gn, t);
  return /* @__PURE__ */ d(Ac, { scope: t, forceMount: n, children: /* @__PURE__ */ d(hn, { present: n || i.open, children: /* @__PURE__ */ d(dn, { asChild: !0, container: o, children: r }) }) });
};
Do.displayName = gn;
var Fe = "PopoverContent", Lo = c.forwardRef(
  (e, t) => {
    const n = Oc(Fe, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Se(Fe, e.__scopePopover);
    return /* @__PURE__ */ d(hn, { present: r || i.open, children: i.modal ? /* @__PURE__ */ d(Tc, { ...o, ref: t }) : /* @__PURE__ */ d(Ic, { ...o, ref: t }) });
  }
);
Lo.displayName = Fe;
var Tc = c.forwardRef(
  (e, t) => {
    const n = Se(Fe, e.__scopePopover), r = c.useRef(null), o = G(t, r), i = c.useRef(!1);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return Pr(s);
    }, []), /* @__PURE__ */ d(fn, { as: De, allowPinchZoom: !0, children: /* @__PURE__ */ d(
      Fo,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Y(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || l;
            i.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Y(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Ic = c.forwardRef(
  (e, t) => {
    const n = Se(Fe, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ d(
      Fo,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Fo = c.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: m,
      ...p
    } = e, v = Se(Fe, n), h = Qe(n);
    return er(), /* @__PURE__ */ d(
      en,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ d(
          Jt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: m,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => v.onOpenChange(!1),
            children: /* @__PURE__ */ d(
              Sr,
              {
                "data-state": Wo(v.open),
                role: "dialog",
                id: v.contentId,
                ...h,
                ...p,
                ref: t,
                style: {
                  ...p.style,
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
), Bo = "PopoverClose", kc = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Se(Bo, n);
    return /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
kc.displayName = Bo;
var Mc = "PopoverArrow", _c = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Qe(n);
    return /* @__PURE__ */ d(Cr, { ...o, ...r, ref: t });
  }
);
_c.displayName = Mc;
function Wo(e) {
  return e ? "open" : "closed";
}
var Dc = Io, Lc = _o, Fc = Do, Ho = Lo;
const Bc = Dc, Wc = Lc, Vo = c.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d(Fc, { children: /* @__PURE__ */ d(
  Ho,
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
Vo.displayName = Ho.displayName;
function Hc({
  className: e,
  setDateRange: t
}) {
  const [n, r] = c.useState({
    from: void 0,
    to: void 0
  }), [o, i] = c.useState(!1), s = (l) => {
    t({
      from_date: l.from,
      to_date: l.to
    });
  }, a = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ d("div", { className: A("grid gap-2", e), children: /* @__PURE__ */ R(Bc, { open: o, onOpenChange: i, children: [
    /* @__PURE__ */ d(Wc, { asChild: !0, children: /* @__PURE__ */ R(
      Te,
      {
        id: "date",
        variant: "outline",
        className: A(
          "w-fit justify-start text-left font-normal",
          !n && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ d(Sc, { className: "mr-2 h-4 w-4" }),
          n != null && n.from ? n.to ? /* @__PURE__ */ R(_e, { children: [
            st(n.from, "LLL dd, y"),
            " - ",
            st(n.to, "LLL dd, y")
          ] }) : st(n.from, "LLL dd, y") : /* @__PURE__ */ d("span", { children: "Pick a date range" })
        ]
      }
    ) }),
    /* @__PURE__ */ R(Vo, { className: "w-auto p-0", align: "start", children: [
      /* @__PURE__ */ d(
        Oo,
        {
          initialFocus: !0,
          mode: "range",
          defaultMonth: n == null ? void 0 : n.from,
          selected: n,
          onSelect: r,
          numberOfMonths: 2,
          disabled: (l) => l > a
        }
      ),
      /* @__PURE__ */ d(
        Te,
        {
          className: "ml-[40%] mb-4",
          onClick: () => {
            s(n), i(!1);
          },
          children: "Set Range"
        }
      )
    ] })
  ] }) });
}
function el({
  columns: e,
  isBorder: t,
  data: n,
  totalCount: r,
  isDataLoading: o,
  showFilter: i,
  pagination: s,
  setPagination: a,
  filterField: l,
  setFilterField: u,
  filterInput: m,
  setFilterinput: p,
  showDownloadButton: v,
  isSideSheet: h,
  showPagination: g,
  filterFields: f,
  tableHeight: x = "75vh",
  onIndividualFilterFieldChange: w,
  addItemToTablist: y,
  dateRange: b,
  setDateRange: C
}) {
  const [N, O] = at([]), [E, k] = at("");
  jo();
  const [W, F] = at(), T = ti({
    data: n,
    columns: e,
    getCoreRowModel: ni(),
    getPaginationRowModel: ri(),
    onColumnFiltersChange: O,
    getFilteredRowModel: oi(),
    manualPagination: !0,
    onPaginationChange: a,
    rowCount: r,
    state: {
      columnFilters: N,
      pagination: s
    }
  }), H = () => {
    const S = [], M = Math.floor(2.5), P = Math.ceil(T.getRowCount() / Number(T.getState().pagination.pageSize)), L = T.getState().pagination.pageIndex;
    if (P <= 5)
      for (let _ = 0; _ < P; _++)
        S.push(_);
    else {
      S.push(0);
      let _ = Math.max(L - M, 1), re = Math.min(L + M, P - 2);
      L <= M && (_ = 1, re = 3), L >= P - M && (_ = P - 5 + 1, re = P - 2), _ > 1 && S.push("...");
      for (let J = _; J <= re; J++)
        S.push(J);
      re < P - 2 && S.push("..."), S.push(P - 1);
    }
    return S;
  };
  let z = [];
  z = e.map((S) => S.accessorKey);
  const B = (S) => {
    u(S);
  };
  return Yn(() => {
    var S;
    n.length && (F(T.getRowModel().rows[0].original), k((S = T.getRowModel().rows[0]) == null ? void 0 : S.id));
  }, [n]), /* @__PURE__ */ R(
    "div",
    {
      style: {
        height: x
      },
      className: A("rounded-lg relative z-0 flex w-full h-full ", t ? "border" : ""),
      children: [
        /* @__PURE__ */ R("div", { className: A("flex flex-col h-full", h ? "w-[75%]" : "w-[100%]"), children: [
          (i || v) && /* @__PURE__ */ R("div", { className: "flex items-left p-4 space-x-4 relative w-full", children: [
            i && /* @__PURE__ */ R(_e, { children: [
              /* @__PURE__ */ d(
                Xn,
                {
                  className: "width-[20%] max-w-[20%]",
                  placeholder: l ? `Filter by ${l}` : "Select Filter Field",
                  value: m,
                  disabled: !l,
                  onChange: (S) => {
                    a((M) => ({
                      pageIndex: 0,
                      pageSize: s.pageSize
                    })), p(S.target.value);
                  }
                }
              ),
              /* @__PURE__ */ R(
                $n,
                {
                  className: "absolute",
                  onValueChange: (S) => B(S),
                  children: [
                    /* @__PURE__ */ d(Gt, { className: "w-[180px]", children: /* @__PURE__ */ d(zn, { placeholder: "Select Filter Field" }) }),
                    /* @__PURE__ */ d(qt, { className: "z-[100]", children: z && z.map((S) => {
                      if (xn(S) !== null)
                        return /* @__PURE__ */ d(Zt, { value: S, children: xn(S) }, S);
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(Hc, { dateRange: b, setDateRange: C })
            ] }),
            v && /* @__PURE__ */ d(
              Te,
              {
                className: "rounded-full absolute top-4 right-4 hover:scale-105 transition-transform duration-300 ease-in-out transform",
                variant: "outline",
                children: /* @__PURE__ */ R("div", { className: "flex gap-2 items-center ", children: [
                  /* @__PURE__ */ d(fc, { size: "20px" }),
                  " ",
                  /* @__PURE__ */ d(D, { children: "Report" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ d(Me, { className: "bg-[#EAEAEA]" }),
          /* @__PURE__ */ R("div", { className: " max-h-[65vh] overflow-scroll w-full", children: [
            /* @__PURE__ */ R(yo, { className: "w-full h-fit relative", children: [
              /* @__PURE__ */ R(bo, { className: "sticky w-full top-0 z-0 bg-white p-2", children: [
                T.getHeaderGroups().map((S) => /* @__PURE__ */ d(ft, { className: "border-[#F1F1F1]", children: S.headers.map((M) => /* @__PURE__ */ d(Co, { className: "p-2", children: M.isPlaceholder ? null : wn(M.column.columnDef.header, M.getContext()) }, M.id)) }, S.id)),
                /* @__PURE__ */ d(ft, { className: "border-[#F1F1F1]", children: T.getAllColumns().map((S) => /* @__PURE__ */ d(Qt, {}, S.id)) })
              ] }),
              n ? /* @__PURE__ */ d(So, { className: "w-full h-full", children: o ? /* @__PURE__ */ d(_e, {}) : (
                //ts-expect-error
                T.getRowModel().rows.map((S, M) => /* @__PURE__ */ d(
                  ft,
                  {
                    className: A(
                      "border-[#F1F1F1]",
                      E === S.id ? "bg-[#F3F5FD] hover:bg-[#F3F5FD]" : ""
                    ),
                    "data-state": S.getIsSelected() && "selected",
                    onClick: () => {
                      F(S.original), k(S.id);
                    },
                    children: S.getVisibleCells().map((P) => /* @__PURE__ */ d(
                      Qt,
                      {
                        className: A(
                          "d-table-cell py-4",
                          P.column.id === "claim_id" ? "cursor-pointer" : ""
                        ),
                        onClick: y ? () => {
                          if (P.column.id === "claim_id") {
                            const L = S.getVisibleCells().find((_) => _.column.id === "imei_no");
                            y({
                              label: P.getValue(),
                              value: P.getValue(),
                              imei_number: L ? L.getValue() : void 0
                            });
                          }
                        } : void 0,
                        children: wn(P.column.columnDef.cell, P.getContext())
                      },
                      P.id
                    ))
                  },
                  S.id
                ))
              ) }) : /* @__PURE__ */ d(Ao, { className: "h-[45dvh] w-[800%] justify-center items-center", children: /* @__PURE__ */ d(Ro, { children: "No Data Found..." }) })
            ] }),
            o && /* @__PURE__ */ d("div", { className: "", children: /* @__PURE__ */ d(yc, { size: "md", className: "mt-[28vh] ml-[30vw]" }) })
          ] }),
          !o && g && /* @__PURE__ */ R("div", { className: "mt-auto mr-2 p-2 bottom-0 flex justify-between space-x-2 w-[100%] border-t-gray-200", children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2 ", children: /* @__PURE__ */ d(Gn, { className: "cursor-pointer", children: /* @__PURE__ */ R(qn, { children: [
              /* @__PURE__ */ d(ct, { children: /* @__PURE__ */ R(
                Te,
                {
                  onClick: () => {
                    T.previousPage();
                  },
                  className: A(
                    " rounded p-1 text-gray-400 bg-gray-100 w-auto ",
                    T.getState().pagination.pageIndex === 0 ? "pointer-events-none opacity-50" : void 0
                  ),
                  disabled: !T.getCanPreviousPage(),
                  children: [
                    " ",
                    /* @__PURE__ */ d(Qo, { className: "size-4", "aria-hidden": "true" })
                  ]
                }
              ) }),
              /* @__PURE__ */ d("div", { className: "w-fit max-w-[310px] flex overflow-hidden gap-1", children: H().map((S, M) => /* @__PURE__ */ d("span", { className: "flex items-center gap-2 overflow ", children: /* @__PURE__ */ d(
                ct,
                {
                  className: A(
                    " text-[#7E84A3]  rounded-md hover:scale-110 hover:transition-transform hover:duration-400",
                    S === T.getState().pagination.pageIndex ? "bg-[#E6E6E6]" : "bg-white"
                  ),
                  children: /* @__PURE__ */ d(
                    Zn,
                    {
                      onClick: () => {
                        S !== "..." ? T.setPageIndex(S) : T.setPageIndex(
                          Math.ceil(
                            //@ts-expect-error
                            (H()[M - 1] + H()[M + 1]) / 2
                          )
                        );
                      },
                      children: S === "..." ? "..." : S + 1
                    }
                  )
                }
              ) }, S)) }),
              /* @__PURE__ */ d(ct, { children: /* @__PURE__ */ d(
                Te,
                {
                  onClick: () => {
                    T.nextPage();
                  },
                  className: A(
                    " rounded p-1 text-gray-400 bg-gray-100 w-auto",
                    T.getState().pagination.pageIndex === Math.ceil(
                      T.getRowCount() / Number(T.getState().pagination.pageSize)
                    ) - 1 ? "pointer-events-none opacity-50" : void 0
                  ),
                  children: /* @__PURE__ */ d(Jo, {})
                }
              ) })
            ] }) }) }),
            /* @__PURE__ */ R("div", { className: "w-fit flex items-center space-x-2", children: [
              /* @__PURE__ */ R(D, { className: "flex items-center gap-1 text-sm", children: [
                "Showing",
                " ",
                /* @__PURE__ */ d(D, { className: "font-bold", children: T.getRowModel().rows.length.toLocaleString() }),
                " ",
                "of",
                " ",
                /* @__PURE__ */ d(D, { className: "font-bold", children: T.getRowCount().toLocaleString() }),
                " ",
                "Items"
              ] }),
              /* @__PURE__ */ d(Me, { orientation: "vertical" }),
              /* @__PURE__ */ d(D, { className: "text-sm mr-2", children: "Items per page: " }),
              /* @__PURE__ */ R(
                $n,
                {
                  onValueChange: (S) => {
                    T.setPageSize(Number(S));
                  },
                  children: [
                    /* @__PURE__ */ d(Gt, { className: "w-[100px]", children: /* @__PURE__ */ d(zn, { placeholder: T.getState().pagination.pageSize }) }),
                    /* @__PURE__ */ d(qt, { children: [10, 20, 30, 40, 50].map((S) => (
                      //@ts-expect-error
                      /* @__PURE__ */ d(Zt, { value: S, children: S }, S)
                    )) })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        h && /* @__PURE__ */ d("div", { className: "w-[25%] h-full overflow-scroll", children: /* @__PURE__ */ d(xc, { isLoading: o, data: W }) })
      ]
    }
  );
}
export {
  el as DataTable
};
