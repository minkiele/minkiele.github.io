"use strict";
exports.id = 135;
exports.ids = [135];
exports.modules = {

/***/ 5135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useClock = ()=>{
    const [timeStatus, setTimeStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, action)=>{
        switch(action){
            case "start":
                {
                    if (state.started == null) {
                        const now = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
                        return {
                            started: now,
                            current: now,
                            elapsed: 0
                        };
                    } else {
                        return state;
                    }
                }
            case "stop":
                {
                    return {
                        ...state,
                        started: null,
                        current: null
                    };
                }
            case "reset":
                {
                    return {
                        started: null,
                        current: null,
                        elapsed: 0
                    };
                }
            default:
                const now1 = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
                return {
                    ...state,
                    current: now1,
                    elapsed: state.current?.diff(state.started, "s") ?? 0
                };
        }
    }, {
        started: null,
        current: null,
        elapsed: 0
    });
    const commands = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            start: ()=>setTimeStatus("start"),
            stop: ()=>setTimeStatus("stop"),
            reset: ()=>setTimeStatus("reset")
        }), []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (timeStatus.started != null) {
            const timerId = setInterval(()=>{
                setTimeStatus("update");
            }, 1000);
            return ()=>{
                clearTimeout(timerId);
            };
        }
        return undefined;
    }, [
        timeStatus.started
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...timeStatus,
            ...commands
        }), [
        commands,
        timeStatus
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClock);


/***/ })

};
;