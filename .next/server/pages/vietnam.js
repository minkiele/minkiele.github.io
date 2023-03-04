(() => {
var exports = {};
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 6584:
/***/ ((module) => {

// Exports
module.exports = {
	"vietnam": "Vietnam_vietnam__Qs6NR",
	"vietnam_column": "Vietnam_vietnam_column__fKfz3",
	"vietnam_column__touchSelected": "Vietnam_vietnam_column__touchSelected__eimv_",
	"vietnam_stone": "Vietnam_vietnam_stone__nBMyr"
};


/***/ }),

/***/ 9971:
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
/* harmony import */ var _Vietnam_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6584);
/* harmony import */ var _Vietnam_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Vietnam_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7133);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3991);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useClock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__, ramda__WEBPACK_IMPORTED_MODULE_4__]);
([_Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__, ramda__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const COLS = [
    "left",
    "center",
    "right"
];
const DEFAULT_SIZE = 3;
const Vietnam = ()=>{
    const { board , moves , isValid , size , setSize , move , reset  } = (0,_Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__/* .useVietnam */ .sr)(DEFAULT_SIZE);
    const { touchSelected , touchSelect  } = (0,_Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__/* .useTouchSelect */ .Ag)(move);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { start: startClock , stop: stopClock , reset: resetClock , elapsed: timeElapsed  } = (0,_hooks_useClock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [solution, setSolution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleDragStart = (column)=>(evt)=>{
            evt.dataTransfer.setData("text/plain", column);
        };
    const handleDragOver = (evt)=>{
        evt.preventDefault();
    };
    const handleDrop = (toColumn)=>(evt)=>{
            evt.preventDefault();
            const fromColumn = evt.dataTransfer.getData("text/plain");
            move(fromColumn, toColumn);
        };
    const resetProgress = ()=>{
        if (timerRef.current != null) {
            clearInterval(timerRef.current);
        }
    };
    const handleSetSize = (evt)=>{
        const intSize = parseInt(evt.target.value);
        const newSize = Math.max(1, isNaN(intSize) ? 1 : intSize);
        setSize(newSize);
        resetProgress();
        if (solution.length > 0) {
            setSolutionMoves(newSize);
        }
    };
    const handleReset = ()=>{
        reset();
        resetProgress();
        resetClock();
    };
    const handleSolve = ()=>{
        handleReset();
        const moves = (0,_Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__/* .getMoves */ .h7)(size, "left", "right");
        const intervalLength = size > 1 ? 1000 / (3 * Math.log2(size)) : 0;
        timerRef.current = setInterval(()=>{
            if (moves.length > 0) {
                const { from , to  } = moves.shift();
                move(from, to);
            } else {
                resetProgress();
            }
        }, intervalLength);
    };
    const setSolutionMoves = (size)=>{
        setSolution((0,_Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__/* .getMoves */ .h7)(size, "left", "right"));
    };
    const handleShowSolution = ()=>{
        setSolutionMoves(size);
    };
    const handleTouchSelect = (0,ramda__WEBPACK_IMPORTED_MODULE_4__.thunkify)(touchSelect);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isValid) {
            stopClock();
        } else if (moves > 0) {
            startClock();
        }
    }, [
        startClock,
        stopClock,
        isValid,
        moves
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_README_md__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Vietnam_module_scss__WEBPACK_IMPORTED_MODULE_7___default().vietnam),
                children: COLS.map((col)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
                            [(_Vietnam_module_scss__WEBPACK_IMPORTED_MODULE_7___default().vietnam_column)]: true,
                            [(_Vietnam_module_scss__WEBPACK_IMPORTED_MODULE_7___default().vietnam_column__touchSelected)]: touchSelected.includes(col)
                        }),
                        onDragOver: handleDragOver,
                        onDrop: handleDrop(col),
                        onTouchEnd: handleTouchSelect(col),
                        children: board[col].map((stone, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Vietnam_module_scss__WEBPACK_IMPORTED_MODULE_7___default().vietnam_stone),
                                style: (0,_Vietnam_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStoneStyle */ .w6)(stone, size, 30),
                                draggable: index === 0,
                                onDragStart: handleDragStart(col),
                                children: stone
                            }, `${col}-${stone}`))
                    }, col))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "To move this tower you'll need 2",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                        children: size
                    }),
                    " - 1 = ",
                    2 ** size - 1,
                    " moves, so far you made ",
                    moves,
                    " moves in ",
                    timeElapsed,
                    "s."
                ]
            }),
            isValid && (moves === 2 ** size - 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "You solved it with maximum effort in ",
                    timeElapsed,
                    "s!"
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "You solved it, but you can do better in ",
                    timeElapsed,
                    "s."
                ]
            })),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                            children: "Controls"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "setSize",
                            children: "Size of the tower:"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "setSize",
                            type: "number",
                            onChange: handleSetSize,
                            value: size
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleReset,
                            children: "Reset"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleSolve,
                            children: "Solve"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleShowSolution,
                            children: "Show me the money"
                        })
                    ]
                })
            }),
            solution.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "The money"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                        children: react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(solution.map(({ stone , to  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    "Move stone ",
                                    stone,
                                    " to the ",
                                    to
                                ]
                            })))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vietnam);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ag": () => (/* binding */ useTouchSelect),
/* harmony export */   "h7": () => (/* binding */ getMoves),
/* harmony export */   "sr": () => (/* binding */ useVietnam),
/* harmony export */   "w6": () => (/* binding */ getStoneStyle)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_0__]);
ramda__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getInitialState = (size)=>({
        size,
        board: {
            left: (0,ramda__WEBPACK_IMPORTED_MODULE_0__.range)(1, size + 1),
            center: [],
            right: []
        },
        isValid: false,
        moves: 0
    });
const useVietnam = (defaultSize)=>{
    const [currentState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, action)=>{
        switch(action.type){
            case "move":
                {
                    const isValidMove = action.from !== action.to && state.board[action.from].length > 0 && (state.board[action.to].length === 0 || state.board[action.from][0] < state.board[action.to][0]);
                    if (isValidMove) {
                        const newBoard = {
                            ...state.board,
                            [action.from]: state.board[action.from].slice(1),
                            [action.to]: [
                                state.board[action.from][0],
                                ...state.board[action.to]
                            ]
                        };
                        const isValid = newBoard.center.length === state.size || newBoard.right.length === state.size;
                        return {
                            ...state,
                            board: newBoard,
                            isValid,
                            moves: state.moves + 1
                        };
                    }
                    return state;
                }
            case "setSize":
                {
                    return getInitialState(action.size);
                }
            case "reset":
                {
                    return getInitialState(state.size);
                }
        }
    }, {
        size: defaultSize,
        board: {
            left: (0,ramda__WEBPACK_IMPORTED_MODULE_0__.range)(1, defaultSize + 1),
            center: [],
            right: []
        },
        isValid: false,
        moves: 0
    });
    const setSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((size)=>dispatch({
            type: "setSize",
            size
        }), []);
    const move = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((from, to)=>dispatch({
            type: "move",
            from,
            to
        }), []);
    const reset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: "reset"
        }), []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSize(defaultSize);
    }, [
        defaultSize,
        setSize
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...currentState,
            setSize,
            move,
            reset
        }), [
        currentState,
        setSize,
        move,
        reset
    ]);
};
const getStoneStyle = (stone, stones, minSize = 30)=>({
        width: `calc(${minSize}% + ${(100 - minSize) / Math.max(1, stones - 1) * (stone - 1)}%)`
    });
const getThirdColumn = (from, to)=>{
    switch(from){
        case "left":
            return to === "right" ? "center" : "right";
        case "center":
            return to === "right" ? "left" : "right";
        case "right":
            return to === "left" ? "center" : "left";
    }
};
/**
 * Solve a Tower of Hanoi
 * @param size Size of the tower
 * @param from Starting column
 * @param to Finishing column
 * @returns a list of moves to solve a Tower of Hanoi
 */ const getMoves = (size, from, to)=>{
    const moves = [];
    const subStackTo = getThirdColumn(from, to);
    if (size > 1) {
        moves.push(...getMoves(size - 1, from, subStackTo));
    }
    moves.push({
        stone: size,
        from,
        to
    });
    if (size > 1) {
        moves.push(...getMoves(size - 1, subStackTo, to));
    }
    return moves;
};
const useTouchSelect = (callback)=>{
    const [selected, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selected.length === 2) {
            callback(selected[0], selected[1]);
            setColumns([]);
        }
    }, [
        selected,
        callback
    ]);
    const touchSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((column)=>{
        setColumns((current)=>[
                ...current,
                column
            ]);
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            touchSelected: selected,
            touchSelect
        }), [
        selected,
        touchSelect
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Vietnam_Vietnam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9971);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_Vietnam_Vietnam__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
([_apps_Vietnam_Vietnam__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Vietnam_Vietnam__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/vietnam");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7133:
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
        p: "p",
        strong: "strong",
        ol: "ol",
        li: "li"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "A very basic implementation of the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Tower of Hanoi"
                    }),
                    ". To solve it you must\nmove the pile from the left column to one of the others, but you can\nmove a smaller stone over a bigger one (or to an empty column). To move\na pile of n stones the minimum amount of moves is 2^n - 1, so to move\na 10 stones pile you'll take at least 1023 moves to make it properly."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Once you understand how it works it becomes a very repetitive task, and\nthe challenge becomes remembering where are you during the move, often\nyou'll forget which \"sub-pile\" you're taking down and which one you're\nbuilding up."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The procedure to solve a Tower of Hanoi can be boiled down to a very\nsimple recursive algorithm, so to move a stack of size n from one column\nto another you must:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Move a sub-stack of size n - 1 to the third column;"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Move the last stone to the second column;"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Move the sub-stack of size n - 1 from the third to the second column;"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Apply recursively this sequence to any sub stack you're trying to move."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To play on desktop drag & drop the top stones where you need them; to\nplay on mobile tap the stack you're taking the stone from then tap the\ncolumn where you're leaving it."
            })
        ]
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

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930,135], () => (__webpack_exec__(4871)));
module.exports = __webpack_exports__;

})();