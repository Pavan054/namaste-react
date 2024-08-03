(function () {

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

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
  var parcelRequire = $parcel$global["parcelRequire164e"];
var parcelRegister = parcelRequire.register;
parcelRegister("aj0ed", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $780bdb130da3b0c7$export$2e2bcd8739ae039; });

var $hguoa = parcelRequire("hguoa");

var $0W44u = parcelRequire("0W44u");

var $gVNSV = parcelRequire("gVNSV");
const $780bdb130da3b0c7$var$Grocery = ()=>{
    const { loggedInUser: loggedInUser } = (0, $0W44u.useContext)((0, $gVNSV.default));
    return /*#__PURE__*/ (0, $hguoa.jsxs)("div", {
        className: "grocery-app",
        children: [
            /*#__PURE__*/ (0, $hguoa.jsxs)("h1", {
                children: [
                    "Hello ",
                    loggedInUser,
                    ", Welcome to Grocery Store"
                ]
            }),
            /*#__PURE__*/ (0, $hguoa.jsx)("h1", {
                children: "Our Grocery Online Store is here"
            }),
            /*#__PURE__*/ (0, $hguoa.jsx)("h2", {
                children: "Imagine it inlcudes a lot of components"
            })
        ]
    });
};
var $780bdb130da3b0c7$export$2e2bcd8739ae039 = $780bdb130da3b0c7$var$Grocery;

});

})();
//# sourceMappingURL=Grocery.f47de5a3.js.map
