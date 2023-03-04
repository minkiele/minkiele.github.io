(() => {
var exports = {};
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 4527:
/***/ ((module) => {

// Exports
module.exports = {
	"app": "Cruciverba_app__iETEl",
	"app_table": "Cruciverba_app_table__LBRQV",
	"app_td": "Cruciverba_app_td__SuAPY",
	"app_td__grey": "Cruciverba_app_td__grey__BPIPl",
	"app_input": "Cruciverba_app_input__kFBhz",
	"app_definition": "Cruciverba_app_definition__60Hbg",
	"app_black": "Cruciverba_app_black__fLXRP",
	"app_caption": "Cruciverba_app_caption__nHTrn",
	"app_definitions": "Cruciverba_app_definitions___MNKj",
	"app_directionDefinitions": "Cruciverba_app_directionDefinitions__FEFKz",
	"app_definitionInput": "Cruciverba_app_definitionInput__3wXJf",
	"app_wrapper": "Cruciverba_app_wrapper__QBtoh"
};


/***/ }),

/***/ 265:
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
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2480);
/* harmony import */ var _Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4527);
/* harmony import */ var _Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_1__]);
ramda__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DEFAULT_ROWS = 12;
const DEFAULT_COLS = 22;
const DEFAULT_SHOW_DEFS = false;
const DEFAULT_SHOW_NUMBERS = true;
const INCROCI_OBBLIGATI_ROWS = 13;
const INCROCI_OBBLIGATI_COLS = 9;
const INCROCI_OBBLIGATI_SHOW_DEFS = false;
const INCROCI_OBBLIGATI_SHOW_NUMBERS = false;
const RICERCA_ROWS = 12;
const RICERCA_COLS = 14;
const RICERCA_SHOW_DEFS = false;
const RICERCA_SHOW_NUMBERS = true;
const CORNICI_ROWS = 13;
const CORNICI_COLS = 13;
const CORNICI_SHOW_DEFS = false;
const CORNICI_SHOW_NUMBERS = false;
const shouldBeBlack = (row, col, matrix)=>{
    if (matrix[row][col] == null) {
        return true;
    }
    const isPreviousRowBlack = row === 0 ? true : matrix[row - 1][col] == null;
    const isPreviousColBlack = col === 0 ? true : matrix[row][col - 1] == null;
    const isNextRowBlack = row === matrix.length - 1 ? true : matrix[row + 1][col] == null;
    const isNextColBlack = col === matrix[row].length - 1 ? true : matrix[row][col + 1] == null;
    return isPreviousRowBlack && isPreviousColBlack && isNextRowBlack && isNextColBlack;
};
const getDefinitions = (matrix)=>{
    const definitions = [];
    for(let i = 0; i < matrix.length; i += 1){
        for(let j = 0; j < matrix[i].length; j += 1){
            if (matrix[i][j] != null) {
                const isPreviousRowBlack = i === 0 ? true : matrix[i - 1][j] == null;
                const isPreviousColBlack = j === 0 ? true : matrix[i][j - 1] == null;
                const hasOneFreeRowAfter = i < matrix.length - 1 ? matrix[i + 1][j] != null : false;
                const hasOneFreeColAfter = j < matrix[i].length - 1 ? matrix[i][j + 1] != null : false;
                const isVertical = isPreviousRowBlack && hasOneFreeRowAfter;
                const isHorizontal = isPreviousColBlack && hasOneFreeColAfter;
                if (isHorizontal || isVertical) {
                    definitions.push({
                        order: definitions.length + 1,
                        row: i,
                        col: j,
                        isHorizontal,
                        isVertical,
                        horizontalDefinition: "",
                        verticalDefinition: ""
                    });
                }
            }
        }
    }
    return definitions;
};
const dumpMatrix = (fromMatrix, toMatrix)=>{
    for(let i = 0; i < toMatrix.length; i += 1){
        for(let j = 0; j < toMatrix[i].length; j += 1){
            if (i < fromMatrix.length && j < fromMatrix[i].length) {
                toMatrix[i][j] = fromMatrix[i][j];
            }
        }
    }
};
const initReducer = ({ rows , cols , showDefs =true , showNumbers =true , direction ="H" , oldState  })=>{
    const matrix = (0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)(()=>(0,ramda__WEBPACK_IMPORTED_MODULE_1__.repeat)("", cols), rows);
    let definitions;
    if (oldState == null) {
        definitions = getDefinitions(matrix);
    } else {
        // If providing an old state copy some data from the old matrix
        dumpMatrix(oldState.matrix, matrix);
        definitions = getDefinitions(oldState.matrix);
    }
    return {
        matrix,
        definitions,
        rows,
        cols,
        showDefs,
        showNumbers,
        direction
    };
};
const isGreyRow = (isCorniciConcentricheMode, currentRow, currentCol)=>isCorniciConcentricheMode && (currentRow % 2 === 1 && (currentCol >= currentRow && currentCol < CORNICI_COLS - currentRow || currentCol >= CORNICI_ROWS - currentRow - 1 && currentCol < CORNICI_COLS - (CORNICI_ROWS - currentRow - 1)) || currentCol % 2 === 1 && (currentRow >= currentCol && currentRow < CORNICI_ROWS - currentCol || currentRow >= CORNICI_COLS - currentCol - 1 && currentRow < CORNICI_ROWS - (CORNICI_COLS - currentCol - 1)));
function Cruciverba() {
    const [{ matrix , definitions , rows: ROWS , cols: COLS , showDefs , showNumbers , direction  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)((state, action)=>{
        switch(action.type){
            case "setValue":
                {
                    const newState = (0,ramda__WEBPACK_IMPORTED_MODULE_1__.clone)(state.matrix);
                    newState[action.row][action.col] = action.value;
                    return {
                        ...state,
                        matrix: newState
                    };
                }
            case "toggleBlack":
                {
                    const newState1 = (0,ramda__WEBPACK_IMPORTED_MODULE_1__.clone)(state.matrix);
                    newState1[action.row][action.col] = newState1[action.row][action.col] == null ? "" : null;
                    return {
                        ...state,
                        matrix: newState1,
                        definitions: getDefinitions(newState1)
                    };
                }
            case "setSize":
                {
                    return initReducer({
                        rows: action.rows,
                        cols: action.cols,
                        showDefs: state.showDefs,
                        showNumbers: state.showNumbers,
                        oldState: state
                    });
                }
            case "setDefinition":
                {
                    return {
                        ...state,
                        definitions: state.definitions.reduce((acc, definition)=>[
                                ...acc,
                                {
                                    ...definition,
                                    ...definition.row === action.row && definition.col === action.col && {
                                        horizontalDefinition: action.horizontalDefinition,
                                        verticalDefinition: action.verticalDefinition
                                    }
                                }
                            ], [])
                    };
                }
            case "setShowDefs":
                {
                    return {
                        ...state,
                        showDefs: action.showDefs
                    };
                }
            case "setShowNumbers":
                {
                    return {
                        ...state,
                        showNumbers: action.showNumbers
                    };
                }
            case "setIncrociObbligatiMode":
                {
                    return initReducer({
                        rows: INCROCI_OBBLIGATI_ROWS,
                        cols: INCROCI_OBBLIGATI_COLS,
                        showDefs: INCROCI_OBBLIGATI_SHOW_DEFS,
                        showNumbers: INCROCI_OBBLIGATI_SHOW_NUMBERS
                    });
                }
            case "setRicercaMode":
                {
                    const newState2 = initReducer({
                        rows: RICERCA_ROWS,
                        cols: RICERCA_COLS,
                        showDefs: RICERCA_SHOW_DEFS,
                        showNumbers: RICERCA_SHOW_NUMBERS
                    });
                    // First 3 cells usually are marked black
                    for(let i = 0; i < 3; i += 1){
                        newState2.matrix[0][i] = null;
                    }
                    return {
                        ...newState2,
                        definitions: getDefinitions(newState2.matrix)
                    };
                }
            case "wipe":
                {
                    const newMatrix = state.matrix.map((row)=>row.map((col)=>col == null ? null : ""));
                    return initReducer({
                        rows: state.rows,
                        cols: state.cols,
                        showDefs: state.showDefs,
                        showNumbers: state.showNumbers,
                        oldState: {
                            ...state,
                            matrix: newMatrix,
                            definitions: getDefinitions(newMatrix)
                        }
                    });
                }
            case "setCorniciConcentricheMode":
                {
                    const newState3 = initReducer({
                        rows: CORNICI_ROWS,
                        cols: CORNICI_COLS,
                        showDefs: CORNICI_SHOW_DEFS,
                        showNumbers: CORNICI_SHOW_NUMBERS
                    });
                    newState3.matrix[Math.floor(CORNICI_ROWS / 2)][Math.floor(CORNICI_ROWS / 2)] = null;
                    return {
                        ...newState3,
                        definitions: getDefinitions(newState3.matrix)
                    };
                }
            case "setDirection":
                {
                    return {
                        ...state,
                        direction: action.direction
                    };
                }
        }
    }, {
        rows: DEFAULT_ROWS,
        cols: DEFAULT_COLS,
        showDefs: DEFAULT_SHOW_DEFS,
        showNumbers: DEFAULT_SHOW_NUMBERS,
        direction: "H"
    }, initReducer);
    const rowsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const colsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const inputsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        // Every time size of the inputs change ricreate the inputs matrix
        inputsRef.current = (0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)((row)=>(0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)((col)=>inputsRef.current?.[row]?.[col], COLS), ROWS);
    }, [
        ROWS,
        COLS
    ]);
    const setRefCallbackFactory = (row, col)=>(ref)=>{
            if (row < inputsRef.current.length && col < inputsRef.current[row].length) {
                inputsRef.current[row][col] = ref;
            }
        };
    const { h: horizontalDefs , v: verticalDefs  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>definitions.reduce((acc, definition)=>({
                ...acc,
                ...definition.isHorizontal && {
                    h: [
                        ...acc.h,
                        definition
                    ]
                },
                ...definition.isVertical && {
                    v: [
                        ...acc.v,
                        definition
                    ]
                }
            }), {
            h: [],
            v: []
        }), [
        definitions
    ]);
    const handleChangeFactory = (row, col)=>(evt)=>{
            const value = evt.target.value.toUpperCase();
            if (/^[A-Z]?$/.test(value)) {
                dispatch({
                    type: "setValue",
                    row,
                    col,
                    value
                });
            }
        };
    const handleToggleBlackFactory = (row, col)=>()=>{
            dispatch({
                type: "toggleBlack",
                row,
                col
            });
        };
    const handleSetSize = (evt)=>{
        evt.preventDefault();
        const rows = parseInt(rowsRef.current?.value ?? "");
        const cols = parseInt(colsRef.current?.value ?? "");
        dispatch({
            type: "setSize",
            rows: isNaN(rows) || rows < 2 ? DEFAULT_ROWS : rows,
            cols: isNaN(cols) || cols < 2 ? DEFAULT_COLS : cols
        });
    };
    const handleDefinitionFactory = (definition, direction)=>(evt)=>{
            dispatch({
                type: "setDefinition",
                row: definition.row,
                col: definition.col,
                horizontalDefinition: direction === "h" ? evt.target.value : definition.horizontalDefinition,
                verticalDefinition: direction === "v" ? evt.target.value : definition.verticalDefinition
            });
        };
    const handleToggleDefs = (evt)=>{
        dispatch({
            type: "setShowDefs",
            showDefs: evt.target.checked
        });
    };
    const handleToggleNumbers = (evt)=>{
        dispatch({
            type: "setShowNumbers",
            showNumbers: evt.target.checked
        });
    };
    const handleChangeDirection = (evt)=>{
        dispatch({
            type: "setDirection",
            direction: evt.target.value
        });
    };
    const handleSimpleAction = (type)=>()=>{
            dispatch({
                type
            });
        };
    const handleKeyDownNavigateFactory = (row, col)=>(evt)=>{
            if (evt.key === " ") {
                // Must prevent default otherwise page will slide down!
                evt.preventDefault();
                dispatch({
                    type: "toggleBlack",
                    row,
                    col
                });
            }
            if (evt.key === "ArrowUp" && row > 0) {
                inputsRef.current.reduceRight((acc, current, index)=>acc == null && index < row && current[col] != null ? current[col] : acc, null)?.focus();
            }
            if (evt.key === "ArrowDown" && row < matrix.length - 1) {
                inputsRef.current.reduce((acc, current, index)=>acc == null && index > row && current[col] != null ? current[col] : acc, null)?.focus();
            }
            if (evt.key === "ArrowLeft" && col > 0) {
                inputsRef.current[row].reduceRight((acc, current, index)=>acc == null && index < col && current != null ? current : acc, null)?.focus();
            }
            if (evt.key === "ArrowRight" && col < matrix[row].length - 1) {
                inputsRef.current[row].reduce((acc, current, index)=>acc == null && index > col && current != null ? current : acc, null)?.focus();
            }
            if (evt.key === "Backspace" && (inputsRef.current[row][col]?.value).length === 0 && col > 0) {
                inputsRef.current[row].reduceRight((acc, current, index)=>acc == null && index < col && current != null ? current : acc, null)?.focus();
            }
        };
    const handleKeyUpNavigateFactory = (row, col)=>(evt)=>{
            if (/^[a-zA-Z]$/.test(evt.key)) {
                if (direction === "H" && col < matrix[row].length - 1) {
                    inputsRef.current[row].reduce((acc, current, index)=>acc == null && index > col && current != null ? current : acc, null)?.focus();
                } else if (direction === "V" && row < matrix.length - 1) {
                    inputsRef.current.reduce((acc, current, index)=>acc == null && index > row && current[col] != null ? current[col] : acc, null)?.focus();
                }
            }
        };
    const isIncrociObbligatiMode = ROWS === INCROCI_OBBLIGATI_ROWS && COLS === INCROCI_OBBLIGATI_COLS && showDefs === INCROCI_OBBLIGATI_SHOW_DEFS && showNumbers === INCROCI_OBBLIGATI_SHOW_NUMBERS;
    const isRicercaMode = ROWS === RICERCA_ROWS && COLS === RICERCA_COLS && showDefs === RICERCA_SHOW_DEFS && showNumbers === RICERCA_SHOW_NUMBERS && matrix[0][0] == null && matrix[0][1] == null && matrix[0][2] == null;
    const isCorniciConcentricheMode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>ROWS === CORNICI_ROWS && COLS === CORNICI_COLS && showDefs === CORNICI_SHOW_DEFS && showNumbers === CORNICI_SHOW_NUMBERS && matrix.every((row, rowIndex)=>row.every((col, colIndex)=>(0,ramda__WEBPACK_IMPORTED_MODULE_1__.xor)(rowIndex === Math.floor(CORNICI_ROWS / 2) && colIndex === Math.floor(CORNICI_COLS / 2), col != null))), [
        matrix,
        COLS,
        ROWS,
        showDefs,
        showNumbers
    ]);
    // Update settings when changing
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (rowsRef.current != null) {
            rowsRef.current.value = `${ROWS}`;
        }
        if (colsRef.current != null) {
            colsRef.current.value = `${COLS}`;
        }
    }, [
        ROWS,
        COLS
    ]);
    // Workaround to avoid a whole tab shifting
    const renderedApp = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_table),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("caption", {
                        className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_caption),
                        children: isIncrociObbligatiMode ? "Incroci Obbligati" : isRicercaMode ? "Ricerca di Parole Crociate" : isCorniciConcentricheMode ? "Cornici Concentriche" : "Parole Crociate"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: (0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)((row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                children: (0,ramda__WEBPACK_IMPORTED_MODULE_1__.times)((col)=>{
                                    const definition = definitions.find((definition)=>definition.row === row && definition.col === col);
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                                            [(_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_td)]: true,
                                            [(_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_td__grey)]: isGreyRow(isCorniciConcentricheMode, row, col)
                                        }),
                                        onDoubleClick: handleToggleBlackFactory(row, col),
                                        children: shouldBeBlack(row, col, matrix) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_black)
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                showNumbers && definition != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_definition),
                                                    children: definition.order
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_input),
                                                    name: `input-${row}-${col}`,
                                                    type: "text",
                                                    value: matrix[row][col],
                                                    onChange: handleChangeFactory(row, col),
                                                    maxLength: 1,
                                                    ref: setRefCallbackFactory(row, col),
                                                    onKeyDown: handleKeyDownNavigateFactory(row, col),
                                                    onKeyUp: handleKeyUpNavigateFactory(row, col),
                                                    autoComplete: "off"
                                                })
                                            ]
                                        })
                                    }, `${row}-${col}`);
                                }, COLS)
                            }, row), ROWS)
                    })
                ]
            }),
            showDefs && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_definitions),
                children: [
                    horizontalDefs.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_directionDefinitions),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Orizzontali"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                children: horizontalDefs.map((definition, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        value: definition.order,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_definitionInput),
                                            name: `h-${definition.order}`,
                                            type: "text",
                                            value: definition.horizontalDefinition,
                                            onChange: handleDefinitionFactory(definition, "h")
                                        })
                                    }, `h-${definition.order}-${index}`))
                            })
                        ]
                    }),
                    verticalDefs.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_directionDefinitions),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Verticali"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                children: verticalDefs.map((definition, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        value: definition.order,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_definitionInput),
                                            name: `v-${definition.order}`,
                                            type: "text",
                                            value: definition.verticalDefinition,
                                            onChange: handleDefinitionFactory(definition, "v")
                                        })
                                    }, `v-${definition.order}-${index}`))
                            })
                        ]
                    })
                ]
            })
        ]
    });
    const settings = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSetSize,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                    children: "Opzioni"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "rows",
                    children: "Numero di righe:"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    name: "rows",
                    defaultValue: ROWS,
                    ref: rowsRef,
                    type: "number"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "cols",
                    children: "Numero di colonne:"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    name: "cols",
                    defaultValue: COLS,
                    ref: colsRef,
                    type: "number"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    children: "Update"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "showDefs",
                    name: "showDefs",
                    checked: showDefs,
                    onChange: handleToggleDefs,
                    type: "checkbox",
                    value: "showDefs"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "showDefs",
                    children: "Mostra definizioni"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "showNumbers",
                    name: "showNumbers",
                    checked: showNumbers,
                    onChange: handleToggleNumbers,
                    type: "checkbox",
                    value: "showNumbers"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "showNumbers",
                    children: "Mostra numeri"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "directionHorizontal",
                    name: "direction",
                    checked: direction === "H",
                    onChange: handleChangeDirection,
                    type: "radio",
                    value: "H"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "directionHorizontal",
                    children: "Muoviti in orizzontale"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "directionVertical",
                    name: "direction",
                    checked: direction === "V",
                    onChange: handleChangeDirection,
                    type: "radio",
                    value: "V"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "directionVertical",
                    children: "Muoviti in verticale"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: handleSimpleAction("setIncrociObbligatiMode"),
                    type: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                            children: "Incroci obbligati"
                        }),
                        " mode"
                    ]
                }),
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: handleSimpleAction("setRicercaMode"),
                    type: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                            children: "Ricerca di Parole Crociate"
                        }),
                        " mode"
                    ]
                }),
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: handleSimpleAction("setCorniciConcentricheMode"),
                    type: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                            children: "Cornici Concentriche"
                        }),
                        " mode"
                    ]
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleSimpleAction("wipe"),
                    type: "button",
                    children: "Wipe"
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_README_md__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Cruciverba_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_wrapper),
                children: renderedApp
            }),
            settings
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cruciverba);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Cruciverba_Cruciverba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_Cruciverba_Cruciverba__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
([_apps_Cruciverba_Cruciverba__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Cruciverba_Cruciverba__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/cruciverba");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2480:
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
        h2: "h2",
        ul: "ul",
        li: "li",
        em: "em"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "An implementation of the crosswords schema with automatic calculation of\ndefinitions number."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Instructions"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Click (or tap) on cells to activate the input. After providing a valid input\nyou're automatically moved to the next horizontal cell."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "By double clicking a cell or pressing ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                                children: "spacebar"
                            }),
                            " you toggle the block.\nOn mobile devices it can be hard to toggle the block, you may have to focus\non an input and then ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                                children: "very rapidly"
                            }),
                            " double tap the cell."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "You should try the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Incroci Obbligati"
                    }),
                    " mode, it seriously helped me to\nsolve some scheme that were ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "DOOOOMED"
                    }),
                    " on paper. Inspired by that I added\nsome other recurring schemes in the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Settimana Enigmistica"
                    }),
                    "."
                ]
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
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(5557)));
module.exports = __webpack_exports__;

})();