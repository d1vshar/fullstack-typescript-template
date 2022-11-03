var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/NewTabLink.tsx
import { jsx } from "react/jsx-runtime";
var NewTabLink = (_a) => {
  var _b = _a, {
    children,
    href
  } = _b, other = __objRest(_b, [
    "children",
    "href"
  ]);
  return /* @__PURE__ */ jsx("a", __spreadProps(__spreadValues({
    target: "_blank",
    rel: "noreferrer",
    href
  }, other), {
    children
  }));
};

// src/CounterButton.tsx
import * as React from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    style: {
      background: `rgba(0,0,0,0.05)`,
      borderRadius: `8px`,
      padding: "1.5rem",
      fontWeight: 500
    },
    children: [
      /* @__PURE__ */ jsxs("p", {
        style: { margin: "0 0 1.5rem 0" },
        children: [
          "This component is from",
          " ",
          /* @__PURE__ */ jsx2("code", {
            style: {
              padding: "0.2rem 0.3rem",
              background: `rgba(0,0,0,0.1)`,
              borderRadius: "0.25rem"
            },
            children: "ui"
          })
        ]
      }),
      /* @__PURE__ */ jsx2("div", {
        children: /* @__PURE__ */ jsxs("button", {
          style: {
            background: "black",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            display: "inline-block",
            cursor: "pointer"
          },
          type: "button",
          onClick: () => setCount((c) => c + 1),
          children: [
            "Count: ",
            count
          ]
        })
      })
    ]
  });
};
export {
  CounterButton,
  NewTabLink
};
