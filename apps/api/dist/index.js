"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// src/utils/asyncHandler.ts
var asyncHandler, asyncHandler_default;
var init_asyncHandler = __esm({
  "src/utils/asyncHandler.ts"() {
    "use strict";
    asyncHandler = (fn) => (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
    asyncHandler_default = asyncHandler;
  }
});

// src/controllers/hello.ts
var import_types_api, getHello;
var init_hello = __esm({
  "src/controllers/hello.ts"() {
    "use strict";
    init_asyncHandler();
    import_types_api = require("types-api");
    getHello = asyncHandler_default(
      (req, res, next) => {
        try {
          const requestData = import_types_api.GetHelloRequestSchema.parse(
            req.body
          );
          const responseData = {
            msg: `Hello ${requestData.sub}`
          };
          const apiResponse = {
            data: responseData,
            errors: null
          };
          res.status(200).json(apiResponse);
        } catch (e) {
          next(e);
        }
      }
    );
  }
});

// src/routes/hello.ts
var require_hello = __commonJS({
  "src/routes/hello.ts"(exports, module2) {
    "use strict";
    var import_express2 = require("express");
    init_hello();
    var router = (0, import_express2.Router)({ mergeParams: true });
    router.post("/", getHello);
    router.get("/secure");
    module2.exports = router;
  }
});

// src/server.ts
var import_express = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_cors = __toESM(require("cors"));
var import_hello = __toESM(require_hello());
var import_express_route_parser = require("express-route-parser");

// src/errorHandler.ts
var import_zod = require("zod");

// src/utils/joinPath.ts
var joinPath = (arr) => {
  return arr.reduce((acc, value) => {
    if (typeof value === "number") {
      return acc + "[" + value + "]";
    }
    const separator = acc === "" ? "" : ".";
    return acc + separator + value;
  }, "");
};

// src/errorHandler.ts
var import_http_status = __toESM(require("http-status"));
var errorHandler = (err, req, res, next) => {
  const errors = [];
  let statusCode = import_http_status.default.INTERNAL_SERVER_ERROR;
  if (err instanceof import_zod.z.ZodError) {
    const zodIssues = err.errors;
    zodIssues.forEach((issue) => {
      const { message, path } = issue;
      var m = message;
      if (path.length > 0) {
        m = `${message} at "${joinPath(path)}"`;
      }
      errors.push({
        code: issue.code.toUpperCase(),
        message: m
      });
      statusCode = import_http_status.default.BAD_REQUEST;
    });
    const apiResponse = {
      data: null,
      errors
    };
    res.status(statusCode).json(apiResponse);
  }
};

// src/server.ts
var createServer = () => {
  const app = (0, import_express.default)();
  app.disable("x-powered-by").use((0, import_morgan.default)("dev")).use(import_express.default.urlencoded({ extended: true })).use(import_express.default.json()).use((0, import_cors.default)());
  app.use("/hello", import_hello.default);
  const allRoutes = (0, import_express_route_parser.parseExpressApp)(app);
  app.get("/route-list", (req, res, next) => res.status(200).json(allRoutes));
  app.use(errorHandler);
  return app;
};

// src/index.ts
var port = process.env.PORT || 5001;
var server = createServer();
server.listen(port, () => {
  console.log(`api running on ${port}`);
});
