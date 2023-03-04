"use strict";
(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 3008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Info_Info)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/Info/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        p: "p",
        h3: "h3",
        em: "em",
        a: "a"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx(_components.h2, {
                children: "About the author"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "Hi there, my name is Michele, I'm 38.\nI was born and raised in Italy, in a small town nearby Venice lagoon and I\nstill live there."
            }),
            "\n",
            jsx_runtime_.jsx(_components.h3, {
                children: "That article that never got published"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "Some years ago I wrote a little profile article about myself, just as I\nswitched jobs, and it was going to be published in my current company's\njournal as a piece about getting to know some new employees. I wrote that\nas the ones you see on book jackets; I must say that's one of the funniest\nand most ridiculous things I've ever written."
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "Well, it never got published, and my life changed in the last years, as I\nthink it happened for everybody, so it isn't very accurate; and I'd like to\nprotect, for what is worth, whatever little is left of my privacy."
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.h2, {
                children: [
                    "About ",
                    jsx_runtime_.jsx(_components.em, {
                        children: "this"
                    }),
                    " little project"
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "I rounded up a lot of little projects I wrote on my personal and work laptop.\nSome of those already had a UI, to some others I built one just for this purpose.\nThen I started styling the website, to give it a cool nerdy retro look. After\nthat I added support for dark theme. After that I started to optimize and tweak\nthe build, trying to learn new things, mostly on Webpack."
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    'This you\'re seeing now is a "port" of the main project made in ',
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://nextjs.org/",
                        children: "Next.js"
                    }),
                    ".\nCode is mostly the same, though I had to make some changes to accomodate\nNext.js requirements. Some of these changes are actually good and will be applied\nback into the original ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://create-react-app.dev/",
                        children: "Create React App"
                    }),
                    " environment\nI first used to make this portfolio. Also, I wrote this paragraph just to break\nGithub Pages cache (and I'm realizing now that Next.js uses a unique path to files\nwhich would break cache anyways)."
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "About other little projects"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "Yes, I have another little project published in Github:\n",
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://minkiele.github.io/EnigmaUI",
                        children: "EnigmaUI"
                    }),
                    ". This is a\njavascript implementation of the Enigma Machine."
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

;// CONCATENATED MODULE: ./src/apps/Info/Info.tsx


const Info = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(README, {})
    });
/* harmony default export */ const Info_Info = (Info);


/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Info_Info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3008);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Info_Info__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(5532)));
module.exports = __webpack_exports__;

})();