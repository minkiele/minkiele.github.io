(() => {
var exports = {};
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 8570:
/***/ ((module) => {

// Exports
module.exports = {
	"cell": "JumpMatrix_cell__r41i6",
	"cell__visible": "JumpMatrix_cell__visible__JAi3m"
};


/***/ }),

/***/ 5525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ apps_JumpMatrix_JumpMatrix)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/lib/JumpMatrix.ts
class JumpMatrix {
    isSolved() {
        return this.move === this.size ** 2;
    }
    constructor(size = 5){
        this.size = size;
        this.row = -1;
        this.col = -1;
        this.move = 0;
        this.matrix = Array(this.size).fill(undefined).map(()=>Array(this.size).fill(undefined));
    }
    getRandomUpTo(limit) {
        return Math.floor(Math.random() * limit);
    }
    setStartPosition() {
        do {
            this.row = this.getRandomUpTo(this.size);
            this.col = this.getRandomUpTo(this.size);
        }while (this.getValueAtCurrentPosition() != null);
    }
    advandceOneMove() {
        this.move += 1;
    }
    isPositionCandidate(row, col) {
        return row >= 0 && row < this.size && col >= 0 && col < this.size && this.matrix[row][col] == null;
    }
    getCandidateCoordinates(rowOffset = 0, colOffset = 0) {
        return [
            this.row + rowOffset,
            this.col + colOffset
        ];
    }
    advancePosition(row, col) {
        this.setCurrentPosition(row, col);
        this.advandceOneMove();
        this.setValueAtCurrentPosition();
        return this;
    }
    advance() {
        while(this.move < this.size ** 2){
            const testedPositions = Array(8).fill(false);
            let advanced = false;
            let rowCandidate = -1;
            let colCandidate = -1;
            do {
                const direction = this.getRandomUpTo(8);
                switch(direction){
                    case 0:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(-3);
                            break;
                        }
                    case 1:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(-2, 2);
                            break;
                        }
                    case 2:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(0, 3);
                            break;
                        }
                    case 3:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(2, 2);
                            break;
                        }
                    case 4:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(3);
                            break;
                        }
                    case 5:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(2, -2);
                            break;
                        }
                    case 6:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(0, -3);
                            break;
                        }
                    case 7:
                        {
                            [rowCandidate, colCandidate] = this.getCandidateCoordinates(-2, -2);
                            break;
                        }
                }
                if (!testedPositions[direction] && this.isPositionCandidate(rowCandidate, colCandidate)) {
                    this.advancePosition(rowCandidate, colCandidate);
                    advanced = true;
                }
                testedPositions[direction] = true;
            }while (!advanced && testedPositions.includes(false));
            if (!testedPositions.includes(false) && !advanced) {
                throw new Error("Cannot move anymore");
            }
        }
    }
    getValueAtCurrentPosition() {
        return this.matrix[this.row][this.col];
    }
    setCurrentPosition(row, col) {
        this.row = row;
        this.col = col;
        return this;
    }
    setValueAtCurrentPosition() {
        this.matrix[this.row][this.col] = this.move;
        return this;
    }
    playFrom(row, col) {
        // Positioning the starting point the first move
        this.advandceOneMove();
        this.setCurrentPosition(row, col);
        this.setValueAtCurrentPosition();
        this.advance();
    }
    play() {
        // Positioning the starting point the first move
        this.advandceOneMove();
        this.setStartPosition();
        this.setValueAtCurrentPosition();
        this.advance();
    }
    toString() {
        return this.matrix.map((row)=>{
            const printableRow = row.map((col)=>`${col == null || col < 10 ? " " : ""}${col == null ? " " : col}`).join(" ");
            return `[ ${printableRow} ]`;
        }).join("\n");
    }
    getMatrix() {
        // Copy the matrix
        return this.matrix.map((row)=>row.slice());
    }
    getValueAt(row, col) {
        return this.matrix[row][col];
    }
    getMove() {
        return this.move;
    }
}

// EXTERNAL MODULE: ./src/apps/JumpMatrix/JumpMatrix.module.scss
var JumpMatrix_module = __webpack_require__(8570);
var JumpMatrix_module_default = /*#__PURE__*/__webpack_require__.n(JumpMatrix_module);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/JumpMatrix/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        p: "p"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx(_components.h2, {
                children: "The game"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "This is a game I did learn in middle school, you have a 5x5 square, and you must fill the\nsquare with the numbers from 1 to 25. You can start wherever you want but you can move from cell\nto cell following these rules: moving horizontally or vertically you must jump 2 cells,\nmoving diagonally you must jump 1 cell. It seems hard but you average 19 moves before\nending."
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

;// CONCATENATED MODULE: ./src/apps/JumpMatrix/JumpMatrix.tsx






const runJumpMatrix = ()=>{
    let tries = 0;
    let done = false;
    let moves = 0;
    let jm;
    do {
        jm = new JumpMatrix();
        tries += 1;
        try {
            jm.play();
            done = true;
        } catch (err) {}
        moves += jm.getMove();
    }while (!done);
    return {
        matrix: jm,
        tries,
        moves
    };
};
const JumpMatrix_JumpMatrix = ()=>{
    const [result, setMatrixState] = (0,external_react_.useState)();
    const matrix = result?.matrix;
    const moves = result?.moves;
    const tries = result?.tries;
    (0,external_react_.useEffect)(()=>{
        setMatrixState(runJumpMatrix());
    }, []);
    const [visible, setVisible] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        // Delay by 250ms to actualy re-render with mutated classes
        // And showing correctly the transitions
        setTimeout(()=>{
            setVisible(true);
        }, 250);
    }, [
        matrix
    ]);
    const handleUpdate = ()=>{
        setVisible(false);
        setMatrixState(runJumpMatrix());
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(README, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Facts"
            }),
            moves != null && tries != null && matrix != null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                children: "Total tries:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                children: tries
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                children: "Average moves:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                children: moves / tries
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("table", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                            children: matrix.getMatrix().map((row, index)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                    children: row.map((col, colIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            className: external_classnames_default()({
                                                [(JumpMatrix_module_default()).cell]: true,
                                                [(JumpMatrix_module_default()).cell__visible]: visible
                                            }),
                                            "data-c": col,
                                            children: col
                                        }, `${col}-${colIndex}`))
                                }, `${row.toString()}-${index}`))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: handleUpdate,
                    children: "More magic please"
                })
            })
        ]
    });
};
/* harmony default export */ const apps_JumpMatrix_JumpMatrix = (JumpMatrix_JumpMatrix);


/***/ }),

/***/ 1225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_JumpMatrix_JumpMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5525);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_JumpMatrix_JumpMatrix__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/vietnam");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(1225)));
module.exports = __webpack_exports__;

})();