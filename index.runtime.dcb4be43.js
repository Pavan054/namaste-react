
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
parcelRegister("5B02S", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $41307177ad52b8cb$export$6503ec6e8aabbaf; }, function (v) { return $41307177ad52b8cb$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $41307177ad52b8cb$export$f7ad0328861e2f03; }, function (v) { return $41307177ad52b8cb$export$f7ad0328861e2f03 = v; });
var $41307177ad52b8cb$export$6503ec6e8aabbaf;
var $41307177ad52b8cb$export$f7ad0328861e2f03;
"use strict";
var $41307177ad52b8cb$var$mapping = new Map();
function $41307177ad52b8cb$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$41307177ad52b8cb$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $41307177ad52b8cb$var$resolve(id) {
    var resolved = $41307177ad52b8cb$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$41307177ad52b8cb$export$6503ec6e8aabbaf = $41307177ad52b8cb$var$register;
$41307177ad52b8cb$export$f7ad0328861e2f03 = $41307177ad52b8cb$var$resolve;

});

var $9abb996b24edc610$exports = {};

(parcelRequire("5B02S")).register(new URL("", import.meta.url).toString(), JSON.parse('["53E04","index.0d44110e.js","dBMAk","Grocery.8325bae9.js"]'));


//# sourceMappingURL=index.runtime.dcb4be43.js.map
