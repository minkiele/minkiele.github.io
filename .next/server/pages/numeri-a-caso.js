"use strict";
(() => {
var exports = {};
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 3117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NumeriCasuali_NumeriCasuali)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/lib/EnunciateNumbers.ts
var EnunciateNumbers = __webpack_require__(7706);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/NumeriCasuali/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return jsx_runtime_.jsx(_components.p, {
        children: "Enunciate a number in italian language. I tried to put down in code the way I think we enunciate\nthe numbers in Italy. This demo will generate a pseudo-random number between 1 and 10^30,\nbut it could really go up wherever you want."
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
    return MDXLayout ? jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const README = (MDXContent);

;// CONCATENATED MODULE: ./src/apps/NumeriCasuali/NumeriCasuali.tsx




const NUMBER_LENGTH = 32;
const getRandomNumber = (length = NUMBER_LENGTH)=>{
    const randomLength = Math.floor(Math.random() * length) + 1;
    let randomNumber = "";
    while(randomNumber.length < randomLength){
        const randomDigit = Math.floor(Math.random() * 10);
        // Number must not start with zeroes (unless the number is zero so we can add it)
        if (randomLength === 1 || randomNumber.length > 0 || randomDigit !== 0) {
            randomNumber += randomDigit;
        }
    }
    return randomNumber;
};
const pronunciaNumeroACaso = ()=>{
    const inNumero = getRandomNumber();
    return {
        inNumero,
        aParole: (0,EnunciateNumbers/* pronunciaNumero */.UT)(inNumero)
    };
};
const NumeriCasuali = ()=>{
    const [numeroCasuale, impostaNumeroCasuale] = (0,external_react_.useState)();
    const handleNextRandom = ()=>{
        impostaNumeroCasuale(pronunciaNumeroACaso());
    };
    (0,external_react_.useEffect)(()=>{
        handleNextRandom();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(README, {}),
            numeroCasuale != null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    numeroCasuale.aParole,
                    " (",
                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        children: numeroCasuale.inNumero
                    }),
                    ")"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: handleNextRandom,
                children: "Prossimo numero"
            })
        ]
    });
};
/* harmony default export */ const NumeriCasuali_NumeriCasuali = (NumeriCasuali);


/***/ }),

/***/ 2860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_NumeriCasuali_NumeriCasuali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3117);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_NumeriCasuali_NumeriCasuali__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/numeri-a-caso");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3991:
/***/ ((module) => {

module.exports = import("ramda");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151,930,706], () => (__webpack_exec__(2860)));
module.exports = __webpack_exports__;

})();