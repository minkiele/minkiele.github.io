(() => {
var exports = {};
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 1597:
/***/ ((module) => {

// Exports
module.exports = {
	"polypo_polygon": "Polypo_polypo_polygon__6SqnU"
};


/***/ }),

/***/ 6172:
/***/ ((module) => {

// Exports
module.exports = {
	"polygon": "Polygon_polygon__Nt1_t"
};


/***/ }),

/***/ 1864:
/***/ ((module) => {

// Exports
module.exports = {
	"slice": "Slice_slice__0Y29r",
	"slice__even": "Slice_slice__even__hkN5X",
	"slice__odd": "Slice_slice__odd__st2w7"
};


/***/ }),

/***/ 5306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Polygon_Polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2444);
/* harmony import */ var _Polypo_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1597);
/* harmony import */ var _Polypo_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Polypo_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7385);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Polygon_Polygon__WEBPACK_IMPORTED_MODULE_2__]);
_components_Polygon_Polygon__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const castInput = (input, deft)=>{
    const cast = parseInt(input);
    return isNaN(cast) ? deft : Math.max(cast, deft);
};
const Polypo = ()=>{
    const [{ sides , radius  }, setParams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        sides: 4,
        radius: 128
    });
    const handleChangeSides = (evt)=>{
        setParams((currentParams)=>({
                ...currentParams,
                sides: castInput(evt.target.value, 2)
            }));
    };
    const handleChangeRadius = (evt)=>{
        setParams((currentParams)=>({
                ...currentParams,
                radius: castInput(evt.target.value, 1)
            }));
    };
    const renderedApp = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Polygon_Polygon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                sides: sides,
                radius: radius,
                className: (_Polypo_module_scss__WEBPACK_IMPORTED_MODULE_4___default().polypo_polygon)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                        children: "Generator configuration"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "sides",
                        children: "Number of sides:"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "sides",
                        id: "sides",
                        value: sides,
                        onChange: handleChangeSides,
                        type: "number"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "radius",
                        children: "Radius of the surrounding circle: "
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "sides",
                        id: "sides",
                        value: radius,
                        onChange: handleChangeRadius,
                        type: "number"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_README_md__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            renderedApp
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Polypo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Slice_Slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7364);
/* harmony import */ var _Polygon_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6172);
/* harmony import */ var _Polygon_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Polygon_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_2__]);
ramda__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Polygon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ sides , radius , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            [(_Polygon_module_scss__WEBPACK_IMPORTED_MODULE_5___default().polygon)]: true,
            [(_Polygon_module_scss__WEBPACK_IMPORTED_MODULE_5___default().polygon__aspectRatio)]: radius == null,
            [className]: className
        }),
        style: radius == null ? undefined : {
            width: 2 * radius,
            height: 2 * radius
        },
        children: (0,ramda__WEBPACK_IMPORTED_MODULE_2__.times)((side)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Slice_Slice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                radius: radius,
                sides: sides,
                side: side
            }, side), sides % 2 === 0 ? sides / 2 : sides)
    }));
Polygon.displayName = "Polygon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Polygon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Slice_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1864);
/* harmony import */ var _Slice_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Slice_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Slice = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ sides , side  })=>{
    const angle = Math.PI / sides;
    const baseHeight = 50 * Math.cos(angle);
    const width = 100 * Math.sin(angle);
    const rotate = 2 * angle * side;
    const transform = `translateX(-50%) rotate(${rotate}rad)`;
    const even = sides % 2 === 0;
    const height = baseHeight * (even ? 2 : 1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            [(_Slice_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slice)]: true,
            [(_Slice_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slice__even)]: even,
            [(_Slice_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slice__odd)]: !even
        }),
        style: {
            width: `${width}%`,
            height: `${height}%`,
            transform
        }
    });
});
Slice.displayName = "Slice";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slice);


/***/ }),

/***/ 206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Polypo_Polypo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5306);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_Polypo_Polypo__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
([_apps_Polypo_Polypo__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Polypo_Polypo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/folypo");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1151);
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
        children: "Simple engine to print regular polygons using HTML. For fun I turned on\nshadows to see what was drawn inside, because above 20 sides they looked\npretty much all the same."
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(206)));
module.exports = __webpack_exports__;

})();