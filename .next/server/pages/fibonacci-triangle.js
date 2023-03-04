(() => {
var exports = {};
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 9855:
/***/ ((module) => {

// Exports
module.exports = {
	"triangles_render": "Triangles_triangles_render__cFnW8"
};


/***/ }),

/***/ 2149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Triangles_Triangles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/lib/triangles-dragons/triangles.ts
const P = Symbol("P");
const D = Symbol("D");
function Oddity(O1, O2) {
    return O1 === O2 ? P : D;
}
const triangle = [];
function addRow(triangle) {
    const row = [
        D
    ];
    if (triangle.length) {
        const lastRow = triangle[triangle.length - 1];
        for(let j = 0; j < lastRow.length - 1; j += 1){
            row.push(Oddity(lastRow[j], lastRow[j + 1]));
        }
        row.push(D);
    }
    triangle.push(row);
}
for(let i = 0; i < Math.pow(2, 8); i += 1){
    addRow(triangle);
}
const P_REP = " ";
const D_REP = "*";
function rowToString(row, PRep = P_REP, DRep = D_REP) {
    return row.map((single)=>single === D ? DRep : PRep).join("");
}
function getTriangle(limit = 2 ** 8) {
    const triangle = [];
    for(let i = 0; i < limit; i += 1){
        addRow(triangle);
    }
    return triangle;
}
function triangleToStringRows(triangle, PRep = P_REP, DRep = D_REP) {
    return triangle.map((row)=>rowToString(row, PRep, DRep));
}
function triangleToString(triangle, PRep = P_REP, DRep = D_REP) {
    return triangleToStringRows(triangle, PRep, DRep).join("\n");
} // console.log(triangleToString(triangle));

// EXTERNAL MODULE: ./src/apps/Triangles/Triangles.module.scss
var Triangles_module = __webpack_require__(9855);
var Triangles_module_default = /*#__PURE__*/__webpack_require__.n(Triangles_module);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/Triangles/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return jsx_runtime_.jsx(_components.p, {
        children: "This is a graphic representation of the Fibonacci sequence, where the\nfillings are odd numbers and the void are even numbers. Using 2^n steps\nhelps rendering full triangles."
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
    return MDXLayout ? jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const README = (MDXContent);

;// CONCATENATED MODULE: ./src/apps/Triangles/Triangles.tsx





const Triangles = ()=>{
    const [triangles, setTriangles] = (0,external_react_.useState)(4);
    const handleTriangles = (evt)=>{
        const newTriangles = parseInt(evt.target.value);
        if (newTriangles >= 0) {
            setTriangles(newTriangles);
        }
    };
    const cachedRender = (0,external_react_.useMemo)(()=>triangleToString(getTriangle(2 ** triangles), " ", "*"), [
        triangles
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(README, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                        children: "Generator controls"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "newTriangles",
                        children: [
                            "This will generate 2",
                            /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                                children: triangles
                            }),
                            " (",
                            2 ** triangles,
                            ") rows"
                        ]
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "newTriangles",
                        type: "number",
                        onChange: handleTriangles,
                        value: triangles
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                className: (Triangles_module_default()).triangles_render,
                children: cachedRender
            })
        ]
    });
};
/* harmony default export */ const Triangles_Triangles = (Triangles);


/***/ }),

/***/ 8300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Triangles_Triangles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2149);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Triangles_Triangles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/fibonacci-triangle");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3991:
/***/ ((module) => {

"use strict";
module.exports = import("ramda");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(8300)));
module.exports = __webpack_exports__;

})();