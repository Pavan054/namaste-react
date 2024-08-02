
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
parcelRegister("ebWRF", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $a54fc10ce7ab015f$export$2e2bcd8739ae039; });

var $7D8xV = parcelRequire("7D8xV");

var $4H9TQ = parcelRequire("4H9TQ");

var $gy6lW = parcelRequire("gy6lW");
const $a54fc10ce7ab015f$var$Grocery = ()=>{
    const { loggedInUser: loggedInUser } = (0, $4H9TQ.useContext)((0, $gy6lW.default));
    return /*#__PURE__*/ (0, $7D8xV.jsxs)("div", {
        className: "grocery-app",
        children: [
            /*#__PURE__*/ (0, $7D8xV.jsxs)("h1", {
                children: [
                    "Hello ",
                    loggedInUser,
                    ", Welcome to Grocery Store"
                ]
            }),
            /*#__PURE__*/ (0, $7D8xV.jsx)("h1", {
                children: "Our Grocery Online Store is here"
            }),
            /*#__PURE__*/ (0, $7D8xV.jsx)("h2", {
                children: "Imagine it inlcudes a lot of components"
            })
        ]
    });
};
var $a54fc10ce7ab015f$export$2e2bcd8739ae039 = $a54fc10ce7ab015f$var$Grocery;

});


//# sourceMappingURL=Grocery.8325bae9.js.map
