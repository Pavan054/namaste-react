(function () {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire164e"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire164e"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("4McKx", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $37a588eae8cb4ba1$export$6503ec6e8aabbaf; }, function (v) { return $37a588eae8cb4ba1$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $37a588eae8cb4ba1$export$f7ad0328861e2f03; }, function (v) { return $37a588eae8cb4ba1$export$f7ad0328861e2f03 = v; });
var $37a588eae8cb4ba1$export$6503ec6e8aabbaf;
var $37a588eae8cb4ba1$export$f7ad0328861e2f03;
"use strict";
var $37a588eae8cb4ba1$var$mapping = new Map();
function $37a588eae8cb4ba1$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$37a588eae8cb4ba1$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $37a588eae8cb4ba1$var$resolve(id) {
    var resolved = $37a588eae8cb4ba1$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$37a588eae8cb4ba1$export$6503ec6e8aabbaf = $37a588eae8cb4ba1$var$register;
$37a588eae8cb4ba1$export$f7ad0328861e2f03 = $37a588eae8cb4ba1$var$resolve;

});

parcelRegister("4sDv7", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $33f86b01ca99ceaf$export$bdfd709ae4826697; }, function (v) { return $33f86b01ca99ceaf$export$bdfd709ae4826697 = v; });
var $33f86b01ca99ceaf$export$bdfd709ae4826697;
var $33f86b01ca99ceaf$export$c9e73fbda7da57b6;
var $33f86b01ca99ceaf$export$5a759dc7a1cfb72a;
"use strict";
var $33f86b01ca99ceaf$var$bundleURL = {};
function $33f86b01ca99ceaf$var$getBundleURLCached(id) {
    var value = $33f86b01ca99ceaf$var$bundleURL[id];
    if (!value) {
        value = $33f86b01ca99ceaf$var$getBundleURL();
        $33f86b01ca99ceaf$var$bundleURL[id] = value;
    }
    return value;
}
function $33f86b01ca99ceaf$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $33f86b01ca99ceaf$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $33f86b01ca99ceaf$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $33f86b01ca99ceaf$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$33f86b01ca99ceaf$export$bdfd709ae4826697 = $33f86b01ca99ceaf$var$getBundleURLCached;
$33f86b01ca99ceaf$export$c9e73fbda7da57b6 = $33f86b01ca99ceaf$var$getBaseURL;
$33f86b01ca99ceaf$export$5a759dc7a1cfb72a = $33f86b01ca99ceaf$var$getOrigin;

});

var $f33937b18e6b688a$exports = {};


(parcelRequire("4McKx")).register((parcelRequire("4sDv7")).getBundleURL("hif5M"), JSON.parse('["hif5M","index.e418d0ae.js","67Pul","Grocery.f47de5a3.js"]'));

})();
//# sourceMappingURL=index.runtime.acdc96a0.js.map
