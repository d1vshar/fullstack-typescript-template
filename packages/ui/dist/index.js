"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  CounterButton: () => CounterButton
});
module.exports = __toCommonJS(src_exports);

// src/CounterButton.tsx
var React = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    style: {
      background: `rgba(0,0,0,0.05)`,
      borderRadius: `8px`,
      padding: "1.5rem",
      fontWeight: 500
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        style: { margin: "0 0 1.5rem 0" },
        children: [
          "This component is from",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            style: {
              padding: "0.2rem 0.3rem",
              background: `rgba(0,0,0,0.1)`,
              borderRadius: "0.25rem"
            },
            children: "ui"
          }),
          " ",
          "package"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CounterButton
});
