"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/server.ts
var import_express = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_cors = __toESM(require("cors"));
var createServer = () => {
  const app = (0, import_express.default)();
  app.disable("x-powered-by").use((0, import_morgan.default)("dev")).use(import_express.default.urlencoded({ extended: true })).use(import_express.default.json()).use((0, import_cors.default)());
  return app;
};

// src/index.ts
var port = process.env.PORT || 5001;
var server = createServer();
server.listen(port, () => {
  console.log(`api running on ${port}`);
});
