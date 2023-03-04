"use strict";
(() => {
var exports = {};
exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 1951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Anagrammator_Anagrammator)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(4305);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);
;// CONCATENATED MODULE: external "anagrammator-minkiele"
const external_anagrammator_minkiele_namespaceObject = require("anagrammator-minkiele");
var external_anagrammator_minkiele_default = /*#__PURE__*/__webpack_require__.n(external_anagrammator_minkiele_namespaceObject);
// EXTERNAL MODULE: ./src/lib/ubermath.ts
var ubermath = __webpack_require__(4573);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/Anagrammator/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        strong: "strong"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx(_components.p, {
                children: "Get anagrams for the provided input."
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    jsx_runtime_.jsx(_components.strong, {
                        children: "Warning"
                    }),
                    ": since the growth of the number is almost\nexponential I capped the generator. If total number of anagrams exceed\n10000 they won't be generated, but you can see stats about them."
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
    return MDXLayout ? jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const README = (MDXContent);

;// CONCATENATED MODULE: ./src/apps/Anagrammator/Anagrammator.tsx






const normalizeInput = (input)=>{
    const trimmedInput = input.trim();
    return trimmedInput.length > 0 ? trimmedInput.toUpperCase().replace(/[^A-Z]/, "") : trimmedInput;
};
function Anagrammator() {
    const [{ value , anagramms , size , total , skipped , formula  }, setState] = (0,external_react_.useState)({
        value: "",
        anagramms: [],
        size: 0,
        total: 0,
        skipped: 0,
        formula: undefined
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceGenerateAnagrams = (0,external_react_.useCallback)(external_lodash_debounce_default()((input)=>{
        const newTotal = input.length > 0 ? ubermath/* UberMath.factorial */.H.factorial(input.length) : 0;
        new Promise((resolve, reject)=>{
            const total = (0,external_anagrammator_minkiele_namespaceObject.countAnagrams)(input);
            if (total < 10000) {
                const newAnagramms = external_anagrammator_minkiele_default()(input);
                resolve(newAnagramms);
            } else {
                reject(total);
            }
        }).then((newAnagramms)=>{
            setState((oldState)=>{
                const newSize = newAnagramms.length;
                const newSkipped = newTotal - newSize;
                return {
                    ...oldState,
                    anagramms: newAnagramms,
                    size: newSize,
                    total: newTotal,
                    skipped: newSkipped,
                    formula: (0,external_anagrammator_minkiele_namespaceObject.getCountAnagramFactors)(input)
                };
            });
        }, (newSize)=>{
            setState((oldState)=>{
                const newSkipped = newTotal - newSize;
                return {
                    ...oldState,
                    anagramms: [],
                    size: newSize,
                    total: newTotal,
                    skipped: newSkipped,
                    formula: (0,external_anagrammator_minkiele_namespaceObject.getCountAnagramFactors)(input)
                };
            });
        });
    }, 500), []);
    (0,external_react_.useEffect)(()=>{
        debounceGenerateAnagrams(value);
        return ()=>{
            debounceGenerateAnagrams.cancel();
        };
    }, [
        debounceGenerateAnagrams,
        value
    ]);
    const handleChangeValue = (evt)=>{
        setState((oldState)=>({
                ...oldState,
                value: normalizeInput(evt.target.value)
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(README, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                        children: "Generator controls"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "input",
                        children: "Type in a word:"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "input",
                        value: value,
                        type: "text",
                        onChange: handleChangeValue
                    }),
                    " "
                ]
            }),
            total > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Facts"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                children: "Found Anagrams:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                children: size
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                children: "Total Combinations:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                children: total
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                children: "Skipped Combinations:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                children: skipped
                            })
                        ]
                    }),
                    formula != null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                children: "Formula:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                children: [
                                    formula.numerator,
                                    " / (",
                                    formula.denominator.join(" * "),
                                    ")"
                                ]
                            })
                        ]
                    }),
                    anagramms.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "The anagrams"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                                children: external_react_.Children.toArray(anagramms.map((anagramm)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: anagramm
                                    }, anagramm)))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Anagrammator_Anagrammator = (Anagrammator);


/***/ }),

/***/ 1443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Anagrammator_Anagrammator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1951);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Anagrammator_Anagrammator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/anagrammator");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4305:
/***/ ((module) => {

module.exports = require("lodash.debounce");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930,573], () => (__webpack_exec__(1443)));
module.exports = __webpack_exports__;

})();