(() => {
var exports = {};
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 9633:
/***/ ((module) => {

// Exports
module.exports = {
	"cell": "SudokuUI_cell__kqDLR",
	"input": "SudokuUI_input__RguoQ",
	"table": "SudokuUI_table__I1r8r"
};


/***/ }),

/***/ 7257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ generateStartSudokuMatrix)
/* harmony export */ });
/* unused harmony export generateSudoku */
const times = (cb, length)=>Array.from({
        length
    }).map((_, index)=>cb(index));
const range = (length, start = 0, step = 1)=>times((index)=>start + index * step, length);
const randomizer = ()=>Math.random() - 0.5;
const isInRow = (what, rowIndex, matrix)=>matrix[rowIndex].includes(what);
const isInCol = (what, colIndex, matrix)=>matrix.some((row)=>row[colIndex] === what);
const isInSquare = (what, rowIndex, colIndex, matrix)=>matrix.slice(rowIndex - rowIndex % 3, rowIndex - rowIndex % 3 + 3).some((row)=>row.slice(colIndex - colIndex % 3, colIndex - colIndex % 3 + 3).some((col)=>col === what));
const getNumbersSet = ()=>range(9, 1).sort(randomizer);
const getEmptyMatrix = ()=>times((row)=>row === 0 ? getNumbersSet() : times(()=>undefined, 9), 9);
/**
 * This does not work, because more frequently than you think
 * it will generate the same number
 * @returns The array with the sudoku
 */ const generateSudoku = ()=>{
    let matrix = getEmptyMatrix();
    for(let row = 1; row < 9; row += 1){
        for(let col = 0; col < 9; col += 1){
            const candidates = range(9, 1).sort(randomizer);
            while(candidates.length > 0){
                const candidate = candidates.shift();
                if (!isInRow(candidate, row, matrix) && !isInCol(candidate, col, matrix) && !isInSquare(candidate, row, col, matrix)) {
                    matrix[row][col] = candidate;
                    break;
                }
            }
            // If I didn't find any suitable candidate then I must retry the whole row
            if (matrix[row][col] == null) {
                // Evidence shows that after completing 5 rows there's a high probability
                // (1 in 5 chances) of running in an infinite loop. If this is the case
                // then we must restart from the beginning.
                if (row === 5) {
                    matrix = getEmptyMatrix();
                    row = 0;
                    break;
                } else {
                    matrix[row] = times(()=>undefined, 9);
                    // Restart
                    col = -1;
                }
            }
        }
    }
    return matrix;
};
const MASKS = [
    /* Settimana Enigmistica n. 4734 */ [
        [
            true,
            false,
            false,
            false,
            false,
            false,
            true,
            false,
            false
        ],
        [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false
        ],
        [
            false,
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            true
        ],
        [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false
        ],
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false
        ],
        [
            true,
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            false
        ],
        [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false
        ],
        [
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            true
        ]
    ],
    /* Settimana Enigmistica n. 4735 */ [
        [
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            false,
            false
        ],
        [
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            false
        ],
        [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false
        ],
        [
            true,
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false
        ],
        [
            false,
            true,
            false,
            false,
            true,
            false,
            false,
            true,
            false
        ],
        [
            false,
            false,
            false,
            false,
            false,
            true,
            false,
            true,
            false
        ],
        [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false
        ],
        [
            false,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true
        ],
        [
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            true,
            false
        ]
    ],
    /* Settimana Enigmistica n. 4735 */ [
        [
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false
        ],
        [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        [
            true,
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            false
        ],
        [
            true,
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            false
        ],
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        [
            false,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            true
        ],
        [
            false,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            true
        ],
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true
        ],
        [
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true
        ]
    ]
];
const getRandomMask = ()=>MASKS[Math.floor(Math.random() * MASKS.length)];
const generateStartSudokuMatrix = ()=>{
    const matrix = generateSudoku();
    const mask = getRandomMask();
    const output = [];
    for(let row = 0; row < 9; row += 1){
        output[row] = [];
        for(let col = 0; col < 9; col += 1){
            output[row][col] = mask[row][col] ? `${matrix[row][col]}` : "";
        }
    }
    return output;
};


/***/ }),

/***/ 5345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_generateClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1844);
/* harmony import */ var _SudokuUI_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9633);
/* harmony import */ var _SudokuUI_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SudokuUI_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9975);
/* harmony import */ var _hooks_useClock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5135);
/* harmony import */ var _Sudoku_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_1__]);
ramda__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const STORAGE_KEY = "io.github.minkiele.SudokuUI.matrix";
const getSudokuMatrix = (matrix)=>matrix.map((row)=>row.map((col)=>{
            const numCol = parseInt(col);
            return isNaN(numCol) ? null : numCol;
        }));
function SudokuUI() {
    const sanitizeValue = (input)=>{
        const inputNumber = Number(input);
        return isNaN(inputNumber) || inputNumber < 1 || inputNumber > 9 ? "" : `${inputNumber}`;
    };
    const [matrix, setMatrix] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_Sudoku_utils__WEBPACK_IMPORTED_MODULE_6__/* .generateStartSudokuMatrix */ .n)());
    const setValue = ({ row , col , value  })=>setMatrix((state)=>(0,ramda__WEBPACK_IMPORTED_MODULE_1__.assocPath)([
                row,
                col
            ], sanitizeValue(value), state));
    const [valid, setValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    /**
   * @link https://stackoverflow.com/questions/66096260/why-am-i-getting-referenceerror-self-is-not-defined-when-i-import-a-client-side
   * to see why I did adopt this solution to make validation work
   */ const validatorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2416, 23)).then(({ SudokuMatrix  })=>SudokuMatrix));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        validatorRef.current.then((SudokuMatrix)=>{
            const validator = new SudokuMatrix(getSudokuMatrix(matrix));
            setValid(validator.isValid());
        });
    }, [
        matrix
    ]);
    const { start: startClock , stop: stopClock , reset: resetClock , elapsed: elapsedTime  } = (0,_hooks_useClock__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (valid) {
            stopClock();
        }
    }, [
        valid,
        stopClock
    ]);
    const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)(()=>(0,ramda__WEBPACK_IMPORTED_MODULE_1__.repeat)(null, 9), 9));
    const handleChange = (row, col)=>(evt)=>{
            setValue({
                row,
                col,
                value: evt.target.value
            });
            startClock();
        };
    const setRefFactory = (row, col)=>(ref)=>{
            inputRefs.current[row][col] = ref;
        };
    // Keep track of the cursor position before we move otherwise it won't work correctly
    const selectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const handleSelectionFactory = (row, col)=>()=>{
            selectionRef.current = inputRefs.current[row][col]?.selectionStart;
        };
    const handleMoveFactory = (row, col)=>(evt)=>{
            switch(evt.key){
                case "ArrowUp":
                    if (row > 0) {
                        inputRefs.current[row - 1][col]?.focus();
                    }
                    break;
                case "ArrowDown":
                    if (row < 8) {
                        inputRefs.current[row + 1][col]?.focus();
                    }
                    break;
                case "ArrowLeft":
                    if (col > 0 && !selectionRef.current) {
                        inputRefs.current[row][col - 1]?.focus();
                    }
                    break;
                case "ArrowRight":
                    if (col < 8 && (selectionRef.current || !evt.currentTarget.value.length)) {
                        inputRefs.current[row][col + 1]?.focus();
                    }
                    break;
            }
        };
    const handleStore = ()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(matrix));
    };
    const handleRestore = ()=>{
        const serializedMatrix = localStorage.getItem(STORAGE_KEY);
        if (serializedMatrix != null) {
            try {
                const restoredMatrix = JSON.parse(serializedMatrix);
                setMatrix(restoredMatrix);
                resetClock();
            } catch (_) {}
        }
    };
    const handleEmpty = ()=>{
        setMatrix((0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)(()=>(0,ramda__WEBPACK_IMPORTED_MODULE_1__.repeat)("", 9), 9));
        resetClock();
    };
    const handleNew = ()=>{
        setMatrix((0,_Sudoku_utils__WEBPACK_IMPORTED_MODULE_6__/* .generateStartSudokuMatrix */ .n)());
        resetClock();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_README_md__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: (_SudokuUI_module_scss__WEBPACK_IMPORTED_MODULE_7___default().table),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("caption", {
                        children: [
                            elapsedTime,
                            "s ",
                            valid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Bravo, the sudoku is valid!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: (0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)((row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                children: (0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)((col)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: (0,_lib_generateClassName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                                            [(_SudokuUI_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cell)]: true
                                        }),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            // It will spawn the phone input in mobile
                                            type: "tel",
                                            id: `input-${row}-${col}`,
                                            value: matrix[row][col],
                                            onChange: handleChange(row, col),
                                            className: (_SudokuUI_module_scss__WEBPACK_IMPORTED_MODULE_7___default().input),
                                            ref: setRefFactory(row, col),
                                            onKeyDown: handleSelectionFactory(row, col),
                                            onKeyUp: handleMoveFactory(row, col),
                                            autoComplete: "off"
                                        })
                                    }, `col-${row}-${col}`), 9)
                            }, `row-${row}`), 9)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                        children: "Controls"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: handleNew,
                        children: "New"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: handleStore,
                        children: "Store"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: handleRestore,
                        children: "Restore"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: handleEmpty,
                        children: "Empty"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SudokuUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((classnames__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 7501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_SudokuUI_SudokuUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5345);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_SudokuUI_SudokuUI__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
([_apps_SudokuUI_SudokuUI__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_SudokuUI_SudokuUI__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/sudoku");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9975:
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
        em: "em"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Simple Sudoku matrix. This whole application was born to actually\nintegrate yet another library I wrote to check the correctness of the\nsudoku, then I added a sudoku generator. First by generating the matrix\nwhere I found that with a high probability the 6th row would never complete,\nadding a reset switch that would completely restart the generation in that case,\nand second by adding some masks I copied from the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Settimana Enigmistica"
                    }),
                    ". With\na little bit of good will I'll add other masks as I have plenty of those.\n(It's kind of boring as you have to copy 81 values from a piece of paper)."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "I really don't know if the masks are enough to provide solvability to the\nSudoku, I didn't do any research on the Sudoku theoretics, I just\npieced together things I already knew by completing dozens and dozens of them."
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

/***/ 2416:
/***/ ((module) => {

"use strict";
module.exports = require("minkiele-sudoku-matrix");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930,135], () => (__webpack_exec__(7501)));
module.exports = __webpack_exports__;

})();