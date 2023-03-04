(() => {
var exports = {};
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 3082:
/***/ ((module) => {

// Exports
module.exports = {
	"circles": "Circles_circles__Vfred",
	"circles_circleContainer": "Circles_circles_circleContainer__Ah0Hh",
	"circles_circle": "Circles_circles_circle__EzOyI"
};


/***/ }),

/***/ 1608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Circles_Circles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/apps/Circles/Circles.module.scss
var Circles_module = __webpack_require__(3082);
var Circles_module_default = /*#__PURE__*/__webpack_require__.n(Circles_module);
;// CONCATENATED MODULE: ./src/apps/Circles/Circles.utils.ts
const isLeapYear = (year)=>year % 4 === 0 && (year % 100 !== 0 || year % 4000 === 0);
const getDaysInMonth = (month, year)=>{
    switch(month){
        case 1:
            return isLeapYear(year) ? 29 : 28;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        default:
            return 31;
    }
};
const getDaySize = (day)=>((day + 6) % 7 + 1) / 7;
const getDateSize = (day, month, year)=>day / getDaysInMonth(month, year);
const getMonthSize = (month)=>(month + 1) / 12;
const getHourSize = (hour)=>hour / 24;
const getMinuteSize = (minute)=>minute / 60;
const getDayOfYear = (date, month, year)=>{
    let output = date;
    for(let m = 0; m < month; m += 1){
        output += getDaysInMonth(m, year);
    }
    return output;
};
const getClockSizes = (date)=>({
        day: getDaySize(date.getDay()),
        date: getDateSize(date.getDate(), date.getMonth(), date.getFullYear()),
        month: getMonthSize(date.getMonth()),
        hour: getHourSize(date.getHours()),
        minute: getMinuteSize(date.getMinutes()),
        second: getMinuteSize(date.getSeconds()),
        dayOfYear: getDayOfYear(date.getDate(), date.getMonth(), date.getFullYear()),
        fullHour: date.getHours()
    });
const getGetCircleSize = (size)=>{
    // Diameter is proportional to the occupied area, not to the radius
    // We don't need PI, after normalization it's just the diameter square root
    const diameter = 100 * size ** 0.5;
    return {
        width: `${diameter}%`,
        height: `${diameter}%`
    };
};
const CIRCLES = [
    "day",
    "date",
    "month",
    "hour",
    "minute",
    "second"
];

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/Circles/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return jsx_runtime_.jsx(_components.p, {
        children: "This is a full clock that renders all the date and time parameters that can be limited into a range.\nCircles are filled in relation to the area, not the radius, and that's a curious effect because you don't expect\nhow the same area occupied at the start of a period is free at the end of said period. Also date and time colors\nare statically interpolated and are set for every hour and every day."
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
    return MDXLayout ? jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const README = (MDXContent);

;// CONCATENATED MODULE: ./src/apps/Circles/Circles.tsx





const getCircleSizes = ()=>getClockSizes(new Date());
const Circles = ()=>{
    const [circleSizes, setCircleSizes] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        setCircleSizes(getCircleSizes());
        const intervalId = setInterval(()=>{
            setCircleSizes(getCircleSizes());
        }, 1000);
        return ()=>{
            clearInterval(intervalId);
        };
    }, []);
    const getDoy = (0,external_react_.useCallback)((circle, doy)=>{
        return circle === "date" || circle === "day" || circle === "month" ? doy : undefined;
    }, []);
    const getHour = (0,external_react_.useCallback)((circle, hour)=>{
        return circle === "hour" || circle === "minute" || circle === "second" ? hour : undefined;
    }, []);
    const renderedApp = circleSizes != null && /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Circles_module_default()).circles,
        children: CIRCLES.map((circle)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Circles_module_default()).circles_circleContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Circles_module_default()).circles_circle,
                    "data-doy": getDoy(circle, circleSizes.dayOfYear),
                    "data-h": getHour(circle, circleSizes.fullHour),
                    style: getGetCircleSize(circleSizes[circle])
                })
            }, circle))
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(README, {}),
            renderedApp
        ]
    });
};
/* harmony default export */ const Circles_Circles = (Circles);


/***/ }),

/***/ 673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Circles_Circles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1608);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Circles_Circles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/palle");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(673)));
module.exports = __webpack_exports__;

})();