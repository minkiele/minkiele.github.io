"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 8375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IT": () => (/* binding */ lazyRouteComponents),
/* harmony export */   "j0": () => (/* binding */ archivedLazyRouteComponents),
/* harmony export */   "w4": () => (/* binding */ allLazyRouteComponents)
/* harmony export */ });
const allLazyRouteComponents = [
    {
        route: "/",
        name: "Minkiele",
        setTitle: false
    },
    {
        route: "/snake",
        name: "Snake"
    },
    {
        route: "/minesweeper",
        name: "Minesweeper"
    },
    {
        route: "/vietnam",
        name: "Vietnam"
    },
    {
        route: "/sudoku",
        name: "Sudoku",
        archived: true
    },
    {
        route: "/anagrammator",
        name: "Anagrammator"
    },
    {
        route: "/cruciverba",
        name: "Cruciverba"
    },
    {
        route: "/numeri-a-caso",
        name: "Numeri a caso",
        archived: true
    },
    {
        route: "/parole",
        name: "Ora a parole"
    },
    {
        route: "/palle",
        name: "Ora a palla",
        archived: true
    },
    {
        route: "/jump-matrix",
        name: "Jumps",
        archived: true
    },
    {
        route: "/fibonacci-triangle",
        name: "Fibonacci's triangle",
        archived: true
    },
    {
        route: "/dragon-fractal",
        name: "The Dragon Fractal"
    },
    {
        route: "/demodogs",
        name: "Demo Dogs",
        archived: true
    },
    {
        route: "/folypo",
        name: "Folypo",
        archived: true
    },
    {
        route: "/factorize",
        name: "Factorizer",
        archived: true
    },
    {
        route: "/archive",
        name: "The Archive",
        prefetch: false
    },
    {
        route: "/three",
        name: "Three",
        archived: true
    }
];
const lazyRouteComponents = allLazyRouteComponents.filter((lazyRouteComponent)=>lazyRouteComponent.archived !== true);
const archivedLazyRouteComponents = allLazyRouteComponents.filter((lazyRouteComponent)=>lazyRouteComponent.archived === true);


/***/ }),

/***/ 4930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ event),
/* harmony export */   "Ew": () => (/* binding */ isNullOrEmpty),
/* harmony export */   "bM": () => (/* binding */ getGetStaticProps),
/* harmony export */   "hC": () => (/* binding */ useGoogleAnalyticsPageviews)
/* harmony export */ });
/* unused harmony export pageview */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_1__]);
ramda__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const getGetStaticProps = (route, staticProps)=>{
    const props = _App__WEBPACK_IMPORTED_MODULE_3__/* .allLazyRouteComponents.find */ .w4.find((lazyRouteComponent)=>lazyRouteComponent.route === route);
    if (props == null) {
        throw new Error("Route not found");
    }
    return ()=>({
            props: {
                ...props,
                ...staticProps
            }
        });
};
const pageview = (url)=>{
    window.gtag?.("config", process.env.NEXT_PUBLIC_ANALYTICS_ID, {
        page_path: url
    });
};
const event = ({ action , category , label , value  })=>{
    window?.gtag?.("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};
const useGoogleAnalyticsPageviews = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        router.events.on("routeChangeComplete", pageview);
        return ()=>{
            router.events.off("routeChangeComplete", pageview);
        };
    }, [
        router.events
    ]);
};
const isNullOrEmpty = (0,ramda__WEBPACK_IMPORTED_MODULE_1__.either)(ramda__WEBPACK_IMPORTED_MODULE_1__.isNil, ramda__WEBPACK_IMPORTED_MODULE_1__.isEmpty);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;